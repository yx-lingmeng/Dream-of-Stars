import { lib, game, ui, get, ai, _status } from "noname";
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
	//连续交互
	get.nodeintro = function (node, simple, evt, uiintro) {
		var uiintro = uiintro ?? ui.create.dialog("hidden", "notouchscroll");
		uiintro.setAttribute("id", "nodeintro");
		if (node.classList.contains("player") && !node.name) {
			return uiintro;
		}
		var i, translation, intro, str;
		if (node._nointro) {
			return;
		}
		let created = false;
		const createButtons = function (nameskin, avatarSetter) {
			const srcBase = get.skinPath(nameskin);
			if (!srcBase) {
				return;
			}
			game.getFileList(
				srcBase,
				(folders, files) => {
					if (!files.length) {
						return;
					}
					if (!created) {
						created = true;
						uiintro.add('<div class="text center">更改皮肤</div>');
					}
					const avatars = ui.create.div(".buttons.smallzoom.scrollbuttons");
					lib.setMousewheel(avatars);
					uiintro.add(avatars);
					const originButton = ui.create.div(".button.character.pointerdiv", avatars, function () {
						delete lib.config.skin[nameskin];
						if (lib.characterSubstitute[nameskin]) {
							for (const list of lib.characterSubstitute[nameskin]) delete lib.config.skin[list[0]];
						}
						avatarSetter("origin");
						game.saveConfig("skin", lib.config.skin);
					});
					originButton.setBackground(nameskin, "character", "noskin");
					const originSkin = ui.create.caption(`<div class="text" data-nature=shenmm style="font-size: 12px">经典形象</div>`, originButton);
					originSkin.style.left = "1px";
					originSkin.style.bottom = "-1px";
					files.forEach(file => {
						const src = `${srcBase}${file}`,
							skinname = file;
						const button = ui.create.div(".button.character.pointerdiv", avatars, function () {
							lib.config.skin[nameskin] = [skinname, src];
							if (lib.characterSubstitute[nameskin]) {
								for (const list of lib.characterSubstitute[nameskin]) {
									const sub = list[0],
										[fold, prefix] = skinname.split(".");
									lib.config.skin[sub] = [skinname, `${srcBase}${fold}/${sub}.${prefix}`];
								}
							}
							avatarSetter(src);
							game.saveConfig("skin", lib.config.skin);
						});
						button.setBackgroundImage(src);
						const skinCaption = ui.create.caption(`<div class="text" data-nature=shenmm style="font-size: 12px">${get.translation(skinname.slice(0, -4))}</div>`, button);
						skinCaption.style.left = "1px";
						skinCaption.style.bottom = "-1px";
					});
				},
				() => {}
			);
		};
		if (typeof node._customintro == "function") {
			if (node._customintro(uiintro, evt) === false) {
				return;
			}
			if (evt) {
				lib.placePoppedDialog(uiintro, evt);
			}
		} else if (Array.isArray(node._customintro)) {
			var caption = node._customintro[0];
			var content = node._customintro[1];
			if (typeof caption == "function") {
				caption = caption(node);
			}
			if (typeof content == "function") {
				content = content(node);
			}
			uiintro.add(caption);
			uiintro.add('<div class="text center" style="padding-bottom:5px">' + content + "</div>");
		} else if (node.classList.contains("player") || node.linkplayer) {
			if (node.linkplayer) {
				node = node.link;
			}
			let capt = get.translation(node.name);
			const characterInfo = get.character(node.name),
				sex = node.sex || characterInfo[0];
			if (sex && sex != "unknown" && lib.config.show_sex) {
				capt += `&nbsp;&nbsp;${sex == "none" ? "无" : get.translation(sex)}`;
			}
			const group = node.group;
			if (group && group != "unknown" && lib.config.show_group) {
				capt += `&nbsp;&nbsp;${get.translation(group)}`;
			}
			uiintro.add(capt);

			if (lib.characterTitle[node.name]) {
				uiintro.addText(get.colorspan(lib.characterTitle[node.name]));
			}

			if (lib.characterAppend[node.name]) {
				uiintro.addText(get.colorspan(lib.characterAppend[node.name]));
			}

			if (lib.config.show_sortPack) {
				for (let packname in lib.characterPack) {
					if (node.name in lib.characterPack[packname]) {
						let pack = lib.translate[packname + "_character_config"],
							sort;
						if (lib.characterSort[packname]) {
							let sorted = lib.characterSort[packname];
							for (let sortname in sorted) {
								if (sorted[sortname].includes(node.name)) {
									sort = `<span style = "font-size:small">${lib.translate[sortname]}</span>`;
									break;
								}
							}
						}
						const sortPack = document.createElement("div");
						sortPack.innerHTML = `${pack}${sort ? `<br>[${sort}]` : ""}`;
						sortPack.appendChild(document.createElement("hr"));
						sortPack.insertBefore(document.createElement("hr"), sortPack.firstChild);
						uiintro.add(sortPack);
						break;
					}
				}
			}

			if (get.characterInitFilter(node.name)) {
				const initFilters = get.characterInitFilter(node.name).filter(tag => {
					if (!lib.characterInitFilter[node.name]) {
						return true;
					}
					return lib.characterInitFilter[node.name](tag) !== false;
				});
				if (initFilters.length) {
					const str = initFilters.reduce((strx, stry) => strx + lib.InitFilter[stry] + "<br>", "").slice(0, -4);
					uiintro.addText(str);
				}
			}

			if (!node.noclick) {
				const allShown = node.isUnderControl() || (!game.observe && game.me && game.me.hasSkillTag("viewHandcard", null, node, true));
				const shownHs = node.getShownCards();
				if (shownHs.length) {
					uiintro.add('<div class="text center">明置的手牌</div>');
					uiintro.addSmall(shownHs);
					if (allShown) {
						var hs = node.getCards("h");
						hs.removeArray(shownHs);
						if (hs.length) {
							uiintro.add('<div class="text center">其他手牌</div>');
							uiintro.addSmall(hs);
						}
					}
				} else if (allShown) {
					var hs = node.getCards("h");
					if (hs.length) {
						uiintro.add('<div class="text center">手牌</div>');
						uiintro.addSmall(hs);
					}
				}
			}

			var skills = node.getSkills(null, false, false).slice(0);
			var skills2 = game.filterSkills(skills, node);
			if (node == game.me && node.hiddenSkills.length) {
				skills.addArray(node.hiddenSkills);
			}
			for (var i in node.disabledSkills) {
				if (node.disabledSkills[i].length == 1 && node.disabledSkills[i][0] == i + "_awake" && !node.hiddenSkills.includes(i)) {
					skills.add(i);
				}
			}
			for (i = 0; i < skills.length; i++) {
				if (lib.skill[skills[i]] && (lib.skill[skills[i]].nopop || lib.skill[skills[i]].equipSkill)) {
					continue;
				}
				if (lib.translate[skills[i] + "_info"]) {
					if (lib.translate[skills[i] + "_ab"]) {
						translation = lib.translate[skills[i] + "_ab"];
					} else {
						translation = get.translation(skills[i]);
						if (!lib.skill[skills[i]].nobracket) {
							translation = `【${translation.slice(0, 2)}】`;
						}
					}

					if (node.forbiddenSkills[skills[i]]) {
						var forbidstr = '<div style="opacity:0.5"><div class="skill">' + translation + "</div><div>";
						if (node.forbiddenSkills[skills[i]].length) {
							forbidstr += "（与" + get.translation(node.forbiddenSkills[skills[i]]) + "冲突）<br>";
						} else {
							forbidstr += "（双将禁用）<br>";
						}
						forbidstr += get.skillInfoTranslation(skills[i], node, false) + "</div></div>";
						uiintro.add(forbidstr);
					} else if (!skills2.includes(skills[i])) {
						if (lib.skill[skills[i]].preHidden && get.mode() == "guozhan") {
							uiintro.add('<div><div class="skill" style="opacity:0.5">' + translation + '</div><div><span style="opacity:0.5">' + get.skillInfoTranslation(skills[i], node, false) + '</span><br><div class="underlinenode on gray" style="position:relative;padding-left:0;padding-top:7px">预亮技能</div></div></div>');
							var underlinenode = uiintro.content.lastChild.querySelector(".underlinenode");
							if (_status.prehidden_skills.includes(skills[i])) {
								underlinenode.classList.remove("on");
							}
							underlinenode.link = skills[i];
							underlinenode.listen(ui.click.hiddenskill);
						} else {
							uiintro.add('<div style="opacity:0.5"><div class="skill">' + translation + "</div><div>" + get.skillInfoTranslation(skills[i], node, false) + "</div></div>");
						}
					} else if (lib.skill[skills[i]].temp || !node.skills.includes(skills[i]) || lib.skill[skills[i]].thundertext) {
						if (lib.skill[skills[i]].frequent || lib.skill[skills[i]].subfrequent) {
							uiintro.add('<div><div class="skill thundertext thunderauto">' + translation + '</div><div class="thundertext thunderauto">' + get.skillInfoTranslation(skills[i], node, false) + '<br><div class="underlinenode on gray" style="position:relative;padding-left:0;padding-top:7px">自动发动</div></div></div>');
							var underlinenode = uiintro.content.lastChild.querySelector(".underlinenode");
							if (lib.skill[skills[i]].frequent) {
								if (lib.config.autoskilllist.includes(skills[i])) {
									underlinenode.classList.remove("on");
								}
							}
							if (lib.skill[skills[i]].subfrequent) {
								for (var j = 0; j < lib.skill[skills[i]].subfrequent.length; j++) {
									if (lib.config.autoskilllist.includes(skills[i] + "_" + lib.skill[skills[i]].subfrequent[j])) {
										underlinenode.classList.remove("on");
									}
								}
							}
							if (lib.config.autoskilllist.includes(skills[i])) {
								underlinenode.classList.remove("on");
							}
							underlinenode.link = skills[i];
							underlinenode.listen(ui.click.autoskill2);
						} else {
							uiintro.add('<div><div class="skill thundertext thunderauto">' + translation + '</div><div class="thundertext thunderauto">' + get.skillInfoTranslation(skills[i], node, false) + "</div></div>");
						}
					} else if (lib.skill[skills[i]].frequent || lib.skill[skills[i]].subfrequent) {
						uiintro.add('<div><div class="skill">' + translation + "</div><div>" + get.skillInfoTranslation(skills[i], node, false) + '<br><div class="underlinenode on gray" style="position:relative;padding-left:0;padding-top:7px">自动发动</div></div></div>');
						var underlinenode = uiintro.content.lastChild.querySelector(".underlinenode");
						if (lib.skill[skills[i]].frequent) {
							if (lib.config.autoskilllist.includes(skills[i])) {
								underlinenode.classList.remove("on");
							}
						}
						if (lib.skill[skills[i]].subfrequent) {
							for (var j = 0; j < lib.skill[skills[i]].subfrequent.length; j++) {
								if (lib.config.autoskilllist.includes(skills[i] + "_" + lib.skill[skills[i]].subfrequent[j])) {
									underlinenode.classList.remove("on");
								}
							}
						}
						if (lib.config.autoskilllist.includes(skills[i])) {
							underlinenode.classList.remove("on");
						}
						underlinenode.link = skills[i];
						underlinenode.listen(ui.click.autoskill2);
					} else if (lib.skill[skills[i]].clickable && node.isIn() && node.isUnderControl(true)) {
						var intronode = uiintro.add('<div><div class="skill">' + translation + "</div><div>" + get.skillInfoTranslation(skills[i], node, false) + '<br><div class="menubutton skillbutton" style="position:relative;margin-top:5px">点击发动</div></div></div>').querySelector(".skillbutton");
						if (!_status.gameStarted || (lib.skill[skills[i]].clickableFilter && !lib.skill[skills[i]].clickableFilter(node))) {
							intronode.classList.add("disabled");
							intronode.style.opacity = 0.5;
						} else {
							intronode.link = node;
							intronode.func = lib.skill[skills[i]].clickable;
							intronode.classList.add("pointerdiv");
							intronode.listen(() => uiintro.close());
							intronode.listen(ui.click.skillbutton);
						}
					} else {
						uiintro.add('<div><div class="skill">' + translation + "</div><div>" + get.skillInfoTranslation(skills[i], node, false) + "</div></div>");
					}
					if (lib.translate[skills[i] + "_append"]) {
						uiintro._place_text = uiintro.add('<div class="text">' + lib.translate[skills[i] + "_append"] + "</div>");
					}
				}
			}
			// if(get.is.phoneLayout()){
			// 	var storage=node.storage;
			// 	for(i in storage){
			// 		if(get.info(i)&&get.info(i).intro){
			// 			intro=get.info(i).intro;
			// 			if(node.getSkills().concat(lib.skill.global).includes(i)==false&&!intro.show) continue;
			// 			var name=intro.name?intro.name:get.translation(i);
			// 			if(typeof name=='function'){
			// 				name=name(storage[i],node);
			// 			}
			// 			translation='<div><div class="skill">『'+name.slice(0,2)+'』</div><div>';
			// 			var stint=get.storageintro(intro.content,storage[i],node,null,i);
			// 			if(stint){
			// 				translation+=stint+'</div></div>';
			// 				uiintro.add(translation);
			// 			}
			// 		}
			// 	}
			// }

			if (lib.config.right_range && _status.gameStarted) {
				uiintro.add(ui.create.div(".placeholder"));
				var table, tr, td;
				table = document.createElement("table");
				tr = document.createElement("tr");
				table.appendChild(tr);
				td = document.createElement("td");
				td.innerHTML = "距离";
				tr.appendChild(td);
				td = document.createElement("td");
				td.innerHTML = "手牌";
				tr.appendChild(td);
				td = document.createElement("td");
				td.innerHTML = "行动";
				tr.appendChild(td);
				td = document.createElement("td");
				td.innerHTML = "伤害";
				tr.appendChild(td);

				tr = document.createElement("tr");
				table.appendChild(tr);
				td = document.createElement("td");
				if (node == game.me || !game.me || !game.me.isIn()) {
					td.innerHTML = "-";
				} else {
					var dist1 = get.numStr(Math.max(1, game.me.distanceTo(node)));
					var dist2 = get.numStr(Math.max(1, node.distanceTo(game.me)));
					if (dist1 == dist2) {
						td.innerHTML = dist1;
					} else {
						td.innerHTML = dist1 + "/" + dist2;
					}
				}
				tr.appendChild(td);
				td = document.createElement("td");
				let handcardLimit = node.getHandcardLimit();
				td.innerHTML = `${node.countCards("h")}/${handcardLimit >= 114514 ? "∞" : handcardLimit}`;
				tr.appendChild(td);
				td = document.createElement("td");
				td.innerHTML = node.phaseNumber;
				tr.appendChild(td);
				td = document.createElement("td");

				(function () {
					let num = 0;
					for (var j = 0; j < node.stat.length; j++) {
						if (typeof node.stat[j].damage == "number") {
							num += node.stat[j].damage;
						}
					}
					td.innerHTML = num;
				})();
				tr.appendChild(td);
				table.style.width = "calc(100% - 20px)";
				table.style.marginLeft = "10px";

				uiintro.content.appendChild(table);
				if (!lib.config.show_favourite) {
					table.style.paddingBottom = "5px";
				}
			}
			if (!simple || get.is.phoneLayout()) {
				var es = node.getCards("e");
				for (var i = 0; i < es.length; i++) {
					const special = [es[i]].concat(es[i].cards || []).find(j => j.name == es[i].name && lib.card[j.name]?.cardPrompt);
					var str = special ? lib.card[special.name].cardPrompt(special, node) : lib.translate[es[i].name + "_info"];
					uiintro.add('<div><div class="skill">' + es[i].outerHTML + "</div><div>" + str + "</div></div>");
					uiintro.content.lastChild.querySelector(".skill>.card").style.transform = "";

					if (lib.translate[es[i].name + "_append"]) {
						uiintro.add('<div class="text">' + lib.translate[es[i].name + "_append"] + "</div>");
					}
				}
				var js = node.getCards("j");
				for (var i = 0; i < js.length; i++) {
					const Vcard = js[i][js[i].cardSymbol];
					if (js[i].viewAs && Vcard.cards.length == 1 && js[i].viewAs != Vcard.cards[0].name) {
						let html = Vcard.cards[0].outerHTML;
						let cardInfo = lib.card[js[i].viewAs],
							showCardIntro = true;
						if (cardInfo.blankCard) {
							var cardOwner = get.owner(js[i]);
							if (cardOwner && !cardOwner.isUnderControl(true)) {
								showCardIntro = false;
							}
						}
						if (!showCardIntro) {
							html = ui.create.button(js[i], "blank").outerHTML;
						}
						uiintro.add(`<div><div class="skill">${html}</div><div>${lib.translate[js[i].viewAs]}：${lib.card[js[i].viewAs]?.cardPrompt?.(js[i], node) || lib.translate[`${js[i].viewAs}_info`]}</div></div>`);
					} else {
						uiintro.add(`<div><div class="skill">${js[i].outerHTML}</div><div>${lib.translate[js[i].name]}：${lib.card[js[i].name]?.cardPrompt?.(js[i], node) || lib.translate[`${js[i].name}_info`]}</div></div>`);
					}
					uiintro.content.lastChild.querySelector(".skill>.card").style.transform = "";
				}
				if (get.is.phoneLayout()) {
					var markCoutainer = ui.create.div(".mark-container.marks");
					for (var i in node.marks) {
						var nodemark = node.marks[i]?.cloneNode(true);
						if (!nodemark) continue;
						nodemark.classList.add("pointerdiv");
						nodemark.link = node.marks[i];
						nodemark.style.transform = "";
						markCoutainer.appendChild(nodemark);
						nodemark.listen(function () {
							uiintro.noresume = true;
							var rect = this.link.getBoundingClientRect();
							ui.click.intro.call(this.link, {
								clientX: rect.left + rect.width,
								clientY: rect.top + rect.height / 2,
							});
							if (lib.config.touchscreen) {
								uiintro._close();
							}
						});
					}
					if (markCoutainer.childElementCount) {
						uiintro.addText("标记");
						uiintro.add(markCoutainer);
					}
				}
			}
			if (!game.observe && _status.gameStarted && game.me && node != game.me) {
				ui.throwEmotion = [];
				uiintro.addText("发送交互表情");
				var click = function () {
					if (_status.dragged) {
						return;
					}
					if (_status.justdragged) {
						return;
					}
					if (_status.throwEmotionWait) {
						return;
					}
					var emotion = this.link;
					if (game.online) {
						game.send("throwEmotion", node, emotion);
					} else {
						game.me.throwEmotion(node, emotion);
					}
					uiintro._close();
					_status.throwEmotionWait = true;
					setTimeout(
						function () {
							_status.throwEmotionWait = false;
							if (ui.throwEmotion) {
								for (var i of ui.throwEmotion) {
									i.classList.remove("exclude");
								}
							}
						},
						emotion == "flower" || emotion == "egg" ? 500 : 5000
					);
				};
				//连续交互
				var click2 = function () {
					if (_status.dragged) return;
					if (_status.justdragged) return;
					if (_status.throwEmotionWait) return;
					var emotion = this.link.slice(0, -4);
					if (game.online) {
						game.send("throwEmotion", node, emotion);
					} else game.me.throwEmotion(node, emotion);
					uiintro._close();
					_status.throwEmotionWait = true;
					setTimeout(
						function () {
							_status.throwEmotionWait = false;
							if (ui.throwEmotion) {
								for (var i of ui.throwEmotion) i.classList.remove("exclude");
							}
						},
						emotion == "flower" || emotion == "egg" ? 500 : 5000
					);
					for (var i = 0; i < 15; i++) {
						setTimeout(
							function () {
								if (game.online) {
									game.send("throwEmotion", node, emotion);
								} else game.me.throwEmotion(node, emotion);
							},
							125 * (i + 1)
						);
					}
				};
				//结束
				var td;
				var table = document.createElement("div");
				table.classList.add("add-setting");
				table.style.margin = "0";
				table.style.width = "100%";
				table.style.position = "relative";
				var listi = ["flower", "egg"];
				for (var i = 0; i < listi.length; i++) {
					td = ui.create.div(".menubutton.reduce_radius.pointerdiv.tdnode");
					ui.throwEmotion.add(td);
					if (_status.throwEmotionWait) {
						td.classList.add("exclude");
					}
					td.link = listi[i];
					table.appendChild(td);
					td.innerHTML = "<span>" + get.translation(listi[i]) + "</span>";
					td.addEventListener(lib.config.touchscreen ? "touchend" : "click", click);
				}
				uiintro.content.appendChild(table);
				table = document.createElement("div");
				table.classList.add("add-setting");
				table.style.margin = "0";
				table.style.width = "100%";
				table.style.position = "relative";
				var listi = ["wine", "shoe"];
				if (game.me.storage.zhuSkill_shanli) {
					listi = ["yuxisx", "jiasuo"];
				}
				for (var i = 0; i < listi.length; i++) {
					td = ui.create.div(".menubutton.reduce_radius.pointerdiv.tdnode");
					ui.throwEmotion.add(td);
					if (_status.throwEmotionWait) {
						td.classList.add("exclude");
					}
					td.link = listi[i];
					table.appendChild(td);
					td.innerHTML = "<span>" + get.translation(listi[i]) + "</span>";
					td.addEventListener(lib.config.touchscreen ? "touchend" : "click", click);
				}
				uiintro.content.appendChild(table);
				//连续交互
				var table = document.createElement("div");
				table.classList.add("add-setting");
				table.style.margin = "0";
				table.style.width = "100%";
				table.style.position = "relative";
				var listi = ["flowerSpam", "eggSpam", "wineSpam", "shoeSpam"];
				for (var i = 0; i < listi.length; i++) {
					td = ui.create.div(".menubutton.reduce_radius.pointerdiv.tdnode");
					ui.throwEmotion.add(td);
					if (_status.throwEmotionWait) td.classList.add("exclude");
					td.link = listi[i];
					table.appendChild(td);
					td.innerHTML = "<span>" + get.translation(listi[i]) + "</span>";
					td.addEventListener(lib.config.touchscreen ? "touchend" : "click", click2);
				}
				uiintro.content.appendChild(table);
				//结束
			}
			var modepack = lib.characterPack["mode_" + get.mode()];
			if (lib.config.show_favourite && lib.character[node.name] && game.players.includes(node) && (!modepack || !modepack[node.name]) && (!simple || get.is.phoneLayout())) {
				var addFavourite = ui.create.div(".text.center.pointerdiv");
				addFavourite.link = node.name;
				addFavourite.style.marginRight = "15px";
				if (lib.config.favouriteCharacter.includes(node.name)) {
					addFavourite.innerHTML = "移除收藏";
				} else {
					addFavourite.innerHTML = "添加收藏";
				}
				addFavourite.listen(ui.click.favouriteCharacter);
				uiintro.add(addFavourite);
			}
			if (!simple || get.is.phoneLayout()) {
				if (!node.name.startsWith("unknown")) {
					let viewInfo = ui.create.div(".text.center.pointerdiv");
					viewInfo.link = node;
					viewInfo.innerHTML = "查看资料";
					viewInfo.listen(function () {
						let player = this.link;
						let audioName = player.skin.name || player.name1 || player.name;
						ui.click.charactercard(player.name1 || player.name, null, null, true, player.node.avatar, audioName);
					});
					uiintro.add(viewInfo);
				}
			}
			if ((lib.config.change_skin || lib.skin) && (!simple || get.is.phoneLayout())) {
				[node.name1, node.name2].forEach((nameskin, index) => {
					if (nameskin) {
						createButtons(nameskin, src => {
							const avatar = node.node[index ? "avatar2" : "avatar"];
							if (src === "origin") avatar.setBackground(nameskin, "character");
							else avatar.style.backgroundImage = `url('${src}')`;
						});
					}
				});
			}
			uiintro.add(ui.create.div(".placeholder.slim"));
		} else if (node.classList.contains("mark") && node.info && node.parentNode && node.parentNode.parentNode && node.parentNode.parentNode.classList.contains("player")) {
			var info = node.info;
			var player = node.parentNode.parentNode;
			if (info.name) {
				if (typeof info.name == "function") {
					var named = info.name(player.storage[node.skill], player);
					if (named) {
						uiintro.add(named);
					}
				} else {
					uiintro.add(info.name);
				}
			} else if (info.name !== false) {
				uiintro.add(get.translation(node.skill));
			}
			if (typeof info.id == "string" && info.id.startsWith("subplayer") && player.isUnderControl(true) && player.storage[info.id] && !_status.video) {
				var storage = player.storage[info.id];
				uiintro.addText("当前体力：" + storage.hp + "/" + storage.maxHp);
				if (storage.hs.length) {
					uiintro.addText("手牌区");
					uiintro.addSmall(storage.hs);
				}
				if (storage.es.length) {
					uiintro.addText("装备区");
					uiintro.addSmall(storage.es);
				}
			}
			if (typeof info.mark == "function") {
				var stint = info.mark(uiintro, player.storage[node.skill], player, evt, node.skill);
				if (stint instanceof Promise) {
					uiintro.hide();
					stint.then(() => {
						uiintro.show();
						if (evt) {
							lib.placePoppedDialog(uiintro, evt);
						}
					});
				} else if (stint) {
					var placetext = uiintro.add('<div class="text" style="display:inline">' + stint + "</div>");
					if (!stint.startsWith('<div class="skill"')) {
						uiintro._place_text = placetext;
					}
					// if(stint.length<=100){
					// 	uiintro.add('<div class="text center">'+stint+'</div>');
					// }
					// else{
					// 	uiintro.add('<div class="text">'+stint+'</div>');
					// }
				}
				/*if (evt) {
						lib.placePoppedDialog(uiintro, evt);
					}*/
			} else {
				var stint = get.storageintro(info.content, player.storage[node.skill], player, uiintro, node.skill);
				if (stint) {
					if (stint[0] == "@") {
						uiintro.add('<div class="caption">' + stint.slice(1) + "</div>");
					} else {
						var placetext = uiintro.add('<div class="text" style="display:inline">' + stint + "</div>");
						if (!stint.startsWith('<div class="skill"')) {
							uiintro._place_text = placetext;
						}
					}
					// else if(stint.length<=100){
					// 	uiintro.add('<div class="text center">'+stint+'</div>');
					// }
					// else{
					// 	uiintro.add('<div class="text">'+stint+'</div>');
					// }
				}
			}
			uiintro.add(ui.create.div(".placeholder.slim"));
		} else if (node.classList.contains("card")) {
			//卡牌长按介绍
			if (ui.arena.classList.contains("observe") && node.parentNode.classList.contains("handcards")) {
				return;
			}
			var name = node.name,
				Vcard = node[node.cardSymbol] || false,
				trueCard = node;
			if (node.parentNode.cardMod) {
				var moded = false;
				for (var i in node.parentNode.cardMod) {
					var item = node.parentNode.cardMod[i](node);
					if (Array.isArray(item)) {
						moded = true;
						uiintro.add(item[0]);
						uiintro._place_text = uiintro.add('<div class="text" style="display:inline">' + item[1] + "</div>");
					}
				}
				if (moded) {
					return uiintro;
				}
			}
			if (node.link?.name && lib.card[node.link.name]) {
				name = node.link.name;
				Vcard = node.link[node.link.cardSymbol] || false;
				trueCard = node.link;
			}
			var cardPosition = get.position(trueCard);
			if (((cardPosition === "e" || cardPosition === "j") && trueCard.viewAs && trueCard.viewAs != name) || (Vcard && (Vcard.cards.length != 1 || Vcard.cards[0].name != name))) {
				uiintro.add(get.translation(trueCard.viewAs));
				var cardInfo = lib.card[trueCard.viewAs],
					showCardIntro = true;
				var cardOwner = get.owner(trueCard);
				if (cardInfo.blankCard) {
					if (cardOwner && !cardOwner.isUnderControl(true)) {
						showCardIntro = false;
					}
				}
				if (cardOwner && showCardIntro) {
					uiintro.isNotCard = true;
				}
				// uiintro.add(get.translation(node.viewAs)+'<br><div class="text center" style="padding-top:5px;">（'+get.translation(node)+'）</div>');
				//uiintro.nosub = true;
				name = trueCard.viewAs;
			} else {
				if (node.extraEquip) {
					name = node.extraEquip[1];
					uiintro.add(`${get.translation(node.extraEquip[0])} ${get.translation(node.extraEquip[1])}`);
				} else {
					uiintro.add(get.translation(node));
				}
			}
			if (node._banning) {
				var clickBanned = function () {
					var banned = lib.config[this.bannedname] || [];
					if (banned.includes(name)) {
						banned.remove(name);
					} else {
						banned.push(name);
					}
					game.saveConfig(this.bannedname, banned);
					this.classList.toggle("on");
					if (node.updateBanned) {
						node.updateBanned();
					}
				};
				var modeorder = lib.config.modeorder || [];
				for (var i in lib.mode) {
					modeorder.add(i);
				}
				var list = [];
				uiintro.contentContainer.listen(function (e) {
					ui.click.touchpop();
					e.stopPropagation();
				});
				for (var i = 0; i < modeorder.length; i++) {
					if (node._banning == "online") {
						if (!lib.mode[modeorder[i]].connect) {
							continue;
						}
					} else if (modeorder[i] == "connect" || modeorder[i] == "brawl") {
						continue;
					}
					if (lib.config.all.mode.includes(modeorder[i])) {
						list.push(modeorder[i]);
					}
				}
				if (lib.card[name] && lib.card[name].type == "trick") {
					list.push("zhinang_tricks");
				}
				var page = ui.create.div(".menu-buttons.configpopped", uiintro.content);
				var banall = false;
				for (var i = 0; i < list.length; i++) {
					var cfg = ui.create.div(".config", list[i] == "zhinang_tricks" ? "设为智囊" : lib.translate[list[i]] + "模式", page);
					cfg.classList.add("toggle");
					if (list[i] == "zhinang_tricks") {
						cfg.bannedname = (node._banning == "offline" ? "" : "connect_") + "zhinang_tricks";
					} else if (node._banning == "offline") {
						cfg.bannedname = list[i] + "_bannedcards";
					} else {
						cfg.bannedname = "connect_" + list[i] + "_bannedcards";
					}
					cfg.listen(clickBanned);
					ui.create.div(ui.create.div(cfg));
					var banned = lib.config[cfg.bannedname] || [];
					if (banned.includes(name) == (list[i] == "zhinang_tricks")) {
						cfg.classList.add("on");
						banall = true;
					}
				}
				ui.create.div(".menubutton.pointerdiv", banall ? "全部禁用" : "全部启用", uiintro.content, function () {
					if (this.innerHTML == "全部禁用") {
						for (var i = 0; i < page.childElementCount; i++) {
							if (page.childNodes[i].bannedname.indexOf("zhinang_tricks") == -1 && page.childNodes[i].bannedname && page.childNodes[i].classList.contains("on")) {
								clickBanned.call(page.childNodes[i]);
							}
						}
						this.innerHTML = "全部启用";
					} else {
						for (var i = 0; i < page.childElementCount; i++) {
							if (page.childNodes[i].bannedname.indexOf("zhinang_tricks") == -1 && page.childNodes[i].bannedname && !page.childNodes[i].classList.contains("on")) {
								clickBanned.call(page.childNodes[i]);
							}
						}
						this.innerHTML = "全部禁用";
					}
				}).style.marginTop = "-10px";
				ui.create.div(".placeholder.slim", uiintro.content);
			} else {
				if (lib.translate[name + "_info"]) {
					if (!uiintro.nosub) {
						if (lib.card[name] && lib.card[name].derivation) {
							if (typeof lib.card[name].derivation == "string") {
								uiintro.add('<div class="text center">来源：' + get.translation(lib.card[name].derivation) + "</div>");
							} else if (lib.card[name].derivationpack) {
								uiintro.add('<div class="text center">来源：' + get.translation(lib.card[name].derivationpack + "_card_config") + "包</div>");
							}
						}
						let typeinfo = "";
						if (lib.card[name] && lib.card[name].unique) {
							typeinfo += "特殊" + get.translation(lib.card[name].type) + "牌";
						} else if (lib.card[name] && lib.card[name].type && lib.translate[lib.card[name].type]) {
							typeinfo += get.translation(lib.card[name].type) + "牌";
						}
						let vcard = get
							.owner(node)
							?.getVCards(get.position(node))
							?.find(card => card.cards?.includes(node));
						if (get.subtypes(vcard || node, get.owner(node))?.length) {
							typeinfo +=
								"-" +
								get
									.subtypes(vcard || node, get.owner(node))
									.map(type => get.translation(type))
									.join("/");
						}
						if (typeinfo) {
							uiintro.add('<div class="text center">' + typeinfo + "</div>");
						}
						if (lib.card[name].unique && lib.card[name].type == "equip") {
							if (lib.cardPile.guozhan && lib.cardPack.guozhan.includes(name)) {
								uiintro.add('<div class="text center">专属装备</div>').style.marginTop = "-5px";
							} else {
								uiintro.add('<div class="text center">特殊装备</div>').style.marginTop = "-5px";
							}
						}
						if (lib.card[name] && lib.card[name].addinfomenu) {
							uiintro.add('<div class="text center">' + lib.card[name].addinfomenu + "</div>");
						}
						if (get.subtype(name, false) == "equip1") {
							var added = false;
							if (lib.card[name] && lib.card[name].distance) {
								var dist = lib.card[name].distance;
								if (dist.attackFrom) {
									added = true;
									uiintro.add('<div class="text center">攻击范围：' + (-dist.attackFrom + 1) + "</div>");
								}
							}
							if (!added) {
								uiintro.add('<div class="text center">攻击范围：1</div>');
							}
						}
					}
					if (lib.card[name].cardPrompt) {
						var str = lib.card[name].cardPrompt(node.link || node, get.owner(node)),
							placetext = uiintro.add('<div class="text" style="display:inline">' + str + "</div>");
						if (!str.startsWith('<div class="skill"')) {
							uiintro._place_text = placetext;
						}
					} else if (lib.translate[name + "_info"]) {
						var placetext = uiintro.add('<div class="text" style="display:inline">' + lib.translate[name + "_info"] + "</div>");
						if (!lib.translate[name + "_info"].startsWith('<div class="skill"')) {
							uiintro._place_text = placetext;
						}
					}
					if (get.is.yingbianConditional(node.link || node)) {
						const yingbianEffects = get.yingbianEffects(node.link || node);
						if (!yingbianEffects.length) {
							const defaultYingbianEffect = get.defaultYingbianEffect(node.link || node);
							if (lib.yingbian.prompt.has(defaultYingbianEffect)) {
								yingbianEffects.push(defaultYingbianEffect);
							}
						}
						if (yingbianEffects.length && showCardIntro) {
							uiintro.add(`<div class="text" style="font-family: yuanli">应变：${yingbianEffects.map(value => lib.yingbian.prompt.get(value)).join("；")}</div>`);
						}
					}
					if (lib.translate[name + "_append"]) {
						uiintro.add('<div class="text" style="display:inline">' + lib.translate[name + "_append"] + "</div>");
					}
					if (uiintro.isNotCard) {
						if (Vcard?.cards?.length) {
							uiintro.add('<div class="text center">—— 对应实体牌 ——</div>');
							uiintro.addSmall(Vcard.cards);
						} else {
							uiintro.add('<div class="text center">（这是一张虚拟牌）</div>');
						}
					}
					if (node.gaintag?.length) {
						let gaintag = node.gaintag
							.map(tag => {
								let translate = get.translation(tag);
								if (translate === tag && tag.startsWith("eternal_")) {
									translate = get.translation(tag.slice(8));
								}
								if (translate === "invisible") {
									return "";
								}
								return translate;
							})
							.filter(tag => tag.length);
						if (gaintag?.length) {
							uiintro.add(" ");
							uiintro.add(`<div class="text" style="display:inline">此牌标签：${gaintag}</div>`);
						}
					}
				}
				uiintro.add(ui.create.div(".placeholder.slim"));
			}
		} else if (node.classList.contains("character")) {
			const character = node.link,
				characterInfo = get.character(node.link);
			let capt = get.translation(character);
			if (characterInfo) {
				const infoSex = characterInfo[0];
				if (infoSex && lib.config.show_sex) {
					capt += `&nbsp;&nbsp;${infoSex == "none" ? "无" : lib.translate[infoSex]}`;
				}
				const infoGroup = characterInfo[1];
				if (infoGroup && lib.config.show_group) {
					const group = get.is.double(character, true);
					if (group) {
						capt += `&nbsp;&nbsp;${group.map(value => get.translation(value)).join("/")}`;
					} else {
						capt += `&nbsp;&nbsp;${lib.translate[infoGroup]}`;
					}
				}
			}
			uiintro.add(capt);

			if (lib.characterTitle[node.link]) {
				uiintro.addText(get.colorspan(lib.characterTitle[node.link]));
			}

			if (lib.characterAppend[node.link]) {
				uiintro.addText(get.colorspan(lib.characterAppend[node.link]));
			}

			if (lib.config.show_sortPack) {
				for (let packname in lib.characterPack) {
					if (node.link in lib.characterPack[packname]) {
						let pack = lib.translate[packname + "_character_config"],
							sort;
						if (lib.characterSort[packname]) {
							let sorted = lib.characterSort[packname];
							for (let sortname in sorted) {
								if (sorted[sortname].includes(node.link)) {
									sort = `<span style = "font-size:small">[${lib.translate[sortname]}]</span>`;
									break;
								}
							}
						}
						const sortPack = document.createElement("div");
						sortPack.innerHTML = `${pack}${sort ? `<br>${sort}` : ""}`;
						sortPack.appendChild(document.createElement("hr"));
						sortPack.insertBefore(document.createElement("hr"), sortPack.firstChild);
						uiintro.add(sortPack);
						break;
					}
				}
			}

			if (get.characterInitFilter(node.link)) {
				const initFilters = get.characterInitFilter(node.link).filter(tag => {
					if (!lib.characterInitFilter[node.link]) {
						return true;
					}
					return lib.characterInitFilter[node.link](tag) !== false;
				});
				if (initFilters.length) {
					const str = initFilters.reduce((strx, stry) => strx + lib.InitFilter[stry] + "<br>", "").slice(0, -4);
					uiintro.addText(str);
				}
			}

			if (node._banning) {
				var clickBanned = function () {
					var banned = lib.config[this.bannedname] || [];
					if (banned.includes(character)) {
						banned.remove(character);
					} else {
						banned.push(character);
					}
					game.saveConfig(this.bannedname, banned);
					this.classList.toggle("on");
					if (node.updateBanned) {
						node.updateBanned();
					}
				};
				var modeorder = lib.config.modeorder || [];
				for (var i in lib.mode) {
					modeorder.add(i);
				}
				var list = [];
				uiintro.contentContainer.listen(function (e) {
					ui.click.touchpop();
					e.stopPropagation();
				});
				for (var i = 0; i < modeorder.length; i++) {
					if (node._banning == "online") {
						if (!lib.mode[modeorder[i]].connect) {
							continue;
						}
						if (!lib.config["connect_" + modeorder[i] + "_banned"]) {
							lib.config["connect_" + modeorder[i] + "_banned"] = [];
						}
					} else if (modeorder[i] == "connect" || modeorder[i] == "brawl") {
						continue;
					}
					if (lib.config.all.mode.includes(modeorder[i])) {
						list.push(modeorder[i]);
					}
				}
				var page = ui.create.div(".menu-buttons.configpopped", uiintro.content);
				var banall = false;
				for (var i = 0; i < list.length; i++) {
					var cfg = ui.create.div(".config", lib.translate[list[i]] + "模式", page);
					cfg.classList.add("toggle");
					if (node._banning == "offline") {
						cfg.bannedname = list[i] + "_banned";
					} else {
						cfg.bannedname = "connect_" + list[i] + "_banned";
					}
					cfg.listen(clickBanned);
					ui.create.div(ui.create.div(cfg));
					var banned = lib.config[cfg.bannedname] || [];
					if (!banned.includes(character)) {
						cfg.classList.add("on");
						banall = true;
					}
				}
				if (node._banning == "offline") {
					var cfg = ui.create.div(".config", "随机选将可用", page);
					cfg.classList.add("toggle");
					cfg.listen(function () {
						this.classList.toggle("on");
						if (this.classList.contains("on")) {
							lib.config.forbidai_user.remove(character);
						} else {
							lib.config.forbidai_user.add(character);
						}
						game.saveConfig("forbidai_user", lib.config.forbidai_user);
					});
					ui.create.div(ui.create.div(cfg));
					if (!lib.config.forbidai_user.includes(character)) {
						cfg.classList.add("on");
					}
				}
				ui.create.div(".menubutton.pointerdiv", banall ? "全部禁用" : "全部启用", uiintro.content, function () {
					if (this.innerHTML == "全部禁用") {
						for (var i = 0; i < page.childElementCount; i++) {
							if (page.childNodes[i].bannedname && page.childNodes[i].classList.contains("on")) {
								clickBanned.call(page.childNodes[i]);
							}
						}
						this.innerHTML = "全部启用";
					} else {
						for (var i = 0; i < page.childElementCount; i++) {
							if (page.childNodes[i].bannedname && !page.childNodes[i].classList.contains("on")) {
								clickBanned.call(page.childNodes[i]);
							}
						}
						this.innerHTML = "全部禁用";
					}
				}).style.marginTop = "-10px";
				ui.create.div(".placeholder.slim", uiintro.content);
			} else {
				var skills = get.character(character, 3);
				for (i = 0; i < skills.length; i++) {
					if (lib.translate[skills[i] + "_info"]) {
						if (lib.translate[skills[i] + "_ab"]) {
							translation = lib.translate[skills[i] + "_ab"];
						} else {
							translation = get.translation(skills[i]);
							if (!lib.skill[skills[i]].nobracket) {
								translation = `【${translation.slice(0, 2)}】`;
							}
						}

						uiintro.add('<div><div class="skill">' + translation + "</div><div>" + get.skillInfoTranslation(skills[i], null, false) + "</div></div>");

						if (lib.translate[skills[i] + "_append"]) {
							uiintro._place_text = uiintro.add('<div class="text">' + lib.translate[skills[i] + "_append"] + "</div>");
						}
					}
				}
				var modepack = lib.characterPack["mode_" + get.mode()];
				if (lib.config.show_favourite && lib.character[node.link] && (!modepack || !modepack[node.link]) && (!simple || get.is.phoneLayout())) {
					var addFavourite = ui.create.div(".text.center.pointerdiv");
					addFavourite.link = node.link;
					addFavourite.style.marginBottom = "15px";
					addFavourite.style.marginRight = "15px";
					if (lib.config.favouriteCharacter.includes(node.link)) {
						addFavourite.innerHTML = "移除收藏";
					} else {
						addFavourite.innerHTML = "添加收藏";
					}
					addFavourite.listen(ui.click.favouriteCharacter);
					uiintro.add(addFavourite);
				} else {
					uiintro.add(ui.create.div(".placeholder.slim"));
				}
				if (!simple || get.is.phoneLayout()) {
					let viewInfo = ui.create.div(".text.center.pointerdiv");
					viewInfo.link = node.link;
					viewInfo.innerHTML = "查看资料";
					viewInfo.style.marginBottom = "15px";
					viewInfo.listen(function () {
						return ui.click.charactercard(this.link, node);
					});
					uiintro.add(viewInfo);
				}
				if ((lib.config.change_skin || lib.skin) && (!simple || get.is.phoneLayout())) {
					const nameskin = node.link;
					if (nameskin) {
						createButtons(nameskin, src => {
							if (src === "origin") node.setBackground(nameskin, "character");
							else node.style.backgroundImage = `url('${src}')`;
						});
					}
				}
			}
		} else if (node.classList.contains("equips") && ui.arena.classList.contains("selecting")) {
			(function () {
				uiintro.add("选择装备");
				uiintro.addSmall(
					Array.from(node.childNodes).filter(node => !node.classList.contains("emptyequip") && !node.classList.contains("feichu")),
					true
				);
				uiintro.clickintro = true;
				ui.control.hide();
				uiintro._onclose = function () {
					ui.control.show();
				};
				var confirmbutton;
				for (var i = 0; i < uiintro.buttons.length; i++) {
					var button = uiintro.buttons[i];
					button.classList.add("pointerdiv");
					if (button.link.classList.contains("selected")) {
						button.classList.add("selected");
					}
					button.listen(function (e) {
						ui.click.card.call(this.link, "popequip");
						ui.click.window.call(ui.window, e);
						if (this.link.classList.contains("selected")) {
							this.classList.add("selected");
						} else {
							this.classList.remove("selected");
						}
						if (ui.confirm && ui.confirm.str && ui.confirm.str.includes("o")) {
							confirmbutton.classList.remove("disabled");
						} else {
							confirmbutton.classList.add("disabled");
						}
					});
				}
				var buttoncontainer = uiintro.add(ui.create.div());
				buttoncontainer.style.display = "block";
				confirmbutton = ui.create.div(
					".menubutton.large.pointerdiv",
					"确定",
					function () {
						if (ui.confirm && ui.confirm.str && ui.confirm.str.includes("o")) {
							uiintro._clickintro();
							ui.click.ok(ui.confirm.firstChild);
						}
					},
					buttoncontainer
				);
				confirmbutton.style.position = "relative";
				setTimeout(function () {
					if (ui.confirm && ui.confirm.str && ui.confirm.str.includes("o")) {
						confirmbutton.classList.remove("disabled");
					} else {
						confirmbutton.classList.add("disabled");
					}
				}, 300);
			})();
		} else if (node.classList.contains("identity") && node.dataset.career) {
			var career = node.dataset.career;
			uiintro.add(get.translation(career));
			uiintro.add('<div class="text center" style="padding-bottom:5px">' + lib.translate["_" + career + "_skill_info"] + "</div>");
		} else if (node.classList.contains("skillbar")) {
			if (node == ui.friendBar) {
				uiintro.add("友方怒气值");
				uiintro.add('<div class="text center" style="padding-bottom:5px">' + _status.friendRage + "/100</div>");
			} else if (node == ui.enemyBar) {
				uiintro.add("敌方怒气值");
				uiintro.add('<div class="text center" style="padding-bottom:5px">' + _status.enemyRage + "/100</div>");
			}
		} else if (node.parentNode == ui.historybar) {
			if (node.dead) {
				if (!node.source || node.source == node.player) {
					uiintro.add('<div class="text center">' + get.translation(node.player) + "阵亡</div>");
					uiintro.addSmall([node.player]);
				} else {
					uiintro.add('<div class="text center">' + get.translation(node.player) + "被" + get.translation(node.source) + "杀害</div>");
					uiintro.addSmall([node.source]);
				}
			}
			if (node.skill) {
				uiintro.add('<div class="text center">' + get.translation(node.skill) + "</div>");
				uiintro._place_text = uiintro.add('<div class="text" style="display:inline">' + get.translation(node.skill, "info") + "</div>");
			}
			if (node.targets && get.itemtype(node.targets) == "players") {
				uiintro.add('<div class="text center">目标</div>');
				uiintro.addSmall(node.targets);
			}
			if (node.players && node.players.length > 1) {
				uiintro.add('<div class="text center">使用者</div>');
				uiintro.addSmall(node.players);
			}
			if (node.cards && node.cards.length) {
				uiintro.add('<div class="text center">卡牌</div>');
				uiintro.addSmall(node.cards);
			}
			for (var i = 0; i < node.added.length; i++) {
				uiintro.add(node.added[i]);
			}
			if (node.added.length) {
				uiintro.add(ui.create.div(".placeholder.slim"));
			}
			if (uiintro.content.firstChild) {
				uiintro.content.firstChild.style.paddingTop = "3px";
			}
		} else if (node.classList.contains("nodeintro")) {
			if (node.nodeTitle) {
				uiintro.add(node.nodeTitle);
			}
			uiintro._place_text = uiintro.add('<div class="text">' + node.nodeContent + "</div>");
		}
		if (lib.config.touchscreen) {
			lib.setScroll(uiintro.contentContainer);
		}
		return uiintro;
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
//图片大小
lib.element.player.emotion = function (pack, id) {
	var emotionsize = lib.config.extension_星之梦_emotionsize || 50;
	var str = `<img src="##assetURL##image/emotion/${pack}/${id}" width="${emotionsize}" height="${emotionsize}">`;
	this.say(str);
	game.broadcast(
		function (id2, str2) {
			if (lib.playerOL[id2]) {
				lib.playerOL[id2].say(str2);
			} else if (game.connectPlayers) {
				for (var i = 0; i < game.connectPlayers.length; i++) {
					if (game.connectPlayers[i].playerid == id2) {
						game.connectPlayers[i].say(str2);
						return;
					}
				}
			}
		},
		this.playerid,
		str
	);
};
