import { lib, game, ui, get, ai, _status } from "noname";

//曹金玉显示优化
lib.skill.yuqi = {
	audio: 2,
	trigger: { global: "damageEnd" },
	getInfo(player) {
		if (!player.storage.yuqi) {
			player.storage.yuqi = [0, 3, 1, 1];
		}
		return player.storage.yuqi;
	},
	usable: 2,
	filter(event, player) {
		var list = lib.skill.yuqi.getInfo(player);
		return event.player.isIn() && get.distance(player, event.player) <= list[0];
	},
	logTarget: "player",
	async content(event, trigger, player) {
		const list = lib.skill.yuqi.getInfo(player);
		const {
			targets: [target],
		} = event;
		const cards = get.cards(list[1], true);
		await game.cardsGotoOrdering(cards);
		const next = player.chooseToMove_new(true, "隅泣");
		next.set("list", [
			["牌堆顶的牌", cards],
			[["交给" + get.translation(target) + '<div class="text center">至少一张' + (list[2] > 1 ? "<br>至多" + get.cnNumber(list[2]) + "张" : "") + "</div>"], ['交给自己<div class="text center">至多' + get.cnNumber(list[3]) + "张</div>"]],
		]);
		next.set("filterMove", function (from, to, moved) {
			var info = lib.skill.yuqi.getInfo(_status.event.player);
			if (to == 1) {
				return moved[1].length < info[2];
			}
			if (to == 2) {
				return moved[2].length < info[3];
			}
			return true;
		});
		next.set("processAI", function (list) {
			var cards = list[0][1].slice(0).sort(function (a, b) {
					return get.value(b, "raw") - get.value(a, "raw");
				}),
				player = _status.event.player,
				target = _status.event.getTrigger().player;
			var info = lib.skill.yuqi.getInfo(_status.event.player);
			var cards1 = cards.splice(0, Math.min(info[3], cards.length - 1));
			var card2;
			if (get.attitude(player, target) > 0) {
				card2 = cards.shift();
			} else {
				card2 = cards.pop();
			}
			return [cards, [card2], cards1];
		});
		next.set("filterOk", function (moved) {
			return moved[1].length > 0;
		});
		const result = await next.forResult();
		if (result.bool) {
			const moved = result.moved;
			cards.removeArray(moved[1]);
			cards.removeArray(moved[2]);
			if (cards.length) {
				await game.cardsGotoPile(cards.slice().reverse(), "insert");
			}
			const list = [[target, moved[1]]];
			if (moved[2].length) {
				list.push([player, moved[2]]);
			}
			await game
				.loseAsync({
					gain_list: list,
					giver: player,
					animate: "draw",
				})
				.setContent("gaincardMultiple");
		}
	},
	mark: true,
	intro: {
		content(storage, player) {
			var info = lib.skill.yuqi.getInfo(player);
			return '<div class="text center">距离：<span class=thundertext>' + info[0] + "</span><br>观看牌堆：<span class=firetext>" + info[1] + "</span><br>交给别人：<span class=greentext>" + info[2] + "</span><br>交给自己：<span class=yellowtext>" + info[3] + "</span></div>";
		},
	},
	ai: {
		threaten: 8.8,
	},
	init(player, skill) {
		const list = lib.skill.yuqi.getInfo(player);
		player.addTip(skill, get.translation(skill) + " " + list.slice().join(" "));
	},
	onremove: (player, skill) => player.removeTip(skill),
};
lib.skill.shanshen = {
	audio: 2,
	trigger: { global: "die" },
	async cost(event, trigger, player) {
		const bool = !player.hasAllHistory("sourceDamage", function (evt) {
			return evt.player == trigger.player;
		});
		const list = get.info("yuqi").getInfo(player);
		const result = await player
			.chooseControl("<span class=thundertext>距离</span>", "<span class=firetext>观看牌堆</span>", "<span class=greentext>交给别人</span>", "<span class=yellowtext>交给自己</span>", "cancel2")
			.set("prompt", get.prompt(event.skill))
			.set("prompt2", "令“当有角色受到伤害后，若你至其的距离不大于[<span class=thundertext>" + list[0] + "</span>]，则你可以观看牌堆顶的[<span class=firetext>" + list[1] + "</span>]张牌，你将其中至多[<span class=greentext>" + list[2] + "</span>]张牌交给受伤角色，然后可以获得剩余牌中的至多[<span class=yellowtext>" + list[3] + "</span>]张牌，并将其余牌以原顺序放回牌堆顶。”中的一个数字+2" + (event.goon ? "并回复1点体力" : ""))
			.set("ai", function () {
				const player = _status.event.player,
					info = lib.skill.yuqi.getInfo(player);
				if (
					info[0] < info[3] &&
					game.countPlayer(function (current) {
						return get.distance(player, current) <= info[0];
					}) < Math.min(3, game.countPlayer())
				) {
					return 0;
				}
				if (info[3] < info[1] - 1) {
					return 3;
				}
				if (info[1] < 5) {
					return 1;
				}
				if (
					info[0] < 5 &&
					game.hasPlayer(function (current) {
						return current != player && get.distance(player, current) > info[0];
					})
				) {
					return 0;
				}
				return 2;
			})
			.forResult();
		if (result.control != "cancel2") {
			event.result = {
				bool: true,
				cost_data: [result.control, result.index],
			};
		}
	},
	logTarget: "player",
	async content(event, trigger, player) {
		const {
			targets,
			cost_data: [control, index],
		} = event;
		const name = "yuqi";
		const list = get.info(name).getInfo(player);
		list[index] = Math.min(5, list[index] + 2);
		game.log(player, "将", control, "数字改为", "#y" + list[index]);
		player.markSkill(name);
		get.info(name).init(player, name);
		if (
			!player.hasAllHistory("sourceDamage", function (evt) {
				return evt.player == targets[0];
			})
		) {
			await player.recover();
		}
	},
	ai: {
		combo: "yuqi",
	},
};
lib.skill.xianjing = {
	audio: 2,
	trigger: { player: "phaseZhunbeiBegin" },
	async cost(event, trigger, player) {
		const list = get.info("yuqi").getInfo(player);
		const result = await player
			.chooseControl("<span class=thundertext>距离</span>", "<span class=firetext>观看牌堆</span>", "<span class=greentext>交给别人</span>", "<span class=yellowtext>交给自己</span>", "cancel2")
			.set("prompt", get.prompt(event.skill))
			.set("prompt2", "令“当有角色受到伤害后，若你至其的距离不大于[<span class=thundertext>" + list[0] + "</span>]，则你可以观看牌堆顶的[<span class=firetext>" + list[1] + "</span>]张牌，你将其中至多[<span class=greentext>" + list[2] + "</span>]张牌交给受伤角色，然后可以获得剩余牌中的至多[<span class=yellowtext>" + list[3] + "</span>]张牌，并将其余牌以原顺序放回牌堆顶。”中的一个数字+1")
			.set("ai", function () {
				const player = _status.event.player,
					info = lib.skill.yuqi.getInfo(player);
				if (
					info[0] < info[3] &&
					game.countPlayer(function (current) {
						return get.distance(player, current) <= info[0];
					}) < Math.min(3, game.countPlayer())
				) {
					return 0;
				}
				if (info[3] < info[1] - 1) {
					return 3;
				}
				if (info[1] < 5) {
					return 1;
				}
				if (
					info[0] < 5 &&
					game.hasPlayer(function (current) {
						return current != player && get.distance(player, current) > info[0];
					})
				) {
					return 0;
				}
				return 2;
			})
			.forResult();
		if (result.control != "cancel2") {
			event.result = {
				bool: true,
				cost_data: [result.control, result.index],
			};
		}
	},
	async content(event, trigger, player) {
		const {
			cost_data: [control, index],
		} = event;
		const name = "yuqi";
		const list = get.info(name).getInfo(player);
		list[index] = Math.min(5, list[index] + 1);
		game.log(player, "将", control, "数字改为", "#y" + list[index]);
		player.markSkill(name);
		get.info(name).init(player, name);
		if (player.isDamaged()) {
			return;
		}
		const result = await player
			.chooseControl("<span class=thundertext>距离</span>", "<span class=firetext>观看牌堆</span>", "<span class=greentext>交给别人</span>", "<span class=yellowtext>交给自己</span>", "cancel2")
			.set("prompt", get.prompt(event.skill))
			.set("prompt2", "令“当有角色受到伤害后，若你至其的距离不大于[<span class=thundertext>" + list[0] + "</span>]，则你可以观看牌堆顶的[<span class=firetext>" + list[1] + "</span>]张牌，你将其中至多[<span class=greentext>" + list[2] + "</span>]张牌交给受伤角色，然后可以获得剩余牌中的至多[<span class=yellowtext>" + list[3] + "</span>]张牌，并将其余牌以原顺序放回牌堆顶。”中的一个数字+1")
			.set("ai", function () {
				const player = _status.event.player,
					info = lib.skill.yuqi.getInfo(player);
				if (
					info[0] < info[3] &&
					game.countPlayer(function (current) {
						return get.distance(player, current) <= info[0];
					}) < Math.min(3, game.countPlayer())
				) {
					return 0;
				}
				if (info[3] < info[1] - 1) {
					return 3;
				}
				if (info[1] < 5) {
					return 1;
				}
				if (
					info[0] < 5 &&
					game.hasPlayer(function (current) {
						return current != player && get.distance(player, current) > info[0];
					})
				) {
					return 0;
				}
				return 2;
			})
			.forResult();
		if (result.control != "cancel2") {
			const { control, index } = result;
			list[index] = Math.min(5, list[index] + 1);
			game.log(player, "将", control, "数字改为", "#y" + list[index]);
			player.markSkill(name);
			get.info(name).init(player, name);
		}
	},
	ai: {
		combo: "yuqi",
	},
};
//天命增强
if (lib.config.extension_星之梦_tmEnhance) {
	lib.skill.tianming = {
		audio: "tianming",
		trigger: { target: "useCardToTargeted" },
		filter(event, player) {
			return event.card.name == "sha";
		},
		check(event, player) {
			var cards = player.getCards("he");
			if (cards.length <= 2) {
				for (var i = 0; i < cards.length; i++) {
					if (cards[i].name == "shan" || cards[i].name == "tao") return false;
				}
			}
			return true;
		},
		content() {
			"step 0";
			player.chooseToDiscard(2, true, "he");
			player.draw(2);
			"step 1";
			player.chooseTarget("是否令一名角色弃置两张牌，然后摸两张牌？").set("ai", function (target) {
				var cards = target.getCards("he");
				if (cards.length <= 2) {
					for (var i = 0; i < cards.length; i++) {
						if (cards[i].name == "shan" || cards[i].name == "tao") return 0;
					}
				}
				return get.attitude(player, target) * (target == player ? 1.2 : 1);
			});
			"step 2";
			if (result.bool) {
				var target = result.targets[0];
				player.line(target);
				target.chooseToDiscard(2, true, "he");
				target.draw(2);
			}
		},
		ai: {
			effect: {
				target(card, player, target, current) {
					if (card.name == "sha") return [1, 0.5];
				},
			},
		},
	};
	lib.translate.tianming_info = "当你成为【杀】的目标时，你可以弃置两张牌（不足则全弃，无牌则不弃），然后摸两张牌。然后你可以选择一名角色，令其弃置两张牌（不足则全弃，无牌则不弃），然后摸两张牌。";
}
//十常侍增强
if (lib.config.extension_星之梦_scsEnhance) {
	lib.skill.mbdanggu = {
		trigger: {
			player: "enterGame",
			global: "phaseBefore",
		},
		filter(event, player) {
			return event.name != "phase" || game.phaseNumber == 0;
		},
		derivation: ["mbdanggu_faq", "mbdanggu_faq2", "scstaoluan", "scschiyan", "scszimou", "scspicai", "scsyaozhuo", "scsxiaolu", "scskuiji", "scschihe", "scsniqu", "scsanruo"],
		forced: true,
		unique: true,
		onremove(player) {
			delete player.storage.mbdanggu;
			delete player.storage.mbdanggu_current;
			if (lib.skill.mbdanggu.isSingleShichangshi(player)) {
				game.broadcastAll(function (player) {
					player.name1 = player.name;
					player.skin.name = player.name;
					player.smoothAvatar(false);
					player.node.avatar.setBackground(player.name, "character");
					player.node.name.innerHTML = get.slimName(player.name);
					delete player.name2;
					delete player.skin.name2;
					player.classList.remove("fullskin2");
					player.node.avatar2.classList.add("hidden");
					player.node.name2.innerHTML = "";
					if (player == game.me && ui.fakeme) {
						ui.fakeme.style.backgroundImage = player.node.avatar.style.backgroundImage;
					}
				}, player);
			}
		},
		changshi: [
			["scs_zhangrang", "scstaoluan"],
			["scs_zhaozhong", "scschiyan"],
			["scs_sunzhang", "scszimou"],
			["scs_bilan", "scspicai"],
			["scs_xiayun", "scsyaozhuo"],
			["scs_hankui", "scsxiaolu"],
			["scs_lisong", "scskuiji"],
			["scs_duangui", "scschihe"],
			["scs_guosheng", "scsniqu"],
			["scs_gaowang", "scsanruo"],
		],
		conflictMap(player) {
			if (!_status.changshiMap) {
				_status.changshiMap = {
					scs_zhangrang: [],
					scs_zhaozhong: [],
					scs_sunzhang: [],
					scs_bilan: ["scs_hankui"],
					scs_xiayun: [],
					scs_hankui: ["scs_bilan"],
					scs_lisong: [],
					scs_duangui: ["scs_guosheng"],
					scs_guosheng: ["scs_duangui"],
					scs_gaowang: [],
				};
				if (!get.isLuckyStar(player)) {
					var list = lib.skill.mbdanggu.changshi.map(i => i[0]);
					for (var i of list) {
						var select = list.filter(scs => scs != i && !_status.changshiMap[i].includes(i));
						_status.changshiMap[i].addArray(select.randomGets(get.rand(0, select.length)));
					}
				}
			}
			return _status.changshiMap;
		},
		async content(event, trigger, player) {
			const list = lib.skill.mbdanggu.changshi.map(i => i[0]);
			player.markAuto("mbdanggu", list);
			game.broadcastAll(
				function (player, list) {
					const cards = [];
					for (let i = 0; i < list.length; i++) {
						const cardname = "huashen_card_" + list[i];
						lib.card[cardname] = {
							fullimage: true,
							image: "character:" + list[i],
						};
						lib.translate[cardname] = get.rawName2(list[i]);
						cards.push(game.createCard(cardname, "", ""));
					}
					player.$draw(cards, "nobroadcast");
				},
				player,
				list
			);
			const next = game.createEvent("mbdanggu_clique");
			next.player = player;
			next.setContent(lib.skill.mbdanggu.contentx);
			await next;
		},
		async contentx(event, trigger, player) {
			let list = player.getStorage("mbdanggu").slice();
			const first = list.randomRemove();
			const others = list.randomGets(4);
			let result;
			if (others.length == 1) {
				result = { bool: true, links: others };
			} else {
				const map = {
						scs_bilan: "scs_hankui",
						scs_hankui: "scs_bilan",
						scs_duangui: "scs_guosheng",
						scs_guosheng: "scs_duangui",
					},
					map2 = lib.skill.mbdanggu.conflictMap(player);
				const conflictList = others.filter(changshi => {
					if (map[first] && others.some(changshi2 => map[first] == changshi2)) {
						return map[first] == changshi;
					} else {
						return map2[first].includes(changshi);
					}
				});
				list = others.slice();
				if (conflictList.length) {
					const conflict = conflictList.randomGet();
					list.remove(conflict);
					game.broadcastAll(
						function (changshi, player) {
							if (lib.config.background_speak) {
								if (player.isUnderControl(true)) {
									game.playAudio("skill", changshi + "_enter");
								}
							}
						},
						conflict,
						player
					);
				}
				result = await player
					.chooseButton(["党锢：请选择结党对象", [[first], "character"], '<div class="text center">可选常侍</div>', [others, "character"]], true)
					.set("filterButton", button => {
						return _status.event.canChoose.includes(button.link);
					})
					.set("canChoose", list)
					.set("ai", button => Math.random() * 10)
					.forResult();
			}
			if (result?.bool) {
				const chosen = result.links[0];
				const skills = [];
				list = lib.skill.mbdanggu.changshi;
				const changshis = [first, chosen];
				player.unmarkAuto("mbdanggu", changshis);
				player.storage.mbdanggu_current = changshis;
				for (const changshi of changshis) {
					for (const cs of list) {
						if (changshi == cs[0]) {
							skills.push(cs[1]);
						}
					}
				}
				if (lib.skill.mbdanggu.isSingleShichangshi(player)) {
					game.broadcastAll(
						function (player, first, chosen) {
							player.name1 = first;
							player.node.avatar.setBackground(first, "character");
							player.node.name.innerHTML = get.slimName(first);
							player.name2 = chosen;
							player.skin.name = first;
							player.skin.name2 = chosen;
							player.classList.add("fullskin2");
							player.node.avatar2.classList.remove("hidden");
							player.node.avatar2.setBackground(chosen, "character");
							player.node.name2.innerHTML = get.slimName(chosen);
							if (player == game.me && ui.fakeme) {
								ui.fakeme.style.backgroundImage = player.node.avatar.style.backgroundImage;
							}
						},
						player,
						first,
						chosen
					);
				}
				game.log(player, "选择了常侍", "#y" + get.translation(changshis));
				if (skills.length) {
					player.addAdditionalSkill("mbdanggu", skills);
					let str = "";
					for (const i of skills) {
						str += "【" + get.translation(i) + "】、";
						player.popup(i);
					}
					str = str.slice(0, -1);
					game.log(player, "获得了技能", "#g" + str);
				}
			}
		},
		isSingleShichangshi(player) {
			var map = lib.skill.mbdanggu.conflictMap(player);
			return player.name == "shichangshi" && ((map[player.name1] && map[player.name2]) || (map[player.name1] && !player.name2) || (!player.name1 && !player.name2) || (player.name == player.name1 && !player.name2));
		},
		mod: {
			aiValue(player, card, num) {
				if (["shan", "tao", "wuxie", "caochuan"].includes(card.name)) {
					return num / 10;
				}
			},
			aiUseful() {
				return lib.skill.mbdanggu.mod.aiValue.apply(this, arguments);
			},
		},
		ai: {
			combo: "mbmowang",
			nokeep: true,
		},
		intro: {
			mark(dialog, storage, player) {
				dialog.addText("剩余常侍");
				dialog.addSmall([storage, "character"]);
				if (player.storage.mbdanggu_current && player.isIn()) {
					dialog.addText("当前常侍");
					dialog.addSmall([player.storage.mbdanggu_current, "character"]);
				}
			},
		},
	};
	lib.skill.mbmowang = {
		trigger: {
			player: ["dieBefore", "rest", "dieAfter"],
		},
		filter(event, player, name) {
			if (name == "rest") {
				return true;
			}
			if (name == "dieAfter") {
				return event.reserveOut;
			}
			return event.getParent().name != "giveup" && player.maxHp > 0;
		},
		derivation: "mbmowang_faq",
		forced: true,
		forceDie: true,
		forceOut: true,
		direct: true,
		priority: 15,
		group: ["mbmowang_die", "mbmowang_return"],
		async content(event, trigger, player) {
			if (event.triggername == "rest") {
				game.broadcastAll(
					function (player, list) {
						//player.classList.add("out");
						if (list.includes(player.name1) || player.name1 == "shichangshi") {
							player.smoothAvatar(false);
							player.skin.name = player.name1 + "_dead";
							player.node.avatar.setBackground(player.name1 + "_dead", "character");
						}
						if (list.includes(player.name2) || player.name2 == "shichangshi") {
							player.smoothAvatar(true);
							player.skin.name2 = player.name2 + "_dead";
							player.node.avatar2.setBackground(player.name2 + "_dead", "character");
						}
					},
					player,
					lib.skill.mbdanggu.changshi.map(i => i[0])
				);
			} else if (event.triggername == "dieAfter") {
				if (player.getStorage("mbdanggu").length) {
					game.broadcastAll(function () {
						if (lib.config.background_speak) {
							game.playAudio("die", "shichangshiRest");
						}
					});
					await player.rest({ type: "round", count: 1 }); //, audio: "shichangshiRest"
				}
			} else {
				if (player.isRest()) {
					trigger.cancel();
				} else {
					if (player.getStorage("mbdanggu").length) {
						player.logSkill("mbmowang");
						//煞笔十常侍
						trigger.excludeMark.add("mbdanggu");
						trigger.noDieAudio = true;
						//trigger.includeOut = true;
						trigger.reserveOut = true;
					} else {
						game.broadcastAll(function (player) {
							player.name1 = player.name;
							player.skin.name = player.name + "_dead";
							player.smoothAvatar(false);
							player.node.avatar.setBackground(player.name + "_dead", "character");
							player.node.name.innerHTML = get.slimName(player.name);
							delete player.name2;
							delete player.skin.name2;
							player.classList.remove("fullskin2");
							player.node.avatar2.classList.add("hidden");
							player.node.name2.innerHTML = "";
							if (player == game.me && ui.fakeme) {
								ui.fakeme.style.backgroundImage = player.node.avatar.style.backgroundImage;
							}
						}, player);
					}
				}
			}
		},
		ai: {
			combo: "mbdanggu",
			neg: true,
		},
		subSkill: {
			die: {
				audio: "mbmowang",
				trigger: { player: "phaseAfter" },
				forced: true,
				// forceDie: true,
				async content(event, trigger, player) {
					if (lib.skill.mbdanggu.isSingleShichangshi(player)) {
						if (!player.getStorage("mbdanggu").length) {
							game.broadcastAll(function (player) {
								player.name1 = player.name;
								player.skin.name = player.name + "_dead";
								player.smoothAvatar(false);
								player.node.avatar.setBackground(player.name + "_dead", "character");
								player.node.name.innerHTML = get.slimName(player.name);
								delete player.name2;
								delete player.skin.name2;
								player.classList.remove("fullskin2");
								player.node.avatar2.classList.add("hidden");
								player.node.name2.innerHTML = "";
								if (player == game.me && ui.fakeme) {
									ui.fakeme.style.backgroundImage = player.node.avatar.style.backgroundImage;
								}
							}, player);
						}
					}
					if (!player.getStorage("mbdanggu").length) {
						await game.delay();
					}
					await player.die();
				},
			},
			return: {
				trigger: { player: "restEnd" },
				forced: true,
				charlotte: true,
				silent: true,
				forceDie: true,
				forceOut: true,
				filter(event, player) {
					return event.player == player && player.hasSkill("mbdanggu", null, null, false);
				},
				async content(event, trigger, player) {
					game.broadcastAll(function (player) {
						if (player.name1 == "shichangshi") {
							player.smoothAvatar(false);
							player.node.avatar.setBackground(player.name1, "character");
							if (!lib.skill.mbdanggu.isSingleShichangshi(player)) {
								player.skin.name = player.name1;
							}
						}
						if (player.name2 == "shichangshi") {
							player.smoothAvatar(true);
							player.node.avatar2.setBackground(player.name2, "character");
							if (!lib.skill.mbdanggu.isSingleShichangshi(player)) {
								player.skin.name2 = player.name2;
							}
						}
					}, player);
					delete player.storage.mbdanggu_current;
					if (lib.skill.mbdanggu.isSingleShichangshi(player)) {
						game.broadcastAll(function (player) {
							player.name1 = player.name;
							player.skin.name = player.name;
							player.smoothAvatar(false);
							player.node.avatar.setBackground(player.name, "character");
							player.node.name.innerHTML = get.slimName(player.name);
							delete player.name2;
							delete player.skin.name2;
							player.classList.remove("fullskin2");
							player.node.avatar2.classList.add("hidden");
							player.node.name2.innerHTML = "";
							if (player == game.me && ui.fakeme) {
								ui.fakeme.style.backgroundImage = player.node.avatar.style.backgroundImage;
							}
						}, player);
					}
					const next = game.createEvent("mbdanggu_clique");
					next.player = player;
					next.setContent(lib.skill.mbdanggu.contentx);
					await next;
					await player.draw(2);
				},
			},
		},
	};
	//赵忠
	lib.skill.scschiyan = {
		audio: 1,
		shaRelated: true,
		trigger: { player: "useCardToPlayered" },
		direct: true,
		filter(event, player) {
			return event.card.name == "sha" && event.target.hp > 0 && event.target.countCards("he") > 0;
		},
		content() {
			"step 0";
			var next = player.choosePlayerCard(trigger.target, "he", [1, 2], get.prompt("scschiyan", trigger.target));
			setTimeout(function () {
				game.broadcastAll(function () {
					decadeUI.animation.playSpine({ name: "shichangshi/scs_zhaozhong/XingXiang", action: "GongJi" }, { x: [0, 0.4], y: [0, 0.4], scale: 0.44 });
				});
			}, 100);
			next.set("ai", function (button) {
				if (!_status.event.goon) return 0;
				var val = get.value(button.link);
				if (button.link == _status.event.target.getEquip(2)) return 2 * (val + 3);
				return val;
			});
			next.set("goon", get.attitude(player, trigger.target) <= 0);
			next.set("forceAuto", true);
			"step 1";
			if (result.bool) {
				var target = trigger.target;
				player.logSkill("scschiyan", target);
				target.addSkill("scschiyan_get");
				target.addToExpansion("giveAuto", result.cards, target).gaintag.add("scschiyan_get");
			}
		},
		ai: {
			unequip_ai: true,
			directHit_ai: true,
			skillTagFilter(player, tag, arg) {
				if (get.attitude(player, arg.target) > 0) return false;
				if (tag == "directHit_ai") return arg.target.hp >= Math.max(1, arg.target.countCards("h") - 1);
				if (arg && arg.name == "sha" && arg.target.getEquip(2)) return true;
				return false;
			},
		},
		group: "scschiyan_damage",
		subSkill: {
			get: {
				trigger: { global: "phaseEnd" },
				forced: true,
				popup: false,
				charlotte: true,
				filter(event, player) {
					return player.getExpansions("scschiyan_get").length > 0;
				},
				content() {
					"step 0";
					var cards = player.getExpansions("scschiyan_get");
					player.gain(cards, "draw");
					game.log(player, "收回了" + get.cnNumber(cards.length) + "张“鸱咽”牌");
					"step 1";
					player.removeSkill("scschiyan_get");
				},
				intro: {
					markcount: "expansion",
					mark(dialog, storage, player) {
						var cards = player.getExpansions("scschiyan_get");
						if (player.isUnderControl(true)) dialog.addAuto(cards);
						else return "共有" + get.cnNumber(cards.length) + "张牌";
					},
				},
			},
			damage: {
				audio: "scschiyan",
				trigger: { source: "damageBegin1" },
				forced: true,
				locked: false,
				logTarget: "player",
				filter(event, player) {
					var target = event.player;
					return event.getParent().name == "sha" && player.countCards("h") >= target.countCards("h") && player.countCards("e") >= target.countCards("e");
				},
				content() {
					trigger.num++;
				},
			},
		},
	};
	//夏恽
	lib.skill.scsyaozhuo = {
		audio: 1,
		enable: "phaseUse",
		usable: 1,
		filter(event, player) {
			return game.hasPlayer(function (current) {
				return player.canCompare(current);
			});
		},
		filterTarget(card, player, current) {
			return player.canCompare(current);
		},
		content() {
			"step 0";
			player.chooseToCompare(target);
			"step 1";
			if (result.bool) {
				target.skip("phaseDraw");
				target.addTempSkill("scsyaozhuo_skip", { player: "phaseDrawSkipped" });
			} else player.chooseToDiscard(1, true, "he");
		},
		subSkill: {
			skip: {
				mark: true,
				intro: { content: "跳过下一个摸牌阶段" },
			},
		},
		ai: {
			order: 1,
			result: {
				target(player, target) {
					if (target.skipList.includes("phaseDraw") || target.hasSkill("pingkou")) return 0;
					var hs = player.getCards("h").sort(function (a, b) {
						return b.number - a.number;
					});
					var ts = target.getCards("h").sort(function (a, b) {
						return b.number - a.number;
					});
					if (!hs.length || !ts.length) return 0;
					if (hs[0].number > ts[0].number - 2 && hs[0].number > 5) return -1;
					return 0;
				},
			},
		},
	};
	//韩悝
	lib.skill.scsxiaolu = {
		audio: 1,
		enable: "phaseUse",
		usable: 1,
		content() {
			"step 0";
			setTimeout(function () {
				game.broadcastAll(function () {
					decadeUI.animation.playSpine({ name: "shichangshi/scs_hankui/XingXiang", action: "GongJi" }, { x: [0, 0.4], y: [0, 0.4], scale: 0.49 });
				});
			}, 100);
			player.draw(3);
			"step 1";
			var num = player.countCards("he");
			if (!num) event.finish();
			else if (num < 3) event._result = { index: 1 };
			else
				player
					.chooseControl()
					.set("choiceList", ["将三张牌交给一名其他角色", "弃置三张手牌"])
					.set("ai", function () {
						if (
							game.hasPlayer(function (current) {
								return current != player && get.attitude(player, current) > 0;
							})
						)
							return 0;
						return 1;
					});
			"step 2";
			if (result.index == 0) {
				player.chooseCardTarget({
					position: "he",
					filterCard: true,
					selectCard: 3,
					filterTarget(card, player, target) {
						return player != target;
					},
					ai1(card) {
						return get.unuseful(card);
					},
					ai2(target) {
						var att = get.attitude(_status.event.player, target);
						if (target.hasSkillTag("nogain")) att /= 10;
						if (target.hasJudge("lebu")) att /= 5;
						return att;
					},
					prompt: "选择三张牌，交给一名其他角色",
					forced: true,
				});
			} else {
				player.chooseToDiscard(3, true, "he");
				event.finish();
			}
			"step 3";
			if (result.bool) {
				var target = result.targets[0];
				player.give(result.cards, target);
			}
		},
		ai: {
			order: 9,
			result: { player: 2 },
		},
	};
	lib.translate.mbdanggu_info = "锁定技。①游戏开始时，你获得十张“常侍”牌，然后你进行一次结党。②当你修整结束后，你进行一次结党并摸两张牌。③若你有亮出的“常侍”牌，你视为拥有这些牌的技能。";
	lib.translate.scschiyan_info = "①当你使用【杀】指定目标后，你可以将其的至多两张牌置于其武将牌上，然后其于当前回合结束时获得这些牌。②当你因执行【杀】的效果对一名角色造成伤害时，若该角色的手牌数和装备区内的牌数均不大于你，此伤害+1。";
	lib.translate.scsyaozhuo_info = "出牌阶段限一次。你可以与一名角色拼点，若你赢，其跳过下一个摸牌阶段；若你没赢，你弃置一张牌。";
	lib.translate.scsxiaolu_info = "出牌阶段限一次。你可以摸三张牌，然后选择一项：1.弃置三张牌；2.将三张牌交给一名其他角色。";
	lib.character.scs_gaowang = ["male", "qun", "", ["scsanruo"], ["unseen", "sex:male_castrated"]];
}
//郑玄增强
if (lib.config.extension_星之梦_zxEnhance) {
	lib.skill.zhengjing = {
		audio: 2,
		enable: "phaseUse",
		usable: 1,
		filter(event, player) {
			return !player.hasSkill("zhengjing3");
		},
		content() {
			"step 0";
			//game.trySkillAudio('zhengjing_guanju',player);
			if (_status.connectMode) event.time = lib.configOL.choose_timeout;
			var cards = [];
			var names = [];
			while (true) {
				var card = get.cardPile(function (carde) {
					return carde.name != "du" && !names.includes(carde.name);
				});
				if (card) {
					cards.push(card);
					names.push(card.name);
					if (cards.length == 3 && !get.isLuckyStar(player) && Math.random() < 0.33) break;
					if (cards.length == 4 && !get.isLuckyStar(player) && Math.random() < 0.5) break;
					if (cards.length >= 5) break;
				} else break;
			}
			event.cards = cards;
			if (!cards.length) {
				event.finish();
				return;
			}
			event.videoId = lib.status.videoId++;
			if (player.isUnderControl()) {
				game.swapPlayerAuto(player);
			}
			var switchToAuto = function () {
				names.remove("du");
				game.pause();
				game.countChoose();
				setTimeout(function () {
					_status.imchoosing = false;
					event._result = {
						bool: true,
						links: names.slice(0),
					};
					if (event.dialog) event.dialog.close();
					if (event.control) event.control.close();
					game.resume();
				}, 5000);
			};
			var createDialog = function (player, id) {
				if (_status.connectMode) lib.configOL.choose_timeout = "30";
				if (player == game.me) return;
				var str = get.translation(player) + "正在整理经书...<br>";
				ui.create.dialog(str).videoId = id;
			};
			var chooseButton = function (list) {
				var roundmenu = false;
				if (ui.roundmenu && ui.roundmenu.display != "none") {
					roundmenu = true;
					ui.roundmenu.style.display = "none";
				}
				var event = _status.event;
				event.settleed = false;
				event.finishedx = [];
				event.map = {};
				var names = list.slice(0);
				event.zhengjing_nodes = [];
				names.push("du");
				names.randomSort();
				var names2 = names.slice(0);
				for (var i = 0; i < 2; i++) {
					names2.randomSort();
					names = names.concat(names2);
				}

				event.zhengjing = names;
				for (var i of list) {
					event.map[i] = 0;
				}
				event.dialog = ui.create.dialog("forcebutton", "hidden");
				event.dialog.textPrompt = event.dialog.add('<div class="text center">及时点击卡牌，但不要点到毒了！</div>');
				var str = '<div class="text center">';
				for (var i of list) {
					str += get.translation(i) + ":" + Math.min(2, event.map[i]) + "/2 ";
				}
				str += "</div>";
				event.dialog.textPrompt2 = event.dialog.add(str);
				event.switchToAuto = function () {
					event._result = {
						bool: true,
						links: event.finishedx.slice(0),
					};
					event.dialog.close();
					game.resume();
					_status.imchoosing = false;
					if (roundmenu) ui.roundmenu.style.display = "";
				};
				event.dialog.classList.add("fixed");
				event.dialog.classList.add("scroll1");
				event.dialog.classList.add("scroll2");
				event.dialog.classList.add("fullwidth");
				event.dialog.classList.add("fullheight");
				event.dialog.classList.add("noupdate");
				event.dialog.open();
				event.settle = function (du) {
					if (event.settleed) return;
					event.settleed = true;
					event.dialog.textPrompt2.innerHTML = "";
					if (du) {
						if (lib.config.background_speak) game.playAudio("skill", "zhengjing_boom");
						event.dialog.textPrompt.innerHTML = '<div class="text center">叫你别点毒你非得点 这下翻车了吧</div>';
					} else {
						if (lib.config.background_speak) game.playAudio("skill", "zhengjing_finish");
						event.dialog.textPrompt.innerHTML = '<div class="text center">整理经典结束！共整理出' + get.cnNumber(event.finishedx.length) + "份经典</div>";
					}
					while (event.zhengjing_nodes.length) {
						event.zhengjing_nodes.shift().delete();
					}
					setTimeout(function () {
						event.switchToAuto();
					}, 1000);
				};

				var click = function () {
					var name = this.name;
					if (name == "du") {
						event.zhengjing.length = 0;
						event.settle(true);
					} else {
						if (lib.config.background_speak) game.playAudio("skill", "zhengjing_click");
						event.map[name]++;
						if (event.map[name] > 1) event.finishedx.add(name);
						if (event.finishedx.length < list.length) {
							var str = '<div class="text center">';
							for (var i of list) {
								str += get.translation(i) + ":" + Math.min(2, event.map[i]) + "/2 ";
							}
							str += "</div>";
							event.dialog.textPrompt2.innerHTML = str;
						} else {
							event.zhengjing.length = 0;
							event.settle();
						}
					}
					event.zhengjing_nodes.remove(this);
					this.style.transition = "all 0.5s";
					this.style.transform = "scale(1.2)";
					this.delete();
				};
				var addNode = function () {
					if (event.zhengjing.length) {
						var card = ui.create.card(ui.special, "noclick", true);
						card.init(["", "", event.zhengjing.shift()]);
						card.addEventListener(lib.config.touchscreen ? "touchstart" : "mousedown", click);
						event.zhengjing_nodes.push(card);
						card.style.position = "absolute";
						var rand1 = Math.round(Math.random() * 100);
						var rand2 = Math.round(Math.random() * 100);
						var rand3 = Math.round(Math.random() * 40) - 20;
						card.style.left = "calc(" + rand1 + "% - " + rand1 + "px)";
						card.style.top = "calc(" + rand2 + "% - " + rand2 + "px)";
						card.style.transform = "scale(0.8) rotate(" + rand3 + "deg)";
						card.style.opacity = 0;
						event.dialog.appendChild(card);
						ui.refresh(card);
						card.style.opacity = 1;
						card.style.transform = "scale(1) rotate(" + rand3 + "deg)";
					}
					if (event.zhengjing_nodes.length > (event.zhengjing.length > 0 ? 2 : 0)) event.zhengjing_nodes.shift().delete();
					if (event.zhengjing.length || event.zhengjing_nodes.length)
						setTimeout(function () {
							addNode();
						}, 800);
					else event.settle();
				};

				game.pause();
				game.countChoose();
				addNode();
			};
			//event.switchToAuto=switchToAuto;
			game.broadcastAll(createDialog, player, event.videoId);
			if (event.isMine()) {
				chooseButton(names);
			} else if (event.isOnline()) {
				event.player.send(chooseButton, names);
				event.player.wait();
				game.pause();
			} else {
				switchToAuto();
			}
			"step 1";
			game.broadcastAll(
				function (id, time) {
					if (_status.connectMode) lib.configOL.choose_timeout = time;
					var dialog = get.idDialog(id);
					if (dialog) {
						dialog.close();
					}
				},
				event.videoId,
				event.time
			);
			var result = event.result || result;
			for (var i = 0; i < cards.length; i++) {
				//if(cards.length==1) break;
				if (!result.links.includes(cards[i].name)) cards.splice(i--, 1);
			}
			if (cards.length) {
				player.showCards(cards, get.translation(player) + "整理出了以下经典");
				game.cardsGotoOrdering(cards);
			} else {
				game.log(player, "并没有整理出经典");
				player.popup("杯具");
				event.finish();
			}
			"step 2";
			game.updateRoundNumber();
			player.chooseTarget(true, "将整理出的经典置于一名角色的武将牌上").set("ai", function (target) {
				if (target.hasSkill("xinfu_pdgyingshi")) return 0;
				let player = _status.event.player,
					cards = _status.event.getParent().cards,
					att = get.attitude(player, target),
					js = target.getCards("j", i => {
						let name = i.viewAs || i.name,
							info = lib.card[name];
						if (!info || !info.judge) return false;
						return true;
					}),
					eff = -1.5 * get.effect(target, { name: "draw" }, player, player);
				if (js.length)
					eff += js.reduce((acc, i) => {
						let name = i.viewAs || i.name;
						return acc - 0.7 * get.effect(target, get.autoViewAs({ name }, [i]), target, player);
					}, 0);
				return eff;
			});
			"step 3";
			if (result.bool) {
				var target = result.targets[0];
				event.target = target;
				player.line(target, "thunder");
			}
			"step 4";
			if (cards.length == 1) {
				event._result = { bool: true, moved: [cards, []] };
				return;
			}
			var next = player.chooseToMove("整经：请分配整理出的经典", true);
			next.set("list", [["置于" + get.translation(target) + "的武将牌上", cards], ["自己获得"]]);
			next.set("filterMove", function (from, to, moved) {
				if (moved[0].length == 1 && to == 1 && from.link == moved[0][0]) return false;
				return true;
			});
			next.set("filterOk", function (moved) {
				return moved[0].length > 0;
			});
			next.set("processAI", function (list) {
				var cards = list[0][1].slice(0).sort(function (a, b) {
					return get.value(a) - get.value(b);
				});
				return [cards.splice(0, 1), cards];
			});
			"step 5";
			if (result.bool) {
				var cards = result.moved[0],
					gains = result.moved[1];
				target.addSkill("zhengjing2");
				target.addToExpansion(cards, "gain2").gaintag.add("zhengjing2");
				if (gains.length) player.gain(gains, "gain2");
			}
		},
		ai: {
			order: 10,
			result: { player: 1 },
			threaten: 3.2,
		},
	};
	//水 果 忍 者
	lib.skill.bilibili_zhengjing = {
		audio: "zhengjing",
		inherit: "zhengjing",
		async content(event, trigger, player) {
			let cards = [],
				names = [],
				types = [];
			while (true) {
				const card = get.cardPile(card => {
					//判定类型是否补充完毕的辅助牌
					const card2 = get.cardPile(card2 => card2.name !== "du" && !names.includes(card2.name) && !types.includes(get.type2(card2)));
					//先填补每种类型的牌各一张，然后补充其他的牌
					return card.name !== "du" && !names.includes(card.name) && (!types.includes(get.type2(card)) || !card2);
				});
				if (card) {
					cards.push(card);
					names.push(card.name);
					types.push(get.type2(card));
					if (cards.length == 3 && !get.isLuckyStar(player) && Math.random() < 0.33) break;
					if (cards.length == 4 && !get.isLuckyStar(player) && Math.random() < 0.5) break;
					if (cards.length >= 5) break;
				} else break;
			}
			if (!cards.length) return event.finish();
			let cardx = { du: names.length },
				num = [3, 4].randomGet();
			for (const i of names) cardx[i] = num; //切牌数
			await Promise.all(event.next);
			if (_status.connectMode) event.time = lib.configOL.choose_timeout;
			event.videoId = lib.status.videoId++;
			if (player.isUnderControl()) game.swapPlayerAuto(player);
			const switchToAuto = () => {
				return new Promise(resolve => {
					game.pause();
					game.countChoose();
					event._result = {};
					for (const i in cardx) event._result[i] = cardx[i];
					setTimeout(() => {
						_status.imchoosing = false;
						if (event.dialog) event.dialog.close();
						game.resume();
						resolve(event._result);
					}, 5000);
				});
			};
			const createDialog = (player, id) => {
				if (_status.connectMode) lib.configOL.choose_timeout = "30";
				if (player === game.me) return;
				const dialog = ui.create.dialog(get.translation(player) + "正在整理经书...<br>");
				dialog.videoId = id;
			};
			const chooseButton = cardx => {
				const { promise, resolve } = Promise.withResolvers(),
					event = _status.event;
				event.dialog = (cards => {
					let cards1 = [],
						lineList = [],
						pointList = [],
						pointNum = 0,
						result = {},
						interval;
					for (const i in cards) cards1 = cards1.concat(Array.from({ length: cards[i] }).map(() => i));
					if (!cards1.length) cards1.push("sha");
					const finish = () => {
						clearInterval(interval);
						_status.imchoosing = false;
						if (event.dialog) event.dialog.close();
						event._result = result;
						resolve(event._result);
						game.resume();
					};
					const dialog = (event.dialog = ui.create.dialog("hidden"));
					dialog.classList.add("popped");
					dialog.classList.add("static");
					dialog.style.height = "100%";
					dialog.style.width = "100%";
					dialog.style.top = "0px";
					dialog.style.left = "0px";
					dialog.style["text-align"] = "left";
					ui.window.appendChild(dialog);
					dialog.innerHTML = "";
					const getAngle = (x1, y1, x2, y2) => {
						var x = x1 - x2;
						var y = y1 - y2;
						var z = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
						var cos = y / z;
						var radina = Math.acos(cos);
						var angle = 180 / (Math.PI / radina);
						if (x2 > x1 && y2 === y1) angle = 0;
						if (x2 > x1 && y2 < y1) angle = angle - 90;
						if (x2 === x1 && y1 > y2) angle = -90;
						if (x2 < x1 && y2 < y1) angle = 270 - angle;
						if (x2 < x1 && y2 === y1) angle = 180;
						if (x2 < x1 && y2 > y1) angle = 270 - angle;
						if (x2 === x1 && y2 > y1) angle = 90;
						if (x2 > x1 && y2 > y1) angle = angle - 90;
						return angle;
					};
					const createLine = e => {
						if (dialog.hadClicked == true) {
							if (e.changedTouches) e = e.changedTouches[e.changedTouches.length - 1];
							if (pointNum % 3 == 0) {
								pointList.push([e.clientX / game.documentZoom, e.clientY / game.documentZoom]);
								if (pointList.length >= 2) {
									var point0 = pointList[pointList.length - 2];
									var point1 = pointList[pointList.length - 1];
									var x0 = point0[0];
									var y0 = point0[1];
									var x1 = point1[0];
									var y1 = point1[1];
									var div = document.createElement("div");
									div.style.zIndex = 1;
									div.style.borderRadius = "4px";
									div.style.position = "fixed";
									div.style.background = "#ffffff";
									div.style.height = "4px";
									div.style.width = Math.pow(Math.pow(x1 - x0, 2) + Math.pow(y1 - y0, 2), 0.5) + 2 + "px";
									div.style.left = x0 + 2 + "px";
									div.style.top = y0 + 2 + "px";
									div.style.transform = "rotate(" + getAngle(x0, y0, x1, y1) + "deg)";
									div.style["transform-origin"] = "0 50%";
									dialog.appendChild(div);
									lineList.push(div);
									if (lineList.length > 3) {
										var div1 = lineList[0];
										div1.style.transition = "opacity 0.25s";
										div1.style.opacity = 0;
										setTimeout(() => {
											if (div1.parentNode != undefined) div1.parentNode.removeChild(div1);
										}, 250);
										lineList.remove(lineList[0]);
										pointList[0] = 1;
										pointList.remove(pointList[0]);
									}
								}
							}
							pointNum++;
						}
					};
					const clearLine = () => {
						const deleteLine = () => {
							const div1 = lineList[0];
							div1.style.transition = "opacity 0.25s";
							div1.style.opacity = 0;
							setTimeout(() => {
								if (div1.parentNode != undefined) div1.parentNode.removeChild(div1);
							}, 250);
							lineList.remove(lineList[0]);
							if (lineList.length > 0) deleteLine();
						};
						if (lineList.length > 0) deleteLine();
						pointList = [];
					};
					dialog.addEventListener(lib.device ? "touchstart" : "mousedown", e => {
						e.stopPropagation();
						dialog.hadClicked = true;
						pointNum = 0;
					});
					dialog.addEventListener(lib.device ? "touchmove" : "mousemove", createLine);
					dialog.addEventListener(lib.device ? "touchend" : "mouseup", e => {
						e.stopPropagation();
						delete dialog.hadClicked;
						clearLine();
					});
					const createCard = name => {
						const left = Math.ceil(Math.random() * 560),
							card = ui.create.card(null, "noclick", true);
						card.init({ name: name });
						if (name == "du") card.style["box-shadow"] = "rgba(0, 0, 0, 0.2) 0 0 0 1px,rgba(255, 0, 0, 0.4) 0 0 5px, rgba(255, 0, 0, 0.4) 0 0 12px, rgba(255, 0, 0, 0.8) 0 0 15px";
						card.style["pointer-events"] = "none";
						card.style.position = "absolute";
						card.style.top = dialog.offsetHeight - 5 + "px";
						card.style.left = left + "px";
						card.style.transition = "opacity 0.25s";
						card.style.opacity = 0;
						dialog.appendChild(card);
						setTimeout(() => (card.style.opacity = 1), 10);
						var t_x = 0,
							t_y = 0,
							s_x = 0,
							s_y = 0,
							s_y0 = 0,
							t_x_increase = 0,
							t_y_increase = 0.3;
						var v_y = [90, 95, 100, 105, 110, 115, 105, 110, 115].randomGet();
						var a_y = [9, 9.2, 9.4, 9.6, 9.8, 10, 10.2, 10.4, 10.6, 10.8, 11].randomGet();
						var isMovingUp = true,
							cardLeft = card.offsetLeft,
							cardTop = card.offsetTop,
							num_x = 63;
						if (v_y == 90) num_x = 56;
						else if (v_y == 95) num_x = 60;
						else if (v_y == 100) num_x = 63;
						else if (v_y == 105) num_x = 67;
						else if (v_y == 110) num_x = 70;
						else num_x = 74;
						if ([true, false].randomGet()) {
							let s1 = dialog.offsetWidth - card.offsetWidth - left;
							t_x_increase = (s1 / num_x) * Math.random();
						} else {
							let s1 = left;
							t_x_increase = -(s1 / num_x) * Math.random();
						}
						const interval1 = setInterval(() => {
							if (!_status.paused2) {
								t_x += t_x_increase;
								s_x = t_x;
								card.style.left = cardLeft + s_x + "px";
								t_y += t_y_increase;
								s_y = -(v_y * t_y - (a_y * Math.pow(t_y, 2)) / 2);
								card.style.top = cardTop + s_y + "px";
								if (isMovingUp == true) {
									if (s_y - s_y0 > 0) isMovingUp = !isMovingUp;
									s_y0 = s_y;
								}
								if (card.offsetTop > dialog.offsetHeight + 5 - card.offsetWidth && isMovingUp == false && card.hadHide != true) {
									card.hadHide = true;
									card.style.transition = "opacity .3s";
									card.style.opacity = 0;
									setTimeout(() => {
										card.delete();
										clearInterval(interval1);
									}, 350);
								}
								if (card.hadCut != true) {
									for (var i = 0; i < pointList.length; i++) {
										if (card.hadCut == true || pointList[i + 1] == undefined) continue;
										var point0 = pointList[i];
										var point1 = pointList[i + 1];
										var x0 = point0[0] - dialog.offsetLeft;
										var y0 = point0[1] - dialog.offsetTop;
										var x1 = point1[0] - dialog.offsetLeft;
										var y1 = point1[1] - dialog.offsetTop;
										var bool = false;
										var x0_card = card.offsetLeft;
										var x1_card = card.offsetLeft + card.offsetWidth;
										var y0_card = card.offsetTop;
										var y1_card = card.offsetTop + card.offsetHeight;
										var xiangjiao = function (line1, line2) {
											var x1 = line1[0][0];
											var x2 = line1[1][0];
											var x3 = line2[0][0];
											var x4 = line2[1][0];
											var y1 = line1[0][1];
											var y2 = line1[1][1];
											var y3 = line2[0][1];
											var y4 = line2[1][1];
											if (!(Math.min(x1, x2) <= Math.max(x3, x4) && Math.min(y3, y4) <= Math.max(y1, y2) && Math.min(x3, x4) <= Math.max(x1, x2) && Math.min(y1, y2) <= Math.max(y3, y4))) return false;
											else return true;
										};
										var line = [
											[x0, y0],
											[x1, y1],
										];
										if (
											xiangjiao(line, [
												[x0_card, y0_card],
												[x0_card, y1_card],
											]) == true
										)
											bool = true;
										if (
											xiangjiao(line, [
												[x0_card, y1_card],
												[x1_card, y1_card],
											]) == true
										)
											bool = true;
										if (
											xiangjiao(line, [
												[x1_card, y1_card],
												[x1_card, y0_card],
											]) == true
										)
											bool = true;
										if (
											xiangjiao(line, [
												[x1_card, y0_card],
												[x0_card, y0_card],
											]) == true
										)
											bool = true;
										if (bool) {
											if (card.name == "du") {
												if (lib.config.background_speak) game.playAudio("skill", "zhengjing_boom");
												finish();
											} else {
												if (lib.config.background_speak) game.playAudio("skill", "zhengjing_click");
												if (!result[card.name]) result[card.name] = 0;
												result[card.name]++;
											}
											card.hadCut = true;
											card.style.transition = "all .3s";
											card.style.transform = "scale(1.5)";
											card.style.opacity = 0;
											setTimeout(() => card.delete(), 350);
											clearInterval(interval1);
										}
									}
								}
							}
							if (dialog.parentNode == undefined) clearInterval(interval1);
						}, 50);
					};
					interval = setInterval(() => {
						if (!_status.paused2) {
							const num2 = [0, 1, 1, 1, 1, 2, 2, 3].randomGet();
							if (num2 > 0 && cards1.length) {
								for (let i = 0; i < num2; i++) {
									createCard(cards1.randomRemove());
									if (!cards1.length) {
										setTimeout(() => finish(), 3000);
										break;
									}
								}
							}
						}
					}, 1000);
					return dialog;
				})(cardx);
				event.switchToAuto = () => {
					event._result = {};
					for (const i in cardx) event._result[i] = cardx[i];
					game.resume();
					resolve(event._result);
				};
				_status.imchoosing = true;
				game.pause();
				game.countChoose();
				return promise;
			};
			game.broadcastAll(createDialog, player, event.videoId);
			let next;
			if (event.isMine()) next = chooseButton(cardx);
			else if (event.isOnline()) {
				const { promise, resolve } = Promise.withResolvers();
				event.player.send(chooseButton, cardx);
				event.player.wait(async result => {
					if (result == "ai") result = await switchToAuto();
					resolve(result);
				});
				game.pause();
				next = promise;
			} else next = switchToAuto();
			const result = await next.forResult();
			game.broadcastAll(
				(id, time) => {
					if (_status.connectMode) lib.configOL.choose_timeout = time;
					const dialog = get.idDialog(id);
					if (dialog) dialog.close();
				},
				event.videoId,
				event.time
			);
			for (let i = 0; i < cards.length; i++) {
				if (!result[cards[i].name] || result[cards[i].name] < num) cards.splice(i--, 1);
			}
			if (!cards.length) {
				game.log(player, "并没有整理出经典");
				player.popup("杯具");
				await game.delayx();
				return event.finish();
			}
			player.popup("洗具");
			game.broadcastAll(() => {
				if (lib.config.background_speak) game.playAudio("skill", "zhengjing_finish");
			});
			await player.showCards(cards, get.translation(player) + "整理出了以下经典");
			await game.cardsGotoOrdering(cards);
			const result2 = await player
				.chooseTarget("整经：请选择一名角色", "将整理出的经典（" + get.translation(cards) + "）置于其武将牌上", true)
				.set("ai", target => {
					const player = get.player();
					if (target.hasSkill("xinfu_pdgyingshi")) return 0;
					return -get.attitude(player, target);
				})
				.forResult();
			if (result2?.bool && result2.targets.length) {
				const target = result2.targets[0];
				player.line(target, "thunder");
				let result3;
				if (cards.length === 1) result3 = { bool: true, moved: [cards, []] };
				else {
					const next2 = player.chooseToMove("整经：请分配整理出的经典", true);
					next2.set("list", [["置于" + get.translation(target) + "的武将牌上", cards], ["自己获得"]]);
					next2.set("filterMove", function (from, to, moved) {
						if (moved[0].length == 1 && to == 1 && from.link == moved[0][0]) return false;
						return true;
					});
					next2.set("filterOk", function (moved) {
						return moved[0].length > 0;
					});
					next2.set("processAI", function (list) {
						var cards = list[0][1].slice(0).sort(function (a, b) {
							return get.value(a) - get.value(b);
						});
						return [cards.splice(0, 1), cards];
					});
					result3 = await next2.forResult();
				}
				if (result3.bool) {
					const [puts, gains] = result3.moved;
					target.addSkill("zhengjing2");
					const next3 = target.addToExpansion(puts, "gain2");
					next3.gaintag.add("zhengjing2");
					await next3;
					if (gains.length) await player.gain(gains, "gain2");
				}
			}
		},
	};
}
//笮融增强
if (lib.config.extension_星之梦_zrEnhance) {
	lib.skill.mbfutu = {
		audio: 8,
		logAudio: (event, player, name, target, costResult) => {
			return (costResult.cost_data == "black" ? [1, 2] : [3, 4]).map(i => `mbfutu${i}.mp3`);
		},
		trigger: {
			global: "phaseEnd",
		},
		filter(event, player) {
			return ["damage", "recover"].some(name => get.info("mbfutu")?.isMax(player, name));
		},
		isMax(player, name) {
			let count = current => {
				let history = _status.globalHistory?.[_status.globalHistory.length - 1]?.everything,
					count = 0;
				if (!history?.length) {
					return count;
				}
				for (let evt of history) {
					if (evt._cancelled || evt.name != name) {
						continue;
					}
					if (evt?.source != current || typeof evt.num != "number") {
						continue;
					}
					count += evt.num;
				}
				return count;
			};
			return count(player) >= 0 && !game.hasPlayer(current => count(current) > count(player));
		},
		marktext: "业",
		intro: {
			name: "业",
			name2: "业",
			content: "expansion",
			markcount: "expansion",
		},
		async cost(event, trigger, player) {
			let list = ["damage", "recover"].filter(name => get.info(event.skill)?.isMax(player, name)),
				map = {
					damage: "black",
					recover: "red",
				};
			list = list.map(i => map[i]);
			event.result = await player
				.chooseBool(get.prompt(event.skill))
				.set("prompt2", `将牌堆顶首张${list.map(i => get.translation(i)).join("和")}牌置于武将牌上，称为“业”`)
				.forResult();
			event.result.cost_data = list;
		},
		async content(event, trigger, player) {
			const colors = event.cost_data,
				cards = [];
			for (let color of colors) {
				const card = get.cardPile2(card => get.color(card) == color);
				if (card) {
					cards.push(card);
				}
			}
			if (cards?.length) {
				const next = player.addToExpansion(cards, "gain2");
				next.gaintag.add(event.name);
				await next;
			}
		},
		group: "mbfutu_defend",
		subSkill: {
			defend: {
				trigger: {
					player: "damageBegin3",
				},
				audio: "mbfutu",
				logAudio: () => [5, 6, 7, 8].map(i => `mbfutu${i}.mp3`),
				filter(event, player) {
					return player.hasExpansions("mbfutu");
				},
				async cost(event, trigger, player) {
					const { bool, links } = await player
						.chooseButton([`###${get.prompt("mbfutu")}###弃置一张业并防止此伤害`, player.getExpansions("mbfutu")])
						.set("eff", get.damageEffect(player, trigger.source, player))
						.set("ai", button => {
							const { player, eff } = get.event();
							if (eff >= 0) {
								return 0;
							}
							return player.getExpansions("mbfutu")?.filter(card => {
								return get.color(card) == get.color(button.link);
							})?.length;
						})
						.forResult();
					event.result = {
						bool: bool,
						cards: links,
					};
				},
				async content(event, trigger, player) {
					await player.loseToDiscardpile(event.cards);
					trigger.cancel();
				},
			},
		},
	};
}
//虚拟偶像增强
if (lib.config.extension_星之梦_vtbEnhance) {
	//小乐
	lib.skill.vtbleyu = {
		audio: 1,
		trigger: {
			global: "phaseBegin",
		},
		direct: true,
		filter(event, player) {
			return player.countCards("he") >= 2;
		},
		content() {
			"step 0";
			player
				.chooseToDiscard(get.prompt2("vtbleyu", trigger.player), 2, "he")
				.set("ai", card => {
					if (ui.selected.cards.length == 2) return 10 - get.value(card);
					if (_status.event.effect > 0) {
						return 6 - get.value(card);
					}
					return 0;
				})
				.set("effect", trigger.player.hasJudge("lebu") ? 0 : get.effect(trigger.player, { name: "lebu" }, player, player))
				.set("logSkill", ["vtbleyu", trigger.player]);
			"step 1";
			if (result.bool) {
				trigger.player.judge(lib.card.lebu.judge).judge2 = lib.card.lebu.judge2;
			} else event.finish();
			"step 2";
			if (!result.bool) {
				trigger.player.skip("phaseUse");
			}
		},
		ai: {
			expose: 0.3,
			threaten: 2.9,
		},
	};
	lib.translate.vtbleyu_info = "一名角色的回合开始时，你可以弃置两张牌令其判定。若结果不为♥，其跳过本回合的出牌阶段。";
	//小闪
	lib.skill.vtbshanwu = {
		audio: 1,
		trigger: { target: "useCardToTargeted" },
		filter(event, player) {
			if (event.player == event.target) return false;
			if (event.card.name != "sha" && get.type(event.card) != "trick") return false;
			return player.hasShan() || _status.connectMode;
		},
		direct: true,
		async content(event, trigger, player) {
			const { bool } = await player
				.chooseToRespond(get.prompt("vtbshanwu"), (card, player) => {
					return get.name(card) == "shan";
				})
				.set("prompt2", "打出一张【闪】令" + get.translation(trigger.card) + "无效，然后你摸一张牌")
				.set("ai", card => {
					const trigger = get.event().getTrigger();
					return -get.effect(player, trigger.card, trigger.target, player);
				})
				.set("logSkill", "vtbshanwu")
				.forResult();
			if (bool) {
				trigger.getParent().excluded.add(player);
				await player.draw();
			}
		},
		group: ["vtbshanwu_shan", "vtbshanwu_qingguo"],
		subSkill: {
			shan: {
				audio: "vtbshanwu",
				trigger: {
					global: "useCardToTarget",
				},
				filter(event, player) {
					return (
						event.card.name == "sha" &&
						event.target != player &&
						event.isFirstTarget &&
						player.hasCard(card => {
							return get.name(card) == "shan" || _status.connectMode;
						})
					);
				},
				direct: true,
				content() {
					"step 0";
					player
						.chooseToDiscard(get.prompt("vtbshanwu_shan"), "弃置一张【闪】，取消此【杀】对" + get.translation(trigger.targets) + "的目标", { name: "shan" })
						.set("logSkill", "vtbshanwu")
						.set("ai", card => {
							if (_status.event.goon) return 6 - get.value(card);
							return 0;
						})
						.set(
							"goon",
							(function () {
								var effect = 0;
								for (var target of trigger.targets) {
									var eff = get.effect(target, trigger.card, trigger.player, player);
									if (
										!target.mayHaveShan(
											player,
											"use",
											target.getCards("h", i => {
												return i.hasGaintag("sha_notshan");
											})
										) ||
										trigger.player.hasSkillTag(
											"directHit_ai",
											true,
											{
												target: target,
												card: trigger.card,
											},
											true
										)
									) {
										eff *= 1.25;
									}
									if (target.hp <= 2) eff *= 1.1;
									effect += eff;
								}
								return effect < 0;
							})()
						);
					"step 1";
					if (result.bool) {
						game.log(player, "取消了", trigger.card, "的所有目标");
						trigger.targets.length = 0;
						trigger.getParent().triggeredTargets2.length = 0;
						trigger.untrigger();
					}
				},
				ai: {
					expose: 0.2,
				},
			},
			qingguo: {
				audio: "vtbshanwu",
				inherit: "reqingguo",
				mod: {
					aiValue(player, card, num) {
						if (get.name(card) != "shan" && get.type(card) != "equip") return;
						var cards = player.getCards("hs", card => {
							return get.name(card) == "shan" || get.type(card) == "equip";
						});
						cards.sort((a, b) => (get.name(b) == "shan" ? 1 : 2) - (get.name(a) == "shan" ? 1 : 2));
						var geti = function () {
							if (cards.includes(card)) return cards.indexOf(card);
							return cards.length;
						};
						if (get.name(card) == "shan") return Math.min(num, [6, 4, 3][Math.min(geti(), 2)]) * 0.6;
						return Math.max(num, [6.5, 4, 3][Math.min(geti(), 2)]);
					},
					aiUseful() {
						return lib.skill.vtbshanwu.subSkill.qingguo.mod.aiValue.apply(this, arguments);
					},
				},
				filterCard(card) {
					return get.type(card) == "equip";
				},
				viewAsFilter(player) {
					if (!player.countCards("hes", { type: "equip" })) return false;
				},
				prompt: "将一张装备牌当作【闪】使用或打出",
				ai: {
					order: 0.001,
					respondShan: true,
					skillTagFilter(player) {
						if (!player.countCards("hes", { type: "equip" })) return false;
					},
					effect: {
						target(card, player, target, current) {
							if (get.tag(card, "respondShan") && current < 0) return 0.7;
						},
					},
				},
			},
		},
	};
	lib.translate.vtbshanwu_info = "当其他角色成为【杀】的第一个目标时，你可以弃置一张【闪】，然后取消此【杀】的所有目标。当你成为其他角色使用【杀】或普通锦囊牌的目标后，你可以打出一张【闪】令此牌对你无效，然后你摸一张牌。你可以将一张装备牌当作【闪】使用或打出。";
}
//孙翊凶疑修改
if (lib.config.extension_星之梦_syEnhance) {
	lib.skill.syxiongyi = {
		audio: 2,
		skillAnimation: true,
		animationColor: "wood",
		limited: true,
		enable: "chooseToUse",
		filter(event, player) {
			if (event.type != "dying") {
				return false;
			}
			if (player != event.dying) {
				return false;
			}
			return true;
		},
		async content(event, trigger, player) {
			player.awakenSkill(event.name);
			if (!_status.characterlist) {
				game.initCharacterList();
			}
			if (_status.characterlist.includes("xushi") || _status.characterlist.includes("zc26_sp_xushi")) {
				let id;
				if (_status.characterlist.includes("xushi") && _status.characterlist.includes("zc26_sp_xushi")) {
					const result = await player
						.chooseControl(["xushi", "zc26_sp_xushi"])
						.set("dialog", ["选择要替换成的武将", [["xushi", "zc26_sp_xushi"], "character"]])
						.set("ai", () => [0, 1].randomGet())
						.forResult();
					id = result.control == "徐氏" ? "xushi" : "zc26_sp_xushi";
				} else if (_status.characterlist.includes("xushi")) {
					id = "xushi";
				} else {
					id = "zc26_sp_xushi";
				}
				if (player.name2 && get.character(player.name2)[3].includes("syxiongyi")) {
					await player.reinitCharacter(player.name2, id);
				} else {
					await player.reinitCharacter(player.name1, id);
				}
				if (player.hp < 3) {
					await player.recover(3 - player.hp);
				}
			} else {
				await player.addSkills("olhunzi");
				if (player.hp < 1) {
					await player.recover(1 - player.hp);
				}
			}
			await game.delay();
		},
		ai: {
			order: 1,
			save: true,
			skillTagFilter(player, arg, target) {
				return player == target;
			},
			result: {
				player: 10,
			},
		},
		derivation: ["olhunzi", "reyingzi", "gzyinghun"],
	};
	lib.translate.syxiongyi_info = `限定技。当你处于濒死状态时，若剩余武将牌堆中：有${get.poptip({
		id: "character_xushi",
		name: "徐氏",
		type: "character",
		dialog: "characterDialog",
	})}或${get.poptip({
		id: "character_zc26_sp_xushi",
		name: "SP徐氏",
		type: "character",
		dialog: "characterDialog",
	})}，则你可以将体力值回复至3点，并将此武将牌替换为${get.poptip("character_xushi")}或${get.poptip("character_zc26_sp_xushi")}；否则，你可以将体力值回复至1点并获得${get.poptip("olhunzi")}。`;
}
//语音修改
lib.skill.olfangquan = {
	audio: 2,
	audioname2: { shen_caopi: "caopi_xingdong", old_shen_caopi: "caopi_xingdong" },
	trigger: { player: "phaseUseBefore" },
	filter(event, player) {
		return player.countCards("h") > 0 && !player.hasSkill("olfangquan3");
	},
	direct: true,
	async content(event, trigger, player) {
		// step 0
		var fang = player.countMark("olfangquan2") == 0 && player.hp >= 2 && player.countCards("h") <= player.hp + 2;
		const result = await player
			.chooseBool(get.prompt2("olfangquan"))
			.set("ai", function () {
				if (!_status.event.fang) {
					return false;
				}
				return game.hasPlayer(function (target) {
					if (target.hasJudge("lebu") || target == player) {
						return false;
					}
					if (get.attitude(player, target) > 4) {
						return get.threaten(target) / Math.sqrt(target.hp + 1) / Math.sqrt(target.countCards("h") + 1) > 0;
					}
					return false;
				});
			})
			.set("fang", fang)
			.forResult();
		// step 1
		if (result.bool) {
			player.logSkill("olfangquan");
			trigger.cancel();
			player.addTempSkill("olfangquan2");
			player.addMark("olfangquan2", 1, false);
		}
	},
};
lib.skill.rezhiheng = {
	audio: 2,
	audioname2: { shen_caopi: "rezhiheng_shen_caopi", new_simayi: "rezhiheng_new_simayi", jsrg_sunce: "rezhiheng_jsrg_sunce" },
	mod: {
		aiOrder(player, card, num) {
			if (num <= 0 || get.itemtype(card) !== "card" || get.type(card) !== "equip") {
				return num;
			}
			let eq = player.getEquip(get.subtype(card));
			if (eq && get.equipValue(card) - get.equipValue(eq) < Math.max(1.2, 6 - player.hp)) {
				return 0;
			}
		},
	},
	locked: false,
	enable: "phaseUse",
	usable: 1,
	position: "he",
	filterCard: lib.filter.cardDiscardable,
	discard: false,
	lose: false,
	delay: false,
	selectCard: [1, Infinity],
	allowChooseAll: true,
	check(card) {
		let player = _status.event.player;
		if (
			get.position(card) == "h" &&
			!player.countCards("h", "du") &&
			(player.hp > 2 ||
				!player.countCards("h", i => {
					return get.value(i) >= 8;
				}))
		) {
			return 1;
		}
		if (get.position(card) == "e") {
			let subs = get.subtypes(card);
			if (subs.includes("equip2") || subs.includes("equip3")) {
				return player.getHp() - get.value(card);
			}
		}
		return 6 - get.value(card);
	},
	async content(event, trigger, player) {
		const { cards } = event;
		event.num = 1;
		const hs = player.getCards("h");
		if (!hs.length) {
			event.num = 0;
		}
		for (let i = 0; i < hs.length; i++) {
			if (!cards.includes(hs[i])) {
				event.num = 0;
				break;
			}
		}
		await player.discard(cards);
		await player.draw(event.num + cards.length);
	},
	//group:'rezhiheng_draw',
	subSkill: {
		draw: {
			trigger: { player: "loseEnd" },
			silent: true,
			filter(event, player) {
				if (event.getParent(2).skill != "rezhiheng" && event.getParent(2).skill != "jilue_zhiheng") {
					return false;
				}
				if (player.countCards("h")) {
					return false;
				}
				for (var i = 0; i < event.cards.length; i++) {
					if (event.cards[i].original == "h") {
						return true;
					}
				}
				return false;
			},
			async content(event, trigger, player) {
				player.addTempSkill("rezhiheng_delay", trigger.getParent(2).skill + "After");
			},
		},
		delay: {},
	},
	ai: {
		order(item, player) {
			if (player.hasCard(i => get.value(i) > Math.max(6, 9 - player.hp), "he")) {
				return 1;
			}
			return 10;
		},
		result: {
			player: 1,
		},
		nokeep: true,
		skillTagFilter(player, tag, arg) {
			if (tag === "nokeep") {
				return (!arg || (arg && arg.card && get.name(arg.card) === "tao")) && player.isPhaseUsing() && !player.getStat().skill.rezhiheng && player.hasCard(card => get.name(card) !== "tao", "h");
			}
		},
		threaten: 1.55,
	},
};
//荆周瑜雄姿语音
lib.skill.jxxiongzi = {
	audio: "sbyingzi",
	trigger: {
		player: "phaseDrawBegin2",
	},
	forced: true,
	preHidden: true,
	filter(event, player) {
		return !event.numFixed;
	},
	content() {
		trigger.num += player.hp;
	},
	ai: {
		threaten: 1.5,
	},
	mod: {
		maxHandcard(player, num) {
			return num + player.hp;
		},
	},
};

//合御适配旧骥张辽
lib.skill.hefeiheyulidian = {
	audio: 2,
	trigger: {
		player: "useCard",
		global: "discardAfter",
	},
	filter(event, player) {
		const name = event.name == "useCard" ? ["hefei_zhangliao", "old_hefei_zhangliao"] : "hefei_yuejin";
		if (!name.some(n => get.info("friendgongli").isFriendOf(player, n))) {
			return false;
		}
		const evt = event.getParent(2);
		if (event.name == "useCard") {
			return evt?.name == "hefeigaigong";
		}
		return evt?.name == "hefeiduanjin" && evt.player == player && event.cards?.someInD("od");
	},
	forced: true,
	async content(event, trigger, player) {
		if (trigger.name == "useCard") {
			trigger.directHit.addArray(game.players);
			return;
		}
		const cards = trigger.cards?.filterInD("od");
		if (cards?.length) {
			await player.gain(cards, "gain2");
		}
	},
	ai: {
		combo: ["hefeiduanjin", "hefeigaigong"],
	},
};
lib.skill.hefeiheyuyuejin = {
	audio: 2,
	trigger: {
		source: "damageSource",
		global: ["loseAfter", "loseAsyncAfter", "equipAfter", "addJudgeAfter", "addToExpansionAfter", "gainAfter"],
	},
	filter(event, player) {
		const name = event.name == "damage" ? ["hefei_zhangliao", "old_hefei_zhangliao"] : "hefei_lidian";
		if (!name.some(n => get.info("friendgongli").isFriendOf(player, n))) {
			return false;
		}
		if (event.name == "damage") {
			return event.card?.storage?.hefeixianjian;
		}
		const evts = game.getGlobalHistory("everything", evt => {
			if (!["lose", "gain", "loseAsync", "equip", "addJudge", "addToExpansion"].includes(evt.name)) {
				return false;
			}
			return true;
		});
		for (const evt of evts) {
			for (const current of game.filterPlayer(() => true)) {
				const evtx = evt.getl(current);
				if (evtx?.vcard_map?.size && Array.from(evtx.vcard_map.values()).some(card => card.name == "hefei_xianjian")) {
					return evt == event;
				}
			}
		}
		return false;
	},
	async cost(event, trigger, player) {
		if (trigger.name !== "damage") {
			event.result = {
				bool: true,
			};
			return;
		}
		const link = trigger.card?.storage?.hefeixianjian,
			target = trigger.player;
		const prompt = link !== "draw" ? `你摸一张牌，其弃置${get.cnNumber(Math.max(1, target.countCards("ej")))}张牌` : `此杀结算后将对应实体牌置入其一个空置装备栏`;
		event.result = await player
			.chooseBool(get.prompt(event.skill, target), prompt)
			.set("choice", get.attitude(player, target) <= 0)
			.forResult();
		event.result.targets = [target];
	},
	async content(event, trigger, player) {
		if (trigger.name != "damage") {
			await player.draw();
			return;
		}
		const link = trigger.card?.storage?.hefeixianjian == "draw" ? "equip" : "draw";
		const next = game.createEvent("hefeixianjian_effect", false);
		next.player = player;
		next._trigger = trigger;
		next.targets = [trigger.player];
		next.cost_data = link;
		next.triggername = event.triggername;
		next.setContent(get.info("hefeixianjian").content);
		await next;
	},
	ai: {
		combo: "hefeixianjian",
	},
};
