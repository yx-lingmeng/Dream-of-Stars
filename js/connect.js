import { lib, game, ui, get, ai, _status } from "noname";

//禁止默认昵称（无名玩家 / 请修改昵称 / 点击修改昵称）加入房间
//十周年UI 会在联机昵称前加 ※ 作为“已装该扩展”的标记（懒人包改名时也会补），比对前先剥掉，
//否则 ※无名玩家 这类带前缀的默认昵称能直接绕过名单
//这里以及下面所有"包一层核心方法"的写法都要遵守同一条约束：包装函数可能被联机沙盒按源码重建，
//函数体里不能引用模块作用域变量——原函数挂到对象上、常量写在函数内部
if (typeof lib.message?.server?.init == "function") {
	Object.defineProperty(lib.message.server, "_xzmOriginInit", { configurable: true, writable: true, value: lib.message.server.init });
	lib.message.server.init = function (version, config, banned_info) {
		const bannedDefaultNicknames = ["无名玩家", "请修改昵称", "点击修改昵称"];
		//只剥开头连续的 ※ 和紧随其后的空白；昵称中间的符号不动，正常玩家不受影响
		const nickname = (config && typeof config.nickname == "string" ? config.nickname : "").replace(/^[\s\u3000]*※+[\s\u3000]*/, "").trim();
		//版本或扩展检查不通过时交给本体提示，避免用昵称提示掩盖真正原因
		const baseAllowed = version == lib.versionOL && !(get.config("check_versionLocal", "connect") && config && config.versionLocal != lib.version) && !(get.config("check_extension", "connect") && config && config.extension);
		if (baseAllowed && lib.config.extension_星之梦_banDefaultNickname && (!config || !nickname || bannedDefaultNicknames.includes(nickname)) && !(config && config.id && lib.playerOL && lib.playerOL[config.id])) {
			this.send("denied", "加入失败，请修改联机模式的默认昵称后加入。");
			lib.node.clients.remove(this);
			this.closed = true;
			return;
		}
		return lib.message.server._xzmOriginInit.call(this, version, config, banned_info);
	};
}

if (lib.config.extension_星之梦_lianji) {
	//聊天
	lib.translate.hehua = "荷花";
	lib.translate.yanhua = "烟花";
	lib.translate.denglong = "灯笼";
	lib.translate.snow = "雪球";
	lib.translate.flowerSpam = "连续鲜花";
	lib.translate.eggSpam = "连续鸡蛋";
	lib.translate.wineSpam = "连续酒杯";
	lib.translate.shoeSpam = "连续拖鞋";
	//联机单人开房
	ui.create.connectPlayers = function (ip) {
		ui.updateConnectPlayerPositions();
		game.connectPlayers = [];
		const configOL = lib.configOL;
		const numberOfPlayers = parseInt(configOL.player_number) || configOL.number;
		for (let position = 0; position < numberOfPlayers; position++) {
			const player = ui.create.player(ui.window);
			player.dataset.position = position;
			player.classList.add("connect");
			game.connectPlayers.push(player);
		}

		var bar = ui.create.div(ui.window);
		bar.style.height = "20px";
		bar.style.width = "80%";
		bar.style.left = "10%";
		bar.style.top = "calc(200% / 7 - 120px + 5px)";
		bar.style.textAlign = "center";
		var ipbar = ui.create.div(".shadowed", ip, bar);
		ipbar.style.padding = "4px";
		ipbar.style.borderRadius = "2px";
		ipbar.style.position = "relative";

		var button = ui.create.div(".menubutton.large.highlight.connectbutton.connectbutton1.pointerdiv", game.online ? "退出联机" : "开始游戏", ui.window, function () {
			if (button.clicked) {
				return;
			}
			if (game.online) {
				if (game.onlinezhu) {
					game.send("startGame");
				} else {
					game.saveConfig("tmp_owner_roomId");
					game.saveConfig("tmp_user_roomId");
					game.saveConfig("reconnect_info");
					game.reload();
				}
			} else {
				// var num = 0;
				// for (var i of game.connectPlayers) {
				// 	if (!i.nickname && !i.classList.contains("unselectable2")) {
				// 		num++;
				// 	}
				// }
				// if (num >= lib.configOL.number - 1) {
				// 	alert("至少要有两名玩家才能开始游戏！");
				// 	return;
				// }
				game.resume();
			}
			button.delete();
			bar.delete();
			shareButton.delete();
			delete ui.connectStartButton;
			delete ui.connectStartBar;
			delete ui.connectShareButton;
			button.clicked = true;
		});

		var shareButton = ui.create.div(".menubutton.large.highlight.connectbutton.connectbutton2.pointerdiv", "分享房间", ui.window, function () {
			var text = `无名杀-联机-${lib.translate[get.mode()]}-${game.connectPlayers.filter(p => p.avatar).length}/${game.connectPlayers.filter(p => !p.classList.contains("unselectable2")).length}\n${get.connectNickname()}邀请你加入${game.roomId}房间\n联机地址:${game.ip}\n请先通过游戏内菜单-开始-联机中启用“读取邀请链接”选项`;
			window.focus();
			const fallbackCopyTextToClipboard = function (text) {
				const textArea = document.createElement("textarea");
				textArea.value = text;
				textArea.style.position = "fixed";
				textArea.style.top = "0";
				textArea.style.left = "0";
				textArea.style.width = "1px";
				textArea.style.height = "1px";
				textArea.style.padding = "0";
				textArea.style.border = "none";
				textArea.style.outline = "none";
				textArea.style.boxShadow = "none";
				textArea.style.background = "transparent";
				document.body.appendChild(textArea);
				textArea.focus();
				textArea.select();
				try {
					const successful = document.execCommand("copy");
					if (!successful) {
						console.error("Unable to copy using execCommand");
						game.promises.prompt(`###分享内容复制失败，请自行复制以下内容###${text}`, true);
					} else {
						game.alert("分享内容复制成功");
					}
				} catch (err) {
					console.error("Unable to copy using execCommand:", err);
				}
				document.body.removeChild(textArea);
			};
			if ("clipboard" in navigator) {
				navigator.clipboard
					.writeText(text)
					.then(() => {
						game.alert("分享内容复制成功");
					})
					.catch(() => {
						fallbackCopyTextToClipboard(text);
					});
			} else {
				fallbackCopyTextToClipboard(text);
			}
		});

		ui.connectStartButton = button;
		ui.connectStartBar = bar;
		ui.connectShareButton = shareButton;
	};
	//连续交互：玩家信息卡改为在核心实现上追加，不再整段复制 get.nodeintro
	Object.defineProperty(get, "_xzmOriginNodeintro", { configurable: true, writable: true, value: get.nodeintro });
	get.nodeintro = function (node, simple, evt, uiintro) {
		//核心遍历 node.marks 时没有判空，先把已失效的标记节点清掉（旧版这里是逐条 ?. 跳过）
		const target = node && node.linkplayer ? node.link : node;
		if (target && target.marks) {
			for (const key in target.marks) {
				if (!target.marks[key]) delete target.marks[key];
			}
		}
		const result = get._xzmOriginNodeintro.call(this, node, simple, evt, uiintro);
		//自定义介绍、非玩家节点或核心提前返回时都不追加
		if (!result || !result.content || !target || !target.classList || !target.classList.contains("player")) return result;
		if (node._customintro) return result;
		const content = result.content;
		//查看手牌：核心把这段注释掉了，这里补在技能列表之前
		const hasHandcard = Array.from(content.querySelectorAll(".caption")).some(capt => /^(明置的手牌|其他手牌|手牌)$/.test(capt.textContent.trim()));
		if (!target.noclick && !hasHandcard) {
			const shownHs = target.getShownCards();
			const allShown = target.isUnderControl() || (!game.observe && game.me && game.me.hasSkillTag("viewHandcard", null, target, true));
			//核心把技能块写进 .caption 的 innerHTML，.skill 不是 content 的直接子节点，
			//而 insertBefore 的参照节点必须与新节点同父，所以先回溯到 content 的直接子节点
			let refBlock = content.querySelector(".skill");
			while (refBlock && refBlock.parentNode != content) refBlock = refBlock.parentNode;
			if (refBlock && refBlock.parentNode != content) refBlock = null;
			const insert = item => {
				//add 返回的是它加进去的节点，addSmall 返回的却是牌数组（节点已追加到 content 末尾），
				//所以返回值不是节点时取 content 的最后一个子节点
				const node = item instanceof Node ? item : content.lastChild;
				if (!node || node.parentNode != content) return;
				if (refBlock) content.insertBefore(node, refBlock);
			};
			if (shownHs.length) {
				insert(result.add('<div class="text center">明置的手牌</div>'));
				insert(result.addSmall(shownHs));
				if (allShown) {
					const hs = target.getCards("h");
					hs.removeArray(shownHs);
					if (hs.length) {
						insert(result.add('<div class="text center">其他手牌</div>'));
						insert(result.addSmall(hs));
					}
				}
			} else if (allShown) {
				const hs = target.getCards("h");
				if (hs.length) {
					insert(result.add('<div class="text center">手牌</div>'));
					insert(result.addSmall(hs));
				}
			}
		}
		//连续交互（砸蛋）：追加在核心的交互表情表之后
		if (!game.observe && _status.gameStarted && game.me && target != game.me) {
			ui.throwEmotion ??= [];
			const click2 = function () {
				if (_status.dragged) return;
				if (_status.justdragged) return;
				if (_status.throwEmotionWait) return;
				const emotion = this.link.slice(0, -4);
				if (game.online) {
					game.send("throwEmotion", target, emotion);
				} else {
					game.me.throwEmotion(target, emotion);
				}
				result._close();
				_status.throwEmotionWait = true;
				setTimeout(
					function () {
						_status.throwEmotionWait = false;
						if (ui.throwEmotion) {
							for (const i of ui.throwEmotion) i.classList.remove("exclude");
						}
					},
					emotion == "flower" || emotion == "egg" ? 500 : 5000
				);
				for (let i = 0; i < 15; i++) {
					setTimeout(function () {
						if (game.online) {
							game.send("throwEmotion", target, emotion);
						} else {
							game.me.throwEmotion(target, emotion);
						}
					}, 125 * (i + 1));
				}
			};
			const table = ui.create.div(".add-setting");
			table.style.margin = "0";
			table.style.width = "100%";
			table.style.position = "relative";
			for (const tag of ["flowerSpam", "eggSpam", "wineSpam", "shoeSpam"]) {
				const td = ui.create.div(".menubutton.reduce_radius.pointerdiv.tdnode");
				table.appendChild(td);
				ui.throwEmotion.add(td);
				if (_status.throwEmotionWait) td.classList.add("exclude");
				td.link = tag;
				td.innerHTML = "<span>" + get.translation(tag) + "</span>";
				td.addEventListener(lib.config.touchscreen ? "touchend" : "click", click2);
			}
			const tables = content.querySelectorAll(".add-setting");
			if (tables.length) content.insertBefore(table, tables[tables.length - 1].nextSibling);
			else content.appendChild(table);
		}
		return result;
	};
	//特殊字体
	lib.element.player.chat = function (str) {
		if (get.is.banWords(str)) return;
		//URC addition
		if (str[0] == "/") {
			var chat = str.slice(1);
			if (chat.indexOf(" ") != -1) {
				chat = chat.split(" ");
				var func = chat.shift();
				if (func == "playAudio" && chat.length) {
					var directory = chat.shift();
					if ((directory == "die" || directory == "skill") && chat.length) {
						var filename = chat.shift();
						game.broadcastAll(
							function (directory, filename) {
								game.playAudio(directory, filename);
							},
							directory,
							filename
						);
						if (chat.length) {
							str = chat.join(" ");
						} else {
							var translation = filename;
							while (translation == get.translation(translation) && translation.length) {
								translation = translation.slice(0, -1);
							}
							str = translation.length ? get.translation(translation) : filename;
						}
					}
				}
			}
		}
		//URC addition end
		this.say(str);
		game.broadcast(
			function (id, str) {
				if (lib.playerOL[id]) {
					lib.playerOL[id].say(str);
				} else if (game.connectPlayers) {
					for (var i = 0; i < game.connectPlayers.length; i++) {
						if (game.connectPlayers[i].playerid == id) {
							game.connectPlayers[i].say(str);
							return;
						}
					}
				}
			},
			this.playerid,
			str
		);
	};
}
//表情大小：发送端决定所有人尺寸
//say 只在本机发送 emotion 时改写尺寸；emotion 包一层，在广播前把尺寸写进字符串
//原函数挂到 lib.element.player 上、状态写在 _status 里，包装函数不引用任何模块作用域变量
if (typeof lib.element.player.say == "function") {
	Object.defineProperty(lib.element.player, "_xzmOriginSay", { configurable: true, writable: true, value: lib.element.player.say });
	lib.element.player.say = function (str) {
		const emotionsize = lib.config.extension_星之梦_emotionsize || 50;
		if (_status.xzmEmotionLocal && emotionsize != 50 && typeof str == "string" && str.includes("image/emotion/")) {
			str = str.replace(/width="50" height="50"/g, `width="${emotionsize}" height="${emotionsize}"`);
		}
		return lib.element.player._xzmOriginSay.call(this, str);
	};
}
if (typeof lib.element.player.emotion == "function") {
	Object.defineProperty(lib.element.player, "_xzmOriginEmotion", { configurable: true, writable: true, value: lib.element.player.emotion });
	lib.element.player.emotion = function (pack, id) {
		const emotionsize = lib.config.extension_星之梦_emotionsize || 50;
		if (emotionsize == 50) return lib.element.player._xzmOriginEmotion.call(this, pack, id);
		//只在本次 emotion 调用期间接管广播，把发给所有人的字符串改成发送端的尺寸
		const originBroadcast = game.broadcast;
		game.broadcast = function (func, ...args) {
			for (let i = 0; i < args.length; i++) {
				const value = args[i];
				if (typeof value == "string" && value.includes("image/emotion/")) {
					args[i] = value.replace(/width="50" height="50"/g, `width="${emotionsize}" height="${emotionsize}"`);
				}
			}
			return originBroadcast.call(this, func, ...args);
		};
		_status.xzmEmotionLocal = true;
		try {
			return lib.element.player._xzmOriginEmotion.call(this, pack, id);
		} finally {
			_status.xzmEmotionLocal = false;
			game.broadcast = originBroadcast;
		}
	};
}
//转换技换肤兜底：核心技能里的 changeSkin 是按武将ID匹配的（如 dc_sb_xunyu），
//扩展武将（old_dc_sb_xunyu）匹配不上会让换肤与 shadow 语音静默失效，这里补上本体名的匹配
//重做 / 改造版的武将名前缀，需要时往这里加
Object.defineProperty(lib.element.player, "_xzmOriginChangeSkin", { configurable: true, writable: true, value: lib.element.player.changeSkin });
lib.element.player.changeSkin = function (map, character) {
	//重做 / 改造版的武将名前缀
	const skinNamePrefix = /^(?:oldx?_|hfdiy_)/;
	if (map && typeof map == "object" && typeof map.characterName == "string" && typeof character == "string") {
		const target = map.characterName;
		map = (player, name) => {
			const value = player[name] || "";
			//本身同名（核心武将、扩展自己写的 old_xxx）或去掉前缀后与本体同名都算命中
			return value === target || value.replace(skinNamePrefix, "") === target;
		};
	}
	return lib.element.player._xzmOriginChangeSkin.call(this, map, character);
};
