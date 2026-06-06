import { lib, game, ui, get, ai, _status } from "noname";
const lmCharacter = {
	//技能
	skill: {
		//虎翼徐荣
		xr_huyi: {
			trigger: {
				global: "phaseBefore",
				player: "enterGame",
			},
			forced: true,
			locked: true,
			filter(event, player) {
				if (
					game.hasPlayer(function (current) {
						return current.countCards("hej", "huyi");
					})
				)
					return false;
				return event.name != "phase" || game.phaseNumber == 0;
			},
			async content(event, trigger, player) {
				const card = game.createCard2("huyi", "spade", 11);
				await player.gain([card], "gain2");
			},
		},
		//神武再世
		shenwuzaishi: {
			trigger: {
				global: "phaseBefore",
				player: "enterGame",
			},
			forced: true,
			locked: false,
			filter(event, player) {
				return (event.name != "phase" || game.phaseNumber == 0) && !player.storage.shenwuzaishi;
			},
			content() {
				"step 0";
				var name = player.name;
				switch (name) {
					case "sw_guanyu":
						{
							player.chooseButton(["请选择你的初始神武", [["sw_guilongzhanyuedao", "mj_guilongzhanyuedao", "mj_mengyanchitu"], "vcard"]], true).set("ai", function (button) {
								return button.link[2] == "sw_guilongzhanyuedao" ? 2 : 1;
							});
						}
						break;
					case "sw_lvmeng":
						{
							player.chooseButton(["请选择你的初始神武", [["sw_guofengyupao", "mj_shengguangbaiyi"], "vcard"]], true).set("ai", function (button) {
								return button.link[2] == "sw_guofengyupao" ? 2 : 1;
							});
						}
						break;
					case "sw_zhugeliang":
						{
							player.chooseButton(["请选择你的初始神武", [["sw_qimenbagua", "mj_qixingpao"], "vcard"]], true).set("ai", function (button) {
								return button.link[2] == "sw_qimenbagua" ? 2 : 1;
							});
						}
						break;
					case "sw_zhouyu":
						{
							player.chooseButton(["请选择你的初始神武", [["sw_chiyanzhenhunqin", "mj_zhenhunqin"], "vcard"]], true).set("ai", function (button) {
								return button.link[2] == "sw_chiyanzhenhunqin" ? 2 : 1;
							});
						}
						break;
					case "sw_caocao":
						{
							player.chooseButton(["请选择你的初始神武", [["sw_juechenjinge"], "vcard"]], true).set("ai", function (button) {
								return button.link[2] == "sw_juechenjinge" ? 2 : 1;
							});
						}
						break;
					case "sw_lvbu":
						{
							player.chooseButton(["请选择你的初始神武", [["sw_xiuluolianyuji", "mj_xieshenmianju"], "vcard"]], true).set("ai", function (button) {
								return button.link[2] == "sw_xiuluolianyujin" ? 2 : 1;
							});
						}
						break;
					case "sw_zhaoyun":
						{
							player.chooseButton(["请选择你的初始神武", [["sw_chixueqingfeng", "mj_yinyueqiang"], "vcard"]], true).set("ai", function (button) {
								return button.link[2] == "sw_chixueqingfeng" ? 2 : 1;
							});
						}
						break;
					case "sw_simayi":
						{
							player.chooseButton(["请选择你的初始神武", [["sw_xuwangzhimian"], "vcard"]], true).set("ai", function (button) {
								return button.link[2] == "sw_xuwangzhimian" ? 2 : 1;
							});
						}
						break;
					case "sw_luxun":
						{
							player.chooseButton(["请选择你的初始神武", [["sw_qicaishenlu"], "vcard"]], true).set("ai", function (button) {
								return button.link[2] == "sw_qicaishenlu" ? 2 : 1;
							});
						}
						break;
					case "sw_liubei":
						{
							player.chooseButton(["请选择你的初始神武", [["sw_luanfenghemingjian"], "vcard"]], true).set("ai", function (button) {
								return button.link[2] == "sw_luanfenghemingjian" ? 2 : 1;
							});
						}
						break;
					case "sw_zhangliao":
						{
							player.chooseButton(["请选择你的初始神武", [["sw_xingtianpojunfu"], "vcard"]], true).set("ai", function (button) {
								return button.link[2] == "sw_xingtianpojunfu" ? 2 : 1;
							});
						}
						break;
					case "sw_ganning":
						{
							player.chooseButton(["请选择你的初始神武", [["sw_jinwuluorigong"], "vcard"]], true).set("ai", function (button) {
								return button.link[2] == "sw_jinwuluorigong" ? 2 : 1;
							});
						}
						break;
					case "sw_zhenji":
						{
							player.chooseButton(["请选择你的初始神武", [["sw_lingsheji"], "vcard"]], true).set("ai", function (button) {
								return button.link[2] == "sw_lingsheji" ? 2 : 1;
							});
						}
						break;
					case "sw_caopi":
						{
							player.chooseButton(["请选择你的初始神武", [["sw_shanrangzhaoshu"], "vcard"]], true).set("ai", function (button) {
								return button.link[2] == "sw_shanrangzhaoshu" ? 2 : 1;
							});
						}
						break;
					case "sw_zhangjiao":
						{
							player.chooseButton(["请选择你的初始神武", [["sw_sanshou"], "vcard"]], true).set("ai", function (button) {
								return button.link[2] == "sw_sanshou" ? 2 : 1;
							});
						}
						break;
					case "sw_diaochan":
						{
							player.chooseButton(["请选择你的初始神武", [["mj_baihuaqun"], "vcard"]], true).set("ai", function (button) {
								return button.link[2] == "mj_baihuaqun" ? 2 : 1;
							});
						}
						break;
					case "sw_tw_guanyu":
						{
							player.chooseButton(["请选择你的初始神武", [["sw_guilongzhanyuedao", "mj_guilongzhanyuedao", "mj_mengyanchitu"], "vcard"]], true).set("ai", function (button) {
								return button.link[2] == "sw_guilongzhanyuedao" ? 2 : 1;
							});
						}
						break;
					case "sw_tw_lvmeng":
						{
							player.chooseButton(["请选择你的初始神武", [["sw_guofengyupao", "mj_shengguangbaiyi"], "vcard"]], true).set("ai", function (button) {
								return button.link[2] == "sw_guofengyupao" ? 2 : 1;
							});
						}
						break;
					case "sw_wechat_zhugeliang":
						{
							player.chooseButton(["请选择你的初始神武", [["sw_qimenbagua", "mj_qixingpao"], "vcard"]], true).set("ai", function (button) {
								return button.link[2] == "sw_qimenbagua" ? 2 : 1;
							});
						}
						break;
					case "sw_xinsimayi":
						{
							player.chooseButton(["请选择你的初始神武", [["sw_xuwangzhimian"], "vcard"]], true).set("ai", function (button) {
								return button.link[2] == "sw_xuwangzhimian" ? 2 : 1;
							});
						}
						break;
				}
				("step 1");
				if (result.bool) {
					switch (result.links[0][2]) {
						case "sw_guilongzhanyuedao":
							{
								var card = game.createCard2("sw_guilongzhanyuedao", "spade", 5);
								lib.inpile.add("sw_guilongzhanyuedao");
							}
							break;
						case "mj_guilongzhanyuedao":
							{
								var card = game.createCard2("mj_guilongzhanyuedao", "diamond", 5);
								lib.inpile.add("mj_guilongzhanyuedao");
							}
							break;
						case "mj_mengyanchitu":
							{
								var card = game.createCard2("mj_mengyanchitu", "diamond", 13);
								lib.inpile.add("mj_mengyanchitu");
							}
							break;
						case "sw_guofengyupao":
							{
								var card = game.createCard2("sw_guofengyupao", "spade", 9);
								lib.inpile.add("sw_guofengyupao");
							}
							break;
						case "mj_shengguangbaiyi":
							{
								var card = game.createCard2("mj_shengguangbaiyi", "heart", 6);
								lib.inpile.add("mj_shengguangbaiyi");
							}
							break;
						case "sw_qimenbagua":
							{
								var card = game.createCard2("sw_qimenbagua", "club", 2);
								lib.inpile.add("sw_qimenbagua");
							}
							break;
						case "mj_qixingpao":
							{
								var card = game.createCard2("mj_qixingpao", "heart", 1);
								lib.inpile.add("mj_qixingpao");
							}
							break;
						case "sw_chiyanzhenhunqin":
							{
								var card = game.createCard2("sw_chiyanzhenhunqin", "diamond", 1);
								lib.inpile.add("sw_chiyanzhenhunqin");
							}
							break;
						case "mj_zhenhunqin":
							{
								var card = game.createCard2("mj_zhenhunqin", "club", 3);
								lib.inpile.add("mj_zhenhunqin");
							}
							break;
						case "sw_juechenjinge":
							{
								var card = game.createCard2("sw_juechenjinge", "spade", 5);
								lib.inpile.add("sw_juechenjinge");
							}
							break;
						case "sw_xiuluolianyuji":
							{
								var card = game.createCard2("sw_xiuluolianyuji", "diamond", 12);
								lib.inpile.add("sw_xiuluolianyuji");
							}
							break;
						case "mj_xieshenmianju":
							{
								var card = game.createCard2("mj_xieshenmianju", "diamond", 6);
								lib.inpile.add("mj_xieshenmianju");
							}
							break;
						case "sw_chixueqingfeng":
							{
								var card = game.createCard2("sw_chixueqingfeng", "spade", 6);
								lib.inpile.add("sw_chixueqingfeng");
							}
							break;
						case "mj_yinyueqiang":
							{
								var card = game.createCard2("mj_yinyueqiang", "diamond", 12);
								lib.inpile.add("mj_yinyueqiang");
							}
							break;
						case "sw_xuwangzhimian":
							{
								var card = game.createCard2("sw_xuwangzhimian", "club", 4);
								lib.inpile.add("sw_xuwangzhimian");
							}
							break;
						case "sw_qicaishenlu":
							{
								var card = game.createCard2("sw_qicaishenlu", "heart", 13);
								lib.inpile.add("sw_qicaishenlu");
							}
							break;
						case "sw_luanfenghemingjian":
							{
								var card = game.createCard2("sw_luanfenghemingjian", "spade", 2);
								lib.inpile.add("sw_luanfenghemingjian");
							}
							break;
						case "sw_xingtianpojunfu":
							{
								var card = game.createCard2("sw_xingtianpojunfu", "diamond", 5);
								lib.inpile.add("sw_xingtianpojunfu");
							}
							break;
						case "sw_jinwuluorigong":
							{
								var card = game.createCard2("sw_jinwuluorigong", "heart", 5);
								lib.inpile.add("sw_jinwuluorigong");
							}
							break;
						case "sw_lingsheji":
							{
								var card = game.createCard2("sw_lingsheji", "club", 12);
								lib.inpile.add("sw_lingsheji");
							}
							break;
						case "sw_shanrangzhaoshu":
							{
								var card = game.createCard2("sw_shanrangzhaoshu", "spade", 13);
								lib.inpile.add("sw_shanrangzhaoshu");
							}
							break;
						case "sw_sanshou":
							{
								var card = game.createCard2("sw_sanshou", "diamond", 12);
								lib.inpile.add("sw_sanshou");
							}
							break;
						case "mj_baihuaqun":
							{
								var card = game.createCard2("mj_baihuaqun", "spade", 2);
								lib.inpile.add("mj_baihuaqun");
							}
							break;
					}
					player.storage.shenwuzaishi = card;
					player.chooseUseTarget(card, "nopopup", true);
				}
			},
			group: "shenwuzaishi_equip",
			subSkill: {
				equip: {
					trigger: { player: "phaseZhunbeiBegin" },
					forced: true,
					filter(event, player) {
						var card = player.storage.shenwuzaishi;
						return card && card.isInPile() && player.hasUseTarget(card) && game.roundNumber <= 3;
					},
					content() {
						player.chooseUseTarget(player.storage.shenwuzaishi, "nopopup", true);
					},
				},
			},
		},
		//神武张辽
		lmzhiti: {
			audio: "drlt_zhiti",
			group: ["lmzhiti_ol"],
			trigger: {
				global: ["juedouAfter", "chooseToCompareAfter", "compareMultipleAfter"],
				player: "damageEnd",
			},
			filter(event, player) {
				if (!player.hasDisabledSlot()) return false;
				if (event.name == "juedou") {
					if (![event.player, event.target].includes(player)) return false;
					if (!event.turn || event.turn === player) return false;
					const opposite = event.player === player ? event.target : event.player;
					return opposite?.isIn() && opposite.inRangeOf(player) && opposite.isDamaged();
				} else if (event.name == "damage") {
					const opposite = event.source;
					return opposite?.isIn() && opposite.inRangeOf(player) && opposite.isDamaged();
				} else {
					if (![event.player, event.target].includes(player)) return false;
					if (event.preserve) return false;
					let opposite;
					if (player === event.player) {
						if (event.num1 > event.num2) {
							opposite = event.target;
						} else {
							return false;
						}
					} else {
						if (event.num1 < event.num2) {
							opposite = event.player;
						} else {
							return false;
						}
					}
					return opposite?.isIn() && opposite.inRangeOf(player) && opposite.isDamaged();
				}
			},
			forced: true,
			content() {
				player.chooseToEnable();
			},
			global: "g_lmzhiti",
			subSkill: {
				ol: {
					audio: "drlt_zhiti",
					mod: {
						maxHandcard(player, num) {
							if (
								game.hasPlayer(function (current) {
									return current.isDamaged();
								})
							)
								return num + 1;
						},
					},
					trigger: { player: ["phaseDrawBegin2", "phaseEnd"] },
					forced: true,
					filter(event, player) {
						var num = event.name == "phase" ? 5 : 3;
						if (
							num == 3
								? event.numFixed
								: !game.hasPlayer(function (current) {
										return current.hasEnabledSlot();
									})
						)
							return false;
						return (
							game.countPlayer(function (current) {
								return current.isDamaged();
							}) >= num
						);
					},
					direct: true,
					content() {
						"step 0";
						if (trigger.name == "phaseDraw") {
							player.logSkill("olzhiti");
							trigger.num++;
							event.finish();
						} else {
							player
								.chooseTarget(get.prompt("olzhiti"), "废除一名角色的一个随机装备栏", function (card, player, target) {
									return target.hasEnabledSlot();
								})
								.set("ai", function (target) {
									return -get.attitude(_status.event.player, target) * (target.countCards("e") + 1);
								});
						}
						("step 1");
						if (result.bool) {
							var target = result.targets[0];
							player.logSkill("olzhiti", target);
							var list = [];
							for (var i = 1; i < 6; i++) {
								if (target.hasEnabledSlot(i)) list.add(i == 3 || i == 4 ? 6 : i);
							}
							var num = list.randomGet();
							if (num != 6) target.disableEquip(num);
							else {
								target.disableEquip(3, 4);
							}
						}
					},
				},
			},
		},
		g_lmzhiti: {
			mod: {
				maxHandcard(player, num) {
					if (player.isDamaged())
						return (
							num -
							game.countPlayer(function (current) {
								return current != player && current.hasSkill("lmzhiti") && current.inRange(player);
							})
						);
				},
			},
		},

		wechatqixing: {
			audio: "qixing",
			trigger: { player: "dying" },
			round: 1,
			content() {
				"step 0";
				player.judge(function (card) {
					if (get.number(card) > 7) return 2;
					return -2;
				}).judge2 = function (result) {
					return result.bool ? true : false;
				};
				("step 1");
				if (result.bool) player.recover();
			},
		},
		wechatjifeng: {
			init() {
				lib.onwash.push(function () {
					delete _status.wechatjifeng_notrick;
				});
			},
			audio: "dawu",
			audioname2: { wechat_zhiyin_huangyueying: "wechatjifeng_wechat_zhiyin_huangyueying" },
			enable: "phaseUse",
			usable: 1,
			filterCard: true,
			check(card) {
				return 5 - get.value(card);
			},
			content() {
				var card = get.cardPile2(function (card) {
					return get.type2(card) == "trick";
				});
				if (card) player.gain(card, "gain2");
				else _status.wechatjifeng_notrick = true;
			},
			ai: {
				order: 8,
				player(player, target) {
					if (_status.wechatjifeng_notrick) return 0;
					return 1;
				},
			},
			subSkill: {
				wechat_zhiyin_huangyueying: { audio: "ext:活动武将/audio/skill:2" },
			},
		},
		wechattianfa: {
			marktext: "罚",
			group: "wechattianfa_damage",
			intro: { name2: "罚", content: "mark" },
			audio: "kuangfeng",
			trigger: { player: "useCard" },
			filter(event, player) {
				if (!player.isPhaseUsing()) return false;
				return (
					player
						.getHistory("useCard", function (evt) {
							return get.type2(evt.card) == "trick" && evt.getParent("phaseUse") == event.getParent("phaseUse");
						})
						.indexOf(event) %
						2 ==
					1
				);
			},
			forced: true,
			locked: false,
			content() {
				player.addMark("wechattianfa", 1);
			},
			subSkill: {
				damage: {
					trigger: { player: "phaseEnd" },
					filter(event, player) {
						return player.hasMark("wechattianfa");
					},
					direct: true,
					content() {
						"step 0";
						player.chooseTarget([1, player.countMark("wechattianfa")], get.prompt("wechattianfa"), "对至多" + get.cnNumber(player.countMark("wechattianfa")) + "名其他角色造成1点伤害", lib.filter.notMe).set("ai", function (target) {
							var player = _status.event.player;
							return get.damageEffect(target, player, player);
						});
						("step 1");
						if (result.bool) {
							var targets = result.targets.sortBySeat();
							player.logSkill("wechattianfa", targets);
							for (var i of targets) i.damage();
						}
					},
				},
			},
		},
		//旧神曹
		lmjunkguixin: {
			trigger: { global: "roundStart", player: "phaseEnd" },
			inherit: "junkguixin",
		},
		//神貂蝉
		minimeihun: {
			audio: "meihun",
			trigger: { player: "phaseJieshuBegin", target: "useCardToTargeted" },
			filter(event, player) {
				if (
					event.name != "phaseJieshu" &&
					game
						.getGlobalHistory("useCard", function (evt) {
							return evt.card.name == "sha" && evt.targets.includes(player);
						})
						.indexOf(event.getParent()) != 0
				)
					return false;
				return game.hasPlayer(function (current) {
					return current != player && current.countCards("he");
				});
			},
			direct: true,
			content() {
				"step 0";
				player
					.chooseTarget(get.prompt2("minimeihun"), function (card, player, target) {
						return target != player && target.countCards("he");
					})
					.set("ai", function (target) {
						var player = _status.event.player;
						return -get.sgn(get.attitude(player, target)) * target.countCards("he");
					});
				("step 1");
				if (result.bool) {
					var target = result.targets[0];
					player.logSkill("minimeihun", target);
					event.target = target;
					player
						.chooseControl(lib.suit.slice(0).reverse())
						.set("prompt", "请声明一个花色")
						.set("ai", function () {
							var target = _status.event.target,
								cards = target.getCards("he");
							var suits = lib.suit.slice(0);
							suits.sort(function (a, b) {
								var num = function (suit) {
									return cards.filter(function (card) {
										return get.suit(card) == suit;
									}).length;
								};
								return num(b) - num(a);
							});
							return suits[0];
						})
						.set("target", target);
				} else event.finish();
				("step 2");
				var suit = result.control;
				player.chat(get.translation(suit + 2));
				game.log(player, "选择了", "#y" + get.translation(suit + 2));
				if (target.countCards("he", { suit: suit })) player.gain(target.getCards("he", { suit: suit }), target, "giveAuto");
				else if (target.countCards("h")) player.gainPlayerCard(target, true, "h", "visible");
			},
		},
		minihuoxin: {
			audio: "huoxin",
			enable: "phaseUse",
			filter(event, player) {
				return (
					game.hasPlayer(function (target) {
						return lib.skill.minihuoxin.filterTarget(null, player, target);
					}) && player.countCards("he")
				);
			},
			filterTarget(card, player, target) {
				if (!ui.selected.targets.length) {
					return game.hasPlayer(function (current) {
						return current != target && target.canCompare(current);
					});
				}
				return ui.selected.targets[0].canCompare(target);
			},
			selectTarget: 2,
			multitarget: true,
			multiline: true,
			targetprompt: ["发起人", "拼点目标"],
			filterCard: true,
			check(card) {
				return 1 / (get.value(card) || 0.5);
			},
			position: "he",
			usable: 1,
			content() {
				"step 0";
				event.list = [];
				targets[0].chooseToCompare(targets[1]);
				("step 1");
				for (var target of targets) {
					if (result.winner !== target) event.list.push(target);
				}
				event.list.sortBySeat();
				var suits = lib.suit.slice(0).reverse();
				suits.push("cancel2");
				player
					.chooseControl(suits)
					.set("prompt", get.translation(event.list) + "拼点没赢，是否声明一个花色令其进行选择？")
					.set("ai", function () {
						var currents = _status.event.list,
							cards = [];
						for (var i of currents) cards.addArray(i.getCards("he"));
						var suits = lib.suit.slice(0);
						suits.sort(function (a, b) {
							var num = function (suit) {
								return cards.filter(function (card) {
									return get.suit(card) == suit;
								}).length;
							};
							return num(b) - num(a);
						});
						return suits[0];
					})
					.set("list", event.list);
				("step 2");
				var suit = result.control;
				if (suit != "cancel2") {
					player.chat(get.translation(suit + 2));
					game.log(player, "选择了", "#y" + get.translation(suit + 2));
					event.suit = suit;
				} else event.finish();
				("step 3");
				var target = event.list.shift();
				event.target = target;
				player.line(target);
				if (!target.countCards("he", { suit: event.suit })) event._result = { index: 1 };
				else
					target
						.chooseControl()
						.set("choiceList", ["交给" + get.translation(player) + "所有的" + get.translation(event.suit) + "牌", "不能使用或打出" + get.translation(event.suit) + "牌直到你的下个回合结束"])
						.set("ai", () => 1);
				("step 4");
				if (result.index == 0) player.gain(target.getCards("he", { suit: event.suit }), target, "giveAuto");
				else {
					target.addTempSkill("minihuoxin_use", { player: "phaseEnd" });
					target.markAuto("minihuoxin_use", [event.suit]);
				}
				("step 5");
				if (event.list.length) event.goto(3);
			},
			ai: {
				order: 12,
				result: {
					target(player, target) {
						return -target.countCards("h");
					},
				},
			},
			subSkill: {
				use: {
					charlotte: true,
					onremove: true,
					intro: { name: "魅惑", content: "不能使用或打出$花色的牌" },
					mod: {
						cardEnabled2(card, player) {
							if (player.getStorage("minihuoxin_use").includes(get.suit(card))) return false;
						},
					},
				},
			},
		},

		//曹髦
		old_mbqianlong: {
			audio: "mbqianlong",
			persevereSkill: true,
			trigger: {
				player: ["old_mbqianlong_beginAfter", "old_mbqianlong_addAfter", "old_mbweitongAfter"],
			},
			filter(event, player) {
				let skills = [];
				let current = player.additionalSkills?.old_mbqianlong?.length ?? 0;
				let target = player.countMark("old_mbqianlong") == lib.skill.old_mbqianlong.maxMarkCount ? lib.skill.old_mbqianlong.derivation.length : Math.floor(player.countMark("old_mbqianlong") / 25);
				return target > current;
			},
			forced: true,
			popup: false,
			locked: false,
			beginMarkCount: 20,
			maxMarkCount: 99,
			derivation: ["oldx_mbcmqingzheng", "old_mbcmjiushi", "old_mbcmfangzhu", "old_mbjuejin"],
			addMark(player, num) {
				num = Math.min(num, lib.skill.old_mbqianlong.maxMarkCount - player.countMark("old_mbqianlong"));
				player.addMark("old_mbqianlong", num);
			},
			group: ["old_mbqianlong_begin", "old_mbqianlong_add", "old_mbqianlong_die"],
			async content(event, trigger, player) {
				const derivation = lib.skill.old_mbqianlong.derivation,
					skills = player.countMark("old_mbqianlong") == lib.skill.old_mbqianlong.maxMarkCount ? derivation : derivation.slice(0, Math.floor(player.countMark("old_mbqianlong") / 25));
				player.addAdditionalSkill("old_mbqianlong", skills);
			},
			marktext: "道",
			intro: {
				name: "道心(潜龙)",
				name2: "道心",
				content: "当前道心数为#",
			},
			subSkill: {
				begin: {
					audio: "mbqianlong",
					persevereSkill: true,
					trigger: {
						global: "phaseBefore",
						player: "enterGame",
					},
					filter(event, player) {
						return event.name != "phase" || game.phaseNumber == 0;
					},
					forced: true,
					locked: false,
					async content(event, trigger, player) {
						const num = game.countPlayer(current => {
							return current !== player && current.group === "wei" && player.hasZhuSkill("old_mbweitong", current);
						});
						const daoxin = lib.skill.old_mbqianlong.beginMarkCount + num * 20;
						lib.skill.old_mbqianlong.addMark(player, daoxin);
					},
				},
				add: {
					audio: "mbqianlong",
					persevereSkill: true,
					trigger: {
						player: ["gainAfter", "damageEnd"],
						source: "damageSource",
						global: "loseAsyncAfter",
					},
					filter(event, player) {
						if (player.countMark("old_mbqianlong") >= lib.skill.old_mbqianlong.maxMarkCount) {
							return false;
						}
						if (event.name === "damage") {
							return event.num > 0;
						}
						return event.getg(player).length > 0;
					},
					getIndex(event, player, triggername) {
						if (event.name === "damage") {
							return event.num;
						}
						return 1;
					},
					forced: true,
					locked: false,
					async content(event, trigger, player) {
						let toAdd = 5 * (1 + (trigger.name === "damage") + (event.triggername === "damageSource"));
						lib.skill.old_mbqianlong.addMark(player, toAdd);
					},
				},
				die: {
					trigger: {
						player: "dieBefore",
					},
					charlotte: true,
					firstDo: true,
					forced: true,
					popup: false,
					forceDie: true,
					async content(event, trigger, player) {
						player.changeSkin({ characterName: "old_mb_caomaoo" }, "mb_caomao_dead");
					},
				},
			},
		},
		old_mbweitong: {
			audio: "mbweitong",
			persevereSkill: true,
			zhuSkill: true,
			trigger: {
				player: "old_mbqianlong_beginBegin",
			},
			forced: true,
			locked: false,
			content() {},
			ai: {
				combo: "old_mbqianlong",
			},
		},
		oldx_mbcmqingzheng: {
			audio: "mbcmqingzheng",
			persevereSkill: true,
			trigger: { player: "phaseUseBegin" },
			filter(event, player) {
				return player.countCards("h") > 0 && game.hasPlayer(current => player != current && current.countCards("h") > 0);
			},
			/**
			 * player选择target的一种花色的牌
			 * @param {Player} player
			 * @param {Player} target
			 */
			chooseOneSuitCard(player, target, force = false, limit, str = "请选择一个花色的牌", ai = { bool: false }) {
				const { promise, resolve } = Promise.withResolvers();
				const event = _status.event;
				event.selectedCards = [];
				event.selectedButtons = [];
				//对手牌按花色分类
				let suitCards = Object.groupBy(target.getCards("h"), c => get.suit(c, target));
				suitCards.heart ??= [];
				suitCards.diamond ??= [];
				suitCards.spade ??= [];
				suitCards.club ??= [];
				let dialog = (event.dialog = ui.create.dialog());
				dialog.classList.add("fullheight");
				event.control_ok = ui.create.control("ok", link => {
					_status.imchoosing = false;
					event.dialog.close();
					event.control_ok?.close();
					event.control_cancel?.close();
					event._result = {
						bool: true,
						cards: event.selectedCards,
					};
					resolve(event._result);
					game.resume();
				});
				event.control_ok.classList.add("disabled");
				//如果是非强制的，才创建取消按钮
				if (!force) {
					event.control_cancel = ui.create.control("cancel", link => {
						_status.imchoosing = false;
						event.dialog.close();
						event.control_ok?.close();
						event.control_cancel?.close();
						event._result = {
							bool: false,
						};
						resolve(event._result);
						game.resume();
					});
				}
				event.switchToAuto = function () {
					_status.imchoosing = false;
					event.dialog?.close();
					event.control_ok?.close();
					event.control_cancel?.close();
					event._result = ai();
					resolve(event._result);
					game.resume();
				};
				dialog.addNewRow(str);
				let keys = Object.keys(suitCards).sort((a, b) => {
					let arr = ["spade", "heart", "club", "diamond", "none"];
					return arr.indexOf(a) - arr.indexOf(b);
				});
				//添加框
				while (keys.length) {
					let key1 = keys.shift();
					let cards1 = suitCards[key1];
					let key2 = keys.shift();
					let cards2 = suitCards[key2];
					//点击容器的回调
					/**@type {Row_Item_Option['clickItemContainer']} */
					const clickItemContainer = function (container, item, allContainer) {
						if (!item?.length || item.some(card => !lib.filter.cardDiscardable(card, player, event.name))) {
							return;
						}
						if (event.selectedButtons.includes(container)) {
							container.classList.remove("selected");
							event.selectedButtons.remove(container);
							event.selectedCards.removeArray(item);
						} else {
							if (event.selectedButtons.length >= limit) {
								let precontainer = event.selectedButtons[0];
								precontainer.classList.remove("selected");
								event.selectedButtons.remove(precontainer);
								let suit = get.suit(event.selectedCards[0], target),
									cards = target.getCards("h", { suit: suit });
								event.selectedCards.removeArray(cards);
							}
							container.classList.add("selected");
							event.selectedButtons.add(container);
							event.selectedCards.addArray(item);
						}
						event.control_ok.classList[event.selectedButtons.length === limit ? "remove" : "add"]("disabled");
					};
					//给框加封条，显示xxx牌多少张
					function createCustom(suit, count) {
						return function (itemContainer) {
							function formatStr(str) {
								return str.replace(/(?:♥︎|♦︎)/g, '<span style="color: red; ">$&</span>');
							}
							let div = ui.create.div(itemContainer);
							if (count) {
								div.innerHTML = formatStr(`${get.translation(suit)}牌${count}张`);
							} else {
								div.innerHTML = formatStr(`没有${get.translation(suit)}牌`);
							}
							div.css({
								position: "absolute",
								width: "100%",
								bottom: "1%",
								height: "35%",
								background: "#352929bf",
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
								fontSize: "1.2em",
								zIndex: "2",
							});
						};
					}
					//框的样式，不要太宽，高度最小也要100px，防止空框没有高度
					/**@type {Row_Item_Option['itemContainerCss']} */
					let itemContainerCss = {
						border: "solid #c6b3b3 2px",
						minHeight: "100px",
					};
					if (key2) {
						dialog.addNewRow(
							{
								item: cards1,
								ItemNoclick: true, //卡牌不需要被点击
								clickItemContainer,
								custom: createCustom(key1, cards1.length), //添加封条
								itemContainerCss,
							},
							{
								item: cards2,
								ItemNoclick: true, //卡牌不需要被点击
								clickItemContainer,
								custom: createCustom(key2, cards2.length),
								itemContainerCss,
							}
						);
					} else {
						dialog.addNewRow({
							item: cards1,
							ItemNoclick: true, //卡牌不需要被点击
							clickItemContainer,
							custom: createCustom(key1, cards1.length),
							itemContainerCss,
						});
					}
				}
				game.pause();
				dialog.open();
				_status.imchoosing = true;
				return promise;
			},
			async cost(event, trigger, player) {
				const list = get.addNewRowList(player.getCards("h"), "suit", player);
				let limit = event.skill === "sbqingzheng" ? 3 - player.countMark("sbjianxiong") : 1;
				const result = await player
					.chooseButtonTarget({
						createDialog: [
							[
								[[`${get.prompt(event.skill)}<div class="text center">${get.translation(event.skill, "info")}</div>`], "addNewRow"],
								[
									dialog => {
										dialog.classList.add("fullheight");
										// 不添加scroll1和scroll2的类名
										dialog.forcebutton = false;
										dialog._scrollset = false;
									},
									"handle",
								],
								list.map(item => [Array.isArray(item) ? item : [item], "addNewRow"]),
							],
						],
						filterButton(button) {
							const player = get.player();
							if (!button.links.length || button.links.some(card => !lib.filter.cardDiscardable(card, player, get.event().getParent().skill))) {
								return false;
							}
							return true;
						},
						selectButton: limit,
						limit,
						filterTarget(card, player, target) {
							return target != player && target.countCards("h");
						},
						ai1(button) {
							const player = get.player();
							if (!game.hasPlayer(current => player != current && current.countDiscardableCards(player, "h") > 0 && get.attitude(player, current) < 0)) {
								return 0;
							}
							let values = button.links.map(i => get.value(i)).reduce((p, c) => p + c, 0) / button.links.length;
							if (button.links.length > 4 || values > 6) {
								return 0;
							}
							return (13 - button.links.length) / values;
						},
						ai2(target) {
							const player = get.player(),
								att = get.attitude(player, target);
							if (att >= 0) {
								return 0;
							}
							return 1 - att / 2 + Math.sqrt(target.countCards("h"));
						},
					})
					.forResult();
				event.result = {
					bool: result?.bool,
					cost_data: result?.links,
					targets: result?.targets,
				};
				if (event.result.bool && result?.links?.length) {
					event.result.cards = player.getCards("h").filter(card => result.links.includes(get.suit(card, player)));
				}
			},
			async content(event, trigger, player) {
				const {
					targets: [target],
					cards: cards1,
				} = event;
				await player.discard(cards1);
				if (
					!target.countCards("h") ||
					lib.suits
						.slice()
						.filter(suit => target.hasCard((card, playerx) => get.suit(card, playerx) === suit, "h"))
						.every(suit => target.hasCard((card, playerx) => get.suit(card, playerx) === suit && !lib.filter.cardDiscardable(card, player), "h"))
				) {
					if (target.countCards("h")) {
						const content = [`###清正###<div class="text center">${get.translation(target)}的手牌</div>`, target.getCards("h")];
						await player.chooseControl("ok").set("dialog", content);
					}
					return;
				}
				const list = get.addNewRowList(target.getCards("h"), "suit", target);
				let result = await player
					.chooseButton(
						[
							[
								[[`清正：弃置${get.translation(target)}一种花色的所有牌`], "addNewRow"],
								[
									dialog => {
										dialog.classList.add("fullheight");
										dialog.forcebutton = false;
										dialog._scrollset = false;
									},
									"handle",
								],
								list.map(item => [Array.isArray(item) ? item : [item], "addNewRow"]),
							],
						],
						true
					)
					.set("filterButton", button => {
						const player = get.player();
						if (!button.links.length || button.links.some(card => !lib.filter.cardDiscardable(card, player, get.event().getParent().name))) {
							return false;
						}
						return true;
					})
					.set("ai", button => {
						const player = get.player();
						return button.links.length;
					})
					.forResult();
				if (!result?.links?.length) {
					return;
				}
				const cards2 = target.getDiscardableCards(player, "h").filter(card => result.links.includes(get.suit(card, target)));
				if (cards2.length) {
					await target.discard(cards2, "notBySelf").set("discarder", player);
				}
				if (cards1.length > cards2.length) {
					await target.damage(player);
				}
				if (event.name !== "sbqingzheng" || player.countMark("sbjianxiong") >= 2) {
					return;
				}
				if (["sbjianxiong", "jdjianxiong"].some(skill => player.hasSkill(skill, null, null, false))) {
					result = await player
						.chooseBool("是否获得1枚“治世”？")
						.set("choice", Math.random() >= 0.5)
						.forResult();
					if (result?.bool) {
						player.addMark("sbjianxiong", 1);
					}
				}
			},
		},
		old_mbcmjiushi: {
			audio: "mbcmjiushi",
			inherit: "rejiushi",
			persevereSkill: true,
			group: ["old_mbcmjiushi_use", "old_mbcmjiushi_turnback", "old_mbcmjiushi_gain"],
			subSkill: {
				use: {
					hiddenCard(player, name) {
						if (name == "jiu") {
							return !player.isTurnedOver();
						}
						return false;
					},
					audio: "mbcmjiushi",
					enable: "chooseToUse",
					filter(event, player) {
						if (player.classList.contains("turnedover")) {
							return false;
						}
						return event.filterCard({ name: "jiu", isCard: true }, player, event);
					},
					async content(event, trigger, player) {
						if (_status.event.getParent(2).type == "dying") {
							event.dying = player;
							event.type = "dying";
						}
						await player.turnOver();
						await player.useCard({ name: "jiu", isCard: true }, player);
					},
					ai: {
						save: true,
						skillTagFilter(player, tag, arg) {
							return !player.isTurnedOver() && _status.event?.dying == player;
						},
						order: 5,
						result: {
							player(player) {
								if (_status.event.parent.name == "phaseUse") {
									if (player.countCards("h", "jiu") > 0) {
										return 0;
									}
									if (player.getEquip("zhuge") && player.countCards("h", "sha") > 1) {
										return 0;
									}
									if (!player.countCards("h", "sha")) {
										return 0;
									}
									var targets = [];
									var target;
									var players = game.filterPlayer();
									for (var i = 0; i < players.length; i++) {
										if (get.attitude(player, players[i]) < 0) {
											if (player.canUse("sha", players[i], true, true)) {
												targets.push(players[i]);
											}
										}
									}
									if (targets.length) {
										target = targets[0];
									} else {
										return 0;
									}
									var num = get.effect(target, { name: "sha" }, player, player);
									for (var i = 1; i < targets.length; i++) {
										var num2 = get.effect(targets[i], { name: "sha" }, player, player);
										if (num2 > num) {
											target = targets[i];
											num = num2;
										}
									}
									if (num <= 0) {
										return 0;
									}
									var e2 = target.getEquip(2);
									if (e2) {
										if (e2.name == "tengjia") {
											if (!player.countCards("h", { name: "sha", nature: "fire" }) && !player.getEquip("zhuque")) {
												return 0;
											}
										}
										if (e2.name == "renwang") {
											if (!player.countCards("h", { name: "sha", color: "red" })) {
												return 0;
											}
										}
										if (e2.name == "baiyin") {
											return 0;
										}
									}
									if (player.getEquip("guanshi") && player.countCards("he") > 2) {
										return 1;
									}
									return target.countCards("h") > 3 ? 0 : 1;
								}
								if (player == _status.event.dying || player.isTurnedOver()) {
									return 3;
								}
							},
						},
						effect: {
							target(card, player, target) {
								if (target.isTurnedOver()) {
									if (get.tag(card, "damage")) {
										if (player.hasSkillTag("jueqing", false, target)) {
											return [1, -2];
										}
										if (target.hp == 1) {
											return;
										}
										return [1, target.countCards("h") / 2];
									}
								}
							},
						},
					},
				},
				turnback: {
					audio: "mbcmjiushi",
					persevereSkill: true,
					trigger: { player: "damageEnd" },
					check(event, player) {
						return player.isTurnedOver();
					},
					filter(event, player) {
						if (
							player.hasHistory("useCard", evt => {
								if (evt.card.name != "jiu" || evt.getParent().name != "old_mbcmjiushi_use") {
									return false;
								}
								return evt.getParent("damage", true) == event;
							})
						) {
							return false;
						}
						return player.isTurnedOver();
					},
					prompt(event, player) {
						return "是否发动【酒诗】，将武将牌翻面？";
					},
					content() {
						player.turnOver();
					},
				},
				gain: {
					audio: "mbcmjiushi",
					persevereSkill: true,
					trigger: { player: "turnOverAfter" },
					frequent: true,
					prompt: "是否发动【酒诗】，获得牌堆中的一张锦囊牌？",
					content() {
						var card = get.cardPile2(function (card) {
							return get.type2(card) == "trick";
						});
						if (card) {
							player.gain(card, "draw");
						}
					},
				},
			},
		},
		old_mbcmfangzhu: {
			audio: "mbcmfangzhu",
			persevereSkill: true,
			inherit: "sbfangzhu",
			filter(event, player) {
				return game.hasPlayer(current => current !== player);
			},
			usable: 1,
			chooseButton: {
				dialog() {
					const dialog = ui.create.dialog("放逐：令一名其他角色...", "hidden");
					dialog.add([
						[
							[1, "不能使用手牌中的非锦囊牌直到其回合结束"],
							[2, "非Charlotte技能失效直到其回合结束"],
						],
						"textbutton",
					]);
					return dialog;
				},
				check(button) {
					const player = get.player();
					if (button.link === 2) {
						if (
							game.hasPlayer(target => {
								if (target.hasSkill("old_mbcmfangzhu_ban") || target.hasSkill("fengyin") || target.hasSkill("baiban")) {
									return false;
								}
								return (
									get.attitude(player, target) < 0 &&
									["name", "name1", "name2"]
										.map((sum, name) => {
											if (target[name] && (name != "name1" || target.name != target.name1)) {
												if (get.character(target[name])) {
													return get.rank(target[name], true);
												}
											}
											return 0;
										})
										.reduce((p, c) => {
											return p + c;
										}, 0) > 5
								);
							})
						) {
							return 6;
						}
					}
					return button.link === 1 ? 1 : 0;
				},
				backup(links, player) {
					return {
						num: links[0],
						audio: "mbcmfangzhu",
						filterCard: () => false,
						selectCard: -1,
						filterTarget(card, player, target) {
							if (target == player) {
								return false;
							}
							const num = lib.skill.old_mbcmfangzhu_backup.num,
								storage = target.getStorage("old_mbcmfangzhu_ban");
							return num != 1 || !storage.length;
						},
						async content(event, trigger, player) {
							const target = event.target;
							const num = lib.skill.old_mbcmfangzhu_backup.num;
							let evt = event.getParent("phaseUse", true);
							switch (num) {
								case 1:
									target.addTempSkill("old_mbcmfangzhu_ban", { player: "phaseEnd" });
									target.markAuto("old_mbcmfangzhu_ban", ["trick"]);
									lib.skill.old_mbcmfangzhu_ban.init(target, "old_mbcmfangzhu_ban");
									break;
								case 2:
									target.addTempSkill("old_mbcmfangzhu_baiban", { player: "phaseEnd" });
									break;
							}
						},
						ai: {
							result: {
								target(player, target) {
									switch (lib.skill.old_mbcmfangzhu_backup.num) {
										case 1:
											return -target.countCards("h", card => get.type(card) != "trick") - 1;
										case 2:
											return -target.getSkills(null, null, false).reduce((sum, skill) => {
												return sum + Math.max(get.skillRank(skill, "out"), get.skillRank(skill, "in"));
											}, 0);
									}
								},
							},
						},
					};
				},
				prompt(links, player) {
					const str = "###放逐###";
					switch (links[0]) {
						case 1:
							return str + "令一名其他角色不能使用手牌中的非锦囊牌直到其回合结束";
						case 2:
							return str + "令一名其他角色的非Charlotte技能失效直到其回合结束";
					}
				},
			},
			ai: {
				order: 10,
				result: {
					player(player) {
						return game.hasPlayer(current => get.attitude(player, current) < 0) ? 1 : 0;
					},
				},
			},
			subSkill: {
				backup: {},
				baiban: {
					init(player, skill) {
						player.addSkillBlocker(skill);
						player.addTip(skill, "放逐 技能失效");
					},
					onremove(player, skill) {
						player.removeSkillBlocker(skill);
						player.removeTip(skill);
					},
					inherit: "baiban",
					marktext: "逐",
				},
				ban: {
					init(player, skill) {
						let storage = player.getStorage(skill);
						if (storage.length) {
							player.addTip(skill, "放逐 限" + (storage.length === 1 ? get.translation(storage[0])[0] : "手牌"));
						}
					},
					onremove(player, skill) {
						player.removeTip(skill);
						delete player.storage[skill];
					},
					charlotte: true,
					mark: true,
					marktext: "禁",
					intro: {
						markcount: () => 0,
						content(storage) {
							if (storage.length > 1) {
								return "不能使用手牌";
							}
							return "不能使用手牌中的非" + get.translation(storage[0]) + "牌";
						},
					},
					mod: {
						cardEnabled(card, player) {
							const storage = player.getStorage("old_mbcmfangzhu_ban");
							const hs = player.getCards("h"),
								cards = [card];
							if (Array.isArray(card.cards)) {
								cards.addArray(card.cards);
							}
							if (cards.containsSome(...hs) && !storage.includes(get.type2(card))) {
								return false;
							}
						},
						cardSavable(card, player) {
							const storage = player.getStorage("old_mbcmfangzhu_ban");
							const hs = player.getCards("h"),
								cards = [card];
							if (Array.isArray(card.cards)) {
								cards.addArray(card.cards);
							}
							if (cards.containsSome(...hs) && !storage.includes(get.type2(card))) {
								return false;
							}
						},
					},
				},
			},
		},
		old_mbjuejin: {
			audio: "mbjuejin",
			persevereSkill: true,
			enable: "phaseUse",
			limited: true,
			skillAnimation: true,
			animationColor: "thunder",
			filterCard: () => false,
			selectCard: [-1, -2],
			filterTarget: true,
			selectTarget: -1,
			multiline: true,
			async contentBefore(event, trigger, player) {
				game.broadcastAll(() => {
					_status.tempMusic = "effect_caomaoBJM";
					game.playBackgroundMusic();
				});
				player.changeSkin({ characterName: "old_mb_caomao" }, "old_mb_caomao_shadow");
				player.awakenSkill(event.skill);
			},
			async content(event, trigger, player) {
				const target = event.target;
				const delt = target.getHp(true) - 1,
					num = Math.abs(delt);
				if (delt != 0) {
					if (delt > 0) {
						const next = target.changeHp(-delt);
						next._triggered = null;
						await next;
					} else {
						await target.recover(num);
					}
				}
				if (delt > 0) {
					await target.changeHujia(num + (player == target ? 2 : 0), null, true);
				} else if (player == target) {
					await target.changeHujia(2, null, true);
				}
			},
			async contentAfter(event, trigger, player) {
				game.addGlobalSkill("old_mbjuejin_xiangsicunwei");
				player.$fullscreenpop("向死存魏！", "thunder");
				const cards = ["cardPile", "discardPile"].map(pos => Array.from(ui[pos].childNodes)).flat();
				const filter = card => ["shan", "tao", "jiu"].includes(card.name);
				const cardx = cards.filter(filter);
				if (cardx.length) {
					await game.cardsGotoSpecial(cardx);
					game.log(cardx, "被移出了游戏");
				}
				for (const target of game.filterPlayer()) {
					const sishis = target.getCards("hej", filter);
					if (sishis.length) {
						target.$throw(sishis);
						game.log(sishis, "被移出了游戏");
						await target.lose(sishis, ui.special);
					}
				}
			},
			ai: {
				order: 0.1,
				result: {
					player(player) {
						let eff = 1;
						game.countPlayer(current => {
							const att = get.attitude(player, current),
								num = Math.abs(current.getHp(true) - 1);
							const delt = Math.max(0, num + current.hujia - 5);
							eff -= att * delt;
						});
						return eff > 0 ? 1 : 0;
					},
				},
			},
			subSkill: {
				xiangsicunwei: {
					trigger: {
						global: ["loseAfter", "equipAfter", "loseAsyncAfter", "cardsDiscardAfter"],
					},
					forced: true,
					silent: true,
					firstDo: true,
					filter(event, player) {
						const nameList = ["shan", "tao", "jiu"];
						return event.getd().some(card => {
							return nameList.includes(get.name(card, false)) && get.position(card, true) === "d";
						});
					},
					async content(event, trigger, player) {
						const nameList = ["shan", "tao", "jiu"];
						const cards = trigger.getd().filter(card => {
							return nameList.includes(get.name(card, false)) && get.position(card, true) === "d";
						});
						await game.cardsGotoSpecial(cards);
						game.log(cards, "被移出了游戏");
					},
				},
			},
		},
		//应天司马懿！复活
		old_jilin: {
			audio: "jilin",
			trigger: {
				global: "phaseBefore",
				player: "enterGame",
			},
			filter(event, player) {
				return event.name != "phase" || game.phaseNumber == 0;
			},
			forced: true,
			locked: false,
			logAudio: () => ["jilin1.mp3"],
			async content(event, trigger, player) {
				const cards = get.cards(3);
				const next = player.addToExpansion(cards, "draw");
				next.gaintag.add(event.name);
				await next;
			},
			marktext: "志",
			intro: {
				markcount: "expansion",
				mark(dialog, content, player) {
					const cards = player.getExpansions("old_jilin"),
						mingzhi = cards.filter(card => card.storage.old_jilin),
						hidden = cards.removeArray(mingzhi);
					if (mingzhi.length) {
						dialog.addText("已明之志");
						dialog.addSmall(mingzhi);
					}
					if (hidden.length) {
						if (player == game.me || player.isUnderControl()) {
							dialog.addText("未明之志");
							dialog.addSmall(hidden);
						} else {
							return "共有" + get.cnNumber(hidden.length) + "张暗“志”";
						}
					}
				},
				content(content, player) {
					const cards = player.getExpansions("old_jilin"),
						mingzhi = cards.filter(card => card.storage.old_jilin),
						hidden = cards.removeArray(mingzhi);
					if (mingzhi.length) {
						dialog.addText("已明之志");
						dialog.addSmall(mingzhi);
					}
					if (hidden.length) {
						if (player == game.me || player.isUnderControl()) {
							dialog.addText("未明之志");
							dialog.addSmall(hidden);
						} else {
							return "共有" + get.cnNumber(hidden.length) + "张暗“志”";
						}
					}
				},
			},
			group: ["old_jilin_kanpo", "old_jilin_change"],
			subSkill: {
				kanpo: {
					audio: "jilin",
					logAudio: () => ["jilin2.mp3", "jilin3.mp3"],
					trigger: {
						target: "useCardToTarget",
					},
					filter(event, player) {
						return event.player != player && player.getExpansions("old_jilin").some(card => !card.storage.old_jilin);
					},
					async cost(event, trigger, player) {
						const hidden = player.getExpansions("old_jilin").filter(card => !card.storage.old_jilin);
						const goon = get.effect(player, trigger.card, trigger.player, player) < 0;
						const suits = player
							.getExpansions("old_jilin")
							.filter(card => card.storage.old_jilin)
							.map(card => get.suit(card))
							.toUniqued();
						if (hidden.length == 1) {
							const { bool } = await player
								.chooseBool("戢鳞：明置一张“志”", `令${get.translation(trigger.card)}对你无效`)
								.set("choice", goon)
								.forResult();
							event.result = {
								bool: bool,
								cost_data: hidden,
							};
						} else {
							const { bool, links } = await player
								.chooseButton(["戢鳞：明置一张“志”", hidden])
								.set("ai", button => {
									const player = get.player(),
										card = button.link,
										suits = get.event().suits;
									if (!get.event().goon) return 0;
									if (!suits.includes(get.suit(card))) return 10;
									return 6 - get.value(card);
								})
								.set("suits", suits)
								.set("goon", goon)
								.forResult();
							event.result = {
								bool: bool,
								cost_data: links,
							};
						}
					},
					async content(event, trigger, player) {
						event.cost_data[0].storage.old_jilin = true;
						trigger.getParent().excluded.add(player);
					},
				},
				change: {
					audio: "jilin",
					logAudio: () => ["jilin4.mp3", "jilin5.mp3"],
					trigger: {
						player: "phaseBegin",
					},
					filter(event, player) {
						return player.countCards("h") && player.getExpansions("old_jilin").some(card => !card.storage.old_jilin);
					},
					async cost(event, trigger, player) {
						const hidden = player.getExpansions("old_jilin").filter(card => !card.storage.old_jilin);
						const next = player.chooseToMove("戢鳞：是否交换“志”和手牌？");
						next.set("list", [
							[get.translation(player) + "（你）的未明之“志”", hidden],
							["手牌区", player.getCards("h")],
						]);
						next.set("filterMove", (from, to) => {
							return typeof to != "number";
						});
						next.set("processAI", list => {
							let player = get.player(),
								cards = list[0][1].concat(list[1][1]).sort(function (a, b) {
									return get.useful(a) - get.useful(b);
								}),
								cards2 = cards.splice(0, player.getExpansions("old_jilin").length);
							return [cards2, cards];
						});
						const { bool, moved } = await next.forResult();
						event.result = {
							bool: bool,
							cost_data: moved,
						};
					},
					async content(event, trigger, player) {
						const moved = event.cost_data;
						const pushs = moved[0],
							gains = moved[1];
						pushs.removeArray(player.getExpansions("old_jilin"));
						gains.removeArray(player.getCards("h"));
						if (!pushs.length || pushs.length != gains.length) return;
						const next = player.addToExpansion(pushs);
						next.gaintag.add("old_jilin");
						await next;
						await player.gain(gains, "draw");
					},
				},
			},
		},
		old_yingyou: {
			audio: "yingyou",
			trigger: {
				player: "phaseUseBegin",
			},
			filter(event, player) {
				return player.countCards("h") && player.getExpansions("old_jilin").some(card => !card.storage.old_jilin);
			},
			async cost(event, trigger, player) {
				const hidden = player.getExpansions("old_jilin").filter(card => !card.storage.old_jilin);
				const suits = player
					.getExpansions("old_jilin")
					.filter(card => card.storage.old_jilin)
					.map(card => get.suit(card))
					.toUniqued();
				const { bool, links } = await player
					.chooseButton(["英猷：你可以明志", hidden])
					.set("ai", button => {
						const player = get.player(),
							card = button.link,
							suits = get.event().suits;
						const getNum = player => {
							var list = [];
							for (var i of lib.suit) list.push(player.countCards("h", { suit: i }) + 3);
							return list.sort((a, b) => b - a)[0];
						};
						if (!suits.includes(get.suit(card))) return 10;
						if (get.suit(card) == getNum(player)) return 5;
						return 0;
					})
					.set("suits", suits)
					.forResult();
				event.result = {
					bool: bool,
					cost_data: links,
				};
			},
			logAudio: () => ["yingyou1.mp3", "yingyou2.mp3"],
			async content(event, trigger, player) {
				event.cost_data[0].storage.old_jilin = true;
				const num = player.getExpansions("old_jilin").filter(card => card.storage.old_jilin).length;
				await player.draw(num);
			},
			ai: {
				combo: "old_jilin",
			},
			group: "old_yingyou_draw",
			subSkill: {
				draw: {
					audio: "yingyou",
					logAudio: () => ["yingyou3.mp3", "yingyou4.mp3"],
					trigger: {
						player: "loseAfter",
						global: ["equipAfter", "addJudgeAfter", "gainAfter", "loseAsyncAfter", "addToExpansionAfter"],
					},
					filter(event, player) {
						const suits = player
							.getExpansions("old_jilin")
							.filter(card => card.storage.old_jilin)
							.map(card => get.suit(card))
							.toUniqued();
						const evt = event.getl(player);
						if (!evt || !evt.cards2 || !evt.cards2.length) return false;
						return evt.cards2.some(card => {
							return suits.includes(get.suit(card, player));
						});
					},
					forced: true,
					locked: false,
					async content(event, trigger, player) {
						const suits = player
							.getExpansions("old_jilin")
							.filter(card => card.storage.old_jilin)
							.map(card => get.suit(card))
							.toUniqued();
						const num = trigger.getl(player).cards2.filter(card => {
							return suits.includes(get.suit(card, player));
						}).length;
						await player.draw(num);
					},
				},
			},
		},
		old_yingtian: {
			audio: "yingtian",
			trigger: {
				global: "dieAfter",
			},
			filter(event, player) {
				return game.countGroup() < 3;
			},
			forced: true,
			juexingji: true,
			skillAnimation: true,
			animationColor: "gray",
			async content(event, trigger, player) {
				const skill = event.name;
				player.awakenSkill(skill);
				await player.changeSkills(get.info(skill).derivation, ["old_yingyou"]);
				player.addSkill(skill + "_effect");
			},
			derivation: ["reguicai", "rewansha", "lianpo"],
			subSkill: {
				effect: {
					mod: {
						targetInRange: () => true,
					},
				},
			},
		},
		//神姜维初版 --by XiaZhiliao
		//光速去世
		old_guxuan: {
			audio: "mbtiantao",
			trigger: {
				target: "useCardToTargeted",
			},
			filter(event, player) {
				if (get.type2(event.card) != "trick" || event.player == player) {
					return false;
				}
				return ["h", "e", "j"].some(pos => player.countDiscardableCards(player, pos));
			},
			async cost(event, trigger, player) {
				const position = ["h", "e", "j"].filter(pos => player.countDiscardableCards(player, pos)),
					map = { h: "手牌区", e: "装备区", j: "判定区" };
				let list = position.map(i => map[i]);
				const result = await player
					.chooseControl(list, "cancel2")
					.set("prompt", `###${get.prompt(event.skill)}###你可以弃置自己一个区域内的所有牌，然后选择弃置至多等量名其他角色对应区域内的各一张牌。`)
					.set("ai", (event, player) => {
						const targets = game.filterPlayer(current => current != player),
							position = get.event().position,
							list = {};
						for (const pos of position) {
							let info = targets
									.filter(target => target.countDiscardableCards(player, pos))
									.map(target => get.effect(target, { name: "guohe_copy", position: pos }, player, player))
									.filter(num => num >= 0)
									.sort((a, b) => b - a)
									.slice(0, player.countDiscardableCards(player, pos))
									.reduce((sum, num) => sum + num, 0),
								cards = player.getDiscardableCards(player, pos);
							list[pos] = info - (pos == "j" ? -1 : 1) * get.value(cards) * (cards.length ^ 1.5);
						}
						let choice = Object.entries(list).sort((a, b) => b[1] - a[1])[0];
						if (choice[1] > 0) {
							return { h: "手牌区", e: "装备区", j: "判定区" }[choice[0]];
						}
						return "cancel2";
					})
					.set("position", position)
					.forResult();
				event.result = {
					bool: result?.control && result.control != "cancel2",
					cost_data: { 手牌区: "h", 装备区: "e", 判定区: "j" }[result.control],
				};
			},
			async content(event, trigger, player) {
				const pos = event.cost_data;
				const { cards } = await player.chooseToDiscard(player.countCards(pos), pos, true).forResult();
				let num = cards.length,
					doneList = [];
				while (num-- > 0) {
					if (!game.hasPlayer(current => current != player && !doneList.includes(current) && current.countDiscardableCards(player, pos))) {
						break;
					}
					let result = await player
						.chooseTarget(`孤悬：选择一名其他角色，弃置其${{ h: "手牌区", e: "装备区", j: "判定区" }[pos]}内的一张牌`)
						.set("filterTarget", (_, player, target) => target != player && !get.event().doneList.includes(target) && target.countDiscardableCards(player, get.event().pos))
						.set("ai", target => {
							const { pos, player } = get.event();
							return get.effect(target, { name: "guohe_copy", position: pos }, player, player);
						})
						.set("doneList", doneList)
						.set("pos", pos)
						.forResult();
					if (!result?.bool || !result.targets?.length) {
						break;
					}
					const target = result.targets[0];
					player.line(target);
					result = await player.discardPlayerCard(target, pos).forResult();
					if (result?.bool) {
						doneList.add(target);
					}
				}
			},
		},
		//+手牌上限|火伤
		old_juejin: {
			audio: "mbshenpei",
			persevereSkill: true,
			xiandingji: true,
			limited: true,
			mark: true,
			intro: {
				content: "limited",
			},
			enable: "phaseUse",
			trigger: { player: "dying" },
			check(event, player) {
				if (player.canSave(player) && player.countCards("hs", card => get.tag(card, "save")) > -player.hp) {
					return false;
				}
				return true;
			},
			getNum(event, player) {
				let dying = game.getAllGlobalHistory("everything", evt => {
						if (evt.name != "dying" || evt.player != player) {
							return false;
						}
						return evt != event;
					}).length,
					dead = game.getAllGlobalHistory("everything", evt => {
						if (evt.name != "die" || evt.player != player) {
							return false;
						}
						return evt.getParent().name == "dying" && evt.getParent().player == player;
					}).length;
				return dying - dead;
			},
			async content(event, trigger, player) {
				player.awakenSkill(event.name);
				const num = Math.min(Math.max(get.info(event.name).getNum(trigger, player), 1), 4);
				const list = ["回复X点体力", "摸X张牌", "手牌上限+X", "对一名其他角色造成X点火焰伤害"].map((str, i) => {
					str = str.replaceAll("X", String(num));
					return [i, str];
				});
				let result = await player
					.chooseButton([1, num], true, [`绝烬：请选择${num == 1 ? "一" : `一至${get.cnNumber(num)}`}项`, [list, "textbutton"]])
					.set("ai", ({ link }) => {
						const { player, num } = get.event();
						if (link == 0) {
							if (get.recoverEffect(player, player, player) > 0) {
								if (player.canSave(player) && player.countCards("hs", card => get.tag(card, "save")) > -player.hp) {
									return get.recoverEffect(player, player, player) * num;
								}
								return 114514;
							}
							return 0;
						} else if (link == 1) {
							return get.effect(player, { name: "draw" }, player, player) * num;
						} else if (link == 2) {
							return num;
						}
						let currents = game
							.filterPlayer(current => current != player)
							.map(current => get.damageEffect(current, player, player, "fire"))
							.sort((a, b) => b - a);
						return currents[0];
					})
					.set("num", num)
					.forResult();
				if (result?.bool && result.links?.length) {
					if (result.links.includes(0)) {
						await player.recover(num);
					}
					if (result.links.includes(1)) {
						await player.draw(num);
					}
					if (result.links.includes(2)) {
						player.addSkill(`${event.name}_buff`);
						let storage = player.getStorage(`${event.name}_buff`, 0);
						storage += num;
						player.setStorage(`${event.name}_buff`, storage, true);
					}
					if (result.links.includes(3) && game.hasPlayer(current => current != player)) {
						result = await player
							.chooseTarget(`绝烬：选择一名其他角色对其造成${num}点火焰伤害`, true)
							.set("ai", target => {
								const { player } = get.event();
								return get.damageEffect(target, player, player, "fire");
							})
							.forResult();
						if (result?.bool && result.targets?.length) {
							await result.targets[0].damage(num, "fire");
						}
					}
					if (player.isIn()) {
						const next = game.createEvent("old_huitian_check", null, event);
						event.next.remove(next);
						next.player = player;
						next._trigger = trigger;
						next.setContent(get.info(event.name).contentx);
						if (player.isDying()) {
							const dyingEvent = event.getParent(evt => evt.name == "dying" && evt.player == player, true);
							if (dyingEvent?.after) {
								dyingEvent.after.push(next);
								return;
							}
						}
						event.next.push(next);
						await next;
					}
				}
			},
			async contentx(event, trigger, player) {
				const result = await player
					.chooseBool(get.prompt("old_huitian"))
					.set("ai", (event, player) => {
						if (!player.hasSkill("old_huitian", null, false, false)) {
							return true;
						} else if (_status.currentPhase && get.attitude(player, _status.currentPhase) < 0) {
							return true;
						}
						return get.info("old_huitian_die").filter({}, player);
					})
					.forResult();
				if (result?.bool) {
					await player.useSkill("old_huitian");
					let evt = _status.event.getParent("phaseUse");
					if (evt && evt.name == "phaseUse") {
						evt.skipped = true;
					}
					evt = event.getParent("phase", true);
					if (evt) {
						if (_status.currentPhase) {
							game.log(_status.currentPhase, "结束了回合");
						}
						evt.num = evt.phaseList.length;
						evt.goto(11);
					}
				}
			},
			subSkill: {
				buff: {
					charlotte: true,
					onremove: true,
					mark: true,
					intro: {
						content: "手牌上限+$",
					},
					mod: {
						maxHandcard(player, num) {
							return num + player.getStorage("old_juejin_buff", 0);
						},
					},
				},
			},
			ai: {
				order(item, player) {
					const event = get.event();
					player = player || event.player;
					let num = get.info("old_juejin").getNum(event, player);
					if (num > 2) {
						return 114514;
					}
					return 0;
				},
				result: {
					player: 1,
				},
			},
		},
		old_huitian: {
			audio: "mbhuitian",
			round: 1,
			trigger: { player: "phaseJieshuBegin" },
			filter(event, player) {
				return player.getHp() <= 2 && player.hasHistory("sourceDamage", evt => evt.card?.name == "sha");
			},
			check(event, player) {
				return player.countCards("sha") >= 1 && player.getUseValue("sha") > 0;
			},
			async content(event, tigger, player) {
				const next = player.insertPhase(event.name);
				player
					.when({ player: "phaseBegin" })
					.filter(evt => evt == next && evt.skill == event.name)
					.step(async function (event, tigger, player) {
						player.addTempSkill("old_huitian_buff");
					});
			},
			group: ["old_huitian_die"],
			subSkill: {
				buff: {
					charlotte: true,
					mark: true,
					intro: {
						content: "<li>摸牌阶段摸牌数+2<br><li>使用【杀】无次数限制且造成的伤害+1",
					},
					mod: {
						cardUsable(card) {
							if (card.name == "sha") {
								return Infinity;
							}
						},
					},
					trigger: {
						player: "phaseDrawBegin2",
						source: "damageBegin1",
					},
					filter(event) {
						if (event.name == "phaseDraw") {
							return !event.numFixed;
						}
						return event.card?.name == "sha";
					},
					forced: true,
					async content(event, trigger, player) {
						if (trigger.name == "phaseDraw") {
							trigger.num += 2;
						} else {
							trigger.num++;
						}
					},
				},
				die: {
					trigger: { global: "roundStart" },
					filter(event, player) {
						return player.getAllHistory("useSkill", evt => evt.skill == "old_huitian").length > 2;
					},
					forced: true,
					async content(event, tigger, player) {
						await player.die();
					},
				},
			},
		},
		//交换任意牌
		old_xingzhen: {
			audio: "mbxinghun",
			usable: 1,
			enable: "phaseUse",
			async content(event, trigger, player) {
				const num = Math.min(player.maxHp, 7);
				const cards = get.cards(num, true);
				let result;
				if (!player.countCards("h")) {
					await player.viewCards(`牌堆顶的${get.cnNumber(num)}张牌`, cards);
				} else {
					result = await player
						.chooseToMove_new("星阵：选择任意张手牌牌进行交换")
						.set("list", [
							["牌堆顶的牌", cards],
							["你的手牌", player.getCards("h")],
						])
						.set("filterMove", (from, to, moved) => typeof to != "number")
						.set("processAI", list => {
							const player = get.player();
							let cards = list
								.map(i => i[1])
								.flat()
								.sort((a, b) => get.value(b, player) - get.value(a, player));
							let sha = cards.filter(card => get.name(card, player) == "sha");
							cards.removeArray(sha);
							const hs = [];
							let num = Math.ceil(sha.length / 2);
							const dead = get.info("old_huitian_die").filter({}, player);
							if (dead) {
								num = list[1][1].length;
							}
							hs.addArray(sha.slice(0, num));
							sha.removeArray(hs);
							if (hs.length < player.countCards("h")) {
								hs.addArray(cards.slice(0, player.countCards("h") - hs.length));
								cards.removeArray(hs);
							}
							const top = sha.concat(cards);
							return [top, hs];
						})
						.forResult();
					if (result?.bool) {
						await game
							.loseAsync({
								player,
								cards: result.moved.flat(),
								moved: result.moved,
							})
							.setContent(async function (event, trigger, player) {
								const { cards, moved } = event,
									hs = player.getCards("h");
								const gain = moved[1].filter(card => !hs.includes(card)),
									puts = moved[0].filter(card => hs.includes(card)),
									originPile = cards.slice().removeArray(hs);
								//将手牌中有变动的和牌堆顶的牌送入处理区
								if (puts.length) {
									await player.lose(puts, ui.ordering).set("getlx", false);
								}
								await game.cardsGotoOrdering(originPile);
								//手牌部分
								if (gain.length) {
									await player.gain(gain, "draw");
									//调整手牌顺序
									player.getCards("h").forEach(i => i.goto(ui.special));
									player.directgain(moved[1].slice().reverse(), false);
								}
								//牌堆部分
								await game.cardsGotoPile(moved[0].slice().reverse(), ["insert_card", true]);
								//知情牌
								game.addCardKnower(moved[0], player);
							});
						/*
							//未封装方案，弃用
							await game.cardsGotoOrdering(cards);
							const hs = player.getCards("h");
							const gain = result.moved[1].filter(card => !hs.includes(card)),
								lose = result.moved[0].filter(card => hs.includes(card));
							let indexList = lose.slice().map(card => result.moved[0].indexOf(card));
							if (lose.length) {
								await player.lose(lose, ui.cardPile, "insert");
							}
							let pile = result.moved[0].slice().removeArray(lose);
							await game.cardsGotoPile(pile, ["top_cards", result.moved[0]], ["record", indexList], (event, card) => {
								let index = event.top_cards.indexOf(card);
								for (let i = 0; i < event.record.length; i++) {
									let index2 = event.record[i] || 0;
									if (index < index2) {
										event.record.splice(i - 1, 0, index);
										return ui.cardPile.childNodes[i];
									}
								}
								event.record.push(index);
								return ui.cardPile.childNodes[event.record.length - 1];
							});
							await player.gain(gain, "draw");
							game.addCardKnower(result.moved[0], player);
							*/
					}
				}
				if (!game.hasPlayer(current => current != player)) {
					return;
				}
				result = await player
					.chooseTarget(`星阵：选择一名其他角色，令其观看牌堆顶${get.cnNumber(num)}张牌或你的手牌`, true)
					.set("filterTarget", (_, player, target) => target != player)
					.set("ai", target => {
						const { player } = get.event();
						return get.effect(target, { name: "sha" }, player, player);
					})
					.forResult();
				if (result?.bool && result.targets?.length) {
					const [target] = result.targets;
					if (!player.countCards("h")) {
						result = { control: "牌堆顶" };
					} else {
						result = await target
							.chooseControl(["牌堆顶", "手牌区"])
							.set("prompt", `选择展示牌堆顶${get.cnNumber(num)}张牌或${get.translation(player)}的手牌`)
							.set("prompt2", `${get.translation(player)}可对你使用展示牌中的【杀】`)
							.set("ai", (event, player) => {
								const { source, num } = get.event();
								const hs = source.countCards("h");
								if (source.mayHaveSha(player, "use", null, "count") > num) {
									return "牌堆顶";
								} else if (hs > num) {
									return "牌堆顶";
								}
								return "手牌区";
							})
							.set("source", player)
							.set("num", num)
							.forResult();
					}
					if (result?.control && result.control != "cancel2") {
						let showCards,
							str = `${get.translation(target)}因【星阵】展示`;
						if (result.control == "牌堆顶") {
							game.log(target, `选择展示牌堆顶的${get.cnNumber(num)}张牌`);
							showCards = get.cards(num, true);
							str += `牌堆顶的${get.cnNumber(num)}牌`;
						} else {
							game.log(target, "选择展示牌", player, "的手牌");
							showCards = player.getCards("h");
							str += `${get.translation(player)}的手牌`;
						}
						await target.showCards(showCards, str);
						if (showCards.some(card => get.name(card) == "sha")) {
							let sha = showCards.filter(card => get.name(card) == "sha");
							while (sha.length) {
								let card = sha.shift();
								if (player.canUse(card, target, false, false)) {
									await player.useCard(card, target, false);
								}
							}
						}
					}
				}
			},
			ai: {
				order(item, player) {
					if (player.countCards("hs", card => get.tag(card, "draw"))) {
						return 1;
					}
					return 20;
				},
				result: {
					player(player) {
						if (!game.hasPlayer(current => current != player && get.effect(current, { name: "sha" }, player, player) > 0)) {
							return 0;
						}
						return 1;
					},
				},
			},
		},
		//神姜维二版 --by XiaZhiliao
		//+体力上限|雷伤|三窟
		oldx_juejin: {
			audio: "mbshenpei",
			persevereSkill: true,
			xiandingji: true,
			onremove: true,
			enable: "phaseUse",
			trigger: { player: "dying" },
			getNum(event, player) {
				let dying = game.getAllGlobalHistory("everything", evt => {
						if (evt.name != "dying" || evt.player != player) {
							return false;
						}
						return evt != event;
					}).length,
					dead = game.getAllGlobalHistory("everything", evt => {
						if (evt.name != "die" || evt.player != player) {
							return false;
						}
						return evt.getParent().name == "dying" && evt.getParent().player == player;
					}).length;
				return dying - dead;
			},
			direct: true,
			async content(event, trigger, player) {
				const num = Math.min(Math.max(get.info(event.name).getNum(trigger, player), 1), 4),
					check = !player.hasStorage(event.name, true);
				const list = ["回复X点体力", "摸X张牌", "体力上限+X", "对一名其他角色造成X点雷电伤害"].map((str, i) => {
					str = str.replaceAll("X", String(num));
					return [i, str];
				});
				let result = await player
					.chooseButton([1, num], [`###${get.prompt(event.name)}###执行${num == 1 ? "一" : `一至${get.cnNumber(num)}`}项`, [list, "textbutton"]])
					.set("ai", ({ link }) => {
						const { player, num, check } = get.event();
						if (check && player.maxHp > 1) {
							return 0;
						}
						if (link == 0) {
							if (get.recoverEffect(player, player, player) > 0) {
								if (player.canSave(player) && player.countCards("hs", card => get.tag(card, "save")) > -player.hp) {
									return get.recoverEffect(player, player, player) * num;
								}
								return 114514;
							}
							return 0;
						} else if (link == 1) {
							return get.effect(player, { name: "draw" }, player, player) * num;
						} else if (link == 2) {
							if (!check) {
								return 1919810;
							}
							return num;
						}
						let currents = game
							.filterPlayer(current => current != player)
							.map(current => get.damageEffect(current, player, player, "thunder"))
							.filter(i => i >= 0)
							.slice(0, num)
							.reduce((sum, num) => sum + num, 0);
						return currents;
					})
					.set("num", num)
					.set("check", check)
					.forResult();
				if (result?.bool && result.links?.length) {
					player.awakenSkill(event.name);
					await player.logSkill(`${event.name}_animate`);
					player.setStorage(event.name, true, true);
					if (result.links.includes(2)) {
						await player.gainMaxHp(num);
					}
					if (result.links.includes(0)) {
						await player.recover(num);
					}
					if (result.links.includes(1)) {
						await player.draw(num);
					}
					if (result.links.includes(3) && game.hasPlayer(current => current != player)) {
						result = await player
							.chooseTarget(`绝烬：选择一名其他角色对其造成${num}点雷电伤害`, true)
							.set("ai", target => {
								const { player } = get.event();
								return get.damageEffect(target, player, player, "thunder");
							})
							.forResult();
						if (result?.bool && result.targets?.length) {
							await result.targets[0].damage(num, "thunder");
						}
					}
					if (player.isIn()) {
						const next = game.createEvent("old_huitian_check", null, event);
						event.next.remove(next);
						next.player = player;
						next._trigger = trigger;
						next.setContent(get.info(event.name).contentx);
						if (player.isDying()) {
							const dyingEvent = event.getParent(evt => evt.name == "dying" && evt.player == player, true);
							if (dyingEvent?.after) {
								dyingEvent.after.push(next);
								return;
							}
						}
						event.next.push(next);
						await next;
					}
				} else if (trigger?.name == "dying" && check) {
					await player.logSkill(event.name);
					await player.loseMaxHp();
					await player.recoverTo(1);
				}
			},
			async contentx(event, trigger, player) {
				const result = await player
					.chooseBool(get.prompt("old_huitian"))
					.set("ai", (event, player) => {
						if (!player.hasSkill("old_huitian", null, false, false)) {
							return true;
						} else if (_status.currentPhase && get.attitude(player, _status.currentPhase) < 0) {
							return true;
						}
						return get.info("old_huitian_die").filter({}, player);
					})
					.forResult();
				if (result?.bool) {
					await player.useSkill("old_huitian");
					let evt = _status.event.getParent("phaseUse");
					if (evt && evt.name == "phaseUse") {
						evt.skipped = true;
					}
					evt = event.getParent("phase", true);
					if (evt) {
						if (_status.currentPhase) {
							game.log(_status.currentPhase, "结束了回合");
						}
						evt.num = evt.phaseList.length;
						evt.goto(11);
					}
				}
			},
			subSkill: {
				animate: {
					charlotte: true,
					skillAnimation: true,
					animationColor: "orange",
				},
			},
			ai: {
				order(item, player) {
					const event = get.event();
					player = player || event.player;
					if (!player.hasStorage("oldx_juejin", true)) {
						return 0;
					}
					let num = get.info("oldx_juejin").getNum(event, player);
					if (num > 3) {
						return 114514;
					}
					return 0;
				},
				result: {
					player(player) {
						if (!player.hasStorage("oldx_juejin", true)) {
							return 0;
						}
						return 1;
					},
				},
			},
		},
		//无限傲才
		oldx_xingzhen: {
			audio: "mbxingzhen",
			hiddenCard(player, name) {
				const type = get.type2(name);
				if (!["basic", "trick"].includes(type)) {
					return false;
				}
				if (type == "basic" && _status.currentPhase != player) {
					return true;
				} else if (type == "trick" && _status.currentPhase == player) {
					return true;
				}
			},
			clickable(player) {
				if (player.isUnderControl(true)) {
					const cards = lib.skill.oldx_xingzhen.getCards(player);
					function createDialogWithControl(result) {
						const dialog = ui.create.dialog("星阵", "peaceDialog");
						result.length > 0 ? dialog.add(result, true) : dialog.addText("牌堆顶无牌");
						const control = ui.create.control("确定", () => dialog.close());
						dialog._close = dialog.close;
						dialog.hide = dialog.close = function (...args) {
							control.close();
							return dialog._close(...args);
						};
						if (_status.oldx_xingzhen_clickable) {
							_status.oldx_xingzhen_clickable.close();
						}
						_status.oldx_xingzhen_clickable = dialog;
						dialog.open();
					}
					if (cards instanceof Promise) {
						cards.then(([ok, result]) => createDialogWithControl(result));
					} else {
						createDialogWithControl(cards);
					}
				}
			},
			getCards(player) {
				let cards = [];
				if (game.online) {
					return game.requestSkillData("oldx_xingzhen", "getTopCards", 10000);
				} else {
					if (ui.cardPile.hasChildNodes !== false) {
						cards = Array.from(ui.cardPile.childNodes).slice(0, 7);
					}
				}
				game.addCardKnower(cards, player);
				return cards;
			},
			sync: {
				getTopCards(client) {
					if (ui.cardPile.hasChildNodes !== false) {
						let cards = Array.from(ui.cardPile.childNodes).slice(0, 7);
						game.addCardKnower(cards, player);
						return cards;
					}
					return [];
				},
			},
			mark: true,
			marktext: "阵",
			intro: {
				markcount(storage, player) {
					return 7;
				},
				mark(dialog, storage, player, event, skill) {
					const intronode = ui.create.div(".menubutton.pointerdiv", "点击发动", function () {
						if (!this.classList.contains("disabled")) {
							this.classList.add("disabled");
							this.style.opacity = 0.5;
							lib.skill[skill].clickable(player);
						}
					});
					if (!_status.gameStarted || !player.isUnderControl(true)) {
						intronode.classList.add("disabled");
						intronode.style.opacity = 0.5;
					}
					dialog.add(intronode);
				},
			},
			group: "oldx_xingzhen_aocai",
			subSkill: {
				aocai: {
					audio: "mbxingzhen",
					mod: {
						cardEnabled2(card, player) {
							if (card?.hasGaintag?.("oldx_xingzhen")) {
								let type = get.type2(card);
								if (type == "basic" && _status.currentPhase == player) {
									return false;
								} else if (type == "trick" && _status.currentPhase != player) {
									return false;
								} else if (type == "equip") {
									return false;
								}
							}
						},
						aiOrder(player, card, num) {
							if (card?.hasGaintag?.("oldx_xingzhen")) {
								return num + 0.1;
							}
						},
					},
					onChooseToUse(event) {
						if (game.online) {
							return;
						}
						const player = event.player;
						let cards = player.getCards("s", card => card.hasGaintag("oldx_xingzhen"));
						if (cards.length) {
							game.deleteFakeCards(cards);
						}
						if (ui.cardPile.hasChildNodes !== false) {
							cards = Array.from(ui.cardPile.childNodes).slice(0, 7);
							player.directgains(game.createFakeCards(cards), null, "oldx_xingzhen");
						}
					},
					onChooseToRespond(event) {
						if (game.online) {
							return;
						}
						const player = event.player;
						let cards = player.getCards("s", card => card.hasGaintag("oldx_xingzhen"));
						if (cards.length) {
							game.deleteFakeCards(cards);
						}
						if (ui.cardPile.hasChildNodes !== false) {
							cards = Array.from(ui.cardPile.childNodes).slice(0, 7);
							player.directgains(game.createFakeCards(cards), null, "oldx_xingzhen");
						}
					},
					trigger: {
						player: ["useCardBefore", "respondBefore", "chooseToUseAfter", "chooseToRespondAfter"],
					},
					filter(event, player) {
						if (["useCard", "respond"].includes(event.name)) {
							const pile = Array.from(ui.cardPile.childNodes).slice(0, 7);
							return event.cards?.some(card => pile.some(cardx => cardx.cardid == card._cardid));
						}
						return true;
					},
					forced: true,
					popup: false,
					async content(event, trigger, player) {
						if (["useCard", "respond"].includes(trigger.name)) {
							if (!trigger.skill) {
								trigger.skill = "oldx_xingzhen";
							} else {
								await player.logSkill("oldx_xingzhen");
							}
							const cards = await get.info("oldx_xingzhen").getCards(player);
							for (let i = 0; i < trigger.cards.length; i++) {
								const card = trigger.cards[i];
								const cardx = cards.find(cardx => cardx.cardid == card._cardid);
								if (cardx) {
									trigger.cards[i] = cardx;
									trigger.card.cards[i] = cardx;
								}
							}
						}
						let cards = player.getCards("s", card => card.hasGaintag("oldx_xingzhen"));
						if (cards.length) {
							game.deleteFakeCards(cards);
						}
					},
				},
			},
		},
		//手杀SP孙权 --by XiaZhiliao
		//出猎
		old_mb_chulie: {
			trigger: {
				player: "enterGame",
				global: "phaseBefore",
			},
			filter(event, player) {
				const list = _status.DB_diaogong_improve || new Map();
				if (
					lib.suit
						.slice()
						.reverse()
						.every((_, i) => list.get(i + 11))
				) {
					return false;
				}
				return event.name != "phase" || game.phaseNumber == 0;
			},
			forced: true,
			locked: false,
			async content(event, trigger, player) {
				const list = _status.DB_diaogong_improve || new Map();
				let controls = lib.suit
					.slice()
					.reverse()
					.filter((suit, i) => !list.get(i + 11));
				const result = await player
					.chooseControl(controls)
					.set("prompt", `${get.translation(event.name)}：请为${get.poptip("DB_diaogong")}选择一个花色`)
					.set("ai", (event, player) => get.event().controls[0])
					.forResult();
				if (result?.control && lib.suit.includes(result.control)) {
					game.log(player, "选择了", get.translation(result.control + "2"));
					player.popup(result.control);
					let num = lib.suit.slice().reverse().indexOf(result.control) + 11;
					game.broadcastAll(function (num) {
						const list = _status.DB_diaogong_improve || new Map();
						let numx = (list.get(num) || 0) + 1;
						list.set(num, numx);
						_status.DB_diaogong_improve = list;
					}, num);
				}
			},
		},
		//射虎
		old_mb_shehu: {
			trigger: { player: "phaseZhunbeiBegin" },
			filter(event, player) {
				return "DB_diaogong" in lib.card;
			},
			async cost(event, trigger, player) {
				event.result = await player
					.chooseTarget(`${get.translation(event.skill)}：是否选择一名角色令其装备或升级${get.poptip("DB_diaogong")}？`)
					.set("ai", target => {
						const { player } = get.event();
						const att = get.attitude(player, target);
						if (att < 0) {
							return 0;
						}
						let check = target.hasCard("DB_diaogong", "e");
						if (!check) {
							if (!target.canEquip("DB_diaogong", true)) {
								return 0;
							}
						}
						return target.hp * target.countCards("h") * Math.min(2, att) + check ? 2 : 0;
					})
					.forResult();
			},
			async content(event, trigger, player) {
				const [target] = event.targets;
				if (!target.hasCard("DB_diaogong", "e")) {
					if (target.canEquip("DB_diaogong", true)) {
						await target.equip(game.createCard("DB_diaogong", "heart", 5));
					}
				} else {
					const next = get.info({ name: "DB_diaogong" }).improveContent(player);
					await next;
				}
			},
			group: "old_mb_shehu_sha",
			subSkill: {
				sha: {
					enable: "phaseUse",
					usable: 1,
					filter(event, player) {
						const list = _status.DB_diaogong_improve || new Map();
						return Array.from(list.keys()).length && game.hasPlayer(current => player.canUse("sha", current, false, false));
					},
					prompt() {
						const list = _status.DB_diaogong_improve || new Map();
						let num = Array.from(list.values()).reduce((sum, i) => sum + i, 0);
						return `出牌阶段限一次，你可以对一名其他角色使用${get.cnNumber(num)}张【杀】`;
					},
					filterTarget(card, player, target) {
						return target != player;
					},
					async content(event, trigger, player) {
						const list = _status.DB_diaogong_improve || new Map(),
							{ target } = event;
						let num = Array.from(list.values()).reduce((sum, i) => sum + i, 0);
						while (num-- && target.isIn()) {
							if (player.canUse("sha", target, false, false)) {
								await player.useCard({ name: "sha", isCard: true }, target, false);
							}
						}
					},
					ai: {
						order(item, player) {
							return get.order({ name: "sha" }, player) + 0.1;
						},
						result: {
							target(player, target, card, isLink) {
								let eff = -1.5,
									odds = 1.35,
									num = 1;
								if (isLink) {
									eff = isLink.eff || -2;
									odds = isLink.odds || 0.65;
									num = isLink.num || 1;
									if (
										num > 1 &&
										target.hasSkillTag("filterDamage", null, {
											player: player,
											card: card,
											jiu: player.hasSkill("jiu"),
										})
									) {
										num = 1;
									}
									return odds * eff * num;
								}
								if (
									player.hasSkill("jiu") ||
									player.hasSkillTag("damageBonus", true, {
										target: target,
										card: card,
									})
								) {
									if (
										target.hasSkillTag("filterDamage", null, {
											player: player,
											card: card,
											jiu: player.hasSkill("jiu"),
										})
									) {
										eff = -0.5;
									} else {
										num = 2;
										if (get.attitude(player, target) > 0) {
											eff = -7;
										} else {
											eff = -4;
										}
									}
								}
								if (
									!player.hasSkillTag(
										"directHit_ai",
										true,
										{
											target: target,
											card: card,
										},
										true
									)
								) {
									odds -= 0.7 * target.mayHaveShan(player, "use", true, "odds");
								}
								_status.event.putTempCache("sha_result", "eff", {
									bool: target.hp > num && get.attitude(player, target) > 0,
									card: ai.getCacheKey(card, true),
									eff: eff,
									odds: odds,
								});
								return odds * eff;
							},
						},
					},
				},
			},
		},
		//手杀界沮授
		old_xinjianying: {
			audio: "xinjianying",
			subfrequent: ["draw"],
			enable: "phaseUse",
			usable: 1,
			locked: false,
			filter(event, player) {
				if (!player.countCards("he")) return false;
				for (var i of lib.inpile) {
					if (i != "du" && get.type(i, null, false) == "basic") {
						var card = { name: i };
						if (player.hasUseTarget(card)) return true;
					}
				}
				return false;
			},
			onChooseToUse(event) {
				if (event.type == "phase" && !game.online) {
					var last = event.player.getLastUsed();
					if (last && last.getParent("phaseUse") == event.getParent()) {
						var suit = get.suit(last.card, false);
						if (suit != "none") event.set("old_xinjianying_suit", suit);
					}
				}
			},
			chooseButton: {
				dialog(event, player) {
					var list = [];
					var suit = event.old_xinjianying_suit || "",
						str = get.translation(suit);
					for (var i of lib.inpile) {
						if (i != "du" && get.type(i, null, false) == "basic") {
							if (i == "sha") {
								for (var j of lib.inpile_nature) {
									var card = { name: i, nature: j };
									if (player.hasUseTarget(card)) list.push(["基本", str, i, j]);
								}
							}
							if (i == "sha" || i == "jiu") {
								var card = { name: i };
								if (player.hasUseTarget(card)) list.push(["基本", str, i]);
							} else if (event.filterCard({ name: i }, player, event)) list.push(["基本", str, i]);
						}
					}
					return ui.create.dialog("渐营", [list, "vcard"]);
				},
				check(button) {
					if (button.link[2] == "jiu") return 0;
					return _status.event.player.getUseValue({
						name: button.link[2],
						nature: button.link[3],
					});
				},
				backup(links, player) {
					var next = {
						audio: "xinjianying",
						filterCard: true,
						popname: true,
						position: "he",
						viewAs: {
							name: links[0][2],
							nature: links[0][3],
							storage: { old_xinjianying: true },
						},
						ai1(card) {
							return 7 - _status.event.player.getUseValue(card, null, true);
						},
					};
					if (_status.event.old_xinjianying_suit) next.viewAs.suit = _status.event.old_xinjianying_suit;
					return next;
				},
				prompt(links) {
					return "将一张牌当做" + (get.translation(links[0][3]) || "") + get.translation(links[0][2]) + (_status.event.old_xinjianying_suit ? "(" + get.translation(_status.event.old_xinjianying_suit) + ")" : "") + "使用";
				},
			},
			mod: {
				cardUsable(card, player, num) {
					if (card.storage && card.storage.old_xinjianying) return Infinity;
				},
			},
			ai: {
				order(item, player) {
					if (_status.event.old_xinjianying_suit) return 16;
					return 3;
				},
				result: {
					player: 7,
				},
			},
			group: ["old_xinjianying_draw", "jianying_mark"],
			init(player) {
				if (player.isPhaseUsing()) {
					var evt = _status.event.getParent("phaseUse");
					var history = player.getHistory("useCard", function (evt2) {
						return evt2.getParent("phaseUse") == evt;
					});
					if (history.length) {
						var trigger = history[history.length - 1];
						player.storage.jianying_mark = trigger.card;
						player.markSkill("jianying_mark");
						game.broadcastAll(
							function (player, suit) {
								if (player.marks.jianying_mark) player.marks.jianying_mark.firstChild.innerHTML = get.translation(suit);
							},
							player,
							get.suit(trigger.card, player)
						);
						player.when("phaseUseAfter").step(async () => {
							player.unmarkSkill("jianying_mark");
							delete player.storage.jianying_mark;
						});
					}
				}
			},
			onremove(player) {
				player.unmarkSkill("jianying_mark");
				delete player.storage.jianying_mark;
			},
			subSkill: {
				draw: { inherit: "jianying", audio: "xinjianying" },
			},
		},
		xinshibei: {
			trigger: { player: "damageEnd" },
			forced: true,
			audio: "shibei_xin_jushou",
			check(event, player) {
				return player.getHistory("damage").indexOf(event) == 0;
			},
			content() {
				if (player.getHistory("damage").indexOf(trigger) > 0) {
					player.loseHp();
				} else {
					player.recover();
				}
			},
			subSkill: {
				damaged: {},
				ai: {},
			},
			ai: {
				maixie_defend: true,
				threaten: 0.9,
				effect: {
					target(card, player, target) {
						if (player.hasSkillTag("jueqing", false, target)) return;
						if (target.hujia) return;
						if (player._xinshibei_tmp) return;
						if (target.hasSkill("xinshibei_ai")) return;
						if (_status.event.getParent("useCard", true) || _status.event.getParent("_wuxie", true)) return;
						if (get.tag(card, "damage")) {
							if (target.getHistory("damage").length > 0) {
								return [1, -2];
							} else {
								if (get.attitude(player, target) > 0 && target.hp > 1) {
									return 0;
								}
								if (get.attitude(player, target) < 0 && !player.hasSkillTag("damageBonus")) {
									if (card.name == "sha") return;
									var sha = false;
									player._xinshibei_tmp = true;
									var num = player.countCards("h", function (card) {
										if (card.name == "sha") {
											if (sha) {
												return false;
											} else {
												sha = true;
											}
										}
										return get.tag(card, "damage") && player.canUse(card, target) && get.effect(target, card, player, player) > 0;
									});
									delete player._xinshibei_tmp;
									if (player.hasSkillTag("damage")) {
										num++;
									}
									if (num < 2) {
										var enemies = player.getEnemies();
										if (enemies.length == 1 && enemies[0] == target && player.needsToDiscard()) {
											return;
										}
										return 0;
									}
								}
							}
						}
					},
				},
			},
		},
		//手杀界朱治
		old_sbanguo: {
			audio: "sbanguo",
			trigger: { global: "phaseBefore", player: "enterGame" },
			group: ["old_sbanguo_move", "old_sbanguo_damage", "old_sbanguo_dying"],
			logAudio: () => 2,
			filter(event, player) {
				return game.hasPlayer(current => current != player) && (event.name != "phase" || game.phaseNumber == 0);
			},
			async cost(event, trigger, player) {
				event.result = await player.chooseTarget("安国：令一名其他角色获得“安国”标记", lib.filter.notMe, true).forResult();
			},
			async content(event, trigger, player) {
				const target = event.targets[0];
				target.addMark("old_sbanguo_mark", 1, false);
				target.addAdditionalSkill("old_sbanguo_" + player.playerid, "old_sbanguo_mark");
				target.addMark("old_sbanguo_marked", 1, false);
			},
			subSkill: {
				mark: {
					onremove: true,
					marktext: "安",
					charlotte: true,
					intro: {
						name: "安国",
						name2: "安国",
						content: "已拥有“安国”标记",
					},
					mod: {
						maxHandcardBase(player, num) {
							return player.maxHp;
						},
					},
				},
				move: {
					audio: ["sbanguo1.mp3", "sbanguo2.mp3"],
					trigger: { player: "phaseUseBegin" },
					filter(event, player) {
						return game.hasPlayer(current => current.hasSkill("old_sbanguo_mark")) && game.hasPlayer(current => !current.hasMark("old_sbanguo_marked") && current != player);
					},
					async cost(event, trigger, player) {
						const targets = game.filterPlayer(current => current.hasSkill("old_sbanguo_mark"));
						const prompt2 = targets.length == 1 ? "将" + get.translation(targets[0]) + "的“安国”交给一名未获得过“安国”的其他角色" : "选择一名有“安国”的角色，将该标记交给一名未获得过“安国”的其他角色";
						event.result = await player
							.chooseTarget(get.prompt("old_sbanguo"), prompt2, targets.length == 1 ? 1 : 2, (card, player, target) => {
								if (ui.selected.targets.length == 0 && _status.event.targets.length > 1) {
									return target.hasSkill("old_sbanguo_mark");
								}
								return !target.hasMark("old_sbanguo_marked") && target != player;
							})
							.set("ai", target => {
								var player = _status.event.player;
								if (ui.selected.targets.length == 0 && _status.event.targets.length > 1) {
									return -get.attitude(player, target);
								}
								return get.attitude(player, _status.event.targets[0]) < get.attitude(player, target);
							})
							.set("targets", targets)
							.set("line", false)
							.forResult();
					},
					async content(event, trigger, player) {
						const { targets } = event;
						let target1, target2;
						if (targets.length == 1) {
							target1 = game.filterPlayer(current => current.hasSkill("old_sbanguo_mark"))[0];
							target2 = targets[0];
						} else {
							target1 = targets[0];
							target2 = targets[1];
						}
						player.line2([target1, target2], "green");
						const map = target1.additionalSkills;
						for (const key in map) {
							if (key.indexOf("old_sbanguo_") != 0) {
								continue;
							}
							const id = parseInt(key.slice(8));
							target1.removeAdditionalSkill("old_sbanguo_" + id);
							target2.addMark("old_sbanguo_mark", 1, false);
							target2.addAdditionalSkill("old_sbanguo_" + id, "old_sbanguo_mark");
							target2.addMark("old_sbanguo_marked", 1, false);
						}
					},
				},
				damage: {
					audio: ["sbanguo1.mp3", "sbanguo2.mp3"],
					forced: true,
					locked: false,
					trigger: { player: "damageBegin4" },
					filter(event, player) {
						if (!game.hasPlayer(current => current.hasSkill("old_sbanguo_mark"))) {
							return false;
						}
						if (event.source && event.source.isIn() && event.source.hasSkill("old_sbanguo_mark")) {
							return false;
						}
						return event.num >= player.hp;
					},
					async content(event, trigger, player) {
						trigger.cancel();
					},
					ai: {
						nofire: true,
						nothunder: true,
						nodamage: true,
						effect: {
							target(card, player, target, current) {
								if (!game.hasPlayer(current => current.hasSkill("old_sbanguo_mark"))) {
									return;
								}
								if (player.hasSkill("old_sbanguo_mark")) {
									return;
								}
								if (get.tag(card, "damage")) {
									if (target.hp <= 1) {
										return [0, 0];
									}
									return 0.5;
								}
							},
						},
					},
				},
				dying: {
					audio: "sbanguo3.mp3",
					forced: true,
					locked: false,
					trigger: { global: "dying" },
					filter(event, player) {
						var skills = event.player.additionalSkills["old_sbanguo_" + player.playerid];
						return skills && skills.length;
					},
					logTarget: "player",
					async content(event, trigger, player) {
						const target = trigger.player;
						target.removeAdditionalSkill("old_sbanguo_" + player.playerid);
						await target.recoverTo(1);
						const hp = player.hp - 1,
							maxhp = player.maxHp - 1;
						let result;
						if (hp > 0 && maxhp > 0) {
							result = await player
								.chooseControl()
								.set("prompt", "安国：请选择一项")
								.set("choiceList", ["失去" + hp + "点体力，令" + get.translation(target) + "获得"+ hp +"点护甲", "减" + maxhp + "点体力上限，令" + get.translation(target) + "获得"+ maxhp +"点护甲"])
								.set("ai", () => "选项一")
								.forResult();
						} else if (hp > 0) {
							result = { control: "选项一" };
						} else if (maxhp > 0) {
							result = { control: "选项二" };
						} else {
							return;
						}
						if (result?.control == "选项一") {
							var num = player.hp - 1;
							if (num > 0) {
								await player.loseHp(num);
								trigger.player.changeHujia(num);
							}
						} else if (result?.control == "选项二") {
							var num = player.maxHp - 1;
							if (num > 0) {
								await player.loseMaxHp(num);
								trigger.player.changeHujia(num);
							}
						}
					},
				},
			},
		},
		//SP甄宓
		old_mbbojian: {
			audio: "mbbojian",
			init(player) {
				player.addSkill("old_mbbojian_record");
			},
			trigger: {
				player: "phaseUseEnd",
			},
			filter(event, player) {
				const record = _status.old_mbbojian;
				if (!record || !record[player.playerid]) return false;
				const history = player.getHistory("useCard", evt => evt.getParent("phaseUse", true));
				const num1 = history.length,
					num2 = history.map(evt => get.suit(evt.card)).toUniqued().length,
					cards = history.reduce((list, evt) => list.addArray(evt.cards.filterInD("d")), []);
				return (num1 != record[player.playerid][0] && num2 != record[player.playerid][1]) || cards.length;
			},
			forced: true,
			async content(event, trigger, player) {
				const record = _status.old_mbbojian;
				const history = player.getHistory("useCard", evt => evt.getParent("phaseUse", true));
				const num1 = history.length,
					num2 = history.map(evt => get.suit(evt.card)).toUniqued().length,
					cards = history.reduce((list, evt) => list.addArray(evt.cards.filterInD("d")), []);
				if (num1 != record[player.playerid][0] && num2 != record[player.playerid][1]) await player.draw(2);
				else {
					const { links } =
						cards.length == 1
							? cards
							: await player
									.chooseButton(["博鉴：请选择要分配的牌", cards], true)
									.set("ai", button => {
										return get.value(button.link);
									})
									.forResult();
					const togive = links[0];
					const result = await player
						.chooseTarget("选择获得" + get.translation(togive) + "的角色", true)
						.set("ai", target => {
							const player = get.player();
							return get.attitude(player, target);
						})
						.forResult();
					if (result.bool) {
						await result.targets[0].gain(togive, "gain2");
					}
				}
			},
			subSkill: {
				record: {
					trigger: {
						player: "phaseUseAfter",
					},
					firstDo: true,
					charlotte: true,
					forced: true,
					popup: false,
					async content(event, trigger, player) {
						const history = player.getHistory("useCard", evt => evt.getParent("phaseUse", true));
						const num1 = history.length,
							num2 = history.map(evt => get.suit(evt.card)).toUniqued().length;
						if (!_status.old_mbbojian) _status.old_mbbojian = {};
						_status.old_mbbojian[player.playerid] = [num1, num2];
						player.markSkill(event.name);
					},
					intro: {
						markcount: () => 0,
						content(storage, player) {
							const record = _status.old_mbbojian;
							if (!record || !record[player.playerid]) return "无信息";
							return "上个出牌阶段使用牌情况：①牌数：" + record[player.playerid][0] + "；②花色数：" + record[player.playerid][1];
						},
					},
				},
			},
		},
		old_mbjiwei: {
			audio: "mbjiwei",
			getNum(event, player) {
				let num = 0;
				if (game.countPlayer2(current => current.hasHistory("lose")) >= 1) num++;
				if (game.countPlayer2(current => current.hasHistory("damage")) >= 1) num++;
				if (event.name == "phase") return num;
				return Math.max(game.countPlayer(), player.getHp());
			},
			trigger: {
				player: "phaseZhunbeiBegin",
				global: "phaseEnd",
			},
			filter(event, player) {
				const num = get.info("old_mbjiwei").getNum(event, player);
				if (event.name == "phaseZhunbei") return player.countCards("h") >= num && game.hasPlayer(current => current != player);
				return event.player != player && num > 0;
			},
			logAudio(event, player) {
				if (event.name == "phaseZhunbei") return ["mbjiwei3.mp3", "mbjiwei4.mp3"];
				return ["mbjiwei1.mp3", "mbjiwei2.mp3"];
			},
			forced: true,
			async content(event, trigger, player) {
				const num = get.info(event.name).getNum(trigger, player);
				if (trigger.name == "phase") await player.draw(num);
				else {
					const cards = player.getCards("h"),
						map = {};
					for (let color of ["red", "black", "none"]) {
						if (typeof map[color] != "number") map[color] = 0;
						map[color] += cards.filter(card => get.color(card) == color).length;
					}
					const list = [];
					for (var i in map) {
						if (map[i] > 0) list.push([`${i}2`, map[i]]);
					}
					list.sort((a, b) => b[1] - a[1]);
					let colors = list.filter(i => i[1] == list[0][1]).map(i => i[0]);
					const control = colors.length == 1 ? colors[0] : await player.chooseControl(colors).set("prompt", "济危：请选择一个颜色").forResult();
					let togive = player.getCards("h").filter(card => get.color(card) == control.slice(0, -1));
					if (_status.connectMode) game.broadcastAll(() => (_status.noclearcountdown = true));
					let given_map = [];
					while (togive.length && game.hasPlayer(current => current != player) && player.hasCard(card => !card.hasGaintag("olsujian_given"), "h")) {
						const result = await player
							.chooseCardTarget({
								forced: true,
								filterCard(card, player) {
									return get.event().togive.includes(card) && !card.hasGaintag("olsujian_given");
								},
								selectCard: [1, Infinity],
								position: "h",
								filterTarget: lib.filter.notMe,
								prompt: "济危：请选择要分配的卡牌和目标",
								ai1(card) {
									return !ui.selected.cards.length && card.name == "du" ? 1 : 0;
								},
								ai2(target) {
									const player = get.event().player;
									const card = ui.selected.cards[0];
									if (card) return get.value(card, target) * get.attitude(player, target);
									return 0;
								},
								togive: togive,
								allowChooseAll: true,
							})
							.forResult();
						if (result?.cards?.length && result.targets?.length) {
							const {
								cards,
								targets: [target],
							} = result;
							togive.removeArray(cards);
							if (given_map.some(i => i[0] == target)) {
								given_map[given_map.indexOf(given_map.find(i => i[0] == target))][1].addArray(cards);
							} else given_map.push([target, cards]);
							player.addGaintag(cards, "olsujian_given");
						} else break;
					}
					if (_status.connectMode) {
						game.broadcastAll(() => {
							delete _status.noclearcountdown;
							game.stopCountChoose();
						});
					}
					if (given_map.length) {
						await game
							.loseAsync({
								gain_list: given_map,
								player: player,
								cards: given_map.slice().map(list => list[1]),
								giver: player,
								animate: "giveAuto",
							})
							.setContent("gaincardMultiple");
					}
				}
			},
		},
		//傅佥
		old_jueyong: {
			audio: "jueyong",
			trigger: { target: "useCardToTarget" },
			forced: true,
			filter(event, player) {
				return event.card.name != "jiu" && event.card.name != "tao" && event.targets.length == 1 && event.card.isCard && event.cards.length == 1 && event.getParent(2).name != "old_jueyong_timeout" && get.position(event.cards[0], true) == "o" && event.card.name == event.cards[0].name && (!player.storage.old_jueyong || player.storage.old_jueyong[0].length < player.getHp());
			},
			content() {
				trigger.targets.remove(player);
				trigger.getParent().triggeredTargets2.remove(player);
				trigger.untrigger();
				var card = trigger.cards[0];
				player.addToExpansion(card, "gain2").gaintag.add("old_jueyong");
				if (!player.storage.old_jueyong) player.storage.old_jueyong = [[], []];
				player.storage.old_jueyong[0].push(card);
				player.storage.old_jueyong[1].push(trigger.player);
				game.delayx();
			},
			onremove(player, skill) {
				var cards = player.getExpansions(skill);
				if (cards.length) player.loseToDiscardpile(cards);
				delete player.storage[skill];
			},
			intro: {
				markcount(storage) {
					if (!storage) return 0;
					return storage[0].length;
				},
				mark(dialog, storage, player) {
					if (!storage) return;
					dialog.addAuto(storage[0]);
					dialog.addText(get.translation(storage[1]));
				},
				onunmark(storage, player) {
					player.storage.old_jueyong = [[], []];
				},
			},
			ai: {
				reverseEquip: true,
				effect: {
					target_use(card, player, target, current) {
						if (get.type(card) == "equip" && !get.tag(card, "gifts") && target.storage.old_jueyong && target.storage.old_jueyong[1].length) {
							var result1 = get.equipResult(player, target, card),
								subtype = get.subtype(card);
							for (var i of target.storage.old_jueyong[0]) {
								if (get.subtype(i, false) == subtype && get.equipResult(target, target, i) >= result1) return "zerotarget";
							}
						}
					},
				},
			},
			group: "old_jueyong_timeout",
			subSkill: {
				timeout: {
					audio: "jueyong",
					trigger: { player: "phaseJieshuBegin" },
					forced: true,
					filter(event, player) {
						return player.storage.old_jueyong && player.storage.old_jueyong[0].length > 0; //=Math.max(1,player.getDamagedHp());
					},
					content() {
						var list = player.storage.old_jueyong,
							card = list[0].shift(),
							source = list[1].shift();
						if (player.getExpansions("old_jueyong").includes(card)) {
							if (source && source.isIn() && source.canUse(card, player, false)) source.useCard(card, player, false);
							else player.loseToDiscardpile(card);
						}
						if (list[0].length) event.redo();
					},
				},
			},
		},
		old_poxiang: {
			audio: "poxiang",
			enable: "phaseUse",
			usable: 1,
			filter: (event, player) => player.countCards("he") > 0,
			filterCard: true,
			filterTarget: lib.filter.notMe,
			position: "he",
			discard: false,
			lose: false,
			delay: false,
			check(card) {
				var player = _status.event.player;
				if (
					!player.storage.old_jueyong ||
					!player.storage.old_jueyong[0].length ||
					(player.hp <= 1 &&
						!player.storage.old_jueyong[0].some(function (card) {
							return get.tag(card, "damage") > 0;
						})) ||
					!player.storage.old_jueyong[0].some(function (card) {
						return get.effect(player, card, player.storage.old_jueyong[1][player.storage.old_jueyong[0].indexOf(card)], player) < 0;
					})
				)
					return -1;
				return 20 - get.value(card);
			},
			content() {
				"step 0";
				player.give(cards, target);
				player.draw(3);
				("step 1");
				var cards = player.getExpansions("old_jueyong");
				if (cards.length) player.loseToDiscardpile(cards);
				player.unmarkSkill("old_jueyong");
				player.loseHp();
				("step 2");
				player.skip("phaseDiscard");
				game.delayx();
			},
			ai: {
				order: 12,
				result: {
					player: 4,
					target: 1,
				},
			},
		},
		//手杀郭照
		old_yichong: {
			initSkill(skill) {
				if (!lib.skill[skill]) {
					lib.skill[skill] = {
						charlotte: true,
						onremove: true,
						mark: true,
						marktext: "雀",
						intro: {
							markcount(storage) {
								return (storage || 0).toString();
							},
							content(storage) {
								return "已被掠夺" + (storage || 0) + "张牌";
							},
						},
					};
					lib.translate[skill] = "易宠";
					lib.translate[skill + "_bg"] = "雀";
				}
			},
			getLimit: 5,
			audio: "yichong",
			trigger: { player: "phaseZhunbeiBegin" },
			filter(event, player) {
				return game.hasPlayer(current => current != player);
			},
			async cost(event, trigger, player) {
				event.result = await player
					.chooseTarget(get.prompt("old_yichong"), "选择一名其他角色并选择一个花色，获得其此花色的所有牌并令其获得“雀”标记", lib.filter.notMe)
					.set("ai", target => {
						const player = get.player();
						const att = get.attitude(player, target);
						if (att > 0) {
							return 0;
						}
						const getNum = function (player) {
							const list = [];
							for (const i of lib.suit) {
								list.push(player.countCards("he", { suit: i }) + 3);
							}
							return list.sort((a, b) => b - a)[0];
						};
						return getNum(target) + target.countCards("h") / 10;
					})
					.forResult();
			},
			async content(event, trigger, player) {
				const target = event.targets[0];
				const result = await player
					.chooseControl(lib.suit.slice(0).reverse())
					.set("prompt", "请声明一个花色")
					.set("ai", () => {
						const target = _status.event.target,
							cards = target.getCards("he");
						const suits = lib.suit.slice(0);
						suits.sort(function (a, b) {
							var num = function (suit) {
								return cards.filter(function (card) {
									return get.suit(card) == suit;
								}).length;
							};
							return num(b) - num(a);
						});
						return suits[0];
					})
					.set("target", target)
					.forResult();
				if (!result?.control) {
					return;
				}
				const suit = result.control;
				event.suit = suit;
				player.chat(get.translation(suit + 2));
				game.log(player, "选择了", "#y" + get.translation(suit + 2));
				if (target.countCards("he", { suit: suit })) player.gain(target.getCards("he", { suit: suit }), target, "giveAuto");
				player.storage.old_yichong = suit;
				player.markSkill("old_yichong");
				const skill = `old_yichong_${player.playerid}`;
				game.broadcastAll(lib.skill.old_yichong.initSkill, skill);
				game.broadcastAll(
					function (player, suit) {
						if (player.marks.old_yichong) {
							player.marks.old_yichong.firstChild.innerHTML = get.translation(suit);
						}
					},
					player,
					suit
				);
				game.countPlayer(function (current) {
					current.removeSkill(`old_yichong_${player.playerid}`);
					if (current == target) {
						target.addSkill(`old_yichong_${player.playerid}`);
					}
				});
				player.addTempSkill("old_yichong_clear", { player: "phaseBegin" });
			},
			onremove: true,
			intro: { content: "拥有“雀”标记的角色得到$牌后，你获得之" },
			group: "old_yichong_gain",
			subSkill: {
				gain: {
					audio: "yichong",
					trigger: { global: ["gainAfter", "loseAsyncAfter"] },
					filter(event, player) {
						if (!player.storage.old_yichong) {
							return false;
						}
						return game.hasPlayer(function (current) {
							if (!event.getg(current).length || !current.hasSkill(`old_yichong_${player.playerid}`)) {
								return false;
							}
							if (current.countMark(`old_yichong_${player.playerid}`) >= lib.skill.old_yichong.getLimit) {
								return false;
							}
							return event.getg(current).some(card => get.suit(card, current) == player.storage.old_yichong && lib.filter.canBeGained(card, current, player));
						});
					},
					forced: true,
					async content(event, trigger, player) {
						const target = game.findPlayer(function (current) {
							if (!trigger.getg(current).length || !current.hasSkill(`old_yichong_${player.playerid}`)) {
								return false;
							}
							if (current.countMark(`old_yichong_${player.playerid}`) >= lib.skill.old_yichong.getLimit) {
								return false;
							}
							return trigger.getg(current).some(card => get.suit(card, current) == player.storage.old_yichong && lib.filter.canBeGained(card, current, player));
						});
						let cards = trigger.getg(target).filter(card => get.suit(card, target) == player.storage.old_yichong && lib.filter.canBeGained(card, target, player));
						const num = lib.skill.old_yichong.getLimit - target.countMark(`old_yichong_${player.playerid}`);
						cards = cards.randomGets(num);
						if (cards.length) {
							await player.gain(cards, target, "giveAuto");
							target.addMark(`old_yichong_${player.playerid}`, cards.length, false);
						}
					},
				},
				clear: {
					charlotte: true,
					onremove(player) {
						game.countPlayer(function (current) {
							current.removeSkill(`old_yichong_${player.playerid}`);
						});
					},
				},
			},
		},
		old_wufei: {
			audio: "wufei",
			trigger: { source: "damageBefore" },
			filter(event, player, name) {
				const target = game.findPlayer(current => current.hasSkill(`old_yichong_${player.playerid}`));
				if (!target) {
					return false;
				}
				return event.card && (event.card.name == "sha" || (get.type(event.card) == "trick" && get.is.damageCard(event.card)));
			},
			forced: true,
			locked: false,
			logTarget(event, player) {
				return game.findPlayer(current => current.hasSkill(`old_yichong_${player.playerid}`));
			},
			async content(event, trigger, player) {
				const target = event.targets[0];
				trigger.source = target;
				game.log(target, "成为了", trigger.card, "的伤害来源");
			},
			ai: { combo: "old_yichong" },
			group: "old_wufei_damage",
			subSkill: {
				damage: {
					audio: "wufei",
					trigger: { player: "damageEnd" },
					filter(event, player, name) {
						const target = game.findPlayer(current => current.hasSkill(`old_yichong_${player.playerid}`));
						if (!target) {
							return false;
						}
						const num = target.getHp();
						return num > 1 && num > player.getHp();
					},
					async cost(event, trigger, player) {
						const target = game.findPlayer(current => current.hasSkill(`old_yichong_${player.playerid}`));
						event.result = await player
							.chooseBool(get.prompt(event.skill, target), `令${get.translation(target)}受到1点无来源伤害`)
							.set("choice", get.damageEffect(target, player, player) > 0)
							.forResult();
					},
					logTarget(event, player) {
						return game.findPlayer(current => current.hasSkill(`old_yichong_${player.playerid}`));
					},
					async content(event, trigger, player) {
						const target = event.targets[0];
						await target.damage("nosource");
					},
				},
			},
		},
		//手杀陈珪
		old_guimou: {
			audio: "guimou",
			trigger: {
				global: "phaseBefore",
				player: ["enterGame", "phaseEnd", "phaseZhunbeiBegin"],
			},
			filter(event, player, name) {
				if (event.name == "phaseZhunbei" || name == "phaseEnd") return true;
				return event.name != "phase" || game.phaseNumber == 0;
			},
			direct: true,
			locked: true,
			async content(event, trigger, player) {
				if (trigger.name != "phaseZhunbei") {
					player.logSkill("old_guimou");
					var result,
						choiceList = ["惩罚期间使用牌最少的角色", "惩罚期间弃置牌最少的角色", "惩罚期间得到牌最少的角色"];
					if (trigger.name != "phase" || game.phaseNumber == 0) result = { index: get.rand(0, 2) };
					else
						result = await player
							.chooseControl()
							.set("choiceList", choiceList)
							.set("ai", () => get.rand(0, 2))
							.forResult();
					var str = choiceList[result.index];
					game.log(player, "选择", "#g" + str);
					player.addSkill("old_guimou_" + result.index);
					return;
				}
				var targets = [];
				for (var i = 0; i <= 2; i++) {
					var skill = "old_guimou_" + i;
					if (player.hasSkill(skill)) {
						var storage = player.storage[skill],
							nums = storage[0].slice();
						var targetx = nums.sort((a, b) => storage[1][storage[0].indexOf(a)] - storage[1][storage[0].indexOf(b)]);
						targetx = targetx.filter(target => storage[1][storage[0].indexOf(target)] == storage[1][storage[0].indexOf(targetx[0])]);
						targets.addArray(targetx);
						player.removeSkill(skill);
					}
				}
				targets = targets.filter(target => target != player && target.countCards("h"));
				if (targets.length) {
					var result = await player
						.chooseTarget(
							"请选择【诡谋】的目标",
							"观看一名可选择的角色的手牌并选择其中至多三张牌，然后你可以将其中至多两张牌交给另一名其他角色，然后弃置剩余的牌",
							(card, player, target) => {
								return _status.event.targets.includes(target) && target.countCards("h");
							},
							true
						)
						.set("ai", target => {
							return Math.sqrt(Math.min(3, target.countCards("h"))) * get.effect(target, { name: "guohe_copy2" }, player, player);
						})
						.set("targets", targets)
						.forResult();
					if (result.bool) {
						var target = result.targets[0];
						player.logSkill("old_guimou", target);
						player.addExpose(0.3);
						var result2 = await player
							.choosePlayerCard(target, "h", "visible", "<div class='text center'>选择其中至多三张牌，然后你可以将其中至多两张牌交给另一名其他角色，然后弃置剩余的牌</div>", [1, 3], true)
							.set("ai", button => get.value(button.link))
							.forResult();
						if (result2.bool) {
							var cards = result2.links.slice();
							var result3;
							if (!game.hasPlayer(targetx => targetx != player && targetx != target)) result3 = { bool: false };
							else
								result3 = await player
									.chooseCardButton("是否将其中至多两张牌交给另一名其他角色", cards, [1, Math.min(2, cards.length)])
									.set("ai", button => {
										var player = _status.event.player;
										if (!game.hasPlayer(target => target != player && target != _status.event.target && get.attitude(player, target) > 0)) return 0;
										return get.value(button.link, _status.event.player);
									})
									.set("target", target)
									.forResult();
							if (result3.bool) {
								var result4 = await player
									.chooseTarget("请选择获得" + get.translation(result3.links) + "的目标", (card, player, target) => {
										return target != player && target != _status.event.target;
									})
									.set("ai", target => get.attitude(_status.event.player, target))
									.set("target", target)
									.forResult();
								if (result4.bool) {
									var targetx = result4.targets[0];
									player.line(targetx);
									targetx.gain(result3.links, target, "give");
									cards.removeArray(result3.links);
								}
							}
							if (cards.length) target.discard(cards).discarder = player;
						}
					}
				}
			},
			subSkill: {
				0: {
					charlotte: true,
					onremove: true,
					init(player, skill) {
						if (!player.storage[skill]) {
							player.storage[skill] = [[], []];
							var targets = game.filterPlayer(i => i !== player).sortBySeat(player);
							targets.forEach(target => {
								player.storage[skill][0].push(target);
								player.storage[skill][1].push(0);
							});
						}
					},
					mark: true,
					intro: {
						markcount: storage => 0,
						content(storage, player) {
							var str = "当前使用牌数排行榜";
							var lose = storage[1].slice().sort((a, b) => a - b)[0];
							storage[0].forEach(target => {
								str += "<br><li>";
								var score = storage[1][storage[0].indexOf(target)];
								if (score == lose) str += '<span class="texiaotext" style="color:#FF0000">';
								str += " " + get.translation(target) + " ";
								str += score + "张";
								if (score == lose) str += "</span>";
							});
							return str;
						},
					},
					trigger: { global: "useCard1" },
					forced: true,
					popup: false,
					content() {
						var storage = player.storage["old_guimou_0"];
						if (!storage[0].includes(trigger.player)) {
							storage[0].push(trigger.player);
							storage[1].push(0);
						}
						storage[1][storage[0].indexOf(trigger.player)]++;
					},
				},
				1: {
					charlotte: true,
					onremove: true,
					init(player, skill) {
						if (!player.storage[skill]) {
							player.storage[skill] = [[], []];
							var targets = game.filterPlayer(i => i !== player).sortBySeat(player);
							targets.forEach(target => {
								player.storage[skill][0].push(target);
								player.storage[skill][1].push(0);
							});
						}
					},
					mark: true,
					intro: {
						markcount: storage => 0,
						content(storage, player) {
							var str = "当前弃置牌数排行榜";
							var lose = storage[1].slice().sort((a, b) => a - b)[0];
							storage[0].forEach(target => {
								str += "<br><li>";
								var score = storage[1][storage[0].indexOf(target)];
								if (score == lose) str += '<span class="texiaotext" style="color:#FF0000">';
								str += " " + get.translation(target) + " ";
								str += score + "张";
								if (score == lose) str += "</span>";
							});
							return str;
						},
					},
					trigger: { global: ["loseAfter", "loseAsyncAfter"] },
					filter(event, player) {
						return event.type == "discard" && game.hasPlayer(target => event.getl(target).cards2.length);
					},
					forced: true,
					popup: false,
					content() {
						var storage = player.storage["old_guimou_1"];
						var targets = game.filterPlayer(target => trigger.getl(target).cards2.length);
						targets.forEach(target => {
							if (!storage[0].includes(target)) {
								storage[0].push(target);
								storage[1].push(0);
							}
							storage[1][storage[0].indexOf(target)] += trigger.getl(target).cards2.length;
						});
					},
				},
				2: {
					charlotte: true,
					onremove: true,
					init(player, skill) {
						if (!player.storage[skill]) {
							player.storage[skill] = [[], []];
							var targets = game.filterPlayer(i => i !== player).sortBySeat(player);
							targets.forEach(target => {
								player.storage[skill][0].push(target);
								player.storage[skill][1].push(0);
							});
						}
					},
					mark: true,
					intro: {
						markcount: storage => 0,
						content(storage, player) {
							var str = "当前得到牌数排行榜";
							var lose = storage[1].slice().sort((a, b) => a - b)[0];
							storage[0].forEach(target => {
								str += "<br><li>";
								var score = storage[1][storage[0].indexOf(target)];
								if (score == lose) str += '<span class="texiaotext" style="color:#FF0000">';
								str += " " + get.translation(target) + " ";
								str += score + "张";
								if (score == lose) str += "</span>";
							});
							return str;
						},
					},
					trigger: { global: ["gainAfter", "loseAsyncAfter"] },
					forced: true,
					popup: false,
					content() {
						var storage = player.storage["old_guimou_2"];
						var targets = game.filterPlayer(target => trigger.getg(target).length);
						targets.forEach(target => {
							if (!storage[0].includes(target)) {
								storage[0].push(target);
								storage[1].push(0);
							}
							storage[1][storage[0].indexOf(target)] += trigger.getg(target).length;
						});
					},
				},
			},
		},
		//杨阜
		oldx_jiebing: {
			audio: "jiebing",
			trigger: {
				player: "damageEnd",
			},
			direct: true,
			forced: true,
			filter(event, player) {
				return game.hasPlayer(current => {
					return current != event.source && current != player && current.countGainableCards(player, "he");
				});
			},
			content() {
				"step 0";
				player
					.chooseTarget("借兵：选择一名其他角色", get.skillInfoTranslation("oldx_jiebing"), true, (card, player, target) => {
						return player != target && target != _status.event.getTrigger().source && target.countGainableCards(player, "he");
					})
					.set("ai", target => get.effect(target, { name: "shunshou_copy2" }, player, player) /** (target.countCards("he")>1?1.5:1)*/);
				("step 1");
				if (result.bool) {
					var target = result.targets[0];
					player.logSkill("oldx_jiebing", target);
					if (target.ai.shown > 0) player.addExpose(0.15);
					var cards = target.getGainableCards(player, "he").randomGets(2);
					event.cards = cards;
					player.gain(target, cards, "give", "bySelf");
					player.showCards(cards, "借兵");
				} else event.finish();
				("step 2");
				for (var card of cards) {
					if (get.type(card) == "equip" && player.hasUseTarget(card) && get.owner(card) == player) {
						player.chooseUseTarget(card, true);
					}
				}
			},
			ai: {
				maixie: true,
				maixie_hp: true,
				effect: {
					target(card, player, target) {
						if (get.tag(card, "damage")) {
							if (player.hasSkillTag("jueqing", false, target)) return [1, -2];
							if (player != target && !player.getFriends().length) return;
							if (
								game.hasPlayer(current => {
									return current != player && get.attitude(player, current) > 0 && current.countGainableCards(target, "he") > 0;
								})
							)
								return [1, 1];
						}
					},
				},
			},
		},
		old_hannan: {
			audio: "hannan",
			enable: "phaseUse",
			usable: 1,
			filter(event, player) {
				return !player.hasSkillTag("noCompareSource");
			},
			filterTarget(card, player, target) {
				return player.canCompare(target);
			},
			content() {
				"step 0";
				player.chooseToCompare(target);
				("step 1");
				if (!result.tie) {
					var players = [player, target];
					if (result.bool) players.reverse();
					players[1].line(players[0], "thunder");
					players[0].damage(players[1], 2);
				}
			},
			ai: {
				order: 7,
				result: {
					target(player, target) {
						var hs = player.getCards("h").sort(function (a, b) {
							return get.number(b) - get.number(a);
						});
						var ts = target.getCards("h").sort(function (a, b) {
							return get.number(b) - get.number(a);
						});
						if (!hs.length || !ts.length) return 0;
						if (get.number(hs[0]) > get.number(ts[0]) || get.number(hs[0]) - ts.length >= 9 + Math.min(2, player.hp / 2)) return get.sgnAttitude(player, target) * get.damageEffect(target, player, player);
						return 0;
					},
				},
			},
		},
		//手杀王双
		old_shanxie: {
			audio: "shanxie",
			enable: "phaseUse",
			usable: 1,
			filterTarget(card, player, target) {
				return target != player && target.getEquip(1);
			},
			selectTarget: [0, 1],
			content() {
				"step 0";
				if (!target) {
					var card = get.cardPile2(function (card) {
						return get.subtype(card) == "equip1";
					});
					if (card) player.gain(card, "gain2");
					event.finish();
				} else {
					var card = target.getEquip(1);
					if (card) {
						event.card = card;
						player.gain(card, target, "give");
					} else event.finish();
				}
				("step 1");
				if (player.getCards("h").includes(card) && get.type(card, null, player) == "equip" && player.hasUseTarget(card)) player.chooseUseTarget(card, true, "nopopup");
				("step 2");
				var hs = target.getCards("h", function (card) {
					return target.canUse(get.autoViewAs({ name: "sha" }, [card]), player, false);
				});
				if (hs.length) {
					if (hs.length == 1) event._result = { bool: true, cards: hs };
					else
						target
							.chooseCard("h", true, "将一张牌当做【杀】对" + get.translation(player) + "使用", function (card) {
								return _status.event.cards.includes(card);
							})
							.set("cards", hs)
							.set("ai", function (card) {
								return get.effect(_status.event.getParent().player, get.autoViewAs({ name: "sha" }, [card]), _status.event.player);
							});
				} else event.finish();
				("step 3");
				if (result.bool) target.useCard({ name: "sha" }, result.cards, player, false);
			},
			ai: {
				order: 9,
				result: { player: 1 },
			},
			group: ["old_shanxie_exclude", "old_shanxie_shan"],
			subSkill: {
				exclude: {
					trigger: { global: "useCard" },
					forced: true,
					locked: false,
					filter(event, player) {
						if (event.card.name != "shan" || event.getParent(2).player != player) return false;
						var num = get.number(event.card);
						return !num || num <= player.getAttackRange() * 2;
					},
					logTarget: "player",
					content() {
						trigger.all_excluded = true;
					},
					sub: true,
				},
				shan: {
					trigger: { player: "useCardToPlayered" },
					filter(event, player) {
						return event.target.isAlive() && event.card.name == "sha";
					},
					silent: true,
					content() {
						trigger.target.addTempSkill("old_shanxie_banned");
						trigger.target.storage.old_shanxie_banned = {
							card: trigger.card,
							num: player.getAttackRange() * 2,
						};
					},
					sub: true,
				},
				banned: {
					init(player) {
						player.storage.old_shanxie_banned = {};
					},
					onremove(player) {
						delete player.storage.old_shanxie_banned;
					},
					trigger: { global: "useCardEnd" },
					filter(event, player) {
						return event.card == player.storage.old_shanxie_banned.card;
					},
					silent: true,
					content() {
						player.removeSkill("old_shanxie_banned");
					},
					ai: {
						effect: {
							player(card, player, target) {
								if (get.name(card) == "shan") {
									let num = get.number(card);
									if (!num || num <= player.storage.old_shanxie_banned.num) return "zeroplayertarget";
								}
							},
						},
					},
				},
			},
		},
		//手杀吴景
		old_liubing: {
			trigger: { player: "useCard1" },
			forced: true,
			filter(event, player) {
				return (
					event.card.name == "sha" &&
					event.cards.length == 1 &&
					player
						.getHistory("useCard", function (evt) {
							return evt.card.name == "sha" && evt.cards.length == 1;
						})
						.indexOf(event) == 0
				);
			},
			content() {
				game.log(player, "将", trigger.card, "的花色改为", "#y♦");
				trigger.card.suit = "diamond";
				trigger.card.color = "red";
			},
			group: "old_liubing_gain",
			subSkill: {
				gain: {
					trigger: { global: "useCardAfter" },
					forced: true,
					audio: "liubing",
					filter(event, player) {
						return (
							event.player != player &&
							event.card.isCard &&
							event.card.name == "sha" &&
							get.color(event.card) == "black" &&
							event.cards.filterInD().length > 0 &&
							event.player.isPhaseUsing() &&
							!event.player.hasHistory("sourceDamage", function (evt) {
								return evt.card == event.card;
							})
						);
					},
					logTarget: "player",
					content() {
						player.gain(trigger.cards.filterInD(), "gain2");
					},
				},
			},
		},
		//SP辛毗
		old_spyinju: {
			audio: "spyinju",
			enable: "phaseUse",
			usable: 1,
			filterTarget: lib.filter.notMe,
			content() {
				"step 0";
				target
					.chooseToUse(
						function (card, player, event) {
							if (get.name(card) != "sha") {
								return false;
							}
							return lib.filter.filterCard.apply(this, arguments);
						},
						"引裾：对" + get.translation(player) + "使用一张杀，或跳过下回合的出牌阶段和弃牌阶段"
					)
					.set("targetRequired", true)
					.set("complexSelect", true)
					.set("complexTarget", true)
					.set("filterTarget", function (card, player, target) {
						if (target != _status.event.sourcex && !ui.selected.targets.includes(_status.event.sourcex)) {
							return false;
						}
						return lib.filter.filterTarget.apply(this, arguments);
					})
					.set("sourcex", player);
				("step 1");
				if (!result.bool) {
					target.addSkill("old_spyinju2");
				}
			},
			ai: {
				order: 1,
				expose: 0.2,
				result: {
					target: -1.5,
					player(player, target) {
						if (!target.canUse("sha", player)) {
							return 0;
						}
						if (target.countCards("h") == 0) {
							return 0;
						}
						if (target.countCards("h") == 1) {
							return -0.1;
						}
						if (player.countCards("h", "shan") == 0) {
							return -1;
						}
						if (player.hp < 2) {
							return -2;
						}
						return -0.5;
					},
				},
				threaten: 1.1,
			},
		},
		old_spyinju2: {
			trigger: { player: "phaseZhunbeiBegin" },
			forced: true,
			charlotte: true,
			sourceSkill: "old_spyinju",
			content() {
				player.skip("phaseUse");
				player.skip("phaseDiscard");
				player.removeSkill("old_spyinju2");
				game.log(player, "跳过了出牌阶段");
				game.log(player, "跳过了弃牌阶段");
			},
			mark: true,
			intro: { content: "衣襟被拽住了，下个准备阶段开始时跳过出牌阶段和弃牌阶段" },
		},
		//手杀桥公
		old_yizhu: {
			audio: "yizhu",
			trigger: { player: "phaseJieshuBegin" },
			forced: true,
			locked: false,
			content() {
				"step 0";
				player.draw(2);
				("step 1");
				var hs = player.getCards("he");
				if (!hs.length) event.finish();
				else if (hs.length <= 2) event._result = { bool: true, cards: hs };
				else player.chooseCard("he", true, 2, "选择两张牌洗入牌堆");
				("step 2");
				if (result.bool) {
					player.$throw(result.cards.length, 1000);
					player.lose(result.cards, ui.cardPile).insert_index = function () {
						return ui.cardPile.childNodes[get.rand(0, game.players.length * 2 - 2)];
					};
					player.markAuto("old_yizhu", result.cards);
				} else event.finish();
				("step 3");
				game.updateRoundNumber();
				game.delayx();
			},
			intro: {
				mark(dialog, content, player) {
					if (player == game.me || player.isUnderControl()) dialog.addAuto(content);
					else {
						var names = [];
						for (var i of content) names.add(i.name);
						return get.translation(names);
					}
				},
			},
			group: ["old_yizhu_use", "old_yizhu_discard"],
			subSkill: {
				use: {
					audio: "yizhu",
					trigger: { global: "useCardToPlayer" },
					filter(event, player) {
						return (
							player.storage.old_yizhu &&
							player.storage.old_yizhu.length &&
							event.player != player &&
							event.targets.length == 1 &&
							event.cards.filter(function (i) {
								return player.storage.old_yizhu.contains(i);
							}).length > 0
						);
					},
					logTarget: "player",
					check(event, player) {
						return get.effect(event.targets[0], event.card, event.player, player) < 0;
					},
					prompt2(event, player) {
						return "令" + get.translation(event.card) + "无效并可重新使用";
					},
					content() {
						trigger.cancel();
						trigger.targets.length = 0;
						trigger.getParent().triggeredTargets1.length = 0;
						var list = trigger.cards.filter(function (i) {
							return player.storage.old_yizhu.contains(i);
						});
						player.unmarkAuto("old_yizhu", list);
						game.delayx();
						player.chooseUseTarget(trigger.card, trigger.cards, false, "nothrow");
					},
				},
				discard: {
					trigger: {
						global: ["loseAfter", "cardsDiscardAfter"],
					},
					forced: true,
					locked: false,
					filter(event, player) {
						return (
							player.storage.old_yizhu &&
							player.storage.old_yizhu.length &&
							(event.name != "lose" || event.position == ui.discardPile) &&
							event.cards.filter(function (i) {
								return player.storage.old_yizhu.contains(i);
							}).length > 0
						);
					},
					content() {
						var list = trigger.cards.filter(function (i) {
							return player.storage.old_yizhu.contains(i);
						});
						player.unmarkAuto("old_yizhu", list);
						player.draw();
					},
				},
			},
		},
		old_gonghuan: {
			audio: "gonghuan",
			forceaudio: true,
			trigger: { global: "damageBegin4" },
			usable: 1,
			forced: true,
			logTarget: "player",
			filter(event, player) {
				return (
					event.player.hp < player.hp &&
					player.hasMark("luanchou") &&
					event.player.hasMark("luanchou") &&
					game.hasPlayer(function (current) {
						return current.hasSkill("luanchou");
					})
				);
			},
			content() {
				trigger._old_gonghuan_player = trigger.player;
				trigger.player = player;
			},
			ai: {
				effect: {
					target(card, player, target) {
						if (_status.luanchou_judging) return;
						_status.luanchou_judging = true;
						if (get.tag(card, "damage") && target.hasMark("luanchou")) {
							var other = game.findPlayer(function (current) {
								return current != target && current.hasMark("luanchou") && current.hp > target.hp && (!current.storage.counttrigger || !current.storage.counttrigger.old_gonghuan);
							});
							if (!other) {
								delete _status.luanchou_judging;
								return;
							}
							var eff = [0, 0, 0, get.damageEffect(other, player, target, get.nature(card))];
							delete _status.luanchou_judging;
							return eff;
						}
					},
				},
			},
			subSkill: {
				clear: {
					trigger: { player: "damageEnd" },
					forced: true,
					popup: false,
					filter(event, player) {
						return event._old_gonghuan_player && player.hp == event._old_gonghuan_player.hp;
					},
					content() {
						player.removeMark("luanchou", player.countMark("luanchou"));
						trigger._old_gonghuan_player.removeMark("luanchou", trigger._old_gonghuan_player.countMark("luanchou"));
					},
				},
			},
		},
		//手杀周不疑
		old_mbhuiyao: {
			audio: "mbhuiyao",
			enable: "phaseUse",
			usable: 1,
			// filterTarget:lib.filter.notMe,
			content() {
				"step 0";
				player.damage("nosource");
				("step 1");
				if (game.countPlayer() < 2) event.finish();
				if (game.countPlayer() == 2)
					event._result = {
						bool: true,
						targets: [game.findPlayer(i => i != player), player],
					};
				else
					player
						.chooseTarget(
							`慧夭：请选择两名角色`,
							`令不为你的第一名角色视为对第二名角色造成过1点伤害。`,
							(card, player, target) => {
								if (!ui.selected.targets.length) return player != target;
								return true;
							},
							2,
							true
						)
						.set("multitarget", true)
						.set("targetprompt", ["伤害来源", "受伤角色"])
						.set("ai", target => {
							return target == get.event().aiTargets[ui.selected.targets.length] ? 10 : 0;
						})
						.set("aiTargets", lib.skill.old_mbhuiyao.getUnrealDamageTargets(player, [game.filterPlayer(i => i != player), game.filterPlayer()], true));
				("step 2");
				if (result.bool) {
					var targets = result.targets;
					player.line2(targets, "green");
					game.delaye();
					targets[1].damage(targets[0], "unreal");
				}
			},
			getUnrealDamageTargets: (player, lists, forced) => {
				const targets = [null, null];
				let sourceList, targetList;
				if (lists.length == 2 && lists.every(l => Array.isArray(l))) {
					sourceList = lists[0];
					targetList = lists[1];
				} else {
					sourceList = lists.slice();
					targetList = lists.slice();
				}
				const list = targetList
					.map(current => {
						const _hp = current.hp,
							_maxhp = current.maxHp;
						current.hp = 100;
						current.maxHp = 100;
						const att = -get.sgnAttitude(player, current);
						let val = get.damageEffect(current, player, current) * att;
						current.getSkills(null, false, false).forEach(skill => {
							const info = get.info(skill);
							if (info && info.ai && (info.ai.maixie || info.ai.maixie_hp || info.ai.maixie_defend)) val = Math[val > 0 ? "max" : "min"](val > 0 ? 0.1 : -0.1, val + 2 * att);
						});
						const eff = 100 / val + 15;
						current.hp = _hp;
						current.maxHp = _maxhp;
						return [current, eff];
					})
					.sort((a, b) => b[1] - a[1])[0];
				if (list[1] < 0 && !forced) return targets;
				const targetx = list[0];
				targets[1] = targetx;
				const list2 = sourceList
					.filter(i => i != targetx)
					.map(current => {
						const _hp = targetx.hp,
							_maxhp = targetx.maxHp;
						targetx.hp = 100;
						targetx.maxHp = 100;
						const att = -get.sgnAttitude(player, current);
						const eff = get.damageEffect(targetx, current, current) * att;
						targetx.hp = _hp;
						targetx.maxHp = _maxhp;
						return [current, eff];
					})
					.sort((a, b) => b[1] - a[1])[0];
				if (!list2) return targets;
				targets[0] = list2[0];
				return targets;
			},
			ai: {
				order: 6,
				result: {
					player(player) {
						if (player.getHp() + player.countCards("hs", card => player.canSaveCard(card, player)) <= 1) return 0;
						var limit = 25;
						var quesong = player.hasSkill("old_mbquesong") && !player.getStat().damaged;
						if (quesong) {
							limit -= 7.5;
						}
						if (
							quesong &&
							game.hasPlayer(target => {
								var att = get.attitude(player, target);
								if (att < 0) return false;
								return (
									att *
										Math.sqrt(
											Math.max(
												1,
												[1, 2, 3, 4].reduce((p, c) => p + target.countEmptySlot(c), 0)
											)
										) >=
										10 || target.getHp() <= 2
								);
							})
						)
							return 1;
						if (
							!quesong &&
							game.hasPlayer(target => {
								if (target == player) return false;
								var _hp = target.hp,
									_maxhp = target.maxHp;
								target.hp = 100;
								target.maxHp = 100;
								var att = -get.sgnAttitude(player, target);
								var val = get.damageEffect(target, player, target) * att;
								target.getSkills(null, false, false).forEach(skill => {
									var info = get.info(skill);
									if (info && info.ai && (info.ai.maixie || info.ai.maixie_hp || info.ai.maixie_defend)) val = Math[val > 0 ? "max" : "min"](val > 0 ? 0.1 : -0.1, val + 2 * att);
								});
								var eff = 100 / val;
								target.hp = _hp;
								target.maxHp = _maxhp;
								if (eff < limit) return false;
								return true;
							})
						)
							return 1;
						return 0;
					},
				},
			},
		},
		old_mbquesong: {
			audio: "mbquesong",
			trigger: {
				global: "phaseJieshuBegin",
			},
			filter(event, player) {
				return player.getHistory("damage").length;
			},
			direct: true,
			content() {
				"step 0";
				player.chooseTarget(get.prompt2("old_mbquesong")).set("ai", target => {
					var player = _status.event.player;
					if (get.attitude(player, target) <= 0) return 0;
					var len = lib.skill.old_mbquesong.getNum(target),
						hp = target.getHp();
					return len + target.isTurnedOver() * 2 + (1.5 * Math.min(4, target.getDamagedHp())) / (hp + 1);
				});
				("step 1");
				if (result.bool) {
					var target = result.targets[0];
					event.target = target;
					player.logSkill("old_mbquesong", target);
					var len = lib.skill.old_mbquesong.getNum(target);
					if (target.isHealthy()) event._result = { index: 0 };
					else {
						target
							.chooseControl()
							.set("choiceList", ["摸" + get.cnNumber(len) + "张牌并复原武将牌", "回复1点体力"])
							.set("prompt", "雀颂：请选择一项")
							.set("ai", () => {
								var player = _status.event.player;
								var len = _status.event.len;
								return get.effect(player, { name: "draw" }, player, player) * len >= get.recoverEffect(player, player, player) ? 0 : 1;
							})
							.set("len", len);
					}
				} else event.finish();
				("step 2");
				if (result.index == 1) {
					target.recover();
					event.finish();
				} else target.draw(Math.max(lib.skill.old_mbquesong.getNum(target), 1));
				("step 3");
				target.link(false);
				("step 4");
				target.turnOver(false);
			},
			getNum(player) {
				return 5 - player.countCards("e");
			},
			ai: {
				expose: 0.2,
				maixie: true,
				skillTagFilter(player, tag) {
					if (player.getStat().damaged) return false;
				},
			},
		},
		//SP毌丘俭
		old_mbcuizhen: {
			trigger: {
				global: "phaseBefore",
				player: "enterGame",
			},
			filter(event, player) {
				return (
					(event.name != "phase" || game.phaseNumber == 0) &&
					game.hasPlayer(current => {
						return current !== player && current.hasEnabledSlot(1);
					})
				);
			},
			async cost(event, trigger, player) {
				const num = 3;
				event.result = await player
					.chooseTarget(get.prompt("old_mbcuizhen"), "废除至多" + get.cnNumber(num) + "名其他角色的武器栏", [1, num], (card, player, target) => {
						return target !== player && target.hasEnabledSlot(1);
					})
					.set("ai", target => {
						const player = get.event().player;
						return (1 - get.attitude(player, target)) * Math.sqrt(get.distance(player, target));
					})
					.forResult();
			},
			group: ["old_mbcuizhen_inphase", "old_mbcuizhen_draw"],
			async content(event, trigger, player) {
				const targets = event.targets.slice().sortBySeat();
				for (const target of targets) {
					if (target.identityShown) {
						if (get.mode() != "identity" || player.identity != "nei") player.addExpose(0.3);
					}
					await target.disableEquip(1);
				}
				await game.delay();
			},
			subSkill: {
				inphase: {
					audio: "mbcuizhen",
					trigger: {
						player: "useCardToPlayered",
					},
					filter(event, player) {
						if (!player.isPhaseUsing()) return false;
						if (!get.is.damageCard(card)) return false;
						const target = event.target;
						return target !== player && target.countCards("h") >= target.getHp() && target.hasEnabledSlot(1);
					},
					prompt2: "废除其的武器栏",
					logTarget: "target",
					check(event, player) {
						return get.attitude(player, event.target) <= 0;
					},
					async content(event, trigger, player) {
						await trigger.target.disableEquip(1);
						await game.delayx();
					},
				},
				draw: {
					audio: "mbcuizhen",
					trigger: { player: "phaseDrawBegin2" },
					forced: true,
					locked: false,
					filter(event, player) {
						return !event.numFixed;
					},
					async content(event, trigger, player) {
						trigger.num += Math.min(
							4,
							game.countPlayer(current => {
								return current.countDisabledSlot(1);
							}) + 1
						);
					},
				},
			},
		},
		//王经
		old_mbjiejian: {
			audio: "mbjiejian",
			trigger: {
				player: "phaseZhunbeiBegin",
			},
			filter(event, player) {
				return player.countCards("h");
			},
			async cost(event, trigger, player) {
				if (_status.connectMode)
					game.broadcastAll(function () {
						_status.noclearcountdown = true;
					});
				const give_map = {};
				let used = [];
				do {
					const result = await player
						.chooseCardTarget({
							filterCard(card) {
								return get.itemtype(card) == "card" && !card.hasGaintag("old_mbjiejian_tag");
							},
							filterTarget: lib.filter.notMe,
							selectCard: [1, Infinity],
							prompt: used.length ? "是否继续分配手牌？" : get.prompt("old_mbjiejian"),
							prompt2: "请选择要分配的卡牌和目标",
							ai1(card) {
								if (!ui.selected.cards.length) return 8 - get.value(card);
								return 0;
							},
							ai2(target) {
								let player = _status.event.player,
									card = ui.selected.cards[0];
								let val = get.value(card),
									att = get.attitude(player, target);
								if (val <= 4) {
									if (get.event().used.includes(target)) return 0;
									return 1 / target.getUseValue(card);
								}
								return att * (target.getUseValue(card) + 4);
							},
						})
						.set("used", used)
						.forResult();
					if (result.bool && result.targets.length) {
						const id = result.targets[0].playerid,
							map = give_map;
						if (!map[id]) map[id] = [];
						map[id].addArray(result.cards);
						player.addGaintag(result.cards, "old_mbjiejian_tag");
						used.addArray(result.targets);
					} else break;
				} while (player.countCards("h"));
				if (_status.connectMode) {
					game.broadcastAll(function () {
						delete _status.noclearcountdown;
						game.stopCountChoose();
					});
				}
				const list = [],
					targets = [];
				for (const i in give_map) {
					const source = (_status.connectMode ? lib.playerOL : game.playerMap)[i];
					player.line(source, "green");
					if (player !== source && (get.mode() !== "identity" || player.identity !== "nei")) player.addExpose(0.2);
					targets.push(source);
					list.push([source, give_map[i]]);
				}
				event.result = {
					bool: list.length > 0,
					targets: targets,
					cost_data: list,
				};
			},
			logAudio: () => 1,
			async content(event, trigger, player) {
				const list = event.cost_data;
				await game
					.loseAsync({
						gain_list: list,
						player: player,
						cards: list.map(i => i[1]).flat(),
						giver: player,
						animate: "giveAuto",
					})
					.setContent("gaincardMultiple");
				for (let target of event.targets) {
					let num = target.hp - target.countMark("old_mbjiejian_mark");
					target.addMark("old_mbjiejian_mark", num, false);
				}
			},
			group: ["old_mbjiejian_liuli", "old_mbjiejian_remove"],
			subSkill: {
				liuli: {
					audio: "mbjiejian2.mp3",
					trigger: {
						global: "useCardToTarget",
					},
					filter(event, player) {
						if (event.player == player || get.type(event.card) == "equip") {
							return false;
						}
						if (!event.targets || event.targets.length != 1) {
							return false;
						}
						if (!event.targets[0].hasMark("old_mbjiejian_mark")) {
							return false;
						}
						return true;
					},
					prompt2: "将此牌转移给自己",
					check(event, player) {
						return get.effect(player, event.card, event.player, player) >= get.effect(event.targets[0], event.card, event.player, player);
					},
					logTarget: "target",
					async content(event, trigger, player) {
						const evt = trigger.getParent();
						evt.triggeredTargets2.removeArray(event.targets);
						evt.targets.removeArray(event.targets);
						if (lib.filter.targetEnabled2(trigger.card, trigger.player, player)) evt.targets.push(player);
						await player.draw();
					},
				},
				remove: {
					audio: "mbjiejian3.mp3",
					trigger: {
						global: "phaseEnd",
					},
					forced: true,
					filter(event, player) {
						return event.player.hasMark("old_mbjiejian_mark");
					},
					logTarget: "player",
					async content(event, trigger, player) {
						const target = event.targets[0],
							num = target.countMark("old_mbjiejian_mark");
						target.removeMark("old_mbjiejian_mark", num, false);
						if (target.hp >= num) await player.draw(2);
					},
				},
				mark: {
					intro: {
						content: "获得“节谏”时的体力值：$",
					},
				},
			},
		},
		//张布
		old_mbchengxiong: {
			audio: "mbchengxiong",
			trigger: {
				player: "useCardToTargeted",
			},
			locked: false,
			filter(event, player) {
				if (get.type2(event.card) != "trick") return false;
				if (player === event.target) return false;
				const num = lib.skill.old_mbchengxiong.phaseUsed(event, player);
				return game.hasPlayer(current => current.countCards("he") >= num);
			},
			phaseUsed(event, player) {
				let phase = null;
				for (let i of lib.phaseName) {
					if (event.getParent(i, true)) {
						phase = i;
						break;
					}
				}
				if (!phase) return 0;
				return player.getHistory("useCard", evt => evt.getParent(phase) == event.getParent(phase)).length;
			},
			async cost(event, trigger, player) {
				const num = lib.skill.old_mbchengxiong.phaseUsed(trigger, player);
				event.result = await player
					.chooseTarget(get.prompt2("old_mbchengxiong"), function (card, player, target) {
						const num = get.event().num;
						return target.countCards("he") >= num;
					})
					.set("num", num)
					.set("color", get.color(trigger.card))
					.set("ai", function (target) {
						let player = get.player(),
							eff = get.effect(target, { name: "guohe_copy2" }, player, player);
						const color = get.event().color;
						if (target.getCards("e").some(card => get.color(card) == color)) eff += get.damageEffect(target, player, player) / 2;
						return eff;
					})
					.forResult();
			},
			async content(event, trigger, player) {
				const target = event.targets[0];
				const result = await player
					.discardPlayerCard("he", target, true)
					.set("ai", function (button) {
						let val = get.buttonValue(button);
						if (get.attitude(_status.event.player, get.owner(button.link)) > 0) val *= -1;
						if (get.position(button.link) == "e" && get.color(button.link) == get.event().color) return (val *= 2);
						return val;
					})
					.set("color", get.color(trigger.card))
					.forResult();
				if (result.bool && get.color(result.links[0]) == get.color(trigger.card)) await target.damage();
			},
			mod: {
				aiOrder(player, card, num) {
					if (get.type2(card) == "trick") return num + 10;
				},
			},
		},
		old_mbwangzhuang: {
			audio: "mbwangzhuang",
			trigger: {
				global: "damageEnd",
			},
			filter(event, player) {
				if (event.card) return false;
				return [event.source, event.player].includes(player);
			},
			logTarget(event, player) {
				return _status.currentPhase || player;
			},
			async content(event, trigger, player) {
				await player.draw(2);
				if (_status.currentPhase) _status.currentPhase.addTempSkill("fengyin");
			},
		},
		//吴珂
		old_mbzhuguo: {
			audio: "mbzhuguo",
			logAudio: index => (typeof index === "number" ? "mbzhuguo" + index + ".mp3" : 2),
			usable: 1,
			enable: "phaseUse",
			filterTarget: true,
			async content(event, trigger, player) {
				const target = event.targets[0];
				const num = target.maxHp - target.countCards("h");
				if (num > 0) {
					await target.draw(num);
				} else if (num < 0 && target.countDiscardableCards(target, "h") > 0) {
					await target.chooseToDiscard("h", -num, true, "allowChooseAll");
				}
				const isDraw = target.hasHistory("gain", evt => evt.getParent().name == "draw" && evt.getParent(2) == event);
				if (!isDraw && target.isDamaged()) {
					await target.recover();
				}
				//按描述来说是因此成为，所以必须得是调整前不是最多，而且还必须要有摸牌且最后是最多，共三个条件（官方实际的结算也是这么回事）
				//描述删掉力
				if (target.isMaxHandcard()) {
					const result = await player
						.chooseTarget("助国：选择一名其他角色，令" + get.translation(target) + "选择是否对其使用一张无距离限制的【杀】", (card, player, targetx) => ![player, get.event().target].includes(targetx))
						.set("ai", targetz => {
							let player = get.player(),
								target = get.event().target;
							return get.effect(targetz, { name: "sha" }, target, player);
						})
						.set("target", target)
						.forResult();
					if (result.bool) {
						player.logSkill("old_mbzhuguo", [result.targets[0]], null, null, [3]);
						await target
							.chooseToUse(
								function (card, player, event) {
									return get.name(card, player) === "sha" && lib.filter.filterCard.apply(this, arguments);
								},
								`助国：是否对${get.translation(result.targets[0])}使用【杀】？`
							)
							.set("filterTarget", function (card, player, target) {
								const sourcex = get.event().sourcex;
								if (target != sourcex && !ui.selected.targets.includes(sourcex)) {
									return false;
								}
								return lib.filter.targetEnabled.apply(this, arguments);
							})
							.set("addCount", false)
							.set("sourcex", result.targets[0]);
					}
				}
			},
			ai: {
				order: 8,
				result: {
					target(player, target) {
						return target.maxHp - target.countCards("h");
					},
				},
			},
		},
		old_mbanda: {
			audio: "mbanda",
			trigger: { global: "dying" },
			usable: 1,
			check: (event, player) => get.attitude(player, event.player) > 0,
			filter: event => event.getParent().name == "damage" && event.getParent().source?.isIn(),
			logTarget: "player",
			async content(event, trigger, player) {
				const source = trigger.getParent().source;
				trigger.player.line(source);
				const result = await source
					.chooseToGive(
						"谙达：交给" + get.translation(trigger.player) + "两张不同颜色牌，否则其回复一点体力",
						(card, source) => {
							const selected = ui.selected.cards;
							if (!selected.length) {
								return true;
							}
							const targetColor = get.color(card, source);
							return !selected.some(selectedCard => get.color(selectedCard, source) === targetColor);
						},
						"he",
						2,
						trigger.player
					)
					.set("complexCard", true)
					.set("ai", card => {
						const player = get.player(),
							source = get.event().source;
						if (["tao", "jiu"].includes(get.name(card, source))) {
							return 0;
						}
						if (get.attitude(player, source) > 0) {
							return 11 - get.value(card);
						}
						return 7 - get.value(card);
					})
					.set("source", source)
					.forResult();
				if (!result.bool) {
					await trigger.player.recover();
				}
			},
		},
		//李遗
		old_jiaohua: {
			onremove: true,
			audio: "twjiaohua",
			enable: "phaseUse",
			usable: 4,
			chooseButton: {
				dialog(event, player) {
					return ui.create.dialog("###教化###选择一种牌的类型，令一名角色从牌堆获得此类型的一张牌");
				},
				chooseControl(event, player) {
					var list = ["basic", "trick", "equip"].filter(type => !player.getStorage("old_jiaohua").includes(type));
					list.push("cancel2");
					return list;
				},
				check(event, player) {
					var list = ["trick", "equip", "basic"].filter(type => !player.getStorage("old_jiaohua").includes(type));
					return list[0];
				},
				backup(result, player) {
					return {
						type: result.control,
						audio: "twjiaohua",
						filterCard: () => false,
						selectCard: -1,
						filterTarget: true,
						content() {
							"step 0";
							var type = lib.skill.old_jiaohua_backup.type;
							var card = get.cardPile2(card => get.type2(card) == type);
							if (card) target.gain(card, "gain2");
							else game.log("但牌堆里已经没有", "#y" + get.translation(type) + "牌", "了！");
							("step 1");
							player.markAuto("old_jiaohua", [lib.skill.old_jiaohua_backup.type]);
							("step 2");
							if (!["basic", "trick", "equip"].some(type => !player.getStorage("old_jiaohua").includes(type))) {
								player.popup("教化");
								player.unmarkAuto("old_jiaohua", player.getStorage("old_jiaohua"));
								game.log(player, "清空了", "#g【教化】", "记录");
							}
						},
						ai: {
							result: { target: 1 },
						},
					};
				},
				prompt(result, player) {
					return "令一名角色从牌堆中获得一张" + get.translation(result.control) + "牌";
				},
			},
			ai: {
				order: 7,
				result: { player: 1 },
			},
			intro: { content: "已记录$牌" },
		},
		//谋黄忠
		old_sbliegong: {
			audio: "sbliegong",
			mod: {
				aiOrder(player, card, num) {
					if (num > 0 && (card.name === "sha" || get.tag(card, "draw"))) return num + 6;
				},
				targetInRange(card, player, target) {
					if (card.name == "sha" && typeof get.number(card) == "number") {
						if (get.distance(player, target) <= get.number(card)) return true;
					}
				},
			},
			trigger: { player: "useCardToPlayered" },
			filter(event, player) {
				return !event.getParent()._old_sbliegong_player && event.targets.length == 1 && event.card.name == "sha" && player.getStorage("old_sbliegong").length > 0;
			},
			prompt2(event, player) {
				let str = "",
					storage = player.getStorage("old_sbliegong");
				if (storage.length > 1) {
					str += "亮出牌堆顶的" + get.cnNumber(storage.length - 1) + "张牌并增加伤害；且";
				}
				str += "令" + get.translation(event.target) + "不能使用花色为";
				for (let i = 0; i < storage.length; i++) {
					str += get.translation(storage[i]);
				}
				str += "的牌响应" + get.translation(event.card);
				return str;
			},
			logTarget: "target",
			locked: false,
			check(event, player) {
				const target = event.target;
				if (get.attitude(player, target) > 0) return false;
				if (
					target.hasSkillTag("filterDamage", null, {
						player: player,
						card: event.card,
					})
				)
					return false;
				const storage = player.getStorage("old_sbliegong");
				if (storage.length >= 4) return true;
				if (storage.length < 3) return false;
				if (target.hasShan()) return storage.includes("heart") && storage.includes("diamond");
				return true;
			},
			async content(event, trigger, player) {
				const storage = player.getStorage("old_sbliegong").slice(0);
				const num = storage.length - 1;
				const evt = trigger.getParent();
				if (num > 0) {
					if (typeof evt.baseDamage != "number") evt.baseDamage = 1;
					const cards = get.cards(num);
					await game.cardsGotoOrdering(cards);
					await player.showCards(cards.slice(0), get.translation(player) + "发动了【烈弓】");
					while (cards.length > 0) {
						const card = cards.pop();
						if (storage.includes(get.suit(card, false))) evt.baseDamage++;
						//ui.cardPile.insertBefore(card,ui.cardPile.firstChild);
					}
					//game.updateRoundNumber();
				}
				evt._old_sbliegong_player = player;
				player.addTempSkill("old_sbliegong_clear");
				const target = trigger.target;
				target.addTempSkill("old_sbliegong_block");
				if (!target.storage.old_sbliegong_block) target.storage.old_sbliegong_block = [];
				target.storage.old_sbliegong_block.push([evt.card, storage]);
				lib.skill.old_sbliegong.updateBlocker(target);
			},
			updateBlocker(player) {
				const list = [],
					storage = player.storage.old_sbliegong_block;
				if (storage?.length) {
					for (const i of storage) list.addArray(i[1]);
				}
				player.storage.old_sbliegong_blocker = list;
			},
			ai: {
				threaten: 3.5,
				directHit_ai: true,
				skillTagFilter(player, tag, arg) {
					if (arg?.card?.name == "sha") {
						const storage = player.getStorage("old_sbliegong");
						if (storage.length < 3 || !storage.includes("heart") || !storage.includes("diamond")) return false;
						const target = arg.target;
						if (target.hasSkill("bagua_skill") || target.hasSkill("bazhen") || target.hasSkill("rw_bagua_skill")) return false;
						return true;
					}
					return false;
				},
			},
			intro: {
				content: "已记录花色：$",
				onunmark: true,
			},
			group: "old_sbliegong_count",
			subSkill: {
				clear: {
					trigger: { player: "useCardAfter" },
					forced: true,
					charlotte: true,
					popup: false,
					filter(event, player) {
						return event._old_sbliegong_player == player;
					},
					content() {
						player.unmarkSkill("old_sbliegong");
						player.removeTip("old_sbliegong");
					},
				},
				block: {
					mod: {
						cardEnabled(card, player) {
							if (!player.storage.old_sbliegong_blocker) {
								return;
							}
							const suit = get.suit(card);
							if (suit == "none") {
								return;
							}
							let evt = _status.event;
							if (evt.name != "chooseToUse") {
								evt = evt.getParent("chooseToUse");
							}
							const cards = player.storage.old_sbliegong_block.map(i => i[0]);
							if (!evt || !evt.respondTo || !cards.includes(evt.respondTo[1])) {
								return;
							}
							if (player.storage.old_sbliegong_blocker.includes(suit)) {
								return false;
							}
						},
					},
					trigger: {
						player: ["damageBefore", "damageCancelled", "damageZero"],
						target: ["shaMiss", "useCardToExcluded", "useCardToEnd"],
						global: ["useCardEnd"],
					},
					forced: true,
					firstDo: true,
					charlotte: true,
					popup: false,
					onremove(player) {
						delete player.storage.old_sbliegong_block;
						delete player.storage.old_sbliegong_blocker;
					},
					filter(event, player) {
						const evt = event.getParent("useCard", true, true);
						if (evt && evt.effectedCount < evt.effectCount) return false;
						if (!event.card || !player.storage.old_sbliegong_block) return false;
						return player.storage.old_sbliegong_block.some(i => i[0] == event.card);
					},
					content() {
						const storage = player.storage.old_sbliegong_block;
						for (let i = 0; i < storage.length; i++) {
							if (storage[i][0] == trigger.card) {
								storage.splice(i--, 1);
							}
						}
						if (!storage.length) player.removeSkill(event.name);
						else lib.skill.old_sbliegong.updateBlocker(player);
					},
				},
				count: {
					trigger: {
						player: "useCard",
						target: "useCardToTargeted",
					},
					forced: true,
					locked: false,
					popup: false,
					filter(event, player, name) {
						if (name != "useCard" && player == event.player) return false;
						const suit = get.suit(event.card);
						if (!lib.suit.includes(suit)) return false;
						if (player.storage.old_sbliegong?.includes(suit)) return false;
						return true;
					},
					content() {
						player.markAuto("old_sbliegong", [get.suit(trigger.card)]);
						player.storage.old_sbliegong.sort((a, b) => lib.suit.indexOf(b) - lib.suit.indexOf(a));
						player.addTip("old_sbliegong", get.translation("old_sbliegong") + player.getStorage("old_sbliegong").reduce((str, suit) => str + get.translation(suit), ""));
					},
				},
			},
		},
		//谋公孙瓒
		old_sbqiaomeng: {
			audio: "sbqiaomeng",
			trigger: {
				source: "damageSource",
			},
			filter(event, player) {
				if (!event.card || event.card.name !== "sha") return false;
				if (!player.hasSkill("sbyicong", null, false, false)) return false;
				if (player.countCharge(true)) return true;
				if (event.player.isIn() && event.player.countDiscardableCards(player, "hej")) return true;
				return false;
			},
			async cost(event, trigger, player) {
				const list = ["cancel2"];
				const choiceList = [`弃置${get.translation(trigger.player)}区域里的一张牌，你摸两张牌`, `获得4点蓄力值`];
				if (player.countCharge(true)) {
					list.unshift("蓄力");
				} else {
					choiceList[1] = `<span style="opacity:0.5">${choiceList[1]}</span>`;
				}
				if (trigger.player.isIn() && trigger.player.countDiscardableCards(player, "hej")) {
					list.unshift("弃牌");
				} else {
					choiceList[0] = `<span style="opacity:0.5">${choiceList[0]}</span>`;
				}
				const result = await player
					.chooseControl(list)
					.set("prompt", get.prompt("old_sbqiaomeng"))
					.set("choiceList", choiceList)
					.set("ai", () => {
						return get.event().choice;
					})
					.set(
						"choice",
						(() => {
							const eff = get.effect(trigger.player, { name: "guohe" }, player, player);
							if (list.length == 2) {
								if (!list.includes("弃牌")) return "蓄力";
								if (eff >= 0) return "弃牌";
								return "cancel2";
							}
							if (player.countCharge() >= 2 && eff >= 0) return "弃牌";
							return "蓄力";
						})()
					)
					.forResult();
				if (result.control !== "cancel2") {
					event.result = {
						bool: true,
						cost_data: {
							control: result.control,
						},
					};
				}
			},
			async content(event, trigger, player) {
				const { control } = event.cost_data;
				if (control === "弃牌") {
					player.line(trigger.player);
					await player.discardPlayerCard(trigger.player, "hej", true);
					await player.draw(2);
				} else {
					player.addCharge(4);
				}
			},
			ai: {
				combo: "sbyicong",
			},
		},

		//谋孙权
		old_sbzhiheng: {
			audio: "sbzhiheng",
			locked: false,
			mod: {
				aiOrder(player, card, num) {
					if (num <= 0 || get.itemtype(card) !== "card" || get.type(card) !== "equip") return num;
					let eq = player.getEquip(get.subtype(card));
					if (eq && get.equipValue(card) - get.equipValue(eq) < Math.max(1.2, 6 - player.hp)) return 0;
				},
			},
			enable: "phaseUse",
			usable: 1,
			position: "he",
			filterCard: lib.filter.cardDiscardable,
			discard: false,
			lose: false,
			delay: false,
			selectCard: [1, Infinity],
			prompt(event) {
				var count = _status.event.player.countMark("old_sbtongye");
				var str = "出牌阶段限一次。你可以弃置任意张牌并摸等量的牌，若你以此法弃置的牌包括你所有手牌，则你多摸" + get.cnNumber(count + 1) + "张牌。";
				return str;
			},
			check(card) {
				var player = _status.event.player;
				if (
					get.position(card) == "h" &&
					!player.countCards("h", "du") &&
					(player.hp > 2 ||
						!player.countCards("h", function (card) {
							return get.value(card) >= 8;
						}))
				) {
					return 1;
				}
				return 6 - get.value(card);
			},
			content() {
				"step 0";
				player.discard(cards);
				event.num = 1;
				var hs = player.getCards("h");
				if (!hs.length) event.num = 0;
				for (var i = 0; i < hs.length; i++) {
					if (!cards.includes(hs[i])) {
						event.num = 0;
						break;
					}
				}
				("step 1");
				var all = event.num;
				player.draw((all ? 1 + player.countMark("old_sbtongye") : 0) + cards.length);
			},
			ai: {
				order(item, player) {
					if (player.hasCard(i => get.value(i) > Math.max(6, 9 - player.hp), "he")) return 1;
					return 10;
				},
				result: {
					player: 1,
				},
				nokeep: true,
				skillTagFilter(player, tag, arg) {
					if (tag === "nokeep") return (!arg || (arg && arg.card && get.name(arg.card) === "tao")) && player.isPhaseUsing() && !player.getStat().skill.old_sbzhiheng && player.hasCard(card => get.name(card) !== "tao", "h");
				},
				threaten: 1.56,
			},
		},
		old_sbtongye: {
			audio: "sbtongye",
			trigger: { player: "phaseJieshuBegin" },
			forced: true,
			onremove: true,
			content() {
				"step 0";
				player
					.chooseControl("变化", "不变")
					.set("prompt", "统业：猜测场上装备数是否于你下回合准备阶段前发生变化")
					.set("ai", () => {
						let player = _status.event.player;
						if (game.countPlayer() > 3) return "变化";
						if (
							game.countPlayer(function (current) {
								return current.hasCard({ type: "equip" }, "e");
							}) < game.countPlayer()
						)
							return "变化";
						if (
							game.countPlayer() == 2 &&
							game.countPlayer(function (current) {
								if (current != player) return current.countCards("e", { type: "equip" }) + current.countDisabledSlot();
							}) >= 5
						)
							return "不变";
						if (Math.random() < 0.3) return "变化";
						return "不变";
					});
				("step 1");
				if (result.control == "变化") {
					player.addSkill("old_sbtongye_change", 1);
					player.chat("变！");
				} else {
					player.addSkill("old_sbtongye_nochange", 1);
					player.chat("不变！");
				}
				var num = game
					.filterPlayer()
					.map(i => i.countCards("e"))
					.reduce((p, c) => p + c, 0);
				player.removeMark("old_sbtongye_count", player.countMark("old_sbtongye_count"), false);
				if (num > 0) player.addMark("old_sbtongye_count", num, false);
				player.addSkill("old_sbtongye_settle");
			},
			marktext: "业",
			intro: {
				name: "统业",
				name2: "业",
				content: "mark",
			},
			ai: {
				combo: "sbzhiheng",
			},
			subSkill: {
				broadcast: {
					trigger: {
						global: ["loseAfter", "equipAfter", "addJudgeAfter", "gainAfter", "loseAsyncAfter", "addToExpansionAfter"],
					},
					charlotte: true,
					silent: true,
					filter(event, player) {
						var num = 0;
						game.countPlayer(function (current) {
							var evt = event.getl(current);
							if (evt && evt.es) num += evt.es.length;
						});
						if (event.name == "equip") num--;
						return num != 0;
					},
					content() {
						if (player.hasSkill("old_sbtongye_change")) player.markSkill("old_sbtongye_change");
						if (player.hasSkill("old_sbtongye_nochange")) player.markSkill("old_sbtongye_nochange");
					},
				},
				settle: {
					audio: "sbtongye",
					init(player) {
						player.addSkill("old_sbtongye_broadcast");
					},
					trigger: { player: "phaseZhunbeiBegin" },
					forced: true,
					charlotte: true,
					filter(event, player) {
						return player.hasSkill("old_sbtongye_change") || player.hasSkill("old_sbtongye_nochange");
					},
					content() {
						var delta =
							game
								.filterPlayer()
								.map(i => i.countCards("e"))
								.reduce((p, c) => p + c, 0) - player.countMark("old_sbtongye_count");
						if ((player.hasSkill("old_sbtongye_change") && delta != 0) || (player.hasSkill("old_sbtongye_nochange") && delta == 0)) {
							game.log(player, "猜测", "#g正确");
							if (player.countMark("old_sbtongye") < 4) player.addMark("old_sbtongye", 1);
						} else {
							game.log(player, "猜测", "#y错误");
							player.removeMark("old_sbtongye", 1);
						}
						player.removeSkill("old_sbtongye_change");
						player.removeSkill("old_sbtongye_nochange");
						player.removeSkill("old_sbtongye_settle");
						player.removeSkill("old_sbtongye_broadcast");
					},
				},
				change: {
					charlotte: true,
					mark: true,
					marktext: "变",
					intro: {
						markcount(storage, player) {
							return (
								game
									.filterPlayer()
									.map(i => i.countCards("e"))
									.reduce((p, c) => p + c, 0) - player.countMark("old_sbtongye_count")
							);
						},
						mark(dialog, storage, player) {
							dialog.addText(get.translation(player) + "猜测场上装备数发生变化");
							var delta =
								game
									.filterPlayer()
									.map(i => i.countCards("e"))
									.reduce((p, c) => p + c, 0) - player.countMark("old_sbtongye_count");
							if (delta == 0) dialog.addText("(当前未发生变化)");
							else dialog.addText("(当前已" + (delta > 0 ? "增加" : "减少") + get.cnNumber(Math.abs(delta)) + "张装备牌)");
						},
					},
				},
				nochange: {
					charlotte: true,
					mark: true,
					marktext: '<span style="text-decoration:line-through;">变</span>',
					intro: {
						markcount(storage, player) {
							return (
								game
									.filterPlayer()
									.map(i => i.countCards("e"))
									.reduce((p, c) => p + c, 0) - player.countMark("old_sbtongye_count")
							);
						},
						mark(dialog, storage, player) {
							dialog.addText(get.translation(player) + "猜测场上装备数不发生变化");
							var delta =
								game
									.filterPlayer()
									.map(i => i.countCards("e"))
									.reduce((p, c) => p + c, 0) - player.countMark("old_sbtongye_count");
							if (delta == 0) dialog.addText("(当前未发生变化)");
							else dialog.addText("(当前已" + (delta > 0 ? "增加" : "减少") + get.cnNumber(Math.abs(delta)) + "张装备牌)");
						},
					},
				},
			},
		},
		//谋甘宁
		old_sbqixi: {
			init() {
				lib.card.guohe.storage = lib.card.guohe.content;
			},
			audio: "sbqixi",
			enable: "chooseToUse",
			filterCard(card) {
				return get.color(card) == "black";
			},
			position: "hes",
			viewAs: { name: "guohe" },
			viewAsFilter(player) {
				if (!player.countCards("hes", { color: "black" })) return false;
			},
			prompt: "将一张黑色牌当作【过河拆桥】使用",
			check(card) {
				if (card.name == "guohe") return 0;
				return 6 - get.value(card);
			},
			group: "old_sbqixi_guohe",
			contentx() {
				if (target.countCards("hej")) target.discard(target.getCards("hej"));
			},
			subSkill: {
				guohe: {
					audio: "sbqixi",
					trigger: { player: "useCard" },
					filter(event, player) {
						return event.card.name == "guohe" && event.card.isCard && event.cards.length == 1;
					},
					prompt2: "强化【过河拆桥】的效果",
					check(event, player) {
						var target = event.targets[0];
						return get.attitude(player, target) <= 0;
					},
					content() {
						player.addTempSkill("old_sbqixi_reguohe", "useCardAfter");
					},
				},
				reguohe: {
					charlotte: true,
					init() {
						lib.card.guohe.content = lib.skill.old_qixi.contentx;
					},
					onremove() {
						lib.card.guohe.content = lib.card.guohe.storage;
					},
				},
			},
		},
		old_sbfenwei: {
			unique: true,
			mark: true,
			limited: true,
			audio: "sbfenwei",
			trigger: { global: "useCardToPlayered" },
			filter(event, player) {
				if (event.getParent().triggeredTargets3.length > 1) return false;
				if (get.type(event.card) != "trick") return false;
				if (get.info(event.card).multitarget) return false;
				if (event.targets.length < 2) return false;
				return true;
			},
			direct: true,
			skillAnimation: true,
			animationColor: "wood",
			content() {
				"step 0";
				player
					.chooseTarget(get.prompt("old_sbfenwei"), "令" + get.translation(trigger.card) + "对任意名角色无效", [1, trigger.targets.length], function (card, player, target) {
						return _status.event.targets.includes(target);
					})
					.set("ai", function (target) {
						var trigger = _status.event.getTrigger();
						return -get.effect(target, trigger.card, trigger.player, _status.event.player);
					})
					.set("targets", trigger.targets);
				("step 1");
				if (result.bool) {
					player.logSkill("old_sbfenwei", result.targets);
					player.awakenSkill("old_sbfenwei");
					trigger.getParent().excluded.addArray(result.targets);
					event.num = Math.min(4, result.targets.length);
				} else event.finish();
				("step 2");
				var cards = [];
				for (var i = 0; i < num; i++) {
					var card = get.cardPile2(function (card) {
						return !cards.includes(card) && card.name == "guohe";
					});
					if (card) cards.push(card);
					else break;
				}
				if (cards.length) player.gain(cards, "gain2");
			},
		},
		//谋小乔
		old_sbtianxiang: {
			audio: "sbtianxiang",
			enable: "phaseUse",
			filter(event, player) {
				return (
					player.countCards("he", card => lib.skill.old_sbtianxiang.filterCard(card, player)) &&
					game.hasPlayer(target => lib.skill.old_sbtianxiang.filterTarget(null, player, target))
				);
			},
			filterCard(card, player) {
				return get.color(card, player) == "red";
			},
			filterTarget(card, player, target) {
				return target != player && !target.getSkills().some(skill => skill.indexOf("old_sbtianxiang_") == 0);
			},
			position: "he",
			discard: false,
			lose: false,
			delay: 0,
			usable: 3,
			prompt: "将一张红色牌交给一名角色并令其获得此花色的“天香”标记",
			content() {
				player.give(cards, target);
				var suit = get.suit(cards[0], player);
				target.addSkill("old_sbtianxiang_" + suit);
			},
			ai: {
				order: 5,
				result: { target: -1 },
			},
			group: ["old_sbtianxiang_draw", "old_sbtianxiang_effect"],
			subSkill: {
				heart: {
					charlotte: true,
					mark: true,
					marktext: "♥︎",
					intro: { content: "伤害转移术" },
				},
				diamond: {
					charlotte: true,
					mark: true,
					marktext: "♦︎",
					intro: { content: "掳掠大法" },
				},
				draw: {
					audio: "sbtianxiang",
					trigger: { player: "phaseZhunbeiBegin" },
					filter(event, player) {
						return game.hasPlayer(target => target.getSkills().some(skill => skill.indexOf("old_sbtianxiang_") == 0));
					},
					forced: true,
					locked: false,
					async content(event, trigger, player) {
						var num = 0;
						game.countPlayer(target => {
							var skills = target.getSkills().filter(skill => skill.indexOf("old_sbtianxiang_") == 0);
							target.removeSkill(skills);
							num += skills.length;
						});
						num += 3;
						await player.draw(num);
					},
				},
				effect: {
					trigger: { player: "damageBegin3" },
					filter(event, player) {
						return game.hasPlayer(target => target.getSkills().some(skill => skill.indexOf("old_sbtianxiang_") == 0));
					},
					async cost(event, trigger, player) {
						event.result = await player
							.chooseTarget(get.prompt("old_sbtianxiang"), "移去一名角色的“天香”标记并执行相应效果", function (card, player, target) {
								return target.getSkills().some(skill => skill.indexOf("old_sbtianxiang_") == 0);
							})
							.set("ai", target => {
								var player = _status.event.player;
								return -get.attitude(player, target) * target.getSkills().filter(skill => skill.indexOf("old_sbtianxiang_") == 0).length;
							})
							.forResult();
					},
					async content(event, trigger, player) {
						const target = event.targets[0];
						const skills = target.getSkills().filter(skill => skill.indexOf("old_sbtianxiang_") == 0);
						target.removeSkill(skills);
						if (skills.includes("old_sbtianxiang_heart")) {
							target.damage(trigger.source ? trigger.source : "nosource");
							trigger.cancel();
						}
						if (skills.includes("old_sbtianxiang_diamond")) {
							var cards = target.getCards("he");
							if (!cards.length) {
								return;
							}
							await target.chooseToGive(player, "he", 2, "天香：交给" + get.translation(player) + "两张牌", true);
						} else {
							return;
						}
					},
				},
			},
		},
		//谋大乔
		old_sbguose: {
			audio: "sbguose",
			enable: "phaseUse",
			usable: 4,
			discard: false,
			lose: false,
			delay: false,
			filter(event, player) {
				return player.hasCard(card => get.suit(card) == "diamond", "hes") || game.hasPlayer(current => current.hasJudge("lebu"));
			},
			position: "hes",
			filterCard(card, player) {
				if (get.suit(card) != "diamond") {
					return false;
				}
				if (game.checkMod(card, player, "unchanged", "cardEnabled2", player) === false) {
					return false;
				}
				return true;
			},
			selectCard: [0, 1],
			filterTarget(card, player, target) {
				if (!ui.selected.cards.length) {
					if (target.hasJudge("lebu")) {
						return true;
					}
					return false;
				}
				if (player == target) {
					return false;
				}
				return player.canUse(get.autoViewAs({ name: "lebu" }, ui.selected.cards), target);
			},
			complexSelect: true,
			check(card) {
				return 7 - get.value(card);
			},
			async content(event, trigger, player) {
				const [target] = event.targets;
				if (target.hasJudge("lebu")) {
					await target.discard(target.getJudge("lebu"));
				} else {
					const next = player.useCard({ name: "lebu" }, target, event.cards);
					next.audio = false;
					await next;
				}
				await player.draw(2);
			},
			ai: {
				result: {
					target(player, target) {
						if (target.hasJudge("lebu")) {
							return -get.effect(target, { name: "lebu" }, player, target);
						}
						return get.effect(target, { name: "lebu" }, player, target);
					},
				},
				order: 9,
			},
		},
		//谋孙策
		old_sbjiang: {
			audio: "sbjiang",
			trigger: {
				player: "useCardToPlayered",
				target: "useCardToTargeted",
			},
			filter(event, player) {
				if (!(event.card.name == "juedou" || (event.card.name == "sha" && get.color(event.card) == "red"))) {
					return false;
				}
				return true;
			},
			frequent: true,
			onremove: true,
			group: ["old_sbjiang_add", "old_sbjiang_qiben"],
			content() {
				player.draw();
			},
			ai: {
				effect: {
					target_use(card, player, target) {
						if (card.name == "sha" && get.color(card) == "red") {
							return [1, 0.6];
						}
					},
					player_use(card, player, target) {
						if (card.name == "sha" && get.color(card) == "red") {
							return [1, 1];
						}
					},
				},
			},
			subSkill: {
				add: {
					audio: "sbjiang",
					trigger: { player: "useCard2" },
					direct: true,
					filter(event, player) {
						if (event.card.name != "juedou") {
							return false;
						}
						var info = get.info(event.card);
						if (info.allowMultiple == false) {
							return false;
						}
						if (event.targets && !info.multitarget) {
							if (
								game.hasPlayer(function (current) {
									return !event.targets.includes(current) && lib.filter.targetEnabled2(event.card, player, current) && lib.filter.targetInRange(event.card, player, current);
								})
							) {
								return true;
							}
						}
						return false;
					},
					content() {
						"step 0";
						var prompt2 = "为" + get.translation(trigger.card) + "额外指定一个目标，然后失去1点体力";
						player
							.chooseTarget(get.prompt("old_sbjiang_add"), function (card, player, target) {
								var player = _status.event.player;
								if (_status.event.targets.includes(target)) {
									return false;
								}
								return lib.filter.targetEnabled2(_status.event.card, player, target);
							})
							.set("prompt2", prompt2)
							.set("ai", function (target) {
								var trigger = _status.event.getTrigger();
								var player = _status.event.player;
								var eff = get.effect(target, trigger.card, player, player);
								if (player.hasZhuSkill("old_sbzhiba") && !player.hasMark("old_sbjiang")) {
									return eff;
								}
								if (eff + get.effect(player, { name: "losehp" }, player) / 8 > 0) {
									return eff;
								}
								return 0;
							})
							.set("targets", trigger.targets)
							.set("card", trigger.card);
						("step 1");
						if (result.bool) {
							if (!event.isMine() && !event.isOnline()) {
								game.delayx();
							}
							event.targets = result.targets;
						} else {
							event.finish();
						}
						("step 2");
						if (event.targets) {
							player.logSkill("old_sbjiang_add", event.targets);
							trigger.targets.addArray(event.targets);
							player.loseHp();
						}
					},
				},
				qiben: {
					audio: "sbjiang",
					enable: "phaseUse",
					usable(skill, player) {
						return player.hasMark("old_sbjiang")
							? game.countPlayer(current => {
									return current.group == "wu" && current != player;
								}) + 1
							: 1;
					},
					viewAs: { name: "juedou" },
					filterCard: true,
					position: "h",
					selectCard: -1,
					prompt() {
						var player = _status.event.player;
						var limit = player.hasMark("old_sbjiang")
							? game.countPlayer(current => {
									return current.group == "wu" && current != player;
								}) + 1
							: 1;
						return "出牌阶段限" + get.cnNumber(limit) + "次。你可以将所有手牌当【决斗】使用";
					},
					filter(event, player) {
						var hs = player.getCards("h");
						if (!hs.length) {
							return false;
						}
						for (var i = 0; i < hs.length; i++) {
							var mod2 = game.checkMod(hs[i], player, "unchanged", "cardEnabled2", player);
							if (mod2 === false) {
								return false;
							}
						}
						return event.filterCard(get.autoViewAs({ name: "juedou" }, hs));
					},
					ai: {
						order: 0.001,
						result: {
							player(player, target) {
								let cards = player.getCards("h");
								return get.value(cards, player) * Math.sqrt(cards.length) <= 12;
							},
						},
						nokeep: true,
						skillTagFilter(player, tag, arg) {
							if (tag === "nokeep") {
								if (arg && (!arg.card || get.name(arg.card) !== "tao")) {
									return false;
								}
								let limit = player.hasMark("old_sbjiang")
									? game.countPlayer(current => {
											return current.group == "wu" && current != player;
										}) + 1
									: 1;
								return player.isPhaseUsing() && (player.getStat("skill").old_sbjiang_qiben || 0) < limit && player.hasCard(card => get.name(card) != "tao", "h");
							}
						},
					},
				},
			},
		},
		old_sbhunzi: {
			audio: "sbhunzi",
			trigger: { player: "dyingAfter" },
			juexingji: true,
			forced: true,
			skillAnimation: true,
			animationColor: "wood",
			derivation: ["sbyingzi", "gzyinghun"],
			content() {
				"step 0";
				player.awakenSkill(event.name);
				player.loseMaxHp();
				("step 1");
				player.changeHujia(2, null, true);
				("step 2");
				player.draw(3);
				("step 3");
				player.addSkills(["sbyingzi", "gzyinghun"]);
			},
			ai: {
				threaten(player, target) {
					if (target.hp == 1) {
						return 2;
					}
					return 0.5;
				},
				maixie: true,
				effect: {
					target(card, player, target) {
						if (!target.hasFriend() || target.hp > 1) {
							return;
						}
						if (get.tag(card, "damage") == 1 && ((target.hasZhuSkill("old_sbzhiba") && game.countPlayer(current => current != target && current.group == "wu")) || player.countCards("hs", card => player.canSaveCard(card, target)) + target.countCards("hs", card => target.canSaveCard(card, target)) > 0) && !target.isTurnedOver() && _status.currentPhase != target && get.distance(_status.currentPhase, target, "absolute") <= 3) {
							return [0.5, 1];
						}
					},
				},
			},
		},
		old_sbzhiba: {
			audio: "sbzhiba",
			trigger: { player: "dying" },
			filter(event, player) {
				if (!player.hasZhuSkill("old_sbzhiba")) {
					return false;
				}
				return player.hp <= 0;
			},
			zhuSkill: true,
			limited: true,
			skillAnimation: true,
			animationColor: "wood",
			content() {
				"step 0";
				player.awakenSkill(event.name);
				event.targets = game
					.filterPlayer(current => {
						return current.group == "wu";
					})
					.sortBySeat(_status.currentPhase);
				var num = event.targets.length;
				if (num > 0) {
					player.recover(num);
				}
				player.addMark("old_sbjiang", 1, false);
				player.addTempSkill("old_sbzhiba_draw");
				if (!event.targets.length) {
					event.finish();
				}
				("step 1");
				var target = targets.shift();
				target.damage("nosource");
				if (targets.length) {
					event.redo();
				}
			},
			subSkill: {
				draw: {
					trigger: { global: "dieAfter" },
					filter(event, player) {
						return event.getParent(3).name == "old_sbzhiba";
					},
					forced: true,
					charlotte: true,
					content() {
						player.draw(3);
					},
				},
			},
		},
		//初版谋诸葛亮
		old_sbhuoji: {
			audio: "sbhuoji",
			dutySkill: true,
			derivation: ["old_sbguanxing", "old_sbkongcheng"],
			group: ["old_sbhuoji_fire", "old_sbhuoji_achieve", "old_sbhuoji_fail", "old_sbhuoji_mark"],
			subSkill: {
				fire: {
					audio: "sbhuoji1",
					enable: "phaseUse",
					filterTarget: function (card, player, target) {
						return player != target;
					},
					prompt: "选择一名其他角色，对其与其势力相同的所有其他角色各造成1点火属性伤害",
					usable: 1,
					line: "fire",
					content() {
						"step 0";
						target.damage("fire");
						("step 1");
						var targets = game.filterPlayer(current => {
							if (current == player || current == target) return false;
							return current.group == target.group;
						});
						if (targets.length) {
							game.delayx();
							player.line(targets, "fire");
							targets.forEach(i => i.damage("fire"));
						}
					},
					ai: {
						order: 7,
						fireAttack: true,
						result: {
							target(player, target) {
								var att = get.attitude(player, target);
								return (
									get.sgn(att) *
									game
										.filterPlayer(current => {
											if (current == player) return false;
											return current.group == target.group;
										})
										.reduce((num, current) => num + get.damageEffect(current, player, player, "fire"), 0)
								);
							},
						},
					},
				},
				achieve: {
					audio: "sbhuoji2",
					trigger: { player: "phaseZhunbeiBegin" },
					filter(event, player) {
						return player.getAllHistory("sourceDamage", evt => evt.hasNature("fire") && evt.player != player).reduce((num, evt) => num + evt.num, 0) >= game.players.length + game.dead.length;
					},
					forced: true,
					locked: false,
					skillAnimation: true,
					animationColor: "fire",
					async content(event, trigger, player) {
						player.awakenSkill("old_sbhuoji");
						game.log(player, "成功完成使命");
						player.changeSkin({ characterName: "old_sb_sp_zhugeliang" }, "sb_zhugeliang");
						player.changeSkills(["old_sbguanxing", "old_sbkongcheng"], ["old_sbhuoji", "old_sbkanpo"]);
					},
				},
				fail: {
					audio: "sbhuoji3",
					trigger: { player: "dying" },
					forced: true,
					locked: false,
					content() {
						player.awakenSkill("old_sbhuoji");
						game.log(player, "使命失败");
					},
				},
				mark: {
					charlotte: true,
					trigger: { source: "damage" },
					filter(event, player) {
						return event.hasNature("fire");
					},
					firstDo: true,
					forced: true,
					popup: false,
					content() {
						player.addTempSkill("old_sbhuoji_count", { player: ["old_sbhuoji_achieveBegin", "old_sbhuoji_failBegin"] });
						player.storage.old_sbhuoji_count = player.getAllHistory("sourceDamage", evt => evt.hasNature("fire") && evt.player != player).reduce((num, evt) => num + evt.num, 0);
						player.markSkill("old_sbhuoji_count");
					},
				},
				count: {
					charlotte: true,
					intro: { content: "本局游戏已造成过#点火属性伤害" },
				},
			},
		},
		old_sbkanpo: {
			audio: "sbkanpo",
			trigger: { global: "roundStart" },
			forced: true,
			locked: false,
			get getNumber() {
				return 3;
			},
			async content(event, trigger, player) {
				var storage = player.getStorage("old_sbkanpo").slice();
				if (storage.length) {
					player.unmarkAuto("old_sbkanpo", storage);
				}
				const list = get.inpileVCardList(info => {
					if (info[2] == "sha" && info[3]) return false;
					return info[0] != "equip";
				});
				const func = () => {
					const event = get.event();
					const controls = [
						link => {
							const evt = get.event();
							if (evt.dialog && evt.dialog.buttons) {
								for (let i = 0; i < evt.dialog.buttons.length; i++) {
									const button = evt.dialog.buttons[i];
									button.classList.remove("selectable");
									button.classList.remove("selected");
									const counterNode = button.querySelector(".caption");
									if (counterNode) {
										counterNode.childNodes[0].innerHTML = ``;
									}
								}
								ui.selected.buttons.length = 0;
								game.check();
							}
							return;
						},
					];
					event.controls = ["清除选择", "cancel2"].map(control => {
						return ui.create.control(controls.concat(control == "清除选择" ? [control, "stayleft"] : control));
					});
				};
				if (event.isMine()) func();
				else if (event.isOnline()) event.player.send(func);
				var result = await player
					.chooseButton(["看破：是否记录三个牌名？", [list, "vcard"]], [1, 3], true)
					.set("ai", function (button) {
						switch (button.link[2]) {
							case "wuxie":
								return 5 + Math.random();
							case "sha":
								return 5 + Math.random();
							case "tao":
								return 4 + Math.random();
							case "jiu":
								return 3 + Math.random();
							case "lebu":
								return 3 + Math.random();
							case "shan":
								return 4.5 + Math.random();
							case "wuzhong":
								return 4 + Math.random();
							case "shunshou":
								return 2.7 + Math.random();
							case "nanman":
								return 2 + Math.random();
							case "wanjian":
								return 1.6 + Math.random();
							default:
								return 1.5 + Math.random();
						}
					})
					.set("filterButton", button => {
						return !_status.event.names.includes(button.link[2]);
					})
					.set("names", storage)
					.set("custom", {
						add: {
							confirm(bool) {
								if (bool != true) return;
								const event = get.event().parent;
								if (event.controls) event.controls.forEach(i => i.close());
								if (ui.confirm) ui.confirm.close();
								game.uncheck();
							},
							button() {
								if (ui.selected.buttons.length) return;
								const event = get.event();
								if (event.dialog && event.dialog.buttons) {
									for (let i = 0; i < event.dialog.buttons.length; i++) {
										const button = event.dialog.buttons[i];
										const counterNode = button.querySelector(".caption");
										if (counterNode) {
											counterNode.childNodes[0].innerHTML = ``;
										}
									}
								}
								if (!ui.selected.buttons.length) {
									const evt = event.parent;
									if (evt.controls) evt.controls[0].classList.add("disabled");
								}
							},
						},
						replace: {
							button(button) {
								const event = get.event();
								if (!event.isMine()) return;
								if (button.classList.contains("selectable") == false) return;
								if (ui.selected.buttons.length >= lib.skill.old_sbkanpo.getNumber) return false;
								button.classList.add("selected");
								ui.selected.buttons.push(button);
								let counterNode = button.querySelector(".caption");
								const count = ui.selected.buttons.filter(i => i == button).length;
								if (counterNode) {
									counterNode = counterNode.childNodes[0];
									counterNode.innerHTML = `×${count}`;
								} else {
									counterNode = ui.create.caption(`<span style="font-size:24px; font-family:xinwei; text-shadow:#FFF 0 0 4px, #FFF 0 0 4px, rgba(74,29,1,1) 0 0 3px;">×${count}</span>`, button);
									counterNode.style.right = "5px";
									counterNode.style.bottom = "2px";
								}
								const evt = event.parent;
								if (evt.controls) evt.controls[0].classList.remove("disabled");
								game.check();
							},
						},
					})
					.forResult();
				if (result.bool) {
					var names = result.links.map(link => link[2]);
					player.setStorage("old_sbkanpo", names);
					player.markSkill("old_sbkanpo");
				}
			},
			marktext: "破",
			intro: {
				markcount(storage, player) {
					if (player.isUnderControl(true)) return storage.length;
					return "?";
				},
				mark(dialog, content, player) {
					if (player.isUnderControl(true)) {
						const storage = player.getStorage("old_sbkanpo");
						dialog.addText("当前记录牌名：");
						dialog.addSmall([storage, "vcard"]);
					} else {
						return `${get.translation(player)}记录了一些牌名`;
					}
				},
			},
			group: "old_sbkanpo_kanpo",
			subSkill: {
				kanpo: {
					audio: "sbkanpo",
					trigger: { global: "useCard" },
					filter(event, player) {
						return event.player != player && player.getStorage("old_sbkanpo").includes(event.card.name);
					},
					prompt2(event, player) {
						return "移除" + get.translation(event.card.name) + "的记录，令" + get.translation(event.card) + "无效";
					},
					check(event, player) {
						var effect = 0;
						if (event.card.name == "wuxie" || event.card.name == "shan") {
							if (get.attitude(player, event.player) < -1) effect = -1;
						} else if (event.targets && event.targets.length) {
							for (var i = 0; i < event.targets.length; i++) {
								effect += get.effect(event.targets[i], event.card, event.player, player);
							}
						}
						if (effect < 0) {
							if (event.card.name == "sha") {
								var target = event.targets[0];
								if (target == player) return !player.countCards("h", "shan");
								else return target.hp == 1 || (target.countCards("h") <= 2 && target.hp <= 2);
							} else return true;
						}
						return false;
					},
					logTarget: "player",
					content() {
						player.unmarkAuto("old_sbkanpo", [trigger.card.name]);
						trigger.targets.length = 0;
						trigger.all_excluded = true;
					},
				},
			},
		},
		old_sbguanxing: {
			audio: "sbguanxing",
			trigger: { player: ["phaseZhunbeiBegin", "phaseJieshuBegin"] },
			filter(event, player) {
				return event.name == "phaseZhunbei" || (player.hasSkill("old_sbguanxing_on") && player.countCards("s", card => card.hasGaintag("old_sbguanxing")));
			},
			forced: true,
			locked: false,
			content() {
				"step 0";
				if (trigger.name == "phaseJieshu") {
					event.goto(2);
					return;
				}
				var cards = player.getCards("s", card => card.hasGaintag("old_sbguanxing"));
				if (cards.length) player.loseToDiscardpile(cards);
				var bool = player.getAllHistory("useSkill", evt => evt.skill == "old_sbguanxing").length > 1;
				event.num = Math.min(7, bool ? cards.length + 1 : 7);
				("step 1");
				var cards2 = get.cards(num);
				player.$gain2(cards2, false);
				game.log(player, "将", cards2, "置于了武将牌上");
				player.loseToSpecial(cards2, "old_sbguanxing").visible = true;
				player.markSkill("old_sbguanxing");
				("step 2");
				var cards = player.getCards("s", card => card.hasGaintag("old_sbguanxing"));
				if (cards.length) {
					player
						.chooseToMove()
						.set("list", [["你的“星”", cards], ["牌堆顶"]])
						.set("prompt", "观星：点击将牌移动到牌堆顶")
						.set("processAI", function (list) {
							var cards = list[0][1].slice(),
								player = _status.event.player;
							var name = _status.event.getTrigger().name;
							var target = name == "phaseZhunbei" ? player : player.getNext();
							var judges = target.getCards("j");
							var top = [],
								att = get.sgn(get.attitude(player, target));
							if (judges.length && att != 0 && (target != player || !player.hasWuxie())) {
								for (var i = 0; i < judges.length; i++) {
									var judge = (card, num) => get.judge(card) * num;
									cards.sort((a, b) => judge(b, att) - judge(a, att));
									if (judge(cards[0], att) < 0) break;
									else top.unshift(cards.shift());
								}
							}
							return [cards, top];
						})
						.set("filterOk", function (moved) {
							return moved[1].length;
						});
				} else event._result = { bool: false };
				("step 3");
				if (result.bool) {
					var cards = result.moved[1];
					player.loseToDiscardpile(cards, ui.cardPile, "insert").log = false;
					game.log(player, "将", cards, "置于了牌堆顶");
				} else if (trigger.name == "phaseZhunbei") player.addTempSkill("old_sbguanxing_on");
			},
			group: "old_sbguanxing_unmark",
			subSkill: {
				on: { charlotte: true },
				unmark: {
					trigger: { player: "loseAfter" },
					filter(event, player) {
						if (!event.ss || !event.ss.length) return false;
						return !player.countCards("s", card => card.hasGaintag("old_sbguanxing"));
					},
					charlotte: true,
					forced: true,
					silent: true,
					content() {
						player.unmarkSkill("old_sbguanxing");
					},
				},
			},
			marktext: "星",
			intro: {
				mark(dialog, storage, player) {
					var cards = player.getCards("s", card => card.hasGaintag("old_sbguanxing"));
					if (!cards || !cards.length) return;
					dialog.addAuto(cards);
				},
				markcount(storage, player) {
					return player.countCards("s", card => card.hasGaintag("old_sbguanxing"));
				},
				onunmark(storage, player) {
					var cards = player.getCards("s", card => card.hasGaintag("old_sbguanxing"));
					if (cards.length) player.loseToDiscardpile(cards);
				},
			},
			mod: {
				aiOrder(player, card, num) {
					var cards = player.getCards("s", card => card.hasGaintag("old_sbguanxing"));
					if (get.itemtype(card) == "card" && card.hasGaintag("old_sbguanxing")) return num + (cards.length > 1 ? 0.5 : -0.0001);
				},
			},
		},
		old_sbkongcheng: {
			audio: "sbkongcheng",
			trigger: { player: ["damageBegin3", "damageBegin4"] },
			filter(event, player, name) {
				if (!player.hasSkill("old_sbguanxing")) return false;
				const num = player.countCards("s", card => card.hasGaintag("old_sbguanxing"));
				if (name == "damageBegin3" && !num) return true;
				if (name == "damageBegin4" && num) return true;
				return false;
			},
			forced: true,
			content() {
				"step 0";
				var num = player.countCards("s", card => card.hasGaintag("old_sbguanxing"));
				if (!num && event.triggername == "damageBegin3") {
					trigger.increase("num");
				} else if (num && event.triggername == "damageBegin4") {
					player
						.judge(function (result) {
							if (get.number(result) <= get.player().countCards("s", card => card.hasGaintag("old_sbguanxing"))) return 2;
							return -1;
						})
						.set("judge2", result => result.bool)
						.set("callback", function () {
							if (event.judgeResult.number <= player.countCards("s", card => card.hasGaintag("old_sbguanxing"))) {
								event.getParent("old_sbkongcheng").getTrigger().decrease("num");
							}
						});
				}
			},
		},
		//二版谋诸葛亮
		oldx_sbhuoji: {
			audio: "sbhuoji",
			dutySkill: true,
			derivation: ["oldx_sbguanxing", "oldx_sbkongcheng"],
			group: ["oldx_sbhuoji_fire", "oldx_sbhuoji_achieve", "oldx_sbhuoji_fail", "oldx_sbhuoji_mark"],
			subSkill: {
				fire: {
					audio: "sbhuoji1",
					enable: "phaseUse",
					filterTarget: function (card, player, target) {
						return player != target;
					},
					prompt: "选择一名其他角色，对其与其势力相同的所有其他角色各造成1点火属性伤害",
					usable: 1,
					line: "fire",
					content() {
						"step 0";
						target.damage("fire");
						("step 1");
						var targets = game.filterPlayer(current => {
							if (current == player || current == target) return false;
							return current.group == target.group;
						});
						if (targets.length) {
							game.delayx();
							player.line(targets, "fire");
							targets.forEach(i => i.damage("fire"));
						}
					},
					ai: {
						order: 7,
						fireAttack: true,
						result: {
							target(player, target) {
								var att = get.attitude(player, target);
								return (
									get.sgn(att) *
									game
										.filterPlayer(current => {
											if (current == player) return false;
											return current.group == target.group;
										})
										.reduce((num, current) => num + get.damageEffect(current, player, player, "fire"), 0)
								);
							},
						},
					},
				},
				achieve: {
					audio: "sbhuoji2",
					trigger: { player: "phaseZhunbeiBegin" },
					filter(event, player) {
						return player.getAllHistory("sourceDamage", evt => evt.hasNature("fire") && evt.player != player).reduce((num, evt) => num + evt.num, 0) >= game.players.length + game.dead.length;
					},
					forced: true,
					locked: false,
					skillAnimation: true,
					animationColor: "fire",
					async content(event, trigger, player) {
						player.awakenSkill("oldx_sbhuoji");
						game.log(player, "成功完成使命");
						player.changeSkin({ characterName: "oldx_sb_sp_zhugeliang" }, "sb_zhugeliang");
						player.changeSkills(["oldx_sbguanxing", "oldx_sbkongcheng"], ["oldx_sbhuoji", "oldx_sbkanpo"]);
					},
				},
				fail: {
					audio: "sbhuoji3",
					trigger: { player: "dying" },
					forced: true,
					locked: false,
					content() {
						player.awakenSkill("oldx_sbhuoji");
						game.log(player, "使命失败");
					},
				},
				mark: {
					charlotte: true,
					trigger: { source: "damage" },
					filter(event, player) {
						return event.hasNature("fire");
					},
					firstDo: true,
					forced: true,
					popup: false,
					content() {
						player.addTempSkill("oldx_sbhuoji_count", { player: ["oldx_sbhuoji_achieveBegin", "oldx_sbhuoji_failBegin"] });
						player.storage.oldx_sbhuoji_count = player.getAllHistory("sourceDamage", evt => evt.hasNature("fire") && evt.player != player).reduce((num, evt) => num + evt.num, 0);
						player.markSkill("oldx_sbhuoji_count");
					},
				},
				count: {
					charlotte: true,
					intro: { content: "本局游戏已造成过#点火属性伤害" },
				},
			},
		},
		oldx_sbhuoji1: { audio: true },
		oldx_sbhuoji2: { audio: true },
		oldx_sbhuoji3: { audio: true },
		oldx_sbkanpo: {
			init(player) {
				if (!player.storage.oldx_sbkanpo) {
					player.storage.oldx_sbkanpo = [10, [], []];
					player.markSkill("oldx_sbkanpo");
				}
			},
			audio: "sbkanpo",
			trigger: { global: "roundStart" },
			filter(event, player) {
				var storage = player.storage.oldx_sbkanpo;
				return storage[0] || storage[1].length;
			},
			forced: true,
			locked: false,
			async content(event, trigger, player) {
				var storage = player.storage.oldx_sbkanpo;
				var sum = storage[0];
				storage[1] = [];
				player.markSkill("oldx_sbkanpo");
				if (!sum) return;
				const list = get.inpileVCardList(info => {
					if (info[2] == "sha" && info[3]) return false;
					return info[0] != "equip";
				});
				const func = () => {
					const event = get.event();
					const controls = [
						link => {
							const evt = get.event();
							if (evt.dialog && evt.dialog.buttons) {
								for (let i = 0; i < evt.dialog.buttons.length; i++) {
									const button = evt.dialog.buttons[i];
									button.classList.remove("selectable");
									button.classList.remove("selected");
									const counterNode = button.querySelector(".caption");
									if (counterNode) {
										counterNode.childNodes[0].innerHTML = ``;
									}
								}
								ui.selected.buttons.length = 0;
								game.check();
							}
							return;
						},
					];
					event.controls = [ui.create.control(controls.concat(["清除选择", "stayleft"]))];
				};
				if (event.isMine()) func();
				else if (event.isOnline()) event.player.send(func);
				var result = await player
					.chooseButton(["看破：是否记录至多" + get.cnNumber(sum) + "个牌名？", [list, "vcard"]], [1, sum], false)
					.set("ai", function (button) {
						if (ui.selected.buttons.length >= Math.max(3, game.countPlayer() / 2)) return 0;
						switch (button.link[2]) {
							case "wuxie":
								return 5 + Math.random();
							case "sha":
								return 5 + Math.random();
							case "tao":
								return 4 + Math.random();
							case "jiu":
								return 3 + Math.random();
							case "lebu":
								return 3 + Math.random();
							case "shan":
								return 4.5 + Math.random();
							case "wuzhong":
								return 4 + Math.random();
							case "shunshou":
								return 2.7 + Math.random();
							case "nanman":
								return 2 + Math.random();
							case "wanjian":
								return 1.6 + Math.random();
							default:
								return 1.5 + Math.random();
						}
					})
					.set("filterButton", button => {
						return !_status.event.names.includes(button.link[2]);
					})
					.set("names", storage[2])
					.set("custom", {
						add: {
							confirm(bool) {
								if (bool != true) return;
								const event = get.event().parent;
								if (event.controls) event.controls.forEach(i => i.close());
								if (ui.confirm) ui.confirm.close();
								game.uncheck();
							},
							button() {
								if (ui.selected.buttons.length) return;
								const event = get.event();
								if (event.dialog && event.dialog.buttons) {
									for (let i = 0; i < event.dialog.buttons.length; i++) {
										const button = event.dialog.buttons[i];
										const counterNode = button.querySelector(".caption");
										if (counterNode) {
											counterNode.childNodes[0].innerHTML = ``;
										}
									}
								}
								if (!ui.selected.buttons.length) {
									const evt = event.parent;
									if (evt.controls) evt.controls[0].classList.add("disabled");
								}
							},
						},
						replace: {
							button(button) {
								const event = get.event(),
									sum = event.sum;
								if (!event.isMine()) return;
								if (button.classList.contains("selectable") == false) return;
								if (ui.selected.buttons.length >= sum) return false;
								button.classList.add("selected");
								ui.selected.buttons.push(button);
								let counterNode = button.querySelector(".caption");
								const count = ui.selected.buttons.filter(i => i == button).length;
								if (counterNode) {
									counterNode = counterNode.childNodes[0];
									counterNode.innerHTML = `×${count}`;
								} else {
									counterNode = ui.create.caption(`<span style="font-size:24px; font-family:xinwei; text-shadow:#FFF 0 0 4px, #FFF 0 0 4px, rgba(74,29,1,1) 0 0 3px;">×${count}</span>`, button);
									counterNode.style.right = "5px";
									counterNode.style.bottom = "2px";
								}
								const evt = event.parent;
								if (evt.controls) evt.controls[0].classList.remove("disabled");
								game.check();
							},
						},
					})
					.set("sum", sum)
					.forResult();
				if (result.bool) {
					var names = result.links.map(link => link[2]);
					storage[0] -= names.length;
					storage[1] = names;
					storage[2] = names;
				} else storage[2] = [];
				player.markSkill("oldx_sbkanpo");
			},
			marktext: "破",
			intro: {
				markcount(storage) {
					return storage[1].length;
				},
				mark(dialog, content, player) {
					const storage = player.getStorage("oldx_sbkanpo");
					const sum = storage[0];
					const names = storage[1];
					dialog.addText("剩余可记录" + sum + "次牌名");
					if (player.isUnderControl(true) && names.length) {
						dialog.addText("当前记录牌名：");
						dialog.addSmall([names, "vcard"]);
					}
				},
			},
			group: "oldx_sbkanpo_kanpo",
			subSkill: {
				kanpo: {
					audio: "sbkanpo",
					trigger: { global: "useCard" },
					filter(event, player) {
						return event.player != player && player.storage.oldx_sbkanpo[1].includes(event.card.name);
					},
					prompt2(event, player) {
						return "移除" + get.translation(event.card.name) + "的记录，令" + get.translation(event.card) + "无效";
					},
					check(event, player) {
						var effect = 0;
						if (event.card.name == "wuxie" || event.card.name == "shan") {
							if (get.attitude(player, event.player) < -1) effect = -1;
						} else if (event.targets && event.targets.length) {
							for (var i = 0; i < event.targets.length; i++) {
								effect += get.effect(event.targets[i], event.card, event.player, player);
							}
						}
						if (effect < 0) {
							if (event.card.name == "sha") {
								var target = event.targets[0];
								if (target == player) return !player.countCards("h", "shan");
								else return target.hp == 1 || (target.countCards("h") <= 2 && target.hp <= 2);
							} else return true;
						}
						return false;
					},
					logTarget: "player",
					content() {
						player.storage.oldx_sbkanpo[1].remove(trigger.card.name);
						player.markSkill("oldx_sbkanpo");
						trigger.targets.length = 0;
						trigger.all_excluded = true;
						player.draw();
					},
				},
			},
		},
		oldx_sbguanxing: {
			audio: "sbguanxing",
			trigger: { player: ["phaseZhunbeiBegin", "phaseJieshuBegin"] },
			filter(event, player) {
				var bool = player.hasCard(card => card.hasGaintag("oldx_sbguanxing"), "s");
				if (event.name == "phaseZhunbei") {
					return bool || 7 - lib.skill.oldx_sbguanxing.getNum * player.countMark("oldx_sbguanxingx") > 0;
				}
				return bool && player.hasSkill("oldx_sbguanxing_on");
			},
			forced: true,
			locked: false,
			content() {
				"step 0";
				if (trigger.name == "phaseJieshu") {
					event.goto(2);
					return;
				}
				player.addMark("oldx_sbguanxingx", 1, false);
				var cards = player.getCards("s", card => card.hasGaintag("oldx_sbguanxing"));
				if (cards.length) player.loseToDiscardpile(cards);
				var num = player.countMark("oldx_sbguanxingx") - 1;
				event.num = Math.max(0, 7 - lib.skill.oldx_sbguanxing.getNum * num);
				("step 1");
				if (num) {
					var cards2 = get.cards(num);
					player.$gain2(cards2, false);
					game.log(player, "将", cards2, "置于了武将牌上");
					player.loseToSpecial(cards2, "oldx_sbguanxing").visible = true;
					player.markSkill("oldx_sbguanxing");
				}
				("step 2");
				var cards = player.getCards("s", card => card.hasGaintag("oldx_sbguanxing"));
				if (cards.length) {
					player
						.chooseToMove()
						.set("list", [["你的“星”", cards], ["牌堆顶"]])
						.set("prompt", "观星：点击将牌移动到牌堆顶")
						.set("processAI", function (list) {
							var cards = list[0][1].slice(),
								player = _status.event.player;
							var name = _status.event.getTrigger().name;
							var target = name == "phaseZhunbei" ? player : player.getNext();
							var judges = target.getCards("j");
							var top = [],
								att = get.sgn(get.attitude(player, target));
							if (judges.length && att != 0 && (target != player || !player.hasWuxie())) {
								for (var i = 0; i < judges.length; i++) {
									var judge = (card, num) => get.judge(card) * num;
									cards.sort((a, b) => judge(b, att) - judge(a, att));
									if (judge(cards[0], att) < 0) break;
									else top.unshift(cards.shift());
								}
							}
							return [cards, top];
						})
						.set("filterOk", function (moved) {
							return moved[1].length;
						});
				} else event._result = { bool: false };
				("step 3");
				if (result.bool) {
					var cards = result.moved[1];
					player.loseToDiscardpile(cards, ui.cardPile, "insert").log = false;
					game.log(player, "将", cards, "置于了牌堆顶");
				} else if (trigger.name == "phaseZhunbei") player.addTempSkill("oldx_sbguanxing_on");
			},
			getNum: 2,
			group: "oldx_sbguanxing_unmark",
			subSkill: {
				on: { charlotte: true },
				unmark: {
					trigger: { player: "loseAfter" },
					filter(event, player) {
						if (!event.ss || !event.ss.length) return false;
						return !player.countCards("s", card => card.hasGaintag("oldx_sbguanxing"));
					},
					charlotte: true,
					forced: true,
					silent: true,
					content() {
						player.unmarkSkill("oldx_sbguanxing");
					},
				},
			},
			marktext: "星",
			intro: {
				mark(dialog, storage, player) {
					var cards = player.getCards("s", card => card.hasGaintag("oldx_sbguanxing"));
					if (!cards || !cards.length) return;
					dialog.addAuto(cards);
				},
				markcount(storage, player) {
					return player.countCards("s", card => card.hasGaintag("oldx_sbguanxing"));
				},
				onunmark(storage, player) {
					var cards = player.getCards("s", card => card.hasGaintag("oldx_sbguanxing"));
					if (cards.length) player.loseToDiscardpile(cards);
				},
			},
			mod: {
				aiOrder(player, card, num) {
					var cards = player.getCards("s", card => card.hasGaintag("oldx_sbguanxing"));
					if (get.itemtype(card) == "card" && card.hasGaintag("oldx_sbguanxing")) return num + (cards.length > 1 ? 0.5 : -0.0001);
				},
			},
		},
		oldx_sbkongcheng: {
			audio: "sbkongcheng",
			trigger: { player: ["damageBegin3", "damageBegin4"] },
			filter(event, player, name) {
				if (!player.hasSkill("oldx_sbguanxing")) return false;
				const num = player.countCards("s", card => card.hasGaintag("oldx_sbguanxing"));
				if (name == "damageBegin3" && !num) return true;
				if (name == "damageBegin4" && num) return true;
				return false;
			},
			forced: true,
			content() {
				"step 0";
				var num = player.countCards("s", card => card.hasGaintag("oldx_sbguanxing"));
				if (!num && event.triggername == "damageBegin3") {
					trigger.increase("num");
				} else if (num && event.triggername == "damageBegin4") {
					player
						.judge(function (result) {
							if (get.number(result) <= get.player().countCards("s", card => card.hasGaintag("oldx_sbguanxing"))) return 2;
							return -1;
						})
						.set("judge2", result => result.bool)
						.set("callback", function () {
							if (event.judgeResult.number <= player.countCards("s", card => card.hasGaintag("oldx_sbguanxing"))) {
								event.getParent("oldx_sbkongcheng").getTrigger().decrease("num");
							}
						});
				}
			},
		},
		//谋孟获
		old_sbzaiqi: {
			audio: "sbzaiqi",
			trigger: {
				player: "phaseDiscardEnd",
			},
			chargeSkill: 7,
			filter(event, player) {
				return player.countCharge();
			},
			group: "old_sbzaiqi_backflow",
			direct: true,
			content() {
				"step 0";
				player.chooseTarget(get.prompt("old_sbzaiqi"), "选择任意名角色并消耗等量蓄力值，令这些角色选择一项：1.令你摸一张牌；2.弃置一张牌，然后你回复1点体力", [1, player.countMark("charge")]).set("ai", function (target) {
					var player = _status.event.player;
					var att = get.attitude(player, target);
					return 3 - get.sgn(att) + Math.abs(att / 1000);
				});
				("step 1");
				if (result.bool) {
					var targets = result.targets;
					targets.sortBySeat();
					event.targets = targets;
					player.logSkill("old_sbzaiqi", targets);
					player.removeCharge(targets.length);
				} else event.finish();
				("step 2");
				var target = targets.shift();
				event.target = target;
				if (!target.countCards("he")) event._result = { bool: false };
				else
					target
						.chooseToDiscard(get.translation(player) + "对你发动了【再起】", "是否弃置一张牌令其回复1点体力？或者点击“取消”，令该角色摸一张牌。", "he")
						.set("ai", card => {
							var eff = _status.event.eff,
								att = _status.event.att;
							if ((eff > 0 && att > 0) || (eff <= 0 && att < 0)) return 5.5 - get.value(card);
							return 0;
						})
						.set("eff", get.recoverEffect(player, player, target))
						.set("att", get.attitude(target, player));
				("step 3");
				target.line(player);
				if (result.bool) {
					player.recover();
				} else {
					player.draw();
				}
				game.delayex();
				if (targets.length) event.goto(2);
			},
			subSkill: {
				backflow: {
					audio: "sbzaiqi",
					trigger: {
						player: "enterGame",
						source: "damageSource",
						global: "phaseBefore",
					},
					usable: 1,
					filter(event, player) {
						if (event.name == "damage") return true;
						return event.name != "phase" || game.phaseNumber == 0;
					},
					forced: true,
					locked: false,
					content() {
						player.addCharge(trigger.name == "damage" ? 1 : 3);
					},
				},
			},
		},
		//谋祝融
		old_sblieren: {
			audio: "sblieren",
			trigger: { player: "useCardToPlayered" },
			filter(event, player) {
				return event.targets.length == 1 && event.card.name == "sha" && player.canCompare(event.target, true);
			},
			check(event, player) {
				return get.attitude(player, event.target) <= 0 || game.hasPlayer(current => get.damageEffect(current, player, player) > 0);
			},
			logTarget: "target",
			content() {
				"step 0";
				player.draw();
				("step 1");
				if (player.canCompare(trigger.target)) {
					player.chooseToCompare(trigger.target);
				} else {
					event.finish();
				}
				("step 2");
				if (result.bool) {
					player.addTempSkill("old_sblieren_damage");
					if (!trigger.card.storage) {
						trigger.card.storage = {};
					}
					trigger.card.storage.old_sblieren = [player, trigger.target];
				}
			},
			subSkill: {
				damage: {
					audio: "sblieren",
					trigger: { global: "useCardAfter" },
					filter(event, player) {
						return (
							event.card.name == "sha" &&
							event.card.storage &&
							event.card.storage.old_sblieren &&
							event.card.storage.old_sblieren[0] == player &&
							game.hasPlayer(current => {
								return !event.card.storage.old_sblieren.includes(current);
							})
						);
					},
					direct: true,
					charlotte: true,
					content() {
						"step 0";
						var target = trigger.card.storage.old_sblieren[1];
						player
							.chooseTarget("烈刃：是否对除" + get.translation(target) + "外的一名其他角色造成1点伤害？", (card, player, target) => {
								return target != _status.event.targeted && target != player;
							})
							.set("targeted", target)
							.set("ai", targetx => get.damageEffect(targetx, _status.event.player, _status.event.player));
						("step 1");
						if (result.bool) {
							var target = result.targets[0];
							player.logSkill("old_sblieren_damage", target);
							target.damage();
						}
					},
				},
			},
		},
		old_sbjuxiang: {
			audio: "sbjuxiang",
			trigger: {
				player: "phaseJieshuBegin",
			},
			forced: true,
			direct: true,
			filter(event, player) {
				return !player.hasHistory("useCard", evt => evt.card.name == "nanman") && (!_status.old_sbjuxiang_nanman || _status.old_sbjuxiang_nanman.length);
			},
			group: ["old_sbjuxiang_cancel", "old_sbjuxiang_gain"],
			content() {
				"step 0";
				if (!_status.old_sbjuxiang_nanman) {
					_status.old_sbjuxiang_nanman = [
						{ name: "nanman", number: 7, suit: "spade" },
						{ name: "nanman", number: 9, suit: "spade" },
						{ name: "nanman", number: 11, suit: "spade" },
						{ name: "nanman", number: 13, suit: "spade" },
						{ name: "nanman", number: 7, suit: "club" },
						{ name: "nanman", number: 9, suit: "club" },
						{ name: "nanman", number: 11, suit: "club" },
						{ name: "nanman", number: 13, suit: "club" },
					];
					game.broadcastAll(function () {
						if (!lib.inpile.includes("nanman")) lib.inpile.add("nanman");
					});
				}
				player.chooseTarget("请选择【巨象】的目标", "将游戏外的随机一张【南蛮入侵】交给一名角色（剩余" + get.cnNumber(_status.old_sbjuxiang_nanman.length) + "张）", true).set("ai", target => {
					var player = _status.event.player;
					return Math.max(0, target.getUseValue({ name: "nanman" })) * get.attitude(player, target) * (target == player ? 0.5 : 1);
				});
				("step 1");
				if (result.bool) {
					var target = result.targets[0];
					player.logSkill("old_sbjuxiang", target);
					if (!_status.old_sbjuxiang_nanman.length) return;
					var info = _status.old_sbjuxiang_nanman.randomRemove();
					var card = game.createCard2(info);
					target.gain(card, "gain2").giver = player;
				}
			},
			ai: {
				expose: 0.05,
				effect: {
					target(card) {
						if (card.name == "nanman") return [0, 1, 0, 0];
					},
				},
			},
			subSkill: {
				cancel: {
					audio: "sbjuxiang",
					trigger: { target: "useCardToBefore" },
					forced: true,
					priority: 15,
					filter(event, player) {
						return event.card.name == "nanman";
					},
					content() {
						trigger.cancel();
					},
				},
				gain: {
					audio: "sbjuxiang",
					trigger: { global: "useCardAfter" },
					forced: true,
					filter(event, player) {
						return event.card.name == "nanman" && event.player != player && event.cards.filterInD().length;
					},
					content() {
						player.gain(trigger.cards.filterInD(), "gain2");
					},
				},
			},
		},
		//关羽
		//矢
		old_sbwusheng: {
			audio: "sbwusheng",
			trigger: { player: "phaseUseBegin" },
			filter(event, player) {
				return game.hasPlayer(target => target != player && !target.isZhu2());
			},
			direct: true,
			async content(event, trigger, player) {
				var result = await player
					.chooseTarget(get.prompt("old_sbwusheng"), "选择一名非主公的其他角色，本阶段对其使用【杀】无距离和次数限制，使用【杀】指定其为目标后摸一张牌，对其使用五张【杀】后不能对其使用【杀】", (card, player, target) => {
						return target != player && !target.isZhu2();
					})
					.set("ai", target => {
						var player = _status.event.player;
						return get.effect(target, { name: "sha" }, player, player);
					})
					.forResult();
				if (result.bool) {
					var target = result.targets[0];
					player.logSkill("old_sbwusheng", target);
					if (get.mode() !== "identity" || player.identity !== "nei") player.addExpose(0.25);
					player.addTempSkill("old_sbwusheng_effect", { player: "phaseUseAfter" });
					player.storage.old_sbwusheng_effect[target.playerid] = 0;
				}
			},
			group: "old_sbwusheng_wusheng",
			subSkill: {
				wusheng: {
					audio: "sbwusheng",
					enable: ["chooseToUse", "chooseToRespond"],
					hiddenCard(player, name) {
						return name == "sha" && player.countCards("hs");
					},
					filter(event, player) {
						return event.filterCard(get.autoViewAs({ name: "sha" }, "unsure"), player, event) || lib.inpile_nature.some(nature => event.filterCard(get.autoViewAs({ name: "sha", nature }, "unsure"), player, event));
					},
					chooseButton: {
						dialog(event, player) {
							var list = [];
							if (event.filterCard({ name: "sha" }, player, event)) list.push(["基本", "", "sha"]);
							for (var j of lib.inpile_nature) {
								if (event.filterCard({ name: "sha", nature: j }, player, event)) list.push(["基本", "", "sha", j]);
							}
							var dialog = ui.create.dialog("武圣", [list, "vcard"], "hidden");
							dialog.direct = true;
							return dialog;
						},
						check(button) {
							var player = _status.event.player;
							var card = { name: button.link[2], nature: button.link[3] };
							if (
								_status.event.getParent().type == "phase" &&
								game.hasPlayer(function (current) {
									return player.canUse(card, current) && get.effect(current, card, player, player) > 0;
								})
							) {
								switch (button.link[2]) {
									case "sha":
										if (button.link[3] == "fire") return 2.95;
										else if (button.link[3] == "thunder" || button.link[3] == "ice") return 2.92;
										else return 2.9;
								}
							}
							return 1 + Math.random();
						},
						backup(links, player) {
							return {
								audio: "sbwusheng",
								filterCard: true,
								check(card) {
									return 6 - get.value(card);
								},
								viewAs: { name: links[0][2], nature: links[0][3] },
								position: "hs",
								popname: true,
							};
						},
						prompt(links, player) {
							return "将一张手牌当作" + get.translation(links[0][3] || "") + "【" + get.translation(links[0][2]) + "】" + (_status.event.name == "chooseToUse" ? "使用" : "打出");
						},
					},
					ai: {
						respondSha: true,
						fireAttack: true,
						skillTagFilter(player, tag) {
							if (!player.countCards("hs")) return false;
						},
						order(item, player) {
							if (player && _status.event.type == "phase") {
								var max = 0;
								if (lib.inpile_nature.some(i => player.getUseValue({ name: "sha", nature: i }) > 0)) {
									var temp = get.order({ name: "sha" });
									if (temp > max) max = temp;
								}
								if (max > 0) max += 0.3;
								return max;
							}
							return 4;
						},
						result: { player: 1 },
					},
				},
				effect: {
					charlotte: true,
					onremove: true,
					init(player) {
						if (!player.storage.old_sbwusheng_effect) player.storage.old_sbwusheng_effect = {};
					},
					mod: {
						targetInRange(card, player, target) {
							if (card.name == "sha" && typeof player.storage.old_sbwusheng_effect[target.playerid] == "number") return true;
						},
						cardUsableTarget(card, player, target) {
							if (card.name !== "sha" || typeof player.storage.old_sbwusheng_effect[target.playerid] !== "number") return;
							return player.storage.old_sbwusheng_effect[target.playerid] < 5;
						},
						playerEnabled(card, player, target) {
							if (card.name != "sha" || typeof player.storage.old_sbwusheng_effect[target.playerid] != "number") return;
							if (player.storage.old_sbwusheng_effect[target.playerid] >= 5) return false;
						},
					},
					audio: "sbwusheng",
					trigger: { player: ["useCardToPlayered", "useCardAfter"] },
					filter(event, player) {
						if (event.card.name != "sha") return false;
						if (event.name == "useCard") return event.targets.some(target => typeof player.storage.old_sbwusheng_effect[target.playerid] == "number");
						return typeof player.storage.old_sbwusheng_effect[event.target.playerid] == "number";
					},
					direct: true,
					content() {
						if (trigger.name == "useCard") {
							var targets = trigger.targets.filter(target => typeof player.storage.old_sbwusheng_effect[target.playerid] == "number");
							targets.forEach(target => player.storage.old_sbwusheng_effect[target.playerid]++);
						} else {
							player.logSkill("old_sbwusheng_effect", trigger.target);
							player.draw();
						}
					},
				},
			},
			ai: { threaten: 114514 },
		},
		//谋赵云
		old_sblongdan: {
			audio: "sblongdan",
			enable: ["chooseToUse", "chooseToRespond"],
			chargeSkill: 4,
			filter(event, player) {
				if (event.type == "wuxie" || !player.countCharge()) {
					return false;
				}
				var marked = player.hasSkill("old_sblongdan_mark", null, null, false);
				for (var name of lib.inpile) {
					if (!marked && name != "sha" && name != "shan") {
						continue;
					}
					if (get.type(name) != "basic") {
						continue;
					}
					if (player.hasCard(lib.skill.old_sblongdan.getFilter(name, player), "hs")) {
						if (event.filterCard(get.autoViewAs({ name }, "unsure"), player, event)) {
							return true;
						}
						if (marked && name == "sha") {
							for (var nature of lib.inpile_nature) {
								if (event.filterCard(get.autoViewAs({ name, nature }, "unsure"), player, event)) {
									return true;
								}
							}
						}
					}
				}
				return false;
			},
			chooseButton: {
				dialog(event, player) {
					var list = [];
					var marked = player.hasSkill("old_sblongdan_mark", null, null, false);
					for (var name of lib.inpile) {
						if (!marked && name != "sha" && name != "shan") {
							continue;
						}
						if (get.type(name) != "basic") {
							continue;
						}
						if (player.hasCard(lib.skill.old_sblongdan.getFilter(name, player), "hs")) {
							if (event.filterCard(get.autoViewAs({ name }, "unsure"), player, event)) {
								list.push(["基本", "", name]);
							}
							if (marked && name == "sha") {
								for (var nature of lib.inpile_nature) {
									if (event.filterCard(get.autoViewAs({ name, nature }, "unsure"), player, event)) {
										list.push(["基本", "", name, nature]);
									}
								}
							}
						}
					}
					const dialog = ui.create.dialog("龙胆", [list, "vcard"], "hidden");
					dialog.direct = true;
					return dialog;
				},
				check(button) {
					if (_status.event.getParent().type != "phase") {
						return 1;
					}
					var player = _status.event.player,
						card = { name: button.link[2], nature: button.link[3] };
					if (card.name == "jiu" && Math.min(player.countMark("charge"), player.countCards("h", { type: "basic" })) < 2) {
						return 0;
					}
					return player.getUseValue(card, null, true);
				},
				backup(links, player) {
					return {
						audio: "sblongdan",
						viewAs: {
							name: links[0][2],
							nature: links[0][3],
						},
						filterCard: lib.skill.old_sblongdan.getFilter(links[0][2], player),
						position: "he",
						popname: true,
						check(card) {
							return 6 / Math.max(1, get.value(card));
						},
						precontent() {
							player.removeCharge();
							player.addTempSkill("old_sblongdan_draw");
						},
					};
				},
				prompt(links, player) {
					var marked = player.hasSkill("old_sblongdan_mark", null, null, false);
					var card = {
						name: links[0][2],
						nature: links[0][3],
						isCard: true,
					};
					if (marked) {
						return "将一张基本牌当做" + get.translation(card) + "使用";
					}
					return "将一张" + (card.name == "sha" ? "闪" : "杀") + "当做" + get.translation(card) + "使用";
				},
			},
			hiddenCard(player, name) {
				if (get.type(name) != "basic" || !player.countCharge()) {
					return false;
				}
				var marked = player.hasSkill("old_sblongdan_mark", null, null, false);
				if (!marked && name != "sha" && name != "shan") {
					return false;
				}
				return player.hasCard(lib.skill.old_sblongdan.getFilter(name, player), "hs");
			},
			ai: {
				respondSha: true,
				respondShan: true,
				skillTagFilter(player, tag) {
					return lib.skill.old_sblongdan.hiddenCard(player, tag == "respondSha" ? "sha" : "shan");
				},
				order: 9,
				result: {
					player(player) {
						if (_status.event.dying) {
							return get.attitude(player, _status.event.dying);
						}
						return 1;
					},
				},
			},
			getFilter(name, player) {
				if (!player.hasSkill("old_sblongdan_mark", null, null, false)) {
					if (name == "sha") {
						return { name: "shan" };
					}
					if (name == "shan") {
						return { name: "sha" };
					}
					return () => false;
				}
				return { type: "basic" };
			},
			group: "old_sblongdan_charge",
			derivation: "old_sblongdan_shabi",
			onremove(player) {
				player.removeSkill("old_sblongdan_mark");
			},
			subSkill: {
				backup: {},
				mark: { charlotte: true },
				draw: {
					charlotte: true,
					trigger: { player: ["useCardAfter", "respondAfter"] },
					forced: true,
					popup: false,
					filter(event, player) {
						return event.skill == "old_sblongdan_backup";
					},
					content() {
						player.draw();
					},
				},
				charge: {
					audio: "sblongdan",
					trigger: {
						global: ["phaseBefore", "phaseEnd"],
						player: "enterGame",
					},
					forced: true,
					filter(event, player, name) {
						if (!player.countCharge(true)) {
							return false;
						}
						return name != "phaseBefore" || game.phaseNumber == 0;
					},
					content() {
						player.addCharge();
					},
				},
			},
		},
		old_sbjizhu: {
			audio: "sbjizhu",
			logAudio: () => 2,
			trigger: { player: "phaseZhunbeiBegin" },
			async cost(event, trigger, player) {
				event.result = await player
					.chooseTarget(lib.filter.notMe, get.prompt(event.skill), "和一名其他角色进行“协力”")
					.set("ai", function (target) {
						return get.threaten(target) * Math.sqrt(1 + target.countCards("h")) * (target.isTurnedOver() || target.hasJudge("lebu") ? 0.1 : 1);
					})
					.forResult();
			},
			async content(event, trigger, player) {
				const target = event.targets[0];
				await player
					.chooseCooperationFor(target, "old_sbjizhu")
					.set("ai", function (button) {
						var base = 0;
						switch (button.link) {
							case "cooperation_damage":
								base = 0.1;
								break;
							case "cooperation_draw":
								base = 0.6;
								break;
							case "cooperation_discard":
								base = 0.1;
								break;
							case "cooperation_use":
								base = 0.6;
								break;
						}
						return base + Math.random();
					})
					.forResult();
				player.addAdditionalSkill("cooperation", "old_sbjizhu_effect");
				await game.delayx();
			},
			subSkill: {
				effect: {
					audio: "sbjizhu3.mp3",
					charlotte: true,
					trigger: { global: "phaseJieshuBegin" },
					forced: true,
					logTarget: "player",
					filter(event, player) {
						return player.checkCooperationStatus(event.player, "old_sbjizhu") && ["old_sblongdan", "jdlongdan"].some(skill => player.hasSkill(skill, null, null, false));
					},
					content() {
						game.log(player, "和", trigger.player, "的协力成功");
						player.addTempSkill("old_sblongdan_mark", player.hasSkill("jdlongdan", null, null, false) ? { player: "phaseAfter" } : { player: "phaseJieshuBegin" });
						game.delayx();
					},
				},
			},
			ai: {
				combo: "old_sblongdan",
			},
		},
		//谋法正
		old_sbxuanhuo: {
			audio: "sbxuanhuo",
			enable: "phaseUse",
			usable: 1,
			group: "old_sbxuanhuo_rob",
			filterTarget(card, player, target) {
				return !target.hasMark("old_sbxuanhuo_mark") && player != target;
			},
			filterCard: true,
			position: "he",
			discard: false,
			lose: false,
			delay: false,
			onremove(player) {
				delete player.storage.old_sbxuanhuo;
				player.unmarkSkill("old_sbxuanhuo");
			},
			check(card) {
				return 6.5 - get.value(card);
			},
			async content(event, trigger, player) {
				const target = event.targets[0],
					cards = event.cards;
				await player.give(cards, target);
				if (player.storage[event.name] && player.storage[event.name][target.playerid]) {
					delete player.storage[event.name][target.playerid];
				}
				target.addMark(event.name + "_mark");
				var history = target.getAllHistory("lose");
				if (history.length) {
					history[history.length - 1][event.name + "_mark"] = true;
				}
			},
			getNum(current, skill, mark) {
				var num = 0;
				var history = current.getAllHistory("lose");
				if (history.length) {
					for (var i = history.length - 1; i >= 0; i--) {
						var evt = history[i];
						if (evt[mark]) {
							break;
						}
						if (typeof skill == "string") {
							if (evt.getParent(2).name == skill || evt.getParent(3).name == skill) {
								num += evt.cards2.length;
							}
						} else {
							var evtx = evt.getParent(),
								player = skill;
							if (evtx.name == "gain") {
								var cards = evtx.cards;
								if (evtx.player == player && cards.length > 0) {
									num += cards.length;
								}
							} else if (evtx.name == "loseAsync") {
								if (evtx.type != "gain" || evtx.giver) {
									return false;
								}
								var cards = evtx.getl(current).cards2;
								var cardsx = evtx.getg(player);
								if (cardsx.length > 0) {
									num += cardsx.length;
								}
							}
						}
					}
				}
				return num;
			},
			ai: {
				order: 9,
				result: {
					target(player, target) {
						return -Math.sqrt(Math.max(target.hp, 1));
					},
				},
			},
			marktext: "惑",
			intro: {
				content(storage, player) {
					if (!storage || get.is.empty(storage)) {
						return "未得到过牌";
					}
					var map = _status.connectMode ? lib.playerOL : game.playerMap;
					var str = "已得到";
					for (var i in storage) {
						str += get.translation(map[i]) + "的" + get.cnNumber(storage[i]) + "张牌、";
					}
					return str.slice(0, -1);
				},
			},
			subSkill: {
				mark: {
					marktext: "眩",
					intro: {
						name: "眩惑",
						name2: "眩",
						markcount: () => 0,
						content: "已获得“眩”标记",
					},
				},
				rob: {
					audio: "sbxuanhuo",
					trigger: {
						global: ["gainAfter", "loseAsyncAfter"],
					},
					filter(event, player, name, target) {
						return target?.isIn();
					},
					getIndex(event, player) {
						const evt = event.getParent("phaseDraw");
						if (evt?.name == "phaseDraw") {
							return false;
						}
						return game
							.filterPlayer(current => {
								if (!event.getg(current).length || !current.hasMark("old_sbxuanhuo_mark")) {
									return false;
								}
								if (evt?.player == current) {
									return false;
								}
								if (lib.skill.old_sbxuanhuo.getNum(current, "old_sbxuanhuo_rob", "old_sbxuanhuo_mark") >= 5) {
									return false;
								}
								return current.hasCard(card => lib.filter.canBeGained(card, current, player), "he");
							})
							.sortBySeat();
					},
					logTarget(event, player, triggername, target) {
						return target;
					},
					forced: true,
					locked: false,
					async content(event, trigger, player) {
						const target = event.targets[0],
							hs = target.getCards("h", card => lib.filter.canBeGained(card, target, player));
						if (hs.length) {
							await player.gain(hs.randomGet(), target, "giveAuto");
							if (!player.storage.old_sbxuanhuo) {
								player.storage.old_sbxuanhuo = {};
							}
							player.storage.old_sbxuanhuo[target.playerid] = lib.skill.old_sbxuanhuo.getNum(target, "old_sbxuanhuo_rob", "old_sbxuanhuo_mark");
							player.markSkill("old_sbxuanhuo");
						}
					},
				},
			},
		},
		old_sbenyuan: {
			audio: "sbenyuan",
			trigger: { player: "phaseZhunbeiBegin" },
			filter(event, player, name, target) {
				return target?.isIn();
			},
			getIndex(event, player) {
				return game.filterPlayer(target => target.hasMark("old_sbxuanhuo_mark")).sortBySeat();
			},
			logTarget(event, player, triggername, target) {
				return target;
			},
			logAudio: index => (typeof index === "number" ? "old_sbenyuan" + index + ".mp3" : 2),
			direct: true,
			locked: true,
			async content(event, trigger, player) {
				const target = event.targets[0];
				target.clearMark("old_sbxuanhuo_mark");
				for (const current of game.players) {
					const storage = current.storage.old_sbxuanhuo;
					if (storage && storage[target.playerid]) {
						delete storage[target.playerid];
					}
					if (storage && get.is.empty(storage)) {
						delete current.storage.old_sbxuanhuo;
						current.unmarkSkill("old_sbxuanhuo");
					}
				}
				const num = lib.skill.old_sbxuanhuo.getNum(target, player, "old_sbxuanhuo_mark");
				player.logSkill("old_sbenyuan", target, null, null, [num >= 3 ? 1 : 2]);
				if (num >= 3) {
					const num = Math.min(player.countCards("he"), 2);
					if (num) {
						await player.chooseToGive(target, `恩怨：交给${get.translation(target)}${get.cnNumber(num)}张牌`, true, num, "he");
					}
				} else {
					await target.loseHp();
					await player.recover();
				}
			},
			ai: {
				combo: "old_sbxuanhuo",
			},
		},
		//谋徐晃
		old_sbduanliang: {
			audio: "sbduanliang",
			enable: "phaseUse",
			usable: 2,
			logAudio: () => 1,
			filterTarget: lib.filter.notMe,
			content() {
				"step 0";
				player
					.chooseToDuiben(target)
					.set("title", "谋弈")
					.set("namelist", ["固守城池", "突出重围", "围城断粮", "擂鼓进军"])
					.set("translationList", [`以防止${get.translation(player)}通过此技能对你使用【决斗】`, `以防止${get.translation(player)}通过此技能对你使用【兵粮寸断】`, `若成功，将牌堆顶的牌当做【兵粮寸断】对${get.translation(target)}使用`, `若成功，视为对${get.translation(target)}使用【决斗】`])
					.set("ai", button => {
						var source = _status.event.getParent().player,
							target = _status.event.getParent().target;
						if (get.effect(target, { name: "juedou" }, source, source) >= 10 && button.link[2] == "db_def2" && Math.random() < 0.5) return 10;
						return 1 + Math.random();
					});
				("step 1");
				if (result.bool) {
					if (result.player == "db_def1") {
						if (target.hasJudge("bingliang")) player.gainPlayerCard(target, "he", true);
						else {
							if (ui.cardPile.childNodes.length > 0) {
								if (player.canUse(get.autoViewAs({ name: "bingliang" }, [ui.cardPile.firstChild]), target, false)) {
									player.useCard({ name: "bingliang" }, target, get.cards());
								}
							}
						}
					} else {
						var card = { name: "juedou", isCard: true };
						if (player.canUse(card, target)) player.useCard(card, target);
					}
				}
			},
			ai: {
				threaten: 1.2,
				order: 5.5,
				result: {
					player: 1,
					target: -1,
				},
			},
			subSkill: {
				true1: {
					audio: "sbduanliang",
					logAudio: () => "sbduanliang2.mp3",
				},
				true2: {
					audio: "sbduanliang",
					logAudio: () => "sbduanliang3.mp3",
				},
				false: {
					audio: "sbduanliang",
					logAudio: () => "sbduanliang4.mp3",
				},
			},
		},
		//谋袁绍
		old_sbluanji: {
			audio: "sbluanji",
			enable: "phaseUse",
			trigger: { global: "respond" },
			viewAs: { name: "wanjian" },
			forced: true,
			locked: false,
			filter(event, player) {
				if (event.name == "chooseToUse") return player.countCards("hs") > 1 && !player.hasSkill("old_sbluanji_used");
				var evt = event.getParent(2);
				return evt.name == "wanjian" && evt.getParent().player == player && event.player != player;
			},
			filterCard: true,
			selectCard: 2,
			position: "hs",
			prompt: "将两张手牌当【万箭齐发】使用",
			check(card) {
				var player = _status.event.player;
				var targets = game.filterPlayer(function (current) {
					return player.canUse("wanjian", current);
				});
				var num = 0;
				for (var i = 0; i < targets.length; i++) {
					var eff = get.sgn(get.effect(targets[i], { name: "wanjian" }, player, player));
					if (targets[i].hp == 1) {
						eff *= 1.5;
					}
					if (get.attitude(player, targets[i]) == 0 || targets[i].group == "qun") {
						eff += 0.5;
					}
					num += eff;
				}
				if (!player.needsToDiscard(-1)) {
					if (targets.length >= 7) {
						if (num < 1) return 0;
					} else if (targets.length >= 5) {
						if (num < 0.5) return 0;
					}
				}
				return 6 - get.value(card);
			},
			content() {
				player.draw();
			},
			precontent() {
				player.addTempSkill("old_sbluanji_used", "phaseUseAfter");
			},
			ai: {
				threaten: 1.6,
			},
			subSkill: { used: { charlotte: true } },
		},
		old_sbxueyi: {
			audio: "sbxueyi",
			trigger: { player: "useCardToTargeted" },
			filter(event, player) {
				return player.hasZhuSkill("old_sbxueyi") && event.target != player && event.target.group == "qun";
			},
			zhuSkill: true,
			forced: true,
			logTarget: "target",
			content() {
				player.draw();
			},
			mod: {
				maxHandcard(player, num) {
					if (player.hasZhuSkill("old_sbxueyi")) {
						return num + 2 * game.countPlayer(current => player != current && current.group == "qun");
					}
				},
			},
			ai: {
				effect: {
					player_use(card, player, target) {
						if (player != target && target && target.group == "qun" && player.hasZhuSkill("old_sbxueyi") && player.countSkill("old_sbxueyi") < 2) return [1, 0.6];
					},
				},
			},
		},
		//谋张角
		old_sbleiji: {
			audio: "sbleiji",
			enable: "phaseUse",
			filter(event, player) {
				return player.countMark("old_sbguidao") >= 4;
			},
			filterTarget: lib.filter.notMe,
			content() {
				player.removeMark("old_sbguidao", 4);
				target.damage("thunder");
			},
			ai: {
				combo: "old_sbguidao",
				order: 9,
				result: {
					target(player, target) {
						return get.damageEffect(target, player, target, "thunder");
					},
				},
			},
		},
		old_sbguidao: {
			audio: "sbguidao",
			trigger: {
				global: ["phaseBefore", "damageEnd"],
				player: "enterGame",
			},
			forced: true,
			locked: false,
			group: "old_sbguidao_defend",
			filter(event, player) {
				if (player.hasSkill("old_sbguidao_banned") || player.countMark("old_sbguidao") >= 8) return false;
				if (event.name == "damage") return event.hasNature() && !player.hasSkill("old_sbguidao_forbid");
				return event.name != "phase" || game.phaseNumber == 0;
			},
			content() {
				var num = 2;
				if (trigger.name != "damage") num += 2;
				num = Math.min(8 - player.countMark("old_sbguidao"), num);
				player.addMark("old_sbguidao", num);
			},
			marktext: "兵",
			intro: {
				name: "道兵",
				name2: "道兵",
				content: "共有$枚“道兵”",
			},
			subSkill: {
				defend: {
					audio: "sbguidao",
					trigger: { player: "damageBegin4" },
					filter(event, player) {
						return player.countMark("old_sbguidao") >= 2;
					},
					prompt2: "弃2枚“道兵”，防止伤害",
					check(event, player) {
						return event.num >= 2 || player.hp <= event.num;
					},
					content() {
						trigger.cancel();
						player.removeMark("old_sbguidao", 2);
						if (player != _status.currentPhase) {
							player.addTempSkill("old_sbguidao_banned", { player: "phaseBegin" });
						}
					},
				},
				banned: {
					charlotte: true,
					mark: true,
					marktext: '<span style="text-decoration: line-through;">道</span>',
					intro: { content: "孩子们，我不能获得道兵了" },
				},
			},
		},
		old_sbhuangtian: {
			audio: "sbhuangtian",
			trigger: {
				player: "phaseBegin",
			},
			forced: true,
			zhuSkill: true,
			group: "old_sbhuangtian_mark",
			filter(event, player) {
				if (player.phaseNumber > 1 || game.phaseNumber > 1) return false;
				if (!player.hasZhuSkill("old_sbhuangtian")) return false;
				return (
					!game.hasPlayer(function (current) {
						return current.countCards("hej", "taipingyaoshu");
					}) &&
					!Array.from(ui.cardPile.childNodes)
						.concat(Array.from(ui.discardPile.childNodes))
						.concat(Array.from(ui.ordering.childNodes))
						.map(i => i.name)
						.includes("taipingyaoshu")
				);
			},
			content() {
				"step 0";
				if (!lib.inpile.includes("taipingyaoshu")) {
					lib.inpile.push("taipingyaoshu");
				}
				event.card = game.createCard2("taipingyaoshu", "heart", 3);
				("step 1");
				if (card) player.equip(card);
			},
			subSkill: {
				mark: {
					audio: "sbhuangtiang",
					trigger: { global: "damageSource" },
					forced: true,
					zhuSkill: true,
					filter(event, player) {
						if (!player.hasZhuSkill("old_sbhuangtian") || !player.hasSkill("old_sbguidao", null, false, false)) return false;
						if (!event.source || player == event.source || event.source.group != "qun") return false;
						if (player.hasSkill("old_sbguidao") && player.countMark("old_sbguidao") >= 8) return false;
						if (player.countMark("old_sbhuangtian_count") >= 4) return false;
						return true;
					},
					content() {
						var num = Math.min(8 - player.countMark("old_sbhuangtian_count"), 2);
						player.addMark("old_sbguidao", num);
						player.addTempSkill("old_sbhuangtian_count", "roundStart");
						player.addMark("old_sbhuangtian_count", num, false);
					},
				},
				count: { onremove: true },
			},
		},
		//谋韩当
		old_sbjiefan: {
			audio: "sbjiefan",
			enable: "phaseUse",
			usable: 1,
			filterTarget: true,
			async content(event, trigger, player) {
				const { target } = event;
				const targets = game.filterPlayer(current => {
					return current.inRange(target);
				});
				const count = targets.length + 2;
				if (count <= 2) {
					target.chat("没人打得到我喔！");
					return;
				}
				const controls = ["选项一", "选项二", "背水！"];
				const { control } = await target
					.chooseControl(controls)
					.set("choiceList", [`令所有攻击范围内含有你的角色依次弃置两张牌（${get.translation(targets)}）`, `你摸等同于攻击范围内含有你的角色数+2的牌（${get.cnNumber(count)}张牌）`, `背水！令${get.translation(player)}的〖解烦〗失效直到其杀死一名角色，然后你依次执行上述所有选项`])
					.set("ai", () => {
						return get.event().choice;
					})
					.set(
						"choice",
						(() => {
							const eff1 = targets
								.map(current => {
									let position = "h";
									if (!current.countCards("h")) {
										position += "e";
									}
									return get.effect(current, { name: "guohe_copy", position }, target, target);
								})
								.reduce((p, c) => p + c, 0);
							const eff2 = (get.effect(target, { name: "wuzhong" }, target) * count) / 2;
							if (
								game.hasPlayer(current => {
									const att1 = get.attitude(player, current),
										att2 = get.attitude(target, current);
									if (att1 < 0 && att2 < 0) {
										return current.getHp() <= 1;
									}
									return false;
								}) &&
								eff1 > 15 &&
								eff2 > 0
							) {
								return "背水！";
							}
							if (eff1 > 3 * eff2) {
								return "选项一";
							}
							return "选项二";
						})()
					)
					.forResult();
				game.log(target, "选择了", "#g" + control);
				if (control !== "选项二") {
					for (const current of targets) {
						target.line(current, "thunder");
						await current.chooseToDiscard("解烦：请弃置两张牌", 2, "he", true);
					}
				}
				if (control !== "选项一") {
					await target.draw(count);
				}
				if (control === "背水！") {
					player.tempBanSkill("old_sbjiefan", { source: "die" });
				}
			},
			ai: {
				order: 8,
				result: {
					target(player, target) {
						const targets = game.filterPlayer(current => {
							return current.inRange(target);
						});
						return Math.min(2, targets.length) / 2;
					},
				},
			},
		},
		//谋贾诩
		old_sbwansha: {
			audio: "sbwansha",
			trigger: { global: "dying" },
			filter(event, player) {
				const position = player.storage.old_sbwansha ? "hej" : "h";
				return event.player.countCards(position);
			},
			check(event, player) {
				return get.attitude(player, event.player) <= 0;
			},
			logTarget: "player",
			async content(event, trigger, player) {
				const target = trigger.player,
					position = player.storage.old_sbwansha ? "hej" : "h";
				const bool1 = player.storage.old_sbwansha,
					num = bool1 ? 3 : 2,
					prompt = `选择其中〇至${get.cnNumber(num)}张牌`;
				let result;
				result = await player.choosePlayerCard(target, position, [0, num], true, prompt).set("visible", true).forResult();
				if (!result?.cards?.length) return;
				let { cards } = result;
				result = await target
					.chooseControl()
					.set("choiceList", [`令${get.translation(player)}将${player === target ? get.translation(cards) : "其选择的牌"}分配给其他角色`, `弃置所有未被${get.translation(player)}选择的牌`])
					.set("ai", () => {
						return get.event().goon ? 0 : 1;
					})
					.set(
						"goon",
						(() => {
							const att = get.sgnAttitude(target, player),
								hs = target.countCards(position);
							if (att > 0 || hs > 5) return true;
							if (hs < 2) return false;
							let num;
							if (att === 0) {
								num = Math.min(hs, 2);
								return hs > 2 * num;
							}
							num = Math.min(hs, 0.5 + 1.2 * Math.random());
							return hs > 3 * num;
						})()
					)
					.forResult();
				if (result?.index === 0 && cards.length) {
					if (_status.connectMode) game.broadcastAll(() => (_status.noclearcountdown = true));
					let given_map = {};
					while (cards.length) {
						let result;
						if (cards.length == 1) result = { bool: true, links: cards.slice() };
						else {
							result = await player
								.chooseCardButton("完杀：请选择要分配的牌", cards, [1, cards.length], true)
								.set("ai", button => {
									if (!ui.selected.buttons.length) return get.buttonValue(button);
									return 0;
								})
								.forResult();
						}
						if (!result?.links?.length) return;
						const gives = result.links;
						const result2 = await player
							.chooseTarget("选择获得" + get.translation(gives) + "的角色", true, (card, player, target) => {
								return target != get.event().getTrigger().player;
							})
							.set("ai", target => {
								return get.attitude(get.event().player, target) * get.sgn(get.sgn(get.event().goon) + 0.5);
							})
							.set(
								"goon",
								gives.reduce((sum, card) => sum + get.value(card), 0)
							)
							.forResult();
						if (result2?.bool && result2?.targets?.length) {
							cards.removeArray(gives);
							const id = result2.targets[0].playerid;
							if (!given_map[id]) given_map[id] = [];
							given_map[id].addArray(gives);
						} else return;
					}
					if (_status.connectMode) game.broadcastAll(() => delete _status.noclearcountdown);
					let list = [];
					for (const i in given_map) {
						const source = (_status.connectMode ? lib.playerOL : game.playerMap)[i];
						player.line(source, "green");
						game.log(source, "获得了", given_map[i]);
						list.push([source, given_map[i]]);
					}
					await game
						.loseAsync({
							gain_list: list,
							giver: player,
							animate: "draw",
						})
						.setContent("gaincardMultiple");
				} else if (result?.index === 1) {
					const discard = target.getCards(position).removeArray(cards);
					if (discard.length) await target.discard(discard);
				}
			},
			global: "old_sbwansha_global",
			subSkill: {
				global: {
					mod: {
						cardEnabled(card, player) {
							var source = _status.currentPhase;
							if (card.name == "tao" && source?.isIn() && source != player && source.hasSkill("old_sbwansha") && !player.isDying()) return false;
						},
						cardSavable(card, player) {
							var source = _status.currentPhase;
							if (card.name == "tao" && source?.isIn() && source != player && source.hasSkill("old_sbwansha") && !player.isDying()) return false;
						},
					},
				},
			},
		},
		old_sbluanwu: {
			audio: "sbluanwu",
			logAudio: () => 2,
			inherit: "luanwu",
			async contentBefore(event, trigger, player) {
				player.addTempSkill(event.skill + "_add");
				player.awakenSkill(event.skill);
			},
			async content(event, trigger, player) {
				const { target } = event;
				const result = await target
					.chooseToUse(
						"乱武：使用一张【杀】或失去1点体力",
						function (card) {
							if (get.name(card) != "sha") {
								return false;
							}
							return lib.filter.filterCard.apply(this, arguments);
						},
						function (card, player, target) {
							if (player == target || target == get.event().targetx) {
								return false;
							}
							const dist = get.distance(player, target);
							if (dist > 1) {
								if (game.hasPlayer(current => current != player && get.distance(player, current) < dist)) {
									return false;
								}
							}
							return lib.filter.filterTarget.apply(this, arguments);
						}
					)
					.set("ai2", function () {
						return get.effect_use.apply(this, arguments) - get.event().effect;
					})
					.set("effect", get.effect(target, { name: "losehp" }, target, target))
					.set("addCount", false)
					.set("targetx", player)
					.forResult();
				if (!result?.bool) {
					await target.loseHp();
				}
			},
			subSkill: {
				add: {
					audio: ["sbluanwu3.mp3", "sbluanwu4.mp3"],
					trigger: { global: "loseHpEnd" },
					filter(event, player) {
						if (event.getParent().name != "old_sbluanwu") {
							return false;
						}
						return ["old_sbwansha", "old_sbweimu"].some(skill => player.hasSkill(skill, null, null, false) && !player.storage[skill]);
					},
					async cost(event, trigger, player) {
						const choices = [],
							list = ["old_sbwansha", "old_sbweimu"];
						const choiceList = ["修改【完杀】", "修改【帷幕】"];
						for (let i = 0; i < 2; i++) {
							if (!player.hasSkill(list[i], null, null, false) || player.storage[list[i]]) {
								choiceList[i] = '<span style="opacity:0.5;">' + choiceList[i] + "</span>";
							} else {
								choices.push(`选项${get.cnNumber(i + 1, true)}`);
							}
						}
						const { control } = await player
							.chooseControl(choices, "cancel2")
							.set("choiceList", choiceList)
							.set("prompt", get.prompt(event.name.slice(0, -5)))
							.set("ai", () => {
								const choices = get.event().controls.slice().remove("cancel2");
								return choices.randomGet();
							})
							.forResult();
						event.result = {
							bool: control != "cancel2",
							cost_data: control,
						};
					},
					async content(event, trigger, player) {
						const list = ["old_sbwansha", "old_sbweimu"],
							index = ["选项一", "选项二"].indexOf(event.cost_data);
						player.storage[list[index]] = true;
					},
				},
			},
			derivation: ["old_sbwansha_rewrite", "old_sbweimu_rewrite"],
		},
		old_sbwansha_rewrite: {
			nopop: true,
		},
		old_sbweimu_rewrite: {
			nopop: true,
		},
		old_sbweimu: {
			audio: "sbweimu",
			trigger: {
				player: "addJudgeBefore",
				target: "useCardToTarget",
				global: "roundStart",
			},
			logAudio: index => (typeof index === "number" ? "sbweimu" + index + ".mp3" : 4),
			filter(event, player) {
				if (event.name == "useCardToTarget") return get.type(event.card, null, false) == "trick" && get.color(event.card) == "black";
				if (event.name == "addJudge") return get.color(event.card) == "black";
				if (!player.storage.old_sbweimu || game.roundNumber < 2) return false;
				let num = 0;
				game.countPlayer2(current => {
					if (player == current) return false;
					num += current.getRoundHistory("useCard", evt => evt.targets?.includes(player), 1).length;
				});
				return num <= 2 && Array.from(ui.discardPile.childNodes).some(card => get.info("old_sbweimu").filterCardx(card));
			},
			filterCardx(card) {
				return get.subtype(card) == "equip2" || (get.type(card) == "trick" && get.color(card) == "black");
			},
			forced: true,
			popup: false,
			async content(event, trigger, player) {
				if (trigger.name == "useCardToTarget" || trigger.name == "addJudge") player.logSkill("old_sbweimu", null, null, null, [get.rand(1, 2)]);
				else player.logSkill("old_sbweimu", null, null, null, [get.rand(3, 4)]);
				if (trigger.name == "useCardToTarget") {
					trigger.targets.remove(player);
					trigger.getParent().triggeredTargets2.remove(player);
					trigger.untrigger();
				} else if (trigger.name == "addJudge") {
					trigger.cancel();
					const owner = get.owner(trigger.card);
					if (owner?.getCards("hej").includes(trigger.card)) await owner.lose(trigger.card, ui.discardPile);
					else await game.cardsDiscard(trigger.card);
					game.log(trigger.card, "进入了弃牌堆");
				} else {
					const cards = Array.from(ui.discardPile.childNodes).filter(card => get.info("old_sbweimu").filterCardx(card));
					await player.gain(cards.randomGet(), "gain2");
				}
			},
			ai: {
				effect: {
					target(card, player, target, current) {
						if (get.type(card, "trick") == "trick" && get.color(card) == "black") return "zeroplayertarget";
					},
				},
			},
		},
		//谋诸葛瑾
		old_sbhuanshi: {
			audio: "sbhuanshi",
			trigger: { global: "judge" },
			filter(event, player) {
				return player.countCards("hs") + player.hp > 0;
			},
			async cost(event, trigger, player) {
				let cardsx = get.cards(player.hp, true).map(card => {
					const cardx = game.createFakeCards(card)[0];
					cardx.preCard = card;
					return cardx;
				});
				if (cardsx.length) {
					player.directgains(cardsx, null, "old_sbhuanshi_tag");
				}
				const result = await player
					.chooseCard(`${get.translation(trigger.player)}的${trigger.judgestr || ""}判定为${get.translation(trigger.player.judging[0])}，${get.prompt(event.skill)}`, "hs", card => {
						const player = _status.event.player;
						const mod2 = game.checkMod(card, player, "unchanged", "cardEnabled2", player);
						if (mod2 != "unchanged") {
							return mod2;
						}
						const mod = game.checkMod(card, player, "unchanged", "cardRespondable", player);
						if (mod != "unchanged") {
							return mod;
						}
						return true;
					})
					.set("ai", card => {
						const trigger = _status.event.getTrigger();
						const player = _status.event.player;
						const judging = _status.event.judging;
						const result = trigger.judge(card) - trigger.judge(judging);
						const attitude = get.attitude(player, trigger.player);
						if (attitude == 0 || result == 0) {
							return 0;
						}
						if (get.event().pile.includes(card)) {
							return attitude > 0 ? result : -result;
						}
						if (attitude > 0) {
							return result - get.value(card) * 0.3;
						} else {
							return -result - get.value(card) * 0.3;
						}
					})
					.set("judging", trigger.player.judging[0])
					.set("pile", cardsx)
					.forResult();
				let cards = [];
				if (result?.cards?.length) {
					cards = result.cards;
					cardsx = player.getCards("s", card => card.hasGaintag("old_sbhuanshi_tag"));
					if (cardsx.length) {
						if (cards) {
							cards = cards.map(card => {
								if (cardsx.includes(card)) {
									return card.preCard;
								}
								return card;
							});
						}
					}
				}
				game.deleteFakeCards(cardsx);
				event.result = {
					bool: result?.bool,
					cards: cards,
					cost_data: result?.cards?.length && !result.cards[0].hasGaintag("old_sbhuanshi_tag"),
				};
			},
			popup: false,
			async content(event, trigger, player) {
				const { cards } = await player.respond(event.cards, event.name, "highlight", "noOrdering");
				if (!cards?.length) {
					return;
				}
				if (trigger.player.judging[0].clone) {
					trigger.player.judging[0].clone.classList.remove("thrownhighlight");
					game.broadcast(function (card) {
						if (card.clone) {
							card.clone.classList.remove("thrownhighlight");
						}
					}, trigger.player.judging[0]);
					game.addVideo("deletenode", player, get.cardsInfo([trigger.player.judging[0].clone]));
				}
				if (event.cost_data) {
					await player.gain(trigger.player.judging, "gain2");
				} else {
					await game.cardsDiscard(trigger.player.judging);
				}
				trigger.player.judging[0] = cards[0];
				trigger.orderingCards.addArray(cards);
				game.log(trigger.player, "的判定牌改为", cards[0]);
				await game.delay(2);
			},
			locked: false,
			mod: {
				cardRespondable(card, player) {
					if (!card.preCard) {
						return;
					}
					return _status.event?.getParent()?.name == "old_sbhuanshi_cost";
				},
			},
			ai: {
				rejudge: true,
				tag: { rejudge: 1 },
			},
		},
		old_sbhongyuan: {
			audio: "sbhongyuan",
			trigger: {
				global: ["loseAfter", "equipAfter", "addJudgeAfter", "gainAfter", "loseAsyncAfter", "addToExpansionAfter"],
			},
			chargeSkill: 4,
			getIndex(event, player) {
				if (!player.countCharge()) return [];
				let list = [];
				if (event.getg && event.getg(player)?.length > 1) list.push([player, "gain"]);
				if (!event.getl) return list;
				for (let target of game.players) {
					let evt = event.getl(target);
					if (!evt || !evt.cards2 || !evt.cards2.length) continue;
				}
				return game
					.filterPlayer(current => {
						if (current == player) return event.getg && event.getg(player)?.length > 1;
						if (!event.getl) return false;
						let evt = event.getl(current);
						if (!evt || !evt.cards2) return false;
						return evt.cards2.length > 1;
					})
					.sortBySeat();
			},
			filter(event, player) {
				return player.countCharge();
			},
			async cost(event, trigger, player) {
				const target = event.indexedData;
				if (target == player) {
					event.result = await player
						.chooseTarget([1, 2], get.prompt("old_sbhongyuan"), "令至多两名角色各摸一张牌")
						.set("ai", target => {
							const player = get.player();
							return get.effect(target, { name: "draw" }, player, player);
						})
						.forResult();
					event.result.cost_data = "gain";
				} else {
					event.result = await player
						.chooseBool(get.prompt("old_sbhongyuan", target), "令其摸两张牌")
						.set("choice", get.effect(target, { name: "draw" }, player, player) > 0)
						.forResult();
					event.result.targets = [target];
					event.result.cost_data = "lose";
				}
			},
			async content(event, trigger, player) {
				player.removeCharge();
				if (event.cost_data == "gain") {
					const targets = event.targets;
					await game.asyncDraw(targets);
				} else {
					const target = event.targets[0];
					await target.draw(2);
				}
			},
			group: "old_sbhongyuan_init",
			subSkill: {
				init: {
					audio: "sbhongyuan",
					trigger: {
						player: "enterGame",
						global: "phaseBefore",
					},
					filter(event, player) {
						return event.name != "phase" || game.phaseNumber == 0;
					},
					forced: true,
					locked: false,
					async content(event, trigger, player) {
						player.addCharge();
					},
				},
			},
			ai: {
				combo: "old_sbmingzhe",
			},
		},
		old_sbmingzhe: {
			audio: "sbmingzhe",
			trigger: {
				player: "loseAfter",
				global: ["equipAfter", "addJudgeAfter", "gainAfter", "loseAsyncAfter", "addToExpansionAfter"],
			},
			locked: true,
			filter(event, player) {
				if (player == _status.currentPhase) return false;
				if (player.countMark("old_sbmingzhe_used") >= 3) return false;
				var evt = event.getl(player);
				return evt.cards2?.length;
			},
			async cost(event, trigger, player) {
				event.result = await player
					.chooseTarget(get.prompt2("old_sbmingzhe"), true)
					.set("ai", target => {
						const player = get.player();
						let eff = get.effect(target, { name: "draw" }, player, player);
						if (target.countCharge(true) > 0) eff *= 2.1;
						return eff;
					})
					.forResult();
			},
			async content(event, trigger, player) {
				player.addTempSkill("old_sbmingzhe_used", "roundStart");
				player.addMark("old_sbmingzhe_used", 1, false);
				const target = event.targets[0];
				const cards = trigger.getl(player).cards2;
				if (target.countCharge(true)) target.addCharge();
				if (cards.some(card => get.type(card) != "basic")) await target.draw();
			},
			ai: {
				effect: {
					player(card, player, target) {
						if (player === _status.currentPhase || player.countMark("old_sbmingzhe_used") >= 2) return;
						if (typeof card === "object" && get.position(card) === "h") return [1, 1];
					},
					target(card, player, target) {
						if (target === _status.currentPhase || target.countMark("old_sbmingzhe_used") >= 2) return;
						if (get.tag(card, "lose") || get.tag(card, "discard")) return [1, 1];
					},
				},
			},
			subSkill: {
				used: {
					charlotte: true,
					onremove: true,
				},
			},
		},
		//谋张辽
		old_sbtuxi: {
			audio: "sbtuxi",
			trigger: {
				player: "gainAfter",
				global: "loseAsyncAfter",
			},
			filter(event, player) {
				if (player != _status.currentPhase || event.getParent("old_sbtuxi").player == player) return false;
				return event.getg(player).length;
			},
			usable: 3,
			async cost(event, trigger, player) {
				const cards = trigger.getg(player).filter(i => get.owner(i) == player);
				event.result = await player
					.chooseCard(get.prompt(event.name.slice(0, -5)), "将本次获得的任意张牌置于弃牌堆，然后获得至多等量名其他角色的各一张手牌", card => get.event().cards.includes(card), [1, cards.length])
					.set("ai", card => {
						const player = get.player();
						const targets = game.filterPlayer(current => player != current && current.countGainableCards(player, "h") && get.effect(current, { name: "shunshou_copy2" }, player, player) > 0);
						if (ui.selected.cards.length > targets.length) return 0;
						return 6.5 - get.value(card);
					})
					.set("cards", cards)
					.forResult();
			},
			async content(event, trigger, player) {
				const { cards } = event,
					num = cards.length;
				await player.loseToDiscardpile(cards);
				if (!game.hasPlayer(current => player != current && current.countGainableCards(player, "h"))) return;
				const { bool, targets } = await player
					.chooseTarget(
						`获得至多${get.cnNumber(num)}名其他角色的各一张手牌`,
						(card, player, target) => {
							return player != target && target.countGainableCards(player, "h");
						},
						[1, num],
						true
					)
					.set("ai", target => {
						const player = get.player();
						return get.effect(target, { name: "shunshou_copy2" }, player, player);
					})
					.forResult();
				if (bool) await player.gainMultiple(targets.sortBySeat());
			},
		},
		old_sbdengfeng: {
			audio: "sbdengfeng",
			trigger: {
				player: "phaseZhunbeiBegin",
			},
			filter(event, player) {
				return game.hasPlayer(current => player != current);
			},
			async cost(event, trigger, player) {
				const { bool, targets, links } = await player
					.chooseButtonTarget({
						createDialog: [
							`###${get.prompt(event.skill)}###选择一名其他角色并执行一项`,
							[
								[
									["equip", "令一名其他角色获得其装备区里的至多两张牌"],
									["sha", "获得牌堆里的一张【杀】"],
									["all", "背水！失去1点体力并执行所有选项"],
								],
								"textbutton",
							],
						],
						complexSelect: true,
						filterButton(button) {
							if (
								button.link != "sha" &&
								!game.hasPlayer(current => {
									return current != get.player() && current.countCards("e");
								})
							) {
								return false;
							}
							return true;
						},
						filterTarget(card, player, target) {
							if (ui.selected.buttons[0]?.link != "sha") {
								return target.countCards("e") && target != player;
							}
							return target != player;
						},
						ai1(button) {
							const { player } = get.event();
							const bool1 = game.hasPlayer(current => {
								const es = current.getCards("e"),
									att = get.attitude(player, current);
								return (
									current != player &&
									es.some(card => {
										if (att > 0) {
											return get.equipValue(card, current) <= 4;
										}
										return get.equipValue(card, current) > 7;
									})
								);
							});
							let num = 0;
							if (bool1 && ["all", "equip"].includes(button.link)) {
								num++;
							}
							const bool2 = !player.countCards("hs", { name: "sha" }) || player.hasSkill("old_sbtuxi");
							if (bool2 && ["all", "sha"].includes(button.link)) {
								num++;
							}
							if (player.getHp() <= 2 && get.effect(player, { name: "losehp" }, player, player) <= 0) {
								if (button.link == "all") {
									num = 0;
								}
							}
							return num;
						},
						ai2(target) {
							const player = get.player();
							const att = get.attitude(player, target);
							const es = target.getCards("e");
							if ((es.some(card => get.equipValue(card, target) <= 4) && att > 0) || (es.some(card => get.equipValue(card, target) > 7) && att < 0)) {
								return 10;
							}
							return 1;
						},
					})
					.forResult();
				event.result = {
					bool: bool,
					targets: targets,
					cost_data: links,
				};
			},
			async content(event, trigger, player) {
				const {
					cost_data: [control],
					targets: [target],
				} = event;
				if (["equip", "all"].includes(control) && target.countCards("e")) {
					const { cards } = await player.choosePlayerCard(target, true, "e", `选择${get.translation(target)}的至多两张装备牌令其获得之`, [1, 2]).forResult();
					if (cards?.length) {
						await target.gain(cards, "gain2");
					}
				}
				if (["sha", "all"].includes(control)) {
					const card = get.cardPile2(card => card.name == "sha");
					if (card) {
						await player.gain(card, "gain2");
					}
				}
				if (control == "all") {
					await player.loseHp();
				}
			},
		},
		//张郃
		old_sbqiaobian: {
			audio: "sbqiaobian",
			trigger: { player: ["phaseJudgeBefore", "phaseDrawBefore", "phaseUseBefore"] },
			usable: 1,
			async cost(event, trigger, player) {
				const skillName = event.name.slice(0, -5);
				switch (trigger.name) {
					case "phaseJudge":
						event.result = await player
							.chooseTarget(get.prompt(skillName), "失去1点体力并跳过判定阶段，将判定区里的牌移动给一名其他角色", lib.filter.notMe)
							.set("ai", target => {
								const player = get.player();
								if (
									player.hp +
										player.countCards("h", card => {
											var mod2 = game.checkMod(card, player, "unchanged", "cardEnabled2", player);
											if (mod2 != "unchanged") {
												return mod2;
											}
											var mod = game.checkMod(card, player, player, "unchanged", "cardSavable", player);
											if (mod != "unchanged") {
												return mod;
											}
											var savable = get.info(card).savable;
											if (typeof savable == "function") {
												savable = savable(card, player, player);
											}
											return savable;
										}) <=
									1
								) {
									return 0;
								}
								var eff = 0;
								for (var card of player.getCards("j")) {
									var cardx;
									if (card.viewAs) {
										cardx = get.autoViewAs({ name: card.viewAs }, [card]);
									} else {
										cardx = card;
									}
									if (target.canAddJudge(cardx)) {
										eff += get.effect(target, cardx, player, player);
									} else {
										eff -= get.attitude(player, target) / 114514;
									}
								}
								return eff;
							})
							.setHiddenSkill(skillName)
							.forResult();
						break;
					case "phaseDraw":
						event.result = await player.chooseBool(get.prompt(skillName), "跳过摸牌阶段，于下个准备阶段摸五张牌并回复1点体力").setHiddenSkill(skillName).forResult();
						break;
					case "phaseUse": {
						let next;
						const num = player.countCards("h") - 6;
						if (num <= 0) {
							next = player.chooseBool(get.prompt(skillName), "跳过出牌阶段和弃牌阶段，然后移动场上的一张牌").set("choice", player.canMoveCard(true)).setHiddenSkill(skillName);
						} else {
							next = player
								.chooseToDiscard(get.prompt(skillName), num, `弃置${get.cnNumber(num)}张手牌并跳过出牌阶段和弃牌阶段，然后移动场上的一张牌`, "allowChooseAll")
								.set("ai", card => {
									const player = get.player();
									if (!player.canMoveCard(true) || player.countCards("hs", card => player.hasValueTarget(card)) >= 9) {
										return 0;
									}
									return 7 - get.value(card);
								})
								.setHiddenSkill(skillName);
						}
						event.result = await next.forResult();
						break;
					}
				}
			},
			async content(event, trigger, player) {
				trigger.cancel();
				switch (trigger.name) {
					case "phaseJudge": {
						const {
							targets: [target],
						} = event;
						await player.loseHp();
						game.log(player, "跳过了判定阶段");
						for (const card of player.getCards("j")) {
							if (target.canAddJudge(card)) {
								player.$give(card, target, false);
								if (card.viewAs) {
									await target.addJudge({ name: card.viewAs }, [card]);
								} else {
									await target.addJudge(card);
								}
							} else {
								await player.discard(card);
							}
						}
						break;
					}
					case "phaseDraw":
						game.log(player, "跳过了摸牌阶段");
						player.addSkill("old_sbqiaobian_draw");
						break;
					case "phaseUse":
						player.skip("phaseDiscard");
						game.log(player, "跳过了出牌阶段");
						game.log(player, "跳过了弃牌阶段");
						await player.moveCard();
						break;
				}
			},
			subSkill: {
				draw: {
					charlotte: true,
					mark: true,
					intro: { content: "准备阶段摸五张牌并回复1点体力" },
					audio: "sbqiaobian",
					trigger: { player: "phaseZhunbeiBegin" },
					forced: true,
					content() {
						player.removeSkill(event.name);
						player.draw(5);
						player.recover();
					},
				},
			},
		},
		//谋郭嘉
		old_sbyiji: {
			audio: "sbyiji",
			trigger: { player: ["damageEnd", "dying"] },
			filter(event, player, name) {
				if (event.name == "damage") return event.num > 0;
				const history = game.getAllGlobalHistory();
				for (let i = history.length - 1; i >= 0; i--) {
					const evt = history[i]["everything"];
					for (let j = evt.length - 1; j >= 0; j--) {
						if (evt[j].name == "dying" && evt[j].player == player && evt[j] != event) return false;
					}
					if (history[i].isRound) break;
				}
				return true;
			},
			frequent: true,
			async content(event, trigger, player) {
				const mode = get.mode(),
					name = trigger.name,
					//yiji = mode === "identity" || (mode === "doudizhu" && name === "dying");
					yiji = false;
				//let num = name === "damage" || !["identity", "doudizhu"].includes(mode) ? 2 : 1;
				let num = 2;
				const next = player.draw(num);
				if (yiji) next.gaintag = ["old_sbyiji"];
				await next;
				if (!game.hasPlayer(target => target != player) || !player.hasCard(card => !yiji || card.hasGaintag("old_sbyiji"), "h")) return;
				if (_status.connectMode) game.broadcastAll(() => (_status.noclearcountdown = true));
				let given_map = [];
				while (
					num > 0 &&
					player.hasCard(card => {
						if (card.hasGaintag("olsujian_given")) return false;
						return !yiji || card.hasGaintag("old_sbyiji");
					}, "h")
				) {
					const { bool, cards, targets } = await player
						.chooseCardTarget({
							filterCard(card, player) {
								if (card.hasGaintag("olsujian_given")) return false;
								return !get.event().yiji || card.hasGaintag("old_sbyiji");
							},
							selectCard: [1, num],
							filterTarget: lib.filter.notMe,
							prompt: "遗计：请选择要分配的卡牌和目标",
							prompt2: "（还可分配" + num + "张）",
							ai1(card) {
								return !ui.selected.cards.length && card.name == "du" ? 1 : 0;
							},
							ai2(target) {
								const player = get.event().player;
								const card = ui.selected.cards[0];
								if (card) return get.value(card, target) * get.attitude(player, target);
								return 0;
							},
							yiji: yiji,
							position: "eh".slice(-1 + (name === "dying")), //三若为，怎么若都为构思
						})
						.forResult();
					if (bool) {
						num -= cards.length;
						const target = targets[0];
						if (given_map.some(i => i[0] == target)) {
							given_map[given_map.indexOf(given_map.find(i => i[0] == target))][1].addArray(cards);
						} else given_map.push([target, cards]);
						player.addGaintag(cards, "olsujian_given");
					} else break;
				}
				if (_status.connectMode) {
					game.broadcastAll(() => {
						delete _status.noclearcountdown;
						game.stopCountChoose();
					});
				}
				if (yiji) player.removeGaintag("old_sbyiji");
				if (given_map.length) {
					await game
						.loseAsync({
							gain_list: given_map,
							player: player,
							cards: given_map.slice().map(list => list[1]),
							giver: player,
							animate: "giveAuto",
						})
						.setContent("gaincardMultiple");
				}
			},
			ai: {
				maixie: true,
				maixie_hp: true,
				effect: {
					target(card, player, target) {
						if (get.tag(card, "damage")) {
							if (player.hasSkillTag("jueqing", false, target)) return [1, -2];
							if (!target.hasFriend()) return;
							if (target.hp >= 4) return [1, 2];
							if (target.hp == 3) return [1, 1.5];
							if (target.hp == 2) return [1, 0.5];
						}
					},
				},
			},
		},
		//谋高顺
		old_sbxianzhen: {
			audio: "sbxianzhen",
			enable: "phaseUse",
			usable: 1,
			filterTarget(card, player, target) {
				// if (get.mode() === "identity" && target.getHp() >= player.getHp()) return false;
				return target !== player;
			},
			async content(event, trigger, player) {
				const target = event.targets[0];
				player.addTempSkill("old_sbxianzhen_attack", "phaseUseAfter");
				player.markAuto("old_sbxianzhen_attack", target);
			},
			ai: {
				expose: 0.2,
				order(item, player) {
					return get.order({ name: "sha" }) + 1;
				},
				result: {
					target(player, target) {
						if (
							!player.countCards("hs", card => {
								return get.name(card) === "sha" && player.canUse(card, target, false);
							})
						)
							return -0.1;
						if (target.countCards("h") === 1 && player.canCompare(target)) return -2;
						return -1.5;
					},
				},
			},
			subSkill: {
				attack: {
					audio: "sbxianzhen",
					trigger: { player: "useCardToPlayered" },
					filter(event, player) {
						if (event.card.name !== "sha") return false;
						return player.getStorage("old_sbxianzhen_attack").includes(event.target) && event.target.isIn() && player.canCompare(event.target);
					},
					charlotte: true,
					onremove: true,
					logTarget: "target",
					check(event, player) {
						return get.attitude(player, event.target) < 0;
					},
					prompt(event, player) {
						return `陷阵：是否与${get.translation(event.target)}拼点？`;
					},
					prompt2(event, player) {
						const target = event.target,
							card = event.card;
						return `若你赢，${get.translation(card)}无视防具且不计入次数，且若你本回合未以此法造成过伤害，你对其造成1点伤害；<br>若其拼点牌为【杀】，则你获得之；<br>若其拼点牌为其最后的手牌，则${get.translation(card)}对其造成伤害时，此伤害+1。`;
					},
					group: "old_sbxianzhen_record",
					async content(event, trigger, player) {
						const target = trigger.target,
							card = trigger.card;
						const next = player.chooseToCompare(target);
						let result = await next.forResult();
						if (result.bool) {
							target.addTempSkill("qinggang2");
							target.storage.qinggang2.add(card);
							if (trigger.addCount !== false) {
								trigger.addCount = false;
								const stat = player.getStat("card");
								if (stat[card.name] && stat[card.name] > 0) stat[card.name]--;
							}
							game.log(card, "无视防具且不计入次数限制");
							if (!player.storage.old_sbxianzhen_damaged) {
								player.storage.old_sbxianzhen_damaged = (player.storage.old_sbxianzhen_damaged || 0) + 1;
								player.when("phaseAfter").step(async () => {
									delete player.storage.old_sbxianzhen_damaged;
								});
							}
							if (player.storage.old_sbxianzhen_damaged <= 2) {
								await target.damage();
								await game.delayx();
							}
						}
						const toGain = [];
						for (const lose_list of next.lose_list) {
							let [comparer, cards] = lose_list;
							if (!Array.isArray(cards)) cards = [cards];
							if (comparer === player) continue;
							for (const card of cards) {
								if (get.name(card, comparer) == "sha" && get.position(card, true) == "d") {
									toGain.push(card);
								}
							}
						}
						if (toGain.length) await player.gain(toGain, "gain2");
						if (player.getStorage("old_sbxianzhen_recorded").includes(target)) {
							const id = target.playerid;
							const map = trigger.getParent().customArgs;
							if (!map[id]) map[id] = {};
							if (typeof map[id].extraDamage != "number") {
								map[id].extraDamage = 0;
							}
							map[id].extraDamage++;
							game.log(card, "对", target, "造成的伤害+1");
						}
					},
					intro: {
						content: "本阶段对$使用牌无距离限制，且使用杀指定其为目标后可以与其拼点",
					},
					mod: {
						targetInRange(card, player, target) {
							if (player.getStorage("old_sbxianzhen_attack").includes(target)) return true;
						},
					},
				},
				record: {
					trigger: {
						global: "loseAsyncEnd",
					},
					charlotte: true,
					silent: true,
					filter(event, player) {
						if (event.getParent(2).name !== "old_sbxianzhen_attack") return false;
						return game.hasPlayer(current => {
							if (current.countCards("h")) return false;
							const evt = event.getl(current);
							return evt && evt.hs && evt.hs.length;
						});
					},
					async content(event, trigger, player) {
						const targets = [];
						game.countPlayer(current => {
							if (current.countCards("h")) return false;
							const evt = trigger.getl(current);
							if (evt && evt.hs && evt.hs.length) targets.add(current);
						});
						if (!player.storage.old_sbxianzhen_recorded) {
							player.when("old_sbxianzhen_attackAfter").step(async () => {
								delete player.storage.old_sbxianzhen_recorded;
							});
						}
						player.markAuto("old_sbxianzhen_recorded", targets);
					},
				},
			},
		},
		//姜维
		old_sbzhiji: {
			audio: "sbzhiji",
			trigger: { player: "phaseZhunbeiBegin" },
			juexingji: true,
			forced: true,
			skillAnimation: true,
			animationColor: "fire",
			filter(event, player) {
				return player.countCards("h") <= player.hp;
			},
			async content(event, trigger, player) {
				player.awakenSkill(event.name);
				await player.loseMaxHp();
				await player.recover();
				await player.draw(2);
				await player.addSkills("old_sbbeifa");
			},
			derivation: "old_sbbeifa",
		},
		old_sbbeifa: {
			audio: "sbbeifa",
			chargeSkill: 9,
			logAudio: index => (typeof index === "number" ? "sbbeifa" + index + ".mp3" : 2),
			init(player, skill) {
				player.addCharge(3, false);
			},
			onremove: true,
			intro: {
				content: "已记录牌名：$",
			},
			enable: "phaseUse",
			filter(event, player) {
				const cards = event.old_sbbeifa;
				return cards?.length > 0 && player.countCards("hs") > 0;
			},
			onChooseToUse(event) {
				if (game.online || event.old_sbbeifa) {
					return;
				}
				const player = event.player;
				const list = get.inpileVCardList(list => {
					if (!["basic", "trick", "delay"].includes(list[0])) {
						return false;
					}
					if (player.getStorage("old_sbbeifa").includes(list[2])) {
						return false;
					}
					const info = lib.card[list[2]];
					if (!info || info.notarget) {
						return false;
					}
					if (get.cardNameLength(list[2]) > player.countCharge()) {
						return false;
					}
					return (
						!player.canUse(list[2], player, null, event) &&
						game.hasPlayer(current => {
							return player.canUse(list[2], current, null, event);
						})
					);
				});
				event.set("old_sbbeifa", list);
			},
			chooseButton: {
				dialog(event, player) {
					return ui.create.dialog("北伐", [event.old_sbbeifa, "vcard"], "hidden");
				},
				check(button) {
					var player = _status.event.player,
						card = { name: button.link[2] };
					return player.getUseValue(card);
				},
				backup(links, player) {
					return {
						audio: "sbbeifa",
						logAudio: () => "sbbeifa",
						viewAs: {
							name: links[0][2],
							nature: links[0][3],
						},
						ai1: card => 7 - get.value(card),
						async precontent(event, trigger, player) {
							const name = event.result.card.name;
							player.logSkill("old_sbbeifa", null, null, null, [get.rand(3, 4)]);
							player.addSkill("old_sbbeifa_used");
							player.markAuto("old_sbbeifa", name);
							player.removeCharge(get.cardNameLength(name));
							await event.trigger("old_sbbeifaRecord");
						},
						filterCard: true,
						position: "hs",
						popname: true,
						log: false,
					};
				},
				prompt(links, player) {
					return `将一张手牌当做${get.translation(links[0][3]) || ""}${get.translation(links[0][2])}使用`;
				},
			},
			ai: {
				order: 6,
				result: { player: 1 },
			},
			group: ["old_sbbeifa_backflow", "old_sbbeifa_benghuai"],
			subSkill: {
				used: {
					charlotte: true,
					onremove(player, skill) {
						player.setStorage("old_sbbeifa", [], true);
					},
				},
				backup: {},
				benghuai: {
					audio: ["sbbeifa5.mp3"],
					trigger: {
						player: ["damageEnd", "old_sbbeifaRecord"],
					},
					forced: true,
					locked: false,
					filter(event, player) {
						if (event.name == "damage") {
							return player == _status.currentPhase;
						}
						return player.getStorage("old_sbbeifa")?.length == 9 - player.countMark("old_sbbeifa_benghuai");
					},
					async content(event, trigger, player) {
						player.removeSkill("old_sbbeifa_used");
						if (player.countMark(event.name) < 8) {
							player.addMark(event.name, 1, false);
							game.log(player, "因", "#g【北伐】", "提供的蓄力值上限-1");
							if (player.countCharge(true) < 0) {
								player.removeCharge(-player.countCharge(true));
							}
						}
					},
					mod: {
						maxCharge(player, max) {
							return max - player.countMark("old_sbbeifa_benghuai");
						},
					},
				},
				backflow: {
					audio: ["sbbeifa1.mp3", "sbbeifa2.mp3"],
					trigger: {
						global: ["loseAfter", "loseAsyncAfter", "useCard", "respond"],
					},
					forced: true,
					locked: false,
					filter(event, player) {
						if (player != _status.currentPhase) {
							return false;
						}
						if (event.name.indexOf("lose") == 0) {
							return (
								event.type == "discard" &&
								game.hasPlayer2(current => {
									return event.getl(current)?.cards2?.length;
								})
							);
						}
						return get.is.convertedCard(event.card) && event.cards?.length;
					},
					async content(event, trigger, player) {
						let num = 0;
						if (trigger.name.indexOf("lose") == 0) {
							game.filterPlayer2(
								current => {
									num += trigger.getl(current).cards2.length;
								},
								null,
								true
							);
						} else {
							num += trigger.cards.length;
						}
						player.addCharge(num);
					},
				},
			},
		},
		//谋夏侯渊
		old_sbzhengzi: {
			audio: "sbzhengzi",
			trigger: { player: "phaseEnd" },
			filter(event, player) {
				if (player.isHealthy()) return false;
				return player.getHistory("sourceDamage").reduce((sum, evt) => sum + evt.num, 0) >= player.getHp();
			},
			frequent: true,
			content() {
				player.link(false);
				player.turnOver(false);
				player.draw(2);
			},
		},
		//谋吕布
		old_sbwushuang: {
			audio: "sbwushuang",
			trigger: { source: "damageBegin1" },
			filter(event, player) {
				const target = event.player;
				const evtx = event.getParent(2);
				const card = event.card;
				const name = card?.name;
				if (!card || !["sha", "juedou"].includes(name)) {
					return false;
				}
				if (name == "sha") {
					return !target.hasHistory("useCard", evt => {
						return evt.card.name == "shan" && evt.respondTo && evt.getParent(3) == evtx;
					});
				}
				return !target.hasHistory("respond", evt => {
					return evt.card.name == "sha" && evt.respondTo && evt.getParent(3) == evtx;
				});
			},
			forced: true,
			logTarget: "player",
			logAudio: () => ["sbwushuang4.mp3", "sbwushuang5.mp3"],
			content() {
				trigger.num++;
			},
			group: ["old_sbwushuang_1", "old_sbwushuang_2"],
			preHidden: ["old_sbwushuang_1", "old_sbwushuang_2"],
			subSkill: {
				1: {
					audio: "sbwushuang",
					sourceSkill: "old_sbwushuang",
					logAudio: () => ["sbwushuang1.mp3", "sbwushuang6.mp3"],
					inherit: "wushuang1",
				},
				2: {
					audio: "sbwushuang",
					sourceSkill: "old_sbwushuang",
					logAudio: () => ["sbwushuang1.mp3", "sbwushuang6.mp3"],
					inherit: "wushuang2",
				},
			},
		},
		old_sbliyu: {
			audio: "sbliyu",
			logAudio: index => (typeof index === "number" ? "sbliyu" + index + ".mp3" : 2),
			trigger: { source: "damageSource" },
			filter(event, player) {
				return event.player != player && event?.card?.name == "sha" && event.player.countGainableCards(player, "hej") > 0 && event.player.isIn();
			},
			async cost(event, trigger, player) {
				const target = trigger.player;
				event.result = await player
					.gainPlayerCard(get.prompt2(event.skill), trigger.player, "hej", [1, trigger.num])
					.set("logSkill", [event.skill, [target], null, null, [get.rand(1, 2)]])
					.forResult();
			},
			popup: false,
			async content(event, trigger, player) {
				const cards = event.cards;
				const target = trigger.player;
				const draw = (await target.draw(cards.length).forResult()).cards;
				if (Array.isArray(cards) && Array.isArray(draw)) {
					let types = [cards, draw]
						.map(list => list.map(card => get.type2(card)))
						.flat()
						.unique();
					if (types.length >= 3) {
						let list = [`${get.translation(player)}视为对你指定的另一名其他角色使用一张【决斗】`, `你获得技能〖无双〗直至你下个回合结束`];
						let result;
						const juedou = game.hasPlayer(current => current != player && current != target && player.canUse(new lib.element.VCard({ name: "juedou", isCard: true }), current, false));
						const wushuang = !target.hasSkill("old_sbwushuang", null, false, false);
						if (juedou || wushuang) {
							if (!juedou) {
								result = { control: "选项二" };
							} else if (!wushuang) {
								result = { control: "选项一" };
							} else {
								result = await target
									.chooseControl()
									.set("prompt", get.translation(event.name) + "：请选择一项")
									.set("choiceList", list)
									.set("ai", () => {
										const player = get.player();
										const source = get.event().getParent().player;
										const juedou = new lib.element.VCard({ name: "juedou", isCard: true });
										return game.hasPlayer(target => {
											return ![player, source].includes(target) && source.canUse(juedou, target, false) && get.effect(target, juedou, source, player) > 0;
										})
											? "选项一"
											: "选项二";
									})
									.forResult();
							}
							player.logSkill("old_sbliyu", null, null, null, [result.control == "选项一" ? get.rand(3, 4) : 5]);
							if (result.control == "选项一") {
								const result2 = await target
									.chooseTarget(
										true,
										(card, player, target) => {
											var evt = get.event().getParent();
											return evt.player.canUse({ name: "juedou" }, target) && target != get.player();
										},
										"利驭：请选择一名角色，视为" + get.translation(player) + "对其使用【决斗】"
									)
									.set("ai", function (target) {
										var evt = get.event().getParent();
										return get.effect(target, { name: "juedou" }, evt.player, get.player());
									})
									.set("animate", false)
									.forResult();
								if (result2?.bool && result2.targets?.length) {
									target.line2([player, result2.targets[0]]);
									await game.delayx();
									await player.useCard(new lib.element.VCard({ name: "juedou", isCard: true }), result2.targets[0], false, "noai").set("animate", false);
								}
							} else {
								const skill = event.name + "_effect";
								await target.addAdditionalSkills(skill, "old_sbwushuang");
								target.addTempSkill(skill, { player: "phaseAfter" });
							}
						}
					}
				}
			},
			derivation: "old_sbwushuang",
			subSkill: {
				effect: {
					charlotte: true,
					init(player) {
						game.broadcastAll(player => Array.isArray(player.tempname) && player.tempname.add("sb_lvbu"), player);
					},
					onremove(player) {
						game.broadcastAll(player => Array.isArray(player.tempname) && player.tempname.remove("sb_lvbu"), player);
					},
					mark: true,
					audio: ["sbwushuang2.mp3", "sbwushuang3.mp3"],
					intro: { content: "这熟悉的力量！！！" },
				},
			},
		},
		//蒋干
		old_spdaoshu: {
			audio: "mbdaoshu",
			trigger: { global: "phaseUseBegin" },
			filter(event, player) {
				var goon = event.player != player && (get.mode() == "identity" || get.mode() == "guozhan" || event.player.isEnemyOf(player));
				return goon && event.player.countCards("h") > 0 && event.player.hasUseTarget({ name: "jiu", isCard: true }, null, true);
			},
			round: 1,
			logTarget: "player",
			check(event, player) {
				var target = event.player;
				var att = get.attitude(player, target);
				if (att > 0) return false;
				if (att == 0) return !player.inRangeOf(target);
				return true;
			},
			logAudio: () => ["mbdaoshu.mp3"],
			content() {
				"step 0";
				event.target = trigger.player;
				event.target.chooseUseTarget("jiu", true);
				("step 1");
				if (!target.countCards("h")) {
					event.finish();
					return;
				}
				var list = [];
				for (var i of lib.inpile) {
					if (get.type(i) == "basic") list.push(i);
				}
				if (!list.length) {
					event.finish();
					return;
				}
				target
					.chooseControl(list)
					.set("prompt", "请声明一种基本牌")
					.set("ai", () => _status.event.rand)
					.set("rand", get.rand(0, list.length - 1));
				("step 2");
				event.cardname = result.control;
				target.chat("我声明" + get.translation(event.cardname));
				game.log(target, "声明的牌名为", "#y" + get.translation(event.cardname));
				game.delayx();
				player
					.chooseControl("有！", "没有！")
					.set("prompt", "你觉得" + get.translation(target) + "的手牌区里有" + get.translation(event.cardname) + "吗？")
					.set("ai", function () {
						return _status.event.choice;
					})
					.set(
						"choice",
						(function () {
							var rand =
								{
									sha: 0.273,
									shan: 0.149,
									tao: 0.074,
									jiu: 0.031,
								}[event.cardname] || 0.1;
							return 1 - Math.pow(1 - rand, target.countCards("h")) > 0.5 ? "有！" : "没有！";
						})()
					);
				("step 3");
				player.chat(result.control);
				game.log(player, "认为", "#y" + result.control);
				game.delayx();
				("step 4");
				var bool1 = result.index == 0;
				var bool2 = target.hasCard(function (card) {
					return get.name(card, target) == event.cardname;
				}, "h");
				if (bool1 == bool2) {
					player.popup("判断正确", "wood");
					game.broadcastAll(function () {
						if (lib.config.background_speak) game.playAudio("skill", "old_spdaoshu2");
					});
					// player.gainPlayerCard(target, "h", 2, true);
					var cards = target
						.getCards("h", function (card) {
							return lib.filter.canBeGained(card, player, target);
						})
						.randomGets(5);
					if (cards.length > 0) player.gain(cards, target, "giveAuto", "bySelf");
				} else {
					player.popup("判断错误", "fire");
					game.broadcastAll(function () {
						if (lib.config.background_speak) game.playAudio("skill", "old_spdaoshu3");
					});
					player.addTempSkill("old_spdaoshu_respond");
				}
			},
			ai: { expose: 0.3 },
			subSkill: {
				respond: {
					trigger: { global: "useCard1" },
					forced: true,
					popup: false,
					filter(event, player) {
						return event.player == _status.currentPhase;
					},
					content() {
						trigger.directHit.add(player);
					},
				},
			},
		},
		//手杀SP曹操
		old_mblingfa: {
			audio: "mblingfa",
			trigger: { global: "roundStart" },
			filter(event, player) {
				return game.roundNumber < 3 || player.hasSkill("old_mblingfa", null, false, false);
			},
			prompt2(event, player) {
				switch (game.roundNumber) {
					case 1:
						return "本轮其他角色使用【杀】时，其需弃置一张牌，否则你对其造成1点伤害";
					case 2:
						return "本轮其他角色使用【桃】结算结束后，其需交给你一张牌，否则你对其造成1点伤害";
					default: {
						const skills = lib.skill["old_mblingfa"].derivation.filter(i => !player.hasSkill(i, null, false, false));
						return `失去【${get.translation("old_mblingfa")}】${skills.length > 0 ? `并获得${skills.map(i => `【${get.translation(i)}】`).join("、")}` : ""}`;
					}
				}
			},
			async content(event, trigger, player) {
				switch (game.roundNumber) {
					case 1:
						player.line(game.filterPlayer(current => current != player).sortBySeat());
						player.addTempSkill(`${event.name}_sha`, "roundStart");
						break;
					case 2:
						player.line(game.filterPlayer(current => current != player).sortBySeat());
						player.addTempSkill(`${event.name}_tao`, "roundStart");
						break;
					default:
						await player.changeSkills(lib.skill[event.name].derivation, [event.name]);
						break;
				}
			},
			derivation: ["new_rejianxiong"],
			subSkill: {
				sha: {
					charlotte: true,
					audio: "mblingfa",
					trigger: { global: "useCard" },
					filter(event, player) {
						return player != event.player && event.card.name == "sha";
					},
					forced: true,
					logTarget: "player",
					content() {
						"step 0";
						game.delayx();
						trigger.player
							.chooseToDiscard("he", "令法：弃置一张牌，或受到来自" + get.translation(player) + "的1点伤害")
							.set("goon", get.damageEffect(trigger.player, player, trigger.player) < 0)
							.set("ai", function (card) {
								if (!_status.event.goon) {
									return 0;
								}
								return 8 - get.value(card);
							});
						"step 1";
						if (!result.bool) {
							trigger.player.damage();
						}
					},
					mark: true,
					marktext: '<span style="text-decoration: line-through;">杀</span>',
					intro: { content: "其他角色使用【杀】时，其需弃置一张牌，否则你对其造成1点伤害。" },
				},
				tao: {
					charlotte: true,
					audio: "mblingfa",
					trigger: { global: "useCardAfter" },
					filter(event, player) {
						return player != event.player && event.card.name == "tao";
					},
					forced: true,
					logTarget: "player",
					content() {
						"step 0";
						game.delayx();
						trigger.player
							.chooseCard("he", "令法：交给" + get.translation(player) + "一张牌，否则受到来自其的1点伤害")
							.set("goon", get.damageEffect(trigger.player, player, trigger.player) < 0)
							.set("ai", function (card) {
								if (!_status.event.goon) {
									return 0;
								}
								return 8 - get.value(card);
							});
						"step 1";
						if (!result.bool) {
							trigger.player.damage();
						} else {
							trigger.player.give(result.cards, player);
						}
					},
					mark: true,
					marktext: '<span style="text-decoration: line-through;">桃</span>',
					intro: { content: "其他角色使用【桃】结算结束后，其需交给你一张牌，否则你对其造成1点伤害。" },
				},
			},
		},
		//手杀孟达
		old_mbjili: {
			audio: "mbjili",
			logAudio: () => ["mbjili1.mp3", "mbjili2.mp3"],
			trigger: {
				global: "phaseBegin",
			},
			filter(event, player) {
				return player.inRange(event.player) && player.getStorage("old_mbjili").length < 4;
			},
			async cost(event, trigger, player) {
				const list = [0, 1, 2, 3].filter(num => !player.getStorage("old_mbjili").includes(num));
				list.add("cancel2");
				const result = await player
					.chooseControl(list)
					.set("prompt", get.prompt2(event.skill, trigger.player))
					.set("ai", () => {
						const player = get.player(),
							target = get.event().getTrigger().player;
						if (get.attitude(player, target) > 0) {
							return "cancel2";
						}
						return [0, 1, 2, 3].filter(num => !player.getStorage("old_mbjili").includes(num)).randomGet();
					})
					.forResult();
				event.result = {
					bool: result.control != "cancel2",
					cost_data: result.control,
					targets: [trigger.player],
				};
			},
			async content(event, trigger, player) {
				const num = event.cost_data;
				player.markAuto(event.name, num);
				player.addTempSkill("old_mbjili_used", "roundStart");
				if (!trigger.old_mbjili) {
					trigger.old_mbjili = {};
				}
				trigger.old_mbjili[player.playerid] = num;
				player.addTempSkill("old_mbjili_effect");
			},
			subSkill: {
				effect: {
					audio: "mbjili",
					trigger: {
						global: "phaseJieshuBegin",
					},
					charlotte: true,
					forced: true,
					locked: false,
					filter(event, player) {
						const evt = event.getParent("phase", true);
						return typeof evt?.old_mbjili?.[player.playerid] == "number";
					},
					logAudio(event, player) {
						const evt = event.getParent("phase", true),
							num = evt.old_mbjili[player.playerid],
							count = evt.player.getHistory("useCard", evt => evt?.targets?.includes(player)).length;
						if (count < num) {
							return ["mbjili7.mp3", "mbjili8.mp3", "mbjili9.mp3"];
						}
						if (count > num) {
							return ["mbjili5.mp3", "mbjili6.mp3"];
						}
						return ["mbjili3.mp3", "mbjili4.mp3"];
					},
					logTarget: "player",
					async content(event, trigger, player) {
						const evt = trigger.getParent("phase", true),
							num = evt.old_mbjili[player.playerid],
							count = evt.player.getHistory("useCard", evt => evt?.targets?.includes(player)).length;
						if (count < num) {
							if (num < 4) {
								await player.draw(4 - num);
							}
						} else if (count == num) {
							if (num > 0 && player.countCards("he")) {
								await player.chooseToGive(evt.player, num, true, "he");
							}
						} else {
							const card = { name: "sha", isCard: true };
							if (player.canUse(card, evt.player, false)) {
								const { bool } = await player
									.chooseBool("积戾", `是否对${get.translation(evt.player)}视为使用一张杀？`)
									.set("choice", get.effect(evt.player, card, player, player) > 0)
									.forResult();
								if (bool) {
									await player.useCard(card, evt.player, false);
								}
							}
						}
					},
				},
				used: {
					charlotte: true,
					onremove(player) {
						player.setStorage("old_mbjili", []);
					},
				},
			},
		},
		//张燕
		old_mbfeijing: {
			audio: "mbfeijing",
			logAudio() {
				return ["mbfeijing1.mp3", "mbfeijing3.mp3"];
			},
			trigger: { player: "useCardToPlayer" },
			filter(event, player) {
				if (event.card.name != "sha" || !event.isFirstTarget) {
					return false;
				}
				if (event.targets?.length != 1 || !event.target?.isIn()) {
					return false;
				}
				const [left, right] = get.info("old_mbfeijing").getTargets(player, event.target);
				return left.length || right.length;
			},
			getTargets(source, target) {
				let left = [],
					right = [],
					left2 = source,
					right2 = source;
				while (!(left2 == target && right2 == target)) {
					if (left2 != target) {
						left2 = left2.getPrevious();
						if (left2.isIn() && left2 != target) {
							left.push(left2);
						}
					}
					if (right2 != target) {
						right2 = right2.getNext();
						if (right2.isIn() && right2 != target) {
							right.push(right2);
						}
					}
				}
				return [left, right];
			},
			async cost(event, trigger, player) {
				const [left, right] = get.info(event.skill).getTargets(player, trigger.target);
				if (left.length && right.length) {
					const shun = `顺时针：${left.map(i => get.translation(i)).join("、")}`,
						ni = `逆时针：${right.map(i => get.translation(i)).join("、")}`,
						prompt = "令顺时针或逆时针上的角色同时展示并依次弃置一张手牌，然后你可令弃置一种颜色牌的所有角色成为此【杀】额外目标";
					const result = await player
						.chooseButton([
							get.prompt(event.skill),
							prompt,
							[
								[
									[left, shun],
									[right, ni],
								],
								"textbutton",
							],
						])
						.set("ai", button => {
							const player = get.player(),
								trigger = get.event().getTrigger(),
								targets = button.link;
							let eff = 0;
							for (let target of targets) {
								if (lib.filter.targetEnabled2(trigger.card, player, target)) {
									eff += get.effect(target, trigger.card, player, player);
								}
							}
							return eff;
						})
						.forResult();
					event.result = {
						bool: result?.bool,
						targets: result?.links?.[0],
					};
				} else {
					const targets = left.length ? left : right;
					event.result = await player.chooseBool(get.prompt2(event.skill, targets)).forResult();
					if (event.result?.bool) {
						event.result.targets = targets;
					}
				}
			},
			async content(event, trigger, player) {
				const targets = event.targets.filter(target => target.countCards("h", card => lib.filter.cardDiscardable(card, target, "old_mbfeijing")));
				if (targets.length) {
					const next = player
						.chooseCardOL(targets, "h", true, "飞径：展示并弃置一张手牌", (card, player) => {
							return lib.filter.cardDiscardable(card, player, "old_mbfeijing");
						})
						.set("ai", get.unuseful)
						.set("aiCard", target => {
							const cards = target.getCards("h");
							return { bool: true, cards: [cards.randomGet()] };
						});
					next._args.remove("glow_result");
					const result = await next.forResult();
					const cards = [];
					for (let i = 0; i < result.length; i++) {
						const current = targets[i],
							card = result[i].cards[0];
						cards.push(card);
					}
					event.videoId = lib.status.videoId++;
					game.log(player, "展示了", targets, "的", cards);
					game.broadcastAll(
						(targets, cards, id, player) => {
							const dialog = ui.create.dialog(get.translation(player) + "发动了【飞径】", cards);
							dialog.videoId = id;
							for (let i = 0; i < targets.length; i++) {
								game.createButtonCardsetion(`${targets[i].getName(true)}${get.translation(cards[i].suit)}`, dialog.buttons[i]);
							}
						},
						targets,
						cards,
						event.videoId,
						player
					);
					await game.delay(4);
					game.broadcastAll("closeDialog", event.videoId);
					const colors = {};
					for (let i = 0; i < result.length; i++) {
						const current = targets[i],
							card = result[i].cards[0],
							color = get.color(card, current);
						await current.discard([card]);
						if (!colors[color]) {
							colors[color] = [];
						}
						colors[color].add(current);
					}
					const list = [];
					for (let color in colors) {
						list.add([colors[color], `${get.translation(color)}：${colors[color].map(i => get.translation(i)).join("、")}`]);
					}
					if (!list.length) {
						return;
					}
					const result2 = await player
						.chooseButton(["飞径：是否令弃置一种颜色牌的所有角色成为此【杀】额外目标？", [list, "textbutton"]])
						.set("ai", button => {
							const player = get.player(),
								trigger = get.event().getTrigger(),
								targets = button.link;
							let eff = 0;
							for (let target of targets) {
								if (lib.filter.targetEnabled2(trigger.card, player, target)) {
									eff += get.effect(target, trigger.card, player, player);
								}
							}
							return eff;
						})
						.forResult();
					if (result2?.bool && result2.links?.length) {
						const targetx = result2.links[0].filter(target => lib.filter.targetEnabled2(trigger.card, player, target));
						if (targetx.length) {
							player.line(targetx);
							trigger.targets.addArray(targetx);
							trigger.getParent().feijingExtra ??= [];
							trigger.getParent().feijingExtra.addArray(targetx);
						}
					}
				}
			},
			group: "old_mbfeijing_viewas",
			subSkill: {
				viewas: {
					audio: ["mbfeijing2.mp3", "mbfeijing4.mp3"],
					enable: ["chooseToRespond", "chooseToUse"],
					filterCard(card, player) {
						return get.type2(card) == "trick" && get.tag(card, "damage");
					},
					position: "hes",
					viewAs: {
						name: "sha",
					},
					viewAsFilter(player) {
						if (!player.countCards("hes", card => get.type2(card) == "trick" && get.tag(card, "damage"))) {
							return false;
						}
					},
					prompt: "将一张伤害类锦囊牌当杀使用或打出",
					check(card) {
						const val = get.value(card);
						if (_status.event.name == "chooseToRespond") {
							return 1 / Math.max(0.1, val);
						}
						return 7 - val;
					},
					ai: {
						skillTagFilter(player) {
							if (!player.countCards("hes", card => get.type2(card) == "trick" && get.tag(card, "damage"))) {
								return false;
							}
						},
						respondSha: true,
					},
				},
			},
		},
		old_mbxiaoge: {
			audio: "mbxiaoge",
			trigger: {
				source: "damageBegin2",
				player: "useCardAfter",
			},
			forced: true,
			filter(event, player) {
				if (event.name == "damage") {
					const evt = event.getParent("useCard", true);
					return evt?.feijingExtra?.includes(event.player) && evt?.targets?.includes(event.player) && evt?.card?.name == "sha";
				}
				return event.card.name == "sha" && event.targets.length == 1;
			},
			logTarget(event, player) {
				return event[event.name == "damage" ? "player" : "targets"];
			},
			logAudio(event) {
				if (event.name == "damage") {
					return 2;
				}
				return ["mbxiaoge3.mp3", "mbxiaoge4.mp3"];
			},
			async content(event, trigger, player) {
				if (trigger.name == "damage") {
					trigger.cancel();
					if (player.isDamaged()) {
						await player.recover();
					}
					const target = trigger.player,
						evt = trigger.getParent("useCard", true);
					let cards;
					target.getHistory("lose", evtx => {
						const evtv = evtx.getParent(2);
						if (evtv?.name != "old_mbfeijing") {
							return false;
						}
						if (evtv?.getTrigger()?.getParent() != evt) {
							return false;
						}
						cards = evtx.cards2.filterInD("d");
					});
					if (cards?.length) {
						await player.gain(cards, "gain2");
					}
				} else {
					const card = { name: "juedou", isCard: true },
						target = event.targets[0];
					if (player.canUse(card, target)) {
						await player.useCard(card, target);
					}
				}
			},
		},
		//友徐庶
		old_friendxiaxing: {
			audio: "friendxiaxing",
			trigger: {
				global: "phaseBefore",
				player: "enterGame",
			},
			filter(event, player) {
				if (event.name === "phase") return game.phaseNumber === 0;
				return true;
			},
			forced: true,
			locked: true,
			async content(event, trigger, player) {
				const card = game.createCard2("xuanjian", "spade", 9);
				await player.gain([card], "gain2");
				await player.chooseUseTarget(card, true, false);
			},
			group: "old_friendxiaxing_gain",
			subSkill: {
				gain: {
					audio: "riendxiaxing",
					trigger: { global: ["loseEnd", "equipEnd", "addJudgeEnd", "gainEnd", "loseAsyncEnd", "addToExpansionEnd"] },
					filter(event, player) {
						if (!player.getStorage("friendqihui").length) return false;
						return event.getd()?.some(i => i.name == "xuanjian");
					},
					async cost(event, trigger, player) {
						const storage = player.getStorage("friendqihui");
						const gains = trigger.getd().filter(i => i.name == "xuanjian");
						const { links, bool } = await player
							.chooseButton(["###" + get.prompt("old_friendxiaxing") + '###<div class="text center">移去1枚“启诲”标记，获得' + get.translation(gains) + "</div>", [storage.map(c => [c, get.translation(c)]), "tdnodes"]])
							.set("ai", button => {
								const player = get.player();
								if (player.getVEquip("xuanjian")) return 0;
								return (
									1 +
									Math.random() +
									player.countCards("he", card => {
										return get.type2(card) === button.link && player.hasValueTarget(card);
									})
								);
							})
							.forResult();
						event.result = {
							bool: bool,
							cost_data: links,
						};
					},
					async content(event, trigger, player) {
						player.unmarkAuto("friendqihui", event.cost_data);
						await player.gain(
							trigger.getd().filter(i => i.name == "xuanjian"),
							"gain2"
						);
					},
				},
			},
		},
		//势太史慈
		old_potzhanlie: {
			audio: "potzhanlie",
			trigger: { global: "phaseBegin" },
			forced: true,
			locked: false,
			logAudio: () => 2,
			content() {
				const effectMap = new Map([
					["hp", player.getHp()],
					["damagedHp", player.getDamagedHp()],
					["countplayer", game.countPlayer()],
				]);
				const num = effectMap.get(player.storage.old_potzhanlie) || player.getAttackRange();
				player.addTempSkill("old_potzhanlie_addMark");
				if (num > 0) {
					player.addMark("old_potzhanlie_addMark", num, false);
				}
			},
			get limit() {
				return 8;
			},
			group: "old_potzhanlie_lie",
			subSkill: {
				addMark: {
					charlotte: true,
					onremove: true,
					audio: "potzhanlie3.mp3",
					trigger: { global: ["loseAfter", "loseAsyncAfter", "cardsDiscardAfter"] },
					getIndex(event, player) {
						return Math.min(
							event.getd().filter(i => i.name === "sha").length,
							get.info("old_potzhanlie").limit - player.countMark("old_potzhanlie_lie"),
							Math.max(
								player.countMark("old_potzhanlie_addMark") -
									game
										.getGlobalHistory(
											"everything",
											evt => {
												if (evt === event) {
													return false;
												}
												return ["lose", "loseAsync", "cardsDiscard"].includes(evt.name) && evt.getd().some(i => i.name === "sha");
											},
											event
										)
										.reduce((sum, evt) => sum + evt.getd().filter(i => i.name === "sha").length, 0),
								0
							)
						);
					},
					forced: true,
					content() {
						player.addMark("old_potzhanlie_lie", 1);
					},
					intro: { content: "本回合前#张【杀】进入弃牌堆后，获得等量“烈”标记" },
				},
				lie: {
					trigger: { player: "phaseUseEnd" },
					filter: (event, player) => player.hasUseTarget(new lib.element.VCard({ name: "sha" }), false),
					direct: true,
					content() {
						const str = player.hasMark("old_potzhanlie_lie") ? "移去所有“烈”，" : "";
						player.chooseUseTarget("###" + get.prompt("old_potzhanlie") + '###<div class="text center">' + str + "视为使用一张无次数限制的【杀】</div>", new lib.element.VCard({ name: "sha" }), false).set("oncard", () => {
							const event = get.event(),
								{ player } = event,
								num = player.countMark("old_potzhanlie_lie");
							player.addTempSkill("old_potzhanlie_buff");
							player.clearMark("old_potzhanlie_lie");
							event.set("old_potzhanlie", Math.floor(num / 2));
						}).logSkill = "old_potzhanlie";
					},
					marktext: "烈",
					intro: {
						name: "烈",
						content: "mark",
					},
				},
				buff: {
					charlotte: true,
					trigger: { player: "useCard1" },
					filter: event => event?.old_potzhanlie,
					forced: true,
					locked: false,
					popup: false,
					async content(event, trigger, player) {
						const num = trigger.old_potzhanlie,
							str = get.translation(trigger.card);
						const result = await player
							.chooseButton([
								"战烈：是否选择至多" + get.cnNumber(num) + "项执行？",
								[
									[
										["目标+1", "令" + str + "可以额外指定一个目标"],
										["伤害+1", "令" + str + "基础伤害值+1"],
										["弃牌响应", "令" + str + "需额外弃置一张牌方可响应"],
										["摸牌", str + "结算完毕后，你摸两张牌"],
									],
									"textbutton",
								],
							])
							.set("selectButton", [1, num])
							.set("ai", button => {
								const player = get.player(),
									trigger = get.event().getTrigger(),
									choice = button.link;
								switch (choice) {
									case "目标+1":
										return Math.max(
											...game
												.filterPlayer(target => {
													return !trigger.targets?.includes(target) && lib.filter.targetEnabled2(trigger.card, player, target) && lib.filter.targetInRange(trigger.card, player, target);
												})
												.map(target => get.effect(target, trigger.card, player, player))
										);
									case "伤害+1":
										return (trigger.targets || []).reduce((sum, target) => {
											const effect = get.damageEffect(target, player, player);
											return (
												sum +
												effect *
													(target.hasSkillTag("filterDamage", null, {
														player: player,
														card: trigger.card,
													})
														? 1
														: 1 + (trigger.baseDamage || 1) + (trigger.extraDamage || 0))
											);
										}, 0);
									case "弃牌响应":
										return (trigger.targets || []).reduce((sum, target) => {
											const card = get.copy(trigger.card);
											game.setNature(card, "stab");
											return sum + get.effect(target, card, player, player);
										}, 0);
									case "摸牌":
										return get.effect(player, { name: "draw" }, player, player) * 2;
								}
							})
							.forResult();
						if (result.bool) {
							const choices = result.links;
							game.log(player, "选择了", "#g【战烈】", "的", "#y" + choices);
							for (const choice of choices) {
								player.popup(choice);
								switch (choice) {
									case "目标+1":
										player
											.when("useCard2")
											.filter(evt => evt === trigger)
											.step(async (event, trigger, player) => {
												const result = await player
													.chooseTarget("是否为" + get.translation(trigger.card) + "增加一个目标？", (card, player, target) => {
														const evt = get.event().getTrigger();
														return !evt.targets.includes(target) && lib.filter.targetEnabled2(evt.card, player, target) && lib.filter.targetInRange(evt.card, player, target);
													})
													.set("ai", target => {
														const player = get.player(),
															evt = get.event().getTrigger();
														return get.effect(target, evt.card, player);
													})
													.forResult();
												if (result?.bool && result.targets?.length) {
													const [target] = result.targets;
													player.line(target, trigger.card.nature);
													trigger.targets.add(target);
													game.log(target, "成为了", trigger.card, "的额外目标");
												}
											});
										break;
									case "伤害+1":
										trigger.baseDamage++;
										game.log(trigger.card, "造成的伤害", "#y+1");
										break;
									case "弃牌响应":
										player.addTempSkill("old_potzhanlie_guanshi");
										player.markAuto("old_potzhanlie_guanshi", [trigger.card]);
										break;
									case "摸牌":
										player
											.when("useCardAfter")
											.filter(evt => evt === trigger)
											.step(async () => await player.draw(2));
										break;
								}
							}
						}
					},
				},
				guanshi: {
					charlotte: true,
					onremove: true,
					audio: "potzhanlie",
					trigger: { player: "useCardToBegin" },
					filter(event, player) {
						if (!event.target?.isIn()) {
							return false;
						}
						return !event.getParent().directHit.includes(event.target) && player.getStorage("old_potzhanlie_guanshi").includes(event.card);
					},
					forced: true,
					logTarget: "target",
					async content(event, trigger, player) {
						const { target } = trigger;
						const result = await target
							.chooseToDiscard("战烈：弃置一张牌，否则不可响应" + get.translation(trigger.card))
							.set("ai", card => {
								const player = get.player(),
									trigger = get.event().getTrigger();
								if (get.effect(player, trigger.card, trigger.player, player) >= 0) {
									return 0;
								}
								const num = player.countCards("hs", { name: "shan" });
								if (num === 0) {
									return 0;
								}
								if (card.name === "shan" && num <= 1) {
									return 0;
								}
								return 8 - get.value(card);
							})
							.forResult();
						if (!result?.bool) {
							trigger.set("directHit", true);
							game.log(target, "不可响应", trigger.card);
						}
					},
				},
			},
		},
		old_pothanzhan: {
			audio: "pothanzhan",
			enable: "phaseUse",
			usable: 1,
			filterTarget: lib.filter.notMe,
			async content(event, trigger, player) {
				const target = event.targets[0];
				for (const drawer of [player, target]) {
					const num = (() => {
						return (
							({
								hp: drawer.getHp(),
								damagedHp: drawer.getDamagedHp(),
								countplayer: game.countPlayer(),
							}[player.storage.old_pothanzhan] ?? drawer.maxHp) - drawer.countCards("h")
						);
					})();
					if (num > 0) {
						await drawer.draw(Math.min(num, 3));
					}
				}
				const juedou = new lib.element.VCard({ name: "juedou" });
				if (player.canUse(juedou, target)) {
					await player.useCard(juedou, target, false);
				}
			},
			ai: {
				order(item, player) {
					if ((player.countCards("h", { name: "sha" }) || player.maxHp - player.countCards("h")) > 1) {
						return 10;
					}
					return 1;
				},
				result: {
					target(player, target) {
						return (
							get.effect(target, new lib.element.VCard({ name: "juedou" }), player, player) -
							Math.max(
								0,
								Math.min(
									3,
									(() => {
										return (
											({
												hp: target.getHp(),
												damagedHp: target.getDamagedHp(),
												countplayer: game.countPlayer(),
											}[player.storage.old_pothanzhan] ?? target.maxHp) - target.countCards("h")
										);
									})()
								)
							) *
								get.effect(target, { name: "draw" }, player, player)
						);
					},
				},
			},
		},
		old_potzhenfeng: {
			limited: true,
			audio: "potzhenfeng",
			enable: "phaseUse",
			filter(event, player) {
				return player.isDamaged() || ["old_pothanzhan", "old_potzhanlie"].some(skill => player.hasSkill(skill, null, null, false));
			},
			skillAnimation: true,
			animationColor: "metal",
			logAudio: index => (typeof index === "number" ? "potzhenfeng" + index + ".mp3" : 2),
			chooseButton: {
				dialog(event, player) {
					const dialog = ui.create.dialog("振锋：你可以选择一项", "hidden");
					dialog.add([
						[
							["recover", "回复2点体力"],
							["cover", "修改〖酣战〗和〖战烈〗描述中的“X”值"],
						],
						"textbutton",
					]);
					return dialog;
				},
				filter(button, player) {
					switch (button.link) {
						case "recover":
							return player.isDamaged();
						case "cover":
							return ["old_pothanzhan", "old_potzhanlie"].some(skill => player.hasSkill(skill, null, null, false));
					}
				},
				check(button) {
					const player = get.player();
					if (button.link == "recover") {
						return player.getHp() + player.countCards("h", { name: "tao" }) < 2;
					}
					if (button.link == "cover") {
						let numbers = [player.getHp(), player.getDamagedHp(), game.countPlayer()];
						if (numbers.some(c => c > player.getAttackRange())) {
							return Math.max(...numbers) * 2;
						}
					}
					return 0.1;
				},
				backup(links) {
					return {
						item: links[0],
						skillAnimation: true,
						animationColor: "metal",
						log: false,
						async content(event, trigger, player) {
							player.awakenSkill("old_potzhenfeng");
							if (get.info(event.name).item === "recover") {
								player.logSkill("old_potzhenfeng", null, null, null, [null]);
								player.changeSkin({ characterName: "old_pot_taishici" }, "pot_taishici_shadow1");
								await player.recover(2);
							} else {
								let dialog = [],
									skills = ["old_pothanzhan", "old_potzhanlie"].filter(skill => player.hasSkill(skill, null, null, false)),
									list = [
										["hp", "当前体力值"],
										["damagedHp", "当前已损失体力值"],
										["countplayer", "场上存活角色数"],
									];
								dialog.push("振锋：修改" + skills.map(skill => "〖" + get.translation(skill) + "〗").join("和") + "描述中的“X”为...");
								for (const skill of skills) {
									dialog.push('<div class="text center">' + get.translation(skill) + "</div>");
									dialog.push([list.map(item => [item[0] + "|" + skill, item[1]]), "tdnodes"]);
								}
								const result = await player
									.chooseButton(dialog, [1, Math.min(2, skills.length)], true)
									.set("filterButton", button => {
										return !ui.selected.buttons.some(but => but.link.split("|")[1] === button.link.split("|")[1]);
									})
									.set("ai", button => {
										const player = get.player();
										switch (button.link.split("|")[0]) {
											case "hp":
												return player.getHp();
											case "damagedHp":
												return player.getDamagedHp();
											case "countplayer":
												return game.countPlayer();
										}
									})
									.forResult();
								if (result?.bool && result.links?.length) {
									player.logSkill("old_potzhenfeng", null, null, null, [get.rand(3, 4)]);
									let changeList = [];
									for (const link of result.links) {
										const [change, skill] = link.split("|");
										if (skill == "old_pothanzhan") {
											changeList.push(change);
										}
										player.storage[skill] = change;
										player.popup(skill);
										game.log(player, "修改", "#g【" + get.translation(skill) + "】", "的", "#yX", "为", "#g" + list.find(item => item[0] === change)[1]);
									}
									if (changeList[0]) {
										switch (changeList[0]) {
											case "hp":
												player.changeSkin({ characterName: "old_pot_taishici" }, "pot_taishici_shadow2");
												break;
											case "damagedHp":
												player.changeSkin({ characterName: "old_pot_taishici" }, "pot_taishici_shadow3");
												break;
											case "countplayer":
												player.changeSkin({ characterName: "old_pot_taishici" }, "pot_taishici_shadow4");
										}
									} else {
										player.changeSkin({ characterName: "old_pot_taishici" }, "pot_taishici_shadow1");
									}
								}
							}
						},
					};
				},
				prompt(links) {
					return `点击“确定”，${links[0] === "recover" ? "回复2点体力" : "修改〖酣战〗和〖战烈〗描述中的“X”值"}`;
				},
			},
			subSkill: {
				backup: {},
			},
			ai: {
				order: 15,
				threaten: 2,
				result: {
					player(player) {
						if ([player.getHp(), player.getDamagedHp(), game.countPlayer()].some(c => c > player.getAttackRange())) {
							return 10;
						}
						return get.recoverEffect(player, player, player);
					},
				},
			},
		},
		//庞羲
		old_mbxuye: {
			audio: "mbxuye",
			trigger: { global: "damageEnd" },
			filter(event, player) {
				return event.player.isMinHandcard() && event.player.isAlive();
			},
			logTarget: "player",
			check(event, player) {
				return get.attitude(player, event.player) > 0;
			},
			logAudio: index => "mbxuye" + (typeof index === "number" ? index : [1, 3].randomGet()) + ".mp3",
			async content(event, trigger, player) {
				const target = event.targets[0]; //兼容匡襄后续效果才这么写的
				const isMax = target.isMaxHandcard();
				await target.draw(2);
				//player.logSkill("mbxuye", [target], null, null, !isMax && target.isMaxHandcard() && target.countCards("ej") > 0 ? [1] : [get.rand(2, 3)]);
				if (!isMax && target.isMaxHandcard() && target.countCards("hej") > 0) {
					player.logSkill("old_mbxuye", target, null, null, [2]);
					const result = await player.choosePlayerCard(`蓄业：将${get.translation(target)}场上一张牌置于牌堆顶`, target, "hej", true).forResult();
					const card = result.cards[0];
					target.$throw(card, 1000);
					game.log(player, "将", card, "置于牌堆顶");
					await target.lose(card, ui.cardPile, "insert");
					game.updateRoundNumber();
				}
			},
			ai: { expose: 0.2 },
		},
		old_mbkuangxiang: {
			audio: "mbkuangxiang",
			enable: "phaseUse",
			filter(event, player) {
				return game.hasPlayer(target => {
					return target != player && target.countCards("h") <= player.countCards("h");
				});
			},
			filterTarget(card, player, target) {
				return target != player && target.countCards("h") <= player.countCards("h");
			},
			usable: 1,
			logAudio: index => "mbkuangxiang" + [1, 3].randomGet() + ".mp3",
			async content(event, trigger, player) {
				const target = event.targets[0];
				player.addTempSkill("old_mbkuangxiang_effect", { player: "phaseUseBegin" });
				player.markAuto("old_mbkuangxiang_effect", [player, target]);
				await player.swapHandcards(target);
			},
			derivation: "old_mbxuye",
			//ai待补充
			ai: {
				order: 6,
				result: {
					target(player, target) {
						const hs1 = player.getCards("h"),
							hs2 = target.getCards("h");
						return get.value(hs1, player) - get.value(hs2, target);
					},
				},
			},
			group: ["old_mbkuangxiang_mark"],
			subSkill: {
				//给交换的牌上标记
				mark: {
					charlotte: true,
					trigger: { global: "loseAsyncBegin" },
					filter(event, player) {
						return event.getParent(2).name == "old_mbkuangxiang" && event.getParent(2).player == player;
					},
					silent: true,
					firstDo: true,
					content() {
						//考虑场上出现复数个技能的情况
						game.broadcastAll(player => {
							lib.translate["old_mbkuangxiang_" + player.playerid] = "匡襄";
						}, player);
						trigger.set("gaintag", ["old_mbkuangxiang_" + player.playerid]);
					},
				},
				effect: {
					charlotte: true,
					onremove(player, skill) {
						game.filterPlayer(target => {
							return player.storage[skill].includes(target);
						}).forEach(target => target.removeGaintag("old_mbkuangxiang_" + player.playerid));
						delete player.storage[skill];
					},
					intro: { content: "players" },
					audio: "mbkuangxiang2.mp3",
					trigger: { global: ["loseAfter", "equipAfter", "addJudgeAfter", "gainAfter", "loseAsyncAfter", "addToExpansionAfter"] },
					getIndex(event, player) {
						return game
							.filterPlayer2(target => {
								if (!player.getStorage("old_mbkuangxiang_effect").includes(target)) {
									return false;
								}
								let evt = event.getl(target);
								if (!evt?.hs?.length) {
									return false;
								}
								if (event.name == "lose") {
									return Object.values(event.gaintag_map)
										.flat()
										.includes("old_mbkuangxiang_" + player.playerid);
								}
								return target.hasHistory("lose", evtx => {
									return (
										evtx.getParent() == event &&
										evtx.hs.length &&
										Object.values(evtx.gaintag_map)
											.flat()
											.includes("old_mbkuangxiang_" + player.playerid)
									);
								});
							})
							.sortBySeat();
					},
					check: () => true,
					prompt2: "你执行一次〖蓄业〗的效果：摸两张牌，然后若手牌数因此成为全场最多，你将场上的一张牌置于牌堆顶。",
					filter(event, player, triggername, target) {
						return !target.hasCard(card => card.hasGaintag("old_mbkuangxiang_" + player.playerid), "h");
					},
					async content(event, trigger, player) {
						var next = game.createEvent("old_mbkuangxiang_xuye");
						next.set("player", player);
						next.set("targets", [player]);
						next.setContent(lib.skill.old_mbxuye.content);
					},
				},
			},
		},
		//势娄圭
		old_potjiyu: {
			audio: "potjiyu",
			enable: "phaseUse",
			filter(event, player) {
				return player.hasCard(card => lib.filter.cardDiscardable(card, player), "h");
			},
			filterCard: lib.filter.cardDiscardable,
			check(card) {
				return 8 - get.value(card);
			},
			prompt() {
				return lib.translate["old_potjiyu_info"].split("②")[0].slice(1);
			},
			usable: 1,
			content() {
				let gains = [];
				let types = [get.type2(cards[0])];
				while (true) {
					const card = get.cardPile2(card => !types.includes(get.type2(card)));
					if (card) {
						gains.push(card);
						types.push(get.type2(card));
					} else break;
				}
				if (gains.length) {
					player.addTempSkill("old_potjiyu_effect", ["phaseBefore", "phaseChange", "phaseAfter", ...lib.phaseName.map(i => i + "After")]);
					player.gain(gains, "gain2").gaintag.add("old_potjiyu_effect");
				}
			},
			ai: {
				order: 10,
				result: { player: 1 },
			},
			group: "old_potjiyu_refresh",
			subSkill: {
				effect: {
					charlotte: true,
					onremove(player, skill) {
						player.removeGaintag(skill);
						if (typeof player.storage?.counttrigger?.["old_potjiyu_refresh"] === "number") {
							delete player.storage.counttrigger["old_potjiyu_refresh"];
						}
					},
				},
				refresh: {
					audio: "jsrgshacheng",
					trigger: {
						player: "loseAfter",
						global: ["equipAfter", "addJudgeAfter", "gainAfter", "loseAsyncAfter", "addToExpansionAfter"],
					},
					filter(event, player) {
						if (player.hasCard(card => card.hasGaintag("old_potjiyu_effect"), "h") || typeof player.getStat("skill")?.["old_potjiyu"] !== "number") return false;
						const evt = event.getl(player);
						if (!evt?.hs?.length) return false;
						if (event.name === "lose") {
							return Object.values(event.gaintag_map).flat().includes("old_potjiyu_effect");
						}
						return player.hasHistory("lose", evt => {
							if (event !== evt.getParent()) return false;
							return Object.values(evt.gaintag_map).flat().includes("old_potjiyu_effect");
						});
					},
					forced: true,
					locked: false,
					content() {
						delete player.getStat("skill")["old_potjiyu"];
						player.popup("old_potjiyu");
						game.log(player, "重置了技能", "#g【" + get.translation("old_potjiyu") + "】");
					},
				},
			},
		},
		//势陈到
		old_pothongyi: {
			audio: "pothongyi",
			locked: true,
			popup: false,
			trigger: { player: "phaseZhunbeiBegin" },
			filter(event, player) {
				return player.hasMark("old_pothongyi");
			},
			//提前若为
			maxMark() {
				//if (get.mode() == "doudizhu") return 1;
				return 4;
			},
			logAudio: index => (typeof index === "number" ? "pothongyi" + index + ".mp3" : 2),
			async cost(event, trigger, player) {
				const num = player.countMark("old_pothongyi");
				let list = [`摸${get.cnNumber(num)}张牌`, `移去所有“毅”标记，视为使用${get.cnNumber(num)}张【杀】`];
				const result = await player
					.chooseControl()
					.set("prompt", get.translation(event.skill) + "：请选择一项执行")
					.set("choiceList", list)
					.set("num", num)
					.set("ai", () => {
						const { player, num } = get.event();
						const card = new lib.element.VCard({ name: "sha", isCard: true });
						if (num < get.info("old_pothongyi").maxMark() || !player.hasValueTarget(card)) return 0;
						return 1;
					})
					.forResult();
				event.result = { bool: true, cost_data: result.index };
			},
			async content(event, trigger, player) {
				player.logSkill("old_pothongyi", null, null, null, [get.rand(1, 2)]);
				const control = event.cost_data;
				const num = player.countMark("old_pothongyi");
				if (!num) return;
				if (control === 0) {
					await player.draw(num);
				} else if (control === 1) {
					player.clearMark("old_pothongyi");
					for (let i = 0; i < num; i++) {
						const card = new lib.element.VCard({ name: "sha", isCard: true });
						if (player.hasUseTarget(card)) await player.chooseUseTarget(card, true, false).set("prompt2", `还可以再使用${num - i}张`);
						else break;
					}
				}
			},
			marktext: "毅",
			intro: {
				name2: "毅",
				content: "mark",
			},
			group: "old_pothongyi_mark",
			subSkill: {
				mark: {
					audio: ["pothongyi3.mp3", "pothongyi4.mp3"],
					trigger: {
						global: "phaseBefore",
						source: "damageSource",
						player: ["enterGame", "damageEnd"],
					},
					getIndex: event => (event.name === "damage" ? event.num : 1),
					filter(event, player) {
						if (player.countMark("old_pothongyi") >= get.info("old_pothongyi").maxMark()) return false;
						return event.name != "phase" || game.phaseNumber == 0;
					},
					forced: true,
					async content(event, trigger, player) {
						const num = get.info("old_pothongyi").maxMark() - player.countMark("old_pothongyi");
						player.addMark("old_pothongyi", Math.min(trigger.name === "damage" ? 1 : 2, num));
					},
				},
			},
		},
		//势于吉
		old_potdaozhuan: {
			audio: "potdaozhuan",
			enable: "chooseToUse",
			logAudio: index => (typeof index === "number" ? "potdaozhuan" + index + ".mp3" : 2),
			filter(event, player) {
				if (event.old_potdaozhuan) return false;
				let num = game
					.getGlobalHistory("useCard")
					.map(evt => get.type2(evt.card))
					.unique().length;
				num -= player.countCards("he");
				if (_status.currentPhase?.isIn() && _status.currentPhase !== player) num -= _status.currentPhase.countCards("he");
				if (num > 0) return false;
				return get
					.inpileVCardList(info => {
						const name = info[2];
						if (get.type(name) !== "basic") return false;
						return !player.getStorage("old_potdaozhuan_used").includes(name);
					})
					.some(card => event.filterCard(new lib.element.VCard({ name: card[2], nature: card[3] }), player, event));
			},
			chooseButton: {
				dialog(event, player) {
					return ui.create.dialog("道转", [get.inpileVCardList(info => get.type(info[2]) === "basic"), "vcard"]);
				},
				filter(button, player) {
					const event = get.event().getParent();
					if (player.getStorage("old_potdaozhuan_used").includes(button.link[2])) return false;
					return event.filterCard(new lib.element.VCard({ name: button.link[2], nature: button.link[3] }), player, event);
				},
				check(button) {
					const event = get.event().getParent();
					if (event.type !== "phase") return 1;
					return get.player().getUseValue(new lib.element.VCard({ name: button.link[2], nature: button.link[3] }));
				},
				prompt(links, player) {
					const num = game
						.getGlobalHistory("useCard")
						.map(evt => get.type2(evt.card))
						.unique().length;
					let prompt = "";
					if (num > 0) {
						prompt += "将你";
						if (_status.currentPhase?.isIn() && _status.currentPhase !== player) prompt += "与" + get.translation(_status.currentPhase);
						prompt += "的共计" + get.cnNumber(num) + "张牌置入弃牌堆，";
					}
					return '###道转###<div class="text center">' + prompt + "视为使用" + (get.translation(links[0][3]) || "") + "【" + get.translation(links[0][2]) + "】</div>";
				},
				backup(links) {
					return {
						filterCard: () => false,
						selectCard: -1,
						viewAs: { name: links[0][2], nature: links[0][3] },
						log: false,
						async precontent(event, trigger, player) {
							const num = game
								.getGlobalHistory("useCard")
								.map(evt => get.type2(evt.card))
								.unique().length;
							let result;
							if (num === 0) result = { bool: true };
							else {
								const goon = _status.currentPhase?.isIn() && _status.currentPhase !== player;
								let prompt = "将你";
								if (goon) prompt += "与" + get.translation(_status.currentPhase);
								prompt += "的共计" + get.cnNumber(num) + "张牌置入弃牌堆";
								let dialog = ["道转：" + prompt];
								if (player.countCards("h")) {
									dialog.push('<div class="text center">你的手牌</div>');
									dialog.push(player.getCards("h"));
								}
								if (player.countCards("e")) {
									dialog.push('<div class="text center">你的装备牌</div>');
									dialog.push(player.getCards("e"));
								}
								if (goon) {
									const target = _status.currentPhase;
									if (target.countCards("h")) {
										const cards = target.getCards("h");
										dialog.push('<div class="text center">' + get.translation(target) + "的手牌</div>");
										if (player.hasSkillTag("viewHandcard", null, target, true)) dialog.push(cards);
										else dialog.push([cards.slice().randomSort(), "blank"]);
									}
									if (target.countCards("e")) {
										dialog.push('<div class="text center">' + get.translation(target) + "的装备牌</div>");
										dialog.push(target.getCards("e"));
									}
								}
								result = await player
									.chooseButton(dialog, num, true)
									.set("ai", button => {
										const player = get.player(),
											source = get.owner(button.link);
										return get.value(button.link, get.owner(source)) * Math.sign(-get.attitude(player, source));
									})
									.forResult();
							}
							if (result?.bool) {
								player.logSkill("old_potdaozhuan", null, null, null, [get.rand(1, 2)]);
								player.addTempSkill("old_potdaozhuan_used", "roundStart");
								player.markAuto("old_potdaozhuan_used", [event.result.card.name]);
								if (result.links?.length) {
									const target = _status.currentPhase;
									const owners = result.links.map(i => get.owner(i)).unique();
									if (owners.length <= 1) {
										await owners[0].loseToDiscardpile(result.links);
										if (owners[0] === target) {
											player.tempBanSkill("old_potdaozhuan", "roundStart");
											player.logSkill("old_potdaozhuan", null, null, null, [get.rand(3, 4)]);
										}
									} else {
										const cards = [player.getCards("he", i => result.links.includes(i)), target.getCards("he", i => result.links.includes(i))];
										await game
											.loseAsync({
												lose_list: [
													[player, cards[0]],
													[target, cards[1]],
												],
											})
											.setContent(get.info("mbzengou").loseToDiscardpileMultiple);
									}
								}
								return;
							}
							const evt = event.getParent();
							evt.set("old_potdaozhuan", true);
							evt.goto(0);
						},
					};
				},
			},
			hiddenCard(player, name) {
				if (player.isTempBanned("old_potdaozhuan")) return false;
				return get.type(name) === "basic" && !player.getStorage("old_potdaozhuan_used").includes(name);
			},
			ai: {
				fireAttack: true,
				respondSha: true,
				respondShan: true,
				skillTagFilter(player, tag, arg) {
					if (arg === "respond") return false;
					return get.info("old_potdaozhuan").hiddenCard(
						player,
						(() => {
							switch (tag) {
								case "fireAttack":
									return "sha";
								default:
									return tag.slice("respond".length).toLowerCase();
							}
						})()
					);
				},
				order(item, player) {
					if (player && _status.event.type === "phase") {
						let max = 0,
							names = get.inpileVCardList(info => {
								const name = info[2];
								if (get.type(name) !== "basic") return false;
								return !player.getStorage("old_potdaozhuan_used").includes(name);
							});
						names = names.map(namex => new lib.element.VCard({ name: namex[2], nature: namex[3] }));
						names.forEach(card => {
							if (player.getUseValue(card) > 0) {
								let temp = get.order(card);
								if (temp > max) max = temp;
							}
						});
						return max + (max > 0 ? 0.2 : 0);
					}
					return 10;
				},
				result: {
					player(player) {
						if (_status.event.dying) return get.attitude(player, _status.event.dying);
						return 1;
					},
				},
			},
			subSkill: {
				backup: {},
				used: {
					charlotte: true,
					onremove: true,
					intro: { content: "本轮已使用牌名：$" },
				},
			},
		},
		old_potfuji: {
			audio: "potfuji",
			enable: "phaseUse",
			filter(event, player) {
				return game.countPlayer(t => t.countCards("h")) > 0 && game.hasPlayer(target => target !== player);
			},
			usable: 1,
			chooseButton: {
				dialog(event, player) {
					const targets = game.filterPlayer(target => target.countCards("h"));
					return ui.create.dialog(
						"符济",
						...targets
							.map(target => {
								let list = [],
									cards = target.getCards("h");
								list.push('<div class="text center">' + get.translation(target) + "的手牌</div>");
								if (target === player || player.hasSkillTag("viewHandcard", null, target, true)) list.push(cards);
								else list.push([cards.slice().randomSort(), "blank"]);
								return list;
							})
							.flat(),
						"hidden"
					);
				},
				select: () => [1, game.countPlayer(target => target !== get.player())],
				check(button) {
					const player = get.player(),
						owner = get.owner(button.link);
					return get.value(button.link, owner) * Math.sign(-get.attitude(player, owner));
				},
				prompt(links) {
					let prompt = "将" + get.translation(links) + "交给至多等量角色。";
					prompt += "因此获得【杀】的角色使用【杀】造成的伤害+1直到你的下个回合开始；";
					prompt += "因此获得【闪】的角色使用【闪】结算完毕后摸一张牌直到你的下个回合开始。";
					prompt += "然后若你的手牌数为全场最低，则你获得摸两张牌，获得这两项效果直到你的下个回合开始。";
					return '###符济###<div class="text center">' + prompt + "</div>";
				},
				backup(links) {
					return {
						giveCards: links,
						logAudio: () => ["potfuji1.mp3", "potfuji2.mp3", "potfuji3.mp3"],
						filterCard: () => false,
						selectCard: -1,
						filterTarget: true,
						selectTarget: links.length,
						targetprompt() {
							const links = get.info("old_potfuji_backup").giveCards;
							return ["获得", get.translation(links[ui.selected.targets.length - 1])].join("<br>");
						},
						multiline: true,
						multitarget: true,
						complexSelect: true,
						async content(event, trigger, player) {
							const targets = event.targets;
							const links = get.info("old_potfuji_backup").giveCards;
							let map = new Map(),
								lose_list = [];
							for (const link of links) {
								const owner = get.owner(link);
								map.set(owner, (map.get(owner) || []).concat([link]));
							}
							for (const [owner, cards] of Array.from(map.entries())) {
								owner.$throw(cards.length, 500);
								game.log(owner, "将", get.cnNumber(cards.length), "张牌置入了处理区");
								lose_list.push([owner, cards]);
							}
							await game
								.loseAsync({
									lose_list: lose_list,
								})
								.setContent("chooseToCompareLose");
							await game.delayx();
							const gain_list = links.map((link, i) => [targets[i], [link]]);
							await game
								.loseAsync({
									gain_list: gain_list,
									giver: player,
									animate: "gain2",
								})
								.setContent("gaincardMultiple");
							for (const [target, [link]] of gain_list) {
								const name = get.name(link, false);
								if (["sha", "shan"].includes(name)) {
									player.addTempSkill("old_potfuji_clear", { player: "phaseBegin" });
									await target.addAdditionalSkills("old_potfuji_" + player.playerid, "old_potfuji_" + name, true);
								}
							}
							if (player.isMinHandcard()) {
								player.changeSkin({ characterName: "old_pot_yuji" }, "pot_yuji_shadow");
								get.info(event.name).dynamic(player);
								await player.draw(2);
								player.addTempSkill("old_potfuji_clear", { player: "phaseBegin" });
								await player.addAdditionalSkills("old_potfuji_" + player.playerid, ["old_potfuji_sha", "old_potfuji_shan"], true);
							}
							player
								.when({ player: ["phaseBegin"] }, false)
								.step(async () => {
									player.changeSkin({ characterName: "old_pot_yuji" }, "pot_yuji");
									game.broadcastAll(function (player) {
										if (player.node.old_potfuji_dynamic) {
											player.node.old_potfuji_dynamic.delete();
											player.node.old_potfuji_dynamic2.delete();
											delete player.node.old_potfuji_dynamic;
											delete player.node.old_potfuji_dynamic2;
										}
									}, player);
								})
								.finish();
						},
						dynamic(player) {
							game.broadcastAll(function (player) {
								if (
									(() => {
										for (const sheet of document.styleSheets) {
											try {
												const rules = sheet.cssRules || sheet.rules;
												for (const rule of rules) {
													if (rule.selectorText === ".player .player_fuji") {
														return false;
													}
												}
											} catch (e) {
												continue;
											}
										}
										return true;
									})()
								) {
									lib.init.sheet(".player .player_fuji { animation: game_start 0.5s; -webkit-animation: game_start 0.5s; position: absolute; width: 100%; height: 100%; left: 0; top: 0; z-index: 4; pointer-events: none; background: linear-gradient( to top, rgba(0, 255, 255, 0.3) 0%, rgba(0, 255, 255, 0.3) 60%, rgba(0, 255, 255, 0) 80%, rgba(0, 255, 255, 0) 100% );}");
								}
								if (!player.node.old_potfuji_dynamic) {
									player.node.old_potfuji_dynamic = ui.create.div(".player_fuji", player.node.avatar);
									player.node.old_potfuji_dynamic2 = ui.create.div(".player_fuji", player.node.avatar2);
								}
							}, player);
						},
						ai: {
							result: {
								player(player, target) {
									const links = get.info("old_potfuji_backup").giveCards;
									return get.value(links[ui.selected.targets.length], target) * get.attitude(player, target);
								},
							},
						},
					};
				},
			},
			ai: {
				order: 10,
				threaten: 4,
				result: { player: 1 },
			},
			subSkill: {
				backup: {},
				clear: {
					charlotte: true,
					onremove(player) {
						game.countPlayer(current => current.removeAdditionalSkills("old_potfuji_" + player.playerid));
					},
				},
				sha: {
					audio: ["potfuji4.mp3", "potfuji5.mp3"],
					charlotte: true,
					mark: true,
					marktext: "杀",
					intro: {
						name: "符济 - 杀",
						content: "使用【杀】造成的伤害+1",
					},
					trigger: { source: "damageBegin1" },
					filter(event, player) {
						return event.card && event.card.name === "sha";
					},
					forced: true,
					logTarget: "player",
					content() {
						trigger.num++;
					},
				},
				shan: {
					audio: ["potfuji4.mp3", "potfuji5.mp3"],
					charlotte: true,
					mark: true,
					marktext: "闪",
					intro: {
						name: "符济 - 闪",
						content: "使用【闪】结算完毕后摸一张牌",
					},
					trigger: { player: "useCardAfter" },
					filter(event, player) {
						return event.card.name === "shan";
					},
					forced: true,
					content() {
						player.draw();
					},
				},
			},
		},
		//势魏延
		old_potzhongao: {
			audio: "potzhongao",
			dutySkill: true,
			derivation: ["potkuanggu", "potkuanggu_pot_weiyan_achieve", "kunfen"],
			group: ["old_potzhongao_start", "old_potzhongao_achieve", "old_potzhongao_fail"],
			subSkill: {
				start: {
					audio: "potzhongao1.mp3",
					trigger: {
						global: "phaseBefore",
						player: "enterGame",
					},
					filter(event, player) {
						return event.name != "phase" || game.phaseNumber == 0;
					},
					forced: true,
					locked: false,
					async content(event, trigger, player) {
						await player.addSkills("potkuanggu");
					},
				},
				achieve: {
					audio: ["potzhongao2.mp3", "potzhongao3.mp3"],
					trigger: {
						source: "dieAfter",
					},
					forced: true,
					locked: false,
					skillAnimation: true,
					animationColor: "fire",
					async content(event, trigger, player) {
						player.awakenSkill(event.name.slice(0, -8));
						game.log(player, "成功完成使命");
						player.changeSkin("old_potzhongao", "pot_weiyan_achieve");
						player.setStorage("potkuanggu", 1);
						const num = player.countMark("old_potzhuangshi_limit") + player.countMark("old_potzhuangshi_directHit");
						if (num > 0) {
							if (!player.isDamaged()) {
								await player.draw(num);
							} else {
								await player.recover(num);
							}
							await player.draw(num);
						}
					},
				},
				fail: {
					audio: ["potzhongao4.mp3", "potzhongao5.mp3"],
					trigger: {
						player: ["dying", "phaseUseBegin"],
					},
					filter(event, player) {
						return event.name == "dying" || !event.usedZhuangshi;
					},
					lastDo: true,
					forced: true,
					locked: false,
					async content(event, trigger, player) {
						player.awakenSkill(event.name.slice(0, -5));
						game.log(player, "使命失败");
						player.changeSkin("old_potzhongao", "pot_weiyan_fail");
						await player.changeSkills(["kunfen"], ["old_potzhuangshi"]);
						await player.recover();
						await player.draw(2);
					},
				},
			},
		},
		old_potzhuangshi: {
			audio: "potzhuangshi",
			audioname: ["pot_weiyan_achieve"],
			trigger: {
				player: "phaseUseBegin",
			},
			async cost(event, trigger, player) {
				const { bool: bool1, cards } = await player
					.chooseToDiscard(get.prompt(event.skill), [1, Infinity], "h")
					.set("prompt2", "弃置任意张手牌，令你此阶段使用的前等量张牌无距离限制且不可被响应")
					.set("ai", card => {
						const player = get.player();
						let num = Math.floor(player.countCards("h") / 2);
						if (ui.selected.cards.length < num) {
							if (get.tag(card, "damage")) {
								return 0.1;
							}
							return 7 - get.value(card);
						}
						return 0;
					})
					.set("chooseonly", true)
					.forResult();
				if (bool1 && cards.length) {
					game.broadcastAll(cards => {
						cards.forEach(card => card.addGaintag("old_potzhuangshi_tag"));
					}, cards);
				}
				const { bool: bool2, numbers } = await player
					.chooseNumbers(get.prompt(event.skill), [
						{
							prompt: "失去任意点体力值，令你此阶段使用的前等量张牌不计入次数限制",
							min: 1,
							max: player.getHp(),
						},
					])
					.set("processAI", () => {
						const player = get.player();
						if (player.hp < 2) {
							return false;
						}
						let num = Math.min(Math.floor(player.countCards("h") / 2), player.hp - 1);
						return [num];
					})
					.forResult();
				event.result = {
					bool: true,
					cards: cards,
					cost_data: numbers,
				};
				player.removeGaintag("old_potzhuangshi_tag");
			},
			async content(event, trigger, player) {
				const { cards, cost_data: numbers } = event;
				if (cards || numbers) {
					trigger.set("usedZhuangshi", true);
					if (cards) {
						const number = cards.length;
						player.addTempSkill("old_potzhuangshi_directHit", "phaseChange");
						player.addMark("old_potzhuangshi_directHit", number, false);
						player.addTip("old_potzhuangshi_directHit", `不可响应 ${number}`);
					}
					if (numbers) {
						const number = numbers[0];
						player.addTempSkill("old_potzhuangshi_limit", "phaseChange");
						player.addMark("old_potzhuangshi_limit", number, false);
						player.addTip("old_potzhuangshi_limit", `不计次数 ${number}`);
					}
					if (cards) {
						await player.modedDiscard(cards);
					}
					if (numbers) {
						const number = numbers[0];
						await player.loseHp(number);
					}
				} else {
					await player.gainMaxHp();
					await player.recover();
				}
			},
			onremove(player) {
				player.removeSkill("old_potzhuangshi_directHit");
				player.removeSkill("old_potzhuangshi_limit");
			},
			subSkill: {
				limit: {
					trigger: {
						player: "useCard0",
					},
					charlotte: true,
					filter(event, player) {
						return player.hasMark("old_potzhuangshi_limit");
					},
					forced: true,
					popup: false,
					firstDo: true,
					async content(event, trigger, player) {
						if (trigger.addCount !== false) {
							trigger.addCount = false;
							player.getStat("card")[trigger.card.name]--;
						}
						player.removeMark("old_potzhuangshi_limit", 1, false);
						const num = player.countMark("old_potzhuangshi_limit");
						if (num > 0) {
							player.addTip("old_potzhuangshi_limit", `不计次数 ${num}`);
						} else {
							player.removeTip("old_potzhuangshi_limit");
						}
					},
					onremove(player, skill) {
						player.clearMark(skill, false);
						player.removeTip(skill);
					},
					ai: {
						presha: true,
						skillTagFilter(player, tag, arg) {
							if (!player.hasMark("old_potzhuangshi_limit")) {
								return false;
							}
						},
					},
				},
				directHit: {
					trigger: {
						player: "useCard0",
					},
					charlotte: true,
					filter(event, player) {
						return player.hasMark("old_potzhuangshi_directHit");
					},
					forced: true,
					popup: false,
					firstDo: true,
					async content(event, trigger, player) {
						trigger.directHit.addArray(game.players);
						player.removeMark("old_potzhuangshi_directHit", 1, false);
						const num = player.countMark("old_potzhuangshi_directHit");
						if (num > 0) {
							player.addTip("old_potzhuangshi_directHit", `不可响应 ${num}`);
						} else {
							player.removeTip("old_potzhuangshi_directHit");
						}
					},
					onremove(player, skill) {
						player.clearMark(skill, false);
						player.removeTip(skill);
					},
					mod: {
						targetInRange(card, player) {
							if (player.hasMark("old_potzhuangshi_directHit")) {
								return true;
							}
						},
					},
				},
			},
		},
		//国渊
		old_mbxiugeng: {
			audio: "mbxiugeng",
			logAudio: index => (typeof index === "number" ? "mbxiugeng" + index + ".mp3" : 2),
			trigger: { player: "phaseBegin" },
			async cost(event, trigger, player) {
				event.result = await player
					.chooseTarget(get.prompt2(event.skill), [1, 3])
					.set("ai", target => get.attitude(get.player(), target))
					.forResult();
			},
			async content(event, trigger, player) {
				player.line(event.targets);
				for (const target of event.targets.sortBySeat()) {
					target.removeSkill("old_mbxiugeng_effect");
					target.setStorage("old_mbxiugeng_effect", target.countCards("h"));
					target.addSkill("old_mbxiugeng_effect");
				}
			},
			subSkill: {
				effect: {
					charlotte: true,
					forced: true,
					popup: false,
					init(player, skill) {
						const storage = player.storage[skill];
						if (storage >= 0) {
							player.addTip(skill, `${get.translation(skill)} ${storage}`);
						}
					},
					onremove(player, skill) {
						delete player.storage[skill];
						player.removeTip(skill);
					},
					mark: true,
					intro: {
						content: "当前记录值为：#",
					},
					trigger: { player: "phaseDrawBegin" },
					async content(event, trigger, player) {
						const record = player.storage[event.name];
						if (typeof record === "number") {
							player.logSkill("old_mbxiugeng", null, null, null, [player.countCards("h") >= record ? 4 : 3]);
							if (player.countCards("h") <= record) {
								await player.draw({ num: 2 });
							}
							if (player.countCards("h") >= record) {
								player.addSkill("old_mbxiugeng_handcard");
								player.addMark("old_mbxiugeng_handcard", 1, false);
							}
						}
						player.removeSkill(event.name);
					},
				},
				handcard: {
					markimage: "image/card/handcard.png",
					charlotte: true,
					onremove: true,
					intro: {
						content: "手牌上限+#",
					},
					mark: true,
					mod: {
						maxHandcard(player, num) {
							return num + player.countMark("old_mbxiugeng_handcard");
						},
					},
				},
			},
		},
		old_mbchenshe: {
			audio: "mbchenshe",
			logAudio: index => (typeof index === "number" ? "mbchenshe" + index + ".mp3" : 2),
			trigger: { global: "dying" },
			filter(event, player) {
				return event.player != player && lib.skill.old_mbchenshe.logTarget(event, player).length;
			},
			logTarget(event, player) {
				return [player, event.player, event.source].filter(target => target?.isIn() && target?.countDiscardableCards(player, "he"));
			},
			check(event, player) {
				const targets = lib.skill.old_mbchenshe.logTarget(event, player);
				return (
					targets.reduce((sum, target) => {
						return sum + get.effect(target, { name: "guohe_copy2" }, player, player);
					}, 0) > 0
				);
			},
			async content(event, trigger, player) {
				const targets = lib.skill.old_mbchenshe.logTarget(trigger, player),
					cards = [];
				for (const target of targets) {
					let result;
					if (!target.countDiscardableCards(player, "he")) {
						continue;
					}
					if (target == player) {
						result = await target.chooseToDiscard(`陈赦：请弃置一张牌`, "he", true).forResult();
					} else {
						result = await player.discardPlayerCard(`陈赦：请弃置${get.translation(target)}一张牌`, target, "he", true).forResult();
					}
					if (result?.cards) {
						cards.addArray(result.cards);
					}
				}
				if (cards.length == 3 && cards.map(card => get.color(card, false)).unique().length == 1) {
					player.logSkill("old_mbchenshe", trigger.player, null, null, [3]);
					await trigger.player.recoverTo(trigger.player.maxHp);
					await player.removeSkills(event.name);
				}
			},
		},
		//陈祇
		old_mbrenxing: {
			audio: "mbrenxing",
			trigger: { global: ["loseAfter", "loseAsyncAfter"] },
			filter(event, player) {
				if (game.players.every(target => !event.getl(target)?.cards?.length) || event.getParent("phaseDiscard", true)) {
					return false;
				}
				return (
					game
						.getGlobalHistory("everything", evt => {
							if (!["lose", "loseAsync"].includes(evt.name) || evt.type != "discard" || evt.getParent("phaseDiscard", true)) {
								return false;
							}
							return game.players.some(target => evt.getl(target)?.cards?.length);
						})
						.indexOf(event) == 0 &&
					(_status.currentPhase?.isIn() ||
						game.hasPlayer(current => {
							return ["useCard", "respond"].every(key => !current.getHistory(key, evt => evt.card?.name == "sha").length) && current.countDiscardableCards(player, "he");
						}))
				);
			},
			async cost(event, trigger, player) {
				const result = await player
					.chooseButtonTarget({
						createDialog: [
							"任行：你可选择一项",
							[
								[
									["draw", "你与当前回合角色各摸一张牌"],
									["discard", "弃置一名本回合未使用或打出过【杀】的角色一张牌"],
								],
								"textbutton",
							],
						],
						noShas: (() => {
							return game.filterPlayer(current => {
								return ["useCard", "respond"].every(key => !current.getHistory(key, evt => evt.card?.name == "sha").length) && current.countDiscardableCards(player, "he");
							});
						})(),
						filterButton(button) {
							if (button.link == "discard") {
								return get.event().noShas?.length;
							}
							return _status.currentPhase?.isIn();
						},
						selectTarget() {
							const link = ui.selected.buttons?.[0]?.link;
							return link == "discard" ? 1 : -1;
						},
						filterTarget(card, player, target) {
							const link = ui.selected.buttons?.[0]?.link;
							if (link == "discard") {
								return get.event().noShas?.includes(target);
							}
							return target == _status.currentPhase || target == player;
						},
						ai1(button) {
							const player = get.player();
							const target = _status.currentPhase;
							if (button.link === "draw" && target?.isIn()) {
								return get.effect(target, { name: "draw" }, target, player) + get.effect(player, { name: "draw" }, player, player);
							} else {
								return Math.max(...game.filterPlayer().map(current => get.effect(current, { name: "guohe_copy2" }, player, player)));
							}
						},
						ai2(target) {
							const player = get.player();
							return get.effect(target, { name: "guohe_copy2" }, player, player);
						},
					})
					.forResult();
				event.result = {
					bool: result?.bool,
					targets: result?.targets,
					cost_data: result?.links,
				};
			},
			async content(event, trigger, player) {
				const { targets, cost_data: choice } = event;
				if (choice.includes("draw")) {
					if (player == _status.currentPhase) {
						targets.push(player);
					}
					await game.asyncDraw(targets);
				} else {
					await player.discardPlayerCard(event.targets[0], "he", true);
				}
			},
		},
		//势鲁肃
		old_pothaoshi: {
			audio: "pothaoshi",
			logAudio: () => 2,
			trigger: { player: "phaseJieshuBegin" },
			filter(event, player) {
				return game.hasPlayer(target => target != player); //target.hp <= player.hp &&
			},
			async cost(event, trigger, player) {
				event.result = await player
					.chooseTarget(get.prompt2(event.skill), (card, player, target) => {
						return target != player; //target.hp <= player.hp &&
					})
					.set("ai", target => {
						return get.attitude(get.player(), target);
					})
					.forResult();
			},
			async content(event, trigger, player) {
				const target = event.targets[0];
				target.markAuto(event.name + "_use", player);
				target.addAdditionalSkill(`${event.name}_use_${player.playerid}`, event.name + "_use");
				player.markAuto(event.name + "_clear", target);
				player.addTempSkill(event.name + "_clear", { player: "phaseBeforeStart" });
				player.addTempSkill(event.name + "_change", { player: "phaseBeforeStart" });
			},
			group: ["old_pothaoshi_draw"],
			subSkill: {
				tag: {},
				draw: {
					audio: "pothaoshi",
					logAudio: () => "pothaoshi3.mp3",
					trigger: { player: "loseAfter" },
					forced: true,
					locked: false,
					filter(event, player) {
						return event.getl(player)?.hs?.length && !player.countCards("h") && event.getParent().old_pothaoshi;
					},
					async content(event, trigger, player) {
						await player.drawTo(player.maxHp);
					},
				},
				clear: {
					charlotte: true,
					onremove(player, skill) {
						player.storage[skill].forEach(target => {
							target.unmarkAuto("old_pothaoshi_use", [player]);
							lib.skill.old_pothaoshi_use.init(target, "old_pothaoshi_use");
							target.removeAdditionalSkill(`old_pothaoshi_use_${player.playerid}`);
						});
						delete player.storage[skill];
					},
				},
				change: {
					trigger: {
						global: ["loseEnd", "loseAsyncEnd", "gainEnd", "addToExpansionEnd", "equipEnd", "addJudgeEnd"],
					},
					silent: true,
					charlrotte: true,
					filter(event, player) {
						return event.getg?.(player)?.length || event.getl?.(player)?.hs?.length;
					},
					forceDie: true,
					async content(event, trigger, player) {
						const toAdd = trigger.getg?.(player) || [],
							toRemove = trigger.getl?.(player)?.hs || [];
						event.set("toAdd", toAdd);
						event.set("toRemove", toRemove);
						await event.trigger("old_pothaoshiChange");
					},
				},
				use: {
					init(player, skill) {
						const toRemove = player.getCards("s", card => card.hasGaintag("old_pothaoshi_tag"));
						game.deleteFakeCards(toRemove);
						const cards = player.getStorage(skill).reduce((cards, target) => {
							const fake = target.isAlive() && target.countCards("h") ? game.createFakeCards(target.getCards("h")) : [];
							return cards.addArray(fake);
						}, []);
						player.directgains(cards, null, "old_pothaoshi_tag");
					},
					onremove(player, skill) {
						const toRemove = player.getCards("s", card => card.hasGaintag("old_pothaoshi_tag"));
						game.deleteFakeCards(toRemove);
					},
					mark: true,
					intro: {
						content: "你可以如手牌般使用或打出<span class=thundertext>$</span>的手牌",
					},
					forced: true,
					popup: false,
					delay: false,
					charlotte: true,
					trigger: {
						player: ["useCardBefore", "respondBefore"],
						global: ["old_pothaoshiChange"],
					},
					filter(event, player) {
						if (["useCard", "respond"].includes(event.name)) {
							const cards = player.getCards("s", card => card.hasGaintag("old_pothaoshi_tag"));
							return event.cards && event.cards.some(card => cards.includes(card));
						}
						return player.getStorage("old_pothaoshi_use").includes(event.player);
					},
					async content(event, trigger, player) {
						const tag = "old_pothaoshi_tag";
						if (["useCard", "respond"].includes(trigger.name)) {
							trigger.set("old_pothaoshi", true);
							const real = player.getStorage(event.name).reduce((cards, target) => {
								const hs = target.isAlive() && target.countCards("h") ? target.getCards("h") : [];
								return cards.addArray(hs);
							}, []);
							for (let i = 0; i < trigger.cards.length; i++) {
								const card = trigger.cards[i];
								const cardx = real.find(cardx => cardx.cardid == card._cardid);
								if (cardx) {
									trigger.cards[i] = cardx;
									trigger.card.cards[i] = cardx;
									trigger.throw = false;
									get.owner(cardx)?.$throw(cardx);
								}
							}
						} else {
							game.deleteFakeCards(player.getCards("s", card => trigger.toRemove.find(cardx => cardx.cardid == card._cardid)));
							player.directgains(game.createFakeCards(trigger.toAdd), null, tag);
						}
					},
				},
			},
		},
		//势辛宪英
		old_potjiejie: {
			global: "old_potjiejie_global",
			audio: "potjiejie",
			subSkill: {
				global: {
					audio: "potjiejie",
					enable: "phaseUse",
					filter(event, player) {
						if (player != _status.currentPhase) {
							return false;
						}
						if (!player.countCards("h") || player.hasSkill("old_potjiejie_used")) {
							return false;
						}
						return game.hasPlayer(current => current.hasSkill("old_potjiejie"));
					},
					filterTarget(card, player, target) {
						return target.hasSkill("old_potjiejie");
					},
					selectTarget() {
						if (
							game.countPlayer(current => {
								return current.hasSkill("old_potjiejie");
							}) > 1
						) {
							return 1;
						}
						return -1;
					},
					prompt() {
						const player = get.player(),
							targets = game.filterPlayer(current => {
								return current.hasSkill("old_potjiejie");
							});
						let list = get.translation(targets);
						if (targets.length > 1) {
							list += "中的一人";
						}
						if (targets.length == 1 && targets[0] == player) {
							return "观看自己手牌并选择花色执行对应效果";
						}
						return `令${list}观看你的手牌并选择花色执行效果`;
					},
					prepare(cards, player, targets) {
						targets[0].logSkill("old_potjiejie", [player]);
					},
					log: false,
					manualConfirm: true,
					async content(event, trigger, player) {
						const target = event.target;
						player.addTempSkill("old_potjiejie_used", "phaseUseAfter");
						//await target.viewHandcards(player);
						game.addCardKnower(player.getCards("h"), target);
						player.getHistory("custom").push({
							old_potjiejie: true,
							suits: player
								.getCards("h")
								.map(card => get.suit(card, player))
								.toUniqued(),
							target: target,
						});
						const result = await target
							.chooseControl([...lib.suit.slice(0).reverse(), "cancel2"])
							.set("dialog", ["请选择一个花色", player.getCards("h")])
							.set("ai", () => {
								const target = get.event().target;
								const player = get.player();
								const att = get.attitude(player, target);
								if (att > 0) {
									const lack = lib.suit.slice(0).filter(suit => !target.hasCard(card => get.suit(card, target) == suit, "h"));
									if (lack.length) {
										return lack.randomGet();
									}
								} else if (att <= 0 && target.hasCard(true, "h")) {
									return lib.suit.filter(suit => target.hasCard(card => get.suit(card, target) == suit, "h")).reduce((min, current) => (target.countCards("h", { suit: current }) < target.countCards("h", { suit: min }) ? current : min));
								}
								return lib.suit.randomGet();
							})
							.set("target", player)
							.forResult();
						const choice = result.control;
						if (choice !== "cancel2") {
							game.log(target, "选择了" + get.translation(choice));
							target.popup(choice);
							if (player.hasCard(card => get.suit(card, player) == choice, "h")) {
								const skill = "old_potjiejie_effect";
								player.markAuto(skill, [choice]);
								player.addTip(
									skill,
									`诫节${player
										.getStorage(skill)
										.sort((a, b) => lib.suit.indexOf(b) - lib.suit.indexOf(a))
										.map(suit => get.translation(suit))
										.join("")}`
								);
								player.addTempSkill(skill);
								await player.modedDiscard(player.getCards("h", card => get.suit(card, player) != choice));
							} else {
								const card = get.cardPile2(card => {
									return get.suit(card) == choice;
								});
								if (card) {
									await player.gain(card, "gain2");
								}
							}
						}
						let getSuits = current =>
							current
								.getRoundHistory("custom", evt => {
									return evt?.old_potjiejie && evt.target == target;
								})
								.reduce((arr, evt) => arr.addArray(evt?.suits || []), []);
						const num = getSuits(player).length;
						if (!game.hasPlayer(current => current != player && getSuits(current).length >= num)) {
							await target.useSkill("old_potqingshi", [player]);
						}
					},
					ai: {
						order: 5,
						result: {
							player(player, target) {
								return get.attitude(player, target);
							},
						},
					},
				},
				used: {
					charlotte: true,
				},
				effect: {
					charlotte: true,
					onremove(player, skill) {
						delete player.storage[skill];
						player.removeTip(skill);
					},
					mark: true,
					intro: {
						content: storage => `本回合使用${get.translation(storage)}牌无次数限制`,
					},
					mod: {
						cardUsable(card, player) {
							const list = player.getStorage("old_potjiejie_effect");
							const suit = get.suit(card);
							if (suit === "unsure" || list.includes(suit)) {
								return Infinity;
							}
						},
					},
				},
			},
		},
		old_potqingshi: {
			audio: "potqingshi",
			logAudio(event, player, triggername, _, costResult) {
				let target;
				if (event.name == "useSkill") {
					target = event.targets[0];
				} else {
					target = costResult.targets[0];
				}
				if (player.getFriends(true).includes(target)) {
					return ["potqingshi1.mp3", "potqingshi2.mp3"];
				}
				return ["potqingshi3.mp3", "potqingshi4.mp3"];
			},
			trigger: {
				player: "damageEnd",
			},
			async cost(event, trigger, player) {
				event.result = await player
					.chooseTarget(get.prompt2(event.skill))
					.set("ai", target => {
						const player = get.player();
						if (player.getFriends(true).includes(target)) {
							return get.effect(player, { name: "draw" }, player, player) + get.effect(target, { name: "draw" }, player, player) > 0;
						}
						return get.effect(target, { name: "guohe_copy2" }, target, player) + get.effect(player, { name: "guohe_copy2" }, player, player) > 0;
					})
					.forResult();
			},
			async content(event, trigger, player) {
				const target = event.targets[0];
				if (player.getFriends(true).includes(target)) {
					await game.asyncDraw([player, target]);
				} else {
					await player.chooseToDiscard(true, "he");
					await player.discardPlayerCard(target, "he", true);
				}
			},
		},
		//手杀崔令仪
		old_mbcaiqiu: {
			audio: "mbcaiqiu",
			logAudio(event, player) {
				if (event.name == "useCard") {
					return ["mbcaiqiu3.mp3", "mbcaiqiu4.mp3"];
				}
				return 2;
			},
			trigger: {
				global: ["roundStart", "useCardAfter"],
			},
			filter(event, player) {
				if (event.name == "useCard") {
					return (
						event.player != player &&
						player.getRoundHistory("gain", evt => {
							if (evt.getParent().name != "old_mbcaiqiu") {
								return false;
							}
							return evt.cards?.length && evt.cards.some(card => card.name == event.card.name);
						}).length > 0
					);
				}
				return game.countPlayer2(() => true, true) > 0;
			},
			forced: true,
			locked: false,
			async content(event, trigger, player) {
				if (trigger?.name == "useCard") {
					await player.loseHp();
					return;
				}
				const cards = get.cards(
					game.countPlayer2(() => true, true),
					true
				);
				const result = await player
					.chooseButton(["裁裘：是否获得其中任意张牌？", cards], [1, Infinity], "allowChooseAll")
					.set("ai", button => {
						const player = get.player();
						//只要贪不死就往死里贪
						if (game.countPlayer(() => true) > player.hp && ["sha", "shan"].includes(button.link.name)) {
							return 0;
						}
						return 1;
					})
					.forResult();
				if (result?.bool && result.links?.length) {
					await player.gain(result.links, "draw");
				}
			},
		},
		old_mbxishang: {
			audio: "mbxishang",
			logAudio(event, player) {
				if (!get.nameList(player).includes("old_mb_cuilingyi")) {
					return 6;
				}
				const skin = player.skin[player.name2 === "old_mb_cuilingyi" ? "name2" : "name"];
				if (skin?.indexOf("guidian") !== -1) {
					return 2;
				}
				if (skin?.indexOf("dongjiao") !== -1) {
					return ["mbxishang3.mp3", "mbxishang4.mp3"];
				}
				if (skin?.indexOf("xiuge") !== -1) {
					return ["mbxishang5.mp3", "mbxishang6.mp3"];
				}
				return 6;
			},
			derivation: ["old_mbweizhuang", "old_mbweizhuang_guidianx", "old_mbweizhuang_dongjiaox", "old_mbweizhuang_xiugex"],
			trigger: {
				player: "enterGame",
				global: "phaseBefore",
			},
			filter(event, player) {
				if (!get.nameList(player).includes("old_mb_cuilingyi")) {
					return false;
				}
				return event.name != "phase" || game.phaseNumber == 0;
			},
			locked: true,
			async cost(event, trigger, player) {
				const list = lib.characterSubstitute["old_mb_cuilingyi"];
				if (!list.length) {
					return;
				}
				const createButton = (item, type, position, noclick, node) => {
					const [name, info] = item,
						skill = `old_mbweizhuang_${name.slice(13, -1)}x`;
					let isTemp = false;
					if (!lib.character[name]) {
						isTemp = true;
						lib.character[name] = get.convertedCharacter(["female", "", 0, [], info || []]);
					}
					lib.translate[name] ??= lib.translate[skill];
					node = ui.create.buttonPresets.character(name, type, position, noclick);
					if (isTemp) {
						delete lib.character[name];
					}
					node._link = node.link = [null, null, name];
					node.skinSkill = skill;
					node._customintro = [node => `形象：${lib.translate[node.skinSkill]}`, node => get.skillInfoTranslation(node.skinSkill, null, false)];
					return node;
				};
				const result = await player.chooseButton(["袭裳：选择你本局的形象", [list.slice(0, 3), createButton], [list.slice(3, 6), createButton], [list.slice(6), createButton]], true).forResult();
				if (result?.bool && result.links?.length) {
					player.changeSkin(event.skill, result.links[0][2]);
					event.result = {
						bool: true,
					};
				}
			},
			async content(event, trigger, player) {
				player.addSkills("old_mbweizhuang");
			},
			mark: true,
			marktext: "裳",
			intro: {
				markcount(storage, player) {
					return player.countCards("h", card => card.hasGaintag("faceup_tag"));
				},
				mark(dialog, content, player) {
					const cards = player.getCards("h", card => card.hasGaintag("faceup_tag"));
					if (cards.length) {
						dialog.addAuto(cards);
					} else {
						return "无明置牌";
					}
				},
			},
			group: "old_mbxishang_show",
			subSkill: {
				show: {
					audio: "mbxishang",
					logAudio() {
						return ["mbxishang7.mp3", "mbxishang8.mp3"];
					},
					trigger: {
						player: "gainAfter",
						global: "loseAsyncAfter",
					},
					filter(event, player) {
						if (event.getParent().name == "draw") {
							return false;
						}
						const cards = event.getg(player);
						return cards?.length && player.getCards("h").containsSome(...cards);
					},
					forced: true,
					async content(event, trigger, player) {
						const gains = trigger.getg(player);
						const cards = player.getCards("h", card => gains.includes(card));
						if (!cards.length) {
							return;
						}
						const next = game.createEvent("faceUpCard");
						next.player = player;
						next.cards = cards;
						next.skill = "old_mbxishang";
						next.setContent(async (event, trigger, player) => {
							const { cards } = event;
							game.log(player, "明置了", cards);
							game.addCardKnower(
								cards,
								game.filterPlayer(() => true)
							);
							game.broadcastAll(cards => {
								cards.forEach(card => card.addGaintag("faceup_tag"));
							}, cards);
						});
						player.markSkill("old_mbxishang");
					},
				},
			},
		},
		old_mbweizhuang: {
			// @ts-ignore audio的类型注释不够全
			audio: ["guidian", "dongjiao", "xiuge"].map(key => `mbweizhuang_${key}`),
			// 手杀：一名角色装备区和判定区的牌都是明置牌，但是一名角色的明置牌不包括其判定区的牌
			getFaceupCards(player, judge = false) {
				const cards = player.getCards("h", card => card.hasGaintag("faceup_tag"));
				if (player.countCards("e")) {
					cards.addArray(player.getCards("e"));
				}
				if (judge && player.countCards("j")) {
					cards.addArray(player.getCards("j"));
				}
				return cards;
			},
			derivation: ["old_mbweizhuang_guidianx", "old_mbweizhuang_dongjiaox", "old_mbweizhuang_xiugex"],
			group: ["old_mbweizhuang_guidian", "old_mbweizhuang_dongjiao", "old_mbweizhuang_xiuge"],
			subSkill: {
				guidianx: {
					audio: "mbweizhuang_guidian",
				},
				dongjiaox: {
					audio: "mbweizhuang_dongjiao",
				},
				xiugex: {
					audio: "mbweizhuang_xiuge",
				},
				guidian: {
					audio: "mbweizhuang_guidian",
					logAudio(event, player) {
						if (event.name == "faceUpCard") {
							return ["mbweizhuang_guidian1.mp3", "mbweizhuang_guidian4.mp3"];
						}
						return ["mbweizhuang_guidian2.mp3", "mbweizhuang_guidian3.mp3"];
					},
					trigger: {
						global: ["faceUpCardAfter", "phaseJieshuBegin", "equipAfter", "addJudgeAfter"],
						player: "phaseDrawBegin2",
					},
					filter(event, player) {
						if (!get.nameList(player).includes("old_mb_cuilingyi")) {
							return false;
						}
						const skin = player.skin[player.name2 === "old_mb_cuilingyi" ? "name2" : "name"];
						if (!skin || skin.indexOf("guidian") === -1) {
							return false;
						}
						if (event.name == "phaseDraw") {
							return !event.numFixed && player.getStorage("old_mbweizhuang_guidian", [0, 0, 0])[0] !== 0;
						}
						if (event.name == "phaseJieshu") {
							if (!get.info("old_mbweizhuang").getFaceupCards(event.player, true).length) {
								return false;
							}
							return true;
						}
						if (player.countMark("old_mbweizhuang_used") > game.countPlayer2(() => true, true)) {
							return false;
						}
						let num = 0,
							evts = game.getAllGlobalHistory("everything", evt => ["faceUpCard", "equip", "addJudge"].includes(evt.name));
						for (let i = evts.indexOf(event); i >= 0; i--) {
							const evt = evts[i];
							if (evt?.old_mbweizhuang_count) {
								break;
							}
							if (evt.name == "faceUpCard" && evt.cards?.length) {
								num += evt.cards.length;
							} else if (["equip", "addJudge"].includes(evt.name)) {
								num++;
							}
						}
						return num > game.countPlayer2(() => true, true);
					},
					intro: {
						nocount: true,
						content(storage, player, skill) {
							const list = player.getStorage("old_mbweizhuang_guidian", [0, 0, 0]);
							const getStr = num => {
								if (num >= 0) {
									return `+${num}`;
								}
								return num;
							};
							return `摸牌阶段摸牌数${getStr(list[0])}<br>出杀次数${getStr(list[1])}<br>手牌上限${getStr(list[2])}`;
						},
					},
					onremove: true,
					locked: false,
					mod: {
						cardUsable(card, player, num) {
							if (card.name == "sha") {
								const list = player.getStorage("old_mbweizhuang_guidian", [0, 0, 0]);
								return num + list[1];
							}
						},
						maxHandcard(player, num) {
							const list = player.getStorage("old_mbweizhuang_guidian", [0, 0, 0]);
							return num + list[2];
						},
					},
					async cost(event, trigger, player) {
						let record = player.getStorage(event.skill, [0, 0, 0]);
						if (trigger.name == "phaseDraw") {
							trigger.num = Math.max(0, trigger.num + record[0]);
							return;
						}
						const list = [2 + record[0], player.getCardUsable("sha", true), player.getHandcardLimit(), player.getHp()];
						const prompt = trigger.name == "phaseJieshu" ? `是否令一项数值-1并发动一次${get.poptip("old_mbcaiqiu")}？` : `令一项数值+1`;
						const choiceList = [
							["draw", `摸牌阶段摸牌数(${list[0]})`],
							["sha", `出杀次数(${list[1]})`],
							["limit", `手牌上限(${list[2]})`],
							["hp", `体力值(${list[3]})`],
						];
						const next = player
							.chooseButton([
								`褽装：${prompt}`,
								[choiceList.slice(0, 2), "tdnodes"],
								[choiceList.slice(2), "tdnodes"],
								[
									dialog => {
										dialog.buttons.forEach(i => {
											i.style.setProperty("width", "200px", "important");
											i.style.setProperty("text-align", "left", "important");
										});
									},
									"handle",
								],
							])
							.set("numList", list);
						if (trigger.name == "phaseJieshu") {
							next.set("filterButton", button => {
								const { player, numList } = get.event(),
									index = ["draw", "sha", "limit", "hp"].indexOf(button.link);
								return numList[index] > 0;
							});
							next.set("ai", button => {
								const { player, numList } = get.event();
								if (numList[1] > 1 && button.link == "sha") {
									return 3;
								}
								if (numList[2] > 2 && button.link == "limit") {
									return 2;
								}
								if (button.link == "draw") {
									return 1;
								}
								return 0;
							});
						} else {
							next.set("filterButton", button => {
								const { player, numList } = get.event();
								return button.link != "hp" || player.isDamaged();
							});
							next.set("ai", button => {
								const { player, numList } = get.event();
								if (button.link == "hp") {
									return 3;
								}
								if (numList[1] < 3 && button.link == "sha") {
									return 2;
								}
								return Math.random();
							});
							next.set("forced", true);
						}
						const result = await next.forResult();
						if (result?.bool && result.links?.length) {
							event.result = {
								bool: true,
								cost_data: result.links[0],
							};
						}
					},
					async content(event, trigger, player) {
						const choice = event.cost_data,
							index = ["draw", "sha", "limit", "hp"].indexOf(choice),
							list = player.getStorage(event.name, [0, 0, 0]);
						if (trigger.name != "phaseJieshu") {
							trigger.set("old_mbweizhuang_count", true);
							player.addSkill("old_mbweizhuang_used");
							player.addMark("old_mbweizhuang_used", 1, false);
						}
						if (index > 2) {
							if (trigger.name == "phaseJieshu") {
								await player.loseHp();
							} else {
								await player.recover();
							}
						} else {
							if (trigger.name == "phaseJieshu") {
								list[index]--;
							} else {
								list[index]++;
							}
							player.setStorage(event.name, list, true);
						}
						if (trigger.name == "phaseJieshu") {
							await player.useResult({ skill: "old_mbcaiqiu" }, event);
						}
					},
				},
				used: {
					charlotte: true,
					onremove: true,
				},
				dongjiao: {
					audio: "mbweizhuang_dongjiao",
					trigger: { player: ["useCard", "useCardToPlayered", "useCardAfter"] },
					logAudio(event, player, name) {
						if (name == "useCardAfter") {
							return ["mbweizhuang_dongjiao3.mp3", "mbweizhuang_dongjiao6.mp3"];
						}
						if (name == "useCardToPlayered") {
							return ["mbweizhuang_dongjiao4.mp3", "mbweizhuang_dongjiao5.mp3"];
						}
						return 2;
					},
					filter(event, player, name) {
						if (!get.nameList(player).includes("old_mb_cuilingyi")) {
							return false;
						}
						const skin = player.skin[player.name2 === "old_mb_cuilingyi" ? "name2" : "name"];
						if (!skin || skin.indexOf("dongjiao") === -1) {
							return false;
						}
						const num = get
							.info("old_mbweizhuang")
							.getFaceupCards(player)
							?.map(card => get.type2(card))
							?.toUniqued()?.length;
						const type = get.type2(event.card);
						if (name == "useCard") {
							return num >= 1 && type == "basic";;
						}
						if (name == "useCardAfter") {
							return (
								num >= 3 &&
								type == "equip" &&
								game.hasPlayer(current => {
									if (player.getStorage("old_mbweizhuang_block").includes(current)) {
										return false;
									}
									return get.info("old_mbweizhuang").getFaceupCards(current).length;
								})
							);
						}
						return (
							event.isFirstTarget &&
							num >= 2 &&
							type == "trick" &&
							event.targets?.length &&
							event.targets.some(target => {
								const pos = target == player ? "e" : "he";
								return target.countGainableCards(player, pos);
							})
						);
					},
					async cost(event, trigger, player) {
						switch (event.triggername) {
							case "useCard": {
								event.result = {
									bool: true,
								};
								return;
							}
							case "useCardAfter": {
								const targets = game.filterPlayer(current => {
									if (player.getStorage("old_mbweizhuang_block").includes(current)) {
										return false;
									}
									return get.info("old_mbweizhuang").getFaceupCards(current).length;
								});
								if (!targets?.length) {
									return;
								}
								event.result = await player
									.chooseTarget(`###是否发动【褽装】？###令一名有明置牌的角色摸两张牌`, (card, player, target) => {
										return get.event().targetx.includes(target);
									})
									.set("targetx", targets)
									.set("ai", target => {
										const player = get.player();
										return get.effect(target, { name: "draw" }, player, player);
									})
									.forResult();
								return;
							}
							default: {
								const targets = trigger.targets.filter(target => {
									const pos = target == player ? "e" : "he";
									return target.countGainableCards(player, pos);
								});
								if (!targets?.length) {
									return;
								}
								event.result = await player
									.chooseTarget(`###是否发动【褽装】？###获得一名目标角色一张牌`, (card, player, target) => {
										return get.event().targetx.includes(target);
									})
									.set("targetx", targets)
									.set("ai", target => {
										const player = get.player();
										return get.effect(target, { name: "shunshou_copy2" }, player, player);
									})
									.forResult();
								return;
							}
						}
					},
					async content(event, trigger, player) {
						const { targets, triggername: name } = event;
						switch (name) {
							case "useCard": {
								trigger.baseDamage ??= 1;
								trigger.baseDamage++;
								break;
							}
							case "useCardAfter": {
								player.addTempSkill("old_mbweizhuang_block");
								player.markAuto("old_mbweizhuang_block", targets);
								await game.doAsyncInOrder(targets, async target => await target.draw(2));
								break;
							}
							default: {
								await game.doAsyncInOrder(targets, async target => {
									const pos = target == player ? "e" : "he";
									if (target.countGainableCards(player, pos)) {
										await player.gainPlayerCard(target, pos, true);
									}
								});
							}
						}
					},
				},
				block: {
					charlotte: true,
					onremove: true,
				},
				xiuge: {
					audio: "mbweizhuang_xiuge",
					logAudio(event) {
						if (typeof event == "number") {
							return `mbweizhuang_xiuge${event}.mp3`;
						}
						return 6;
					},
					enable: "chooseToUse",
					hiddenCard(player, name) {
						if (!get.nameList(player).includes("old_mb_cuilingyi")) {
							return false;
						}
						const skin = player.skin[player.name2 === "old_mb_cuilingyi" ? "name2" : "name"];
						if (!skin || skin.indexOf("xiuge") === -1) {
							return false;
						}
						const list = ["sha", "shan", "tao", "jiu"];
						if (!list.includes(name) || player.getStorage("old_mbweizhuang_blocker").includes(name)) {
							return false;
						}
						const subtype = `equip${list.indexOf(name) + 1}`,
							count = get
								.info("old_mbweizhuang")
								.getFaceupCards(player)
								?.map(card => get.suit(card))
								?.toUniqued()?.length;
						return (
							player.countCards("he", card => {
								if (get.subtype(card) != subtype) {
									return false;
								}
								return count >= 4 || lib.filter.cardDiscardable(card, player, "old_mbweizhuang");
							}) > 0
						);
					},
					filter(event, player) {
						if (!get.nameList(player).includes("old_mb_cuilingyi")) {
							return false;
						}
						const skin = player.skin[player.name2 === "old_mb_cuilingyi" ? "name2" : "name"];
						if (!skin || skin.indexOf("xiuge") === -1) {
							return false;
						}
						const list = ["sha", "shan", "tao", "jiu"],
							count = get
								.info("old_mbweizhuang")
								.getFaceupCards(player)
								?.map(card => get.suit(card))
								?.toUniqued()?.length;
						return list.some(name => {
							if (player.getStorage("old_mbweizhuang_blocker").includes(name)) {
								return false;
							}
							const vcard = new lib.element.VCard({ name: name, isCard: true, storage: { wzxiuge: true } });
							if (!event.filterCard(vcard, player, event)) {
								return false;
							}
							const subtype = `equip${list.indexOf(name) + 1}`;
							return (
								player.countCards("he", card => {
									if (get.subtype(card) != subtype) {
										return false;
									}
									return count >= 4 || lib.filter.cardDiscardable(card, player, "old_mbweizhuang");
								}) > 0
							);
						});
					},
					viewAs(cards, player) {
						if (cards.length) {
							let name;
							const subtype = get.subtype(cards[0], player);
							if (typeof subtype == "string") {
								name = ["sha", "shan", "tao", "jiu"][subtype.slice(5) - 1];
							}
							if (name) {
								return {
									name: name,
									isCard: true,
									suit: "none",
									number: null,
									storage: {
										wzxiuge: true,
									},
								};
							}
						}
						return null;
					},
					filterCard(card, player, event) {
						event ??= _status.event;
						const filter = event._backup.filterCard;
						const list = ["sha", "shan", "tao", "jiu"],
							count = get
								.info("old_mbweizhuang")
								.getFaceupCards(player)
								?.map(card => get.suit(card))
								?.toUniqued()?.length;
						if (count < 4 && !lib.filter.cardDiscardable(card, player, "old_mbweizhuang")) {
							return false;
						}
						for (const name of list) {
							if (player.getStorage("old_mbweizhuang_blocker").includes(name)) {
								continue;
							}
							const vcard = new lib.element.VCard({ name: name, isCard: true, storage: { wzxiuge: true } });
							if (!filter(vcard, player, event)) {
								continue;
							}
							const subtype = `equip${list.indexOf(name) + 1}`;
							if (subtype == get.subtype(card, player)) {
								return true;
							}
						}
						return false;
					},
					popname: true,
					ignoreMod: true,
					position: "he",
					log: false,
					check(card) {
						const player = get.player();
						if (_status.event.type == "phase") {
							const name = ["sha", "shan", "tao", "jiu"][get.subtype(card, player)?.slice(5) - 1];
							if (name) {
								const vcard = new lib.element.VCard({ name: name, isCard: true, storage: { wzxiuge: true } });
								if (player.getUseValue(vcard) > 0) {
									return 14 - get.value(card);
								}
							}
							return 0;
						}
						return 1;
					},
					prompt(event, player) {
						return get.skillInfoTranslation("old_mbweizhuang_xiugex", player);
					},
					async precontent(event, trigger, player) {
						const name = event.result.card?.name,
							cards = event.result.cards;
						player.addTempSkill("old_mbweizhuang_blocker");
						player.markAuto("old_mbweizhuang_blocker", name);
						//delete event.result.skill;
						event.getParent().addCount = false;
						const count = get
							.info("old_mbweizhuang")
							.getFaceupCards(player)
							?.map(card => get.suit(card))
							?.toUniqued()?.length;
						if (count >= 4) {
							player.logSkill("old_mbweizhuang_xiuge", null, null, null, [get.rand(1, 2)]);
							await player.showCards(cards, `${get.translation(player)}发动了【褽装】`);
						} else {
							const index = ["sha", "jiu", "tao", "shan"].indexOf(name) + 3;
							player.logSkill("old_mbweizhuang_xiuge", null, null, null, [index]);
							await player.modedDiscard(cards);
						}
						event.result.card = new lib.element.VCard({ name: name, isCard: true, storage: { wzxiuge: true } });
						event.result.cards = [];
						player
							.when("useCardAfter")
							.filter(evt => evt.getParent() == event.getParent())
							.step(async (event, trigger, player) => {
								const card = get.cardPile(card => get.suit(card) == get.suit(cards[0]));
								if (card) {
									await player.gain(card, "gain2");
								}
							});
					},
					locked: false,
					mod: {
						cardUsable(card, player) {
							if (card?.storage?.wzxiuge) {
								return Infinity;
							}
						},
					},
					ai: {
						order: 3,
						result: {
							player(player) {
								if (_status.event.dying) {
									return get.attitude(player, _status.event.dying);
								}
								return 1;
							},
						},
					},
				},
				blocker: {
					charlotte: true,
					onremove: true,
				},
			},
		},
		//数刘徽 by流年
		old_mbgeyuan: {
			audio: "mbgeyuan",
			init(player, skill) {
				let index = 0;
				player.setStorage(skill, index, true);
				player.addTip(skill, `${get.translation(skill)} ${get.info(skill).getNumList(index, true)}`);
			},
			onremove(player, skill) {
				player.setStorage(skill, undefined, true);
				player.removeTip(skill);
			},
			mark: true,
			marktext: "◯", //⚪
			intro: {
				markcount(storage) {
					storage = storage || 0;
					return Number(get.info("old_mbgeyuan").PI[storage]);
				},
				mark(dialog, storage, player, evt, skill) {
					let str = get.info(skill).getNumList(storage);
					dialog.addText(str);
				},
			},
			mod: {
				aiOrder(player, card, order) {
					let number = get.number(card, player),
						index = player.getStorage("old_mbgeyuan", 0);
					let num = Number(get.info("old_mbgeyuan").PI[index]);
					if (typeof number !== "number") {
						return;
					}
					if (num == number || (player.hasSkill("old_mbchongcha") && num == 0 && number > 9)) {
						return order + 10;
					}
				},
				aiUseful(player, card, useful) {
					let number = get.number(card, player),
						index = player.getStorage("old_mbgeyuan", 0);
					let num = Number(get.info("old_mbgeyuan").PI[index]);
					if (typeof number !== "number") {
						return;
					}
					if (num == number || (player.hasSkill("old_mbchongcha") && num == 0 && number > 9)) {
						return useful + 10;
					}
				},
			},
			trigger: { player: "useCard" },
			filter(event, player) {
				let index = player.getStorage("old_mbgeyuan", 0);
				let num = Number(get.info("old_mbgeyuan").PI[index]),
					number = get.number(event.card);
				if (num == number) {
					return true;
				}
				if (typeof number == "number" && number > 9) {
					return player.hasSkill("old_mbchongcha") && num == 0;
				}
				return false;
			},
			prompt2(event, player) {
				let draw = player.getAllHistory("useSkill", evt => evt.skill === "old_mbgeyuan").length + 1;
				return `摸${get.cnNumber(draw)}张牌并调整“割圆”中X的值`;
			},
			frequent: "check",
			check(event, player) {
				return get.effect(player, { name: "draw" }, player, player) > 0;
			},
			async content(event, trigger, player) {
				await player.draw(player.getAllHistory("useSkill", evt => evt.skill === event.name).length);
				let index = player.getStorage(event.name, 0);
				index++;
				const { PI, getNumList } = get.info(event.name);
				if (index >= PI.length) {
					index -= PI.length;
				}
				player.setStorage(event.name, index, true);
				player.addTip(event.name, `${get.translation(event.name)} ${getNumList(index, true)}`);
			},
			getNumList(index, isTip) {
				const { PI } = get.info("old_mbgeyuan");
				index = index || 0;
				function getNexts(index) {
					let result = "",
						cnt = 0;
					while (cnt++ < 3) {
						let index2 = index + cnt - 1;
						if (index2 >= PI.length) {
							index2 - PI.length;
						}
						result += PI[index2];
					}
					return result;
				}
				let first = isTip ? PI[index] : `<span data-nature="fire">${PI[index]}</span>`,
					nextNums = getNexts(index + 1);
				return first + nextNums;
			},
			PI: "1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679",
		},
		old_mbchongcha: {
			audio: "mbchongcha",
			mod: {
				ignoredHandcard(card, player) {
					let number = get.number(card, player);
					if (typeof number == "number" && number > 9) {
						return true;
					}
				},
				cardDiscardable(card, player, name) {
					if (name == "phaseDiscard") {
						let number = get.number(card, player);
						if (typeof number == "number" && number > 9) {
							return true;
						}
					}
				},
			},
			enable: "phaseUse",
			usable: 1,
			filter(event, player) {
				if (!player.hasSkill("old_mbgeyuan", null, false, false)) {
					return false;
				}
				return player.countDiscardableCards(player, "he") > 0;
			},
			position: "he",
			filterCard: lib.filter.cardDiscardable,
			check(card) {
				const player = get.player();
				let index = player.getStorage("old_mbgeyuan", 0);
				const { getNumList } = get.info("old_mbgeyuan");
				let next = Number(getNumList(index, true).slice(1, 2));
				if (get.number(card, player) == next) {
					return 0;
				}
				return 10 - get.value(card);
			},
			selectTarget: 0,
			prompt(event) {
				const player = get.player();
				let index = player.getStorage("old_mbgeyuan", 0);
				const { PI, getNumList } = get.info("old_mbgeyuan");
				let num = PI[index],
					next = getNumList(index, true).slice(1, 2);
				return `弃一张牌并调整“割圆”中X的值（当前为${num}，调整后为${next}）`;
			},
			async content(event, trigger, player) {
				let index = player.getStorage("old_mbgeyuan", 0);
				index++;
				const { PI, getNumList } = get.info("old_mbgeyuan");
				if (index >= PI.length) {
					index -= PI.length;
				}
				player.setStorage("old_mbgeyuan", index, true);
				player.addTip("old_mbgeyuan", `${get.translation("old_mbgeyuan")} ${getNumList(index, true)}`);
			},
			ai: {
				order(item, player) {
					player = player || get.player();
					let index = player.getStorage("old_mbgeyuan", 0),
						hs = player.getCards("hs", card => player.getUseValue(card));
					if (!hs.length) {
						return 0;
					}
					const { getNumList } = get.info("old_mbgeyuan");
					const numList = getNumList(index, true);
					let first = Number(numList.slice(0, 1)),
						next = Number(numList.slice(1, 2));
					if (hs.some(card => get.number(card, player) == first)) {
						return 0;
					} else if (!hs.some(card => get.number(card, player) == next)) {
						return 0;
					}
					return 10;
				},
				result: {
					player: 1,
				},
			},
		},
		//哈基术
		old_mbmaodie: {
			audio: "mbmaodie",
			forced: true,
			trigger: { player: "useCardAfter" },
			filter(event, player) {
				if (player.hasHistory("sourceDamage", evt => evt.card == event.card)) {
					return true;
				}
				return get.info("old_mbmaodie").getCards(player, event.targets || []).length > 0;
			},
			getCards(player, targets) {
				return targets.flatMap(target => target._start_cards.filter(card => "cdhej".includes(get.position(card)) && get.owner(card) !== player));
			},
			async content(event, trigger, player) {
				if (player.hasHistory("sourceDamage", evt => evt.card == trigger.card)) {
					player.addTempSkill(`${event.name}_limit`);
					player.setStorage(`${event.name}_limit`, get.cardNameLength(trigger.card), true);
				} else {
					const card = get.info(event.name).getCards(player, trigger.targets).randomGet();
					if (card) {
						let animate = ["gain2"];
						if (get.owner(card)) {
							animate = [get.owner(card), "giveAuto"];
						}
						await player.gain(card, ...animate);
						return;
					}
				}
			},
			subSkill: {
				limit: {
					charlotte: true,
					onremove: true,
					silent: true,
					trigger: { player: "useCard1" },
					filter(event, player) {
						return get.is.damageCard(card);
					},
					async content(event, trigger, player) {
						player.removeSkill(event.name);
					},
					mod: {
						cardEnabled(card, player) {
							const storage = player.storage.old_mbmaodie_limit;
							if (!storage || typeof storage != "number" || !get.tag(card, "damage")) {
								return;
							}
							return get.cardNameLength(card) > storage;
						},
					},
					intro: {
						markcount: storage => storage,
						content: "下一次使用的伤害牌字数需大于#",
					},
				},
			},
		},
		//骥张辽
		old_hefeichonglei: {
			audio: "hefeichonglei",
			forced: true,
			trigger: {
				global: ["useCard", "respond"],
			},
			filter(event, player) {
				if (!player.isPhaseUsing()) {
					return false;
				}
				if (!event.respondTo || !Array.isArray(event.respondTo)) {
					return false;
				}
				if (player != event.player && player != event.respondTo[0]) {
					return false;
				}
				if (event.player == event.respondTo[0]) {
					return false;
				}
				const target = event.player == player ? event.respondTo[0] : event.player;
				return target.countGainableCards(player, "he");
			},
			logTarget(event, player) {
				if (event.player == player) {
					return event.respondTo[0];
				}
				return event.player;
			},
			async content(event, trigger, player) {
				const {
					targets: [target],
				} = event;
				await player.gainPlayerCard(target, "he", true);
			},
			global: "old_hefeichonglei_wansha",
			subSkill: {
				wansha: {
					enable: ["chooseToUse", "chooseToRespond"],
					filterCard(card, player) {
						const target = get.event()?.getParent("phaseUse", true, true)?.player;
						if (!target || !target.hasSkill("old_hefeichonglei") || target == player || player.isDying()) {
							return false;
						}
						if (target.hasSkill("old_hefeiheyuzhangliao") && get.info("friendgongli").isFriendOf(target, "hefei_lidian")) {
							return true;
						}
						return get.name(card) != "sha";
					},
					position: "hs",
					viewAs: {
						name: "shan",
					},
					viewAsFilter(player) {
						const target = get.event()?.getParent("phaseUse", true, true)?.player;
						if (!target || !target.hasSkill("old_hefeichonglei") || target == player || player.isDying()) {
							return false;
						}
						if (
							player.countCards("hs", card => {
								if (target.hasSkill("old_hefeiheyuzhangliao") && get.info("friendgongli").isFriendOf(target, "hefei_lidian")) {
									return true;
								}
								return get.name(card) != "sha";
							})
						) {
							return true;
						}
						return false;
					},
					prompt() {
						const target = get.event()?.getParent("phaseUse", true, true)?.player;
						if (!target || !target.hasSkill("old_hefeichonglei")) {
							return "";
						}
						if (target.hasSkill("old_hefeiheyuzhangliao") && get.info("friendgongli").isFriendOf(target, "hefei_lidian")) {
							return "将一张手牌当作闪使用或打出";
						}
						return "将一张非【杀】手牌当作闪使用或打出";
					},
					check(card) {
						const val = get.value(card);
						if (_status.event.name == "chooseToRespond") {
							return 1 / Math.max(0.1, val);
						}
						return 5 - val;
					},
					locked: false,
					ai: {
						respondShan: true,
						skillTagFilter(player) {
							const target = get.event()?.getParent("phaseUse", true, true)?.player;
							if (!target || !target.hasSkill("old_hefeichonglei") || target == player || player.isDying()) {
								return false;
							}
							if (
								!player.countCards("hs", card => {
									if (target.hasSkill("old_hefeiheyuzhangliao") && get.info("friendgongli").isFriendOf(target, "hefei_lidian")) {
										return true;
									}
									return get.name(card) != "sha";
								})
							) {
								return false;
							}
						},
					},
					mod: {
						cardEnabled(card, player) {
							if (get.name(card) == "shan" || player.isDying()) {
								return;
							}
							const target = get.event()?.getParent("phaseUse", true, true)?.player;
							if (!target || !target.hasSkill("old_hefeichonglei") || target == player) {
								return;
							}
							const hs = player.getCards("hs", card => {
								if (target.hasSkill("old_hefeiheyuzhangliao") && get.info("friendgongli").isFriendOf(target, "hefei_lidian")) {
									return true;
								}
								return get.name(card) != "sha";
							});
							if ("cards" in card && Array.isArray(card.cards) && card.cards.containsSome(...hs)) {
								return false;
							}
						},
						cardRespondable(card, player) {
							if (get.name(card) == "shan" || player.isDying()) {
								return;
							}
							const target = get.event()?.getParent("phaseUse", true, true)?.player;
							if (!target || !target.hasSkill("old_hefeichonglei") || target == player) {
								return;
							}
							const hs = player.getCards("hs", card => {
								if (target.hasSkill("old_hefeiheyuzhangliao") && get.info("friendgongli").isFriendOf(target, "hefei_lidian")) {
									return true;
								}
								return get.name(card) != "sha";
							});
							if ("cards" in card && Array.isArray(card.cards) && card.cards.containsSome(...hs)) {
								return false;
							}
						},
						cardSavable(card, player) {
							if (get.name(card) == "shan" || player.isDying()) {
								return;
							}
							const target = get.event()?.getParent("phaseUse", true, true)?.player;
							if (!target || !target.hasSkill("old_hefeichonglei") || target == player) {
								return;
							}
							const hs = player.getCards("hs", card => {
								if (target.hasSkill("old_hefeiheyuzhangliao") && get.info("friendgongli").isFriendOf(target, "hefei_lidian")) {
									return true;
								}
								return get.name(card) != "sha";
							});
							if ("cards" in card && Array.isArray(card.cards) && card.cards.containsSome(...hs)) {
								return false;
							}
						},
					},
				},
			},
		},
		old_hefeidangshi: {
			audio: "hefeidangshi",
			trigger: { player: "useCardAfter" },
			filter(event, player) {
				if (!event.targets?.length) {
					return false;
				}
				return get.is.damageCard(event.card);
			},
			async cost(event, trigger, player) {
				event.result = await player
					.chooseTarget({
						prompt: get.prompt2(event.skill),
						filterTarget(card, player, target) {
							const trigger = get.event().getTrigger();
							return trigger.targets?.includes(target) && target !== player;
						},
						ai(target) {
							const player = get.player();
							if (get.attitude(player, target) > 0) {
								return 0;
							}
							if (!target.countCards("he")) {
								return get.damageEffect(target, player, player);
							}
							return 10 / target.countCards("he");
						},
					})
					.forResult();
			},
			async content(event, trigger, player) {
				const {
					targets: [target],
					name,
				} = event;
				const getNum = (player, target) => {
					let num = Math.max(
						1,
						game.players.reduce((sum, target) => sum + target.countMark(`old_hefeidangshi_count`), 0)
					);
					if (player.hasSkill("old_hefeiheyuzhangliao") && get.info("friendgongli").isFriendOf(player, "hefei_lidian")) {
						num = 3;
					}
					return num;
				};
				const list = [
					["useCard", `对${get.translation(player)}使用一张${get.translation(trigger.card.name)}`],
					["discard", `弃置${get.cnNumber(getNum(player, target))}张牌`],
					["damage", `${get.translation(player)}对你造成1点伤害`],
				];
				const canChoose = list
					.map(info => info[0])
					.filter(info => {
						switch (info) {
							case "useCard": {
								return (
									target.countCards("hs", card => {
										if (get.name(card) != trigger.card.name) {
											return false;
										}
										return target.canUse(card, player);
									}) > 0
								);
							}
							case "discard": {
								const num = getNum(player, target);
								return target.countDiscardableCards(target, "he") >= num;
							}
							default: {
								return true;
							}
						}
					});
				const result =
					canChoose.length > 1
						? await target
							.chooseButton({
								createDialog: ["荡势：请选择一项", [list, "textbutton"]],
								forced: true,
								filterButton(button) {
									return get.event().canChoose?.includes(button.link);
								},
								ai(button) {
									const { player } = get.event();
									const getNum = get.event().getNum;
									const trigger = get.event().getTrigger();
									if (button.link == "useCard") {
										const cards = player.getCards("hs", card => {
											if (get.name(card) != trigger.card.name) {
												return false;
											}
											return player.canUse(card, trigger.player);
										});
										const check = card => get.effect(trigger.player, card, player, player);
										return cards.length ? check(cards.maxBy(check)) : 0;
									}
									if (button.link == "discard") {
										return get.effect(player, { name: "guohe_copy2" }, player, player) / getNum;
									}
									return get.damageEffect(player, player, player);
								},
							})
							.set("getNum", getNum(player, target))
							.set("canChoose", canChoose)
							.forResult()
						: { bool: true, links: canChoose };
				if (!result?.bool || !result.links?.length) {
					return;
				}
				const type = result.links[0];
				game.log(target, "选择了", `#y${list.find(info => info[0] == type)?.[1]}`);
				if (!player.storage.old_hefeidangshi_phaseChoices) {
					player.storage.old_hefeidangshi_phaseChoices = [];
				}
				const isNewThisPhase = !player.storage.old_hefeidangshi_phaseChoices.includes(type);
				if (isNewThisPhase) {
					player.storage.old_hefeidangshi_phaseChoices.push(type);
					await player.draw();
					player.addMark("old_hefeidangshi_effect", 1, false);
					if (!player.hasSkill("old_hefeidangshi_effect")) {
						player.addTempSkill("old_hefeidangshi_effect", ["phaseChange", "phaseAfter"]);
					}
				}
				switch (type) {
					case "useCard": {
						await target
							.chooseToUse({
								filterCard(card, player, event) {
									if (get.itemtype(card) != "card" || get.name(card) != get.event().cardx) {
										return false;
									}
									if (card.transform || card.virtual) {
										return false;
									}
									return lib.filter.filterCard.apply(this, arguments);
								},
								prompt: `荡势：对${get.translation(player)}使用一张${get.translation(trigger.card.name)}`,
								addCount: false,
								forced: true,
								filterTarget(card, player, target) {
									if (target != get.event().sourcex) {
										return false;
									}
									return lib.filter.filterTarget.apply(this, arguments);
								},
							})
							.set("targetRequired", true)
							.set("complexTarget", true)
							.set("cardx", trigger.card.name)
							.set("sourcex", player);
						return;
					}
					case "discard": {
						const num = Math.min(target.countDiscardableCards(target, "he"), getNum(player, target));
						target.addMark(`${name}_count`, 1, false);
						target.addTempSkill(`${name}_count`, "roundStart");
						if (num > 0) {
							await target.chooseToDiscard({ position: "he", forced: true, selectCard: num });
						}
						return;
					}
					default: {
						await target.damage();
						return;
					}
				}
			},
			group: ["old_hefeidangshi_clear"],
			subSkill: {
				count: {
					charlotte: true,
					onremove: true,
				},
				effect: {
					charlotte: true,
					onremove: true,
					intro: {
						content: "出杀次数+#",
					},
					mod: {
						cardUsable(card, player, num) {
							if (card.name == "sha") {
								return num + player.countMark("old_hefeidangshi_effect");
							}
						},
					},
				},
				clear: {
					charlotte: true,
					direct: true,
					trigger: { player: ["phaseChange", "phaseAfter"] },
					content() {
						player.storage.old_hefeidangshi_phaseChoices = [];
					},
				},
			},
		},
		old_hefeiheyuzhangliao: {
			audio: "hefeiheyuzhangliao",
			locked: true,
			ai: {
				combo: ["old_hefeichonglei", "old_hefeidangshi"],
			},
		},
		//神曹丕
		old_chuyuan: {
			audio: "chuyuan",
			trigger: { global: "damageEnd" },
			filter(event, player) {
				return event.player.isIn() && player.getExpansions("old_chuyuan").length < player.maxHp;
			},
			logTarget: "player",
			locked: false,
			async content(event, trigger, player) {
				await trigger.player.draw();
				if (!trigger.player.countCards("h")) {
					return;
				}

				const result = await trigger.player.chooseCard("h", true, "选择一张牌置于" + get.translation(player) + "的武将牌上作为「储」").forResult();
				player.addToExpansion(result.cards, trigger.player, "give").gaintag.add("old_chuyuan");
			},
			intro: {
				content: "expansion",
				markcount: "expansion",
			},
			onremove(player, skill) {
				var cards = player.getExpansions(skill);
				if (cards.length) {
					player.loseToDiscardpile(cards);
				}
			},
			ai: {
				notemp: true,
			},
		},
		old_dengji: {
			audio: "dengji",
			derivation: ["old_tianxing", "new_rejianxiong", "rerende", "rezhiheng", "olluanji", "olfangquan"],
			trigger: { player: "phaseZhunbeiBegin" },
			forced: true,
			juexingji: true,
			skillAnimation: true,
			animationColor: "water",
			filter(event, player) {
				return player.getExpansions("old_chuyuan").length >= 3;
			},
			async content(event, trigger, player) {
				player.awakenSkill(event.name);
				await player.addSkills(["old_tianxing", "new_rejianxiong"]);
				await player.loseMaxHp();
				await player.gain(player.getExpansions("old_chuyuan"), "gain2", "fromStorage");
			},
			ai: {
				combo: "old_chuyuan",
			},
		},
		old_tianxing: {
			audio: "tianxing",
			trigger: { player: "phaseZhunbeiBegin" },
			forced: true,
			juexingji: true,
			skillAnimation: true,
			animationColor: "thunder",
			filter(event, player) {
				return player.getExpansions("old_chuyuan").length >= 3;
			},
			async content(event, trigger, player) {
				player.awakenSkill(event.name);
				await player.loseMaxHp();
				await player.gain(player.getExpansions("old_chuyuan"), "gain2", "fromStorage");
				await player.removeSkills("old_chuyuan");
				const result = await player.chooseControl("rerende", "rezhiheng", "olluanji", "olfangquan").set("prompt", "选择获得一个技能").set("ai", processAI).forResult();
				await player.addSkills(result.control);
				return;
				function processAI() {
					const player = get.player();

					if (!player.hasSkill("luanji") && !player.hasSkill("olluanji") && player.getUseValue({ name: "wanjian" }) > 4) {
						return "olluanji";
					}
					if (!player.hasSkill("rezhiheng")) {
						return "rezhiheng";
					}
					if (!player.hasSkill("olfangquan")) {
						return "olfangquan";
					}
					return "rerende";
				}
			},
			ai: {
				combo: "old_chuyuan",
			},
		},
		//族荀采
		oldx_clanlieshi: {
			audio: "clanlieshi",
			enable: "phaseUse",
			filter(event, player) {
				return true;
			},
			chooseButton: {
				dialog(event, player) {
					var dialog = ui.create.dialog("烈誓：选择一项", "hidden");
					dialog.add([lib.skill.oldx_clanlieshi.choices.slice(), "textbutton"]);
					return dialog;
				},
				filter(button, player) {
					var link = button.link;
					if (link == "damage") {
						return true;
					}
					var num = player.countCards("h", link);
					return num > 0 && num == player.getDiscardableCards(player, "h").filter(i => get.name(i) == link).length;
				},
				check(button) {
					var player = _status.event.player;
					switch (button.link) {
						case "damage":
							if (get.damageEffect(player, player, player, "fire") >= 0) {
								return 10;
							}
							if (player.hp >= Math.max(2, 3 - player.getFriends().length) && game.countPlayer(current => get.attitude(player, current) < 0 && current.countCards("h", card => ["sha", "shan"].includes(get.name(card))))) {
								return 0.8 + Math.random();
							}
							return 0;
						case "shan":
							if (player.countCards("h", "shan") == 1) {
								return 8 + Math.random();
							}
							return 1 + Math.random();
						case "sha":
							if (player.countCards("h", "sha") == 1) {
								return 8 + Math.random();
							}
							return 0.9 + Math.random();
					}
				},
				backup(links) {
					var next = get.copy(lib.skill["oldx_clanlieshi_backupx"]);
					next.choice = links[0];
					return next;
				},
				prompt(links) {
					if (links[0] == "damage") {
						return "受到1点火焰伤害并废除判定区";
					}
					return "弃置所有【" + get.translation(links[0]) + "】";
				},
			},
			choices: [
				["damage", "受到1点火焰伤害并废除判定区"],
				["shan", "弃置所有【闪】"],
				["sha", "弃置所有【杀】"],
			],
			ai: {
				order(item, player) {
					if (!player) {
						return;
					}
					var eff = get.damageEffect(player, player, player, "fire"),
						disabled = !player.isDisabledJudge();
					if ((player.countCards("h", "sha") == 1 || player.countCards("h", "shan") == 1) && eff < 0 && !disabled) {
						return 8;
					} else if (eff >= 0 && !disabled) {
						return 5.8;
					}
					if (!disabled && !player.countCards("h", card => ["sha", "shan"].includes(get.name(card)))) {
						if ((!player.hasSkill("clanhuanyin") || !player.canSave(player)) && player.hp <= 1) {
							return 0;
						}
						if (player.canSave(player) && player.hp == 1 && player.countCards("h") <= 1) {
							return 2.6;
						}
						if (player.hp < Math.max(2, 3 - player.getFriends().length) || !game.countPlayer(current => get.attitude(player, current) < 0 && current.countCards("h", card => ["sha", "shan"].includes(get.name(card))))) {
							return 0;
						}
					}
					return 2.5;
				},
				expose: 0.2,
				result: { player: 1 },
			},
			subSkill: {
				backup: {},
				backupx: {
					audio: "clanlieshi",
					selectCard: -1,
					selectTarget: -1,
					filterCard: () => false,
					filterTarget: () => false,
					multitarget: true,
					async content(event, trigger, player) {
						const choice = lib.skill.oldx_clanlieshi_backup.choice;
						if (choice == "damage") {
							await player.damage("fire");
							if (!player.isDisabledJudge()) {
								player.disableJudge();
							}
						} else {
							const cards = player.getCards("h", choice);
							if (cards.length) {
								await player.discard(cards);
							}
						}

						if (!player.isIn() || !game.hasPlayer(current => current != player)) {
							return;
						}

						let result = await player
							.chooseTarget("烈誓：令一名其他角色选择另一项", lib.filter.notMe, true)
							.set("ai", target => {
								const player = _status.event.player;
								const chosen = _status.event.getParent().choice;
								const att = get.attitude(player, target);
								if (chosen == "damage") {
									if (att > 0) {
										return 0;
									}
									return -att / 2 + target.countCards("h", card => ["sha", "shan"].includes(get.name(card)));
								}
								return get.damageEffect(target, player, player, "fire");
							})
							.set("choice", choice)
							.forResult();

						if (!result.bool) {
							return;
						}

						const target = result.targets[0];
						player.line(target, "fire");

						const list = [];
						let choiceList = lib.skill.oldx_clanlieshi.choices.slice();
						choiceList = choiceList.map((link, ind, arr) => {
							let text = link[1];
							let ok = true;
							if (arr[ind][0] == choice) {
								text += "（" + get.translation(player) + "已选）";
								ok = false;
							} else if (ind > 0) {
								const name = ind == 1 ? "shan" : "sha";
								if (!target.countCards("h", name)) {
									ok = false;
								}
							}
							if (!ok) {
								text = '<span style="opacity:0.5">' + text + "</span>";
							} else {
								list.push("选项" + get.cnNumber(ind + 1, true));
							}
							return text;
						});

						if (!list.length) {
							game.log(target, "没有能执行的选项");
							return;
						}

						result = await target
							.chooseControl(list)
							.set("choiceList", choiceList)
							.set("ai", () => {
								const controls = _status.event.controls.slice();
								const player = _status.event.player;
								const user = _status.event.getParent().player;
								if (controls.length == 1) {
									return controls[0];
								}
								if (controls.includes("选项一") && get.damageEffect(player, user, player, "fire") >= 0) {
									return "选项一";
								}
								if (controls.includes("选项一") && player.hp <= 2 && player.countCards("h", card => ["sha", "shan"].includes(get.name(card))) <= 3) {
									controls.remove("选项一");
								}
								if (controls.length == 1) {
									return controls[0];
								}
								if (player.getCards("h", "sha").reduce((p, c) => p + get.value(c, player), 0) > player.getCards("h", "sha").reduce((p, c) => p + get.value(c, player), 0)) {
									if (controls.includes("选项三")) {
										return "选项三";
									}
								} else if (controls.includes("选项二")) {
									return "选项二";
								}
								return controls.randomGet();
							})
							.forResult();

						if (result.control == "选项一") {
							if (!target.isDisabledJudge()) {
								target.disableJudge();
							}
							await target.damage("fire");
						} else {
							const cards = target.getCards("h", result.control == "选项二" ? "shan" : "sha");
							if (cards.length) {
								await target.discard(cards);
							}
						}
					},
				},
			},
		},
		oldx_clandianzhan: {
			audio: "clandianzhan",
			trigger: { player: "useCardAfter" },
			filter(event, player) {
				return get.info("clandianzhan").filter(event, player);
			},
			forced: true,
			content() {
				"step 0";
				if (trigger.targets && trigger.targets.length == 1) {
					player.line(trigger.targets[0]);
					if (!trigger.targets[0].isLinked()) trigger.targets[0].link();
				}
				("step 1");
				var cards = player.getCards("h", card => get.suit(card) == get.suit(trigger.card) && player.canRecast(card));
				if (cards.length) player.recast(cards);
			},
		},
		//族荀彧
		old_clandingan: {
			audio: "clandingan",
			trigger: {
				player: "useCardAfter",
			},
			locked: true,
			filter(event, player) {
				return game.getGlobalHistory("useCard", evt => evt.card.name == event.card.name).indexOf(event) > 0;
			},
			async cost(event, trigger, player) {
				const targets = game.filterPlayer(current => {
					if (trigger.targets?.includes(current)) {
						return false;
					}
					return current != player;
				});
				const result =
					targets.length > 1
						? await player
								.chooseTarget(
									`定安：与任意名不为此牌目标的其他角色各摸一张牌`,
									(card, player, target) => {
										return get.event().targetx.includes(target);
									},
									true,
									[1, targets.length]
								)
								.set("targetx", targets)
								.set("prompt2", "然后你令之中手牌最多的其他角色执行一项：1.受到你造成的1点伤害；2.弃置手牌中最多的同名牌。")
								.set("ai", target => {
									const { player, targetx } = get.event(),
										getD = current => get.effect(current, { name: "draw" }, player, player);
									const eff = getD(target);
									if (eff > 0) {
										return 2;
									}
									if (ui.selected.targets.every(current => getD(current) > 0 && current.countCards("h") < target.countCards("h"))) {
										return -eff;
									}
									return 0;
								})
								.forResult()
						: {
								bool: true,
								targets: targets,
							};
				if (!result?.bool) {
					return;
				}
				let targets2 = [player];
				if (result.targets?.length) {
					targets2.addArray(result.targets);
				}
				event.result = {
					bool: true,
					targets: targets2,
				};
			},
			async content(event, trigger, player) {
				const { targets } = event;
				targets.sortBySeat();
				await game.asyncDraw(targets);
				const currents = targets.filter(target => target != player && target.isMaxHandcard(false, current => current != player && targets.includes(current)));
				if (!currents?.length) {
					return;
				}
				const func = async target => {
					const result2 = await player
						.chooseButton(
							[
								`定安：选择一项令${get.translation(target)}执行`,
								[
									[
										["damage", "受到你造成的1点伤害"],
										["discard", "随机弃置手牌中最多的同名牌"],
									],
									"textbutton",
								],
							],
							true
						)
						.set("targetx", target)
						.set("ai", button => {
							const { player, targetx: target } = get.event();
							if (button.link == "damage") {
								return get.damageEffect(target, player, player);
							}
							return get.sgnAttitude(player, target) * Math.sqrt(target.countCards("h"));
						})
						.forResult();
					if (result2?.bool && result2.links?.length) {
						player.line(target);
						if (result2.links[0] == "damage") {
							await target.damage(player);
						} else {
							const cards = target.getCards("h"),
								names = cards.map(card => get.name(card)),
								maxName = names.toUniqued().maxBy(name => get.numOf(names, name));
							const num = get.numOf(names, maxName);
							if (num <= 1) {
								return;
							}
							const name = names
								.toUniqued()
								.filter(name => get.numOf(names, name) == num)
								.randomGet();
							if (name) {
								const discards = cards.filter(card => get.name(card) == name);
								if (discards?.length) {
									await target.modedDiscard(discards);
								}
							}
						}
					}
				};
				await game.doAsyncInOrder(currents, func);
			},
		},
		old_clanfuning: {
			audio: "clanfuning",
			trigger: {
				player: "changeHpAfter",
			},
			filter(event, player) {
				const evts = game.getGlobalHistory("changeHp", evt => evt.player == player && evt.num != 0);
				if (evts.indexOf(event) !== 0) {
					return false;
				}
				if (!game.hasPlayer(current => current != player)) {
					return false;
				}
				return player.countCards("he") >= Math.max(1, player.getDamagedHp());
			},
			async cost(event, trigger, player) {
				const num = Math.max(1, player.getDamagedHp()),
					count = game.countPlayer2(current => current.hasHistory("damage"), true);
				event.result = await player
					.chooseCardTarget({
						prompt: get.prompt2(event.skill),
						filterCard: true,
						position: "he",
						selectCard: [num, Infinity],
						filterTarget: lib.filter.notMe,
						complexCard: true,
						count: count,
						ai1(card) {
							const color = get.color(card),
								{ player, count } = get.event();
							if (!player.isDamaged() || ui.selected.cards.every(cardx => get.color(cardx) == color)) {
								const num = ui.selected.cards.length,
									num2 = player.countCards("h", cardx => !ui.selected.cards.includes(cardx));
								if (count <= num && num2 > player.maxHp) {
									return 15 - get.value(card);
								}
								return 10 - get.value(card);
							}
							return 3 - get.value(card);
						},
						ai2(target) {
							const player = get.player();
							return get.attitude(player, target);
						},
					})
					.forResult();
			},
			async content(event, trigger, player) {
				const {
					cards,
					targets: [target],
				} = event;
				const bool1 = cards.map(card => get.color(card)).toUniqued().length == 1,
					bool2 = cards.length > game.countPlayer2(current => current.hasHistory("damage"), true);
				await player.give(cards, target);
				if (bool1) {
					await player.recover();
				}
				if (bool2) {
					const num = player.countCards("h") - player.maxHp;
					if (num > 0) {
						const count = Math.min(num, player.countDiscardableCards(player, "h"));
						if (count > 0) {
							await player.chooseToDiscard("h", count, true);
						}
					} else if (num < 0) {
						await player.draw(-num);
					}
				}
			},
		},
		//族钟会
		old_clanyuzhi: {
			mod: {
				aiOrder(player, card, num) {
					if (card.name == "tao") return num / 114514;
				},
			},
			audio: "clanyuzhi",
			trigger: { global: ["roundStart", "roundEnd"] },
			filter(event, player, name) {
				if (name === "roundStart") return player.countCards("h");
				if (player.hasCard(card => card.hasGaintag("old_clanyuzhi") && lib.filter.cardDiscardable(card, player), "h")) return true;
				const num1 = player.getRoundHistory("gain", evt => evt.getParent().name == "draw" && evt.getParent(2).name == "old_clanyuzhi").reduce((sum, evt) => sum + evt.cards.length, 0);
				const num2 = player.getRoundHistory("gain", evt => evt.getParent().name == "draw" && evt.getParent(2).name == "old_clanyuzhi", 1).reduce((sum, evt) => sum + evt.cards.length, 0);
				const num3 = player.getRoundHistory("useCard").length;
				return (num1 > 0 && num2 > 0 && num1 > num2) || num1 > num3;
			},
			forced: true,
			async content(event, trigger, player) {
				const name = event.triggername;
				const num1 = player.getRoundHistory("gain", evt => evt.getParent().name == "draw" && evt.getParent(2).name == "old_clanyuzhi", name === "roundStart" ? 1 : 0).reduce((sum, evt) => sum + evt.cards.length, 0);
				switch (name) {
					case "roundStart":
						const result = await player
							.chooseCard(
								"迂志：请展示一张手牌",
								"摸此牌牌名字数的牌。本轮结束时弃置此牌，若本轮你使用的牌数或上一轮你以此法摸的牌数小于此牌牌名字数，则你失去1点体力或失去〖保族〗。",
								function (card, player) {
									var num = get.cardNameLength(card);
									return typeof num == "number" && num > 0;
								},
								true
							)
							.set("ai", function (card) {
								if (_status.event.dying && _status.event.num > 0 && get.cardNameLength(card) > _status.event.num) return 1 / get.cardNameLength(card); //怂
								return get.cardNameLength(card); //勇
							})
							.set(
								"dying",
								player.hp +
									player.countCards("hs", {
										name: ["tao", "jiu"],
									}) <
									1
							)
							.set("num", event.num1)
							.forResult();
						if (result?.bool && result.cards?.length) {
							await player.showCards(result.cards, get.translation(player) + "发动了【迂志】");
							player.addGaintag(result.cards, "old_clanyuzhi");
							await player.draw(get.cardNameLength(result.cards[0]));
							player.storage.old_clanyuzhi_mark = get.cardNameLength(result.cards[0]);
							player.addTempSkill("old_clanyuzhi_mark", "roundStart");
						}
						break;
					case "roundEnd":
						const cards = player.getCards("h", card => card.hasGaintag("old_clanyuzhi"));
						if (cards.length) player.removeGaintag("old_clanyuzhi");
						const num2 = player.getRoundHistory("gain", evt => evt.getParent().name == "draw" && evt.getParent(2).name == "old_clanyuzhi", 1).reduce((sum, evt) => sum + evt.cards.length, 0);
						const num3 = player.getRoundHistory("useCard").length;
						if ((num1 > 0 && num2 > 0 && num1 > num2) || num1 > num3) {
							let result2;
							if (num2 > 0 && num1 > num2) game.log(player, "的野心已开始膨胀", "#y(" + num1 + "张>" + num2 + "张)");
							if (num1 > num3) game.log(player, "的行动未达到野心", "#y(" + num3 + "张<" + num1 + "张)");
							if (player.hasSkill("clanbaozu", null, false, false)) result2 = await player.chooseBool("迂志：是否失去〖保族〗？", "若选择“否”，则你失去1点体力").set("choice", player.awakenedSkills.includes("clanbaozu")).forResult();
							else result2 = { bool: false };
							if (result2?.bool) await player.removeSkills("clanbaozu");
							else await player.loseHp();
						}
						break;
				}
			},
			ai: {
				threaten: 3,
				nokeep: true,
			},
			onremove(player, skill) {
				player.removeGaintag(skill);
				player.removeSkill(skill + "_mark");
			},
			subSkill: {
				mark: {
					charlotte: true,
					onremove: true,
					mark: true,
					intro: { content: "本轮野心：#张" },
				},
			},
		},
		old_clanxieshu: {
			audio: "clanxieshu",
			trigger: { player: "damageEnd", source: "damageSource" },
			filter(event, player) {
				if (!event.card) {
					return false;
				}
				var num = get.cardNameLength(event.card);
				return typeof num == "number" && num > 0 && player.countCards("he") > 0;
			},
			async cost(event, trigger, player) {
				var num = get.cardNameLength(trigger.card),
					str = "";
				if (player.getDamagedHp() > 0) {
					str += "，然后摸" + get.cnNumber(player.getDamagedHp()) + "张牌";
				}
				event.result = await player
					.chooseToDiscard(get.prompt(event.skill), "弃置" + get.cnNumber(num) + "张牌" + str, "he", num, "chooseonly")
					.set("ai", function (card) {
						var player = _status.event.player;
						var num = _status.event.num;
						var num2 = player.getDamagedHp();
						if (!num2) {
							return 0;
						}
						if (num < num2) {
							return 8 - get.value(card);
						}
						if (num == num2 || num2 >= 2 + num - num2) {
							return lib.skill.zhiheng.check(card);
						}
						return 0;
					})
					.set("num", num)
					.forResult();
			},
			async content(event, trigger, player) {
				await player.discard(event.cards);
				if (player.getDamagedHp() > 0) {
					await player.draw(player.getDamagedHp());
				}
			},
			ai: { threaten: 3 },
		},
		//韩韶 --by lonely patients
		old_fangzhen: {
			audio: "clanfangzhen",
			enable: "phaseUse",
			usable: 1,
			filterTarget(card, player, target) {
				return !target.isLinked();
			},
			async content(event, trigger, player) {
				let target = event.targets[0];
				player.line(target);
				target.link(true);
				let seatnum = target.getSeatNum();
				await player.drawTo(seatnum);
				await player.addMark("old_fangzhen", 1, false);
				if (target != player) {
					let result = await player
						.chooseCard("he", [1, Infinity], "是否交给" + get.translation(target) + "任意张牌？")
						.set("ai", card => 0.1 - get.value(card))
						.forResult();
					if (result.bool) {
						player.give(result.cards, target, "give");
					}
				}
				if (player.countMark("old_fangzhen") == seatnum) {
					player.turnOver();
				}
			},
			ai: {
				order: 1,
				result: {
					player(player, target) {
						if (player.isTurnedOver() && target.getSeatNum() == player.countMark("old_fangzhen") + 1) {
							return 5;
						} else {
							return target.countCards("h") - player.countCards("h");
						}
					},
				},
			},
		},
		old_liuju: {
			audio: "clanliuju",
			enable: "phaseUse",
			usable: 1,
			filterTarget(card, player, target) {
				return player.canCompare(target);
			},
			async content(event, trigger, player) {
				let target = event.targets[0];
				let result = await player.chooseToCompare(target).set("small", true).forResult();
				let flag = false;
				if (result.tie || !result.bool) flag = true;
				let distance = [get.distance(player, target), get.distance(target, player)];
				let cards = [];
				game.getGlobalHistory("cardMove", evt => {
					if (evt.getParent(2).name === "chooseToCompare" && evt.getParent(3) === event)
						cards.addArray(
							evt.cards.filter(i => {
								return get.position(i, true) == "d" && get.type(i, null, false) != "basic";
							})
						);
				});
				while (cards.length) {
					let cardsx = cards.filter(i => get.position(i, true) == "d" && player.hasUseTarget(i));
					if (!cardsx.length) break;
					let result = await player
						.chooseButton(["留驹：是否使用其中的一张牌？", cardsx])
						.set("filterButton", button => {
							return _status.event.player.hasUseTarget(button.link);
						})
						.set("ai", button => {
							return _status.event.player.getUseValue(button.link) + 0.1;
						})
						.forResult();
					if (result.bool) {
						let card = result.links[0];
						cards.remove(card);
						player.$gain2(card, false);
						game.delayx();
						await player.chooseUseTarget(true, card, false);
					} else break;
				}
				if (get.distance(player, target) != distance[0] || get.distance(target, player) != distance[1]) flag = true;
				if (flag) {
					let result = await player
						.chooseControl(["复原武将牌", "复原武将牌上一个技能", "cancel2"])
						.set(ai, function () {
							let player = _status.event.player;
							if (player.isTurnedOver()) return 0;
							else return 1;
						})
						.forResult();
					if (result.index == 0) {
						if (player.isTurnedOver()) player.turnOver();
						player.link(false);
					} else if (result.index == 1) {
						let list = player.getStockSkills(true, true);
						if (!list.length) event.finish();
						let result2 = await player
							.chooseControl(list)
							.set("prompt", "请选择复原一个武将牌上的技能")
							.set("ai", function () {
								for (let i = 0; i < list.length; i++) {
									if (list[i] == "old_liuju") return i;
									let translation = get.skillInfoTranslation(list[i], player);
									if (get.plainText(translation).match(/“?出牌阶段限一次/g) || get.plainText(translation).match(/“?限定技/g)) return i;
								}
								return 0;
							})
							.forResult();
						let skill = list[result2.index];
						let suffixs = ["used", "round", "block", "blocker"];
						let info = get.info(skill);
						if (typeof info.usable == "number") {
							if (player.hasSkill("counttrigger") && player.storage.counttrigger[skill] && player.storage.counttrigger[skill] >= 1) {
								delete player.storage.counttrigger[skill];
							}
							if (typeof get.skillCount(skill) == "number" && get.skillCount(skill) >= 1) {
								delete player.getStat("skill")[skill];
							}
						}
						if (info.round && player.storage[skill + "_roundcount"]) {
							delete player.storage[skill + "_roundcount"];
						}
						if (player.storage[`temp_ban_${skill}`]) {
							delete player.storage[`temp_ban_${skill}`];
						}
						if (player.awakenedSkills.includes(skill)) {
							player.restoreSkill(skill);
						}
						for (let suffix of suffixs) {
							if (player.hasSkill(skill + "_" + suffix)) {
								player.removeSkill(skill + "_" + suffix);
							}
						}
						let str = "【" + get.translation(skill) + "】";
						game.log(player, "重置了技能", "#g" + str.slice(0, -1));
					}
				}
			},
			ai: {
				order: 6,
				result: {
					target: -1,
				},
			},
		},
		old_xumin: {
			audio: "ext:星之梦/audio/skill:2",
			old_olzhiyan2: { old_clan_hanshao: "old_xumin_old_clan_hanshao" },
			limited: true,
			clanSkill: true,
			skillAnimation: true,
			animationColor: "soil",
			enable: "phaseUse",
			selectTarget: [1, Infinity],
			multitarget: true,
			multiline: true,
			filterTarget(crad, player, target) {
				return target.countCards("h") < player.countCards("h");
			},
			content() {
				"step 0";
				player.awakenSkill("old_xumin");
				player.turnOver();
				("step 1");
				var targets = targets.sortBySeat();
				var wugu = new lib.element.VCard({ name: "wugu" });
				var targety = targets.filter(target => player.canUse(wugu, target, false));
				player.useCard(wugu, targety, false);
			},
			ai: {
				order: 7,
				result: {
					target: 1,
					player(player, target) {
						if (
							game.countPlayer(function (target) {
								return get.attitude(player, target) > 0 && player.countCards("h") > target.countCards("h") && player.canUse("wugu", target);
							}) >= 3
						) {
							return 3;
						} else {
							return player.isTurnedOver() ? 1 : 0;
						}
					},
				},
			},
		},
		old_xumin_old_clan_hanshao: {
			audio: "ext:星之梦/audio/skill:2",
		},
		//韩融 --by lonely patients
		old_huanjia: {
			audio: "clanhuanjia",
			usable: 1,
			enable: "phaseUse",
			filterTarget(card, player, target) {
				return player.canCompare(target);
			},
			async content(event, trigger, player) {
				const result = await player.chooseToCompare(event.target).forResult();
				if (!result.tie) {
					let winner = result.bool ? player : event.target;
					if (winner.sex == "male") {
						winner.addSkill("old_huanjia_eff");
					}
				}
			},
			ai: {
				result: { target: -1 },
				order: 6,
			},
			subSkill: {
				eff: {
					charlotte: true,
					onremove: true,
					mark: true,
					intro: {
						content: "下次发动“出牌阶段限一次”的技能后重置之",
					},
					direct: true,
					trigger: {
						player: ["useSkill", "logSkill"],
					},
					filter(event, player) {
						if (event.type != "player") return false;
						var skill = event.sourceSkill || event.skill;
						var info = get.info(skill);
						if (info.charlotte) return false;
						var translation = get.skillInfoTranslation(skill, event.player);
						if (!translation) return false;
						var match = get.plainText(translation).match(/“?出牌阶段限一次/g);
						if (!match || match.every(value => value != "出牌阶段限一次")) return false;
						return true;
					},
					async content(event, trigger, player) {
						player.removeSkill("old_huanjia_eff");
						let skill = trigger.sourceSkill || trigger.skill;
						let suffixs = ["used", "round", "block", "blocker"];
						let info = get.info(skill);
						if (typeof info.usable == "number") {
							if (player.hasSkill("counttrigger") && player.storage.counttrigger[skill] && player.storage.counttrigger[skill] >= 1) {
								delete player.storage.counttrigger[skill];
							}
							if (typeof get.skillCount(skill) == "number" && get.skillCount(skill) >= 1) {
								delete player.getStat("skill")[skill];
							}
						}
						if (info.round && player.storage[skill + "_roundcount"]) {
							delete player.storage[skill + "_roundcount"];
						}
						if (player.storage[`temp_ban_${skill}`]) {
							delete player.storage[`temp_ban_${skill}`];
						}
						if (player.awakenedSkills.includes(skill)) {
							player.restoreSkill(skill);
						}
						for (let suffix of suffixs) {
							if (player.hasSkill(skill + "_" + suffix)) {
								player.removeSkill(skill + "_" + suffix);
							}
						}
						let str = "【" + get.translation(skill) + "】";
						game.log(player, "重置了技能", "#g" + str.slice(0, -1));
					},
				},
			},
		},
		old_lianhe: {
			audio: "clanlianhe",
			enable: "phaseUse",
			usable: 1,
			selectTarget: 2,
			multitarget: true,
			filterTarget(card, player, target) {
				return !target.isLinked();
			},
			async content(event, trigger, player) {
				let targetlist = event.targets.sortBySeat();
				player.line(event.targets);
				for (let i of targetlist) {
					i.link(true);
				}
				let list = [];
				for (let i of targetlist) {
					let result;
					if (!i.countGainableCards(player, "he")) {
						result = { index: 0 };
					} else {
						let translation = get.translation(player);
						result = await i
							.chooseControl()
							.set("prompt", "选择令" + translation + "执行一项：")
							.set("choiceList", ["令" + translation + "摸一张牌", "令" + translation + "获得你一张牌并翻面"])
							.set("ai", function () {
								if (get.attitude(i, player) > 0) return 0;
								else if (Math.random() > 0.5) return 0;
								else return 1;
							})
							.forResult();
					}
					list.push([result.index, i]);
				}
				game.delay();
				if (list.length) {
					for (let i = 0; i < list.length; i++) {
						player.line(list[i][1]);
						if (list[i][0] == 0) {
							player.draw();
						} else {
							if (list[i][1].countGainableCards(player, "he")) {
								await player.gainPlayerCard(list[i][1], "he", true);
							}
							player.turnOver();
						}
						list[i][1].addTempSkill("old_lianhe_eff", { player: "phaseUseAfter" });
						list[i][1].markAuto("old_lianhe_eff", [player]);
					}
				}
			},
			ai: {
				result: { player: 1 },
				order: 5,
			},
			isEmptyObjet(obj) {
				for (var key in obj) {
					return false;
				}
				return true;
			},
			subSkill: {
				eff: {
					charlotte: true,
					direct: true,
					trigger: { player: "phaseUseEnd" },
					filter(event, player) {
						for (var i of player.getStorage("old_lianhe_eff")) {
							if (i.isIn()) return true;
						}
						return false;
					},
					async content(event, trigger, player) {
						let targetlist = player
							.getStorage("old_lianhe_eff")
							.sortBySeat()
							.filter(i => i.isIn());
						for (let i of targetlist) {
							if (!i.isIn()) continue;
							player.line(i);
							let num1 = 0;
							let history = player.getHistory("gain", function (evt) {
								if (lib.skill.old_lianhe.isEmptyObjet(evt.getParent("phaseUse"))) return false;
								else {
									num1 += evt.cards.length;
									return true;
								}
							});
							let num = Math.min(5, num1);
							let totalIndex = 0;
							while (totalIndex <= num && i.isIn()) {
								let translation = get.translation(i);
								let result;
								if (!player.countGainableCards(i, "he")) {
									result = { index: 0 };
								} else {
									result = await player
										.chooseControl()
										.set("prompt", "选择令" + translation + "执行一项<br>当前序号和：" + totalIndex + "  本阶段获得牌数：" + num1)
										.set("choiceList", ["令" + translation + "摸一张牌", "令" + translation + "获得你一张牌并翻面"])
										.set("ai", function () {
											let rest = num - totalIndex;
											if (get.attitude(player, i) > 0) return 0;
											else if (rest >= 3) return 0;
											else return i.isTurnedOver() ? 0 : 1;
										})
										.forResult();
								}
								if (result.index == 1) {
									if (player.countGainableCards(i, "he")) {
										await i.gainPlayerCard(player, "he", true);
									}
									i.turnOver();
								} else i.draw();
								totalIndex += result.index + 1;
							}
						}
					},
				},
			},
		},
		//滕芳兰
		old_luochong: {
			audio: "luochong",
			trigger: { player: ["phaseZhunbeiBegin", "damageEnd"] },
			filter(event, player) {
				var storage1 = player.storage.old_luochong_round,
					storage2 = player.getStorage("old_luochong");
				if (!storage1) {
					storage1 = [[]];
				}
				for (var i = 0; i < 4; i++) {
					if (
						!storage1[0].includes(i) &&
						!storage2.includes(i) &&
						game.hasPlayer(function (current) {
							return lib.skill.old_luochong.filterx[i](current);
						})
					) {
						return true;
					}
				}
				return false;
			},
			filterx: [target => target.isDamaged(), () => true, target => target.countCards("he") > 0, () => true],
			onremove: true,
			async cost(event, trigger, player) {
				let choiceList = ["令一名角色回复1点体力。", "令一名角色失去1点体力。", "令一名角色弃置两张牌。", "令一名角色摸两张牌并可以将这些牌分配任意名角色。"],
					list = [];
				let storage1 = player.getStorage("old_luochong_round", null),
					storage2 = player.getStorage("old_luochong");
				if (!storage1) {
					storage1 = [[]];
				}
				for (let i = 0; i < 4; i++) {
					if (storage2.includes(i)) {
						choiceList[i] = ["deleted", `<span style="text-decoration: line-through; opacity:0.5; ">${choiceList[i]}</span>`];
					} else if (
						storage1[0].includes(i) ||
						!game.hasPlayer(function (current) {
							return lib.skill.old_luochong.filterx[i](current);
						})
					) {
						choiceList[i] = ["used", `<span style="opacity:0.5;">${choiceList[i]}</span>`];
					} else {
						choiceList[i] = [i, choiceList[i]];
						list.push(i);
					}
				}
				if (!list.length) {
					return;
				}
				list.push("cancel2");
				let gett = choice => {
					if (choice == "cancel2") {
						return 0.1;
					}
					let max = 0,
						func = [
							target => {
								if (target.isDamaged()) {
									max = Math.max(max, get.recoverEffect(target, player, player));
								}
							},
							target => {
								max = Math.max(max, get.effect(target, { name: "losehp" }, player, player));
							},
							target => {
								let num = target.countDiscardableCards(player, "he");
								if (num > 0) {
									max = Math.max(max, Math.sqrt(Math.min(2, num)) * get.effect(target, { name: "guohe_copy2" }, player, player));
								}
							},
							target => {
								max = Math.max(max, 2 * get.effect(target, { name: "draw" }, player, player));
							},
						][choice];
					game.countPlayer(current => {
						func(current);
					});
					return max;
				};
				const choice = list.sort((a, b) => {
					return gett(b) - gett(a);
				})[0];
				const { bool, targets, links } = await player
					.chooseButtonTarget({
						createDialog: [get.prompt(event.skill), [choiceList, "textbutton"]],
						filterButton(button) {
							return typeof button.link == "number";
						},
						choice: choice,
						complexTarget: true,
						filterTarget(card, player, target) {
							const buttons = ui.selected.buttons;
							if (!buttons?.length || typeof buttons[0].link != "number") {
								return false;
							}
							const filter = lib.skill.old_luochong.filterx[buttons[0].link];
							return filter(target);
						},
						ai1(button) {
							if (button.link == get.event().choice) {
								return 1;
							}
							return 0;
						},
						ai2(target) {
							const buttons = ui.selected.buttons;
							if (!buttons?.length || typeof buttons[0].link != "number") {
								return 0;
							}
							let filter = [
								(player, target) => {
									return get.recoverEffect(target, player, player);
								},
								(player, target) => {
									return get.effect(target, { name: "losehp" }, player, player);
								},
								(player, target) => {
									return get.effect(target, { name: "guohe_copy2" }, player, player) * Math.sqrt(Math.min(2, target.countCards("he")));
								},
								(player, target) => {
									return 2 * get.effect(target, { name: "draw" }, player, player);
								},
							][buttons[0].link];
							return filter(get.player(), target);
						},
					})
					.forResult();
				event.result = {
					bool: bool,
					targets: targets,
					cost_data: links,
				};
			},
			async content(event, trigger, player) {
				const {
					targets: [target],
					cost_data: [index],
				} = event;
				if (player != target) {
					player.addExpose(0.2);
				}
				player.addTempSkill("old_luochong_round", "roundStart");
				if (!player.getStorage("old_luochong_round", null)) {
					player.setStorage("old_luochong_round", [[]]);
				}
				player.storage.old_luochong_round[0].push(index);
				switch (index) {
					case 0:
						await target.recover();
						break;
					case 1:
						await target.loseHp();
						break;
					case 2:
						await target.chooseToDiscard(true, "he", 2);
						break;
					case 3:
						await target.draw(2);
						let evt = target.getHistory("gain", evt => evt.getParent(2) == event)[0];
						if (!evt || !evt.cards || evt.cards.length === 0) break;
						let cardsToGive = evt.cards.slice();
						if (!game.hasPlayer(p => p != target)) break;
						let given_map = [];
						let remaining = cardsToGive.length;
						target.addGaintag(cardsToGive, "old_luochong_given");
						while (remaining > 0 && target.hasCard(card => card.hasGaintag && card.hasGaintag("old_luochong_given"), "h")) {
							const result = await target
								.chooseCardTarget({
									filterCard(card) {
										return card.hasGaintag && card.hasGaintag("old_luochong_given");
									},
									selectCard: [1, remaining],
									filterTarget: lib.filter.notMe,
									prompt: "落宠：请选择要分配的卡牌和目标",
									prompt2: `（还可分配 ${remaining} 张）`,
									ai1(card) { return card.name == "du" ? 1 : 0; },
									ai2(target) {
										const player = get.event().player;
										const card = ui.selected.cards[0];
										if (card) return get.value(card, target) * get.attitude(player, target);
										return 0;
									},
								})
								.forResult();
							if (result?.bool && result?.cards?.length && result?.targets?.length) {
								const { cards } = result;
								remaining -= cards.length;
								const targetPlayer = result.targets[0];
								if (given_map.some(i => i[0] == targetPlayer)) {
									given_map[given_map.indexOf(given_map.find(i => i[0] == targetPlayer))][1].addArray(cards);
								} else {
									given_map.push([targetPlayer, cards]);
								}
								cards.forEach(c => { if (c && c.removeGaintag) c.removeGaintag("old_luochong_given"); });
							} else {
								break;
							}
						}
						cardsToGive.forEach(c => { if (c && c.removeGaintag) c.removeGaintag("old_luochong_given"); });
						if (given_map.length) {
							await game.loseAsync({
								gain_list: given_map,
								player: target,
								cards: given_map.slice().flatMap(list => list[1]),
								giver: target,
								animate: "giveAuto",
							}).setContent("gaincardMultiple");
						}
						break;
				}
			},
			subSkill: {
				round: {
					charlotte: true,
					onremove: true,
				},
			},
		},
		old_aichen: {
			audio: "aichen",
			trigger: { player: "dying" },
			forced: true,
			filter(event, player) {
				return player.hasSkill("old_luochong", null, null, false) && player.getStorage("old_luochong").length < 3;
			},
			async content(event, trigger, player) {
				// 1. 回复体力至1点
				await player.recoverTo(1);

				// 2. 准备可选选项列表
				let list = [];
				let choiceList = ["令一名角色回复1点体力。", "令一名角色失去1点体力。", "令一名角色弃置两张牌。", "令一名角色摸两张牌并可以将这些牌分配任意名角色。"];
				let storage2 = player.getStorage("old_luochong");
				for (let i = 0; i < 4; i++) {
					if (storage2.includes(i)) {
						choiceList[i] = `<span style="text-decoration: line-through; opacity:0.5;">${choiceList[i]}</span>`;
					} else {
						list.push("选项" + get.cnNumber(i + 1, true));
					}
				}
				if (list.length === 0) return;

				// 3. 选择一个未移除的选项
				const result = await player.chooseControl(list)
					.set("prompt", "哀尘：选择一个〖落宠〗的选项并执行")
					.set("choiceList", choiceList)
					.set("ai", function () {
						let controls = _status.event.controls.slice(0);
						let priority = ["选项三", "选项四", "选项二", "选项一"];
						for (let opt of priority) {
							if (controls.includes(opt)) return opt;
						}
						return 0;
					})
					.forResult();

				let index = ["选项一", "选项二", "选项三", "选项四"].indexOf(result.control);
				if (index === -1) return;

				// 4. 根据选项选择目标（完全参考落宠的 filterx）
				let target = null;
				switch (index) {
					case 0: // 回复
						const targets0 = await player.chooseTarget(
							"选择一名受伤的角色",
							(card, player, target) => target.isDamaged()
						).set("ai", target => get.recoverEffect(target, player, player)).forResult();
						target = targets0.targets[0];
						break;
					case 1: // 失去体力
						const targets1 = await player.chooseTarget(
							"选择一名角色",
							() => true
						).set("ai", target => get.effect(target, { name: "losehp" }, player, player)).forResult();
						target = targets1.targets[0];
						break;
					case 2: // 弃牌
						const targets2 = await player.chooseTarget(
							"选择一名有手牌或装备的角色",
							(card, player, target) => target.countCards("he") > 0
						).set("ai", target => get.effect(target, { name: "guohe_copy2" }, player, player) * Math.sqrt(Math.min(2, target.countCards("he")))).forResult();
						target = targets2.targets[0];
						break;
					case 3: // 摸牌分配（目标可以是任意角色）
						const targets3 = await player.chooseTarget(
							"选择一名角色",
							() => true
						).set("ai", target => 2 * get.effect(target, { name: "draw" }, player, player)).forResult();
						target = targets3.targets[0];
						break;
				}
				if (!target) return;

				// 5. 执行选中的选项（完全复制落宠 content 中的逻辑）
				if (index === 0) {
					await target.recover();
				} else if (index === 1) {
					await target.loseHp();
				} else if (index === 2) {
					await target.chooseToDiscard(true, "he", 2);
				} else if (index === 3) {
					await target.draw(2);
					let evt = target.getHistory("gain", evt => evt.getParent(2) == event)[0];
					if (evt && evt.cards && evt.cards.length) {
						let cardsToGive = evt.cards.slice();
						if (game.hasPlayer(p => p != target)) {
							let given_map = [];
							let remaining = cardsToGive.length;
							target.addGaintag(cardsToGive, "old_aichen_given");
							while (remaining > 0 && target.hasCard(card => card.hasGaintag && card.hasGaintag("old_aichen_given"), "h")) {
								const giveResult = await target
									.chooseCardTarget({
										filterCard(card) {
											return card.hasGaintag && card.hasGaintag("old_aichen_given");
										},
										selectCard: [1, remaining],
										filterTarget: lib.filter.notMe,
										prompt: "哀尘：请选择要分配的卡牌和目标",
										prompt2: `（还可分配 ${remaining} 张）`,
										ai1(card) { return card.name == "du" ? 1 : 0; },
										ai2(target) {
											const player = get.event().player;
											const card = ui.selected.cards[0];
											if (card) return get.value(card, target) * get.attitude(player, target);
											return 0;
										},
									})
									.forResult();
								if (giveResult?.bool && giveResult?.cards?.length && giveResult?.targets?.length) {
									const { cards } = giveResult;
									remaining -= cards.length;
									const targetPlayer = giveResult.targets[0];
									if (given_map.some(i => i[0] == targetPlayer)) {
										given_map[given_map.indexOf(given_map.find(i => i[0] == targetPlayer))][1].addArray(cards);
									} else {
										given_map.push([targetPlayer, cards]);
									}
									cards.forEach(c => { if (c && c.removeGaintag) c.removeGaintag("old_aichen_given"); });
								} else {
									break;
								}
							}
							cardsToGive.forEach(c => { if (c && c.removeGaintag) c.removeGaintag("old_aichen_given"); });
							if (given_map.length) {
								await game.loseAsync({
									gain_list: given_map,
									player: target,
									cards: given_map.slice().flatMap(list => list[1]),
									giver: target,
									animate: "giveAuto",
								}).setContent("gaincardMultiple");
							}
						}
					}
				}

				// 6. 移去该选项
				player.markAuto("old_luochong", [index]);
				game.log(player, "移去了", "#g【落宠】", "的", "#y" + ["令一名角色回复1点体力", "令一名角色失去1点体力", "令一名角色弃置两张牌", "令一名角色摸两张牌并可以将这些牌分配任意名角色"][index], "的选项");
			},
			ai: {
				combo: "old_luochong",
				neg: true,
			},
		},
		//邓忠
		old_dzkanpo: {
			audio: "dzkanpo",
			trigger: {
				player: "useCardToPlayered",
			},
			filter(event, player) {
				if (player.countMark("old_dzkanpo_mark") >= player.hp) return false;
				return get.type(event.card) != "equip" && event.target.countCards("h") && player.isPhaseUsing();
			},
			check(event, player) {
				return get.attitude(player, event.target) < 0;
			},
			logTarget: "target",
			content() {
				"step 0";
				player.addTempSkill("old_dzkanpo_mark", "phaseUseAfter");
				player.addMark("old_dzkanpo_mark", 1, false);
				player.viewHandcards(trigger.target);
				var list = [],
					choiceList = ["弃置" + get.translation(trigger.target) + "的一张牌，然后若弃置的牌的是能造成火焰伤害的牌，你摸一张牌", "重铸" + get.translation(trigger.target) + "手牌中的所有【杀】和【决斗】", "你与" + get.translation(trigger.target) + "互相对对方造成1点伤害"];
				list.push("选项一");
				if (trigger.target.countCards("h", { name: ["sha", "juedou"] })) list.push("选项二");
				else choiceList[1] = "<span style='opacity:0.5'>" + choiceList[1] + "</span>";
				if (!trigger.target.countCards("h", { name: "shan" })) list.push("选项三");
				else choiceList[2] = "<span style='opacity:0.5'>" + choiceList[2] + "</span>";
				player
					.chooseControl(list)
					.set("prompt", get.prompt("tspowei", target))
					.set("choiceList", choiceList)
					.set("ai", function () {
						var player = _status.event.player,
							target = _status.event.target;
						if (list.contains("选项三") && player.hp + player.countCards("hs", { name: "tao" }) > 2) return "选项三";
						if (list.contains("选项二") && target.countCards("h", { name: ["sha", "juedou"] }) > 1) return "选项二";
						return "选项一";
					})
					.set("target", trigger.target);
				("step 1");
				game.log(player, "选择了", "#y" + result.control);
				switch (result.control) {
					case "选项一":
						player.discardPlayerCard("he", trigger.target, "visible", true);
						break;
					case "选项二":
						var cards = trigger.target.getCards("h", { name: ["sha", "juedou"] });
						trigger.target.loseToDiscardpile(cards);
						trigger.target.draw(cards.length);
						event.finish();
						break;
					case "选项三":
						trigger.target.damage(player);
						player.damage(trigger.target);
						event.finish();
						break;
				}
				("step 2");
				if (result.bool && get.tag(result.cards[0], "fireDamage")) player.draw();
			},
			subSkill: {
				mark: {
					charlotte: true,
					onremove: true,
					mark: true,
					intro: {
						onunmark: true,
						content(storage, player) {
							return "本回合已发动过" + (storage || 0) + "次“勘破”。";
						},
					},
				},
			},
		},
		old_dzgengzhan: {
			getNum(name) {
				var num = 0;
				if (name == "litong") num = 1;
				else
					switch (game.getRarity(name)) {
						case "junk":
							num = 1;
							break;
						case "rare":
							num = 2;
							break;
						case "epic":
							num = 3;
							break;
						case "legend":
							num = 4;
							break;
					}
				return num;
			},
			getCharacter(list) {
				var listx = [],
					num = 0;
				for (var name of list) {
					var numx = lib.skill.old_dzgengzhan.getNum(name);
					if (numx > num) {
						num = numx;
						listx = [name];
					} else if (numx == num) listx.push(name);
				}
				return listx;
			},
			group: "old_dzgengzhan_jieming",
			audio: "dzgengzhan",
			trigger: { player: "dying" },
			skillAnimation: true,
			animationColor: "water",
			direct: true,
			content() {
				"step 0";
				player.chooseTarget(get.prompt("old_dzgengzhan"), "令一名其他角色选择是否更换武将牌", lib.filter.notMe).set("ai", function (target) {
					var att = get.attitude(_status.event.player, target);
					var num = lib.skill.old_dzgengzhan.getNum(target.name);
					if (target.name2 != undefined) num = Math.min(num, lib.skill.old_dzgengzhan.getNum(target.name2));
					return att * (4 - num);
				});
				("step 1");
				if (result.bool) {
					var target = result.targets[0];
					event.target = target;
					var num = target.maxHp;
					event.num = num;
					player.logSkill("old_dzgengzhan", target);
					var list = [];
					for (var i = 0; i < _status.characterlist.length; i++) {
						if (lib.character[_status.characterlist[i]][1] == "wei") list.push(_status.characterlist[i]);
					}
					list = list.randomGets(5);
					var bolDialog = ["请选择替换的武将", [list, "character"]];
					target.chooseButton(bolDialog).set("ai", function (button) {
						var target = _status.event.player;
						var num = lib.skill.old_dzgengzhan.getNum(target.name);
						if (target.name2 != undefined) num = Math.min(num, lib.skill.old_dzgengzhan.getNum(target.name2));
						return lib.skill.old_dzgengzhan.getNum(button.link) - num;
					});
				} else event.finish();
				("step 2");
				if (result.bool) {
					event.character = result.links[0];
					if (target.name2 != undefined)
						target
							.chooseControl(target.name, target.name2)
							.set("prompt", "请选择要更换的武将牌")
							.set("ai", function () {
								return lib.skill.old_dzgengzhan.getNum(target.name) < lib.skill.old_dzgengzhan.getNum(target.name2) ? target.name : target.name2;
							});
					else result.control = target.name;
				} else {
					target.chat("拒绝");
					game.log("但", target, "拒绝更换其武将牌");
					event.finish();
				}
				("step 3");
				if (result.control == target.name) target.changeGroup("wei", false);
				game.log(target, "将", "#g" + get.translation(result.control), "替换为了", "#g" + get.translation(event.character));
				target.reinit(result.control, event.character, false);
				target.maxHp = num;
				target.update();
			},
			subSkill: {
				jieming: {
					audio: "dzgengzhan",
					trigger: { player: "damageEnd" },
					filter(event, player) {
						return game.hasPlayer(function (current) {
							return current.countCards("h") < current.maxHp;
						});
					},
					direct: true,
					content() {
						"step 0";
						event.count = trigger.num;
						("step 1");
						event.count--;
						player
							.chooseTarget(get.prompt("old_dzgengzhan"), "令一名手牌数小于其体力上限的角色摸三张牌，然后其将手牌弃至其体力上限", function (card, player, target) {
								return target.countCards("h") < target.maxHp;
							})
							.set("ai", function (target) {
								var att = get.attitude(_status.event.player, target);
								if (target.hasSkillTag("nogain")) att /= 6;
								if (att > 2) return Math.min(5, target.maxHp) - target.countCards("h");
								return att / 3;
							});
						("step 2");
						if (result.bool) {
							var target = result.targets[0];
							event.target = target;
							player.logSkill("old_dzgengzhan_jieming", target);
							target.draw(3);
						} else event.finish();
						("step 3");
						if (target.countCards("h") > target.maxHp) target.chooseToDiscard("h", target.countCards("h") - target.maxHp, true);
						if (
							event.count > 0 &&
							game.hasPlayer(function (current) {
								return current.countCards("h") < current.maxHp;
							})
						)
							event.goto(1);
					},
					ai: {
						maixie: true,
						maixie_hp: true,
						effect: {
							target(card, player, target, current) {
								if (get.tag(card, "damage") && target.hp > 1) {
									if (player.hasSkillTag("jueqing", false, target)) return [1, -2];
									var max = 0;
									var players = game.filterPlayer();
									for (var i = 0; i < players.length; i++) {
										if (get.attitude(target, players[i]) > 0) {
											max = Math.max(Math.min(5, players[i].hp) - players[i].countCards("h"), max);
										}
									}
									switch (max) {
										case 0:
											return 2;
										case 1:
											return 1.5;
										case 2:
											return [1, 2];
										default:
											return [0, max];
									}
								}
								if ((card.name == "tao" || card.name == "caoyao") && target.hp > 1 && target.countCards("h") <= target.hp) return [0, 0];
							},
						},
					},
				},
			},
		},
		//王衍
		old_cihuang: {
			audio: "cihuang",
			trigger: {
				global: ["eventNeutralized", "shaMiss"],
			},
			direct: true,
			filter(event, player) {
				if (event.player != _status.currentPhase || !event.targets || event.targets.length != 1 || event.type != "card" || !player.countCards("he")) return false;
				return lib.skill.old_cihuang.getList(player, event.player, true);
			},
			getList(player, target, bool) {
				var natures = lib.inpile_nature.slice(0);
				var tricks = [];
				for (var name of lib.inpile) {
					var info = lib.card[name];
					if (!info || info.type != "trick" || info.notarget || (info.selectTarget && info.selectTarget != 1 && (info.selectTarget != -1 || !info.toself))) continue;
					tricks.push(name);
				}
				var history = player.actionHistory;
				var HadUsenormalSha = false;
				for (var i = history.length - 1; i >= 0; i--) {
					var info = history[i];
					for (var evt of info.useCard) {
						if (evt.card.storage && evt.card.storage.old_cihuang) {
							var name = evt.card.name;
							if (name == "sha") {
								if (evt.card.nature) natures.remove(evt.card.nature);
								else HadUsenormalSha = true;
							} else tricks.remove(name);
						}
					}
					if (info.isRound) break;
				}
				var vcards = [];
				if (!HadUsenormalSha && player.canUse({ name: "sha", isCard: true }, target, false)) {
					vcards.push(["基本", "", "sha", ""]);
				}
				for (var i of natures) {
					if (
						player.canUse(
							{
								name: "sha",
								nature: i,
								isCard: true,
							},
							target,
							false
						)
					) {
						if (bool) return true;
						else vcards.push(["基本", "", "sha", i]);
					}
				}
				for (var i of tricks) {
					if (
						player.canUse(
							{
								name: i,
								isCard: true,
							},
							target,
							false
						)
					) {
						if (bool) return true;
						else vcards.push(["锦囊", "", i]);
					}
				}
				if (bool) return false;
				return vcards;
			},
			content() {
				"step 0";
				var target = trigger.player;
				var list = lib.skill.old_cihuang.getList(player, target);
				if (_status.connectMode)
					game.broadcastAll(function () {
						_status.noclearcountdown = true;
					});
				player.chooseButton([get.prompt("old_cihuang", target), "<div class='text center'>选择一张牌并视为对" + get.translation(target) + "使用</div>", [list, "vcard"]]).set("ai", function (button) {
					var card = {
							name: button.link[2],
							nature: button.link[3],
							storage: { old_cihuang: true },
						},
						player = _status.event.player,
						target = _status.event.getTrigger().player;
					return get.effect(target, card, player, player);
				});
				("step 1");
				if (result.bool) {
					player.useCard(
						{
							name: result.links[0][2],
							nature: result.links[0][3],
							storage: { old_cihuang: true },
							isCard: true,
						},
						trigger.player,
						false,
						"old_cihuang"
					).oncard = function (card, player) {
						_status.event.directHit.addArray(game.filterPlayer());
					};
				} else event._result = { bool: false };
				("step 2");
				if (_status.connectMode) {
					game.broadcastAll(function () {
						delete _status.noclearcountdown;
						game.stopCountChoose();
					});
				}
			},
			ai: {
				directHit_ai: true,
				skillTagFilter(player, tag, arg) {
					return arg && arg.card && arg.card.storage && arg.card.storage.old_cihuang;
				},
			},
		},
		old_sanku: {
			audio: "sanku",
			trigger: {
				player: "dying",
			},
			forced: true,
			content() {
				"step 0";
				player.loseMaxHp();
				("step 1");
				var num = player.maxHp - player.hp;
				if (num > 0) player.recover(num);
			},
			ai: {
				halfneg: true,
			},
		},
		//陆郁生
		old_olcangxin: {
			audio: "olcangxin",
			trigger: {
				player: "damageBegin4",
			},
			checkx(event, player) {
				var target = event.source;
				return get.damageEffect(player, target, player) <= 0;
			},
			forced: true,
			content() {
				"step 0";
				var cards = get.bottomCards(3, true);
				player
					.chooseButton(["###藏心：请选择要弃置的牌###若以此法弃置了红桃牌，则防止此伤害", cards], [1, cards.length], true)
					.set("ai", function (button) {
						if (!_status.event.bool && get.suit(button.link, false) == "heart") return 0;
						if (get.suit(button.link, false) != "heart") return 1;
						const num = get.event().getTrigger().num;
						if (num > ui.selected.buttons.filter(but => get.suit(but.link, false) == "heart").length) return 1;
						return 0;
					})
					.set("bool", lib.skill.old_olcangxin.checkx(trigger, player));
				("step 1");
				if (result.bool) {
					player.$throw(result.links, 1000);
					game.cardsDiscard(result.links);
					const num = result.links.filter(card => get.suit(card, false) == "heart").length;
					if (num) trigger.cancel();
				} else event.finish();
				("step 2");
				game.delayx();
			},
			group: "old_olcangxin_yingzi",
			subSkill: {
				yingzi: {
					audio: "olcangxin",
					trigger: {
						player: "phaseDrawBegin",
					},
					forced: true,
					content() {
						var cards = get.bottomCards(3, true);
						player.showCards(cards, get.translation(player) + "发动了【藏心】");
						var num = cards.filter(card => get.suit(card, false) == "heart").length;
						if (num) player.draw(num);
					},
				},
			},
		},
		//ol胡金定
		old_olchongshen: {
			audio: "olchongshen",
			locked: false,
			enable: "chooseToUse",
			filterCard(card) {
				return get.itemtype(card) == "card" && card.hasGaintag("old_olchongshen");
			},
			position: "h",
			viewAs: {
				name: "shan",
			},
			viewAsFilter(player) {
				if (!player.countCards("h", card => card.hasGaintag("old_olchongshen") && get.color(card) == "red")) return false;
			},
			prompt: "将本轮得到的牌当作【闪】使用",
			check(card) {
				return 7 - get.value(card);
			},
			ai: {
				order: 2,
				respondShan: true,
				skillTagFilter(player, tag, arg) {
					if (arg == "respond" || !player.countCards("h", card => _status.connectMode || (card.hasGaintag("old_olchongshen") && get.color(card) == "red"))) return false;
				},
				effect: {
					target(card, player, target, current) {
						if (get.tag(card, "respondShan") && current < 0) return 0.6;
					},
				},
				basic: {
					useful: (card, i) => {
						let player = _status.event.player,
							basic = [7, 5.1, 2],
							num = basic[Math.min(2, i)];
						if (player.hp > 2 && player.hasSkillTag("maixie")) num *= 0.57;
						if (player.hasSkillTag("freeShan", false, null, true) || player.getEquip("rewrite_renwang")) num *= 0.8;
						return num;
					},
					value: [7, 5.1, 2],
				},
				result: {
					player: 1,
				},
			},
			group: "old_olchongshen_mark",
			mod: {
				aiValue(player, card, num) {
					if (get.name(card) != "shan" && get.itemtype(card) == "card" && (!card.hasGaintag("old_olchongshen") || get.color(card) != "red")) return;
					let cards = player.getCards("hs", card => get.name(card) == "shan" || card.hasGaintag("old_olchongshen"));
					cards.sort((a, b) => (get.name(b) == "shan" ? 1 : 2) - (get.name(a) == "shan" ? 1 : 2));
					const geti = () => {
						if (cards.includes(card)) return cards.indexOf(card);
						return cards.length;
					};
					if (get.name(card) == "shan") return Math.min(num, [6, 4, 3][Math.min(geti(), 2)]) * 0.6;
					return Math.max(num, [6.5, 4, 3][Math.min(geti(), 2)]);
				},
				aiUseful() {
					return lib.skill.old_olchongshen.mod.aiValue.apply(this, arguments);
				},
				ignoredHandcard(card, player) {
					if (card.hasGaintag("old_olchongshen")) return true;
				},
				cardDiscardable(card, player, name) {
					if (name == "phaseDiscard" && card.hasGaintag("old_olchongshen")) return false;
				},
			},
			init(player) {
				if (game.phaseNumber > 0) {
					const hs = player.getCards("h"),
						history = player.getAllHistory();
					let cards = [];
					for (let i = history.length - 1; i >= 0; i--) {
						for (const evt of history[i].gain) {
							cards.addArray(evt.cards);
						}
						if (history[i].isRound) break;
					}
					cards = cards.filter(i => hs.includes(i));
					if (cards.length) player.addGaintag(cards, "old_olchongshen");
				}
			},
			onremove(player) {
				player.removeGaintag("old_olchongshen");
			},
			subSkill: {
				mark: {
					charlotte: true,
					trigger: {
						player: "gainBegin",
						global: "roundStart",
					},
					filter(event, player) {
						return event.name == "gain" || game.roundNumber > 1;
					},
					forced: true,
					popup: false,
					content() {
						if (trigger.name == "gain") trigger.gaintag.add("old_olchongshen");
						else player.removeGaintag("old_olchongshen");
					},
				},
			},
		},
		//ol费祎
		old_hezhong: {
			audio: "hezhong",
			trigger: {
				player: "loseAfter",
				global: ["equipAfter", "addJudgeAfter", "gainAfter", "loseAsyncAfter", "addToExpansionAfter"],
			},
			filter(event, player) {
				if (player.countCards("h") != 1 || typeof get.number(player.getCards("h")[0], player) != "number") {
					return false;
				}
				if (player.hasSkill("old_hezhong_0") && player.hasSkill("old_hezhong_1")) {
					return false;
				}
				let gain = 0,
					lose = 0;
				if (event.getg) {
					gain = event.getg(player).length;
				}
				if (event.getl) {
					lose = event.getl(player).hs.length;
				}
				return gain != lose;
			},
			prompt2(event, player) {
				let str = "展示最后一张手牌并摸一张牌";
				if (!player.hasSkill("old_hezhong_0") || !player.hasSkill("old_hezhong_0")) {
					str += "，然后令本回合使用点数";
					if (!player.hasSkill("old_hezhong_0")) {
						str += "大于";
					}
					if (!player.hasSkill("old_hezhong_0") && !player.hasSkill("old_hezhong_0")) {
						str += "或";
					}
					if (!player.hasSkill("old_hezhong_1")) {
						str += "小于";
					}
					str += get.number(player.getCards("h")[0], player);
					str += "的普通锦囊牌额外结算一次";
				}
				return str;
			},
			frequent: true,
			content() {
				"step 0";
				player.showHandcards(get.translation(player) + "发动了【技能】");
				event.num = get.number(player.getCards("h")[0], player);
				("step 1");
				player.draw();
				("step 2");
				if (player.hasSkill("old_hezhong_0")) {
					event._result = { index: 1 };
				} else if (player.hasSkill("old_hezhong_1")) {
					event._result = { index: 0 };
				} else {
					player
						.chooseControl()
						.set("choiceList", ["本回合使用点数大于" + num + "的普通锦囊牌额外结算一次", "本回合使用点数小于" + num + "的普通锦囊牌额外结算一次"])
						.set("ai", () => {
							var player = _status.event.player;
							var num = _status.event.num;
							if (
								player.getCards("h").reduce(function (num, card) {
									return num + (get.number(card, player) || 0);
								}, 0) >
								num * 2
							) {
								return 0;
							}
							return 1;
						})
						.set("num", num);
				}
				("step 3");
				var skill = "old_hezhong_" + result.index;
				player.addTempSkill(skill);
				player.markAuto(skill, [num]);
			},
			subSkill: {
				0: {
					charlotte: true,
					onremove: true,
					marktext: "＞",
					intro: {
						markcount: list => {
							return list.reduce((str, num) => {
								return str + get.strNumber(num);
							}, "");
						},
						content: "本回合使用的点数大于$的普通锦囊牌额外结算一次",
					},
					audio: "hezhong",
					trigger: { player: "useCard" },
					filter(event, player) {
						if (get.type(event.card) != "trick") {
							return false;
						}
						if (!event.targets.length) {
							return false;
						}
						var num = get.number(event.card, player);
						return typeof num == "number" && player.getStorage("old_hezhong_0").some(numx => num > numx);
					},
					forced: true,
					// usable: 1,
					content() {
						// player.unmarkSkill("old_hezhong_0");
						trigger.effectCount++;
						game.log(trigger.card, "额外结算一次");
					},
					ai: {
						effect: {
							player_use(card, player, target) {
								if (card.name == "tiesuo" && (!player.storage.counttrigger || !player.storage.counttrigger.old_hezhong_0)) {
									return "zerotarget";
								}
							},
						},
					},
				},
				1: {
					charlotte: true,
					onremove: true,
					marktext: "<",
					intro: {
						markcount: list => {
							return list.reduce((str, num) => {
								return str + get.strNumber(num);
							}, "");
						},
						content: "本回合使用的点数小于$的普通锦囊牌额外结算一次",
					},
					audio: "hezhong",
					trigger: { player: "useCard" },
					filter(event, player) {
						if (get.type(event.card) != "trick") {
							return false;
						}
						if (!event.targets.length) {
							return false;
						}
						var num = get.number(event.card, player);
						return typeof num == "number" && player.getStorage("old_hezhong_1").some(numx => num < numx);
					},
					forced: true,
					// usable: 1,
					content() {
						// player.unmarkSkill("old_hezhong_1");
						trigger.effectCount++;
						game.log(trigger.card, "额外结算一次");
					},
					ai: {
						effect: {
							player_use(card, player, target) {
								if (card.name == "tiesuo" && (!player.storage.counttrigger || !player.storage.counttrigger.old_hezhong_1)) {
									return "zerotarget";
								}
							},
						},
					},
				},
			},
		},
		//OL彭羕
		old_oltuishi: {
			audio: "oltuishi",
			mod: {
				wuxieJudgeEnabled: () => false,
				wuxieEnabled: () => false,
				cardEnabled: card => {
					if (card.name == "wuxie") return false;
				},
				targetInRange: card => {
					if (card.storage && card.storage.old_oltuishi) return true;
				},
				aiValue: (player, card, val) => {
					if (card.name == "wuxie") return 0;
					var num = get.number(card);
					if ([1, 11, 12, 13].includes(num)) return val * 1.1;
				},
				aiUseful: (player, card, val) => {
					if (card.name == "wuxie") return 0;
					var num = get.number(card);
					if ([1, 11, 12, 13].includes(num)) return val * 1.1;
				},
				aiOrder: (player, card, order) => {
					if (get.name(card) == "sha" && player.hasSkill("old_oltuishi_unlimit")) order += 9;
					var num = get.number(card);
					if ([1, 11, 12, 13].includes(num)) order += 3;
					return order;
				},
			},
			trigger: { player: "useCardAfter" },
			forced: true,
			filter(event) {
				const num = get.number(event.card);
				return [1, 11, 12, 13].includes(num);
			},
			content() {
				player.draw(2);
				player.addSkill("old_oltuishi_unlimit");
			},
			subSkill: {
				unlimit: {
					charlotte: true,
					mod: {
						cardUsable: () => Infinity,
						targetInRange: () => true,
					},
					trigger: { player: "useCard1" },
					forced: true,
					popup: false,
					silent: true,
					firstDo: true,
					content() {
						player.removeSkill("old_oltuishi_unlimit");
						var card = trigger.card;
						if (!card.storage) card.storage = {};
						card.storage.old_oltuishi = true;
						if (trigger.addCount !== false) {
							trigger.addCount = false;
							player.getStat("card")[card.name]--;
						}
					},
					mark: true,
					intro: { content: "使用的下一张牌无距离次数限制" },
				},
			},
		},
		//ol界虞翻
		old_olzongxuan: {
			audio: "rezongxuan",
			trigger: { global: ["loseAfter", "loseAsyncAfter"] },
			filter(event, player) {
				if (event.type != "discard" || event.getlx === false) return false;
				return get.info("old_olzongxuan").getCards(event, player).length;
			},
			check(event, player) {
				if (event.getParent(3).name != "phaseDiscard") return false;
				const cards = get.info("old_olzongxuan").getCards(event, player);
				return game.hasPlayer(target => {
					if (cards.some(i => get.type(i, null, target) == "equip") && (get.attitude(player, target) > 0 || get.recoverEffect(target, player, player) > 0)) return true;
					if (cards.some(i => get.type(i, null, target) != "equip") && target.getHp() >= player.getHp() && get.effect(target, { name: "losehp" }, player, player) > 0) return true;
					return false;
				});
			},
			async content(event, trigger, player) {
				const { bool, moved } = await player
					.chooseToMove("纵玄：将任意张牌置于牌堆顶", true)
					.set("list", [["本次弃置的牌", get.info("old_olzongxuan").getCards(trigger, player)], ["牌堆顶"]])
					.set("filterOk", moved => moved[1].length)
					.set("processAI", list => {
						const player = get.event().player;
						const cards = list[0][1].slice(),
							cards2 = cards.filter(card => {
								return game.hasPlayer(target => {
									if (get.type(card, null, target) == "equip" && (get.attitude(player, target) > 0 || get.recoverEffect(target, player, player) > 0)) return true;
									if (get.type(card, null, target) != "equip" && target.getHp() >= player.getHp() && get.effect(target, { name: "losehp" }, player, player) > 0) return true;
									return false;
								});
							}),
							cards3 = cards2.length ? cards2.randomGet() : cards.randomGet();
						return [[], [cards3]];
					})
					.forResult();
				if (bool) {
					let cards = moved[1].slice();
					game.log(player, "将", cards, "置于了牌堆顶");
					await game.cardsGotoPile(cards.reverse(), "insert");
				}
			},
			getCards(event, player) {
				let cards = [];
				for (const target of [player, player.getPrevious()]) {
					const evt = event.getl(target);
					if (evt && evt.cards2 && evt.cards2.some(i => get.position(i) == "d")) cards.addArray(evt.cards2.filter(i => get.position(i) == "d"));
				}
				return cards;
			},
		},
		old_olzhiyan: {
			audio: "zhiyan",
			old_olzhiyan: ["re_yufan"],
			trigger: { global: "phaseJieshuBegin" },
			filter(event, player) {
				return event.player == player || event.player == player.getPrevious();
			},
			direct: true,
			async content(event, trigger, player) {
				const { bool, targets } = await player
					.chooseTarget(get.prompt2("old_olzhiyan"))
					.set("ai", target => {
						const player = get.event().player,
							cards = get.event().cards;
						if (!cards.length) return 0;
						const card = cards[0],
							att = get.attitude(player, target);
						if (get.type(card, null, target) == "equip" && (get.attitude(player, target) > 0 || get.recoverEffect(target, player, player) > 0)) return get.recoverEffect(target, player, player) * 20 + att / 114514;
						if (get.type(card, null, target) != "equip") {
							if (target.getHp() !== player.getHp()) return get.effect(target, { name: "losehp" }, player, player) * 20 - att / 114514;
							return get.effect(target, { name: "draw" }, player, player);
						}
						return 0;
					})
					.set("cards", Array.from(ui.cardPile.childNodes || []) || [])
					.forResult();
				if (bool) {
					const target = targets[0];
					player.logSkill("old_olzhiyan", target);
					const result = (await target.draw("visible").forResult()).cards;
					if (result) {
						const card = result[0];
						if (get.type(card, null, target) == "equip") {
							if (target.getCards("h").includes(card) && target.hasUseTarget(card)) {
								const { bool } = await target.chooseUseTarget(card, true, "nopopup").forResult();
								if (bool) await target.recover();
							}
						} else if (target.getHp() !== player.getHp()) await target.loseHp();
					}
				}
			},
			ai: { expose: 0.2 },
		},
		//程普
		old_olchunlao: {
			audio: "chunlao",
			audioname: ["xin_chengpu"],
			trigger: { global: ["loseAfter", "loseAsyncAfter"] },
			filter(event, player) {
				if (event.type != "discard" || event.getlx === false) return false;
				return game.hasPlayer(target => {
					if (![player.getPrevious(), player, player.getNext()].includes(target)) return false;
					return event.getl(target)?.cards2?.some(i => i.name == "sha" && get.position(i) == "d");
				});
			},
			forced: true,
			locked: false,
			content() {
				player
					.addToExpansion(
						game
							.filterPlayer(target => {
								if (![player.getPrevious(), player, player.getNext()].includes(target)) return false;
								return trigger.getl(target)?.cards2?.some(i => i.name == "sha" && get.position(i) == "d");
							})
							.map(target => {
								return trigger.getl(target).cards2.filter(i => i.name == "sha" && get.position(i) == "d");
							})
							.flat()
							.unique(),
						"gain2"
					)
					.gaintag.add("old_olchunlao");
			},
			ai: {
				effect: {
					player_use(card, player, target) {
						if (_status.currentPhase != player) return;
						if (card.name == "sha" && !player.getExpansions("old_olchunlao").length && target.hp > 1) {
							return "zeroplayertarget";
						}
					},
				},
			},
			intro: {
				content: "expansion",
				markcount: "expansion",
			},
			onremove(player, skill) {
				var cards = player.getExpansions(skill);
				if (cards.length) player.loseToDiscardpile(cards);
			},
			group: ["old_olchunlao_save", "old_olchunlao_gain"],
			subSkill: {
				save: {
					inherit: "chunlao2",
					filter(event, player) {
						return event.type == "dying" && event.dying && event.dying.hp <= 0 && player.getExpansions("old_olchunlao").length;
					},
					async content(event, trigger, player) {
						const target = event.targets[0];
						const { bool, links } = await player.chooseCardButton(get.translation("old_olchunlao"), player.getExpansions("old_olchunlao"), true).forResult();
						if (bool) {
							player.logSkill("old_olchunlao", target);
							await player.loseToDiscardpile(links);
							event.type = "dying";
							await target.useCard({ name: "jiu", isCard: true }, target);
						}
					},
					ai: {
						save: true,
						skillTagFilter(player) {
							return player.getExpansions("old_olchunlao").length;
						},
						order: 6,
						result: { target: 1 },
					},
				},
				gain: {
					audio: "chunlao",
					audioname: ["xin_chengpu"],
					trigger: { global: "loseHpEnd" },
					filter(event, player) {
						return player.getExpansions("old_olchunlao").length;
					},
					async cost(event, trigger, player) {
						const cards = player.getExpansions("old_olchunlao");
						event.result = await player
							.chooseButton(["###" + get.prompt("old_olchunlao") + "###获得至多两张“醇”？", cards], [1, 2])
							.set("ai", button => {
								const player = get.event().player;
								return player.hasSha() ? 0 : get.value(button.link);
							})
							.forResult();
						if (event.result.bool) event.result.cards = event.result.links;
					},
					async content(event, trigger, player) {
						await player.gain(event.cards, player, "give");
					},
				},
			},
		},
		old_qiaoli: {
			audio: "qiaoli",
			enable: "phaseUse",
			viewAs: {
				name: "juedou",
				old_qiaoli: true,
			},
			filterCard(card, player) {
				if (get.type(card) != "equip") return false;
				return true;
			},
			viewAsFilter(player) {
				return (
					player.isPhaseUsing() &&
					player.hasCard(function (card) {
						return lib.skill.old_qiaoli.filterCard(card, player);
					}, "hes")
				);
			},
			check(card) {
				if (get.position(card) == "e") return 7.5 - get.value(card);
				return 12 - _status.event.player.getUseValue(card);
			},
			position: "hes",
			precontent() {
				player.addTempSkill("old_qiaoli_norespond");
				player.addTempSkill("old_qiaoli_effect");
			},
			ai: {
				directHit_ai: true,
				skillTagFilter(player, tag, arg) {
					return arg && arg.card && arg.card.name == "juedou" && _status.event.skill == "old_qiaoli";
				},
				wuxie(target, card, player, viewer, status) {
					if (player === game.me && get.attitude(viewer, player._trueMe || player) > 0) return 0;
					if (status * get.attitude(viewer, target) * get.effect(target, card, player, target) >= 0) return 0;
				},
				basic: {
					order: 5,
					useful: 1,
					value: 5.5,
				},
				result: {
					player(player, target, card) {
						if (
							player.hasSkillTag(
								"directHit_ai",
								true,
								{
									target: target,
									card: card,
								},
								true
							)
						)
							return 0;
						if (get.damageEffect(target, player, target) >= 0) return 0;
						let pd = get.damageEffect(player, target, player),
							att = get.attitude(player, target);
						if (att > 0 && get.damageEffect(target, player, player) > pd) return 0;
						let ts = target.mayHaveSha(player, "respond", null, "count"),
							ps = player.mayHaveSha(
								player,
								"respond",
								player.getCards("h", i => {
									return card === i || (card.cards && card.cards.includes(i)) || ui.selected.cards.includes(i);
								}),
								"count"
							);
						if (ts < 1 && ts << 3 < Math.pow(player.hp, 2)) return 0;
						if (att > 0) {
							if (ts < 1) return 0;
							return -2;
						}
						if (ts - ps + Math.exp(0.8 - player.hp) < 1) return -ts;
						if (pd >= 0) return pd / get.attitude(player, player);
						return -2 - ts;
					},
					target(player, target, card) {
						if (
							player.hasSkillTag(
								"directHit_ai",
								true,
								{
									target: target,
									card: card,
								},
								true
							)
						)
							return -2;
						let td = get.damageEffect(target, player, target);
						if (td >= 0) return td / get.attitude(target, target);
						let pd = get.damageEffect(player, target, player),
							att = get.attitude(player, target);
						if (att > 0 && get.damageEffect(target, player, player) > pd) return -2;
						let ts = target.mayHaveSha(player, "respond", null, "count"),
							ps = player.mayHaveSha(
								player,
								"respond",
								player.getCards("h", i => {
									return card === i || (card.cards && card.cards.includes(i)) || ui.selected.cards.includes(i);
								}),
								"count"
							);
						if (ts < 1) return -1.5;
						if (att > 0) return -2;
						if (ts - ps < 1) return -2 - ts;
						if (pd >= 0) return -1;
						return -ts;
					},
				},
				tag: {
					respond: 2,
					respondSha: 2,
					damage: 1,
				},
			},
			subSkill: {
				norespond: {
					charlotte: true,
					trigger: {
						player: "useCard1",
					},
					filter(event, player) {
						return event.card.old_qiaoli && get.subtype(event.cards[0]) != "equip1";
					},
					forced: true,
					popup: false,
					content() {
						// player.addTempSkill("old_qiaoli_gain");
						trigger.directHit.addArray(game.players);
						game.log(trigger.card, "不可被响应");
					},
				},
				effect: {
					charlotte: true,
					trigger: {
						player: "useCardAfter",
					},
					filter(event, player) {
						return event.card && event.cards && event.card.old_qiaoli && get.subtype(event.cards[0]) == "equip1";
					},
					forced: true,
					popup: false,
					content() {
						"step 0";
						var card = trigger.cards[0];
						var num = 1;
						var info = get.info(card, false);
						if (info && info.distance && typeof info.distance.attackFrom == "number") num -= info.distance.attackFrom;
						player.draw(num);
						("step 1");
						var cards = result;
						if (get.itemtype(cards) != "cards") {
							event.finish(5);
							return;
						}
						var hs = player.getCards("h");
						cards = cards.filter(function (card) {
							return hs.includes(card);
						});
						if (!cards.length) {
							event.finish(5);
							return;
						}
						event.cards = cards;
						if (_status.connectMode)
							game.broadcastAll(function () {
								_status.noclearcountdown = true;
							});
						event.given_map = {};
						("step 2");
						player.chooseCardTarget({
							filterCard(card) {
								return _status.event.cards.includes(card) && !card.hasGaintag("old_qiaoli_given");
							},
							cards: cards,
							filterTarget: lib.filter.notMe,
							selectCard: [1, cards.length],
							prompt: "是否将获得的牌分配给其他角色？",
							ai1(card) {
								return -1;
							},
							ai2(target) {
								return -1;
							},
						});
						("step 3");
						if (result.bool) {
							var res = result.cards,
								target = result.targets[0].playerid;
							player.addGaintag(res, "old_qiaoli_given");
							cards.removeArray(res);
							if (!event.given_map[target]) event.given_map[target] = [];
							event.given_map[target].addArray(res);
							if (cards.length) event.goto(2);
						}
						("step 4");
						if (_status.connectMode) {
							game.broadcastAll(function () {
								delete _status.noclearcountdown;
							});
							game.stopCountChoose();
						}
						for (var i in event.given_map) {
							var source = (_status.connectMode ? lib.playerOL : game.playerMap)[i];
							player.line(source, "green");
							source.gain(event.given_map[i], player, "giveAuto");
						}
						event.next.sort(function (a, b) {
							return lib.sort.seat(a.player, b.player);
						});
					},
				},
				// gain: {
				// 	charlotte: true,
				// 	audio: "qiaoli",
				// 	trigger: {
				// 		player: "phaseJieshuBegin",
				// 	},
				// 	forced: true,
				// 	content() {
				// 		var card = get.cardPile2(function (card) {
				// 			return get.type(card) == "equip";
				// 		});
				// 		if (card) player.gain(card, "gain2");
				// 	},
				// 	sourceSkill: "old_qiaoli",
				// },
			},
		},
		old_qingliang: {
			audio: "qingliang",
			trigger: {
				target: "useCardToTarget"
			},
			filter(event, player) {
				var bool1 = get.type2(event.card) == "basic";
				var bool2 = get.type2(event.card) == "trick";
				if (!bool1 && !bool2) {
					return false;
				}
				return player != event.player && player.countCards("h") > 0;
			},
			usable: 1,
			logTarget: "player",
			check(event, player) {
				if (get.attitude(player, event.player) > 0 || event.player.hasSkillTag("nogain")) {
					return true;
				}
				const eff = get.effect(player, event.card, event.player, player);
				if (eff >= 0) {
					return false;
				}
				const suits = [],
					banned = [],
					hs = player.getCards("h");
				for (const i of hs) {
					const suit = get.suit(i, player);
					suits.add(suit);
					if (!lib.filter.cardDiscardable(i, player, "old_qingliang")) {
						banned.add(suit);
					}
				}
				suits.removeArray(banned);
				for (const i of suits) {
					const cards = player.getCards("h", function (card) {
						return get.suit(card, player) == i;
					});
					if (-eff / 2 - get.value(cards, player) > 0) {
						return true;
					}
				}
				return false;
			},
			async content(event, trigger, player) {
				await player.showHandcards(get.translation(player) + "发动了【清靓】");
				const suits = [],
					banned = [],
					hs = player.getCards("h");
				for (const i of hs) {
					const suit = get.suit(i, player);
					suits.add(suit);
					if (!lib.filter.cardDiscardable(i, player, "old_qingliang")) {
						banned.add(suit);
					}
				}
				let result;
				if (suits.length > banned.length) {
					result = await player
						.chooseControl({
							choiceList: ["和" + get.translation(trigger.player) + "各摸一张牌", "弃置一种花色的所有手牌，令" + get.translation(trigger.card) + "对自己无效"],
							ai() {
								const player = _status.event.player,
									event = _status.event.getTrigger();
								if (get.attitude(player, event.player) > 0 || event.player.hasSkillTag("nogain")) {
									return 0;
								}
								return 1;
							},
						})
						.forResult();
					suits.removeArray(banned);
					suits.sort();
				} else {
					result = { index: 0 };
				}
				if (result.index == 0) {
					await game.asyncDraw([player, trigger.player]);
				} else {
					if (suits.length == 1) {
						result = { control: suits[0] };
					} else {
						result = await player
							.chooseControl({
								controls: suits,
								prompt: "清靓：选择弃置一种花色的所有牌",
								ai() {
									const player = _status.event.player,
										list = _status.event.controls.slice(0);
									const gett = function (suit) {
										const cards = player.getCards("h", function (card) {
											return get.suit(card, player) == suit;
										});
										return get.value(cards);
									};
									return list.sort(function (b, a) {
										return gett(b) - gett(a);
									})[0];
								},
							})
							.forResult();
					}
					const cards = player.getCards("h", function (card) {
						return get.suit(card) == result.control;
					});
					if (cards.length) {
						await player.modedDiscard(cards);
					}
					trigger.targets.remove(player);
					trigger.getParent().triggeredTargets2.remove(player);
					trigger.untrigger();
				}
			},
		},
		//徐荣
		old_xionghuo: {
			audio: "xinfu_xionghuo",
			enable: "phaseUse",
			filter(event, player) {
				return player.countMark("old_xionghuo") > 0;
			},
			filterTarget(card, player, target) {
				return player != target && !target.hasMark("old_xionghuo");
			},
			content() {
				player.removeMark("old_xionghuo", 1);
				target.addMark("old_xionghuo", 1);
			},
			ai: {
				order: 11,
				result: {
					target(player, target) {
						if (
							(player.countMark("old_xionghuo") >= 2 ||
								!game.hasPlayer(function (current) {
									return current != player && get.attitude(player, current) < 0 && current.hasMark("old_xionghuo");
								})) &&
							player.countCards("h", function (card) {
								return (
									get.tag(card, "damage") &&
									player.canUse(card, target, null, true) &&
									player.getUseValue(card) > 0 &&
									get.effect_use(target, card, player) > 0 &&
									target.hasSkillTag("filterDamage", null, {
										player: player,
										card: card,
									})
								);
							})
						)
							return 3 / Math.max(1, target.hp);
						if (
							(!player.hasUnknown() &&
								game.countPlayer(function (current) {
									return get.attitude(player, current) < 0;
								}) <= 1) ||
							player.countMark("old_xionghuo") >= 2
						) {
							return -1;
						}
						return 0;
					},
				},
				effect: {
					player(card, player, target) {
						if (
							player != target &&
							get.tag(card, "damage") &&
							target &&
							target.hasMark("old_xionghuo") &&
							!target.hasSkillTag("filterDamage", null, {
								player: player,
								card: card,
							})
						)
							return [1, 0, 1, -2];
					},
				},
				threaten: 1.6,
			},
			marktext: "戾",
			intro: {
				name: "暴戾",
				content: "mark",
			},
			group: ["old_xionghuo_init", "old_xionghuo_damage", "old_xionghuo_effect"],
			subSkill: {
				init: {
					audio: "xinfu_xionghuo",
					trigger: {
						global: "phaseBefore",
						player: "enterGame",
					},
					filter(event, player) {
						return event.name != "phase" || game.phaseNumber == 0;
					},
					forced: true,
					locked: false,
					content() {
						player.addMark("old_xionghuo", 3);
					},
				},
				damage: {
					audio: "xinfu_xionghuo",
					trigger: { source: "damageBegin1" },
					filter(event, player) {
						return event.player.countMark("old_xionghuo") > 0 && event.player != player;
					},
					forced: true,
					locked: false,
					logTarget: "player",
					content() {
						trigger.num++;
					},
				},
				effect: {
					audio: "xinfu_xionghuo",
					trigger: { global: "phaseUseBegin" },
					filter(event, player) {
						return event.player.countMark("old_xionghuo") > 0 && event.player != player;
					},
					line: false,
					forced: true,
					locked: false,
					logTarget: "player",
					content() {
						"step 0";
						trigger.player.removeMark("old_xionghuo", trigger.player.countMark("old_xionghuo"));
						("step 1");
						var num = get.rand(0, 2);
						switch (num) {
							case 0: {
								player.line(trigger.player, "fire");
								trigger.player.damage("fire");
								trigger.player.addTempSkill("old_xionghuo_disable");
								trigger.player.markAuto("old_xionghuo_disable", [player]);
								break;
							}
							case 1: {
								player.line(trigger.player, "water");
								trigger.player.loseHp();
								trigger.player.addMark("old_xionghuo_low", 1, false);
								trigger.player.addTempSkill("old_xionghuo_low");
								break;
							}
							case 2: {
								player.line(trigger.player, "green");
								var card1 = trigger.player.getCards("h").randomGet();
								var card2 = trigger.player.getCards("e").randomGet();
								var list = [];
								if (card1) list.push(card1);
								if (card2) list.push(card2);
								if (list.length) player.gain(list, trigger.player, "giveAuto", "bySelf");
								break;
							}
						}
						("step 2");
						game.delay();
					},
				},
				disable: {
					mod: {
						playerEnabled(card, player, target) {
							if (card.name == "sha" && player.getStorage("old_xionghuo_disable").includes(target)) return false;
						},
					},
					charlotte: true,
					onremove: true,
					mark: true,
					marktext: "禁",
					intro: { content: "不能对$使用【杀】" },
				},
				low: {
					mod: {
						maxHandcard(player, num) {
							return num - player.countMark("old_xionghuo_low");
						},
					},
					charlotte: true,
					onremove: true,
					mark: true,
					marktext: "减",
					intro: { content: "手牌上限-#" },
				},
			},
		},
		old_shajue: {
			audio: "xinfu_shajue",
			trigger: { global: "dying" },
			filter(event, player) {
				return event.player != player;
			},
			forced: true,
			content() {
				player.addMark("old_xionghuo", 1);
				if (trigger.player.hp < 0 && get.itemtype(trigger.parent.cards) == "cards" && trigger.parent.cards.some(card => get.position(card, true) == "o")) {
					player.gain(
						trigger.parent.cards.filter(card => get.position(card, true) == "o"),
						"gain2"
					);
				}
			},
			ai: {
				combo: "old_xionghuo",
			},
		},
		//牵招
		old_olkuansai: {
			audio: "olkuansai",
			trigger: {
				global: "useCardToPlayered",
			},
			filter(event, player) {
				return event.isFirstTarget && event.targets.length > player.getHp();
			},
			direct: true,
			content() {
				"step 0";
				player
					.chooseTarget(get.prompt("old_olkuansai"), "令其中一个目标选择一项：1.交给你一张牌；2.令你回复1点体力。", (card, player, target) => {
						return _status.event.targets.includes(target);
					})
					.set("targets", trigger.targets)
					.set("ai", target => {
						var player = _status.event.player;
						var att = get.attitude(player, target);
						if (att > 0) return 1;
						return (1 - att) / Math.sqrt(1 + target.countCards("he"));
					});
				("step 1");
				if (result.bool) {
					var target = result.targets[0];
					event.target = target;
					player.logSkill("old_olkuansai", target);
					var position = "e";
					if (player != target) position += "h";
					var forced = player.isHealthy();
					var str = "请交给其一张牌" + (forced ? "" : "或点击“取消”令其回复1点体力") + "。";
					if (!target.countCards(position)) event._result = { bool: false };
					else
						target
							.chooseCard(get.translation(player) + "对你发动了【款塞】", str, position, forced)
							.set("ai", card => {
								if (_status.event.recover) return 0;
								var target = _status.event.player,
									player = _status.event.getParent().player;
								if (get.attitude(target, player) > 0) {
									return get.value(card, target) - get.value(card, player);
								}
								if (get.tag(card, "recover")) return -1;
								return 6.5 - get.value(card);
							})
							.set(
								"recover",
								(function () {
									if (forced) return false;
									var recoverEff = get.recoverEffect(player, target, target);
									var att = get.attitude(target, player);
									if (att < 0) {
										if (recoverEff >= 0) return true;
										if (
											target.hasCard(card => {
												return (get.value(card) < 6.5 && !get.tag(card, "recover")) || get.value(card) <= 0.05;
											}, position)
										)
											return false;
									} else {
										if (recoverEff > 0) return true;
										if (
											target.hasCard(card => {
												return get.value(card, target) < get.value(card, player);
											}, position)
										)
											return false;
									}
									return true;
								})()
							);
				} else {
					player.storage.counttrigger.old_olkuansai--;
					event.finish();
				}
				("step 2");
				if (result.bool) {
					target.give(result.cards, player);
				} else player.recover(target);
			},
		},
		// 谋董卓
		old_olguanbian: {
			audio: "olguanbian",
			trigger: {
				global: ["phaseBefore", "roundStart"],
				player: ["enterGame", "old_olxiongniAfter", "old_olfengshangAfter"],
			},
			filter(event, player, name) {
				if (name == "roundStart") return game.roundNumber == 2;
				return event.name != "phase" || game.phaseNumber == 0;
			},
			forced: true,
			async content(event, trigger, player) {
				if (event.triggername == "roundStart" || ["old_olxiongni", "old_olfengshang"].includes(trigger.name)) await player.removeSkills(event.name);
				else player.addMark(event.name, game.players.length + game.dead.length, false);
			},
			mod: {
				maxHandcard(player, num) {
					return num + player.countMark("old_olguanbian");
				},
				globalFrom(from, to, current) {
					return current + from.countMark("old_olguanbian");
				},
				globalTo(from, to, current) {
					return current + to.countMark("old_olguanbian");
				},
			},
			intro: {
				content: "<li>手牌上限+#<br><li>计算与其他角色的距离+#<br><li>其他角色计算与你的距离+#",
			},
		},
		old_olxiongni: {
			audio: "olxiongni",
			trigger: {
				player: "phaseUseBegin",
			},
			filter(event, player) {
				if (!game.hasPlayer(target => target != player)) return false;
				return player.countCards("he", card => _status.connectMode || lib.filter.cardDiscardable(card, player));
			},
			async cost(event, trigger, player) {
				const skillName = event.name.slice(0, -5);
				event.result = await player
					.chooseToDiscard(get.prompt2(skillName), "he")
					.set("ai", card => {
						const player = get.player();
						if (!game.hasPlayer(target => player != target && get.damageEffect(target, player, player) > 0)) return 0;
						if (get.suit(card, player) == "heart") return 8 - get.value(card);
						return 7.5 - get.value(card);
					})
					.set("logSkill", [skillName, get.info(skillName).logTarget(trigger, player)])
					.forResult();
			},
			popup: false,
			logTarget: (event, player) => game.filterPlayer(target => target != player).sortBySeat(),
			async content(event, trigger, player) {
				const suit = get.suit(event.cards[0]);
				for (const target of event.targets) {
					const { bool } = await target
						.chooseToDiscard(`弃置一张${get.translation(suit)}牌，否则${get.translation(player)}对你造成1点伤害`, "he", (card, player) => {
							return get.event().suit == get.suit(card);
						})
						.set("ai", card => {
							const player = get.player(),
								target = get.event().getParent().player;
							if (get.damageEffect(player, target, player) > 0) return 0;
							return 7.5 - get.value(card);
						})
						.set("suit", suit)
						.forResult();
					if (!bool) await target.damage();
				}
			},
		},
		old_olfengshang: {
			audio: "olfengshang",
			getCards() {
				const cards = [];
				game.checkGlobalHistory("cardMove", evt => {
					if (evt.name != "cardsDiscard" && (evt.name != "lose" || evt.position != ui.discardPile)) return;
					cards.addArray(evt.cards.filterInD("d"));
				});
				return cards;
			},
			enable: "phaseUse",
			trigger: {
				global: "dying",
			},
			filter(event, player) {
				const cards = event.name == "chooseToUse" ? event.old_olfengshang_cards || [] : get.info("old_olfengshang").getCards();
				if (!lib.suit.some(suit => cards.filter(card => get.suit(card) == suit).length > 1)) return false;
				return event.name != "chooseToUse" || !player.hasSkill("old_olfengshang_used", null, null, false);
			},
			onChooseToUse(event) {
				if (!game.online && !event.old_olfengshang_cards) {
					event.set("old_olfengshang_cards", get.info("old_olfengshang").getCards());
				}
			},
			async content(event, trigger, player) {
				if (!trigger) player.addTempSkill(event.name + "_used", "phaseUseAfter");
				if (_status.connectMode) game.broadcastAll(() => (_status.noclearcountdown = true));
				player.changeSkin({ characterName: "old_ol_sb_dongzhuo" }, "ol_sb_dongzhuo_shadow2");
				const given_map = {};
				event.given_map = given_map;
				const cards = !trigger ? event.getParent(2).old_olfengshang_cards : get.info(event.name).getCards();
				let result;
				while (Object.keys(given_map).length < 2 && cards.length) {
					if (cards.length > 1) {
						result = await player
							.chooseCardButton("封赏：请选择要分配的牌", cards, true)
							.set("filterButton", button => {
								const { link } = button,
									map = get.event().getParent().given_map;
								if (!Object.values(map).flat().length) return get.event().cards.filter(card => get.suit(card) == get.suit(link)).length > 1;
								return get.suit(link) == get.suit(Object.values(map).flat()[0]);
							})
							.set("ai", button => {
								return get.buttonValue(button);
							})
							.set("cards", cards)
							.forResult();
					} else if (cards.length === 1) result = { bool: true, links: cards.slice(0) };
					else return;
					if (!result.bool) return;
					const toGive = result.links;
					result = await player
						.chooseTarget("选择获得" + get.translation(toGive) + "的角色", true, (card, player, target) => {
							return !get.event().getParent().given_map[target.playerid];
						})
						.set("ai", target => {
							const att = get.attitude(get.player(), target);
							if (get.event().toEnemy) return Math.max(0.01, 100 - att);
							else if (att > 0) {
								if (player.getUseValue({ name: "jiu" }) && player != target) return 10;
								return Math.max(0.1, att / Math.sqrt(1 + target.countCards("h") + (get.event().getParent().given_map[target.playerid] || 0)));
							} else return Math.max(0.01, (100 + att) / 200);
						})
						.set("toEnemy", get.value(toGive[0], player, "raw") < 0)
						.forResult();
					if (result.bool) {
						cards.removeArray(toGive);
						const id = result.targets[0].playerid;
						if (!given_map[id]) given_map[id] = [];
						given_map[id].addArray(toGive);
					}
				}
				if (_status.connectMode) {
					game.broadcastAll(() => {
						delete _status.noclearcountdown;
						game.stopCountChoose();
					});
				}
				const gain_list = [];
				for (const i in given_map) {
					const source = (_status.connectMode ? lib.playerOL : game.playerMap)[i];
					player.line(source, "green");
					game.log(source, "获得了", given_map[i]);
					gain_list.push([source, given_map[i]]);
				}
				await game
					.loseAsync({
						gain_list,
						giver: player,
						animate: "gain2",
					})
					.setContent("gaincardMultiple");
				await game.delayx();
				if (!player.hasHistory("gain", evt => evt.getParent(2) == event) && player.hasUseTarget({ name: "jiu", isCard: true }, true, false)) {
					await player.chooseUseTarget({ name: "jiu", isCard: true }, true, false);
				}
			},
			ai: {
				order: 7,
				result: {
					player: 1,
				},
			},
			subSkill: {
				used: { charlotte: true },
			},
		},
		old_olzhibin: {
			audio: "olzhibin",
			getNum(player) {
				let num = 0;
				game.countPlayer2(current => {
					if (current != player && current.group == "qun") {
						num += current.getAllHistory("useCard", evt => get.color(evt.card) == "black").length;
					}
				});
				return num;
			},
			trigger: {
				player: "phaseZhunbeiBegin",
			},
			filter(event, player) {
				const num = get.info("old_olzhibin").getNum(player);
				return get.info("old_olzhibin").filterx(player, num) || get.info("old_olzhibin").filtery(player, num) || get.info("old_olzhibin").filterz(player, num);
			},
			filterx(player, num) {
				return num >= 3 && !game.getAllGlobalHistory("everything", evt => evt.name == "gainMaxHp" && evt.player == player && evt.getParent().name == "old_olzhibin").length;
			},
			filtery(player, num) {
				return num >= 6 && !player.hasSkill("dcfencheng", null, null, false) && !game.getAllGlobalHistory("everything", evt => evt.name == "changeSkills" && evt.player == player && evt.getParent().name == "old_olzhibin" && evt.addSkill.includes("dcfencheng")).length;
			},
			filterz(player, num) {
				return num >= 9 && !player.hasSkill("benghuai", null, null, false) && !game.getAllGlobalHistory("everything", evt => evt.name == "changeSkills" && evt.player == player && evt.getParent().name == "old_olzhibin" && evt.addSkill.includes("benghuai")).length;
			},
			zhuSkill: true,
			forced: true,
			async content(event, trigger, player) {
				player.changeSkin({ characterName: "old_ol_sb_dongzhuo" }, "ol_sb_dongzhuo_shadow1");
				const skillName = event.name,
					num = get.info(skillName).getNum(player);
				if (get.info(skillName).filterx(player, num)) {
					await player.gainMaxHp();
					await player.recover();
				}
				if (get.info(skillName).filtery(player, num)) await player.addSkills("dcfencheng");
				if (get.info(skillName).filterz(player, num)) await player.addSkills("benghuai");
			},
			derivation: ["dcfencheng", "benghuai"],
		},
		//OL南华老仙
		old_olhedao: {
			audio: "olhedao",
			trigger: {
				global: "phaseBefore",
				player: ["enterGame", "dying"],
			},
			filter(event, player) {
				if (event.name === "dying") return game.getAllGlobalHistory("everything", evt => evt.name === "dying" && evt.player === player).indexOf(event) === 0;
				return event.name !== "phase" || game.phaseNumber === 0;
			},
			forced: true,
			content() {
				player.addMark(event.name, 1 + (trigger.name !== "dying"), false);
			},
			intro: { content: "至多拥有#册“天书”" },
			//时机
			tianshuTrigger: [
				//用牌相关
				{
					name: "当你使用牌后",
					effect: {
						trigger: { player: "useCardAfter" },
					},
				},
				{
					name: "当你使用或打出【闪】时",
					effect: {
						trigger: { player: ["useCard", "respond"] },
						filter(event, player) {
							return event.card.name === "shan";
						},
					},
				},
				{
					name: "当你成为【杀】的目标时",
					effect: {
						trigger: { target: "useCardToTarget" },
						filter(event, player) {
							return event.card.name === "sha";
						},
					},
				},
				{
					name: "当你成为普通锦囊牌的目标后",
					effect: {
						trigger: { target: "useCardToTargeted" },
						filter(event, player) {
							return get.type(event.card) === "trick";
						},
					},
				},
				{
					name: "其他角色对你使用牌后",
					effect: {
						trigger: { global: "useCardAfter" },
						filter(event, player) {
							return event.player !== player && event.targets?.includes(player);
						},
					},
				},
				{
					name: "一名角色使用【南蛮入侵】或【万箭齐发】后",
					effect: {
						trigger: { global: "useCardAfter" },
						filter(event, player) {
							return ["nanman", "wanjian"].includes(event.card?.name);
						},
					},
				},
				{
					name: "当你使用牌被抵消后",
					effect: {
						trigger: { player: ["eventNeutralized", "shaMiss"] },
						filter(event, player) {
							return event.type === "card";
						},
					},
				},
				//失去牌相关
				{
					name: "当你失去手牌后",
					effect: {
						trigger: {
							player: "loseAfter",
							global: ["equipAfter", "addJudgeAfter", "gainAfter", "loseAsyncAfter", "addToExpansionAfter"],
						},
						filter(event, player) {
							return event.getl?.(player)?.hs?.length;
						},
					},
				},
				{
					name: "当你失去装备牌后",
					effect: {
						trigger: {
							player: "loseAfter",
							global: ["equipAfter", "addJudgeAfter", "gainAfter", "loseAsyncAfter", "addToExpansionAfter"],
						},
						filter(event, player) {
							return event.getl?.(player)?.cards2?.some(i => get.type(i, null, player) === "equip");
						},
					},
				},
				{
					name: "当你于回合外失去红色牌后",
					effect: {
						trigger: {
							player: "loseAfter",
							global: ["equipAfter", "addJudgeAfter", "gainAfter", "loseAsyncAfter", "addToExpansionAfter"],
						},
						filter(event, player) {
							return _status.currentPhase !== player && event.getl?.(player)?.cards2?.some(i => get.color(i, player) === "red");
						},
					},
				},
				{
					name: "一名角色失去最后的手牌后",
					effect: {
						trigger: {
							global: ["loseAfter", "equipAfter", "addJudgeAfter", "gainAfter", "loseAsyncAfter", "addToExpansionAfter"],
						},
						filter(event, player) {
							return game.hasPlayer(target => !target.countCards("h") && event.getl?.(target)?.hs?.length);
						},
					},
				},
				//判定相关
				{
					name: "当一张判定牌生效前",
					effect: {
						trigger: { global: "judge" },
					},
				},
				{
					name: "当一张判定牌生效后",
					effect: {
						trigger: { global: "judgeAfter" },
					},
				},
				//阶段相关
				{
					name: "每轮开始时",
					effect: {
						trigger: { global: "roundStart" },
					},
				},
				{
					name: "准备阶段",
					effect: {
						trigger: { player: "phaseZhunbeiBegin" },
					},
				},
				{
					name: "摸牌阶段开始时",
					effect: {
						trigger: { player: "phaseDrawBegin" },
					},
				},
				{
					name: "出牌阶段开始时",
					effect: {
						trigger: { player: "phaseUseBegin" },
					},
				},
				{
					name: "弃牌阶段开始时",
					effect: {
						trigger: { player: "phaseDiscardBegin" },
					},
				},
				{
					name: "结束阶段",
					effect: {
						trigger: { player: "phaseJieshuBegin" },
					},
				},
				//伤害相关
				{
					name: "当你造成伤害后",
					effect: {
						trigger: { source: "damageSource" },
					},
				},
				{
					name: "当你受到伤害后",
					effect: {
						trigger: { player: "damageEnd" },
					},
				},
				{
					name: "当你的体力值变化后",
					effect: {
						trigger: { player: "changeHpEnd" },
						filter(event, player) {
							return event.num !== 0;
						},
					},
				},
				{
					name: "当你使用【杀】造成伤害后",
					effect: {
						trigger: { source: "damageSource" },
						filter(event, player) {
							return event.card?.name === "sha";
						},
					},
				},
				{
					name: "一名角色受到【杀】造成的伤害后",
					effect: {
						trigger: { global: "damageEnd" },
						filter(event, player) {
							return event.card?.name === "sha";
						},
					},
				},
				{
					name: "一名角色造成伤害时",
					effect: {
						trigger: { global: "damageBegin3" },
						filter(event, player) {
							return event.source?.isIn();
						},
					},
				},
				{
					name: "一名角色受到伤害时",
					effect: {
						trigger: { global: "damageBegin4" },
					},
				},
				{
					name: "一名角色受到属性伤害后",
					effect: {
						trigger: { global: "damageEnd" },
						filter(event, player) {
							return event.hasNature();
						},
					},
				},
				//其他
				{
					name: "一名角色进入濒死状态时",
					effect: {
						trigger: { global: "dying" },
					},
				},
				{
					name: "其他角色死亡后",
					effect: {
						trigger: { global: "dieAfter" },
						filter(event, player) {
							return event.player !== player;
						},
					},
				},
				{
					name: "一名角色进入连环状态后",
					effect: {
						trigger: { global: "linkAfter" },
						filter(event, player) {
							return event.player.isLinked();
						},
					},
				},
			],
			//执行
			tianshuContent: [
				{
					name: "你可以摸一张牌",
					effect: {
						content() {
							lib.skill.old_olhedao.tianshuClear(event.name, player);
							player.draw();
						},
					},
				},
				{
					name: "你可以弃置一名角色区域内的一张牌",
					effect: {
						filter(event, player) {
							return game.hasPlayer(target => target.countCards("hej"));
						},
						async cost(event, trigger, player) {
							event.result = await player
								.chooseTarget(get.prompt2(event.skill), (card, player, target) => {
									return target.countCards("hej");
								})
								.set("ai", target => {
									const player = get.player();
									return get.effect(target, { name: "guohe" }, player, player);
								})
								.forResult();
						},
						content() {
							lib.skill.old_olhedao.tianshuClear(event.name, player);
							player.discardPlayerCard(event.targets[0], "hej", true);
						},
					},
				},
				{
					name: "你可以观看牌堆顶三张牌，然后将这些牌以任意顺序置于牌堆顶或牌堆底",
					effect: {
						content() {
							lib.skill.old_olhedao.tianshuClear(event.name, player);
							player.chooseToGuanxing(3);
						},
					},
				},
				{
					name: "你可以弃置任意张牌并摸等量张牌",
					effect: {
						filter(event, player) {
							return player.hasCard(card => {
								if (get.position(card) === "h" && _status.connectMode) {
									return true;
								}
								return lib.filter.cardDiscardable(card, player);
							}, "he");
						},
						async cost(event, trigger, player) {
							const name = event.skill;
							event.result = await player.chooseToDiscard(get.prompt2(name), "he", [1, Infinity], "chooseonly").set("ai", lib.skill.zhiheng.check).set("logSkill", name).forResult();
						},
						popup: false,
						async content(event, trigger, player) {
							lib.skill.old_olhedao.tianshuClear(event.name, player);
							await player.discard(event.cards);
							await player.draw(event.cards.length);
						},
					},
				},
				{
					name: "你可以获得造成伤害的牌",
					filter: item => item.includes("伤害"),
					effect: {
						filter(event, player) {
							return get.itemtype(event.cards) === "cards" && event.cards.someInD();
						},
						prompt2(event, player) {
							return "获得" + get.translation(event.cards.filterInD());
						},
						content() {
							lib.skill.old_olhedao.tianshuClear(event.name, player);
							player.gain(trigger.cards.filterInD(), "gain2");
						},
					},
				},
				{
					name: "你可以视为使用一张无距离和次数限制的【杀】",
					effect: {
						filter(event, player) {
							const card = new lib.element.VCard({ name: "sha" });
							return player.hasUseTarget(card, false);
						},
						direct: true,
						async content(event, trigger, player) {
							const card = new lib.element.VCard({ name: "sha" });
							event.result = await player
								.chooseUseTarget(get.prompt2(event.name), card, false, "nodistance")
								.set("oncard", () => {
									const event = _status.event.getParent(2);
									lib.skill.old_olhedao.tianshuClear(event.name, event.player);
								})
								.set("logSkill", event.name)
								.forResult();
						},
					},
				},
				{
					name: "你可以获得一名角色区域内的一张牌",
					effect: {
						filter(event, player) {
							return game.hasPlayer(target => target.countCards("hej"));
						},
						async cost(event, trigger, player) {
							event.result = await player
								.chooseTarget(get.prompt2(event.skill), (card, player, target) => {
									return target.countCards("hej");
								})
								.set("ai", target => {
									const player = get.player();
									return get.effect(target, { name: "shunshou" }, player, player);
								})
								.forResult();
						},
						content() {
							lib.skill.old_olhedao.tianshuClear(event.name, player);
							player.gainPlayerCard(event.targets[0], "hej", true);
						},
					},
				},
				{
					name: "你可以回复1点体力",
					effect: {
						filter(event, player) {
							return player.isDamaged();
						},
						check(event, player) {
							return get.recoverEffect(player, player, player) > 0;
						},
						content() {
							lib.skill.old_olhedao.tianshuClear(event.name, player);
							player.recover();
						},
					},
				},
				{
					name: "你可以摸四张牌，然后弃置一张牌",
					effect: {
						async content(event, trigger, player) {
							lib.skill.old_olhedao.tianshuClear(event.name, player);
							await player.draw(4);
							await player.chooseToDiscard("he", true);
						},
					},
				},
				{
					name: "你可以将手牌摸至体力上限（至多摸五张）",
					effect: {
						filter(event, player) {
							return player.countCards("h") < player.maxHp;
						},
						content() {
							lib.skill.old_olhedao.tianshuClear(event.name, player);
							player.drawTo(Math.min(player.maxHp, player.countCards("h") + 5));
						},
					},
				},
				{
					name: "你可以令一名角色的非锁定技失效直到其下个回合开始",
					effect: {
						filter(event, player) {
							return game.hasPlayer(target => !target.hasSkill("fengyin"));
						},
						async cost(event, trigger, player) {
							event.result = await player
								.chooseTarget(get.prompt2(event.skill), (card, player, target) => {
									return !target.hasSkill("fengyin");
								})
								.set("ai", target => {
									const player = get.player();
									return (
										-get.sgn(get.attitude(player, target)) *
										(target.getSkills(null, false, false).filter(skill => {
											return !get.is.locked(skill);
										}).length +
											1) *
										(target === _status.currentPhase ? 10 : 1)
									);
								})
								.forResult();
						},
						content() {
							const target = event.targets[0];
							lib.skill.old_olhedao.tianshuClear(event.name, player);
							target.addTempSkill("fengyin", { player: "phaseBegin" });
						},
					},
				},
				{
					name: "你可以令一名角色摸两张牌并将武将牌翻面",
					effect: {
						async cost(event, trigger, player) {
							event.result = await player
								.chooseTarget(get.prompt2(event.skill))
								.set("ai", target => {
									const player = get.player(),
										draw = 2;
									if (target.hasSkillTag("noturn")) return 0;
									const att = get.attitude(player, target),
										current = _status.currentPhase;
									const dis = current ? get.distance(current, target, "absolute") : 1;
									if (att == 0) return target.hasJudge("lebu") ? Math.random() / 3 : Math.sqrt(get.threaten(target)) / 5 + Math.random() / 2;
									if (att > 0) {
										if (target.isTurnedOver()) return att + draw;
										if (current && target.getSeatNum() > current.getSeatNum()) return att + draw / 3;
										return (10 * Math.sqrt(Math.max(0.01, get.threaten(target)))) / (3.5 - draw) + dis / (2 * game.countPlayer());
									} else {
										if (target.isTurnedOver()) return att - draw;
										if (current && target.getSeatNum() <= current.getSeatNum()) return -att + draw / 3;
										return (4.25 - draw) * 10 * Math.sqrt(Math.max(0.01, get.threaten(target))) + (2 * game.countPlayer()) / dis;
									}
								})
								.forResult();
						},
						content() {
							const target = event.targets[0];
							lib.skill.old_olhedao.tianshuClear(event.name, player);
							target.draw(2);
							target.turnOver();
						},
					},
				},
				{
					name: "你可以令此牌对你无效",
					filter: item => item.includes("你成为") && (item.includes("的目标时") || item.includes("的目标后")),
					effect: {
						prompt2(event, player) {
							return "令" + get.translation(event.card) + "对你无效";
						},
						check(event, player) {
							return get.effect(player, event.card, event.player, player) < 0;
						},
						content() {
							lib.skill.old_olhedao.tianshuClear(event.name, player);
							trigger.getParent().excluded.add(player);
							game.log(trigger.card, "对", player, "无效");
						},
					},
				},
				{
					name: "你可以令一名其他角色判定，若判定结果为黑桃，则其受到2点雷属性伤害",
					effect: {
						filter(event, player) {
							return game.hasPlayer(target => target !== player);
						},
						async cost(event, trigger, player) {
							event.result = await player
								.chooseTarget(get.prompt2(event.skill), lib.filter.notMe)
								.set("ai", target => {
									const player = get.player();
									if (target.hasSkill("hongyan")) return 0;
									return get.damageEffect(target, player, player, "thunder");
								})
								.forResult();
						},
						async content(event, trigger, player) {
							const target = event.targets[0];
							lib.skill.old_olhedao.tianshuClear(event.name, player);
							const result = await target
								.judge(card => {
									return get.suit(card) === "spade" ? -4 : 0;
								})
								.set("judge2", result => (result.bool === false ? true : false))
								.forResult();
							if (result.bool === false) await target.damage(2, "thunder");
						},
					},
				},
				{
					toIndex: 2,
					name: "你可以打出一张手牌替换此判定牌",
					filter: item => item.includes("判定牌生效前"),
					effect: {
						filter(event, player) {
							return player.countCards("hs");
						},
						async cost(event, trigger, player) {
							event.result = await player
								.chooseCard(`${get.translation(trigger.player)}的${trigger.judgestr || ""}判定为${get.translation(trigger.player.judging[0])}，${get.prompt(event.skill)}`, "hs", card => {
									const player = get.player();
									const mod2 = game.checkMod(card, player, "unchanged", "cardEnabled2", player);
									if (mod2 != "unchanged") {
										return mod2;
									}
									const mod = game.checkMod(card, player, "unchanged", "cardRespondable", player);
									if (mod != "unchanged") {
										return mod;
									}
									return true;
								})
								.set("ai", card => {
									const trigger = get.event().getTrigger();
									const { player, judging } = get.event();
									const result = trigger.judge(card) - trigger.judge(judging);
									const attitude = get.attitude(player, trigger.player);
									if (attitude == 0 || result == 0) {
										return 0;
									}
									if (attitude > 0) {
										return result - get.value(card) / 2;
									} else {
										return -result - get.value(card) / 2;
									}
								})
								.set("judging", trigger.player.judging[0])
								.forResult();
						},
						popup: false,
						async content(event, trigger, player) {
							lib.skill.olhedao.tianshuClear(event.name, player);
							const { cards } = await player.respond(event.cards, event.name, "highlight", "noOrdering");
							if (cards?.length) {
								if (trigger.player.judging[0].clone) {
									trigger.player.judging[0].clone.classList.remove("thrownhighlight");
									game.broadcast(card => {
										if (card.clone) {
											card.clone.classList.remove("thrownhighlight");
										}
									}, trigger.player.judging[0]);
									game.addVideo("deletenode", player, get.cardsInfo([trigger.player.judging[0].clone]));
								}
								player.$gain2(trigger.player.judging);
								await player.gain(trigger.player.judging);
								trigger.player.judging[0] = cards[0];
								trigger.orderingCards.addArray(cards);
								game.log(trigger.player, "的判定牌改为", cards);
								await game.delay(2);
							}
						},
						ai: {
							rejudge: true,
							tag: { rejudge: 1 },
						},
					},
				},
				{
					name: "你可以获得此判定牌",
					filter: item => item.includes("判定牌生效后"),
					effect: {
						filter(event, player) {
							return get.position(event.result.card, true) === "o";
						},
						check(event, player) {
							return get.value(event.result.card) > 0;
						},
						content() {
							lib.skill.old_olhedao.tianshuClear(event.name, player);
							player.gain(trigger.result.card, "gain2");
						},
					},
				},
				{
					name: "若你不是体力上限最高的角色，则你可以增加1点体力上限",
					filter: item => item.includes("判定牌生效后"),
					effect: {
						filter(event, player) {
							return game.hasPlayer(t => t.maxHp > player.maxHp);
						},
						content() {
							lib.skill.old_olhedao.tianshuClear(event.name, player);
							player.gainMaxHp();
						},
					},
				},
				{
					name: "你可以与一名已受伤角色拼点，若你赢，你获得其两张牌",
					effect: {
						filter(event, player) {
							return game.hasPlayer(target => target.isDamaged() && player.canCompare(target));
						},
						async cost(event, trigger, player) {
							event.result = await player
								.chooseTarget(get.prompt2(event.skill), (card, player, target) => {
									return target.isDamaged() && player.canCompare(target);
								})
								.set("ai", target => {
									if (!get.event().goon) return 0;
									const player = get.player();
									return -get.attitude(player, target) * (1 + target.countCards("he"));
								})
								.set(
									"goon",
									player.hasCard(card => {
										const val = get.value(card);
										if (val < 0) return true;
										if (val <= 5) return card.number >= 12;
										if (val <= 6) return card.number >= 13;
										return false;
									}, "h")
								)
								.forResult();
						},
						async content(event, trigger, player) {
							const target = event.targets[0];
							lib.skill.old_olhedao.tianshuClear(event.name, player);
							const result = await player.chooseToCompare(target).forResult();
							if (result.bool) await player.gainPlayerCard(target, 2, "he", true);
						},
					},
				},
				{
					name: "你可以令至多两名角色各摸一张牌",
					effect: {
						async cost(event, trigger, player) {
							event.result = await player
								.chooseTarget(get.prompt2(event.skill), [1, 2])
								.set("ai", target => {
									const player = get.player();
									return get.effect(target, { name: "draw" }, player, player);
								})
								.forResult();
						},
						async content(event, trigger, player) {
							const { targets } = event;
							lib.skill.old_olhedao.tianshuClear(event.name, player);
							if (targets.length === 1) await targets[0].draw();
							else {
								await game.asyncDraw(targets);
								await game.delayx();
							}
						},
					},
				},
				{
					name: "你可以令一名角色的手牌上限+2直到其回合结束",
					effect: {
						async cost(event, trigger, player) {
							event.result = await player
								.chooseTarget(get.prompt2(event.skill))
								.set("ai", target => {
									const player = get.player();
									return get.effect(target, { name: "draw" }, player, player) * (1 + target.countCards("h"));
								})
								.forResult();
						},
						async content(event, trigger, player) {
							const target = event.targets[0];
							lib.skill.old_olhedao.tianshuClear(event.name, player);
							target.addTempSkill("old_olhedao_hand", { player: "phaseEnd" });
							target.addMark("old_olhedao_hand", 2, false);
						},
					},
				},
				{
					name: "你可以获得两张非基本牌",
					effect: {
						content() {
							lib.skill.old_olhedao.tianshuClear(event.name, player);
							let list = [];
							while (list.length < 2) {
								const card = get.cardPile(card => get.type(card) !== "basic" && !list.includes(card));
								if (card) list.push(card);
								else break;
							}
							if (list.length) player.gain(list, "gain2");
						},
					},
				},
				{
					name: "你可以获得两张锦囊牌",
					effect: {
						content() {
							lib.skill.old_olhedao.tianshuClear(event.name, player);
							let list = [];
							while (list.length < 2) {
								const card = get.cardPile(card => get.type2(card) === "trick" && !list.includes(card));
								if (card) list.push(card);
								else break;
							}
							if (list.length) player.gain(list, "gain2");
						},
					},
				},
				{
					name: "你可以摸三张牌并将武将牌翻面",
					effect: {
						content() {
							lib.skill.old_olhedao.tianshuClear(event.name, player);
							player.draw(3);
							player.turnOver();
						},
					},
				},
				{
					name: "你可令你对一名角色使用牌无距离和任何次数限制直到回合结束",
					effect: {
						filter(event, player) {
							return game.hasPlayer(target => !player.getStorage("old_olhedao_effect").includes(target));
						},
						async cost(event, trigger, player) {
							event.result = await player
								.chooseTarget(get.prompt2(event.skill), (card, player, target) => {
									return !player.getStorage("old_olhedao_effect").includes(target);
								})
								.set("ai", target => {
									const player = get.player();
									return 1145141919810 - get.attitude(player, target);
								})
								.forResult();
						},
						async content(event, trigger, player) {
							lib.skill.old_olhedao.tianshuClear(event.name, player);
							player.addTempSkill("old_olhedao_effect", { player: "phaseEnd" });
							player.markAuto("old_olhedao_effect", event.targets);
						},
					},
				},
				{
					name: "你可以弃置两张牌，令你与一名其他角色各回复1点体力",
					effect: {
						filter(event, player) {
							return (
								player.countCards("he", card => {
									if (get.position(card) === "h" && _status.connectMode) {
										return true;
									}
									return lib.filter.cardDiscardable(card, player);
								}) >= 2 && game.hasPlayer(target => target != player)
							);
						},
						async cost(event, trigger, player) {
							event.result = await player
								.chooseCardTarget({
									prompt: get.prompt2(event.skill),
									filterTarget: lib.filter.notMe,
									filterCard: lib.filter.cardDiscardable,
									selectCard: 2,
									position: "he",
									ai1(card) {
										return 7 - get.value(card);
									},
									ai2(target) {
										const player = get.player();
										return get.recoverEffect(target, player, player) + get.recoverEffect(player, player, player);
									},
								})
								.forResult();
						},
						async content(event, trigger, player) {
							const { targets, cards } = event,
								[target] = targets;
							lib.skill.old_olhedao.tianshuClear(event.name, player);
							await player.discard(cards);
							await player.recover();
							await target.recover();
						},
					},
				},
				{
					name: "你可令此伤害+1",
					filter: item => item.includes("伤害时"),
					effect: {
						logTarget: "player",
						check(event, player) {
							const target = event.player;
							return get.damageEffect(target, event.source, player) > 0 && !target.hasSkillTag("filterDamage", null, { player: event.source, card: event.card });
						},
						content() {
							lib.skill.old_olhedao.tianshuClear(event.name, player);
							trigger.num++;
							game.log(trigger.player, "受到的伤害", "#y+1");
						},
					},
				},
				{
					name: "你可以失去1点体力并摸三张牌",
					effect: {
						check(event, player) {
							return player.countCards("hs", card => player.canSaveCard(card, player)) + player.getHp() - 1 > 0;
						},
						content() {
							lib.skill.old_olhedao.tianshuClear(event.name, player);
							player.loseHp();
							player.draw(3);
						},
					},
				},
				{
					name: "你可以交换两名角色的手牌",
					effect: {
						filter(event, player) {
							return game.hasPlayer(target => target.countCards("h"));
						},
						async cost(event, trigger, player) {
							event.result = await player
								.chooseTarget(
									get.prompt2(event.skill),
									(card, player, target) => {
										if (!ui.selected.targets.length) return true;
										return target.countCards("h") + ui.selected.targets[0].countCards("h") > 0;
									},
									2
								)
								.set("complexTarget", true)
								.set("ai", target => {
									const player = get.player();
									return get.effect(target, "dimeng", player, player);
								})
								.forResult();
						},
						content() {
							const { targets } = event;
							lib.skill.old_olhedao.tianshuClear(event.name, player);
							targets[0].swapHandcards(targets[1]);
						},
					},
				},
				{
					name: "你可以交换两名角色装备区的牌",
					effect: {
						filter(event, player) {
							return game.hasPlayer(target => target.countVCards("e"));
						},
						async cost(event, trigger, player) {
							event.result = await player
								.chooseTarget(
									get.prompt2(event.skill),
									(card, player, target) => {
										if (!ui.selected.targets.length) return true;
										return target.countVCards("e") + ui.selected.targets[0].countVCards("e") > 0;
									},
									2
								)
								.set("complexTarget", true)
								.set("ai", target => {
									const player = get.player();
									return get.effect(target, "ganlu", player, player);
								})
								.forResult();
						},
						content() {
							const { targets } = event;
							lib.skill.old_olhedao.tianshuClear(event.name, player);
							targets[0].swapEquip(targets[1]);
						},
					},
				},
				{
					name: "你可以防止此伤害，令伤害来源摸三张牌",
					filter: item => item.includes("伤害时"),
					effect: {
						filter(event, player) {
							return event.source?.isIn();
						},
						check(event, player) {
							if (get.attitude(player, event.player) > 0) return true;
							if (get.effect(event.source, { name: "draw" }, player, player) * 3 + event.num * get.damageEffect(player, event.source, player, event.nature) > 0) return true;
							return event.source.hasSkillTag("nogain");
						},
						logTarget: "source",
						content() {
							lib.skill.old_olhedao.tianshuClear(event.name, player);
							trigger.cancel();
							trigger.source.draw(3);
						},
					},
				},
			],
			//清理
			tianshuClear(skill, player, num = 1) {
				if (num > 0 && get.info(skill)?.nopop) {
					game.broadcastAll(
						(player, skill) => {
							delete lib.skill[skill].nopop;
							lib.skill[skill].markimage = "image/card/tianshu1.png";
							if (player.marks[skill]) player.marks[skill].setBackgroundImage(lib.skill[skill].markimage);
						},
						player,
						skill
					);
					player.update();
				}
				player.storage[skill][0] -= num;
				player[player.storage[skill][0] <= 0 ? "removeSkill" : "markSkill"](skill);
			},
			subSkill: {
				hand: {
					charlotte: true,
					onremove: true,
					markimage: "image/card/handcard.png",
					mod: { maxHandcard: (player, num) => num + player.countMark("old_olhedao_hand") },
					intro: { content: "手牌上限+#" },
				},
				effect: {
					charlotte: true,
					onremove: true,
					mod: {
						targetInRange(card, player, target) {
							if (player.getStorage("old_olhedao_effect").includes(target)) return true;
						},
						cardUsableTarget(card, player, target) {
							if (player.getStorage("old_olhedao_effect").includes(target)) return Infinity;
						},
					},
					intro: {
						name: "天书",
						content: "对$使用牌无距离和任何次数限制",
					},
					trigger: { player: "useCard1" },
					filter(event, player) {
						return event.addCount !== false && Array.isArray(event.targets) && event.targets.some(target => player.getStorage("olhedao_effect").includes(target));
					},
					forced: true,
					popup: false,
					silent: true,
					firstDo: true,
					async content(event, trigger, player) {
						trigger.addCount = false;
						player.getStat("card")[trigger.card.name]--;
					},
				},
			},
			ai: {
				threaten: 4,
				combo: "old_olqingshu",
			},
		},
		old_olqingshu: {
			audio: "olqingshu",
			trigger: {
				global: "phaseBefore",
				player: ["enterGame", "phaseZhunbeiBegin", "phaseJieshuBegin"],
			},
			filter(event, player) {
				return event.name !== "phase" || game.phaseNumber === 0;
			},
			forced: true,
			async content(event, trigger, player) {
				const FromItems = lib.skill.old_olhedao.tianshuTrigger.slice();
				const froms = (
					await player
						.chooseButton(["青书：请选择“天书”时机", [FromItems.randomGets(3).map(item => [item, item.name]), "textbutton"]], true)
						.set("ai", () => 1 + Math.random())
						.forResult()
				).links;
				if (!froms?.length) return;
				const [from] = froms;
				const ToItems = lib.skill.old_olhedao.tianshuContent.filter(item => {
					return !item.filter || item.filter(from.name);
				});
				const tos = (
					await player
						.chooseButton(['###青书：请选择“天书”效果###<div class="text center">' + from.name + "</div>", [ToItems.randomGets(3).map(item => [item, item.name]), "textbutton"]], true)
						.set("ai", () => 1 + Math.random())
						.forResult()
				).links;
				if (!tos?.length) return;
				const [to] = tos;
				let skill;
				while (true) {
					skill = "old_olhedao_tianshu_" + Math.random().toString(36).slice(-8);
					if (!lib.skill[skill]) break;
				}
				game.broadcastAll(
					(skill, from, to) => {
						const { filter: filterFrom, ...otherFrom } = from.effect;
						const { filter: filterTo, ...otherTo } = to.effect;
						lib.skill[skill] = {
							nopop: true,
							old_olhedao: true,
							charlotte: true,
							init(player, skill) {
								player.storage[skill] ??= [0, []];
							},
							onremove: true,
							filter(...args) {
								return (filterFrom ? filterFrom(...args) : true) && (filterTo ? filterTo(...args) : true);
							},
							markimage: "image/card/tianshu2.png",
							intro: {
								markcount: (storage = [0]) => storage[0],
								content(storage = [0, []], player, book) {
									const [count, targets] = storage;
									if (!book) {
										return "查无此书";
									}
									return [
										`此书还可使用${count}次`,
										(() => {
											if (!get.info(book)?.nopop || [player, ...targets].some(i => i.isUnderControl(true))) {
												return lib.translate[`${book}_info`];
											}
											return "此书仍是个秘密";
										})(),
									]
										.map(str => `<li>${str}`)
										.join("<br>");
								},
							},
							...otherFrom,
							...otherTo,
						};
						lib.translate[skill] = "天书";
						lib.translate[`${skill}_info`] = `${from.name}，${to.name}。`;
						game.finishSkill(skill);
					},
					skill,
					from,
					to
				);
				player.addSkill(skill);
				lib.skill.old_olhedao.tianshuClear(skill, player, -3);
				const skills = player.getSkills(null, false, false).filter(skill => get.info(skill)?.old_olhedao);
				const num = skills.length - Math.max(1, player.countMark("old_olhedao"));
				if (num > 0) {
					const result = await player
						.chooseButton(["青书：选择失去" + get.cnNumber(num) + "册多余的“天书”", [skills.map(item => [item, "（剩余" + player.storage[item][0] + "次）" + lib.translate[item + "_info"]]), "textbutton"]], true, num)
						.set("ai", () => 1 + Math.random())
						.forResult();
					if (result?.bool && result.links?.length) player.removeSkill(result.links);
				}
			},
			ai: {
				threaten: 4,
				combo: "old_olhedao",
			},
		},
		old_olshoushu: {
			audio: "olshoushu",
			enable: "phaseUse",
			filter(event, player) {
				return (
					player.getSkills(null, false, false).some(skill => {
						return get.info(skill)?.old_olhedao && get.info(skill).nopop;
					}) && game.hasPlayer(target => target !== player)
				);
			},
			usable: 1,
			filterTarget: lib.filter.notMe,
			async content(event, trigger, player) {
				const { target } = event;
				const skills = player.getSkills(null, false, false).filter(skill => {
					return get.info(skill)?.old_olhedao && get.info(skill).nopop;
				});
				if (!skills.length) return;
				const result =
					skills.length > 1
						? await player
								.chooseButton(["授术：请选择你要授予" + get.translation(target) + "的天书", [skills.map(item => [item, get.translation(item + "_info")]), "textbutton"]], true)
								.set("ai", () => 1 + Math.random())
								.forResult()
						: { bool: true, links: skills };
				if (result?.bool && result.links?.length) {
					const [skill] = result.links;
					player.removeSkill(skill);
					target.addSkill(skill);
					target.storage[skill][1].add(player);
					lib.skill.old_olhedao.tianshuClear(skill, target, -1);
				}
			},
			ai: {
				order: 1,
				result: { target: 1 },
				combo: "old_olhedao",
			},
		},
		//OL谋邓艾废案
		oldx_olsbjiewan: {
			audio: "olsbjiewan",
			enable: "phaseUse",
			usable: 1,
			content() {
				"step 0";
				player.loseMaxHp();
				var card = get.cardPile(function (card) {
					var type = get.type(card, false);
					if (type != "trick") return false;
					return get.tag(card, "damage") > 0;
				});
				if (card) player.gain(card, "gain2");
				("step 1");
				player
					.chooseCard("h", true, "解腕：请选择一张伤害类手牌，令此牌本回合造成伤害+1", function (card, player) {
						var type = get.type(card, false);
						if (type != "basic" && type != "trick") return false;
						return get.tag(card, "damage") > 0;
					})
					.set("ai", card => 6 - get.value(card));
				("step 2");
				if (result.bool) {
					player.addGaintag(result.cards, "oldx_olsbjiewan");
					player.addTempSkill("oldx_olsbjiewan_damage");
					player.addTempSkill("oldx_olsbjiewan_2");
				}
			},
			subSkill: {
				damage: {
					audio: "olsbjiewan",
					trigger: { player: "useCard" },
					forced: true,
					charlotte: true,
					filter(event, player) {
						return player.hasHistory("lose", evt => {
							if (evt.getParent() !== event) return false;
							return Object.values(evt.gaintag_map).some(tags => tags.includes("oldx_olsbjiewan"));
						});
					},
					content() {
						game.countPlayer(function (current) {
							current.addTempSkill("oldx_olsbjiewan_1");
						});
					},
				},
				1: {
					audio: "olsbjiewan",
					trigger: {
						player: "damageBegin4",
					},
					forced: true,
					charlotte: true,
					logTarget: "player",
					content() {
						trigger.num++;
						player.removeSkill("oldx_olsbjiewan_1");
					},
				},
				2: {
					trigger: {
						player: "useCardAfter",
					},
					forced: true,
					silent: true,
					popup: false,
					charlotte: true,
					filter(event, player) {
						return event.notLink();
					},
					content() {
						game.countPlayer(function (current) {
							current.removeSkill("oldx_olsbjiewan_1");
						});
					},
				},
			},
		},
		olsbpixian: {
			audio: "sbpixian",
			trigger: {
				player: "phaseUseEnd",
			},
			filter(event, player) {
				return !player.isMaxHp();
			},
			forced: true,
			content() {
				"step 0";
				var list = [];
				list.push("回复1点体力");
				list.push("增加1点体力上限");
				player.chooseControl(list, true).set("ai", function () {
					if (player.hp < player.maxHp) return "回复1点体力";
					return "增加一点体力上限";
				});
				("step 1");
				if (result.control == "回复1点体力") {
					player.recover();
				}
				("step 2");
				if (result.control == "增加1点体力上限") {
					player.gainMaxHp();
				}
			},
		},
		//OL谋邓艾
		old_olsbjigu: {
			audio: "olsbjigu",
			trigger: { global: ["cardsDiscardAfter", "phaseBegin"] },
			filter(event, player) {
				const num1 = player.maxHp,
					num2 = player.countExpansions("old_olsbjigu");
				if (event.name == "cardsDiscard") {
					if (num2 >= num1) {
						return false;
					}
					if (!event.cards.filterInD("d").some(card => get.suit(card) != "heart")) {
						return false;
					}
					const evtx = event.getParent();
					if (evtx.name !== "orderingDiscard") {
						return false;
					}
					const evt2 = evtx.relatedEvent || evtx.getParent();
					return evt2.name == "useCard" && evt2.player != event.getParent("phaseUse")?.player;
				}
				return event.player.maxHp == num1 && num2 && player.countCards("h");
			},
			locked: true,
			async cost(event, trigger, player) {
				if (trigger.name == "cardsDiscard") {
					event.result = {
						bool: true,
					};
				} else {
					const next = player.chooseToMove("积谷：是否交换“谷”和手牌？");
					next.set("list", [
						[get.translation(player) + "（你）的“谷”", player.getExpansions("old_olsbjigu")],
						["手牌区", player.getCards("h")],
					]);
					next.set("filterMove", (from, to) => {
						return typeof to != "number";
					});
					next.set("processAI", list => {
						let player = get.player(),
							cards = list[0][1].concat(list[1][1]).sort((a, b) => get.useful(a) - get.useful(b)),
							cards2 = cards.splice(0, player.getExpansions("old_olsbjigu").length);
						return [cards2, cards];
					});
					const { bool, moved } = await next.forResult();
					event.result = {
						bool: bool,
						cost_data: moved,
					};
				}
			},
			async content(event, trigger, player) {
				if (trigger.name == "cardsDiscard") {
					const cards = trigger.cards.filter(card => get.position(card, true) == "d" && get.suit(card) != "heart");
					const next = player.addToExpansion(cards, "gain2");
					next.gaintag.add(event.name);
					await next;
				} else {
					const { cost_data: moved } = event;
					const pushs = moved[0],
						gains = moved[1];
					pushs.removeArray(player.getExpansions(event.name));
					gains.removeArray(player.getCards("h"));
					if (!pushs.length || pushs.length != gains.length) {
						return;
					}
					const next = player.addToExpansion(pushs);
					next.gaintag.add(event.name);
					await next;
					await player.gain(gains, "draw");
				}
			},
			marktext: "谷",
			intro: {
				content: "expansion",
				markcount: "expansion",
			},
			onremove(player, skill) {
				const cards = player.getExpansions(skill);
				if (cards.length) {
					player.loseToDiscardpile(cards);
				}
			},
		},
		old_olsbjiewan: {
			audio: "olsbjiewan",
			trigger: { global: ["phaseZhunbeiBegin", "phaseJieshuBegin"] },
			filter(event, player) {
				const num1 = player.maxHp,
					num2 = player.countExpansions("old_olsbjigu");
				if (event.name == "phaseZhunbei") {
					if (!num1 && num2 < 1) {
						return false;
					}
					return player.countCards("hs", card => player.hasUseTarget(get.autoViewAs({ name: "shunshou" }, [card]), false, false));
				}
				return player.countCards("h") == num2 && !player.isMaxMaxHp(true);
			},
			async cost(event, trigger, player) {
				if (trigger.name == "phaseJieshu") {
					event.result = {
						bool: true,
					};
				} else {
					const next = player.chooseButton([
						"解腕：是否选择一项执行？",
						[
							[
								["lose", "减少1点体力上限"],
								["discard", "移去两张“谷”"],
							],
							"textbutton",
						],
					]);
					next.set("filterButton", button => {
						const { link } = button,
							player = get.player();
						return (link == "lose" && player.maxHp > 0) || (link == "discard" && player.countExpansions("old_olsbjigu") > 1);
					});
					next.set("ai", button => {
						const { link } = button,
							player = get.player();
						if (player.getUseValue({ name: "shunshou" } <= 0)) {
							return 0;
						}
						let num1 = player.maxHp,
							num2 = player.countExpansions("old_olsbjigu"),
							num3 = player.countCards("h");
						if (num3 == num2 - 1 && link == "discard") {
							return 3;
						}
						if (
							(num3 == num2 + 1 || player.maxHp > 3) &&
							!game.hasPlayer(current => {
								if (player == current) {
									return false;
								}
								return current.maxHp <= num1 - 1 && num1 - 1 < 3;
							}) &&
							link == "lose"
						) {
							return 2;
						}
						return 0;
					});
					const { bool, links } = await next.forResult();
					event.result = {
						bool: bool,
						cost_data: links,
					};
				}
			},
			async content(event, trigger, player) {
				if (trigger.name == "phaseJieshu") {
					await player.gainMaxHp();
				} else {
					const { cost_data: links } = event;
					if (links.includes("lose")) {
						await player.loseMaxHp();
					} else {
						const { links: cards } =
							player.countExpansions("old_olsbjigu") <= 2
								? player.getExpansions("old_olsbjigu")
								: await player
										.chooseButton([`解腕：移去两张“谷”`, player.getExpansions("old_olsbjigu")], 2, true)
										.set("ai", button => 6 - get.value(button.link))
										.forResult();
						if (cards?.length) {
							await player.loseToDiscardpile(cards);
						}
					}
					if (!player.countCards("hs", card => player.hasUseTarget(get.autoViewAs({ name: "shunshou" }, [card]), false, false))) {
						return;
					}
					const next = player.chooseToUse();
					next.set("openskilldialog", `###${get.prompt(event.name)}###将一张手牌当无距离限制的【顺手牵羊】使用`);
					next.set("norestore", true);
					next.set("_backupevent", `${event.name}_backup`);
					next.set("forced", true);
					next.set("custom", {
						add: {},
						replace: { window() {} },
					});
					next.set("targetRequired", true);
					next.set("complexSelect", true);
					next.set("filterTarget", function (card, player, target) {
						return lib.filter.targetEnabled.apply(this, arguments);
					});
					next.backup(`${event.name}_backup`);
					await next;
				}
			},
			subSkill: {
				backup: {
					audio: "olsbjiewan",
					filterCard(card) {
						return get.itemtype(card) == "card";
					},
					viewAs: { name: "shunshou" },
					position: "hs",
					ai1(card) {
						const player = get.player();
						if (player.hasSkill("old_olsbjigu") && get.suit(card) != "heart") {
							return 10;
						}
						return 6 - get.value(card);
					},
				},
			},
		},
		//OL界王异
		old_olzhenlie: {
			audio: "olzhenlie",
			inherit: "zhenlie",
			async content(event, trigger, player) {
				const target = trigger.player;
				if (get.attitude(player, target) < 0 && target.countDiscardableCards(player, "he")) player.addTempSkill("zhenlie_lose");
				await player.loseHp();
				player.removeSkill("zhenlie_lose");
				trigger.getParent().excluded.add(player);
				if (!player.isIn()) return;
				const goon = target.hasCard(card => {
					if (get.position(card) == "h") return true;
					return lib.filter.canBeGained(card, player, target);
				}, "he");
				if (goon || player.isDamaged()) {
					let result;
					if (goon && player.isDamaged())
						result = await player
							.chooseControl()
							.set("choiceList", ["获得" + get.translation(target) + "的一张牌", "发动一次【秘计】"])
							.set("ai", () => {
								const player = get.event().player,
									target = get.event().getTrigger().player;
								return get.effect(target, { name: "shunshou_copy2" }, player, player) > get.effect(player, { name: "draw" }, player, player) * player.getDamagedHp() ? 0 : 1;
							})
							.forResult();
					else result = { index: goon ? 0 : 1 };
					if (result.index == 0) {
						await player.gainPlayerCard(target, "he", true);
					} else {
						let next = game.createEvent("zhenlie_olmiji");
						next.player = player;
						next.setContent(lib.skill.olmiji.content);
						await next;
					}
				}
			},
			audioname: ["re_wangyi"],
			filter: function (event, player) {
				return event.player != player && event.card && (event.card.name == "sha" || get.type(event.card) == "trick");
			},
			logTarget: "player",
			check: function (event, player) {
				if (event.getParent().excluded.includes(player)) return false;
				if (get.attitude(player, event.player) > 0 || (player.hp < 2 && !get.is.damageCard(card))) return false;
				let evt = event.getParent(),
					directHit = (evt.nowuxie && get.type(event.card, "trick") === "trick") || (evt.directHit && evt.directHit.includes(player)) || (evt.customArgs && evt.customArgs.default && evt.customArgs.default.directHit2);
				if (get.tag(event.card, "respondSha")) {
					if (directHit || player.countCards("h", { name: "sha" }) === 0) return true;
				} else if (get.tag(event.card, "respondShan")) {
					if (directHit || player.countCards("h", { name: "shan" }) === 0) return true;
				} else if (get.is.damageCard(card)) {
					if (event.card.name === "huogong") return event.player.countCards("h") > 4 - player.hp - player.hujia;
					if (event.card.name === "shuiyanqijunx") return player.countCards("e") === 0;
					return true;
				} else if (player.hp > 2) {
					if (event.card.name === "shunshou" || (event.card.name === "zhujinqiyuan" && (event.card.yingbian || get.distance(event.player, player) < 0))) return true;
				}
				return false;
			},
			trigger: {
				target: "useCardToTargeted",
			},
			ai: {
				filterDamage: true,
				skillTagFilter: (player, tag, arg) => {
					return arg && arg.jiu == true;
				},
				effect: {
					target(card, player, target) {
						if (target.hp <= 0 && target.hasSkill("zhenlie_lose") && get.tag(card, "recover")) return [1, 1.2];
					},
				},
			},
		},
		//OL薛灵芸
		old_olsiqi: {
			audio: "olsiqi",
			trigger: { player: "damageEnd" },
			filter(event, player) {
				const cardPile = Array.from(ui.cardPile.childNodes).reverse();
				return cardPile[0] && get.color(cardPile[0]) === "red";
			},
			frequent: true,
			/*
			async cost(event, trigger, player) {
				const cardPile = Array.from(ui.cardPile.childNodes).reverse();
				const redCards = [];
				for (const card of cardPile) {
					if (get.color(card) == "red") {
						redCards.push(card);
						if (redCards.length >= 3) break;
					} else break;
				}
				const result = await player
					.chooseNumbers(get.prompt2("old_olsiqi"), [{ prompt: "请选择你要亮出的牌数", min: 1, max: redCards.length }])
					.set("processAI", () => {
						return [get.event().maxNum];
					})
					.set("maxNum", redCards.length);
					.forResult();
				if (result.bool) {
					const number = result.numbers[0];
					event.result = {
						bool: result.bool,
						cost_data: number,
					};
				}
			},
			*/
			async content(event, trigger, player) {
				let cards = [];
				const cardPile = Array.from(ui.cardPile.childNodes).reverse();
				for (const card of cardPile) {
					if (get.color(card) == "red") {
						cards.push(card);
						if (cards.length >= 5 /*event.cost_data*/) {
							break;
						}
					} else {
						break;
					}
				}
				if (!cards.length) {
					return;
				}
				const next = game.cardsGotoOrdering(cards);
				await next;
				cards = next.cards.slice();
				if (!cards.length) {
					return;
				}
				await player.showCards(cards, get.translation(player) + "发动了【思泣】");
				while (cards.length) {
					if (
						cards.every(card => {
							const name = ["tao", "wuzhong"];
							if (name.includes(card.name) || get.type(card) == "equip") {
								return !game.hasPlayer(target => lib.filter.targetEnabled2(card, player, target));
							}
							return true;
						})
					) {
						break;
					}
					const result2 = await player
						.chooseCardButton(cards, true, "思泣：请选择要使用的牌")
						.set("filterButton", button => {
							const card = button.link;
							if (["tao", "wuzhong"].includes(card.name) || get.type(card) == "equip") {
								return game.hasPlayer(target => lib.filter.targetEnabled2(card, get.player(), target));
							}
							return false;
						})
						.set("ai", button => {
							return get.player().getUseValue(button.link);
						})
						.forResult();
					if (result2.bool) {
						const card = result2.links[0];
						game.broadcastAll(card => {
							lib.skill.old_olsiqi_backup.viewAs = card;
							lib.skill.old_olsiqi_backup.viewAs.cards = [card];
						}, card);
						player.addTempSkill("old_olsiqi_target");
						const next = player.chooseToUse();
						next.set("openskilldialog", `思泣：请选择${get.translation(card)}的目标`);
						next.set("forced", true);
						next.set("norestore", true);
						next.set("_backupevent", "old_olsiqi_backup");
						next.set("custom", {
							add: {},
							replace: { window() {} },
						});
						next.backup("old_olsiqi_backup");
						next.set("addCount", false);
						player
							.when("chooseToUseBegin")
							.filter(evt => evt === next)
							.step(async (event, trigger, player) => (trigger.filterCard = () => false));
						const result3 = await next.forResult();
						player.removeSkill("old_olsiqi_target");
						if (result3.bool) {
							cards.remove(card);
							continue;
						}
					}
					break;
				}
				if (cards.length) {
					await player.draw(cards.length);
				}
			},
			group: "old_olsiqi_lose",
			subSkill: {
				backup: {
					filterCard: () => false,
					selectCard: -1,
					filterTarget: lib.filter.targetEnabled2,
					log: false,
					precontent() {
						const name = event.result.card.name,
							cards = event.result.card.cards.slice(),
							rcard = cards[0];
						event.result.cards = cards;
						event.result.card = get.autoViewAs(rcard.name == name ? rcard : { name, isCard: true });
					},
				},
				lose: {
					audio: "olsiqi",
					trigger: {
						player: "loseAfter",
						global: ["loseAsyncAfter", "cardsDiscardAfter", "equipAfter", "addJudgeAfter", "addToExpansionAfter"],
					},
					filter(event, player) {
						return event.getd(player, "cards2").some(i => get.color(i, player) === "red");
					},
					forced: true,
					locked: true,
					async content(event, trigger, player) {
						const list = trigger.getd(player).filter(i => get.color(i, player) === "red");
						await game.cardsGotoPile(list);
						game.log(player, "将", list, "置入了牌堆底");
					},
				},
				target: {
					mod: {
						selectTarget(card, player, range) {
							if (_status._old_olsiqi_check) {
								return;
							}
							const event = get.event();
							if (!event || event.name !== "chooseToUse" || event.getParent().name !== "old_olsiqi") {
								return;
							}
							_status._old_olsiqi_check = true;
							const bool = game.countPlayer(target => lib.filter.targetEnabled2(card, player, target)) > 1;
							delete _status._old_olsiqi_check;
							if (bool) {
								if (range[0] !== 1) {
									range[0] = 1;
								}
								if (range[1] !== 1) {
									range[1] = 1;
								}
							}
						},
						cardEnabled2(card, player) {
							if (_status._old_olsiqi_check) {
								return;
							}
							const event = get.event();
							if (!event || event.name !== "chooseToUse" || event.getParent().name !== "old_olsiqi") {
								return;
							}
							_status._old_olsiqi_check = true;
							const bool = game.hasPlayer(target => lib.filter.targetEnabled2(card, player, target));
							delete _status._old_olsiqi_check;
							if (bool) {
								return true;
							}
						},
						cardEnabled(card, player) {
							if (_status._old_olsiqi_check) {
								return;
							}
							const event = get.event();
							if (!event || event.name !== "chooseToUse" || event.getParent().name !== "old_olsiqi") {
								return;
							}
							_status._old_olsiqi_check = true;
							const bool = game.hasPlayer(target => lib.filter.targetEnabled2(card, player, target));
							delete _status._old_olsiqi_check;
							if (bool) {
								return true;
							}
						},
						playerEnabled(card, player, target) {
							if (_status._old_olsiqi_check) {
								return;
							}
							const event = get.event();
							if (!event || event.name !== "chooseToUse" || event.getParent().name !== "old_olsiqi") {
								return;
							}
							_status._old_olsiqi_check = true;
							const bool = lib.filter.targetEnabled2(card, player, target);
							delete _status._old_olsiqi_check;
							if (bool) {
								return true;
							}
						},
					},
					charlotte: false,
				},
			},
		},
		//OL谋卢植
		old_olsibing: {
			audio: "olsibing",
			trigger: {
				player: "useCardToPlayer",
				global: "useCardAfter",
			},
			filter(event, player, name) {
				if (name == "useCardToPlayer") {
					return get.is.damageCard(event.card) && event.targets.length == 1 && player.countDiscardableCards(player, "he", card => get.color(card, player) == "red");
				}
				return get.is.damageCard(event.card) && event.targets?.includes(player) && !player.hasHistory("damage", evt => evt.getParent("useCard") == event) && player.countDiscardableCards(player, "he", card => get.color(card, player) == "black") && player.hasUseTarget({ name: "sha", isCard: true }, false, false);
			},
			async cost(event, trigger, player) {
				const name = event.triggername;
				if (name == "useCardToPlayer") {
					event.result = await player
						.chooseToDiscard(`###${get.prompt(event.skill, trigger.target)}###弃置任意张红色牌并令其弃置等量红色手牌，否则不能响应该牌`, [1, Infinity], "he", "chooseonly", (card, player) => get.color(card, player) == "red", "allowChooseAll")
						.set("ai", card => {
							const player = get.player(),
								target = get.event().getTrigger().target,
								cardx = get.event().getTrigger().card;
							if (get.effect(target, cardx, player, player) < 0 || cardx.name == "huogong") {
								return 0;
							}
							if (ui.selected.cards?.length == target.countCards("h", { color: "red" })) {
								return 0;
							}
							return 7 - get.value(card);
						})
						.forResult();
					if (event.result.bool) {
						event.result.targets = [trigger.target];
					}
				} else {
					event.result = await player
						.chooseToDiscard(`###${get.prompt(event.skill)}###弃置一张黑色牌并视为使用一张【杀】`, "he", "chooseonly", (card, player) => get.color(card, player) == "black")
						.set("ai", card => {
							if (!get.player().hasValueTarget({ name: "sha", isCard: true }, false, false)) {
								return 0;
							}
							return 6 - get.value(card);
						})
						.forResult();
				}
			},
			async content(event, trigger, player) {
				const cards = event.cards,
					name = event.triggername;
				await player.discard(cards);
				if (name == "useCardToPlayer") {
					const target = trigger.target;
					const result = await target
						.chooseToDiscard(`司兵：请弃置${cards.length}张红色手牌，或取消令你不可响应${get.translation(trigger.card)}`, cards.length, card => {
							return get.color(card, get.player()) == "red";
						})
						.set("ai", card => {
							const trigger = get.event().getTrigger(),
								player = get.player();
							if (get.event().num > 2 || !player.canRespond(trigger) || trigger.card.name == "huogong") {
								return 0;
							}
							if (player.canRespond(trigger, card)) {
								return 6 - get.value(card);
							}
							return 7 - get.value(card);
						})
						.set("num", cards.length)
						.forResult();
					if (result?.bool === false) {
						trigger.getParent().directHit.add(target);
						target.popup("不可响应");
						game.log(target, "不可响应", trigger.card);
					}
				} else {
					const card = get.autoViewAs({ name: "sha", isCard: true });
					await player.chooseUseTarget(card, true, false, "nodistance");
				}
			},
		},
		old_olliance: {
			audio: "olliance",
			trigger: {
				player: "loseAfter",
				global: ["loseAsyncAfter", "equipAfter", "addToExpansionAfter", "gainAfter", "addJudgeAfter"],
			},
			usable: 1,
			filter(event, player) {
				const bool1 = event.getg && event.getg(player)?.length,
					bool2 = event.getl && event.getl(player)?.hs?.length;
				return (bool1 || bool2) && player.isMinHandcard() && player.countCards("h") < player.maxHp;
			},
			check(event, player) {
				return player.countCards("h") < player.maxHp;
			},
			async content(event, trigger, player) {
				await player.drawTo(player.maxHp);
				player.addTempSkill(event.name + "_damage");
				player.addMark(event.name + "_damage", 1, false);
			},
			subSkill: {
				damage: {
					audio: "olliance",
					charlotte: true,
					forced: true,
					forceDie: true,
					onremove: true,
					trigger: { global: "damageBegin1" },
					content() {
						trigger.num += player.countMark(event.name);
						player.removeSkill(event.name);
					},
					mark: true,
					intro: {
						content: "本回合下一次有角色造成的伤害+#",
					},
				},
			},
		},
		//OL谋张让
		old_olsblucun: {
			audio: "olsblucun",
			enable: "chooseToUse",
			filter(event, player) {
				return get
					.inpileVCardList(info => {
						const name = info[2];
						if (!["basic", "trick"].includes(get.type(name))) {
							return false;
						}
						return !player.getStorage("old_olsblucun_used").includes(name);
					})
					.some(card => event.filterCard(new lib.element.VCard({ name: card[2], nature: card[3], isCard: true }), player, event));
			},
			usable: 1,
			chooseButton: {
				dialog(event, player) {
					return ui.create.dialog("赂存", [get.inpileVCardList(info => ["basic", "trick"].includes(get.type(info[2]))), "vcard"]);
				},
				filter(button, player) {
					const event = get.event().getParent();
					if (player.getStorage("old_olsblucun_used").includes(button.link[2])) {
						return false;
					}
					return event.filterCard(new lib.element.VCard({ name: button.link[2], nature: button.link[3], isCard: true }), player, event);
				},
				check(button) {
					const event = get.event().getParent();
					if (event.type !== "phase") {
						return 1;
					}
					return get.player().getUseValue(new lib.element.VCard({ name: button.link[2], nature: button.link[3], isCard: true }));
				},
				prompt(links) {
					return '###赂存###<div class="text center">视为使用' + (get.translation(links[0][3]) || "") + "【" + get.translation(links[0][2]) + "】</div>";
				},
				backup(links) {
					return {
						audio: "olsblucun",
						filterCard: () => false,
						selectCard: -1,
						popname: true,
						log: false,
						viewAs: { name: links[0][2], nature: links[0][3], isCard: true },
						async precontent(event, trigger, player) {
							player.logSkill("old_olsblucun");
							const name = "old_ol_sb_zhangrang";
							const key = ["name", "name2"].find(i => player[i] == name);
							if (key) {
								player.changeSkin({ characterName: name }, `${"ol_sb_zhangrang"}${player.skin[key] == name ? "_shadow" : ""}`);
							}
							player.addTempSkill("old_olsblucun_used", "roundStart");
							player.markAuto("old_olsblucun_used", [event.result.card.name]);
							player.addTempSkill("old_olsblucun_effect");
						},
					};
				},
			},
			hiddenCard(player, name) {
				if ((player.getStat("skill")?.old_olsblucun ?? 0) > 0) {
					return false;
				}
				return ["basic", "trick"].includes(get.type(name)) && !player.getStorage("old_olsblucun_used").includes(name);
			},
			marktext: "赂",
			intro: {
				content: "expansion",
				markcount: "expansion",
			},
			onremove(player, skill) {
				const cards = player.getExpansions(skill);
				if (cards.length) {
					player.loseToDiscardpile(cards);
				}
			},
			ai: {
				fireAttack: true,
				respondSha: true,
				respondShan: true,
				skillTagFilter(player, tag, arg) {
					if (arg === "respond") {
						return false;
					}
					return (() => {
						switch (tag) {
							case "fireAttack":
								return ["sha", "huogong"];
							default:
								return [tag.slice("respond".length).toLowerCase()];
						}
					})().some(name => get.info("old_olsblucun").hiddenCard(player, name));
				},
				order(item, player) {
					if (player && _status.event.type === "phase") {
						let max = 0,
							names = get.inpileVCardList(info => {
								const name = info[2];
								if (!["basic", "trick"].includes(get.type(name))) {
									return false;
								}
								return !player.getStorage("old_olsblucun_used").includes(name);
							});
						names = names.map(namex => new lib.element.VCard({ name: namex[2], nature: namex[3] }));
						names.forEach(card => {
							if (player.getUseValue(card) > 0) {
								let temp = get.order(card);
								if (temp > max) {
									max = temp;
								}
							}
						});
						return max + (max > 0 ? 0.2 : 0);
					}
					return 10;
				},
				result: {
					player(player) {
						if (_status.event.dying) {
							return get.attitude(player, _status.event.dying);
						}
						return 1;
					},
				},
			},
			subSkill: {
				backup: {},
				used: {
					charlotte: true,
					onremove: true,
					intro: { content: "本轮已使用牌名：$" },
				},
				effect: {
					audio: "olsblucun",
					charlotte: true,
					trigger: {
						player: "useCardAfter",
						global: "phaseEnd",
					},
					filter(event, player) {
						if (event.name === "useCard") {
							return event.skill === "old_olsblucun_backup" && _status.currentPhase?.countCards("h") > 0;
						}
						return player.getExpansions("old_olsblucun").length;
					},
					forced: true,
					async content(event, trigger, player) {
						if (trigger.name === "useCard") {
							const target = _status.currentPhase;
							player.line(target);
							const { cards } = await target.chooseCard("赂存：将一张手牌置于" + get.translation(player) + "的武将牌", "h", true).forResult();
							if (cards?.length) {
								const next = player.addToExpansion(cards, target, "give");
								next.gaintag.add("old_olsblucun");
								await next;
							}
						} else {
							const names = player
								.getHistory("useCard", evt => evt.skill === "old_olsblucun_backup")
								.map(evt => evt.card.name)
								.unique();
							let prompt = "赂存：将一张“赂”置入弃牌堆并摸一张牌";
							if (names.length) {
								prompt = "###" + prompt;
								prompt += '###<div class="text center">若你移去了' + get.translation(names) + "，则额外摸一张牌</div>";
							}
							const { links: cards } = await player
								.chooseButton([prompt, player.getExpansions("old_olsblucun")], true)
								.set("names", names)
								.set("ai", button => {
									return Math.random() + (get.event().names.includes(get.name(button.link, false)) ? 2 : 1);
								})
								.forResult();
							if (cards?.length) {
								await player.loseToDiscardpile(cards);
								await player.draw(1 + cards.some(card => names.includes(get.name(card, false))));
							}
							const name = "old_ol_sb_zhangrang";
							const key = ["name", "name2"].find(i => player[i] == name);
							if (key) {
								player.changeSkin({ characterName: name }, `${"ol_sb_zhangrang"}${player.skin[key] == name ? "_shadow" : ""}`);
							}
						}
					},
				},
			},
		},
		old_olsbtuisheng: {
			limited: true,
			audio: "olsbtuisheng",
			trigger: { player: ["phaseZhunbeiBegin", "dying"] },
			filter(event, player) {
				return player.getStorage("old_olsblucun_used").length > 0;
			},
			check(event, player) {
				if (event.name === "dying") {
					return true;
				}
				return player.isDamaged() && player.getExpansions("old_olsblucun").length >= 5;
			},
			skillAnimation: true,
			animationColor: "water", //笑点解析——以水蜕生
			async content(event, trigger, player) {
				player.awakenSkill(event.name);
				player.removeSkill("old_olsblucun_used");
				const goon1 = player.countCards("h") > 0;
				const goon2 = _status.currentPhase?.isIn() && player.getExpansions("old_olsblucun").length;
				if (goon1 || goon2) {
					let result;
					if (!goon1) {
						result = { index: 1 };
					} else if (!goon2) {
						result = { index: 0 };
					} else {
						const str = get.translation(_status.currentPhase);
						result = await player
							.chooseControl()
							.set("choiceList", ["将所有手牌置于武将牌上，称为“赂”", "令" + str + "获得你的所有“赂”，你回复1点体力"])
							.set("prompt", "蜕生：请选择一项执行并回复1点体力")
							.set("ai", () => {
								const player = get.player(),
									target = _status.currentPhase,
									cards = player.getExpansions("old_olsblucun");
								return cards.reduce((sum, card) => {
									return sum + get.value(card, target);
								}, 0) *
									Math.sign(get.attitude(player, target)) >
									0
									? 1
									: 0;
							})
							.forResult();
					}
					if (result.index === 0) {
						const next = player.addToExpansion(player.getCards("h"), player, "give");
						next.gaintag.add("old_olsblucun");
						await next;
					} else {
						await player.give(player.getExpansions("old_olsblucun"), _status.currentPhase);
						await player.recover();
					}
					await player.recover();
				}
			},
			ai: { combo: "old_olsblucun" },
		},
		//OL界刘表
		old_olzishou: {
			audio: "olzishou",
			trigger: {
				player: "phaseDrawBegin2",
			},
			filter(event, player) {
				return !event.numFixed;
			},
			check(event, player) {
				return (
					player.countCards("h") <= (player.hasSkill("old_olzongshi") ? player.maxHp : player.hp - 2) ||
					player.skipList.includes("phaseUse") ||
					!player.countCards("h", function (card) {
						return get.tag(card, "damage") && player.hasUseTarget(card);
					})
				);
			},
			async content(event, trigger, player) {
				trigger.num += game.countGroup();
				player
					.when("phaseJieshuBegin")
					.filter(evt => evt.getParent() == trigger.getParent() && player.hasHistory("sourceDamage", evtx => evtx.player != player) && player.countCards("he"))
					.step(async () => {
						player.chooseToDiscard("he", game.countGroup(), true);
					});
			},
			ai: {
				threaten: 1.5,
			},
		},
		old_olzongshi: {
			mod: {
				maxHandcard(player, num) {
					return num + game.countGroup();
				},
			},
			audio: "olzongshi",
			trigger: {
				player: "damageBegin4",
			},
			filter(event, player) {
				const source = event.source;
				if (!source || source == player || !source.isIn()) return false;
				return !player.getStorage("old_olzongshi_record").includes(source.group);
			},
			forced: true,
			logTarget: "source",
			async content(event, trigger, player) {
				const target = trigger.source;
				trigger.cancel();
				await target.draw();
				player.addSkill("old_olzongshi_record");
				player.markAuto("old_olzongshi_record", [target.group]);
			},
			ai: {
				filterDamage: true,
				skillTagFilter(player, tag, arg) {
					if (arg && arg.player && player.getStorage("old_olzongshi_record").includes(arg.player.group)) return true;
					return false;
				},
			},
			subSkill: {
				record: {
					charlotte: true,
					intro: {
						content: (storage, player) => `已记录势力：${get.translation(storage)}`,
					},
				},
			},
		},
		//OL界马岱
		old_olqianxi: {
			audio: "olqianxi",
			trigger: { player: "phaseZhunbeiBegin" },
			async content(event, trigger, player) {
				await player.draw();
				if (!player.countCards("he")) {
					return;
				}
				const result = await player
					.chooseCard(`潜袭：请展示一张牌`, "he", true)
					.set("ai", card => {
						const player = get.player();
						let value = 0;
						if (get.tag(card, "damage") > 0.5) {
							value += player.getUseValue(card);
						}
						value += get.color(card, player) == "red" ? 7 - get.value(card, player) : 6 - get.value(card, player);
						return value;
					})
					.forResult();
				if (result?.cards) {
					const card = result.cards[0],
						color = get.color(card, player);
					await player.showCards(card, `${get.translation(player)}发动了〖${get.translation(event.name)}〗`);
					player.addTempSkill(event.name + "_damage");
					player.addGaintag(card, event.name + "_damage");
					const targets = game
						.filterPlayer(target => {
							return player != target && get.distance(player, target) == 1;
						})
						.sortBySeat();
					if (!targets.length) {
						return;
					}
					player.line(targets, "green");
					targets.forEach(target => {
						target.addTempSkill(event.name + "_effect");
						target.markAuto(event.name + "_effect", [color]);
					});
				}
			},
			ai: {
				directHit_ai: true,
				skillTagFilter(player, tag, arg) {
					if (tag !== "directHit_ai" || !arg.target.hasSkill("old_olqianxi_effect")) {
						return false;
					}
					if (arg.card.name == "sha") {
						return (
							arg.target.getStorage("old_olqianxi_effect").includes("red") &&
							(!arg.target.hasSkillTag(
								"freeShan",
								false,
								{
									player: player,
									card: arg.card,
									type: "use",
								},
								true
							) ||
								player.hasSkillTag("unequip", false, {
									name: arg.card ? arg.card.name : null,
									target: arg.target,
									card: arg.card,
								}) ||
								player.hasSkillTag("unequip_ai", false, {
									name: arg.card ? arg.card.name : null,
									target: arg.target,
									card: arg.card,
								}))
						);
					}
					return arg.target.getStorage("old_olqianxi_effect").includes("black");
				},
			},
			subSkill: {
				damage: {
					audio: "olqianxi",
					charlotte: true,
					forced: true,
					onremove(player, skill) {
						player.removeGaintag(skill);
					},
					trigger: { source: "damageBegin1" },
					filter(event, player) {
						return (
							event.card &&
							player.hasHistory("lose", evt => {
								return evt.getParent() == event.getParent("useCard") && Object.values(evt.gaintag_map).flat().includes("old_olqianxi_damage");
							})
						);
					},
					content() {
						trigger.num++;
					},
					mod: {
						aiOrder(player, card, num) {
							if (get.itemtype(card) == "card" && card.hasGaintag("old_olqianxi_damage") && get.event().name == "chooseToUse") {
								return num + 0.5;
							}
						},
					},
				},
				effect: {
					charlotte: true,
					onremove: true,
					mod: {
						cardEnabled2(card, player) {
							if (player.getStorage("old_olqianxi_effect").includes(get.color(card, player)) && get.position(card) == "h") {
								return false;
							}
						},
					},
					intro: {
						markcount: () => 0,
						content(storage) {
							return "不能使用或打出" + get.translation(storage) + "的手牌";
						},
					},
				},
			},
		},
		//OL杨奉
		oldx_oljiawei: {
			audio: "oljiawei",
			enable: "phaseUse",
			usable: 1,
			filterTarget: true,
			filter(event, player) {
				return true; // game.hasPlayer(current => get.info("oldx_oljiawei").filterTarget(null, player, current));
			},
			async content(event, trigger, player) {
				const num = Math.min(
						player.maxHp,
						player.actionHistory.filter(evt => {
							return evt.isMe && !evt.isSkipped;
						}).length - 1
					),
					target = event.target;
				if (num > 0 && target.countDiscardableCards(player, "he")) {
					await player.discardPlayerCard(target, "he", num, true, "allowChooseAll");
				}
				const cards = get.cards(num + 1);
				await game.cardsGotoOrdering(cards);
				if (!cards?.length) {
					return;
				}
				game.log(player, "亮出了", cards);
				player.$throw(cards);
				await game.delayx(3);
				const damages = cards.filter(card => get.tag(card, "damage")),
					nodamages = cards.filter(card => !get.tag(card, "damage"));
				if (damages?.length) {
					await player.gain(damages, "gain2");
				}
				if (nodamages?.length) {
					await target.gain(nodamages, "gain2");
				}
				player
					.when({
						global: "phaseAfter",
					})
					.assign({
						mod: {
							targetInRange: () => true,
						},
					})
					.step(async () => {});
			},
			ai: {
				order: 8,
				result: {
					target(player, target) {
						return target.countCards("he");
					},
				},
			},
		},
		old_olqujia: {
			audio: "olqujia",
			trigger: {
				player: "phaseAfter",
			},
			filter(event, player) {
				if (player.getStat("kill") > 0) {
					return false;
				}
				return true;
			},
			locked: true,
			async cost(event, trigger, player) {
				const result = await player
					.chooseControl("额外回合", "出杀次数")
					.set("prompt", "假威：请选择一项")
					.set("prompt2", get.skillInfoTranslation(event.skill, player, false))
					.set(
						"resultx",
						(() => {
							if (
								game.hasPlayer(current => {
									if (current.hp > 1 || get.attitude(player, current) >= 0) {
										return false;
									}
									return player.countCards("h", card => get.tag(card, "damage") && player.canUse(card, current));
								})
							) {
								return "额外回合";
							}
							return "出杀次数";
						})()
					)
					.set("ai", () => get.event().resultx)
					.forResult();
				event.result = {
					bool: true,
					cost_data: result.control,
				};
			},
			async content(event, trigger, player) {
				if (event.cost_data == "额外回合") {
					const next = player.insertPhase(event.name);
					player
						.when({
							player: "phaseEnd",
						})
						.filter(evt => evt == next)
						.step(async (event, trigger, player) => {
							if (player.getStat("kill") > 0) {
								return;
							}
							await player.removeSkills("old_olqujia");
							const num = Math.min(
								player.maxHp,
								player.actionHistory.filter(evt => {
									return evt.isMe && !evt.isSkipped;
								}).length
							);
							await player.draw(num);
						});
				} else {
					player.addMark(event.name, 1, false);
					const card = get.cardPile(card => card.name == "sha");
					if (card) {
						await player.gain(card, "gain2");
					}
				}
			},
			intro: {
				content: "出杀次数+#",
			},
			onremove: true,
			mod: {
				cardUsable(card, player, num) {
					if (card.name == "sha") {
						return num + player.countMark("old_olqujia");
					}
				},
			},
		},
		//族荀爽
		old_clanyangji: {
			audio: "clanyangji",
			trigger: {
				player: "phaseZhunbeiBegin",
				global: "phaseEnd",
			},
			filter(event, player) {
				if (event.name === "phase" && !game.hasGlobalHistory("changeHp", evt => evt.player === player && evt.num !== 0)) {
					return false;
				}
				return player.countCards("h");
			},
			async content(event, trigger, player) {
				let cards = player.getCards("h").filter(card => get.color(card, player) == "black" && player.hasUseTarget(card)),
					lastCard;
				await player.showHandcards(`${get.translation(player)}发动了〖佯疾〗`);
				while (!player.hasHistory("sourceDamage", evt => evt.getParent(4) === event) && player.getCards("h").some(card => cards.includes(card) && player.hasUseTarget(card))) {
					const result = await player
						.chooseToUse(function (card, player, event) {
							if (get.itemtype(card) != "card" || !get.event().cardsx.includes(card) || get.position(card) != "h") {
								return false;
							}
							return lib.filter.filterCard.apply(this, arguments);
						}, "佯疾：请使用一张黑色手牌")
						.set("targetRequired", true)
						.set("complexSelect", true)
						.set("filterTarget", function (card, player, target) {
							return lib.filter.filterTarget.apply(this, arguments);
						})
						.set("cardsx", cards)
						.set("forced", true)
						.set("addCount", false)
						.forResult();
					if (result?.cards?.length) {
						const card = result.cards[0];
						lastCard = card;
						cards.remove(card);
					} else {
						break;
					}
				}
				const target = _status.currentPhase;
				if (lastCard && get.suit(lastCard, player) == "spade" && (!get.owner(lastCard) || get.position(lastCard) !== "h") && target?.isIn() && target.canAddJudge(get.autoViewAs({ name: "lebu" }, lastCard))) {
					await target.addJudge({ name: "lebu" }, lastCard);
				}
			},
		},
		old_clandandao: {
			audio: "clandandao",
			trigger: { player: "judgeAfter" },
			forced: true,
			filter(event, player) {
				return _status.currentPhase?.isIn();
			},
			content() {
				const target = _status.currentPhase;
				if (!target?.isIn()) {
					return;
				}
				target.addTempSkill(event.name + "_add");
				target.addMark(event.name + "_add", 3, false);
			},
			subSkill: {
				add: {
					charlotte: true,
					onremove: true,
					mark: true,
					markimage: "image/card/handcard.png",
					intro: {
						content: "手牌上限+#",
					},
					mod: { maxHandcard: (player, num) => num + player.countMark("old_clandandao_add") },
				},
			},
		},
		old_clanqingli: {
			audio: "clanqingli",
			trigger: { global: "phaseEnd" },
			forced: true,
			filter(event, player) {
				return player.countCards("h") < player.getHandcardLimit();
			},
			async content(event, trigger, player) {
				const num = Math.min(player.getHandcardLimit() - player.countCards("h"), 5);
				if (num > 0) {
					await player.draw(num);
				}
			},
		},
		//族杨修
		old_clanjiewu: {
			audio: "clanjiewu",
			trigger: { player: "phaseUseBegin" },
			async cost(event, trigger, player) {
				event.result = await player
					.chooseTarget(get.prompt(event.skill), "令一名角色的手牌在本阶段对你可见")
					.set("ai", target => {
						let items = target.getCards("h");
						let count = [...new Set(items.map(item => get.suit(item, target)))].length;
						const player = get.player();
						return (get.effect(target, { name: "draw" }, target, player) * items) / (count + 1);
					})
					.forResult();
			},
			async content(event, trigger, player) {
				const target = event.targets[0];
				player.markAuto(event.name + "_effect", target);
				player.addSkill(event.name + "_effect");
				target.addSkill(event.name + "_view");
				const func = target => target.markSkill("old_clanjiewu_view", null, null, true);
				event.isMine() ? func(target) : player.isOnline2() && player.send(func, target);
				player
					.when({ global: "phaseUseAfter" })
					.filter(evt => evt === trigger)
					.step(async () => player.removeSkill("old_clanjiewu_effect"));
			},
			subSkill: {
				effect: {
					charlotte: true,
					onremove(player, skill) {
						if (player.storage[skill]) {
							Array.isArray(player.storage[skill]) && player.storage[skill].forEach(i => i.removeSkill("old_clanjiewu_view"));
							delete player.storage[skill];
						}
					},
					audio: "clanjiewu",
					trigger: { player: "useCardToPlayered" },
					filter: (event, player) => event.isFirstTarget,
					async cost(event, trigger, player) {
						event.result = await player
							.chooseTarget(get.prompt(event.skill), "选择一名「捷悟」角色展示其一张手牌")
							.set("filterTarget", (card, player, target) => target.hasCard(true, "h") && player.getStorage("old_clanjiewu_effect").includes(target))
							.set("ai", target => {
								let items = target.getCards("h");
								let count = [...new Set(items.map(item => get.suit(item, target)))].length;
								const player = get.player();
								return (4 - count) * get.effect(target, { name: "draw" }, target, player);
							})
							.forResult();
					},
					async content(event, trigger, player) {
						const target = event.targets[0];
						let cards;
						if (target === player) {
							cards = (await player.chooseCard("h", true, `捷悟：展示你的一张手牌`).forResult()).cards;
						} else {
							cards = (await player.choosePlayerCard(target, true, "h", `捷悟：展示${get.translation(target)}的一张手牌`).forResult()).cards;
						}
						if (!cards?.length) {
							return;
						}
						const card = cards[0];
						await player.showCards(card, `${get.translation(player)}对${get.translation(target)}发动了【捷悟】`).set("old_clanjiewu", true);
						if (get.suit(trigger.card, player) === get.suit(card, target)) {
							await player.draw();
						}
						if (
							game.getGlobalHistory("everything", evt => {
								return evt.name === "showCards" && evt.cards.length && evt.cards.some(c => c === card) && evt?.old_clanjiewu;
							}).length > 1
						) {
							let cardsx;
							if ((target.countCards("h") !== player.countCards("h") && target !== player) || target === player) {
								const putee = player.countCards("h") > target.countCards("h") || target === player ? player : target;
								if (!putee.countCards("he")) {
									return;
								}
								if (player !== putee) {
									cardsx = (await player.choosePlayerCard(putee, true, "he", "捷悟：将" + get.translation(putee) + "的一张牌置于牌堆顶").forResult()).cards;
								} else {
									cardsx = (await player.chooseCard("he", true, "捷悟：将你的一张牌置于牌堆顶").forResult()).cards;
								}
								const card = cardsx[0];
								putee.$throw(get.position(card) == "h" ? 1 : card, 1000);
								game.log(player, "将", putee === player ? "" : get.translation(putee) + "的", get.position(card) == "h" ? "一张牌" : card, "置于牌堆顶");
								await putee.lose(card, ui.cardPile, "insert");
							}
						}
					},
					ai: {
						viewHandcard: true,
						skillTagFilter(player, tag, arg) {
							if (!player.getStorage("old_clanjiewu_effect").includes(arg)) {
								return false;
							}
						},
					},
				},
				view: {
					charlotte: true,
					intro: {
						markcount: (content, player) => player.countCards("h").toString(),
						mark(dialog, content, player) {
							const hs = player.getCards("h");
							hs.length > 0 ? dialog.addSmall(hs) : dialog.addText("没有手牌");
						},
					},
				},
			},
		},
		old_clangaoshi: {
			audio: "clangaoshi",
			trigger: { player: "phaseJieshuBegin" },
			filter: (event, player) => player.hasHistory("useSkill", evt => ["tdojiewu", "tdojiewu_effect"].includes(evt.skill)),
			prompt(event, player) {
				return get.prompt("old_clangaoshi") + "（可亮出" + get.cnNumber(player.getHistory("useSkill", evt => ["tdojiewu", "tdojiewu_effect"].includes(evt.skill)).length) + "张牌）";
			},
			async content(event, trigger, player) {
				const num = player.getHistory("useSkill", evt => {
					return ["tdojiewu", "tdojiewu_effect"].includes(evt.skill);
				}).length;
				const names = player.getHistory("useCard", evt => evt.isPhaseUsing()).map(evt => evt.card.name);
				let cards = get.cards(num);
				await game.cardsGotoOrdering(cards);
				await player.showCards(cards, `${get.translation(player)}发动了【高视】`);
				//game.log(player, "亮出了牌堆顶的", cards);
				while (cards.some(card => player.hasUseTarget(card))) {
					const { links } = await player
						.chooseButton([`高视：是否使用其中一张牌？`, cards])
						.set("filterButton", button => {
							const player = get.player(),
								card = button.link;
							return player.hasUseTarget(card) && !get.event().names.includes(card.name);
						})
						.set("names", names)
						.set("ai", button => {
							return get.player().getUseValue(button.link);
						})
						.forResult();
					if (!links?.length) break;
					cards.remove(links[0]);
					player.$gain2(links[0], false);
					await game.delayx();
					await player.chooseUseTarget(links[0], true, false);
				}
				if (!cards.length) await player.draw(2);
			},
			ai: {
				combo: "old_clanjiewu",
			},
		},
		//族王明山
		old_clantanque: {
			audio: "clantanque",
			trigger: { player: "useCardAfter" },
			usable: 1,
			filter(event, player) {
				const evt = lib.skill.dcjianying.getLastUsed(player, event);
				if (!evt || !evt.card) {
					return false;
				}
				const curCard = event.card,
					prevCard = evt.card;
				const curNum = get.number(curCard),
					prevNum = get.number(prevCard);
				if (typeof curNum != "number" || typeof prevNum != "number") {
					return false;
				}
				const delNum = Math.abs(curNum - prevNum);
				if (delNum === 0) {
					return false;
				}
				return game.hasPlayer(current => {
					return current.getHp() === delNum;
				});
			},
			locked: false,
			async cost(event, trigger, player) {
				const evt = lib.skill.dcjianying.getLastUsed(player, trigger);
				const curCard = trigger.card,
					prevCard = evt.card;
				const curNum = get.number(curCard),
					prevNum = get.number(prevCard);
				const delNum = Math.abs(curNum - prevNum);
				event.result = await player
					.chooseTarget(get.prompt(event.skill), `对一名体力值为${delNum}的角色造成1点伤害`, (card, player, target) => {
						return target.getHp() === get.event().delNum;
					})
					.set("delNum", delNum)
					.set("ai", target => {
						return get.damageEffect(target, get.player(), get.player());
					})
					.forResult();
			},
			async content(event, trigger, player) {
				const target = event.targets[0];
				await target.damage();
				await game.delayx();
			},
			mod: {
				aiOrder(player, card, num) {
					if (typeof card != "object") {
						return;
					}
					const evt = lib.skill.dcjianying.getLastUsed(player);
					if (!evt || !evt.card) {
						return;
					}
					const curNum = get.number(card),
						prevNum = get.number(evt.card);
					if (typeof curNum != "number" || typeof prevNum != "number") {
						return;
					}
					const pairs = game
						.filterPlayer()
						.map(current => {
							return [current.getHp(), get.damageEffect(current, player, player)];
						})
						.filter(pair => pair[1] > 0);
					if (!pairs.length) {
						return;
					}
					const delNum = Math.abs(curNum - prevNum);
					for (const [hp, eff] of pairs) {
						if (hp != delNum) {
							continue;
						}
						return num + 10 + pairs.filter(pair => pair[0] === hp).sort((a, b) => b[1] - a[1])[0][1] / 20;
					}
				},
			},
			group: "old_clantanque_mark",
			init(player) {
				var history = player.getAllHistory("useCard");
				if (history.length) {
					var trigger = history[history.length - 1];
					if (typeof get.number(trigger.card, player) != "number") {
						return;
					}
					player.storage.old_clantanque_mark = trigger.card;
					player.markSkill("old_clantanque_mark");
				}
			},
			onremove(player) {
				player.unmarkSkill("old_clantanque_mark");
				delete player.storage.old_clantanque_mark;
			},
			subSkill: {
				mark: {
					charlotte: true,
					trigger: { player: "useCard1" },
					forced: true,
					popup: false,
					firstDo: true,
					content() {
						if (typeof get.number(trigger.card, player) != "number") {
							player.unmarkSkill("old_clantanque_mark");
						} else {
							player.storage.old_clantanque_mark = trigger.card;
							player.markSkill("old_clantanque_mark");
						}
					},
					intro: {
						markcount(card, player) {
							return get.strNumber(get.number(card, player));
						},
						content(card, player) {
							return "上一张牌的点数：" + get.strNumber(get.number(card, player));
						},
					},
				},
			},
		},
		old_clanshengmo: {
			audio: "clanshengmo",
			enable: "chooseToUse",
			hiddenCard(player, name) {
				if (get.type(name) != "basic") {
					return false;
				}
				if (!player.getStorage("old_clanshengmo").includes(name) && (get.event().old_clanshengmo_cards || []).length > 0) {
					return true;
				}
			},
			filter(event, player) {
				if (event.responded) {
					return false;
				}
				const names = lib.inpile.filter(name => get.type(name) == "basic" && !player.getStorage("old_clanshengmo").includes(name)),
					cards = get.event().old_clanshengmo_cards || [];
				return (
					cards.length > 0 &&
					names.some(name => {
						return event.filterCard({ name, isCard: true }, player, event);
					})
				);
			},
			onChooseToUse(event) {
				if (game.online) {
					return;
				}
				if (!event.old_clanshengmo_cards) {
					let cards = [];
					game.checkGlobalHistory("cardMove", evt => {
						if (evt.name != "cardsDiscard" && (evt.name != "lose" || evt.position != ui.discardPile)) {
							return;
						}
						cards.addArray(evt.cards.filter(card => get.position(card, true) == "d"));
					});
					const numbers = cards.map(card => get.number(card, false)).unique();
					const [min, max] = [Math.min(...numbers), Math.max(...numbers)];
					event.set(
						"old_clanshengmo_cards",
						cards.filter(card => {
							const num = get.number(card, false);
							return num > min && num < max;
						})
					);
				}
			},
			async content(event, trigger, player) {
				const evt = event.getParent(2);
				const names = lib.inpile.filter(name => get.type(name) == "basic" && !player.getStorage("old_clanshengmo").includes(name)),
					cards = evt.old_clanshengmo_cards;
				const { links } = await player
					.chooseButton(["剩墨：获得其中一张牌", cards], true)
					.set("ai", button => {
						return get.value(button.link);
					})
					.forResult();
				if (!links || !links.length) {
					return;
				}
				const list = [];
				for (const name of names) {
					const card = { name, isCard: true };
					if (evt.filterCard(card, player, evt)) {
						list.push(["基本", "", name]);
					}
					if (name == "sha") {
						for (const nature of lib.inpile_nature) {
							card.nature = nature;
							if (evt.filterCard(card, player, evt)) {
								list.push(["基本", "", name, nature]);
							}
						}
					}
				}
				if (!list.length) {
					return;
				}
				const { links: links2 } = await player
					.chooseButton(["视为使用一张未以此法使用过的基本牌", [list, "vcard"]], true)
					.set("ai", button => {
						return get.player().getUseValue(button.link) + 1;
					})
					.forResult();
				const name = links2[0][2],
					nature = links2[0][3];
				game.broadcastAll(
					(name, nature, toGain) => {
						lib.skill.old_clanshengmo_backup.viewAs = {
							name,
							nature,
							isCard: true,
						};
						lib.skill.old_clanshengmo_backup.prompt = `选择${get.translation(nature)}【${get.translation(name)}】的目标`;
						lib.skill.old_clanshengmo_backup.cardToGain = toGain;
					},
					name,
					nature,
					links[0]
				);
				evt.set("_backupevent", "old_clanshengmo_backup");
				evt.backup("old_clanshengmo_backup");
				evt.set("openskilldialog", `选择${get.translation(nature)}【${get.translation(name)}】的目标`);
				evt.set("norestore", true);
				evt.set("custom", {
					add: {},
					replace: { window() {} },
				});
				evt.goto(0);
			},
			marktext: "墨",
			intro: {
				content: "已以此法使用过$",
			},
			subSkill: {
				backup: {
					precontent() {
						event.result.card.storage.old_clanshengmo = true;
						player.markAuto("old_clanshengmo", event.result.card.name);
						player.gain(lib.skill.old_clanshengmo_backup.cardToGain, "gain2");
					},
					filterCard: () => false,
					selectCard: -1,
					log: false,
				},
			},
			ai: {
				order: 3,
				result: {
					player(player) {
						if (get.event().dying) {
							return get.attitude(player, get.event().dying);
						}
						if (get.event().type != "phase") {
							return 1;
						}
						const names = lib.inpile.filter(name => get.type(name) == "basic" && !player.getStorage("old_clanshengmo").includes(name));
						if (Array.isArray(names)) {
							return names.some(name => {
								return player.getUseValue({ name }) > 0;
							});
						}
						return 0;
					},
				},
			},
		},
		//族荀莳 by--星语
		old_clanqingjue: {
			audio: "clanqingjue",
			forced: true,
			trigger: {
				player: "changeHpAfter",
			},
			isOnlySuit(card, player) {
				return !player.hasCard(cardx => cardx != card && get.suit(cardx) == get.suit(card), "h");
			},
			init(player, skill) {
				player.addSkill(`${skill}_mark`);
			},
			onremove(player, skill) {
				player.removeSkill(`${skill}_mark`);
			},
			filter(event, player) {
				const hs = player.getCards("h");
				return game.getGlobalHistory("changeHp", evt => evt.player == player).indexOf(event) == 0 && player.countDiscardableCards(player, "h", card => !get.info("old_clanqingjue").isOnlySuit(card, player)) > 0;
			},
			async content(event, trigger, player) {
				const result = await player
					.chooseToDiscard(`###${get.translation(event.name)}###弃置手牌中任意张花色数量不为一的牌，并执行等量项`, "h", [1, Infinity], true, "allowChooseAll")
					.set("filterCard", (card, player) => !get.info("old_clanqingjue").isOnlySuit(card, player))
					.forResult();
				const { cards } = result;
				const resultx =
					cards.length > 1
						? { bool: true, links: ["give", "gain"] }
						: await player
								.chooseButton(
									[
										`清绝：执行${get.cnNumber(Math.min(cards.length, 2))}项`,
										[
											[
												["give", `将${get.translation(cards)}交给其他角色`],
												["gain", `获得未拥有花色的牌各一张（${get.translation(lib.suit.filter(suit => !player.hasCard({ suit: suit }, "h")))}）`],
											],
											"textbutton",
										],
									],
									true
								)
								.set("ai", button => {
									if (button.link == "give") {
										if (game.hasPlayer(target => target != get.player() && get.attitude(get.player(), target) > 0)) {
											return 2;
										}
										return 0.5;
									}
									return 1;
								})
								.forResult();
				const { links } = resultx;
				if (links?.includes("give") && game.hasPlayer(target => target != player) && cards?.someInD("d")) {
					const toGive = cards?.filterInD("d");
					const result = await player
						.chooseTarget(true, lib.filter.notMe)
						.set("createDialog", [`清绝：将这些牌交给一名其他角色`, toGive, [dialog => dialog.buttons.forEach(button => button.style.setProperty("opacity", "1", "important")), "handle"]])
						.set("toGive", toGive)
						.set("ai", target => get.attitude(get.player(), target) * get.value(get.event().toGive, target))
						.forResult();
					const {
						targets: [target],
					} = result;
					player.line(target);
					await target.gain(toGive, "gain2").set("giver", player);
				}
				if (links?.includes("gain")) {
					const hs = player.getCards("h").map(i => get.suit(i));
					const suits = lib.suit.slice().removeArray(hs);
					if (suits?.length) {
						const cards = [];
						for (const suit of suits) {
							const card = get.cardPile(i => get.suit(i) == suit);
							if (card) {
								cards.push(card);
							}
						}
						if (cards.length) {
							await player.gain(cards, "gain2");
						}
					}
				}
			},
			mod: {
				ignoredHandcard(card, player) {
					if (get.info("old_clanqingjue").isOnlySuit(card, player)) {
						return true;
					}
				},
				cardDiscardable(card, player, name) {
					if (name == "phaseDiscard") {
						if (get.info("old_clanqingjue").isOnlySuit(card, player)) {
							return false;
						}
					}
				},
			},
			subSkill: {
				mark: {
					//太棒了，是宝宝标记，我们有救了！
					charlotte: true,
					init(player, skill) {
						player.removeGaintag(skill);
						player.addGaintag(
							player.getCards("h", card => get.info("old_clanqingjue").isOnlySuit(card, player)),
							skill
						);
					},
					onremove(player, skill) {
						player.removeGaintag(skill);
					},
					trigger: {
						player: ["loseEnd", "enterGame"],
						global: ["gainEnd", "equipEnd", "addJudgeEnd", "loseAsyncEnd", "addToExpansionEnd", "phaseBefore"],
					},
					silent: true,
					filter(event, player, name) {
						if (event.name == "phase") {
							return game.phaseNumber == 0;
						}
						return name == "enterGame" || event.getg?.(player)?.length || event.getl?.(player)?.hs?.length;
					},
					async content(event, trigger, player) {
						get.info(event.name).init(player, event.name);
					},
				},
			},
		},
		old_clanxsyingxiang: {
			audio: "clanxsyingxiang",
			forced: true,
			trigger: {
				global: ["loseAfter", "loseAsyncAfter", "gainAfter", "equipAfter", "addJudgeAfter", "addToExpansionAfter"],
			},
			getIndex(event, player) {
				return game
					.filterPlayer(target => {
						const evt = event.getl?.(target);
						return evt?.hs?.length && evt.hs.some(card => evt.gaintag_map?.[card.cardid]?.includes("old_clanxsyingxiang"));
					})
					.sortBySeat();
			},
			filter(event, player, name, target) {
				return true;
			},
			logTarget(event, player, name, target) {
				return target;
			},
			async content(event, trigger, player) {
				const drawer = [player, ...game.filterPlayer(i => i.hasCard(card => card.hasGaintag(event.name), "h")).sortBySeat()];
				await game.asyncDraw(drawer);
				if ((trigger.relatedEvent || trigger.getParent()).name !== "useCard") {
					const skill = "old_clanqingjue";
					if (!player.hasSkill("old_clanxsyingxiang_used") && player.countDiscardableCards(player, "h", card => !get.info(skill).isOnlySuit(card, player)) > 0) {
						player.logSkill(skill);
						player.addTempSkill(`${event.name}_used`, "roundStart");
						const next = game.createEvent(skill);
						next.player = player;
						next.setContent(get.info(skill).content);
						await next;
					}
				}
			},
			group: ["old_clanxsyingxiang_mark"],
			subSkill: {
				used: {
					charlotte: true,
				},
				mark: {
					audio: "clanxsyingxiang",
					forced: true,
					trigger: {
						global: ["gainEnd", "loseAsyncEnd"],
					},
					getIndex(event, player) {
						return game
							.filterPlayer(target => {
								if (target == player) {
									return false;
								}
								const gain = event.getg?.(target);
								const lose = event.getl?.(player)?.cards2;
								return (event.giver == player && gain.length) || gain.some(i => lose.includes(i));
							})
							.sortBySeat();
					},
					filter(event, player, name, target) {
						return target?.isIn();
					},
					logTarget(event, player, name, target) {
						return target;
					},
					async content(event, trigger, player) {
						const target = event.indexedData;
						const gain = trigger.getg?.(target);
						const lose = trigger.getl?.(player)?.cards2;
						const cards = lose.length ? gain.filter(i => lose.includes(i)) : gain;
						target.addGaintag(cards, "old_clanxsyingxiang");
					},
				},
			},
		},
		//魔孙权
		old_olquanyu: {
			audio: "olquanyu",
			map: {
				old_olquanyu_baihong: "白虹：伤害+1",
				old_olquanyu_qingmin: "青冥：多指定一个目标",
				old_olquanyu_bixie: "辟邪：无视防具",
				old_olquanyu_zidian: "紫电：不可响应",
				old_olquanyu_baili: "百里：多结算一次",
				old_olquanyu_liuxing: "流星：无次数限制",
			},
			intro: {
				markcount: () => 0,
				content(storage, player, skill) {
					const map = get.info("old_olquanyu").map;
					const record = player.getStorage("old_olquanyu_record");
					let str = "<li>本轮选择效果<br>";
					if (storage?.length) {
						str += map[storage];
					} else {
						str += "无";
					}
					str += `<br><br><li>已选择过的效果：${record.map(i => map[i].slice(0, 2)).join("、")}`;
					return str;
				},
			},
			trigger: {
				global: "roundStart",
			},
			logTarget(event, player) {
				return game.players;
			},
			forced: true,
			chooseButton(target, list, map) {
				const storage = target.getStorage("old_olquanyu_record");
				const choices = list.filter(i => !storage.includes(i));
				const next = target
					.chooseButton(
						[
							`权御：请选择一个效果`,
							[list.slice(0, 2).map(i => [i, map[i]]), "tdnodes"],
							[list.slice(2, 4).map(i => [i, map[i]]), "tdnodes"],
							[list.slice(4).map(i => [i, map[i]]), "tdnodes"],
							[
								dialog => {
									dialog.buttons.forEach(i => {
										i.style.setProperty("width", "200px", "important");
										i.style.setProperty("text-align", "left", "important");
									});
								},
								"handle",
							],
						],
						true
					)
					.set("choices", choices)
					.set("filterButton", button => get.event().choices.includes(button.link))
					.set("ai", button => Math.random())
					.set("_global_waiting", true);
				return next;
			},
			async content(event, trigger, player) {
				const { targets } = event;
				const name = "old_olquanyu_record";
				const map = get.info(event.name).map;
				const list = Object.keys(map);
				const result = await game.chooseAnyOL(targets.filter(target => target.getStorage(name).length < 6).sortBySeat(), get.info(event.name).chooseButton, [list, map]).forResult();
				let num = 0,
					me;
				if (result.has(player)) {
					const resultx = result.get(player);
					if (resultx?.links?.length) {
						me = resultx.links[0];
					}
				}
				for (const [target, resultx] of result.entries()) {
					if (resultx?.links?.length) {
						const {
							links: [link],
						} = resultx;
						target.markAuto(name, link);
						target.setStorage(event.name, link);
						target.markSkill(event.name);
						target.popup(map[link].slice(0, 2));
						if (link == me) {
							num++;
						}
						target
							.when("roundStart")
							.filter(evt => evt != trigger)
							.step(async (event, trigger, player) => {
								delete player.storage["old_olquanyu"];
								player.markSkill("old_olquanyu");
							});
					}
				}
				if (num > 0) {
					await player.draw(Math.min(num, 3));
				}
			},
			group: "old_olquanyu_effect",
			subSkill: {
				effect: {
					trigger: { player: "useCardToPlayer" },
					filter(event, player) {
						if (event.card.name != "sha" || event.targets?.length != 1) {
							return false;
						}
						return player.storage.old_olquanyu?.length;
					},
					actionMap: {
						old_olquanyu_baihong: async (trigger, player) => {
							trigger.baseDamage ??= 1;
							trigger.baseDamage++;
							game.log(trigger.card, "基础伤害+1");
						},
						old_olquanyu_qingmin: async (trigger, player) => {
							const check = (card, player, target) => {
								const trigger = get.event().getTrigger();
								return !trigger.targets.includes(target) && lib.filter.targetEnabled2(card, player, target) && lib.filter.targetInRange(card, player, target);
							};
							if (game.hasPlayer(target => check(trigger.card, player, target))) {
								const result = await player
									.chooseTarget(`权御：为${get.translation(trigger.card)}额外选择一个目标`, check)
									.set("_get_card", trigger.card)
									.set("ai", target => get.effect(target, get.card(), get.player(), get.player()))
									.forResult();
								if (result?.targets?.length) {
									const { targets } = result;
									player.line(targets);
									trigger.targets.addArray(targets);
									game.log(targets, "也成为", trigger.card, "的目标");
								}
							}
						},
						old_olquanyu_bixie: async (trigger, player) => {
							trigger.card.storage.old_olquanyu_effect = true;
							game.log(trigger.card, "无视防具");
						},
						old_olquanyu_zidian: async (trigger, player) => {
							trigger.directHit.addArray(game.players);
							game.log(trigger.card, "不可被响应");
						},
						old_olquanyu_baili: async (trigger, player) => {
							trigger.effectCount++;
							game.log(trigger.card, "额外结算一次");
						},
						old_olquanyu_liuxing: async (trigger, player) => {
							if (trigger.addCount !== false) {
								trigger.addCount = false;
								const stat = player.getStat().card,
									name = trigger.card.name;
								if (typeof stat[name] == "number") {
									stat[name]--;
								}
								game.log(trigger.card, "不计入次数");
							}
						},
					},
					forced: true,
					async content(event, trigger, player) {
						const map = get.info(event.name).actionMap;
						await map[player.storage.old_olquanyu](trigger.getParent(), player);
					},
					mod: {
						cardUsable(card, player, num) {
							if (card.name == "sha" && player.storage.old_olquanyu == "old_olquanyu_liuxing") {
								return Infinity;
							}
						},
					},
					ai: {
						unequip: true,
						skillTagFilter(player, tag, arg) {
							if (tag == "unequip" && !arg?.card?.storage?.old_olquanyu_effect) {
								return false;
							}
						},
					},
				},
			},
		},
		old_oltianen: {
			audio: "oltianen",
			forced: true,
			trigger: {
				player: "useCardToPlayered",
			},
			filter(event, player) {
				return event.targets.length === 1;
			},
			logTarget: "target",
			async content(event, trigger, player) {
				const {
					targets: [target],
				} = event;
				const bool = player.storage.old_olquanyu == target.storage.old_olquanyu;

				if (!bool) {
					await target.randomDiscard().set("discarder", player);
					const result = {
						skill: "old_olquanyu",
						targets: [target],
					};
					await player.useResult(result, event);
				} else {
					if (target != player) {
						player.tempBanSkill(event.name);
					}
					const card = get.cardPile2("sha");
					if (card) {
						player.addSkill("old_oltianen_effect");
						const next = player.gain(card, "gain2");
						next.gaintag.add("old_oltianen");
						await next;
					} else {
						player.chat("我的王之力啊！");
					}
				}
			},
			subSkill: {
				effect: {
					charlotte: true,
					mod: {
						ignoredHandcard(card, player) {
							if (card.hasGaintag("old_oltianen")) {
								return true;
							}
						},
						cardDiscardable(card, player, name) {
							if (name == "phaseDiscard" && card.hasGaintag("old_oltianen")) {
								return false;
							}
						},
					},
				},
			},
			ai: {
				combo: "old_olquanyu",
			},
		},
		old_olqiangang: {
			audio: "olqiangang",
			derivation: ["olrumo"],
			enable: "phaseUse",
			filter(event, player) {
				return !player.hasSkill("olrumo");
			},
			skillAnimation: true,
			animationColor: "wood",
			async content(event, trigger, player) {
				player.addSkill("olrumo");
				await player.removeSkills("old_oltianen");
				player.addSkill(`${event.name}_effect`);
			},
			subSkill: {
				effect: {
					charlotte: true,
					trigger: { player: "useCard" },
					filter(event, player) {
						return event.card.name == "sha" && event.targets.length == 1 && event.targets[0].getStorage("old_olquanyu_record").length > 0;
					},
					async cost(event, trigger, player) {
						const choices = trigger.targets[0].getStorage("old_olquanyu_record");
						const map = get.info("old_olquanyu").map;
						const list = Object.keys(map);
						/*const result = await player
							.chooseButton(
								[
									`乾纲：请选择要额外执行的“权御”效果`,
									[list.slice(0, 2).map(i => [i, map[i]]), "tdnodes"],
									[list.slice(2, 4).map(i => [i, map[i]]), "tdnodes"],
									[list.slice(4).map(i => [i, map[i]]), "tdnodes"],
									[
										dialog => {
											dialog.buttons.forEach(i => {
												i.style.setProperty("width", "200px", "important");
												i.style.setProperty("text-align", "left", "important");
											});
										},
										"handle",
									],
								],
								[1, 6]
							)
							.set("choices", choices)
							.set("filterButton", button => {
								if (!get.event().choices.includes(button.link)) {
									return false;
								}
								if (button.link == "old_olquanyu_qingmin") {
									const trigger = get.event().getTrigger();
									const card = trigger.card;
									const player = get.player();
									return game.hasPlayer(target => !trigger.targets.includes(target) && lib.filter.targetEnabled2(card, player, target) && lib.filter.targetInRange(card, player, target));
								}
								return true;
							})
							.set("ai", button => {
								const trigger = get.event().getTrigger();
								const card = trigger.card;
								const player = get.player();
								if (button.link == "old_olquanyu_qingmin") {
									if (!game.hasPlayer(target => !trigger.targets.includes(target) && get.effect(target, card, player, player) > 0)) {
										return 0;
									}
								}
								return 1;
							})
							.forResult();*/
						event.result = { bool: true, cost_data: choices };
					},
					async content(event, trigger, player) {
						const { cost_data: list } = event;
						const map = get.info("old_olquanyu_effect").actionMap;
						for (const i of list) {
							await map[i](trigger, player);
						}
					},
				},
			},
			ai: {
				combo: "old_olquanyu",
				order: 6,
				result: {
					player(player) {
						if (game.hasPlayer(target => get.attitude(player, target) < 0 && target.getStorage("old_olquanyu_record").length > 3)) {
							return 1;
						}
						return 0;
					},
				},
			},
		},

		//任婉
		old_dcjuanji: {
			trigger: {
				player: ["phaseUseBegin", "phaseDrawBegin", "phaseDiscardBegin"],
			},
			filter(event, player) {
				if (event.name == "phaseUse") {
					const card = new lib.element.VCard({ name: "sha" });
					return player.hasUseTarget(card, false);
				}
				if (event.name == "phaseDiscard") {
					return player.countCards("h") != player.getHandcardLimit();
				}
				return true;
			},
			audio: "dcjuanji",
			async cost(event, trigger, player) {
				const name = trigger.name.slice(5);
				event.result =
					name == "Draw"
						? await player.chooseBool(get.prompt(event.skill)).set("prompt2", "摸体力上限张牌").forResult()
						: name == "Use"
							? await player
									.chooseTarget(get.prompt(event.skill))
									.set("prompt2", "失去1点体力并视为对一名角色使用一张【杀】")
									.set("filterTarget", (event, player, target) => {
										const card = new lib.element.VCard({ name: "sha" });
										return player.canUse(card, target, false);
									})
									.set("ai", target => {
										const card = new lib.element.VCard({ name: "sha" }),
											player = get.player(),
											eff1 = get.effect(target, card, player, player),
											eff2 = get.effect(player, { name: "losehp" }, player, player);
										return Math.max(0, eff1 - eff2);
									})
									.forResult()
							: await player
									.chooseCardTarget({
										filterCard(card, player) {
											const num = get.event().numx;
											return num > 0 && lib.filter.cardDiscardable(card, player, "old_dcjuanji");
										},
										prompt: get.prompt(event.skill),
										prompt2: "将手牌调整至手牌上限，然后弃置一名角色区域里至多两张牌",
										numx: player.countCards("h") - player.getHandcardLimit(),
										selectCard() {
											const num = get.event().numx;
											if (num > 0) {
												return num;
											}
											return -1;
										},
										filterTarget(card, player, target) {
											return player == target || target.countCards("hej");
										},
										ai1(card) {
											return 10 - get.value(card);
										},
										ai2(target) {
											const player = get.player();
											return get.effect(target, { name: "guohe" }, player, player);
										},
									})
									.forResult();
			},
			async content(event, trigger, player) {
				const name = trigger.name.slice(5);
				if (name == "Draw") {
					await player.draw(player.maxHp);
				} else if (name == "Use") {
					const {
						targets: [target],
					} = event;
					const card = new lib.element.VCard({ name: "sha" });
					await player.loseHp();
					await player.useCard(card, target, false);
				} else {
					const {
						cards,
						targets: [target],
					} = event;
					if (cards?.length) {
						await player.discard(cards);
					} else {
						await player.drawTo(player.getHandcardLimit());
					}
					if (target.countCards("hej")) {
						await player.discardPlayerCard(target, "hej", [1, 2], true);
					}
				}
			},
		},
		old_dcrenshuang: {
			trigger: {
				player: ["dying", "dyingAfter"],
			},
			audio: "dcrenshuang",
			filter(event, player, name) {
				if (name == "dyingAfter") {
					return player.isIn();
				}
				return game.getRoundHistory("everything", evt => evt.name == "dying" && evt.player == player).indexOf(event) == 0;
			},
			forced: true,
			async content(event, trigger, player) {
				if (event.triggername == "dying") {
					await player.recoverTo(1);
					if (player.getAllHistory("custom", evt => evt.old_dcrenshuang).length < 3) {
						player.getHistory("custom").push({
							old_dcrenshuang: true,
						});
						await player.gainMaxHp();
					}
				} else {
					await player.link(false);
					await player.turnOver(false);
					const cards = get.inpileVCardList(info => info[0] == "trick" && player.hasUseTarget(info[2]));
					if (!cards?.length) {
						return;
					}
					const result = await player
						.chooseButton(["纫霜：选择要视为使用的牌", [cards, "vcard"]], true)
						.set("ai", button => {
							return get.player().getUseValue(button.link[2]);
						})
						.forResult();
					if (result?.bool) {
						const card = new lib.element.VCard({ name: result.links[0][2] });
						if (player.hasUseTarget(card)) {
							await player.chooseUseTarget(card, true);
						}
					}
				}
			},
		},
		//新杀谋邓艾
		old_dcsbzhouxi: {
			audio: "dcsbzhouxi",
			enable: "phaseUse",
			usable: 1,
			filterCard(card, player, event) {
				return game.players.every(current => current == player || !player.canUse(card, current, true, true));
			},
			filter(event, player) {
				return player.countCards("h", card => get.info("old_dcsbzhouxi")?.filterCard(card, player, event));
			},
			selectCard: -1,
			manualConfirm: true,
			position: "h",
			async content(event, trigger, player) {
				let num = Math.min(3, event.cards.length),
					select = [];
				const bool1 =
						game.countPlayer(current => {
							return player.canUse("shunshou", current, true) && get.effect(current, { name: "shunshou" }, player, player) > 0;
						}) < num,
					bool2 = game.hasPlayer(current => {
						return player.canUse("shunshou", current, false) && get.distance(player, current) == 2 && get.effect(current, { name: "shunshou" }, player, player) > 0;
					});
				while (num > 0) {
					num--;
					const choiceList = [`计算与其他角色距离-${select.length + 1}`, `视为对至多${select.length + 1}名角色使用【顺手牵羊】`, `视为对至多${select.length + 1}名角色使用【杀】`],
						controls = ["选项一", "选项二", "选项三"];
					for (const chosen of select) {
						const index = controls.indexOf(chosen);
						choiceList[index] = `<span style="opacity:0.5;">${choiceList[index]}</span>`;
					}
					const result = await player
						.chooseControl(controls.removeArray(select))
						.set("prompt", `骤袭：请选择一项（还可选择${num}项）`)
						.set("choiceList", choiceList)
						.set("ai", () => {
							return get.event().res;
						})
						.set(
							"res",
							(() => {
								if (controls.includes("选项一") && (num > 1 || (num > 0 && bool1 && bool2))) {
									return "选项一";
								}
								return controls[controls.length - 1];
							})()
						)
						.forResult();
					const control = result.control;
					select.push(control);
					game.log(player, "选择了", `#g${choiceList[["选项一", "选项二", "选项三"].indexOf(control)]}`);
				}
				let count = 0;
				while (select.length) {
					let result = select.shift();
					switch (result) {
						case "选项一": {
							player.addTempSkill("old_dcsbzhouxi_range");
							player.addMark("old_dcsbzhouxi_range", count, false);
							count++;
							break;
						}
						case "选项二": {
							const card = new lib.element.VCard({ name: "shunshou" });
							if (player.hasUseTarget(card)) {
								count++;
								await player.chooseUseTarget(card, [1, count], true);
							}
							break;
						}
						case "选项三": {
							const card = new lib.element.VCard({ name: "sha" });
							if (player.hasUseTarget(card)) {
								count++;
								await player.chooseUseTarget(card, [1, count], true, false);
							}
							break;
						}
					}
				}
				if (count >= 3) {
					if (player.getStat("skill")[event.name]) {
						delete player.getStat("skill")[event.name];
						game.log(player, "重置了", "#g【骤袭】");
					}
				}
			},
			subSkill: {
				range: {
					charlotte: true,
					onremove: true,
					intro: {
						markcount(storage) {
							return storage ? `-${storage}` : null;
						},
						content: "计算与其他角色距离-#",
					},
					mod: {
						globalFrom(from, to, num) {
							return num - from.countMark("old_dcsbzhouxi_range");
						},
					},
				},
			},
			ai: {
				order: 6,
				result: {
					player(player) {
						if (
							game.hasPlayer(current => {
								if (get.distance(player, current) > 2 || get.effect(current, { name: "shunshou" }, player, player) <= 0) {
									return false;
								}
								return player.canUse("shunshou", current, false) || player.canUse("sha", current, false);
							})
						) {
							if (player.hasSkill("old_dcsbshijin") && !player.getStorage("old_dcsbshijin", false)) {
								const num = player.countCards("h", card => get.info("old_dcsbzhouxi")?.filterCard(card, player, get.event()));
								if (num < 3 && player.getHistory("sourceDamage").length) {
									return 0;
								}
							}
							return 1;
						}
						return 0;
					},
				},
			},
		},
		old_dcsbshijin: {
			audio: "dcsbshijin",
			enable: "phaseUse",
			manualConfirm: true,
			limited: true,
			skillAnimation: true,
			animationColor: "thunder",
			onChooseToUse(event) {
				if (!game.online && !event.shijin_record) {
					event.set("shijin_record", event.player.getHistory("sourceDamage"));
				}
			},
			filter(event, player) {
				return event.shijin_record?.length;
			},
			async content(event, trigger, player) {
				player.awakenSkill(event.name);
				let cards = [];
				while (true) {
					const card = get.cardPile(card => cards.every(cardx => get.type2(cardx) != get.type2(card)));
					if (card) {
						cards.push(card);
					} else {
						break;
					}
				}
				if (cards.length) {
					await player.gain(cards, "gain2");
				}
				player.addTempSkill("old_dcsbshijin_defend", { player: "phaseBeginStart" });
				player
					.when({
						player: "phaseBegin",
					})
					.step(async (event, trigger, player) => {
						const cards = player.getDiscardableCards(player, "h").filter(card => {
							return get.name(card) == "sha" || get.type2(card) == "trick";
						});
						if (cards.length) {
							await player.discard(cards);
							await player.loseHp(cards.length);
						} else {
							player.restoreSkill("old_dcsbshijin");
							game.log(player, "重置了", "#g【恃矜】");
						}
					});
			},
			ai: {
				order: 5,
				result: {
					player: 1,
				},
			},
			subSkill: {
				defend: {
					charlotte: true,
					mark: true,
					intro: {
						content: "受到伤害时，防止之并摸一张牌",
					},
					trigger: {
						player: "damageBegin3",
					},
					forced: true,
					locked: false,
					async content(event, trigger, player) {
						trigger.cancel();
						await player.draw();
					},
					ai: {
						filterDamage: true,
						skillTagFilter(player, tag, arg) {
							if (arg.player.hasSkillTag("jueqing", false, player)) {
								return false;
							}
						},
					},
				},
			},
		},
		//谋胡烈
		old_dcsbchuanyu: {
			audio: "dcsbchuanyu",
			trigger: { global: ["roundStart", "roundEnd"] },
			filter(event, player, name) {
				if (name == "roundStart") {
					return true;
				}
				return player.getStorage("old_dcsbchuanyu").some(target => target.isIn());
			},
			async cost(event, trigger, player) {
				if (event.triggername == "roundStart") {
					event.result = await player
						.chooseBool(`###${get.prompt(event.skill)}###摸一张牌然后交给一名角色一张牌，称为「舆」`)
						.set("ai", () => true)
						.forResult();
				} else {
					event.result = await player
						.chooseTarget(`###${get.prompt(event.skill)}###本轮所有获得过「舆」的角色依次视为对你指定的一名角色使用【杀】(不限距离），然后弃置所有「舆」`)
						.set("ai", target => {
							return get.effect(target, { name: "sha" }, get.player(), get.player());
						})
						.forResult();
				}
			},
			async content(event, trigger, player) {
				if (event.triggername == "roundStart") {
					await player.draw();
					if (!player.storage[event.name]) {
						player
							.when({ global: "roundStart" })
							.filter(evt => evt != trigger)
							.step(async () => {
								player.unmarkSkill("old_dcsbchuanyu");
								delete player.storage.old_dcsbchuanyu;
							});
					}
					const result = await player
						.chooseCardTarget({
							prompt: "传舆：将一张牌交给一名角色",
							filterCard: true,
							forced: true,
							filterTarget: true,
							ai1(card) {
								return 1 / Math.max(0.1, get.value(card));
							},
							ai2(target) {
								var player = _status.event.player,
									att = get.attitude(player, target);
								if (target.hasSkillTag("nogain")) {
									att /= 9;
								}
								return 4 + att;
							},
						})
						.forResult();
					if (result?.bool) {
						const cards = result.cards,
							target = result.targets[0];
						player.line(target);
						player.markAuto(event.name, target);
						//player.markAuto(event.name+"_card",cards);
						if (target == player) {
							player.addGaintag(cards, event.name + "_tag");
						} else {
							await player.give(cards, target).set("gaintag", [event.name + "_tag"]);
						}
					}
				} else {
					const use = player
							.getStorage("old_dcsbchuanyu")
							.filter(target => target.isIn())
							.sortBySeat(),
						card = get.autoViewAs({ name: "sha", isCard: true }),
						target = event.targets[0];
					while (use.length) {
						const source = use.shift();
						if (source.canUse(card, target, false, false)) {
							await source.useCard(card, target, false);
						}
					}
					const lose_list = [];
					game.players.forEach(target => {
						const cards = target.getCards("h", card => card.hasGaintag(event.name + "_tag"));
						if (cards.length) {
							lose_list.push([target, cards]);
						}
					});
					await game
						.loseAsync({
							lose_list: lose_list,
							discarder: player,
						})
						.setContent("discardMultiple");
				}
			},
			intro: {
				content: "本轮获得过「舆」的角色：$",
			},
			group: ["old_dcsbchuanyu_give"],
			subSkill: {
				give: {
					audio: "dcsbchuanyu",
					trigger: { global: ["cardsDiscardAfter"] },
					filter(event, player) {
						return lib.skill.old_dcsbchuanyu_give.getCards(event, player).length > 0 && game.hasPlayer(target => !player.getStorage("old_dcsbchuanyu").includes(target));
					},
					getCards(event, player) {
						const evt = event.getParent();
						if (evt.name !== "orderingDiscard") {
							return [];
						}
						const evt2 = evt.relatedEvent || evt.getParent();
						if (evt2.name != "useCard") {
							return [];
						}
						const lose = evt2.childEvents.find(evtx => evtx.type == "use"),
							cards = event.getd?.()?.filter(card => lose?.gaintag_map?.[card.cardid]?.includes("old_dcsbchuanyu_tag"));
						return cards;
					},
					async cost(event, trigger, player) {
						const cards = lib.skill.old_dcsbchuanyu_give.getCards(trigger, player);
						event.result = await player
							.chooseTarget(`###${get.prompt(event.skill)}###将${get.translation(cards)}交给本轮未获得过「舆」的一名角色`, (card, player, target) => {
								return !player.getStorage("old_dcsbchuanyu").includes(target);
							})
							.set("ai", target => {
								const player = get.player(),
									val = get.event().val;
								if (val > 5) {
									return get.attitude(player, target);
								}
								return -get.attitude(player, target);
							})
							.set("val", Math.max(...cards.map(card => get.value(card))))
							.forResult();
					},
					async content(event, trigger, player) {
						const target = event.targets[0],
							cards = lib.skill.old_dcsbchuanyu_give.getCards(trigger, player);
						player.markAuto("old_dcsbchuanyu", target);
						await target.gain(cards, "gain2").set("gaintag", ["old_dcsbchuanyu_tag"]);
					},
				},
			},
		},
		old_dcsbyitou: {
			audio: "dcsbyitou",
			trigger: { global: "phaseUseBegin" },
			filter(event, player) {
				return event.player != player && event.player.isMaxHandcard() && player.countCards("h");
			},
			check(event, player) {
				if (player.countCards("h", card => get.value(card) - 5) < 1) {
					return true;
				}
				return get.attitude(player, event.player) > 0;
			},
			logTarget: "player",
			async content(event, trigger, player) {
				const target = trigger.player;
				player.addTempSkill(event.name + "_effect", { player: "phaseBegin" });
				player.markAuto(event.name + "_effect", target);
				await player.give(player.getCards("h"), target);
			},
			subSkill: {
				effect: {
					audio: "dcsbyitou",
					onremove: true,
					charlotte: true,
					forced: true,
					trigger: { global: "damageSource" },
					filter(event, player) {
						return player.getStorage("old_dcsbyitou_effect").includes(event.source);
					},
					async content(event, trigger, player) {
						await player.draw();
					},
					intro: {
						content: "players",
					},
				},
			},
		},
		//新杀滕芳兰
		old_dcaichen: {
			audio: "dcaichen",
			init(player) {
				game.addGlobalSkill("old_dcaichen_hit");
			},
			onremove(player) {
				if (!game.hasPlayer(current => current.hasSkill("old_dcaichen", null, null, false), true)) {
					game.removeGlobalSkill("old_dcaichen_hit");
				}
			},
			trigger: {
				player: ["loseAfter", "phaseDiscardBefore"],
				target: "useCardToTargeted",
			},
			filter(event, player, name) {
				if (event.name == "phaseDiscard") {
					return ui.cardPile.childNodes.length > 40;
				}
				if (name == "useCardToTargeted") {
					return ui.cardPile.childNodes.length < 40 && get.suit(event.card) == "spade";
				}
				const evt = event.getParent(2);
				if (evt.name != "dcluochong" || evt.player != player) {
					return false;
				}
				if (!event.getl(player).cards.length) {
					return false;
				}
				return ui.cardPile.childNodes.length > 80;
			},
			forced: true,
			content() {
				if (trigger.name.indexOf("lose") == 0) {
					player.draw(2);
				} else if (trigger.name == "phaseDiscard") {
					trigger.cancel();
					game.log(player, "跳过了弃牌阶段");
				} else {
					trigger.directHit.add(player);
					game.log(player, "不可响应", trigger.card);
				}
			},
			subSkill: {
				hit: {
					trigger: { player: "dieAfter" },
					filter(event, player) {
						return !game.hasPlayer(current => current.hasSkill("old_dcaichen", null, null, false), true);
					},
					silent: true,
					forceDie: true,
					content() {
						game.removeGlobalSkill("old_dcaichen_hit");
					},
					ai: {
						directHit_ai: true,
						skillTagFilter(player, tag, arg) {
							return arg && arg.card && arg.target && arg.target.hasSkill("old_dcaichen") && ui.cardPile.childNodes.length < 40 && get.suit(arg.card) === "spade";
						},
					},
				},
			},
		},
		//贱·陈珪 搬自活动武将
		old_yingtu: {
			audio: "dcyingtu",
			trigger: { global: ["gainAfter", "loseAsyncAfter"] },
			filter(event, player) {
				return lib.skill.dcyingtu.filterx(event, player, player.getPrevious());
			},
			logTarget: (evnet, player) => player.getPrevious(),
			check(event, player) {
				return lib.skill.dcyingtu.check(player, player.getPrevious());
			},
			content() {
				"step 0";
				var target = player.getPrevious();
				var num = trigger.getg(target).length;
				event.num = num;
				player.gainPlayerCard(target, true, "he", num);
				("step 1");
				var he = player.getCards("he");
				if (he.length) {
					var target = player.getNext();
					event.target = target;
					if (he.length <= num) event._result = { bool: true, cards: he };
					else player.chooseCard("he", true, num, "交给" + get.translation(target) + get.cnNumber(num) + "张牌");
				} else event.finish();
				("step 2");
				if (result.bool) {
					player.line(target);
					player.give(result.cards, target);
				}
			},
			group: "old_yingtu_next",
			global: "old_yingtu_ai",
			subSkill: {
				next: {
					audio: "dcyingtu",
					trigger: { global: "useCardToPlayer" },
					filter(event, player) {
						if (event.player != player.getNext() || !event.isFirstTarget) return false;
						if (event.card.name != "sha" && event.card.name != "juedou") return false;
						return !event.targets.includes(player) && !event.targets.includes(player.getPrevious()) && event.player.canUse(event.card, player.getPrevious(), false);
					},
					logTarget: (evnet, player) => player.getNext(),
					line: false,
					check(event, player) {
						var sum = event.targets.reduce((num, target) => {
							return num + get.effect(target, event.card, event.player, player);
						}, 0);
						return sum < get.effect(player.getPrevious(), event.card, event.player, player);
					},
					prompt2(event, player) {
						return "将" + get.translation(event.card) + "转移给" + get.translation(player.getPrevious());
					},
					content() {
						"step 0";
						var targets = trigger.targets.slice();
						player.line2([player.getNext(), player.getPrevious()]);
						trigger.targets.removeArray(targets);
						trigger.getParent().triggeredTargets1.removeArray(targets);
						trigger.untrigger();
						trigger.targets.push(player.getPrevious());
						("step 1");
						game.delayx();
					},
				},
				ai: {
					ai: {
						effect: {
							player_use(card, player, target) {
								if (!player.getPrevious().hasSkill("old_yingtu")) return;
								if (card.name != "sha" && card.name != "juedou") return;
								var range;
								var select = get.copy(get.info(card).selectTarget);
								if (select == undefined) {
									if (get.info(card).filterTarget == undefined) return false;
									range = [1, 1];
								} else if (typeof select == "number") range = [select, select];
								else if (get.itemtype(select) == "select") range = select;
								else if (typeof select == "function") range = select(card, player);
								game.checkMod(card, player, range, "selectTarget", player);
								var targets = game.filterPlayer(targetx => player.canUse(card, targetx));
								if (range[1] != -1) {
									targets = targets.filter(targetx => get.effect(targetx, card, player, player) > 0);
									targets.sort((a, b) => get.effect(b, card, player, player) - get.effect(a, card, player, player));
									targets = targets.slice(0, range[1]);
								}
								if (targets.includes(player.getPrevious().getPrevious())) return;
								var sum = targets.reduce((num, targetx) => {
									return num + get.effect(targetx, card, player, player.getPrevious());
								}, 0);
								if (sum < get.effect(player.getPrevious().getPrevious(), card, player, player.getPrevious())) return "zeroplayertarget";
							},
						},
					},
				},
			},
		},
		old_congshi: {
			global: "old_congshi_use",
			audio: "dccongshi",
			trigger: { global: "damageSource" },
			filter(event, player) {
				if (!event.card || !event.card.old_congshi || player.isHealthy()) return false;
				return event.card.old_congshi[player.playerid] && event.card.old_congshi[player.playerid].includes(event.player);
			},
			forced: true,
			content() {
				player.recover();
			},
			subSkill: {
				use: {
					mod: {
						targetInRange(card, player, target) {
							if (_status.CongShiCheck || !player.isMaxHp()) return;
							if (!target.getPrevious().hasSkill("old_congshi") && !target.getNext().hasSkill("old_congshi")) return;
							return true;
						},
					},
					trigger: { player: "useCard1" },
					filter(event, player) {
						if (!event.targets || !event.targets.length || !player.isMaxHp()) return false;
						var targets = event.targets.filter(target => target.getPrevious().hasSkill("old_congshi") || target.getNext().hasSkill("old_congshi"));
						if (!targets.length) return false;
						return targets.some(target => {
							if (!player.canUse(event.card, target)) return false;
							_status.CongShiCheck = true;
							if (!player.canUse(event.card, target)) {
								delete _status.CongShiCheck;
								return true;
							} else {
								delete _status.CongShiCheck;
								return false;
							}
						});
					},
					firstDo: true,
					priority: 11 + 45 + 14,
					forced: true,
					popup: false,
					content() {
						var targetx = trigger.targets.filter(target => {
							if (!target.getPrevious().hasSkill("old_congshi") && !target.getNext().hasSkill("old_congshi")) return false;
							if (!player.canUse(trigger.card, target)) return false;
							_status.CongShiCheck = true;
							if (!player.canUse(trigger.card, target)) {
								delete _status.CongShiCheck;
								return true;
							} else {
								delete _status.CongShiCheck;
								return false;
							}
						});
						var targets = game.filterPlayer(current => {
							if (!targetx.some(target => current == target.getPrevious() || current == target.getNext())) return false;
							return current.hasSkill("old_congshi");
						});
						trigger.card.old_congshi = {};
						targets.forEach(target => (trigger.card.old_congshi[target.playerid] = targetx.filter(current => current == target.getPrevious() || current == target.getNext())));
					},
				},
			},
		},
		//界徐庶
		old_rezhuhai: {
			audio: "rezhuhai",
			trigger: {
				global: "phaseJieshuBegin",
			},
			direct: true,
			filter(event, player) {
				return player != event.player && event.player.getHistory("sourceDamage").length > 0 && event.player.isIn() && (player.canUse("sha", event.player, false) || player.canUse("guohe", event.player));
			},
			content() {
				"step 0";
				var target = trigger.player;
				var choiceList = ["视为对其使用一张【杀】", "视为对其使用一张【过河拆桥】"];
				var choices = [];
				if (player.canUse("sha", target, false)) choices.push("选项一");
				else choiceList[0] = "<span style='opacity:0.5'>" + choiceList[0] + "</span>";
				if (player.canUse("guohe", target)) choices.push("选项二");
				else choiceList[1] = "<span style='opacity:0.5'>" + choiceList[1] + "</span>";
				choices.push("cancel2");
				player
					.chooseControl(choices)
					.set("choiceList", choiceList)
					.set("prompt", get.prompt("old_rezhuhai", target))
					.set("ai", function () {
						var choices = _status.event.controls;
						var eff1 = 0,
							eff2 = 0;
						var player = _status.event.player,
							target = _status.event.getTrigger().player;
						if (choices.contains("选项一")) eff1 = get.effect(target, { name: "sha" }, player, player);
						if (choices.contains("选项二")) eff2 = get.effect(target, { name: "guohe" }, player, player);
						if (eff1 > 0 && ((player.hasSkill("xsqianxin") && player.isDamaged()) || eff1 > eff2)) return "选项一";
						if (eff2 > 0) return "选项二";
						return "cancel2";
					});
				("step 1");
				if (result.control != "cancel2") {
					if (result.control == "选项一") {
						player.useCard({ name: "sha", isCard: true }, trigger.player, false, "old_rezhuhai");
					} else {
						player.useCard({ name: "guohe", isCard: true }, trigger.player, "old_rezhuhai");
						event.finish();
					}
				}
			},
		},
		//乐綝
		old_dcporui: {
			audio: "dcporui",
			trigger: {
				global: "phaseJieshuBegin",
			},
			filter(event, player) {
				if (player == event.player) return false;
				if (player.countMark("old_dcporui_round") >= 1) return false;
				return (
					game.hasPlayer(current => {
						if (current == player || current == event.player) return false;
						return current.hasHistory("lose", function (evt) {
							return evt.cards.length > 0;
						});
					}) &&
					(_status.connectMode || player.hasCard({ type: "basic" }, "h"))
				);
			},
			direct: true,
			content() {
				"step 0";
				player.chooseCardTarget({
					prompt: get.prompt("old_dcporui"),
					prompt2: "弃置一张基本牌并选择一名本回合失去过牌的非当前回合的其他角色，你视为对其依次使用" + get.cnNumber(Math.max(0, player.hp) + 1) + "张【杀】",
					filterCard(card) {
						return get.type(card) == "basic";
					},
					selectCard: 1,
					position: "h",
					list: game.filterPlayer(current => {
						if (current == player || current == trigger.player) return false;
						return current.hasHistory("lose", function (evt) {
							return evt.cards.length > 0;
						});
					}),
					filterTarget(card, player, target) {
						return target.hasHistory("lose", function (evt) {
							return evt.cards.length > 0;
						});
					},
					ai1(card) {
						return 7 - get.value(card);
					},
					ai2(target) {
						return get.effect(target, { name: "sha" }, _status.event.player, _status.event.player);
					},
				});
				("step 1");
				if (result.bool) {
					var target = result.targets[0],
						cards = result.cards;
					event.target = target;
					player.logSkill("old_dcporui", target);
					player.discard(cards);
					event.num2 = Math.max(0, player.hp);
					event.num = Math.max(0, player.hp) + 1;
					player.addTempSkill("old_dcporui_round", "roundStart");
					player.addMark("old_dcporui_round", 1, false);
				} else event.finish();
				("step 2");
				var card = { name: "sha", isCard: true, storage: { old_dcporui: true } };
				if (player.canUse(card, target, false) && target.isIn()) {
					player.useCard(card, target);
					event.num--;
				} else event.goto(4);
				("step 3");
				if (event.num > 0) event.goto(2);
				("step 4");
				if (!player.hasMark("old_dcgonghu_damage")) {
					var cards = player.getCards("h");
					if (cards.length == 0) event._result = { bool: false };
					else if (cards.length <= event.num2) event._result = { bool: true, cards: cards };
					else player.chooseCard("破锐：交给" + get.translation(target) + get.cnNumber(event.num2) + "张手牌", true, event.num2);
				} else event.finish();
				("step 5");
				if (result.bool) {
					player.give(result.cards, target);
				}
				event.finish();
				("step 6");
				if (player.hasMark("old_dcgonghu_basic")) {
					if (
						!target.hasHistory("damage", evt => {
							return evt.card && evt.card.storage && evt.card.storage.old_dcporui && evt.getParent("old_dcporui") == event;
						})
					) {
						player.recover();
					}
				}
			},
			subSkill: {
				round: {
					charlotte: true,
					onremove: true,
				},
			},
			ai: {
				expose: 0.4,
				threaten: 3.8,
			},
		},
		old_dcgonghu: {
			audio: "dcgonghu",
			trigger: {
				player: ["loseAfter", "damageEnd"],
				source: "damageSource",
				global: ["equipAfter", "addJudgeAfter", "gainAfter", "loseAsyncAfter", "addToExpansionAfter"],
			},
			forced: true,
			filter(event, player) {
				if (!_status.currentPhase || _status.currentPhase == player) return false;
				if (event.name == "damage") {
					if (player.hasMark("old_dcgonghu_damage")) return false;
					return true;
				}
				if (player.hasMark("old_dcgonghu_basic")) return false;
				if (_status.currentPhase && _status.currentPhase == player) return false;
				var evt = event.getl(player);
				if (!evt || !evt.cards2 || !evt.cards2.some(i => get.type2(i, player) == "basic")) return false;
				return true;
			},
			group: ["old_dcgonghu_basic", "old_dcgonghu_trick"],
			content() {
				player.addMark("old_dcgonghu_" + (trigger.name == "damage" ? "damage" : "basic"), 1, false);
			},
			mark: true,
			intro: {
				onunmark: true,
				content(storage, player) {
					var str = "";
					if (!player.hasMark("old_dcgonghu_damage") && !player.hasMark("old_dcgonghu_basic")) return "";
					if (player.hasMark("old_dcgonghu_basic")) str += "已于回合外失去过基本牌，若“破锐”使用【杀】未造成伤害则回复一点体力。<br>";
					if (player.hasMark("old_dcgonghu_damage")) str += "已于回合外造成/受到过伤害，“破锐”使用【杀】后无需给牌。<br>";
					if (player.hasMark("old_dcgonghu_basic") && player.hasMark("old_dcgonghu_damage")) str += "已达成全部条件，使用红色基本牌不可被响应，红色锦囊牌可多指定一个目标。";

					return str;
				},
			},
			subSkill: {
				trick: {
					audio: "dcgonghu",
					trigger: {
						player: "useCard2",
					},
					direct: true,
					locked: true,
					filter(event, player) {
						if (!player.hasMark("old_dcgonghu_basic") || !player.hasMark("old_dcgonghu_damage")) return false;
						var card = event.card;
						if (get.color(card, false) != "red" || get.type(card, null, true) != "trick") return false;
						var info = get.info(card);
						if (info.allowMultiple == false) return false;
						if (event.targets && !info.multitarget) {
							if (
								game.hasPlayer(function (current) {
									return !event.targets.contains(current) && lib.filter.targetEnabled2(card, player, current);
								})
							) {
								return true;
							}
						}
						return false;
					},
					content() {
						"step 0";
						var prompt2 = "为" + get.translation(trigger.card) + "增加一个目标";
						player
							.chooseTarget(get.prompt("old_dcgonghu_trick"), function (card, player, target) {
								var player = _status.event.player;
								return !_status.event.targets.contains(target) && lib.filter.targetEnabled2(_status.event.card, player, target);
							})
							.set("prompt2", prompt2)
							.set("ai", function (target) {
								var trigger = _status.event.getTrigger();
								var player = _status.event.player;
								return get.effect(target, trigger.card, player, player);
							})
							.set("card", trigger.card)
							.set("targets", trigger.targets);
						("step 1");
						if (result.bool) {
							if (!event.isMine() && !event.isOnline()) game.delayx();
							event.targets = result.targets;
						} else {
							event.finish();
						}
						("step 2");
						if (event.targets) {
							player.logSkill("old_dcgonghu_trick", event.targets);
							trigger.targets.addArray(event.targets);
						}
					},
				},
				basic: {
					audio: "dcgonghu",
					trigger: {
						player: "useCard",
					},
					forced: true,
					filter(event, player) {
						if (!player.hasMark("old_dcgonghu_basic") || !player.hasMark("old_dcgonghu_damage")) return false;
						var card = event.card;
						return get.color(card, false) == "red" && get.type(card, null, false) == "basic";
					},
					content() {
						trigger.directHit.addArray(game.filterPlayer());
						game.log(trigger.card, "不可被响应");
					},
				},
			},
		},
		//阮瑀
		old_miaoxian: {
			hiddenCard(player, name) {
				return get.type(name) == "trick" && !player.getStorage("old_miaoxian_used").contains(name) && player.countCards("h", { color: "black" }) == 1;
			},
			enable: "chooseToUse",
			filter(event, player) {
				var cards = player.getCards("h", { color: "black" });
				if (cards.length != 1) return false;
				var mod2 = game.checkMod(cards[0], player, "unchanged", "cardEnabled2", player);
				if (mod2 === false) return false;
				var storage = player.getStorage("old_miaoxian_used");
				for (var i of lib.inpile) {
					if (
						!storage.contains(i) &&
						get.type(i) == "trick" &&
						event.filterCard(
							{
								name: i,
								cards: cards,
							},
							player,
							event
						)
					)
						return true;
				}
				return false;
			},
			chooseButton: {
				dialog(event, player) {
					var cards = player.getCards("h", { color: "black" });
					var storage = player.getStorage("old_miaoxian_used");
					var list = [];
					for (var i of lib.inpile) {
						if (
							!storage.contains(i) &&
							get.type(i) == "trick" &&
							event.filterCard(
								{
									name: i,
									cards: cards,
								},
								player,
								event
							)
						) {
							list.push(["锦囊", "", i]);
						}
					}
					return ui.create.dialog("妙弦", [list, "vcard"], "hidden");
				},
				check(button) {
					var player = _status.event.player;
					return player.getUseValue({ name: button.link[2] }) + 1;
				},
				backup(links, player) {
					return {
						audio: "miaoxian",
						popname: true,
						filterCard: { color: "black" },
						selectCard: -1,
						position: "h",
						viewAs: {
							name: links[0][2],
						},
						onuse(links, player) {
							if (!player.storage.old_miaoxian_used) player.storage.old_miaoxian_used = [];
							player.storage.old_miaoxian_used.add(links.card.name);
							player.addTempSkill("old_miaoxian_used");
						},
					};
				},
				prompt(links, player) {
					return "将" + get.translation(player.getCards("h", { color: "black" })[0]) + "当做" + get.translation(links[0][2]) + "使用";
				},
			},
			group: "old_miaoxian_use",
			subfrequent: ["use"],
			subSkill: {
				use: {
					audio: "miaoxian",
					trigger: { player: "loseAfter" },
					frequent: true,
					prompt: "是否发动【妙弦】摸一张牌？",
					filter(event, player) {
						var evt = event.getParent();
						if (evt.name != "useCard") return false;
						return event.hs && event.hs.length == 1 && event.cards && event.cards.length == 1 && get.color(event.hs[0], player) == "red" && !player.countCards("h", { color: "red" });
					},
					content() {
						player.draw();
					},
				},
				backup: {
					audio: "miaoxian",
				},
			},
			ai: {
				order: 12,
				result: {
					player: 1,
				},
			},
		},
		//柏灵筠
		old_dclinghui: {
			audio: "dclinghui",
			trigger: {
				global: "phaseJieshuBegin",
			},
			filter(event, player) {
				return game.filterPlayer(play => play.getHistory("damage").length).length > 1;
			},
			check(event, player) {
				return true;
			},
			content() {
				"step 0";
				var cards = get.cards(3);
				event.cards = cards;
				game.cardsGotoOrdering(cards);
				player.chooseButton(["是否使用其中一张牌", cards], false).set("filterButton", button => {
					var player = _status.event.player;
					var card = button.link;
					var cardx = {
						name: get.name(card, get.owner(card)),
						nature: get.nature(card, get.owner(card)),
						cards: [card],
					};
					return player.hasUseTarget(cardx, null, false);
				});
				("step 1");
				if (result.bool) {
					var card = result.links[0];
					cards.remove(card);
					var cardx = {
						name: get.name(card, get.owner(card)),
						nature: get.nature(card, get.owner(card)),
						cards: [card],
					};
					var next = player.chooseUseTarget(cardx, [card], true, false).set("oncard", card => {
						var owner = _status.event.getParent().owner;
						if (owner) owner.$throw(card.cards);
					});
					if (card.name != cardx.name || !get.is.sameNature(card, cardx)) next.viewAs = true;
				} else {
					while (cards.length) {
						var card = cards.pop();
						card.fix();
						ui.cardPile.insertBefore(card, ui.cardPile.firstChild);
					}
					game.updateRoundNumber();
					event.finish();
				}
				("step 2");
				player.gain(event.cards, "gain2");
			},
		},
		oldx_dclinghui: {
			audio: "dclinghui",
			trigger: {
				global: "phaseJieshuBegin",
			},
			filter(event, player) {
				if (_status.currentPhase === player) return true;
				return game.getGlobalHistory("everything", evt => evt.name == "dying").length;
			},
			frequent: true,
			async content(event, trigger, player) {
				let cards = get.cards(3);
				await game.cardsGotoOrdering(cards);
				const { bool, links } = await player
					.chooseButton(["灵慧：是否使用其中的一张牌并获得剩余牌？", cards])
					.set("filterButton", button => {
						return get.player().hasUseTarget(button.link);
					})
					.set("ai", button => {
						return get.event().player.getUseValue(button.link);
					})
					.forResult();
				if (bool) {
					const card = links[0];
					cards.remove(card);
					player.$gain2(card, false);
					await game.asyncDelayx();
					await player.chooseUseTarget(true, card, false);
					cards = cards.filterInD();
					if (cards.length) {
						await player.gain(cards, "gain2");
					}
				}
			},
		},
		old_dcyuxin: {
			audio: "dcyuxin",
			trigger: { global: "dying" },
			check(event, player) {
				return get.attitude(event.player, player) > 0;
			},
			limited: true,
			unique: true,
			filter(event, player) {
				return event.player.hp <= 0;
			},
			skillAnimation: true,
			animationColor: "thunder",
			logTarget: "player",
			content() {
				"step 0";
				player.awakenSkill("oldyuxin");
				var num = 1 - trigger.player.hp;
				if (num) trigger.player.recover(num);
				("step 1");
				if (trigger.player != player && trigger.player.hp != player.hp) {
					event.num1 = player.hp;
					event.num2 = trigger.player.hp;
					event.num3 = event.num1 - event.num2;
				} else event.finish();
				("step 2");
				player.hp = event.num2;
				player.update();
				if (trigger.player.isIn()) {
					trigger.player.hp = event.num1;
					trigger.player.update();
				}
				game.log(player, "和", trigger.player, "交换了体力值");
				("step 3");
				if (event.num3 > 0) player.draw(event.num3);
			},
		},
		//刘理
		old_dcfuli: {
			audio: "dcfuli",
			enable: "phaseUse",
			filter(event, player) {
				return (
					player.countDiscardableCards(player, "h") &&
					player.countCards("h", function (card) {
						return !player.storage.old_dcfuli.contains(get.type2(card));
					}) > 0
				);
			},
			init(player) {
				player.storage.old_dcfuli = [];
			},
			async content(event, trigger, player) {
				await player.showHandcards(get.translation(player) + "发动了【抚黎】");
				const getNum = type => {
					let num = ["basic", "trick", "equip"].indexOf(type);
					if (num === -1) num = 3;
					return num;
				};
				const types = player
					.getDiscardableCards(player, "h")
					.reduce((list, card) => {
						if (player.storage.old_dcfuli.contains(get.type2(card))) return list;
						else return list.add(get.type2(card));
					}, [])
					.sort((a, b) => getNum(a) - getNum(b));
				if (types.length) {
					const { control } = await player
						.chooseControl(types)
						.set("ai", () => {
							const player = get.event().player,
								types = get.event().controls.slice();
							const getNum = type => {
								const cards = player.getDiscardableCards(player, "h").filter(card => get.type2(card) == type);
								const countCards = (target, player, cards) => {
									return target.countCards("h") - (target == player ? cards.length : 0);
								};
								const max = game
									.findPlayer(target => {
										return !game.hasPlayer(target2 => {
											return countCards(target2, player, cards) > countCards(target, player, cards);
										});
									})
									.countCards("h");
								return (
									Math.min(
										max,
										cards.reduce((sum, card) => sum + get.cardNameLength(card), 0)
									) / cards.length
								);
							};
							return types.sort((a, b) => {
								return getNum(b) - getNum(a);
							})[0];
						})
						.set("prompt", "弃置一种类别的所有手牌，然后摸这些牌的名字字数之和的牌")
						.forResult();
					if (control) {
						player.storage.old_dcfuli.push(control);
						player.addTempSkill("old_dcfuli_mark");
						const cards = player.getDiscardableCards(player, "h").filter(card => get.type2(card) == control);
						await player.discard(cards);
						const max = game.findPlayer(target => target.isMaxHandcard()).countCards("h");
						const num = Math.min(
							max,
							cards.reduce((sum, card) => sum + get.cardNameLength(card), 0)
						);
						if (num) await player.draw(num);
						if (cards.some(card => card.name != "shandian" && get.tag(card, "damage"))) {
							const { bool, targets } = await player
								.chooseTarget("抚黎：是否令一名角色的攻击范围-1直到你的下个回合开始？")
								.set("ai", target => {
									const player = get.event().player,
										num = target.getAttackRange();
									return -get.sgn(get.attitude(player, target)) * (target.getAttackRange() + (num <= 0 ? -num + 0.5 : num));
								})
								.forResult();
							if (bool) {
								const target = targets[0];
								player.line(target);
								target.addSkill("old_dcfuli_range");
								target.addMark("old_dcfuli_range", 1, false);
								player
									.when(["phaseBegin", "dieBegin"])
									.step(async () => {
										target.removeMark("old_dcfuli_range", 1, false);
										if (!target.hasMark("old_dcfuli_range")) target.removeSkill("old_dcfuli_range");
									})
									.vars({ target: target });
							}
						}
					}
				}
			},
			ai: {
				order: 1,
				result: {
					player(player) {
						const types = player.getDiscardableCards(player, "h").reduce((list, card) => {
							return list.add(get.type2(card));
						}, []);
						if (
							!types.some(type => {
								const cards = player.getDiscardableCards(player, "h").filter(card => get.type2(card) == type);
								const countCards = (target, player, cards) => {
									return target.countCards("h") - (target == player ? cards.length : 0);
								};
								return !game
									.filterPlayer(target => {
										return !game.hasPlayer(target2 => {
											return countCards(target2, player, cards) > countCards(target, player, cards);
										});
									})
									.includes(player);
							})
						)
							return 0;
						return 1;
					},
				},
			},
			group: "old_dcfuli_clear",
			subSkill: {
				clear: {
					charlotte: true,
					direct: true,
					trigger: { player: "phaseEnd" },
					content() {
						player.storage.old_dcfuli = [];
					},
				},
				range: {
					charlotte: true,
					onremove: true,
					mod: {
						attackRange(player, num) {
							return num - player.countMark("old_dcfuli_range");
						},
					},
					marktext: " - ",
					intro: {
						content: "攻击范围-#",
					},
				},
				mark: {
					mark: true,
					intro: {
						onunmark: true,
						content(storage, player) {
							var str = "本回合已弃置过的类型：";
							for (var i of player.storage.old_dcfuli) str += get.translation(i) + " ";
							return str;
						},
					},
				},
			},
		},
		old_dcdehua: {
			audio: "dcdehua",
			trigger: {
				global: "roundStart",
			},
			forced: true,
			async content(event, trigger, player) {
				const list = lib.inpile.filter(name => {
					if (get.type(name) === "delay" || player.getStorage("old_dcdehua").includes(name)) return false;
					const card = new lib.element.VCard({ name: name });
					return get.tag(card, "damage") && player.hasUseTarget(card);
				});
				if (list.length) {
					const { bool, links } = await player
						.chooseButton(['###德化###<div class="text center">视为使用一张未以此法选择过且可以使用的伤害类卡牌</div>', [list, "vcard"]], true)
						.set("ai", button => {
							const name = button.link[2],
								player = get.player();
							let value = player.getUseValue({ name, isCard: true }, null, true);
							if (player.countCards("h", card => get.name(card) === name && player.hasUseTarget(card))) value /= 3;
							if (name === "sha") value /= 2;
							return value;
						})
						.forResult();
					if (bool) {
						const name = links[0][2],
							card = new lib.element.VCard({ name: name });
						await player.chooseUseTarget(card, true);
						player.markAuto("old_dcdehua", [name]);
					}
				}
				if (
					!lib.inpile.some(name => {
						if (get.type(name) === "delay") return false;
						const card = new lib.element.VCard({ name: name });
						return get.tag(card, "damage") && !player.getStorage("old_dcdehua").includes(name);
					})
				) {
					await player.removeSkills("old_dcdehua");
					player.addSkill("old_dcdehua_hand");
				}
			},
			mod: {
				maxHandcard(player, num) {
					return num + player.getStorage("old_dcdehua").length;
				},
				cardEnabled(card, player) {
					if (player.getStorage("old_dcdehua").includes(card.name) && (get.position(card) == "h" || (card.cards && card.cards.some(i => get.position(i) == "h")))) return false;
				},
				cardSavable(card, player) {
					if (player.getStorage("old_dcdehua").includes(card.name) && (get.position(card) == "h" || (card.cards && card.cards.some(i => get.position(i) == "h")))) return false;
				},
				aiValue(player, card) {
					if (player.getStorage("old_dcdehua").includes(get.name(card))) return 0;
				},
				aiUseful() {
					return lib.skill.old_dcdehua.mod.aiValue.apply(this, arguments);
				},
			},
			intro: {
				content(storage) {
					return "<li>手牌上限+" + storage.length + "<br><li>不能使用手牌中的" + get.translation(storage);
				},
			},
			subSkill: {
				hand: {
					charlotte: true,
					mark: true,
					intro: {
						content: "伤害牌不计入手牌数",
					},
					mod: {
						ignoredHandcard(card) {
							if (get.tag(card, "damage")) return true;
						},
						cardDiscardable(card, _, name) {
							if (name == "phaseDiscard" && get.tag(card, "damage")) return false;
						},
					},
				},
			},
		},
		//乐祢衡
		old_dcjigu: {
			audio: "dcjigu",
			trigger: {
				global: "phaseBefore",
				player: "enterGame",
			},
			filter(event, player) {
				return event.name != "phase" || game.phaseNumber == 0;
			},
			forced: true,
			content() {
				const cards = player.getCards("h");
				player.addGaintag(cards, "old_dcjigu");
			},
			mod: {
				ignoredHandcard(card) {
					if (card.hasGaintag("old_dcjigu")) return true;
				},
				cardDiscardable(card, _, name) {
					if (name == "phaseDiscard" && card.hasGaintag("old_dcjigu")) return false;
				},
			},
			group: "old_dcjigu_temp",
			subSkill: {
				temp: {
					audio: "dcjigu",
					trigger: {
						player: "damageEnd",
						source: "damageSource",
					},
					filter(event, player) {
						return player.countCards("e") == player.countCards("h", card => card.hasGaintag("old_dcjigu"));
					},
					prompt2(event, player) {
						return (
							"摸" +
							get.cnNumber(
								Array.from({ length: 5 })
									.map((_, i) => i + 1)
									.reduce((sum, i) => sum + player.countEmptySlot(i), 0)
							) +
							"张牌"
						);
					},
					content() {
						player.draw(
							Array.from({ length: 5 })
								.map((_, i) => i + 1)
								.reduce((sum, i) => sum + player.countEmptySlot(i), 0)
						);
					},
				},
			},
		},
		//武诸葛
		old_dcqingshi: {
			audio: "dcqingshi",
			trigger: {
				player: "useCard",
			},
			filter(event, player) {
				if (!player.isPhaseUsing() || player.hasSkill("old_dcqingshi_blocker")) return false;
				if (
					player.hasCard(card => {
						return get.name(card) == event.card.name;
					})
				)
					return true;
				return false;
			},
			direct: true,
			content() {
				"step 0";
				var choices = [];
				var choiceList = ["令" + get.translation(trigger.card) + "对其中一个目标角色造成的伤害+1", "令任意名其他角色各摸一张牌", "摸" + get.translation(player.hp) + "张牌，然后【情势】于本回合失效"];
				if (trigger.targets && trigger.targets.length) choices.push("选项一");
				else choiceList[0] = "<span style='opacity:0.5'>" + choiceList[0] + "(无目标角色)</span>";
				if (game.countPlayer(i => i != player)) choices.push("选项二");
				else choiceList[1] = "<span style='opacity:0.5'>" + choiceList[1] + "</span>";
				choices.push("选项三");
				player
					.chooseControl(choices, "cancel2")
					.set("choiceList", choiceList)
					.set("prompt", get.prompt("old_dcqingshi"))
					.set("ai", () => {
						return _status.event.choice;
					})
					.set(
						"choice",
						(() => {
							var choicesx = choices.slice();
							var cards = player.getCards("hs");
							var bool1 =
									get.tag(trigger.card, "damage") &&
									choicesx.includes("选项一") &&
									trigger.targets.some(current => {
										return get.attitude(player, current) < 0;
									}),
								bool2 = choicesx.includes("选项二");
							if (bool2)
								bool2 = game.countPlayer(function (current) {
									return player != current && get.attitude(player, current) > 0;
								});
							else bool2 = 0;
							if (bool1 || bool2) {
								for (var i = 0; i < cards.length; i++) {
									var name = get.name(cards[i]);
									if (player.getStorage("old_dcqingshi_clear").includes(name)) continue;
									for (var j = i + 1; j < cards.length; j++) {
										if (name === get.name(cards[j]) && get.position(cards[i]) + get.position(cards[j]) !== "ss" && player.hasValueTarget(cards[i])) {
											choicesx.remove("选项三");
											break;
										}
									}
								}
							}
							if (bool2 > 2) return "选项二";
							if (choicesx.includes("选项三")) return "选项三";
							if (bool2 === 2) return "选项二";
							if (bool1) return "选项一";
							if (bool2) return "选项二";
							return "cancel2";
						})()
					);
				("step 1");
				if (result.control != "cancel2") {
					player.logSkill("old_dcqingshi");
					game.log(player, "选择了", "#y" + result.control);
					var index = ["选项一", "选项二", "选项三"].indexOf(result.control) + 1;
					var next = game.createEvent("old_dcqingshi_after");
					next.player = player;
					next.card = trigger.card;
					next.setContent(lib.skill.old_dcqingshi["content" + index]);
				}
			},
			content1() {
				"step 0";
				player
					.chooseTarget("令" + get.translation(card) + "对其中一个目标造成的伤害+1", true, (card, player, target) => {
						return _status.event.targets.includes(target);
					})
					.set("ai", target => {
						return 2 - get.attitude(_status.event.player, target);
					})
					.set("targets", event.getParent().getTrigger().targets);
				("step 1");
				if (result.bool) {
					var target = result.targets[0];
					player.line(target);
					player.addTempSkill("old_dcqingshi_ex");
					if (!player.storage.old_dcqingshi_ex) player.storage.old_dcqingshi_ex = [];
					player.storage.old_dcqingshi_ex.push([target, card]);
				}
			},
			content2() {
				"step 0";
				player.chooseTarget("令任意名其他角色各摸一张牌", [1, Infinity], true, lib.filter.notMe).set("ai", target => {
					return get.attitude(_status.event.player, target);
				});
				("step 1");
				if (result.bool) {
					var targets = result.targets;
					targets.sortBySeat();
					player.line(targets);
					game.asyncDraw(targets);
					game.delayex();
				}
			},
			content3() {
				"step 0";
				player.draw(player.hp);
				player.addTempSkill("old_dcqingshi_blocker");
			},
			subSkill: {
				ex: {
					trigger: {
						source: "damageBegin1",
					},
					filter(event, player) {
						return (
							player.storage.old_dcqingshi_ex &&
							player.storage.old_dcqingshi_ex.some(info => {
								return info[0] == event.player && info[1] == event.card;
							})
						);
					},
					forced: true,
					charlotte: true,
					popup: false,
					onremove: true,
					content() {
						trigger.num++;
						for (var i = 0; i < player.storage.old_dcqingshi_ex.length; i++) {
							if (player.storage.old_dcqingshi_ex[i][1] == trigger.card) player.storage.old_dcqingshi_ex.splice(i--, 1);
						}
					},
				},
				clear: {
					onremove: true,
					charlotte: true,
				},
				blocker: {
					charlotte: true,
				},
			},
			ai: {
				threaten: 6,
			},
		},
		old_dczhizhe: {
			audio: "dczhizhe",
			enable: "phaseUse",
			limited: true,
			filterCard: true,
			position: "h",
			discard: false,
			lose: false,
			delay: false,
			skillAnimation: true,
			animationColor: "metal",
			check(card) {
				if (get.type(card) != "basic" && get.type(card) != "trick") return 0;
				return get.value(card) - 7.5;
			},
			content() {
				"step 0";
				var card = cards[0];
				player.awakenSkill("old_dczhizhe");
				var cardx = game.createCard2(card.name, card.suit, card.number, card.nature);
				player.gain(cardx).gaintag.add("old_dczhizhe");
				player.addSkill("old_dczhizhe_effect");
			},
			ai: {
				order: 15,
				result: {
					player: 1,
				},
			},
			subSkill: {
				effect: {
					mod: {
						aiOrder(player, card, num) {
							if (num > 0 && get.itemtype(card) === "card" && card.hasGaintag("old_dczhizhe")) return num + 0.16;
						},
						aiValue(player, card, num) {
							if (num > 0 && get.itemtype(card) === "card" && card.hasGaintag("old_dczhizhe")) return 2 * num;
						},
						aiUseful(player, card, num) {
							if (num > 0 && !player._old_dczhizhe_mod && get.itemtype(card) === "card" && card.hasGaintag("old_dczhizhe")) {
								if (player.canIgnoreHandcard(card)) return Infinity;
								player._old_dczhizhe_mod = true;
								if (
									player.hp < 3 &&
									player.needsToDiscard(0, (i, player) => {
										return !player.canIgnoreHandcard(i) && get.useful(i) > 6;
									})
								)
									return num * 1.5;
								return num * 10;
							}
						},
						ignoredHandcard(card, player) {
							if (card.hasGaintag("old_dczhizhe")) {
								return true;
							}
						},
						cardDiscardable(card, player, name) {
							if (name == "phaseDiscard" && card.hasGaintag("old_dczhizhe")) {
								return false;
							}
						},
					},
					trigger: { player: ["useCardAfter", "respondAfter"] },
					charlotte: true,
					forced: true,
					filter(event, player) {
						return player.hasHistory("lose", function (evt) {
							if (evt.getParent() != event) return false;
							for (var i in evt.gaintag_map) {
								if (evt.gaintag_map[i].includes("old_dczhizhe")) {
									if (
										event.cards.some(card => {
											return get.position(card, true) == "o" && card.cardid == i;
										})
									)
										return true;
								}
							}
							return false;
						});
					},
					content() {
						"step 0";
						var cards = [];
						player.getHistory("lose", function (evt) {
							if ((evt.relatedEvent || evt.getParent()) != trigger) {
								return false;
							}
							for (var i in evt.gaintag_map) {
								if (evt.gaintag_map[i].includes("old_dczhizhe")) {
									var cardsx = trigger.cards.filter(card => {
										return get.position(card, true) == "o" && card.cardid == i;
									});
									if (cardsx.length) cards.addArray(cardsx);
								}
							}
						});
						if (cards.length) {
							player.gain(cards, "gain2").gaintag.addArray(["old_dczhizhe", "old_dczhizhe_clear"]);
							player.addTempSkill("old_dczhizhe_clear");
						}
					},
				},
				clear: {
					charlotte: true,
					onremove(player) {
						player.removeGaintag("old_dczhizhe_clear");
					},
					mod: {
						cardEnabled2(card, player) {
							var cards = [];
							if (card.cards) cards.addArray(cards);
							if (get.itemtype(card) == "card") cards.push(card);
							for (var cardx of cards) {
								if (cardx.hasGaintag("old_dczhizhe_clear")) return false;
							}
						},
						cardRespondable(card, player) {
							var cards = [];
							if (card.cards) cards.addArray(cards);
							if (get.itemtype(card) == "card") cards.push(card);
							for (var cardx of cards) {
								if (cardx.hasGaintag("old_dczhizhe_clear")) return false;
							}
						},
						cardSavable(card, player) {
							var cards = [];
							if (card.cards) cards.addArray(cards);
							if (get.itemtype(card) == "card") cards.push(card);
							for (var cardx of cards) {
								if (cardx.hasGaintag("old_dczhizhe_clear")) return false;
							}
						},
					},
				},
			},
		},
		//武关羽
		old_dcjuewu: {
			audio: "dcjuewu",
			enable: "chooseToUse",
			filter(event, player) {
				if (
					!player.hasCard(card => {
						return _status.connectMode || get.number(card) === 2;
					}, "hes")
				)
					return false;
				for (const name of ["shuiyanqijuny"].concat(lib.inpile)) {
					const card = get.autoViewAs({ name }, "unsure");
					if (!get.tag(card, "damage")) continue;
					if (event.filterCard(card, player, event)) return true;
					if (name === "sha") {
						for (const nature of lib.inpile_nature) {
							card.nature = nature;
							if (event.filterCard(card, player, event)) return true;
						}
					}
				}
				return false;
			},
			hiddenCard(player, name) {
				if (!lib.inpile.includes(name)) return false;
				if (
					!player.hasCard(card => {
						return _status.connectMode || get.number(card) === 2;
					}, "hes")
				)
					return false;
				return get.tag({ name }, "damage");
			},
			group: "old_dcjuewu_inTwo",
			chooseButton: {
				dialog(event, player) {
					let list = get.inpileVCardList(info => {
						return get.tag({ name: info[2] }, "damage");
					});
					if (!list.some(info => info[2] === "shuiyanqijuny")) list.add(["锦囊", "", "shuiyanqijuny"]);
					list = list.filter(info => {
						const name = info[2],
							nature = info[3];
						const card = get.autoViewAs({ name, nature }, "unsure");
						return event.filterCard(card, player, event);
					});
					return ui.create.dialog("绝武", [list, "vcard"]);
				},
				check(button) {
					if (get.event().getParent().type != "phase") return 1;
					const player = get.player();
					return player.getUseValue({
						name: button.link[2],
						nature: button.link[3],
					});
				},
				backup(links, player) {
					return {
						audio: "dcjuewu",
						filterCard(card, player) {
							return get.number(card) === 2;
						},
						position: "hes",
						check(card) {
							return 8 - get.value(card);
						},
						popname: true,
						viewAs: {
							name: links[0][2],
							nature: links[0][3],
						},
					};
				},
				prompt(links, player) {
					return "将一张点数为2的牌当" + (get.translation(links[0][3]) || "") + get.translation(links[0][2]) + "使用";
				},
			},
			subSkill: {
				backup: {},
				inTwo: {
					audio: "dcjuewu",
					trigger: {
						player: "gainAfter",
						global: "loseAsyncAfter",
					},
					filter(event, player) {
						const cards = event.getg(player);
						if (!cards.length) return false;
						return game.hasPlayer(current => {
							if (current === player) return false;
							const evt = event.getl(current);
							return evt && evt.hs.length + evt.es.length + evt.js.length > 0;
						});
					},
					forced: true,
					locked: false,
					async content(event, trigger, player) {
						player.addGaintag(trigger.getg(player), "old_dcjuewu_two");
						player.addSkill("old_dcjuewu_two");
					},
				},
				two: {
					charlotte: true,
					mod: {
						cardnumber(card) {
							if (card.hasGaintag("old_dcjuewu_two")) return 2;
						},
					},
				},
			},
			ai: {
				fireAttack: true,
				respondSha: true,
				skillTagFilter(player) {
					if (
						!player.hasCard(card => {
							return _status.connectMode || get.number(card) === 2;
						}, "hes")
					)
						return false;
				},
				order: 1,
				result: {
					player(player) {
						if (get.event().dying) return get.attitude(player, get.event().dying);
						return 1;
					},
				},
			},
		},
		old_dcwuyou: {
			audio: "dcwuyou",
			global: "old_dcwuyou_g",
			subSkill: {
				g: {
					audio: "dcwuyou",
					enable: "phaseUse",
					usable: 1,
					filter(event, player) {
						if (!player.countCards("h")) return false;
						return game.hasPlayer(current => {
							return current != player && current.hasSkill("old_dcwuyou");
						});
					},
					filterCard: true,
					filterTarget(card, player, target) {
						return target.hasSkill("old_dcwuyou");
					},
					selectTarget() {
						const count = game.countPlayer(current => {
							return current.hasSkill("old_dcwuyou");
						});
						return count > 1 ? 1 : -1;
					},
					check(card) {
						const player = get.player();
						const hasFriend = game.hasPlayer(current => {
							return current.hasSkill("old_dcwuyou") && get.attitude(player, current) > 0;
						});
						return (hasFriend ? 7 : 1) - get.value(card);
					},
					prompt() {
						const player = get.player(),
							list = game.filterPlayer(current => {
								return current.hasSkill("old_dcwuyou");
							}),
							list2 = list.filter(current => current !== player);
						const moreThanOne = list.length > 1,
							includesMe = list.includes(player);
						let str = "选择一张手牌，";
						if (includesMe) str += `点击“确定”，${moreThanOne ? "或" : ""}`;
						if (moreThanOne || !includesMe) str += `将此牌交给${get.translation(list2)}${list2.length > 1 ? "中的一人" : ""}，`;
						str += "然后执行后续效果。";
						return str;
					},
					discard: false,
					lose: false,
					delay: false,
					async content(event, trigger, player) {
						const { target } = event;
						const isMe = target === player;
						let { cards } = event;
						if (!isMe) await player.give(cards, target);
						const names = lib.inpile.filter(name => {
							return get.type2(name) !== "equip";
						});
						if (names.includes("sha")) names.splice(names.indexOf("sha") + 1, 0, ...lib.inpile_nature.map(nature => ["sha", nature]));
						if (!names.includes("shuiyanqijuny")) names.add("shuiyanqijuny");
						const vcard = names.map(namex => {
							let name = namex,
								nature;
							if (Array.isArray(namex)) [name, nature] = namex;
							const info = [get.type(name), "", name, nature];
							return info;
						});
						const { links } = await target
							.chooseButton(["选择一个牌名", [vcard, "vcard"]], true)
							.set("user", player)
							.set("ai", button => {
								const player = get.player(),
									user = get.event().user;
								return user.getUseValue({ name: button.link[2], nature: button.link[3] }) * get.attitude(player, user);
							})
							.forResult();
						if (!links || !links.length) return;
						const viewAs = { name: links[0][2], nature: links[0][3] };
						if (!isMe) {
							cards = (
								await target
									.chooseToGive(player)
									.set("ai", card => {
										const player = get.event().player,
											target = get.event().getParent().player;
										if (get.attitude(player, target) <= 0) {
											return 0;
										}
										return 6 - get.value(card);
									})
									.forResult()
							).cards;
						}
						if (!cards) return;
						const card = cards[0];
						if (player.getCards("h").includes(card)) {
							if (!player.storage.old_dcwuyou_transfer) player.storage.old_dcwuyou_transfer = {};
							player.storage.old_dcwuyou_transfer[card.cardid] = viewAs;
							player.addGaintag(cards, "old_dcwuyou_transfer");
							player.addSkill("old_dcwuyou_transfer");
						}
					},
					ai: {
						order: 10,
						result: {
							player(player, target) {
								if (get.attitude(player, target) > 0) return 1;
								return 0;
							},
							target: 0.5,
						},
					},
				},
				transfer: {
					trigger: {
						player: "useCard1",
					},
					forced: true,
					popup: false,
					charlotte: true,
					filter(event, player) {
						if (event.addCount === false) return false;
						return player.hasHistory("lose", evt => {
							if ((evt.relatedEvent || evt.getParent()) != event) {
								return false;
							}
							for (const i in evt.gaintag_map) {
								if (evt.gaintag_map[i].includes("old_dcwuyou_transfer")) return true;
							}
							return false;
						});
					},
					async content(event, trigger, player) {
						trigger.addCount = false;
						// const stat = player.getStat().card,
						//     name = trigger.card.name;
						// if (typeof stat[name] === "number") stat[name]--;
					},
					mod: {
						cardname(card, player) {
							const map = player.storage.old_dcwuyou_transfer;
							if (map && map[card.cardid] && get.itemtype(card) == "card" && card.hasGaintag("old_dcwuyou_transfer")) return map[card.cardid].name;
						},
						cardnature(card, player) {
							const map = player.storage.old_dcwuyou_transfer;
							if (map && map[card.cardid] && get.itemtype(card) == "card" && card.hasGaintag("old_dcwuyou_transfer")) return map[card.cardid].nature || false;
						},
						// cardUsable(card) {
						//     if (!card.cards) return;
						//     if (card.cards.some(card => card.hasGaintag("old_dcwuyou_transfer"))) return Infinity;
						// },
					},
				},
			},
		},
		old_dcyixian: {
			audio: "dcyixian",
			enable: "phaseUse",
			limited: true,
			skillAnimation: true,
			animationColor: "metal",
			multitarget: true,
			multiline: true,
			content() {
				"step 0";
				player.awakenSkill("old_dcyixian");
				event.targets = game.filterPlayer();
				event.targets.sortBySeat();
				event.gainSource = [];
				("step 1");
				var target = event.targets.shift();
				var cards = [];
				if (target == player) {
					cards.addArray(player.getGainableCards(player, "ej").filter(card => ["equip1", "equip2"].includes(get.subtype(card))));
					if (cards.length) event.gainSource.push([player, cards.length]);
				} else {
					cards.addArray(target.getGainableCards(player, "hej").filter(card => ["equip1", "equip2"].includes(get.subtype(card))));
					if (cards.length) event.gainSource.push([target, cards.length]);
				}
				if (cards.length) {
					player.gain(target, cards, "gain2");
					game.delayx(0.3);
				}
				if (event.targets.length) {
					event.redo();
				}
				("step 2");
				var pair = event.gainSource.shift();
				event.pair = pair;
				var list = ["摸牌"];
				if (pair[0].isDamaged()) list.push("回血");
				list.push("cancel2");
				player
					.chooseControl(list)
					.set("prompt", "请选择令" + get.translation(pair[0]) + "执行一项：")
					.set("ai", function () {
						if (get.attitude(_status.event.player, pair[0]) > 0) return "摸牌";
						else return "cancel2";
					});
				("step 3");
				if (result.control != "cancel2") {
					if (result.control == "摸牌") event.pair[0].draw(event.pair[1]);
					else event.pair[0].recover();
				}
				if (event.gainSource.length) event.goto(2);
			},
		},
		//武皇甫嵩
		old_dcchaozhen: {
			audio: "dcchaozhen",
			trigger: {
				player: ["phaseZhunbeiBegin", "dying"],
			},
			async cost(event, trigger, player) {
				const list = ["场上", "牌堆", "cancel2"];
				if (
					!game.hasPlayer(function (current) {
						return current.countCards("ej");
					})
				)
					list.remove("场上");
				const { control } = await player
					.chooseControl(list, () => {
						const player = _status.event.player;
						let cards = game
							.filterPlayer()
							.reduce((arr, current) => {
								if (current.countCards("ej")) arr.addArray(current.getCards("ej"));
								return arr;
							}, [])
							.sort((a, b) => get.number(a, false) - get.number(b, false));
						if (!cards.length) return "牌堆";
						if (player.hp < 1 && get.number(cards[0], false) > 1) return "牌堆";
						cards = cards.filter(card => get.number(card, false) == get.number(cards[0], false));
						let valueCards = cards.filter(card => {
							let owner = get.owner(card);
							if (!owner) return false;
							let att = get.attitude(player, owner);
							if (get.position(card) == "j" && (card.viewAs || card.name) == "jsrg_xumou") att *= -1;
							if (get.position(card) == "e" && get.equipValue(card, owner) > 0) att *= -1;
							return att > 0;
						});
						if (valueCards.length * 2 >= cards.length) return "场上";
						return "牌堆";
					})
					.set("prompt", get.prompt2("old_dcchaozhen"))
					.forResult();
				event.result = {
					bool: control != "cancel2",
					cost_data: control,
				};
			},
			async content(event, trigger, player) {
				const control = event.cost_data;
				var num = 1,
					card;

				if (control == "场上") {
					let cards = game
						.filterPlayer()
						.reduce((arr, current) => {
							if (current.countCards("ej")) arr.addArray(current.getCards("ej"));
							return arr;
						}, [])
						.sort((a, b) => get.number(a, false) - get.number(b, false));
					num = get.number(cards[0], false);
					card = cards.filter(card => get.number(card, false) == num).randomGet();
				} else {
					while (num < 14) {
						let cardx = get.cardPile2(card => get.number(card, false) == num);
						if (cardx) {
							card = cardx;
							break;
						} else num++;
					}
				}
				if (card) {
					await player.gain(card, get.owner(card) ? "give" : "gain2");
					if (num == 1) {
						await player.recover();
						player.tempBanSkill("old_dcchaozhen");
					}
				}
			},
		},
		old_dclianjie: {
			audio: "dclianjie",
			trigger: {
				player: "useCardToPlayered",
			},
			locked: false,
			filter(event, player) {
				if (
					!game.hasPlayer(current => {
						return current.countCards("h");
					}) ||
					!player.hasHistory("lose", evt => {
						if ((evt.relatedEvent || evt.getParent()) != event.getParent()) {
							return false;
						}
						return event.cards.some(card => (evt.hs || []).includes(card));
					})
				)
					return false;
				const num = get.number(event.card, player) || 0;
				if (
					player.countCards("h", card => {
						return get.number(card, player) < num;
					})
				)
					return false;
				return true; //return !player.getStorage("old_dclianjie_used").includes(num);
			},
			async cost(event, trigger, player) {
				event.result = await player
					.chooseTarget(get.prompt2(event.name.slice(0, -5)), (card, player, target) => {
						return target.countCards("h");
					})
					.set("drawed", player.getStorage("old_dclianjie_used").includes(get.number(trigger.card, player) || 0))
					.set("ai", target => {
						const player = get.player();
						const eff1 = get.effect(target, { name: "guohe_copy2" }, player, player);
						const eff2 = get.effect(target, { name: "draw" }, player, player);
						if (player == target && !get.event().drawed) return eff2 * (1 + player.maxHp - player.countCards("h"));
						return eff1;
					})
					.forResult();
			},
			async content(event, trigger, player) {
				const target = event.targets[0];
				const cards = target.getCards("h"),
					minNumber = cards.map(card => get.number(card)).sort((a, b) => a - b)[0];
				const toLose = cards.filter(card => get.number(card) === minNumber);
				if (target != player || toLose.length <= 1) {
					await target.lose(toLose.randomGet(), ui.cardPile);
				} else {
					const result = await player
						.chooseCard("h", card => get.event().toLose?.includes(card), true)
						.set("toLose", toLose)
						.set("ai", card => 10 - get.value(card))
						.forResult();
					if (result.bool) await player.lose(result.cards[0], ui.cardPile);
				}
				game.broadcastAll(function (player) {
					var cardx = ui.create.card();
					cardx.classList.add("infohidden");
					cardx.classList.add("infoflip");
					player.$throw(cardx, 1000, "nobroadcast");
				}, target);
				await game.delayx();
				const num = get.number(trigger.card, player) || 0;
				if (player.countCards("h") >= player.maxHp || player.getStorage("old_dclianjie_used").includes(num)) return;
				player.addTempSkill("old_dclianjie_used");
				player.markAuto("old_dclianjie_used", num);
				const result = (await player.drawTo(player.maxHp).forResult()).cards;
				if (result) player.addGaintag(result, "old_dclianjie");
			},
			mod: {
				aiOrder(player, card, num) {
					var number = get.number(card, player);
					if (player.countCards("h") < player.maxHp) {
						return num + number / 10;
					} else if (!player.getStorage("old_dclianjie_used").includes(number)) {
						return num - 0.5;
					}
				},
			},
			subSkill: {
				used: {
					charlotte: true,
					onremove(player, skill) {
						delete player.storage[skill];
						player.removeGaintag("old_dclianjie");
					},
					mod: {
						targetInRange(card, player, target) {
							if (get.suit(card) == "unsure") return true;
							if (!card.cards) return;
							for (var i of card.cards) {
								if (i.hasGaintag("old_dclianjie")) return true;
							}
						},
						cardUsable(card, player, num) {
							if (get.suit(card) == "unsure") return Infinity;
							if (!card.cards) return;
							for (var i of card.cards) {
								if (i.hasGaintag("old_dclianjie")) return Infinity;
							}
						},
					},
					intro: {
						content: (storage, player) => `已摸点数：${get.translation(storage).replace("13", "K").replace("12", "Q").replace("11", "J").replace("1", "A")}`,
					},
				},
			},
		},
		old_dcjiangxian: {
			audio: "dcjiangxian",
			enable: "phaseUse",
			limited: true,
			skillAnimation: true,
			animationColor: "metal",
			async content(event, trigger, player) {
				player.awakenSkill(event.name);
				player.addTempSkill(event.name + "_effect");
				const evtx = event.getParent("phase", true, true);
				player
					.when({ global: "phaseAfter" })
					.filter((evt, player) => {
						return evt == evtx && ["old_dcchaozhen", "old_dclianjie"].some(skill => player.hasSkill(skill, null, null, false));
					})
					.step(async () => {
						const { bool, links } = await player
							.chooseButton(
								[
									"将贤：请选择一项",
									[
										[
											["old_dcchaozhen", "失去〖朝镇〗"],
											["old_dclianjie", "失去〖连捷〗"],
										],
										"textbutton",
									],
								],
								true
							)
							.set("filterButton", button => {
								const player = get.player();
								return player.hasSkill(button.link, null, null, false);
							})
							.set("ai", button => {
								if (button.link == "old_dcchaozhen" && player.getHp() > 2) return 1.1;
								return 1;
							})
							.forResult();
						if (bool) await player.removeSkills(links);
					});
			},
			subSkill: {
				effect: {
					charlotte: true,
					mark: true,
					intro: {
						content: "本回合因使用〖连捷〗摸的牌造成的伤害+X（X为你本回合造成伤害的次数且至多为5），回合结束后失去〖连捷〗或〖朝镇〗",
					},
					trigger: {
						source: "damageBegin1",
					},
					filter(event, player) {
						if (
							!player.hasHistory("lose", evt => {
								let gaintag = false;
								if ((evt.relatedEvent || evt.getParent()) != event.getParent("useCard")) {
									return false;
								}
								for (var i in evt.gaintag_map) {
									if (evt.gaintag_map[i].includes("old_dclianjie")) gaintag = true;
								}
								return gaintag && event.cards.some(card => (evt.hs || []).includes(card));
							})
						)
							return false;
						return player.getHistory("sourceDamage").length > 0;
					},
					forced: true,
					locked: false,
					async content(event, trigger, player) {
						trigger.num += Math.min(5, player.getHistory("sourceDamage").length);
					},
				},
			},
			ai: {
				order: 9,
				threaten: 2.9,
				result: {
					player(player) {
						if (!game.hasPlayer(current => get.attitude(player, current) < 0)) return 0;
						return player.countCards("h", card => card.hasGaintag("old_dclianjie") && player.hasUseTarget(card)) > 2 ? 4 : 0;
					},
				},
				combo: "old_dclianjie",
			},
		},
		//神华佗
		old_jingyu: {
			audio: "jingyu",
			trigger: {
				global: ["useSkill", "logSkillBegin", "useCard", "respond"],
			},
			filter(event, player) {
				if (["global", "equip"].includes(event.type)) return false;
				let skill = event.sourceSkill || event.skill;
				if (!skill || skill === "old_jingyu") return false;
				let info = get.info(skill);
				while (true) {
					if (!info || info.charlotte || info.equipSkill) return false;
					if (info && !info.sourceSkill) break;
					skill = info.sourceSkill;
					info = get.info(skill);
				}
				return !player.getStorage("old_jingyu_used").includes(skill);
			},
			forced: true,
			async content(event, trigger, player) {
				if (!player.storage.old_jingyu_used) {
					player
						.when({ global: "phaseEnd" })
						.assign({
							firstDo: true,
						})
						.step(async () => delete player.storage.old_jingyu_used);
				}
				let skill = trigger.sourceSkill || trigger.skill,
					info = get.info(skill);
				while (true) {
					if (info && !info.sourceSkill) break;
					skill = info.sourceSkill;
					info = get.info(skill);
				}
				player.markAuto("old_jingyu_used", skill);
				await player.draw();
			},
			ai: {
				threaten: 6,
			},
		},
		//荀彧荀攸
		old_zhinang: {
			getMap() {
				if (!_status.old_zhinang_map) {
					_status.old_zhinang_map = {
						name: {},
						info: {},
					};
					let list;
					if (_status.connectMode) {
						list = get.charactersOL();
					} else {
						list = get.gainableCharacters();
					}
					list.forEach(name => {
						if (name !== "old_xunyuxunyou") {
							const skills = get.character(name, 3);
							skills.forEach(skill => {
								const info = get.info(skill);
								if (!info || (info.ai && info.ai.combo)) return;
								if (skill in _status.old_zhinang_map) return;
								if (get.translation(skill).includes("谋")) _status.old_zhinang_map.name[skill] = name;
								const voices = game.parseSkillText(skill, name);
								if (voices.some(data => data.includes("谋"))) {
									_status.old_zhinang_map.info[skill] = name;
								}
							});
						}
					});
				}
				return _status.old_zhinang_map;
			},
			trigger: {
				player: "useCardAfter",
			},
			filter(event, player) {
				return ["trick", "equip"].includes(get.type2(event.card));
			},
			frequent: true,
			async content(event, trigger, player) {
				const map = lib.skill.old_zhinang.getMap(),
					type = get.type2(trigger.card) == "equip" ? "name" : "info",
					list = Object.keys(map[type]);
				if (list.length > 0) {
					const skill = list.randomGet(),
						voiceMap = game.parseSkillTextMap(skill, map[type][skill]);
					if (type == "info") {
						findaudio: for (let data of voiceMap) {
							if (!data.text) continue;
							if (data.text.includes("谋")) {
								player.chat(data.text);
								game.broadcastAll(file => game.playAudio(file), data.file);
								break findaudio;
							}
						}
					} else player.flashAvatar("old_zhinang", map[type][skill]);
					player.popup(skill);
					await player.addSkills(skill);
				}
			},
		},
		old_gouzhu: {
			trigger: {
				player: ["useSkillAfter", "logSkill"],
			},
			filter(event, player) {
				if (["global", "equip"].includes(event.type)) return false;
				let skill = get.sourceSkillFor(event);
				if (!skill || skill == "old_gouzhu") return false;
				let info = get.info(skill);
				while (true) {
					if (!info || info.charlotte || info.equipSkill) return false;
					if (info && !info.sourceSkill) break;
					skill = info.sourceSkill;
					info = get.info(skill);
				}
				let list = get.skillCategoriesOf(skill, player);
				return list.length && list.some(item => item in lib.skill.old_gouzhu.effectMap);
			},
			frequent: true,
			effectMap: {
				锁定技: async function () {
					let player = _status.event.player;
					if (player.isDamaged()) await player.recover();
				},
				觉醒技: async function () {
					let player = _status.event.player;
					let card = get.cardPile(card => get.type(card) == "basic");
					if (card) await player.gain(card, "gain2");
				},
				限定技: async function () {
					let player = _status.event.player;
					let target = game.filterPlayer(current => current != player).randomGet();
					if (target) {
						player.line(target, "green");
						await target.damage(player);
					}
				},
				转换技: async function () {
					let player = _status.event.player;
					player.addMark("old_gouzhu", 1, false);
					game.log(player, "手牌上限+1");
					await game.asyncDelay();
				},
				主公技: async function () {
					let player = _status.event.player;
					await player.gainMaxHp();
				},
			},
			mod: {
				maxHandcard(player, num) {
					return num + player.countMark("old_gouzhu");
				},
			},
			intro: {
				content: "手牌上限+#",
			},
			locked: false,
			onremove: true,
			async content(event, trigger, player) {
				let skill = get.sourceSkillFor(trigger),
					info = get.info(skill);
				while (true) {
					if (info && !info.sourceSkill) break;
					skill = info.sourceSkill;
					info = get.info(skill);
				}
				let list = get.skillCategoriesOf(skill, player);
				for (const item of list) {
					if (item in lib.skill.old_gouzhu.effectMap) {
						const next = game.createEvent("old_gouzhu_effect", false);
						next.player = player;
						next.setContent(lib.skill.old_gouzhu.effectMap[item]);
						await next;
					}
				}
			},
		},
		//诸葛京
		old_dcpijian: {
			audio: "dcpijian",
			trigger: {
				player: "phaseEnd",
			},
			filter(event, player) {
				return player.getExpansions("dcyanzuo").length >= game.countPlayer();
			},
			locked: true,
			async cost(event, trigger, player) {
				event.result = await player
					.chooseTarget(get.prompt2("old_dcpijian"))
					.set("ai", target => {
						const player = _status.event.player;
						return get.damageEffect(target, player, player);
					})
					.forResult();
			},
			async content(event, trigger, player) {
				await player.loseToDiscardpile(player.getExpansions("dcyanzuo"));
				const target = event.targets[0];
				await target.damage(2);
			},
			ai: {
				combo: "dcyanzuo",
			},
		},
		//钟会
		old_xinquanji: {
			audio: "xinquanji",
			trigger: {
				player: ["damageEnd"],
				global: ["gainAfter", "loseAsyncAfter"],
			},
			filter(event, player) {
				if (event.name == "damage") return true;
				if (event.name == "loseAsync") {
					if (event.type != "gain") return false;
					var cards = event.getl(player).cards2;
					return game.hasPlayer(function (current) {
						if (current == player) return false;
						var cardsx = event.getg(current);
						for (var i of cardsx) {
							if (cards.includes(i)) return true;
						}
						return false;
					});
				}
				if (player == event.player) return false;
				if (event.getParent().name == "gift") return false;
				var evt = event.getl(player);
				return evt && evt.cards2 && evt.cards2.length > 0;
			},
			frequent: true,
			content() {
				"step 0";
				event.count = trigger.name == "damage" ? trigger.num : 1;
				("step 1");
				event.count--;
				player.draw();
				("step 2");
				var hs = player.getCards("h");
				if (hs.length) {
					if (hs.length == 1) event._result = { bool: true, cards: hs };
					else player.chooseCard("h", true, "选择一张手牌作为“权”");
				} else event.goto(4);
				("step 3");
				if (result.bool && result.cards && result.cards.length) {
					player.addToExpansion(result.cards, "giveAuto", player).gaintag.add("old_xinquanji");
				}
				("step 4");
				if (event.count > 0 && player.hasSkill(event.name) && !get.is.blocked(event.name, player)) {
					player.chooseBool(get.prompt2("old_xinquanji")).set("frequentSkill", event.name);
				} else event.finish();
				("step 5");
				if (result.bool) {
					player.logSkill("old_xinquanji");
					event.goto(1);
				}
			},
			locked: false,
			onremove(player, skill) {
				var cards = player.getExpansions(skill);
				if (cards.length) player.loseToDiscardpile(cards);
			},
			intro: {
				content: "expansion",
				markcount: "expansion",
			},
			mod: {
				maxHandcard(player, num) {
					return num + player.getExpansions("old_xinquanji").length;
				},
			},
			ai: {
				maixie: true,
				maixie_hp: true,
				notemp: true,
				threaten: 0.8,
				effect: {
					target(card, player, target) {
						if (get.tag(card, "damage") && !target.storage.old_xinzili) {
							if (player.hasSkillTag("jueqing", false, target)) return [1, -2];
							if (!target.hasFriend()) return;
							if (target.hp >= 4) return [0.5, get.tag(card, "damage") * 2];
							if (!target.hasSkill("old_xinpaiyi") && target.hp > 1) return [0.5, get.tag(card, "damage") * 1.5];
							if (target.hp == 3) return [0.5, get.tag(card, "damage") * 1.5];
							if (target.hp == 2) return [1, get.tag(card, "damage") * 0.5];
						}
					},
				},
			},
		},
		old_xinzili: {
			derivation: "old_xinpaiyi",
			audio: "xinzili",
			trigger: { player: "phaseZhunbeiBegin" },
			forced: true,
			juexingji: true,
			skillAnimation: true,
			animationColor: "thunder",
			filter(event, player) {
				return player.getExpansions("old_xinquanji").length > 2;
			},
			content() {
				player.awakenSkill("old_xinzili");
				player.recover();
				player.draw(2);
				player.loseMaxHp();
				player.addSkills("old_xinpaiyi");
			},
			ai: {
				combo: "old_xinquanji",
			},
		},
		old_xinpaiyi: {
			audio: "xinpaiyi",
			enable: "phaseUse",
			filter(event, player) {
				if (player.getStorage("old_xinpaiyi_used").length > 1) return false;
				return player.getExpansions("old_xinquanji").length > 0;
			},
			chooseButton: {
				check(button) {
					if (typeof button.link == "object") return 1;
					var player = _status.event.player,
						num = player.getExpansions("old_xinquanji").length - 1;
					if (button.link == 1) {
						if (
							game.countPlayer(function (current) {
								return get.damageEffect(current, player, player) > 0;
							}) < num
						)
							return 0.5;
						return 2;
					}
					if (num < 2) return 0;
					return 1;
				},
				dialog(event, player) {
					var dialog = ui.create.dialog("权计", "hidden");
					var table = document.createElement("div");
					table.classList.add("add-setting");
					table.style.margin = "0";
					table.style.width = "100%";
					table.style.position = "relative";
					var list = ["摸牌", "造成伤害"];
					dialog.add([
						list.map((item, i) => {
							return [i, item];
						}),
						"tdnodes",
					]);
					dialog.add(player.getExpansions("old_xinquanji"));
					return dialog;
				},
				select: 2,
				filter(button, player) {
					if (typeof button.link == "number" && player.getStorage("old_xinpaiyi_used").includes(button.link)) return false;
					if (ui.selected.buttons.length) return typeof ui.selected.buttons[0].link != typeof button.link;
					return true;
				},
				backup(links) {
					if (typeof links[0] == "object") links.reverse();
					var next = get.copy(lib.skill["old_xinpaiyi_backup" + links[0]]);
					next.card = links[1];
					return next;
				},
				prompt(links, player) {
					if (typeof links[0] == "object") links.reverse();
					var num = get.cnNumber(Math.max(1, player.getExpansions("old_xinquanji").length - 1)),
						card = get.translation(links[1]);
					if (links[0] == 0) return "移去" + card + "并令一名角色摸" + num + "张牌";
					return "移去" + card + "并对至多" + num + "名角色造成1点伤害";
				},
			},
			ai: {
				order: 1,
				result: { player: 1 },
				combo: "old_xinquanji",
			},
			subSkill: {
				used: {
					charlotte: true,
					onremove: true,
				},
				backup0: {
					audio: "xinpaiyi",
					filterCard: () => false,
					selectCard: -1,
					filterTarget: true,
					delay: false,
					content() {
						"step 0";
						player.addTempSkill("old_xinpaiyi_used", "phaseUseEnd");
						player.markAuto("old_xinpaiyi_used", [0]);
						var card = lib.skill.old_xinpaiyi_backup.card;
						player.loseToDiscardpile(card);
						("step 1");
						target.draw(Math.max(1, player.getExpansions("old_xinquanji").length));
					},
					ai: {
						result: {
							target(player, target) {
								if (target.hasSkill("nogain")) return 0;
								if (player == target && !player.needsToDiscard()) return 3;
								return 1;
							},
						},
					},
				},
				backup1: {
					audio: "xinpaiyi",
					filterCard: () => false,
					selectCard: -1,
					filterTarget: true,
					delay: false,
					multitarget: true,
					multiline: true,
					selectTarget() {
						return [1, Math.max(1, _status.event.player.getExpansions("old_xinquanji").length - 1)];
					},
					content() {
						"step 0";
						targets.sortBySeat();
						player.addTempSkill("old_xinpaiyi_used", "phaseUseEnd");
						player.markAuto("old_xinpaiyi_used", [1]);
						var card = lib.skill.old_xinpaiyi_backup.card;
						player.loseToDiscardpile(card);
						("step 1");
						for (var i of targets) i.damage();
					},
					ai: {
						tag: {
							damage: 1,
						},
						result: {
							target: -1.5,
						},
					},
				},
			},
		},
		//马钧
		old_jingyi: {
			audio: "jingyi",
			trigger: { player: "equipAfter" },
			forced: true,
			filter(event, player) {
				return event.cards?.length > 0;
			},
			async content(event, trigger, player) {
				const num = player.countCards("e");
				if (num > 0) await player.draw(num);
				if (player.countCards("he") > 0) await player.chooseToDiscard(2, "he", true);
			},
		},
		//星法正
		old_staranji: {
			getUsed(player) {
				let history = [],
					suits = [];
				for (let i = player.actionHistory.length - 1; i >= 0; i--) {
					history.addArray(_status.globalHistory[i].everything.filter(evt => evt.name === "useCard"));
					if (_status.globalHistory[i].isRound) break;
				}
				const map = history.reduce((map, evt) => {
					const suit = get.suit(evt.card);
					if (!map[suit]) {
						map[suit] = 1;
						suits.add(suit);
					} else map[suit]++;
					return map;
				}, {});
				return [map, suits];
			},
			audio: "staranji",
			trigger: { global: "useCard" },
			filter(event, player) {
				const [map, suits] = get.info("old_staranji").getUsed(player),
					min = Math.min(...suits.slice().map(suit => map[suit]));
				return map[get.suit(event.card)] === min;
			},
			forced: true,
			logTarget: "player",
			content() {
				player.draw();
			},
			init(player, skill) {
				const [map] = get.info(skill).getUsed(player);
				if (Object.keys(map).length) {
					player.storage[skill] = map;
					player.markSkill(skill);
				}
			},
			onremove: true,
			intro: {
				content(storage = {}, player) {
					if (!storage) return "当前暂无记录";
					let str = "本轮游戏所有角色使用牌的花色情况：<br>";
					const list = lib.suit.slice();
					const entries = Object.entries(storage).sort((a, b) => list.indexOf(a[0]) - list.indexOf(b[0]));
					for (const entry of entries) {
						str += "<li>" + get.translation(entry[0]) + "：" + entry[1];
					}
					return str;
				},
			},
			ai: { threaten: 2 },
			group: "old_staranji_count",
			subSkill: {
				count: {
					charlotte: true,
					trigger: { global: ["useCard1", "roundStart"] },
					filter(event, player, name) {
						return name == "useCard1" || Object.keys(player.storage.old_staranji || {}).length;
					},
					firstDo: true,
					forced: true,
					popup: false,
					async content(event, trigger, player) {
						if (event.triggername == "roundStart") {
							delete player.storage.old_staranji;
							player.unmarkSkill("old_staranji");
						} else {
							const key = get.suit(trigger.card);
							player.storage.old_staranji ??= {};
							player.storage.old_staranji[key] ??= 0;
							player.storage.old_staranji[key]++;
							player.markSkill("old_staranji");
						}
					},
				},
			},
		},
		//星丁奉
		old_stardangchen: {
			audio: "stardangchen",
			trigger: { player: "phaseUseBegin" },
			async cost(event, trigger, player) {
				const result = await player
					.chooseTarget()
					.set("filterTarget", function (card, player, target) {
						return player != target && target.countCards("he");
					})
					.set("prompt", get.prompt2("old_stardangchen"))
					.set("ai", function (card, player, target) {
						return -get.attitude(player, target);
					})
					.forResult();
				event.result = result;
			},
			async content(event, trigger, player) {
				const target = event.targets[0];
				const result = await target.chooseToGive(player).set("selectCard", [1, Infinity]).set("forced", true).set("position", "he").forResult();
				if (result?.bool && result.cards?.length) {
					player.addTempSkill("old_stardangchen_buff");
					player.addMark("old_stardangchen_buff", result.cards.length, false);
				}
			},
			subSkill: {
				buff: {
					audio: "stardangchen",
					charlotte: true,
					onremove: true,
					filter(event, player) {
						if (!lib.skill.dcshixian.filterx(event) || !player.hasMark("old_stardangchen_buff")) return false;
						return typeof get.number(event.card) === "number";
					},
					check(event, player) {
						return !get.tag(event.card, "norepeat") ^ (event.targets?.reduce((sum, i) => sum + get.effect(event.card, i, player, player), 0) < 0);
					},
					trigger: { player: "useCard" },
					prompt2(event, player) {
						return "进行一次判定，若判定结果为" + player.countMark("old_stardangchen_buff") + "的倍数，则" + get.translation(event.card) + "额外结算一次";
					},
					async content(event, trigger, player) {
						const result = await player
							.judge(card => {
								const number = get.number(card);
								return 10 * (0.5 - (number % get.player().countMark("old_stardangchen_buff") !== 0));
							})
							.set("judge2", result => Boolean(result.bool))
							.forResult();
						const { number } = result;
						if (number % player.countMark("old_stardangchen_buff") === 0) {
							trigger.effectCount++;
							game.log(trigger.card, "额外结算一次");
						}
					},
				},
			},
		},
		//庞凤衣
		old_dcyitong: {
			audio: "dcyitong",
			trigger: {
				global: ["phaseBefore", "loseAfter", "loseAsyncAfter", "cardsDiscardAfter"],
				player: "enterGame",
			},
			filter(event, player, name) {
				const suits = player.getStorage("old_dcyitong");
				if (name === "phaseBefore" || name === "enterGame") {
					return suits.length < 4 && (event.name !== "phase" || game.phaseNumber === 0);
				}
				return suits.some(suit => {
					if (!event.getd?.().some(card => get.suit(card, false) === suit)) return false;
					return (
						game
							.getGlobalHistory("everything", evt => {
								return evt.getd?.()?.some(card => get.suit(card, false) === suit);
							})
							.indexOf(event) === 0
					);
				});
			},
			forced: true,
			async content(event, trigger, player) {
				const name = event.triggername,
					storage = player.getStorage("old_dcyitong"),
					suits = lib.suit
						.filter(suit => {
							if (name === "phaseBefore" || name === "enterGame") return !storage.includes(suit);
							if (!storage.includes(suit) || !trigger.getd?.().some(card => get.suit(card, false) === suit)) return false;
							return (
								game
									.getGlobalHistory("everything", evt => {
										return evt.getd?.()?.some(card => get.suit(card, false) === suit);
									})
									.indexOf(trigger) === 0
							);
						})
						.reverse();
				if (name === "phaseBefore" || name === "enterGame") {
					const result =
						suits.length > 1
							? await player
									.chooseControl(suits)
									.set("ai", () => {
										return get.event().controls.randomGet();
									})
									.set("prompt", "异瞳：请记录一个花色")
									.forResult()
							: { control: suits[0] };
					const suit = result.control;
					if (suit) {
						player.markAuto("old_dcyitong", [suit]);
						player.addTip("old_dcyitong", get.translation("old_dcyitong") + player.getStorage("old_dcyitong").reduce((str, suit) => str + get.translation(suit), ""));
					}
				} else {
					let gains = [];
					for (const suitx of suits) {
						for (const suit of lib.suit.slice().reverse()) {
							if (suitx === suit) continue;
							const card = get.cardPile(card => get.suit(card) === suit && !gains.includes(card));
							if (card) gains.push(card);
						}
					}
					if (gains.length) await player.gain(gains, "gain2");
				}
			},
			onremove(player, skill) {
				delete player.storage[skill];
				player.removeTip(skill);
			},
			intro: { content: "已记录$花色" },
		},
		old_dcpeiniang: {
			audio: "dcpeiniang",
			mod: {
				cardUsable(card) {
					if (card?.storage?.old_dcpeiniang) return Infinity;
				},
			},
			enable: "chooseToUse",
			filterCard(card, player) {
				return player.getStorage("old_dcyitong").includes(get.suit(card));
			},
			viewAs: {
				name: "jiu",
				storage: { old_dcpeiniang: true },
			},
			prompt() {
				const player = get.player();
				return "将" + player.getStorage("old_dcyitong").reduce((str, suit) => str + get.translation(suit), "") + "牌当作【酒】使用";
			},
			check(card, player) {
				return 0 + lib.skill.oljiuchi?.check?.(card, player);
			},
			precontent() {
				event.getParent().addCount = false;
			},
			position: "hes",
			ai: {
				jiuOther: true,
				combo: "old_dcyitong",
			},
			trigger: { source: "recoverBegin" },
			filter(event, player) {
				if (event.name === "chooseToUse") return player.hasCard(card => lib.skill.old_dcpeiniang.filterCard(card, player), "hes");
				return event.getParent()?.name === "jiu" && event.num + event.player.hp < 1;
			},
			forced: true,
			locked: false,
			logTarget: "player",
			content() {
				trigger.num = 1 - trigger.player.hp;
			},
		},
		//群祝融
		old_dcremanhou: {
			audio: "dcmanhou",
			enable: "phaseUse",
			usable: 1,
			chooseButton: {
				dialog(event, player) {
					return ui.create.dialog("###蛮后###摸至多四张牌并执行等量项");
				},
				chooseControl(event, player) {
					var list = Array.from({
						length: 4,
					}).map((_, i) => get.cnNumber(i + 1) + "张");
					list.push("cancel2");
					return list;
				},
				check(event, player) {
					if (get.effect(player, { name: "losehp" }, player, player) > 4 || player.countCards("hs", card => player.canSaveCard(card, player)) > 0 || player.hp > 2) return "四张";
					return "两张";
				},
				backup(result, player) {
					return {
						num: result.control,
						audio: "dcmanhou",
						filterCard: () => false,
						selectCard: -1,
						async content(event, trigger, player) {
							var num =
								Array.from({
									length: 4,
								})
									.map((_, i) => get.cnNumber(i + 1) + "张")
									.indexOf(lib.skill.old_dcremanhou_backup.num) + 1;
							await player.draw(num);
							if (num >= 1) await player.removeSkills("old_dcretanluan");
							if (num >= 2 && player.countCards("h")) await player.chooseToDiscard("h", true);
							if (num >= 3) {
								await player.loseHp();
								if (game.hasPlayer(target => target !== player && target.countCards("h"))) {
									const [target] =
										(
											await player
												.chooseTarget("是否获得一名其他角色的一张手牌？", (card, player, target) => {
													return target !== player && target.countCards("h");
												})
												.set("ai", target => {
													const player = get.player();
													return get.effect(target, { name: "shunshou_copy", position: "h" }, player, player);
												})
												.forResult()
										).targets ?? [];
									if (target) {
										player.line(target);
										await player.gainPlayerCard(target, "h", true);
									}
								}
							}
							if (num >= 4) {
								if (game.hasPlayer(target => target.countDiscardableCards(player, "ej"))) {
									const [target] =
										(
											await player
												.chooseTarget(
													"弃置场上的一张牌",
													(card, player, target) => {
														return target.countDiscardableCards(player, "ej");
													},
													true
												)
												.set("ai", target => {
													const player = get.player();
													return get.effect(target, { name: "guohe_copy", position: "ej" }, player, player);
												})
												.forResult()
										).targets ?? [];
									if (target) {
										player.line(target);
										await player.discardPlayerCard(target, "ej", true);
									}
								}
								await player.addSkills("old_dcretanluan");
							}
						},
					};
				},
			},
			ai: {
				order: 8,
				result: { player: 1 },
			},
			subSkill: { backup: {} },
			derivation: "old_dcretanluan",
		},
		old_dcretanluan: {
			init(player, skill) {
				if (typeof player.getStat("skill")?.[skill] === "number") {
					delete player.getStat("skill")[skill];
				}
			},
			onChooseToUse(event) {
				if (!game.online && !event.old_dcretanluan) {
					event.set(
						"old_dcretanluan",
						game.filterPlayer2().reduce((list, target) => {
							return list.addArray(
								target
									.getHistory("lose", evt => {
										return evt.type === "discard";
									})
									.map(evt => evt.cards.filterInD("d"))
									.flat()
									.unique()
							);
						}, [])
					);
				}
			},
			audio: "dctanluan",
			enable: "phaseUse",
			filter(event, player) {
				return event.old_dcretanluan?.some(card => player.hasUseTarget(card));
			},
			usable: 1,
			chooseButton: {
				dialog(event, player) {
					const dialog = ui.create.dialog('###探乱###<div class="text center">' + lib.translate.old_dcretanluan_info + "</div>");
					dialog.add(event.old_dcretanluan);
					return dialog;
				},
				filter(button, player) {
					return player.hasUseTarget(button.link);
				},
				check(button) {
					const card = button.link;
					return get.player().getUseValue(card) * (get.tag(card, "damage") >= 1 ? 3 : 1);
				},
				prompt(links) {
					return '###探乱###<div class="text center">使用' + get.translation(links) + "，若你因此造成伤害，则重置〖蛮后〗</div>";
				},
				backup(links, player) {
					return {
						audio: "dctanluan",
						filterCard: () => false,
						selectCard: -1,
						popname: true,
						viewAs: links[0],
						card: links[0],
						precontent() {
							player.addTempSkill("old_dcretanluan_effect");
							const card = get.info("old_dcretanluan_backup").card;
							event.result.cards = [card];
							event.result.card = get.autoViewAs(card, [card]);
							event.result.card.old_dcretanluan = true;
						},
					};
				},
			},
			subSkill: {
				backup: {},
				effect: {
					charlotte: true,
					audio: "dctanluan",
					trigger: { source: "damageSource" },
					filter(event, player) {
						if (typeof player.getStat("skill")["old_dcremanhou"] !== "number") return false;
						return event.card?.old_dcretanluan === true;
					},
					forced: true,
					content() {
						delete player.getStat("skill")["old_dcremanhou"];
						player.popup("old_dcremanhou");
						game.log(player, "重置了技能", "【" + get.translation("old_dcremanhou") + "】");
					},
				},
			},
		},
		//威孙权
		old_dcwoheng: {
			audio: "dcwoheng",
			trigger: {
				player: "damageEnd",
			},
			enable: "phaseUse",
			filterTarget: true,
			mark: true,
			intro: {
				markcount(_, player) {
					const num = player.countMark("old_dcwoheng_used");
					return num + 1;
				},
				content(storage, player) {
					const num = player.countMark("old_dcwoheng_used");
					return `令一名角色摸或弃置${num + 1}张牌`;
				},
			},
			prompt(event) {
				const { player } = event;
				const num = player.countMark("old_dcwoheng_used");
				return `斡衡：令一名角色摸或弃置${num + 1}张牌`;
			},
			async cost(event, trigger, player) {
				const num = player.countMark("old_dcwoheng_used");
				event.result = await player.chooseTarget(`斡衡：令一名角色摸或弃置${num + 1}张牌`).forResult();
			},
			async content(event, trigger, player) {
				player.addTempSkill("old_dcwoheng_used", { global: "roundStart" });
				player.addMark("old_dcwoheng_used");
				const num = player.countMark("old_dcwoheng_used");
				// player.addTip("old_dcwoheng", `斡衡：${num}`);
				const [target] = event.targets;
				const str1 = "摸" + get.cnNumber(num, true);
				const str2 = "弃" + get.cnNumber(num, true);
				const list = [str1];
				if (
					target.countCards("he", function (card) {
						return lib.filter.cardDiscardable(card, target);
					})
				) {
					list.push(str2);
				}
				let directcontrol =
					str1 ==
					(
						await player
							.chooseControl(list, function (event, player) {
								return _status.event.choice;
							})
							.set("choice", get.attitude(player, target) > 0 ? str1 : str2)
							.forResult()
					).control;
				if (directcontrol) {
					await target.draw(num);
				} else {
					await target.chooseToDiscard(num, true, "he");
				}
				if (target == player || player.countCards("h") !== target.countCards("h")) {
					player.tempBanSkill("old_dcwoheng");
				}
			},
			subSkill: {
				used: {
					charlotte: true,
					onremove: true,
				},
			},
		},
		old_dcjizheng: {
			feedPigSkill: true,
			zhuSkill: true,
			unique: true,
			audio: "dcyuhui",
			global: "old_dcjizheng_global",
			subSkill: {
				global: {
					audiol: "old_dcjizheng",
					enable: "phaseUse",
					discard: false,
					lose: false,
					delay: false,
					line: true,
					log: false,
					prepare: function (cards, player, targets) {
						targets[0].logSkill("old_dcjizheng");
					},
					prompt: function () {
						var player = _status.event.player;
						var list = game.filterPlayer(function (target) {
							return target != player && target.hasZhuSkill("old_dcjizheng", player);
						});
						var str = "将一张牌交给" + get.translation(list);
						if (list.length > 1) str += "中的一人";
						return str;
					},
					filter: function (event, player) {
						if (player.countCards("h", lib.skill.old_dcjizheng_global.filterCard) == 0) return false;
						return game.hasPlayer(function (target) {
							return target != player && target.hasZhuSkill("old_dcjizheng", player) && !target.hasSkill("old_dcjizheng_blocker");
						});
					},
					filterCard: function (card) {
						return true;
					},
					visible: true,
					filterTarget: function (card, player, target) {
						return target != player && target.hasZhuSkill("old_dcjizheng", player) && !target.hasSkill("old_dcjizheng_blocker");
					},
					async content(event, trigger, player) {
						const { cards, targets } = event;
						await player.give(cards, targets[0]);
						targets[0].addTempSkill("old_dcjizheng_blocker", "phaseUseEnd");
						if (player.group == "wu") {
							player.addTempSkill("old_dcjizheng_buff");
						} else {
							player.addTempSkill("old_dcjizheng_buff", { player: "useCardAfter" });
						}
					},
					ai: {
						expose: 0.3,
						order: 13,
						result: {
							player: 1,
							target: 5,
						},
					},
				},
				blocker: {
					charlotte: true,
					onremove: true,
				},
				buff: {
					charlotte: true,
					mod: {
						targetInRange: function (card, player) {
							return true;
						},
					},
				},
			},
		},
		//威孙策
		old_dczhifeng: {
			audio: "dczhifeng",
			locked: false,
			mod: {
				cardUsable(card, player, num) {
					if (card.storage?.old_dczhifeng) {
						return Infinity;
					}
				},
			},
			hiddenCard(player, name) {
				const [cards, bool] = get.info("old_dczhifeng").getFilter(player);
				if (_status.event.name == "chooseToRespond" && !["sha", "shan"].includes(name)) {
					return false;
				}
				return cards.some(namex => namex == name) && bool;
			},
			onChooseToUse(event) {
				if (game.online) {
					return;
				}
				event.set("old_dczhifeng", get.info("old_dczhifeng").getFilter(event.player));
			},
			onChooseToRespond(event) {
				if (game.online) {
					return;
				}
				event.set("old_dczhifeng", get.info("old_dczhifeng").getFilter(event.player));
			},
			enable: ["chooseToUse", "chooseToRespond"],
			usable() {
				return game.players.length + game.dead.length;
			},
			filter(event, player) {
				if (!event.old_dczhifeng?.length) {
					return false;
				}
				const [cards, bool] = event.old_dczhifeng;
				if (!bool || (event.name == "chooseToRespond" && cards.some(name => !["sha", "shan"].includes(name)))) {
					return false;
				}
				return cards.some(name => {
					let card = get.autoViewAs({ name, storage: { old_dczhifeng: name == "jiu" } }, "unsure");
					return event.filterCard(card, player, event);
				});
			},
			chooseButton: {
				dialog(event, player) {
					const [cards] = event.old_dczhifeng;
					const vcards = get.inpileVCardList(([_, __, name, nature]) => {
						if (nature || !cards.some(namex => namex == name)) {
							return false;
						}
						const card = get.autoViewAs({ name, storage: { old_dczhifeng: name == "jiu" } }, "unsure");
						return event.filterCard(card, player, event);
					});
					const dialog = ui.create.dialog("猘锋", [vcards, "vcard"]);
					dialog.direct = true;
					return dialog;
				},
				check({ link: [_, __, name] }) {
					return get.order({ name }, get.player());
				},
				backup(links) {
					const backup = get.info("old_dczhifeng_backup");
					backup.audio = "dczhifeng";
					backup.viewAs = { name: links[0][2], storage: { old_dczhifeng: links[0][2] == "jiu" } };
					return backup;
				},
				prompt(links) {
					let str;
					if (["sha", "shan"].includes(links[0][2])) {
						str = "一张红色";
					} else if (links[0][2] == "jiu") {
						str = "至少两张黑色";
					} else {
						str = "任意张";
					}
					return `###猘锋###将${str}牌当做${get.translation(links[0][2])}使用`;
				},
			},
			getFilter(player, toOther) {
				const hp = player.getHp(),
					num = player.countCards("h") - (toOther ? 1 : 0);
				if (num > hp) {
					return [["jiu"], player.countCards("hes", { color: "black" }) >= 2];
				} else if (num == hp) {
					return [["juedou"], player.countCards("hes")];
				}
				return [["sha", "shan"], player.countCards("hes", { color: "red" })];
			},
			ai: {
				respondShan: true,
				respondSha: true,
				skillTagFilter(player) {
					return player.getHp() > player.countCards("h");
				},
				order(item, player) {
					player = player || get.player();
					const cards = get
						.info("old_dczhifeng")
						.getFilter(player)[0]
						.map(name => get.order({ name }, player));
					return Math.max(...cards) + 0.5;
				},
				result: {
					player: 1,
				},
			},
			subSkill: {
				backup: {
					position: "hes",
					selectCard() {
						const choice = get.info("old_dczhifeng_backup").viewAs.name;
						if (["sha", "shan"].includes(choice)) {
							return [1, 1];
						} else if (choice == "jiu") {
							return [2, Infinity];
						}
						return [1, Infinity];
					},
					filterCard(card, player) {
						const choice = get.info("old_dczhifeng_backup").viewAs.name;
						if (["sha", "shan"].includes(choice)) {
							return get.color(card, player) == "red";
						} else if (choice == "jiu") {
							return get.color(card, player) == "black";
						}
						return true;
					},
					popname: true,
					allowChooseAll: true,
					log: false,
					async precontent(event, trigger, player) {
						player.logSkill("old_dczhifeng");
						const name = event.result.card.name;
						if (["sha", "shan"].includes(name)) {
							player.addTempSkill("old_dczhifeng_draw");
						} else if (name == "jiu") {
							event.getParent().addCount = false;
						}
					},
					ai1(card) {
						const player = get.player(),
							name = get.info("old_dczhifeng_backup").viewAs.name,
							num = ui.selected.cards.length;
						if (num) {
							if (name == "jiu" && num > 1) {
								return 0;
							} else if (name == "juedou") {
								return 0;
							}
						}
						return 7 - get.value(card, player);
					},
				},
				draw: {
					charlotte: true,
					trigger: { player: ["useCard", "respond"] },
					filter(event) {
						return ["sha", "shan"].includes(event.card.name) && event.skill == "old_dczhifeng_backup";
					},
					forced: true,
					popup: false,
					async content(event, trigger, player) {
						await player.drawTo(player.maxHp);
						player.removeSkill(event.name);
					},
				},
			},
		},
		old_dcweijing: {
			trigger: { global: "phaseBegin" },
			derivation: "old_dczhifeng",
			filter(event, player) {
				return event.player != player && event.player.group === "wu" && event.player.isIn();
			},
			async cost(event, trigger, player) {
				const choiceList = [`对${get.translation(trigger.player)}造成1点伤害`, `令${get.translation(trigger.player)}交给你一张牌然后其可发动一次〖猘锋〗`],
					choice = ["选项一", "选项二"];
				if (!trigger.player.countGainableCards(player, "he")) {
					choiceList[1] = `<span style="opacity:0.5">${choiceList[1]}</span>`;
					choice.remove("选项二");
				}
				const { control } = await player
					.chooseControl(choice, "cancel2")
					.set("choiceList", choiceList)
					.set("ai", (event, player) => {
						const target = event.getTrigger().player;
						if (get.damageEffect(target, player, player) > 0) {
							return 0;
						} else if (get.event().controls.includes("选项二")) {
							const cards = get
								.info("old_dczhifeng")
								.getFilter(player, target != player)[0]
								.flatMap(name => {
									const card = get.autoViewAs({ name, storage: { old_dczhifeng: name == "jiu" } }, "unsure");
									return target.hasUseTarget(card) ? [card] : [];
								});
							if (cards.some(card => target.getUseValue(card) * get.sgnAttitude(player, target) > 0)) {
								return 1;
							} else if (get.attitude(player, target) < 0 && !cards.length) {
								return 1;
							}
						}
						return "cancel2";
					})
					.forResult();
				event.result = {
					bool: control != "cancel2",
					targets: [trigger.player],
					cost_data: control,
				};
			},
			async content(event, trigger, player) {
				const {
					targets: [target],
					cost_data: control,
				} = event;
				if (control == "选项一") {
					await target.damage();
				} else {
					if (player !== target) {
						await target.chooseToGive(`威靖：交给${get.translation(player)}一张牌然后可发动一次【猘锋】`, player, "he", true);
					}
					const info = get.info("old_dczhifeng");
					const [cards, bool] = info.getFilter(target);
					const vcards = get.inpileVCardList(([_, __, name, nature]) => {
						if (nature || !cards.some(namex => namex == name)) {
							return false;
						}
						return target.hasUseTarget(get.autoViewAs({ name }, "unsure"));
					});
					if (!bool || !vcards.length) {
						return;
					}
					const choice = vcards[0][2];
					game.broadcastAll(
						function (skill, name) {
							lib.skill[skill].viewAs = { name };
							lib.skill[skill].prompt = lib.skill.old_dczhifeng.chooseButton.prompt([[null, null, name]]);
						},
						"old_dczhifeng_backup",
						choice
					);
					await target
						.chooseToUse()
						//.set("logSkill", "old_dczhifeng")
						.set("openskilldialog", info.chooseButton.prompt([[null, null, choice]]))
						.set("norestore", true)
						.set("_backupevent", "old_dczhifeng_backup")
						.set("custom", {
							add: {},
							replace: { window() { } },
						})
						.set("filterTarget", (card, player, target) => {
							if (card.name == "sha") {
								return lib.filter.targetEnabled.call(this, card, player, target);
							}
							return lib.filter.filterTarget.call(this, card, player, target);
						})
						.set("addCount", choice != "jiu")
						.set("oncard", () => {
							get.event().addSkillCount = false;
						})
						.backup("old_dczhifeng_backup");
				}
			},
		},
		//威马超
		old_dczhongtao: {
			audio: "dczhongtao",
			enable: "phaseUse",
			usable: 1,
			chooseButton: {
				dialog(event, player) {
					return ui.create.dialog(`###众讨###出牌阶段限一次，你可以选择至多${Math.min(4, player.getDamagedHp() + 2)}种花色，然后随机获得弃牌堆中你选择花色的各一张牌。`, [lib.suit.map(suit => "lukai_" + suit), "vcard"]);
				},
				check(button) {
					return Math.random();
				},
				select() {
					const player = get.player();
					return [2, 2 + player.getDamagedHp()];
				},
				backup(links) {
					return {
						audio: "dczhongtao",
						suits: links.map(list => list[2].slice(6)),
						async content(event, trigger, player) {
							const suits = get.info(event.name).suits;
							const cards = [];
							for (const suit of suits) {
								const card = lib.skill.old_dczhongtao.getCard(
									card => get.suit(card) == suit,
									cards.some(j => get.position(j) == "j"),
									cards.some(e => get.position(e) == "e"),
									player
								);
								if (card) {
									cards.push(card);
								}
							}
							if (cards.length) {
								await player.gain(cards, "gain2");
							} else {
								player.chat("牌堆我对你的爱像叮咚鸡");
							}
						},
					};
				},
			},
			/*珪珪：拿牌优先级应该是
			优先拿判定区 然后装备区 弃牌堆 最后是牌堆
			然后判定区和装备区最多各拿一张
			装备区副类别可能细分还有优先级 就不重要了
			然后弃牌堆优先
			最后才是牌堆*/
			getCard(filter, noj, noe, player) {
				let curs = game.filterPlayer(() => true).sortBySeat();
				//优先拿自己的
				curs.sortBySeat(player);
				//判定区
				if (noj != true) {
					for (let i = 0; i < curs.length; i++) {
						const jx = curs[i].getCards("j");
						for (let j = 0; j < jx.length; j++) {
							if (filter(jx[j])) {
								return jx[j];
							}
						}
					}
				}
				//装备区
				if (noe != true) {
					for (let i = 0; i < curs.length; i++) {
						const ex = curs[i].getCards("e");
						for (let j = 0; j < ex.length; j++) {
							if (filter(ex[j])) {
								return ex[j];
							}
						}
					}
				}
				//弃牌堆
				const card1 = get.discardPile(filter, "random");
				if (card1) {
					return card1;
				}
				//牌堆
				const card2 = get.cardPile2(filter, "random");
				if (card2) {
					return card2;
				}
				return null;
			},
			//珪珪：刷新的部分是众讨本身的效果而不是拿牌后的buff
			group: "old_dczhongtao_reset",
			subSkill: {
				backup: {},
				reset: {
					audio: "dczhongtao",
					forced: true,
					locked: false,
					popup: false,
					onremove: true,
					intro: {
						content: "已使用了 $",
					},
					trigger: { player: ["useCardAfter", "phaseAfter"] },
					filter(event, player) {
						if (event.name == "useCard") {
							return _status.currentPhase == player;
						}
						return true;
					},
					async content(event, trigger, player) {
						if (event.triggername == "phaseAfter") {
							player.setStorage(event.name, [], true);
							return;
						}
						player.markAuto(event.name, get.type2(trigger.card));
						if (player.getStorage(event.name).length >= 3) {
							player.setStorage(event.name, [], true);
							if (player.getStat().skill.old_dczhongtao > 0) {
								player.getStat().skill.old_dczhongtao--;
								player.popup("众讨");
								game.log(player, "重置了", "#g【众讨】");
							}
						}
					},
				},
			},
			ai: {
				order: 7,
				result: {
					player: 1,
				},
			},
		},
		//新杀神孙权
		old_dccangming: {
			audio: "dccangming",
			trigger: {
				global: "gameDrawAfter",
			},
			forced: true,
			filter(event, player) {
				return !!game.countPlayer(target => target.countCards("h") > 0);
			},
			logTarget() {
				return game.filterPlayer(target => target.countCards("h") > 0);
			},
			async content(event, trigger, player) {
				const { name, targets } = event;
				const lose_list = targets.sortBySeat().map(target => [target, target.getCards("h")]);
				await game
					.loseAsync({
						lose_list: lose_list,
						player: player,
						log: true,
						animate: "giveAuto",
						gaintag: [name],
					})
					.setContent("addToExpansionMultiple");
				/*const func = async target => {
					if (!target.countCards("h")) {
						return;
					}
					const next = target.addToExpansion(target.getCards("h"), target, "giveAuto", false);
					next.gaintag.add(name);
					await next;
				};
				await game.doAsyncInOrder(event.targets, func);*/
			},
			marktext: "溟",
			intro: {
				markcount: "expansion",
				mark(dialog, storage, player) {
					const cards = player.getExpansions("old_dccangming");
					if (player.isUnderControl(true)) {
						dialog.addAuto(cards);
					} else {
						return "共有" + get.cnNumber(cards.length) + "张牌";
					}
				},
			},
			global: "old_dccangming_gain",
			group: "old_dccangming_draw",
			subSkill: {
				draw: {
					trigger: {
						global: ["addToExpansionAfter", "loseAsyncAfter"],
					},
					filter(event, player) {
						if (event.getlx == false) {
							return false;
						}
						if (event.name == "loseAsync" && event.type != "addToExpansion") {
							return false;
						}
						return event.gaintag?.includes("old_dccangming");
					},
					forced: true,
					async content(event, trigger, player) {
						const { cards } = trigger;
						const types = cards.map(card => get.type2(card)).unique();
						await player.draw(types.length);
					},
				},
				gain: {
					trigger: {
						player: ["phaseBegin", "damageEnd"],
					},
					filter(event, player) {
						return player.countExpansions("old_dccangming") > 0;
					},
					forced: true,
					async content(event, trigger, player) {
						game.log(player, "获得了", get.cnNumber(player.countExpansions("old_dccangming")), "张牌");
						await player.gain(player.getExpansions("old_dccangming"), "draw");
					},
				},
			},
		},
		old_dcchouxi: {
			audio: 2,
			enable: "phaseUse",
			onChooseToUse(event) {
				if (game.online) {
					return;
				}
				const list = [];
				game.countPlayer(current => {
					if (!current.countExpansions("old_dccangming")) {
						return false;
					}
					for (const card of current.getExpansions("old_dccangming")) {
						if (["basic", "trick"].includes(get.type(card, false))) {
							list.add(get.name(card, false));
						}
					}
					return true;
				});
				list.removeArray(event.player.getStorage("old_dcchouxi_used"));
				event.set("old_dcchouxiList", list);
			},
			filter(event, player) {
				if (!event.old_dcchouxiList?.length || !player.countCards("hs")) {
					return false;
				}
				return event.old_dcchouxiList.some(name => {
					const card = get.autoViewAs({ name: name, storage: { old_dcchouxi: true } }, "unsure");
					return player.hasUseTarget(card);
				});
			},
			chooseButton: {
				dialog(event, player) {
					const list = event.old_dcchouxiList.filter(name => {
						const card = get.autoViewAs({ name: name, storage: { old_dcchouxi: true } }, "unsure");
						return player.hasUseTarget(card);
					});
					const dialog = ui.create.dialog("筹汐", [list, "vcard"], "hidden");
					dialog.direct = true;
					return dialog;
				},
				check(button) {
					const player = get.player(),
						card = get.autoViewAs({ name: button.link[2], storage: { old_dcchouxi: true } }, "unsure");
					return player.getUseValue(card);
				},
				backup(links, player) {
					return {
						audio: "dcchouxi",
						popname: true,
						viewAs: {
							name: links[0][2],
							storage: {
								old_dcchouxi: true,
							},
						},
						filterCard: true,
						position: "hes",
						check(card) {
							return 5 - get.value(card);
						},
						async precontent(event, trigger, player) {
							player.addTempSkill("old_dcchouxi_used");
							player.markAuto("old_dcchouxi_used", event.result.card.name);
							event.getParent().addCount = false;
						},
					};
				},
				prompt(links, player) {
					return `将一张牌当作${get.translation(links[0][2])}使用`;
				},
			},
			locked: false,
			mod: {
				cardUsable(card, player) {
					if (card?.storage?.old_dcchouxi) {
						return Infinity;
					}
				},
				targetInRange(card, player) {
					if (card?.storage?.old_dcchouxi) {
						return true;
					}
				},
			},
			ai: {
				combo: ["old_dccangming", "old_dcjichao"],
				order: 8,
				result: {
					player: 1,
				},
			},
			subSkill: {
				backup: {},
				used: {
					charlotte: true,
					onremove: true,
				},
			},
		},
		old_dcjichao: {
			audio: 2,
			enable: "phaseUse",
			usable: 1,
			filter(event, player) {
				return game.hasPlayer(current => current != player && current.countCards("he") > 0);
			},
			chooseButton: {
				dialog(event, player) {
					const choiceList = [
						["one", "令一名其他角色将随机一半手牌（向上取整）和装备区的牌置于武将牌上"],
						["all", "令所有其他角色将所有牌置于武将牌上"],
					];
					const dialog = ui.create.dialog("激潮", [choiceList, "textbutton"], "hidden");
					dialog.direct = true;
					return dialog;
				},
				filter(button, player) {
					return button.link == "one" || !player.hasSkill("old_dcjichao_blocker");
				},
				check(button) {
					const player = get.player();
					if (button.link == "all") {
						return 2;
					}
					return 1;
				},
				backup(links, player) {
					return {
						audio: "dcjichao",
						choice: links[0],
						manualConfirm: true,
						filterTarget(card, player, target) {
							return target != player && target.countCards("h") > 0;
						},
						selectTarget() {
							const { choice } = get.info("old_dcjichao_backup");
							if (choice == "all") {
								return -1;
							}
							return 1;
						},
						multitarget: true,
						multiline: true,
						async content(event, trigger, player) {
							const { targets, name } = event;
							const { choice } = get.info(name);
							if (choice == "all") {
								player.addTempSkill("old_dcjichao_blocker", { player: "dieAfter" });
							}
							const getCards = function (target) {
								let cards = target.getCards("h");
								if (choice !== "all") {
									let num = Math.ceil(cards.length / 2);
									if (num > 0) {
										cards = cards.randomGets(num);
									}
								}
								cards = [...cards, ...target.getCards("e")];
								return cards;
							};
							if (choice == "all") {
								await game
									.loseAsync({
										lose_list: targets.sortBySeat().map(target => [target, getCards(target)]),
										player: player,
										log: true,
										animate: "giveAuto",
										gaintag: ["old_dccangming"],
									})
									.setContent("addToExpansionMultiple");
							} else {
								const [target] = targets;
								const next = target.addToExpansion(getCards(target), target, "giveAuto");
								next.gaintag.add("old_dccangming");
								await next;
							}
						},
						ai1: () => 1,
						ai2(target) {
							const player = get.player();
							return -get.attitude(player, target);
						},
					};
				},
				prompt(links, player) {
					if (links[0] == "all") {
						return "令所有其他角色将所有牌置于武将牌上，称为“溟”";
					}
					return "令一名其他角色将随机一半手牌（向上取整）和装备区的牌置于武将牌上，称为“溟”";
				},
			},
			ai: {
				order(item, player) {
					player ??= get.player();
					if (
						game.hasPlayer(current => {
							if (current == player || !current.countCards("h")) {
								return false;
							}
							if (get.attitude(player, current) > 0) {
								return false;
							}
							return player.countCards("hs", card => player.canUse(card, current) && get.effect(current, card, player, player) > 0) > 0;
						})
					) {
						return 9;
					}
					return 1;
				},
				result: {
					player(player, target) {
						if (
							game.hasPlayer(current => {
								if (current == player || !current.countCards("h")) {
									return false;
								}
								return get.attitude(player, current) < 0;
							})
						) {
							return 1;
						}
						return 0;
					},
				},
			},
			subSkill: {
				blocker: {
					charlotte: true,
					silent: true,
					init(player, skill) {
						player.addMark(skill, 3, false);
					},
					onremove: true,
					intro: {
						content: "还需造成#点伤害",
					},
					trigger: {
						source: "damage",
					},
					filter(event, player) {
						return event.num > 0;
					},
					async content(event, trigger, player) {
						const { num } = trigger;
						player.removeMark(event.name, num, false);
						if (!player.hasMark(event.name)) {
							player.removeSkill(event.name);
						}
					},
				},
				backup: {},
			},
		},
		//韩嵩
		old_dcshuaiyan: {
			audio: "dcshuaiyan",
			trigger: {
				global: ["loseAfter", "equipAfter", "addJudgeAfter", "gainAfter", "loseAsyncAfter", "addToExpansionAfter"],
			},
			filter(event, player, name, target) {
				return target && target.countCards("h") == player.countCards("h");
			},
			getIndex(event, player) {
				return game
					.filterPlayer(target => {
						if (target == player) {
							return false;
						}
						if (event.getg && event.getg(target) && event.getg(target).length && target.countCards("h") == player.countCards("h")) {
							return true;
						}
						const evt = event.getl(target);
						if (evt && evt.hs && evt.hs.length && target.countCards("h") == player.countCards("h")) {
							return true;
						}
						return false;
					})
					.sortBySeat();
			},
			logTarget(event, player, triggername, target) {
				return target;
			},
			forced: true,
			async content(event, trigger, player) {
				const target = event.targets[0],
					goon = target.countDiscardableCards(player, "he");
				let result;
				if (goon) {
					result = await player
						.chooseControl()
						.set("choiceList", ["弃置" + get.translation(target) + "的一张牌", "摸一张牌"])
						.set("ai", () => {
							const player = get.player();
							const eff1 = get.effect(get.event().target, { name: "guohe_copy2" }, player, player);
							const eff2 = get.effect(player, { name: "draw" }, player, player);
							return eff1 > eff2 ? 0 : 1;
						})
						.set("target", target)
						.forResult();
				} else {
					result = { index: 1 };
				}
				if (result.index == 0) {
					player.discardPlayerCard(target, "he", true);
				} else {
					player.draw();
				}
			},
		},
		//刘懿君
		old_dcfuji: {
			audio: "dcfuji",
			trigger: {
				player: "phaseEnd",
			},
			filter(event, player) {
				return player.countCards("h") && game.hasPlayer(current => current != player);
			},
			async cost(event, trigger, player) {
				event.result = await player
					.chooseTarget(get.prompt2(event.skill), lib.filter.notMe)
					.set("ai", target => {
						return get.attitude(get.player(), target);
					})
					.forResult();
			},
			async content(event, trigger, player) {
				const target = event.targets[0];
				await target.viewHandcards(player);
				const skill = `${event.name}_${target.playerid}`;
				game.addTempTag(skill, `缚·${get.translation(target.name)}`);
				player.addGaintag(player.getCards("h"), skill);
			},
			group: "old_dcfuji_effect",
			subSkill: {
				effect: {
					trigger: {
						global: "useCardToPlayer",
						player: "phaseBegin",
					},
					getIndex(event, player) {
						if (event.name == "phase") {
							return game.filterPlayer(current => {
								return player.countCards("h", card => card.hasGaintag(`old_dcfuji_${current.playerid}`));
							});
						}
						return [event.player];
					},
					filter(event, player, name, target) {
						if (!player.countCards("h", card => card.hasGaintag(`old_dcfuji_${target.playerid}`))) {
							return false;
						}
						return event.name == "phase" || event.target == player;
					},
					logTarget: (_1, _2, _3, target) => target,
					async cost(event, trigger, player) {
						const target = event.indexedData;
						if (trigger.name == "phase") {
							event.result = {
								bool: true,
								cards: player.getCards("h", card => card.hasGaintag(`old_dcfuji_${target.playerid}`)),
							};
						} else {
							event.result = await player
								.chooseCard(`###${get.prompt(event.skill, target)}###交给其任意张令其观看的牌，然后令${get.translation(trigger.card)}无效`, [1, Infinity])
								.set("filterCard", card => {
									return get.event().chooseCards.includes(card);
								})
								.set(
									"chooseCards",
									player.getCards("h", card => card.hasGaintag(`old_dcfuji_${target.playerid}`))
								)
								.set("eff", get.effect(player, trigger.card, trigger.player, player))
								.set("ai", card => {
									if (get.event().eff >= 0) {
										return 0;
									}
									return 4 - get.value(card);
								})
								.forResult();
						}
					},
					async content(event, trigger, player) {
						const {
							targets: [target],
							cards,
						} = event;
						if (trigger.name == "phase") {
							await player.give(cards, target);
							await target.recover();
						} else {
							await player.give(cards, target);
							const evt = trigger.getParent();
							evt.targets.length = 0;
							evt.all_excluded = true;
							trigger.untrigger();
						}
					},
				},
			},
		},
		//二刘
		old_dcllqixin: {
			audio: "dcllqixin",
			trigger: {
				player: ["gainAfter", "useCard"],
				global: "loseAsyncAfter",
			},
			filter(event, player) {
				if (event.name === "useCard") {
					return event.getParent().name !== "old_dcllqixin" && get.type(event.card) === "basic";
				}
				if (event.name === "gain" && (event.getParent().name !== "draw" || event.getParent(2).name === "old_dcllqixin")) {
					return false;
				}
				if (event.name !== "gain" && event.type !== "draw") {
					return false;
				}
				return event.getg(player).length === 2;
			},
			frequent: true,
			async cost(event, trigger, player) {
				if (trigger.name == "useCard") {
					event.result = await player.chooseBool(get.prompt(event.skill), "摸两张牌").set("frequentSkill", event.skill).forResult();
				} else {
					event.result = await player
						.chooseToUse(
							function (card, player, event) {
								if (get.type(card) !== "basic") {
									return false;
								}
								return lib.filter.cardEnabled.apply(this, arguments);
							},
							`###${get.prompt(event.skill)}###使用一张基本牌`
						)
						.set("chooseonly", true)
						.set("addCount", false)
						.forResult();
				}
			},
			async content(event, trigger, player) {
				if (trigger.name === "useCard") {
					await player.draw(2);
				} else {
					const { result } = event.cost_data;
					await player.useResult(result, event);
				}
			},
		},
		//新杀谋荀彧
		old_dcsbshimou: {
			audio: "dcsbshimou",
			audioname: ["dc_sb_xunyu_shadow"],
			enable: "phaseUse",
			usable: 1,
			zhuanhuanji(player, skill) {
				player.storage[skill] = !player.storage[skill];
				player.changeSkin({ characterName: "old_dc_sb_xunyu" }, "dc_sb_xunyu" + (player.storage[skill] ? "_shadow" : ""));
			},
			marktext: "☯",
			mark: true,
			intro: {
				content(storage) {
					if (!storage) return "转换技，出牌阶段限一次，你可令一名手牌数全场最低的角色将手牌调整至体力上限（至多摸五张）并视为使用一张仅指定单目标的普通锦囊牌（此牌牌名与目标由你指定）。若以此法摸牌，此牌可额外增加一个目标；若以此法弃牌，此牌额外结算一次。";
					return "转换技，出牌阶段限一次，你可令一名手牌数全场最高的角色将手牌调整至体力上限（至多摸五张）并视为使用一张仅指定单目标的普通锦囊牌（此牌牌名与目标由你指定）。若以此法摸牌，此牌可额外增加一个目标；若以此法弃牌，此牌额外结算一次。";
				},
			},
			filterTarget(card, player, target) {
				if (!player.storage.old_dcsbshimou) return target.isMinHandcard();
				return target.isMaxHandcard();
			},
			selectTarget: 1,
			prompt() {
				const player = get.event().player;
				return lib.skill.old_dcsbshimou.intro.content(player.storage.old_dcsbshimou);
			},
			async content(event, trigger, player) {
				player.changeZhuanhuanji(event.name);
				const target = event.targets[0];
				let num = target.maxHp - target.countCards("h");
				if (num > 0) await target.draw(Math.min(5, num));
				else if (num < 0 && target.countDiscardableCards(target, "h") > 0) await target.chooseToDiscard(-num, "h", true);
				if (!target.isIn()) return;
				let list = get.inpileVCardList(info => {
					if (info[0] != "trick") return false;
					return true;
				});
				if (
					!list.filter(info => {
						return game.hasPlayer(targetx => {
							return lib.filter.targetEnabled2({ name: info[2], isCard: true }, target, targetx);
						});
					}).length
				)
					return;
				//判断是否因此摸牌弃牌
				const bool1 = target.hasHistory("gain", evt => {
					return evt.getParent().name == "draw" && evt.getParent(2) == event;
				});
				const bool2 = target.hasHistory("lose", evt => {
					return evt.type == "discard" && evt.getParent(3) == event;
				});
				let str = `势谋：请选择${get.translation(target)}要使用的牌名`;
				if (bool1) str += "（可额外增加1个目标）";
				if (bool2) str += "（可额外结算一次）";
				const result = await player
					.chooseButton([str, [list, "vcard"]], true)
					.set("filterButton", button => {
						const source = get.event().source;
						return game.hasPlayer(target => {
							return lib.filter.targetEnabled2({ name: button.link[2], isCard: true }, source, target);
						});
					})
					.set("ai", button => {
						const card = get.autoViewAs({ name: button.link[2], isCard: true });
						return get.event().source.getUseValue(card) * Math.sign(get.attitude(get.player(), get.event().source));
					})
					.set("source", target)
					.forResult();
				const card = get.autoViewAs({ name: result.links[0][2], isCard: true, storage: { old_dcsbshimou: [num, target] } });
				let range = [1, 1];
				if (bool1) range[1]++;
				const result2 = await player
					.chooseTarget(
						`势谋：请为${get.translation(target)}选择${get.translation(card)}的目标`,
						(card, player, target) => {
							return lib.filter.targetEnabled2(get.event().cardx, get.event().source, target);
						},
						true,
						range
					)
					.set("source", target)
					.set("cardx", card)
					.set("ai", target => {
						return get.effect(target, get.event().cardx, get.event().source, get.player());
					})
					.forResult();
				const next = target.useCard(card, result2.targets, false);
				if (bool2) {
					next.set("oncard", () => {
						const event = get.event();
						event.effectCount++;
						game.log(event.card, "额外结算一次");
					});
				}
				await next;
			},
			ai: {
				//ai还有待完善
				order: 5,
				result: {
					player: 1,
					target(player, target) {
						const num = target.maxHp - target.countCards("h");
						const att = get.attitude(player, target);
						if (num > 0) {
							return num;
						} else if (num < 0) {
							if (-num < 2) {
								if (att > 0) return 1.5;
								return -2;
							}
							return num;
						}
						return Math.random() > 0.5;
					},
				},
			},
			locked: false,
			group: ["old_dcsbshimou_change"],
			subSkill: {
				change: {
					audio: "dcsbshimou",
					audioname: ["dc_sb_xunyou_shadow"],
					trigger: {
						global: "phaseBefore",
						player: "enterGame",
					},
					filter(event, player) {
						return event.name != "phase" || game.phaseNumber == 0;
					},
					prompt2(event, player) {
						return "切换【势谋】为状态" + (player.storage.old_dcsbshimou ? "阳" : "阴");
					},
					check: () => Math.random() > 0.5,
					content() {
						player.changeZhuanhuanji("old_dcsbshimou");
					},
				},
			},
		},
		//谋陆逊
		old_dcsbjunmou: {
			audio: "dcsbjunmou",
			group: "old_dcsbjunmou_change",
			audioname: ["dc_sb_luxun_shadow"],
			zhuanhuanji(player, skill) {
				player.storage[skill] = !player.storage[skill];
				player.changeSkin({ characterName: "old_dc_sb_luxun" }, "dc_sb_luxun" + (player.storage[skill] ? "_shadow" : ""));
			},
			marktext: "☯",
			mark: true,
			intro: {
				content(storage, player) {
					if (!storage) {
						return `一张牌结算结束后，若此牌的目标包括你，你可以摸一张牌并选择一张手牌，此牌视为无次数限制的火【杀】。`;
					}
					return `一张牌结算结束后，若此牌的目标包括你，你可以摸一张牌并选择一张手牌，重铸此牌并横置一名角色。`;
				},
			},
			trigger: {
				global: ["useCardAfter"],
			},
			filter(event, player) {
				return event.targets?.includes(player);
			},
			check: () => true,
			frequent: true,
			async content(event, trigger, player) {
				const bool = player.storage[event.name];
				player.changeZhuanhuanji(event.name);
				await player.draw();
				if (!player.countCards("h")) {
					return;
				}
				const result = await player.chooseCard(`隽谋：选择一张手牌，${bool ? "重铸此牌并横置一名角色" : "此牌视为无次数限制的火【杀】"}`, "h", true).forResult();
				if (result?.cards?.length) {
					const card = result.cards[0];
					if (!bool) {
						player.addSkill(event.name + "_sha");
						player.addGaintag(card, event.name + "_sha");
					} else {
						await player.recast(card);
						if (game.hasPlayer(target => !target.isLinked())) {
							const resultx = await player
								.chooseTarget("隽谋：横置一名角色", true, (card, player, target) => {
									return !target.isLinked();
								})
								.set("ai", target => -get.attitude(get.player(), target))
								.forResult();
							if (resultx?.targets?.length) {
								const target = resultx.targets[0];
								player.line(target, "yellow");
								await target.link(true);
							}
						}
					}
				}
			},
			subSkill: {
				sha: {
					mod: {
						cardname(card, player, name) {
							if (card.hasGaintag("old_dcsbjunmou_sha")) {
								return "sha";
							}
						},
						cardnature(card, player, nature) {
							if (card.hasGaintag("old_dcsbjunmou_sha")) {
								return "fire";
							}
						},
						cardUsable(card, player, num) {
							if (card.cards?.length !== 1 || !card.isCard) {
								return;
							}
							if (card.cards[0].hasGaintag("old_dcsbjunmou_sha")) {
								return Infinity;
							}
						},
					},
					forced: true,
					popup: false,
					charlotte: true,
					firstDo: true,
					trigger: {
						player: "useCard1",
					},
					filter(event, player) {
						return (
							event.addCount !== false &&
							event.card.isCard &&
							event.cards?.length == 1 &&
							player.hasHistory("lose", evt => {
								if ((evt.relatedEvent || evt.getParent()) !== event) {
									return false;
								}
								return evt.hs.length == 1 && Object.values(evt.gaintag_map).flat().includes("old_dcsbjunmou_sha");
							})
						);
					},
					async content(event, trigger, player) {
						trigger.addCount = false;
						const stat = player.getStat().card,
							name = trigger.card.name;
						if (typeof stat[name] == "number") {
							stat[name]--;
						}
						game.log(trigger.card, "不计入次数");
					},
				},
				change: {
					audio: "dcsbjunmou",
					audioname: ["dc_sb_luxun_shadow"],
					trigger: {
						global: "phaseBefore",
						player: "enterGame",
					},
					filter(event, player) {
						return event.name != "phase" || game.phaseNumber == 0;
					},
					prompt2(event, player) {
						return "切换【隽谋】为状态" + (player.storage.old_dcsbjunmou ? "阳" : "阴");
					},
					check: () => Math.random() > 0.5,
					content() {
						player.changeZhuanhuanji("old_dcsbjunmou");
					},
				},
			},
		},
		old_dcsbzhanyan: {
			audio: "dcsbzhanyan",
			audioname: ["dc_sb_luxun_shadow"],
			limited: true,
			enable: "phaseUse",
			skillAnimation: true,
			animationColor: "wood",
			filter(event, player) {
				return game.hasPlayer(target => target.isLinked() && target != player);
			},
			filterTarget(card, player, target) {
				return target.isLinked() && target != player;
			},
			selectTarget: [1, Infinity],
			multitarget: true,
			multiline: true,
			async content(event, trigger, player) {
				player.awakenSkill(event.name);
				player.addTempSkill(event.name + "_draw");
				let { targets } = event;
				await player.draw(targets.length);
				while (true) {
					targets = event.targets.filter(target => target.isIn() && target.countCards("h"));
					if (!targets.length) {
						break;
					}
					const showEvent = player
						.chooseCardOL(targets, "绽炎：请选择要展示的牌", true)
						.set("ai", function (card) {
							return Math.random();
						})
						.set("source", player);
					showEvent.aiCard = function (target) {
						const hs = target.getCards("h");
						return { bool: true, cards: [hs.randomGet()] };
					};
					showEvent._args.remove("glow_result");
					const result = await showEvent.forResult();
					const cards = [];
					for (var i = 0; i < targets.length; i++) {
						cards.push(result[i].cards[0]);
					}
					const suits = cards.map(card => get.suit(card)).unique();
					const next = player
						.showCards(cards, `${get.translation(player)} 发动了【${get.translation(event.name)}】`, false)
						.set("showers", targets)
						.set("customButton", button => {
							const target = get.owner(button.link);
							if (target) {
								const div = button.querySelector(".info");
								div.innerHTML = "<span style = 'font-weight:bold'>" + get.translation(get.suit(button.link, target)) + target.getName() + "</span>";
							}
						})
						.set("delay_time", targets.length * 2)
						.set("closeDialog", false);
					await next;
					const id = next.videoId;

					const update = function (id, suits) {
						const dialog = get.idDialog(id);
						if (dialog) {
							const div = dialog.querySelector(".caption");
							div.innerHTML = `绽炎：你可以弃置任意张花色为<span style = "font-weight:bold;font-size: 150%">${get.translation(suits)}</span>的牌对所选角色造成1点火焰伤害`;
							ui.update();
						}
					};
					if (player == game.me) {
						update(id, suits);
					} else if (player.isOnline()) {
						player.send(update, id, suits);
					}
					const nextx = player.chooseCardTarget({
						prompt: false,
						dialog: get.idDialog(id),
						filterCard(card) {
							if (!get.event().suits.includes(get.suit(card, get.player()))) {
								return false;
							}
							return lib.filter.cardDiscardable.apply(this, arguments);
						},
						selectCard: [1, Infinity],
						filterTarget(card, player, target) {
							const selected = ui.selected.cards;
							if (!selected.length) {
								return false;
							}
							const suits = selected.map(card => get.suit(card, player)).unique();
							return suits.includes(get.suit(get.event().cards[get.event().targets.indexOf(target)], target));
						},
						//complexTarget: true,
						selectTarget: -1,
						suits: suits,
						cards: cards,
						targets: targets,
						position: "he",
						ai1(card) {
							return 10 - get.value(card);
						},
					});
					nextx.set(
						"targetprompt2",
						nextx.targetprompt2.concat([
							target => {
								const evt = get.event();
								if (!target.isIn() || !evt.filterTarget(null, get.player(), target)) {
									return;
								}
								const card = evt.cards[evt.targets.indexOf(target)];
								if (!card) {
									return;
								}
								const suit = get.suit(card, target);
								const color = get.color(card, target);
								const str = get.translation(suit);
								return `<span style = "color:${color};font-weight:bold;font-size: 200%">${str}</span>`;
							},
						])
					);
					const resultx = await nextx.forResult();
					game.broadcastAll("closeDialog", id);
					if (resultx?.cards?.length && resultx.targets?.length) {
						const damage = resultx.targets;
						await player.discard(resultx.cards);
						player.line(damage, "fire");
						const damaged = [];
						await game.doAsyncInOrder(damage, async target => {
							const next = target.damage("fire");
							await next;
							damaged.addArray(targets.filter(i => i.hasHistory("damage", evt => (evt.getParent()?.getTrigger() || evt) == next)));
						});
						if (damaged.length != event.targets.length) {
							targets.forEach(target => {
								if (!damaged.includes(target)) {
									target.chat("☝🤓唉，没打着");
									target.throwEmotion(player, ["egg", "shoe"].randomGet());
								}
							});
							break;
						}
					} else {
						targets.forEach(target => {
							target.chat("☝🤓唉，没打着");
							target.throwEmotion(player, ["egg", "shoe"].randomGet());
						});
						break;
					}
				}
				player.removeSkill(event.name + "_draw");
			},
			subSkill: {
				draw: {
					audio: "dcsbzhanyan",
					audioname: ["dc_sb_luxun_shadow"],
					charlotte: true,
					forced: true,
					trigger: {
						player: "loseAfter",
						global: ["gainAfter", "loseAsyncAfter", "addJudgeAfter", "addToExpansionAfter", "equipAfter"],
					},
					filter(event, player) {
						return event.getl?.(player)?.cards2?.length;
					},
					async content(event, trigger, player) {
						await player.draw(trigger.getl?.(player)?.cards2?.length);
					},
				},
			},
			ai: {
				order: 1,
				result: {
					target: -1,
				},
			},
		},
		//新杀谋许攸
		old_dcsbmoyou: {
			audio: "dcsbmoyou",
			trigger: {
				player: "useCardAfter",
			},
			filter(event, player) {
				const lose = player.getAllHistory("lose", evt => (evt.relatedEvent || evt.getParent()).name == "useCard");
				const index = player
					.getAllHistory("useCard", evt => {
						return lose.some(evtx => (evtx.relatedEvent || evtx.getParent()) == evt && evtx.hs?.length);
					})
					.indexOf(event);
				return index >= 0 && (index + 1) % 2 == 0;
			},
			check: () => true,
			async content(event, trigger, player) {
				await player.draw({ num: 4 });
				const getCards = suit => player.getDiscardableCards(player, "h", { suit: suit });
				const suits = lib.suit.filter(suit => getCards(suit).length > 0);
				if (suits.length) {
					const hs = player.getCards("h");
					const types = hs.map(card => get.type2(card)).unique();
					const choice = suits.slice().sort((a, b) => get.value(getCards(a)) - get.value(getCards(b)))[0];
					const result = await player
						.chooseControl({
							controls: suits,
							prompt: "谟猷：请弃置一种花色的所有手牌",
							ai() {
								return get.event().suit;
							},
						})
						.set("suit", choice)
						.forResult();
					if (result?.control) {
						const suit = result.control;
						const cards = getCards(suit);
						await player.discard({ cards });
						if (
							!player
								.getCards("h")
								.map(card => get.type2(card))
								.containsAll("basic", "trick", "equip")
						) {
							player.addTempSkill(`${event.name}_basic`);
							player.addTempSkill(`${event.name}_trick`);
						}
					}
				}
			},
			subSkill: {
				basic: {
					mod: {
						cardUsable(card, player) {
							if (get.type(card) == "basic") {
								return Infinity;
							}
						},
						targetInRange(card, player) {
							if (get.type(card) == "basic") {
								return true;
							}
						},
					},
					trigger: {
						player: "useCard1",
					},
					forced: true,
					charlotte: true,
					popup: false,
					firstDo: true,
					filter(event, player) {
						return get.type2(event.card) == "basic";
					},
					async content(event, trigger, player) {
						player.removeSkill(event.name);
						if (trigger.addCount !== false) {
							trigger.addCount = false;
							const stat = player.getStat().card,
								name = trigger.card.name;
							if (typeof stat[name] == "number") {
								stat[name]--;
							}
						}
					},
					mark: true,
					marktext: "基",
					intro: {
						content: "使用下一张基本牌无距离和次数限制",
					},
				},
				trick: {
					charlotte: true,
					forced: true,
					trigger: { player: "useCard" },
					filter(event, player) {
						return get.type2(event.card) == "trick";
					},
					async content(event, trigger, player) {
						player.removeSkill(event.name);
						game.log(trigger.card, "不可被响应");
						trigger.directHit.addArray(game.players);
					},
					mark: true,
					marktext: "锦",
					intro: {
						content: "使用下一张锦囊牌不可响应",
					},
				},
			},
		},
		//新杀夏侯玄
		old_dcyizheng: {
			audio: "dcyizheng",
			trigger: { player: ["phaseBegin", "phaseEnd"] },
			filter(event, player) {
				return (
					player.countCards("h") &&
					game.hasPlayer(target => {
						return target != player && target.countCards("h");
					})
				);
			},
			async cost(event, trigger, player) {
				event.result = await player
					.chooseTarget(get.prompt2(event.skill), [1, Infinity], (card, player, target) => {
						return target != player && target.countCards("h");
					})
					.set("ai", target => {
						if (player.hp == 1) {
							return 0;
						}
						return -get.attitude(get.player(), target);
					})
					.forResult();
			},
			async content(event, trigger, player) {
				const targets = [player].concat(event.targets).sortBySeat();
				//先选牌
				let showEvent = player
					.chooseCardOL(targets, "议政：请选择要展示的牌", true)
					.set("ai", function (card) {
						return -get.value(card);
					})
					.set("source", player);
				showEvent.aiCard = function (target) {
					const hs = target.getCards("h");
					return { bool: true, cards: [hs.randomGet()] };
				};
				showEvent._args.remove("glow_result");
				const result = await showEvent.forResult();
				const cards = [];
				for (var i = 0; i < targets.length; i++) {
					cards.push(result[i].cards[0]);
				}
				//新建showCards事件，不然没法兼容庞宏、OL罗宪这些角色的技能
				let next = game.createEvent("showCards");
				next.set("player", player);
				next.set("targets", targets);
				next.set("cards", cards);
				next.set("skill", event.name);
				next.setContent(() => {
					//照搬showCards的事件然后改动了一下dialog
					"step 0";
					event.dialog = ui.create.dialog(`${get.translation(player)} 发动了〖${get.translation(event.skill)}〗`, cards);
					event.dialogid = lib.status.videoId++;
					event.dialog.videoId = event.dialogid;
					game.broadcastAll(
						function (skill, targets, cards, id, player) {
							let dialog = ui.create.dialog(`${get.translation(player)} 发动了〖${get.translation(skill)}〗`, cards);
							dialog.videoId = id;
							const getName = function (target) {
								if (target._tempTranslate) {
									return target._tempTranslate;
								}
								const name = target.name;
								if (lib.translate[name + "_ab"]) {
									return lib.translate[name + "_ab"];
								}
								return get.translation(name);
							};
							for (let i = 0; i < targets.length; i++) {
								dialog.buttons[i].querySelector(".info").innerHTML = getName(targets[i]) + get.translation(cards[i].suit) + cards[i].number;
							}
						},
						event.skill,
						targets,
						cards,
						event.dialogid,
						player
					);
					for (let i = 0; i < targets.length; i++) {
						game.log(targets[i], "展示了", cards[i]);
					}
					game.addCardKnower(cards, "everyone");
					game.delay(4);
					game.addVideo("showCards", player, [get.translation(player) + "发动了〖议政〗", get.cardsInfo(cards)]);
					("step 1");
					game.broadcastAll("closeDialog", event.dialogid);
					event.dialog.close();
				});
				await next;
				if (cards.map(card => get.type2(card)).unique().length == 1) {
					player.popup("洗具");
					const result = await player
						.chooseTarget(true)
						.set("createDialog", [`议政：令一名角色获得这些牌`, cards])
						.set("ai", target => get.attitude(get.player(), target))
						.forResult();
					if (result?.targets) {
						const target = result.targets[0];
						player.line(target);
						let gainEvent = target.gain(cards);
						gainEvent.set(
							"givers",
							targets.filter(i => i != target)
						);
						gainEvent.set("animate", function (event) {
							const player = event.player,
								cards = event.cards,
								givers = event.givers;
							for (let i = 0; i < givers.length; i++) {
								givers[i].$give(cards[i], player);
							}
							return 500;
						});
						await gainEvent;
					}
				} else {
					player.popup("杯具");
					await game
						.loseAsync({
							lose_list: targets.map((target, index) => {
								return [target, [cards[index]]];
							}),
							discarder: player,
						})
						.setContent("discardMultiple");
				}
			},
		},
		old_dcguilin: {
			audio: "dcguilin",
			derivation: ["dcboxuan_rewrite"],
			limited: true,
			unique: true,
			skillAnimation: true,
			animationColor: "thunder",
			enable: "phaseUse",
			trigger: { player: "dying" },
			filter(event, player) {
				if (event.name == "dying") {
					return player.isDying();
				}
				return true;
			},
			async content(event, trigger, player) {
				player.awakenSkill(event.name);
				const num = player.maxHp - player.hp;
				await player.recover(num);
				await player.draw(num);
				await player.removeSkills("old_dcyizheng");
				if (player.hasSkill("dcboxuan")) {
					player.storage.dcboxuan = true;
				}
				game.log(player, "修改了", "#g【博玄】");
			},
			ai: {
				order: 5,
				result: {
					player: 1,
				},
			},
		},
		//新杀诸葛均
		old_dcgumai: {
			audio: "dcgumai",
			trigger: {
				player: "damageBegin3",
				source: "damageBegin1",
			},
			usable: 1,
			filter(event, player) {
				return player.countCards("h");
			},
			async content(event, trigger, player) {
				const suit = get.suit(player.getCards("h")[0], player),
					bool = player.getCards("h").every(i => get.suit(i, player) == suit);
				await player.showHandcards(`${get.translation(player)}发动了【孤脉】`);
				const result = await player
					.chooseControl("+1", "-1")
					.set("prompt", "令此伤害+1或-1")
					.set("ai", () => {
						if (_status.event.eff < 0) {
							return 1;
						}
						return 0;
					})
					.set("eff", get.damageEffect(trigger.player, trigger.source, player))
					.forResult();
				if (result.index == 0) {
					trigger.num++;
					player.popup(" +1 ", "fire");
					game.log(player, "令此伤害+1");
				}
				if (result.index == 1) {
					trigger.num--;
					player.popup(" -1 ", "water");
					game.log(player, "令此伤害-1");
				}
				if (bool) {
					const result2 = await player
						.chooseToDiscard("h", "是否弃置一张手牌并重置【孤脉】？")
						.set("ai", card => {
							const { player, eff } = get.event();
							if (eff) {
								return 7 - get.value(card);
							}
							return 0;
						})
						.set("eff", player.countCards("hs", card => player.hasValueTarget(card) && get.tag(card, "damage")) > 0)
						.forResult();
					if (result2.bool) {
						player.storage.counttrigger.old_dcgumai--;
					}
				}
			},
		},
		//陆凯
		old_bushi: {
			audio: "lkbushi",
			getBushi: function (player) {
				if (!player.storage.old_bushi) return ["spade", "heart", "club", "diamond"];
				return player.storage.old_bushi;
			},
			onremove: true,
			trigger: {
				player: "phaseZhunbeiBegin",
			},
			direct: true,
			locked: false,
			content() {
				"step 0";
				var list = lib.skill.old_bushi.getBushi(player);
				list = list.map(function (i) {
					return ["", "", "lukai_" + i];
				});
				var next = player.chooseToMove("卜筮：是否调整【卜筮】的花色顺序？");
				next.set("list", [
					[
						"无次数限制/使用打出摸牌<br>成为目标拿牌/结束阶段或被指定时拿牌",
						[list, "vcard"],
						function (list) {
							var list2 = list.map(function (i) {
								return get.translation(i[2].slice(6));
							});
							return "你使用" + list2[0] + "牌无次数限制；使用或打出" + list2[1] + "时，摸两张牌；<br>结束阶段，或当你成为" + list2[2] + "牌目标后，获得一张" + list2[3] + "牌";
						},
					],
				]);
				next.set("processAI", function () {
					var player = _status.event.player;
					var list = lib.skill.old_bushi.getBushi(player);
					var list2 = [];
					var hs = player.getCards("hs", function (card) {
						return player.hasValueTarget(card);
					});
					list.sort(function (a, b) {
						return hs.filter(i => get.suit(i) == b).length - hs.filter(i => get.suit(i) == a).length;
					});
					list2.push(list.shift());
					hs = player.getCards("hs", "sha");
					list.sort(function (a, b) {
						return hs.filter(i => get.suit(i) == b).length - hs.filter(i => get.suit(i) == a).length;
					});
					list2.unshift(list.shift());
					list.randomSort();
					list2.addArray(list);
					return [list2.map(i => ["", "", "lukai_" + i])];
				});
				("step 1");
				if (result.bool) {
					var list = lib.skill.old_bushi.getBushi(player),
						list2 = result.moved[0].map(function (i) {
							return i[2].slice(6);
						});
					for (var i = 0; i < 4; i++) {
						if (list[i] != list2[i]) {
							player.logSkill("old_bushi");
							player.storage.old_bushi = list2;
							var str = "#g";
							for (var j = 0; j < 4; j++) {
								str += get.translation(list2[j]);
								if (j != 3) str += "/";
							}
							game.log(player, "将", "#g【卜筮】", "的花色序列改为", str);
							game.delayx();
							break;
						}
					}
				}
			},
			mark: true,
			marktext: "筮",
			intro: {
				content: function (storage, player) {
					var list = lib.skill.old_bushi.getBushi(player).map(i => get.translation(i));
					return "①你使用" + list[0] + "牌无次数限制；当你使用或打出" + list[1] + "牌后，你摸两张牌；结束阶段，或当你成为" + list[2] + "牌的目标后，你从牌堆或弃牌堆获得一张" + list[3] + "牌。②准备阶段开始时，你可调整此技能中四种花色的对应顺序。";
				},
			},
			group: ["old_bushi_unlimit", "old_bushi_draw", "old_bushi_gain"],
			subSkill: {
				unlimit: {
					mod: {
						cardUsable: function (card, player) {
							var list = lib.skill.old_bushi.getBushi(player);
							if (list[0] == get.suit(card)) return Infinity;
						},
					},
					trigger: {
						player: "useCard1",
					},
					forced: true,
					popup: false,
					silent: true,
					firstDo: true,
					filter: function (event, player) {
						if (event.addCount === false) return true;
						var list = lib.skill.old_bushi.getBushi(player);
						return list[0] == get.suit(event.card);
					},
					content() {
						trigger.addCount = false;
						var stat = player.getStat().card,
							name = trigger.card.name;
						if (stat[name] && typeof stat[name] == "number") stat[name]--;
					},
					sub: true,
				},
				draw: {
					audio: "lkbushi",
					trigger: {
						player: ["useCard", "respond"],
					},
					forced: true,
					locked: false,
					filter: function (event, player) {
						var list = lib.skill.old_bushi.getBushi(player);
						return list[1] == get.suit(event.card);
					},
					content() {
						player.draw(2);
					},
					sub: true,
				},
				gain: {
					audio: "lkbushi",
					trigger: {
						player: "phaseJieshuBegin",
						target: "useCardToTargeted",
					},
					filter: function (event, player) {
						var list = lib.skill.old_bushi.getBushi(player);
						if (event.name != "phaseJieshu") return list[2] == get.suit(event.card) && !event.excluded.contains(player);
						else return true;
					},
					forced: true,
					locked: false,
					content() {
						var list = lib.skill.old_bushi.getBushi(player);
						var card = get.cardPile(function (card) {
							return get.suit(card, false) == list[3];
						});
						if (card) player.gain(card, "gain2");
					},
					sub: true,
				},
			},
		},
		old_zhongzhuang: {
			audio: "lkzhongzhuang",
			trigger: {
				source: ["damageBegin1", "damageBegin4"],
			},
			forced: true,
			filter: function (event, player, name) {
				// if (!event.card || event.card.name != "sha" || event.getParent().type != "card") return false;
				var range = player.getAttackRange();
				if (name == "damageBegin1") return range < 3;
				return range > 3 && event.num > 1;
			},
			content() {
				if (event.triggername == "damageBegin1") trigger.num++;
				else trigger.num = 1;
			},
			global: "old_zhongzhuang_ai",
			subSkill: {
				ai: {
					ai: {
						filterDamage: true,
						skillTagFilter: function (player, tag, arg) {
							// if (arg && arg.card && arg.card.name == "sha") {
							if (arg) {
								if (arg.player && arg.player.hasSkill("old_zhongzhuang") && arg.player.getAttackRange() > 3) return true;
							}
							return false;
						},
					},
				},
			},
		},
		//张琪瑛
		old_falu: {
			subSkill: {
				spade: {
					marktext: "♠︎️",
					intro: {
						name: "紫薇",
						content: "mark",
					},
				},
				heart: {
					marktext: "♥︎️",
					intro: {
						name: "玉清",
						content: "mark",
					},
				},
				club: {
					marktext: "♣︎️",
					intro: {
						name: "后土",
						content: "mark",
					},
				},
				diamond: {
					marktext: "♦︎",
					intro: {
						name: "勾陈",
						content: "mark",
					},
				},
			},
			forced: true,
			audio: "xinfu_falu",
			trigger: {
				player: ["loseAfter", "enterGame"],
				global: ["loseAsyncAfter", "phaseBefore"],
			},
			filter(event, player) {
				if (event.name.indexOf("lose") != 0) {
					return event.name != "phase" || game.phaseNumber == 0;
				}
				if (event.type != "discard" || event.getlx === false) {
					return false;
				}
				var evt = event.getl(player);
				for (var i = 0; i < evt.cards2.length; i++) {
					if (!player.hasMark("old_falu_" + get.suit(evt.cards2[i]))) {
						return true;
					}
				}
				return false;
			},
			content() {
				if (trigger.name.indexOf("lose") !== 0) {
					for (var i = 0; i < lib.suit.length; i++) {
						if (!player.hasMark("old_falu_" + lib.suit[i])) {
							player.addMark("old_falu_" + lib.suit[i]);
						}
					}
					return;
				}
				var evt = trigger.getl(player);
				for (var i = 0; i < evt.cards2.length; i++) {
					var suit = get.suit(evt.cards2[i]);
					if (!player.hasMark("old_falu_" + suit)) {
						player.addMark("old_falu_" + suit);
					}
				}
			},
			ai: {
				threaten: 1.4,
				combo: "old_zhenyi",
			},
		},
		old_dianhua: {
			trigger: {
				player: ["phaseZhunbeiBegin", "phaseJieshuBegin"],
			},
			frequent: true,
			audio: "xinfu_dianhua",
			filter(event, player) {
				for (var i = 0; i < lib.suit.length; i++) {
					if (player.hasMark("old_falu_" + lib.suit[i])) {
						return true;
					}
				}
				return false;
			},
			content() {
				"step 0";
				var num = 0;
				for (var i = 0; i < lib.suit.length; i++) {
					if (player.hasMark("old_falu_" + lib.suit[i])) {
						num++;
					}
				}
				var cards = get.cards(num);
				game.cardsGotoOrdering(cards);
				var next = player.chooseToMove();
				next.set("list", [["牌堆顶", cards], ["牌堆底"]]);
				next.set("prompt", "点化：点击或拖动将牌移动到牌堆顶或牌堆底");
				next.processAI = function (list) {
					var cards = list[0][1],
						player = _status.event.player;
					var target = _status.event.getTrigger().name == "phaseZhunbei" ? player : player.next;
					var att = get.sgn(get.attitude(player, target));
					var top = [];
					var judges = target.getCards("j");
					var stopped = false;
					if (player != target || !target.hasWuxie()) {
						for (var i = 0; i < judges.length; i++) {
							var judge = get.judge(judges[i]);
							cards.sort(function (a, b) {
								return (judge(b) - judge(a)) * att;
							});
							if (judge(cards[0]) * att < 0) {
								stopped = true;
								break;
							} else {
								top.unshift(cards.shift());
							}
						}
					}
					var bottom;
					if (!stopped) {
						cards.sort(function (a, b) {
							return (get.value(b, player) - get.value(a, player)) * att;
						});
						while (cards.length) {
							if (get.value(cards[0], player) <= 5 == att > 0) {
								break;
							}
							top.unshift(cards.shift());
						}
					}
					bottom = cards;
					return [top, bottom];
				};
				("step 1");
				var top = result.moved[0];
				var bottom = result.moved[1];
				top.reverse();
				for (var i = 0; i < top.length; i++) {
					ui.cardPile.insertBefore(top[i], ui.cardPile.firstChild);
				}
				for (i = 0; i < bottom.length; i++) {
					ui.cardPile.appendChild(bottom[i]);
				}
				player.popup(get.cnNumber(top.length) + "上" + get.cnNumber(bottom.length) + "下");
				game.log(player, "将" + get.cnNumber(top.length) + "张牌置于牌堆顶");
				game.updateRoundNumber();
				game.delayx();
			},
			ai: {
				combo: "old_falu",
				threaten: 2.2,
			},
		},
		old_zhenyi: {
			group: ["old_zhenyi_spade", "old_zhenyi_club", "old_zhenyi_heart"],
			trigger: {
				player: "damageEnd",
			},
			audio: "xinfu_zhenyi",
			filter(event, player) {
				//if(!event.hasNature()) return false;
				return player.hasMark("old_falu_diamond");
			},
			prompt2: "弃置「勾陈♦」标记，从牌堆中随机获得每种类型的牌各一张。",
			content() {
				"step 0";
				player.removeMark("old_falu_diamond");
				event.num = 0;
				event.togain = [];
				("step 1");
				var card = get.cardPile2(function (card) {
					for (var i = 0; i < event.togain.length; i++) {
						if (get.type(card, "trick") == get.type(event.togain[i], "trick")) {
							return false;
						}
					}
					return true;
				}, "random");
				if (card) {
					event.togain.push(card);
					event.num++;
					if (event.num < 3) {
						event.redo();
					}
				}
				("step 2");
				if (event.togain.length) {
					player.gain(event.togain, "gain2");
				}
			},
			ai: {
				combo: "old_falu",
			},
		},
		old_zhenyi_spade: {
			trigger: {
				global: "judge",
			},
			direct: true,
			sourceSkill: "old_zhenyi",
			filter(event, player) {
				return player.hasMark("old_falu_spade");
			},
			content() {
				"step 0";
				var str = get.translation(trigger.player) + "的" + (trigger.judgestr || "") + "判定为" + get.translation(trigger.player.judging[0]) + "，是否发动【真仪】，弃置「紫薇♠」标记并修改判定结果？";
				player
					.chooseControl("spade", "heart", "diamond", "club", "cancel2")
					.set("prompt", str)
					.set("ai", function () {
						//return '取消';
						var judging = _status.event.judging;
						var trigger = _status.event.getTrigger();
						var res1 = trigger.judge(judging);
						var list = lib.suit.slice(0);
						var attitude = get.attitude(player, trigger.player);
						if (attitude == 0) {
							return 0;
						}
						var getj = function (suit) {
							return trigger.judge({
								name: get.name(judging),
								nature: get.nature(judging),
								suit: suit,
								number: 5,
							});
						};
						list.sort(function (a, b) {
							return (getj(b) - getj(a)) * get.sgn(attitude);
						});
						if ((getj(list[0]) - res1) * attitude > 0) {
							return list[0];
						}
						return "cancel2";
					})
					.set("judging", trigger.player.judging[0]);
				("step 1");
				if (result.control != "cancel2") {
					player.addExpose(0.25);
					player.removeMark("old_falu_spade");
					player.logSkill("old_zhenyi", trigger.player);
					//player.line(trigger.player);
					player.popup(result.control);
					game.log(player, "将判定结果改为了", "#y" + get.translation(result.control + 2) + 5);
					trigger.fixedResult = {
						suit: result.control,
						color: get.color({ suit: result.control }),
						number: 5,
					};
				}
			},
			ai: {
				rejudge: true,
				tag: {
					rejudge: 1,
				},
				expose: 0.5,
			},
		},
		old_zhenyi_club: {
			audio: "xinfu_zhenyi",
			enable: "chooseToUse",
			sourceSkill: "old_zhenyi",
			viewAsFilter(player) {
				if (player == _status.currentPhase) {
					return false;
				}
				return player.hasMark("old_falu_club") && player.countCards("hs") > 0;
			},
			filterCard: true,
			position: "hs",
			viewAs: {
				name: "tao",
			},
			prompt: "弃置「后土♣」标记，将一张手牌当桃使用",
			check(card) {
				return 15 - get.value(card);
			},
			precontent() {
				player.removeMark("old_falu_club");
			},
		},
		old_zhenyi_heart: {
			trigger: {
				source: "damageBegin1",
			},
			audio: "xinfu_zhenyi",
			sourceSkill: "old_zhenyi",
			filter(event, player) {
				return player.hasMark("old_falu_heart");
			},
			check(event, player) {
				if (get.attitude(player, event.player) >= 0) {
					return false;
				}
				if (
					event.player.hasSkillTag("filterDamage", null, {
						player: player,
						card: event.card,
					})
				) {
					return false;
				}
				return true;
				//return player.hasMark('old_falu_spade')||get.color(ui.cardPile.firstChild)=='black';
			},
			prompt2(event) {
				return "弃置「玉清♥」标记，令对" + get.translation(event.player) + "即将造成的伤害+1。";
			},
			logTarget: "player",
			content() {
				player.removeMark("old_falu_heart");
				trigger.num++;
			},
		},
		//TW霍峻
		old_twjieyu: {
			audio: "twjieyu",
			trigger: { player: ["phaseJieshuBegin", "damageEnd"] },
			filter(event, player) {
				if (event.name != "phaseJieshu") {
					var history = player.getHistory("damage");
					for (var i of history) {
						if (i == event) break;
						return false;
					}
					var all = player.actionHistory;
					for (var i = all.length - 2; i >= 0; i--) {
						if (all[i].damage.length) return false;
						if (all[i].isRound) break;
					}
				}
				return (
					player.countCards("h") > 0 &&
					!player.hasCard(function (card) {
						return !lib.filter.cardDiscardable(card, player, "old_twjieyu");
					}, "h")
				);
			},
			check(event, player) {
				var cards = [],
					names = [];
				for (var i = 0; i < ui.discardPile.childNodes.length; i++) {
					var card = ui.discardPile.childNodes[i];
					if (get.type(card, null, false) == "basic" && !names.includes(card.name)) {
						cards.push(card);
						names.push(card.name);
					}
				}
				if (!names.includes("shan") || !names.includes("tao")) return false;
				if (player.countCards("h", "shan") < 2 && player.countCards("h", "tao") < 1) return true;
				return false;
			},
			content() {
				"step 0";
				player.discard(player.getCards("h"));
				("step 1");
				var cards = [],
					names = [];
				for (var i = 0; i < ui.discardPile.childNodes.length; i++) {
					var card = ui.discardPile.childNodes[i];
					if (get.type(card, null, false) == "basic" && !names.includes(card.name)) {
						cards.push(card);
						names.push(card.name);
					}
				}
				if (cards.length) player.gain(cards, "gain2");
			},
		},
		//TW郭淮
		old_twjingce: {
			marktext: "策",
			intro: {
				name: "策",
				content: "mark",
			},
			audio: "twjingce",
			trigger: { player: "useCardAfter" },
			filter(event, player) {
				var evt = event.getParent("phaseUse");
				if (!evt || evt.player != player) return false;
				var history = player.getHistory("useCard", function (evtx) {
					return evtx.getParent("phaseUse") == evt;
				});
				return history && history.indexOf(event) == player.hp - 1;
			},
			frequent: true,
			content() {
				"step 0";
				player.draw(player.hp);
				("step 1");
				if (
					player.getHistory("sourceDamage").length ||
					player.getHistory("gain", function (evt) {
						return evt.getParent("phaseUse") == trigger.getParent("phaseUse") && evt.getParent().name == "draw";
					}).length > 1
				)
					player.addMark("old_twjingce", 1);
			},
		},
		old_yuzhang: {
			audio: "yuzhang",
			trigger: {
				player: "damageEnd",
			},
			filter(event, player) {
				return event.source && player.hasMark("old_twjingce");
			},
			direct: true,
			content() {
				"step 0";
				var choiceList = ["令" + get.translation(trigger.source) + "本回合不能再使用或打出牌"];
				var num = trigger.source.hp;
				event.num = num;
				if (trigger.source.countCards("he")) choiceList.push("令" + get.translation(trigger.source) + "弃置" + get.cnNumber(num) + "张牌");
				player
					.chooseControl("cancel2")
					.set("prompt2", get.prompt2("old_yuzhang"))
					.set("choiceList", choiceList)
					.set("ai", function () {
						var player = _status.event.player,
							source = _status.event.source;
						if (get.attitude(player, source) >= 0) return "cancel2";
						if (source.hasSkillTag("noh") || source.hasSkillTag("noe") || source.countCards("h") >= 4) return 0;
						if (source.hp > 1 && source.countCards("he") > 1) return 1;
						return [0, 1].randomGet();
					})
					.set("source", trigger.source);
				("step 1");
				if (result.control != "cancel2") {
					player.logSkill("old_yuzhang", trigger.source);
					player.removeMark("old_twjingce", 1);
					if (result.index == 0) trigger.source.addTempSkill("old_yuzhang_dontuse");
					else trigger.source.chooseToDiscard("he", event.num, true);
				}
			},
			group: "old_yuzhang_skip",
			subSkill: {
				skip: {
					audio: "yuzhang",
					trigger: {
						player: ["phaseZhunbeiBefore", "phaseJudgeBefore", "phaseDrawBefore", "phaseUseBefore", "phaseDiscardBefore", "phaseJieshuBefore"],
					},
					filter(event, player) {
						return player.hasMark("old_twjingce");
					},
					prompt2(event, player) {
						var str = "弃置一枚“策”并跳过";
						var list = lib.skill.old_yuzhang.subSkill.skip.trigger.player.slice();
						list = list.map(i => i.slice(0, -6));
						str += ["准备", "判定", "摸牌", "出牌", "弃牌", "结束"][list.indexOf(event.name)];
						str += "阶段";
						return str;
					},
					check(event, player) {
						if (event.name == "phaseDiscard") return player.needsToDiscard();
						if (event.name == "phaseJudge") return player.countCards("j");
						return false;
					},
					content() {
						player.removeMark("old_twjingce", 1);
						trigger.cancel();
					},
				},
				dontuse: {
					charlotte: true,
					mark: true,
					mod: {
						cardEnabled2(card) {
							return false;
						},
					},
					intro: {
						content: "不能使用或打出牌",
					},
				},
			},
			ai: {
				combo: "old_twjingce",
			},
		},
		//全琮
		old_zhenshan: {
			audio: "zhenshan",
			enable: ["chooseToUse", "chooseToRespond"],
			filter(event, player) {
				if (event.type == "wuxie") return false;
				var nh = player.countCards("h");
				if (
					!game.hasPlayer(function (current) {
						return current != player && current.countCards("h") < nh;
					})
				) {
					return false;
				}
				for (var i of lib.inpile) {
					if (get.type(i) != "basic") continue;
					var card = { name: i, isCard: true };
					if (event.filterCard(card, player, event)) return true;
					if (i == "sha") {
						for (var j of lib.inpile_nature) {
							card.nature = j;
							if (event.filterCard(card, player, event)) return true;
						}
					}
				}
				return false;
			},
			chooseButton: {
				dialog(event, player) {
					var list = [];
					for (var i of lib.inpile) {
						if (get.type(i) != "basic") continue;
						var card = { name: i, isCard: true };
						if (event.filterCard(card, player, event)) list.push(["基本", "", i]);
						if (i == "sha") {
							for (var j of lib.inpile_nature) {
								card.nature = j;
								if (event.filterCard(card, player, event)) list.push(["基本", "", i, j]);
							}
						}
					}
					return ui.create.dialog("振赡", [list, "vcard"], "hidden");
				},
				check(button) {
					var player = _status.event.player;
					var card = { name: button.link[2], nature: button.link[3] };
					if (card.name == "jiu") return 0;
					if (
						game.hasPlayer(function (current) {
							return get.effect(current, card, player, player) > 0;
						})
					) {
						if (card.name == "sha") {
							var eff = player.getUseValue(card);
							if (eff > 0) return 2.9 + eff / 10;
							return 0;
						} else if (card.name == "tao" || card.name == "shan") {
							return 4;
						}
					}
					return 0;
				},
				backup(links, player) {
					return {
						filterCard() {
							return false;
						},
						viewAs: {
							name: links[0][2],
							nature: links[0][3],
							isCard: true,
						},
						selectCard: -1,
						precontent() {
							"step 0";
							player
								.chooseTarget(
									"选择一名手牌数小于你的角色交换手牌",
									function (card, player, target) {
										return target != player && target.countCards("h") < player.countCards("h");
									},
									true
								)
								.set("ai", function (target) {
									return get.attitude(player, target) * Math.sqrt(target.countCards("h") + 1);
								});
							("step 1");
							if (result.bool) {
								player.logSkill("old_zhenshan", result.targets);
								//player.addTempSkill("old_zhenshan_used");
								player.swapHandcards(result.targets[0]);
								delete event.result.skill;
							} else event.finish();
							("step 2");
							game.delayx();
						},
					};
				},
				prompt(links, player) {
					return "选择" + get.translation(links[0][3] || "") + "【" + get.translation(links[0][2]) + "】的目标";
				},
			},
			subSkill: {
				used: { charlotte: true },
			},
			ai: {
				order() {
					var player = _status.event.player;
					var event = _status.event;
					var nh = player.countCards("h");
					if (
						game.hasPlayer(function (current) {
							return get.attitude(player, current) > 0 && current.countCards("h") < nh;
						})
					) {
						if (event.type == "dying") {
							if (event.filterCard({ name: "tao" }, player, event)) {
								return 0.5;
							}
						} else {
							if (event.filterCard({ name: "tao" }, player, event) || event.filterCard({ name: "shan" }, player, event)) {
								return 4;
							}
							if (event.filterCard({ name: "sha" }, player, event)) {
								return 2.9;
							}
						}
					}
					return 0;
				},
				save: true,
				respondSha: true,
				respondShan: true,
				skillTagFilter(player, tag, arg) {
					//if (player.hasSkill("old_zhenshan_used")) return false;
					var nh = player.countCards("h");
					return game.hasPlayer(function (current) {
						return current != player && current.countCards("h") < nh;
					});
				},
				result: {
					player(player) {
						if (_status.event.type == "dying") {
							return get.attitude(player, _status.event.dying);
						} else {
							return 1;
						}
					},
				},
			},
		},
		//TW鲍信
		old_twmutao: {
			audio: "twmutao",
			enable: "phaseUse",
			filterTarget(card, player, target) {
				return target.countCards("h");
			},
			usable: 1,
			async content(event, trigger, player) {
				let source = event.target;
				let cards = source.getCards("h", { name: "sha" });
				if (!cards.length) {
					game.log("但", source, "没有", "#y杀", "！");
					return;
				}
				let togive = source.getNext();
				let gained;
				while (true) {
					let card = source.getCards("h", { name: "sha" }).randomGet();
					if (togive == gained) break;
					if (togive.isIn()) {
						await source.give(card, togive);
						gained = togive;
					}
					let num = togive == source ? 1 : 0;
					if (source.countCards("h", { name: "sha" }) > num) togive = togive.getNext();
					else break;
				}
				source.line(togive);
				let num = togive.countCards("h", { name: "sha" });
				if (num) await togive.damage(Math.min(3, num), source);
			},
			ai: {
				order: 10,
				result: {
					player(player, target) {
						var numx = target.countCards("h", { name: "sha" }),
							targetx = target,
							map = {};
						for (var i = 0; i < numx; i++) {
							targetx = targetx.getNext();
							map[targetx.playerid] ??= 0;
							map[targetx.playerid]++;
						}
						var att = get.damageEffect(targetx, player, player);
						return att * numx * Math.min(3, targetx.countCards("h", { name: "sha" }) + map[targetx.playerid]);
					},
				},
			},
		},
		old_twyimou: {
			audio: "twyimou",
			trigger: { global: "damageEnd" },
			filter(event, player) {
				return event.player.isIn() && get.distance(event.player, player) <= 1;
			},
			logTarget: "player",
			check(event, player) {
				return get.attitude(player, event.player) > 0;
			},
			content() {
				"step 0";
				if (trigger.player != player) {
					player.addExpose(0.3);
				}
				var target = get.translation(trigger.player);
				var choiceList = ["令" + target + "获得牌堆里的一张【杀】", "令" + target + "将一张手牌交给另一名角色，然后" + target + "摸两张牌", "背水！" + (trigger.player != player ? "将所有手牌交给" + target + "，然后" : "") + "依次执行以上所有选项"];
				var list = ["选项一"];
				if (trigger.player.countCards("h") && game.hasPlayer(t => t !== trigger.player)) {
					list.push("选项二");
				} else {
					choiceList[1] = '<span style="opacity:0.5">' + choiceList[1] + "</span>";
				}
				if (player.countCards("h") && player !== trigger.player) {
					list.push("背水！");
				} else {
					choiceList[2] = '<span style="opacity:0.5">' + choiceList[2] + "</span>";
				}
				player
					.chooseControl(list)
					.set("prompt", "毅谋：请选择一项")
					.set("choiceList", choiceList)
					.set("ai", function () {
						var evt = _status.event.getTrigger(),
							list = _status.event.list;
						var player = _status.event.player;
						var target = evt.player;
						if ((target.hp >= target.countCards("h") + 2 || target == player) && list.includes("背水！")) {
							return "背水！";
						}
						if (target.countCards("h") && list.includes("选项二")) {
							return "选项二";
						}
						return "选项一";
					})
					.set("list", list);
				("step 1");
				event.choice = result.control;
				if (event.choice == "背水！" && player != trigger.player) {
					player.give(player.getCards("h"), trigger.player);
				}
				("step 2");
				if (event.choice != "选项二") {
					var card = get.cardPile2(function (card) {
						return card.name == "sha";
					});
					if (card) {
						trigger.player.gain(card, "gain2");
					} else {
						game.log("但牌堆里已经没有", "#y杀", "了！");
					}
					if (event.choice == "选项一") {
						event.finish();
					}
				}
				("step 3");
				if (event.choice != "选项一") {
					if (trigger.player.countCards("h") && game.hasPlayer(t => t !== trigger.player)) {
						trigger.player.chooseCardTarget({
							prompt: "将一张手牌交给另一名其他角色并摸两张牌",
							filterCard: true,
							forced: true,
							filterTarget: lib.filter.notMe,
							ai1(card) {
								return 1 / Math.max(0.1, get.value(card));
							},
							ai2(target) {
								var player = _status.event.player,
									att = get.attitude(player, target);
								if (target.hasSkillTag("nogain")) {
									att /= 9;
								}
								return 4 + att;
							},
						});
					} else {
						event.finish();
					}
				}
				("step 4");
				if (!result?.bool || !result.cards?.length || !result.targets?.length) {
					return;
				}
				var target = result.targets[0];
				trigger.player.line(target);
				trigger.player.give(result.cards, target);
				trigger.player.draw(2);
			},
			ai: {
				threaten: 2.5,
			},
		},
		//TW张曼成
		old_twbudao: {
			audio: "twbudao",
			trigger: {
				player: "phaseZhunbeiBegin",
			},
			derivation: ["twzhouhu", "twharvestinori", "twzuhuo"],
			limited: true,
			skillAnimation: true,
			animationColor: "metal",
			check(event, player) {
				return !player.hasUnknown() || !player.hasFriend();
			},
			skillValue: {
				twzhouhu: target => (Math.random() < 0.6 ? 0.1 : 1),
				twzuhuo: (target, player) => (get.damageEffect(target, player, player) > 0 ? 0.1 : 1),
				twharvestinori: target => 0.9 + Math.random() / 5,
				twhuangjin: target => Math.random() / 5,
				twguimen: target => Math.sqrt(Math.min(3, target.countCards("he", { suit: "spade" }))) * 0.09,
				twzhouzu: target => {
					var rand = Math.random();
					if (rand < 0.8) return 1 - Math.sqrt(0.8 - rand);
					return 1;
				},
				twdidao: (target, player) => {
					if (
						[target, player].some(current =>
							current.getSkills().some(skill => {
								var info = get.info(skill);
								if (!info || !info.ai || !info.ai.rejudge) return false;
								return true;
							})
						)
					) {
						return 0.05;
					}
					return 0.85 + Math.random() / 5;
				},
			},
			content() {
				"step 0";
				player.awakenSkill("old_twbudao");
				player.loseMaxHp();
				player.recover();
				var skills = lib.skill.old_twbudao.derivation,
					map = lib.skill.old_twbudao.skillValue;
				skills = skills.randomGets(3);
				var target = game.filterPlayer().sort((a, b) => get.attitude(player, b) - get.attitude(player, a))[0];
				if (player.identity == "nei" || get.attitude(player, target) < 6) target = player;
				player
					.chooseControl(skills)
					.set(
						"choiceList",
						skills.map(function (i) {
							return "<div class='skill'>【" + get.translation(lib.translate[i + "_ab"] || get.translation(i).slice(0, 2)) + "】</div><div>" + get.skillInfoTranslation(i, player) + "</div>";
						})
					)
					.set("displayIndex", false)
					.set("prompt", "布道：选择获得一个技能")
					.set("ai", () => {
						return _status.event.choice;
					})
					.set("choice", skills.sort((a, b) => (map[b](target, player) || 0.5) - (map[a](target, player) || 0.5))[0]);
				("step 1");
				var skill = result.control;
				player.addSkills(skill);
				event.old_twbudao_skill = skill;
				player.chooseTarget(lib.filter.notMe, "是否令一名其他角色也获得【" + get.translation(skill) + "】？").set("ai", function (target) {
					var player = _status.event.player;
					if (player.identity == "nei") return 0;
					return get.attitude(player, target);
				});
				("step 2");
				if (result.bool) {
					var target = result.targets[0];
					event.target = target;
					player.line(target, "green");
					target.addSkills(event.old_twbudao_skill);
					var cards = target.getCards("he");
					if (!cards.length) event.finish();
					else if (cards.length == 1) event._result = { bool: true, cards: cards };
					else target.chooseCard("he", true, "交给" + get.translation(player) + "一张牌作为学费");
				} else event.finish();
				("step 3");
				if (result.bool) target.give(result.cards, player);
			},
			mark: true,
			intro: {
				content: "limited",
			},
			init: (player, skill) => (player.storage[skill] = false),
		},
		//牛辅董翓
		old_twjuntun: {
			audio: "twjuntun",
			trigger: {
				global: ["phaseBefore", "dyingAfter"],
				player: "enterGame",
			},
			init(player) {
				lib.skill.baonvezhi.change(player, 0);
			},
			direct: true,
			derivation: ["old_twxiongjun", "baonvezhi_faq"],
			group: "old_twjuntun_extra",
			filter(event, player) {
				return (
					(event.name != "phase" || game.phaseNumber == 0) &&
					game.hasPlayer(current => {
						return !current.hasSkill("old_twxiongjun");
					})
				);
			},
			content() {
				"step 0";
				player
					.chooseTarget(get.prompt("old_twjuntun"), "令一名角色获得【凶军】", (card, player, target) => {
						return !target.hasSkill("old_twxiongjun");
					})
					.set("ai", target => get.attitude(player, target) - 2);
				("step 1");
				if (result.bool) {
					var target = result.targets[0];
					player.logSkill("old_twjuntun", target);
					target.addSkills("old_twxiongjun");
					if (target != player) player.addExpose(0.25);
				}
			},
			subSkill: {
				extra: {
					audio: "twjuntun",
					trigger: { global: "damageSource" },
					forced: true,
					locked: false,
					filter(event, player) {
						return event.source && event.source.hasSkill("old_twxiongjun") && event.source != player;
					},
					logTarget: "source",
					content() {
						lib.skill.baonvezhi.change(player, trigger.num);
					},
				},
			},
		},
		old_twxiongjun: {
			audio: "twxiongjun",
			init(player) {
				lib.skill.baonvezhi.change(player, 0);
			},
			trigger: { source: "damageSource" },
			forced: true,
			content() {
				var targets = game.filterPlayer(current => current.hasSkill("old_twxiongjun")).sortBySeat();
				player.line(targets, "green");
				game.asyncDraw(targets);
			},
		},
		old_twxiongxi: {
			audio: "twxiongxi",
			enable: "phaseUse",
			init(player) {
				lib.skill.baonvezhi.change(player, 0);
			},
			filterCard: () => true,
			selectCard() {
				return (lib.skill.baonvezhi.baonvezhi_max || 5) - _status.event.player.countMark("baonvezhi");
			},
			check(card) {
				return 8 - get.value(card);
			},
			position: "he",
			filterTarget(card, player, target) {
				return target != player && !player.getStorage("old_twxiongxi_mark").includes(target);
			},
			content() {
				if (!player.hasSkill("old_twxiongxi_mark")) player.addTempSkill("old_twxiongxi_mark");
				player.markAuto("old_twxiongxi_mark", [target]);
				target.damage();
			},
			subSkill: {
				mark: {
					charlotte: true,
					onremove: true,
				},
			},
			ai: {
				combo: "old_twjuntun",
				expose: 0.25,
				order: 1,
				result: {
					player(player, target) {
						let num = -ui.selected.cards.length;
						if (player.hasSkill("twxiongjun") && !player.storage.counttrigger?.twxiongjun)
							num += game.countPlayer(current => {
								if (current.hasSkill("twxiongjun")) return get.sgnAttitude(player, current);
							});
						return num * get.effect(player, { name: "draw" }, player, player);
					},
					target(player, target) {
						return get.damageEffect(target, player, target);
					},
				},
			},
		},
		//侠童渊
		old_twchuanshu: {
			audio: "twchuanshu",
			trigger: { player: "phaseZhunbeiBegin" },
			// limited: true,
			// skillAnimation: true,
			// animationColor: "qun",
			async cost(event, trigger, player) {
				event.result = await player
					.chooseTarget(get.prompt2("old_twchuanshu"))
					.set("ai", target => {
						if (!get.event().bool) return 0;
						let val = get.attitude(_status.event.player, target);
						if (target.hasSkill("twchaofeng")) val += ai.guessTargetPoints(target).max;
						return val * get.threaten(target);
					})
					.set(
						"bool",
						(() => {
							const fs =
								game.findPlayer(cur => {
									return get.attitude(player, cur) > 2 && (cur.hasSkill("twchaofwng") || get.threaten(cur) > player.getHp());
								}) || player;
							return (
								game.countPlayer(cur => {
									let eff = 0;
									if (get.attitude(player, cur) < 0) eff = get.effect(cur, { name: "sha", nature: "fire", isCard: true }, player, player);
									if (fs.hasSkill("twchaofeng")) eff *= 2 - 1 / ai.guessTargetPoints(fs, player).max;
									return Math.max(0, eff);
								}) >
								10 * player.getHp()
							);
						})()
					)
					.forResult();
			},
			async content(event, trigger, player) {
				// player.awakenSkill("old_twchuanshu");
				const target = event.targets[0];
				target.addMark("old_twchuanshu_mark", 1, false);
				target.addSkill("old_twchuanshu_effect");
				target.markAuto("old_twchuanshu_effect", [player]);
				player.addSkill("old_twchuanshu_clear");
				player.markAuto("old_twchuanshu_clear", [target]);
			},
			subSkill: {
				mark: {
					charlotte: true,
				},
				effect: {
					audio: "twchuanshu",
					trigger: {
						player: "compare",
						target: "compare",
					},
					direct: true,
					forced: true,
					charlotte: true,
					nopop: true,
					mark: true,
					intro: {
						content(storage, player) {
							var shisyou = player.getStorage("old_twchuanshu_effect").filter(i => i.isIn());
							var str = "<li>拼点牌点数+3；";
							if (player.hasMark("old_twchuanshu_mark")) {
								str += "<li>使用的下一张【杀】对除" + get.translation(shisyou) + "外的角色造成伤害时，此伤害+" + player.countMark("old_twchuanshu_mark") + "；";
								if (!shisyou.includes(player)) {
									str += "<li>使用的下一张【杀】结算结束后，" + get.translation(shisyou) + "摸等同于伤害值的牌；";
								}
							}
							str = str.slice(0, -1) + "。";
							return str;
						},
					},
					filter(event, player, name) {
						if (event.player == player && event.iwhile > 0) return false;
						return (player == event.player ? event.num1 : event.num2) < 13;
					},
					content() {
						game.log(player, "的拼点牌点数+3");
						if (player == trigger.player) trigger.num1 = Math.min(13, trigger.num1 + 3);
						else trigger.num2 = Math.min(13, trigger.num2 + 3);
					},
					group: "old_twchuanshu_damage",
				},
				damage: {
					charlotte: true,
					trigger: { player: ["useCard", "useCardAfter"], source: "damageBegin1" },
					filter(event, player, name) {
						if (name == "useCard") return event.card.name == "sha" && player.hasMark("old_twchuanshu_mark");
						if (name == "damageBegin1") return event.card && event.card.old_twchuanshu_mark && !player.getStorage("old_twchuanshu_effect").includes(event.player);
						return (
							event.card.old_twchuanshu_mark &&
							player.hasHistory("sourceDamage", function (evt) {
								return evt.card == event.card;
							}) &&
							player.getStorage("old_twchuanshu_effect").filter(function (target) {
								return target.isIn() && target != player;
							}).length
						);
					},
					forced: true,
					content() {
						var name = event.triggername;
						if (name == "useCard") {
							var num = player.countMark("old_twchuanshu_mark");
							trigger.card.old_twchuanshu_mark = num;
							player.removeMark("old_twchuanshu_mark", num, false);
						} else if (name == "damageBegin1") trigger.num += trigger.card.old_twchuanshu_mark;
						else {
							var num1 = trigger.card.old_twchuanshu_mark;
							var num2 = 0;
							player.getHistory("sourceDamage", function (evt) {
								if (evt.card == trigger.card) num2 += evt.num;
							});
							var targets = player.getStorage("old_twchuanshu_effect").filter(function (target) {
								return target.isIn() && target != player;
							});
							if (!targets.length) return;
							if (targets.length == 1) targets[0].draw(num1 * num2);
							else game.asyncDraw(targets, num1 * num2);
						}
					},
				},
				clear: {
					charlotte: true,
					onremove: true,
					trigger: { player: "phaseBegin" },
					filter(event, player) {
						return player.getStorage("old_twchuanshu_clear").length;
					},
					forced: true,
					silent: true,
					content() {
						"step 0";
						var targets = player.getStorage("old_twchuanshu_clear");
						for (var target of targets) {
							target.unmarkAuto("old_twchuanshu_effect", [player]);
							if (!target.getStorage("old_twchuanshu_effect").length) target.removeSkill("old_twchuanshu_effect");
						}
						("step 1");
						player.removeSkill("old_twchuanshu_clear");
					},
				},
			},
		},
		//侠关羽
		old_twzhongyi: {
			mod: {
				targetInRange(card) {
					if (card.name == "sha") return true;
				},
			},
			audio: "twzhongyi",
			trigger: { player: "useCardAfter" },
			filter(event, player) {
				if (event.card.name != "sha") return false;
				return player.getHistory("sourceDamage", evt => evt.card && evt.card == event.card).length;
			},
			forced: true,
			async content(event, trigger, player) {
				const num = player.getHistory("sourceDamage", evt => evt.card && evt.card == trigger.card).reduce((sum, evt) => sum + evt.num, 0);
				// const num = game.countPlayer2(target => {
				// 	return target.hasHistory("damage", evt => {
				// 		return evt.card && evt.card == trigger.card;
				// 	});
				// });
				const num2 = 1 + player.getAllHistory("custom", evt => evt.old_twzhongyi).length;
				let choice = ["摸牌"],
					choiceList = ["摸" + get.cnNumber(num) + "张牌"];
				if (player.isDamaged()) {
					choice.addArray(["回血", "背水！"]);
					choiceList.addArray(["回复" + num + "点体力", "失去" + num2 + "点体力，依次执行以上所有项"]);
				}
				const { control } = await player
					.chooseControl(choice)
					.set("prompt", "忠义：请选择一项")
					.set("choiceList", choiceList)
					.set("ai", () => {
						const player = get.event().player;
						const num = get.event().num,
							num2 = get.event().num2;
						if (player.isHealthy()) return "摸牌";
						return player.hp + player.countCards("hs", card => player.canSaveCard(card, player)) - num2 > 0 && num > num2 ? "背水！" : "回血";
					})
					.set("num", num)
					.set("num2", num2)
					.forResult();
				if (control != "cancel2") {
					if (control == "背水！") {
						await player.loseHp(num2);
						player.getHistory("custom").push({ old_twzhongyi: true });
					}
					if (control != "回血") await player.draw(num);
					if (control != "摸牌") await player.recover(num);
				}
			},
		},
		old_twchue: {
			audio: "twchue",
			trigger: { player: "useCardToPlayer" },
			filter(event, player) {
				return event.card.name == "sha" && event.isFirstTarget && event.targets.length == 1 && game.hasPlayer(target => !event.targets.includes(target) && player.canUse(event.card, target));
			},
			prompt2: "失去1点体力，额外指定至多等同于你体力值的目标",
			check(event, player) {
				return player.hp + player.countCards("hs", card => player.canSaveCard(card, player)) - 1 > 0;
			},
			async content(event, trigger, player) {
				await player.loseHp();
				const targetx = trigger.targets.slice(),
					num = player.getHp();
				if (!num) return;
				const { bool, targets } = await player
					.chooseTarget("额外指定至多" + get.cnNumber(num) + "名目标", [1, num], (card, player, target) => {
						const trigger = _status.event.getTrigger();
						return !trigger.targets.includes(target) && player.canUse(trigger.card, target);
					})
					.set("ai", target => {
						const player = get.event().player,
							trigger = _status.event.getTrigger();
						return get.effect(target, trigger.card, player, player);
					})
					.forResult();
				if (!bool) return;
				player.line(targets);
				trigger.targets.addArray(targets);
			},
			group: ["old_twchue_gain", "old_twchue_effect"],
			marktext: "勇",
			intro: {
				name: "勇",
				content: "mark",
			},
			subSkill: {
				gain: {
					audio: "twchue",
					trigger: { player: ["damageEnd", "loseHpEnd"] },
					forced: true,
					locked: false,
					async content(event, trigger, player) {
						await player.draw();
						player.addMark("old_twchue", 1);
					},
				},
				effect: {
					audio: "twchue",
					trigger: { global: "phaseEnd" },
					filter(event, player) {
						const card = new lib.element.VCard({ name: "sha" });
						return (
							player.hasUseTarget(card) &&
							/*player.getHistory('useSkill',evt=>{
                                return evt.skill=='twchue_gain';
                            }).length&&player.getHp()&&*/ player.countMark("old_twchue") >= player.getHp()
						);
					},
					check(event, player) {
						return player.hasValueTarget(new lib.element.VCard({ name: "sha" }));
					},
					prompt2(event, player) {
						const num = player.getHp();
						return "失去" + num + "个“勇”标记，视为使用一张造成的伤害+1且可以额外指定" + num + "个目标的【杀】";
					},
					async content(event, trigger, player) {
						const num = player.getHp();
						player.removeMark("old_twchue", num);
						const card = new lib.element.VCard({ name: "sha" });
						player
							.when("useCard2", false)
							.filter(evt => evt.getParent(2) == event)
							.assign({
								firstDo: true,
							})
							.step(async (event, trigger, player) => {
								trigger.baseDamage++;
								if (
									!game.hasPlayer(target => {
										return !trigger.targets.includes(target) && player.canUse(trigger.card, target);
									})
								)
									return;
								const result = await player
									.chooseTarget("额外指定至多" + get.cnNumber(num) + "名目标", [1, num], (card, player, target) => {
										const trigger = _status.event.getTrigger();
										return !trigger.targets.includes(target) && player.canUse(trigger.card, target);
									})
									.set("ai", target => {
										const player = get.event().player,
											trigger = _status.event.getTrigger();
										return get.effect(target, trigger.card, player, player);
									})
									.forResult();
								if (result.bool) {
									const targets = result.targets;
									player.line(targets);
									trigger.targets.addArray(targets);
								}
							})
							.finish();
						player.chooseUseTarget("视为使用造成的伤害+1且可以额外指定" + num + "个目标的【杀】", card, false, true);
					},
				},
			},
		},
		//赵娥
		old_twyanshi: {
			audio: "twyanshi",
			trigger: { global: "phaseBefore", player: "enterGame" },
			forced: true,
			locked: false,
			direct: true,
			onremove: true,
			intro: {
				content: "players",
			},
			filter(event, player) {
				return game.hasPlayer(current => current != player) && (event.name != "phase" || game.phaseNumber == 0);
			},
			group: ["old_twyanshi_hurt", "old_twyanshi_damage"],
			content() {
				"step 0";
				player.chooseTarget("言誓：选择一名其他角色", lib.filter.notMe, true).set("ai", target => get.attitude(_status.event.player, target));
				("step 1");
				if (result.bool) {
					var target = result.targets[0];
					player.logSkill("old_twyanshi", target);
					player.markAuto("old_twyanshi", [target]);
				}
			},
			mod: {
				targetInRange(card, player, target) {
					if (target.hasMark("old_twyanshi_mark")) {
						return true;
					}
				},
			},
			subSkill: {
				hurt: {
					audio: "twyanshi",
					trigger: {
						global: "damageEnd",
					},
					forced: true,
					locked: false,
					filter(event, player) {
						if (!event.source || !event.source.isIn()) {
							return false;
						}
						return (player == event.player && !player.getStorage("old_twyanshi").includes(event.source)) || (player != event.source && player.getStorage("old_twyanshi").includes(event.player));
					},
					content() {
						trigger.source.addMark("old_twyanshi_mark", 1);
					},
				},
				damage: {
					audio: "twyanshi",
					trigger: {
						source: ["damageBegin1", "damageSource"],
					},
					forced: true,
					locked: false,
					filter(event, player) {
						return event.player.hasMark("old_twyanshi_mark");
					},
					content() {
						"step 0";
						if (event.triggername == "damageBegin1") {
							trigger.num++;
						} else {
							player.draw(trigger.num);
							trigger.player.removeMark("old_twyanshi_mark", trigger.player.countMark("old_twyanshi_mark"));
						}
					},
				},
				mark: {
					marktext: "誓",
					intro: {
						name: "誓",
						name2: "誓",
						content: "mark",
					},
				},
			},
		},
		old_twrenchou: {
			audio: "twrenchou",
			trigger: { global: "die" },
			forced: true,
			forceDie: true,
			filter(event, player) {
				if (!event.source || !event.source.isIn()) {
					return false;
				}
				if (event.player == player) {
					return player.getStorage("old_twyanshi").some(i => i.isIn() && i.hp > 0);
				}
				if (player.getStorage("old_twyanshi").includes(event.player)) {
					return player.isIn() && player.hp > 0;
				}
				return false;
			},
			logTarget: "source",
			line: false,
			skillAnimation: true,
			animationColor: "water",
			global: "old_twrenchou_ai",
			content() {
				"step 0";
				var avengers = [];
				if (trigger.player == player) {
					avengers = player.getStorage("old_twyanshi").filter(i => i.isIn() && i.hp > 0);
				}
				if (player.getStorage("old_twyanshi").includes(trigger.player)) {
					avengers = [player];
				}
				event.avengers = avengers;
				("step 1");
				var avenger = event.avengers.shift();
				avenger.line(trigger.source, "fire");
				trigger.source.damage(avenger, avenger.hp);
				("step 2");
				if (event.avengers.length && trigger.source.isIn()) {
					event.goto(1);
				}
			},
			ai: {
				combo: "old_twyanshi",
			},
			subSkill: {
				ai: {
					ai: {
						effect: {
							target(card, player, target) {
								if (!get.tag(card, "damage")) {
									return;
								}
								if (target.hp > 1) {
									return;
								}
								var num = 0;
								game.filterPlayer(current => {
									if (current.getStorage("old_twyanshi").some(i => target == i)) {
										num += current.hp;
									}
								});
								var targets = target.getStorage("old_twyanshi").filter(i => i.isIn());
								for (var targetx of targets) {
									num += targetx.hp;
								}
								if (num >= player.hp) {
									return 0;
								}
								if (num > 0) {
									return [1, 0, 0, 0.5 - 1.5 * num];
								}
							},
						},
					},
				},
			},
		},
		//TW葛玄
		old_twdanfa: {
			audio: "twdanfa",
			intro: {
				content: "expansion",
				markcount: "expansion",
			},
			onremove(player, skill) {
				const cards = player.getExpansions(skill);
				if (cards.length) {
					player.loseToDiscardpile(cards);
				}
			},
			check: () => true,
			trigger: { player: ["useCardAfter", "respondAfter"] },
			filter(event, player) {
				return event.cards?.some(card => get.owner(card) == player || !get.owner(card)) && !player.getExpansions("old_twdanfa").some(card => get.suit(card) == get.suit(event.card));
			},
			async content(event, trigger, player) {
				await player
					.addToExpansion(
						trigger.cards.filter(card => get.owner(card) == player || !get.owner(card)),
						"gain2"
					)
					.set("gaintag", [event.name]);
				await player.draw();
			},
		},
		old_twlingbao: {
			audio: "twlingbao",
			enable: "phaseUse",
			filter(event, player) {
				return (
					player
						.getExpansions("old_twdanfa")
						.map(card => get.suit(card))
						.unique().length > 1
				);
			},
			chooseButton: {
				dialog(event, player) {
					return ui.create.dialog("灵宝", player.getExpansions("old_twdanfa"));
				},
				filter(button) {
					const buttons = ui.selected.buttons;
					if (!buttons.length) {
						return true;
					}
					return get.suit(buttons[0].link) != get.suit(button.link);
				},
				complexSelect: true,
				check(button) {
					const card = button.link;
					const suits = get
						.player()
						.getHistory("lose", evt => {
							return evt.getParent().name == "discard" && evt.getParent(2).skill == "old_twlingbao_backup";
						})
						.map(evt => evt.cards.map(card => get.suit(card)))
						.flat();
					if (!suits.includes(get.suit(card))) {
						return 2;
					}
					return 1;
				},
				select: 2,
				backup(links, player) {
					return {
						audio: "twlingbao",
						filterCard(card) {
							return links.includes(card);
						},
						selectCard: -1,
						position: "x",
						async content(event, trigger, player) {
							const cards = links,
								colors = cards.map(card => get.color(card)).unique();
							await player.draw(2);
							if (colors.length == 1 && colors[0] == "red") {
								const result = await player
									.chooseTarget(`灵宝：令一名角色从牌堆中获得两张基本牌`, true)
									.set("ai", target => get.effect(target, { name: "wuzhong" }, get.player(), get.player()))
									.forResult();
								if (result?.targets?.length) {
									const target = result.targets[0];
									player.line(target);
									const gain = [];
									while (gain.length < 2) {
										const card = get.cardPile(cardx => get.type(cardx) == "basic" && !gain.includes(cardx));
										if (card) {
											gain.push(card);
										} else {
											break;
										}
									}
									if (gain.length) {
										await target.gain(gain, "gain2");
									}
								}
							}
							if (colors.length == 1 && colors[0] == "black" && game.hasPlayer(target => target.countDiscardableCards(player, "hej"))) {
								const result = await player
									.chooseTarget(`灵宝：你弃置一名角色至多两个不同区域的共计至多两张牌`, true, (card, player, target) => {
										return target.countDiscardableCards(player, "hej");
									})
									.set("ai", target => get.effect(target, { name: "guohe_copy" }, get.player(), get.player()))
									.forResult();
								if (result?.targets?.length) {
									const target = result.targets[0];
									player.line(target);
									await player.discardPlayerCard(target, "hej", [1, 2], true);
								}
							}
							if (colors.length > 1) {
								const canDiscard = game.hasPlayer(target => target.countDiscardableCards(target, "hej"));
								const result = await player
									.chooseTarget(`灵宝：你令一名角色摸两张牌` + (canDiscard ? `，另一名角色弃置一张牌` : ``), true, (card, player, target) => {
										if (!ui.selected.targets.length) {
											return true;
										}
										return target.countDiscardableCards(target, "hej");
									})
									.set("selectTarget", canDiscard ? 2 : 1)
									.set("ai", target => {
										const player = get.player();
										if (!ui.selected.targets.length) {
											return get.effect(target, { name: "wuzhong" }, player, player);
										}
										return get.effect(target, { name: "guohe_copy" }, player, player);
									})
									.set("complexTarget", true)
									.set("complexSelect", true)
									.set("targetprompt", ["摸牌", "弃牌"])
									.forResult();
								if (result?.targets?.length) {
									const draw = result.targets[0],
										discard = result.targets[1];
									player.line(result.targets);
									await draw.draw(2);
									if (discard) {
										await discard.chooseToDiscard("he", true);
									}
								}
							}
							const suits = player
								.getHistory("lose", evt => {
									return evt.getParent().name == "discard" && evt.getParent(2).skill == "old_twlingbao_backup";
								})
								.map(evt => evt.cards.map(card => get.suit(card)))
								.flat();
							if (suits.length != suits.unique().length) {
								player.tempBanSkill("old_twlingbao");
							}
						},
					};
				},
			},
			ai: {
				order: 7,
				result: {
					player: 1,
				},
			},
			subSkill: {
				backup: {},
			},
		},
		old_twsidao: {
			audio: "twsidao",
			trigger: {
				global: "phaseBefore",
				player: ["enterGame", "phaseZhunbei"],
			},
			filter(event, player) {
				if (event.name == "phaseZhunbei") {
					const card = player.storage.old_twsidao;
					return card?.isInPile() && player.hasUseTarget(card);
				}
				return (event.name != "phase" || game.phaseNumber == 0) && !player.storage.old_twsidao;
			},
			async cost(event, trigger, player) {
				if (trigger.name == "phaseZhunbei") {
					event.result = { bool: true };
				} else {
					const result = await player
						.chooseButton(["请选择你的初始法宝", [["gx_lingbaoxianhu", "gx_taijifuchen", "gx_chongyingshenfu"], "vcard"]], true)
						.set("ai", button => {
							return button.link[2] == "gx_chongyingshenfu" ? 2 : 1;
						})
						.forResult();
					event.result = {
						bool: result?.bool,
						cost_data: result?.links,
					};
				}
			},
			async content(event, trigger, player) {
				if (trigger.name == "phaseZhunbei") {
					await player.chooseUseTarget(player.storage.old_twsidao, "nopopup", true);
				} else {
					const name = event.cost_data[0][2];
					const card = game.createCard2(name, "heart", 1);
					game.broadcastAll(name => lib.inpile.add(name), name);
					player.storage.old_twsidao = card;
					await player.chooseUseTarget(card, "nopopup", true);
				}
			},
		},
		//TW起皇甫嵩
		old_twjuxia: {
			audio: "jsrgjuxia",
			trigger: {
				player: "phaseZhunbeiBegin",
				target: "useCardToTargeted",
			},
			filter(event, player) {
				if (event.name === "phaseZhunbei") {
					return !player.hasSkill("twguanhuo", null, false, false);
				} else if (player.hasSkill("old_twjuxia_used")) {
					return false;
				}
				return event.player !== player && lib.skill.jsrgjuxia.countSkill(event.player) > lib.skill.jsrgjuxia.countSkill(player);
			},
			logTarget: "player",
			derivation: "twguanhuo",
			prompt2(event, player) {
				if (event.name !== "phaseZhunbei") {
					return `令${get.translation(event.card)}对你无效，然后你摸两张牌`;
				}
				return `获得技能〖观火〗`;
			},
			frequent(event, player) {
				return event.name === "phaseZhunbei";
			},
			check(event, player) {
				return event.name === "phaseZhunbei" || get.effect(player, { name: "draw" }, player, player) * 2 - get.effect(player, event.card, event.player, player) > 0;
			},
			async content(event, trigger, player) {
				if (trigger.name === "phaseZhunbei") {
					await player.addSkills("twguanhuo");
				} else {
					player.addTempSkill("old_twjuxia_used");
					trigger.excluded.add(player);
					game.log(trigger.card, "对", player, "无效");
					await player.draw(2);
				}
			},
			ai: {
				effect: {
					target_use(card, player, target) {
						if (lib.skill.jsrgjuxia.countSkill(target) >= lib.skill.jsrgjuxia.countSkill(player)) {
							return;
						}
						if (card && (card.cards || card.isCard) && !target.hasSkill("old_twjuxia_used")) {
							return [0, 0.5, 0, 0.5];
						}
					},
				},
			},
			subSkill: {
				used: { charlotte: true },
			},
		},
		//海外皇甫嵩
		old_twtaoluan: {
			audio: "sptaoluan",
			trigger: {
				global: "judgeFixing",
			},
			usable: 1,
			filter(event, player) {
				return event.result && player.countDiscardableCards(player, "he", card => get.color(card) == event.result.color) > 0;
			},
			async cost(event, trigger, player) {
				const color = trigger.result.color;
				event.result = await player
					.chooseToDiscard(get.prompt(event.skill), `你可以弃置一张${get.translation(color)}牌以中止此判定并获得${get.translation(trigger.result.card)}。`, "chooseonly", { color: color }, "he")
					.set("ai", card => {
						if (get.event().goon) {
							return 6 - get.value(card);
						}
						return 0;
					})
					.set("goon", trigger.result.judge * get.attitude(player, trigger.player) <= 0)
					.forResult();
			},
			async content(event, trigger, player) {
				await player.discard(event.cards);
				let evt = trigger.getParent();
				if (evt.name === "phaseJudge") {
					evt.excluded = true;
				} else {
					const stopevt = ev => {
						ev.finish();
						ev._triggered = null;
					};
					stopevt(evt);
					if (evt.name.startsWith("pre_")) {
						stopevt(evt.getParent());
					}
					trigger.next = trigger.next.filter(next => next.name !== "judgeCallback");
					const evts = game.getGlobalHistory("cardMove", e => e.getParent(2) === evt);
					const cards = evts.flatMap(e => e.cards).filter(card => get.position(card, true) === "o");
					trigger.orderingCards.addArray(cards);
				}
				const card = trigger.result.card;
				if (get.position(card) == "d") {
					await player.gain(card, "gain2");
				}
			},
		},
		old_twshiji: {
			group: "old_twshiji_gain",
			audio: "spshiji",
			trigger: {
				player: ["damageEnd", "phaseZhunbeiBegin"],
			},
			forced: true,
			locked: false,
			async content(event, trigger, player) {
				/*const result = await player
					.chooseControl(["牌堆", "弃牌堆"])
					.set("ai", () => {
						return ui.discardPile.childElementCount >= ui.cardPile.childElementCount ? 1 : 0
					})
					.set("prompt", `【势击】：请选择获得两张颜色不同的牌的位置`)
					.forResult();
				const pos = result.control.includes("弃") ? "discardPile" : "cardPile";*/
				const cards = [];
				for (let color of ["black", "red"]) {
					const card = get.cardPile(card => get.color(card) == color);
					if (card) {
						cards.push(card);
					}
				}
				if (cards.length) {
					await player.gain(cards, "gain2");
				}
				const result2 = await player
					.chooseToDiscard(`势击：你可以弃置一张牌，然后与弃置牌颜色相同的牌于本回合内被展示后，你摸一张牌。`, "he")
					.set("ai", card => {
						return 6 - get.value(card);
					})
					.forResult();
				if (result2?.bool && result2?.cards?.length) {
					const skill = `${event.name}_draw`;
					player.addTempSkill(skill);
					player.markAuto(skill, get.color(result2.cards[0]));
				}
			},
			subSkill: {
				draw: {
					audio: "mbshiji",
					trigger: {
						global: "showCardsAfter",
					},
					onremove: true,
					charlotte: true,
					forced: true,
					filter(event, player) {
						return event.cards?.some(card => player.getStorage("old_twshiji_draw").includes(get.color(card)));
					},
					async content(event, trigger, player) {
						const num = trigger.cards
							.map(card => get.color(card))
							.unique()
							.filter(i => player.getStorage(event.name).includes(i)).length;
						await player.draw(num);
					},
				},
				gain: {
					audio: "mbshiji",
					getcard(event, player) {
						const { card } = event;
						if (get.name(card) != "huogong") {
							return [];
						}
						const evt = event.getParent(evt => evt.card == card && evt.name == "huogong", true);
						if (!evt) {
							return [];
						}
						const cards = evt.showResult?.cards;
						return cards?.filter(card => ["c", "d"].includes(get.position(card)) || (get.owner(card) == evt.target && lib.filter.canBeGained(card, player, evt.target)));
					},
					trigger: {
						source: "damageSource",
					},
					prompt2(event, player) {
						return `是否获得${get.translation(get.info("old_twshiji_gain").getcard(event, player))}？`;
					},
					filter(event, player) {
						return get.info("old_twshiji_gain").getcard(event, player)?.length;
					},
					async content(event, trigger, player) {
						const cards = get.info("old_twshiji_gain").getcard(trigger, player);
						const map = new Map();
						const directGain = [];
						for (const card of cards) {
							const owner = get.owner(card);
							if (owner) {
								map.set(owner, (map.get(owner) || []).concat(card));
							} else {
								directGain.push(card);
							}
						}
						await player
							.gain(cards)
							.set("map", map)
							.set("directGain", directGain)
							.set("animate", event => {
								const { map, directGain } = event;
								if (directGain.length) {
									player.$gain2(directGain, true);
								}
								if (Array.from(map.values()).flat()?.length) {
									for (const [giver, cards] of map.entries()) {
										giver.$giveAuto(cards, player);
									}
								}
							});
					},
				},
			},
		},
		old_twzhengjun: {
			audio: "spzhengjun",
			trigger: {
				global: ["loseAfter", "equipAfter", "addJudgeAfter", "gainAfter", "loseAsyncAfter", "addToExpansionAfter"],
			},
			filter(event, player) {
				const evt = event.relatedEvent || event.getParent();
				const evtx = event?.getl(player);
				return evtx?.hs?.length && !["useCard", "respond"].includes(evt?.name);
			},
			group: "old_twzhengjun_tempBan",
			async cost(event, trigger, player) {
				const num = player.maxHp - player.countCards("h");
				const result = await player
					.chooseControl(["获得【火攻】", `摸${num >= 0 ? num : 0}张牌`, "cancel2"])
					.set("ai", () => {
						const player = get.player();
						if (player.maxHp - player.countCards("h") > 2) {
							return 1;
						}
						return 0;
					})
					.set("prompt", get.prompt2(event.skill))
					.forResult();
				event.result = {
					bool: result.control != "cancel2",
					cost_data: result.index,
				};
			},
			async content(event, trigger, player) {
				if (event.cost_data == 0) {
					const card = get.cardPile(card => get.name(card) == "huogong");
					if (card) {
						await player.gain(card, "gain2");
					} else {
						player.chat("牌喵？");
					}
				} else {
					const num = player.maxHp - player.countCards("h");
					if (num > 0) {
						await player.drawTo(player.maxHp);
					}
				}
			},
			subSkill: {
				tempBan: {
					forced: true,
					locked: false,
					audio: "spzhengjun",
					trigger: {
						player: "gainAfter",
					},
					filter(event, player) {
						const check = evt => evt.getParent().name == "old_twzhengjun" || (evt.getParent().name == "draw" && evt.getParent(2).name == "old_twzhengjun");
						return event.getg(player)?.length && check(event) && player.getHistory("gain", evt => check(evt) && evt.cards.length).flatMap(evt => evt.cards).length >= 3;
					},
					async content(event, trigger, player) {
						player.tempBanSkill("old_twzhengjun");
					},
				},
			},
		},
		//幻诸葛亮
		old_twhunyou: {
			audio: "twhunyou",
			unique: true,
			limited: true,
			enable: "chooseToUse",
			filter(event, player) {
				return event.type == "dying" && event.dying == player;
			},
			skillAnimation: true,
			animationColor: "orange",
			async content(event, trigger, player) {
				player.awakenSkill(event.name);
				await player.recoverTo(1);
				player.addTempSkill(event.name + "_buff");
				if (!_status.currentPhase) return;
				player.when({ global: "phaseAfter" }).step(async (event, trigger, player) => {
					player.insertPhase();
					const num = Math.min(7, player.getStorage("twbeiding").length);
					if (num > 0) await player.draw(num);
					player.storage.isInHuan = true;
					player.changeSkin({ characterName: "old_huan_zhugeliang" }, "huan_zhugeliang_shadow");
					player.changeSkills(get.info("old_twhunyou").derivation, ["old_twhunyou"]);
				});
			},
			derivation: ["twhuanji", "old_twchanggui"],
			subSkill: {
				buff: {
					trigger: {
						player: ["damageBefore", "loseHpBefore"],
					},
					forced: true,
					charlotte: true,
					async content(event, trigger, player) {
						trigger.cancel();
						game.log(player, "防止此次了" + (trigger.name == "damage" ? "伤害" : "失去体力"));
					},
					ai: {
						nofire: true,
						nothunder: true,
						nodamage: true,
						effect: {
							target(card, player, target, current) {
								if (get.tag(card, "damage")) return "zeroplayertarget";
							},
						},
					},
					mark: true,
					intro: {
						content: "我是无敌的",
					},
				},
			},
			ai: {
				order: 1,
				save: true,
				skillTagFilter(player, tag, target) {
					if (player != target || player.storage.old_twhunyou) return false;
				},
				result: {
					player: 1,
				},
			},
		},
		old_twchanggui: {
			audio: "twchanggui",
			trigger: {
				player: "phaseJieshuBegin",
			},
			filter(event, player) {
				return player.isMinHp() && player.maxHp != player.getHp();
			},
			forced: true,
			async content(event, trigger, player) {
				const num = player.maxHp - player.getHp();
				await player[num > 0 ? "loseMaxHp" : "gainMaxHp"](Math.abs(num));
				delete player.storage.isInHuan;
				player.changeSkin({ characterName: "old_huan_zhugeliang" }, "huan_zhugeliang");
				await player.changeSkills(["old_twhunyou"], get.info("old_twhunyou").derivation);
			},
			derivation: ["old_twhunyou"],
		},
		//幻曹昂
		old_twchihui: {
			audio: "twchihui",
			audioname: ["huan_caoang_shadow"],
			trigger: { global: "phaseBegin" },
			filter(event, player) {
				return event.player != player && player.hasEnabledSlot();
			},
			async cost(event, trigger, player) {
				const { player: target } = trigger,
					equips = Array.from({ length: 5 })
						.map((_, i) => [i + 1, get.translation(`equip${i + 1}`)])
						.filter(i => player.hasEnabledSlot(`equip${i[0]}`));
				const { bool, links } = await player
					.chooseButton(2, [
						"炽灰：请选择你要废除的装备栏和相应操作",
						'<div class="text center">即将废除的装备栏</div>',
						[equips, "tdnodes"],
						`<div class="text center">对${get.translation(target)}执行的操作</div>`,
						[
							[
								["discard", `弃置其牌`],
								["equip", `置入装备牌`],
							],
							"tdnodes",
						],
					])
					.set("filterButton", button => {
						const { link } = button,
							{ player, target } = get.event();
						if (Boolean(ui.selected.buttons.length) == (typeof link == "number")) return false;
						if (ui.selected.buttons.length) {
							return link == "equip" || target.countDiscardableCards(player, "hej");
						}
						return true;
					})
					.set("ai", button => {
						const { link } = button,
							{ player, target, list } = get.event();
						let att = get.attitude(player, target);
						if (att < 0) {
							att = -Math.sqrt(-att);
						} else {
							att = Math.sqrt(att);
						}
						const eff = att * lib.card.guohe.ai.result.target(player, target);
						if (!ui.selected.buttons.length) {
							const bool = player.hasSkill("old_twfuxi");
							const getVal = num => {
								const card = player.getEquip(`equip${num}`);
								if (card) {
									const val = get.value(card);
									if (val > 0) return 0;
									return 5 - val;
								}
								switch (num) {
									case "3":
										return 4.5;
									case "4":
										return 4.4;
									case "5":
										return 4.3;
									case "2":
										return (3 - player.hp) * 1.5;
									case "1": {
										if (game.hasPlayer(current => (get.realAttitude || get.attitude)(player, current) < 0 && get.distance(player, current) > 1) && !bool) return 0;
										return bool ? 4.9 : 3.2;
									}
								}
							};
							list.sort((a, b) => getVal(b) - getVal(a));
							if (link == list[0]) return 1;
							return 0;
						}
						if (link == "discard" && eff < 0) return 0;
						if ((att < 0 || target.isMaxEquip()) && link == "equip") return 0;
						return 1;
					})
					.set("target", target)
					.set(
						"list",
						equips.map(i => i[0])
					)
					.forResult();
				event.result = {
					bool: bool,
					cost_data: links,
				};
			},
			logTarget: "player",
			async content(event, trigger, player) {
				const { player: target } = trigger,
					{ cost_data: links } = event;
				await player.disableEquip(`equip${links[0]}`);
				if (links[1] == "discard") {
					if (target.countDiscardableCards(player, "hej")) await player.discardPlayerCard(target, "hej", true);
				} else {
					const equip = get.cardPile2(card => get.subtype(card) == `equip${links[0]}`);
					if (equip) {
						await target.equip(equip);
						await game.delayx();
					}
				}
				await player.loseHp();
				const num = player.getDamagedHp();
				if (num) await player.draw(num);
			},
		},
		old_twfuxi: {
			audio: "twfuxi",
			persevereSkill: true,
			trigger: { player: ["dying", "disableEquipAfter"] },
			filter(event, player) {
				return event.name == "dying" || !player.hasEnabledSlot();
			},
			async cost(event, trigger, player) {
				const { bool, links } = await player
					.chooseButton([
						get.prompt(event.name.slice(0, -5)),
						[
							[
								["phase", "当前回合结束后执行一个额外的回合"],
								["old_twchihui", `保留〖炽灰〗直到下次退幻`],
								["draw", `摸牌至体力上限`],
								["enable", `恢复所有装备栏`],
							],
							"textbutton",
						],
					])
					.set("filterButton", button => {
						const { link } = button,
							player = get.player();
						if (link == "draw" && player.countCards("h") >= player.maxHp) return false;
						if (link == "enable" && player.hasEnabledSlot()) return false;
						return true;
					})
					.set("ai", button => {
						const { link } = button,
							player = get.player();
						const num = player.getAllHistory("useSkill", evt => evt.skill == "old_twfuxi")?.lastItem?.old_twfuxi_num;
						if (num == 2 && player.maxHp <= 2 && ui.selected.buttons.length) return 0;
						if (link == "enable") return 5;
						if (link == "draw") return 5 - player.countCards("h");
						if (link == "phase") return Math.max(4, player.countCards("h"));
						return 1;
					})
					.set("selectButton", [1, 2])
					.forResult();
				event.result = {
					bool: bool,
					cost_data: links,
				};
			},
			async content(event, trigger, player) {
				const { cost_data: choices } = event,
					num = choices.length,
					history = player.getAllHistory("useSkill", evt => evt.skill == event.name);
				const skills = ["old_twchihui", "old_twfuxi"];
				if (history.length) {
					history[history.length - 1][event.name + "_num"] = num;
				}
				if (choices.includes("phase")) {
					game.log(player, "选择了", "#y选项一");
					player.addTempSkill(event.name + "_mark");
					player.insertPhase();
				}
				if (choices.includes("old_twchihui")) {
					game.log(player, "选择了", "#y选项二");
					skills.remove("old_twchihui");
				}
				if (choices.includes("draw")) {
					game.log(player, "选择了", "#y选项三");
					await player.drawTo(Math.min(player.maxHp, 5));
				}
				if (choices.includes("enable")) {
					game.log(player, "选择了", "#y选项四");
					const list = Array.from({ length: 5 })
						.map((_, i) => `equip${i + 1}`)
						.filter(i => player.hasDisabledSlot(i));
					await player.enableEquip(list);
				}
				await player.recoverTo(player.maxHp);
				player.changeSkin({ characterName: "old_huan_caoang" }, "huan_caoang_shadow");
				await player.changeSkills(["old_twhuangzhu", "old_twliyuan", "old_twjifa"], skills);
			},
			derivation: ["old_twhuangzhu", "old_twliyuan", "old_twjifa"],
			subSkill: {
				mark: {
					charlotte: true,
					mark: true,
					intro: {
						content: "本回合结束后执行一个额外回合",
					},
				},
			},
		},
		old_twhuangzhu: {
			audio: "twhuangzhu",
			audioname: ["huan_caoang"],
			trigger: { player: ["phaseZhunbeiBegin", "phaseUseBegin"] },
			filter(event, player) {
				if (event.name == "phaseZhunbei") {
					return player.hasDisabledSlot();
				}
				return player.getStorage("old_twhuangzhu_effect").length && player.hasDisabledSlot();
			},
			async cost(event, trigger, player) {
				if (trigger.name == "phaseZhunbei") {
					const list = Array.from({ length: 5 })
						.map((_, i) => `equip${i + 1}`)
						.filter(i => player.hasDisabledSlot(i))
						.concat(["cancel2"]);
					const { control } = await player
						.chooseControl(list)
						.set("prompt", "煌烛：选择一个已废除装备栏的类别")
						.set("prompt2", "从牌堆或弃牌堆中随机获得一张对应副类别的装备牌，并记录其牌名")
						.set("ai", () => {
							return get
								.event()
								.controls.filter(i => i !== "cancel2")
								.randomGet();
						})
						.forResult();
					event.result = {
						bool: control != "cancel2",
						cost_data: control,
					};
				} else {
					const storage = player.getStorage("old_twhuangzhu_effect");
					const st2 = player
						.getStorage("old_twhuangzhu_equip")
						.slice()
						.map(equip => equip[2]);
					let virtualList = {};
					let disabled = [1, 2, 3, 4, 5].filter(num => player.countDisabledSlot(num)).map(num => "equip" + num);
					for (let i of disabled) virtualList[i] = [];
					console.log(disabled);
					if (st2?.length) {
						for (let i of st2) {
							if (disabled.includes(get.subtype(i))) {
								virtualList[get.subtype(i)].add(i);
							}
						}
					}
					let chooseList = [];
					chooseList.push('###煌烛###<div class="text center">为至多两个已废除的装备栏选择或替换牌名</div>');
					for (let i of disabled) {
						let str = get.translation(i) + "栏：";
						if (virtualList[i]?.length) {
							str += "已视为装备" + get.translation(virtualList[i]);
						} else {
							str += "未视为装备任何牌";
						}
						chooseList.push(str);
						let equips = storage.slice().filter(name => get.subtypes(name).includes(i));
						let list = [equips, "vcard"];
						if (equips.length) {
							chooseList.push(list);
						}
					}
					console.log(chooseList);
					const { bool, links } = await player
						.chooseButton(chooseList, [1, 2])
						.set("filterButton", button => {
							let st2 = get.event().st2;
							if (st2.includes(button.link[2])) {
								return false;
							}
							if (ui.selected.buttons.length) {
								if (get.subtype(ui.selected.buttons[0].link[2]) == get.subtype(button.link[2])) {
									return false;
								}
							}
							return true;
						})
						.set("st2", st2)
						.set("ai", button => get.equipValue({ name: button.link[2] }, get.player()))
						.forResult();
					event.result = {
						bool: bool,
						cost_data: links,
					};
				}
			},
			async content(event, trigger, player) {
				const { cost_data } = event;
				if (trigger.name == "phaseZhunbei") {
					const equip = get.cardPile(card => get.subtype(card) == cost_data);
					if (equip) {
						await player.gain(equip, "gain2");
						await game.delayx();
						player.addSkill(event.name + "_effect");
						player.markAuto(event.name + "_effect", [get.name(equip)]);
					}
				} else {
					const equip = event.name + "_equip";
					const subtypes = cost_data.map(name => get.subtypes(name[2])).flat();
					player.unmarkAuto(
						equip,
						player.getStorage(equip).filter(name => subtypes.some(t => get.subtypes(name[2]).includes(t)))
					);
					player.addSkill(equip);
					player.markAuto(equip, cost_data);
					player.addAdditionalSkill(
						equip,
						player
							.getStorage(equip)
							.map(name => lib.card[name[2]]?.skills || [])
							.flat()
					);
					player.addExtraEquip(
						equip,
						player.getStorage(equip).map(name => name[2]),
						true
					);
				}
			},
			subSkill: {
				effect: {
					charlotte: true,
					onremove: true,
					intro: { content: "已记录牌名：$" },
				},
				equip: {
					charlotte: true,
					mod: {
						globalFrom(from, to, distance) {
							return distance + from.getStorage("old_twhuangzhu_equip").reduce((sum, name) => sum + (lib.card[name[2]]?.distance?.globalFrom || 0), 0);
						},
						globalTo(from, to, distance) {
							return distance + to.getStorage("old_twhuangzhu_equip").reduce((sum, name) => sum + (lib.card[name[2]]?.distance?.globalTo || 0), 0);
						},
						attackRange(from, distance) {
							return distance - from.getStorage("old_twhuangzhu_equip").reduce((sum, name) => sum + (lib.card[name[2]]?.distance?.attackFrom || 0), 0);
						},
						attackTo(from, to, distance) {
							return distance + to.getStorage("old_twhuangzhu_equip").reduce((sum, name) => sum + (lib.card[name[2]]?.distance?.attackTo || 0), 0);
						},
					},
					onremove(player, skill) {
						player.removeAdditionalSkill(skill);
					},
					intro: {
						markcount: "expansion",
						mark(dialog, storage = []) {
							if (!storage.length) return "当前未视为装备任意牌";
							dialog.addText("当前视为装备");
							dialog.addSmall([storage, "vcard"]);
						},
					},
					trigger: { player: "enableEquipEnd" },
					filter(event, player) {
						if (!event.slots?.length) return false;
						return player.getStorage("old_twhuangzhu_equip").some(name => event.slots.some(t => get.subtypes(name[2]).includes(t)));
					},
					forced: true,
					popup: false,
					content() {
						player.removeExtraEquip(event.name);
						player.unmarkAuto(
							event.name,
							player.getStorage(event.name).filter(name => trigger.slots.some(t => get.subtypes(name[2]).includes(t)))
						);
						if (!player.getStorage(event.name).length) {
							player.removeSkill(event.name);
						} else {
							player.addAdditionalSkill(
								event.name,
								player
									.getStorage(equip)
									.map(name => lib.card[name[2]]?.skills || [])
									.flat()
							);
						}
					},
				},
			},
		},
		old_twliyuan: {
			audio: "twliyuan",
			audioname: ["huan_caoang"],
			mod: {
				targetInRange(card) {
					if (card.storage?.old_twliyuan) return true;
				},
				cardUsable(card, player, num) {
					if (card.storage?.old_twliyuan) return Infinity;
				},
			},
			enable: ["chooseToUse", "chooseToRespond"],
			filterCard(card, player) {
				return get.subtypes(card).some(i => player.hasDisabledSlot(i));
			},
			locked: false,
			viewAs: {
				name: "sha",
				storage: {
					old_twliyuan: true,
				},
			},
			filter(event, player) {
				return player.countCards("hes", card => get.subtypes(card).some(i => player.hasDisabledSlot(i)));
			},
			position: "hes",
			precontent() {
				event.getParent().addCount = false;
			},
			prompt: "将一张与你已废除的装备栏对应副类别的装备牌当【杀】使用或打出",
			check(card) {
				const val = get.value(card);
				if (_status.event.name == "chooseToRespond") return 1 / Math.max(0.1, val);
				return 6 - val;
			},
			group: "old_twliyuan_effect",
			subSkill: {
				effect: {
					audio: "twliyuan",
					audioname: ["huan_caoang_shadow"],
					trigger: { player: ["useCard", "respond"] },
					filter: evt => evt.skill == "old_twliyuan",
					forced: true,
					popup: false,
					content() {
						player.draw(2);
					},
				},
			},
		},
		old_twjifa: {
			audio: "twjifa",
			trigger: { player: "dying" },
			forced: true,
			async content(event, trigger, player) {
				const num = player.getAllHistory("useSkill", evt => evt.skill == "old_twfuxi")?.lastItem?.old_twfuxi_num;
				if (num > 0) await player.loseMaxHp(num);
				const { control } = await player
					.chooseControl(["old_twhuangzhu", "old_twliyuan"])
					.set("prompt", "选择保留的技能")
					.set("ai", () => {
						return get.event().controls.randomGet();
					})
					.forResult();
				await player.recoverTo(player.maxHp);
				player.changeSkin({ characterName: "old_huan_caoang" }, "huan_caoang");
				await player.changeSkills(["old_twchihui", "old_twfuxi"], ["old_twhuangzhu", "old_twliyuan", "old_twjifa"].remove(control));
			},
		},
		//幻魏延
		old_twpiankuang: {
			audio: "twpiankuang",
			getNum: (event, player) => Math.min(3, player.getHistory("sourceDamage", evt => evt.card && evt.card.name == event.card.name && evt.card != event.card).length),
			trigger: {
				source: "damageBegin1",
			},
			filter(event, player) {
				return event.card && event.getParent().type == "card" && get.info("old_twpiankuang").getNum(event, player) > 0;
			},
			forced: true,
			async content(event, trigger, player) {
				trigger.num += get.info("old_twpiankuang").getNum(trigger, player);
			},
		},
		//幻诸葛果
		old_rexianyuan: {
			audio: "twxianyuan",
			trigger: { global: "phaseUseBegin" },
			filter(event, player) {
				return event.player.hasMark("old_rexianyuan");
			},
			forced: true,
			locked: false,
			logTarget: "player",
			async content(event, trigger, player) {
				const target = trigger.player,
					str = get.translation(target);
				const num = target.countMark("old_rexianyuan");
				let choice;
				if (!target.countCards("h")) choice = 1;
				else
					choice = (
						await player
							.chooseControl()
							.set("choiceList", ["观看" + str + "的手牌并将其中至多" + get.cnNumber(num) + "张牌置于牌堆顶", "令" + str + "摸" + get.cnNumber(num) + "张牌"])
							.set("ai", () => (get.attitude(get.player(), get.event().getTrigger().player) > 0 ? 1 : 0))
							.forResult()
					).index;
				if (typeof choice != "number") return;
				if (choice == 0) {
					const result = await player.choosePlayerCard(target, "h", "visible", [1, num], true, '###仙援###<div class="text center">将其中至多' + get.cnNumber(num) + "张牌置于牌堆顶（先选择的在上）</div>").forResult();
					if (result.bool && result.cards?.length) {
						const cards = result.cards.slice();
						target.$throw(cards.length, 1000);
						await target.lose(cards, ui.cardPile, "insert");
					}
				} else await target.draw(num);
				if (_status.currentPhase !== player) target.clearMark("old_rexianyuan");
			},
			limit: 4,
			intro: { content: "mark" },
			group: ["old_rexianyuan_give", "old_rexianyuan_gain"],
			subSkill: {
				give: {
					audio: "twxianyuan",
					enable: "phaseUse",
					filter(event, player) {
						return player.hasMark("old_rexianyuan") && game.hasPlayer(i => lib.skill.old_rexianyuan.subSkill.give.filterTarget(null, player, i));
					},
					filterTarget(card, player, target) {
						return target != player && target.countMark("old_rexianyuan") < lib.skill.old_rexianyuan.limit;
					},
					prompt: "将“仙援”标记分配给其他角色",
					async content(event, trigger, player) {
						const target = event.target;
						const gives = Array.from({ length: player.countMark("old_rexianyuan") }).map((_, i) => get.cnNumber(i + 1) + "枚");
						let give;
						if (gives.length == 1) give = 0;
						else
							give = (
								await player
									.chooseControl(gives)
									.set("ai", () => 0)
									.set("prompt", "仙援：将任意枚“仙援”标记分配给" + get.translation(target))
									.forResult()
							).index;
						if (typeof give != "number") return;
						give++;
						player.removeMark("old_rexianyuan", give);
						target.addMark("old_rexianyuan", give);
					},
					ai: {
						order: 1,
						result: {
							player: 1,
							target(player, target) {
								const sgn = get.sgn(get.attitude(player, target));
								return sgn == 0 ? 0.5 : sgn * (2 - sgn);
							},
						},
					},
				},
				gain: {
					audio: "twxianyuan",
					trigger: { global: "roundStart" },
					filter(event, player) {
						return player.countMark("old_rexianyuan") < lib.skill.old_rexianyuan.limit;
					},
					forced: true,
					locked: false,
					content() {
						player.addMark("old_rexianyuan", Math.min(4, lib.skill.old_rexianyuan.limit - player.countMark("old_rexianyuan")));
					},
				},
			},
		},
		//tw神吕蒙
		old_twshelie: {
			audio: "shelie",
			inherit: "shelie",
			prompt2: () => lib.translate.shelie_info,
			group: "old_twshelie_jingce",
			//什么精策技能啊喂！
			subSkill: {
				round: { charlotte: true },
				count: {
					charlotte: true,
					onremove: true,
					intro: {
						markcount(storage) {
							return storage.length;
						},
						content: "本回合已使用$花色的牌",
					},
				},
				jingce: {
					audio: "shelie",
					trigger: { player: ["phaseJieshuBegin", "useCard1"] },
					filter(event, player) {
						if (player.hasSkill("old_twshelie_round") || player != _status.currentPhase) return false;
						var list = [];
						player.getHistory("useCard", function (evt) {
							if (lib.suit.includes(get.suit(evt.card)) && !list.includes(get.suit(evt.card))) list.push(get.suit(evt.card));
						});
						if (list.length) {
							player.addTempSkill("old_twshelie_count");
							player.storage.old_twshelie_count = list.sort(function (a, b) {
								return lib.suit.indexOf(b) - lib.suit.indexOf(a);
							});
							player.markSkill("old_twshelie_count");
							player.syncStorage("old_twshelie_count");
						}
						return event.name != "useCard" && list.length >= player.hp;
					},
					forced: true,
					locked: false,
					async content(event, trigger, player) {
						player.addTempSkill("old_twshelie_round", "roundStart");
						let result;
						if (typeof player.storage.twshelie == "number") {
							result = { index: player.storage.twshelie };
						} else {
							result = await player.chooseControl("摸牌阶段", "出牌阶段").set("prompt", "涉猎：请选择要执行的额外阶段").forResult();
						}
						player.setStorage("old_twshelie", 1 - result.index);
						const evt = trigger.getParent("phase", true, true);
						if (result.index == 0) {
							if (evt?.phaseList) {
								evt.phaseList.splice(evt.num + 1, 0, "phaseDraw|old_twshelie");
							}
						}
						if (result.index == 1) {
							if (evt?.phaseList) {
								evt.phaseList.splice(evt.num + 1, 0, "phaseUse|old_twshelie");
							}
						}
					},
				},
			},
		},
		old_twgongxin: {
			audio: "gongxin",
			enable: "phaseUse",
			filter(event, player) {
				return game.hasPlayer(function (current) {
					return current != player && current.countCards("h");
				});
			},
			filterTarget(card, player, target) {
				return target != player && target.countCards("h") > 0;
			},
			usable: 1,
			content() {
				"step 0";
				event.num = target.getCards("h").reduce(function (arr, card) {
					return (arr.add(get.suit(card, player)), arr);
				}, []).length;
				("step 1");
				var cards = target.getCards("h");
				var next = player.chooseToMove_new("攻心");
				next.set("list", [
					[get.translation(target) + "的手牌", cards],
					[["弃置"], ["置于牌堆顶"]],
				]);
				next.set("filterOk", moved => {
					return moved[1].slice().concat(moved[2]).length == 1;
				});
				next.set("processAI", list => {
					let card = list[0][1].slice().sort((a, b) => {
						return get.value(b) - get.value(a);
					})[0];
					if (!card) return false;
					return [list[0][1].slice().remove(card), [card], []];
				});
				("step 2");
				if (result.bool) {
					if (result.moved[1].length) target.discard(result.moved[1]);
					else {
						player.showCards(result.moved[2], get.translation(player) + "对" + get.translation(target) + "发动了【攻心】");
						target.lose(result.moved[2], ui.cardPile, "visible", "insert");
					}
				}
				("step 3");
				if (
					event.num ==
					target.getCards("h").reduce(function (arr, card) {
						return (arr.add(get.suit(card, player)), arr);
					}, []).length
				)
					event.finish();
				("step 4");
				var num1 = 0;
				for (var card of target.getCards("h")) {
					if (get.color(card) == "red") num1++;
				}
				var num2 = target.countCards("h") - num1;
				player
					.chooseControl(["红色", "黑色", "cancel2"])
					.set("prompt", "是否令" + get.translation(target) + "本回合无法使用一种颜色的牌？")
					.set("ai", function () {
						return num1 >= num2 ? "红色" : "黑色";
					});
				("step 5");
				if (result.control != "cancel2") {
					player.line(target);
					target.addTempSkill("old_twgongxin2");
					target.markAuto("old_twgongxin2", [result.control == "红色" ? "red" : "black"]);
					game.log(target, "本回合无法使用" + result.control + "牌");
					if (!event.isMine() && !event.isOnline()) game.delayx();
				}
			},
			ai: {
				order: 10,
				expose: 0.25,
				result: {
					target(player, target) {
						return -target.countCards("h");
					},
				},
			},
		},
		old_twgongxin2: {
			mod: {
				cardEnabled2(card, player) {
					if (player.getStorage("old_twgongxin2").contains(get.color(card))) return false;
				},
			},
			charlotte: true,
			onremove: true,
			intro: { content: "本回合内不能使用或打出$牌" },
		},
		//尹夫人
		old_dcyingyu: {
			audio: "dcyingyu",
			trigger: { player: ["phaseZhunbeiBegin", "phaseJieshuBegin"] },
			direct: true,
			filter(event, player) {
				if (event.name == "phaseJieshu" && !player.storage.old_dcyingyu) {
					return false;
				}
				return (
					game.countPlayer(function (current) {
						return current.countCards("h") > 0;
					}) > 1
				);
			},
			content() {
				"step 0";
				player
					.chooseTarget(2, get.prompt("old_dcyingyu"), "展示两名角色的各一张手牌。若这两张牌花色不同，则你可以令其中一名角色获得另一名角色的展示牌。", function (card, player, target) {
						return target.countCards("h") > 0;
					})
					.set("ai", function (target) {
						var player = _status.event.player;
						if (!ui.selected.targets.length) {
							return get.attitude(player, target);
						}
						return 1 - get.attitude(player, target);
					});
				("step 1");
				if (result.bool) {
					var targets = result.targets.sortBySeat();
					event.targets = targets;
					event.cards = [];
					player.logSkill("old_dcyingyu", targets);
					player.choosePlayerCard(targets[0], true, "h");
				} else {
					event.finish();
				}
				("step 2");
				var card = result.cards[0];
				player.line(targets[0]);
				player.showCards(card, get.translation(player) + "对" + get.translation(targets[0]) + "发动了【媵予】");
				event.cards.push(card);
				player.choosePlayerCard(targets[1], true, "h");
				("step 3");
				var card = result.cards[0];
				player.line(targets[1]);
				player.showCards(card, get.translation(player) + "对" + get.translation(targets[1]) + "发动了【媵予】");
				event.cards.push(card);
				if (get.suit(cards[0], targets[0]) == get.suit(cards[1], targets[1])) {
					event.finish();
				}
				("step 4");
				var str1 = get.translation(targets[0]),
					str2 = get.translation(targets[1]);
				player
					.chooseControl("cancel2")
					.set("choiceList", ["令" + str1 + "获得" + str2 + "的" + get.translation(cards[1]), "令" + str2 + "获得" + str1 + "的" + get.translation(cards[0])])
					.set("goon", get.attitude(player, targets[0]) > 0 ? 0 : 1)
					.set("ai", () => _status.event.goon);
				("step 5");
				if (result.control != "cancel2") {
					var i = result.index;
					targets[1 - i].give(cards[1 - i], targets[i], "give");
				}
			},
			onremove: true,
		},
		old_dcyongbi: {
			audio: "dcyongbi",
			enable: "phaseUse",
			filter(event, player) {
				return player.countCards("h") > 0 && game.hasPlayer(current => lib.skill.old_dcyongbi.filterTarget(null, player, current));
			},
			filterTarget(card, player, target) {
				return target != player && target.hasSex("male");
			},
			selectCard: -1,
			filterCard: true,
			position: "h",
			limited: true,
			skillAnimation: true,
			animationColor: "fire",
			discard: false,
			lose: false,
			content() {
				"step 0";
				player.awakenSkill(event.name);
				if (player.hasSkill("old_dcyingyu", null, null, false)) {
					player.storage.old_dcyingyu = true;
				}
				player.give(cards, target);
				("step 1");
				var list = [];
				for (var i of cards) {
					list.add(get.suit(i, player));
					if (list.length >= 3) {
						break;
					}
				}
				if (list.length >= 2) {
					player.addMark("old_dcyongbi_eff1", 2, false);
					player.addSkill("old_dcyongbi_eff1");
					target.addMark("old_dcyongbi_eff1", 2, false);
					target.addSkill("old_dcyongbi_eff1");
				}
				if (list.length >= 3) {
					player.addMark("old_dcyongbi_eff2", 2, false);
					player.addSkill("old_dcyongbi_eff2");
					target.addMark("old_dcyongbi_eff2", 2, false);
					target.addSkill("old_dcyongbi_eff2");
				}
			},
			ai: {
				order(item, player) {
					if (player.hasUnknown()) {
						return 0;
					}
					let list = [];
					for (let i of player.getCards("h")) {
						list.add(get.suit(i, player));
						if (list.length >= 3) {
							return 10;
						}
					}
					return 0;
				},
				result: {
					player: 1.8,
					target(player, target) {
						let zhu = get.zhu(player);
						if (zhu && get.attitude(player, zhu) > 0) {
							if (target == zhu) {
								return 4;
							}
						}
						return 1.8;
					},
				},
			},
			subSkill: {
				eff1: {
					mod: {
						maxHandcard: (player, num) => num + player.countMark("old_dcyongbi_eff1"),
					},
					charlotte: true,
					onremove: true,
					marktext: "拥",
					intro: { content: "手牌上限+#" },
				},
				eff2: {
					audio: "dcyongbi",
					trigger: { player: "damageBegin4" },
					forced: true,
					filter(event, player) {
						return event.num > 1;
					},
					content() {
						trigger.num -= player.countMark("old_dcyongbi_eff2");
					},
					charlotte: true,
					onremove: true,
					marktext: "嬖",
					intro: { content: "受到大于1的伤害时，此伤害-#" },
				},
			},
		},
		//蒋济
		old_twjilun: {
			audio: "twjilun",
			trigger: { player: "damageEnd" },
			async cost(event, trigger, player) {
				const num = Math.max(1, player.getStorage("twjichou").length);
				const list = player
					.getStorage("twjichou")
					.filter(name => !player.getStorage(event.skill).includes(name))
					.map(name => ["锦囊", "", name]);
				if (list.length) {
					const result = await player
						.chooseButton([`###${get.prompt(event.skill)}###摸${get.cnNumber(num)}张牌或者视为使用一张牌`, [[[num, `摸${get.cnNumber(num)}张牌`]], "tdnodes"], [list, "vcard"]])
						.set("filterButton", button => {
							const { player, numx } = get.event();
							const { link } = button;
							if (!Array.isArray(link)) {
								return true;
							}
							return player.hasUseTarget({ name: link[2] });
						})
						.set("ai", button => {
							const { player, numx } = get.event();
							const { link } = button;
							const val = numx > 3 ? Math.min(1.5, 1 + (numx - 3) * 0.1) : 1;
							if (Array.isArray(link)) {
								if (player.getUseValue({ name: link[2] }) > 4 * val) {
									return 1;
								}
							}
							if (typeof link == "number") {
								return 1;
							}
							return 0;
						})
						.set("numx", num)
						.forResult();
					event.result = {
						bool: result?.bool,
						cost_data: result?.links,
					};
				} else {
					event.result = await player.chooseBool(get.prompt(event.skill), `摸${get.cnNumber(num)}张牌`).forResult();
					if (event.result?.bool) {
						event.result.cost_data = [num];
					}
				}
			},
			async content(event, trigger, player) {
				const { cost_data: links } = event;
				if (typeof links[0] == "number") {
					await player.draw(links[0]);
				} else {
					const card = get.autoViewAs({ name: links[0][2], isCard: true });
					player.markAuto(event.name, [card.name]);
					await player.chooseUseTarget(card, true);
				}
			},
			marktext: "论",
			intro: { content: "已记录牌名：$" },
			onremove: true,
			ai: {
				maixie: true,
				maixie_defend: true,
				threaten: 0.7,
			},
		},
		//张纮
		old_twquanqian: {
			audio: "twquanqian",
			sunbenSkill: true,
			enable: "phaseUse",
			filter(event, player) {
				return !player.hasSkill("old_twquanqian_sunben") && player.countCards("h") && game.countPlayer() > 1;
			},
			filterCard(card, player) {
				return !ui.selected.cards.some(cardx => get.suit(cardx, player) == get.suit(card, player));
			},
			selectCard: [1, 4],
			check(card) {
				return 1 / (get.value(card) || 0.5);
			},
			position: "h",
			complexCard: true,
			discard: false,
			lose: false,
			delay: false,
			filterTarget: lib.filter.notMe,
			usable: 1,
			content() {
				"step 0";
				player.addSkill("old_twquanqian_sunben");
				player.give(cards, target);
				if (cards.length < 2) {
					event.finish();
				}
				("step 1");
				var card = get.cardPile2(card => get.type(card) == "equip");
				if (card) {
					player.gain(card, "gain2");
				}
				("step 2");
				if (player.countCards("h") >= target.countCards("h")) {
					if (target.countCards("h")) {
						event._result = { index: 1 };
					} else {
						event.finish();
					}
				} else {
					var str = get.translation(target);
					player
						.chooseControl()
						.set("choiceList", ["将手牌数摸至与" + str + "相同", "观看" + str + "的手牌并获得其一种花色的所有手牌"])
						.set("ai", () => {
							var player = _status.event.player;
							var target = _status.event.target;
							if (target.countCards("h") - player.countCards("h") > target.countCards("h") / 4 || get.attitude(player, target) > 0) {
								return 0;
							}
							return 1;
						})
						.set("target", target);
				}
				("step 3");
				if (result.index == 0) {
					player.drawTo(target.countCards("h"));
					event.finish();
					return;
				}
				var list = [];
				var dialog = ["劝迁：获得" + get.translation(target) + "一种花色的所有牌"];
				for (var suit of lib.suit.concat("none")) {
					if (target.countCards("h", { suit: suit })) {
						dialog.push('<div class="text center">' + get.translation(suit + "2") + "牌</div>");
						dialog.push(target.getCards("h", { suit: suit }));
						list.push(suit);
					}
				}
				if (!list.length) {
					event.finish();
					return;
				}
				player
					.chooseControl(list)
					.set("dialog", dialog)
					.set("ai", () => {
						return _status.event.control;
					})
					.set(
						"control",
						(() => {
							var getv = cards => cards.map(i => get.value(i)).reduce((p, c) => p + c, 0);
							return list.sort((a, b) => {
								return getv(target.getCards("h", { suit: b })) - getv(target.getCards("h", { suit: a }));
							})[0];
						})()
					);
				("step 4");
				if (result.control) {
					player.gain(target.getCards("h", { suit: result.control }), target, "give");
				}
			},
			ai: {
				order: 7,
				result: {
					target(player, target) {
						return target.countCards("h");
					},
				},
			},
			subSkill: {
				sunben: {
					charlotte: true,
					init(player) {
						player.storage.old_twquanqian_sunben = 0;
					},
					onremove: true,
					mark: true,
					intro: {
						markcount(num) {
							return (num || 0).toString();
						},
						content: "弃牌进度：#/6",
					},
					trigger: {
						player: "loseAfter",
						global: "loseAsyncAfter",
					},
					filter(event, player) {
						if (event.type != "discard") {
							return false;
						}
						var evt = event.getl(player);
						return evt && evt.hs && evt.hs.length;
					},
					forced: true,
					popup: false,
					firstDo: true,
					content() {
						"step 0";
						player.addMark("old_twquanqian_sunben", trigger.getl(player).hs.length, false);
						("step 1");
						if (player.countMark("old_twquanqian_sunben") >= 6) {
							player.removeSkill("old_twquanqian_sunben");
							player.popup("劝迁");
							game.log(player, "恢复了技能", "#g【劝迁】");
						}
					},
				},
			},
		},
		old_twrouke: {
			audio: "twrouke",
			trigger: {
				player: "gainAfter",
				global: "loseAsyncAfter",
			},
			filter(event, player) {
				var evt = event.getParent("phaseDraw");
				if (evt && evt.player == player) {
					return false;
				}
				return event.getg(player).length > 1;
			},
			forced: true,
			content() {
				player.draw();
			},
		},
		//张昭
		old_twlijian: {
			getCards(event) {
				var cards = [];
				game.countPlayer2(function (current) {
					current.checkHistory("lose", function (evt) {
						if (evt.position == ui.discardPile && evt.getParent("phaseDiscard") == event) {
							cards.addArray(evt.cards);
						}
					});
				});
				game.checkGlobalHistory("cardMove", function (evt) {
					if (evt.name == "cardsDiscard" && evt.getParent("phaseDiscard") == event) {
						cards.addArray(evt.cards);
					}
				});
				return cards.filterInD("d");
			},
			audio: "twlijian",
			sunbenSkill: true,
			trigger: { global: "phaseDiscardEnd" },
			filter(event, player) {
				if (player.hasSkill("old_twlijian_sunben")) {
					return false;
				}
				if (event.player != player && event.player.isIn()) {
					return lib.skill.old_twlijian.getCards(event).length;
				}
				return false;
			},
			prompt2: () => "选择任意张本阶段进入弃牌堆的牌令其获得，然后你获得剩余的牌，若其获得的牌数大于你，则你可以对其造成1点伤害",
			logTarget: "player",
			content() {
				"step 0";
				player.addSkill("old_twlijian_sunben");
				var cards = lib.skill.old_twlijian.getCards(trigger),
					target = trigger.player;
				event.cards = cards;
				event.target = target;
				player
					.chooseToMove("力谏：请分配" + get.translation(target) + "和你获得的牌", true)
					.set("list", [[get.translation(target) + "获得的牌", cards], ["你获得的牌"]])
					.set("processAI", function (list) {
						var player = _status.event.player;
						var target = _status.event.getTrigger().player;
						var att = get.attitude(player, target);
						var cards = _status.event.cards;
						var cardx = cards.filter(card => card.name == "du");
						var cardy = cards.removeArray(cardx);
						switch (get.sgn(att)) {
							case 1:
								return [cards, []];
							case 0:
								return [cardx, cardy];
							case -1:
								var num = Math.ceil(cards.length / 2) + (cards.length % 2 == 0 ? 1 : 0);
								if (num > 1 && player.hasSkill("old_twchungang")) {
									num--;
								}
								if (get.damageEffect(target, player, player) <= 0 || num > 2 || cardx.length > cardy.length) {
									return [cardx, cardy];
								}
								var num2 = cardy.length - cardx.length;
								num2 = Math.ceil(num2 / 2) + (num2 % 2 == 0 ? 1 : 0);
								cardy.sort((a, b) => get.value(b) - get.value(a));
								cardx.addArray(cardy.slice(num, cardy.length));
								return [cardx, cardy.slice(0, num)];
						}
					})
					.set("cards", cards);
				("step 1");
				if (result.bool) {
					target.gain(result.moved[0], "gain2");
					player.gain(result.moved[1], "gain2");
					if (result.moved[0].length > result.moved[1].length) {
						player.chooseBool("是否对" + get.translation(target) + "造成1点伤害？").set("choice", get.damageEffect(target, player, player) > 0);
					} else {
						event.finish();
					}
				} else {
					event.finish();
				}
				("step 2");
				if (result.bool) {
					player.line(target);
					target.damage();
				}
			},
			subSkill: {
				sunben: {
					charlotte: true,
					init(player) {
						player.storage.old_twlijian_sunben = 0;
					},
					onremove: true,
					mark: true,
					intro: {
						markcount(num) {
							return (num || 0).toString();
						},
						content: "弃牌堆进入牌进度：#/8",
					},
					trigger: {
						global: ["loseAfter", "cardsDiscardAfter", "loseAsyncAfter", "equipAfter"],
					},
					filter(event, player) {
						var cards = event.getd();
						if (!cards.length) {
							return false;
						}
						var list = cards.slice();
						game.checkGlobalHistory(
							"cardMove",
							function (evt) {
								if (evt == event || evt.getParent() == event || (evt.name != "lose" && evt.name != "cardsDiscard")) {
									return false;
								}
								if (evt.name == "lose" && evt.position != ui.discardPile) {
									return false;
								}
								list.removeArray(evt.cards);
							},
							event
						);
						return list.length > 0;
					},
					forced: true,
					popup: false,
					firstDo: true,
					content() {
						"step 0";
						var cards = trigger.getd().slice();
						game.checkGlobalHistory(
							"cardMove",
							function (evt) {
								if (evt == trigger || evt.getParent() == trigger || (evt.name != "lose" && evt.name != "cardsDiscard")) {
									return false;
								}
								if (evt.name == "lose" && evt.position != ui.discardPile) {
									return false;
								}
								cards.removeArray(evt.cards);
							},
							trigger
						);
						player.addMark("old_twlijian_sunben", cards.length, false);
						("step 1");
						if (player.countMark("old_twlijian_sunben") >= 8) {
							player.removeSkill("old_twlijian_sunben");
							player.popup("力谏");
							game.log(player, "恢复了技能", "#g【力谏】");
						}
					},
				},
			},
		},
		old_twchungang: {
			audio: "twchungang",
			init: () => {
				game.addGlobalSkill("old_twchungang_global", null, null, false);
			},
			onremove: player => {
				if (
					!game.hasPlayer(i => {
						return i.hasSkill("old_twchungang");
					}, true)
				) {
					game.removeGlobalSkill("old_twchungang_global");
				}
			},
			trigger: { global: ["gainAfter", "loseAsyncAfter"] },
			filter(event, player) {
				var evt = event.getParent("phaseDraw");
				return game.hasPlayer(target => {
					if (target == player || (evt && evt.player == target)) {
						return false;
					}
					return event.getg(target).length > 1 && target.countCards("he");
				});
			},
			forced: true,
			logTarget(event, player) {
				var evt = event.getParent("phaseDraw");
				return game.filterPlayer(target => {
					if (target == player || (evt && evt.player == target)) {
						return false;
					}
					return event.getg(target).length > 1 && target.countCards("he");
				});
			},
			content() {
				for (var i of lib.skill.old_twchungang.logTarget(trigger, player)) {
					i.chooseToDiscard("he", true);
				}
			},
			subSkill: {
				global: {
					trigger: {
						player: "dieAfter",
					},
					filter(event, player) {
						return !game.hasPlayer(i => i.hasSkill("old_twchungang", null, null, false), true);
					},
					silent: true,
					forceDie: true,
					charlotte: true,
					content() {
						game.removeGlobalSkill("old_twchungang_global");
					},
					ai: {
						effect: {
							target(card, player, target) {
								if ((get.tag(card, "gain") || 0) < 2 && (get.tag(card, "draw") || 0) < 2) {
									return;
								}
								let evt = _status.event.getParent("phaseDraw"),
									dis = game.countPlayer(i => {
										return target !== i && i.hasSkill("old_twchungang");
									});
								if (!dis || (evt && evt.player === target)) {
									return;
								}
								return [1, -dis];
							},
						},
					},
				},
			},
		},

		//朱儁
		diy_juxiang: {
			audio: "zjjuxiang",
			inherit: "zjjuxiang",
			forced: true,
			async content(event, trigger, player) {
				trigger.player.damage();
			},
		},
		//廖化
		diy_fuli: {
			skillAnimation: true,
			animationColor: "soil",
			audio: "xinfuli",
			enable: "chooseToUse",
			locked: true,
			init(player, skill) {
				player.storage[skill] = false;
			},
			mark: true,
			filter(event, player) {
				if (event.type != "dying") return false;
				if (player != event.dying) return false;
				if (player.storage.fuli) return false;
				return true;
			},
			async content(event, trigger, player) {
				await player.recoverTo(game.countGroup());
				if (player.isMaxHp(true)) {
					await player.turnOver();
				}
			},
			ai: {
				save: true,
				skillTagFilter(player, arg, target) {
					return player == target && player.storage.diy_fuli != true;
				},
				result: {
					player: 10,
				},
				threaten(player, target) {
					if (!target.storage.diy_fuli) return 0.9;
				},
			},
			intro: {
				content: "limited",
			},
		},
		//张飞
		diy_paoxiao: {
			audio: "paoxiao",
			trigger: { player: "shaMiss" },
			forced: true,
			content() {
				player.addTempSkill("diy_paoxiao_damage");
			},
			mod: {
				cardUsable(card, player, num) {
					if (card.name == "sha") return Infinity;
				},
			},
			subSkill: {
				damage: {
					trigger: { source: "damageBegin1" },
					forced: true,
					audio: "paoxiao",
					filter(event, player) {
						return event.card && event.card.name == "sha";
					},
					onremove: true,
					content() {
						trigger.num++;
						player.removeSkill("diy_paoxiao_damage");
					},
					intro: { content: "本回合内下一次使用【杀】造成伤害时令伤害值+1" },
				},
			},
		},
		diy_tishen: {
			audio: "retishen",
			skillAnimation: true,
			animationColor: "soil",
			locked: true,
			trigger: { player: "phaseZhunbeiBegin" },
			filter(event, player) {
				return player.isDamaged();
			},
			async content(event, trigger, player) {
				player.recover(player.maxHp - player.hp);
				player.draw(player.maxHp - player.hp);
			},
		},
		miniqinyin: {
			audio: "qinyin",
			trigger: { player: "phaseDiscardEnd" },
			filter(event, player) {
				return player.getHistory("lose", function (evt) {
					return evt.type == "discard" && evt.getParent("phaseDiscard") == event;
				}).length;
			},
			direct: true,
			content() {
				"step 0";
				event.forceDie = true;
				var list = ["失去体力", "回复体力", "摸牌", "cancel2"];
				player
					.chooseControl(list)
					.set("ai", function () {
						var player = _status.event.player;
						var list = [game.filterPlayer().reduce((sum, target) => sum + get.effect(target, { name: "losehp" }, player, player), 0), player.getUseValue({ name: "taoyuan" }), player.getUseValue({ name: "wugu" }), 0];
						var num = list.slice().sort((a, b) => b - a)[0];
						return _status.event.controls[list.indexOf(num)];
					})
					.set("prompt", get.prompt2("miniqinyin"));
				("step 1");
				if (result.control != "cancel2") {
					player.logSkill("miniqinyin");
					if (result.control == "失去体力") game.playAudio("skill", "qinyin2");
					else game.playAudio("skill", "qinyin1");
					if (result.control == "摸牌") game.asyncDraw(game.filterPlayer());
					else {
						game.filterPlayer().forEach(target => target[result.control == "失去体力" ? "loseHp" : "recover"]());
						event.finish();
					}
				} else event.finish();
				("step 2");
				game.delayx();
			},
			ai: { expose: 0.2 },
		},
	},
	//翻译
	translate: {
		mb_old: "手杀怀旧",
		ol_old: "OL怀旧",
		xin_old: "新杀怀旧",
		tw_old: "海外怀旧",
		other_old: "线下怀旧",

		old_jm_yuanshu: "旧集蜜袁术",
		old_jm_yuanshu_ab: "哈基术",
		old_mbmaodie: "冒迭",
		old_mbmaodie_info: "锁定技，你使用牌后，若造成伤害，你本回合下一次使用的伤害牌需大于此牌字数；若未造成伤害，你获得一张目标角色的初始手牌。",
		old_mb_shen_jiangwei: "牢手杀神姜维", //初版
		old_mb_shen_jiangwei_prefix: "牢|手杀神",
		old_guxuan: "孤悬",
		old_guxuan_info: "当你成为其他角色使用锦囊牌的目标后，你可以弃置自己一个区域内的所有牌，然后选择弃置至多等量名其他角色对应区域内的各一张牌。",
		old_juejin: "绝烬",
		old_juejin_info: "持恒技，限定技，出牌阶段或当你进入濒死状态时，你可以选择X项执行：①回复X点体力；②摸X张牌；③手牌上限+X；④对一名其他角色造成X点火焰伤害（X为你脱离濒死状态的次数，至多为4，至少为1）。然后你可以发动一次“回天”。",
		old_huitian: "回天",
		old_huitian_info: "每轮限一次，结束阶段，若你本回合使用【杀】造成过伤害且当前体力值小于等于2，你可以获得一个额外回合且你于该额外回合内：①摸牌阶段的摸牌数+2；②使用【杀】无次数限制且【杀】造成的伤害+1.每轮开始时，若你发动“回天”的次数大于2，你死亡。",
		old_xingzhen: "星阵",
		old_xingzhen_info: "出牌阶段限一次，你可以观看牌堆顶的Y张牌（Y为你的体力上限且至多为7），你可以用手牌中的任意张牌与其中的任意张牌交换；然后选择一名其他角色角色，令其选择一项：①展示牌堆顶Y张牌；②展示你的手牌。展示后，你可以将展示牌中的【杀】依次对其使用。",
		oldx_mb_shen_jiangwei: "旧手杀神姜维", //二版
		oldx_mb_shen_jiangwei_prefix: "旧|手杀神",
		oldx_juejin: "绝烬",
		oldx_juejin_info: "持恒技，限定技，出牌阶段或当你进入濒死状态时，你可以选择X项执行：①回复X点体力；②摸X张牌；③体力上限+X；④对一名其他角色造成X点雷电伤害（X为你脱离濒死状态的次数，至多为4，至少为1）。然后你可以发动一次“回天”。若你未使用此技能执行过选项，则你进入濒死状态后减一点体力上限并将体力回复至一点。",
		oldx_xingzhen: "星阵",
		oldx_xingzhen_info: "牌堆顶的7张牌始终对你可见，你的回合外，你可以如手牌般使用或打出其中的基本牌，你的回合内，你可以如手牌般使用或打出其中的锦囊牌。",
		old_mb_caomao: "旧手杀曹髦",
		old_mb_caomao_prefix: "旧|手杀",
		old_mbqianlong: "潜龙",
		old_mbqianlong_info: `${get.poptip("rule_chihengji")}。①游戏开始时，你获得20枚“道心”标记。②当你得到牌后/受到1点伤害后/造成1点伤害后，你获得5/10/15枚“道心”（上限为99枚）。③若你的“道心”数不小于25/50/75/99，你视为拥有${get.poptip("oldx_mbcmqingzheng")}/${get.poptip("old_mbcmjiushi")}/${get.poptip("old_mbcmfangzhu")}/${get.poptip("old_mbjuejin")}。`,
		oldx_mbcmqingzheng: "清正",
		oldx_mbcmqingzheng_info: `${get.poptip("rule_chihengji")}。出牌阶段开始时，你可以弃置一种花色的所有手牌，并观看一名有手牌的其他角色的手牌，你弃置其中一种花色的所有牌。若其被弃置的牌数小于你以此法弃置的牌数，你对其造成1点伤害。`,
		old_mbcmjiushi: "酒诗",
		old_mbcmjiushi_info: `${get.poptip("rule_chihengji")}。①当你需要使用【酒】时，若你的武将牌正面向上，你可以翻面，视为使用一张【酒】。②当你受到伤害后，若你武将牌背面朝上且未因此次伤害发动过〖酒诗〗，你可以翻面。③当你翻面后，你获得牌堆里的一张锦囊牌。`,
		old_mbcmfangzhu: "放逐",
		old_mbcmfangzhu_info: `${get.poptip("rule_chihengji")}。出牌阶段限一次，你可以选择一名其他角色，选择一项：⒈令其不能使用手牌中的非锦囊牌直到其回合结束；⒉令其所有非Charlotte技能失效直到其回合结束。`,
		old_mbjuejin: "决进",
		old_mbjuejin_info: `${get.poptip("rule_chihengji")}，限定技。出牌阶段，你可以令所有角色依次将体力调整至1并获得X点护甲（X为一名角色以此法减少的体力值且你以此法获得的护甲数额外+2）。然后你将牌堆、弃牌堆、场上及所有角色手牌中的【闪】、【桃】和【酒】移出游戏且增加全局技能“${get.poptip({
			id: "juejin_xiangsicunwei",
			name: "向死存魏",
			type: "character",
			info: "当有牌进入弃牌堆后，系统将这些牌中的【闪】、【桃】和【酒】移出游戏。",
		})}”。`,
		old_mbweitong: "卫统",
		old_mbweitong_info: `${get.poptip("rule_chihengji")}，主公技。游戏开始时，若你有〖潜龙〗且场上有其他魏势力角色，则你获得x枚“道心”标记（x为其他魏势力角色数*20）。`,
		old_new_simayi: "旧手杀神司马懿",
		old_new_simayi_prefix: "旧|手杀神",
		old_jilin: "戢鳞",
		old_jilin_info: "①游戏开始时，你将牌堆顶三张牌暗置于你的武将牌上，称为“志”。②当你成为其他角色使用牌的目标时，你可以明置一张暗置的“志”令此牌对你无效。③回合开始时，你可用任意张手牌替换等量暗置的“志”。",
		old_yingyou: "英猷",
		old_yingyou_info: "①出牌阶段开始时，你可明置一张“志”然后摸X张牌（X为明置的“志”的数量）。②当你失去与明置的“志”其中一张花色相同的牌时，你摸一张牌。",
		old_yingtian: "应天",
		old_yingtian_info: `觉醒技。一名角色死亡后，若场上势力数不大于2，则你获得${get.poptip("reguicai")}、${get.poptip("rewansha")}、${get.poptip("lianpo")}并失去〖英猷〗且你本局游戏使用牌没有距离限制。`,
		old_mb_jushou: "旧手杀界沮授",
		old_mb_jushou_prefix: "旧|手杀界",
		old_xinjianying: "渐营",
		old_xinjianying_info: "①当你于出牌阶段内使用与此阶段你使用的上一张牌点数或花色相同的牌时，你可以摸一张牌。②出牌阶段限一次，你可以将一张牌当做任意基本牌使用（不计入次数限制）。若你于此阶段内使用的上一张牌有花色，则此牌的花色视为上一张牌的花色。",
		xinshibei: "矢北",
		xinshibei_info: "锁定技，当你受到伤害后：若此伤害是你本回合第一次受到的伤害，则你回复1点体力；否则你失去1点体力。",
		old_mb_zhuzhi: "旧手杀界朱治",
		old_mb_zhuzhi_prefix: "旧|手杀界",
		old_sbanguo: "安国",
		old_sbanguo_info: "①游戏开始时，你令一名其他角色获得1枚“安国”标记（有“安国”的角色手牌上限基数等于体力上限）。②出牌阶段开始时，你可以将一名有“安国”的角色的所有“安国”移动给一名本局游戏未获得过“安国”的其他角色。③当你受到伤害时，若有有“安国”的角色且伤害值不小于你的体力值且此伤害没有来源或来源没有“安国”，防止此伤害。④一名角色进入濒死状态时，若其有你因〖安国①〗获得的“安国”，你移去其该“安国”，令其将体力回复至1点。然后你选择一项：1.若你的体力值大于1，你失去体力至1点；2.若你的体力上限大于1，你将体力上限减至1。最后你令其获得X点护甲（X为你以此法失去的体力值或减少的体力上限）。",
		old_mb_sp_zhenji: "旧手杀SP甄宓",
		old_mb_sp_zhenji_prefix: "旧|手杀SP",
		old_mbbojian: "博鉴",
		old_mbbojian_info: "锁定技。出牌阶段结束时，若你本阶段使用牌数与花色数与上个出牌阶段皆不同，你摸两张牌；否则你将一张弃牌堆中本阶段你因使用而失去的牌交给一名角色。",
		old_mbjiwei: "济危",
		old_mbjiwei_info: "锁定技。①每个其他角色的回合结束时，此回合每满足一项，你便摸一张牌：1.有至少一名角色失去过牌；2.有至少一名角色受到过伤害。②准备阶段，若你的手牌数不小于存活人数且不小于体力值，你须将手牌中数量较多颜色的牌全部分配给其他角色（若数量相同则选择一种颜色）。",
		old_fuqian: "旧手杀傅佥",
		old_fuqian_prefix: "旧|手杀",
		old_jueyong: "绝勇",
		old_jueyong_info: "锁定技。①当你不因【绝勇】成为唯一牌的目标时，若此牌不为转化牌且对应的实体牌牌数为1且不为【桃】或【酒】，则你将此牌置于你的武将牌上，称为“绝”，且取消此牌的目标。②结束阶段开始时，若你有“绝”，且“绝”的数量不小于你已损失的体力值，则你令所有“绝”的原使用者依次对你使用所有“绝”，将无法使用的“绝”置入弃牌堆。",
		old_poxiang: "破降",
		old_poxiang_info: "出牌阶段限一次。你可以将一张牌交给一名其他角色并摸三张牌，移去所有“绝”并失去1点体力，然后你跳过本回合的弃牌阶段。",
		old_mb_guozhao: "旧手杀郭照",
		old_mb_guozhao_prefix: "旧|手杀",
		old_yichong: "易宠",
		old_yichong_info: "①准备阶段，你可以选择一名其他角色并选择一个花色，然后你获得其所有此花色的牌，移除场上的所有“雀”标记，令其获得“雀”标记直到你的下个回合开始。②拥有“雀”标记的角色获得你最后一次发动〖易宠①〗选择的花色的牌后，你获得这些牌（你至多通过每个“雀”得到五张牌）。",
		old_wufei: "诬诽",
		old_wufei_info: "若场上存在拥有“雀”标记的角色A，则：①当你使用【杀】或伤害类锦囊牌指定第一个目标后，你令A成为此牌伤害来源。②当你受到伤害后，若A的体力值大于1且A的体力值大于你，则你可以对A造成1点伤害。",
		old_mb_chengui: "旧手杀陈珪",
		old_mb_chengui_prefix: "旧|手杀",
		old_guimou: "诡谋",
		old_guimou_info: "锁定技。游戏开始时/回合结束时，你随机/须选择以下一项直到你的下个准备阶段：①记录场上期间角色使用牌数；②记录期间场上角色弃置牌数；③记录期间场上角色获得牌数。准备阶段，你可以选择一名场上对应记录数值最少的其他角色，观看其手牌并选择其中至多三张牌，然后你可以将其中至多两张牌交给另一名其他角色，然后弃置其余牌。",
		old_yangfu: "旧杨阜",
		old_yangfu_prefix: "旧",
		oldx_jiebing: "借兵",
		oldx_jiebing_info: "每当你受到伤害后，你可以选择一名不为伤害来源的其他角色，随机展示并获得其两张牌，若其中有装备牌，你使用之。",
		old_hannan: "扞难",
		old_hannan_info: "出牌阶段限一次。你可以与一名角色拼点，赢的角色对没赢的角色造成2点伤害。",
		old_mbshishou: "侍守",
		old_mbshishou_info: "锁定技。当你发动〖佐佑〗后，若目标角色不为你，你执行〖佐佑〗中目标角色未执行的一项。",
		old_wangling: "旧王凌",
		old_wangling_prefix: "旧",
		old_sp_wangshuang: "旧勇王双",
		old_sp_wangshuang_prefix: "旧|勇",
		old_shanxie: "擅械",
		old_shanxie_info: "①出牌阶段限一次，你可选择一项：⒈从牌堆中获得一张武器牌。⒉获得一名其他角色装备区内的一张武器牌并使用，然后其将一张手牌当做【杀】对你使用。②当其他角色使用【闪】响应你使用的【杀】时，若此【闪】没有点数或点数不大于你攻击范围的二倍，则你令此【闪】无效。",
		old_wujing: "旧吴景",
		old_wujing_prefix: "旧",
		old_liubing: "流兵",
		old_liubing_info: "锁定技。①当你声明使用【杀】后，若此牌是你本回合使用的第一张有唯一对应实体牌的【杀】，则你将此牌的花色改为♦。②其他角色于其出牌阶段内使用的非转化黑色杀结算结束后，若此【杀】未造成伤害，则你获得之。",
		old_sp_xinpi: "旧信辛毗",
		old_sp_xinpi_prefix: "旧|信",
		old_spyinju: "引裾",
		old_spyinju2: "引裾",
		old_spyinju_info: "出牌阶段限一次，你可令一名其他角色选择一项：①对你使用一张【杀】。②其下个回合的准备阶段开始时，跳过出牌阶段和弃牌阶段。",
		old_qiaogong: "旧桥公",
		old_qiaogong_prefix: "旧",
		old_yizhu: "遗珠",
		old_yizhu_info: "①结束阶段，你摸两张牌，然后将两张牌随机插入牌堆前2X张牌的位置中（X为角色数，选择牌的牌名对其他角色可见）。②当有其他角色使用“遗珠”牌指定唯一目标时，你可清除对应的“遗珠”标记并取消此目标，然后你可使用此牌。③当有“遗珠”牌进入弃牌堆后，你摸一张牌并清除对应的“遗珠”标记。",
		old_gonghuan: "共患",
		old_gonghuan_info: "锁定技。每回合限一次，一名其他角色受到伤害时，若其拥有“姻”标记且其体力值小于你，则你将伤害转移给自己。此伤害结算结束后，若你与其体力值相等，则你与其移去“姻”标记。",
		old_sp_lvfan: "旧严吕范",
		old_sp_lvfan_prefix: "旧|严",
		old_xin_zhangzhongjing: "旧张机",
		old_xin_zhangzhongjing_prefix: "旧",
		old_sp_zhujun: "旧严朱儁",
		old_sp_zhujun_prefix: "旧|严",
		old_yj_zhoubuyi: "旧☆周不疑",
		old_yj_zhoubuyi_prefix: "旧|☆",
		old_mbhuiyao: "慧夭",
		old_mbhuiyao_info: "出牌阶段限一次。你可以受到1点无来源伤害，然后你选择一名其他角色，令其视为对另一名角色造成过1点伤害。",
		old_mbquesong: "雀颂",
		old_mbquesong_info: "一名角色的回合结束阶段，若你于本回合内受到过伤害，你令一名角色选择一项：1.摸X张牌并复原武将牌（X为5-其装备区牌数，且至少为1）；2.回复一点体力。",
		old_shenpei: "旧审配",
		old_shenpei_prefix: "旧",
		old_mb_sp_guanqiujian: "旧玄毌丘俭",
		old_mb_sp_guanqiujian_prefix: "旧|玄",
		old_mbcuizhen: "摧阵",
		old_mbcuizhen_info: "①游戏开始时，你可以废除至多三名其他角色的武器栏。②当你于出牌阶段使用伤害类牌指定其他角色为目标后，若目标角色的手牌数不小于体力值，你可以废除其武器栏。③摸牌阶段，你令额定摸牌数+X（X为所有角色被废除的武器栏数之和+1，至多为4）。",
		old_mb_wangjing: "旧王经",
		old_mb_wangjing_prefix: "旧",
		old_mbjiejian: "节谏",
		old_mbjiejian_info: "准备阶段，你可将任意张手牌交给任意名其他角色，并令这些角色获得“节谏”标记。“节谏”角色成为一张非你使用的非装备牌的唯一目标时，你可将此牌转移给你，然后摸一张牌。“节谏”角色的回合结束时，移去其“节谏”标记，若其体力值不小于X（X为你交给其牌时其的体力值），你摸两张牌。",
		old_mbjiejian_tag: "已分配",
		oldx_sp_jianggan: "旧蒋干",
		oldx_sp_jianggan_prefix: "旧",
		old_spdaoshu: "盗书",
		old_spdaoshu_info: "每轮限一次。一名敌方角色的出牌阶段开始时，若其有手牌，则你可以令其视为使用一张【酒】。其须声明一个基本牌的牌名，然后你判断其手牌区内是否有该牌名的牌。若你判断正确，则你随机获得其五张手牌，否则你不能响应其使用的牌直到回合结束。",
		old_spdaoshu_info_identity: "每轮限一次。一名其他角色的出牌阶段开始时，若其有手牌，则你可以令其视为使用一张【酒】。其须声明一个基本牌的牌名，然后你判断其手牌区内是否有该牌名的牌。若你判断正确，则你随机获得其五张手牌，否则你不能响应其使用的牌直到回合结束。",
		old_spdaoshu_info_guozhan: "每轮限一次。一名其他角色的出牌阶段开始时，若其有手牌，则你可以令其视为使用一张【酒】。其须声明一个基本牌的牌名，然后你判断其手牌区内是否有该牌名的牌。若你判断正确，则你随机获得其五张手牌，否则你不能响应其使用的牌直到回合结束。",
		old_liwei: "旧李遗",
		old_liwei_prefix: "旧",
		old_jiaohua: "教化",
		old_jiaohua_backup: "教化",
		old_jiaohua_info: "出牌阶段限四次，你可以选择一个未被〖教化〗记录过的牌的类型，令一名角色从牌堆中获得一张此类型的牌，然后记录此类型，若基本、锦囊、装备均已被你发动〖教化〗记录，则你清空〖教化〗记录。",
		old_zhangbu: "旧张布",
		old_zhangbu_prefix: "旧",
		old_mbchengxiong: "惩凶",
		old_mbchengxiong_info: "你使用锦囊牌指定其他角色为目标后，可选择一名牌数不小于X的角色，弃置其一张牌（X为你此阶段使用的牌数）。若此牌颜色与你使用的锦囊牌相同，你对其造成1点伤害。",
		old_mbwangzhuang: "妄专",
		old_mbwangzhuang_info: "一名角色受到非牌造成的伤害后，若你是伤害来源或受伤角色，你可以摸两张牌，令当前回合角色本回合非锁定技失效。",
		old_wuke: "旧吴珂",
		old_wuke_prefix: "旧",
		old_mbzhuguo: "助国",
		old_mbzhuguo_info: "出牌阶段限一次，你可令一名角色将手牌调整至体力上限。然后：若其没有摸牌，则回复1点体力；若其因此成为手牌数最多的角色，你可以选另一名角色，令其选择是否对你指定的另一名角色使用一张无距离限制的【杀】。",
		old_mbanda: "谙达",
		old_mbanda_info: "每回合限一次，当一名角色进入濒死状态时，你可令伤害来源交给其两张颜色不同的牌，否则该角色回复1点体力。",
		old_sb_huangzhong: "旧谋黄忠",
		old_sb_huangzhong_prefix: "旧|谋",
		old_sbliegong: "烈弓",
		old_sbliegong_info: "①你使用【杀】可以选择你距离不大于此【杀】点数的角色为目标。②当你使用牌时，或成为其他角色使用牌的目标后，你记录此牌的花色。③当你使用【杀】指定唯一目标后，若你〖烈弓②〗的记录不为空，则你可亮出牌堆顶的X张牌（X为你〖烈弓②〗记录过的花色数-1），令此【杀】的伤害值基数+Y（Y为亮出牌中被〖烈弓②〗记录过花色的牌的数量），且目标角色不能使用〖烈弓②〗记录过花色的牌响应此【杀】。此【杀】使用结算结束后，你清除〖烈弓②〗的记录。",
		old_sb_gongsunzan: "旧谋公孙瓒",
		old_sb_gongsunzan_prefix: "旧|谋",
		old_sbqiaomeng: "趫猛",
		old_sbqiaomeng_info: "当你使用【杀】造成伤害后，若你有〖义从〗，你可以选择一项：⒈弃置受伤角色区域里的一张牌并摸两张牌；⒉获得4点蓄力值。",
		old_sb_sunquan: "旧谋孙权",
		old_sb_sunquan_prefix: "旧|谋",
		old_sbzhiheng: "制衡",
		old_sbzhiheng_info: "出牌阶段限一次。你可以弃置任意张牌并摸等量的牌，若你以此法弃置的牌包括你所有手牌，则你多摸X张牌（X为你的“业”数+1）。",
		old_sbtongye: "统业",
		old_sbtongye_info: "锁定技。结束阶段，你猜测场上装备牌数与你下一个准备阶段的场上装备牌数是否相等，并获得以下效果：你下一个准备阶段，若你猜对且“业”数小于4，你获得1枚“业”；若你猜错，你弃1枚“业”。",
		old_sb_huanggai: "旧谋黄盖",
		old_sb_huanggai_prefix: "旧|谋",
		old_sb_ganning: "旧谋甘宁",
		old_sb_ganning_prefix: "旧|谋",
		old_sbqixi: "奇袭",
		old_sbqixi_info: "你可以将一张黑色牌当作【过河拆桥】使用。你使用非转化非虚拟的【过河拆桥】可以改为：出牌阶段，对一名区域内有牌的角色使用，你弃置其区域内的所有牌。",
		old_sbfenwei: "奋威",
		old_sbfenwei_info: "限定技，当一名角色使用的锦囊牌指定了至少两名角色为目标时，你可以令此牌对其中任意名角色无效，然后你获得牌堆中的X张【过河拆桥】（X为你选择的角色数且X至多为4）。",
		old_sb_xiaoqiao: "旧谋小乔",
		old_sb_xiaoqiao_prefix: "旧|谋",
		old_sbtianxiang: "天香",
		old_sbtianxiang_info: "①出牌阶段限三次，你可以交给一名没有“天香”标记的其他角色一张红色牌，然后令其获得此牌花色的“天香”标记。②当你受到伤害时，你可以移去一名角色的“天香”标记，若此“天香”标记为：红桃，你防止此伤害，其受到伤害来源对其造成的1点伤害（若没有伤害来源则改为无来源伤害）；方片，其交给你两张牌。③准备阶段，你移去场上所有的“天香”标记，然后摸X张牌（X为移去的“天香”标记数+3）。",
		old_sb_daqiao: "旧谋大乔",
		old_sb_daqiao_prefix: "旧|谋",
		old_sbguose: "国色",
		old_sbguose_info: "出牌阶段限四次，你可以将一张♦牌当【乐不思蜀】使用或弃置场上一张【乐不思蜀】，然后你摸两张牌并弃置一张牌。",
		old_sb_sunce: "旧谋孙策",
		old_sb_sunce_prefix: "旧|谋",
		old_sbjiang: "激昂",
		old_sbjiang_info: "①当你使用【决斗】或红色【杀】指定目标后，或当你成为【决斗】或红色【杀】的目标后，你摸一张牌。②当你使用【决斗】时，你可以额外指定一名目标，然后你失去1点体力。③出牌阶段限一次。你可以将所有手牌当【决斗】使用。",
		old_sbhunzi: "魂姿",
		old_sbhunzi_info: `觉醒技。当你脱离濒死状态后，你减1点体力上限，获得2点护甲，摸三张牌。然后你获得${get.poptip("sbyingzi")}和${get.poptip("gzyinghun")}。`,
		old_sbzhiba: "制霸",
		old_sbzhiba_info: "主公技，限定技。当你进入濒死状态时，你可以回复X点体力并修改〖激昂③〗为“出牌阶段限X次”（X为场上吴势力角色数）。然后其他吴势力角色依次受到1点无来源伤害，且当有角色因此死亡后，你摸三张牌。",
		old_sb_sp_zhugeliang: "牢谋卧龙", //初版,
		old_sb_sp_zhugeliang_prefix: "牢|谋",
		old_sbhuoji: "火计",
		old_sbhuoji_info: `使命技。①使命：出牌阶段限一次。你可以对一名其他角色造成1点火焰伤害，然后你对所有与其势力相同的不为其的其他角色各造成1点火焰伤害。②成功：准备阶段，若你本局游戏已造成的火焰伤害不小于本局游戏总角色数，则你失去〖火计〗和〖看破〗，然后获得${get.poptip("old_sbguanxing")}和${get.poptip("old_sbkongcheng")}。③失败：使命成功前进入濒死状态。`,
		old_sbkanpo: "看破",
		old_sbkanpo_info: "①一轮游戏开始时，你清除〖看破①〗记录的牌名，然后你可以依次记录共计三个未于本次清除过的非装备牌牌名（对其他角色不可见）。②当其他角色使用你〖看破①〗记录过的牌名的牌时，你可以移去一个〖看破①〗中的此牌名的记录，令此牌无效。",
		old_sb_zhugeliang: "牢谋诸葛亮",
		old_sb_zhugeliang_prefix: "牢|谋",
		old_sbguanxing: "观星",
		old_sbguanxing_info: "①准备阶段，你将所有“星”置入弃牌堆，将牌堆顶的X张牌置于你的武将牌上，称为“星”。然后你可以将任意张“星”置于牌堆顶（X为你此次移去的“星”数+1且至多为7，若你此前未发动过〖观星①〗则X为7）。②结束阶段，若你未于本回合的准备阶段将“星”置于过牌堆顶，你可以将任意张“星”置于牌堆顶。③你可以如手牌般使用或打出“星”。",
		old_sbkongcheng: "空城",
		old_sbkongcheng_info: "锁定技。当你受到伤害时，若你有〖观星〗，且若你：有“星”，你判定，若结果点数不大于你的“星”数，此伤害-1；没有“星”，此伤害+1。",
		oldx_sb_sp_zhugeliang: "旧谋卧龙", //二版
		oldx_sb_sp_zhugeliang_prefix: "旧|谋",
		oldx_sbhuoji: "火计",
		oldx_sbhuoji_info: `使命技。①使命：出牌阶段限一次。你可以对一名其他角色造成1点火焰伤害，然后你对所有与其势力相同的不为其的其他角色各造成1点火焰伤害。②成功：准备阶段，若你本局游戏已造成的火焰伤害不小于本局游戏总角色数，则你失去〖火计〗和〖看破〗，然后获得${get.poptip("oldx_sbguanxing")}和${get.poptip("oldx_sbkongcheng")}。③失败：使命成功前进入濒死状态。`,
		oldx_sbkanpo: "看破",
		oldx_sbkanpo_info: "①一轮游戏开始时，你清除〖看破①〗记录的牌名，然后你可以依次记录任意个未于上次发动〖看破①〗记录清除过的非装备牌牌名（对其他角色不可见，每局游戏至多记录10个牌名）。②其他角色使用你〖看破①〗记录过的牌名的牌时，你可以移去一个〖看破①〗中的此牌名的记录令此牌无效，然后你摸一张牌。",
		oldx_sb_zhugeliang: "旧谋诸葛亮",
		oldx_sb_zhugeliang_prefix: "旧|谋",
		oldx_sbguanxing: "观星",
		oldx_sbguanxing_info: "①准备阶段，你将所有“星”置入弃牌堆，将牌堆顶的X张牌置于你的武将牌上，称为“星”（X为7-此前发动〖观星①〗次数的两倍，且X至少为0）。然后你可以将任意张“星”置于牌堆顶。②结束阶段，若你未于本回合的准备阶段将“星”置于过牌堆顶，你可以将任意张“星”置于牌堆顶。③你可以如手牌般使用或打出“星”。",
		oldx_sbkongcheng: "空城",
		oldx_sbkongcheng_info: "锁定技。当你受到伤害时，若你拥有技能〖观星〗，且若你：有“星”，你判定，若结果点数不大于你的“星”数，此伤害-1；没有“星”，此伤害+1。",
		old_sb_menghuo: "旧谋孟获",
		old_sb_menghuo_prefix: "旧|谋",
		old_sbzaiqi: "再起",
		old_sbzaiqi_info: "蓄力技（3/7）。①弃牌阶段结束时，你可以消耗任意点蓄力值并选择等量名角色，然后令这些角色选择一项：1.令你摸一张牌；2.弃置一张牌，然后你回复1点体力。②每回合限一次。当你造成伤害后，你获得1点蓄力值。",
		old_sb_zhurong: "旧谋祝融",
		old_sb_zhurong_prefix: "旧|谋",
		old_sblieren: "烈刃",
		old_sblieren_info: "当你使用【杀】指定唯一目标后，你可以摸一张牌，然后与其拼点。若你赢，此【杀】结算结束后，你可以对另一名其他角色造成1点伤害。",
		old_sbjuxiang: "巨象",
		old_sbjuxiang_info: "锁定技。①【南蛮入侵】对你无效。②当其他角色使用【南蛮入侵】结算结束后，你获得此牌对应的所有实体牌。③结束阶段，若你未于本回合使用过【南蛮入侵】，你将一张游戏外的随机【南蛮入侵】（共八张）交给一名角色。",
		old_sb_guanyu: "旧谋关羽",
		old_sb_guanyu_prefix: "旧|谋",
		old_sbwusheng: "武圣",
		old_sbwusheng_wusheng_backup: "武圣",
		old_sbwusheng_info: "你可以将一张手牌当作任意【杀】使用或打出。出牌阶段开始时，你可以选择一名非主公的其他角色，本阶段对其使用【杀】无距离和次数限制，使用【杀】指定其为目标后摸一张牌，对其使用五张【杀】后不能对其使用【杀】。",
		old_sb_zhaoyun: "旧谋赵云",
		old_sb_zhaoyun_prefix: "旧|谋",
		old_sblongdan: "龙胆",
		old_sblongdan_info: "蓄力技（1/4）。①你可以消耗1点蓄力值，将【杀】当做【闪】或将【闪】当做【杀】使用或打出，然后摸一张牌。②一名角色的回合结束时，你获得1点蓄力值。",
		old_sbjizhu: "积著",
		old_sbjizhu_info: `准备阶段开始时，你可以和一名其他角色进行${get.poptip("rule_xieli")}。其的下个结束阶段开始时，若你与其${get.poptip("rule_xieli")}成功，则你修改${get.poptip("old_sblongdan_shabi")}直到你的下个结束阶段开始。`,
		old_sblongdan_shabi: "龙胆",
		old_sblongdan_shabi_info: "蓄力技（1/4）。①你可以消耗1点蓄力值，将一张基本牌当做任意基本牌使用或打出，然后摸一张牌。②一名角色的回合结束时，你获得1点蓄力值。",
		old_sb_fazheng: "旧谋法正",
		old_sb_fazheng_prefix: "旧|谋",
		old_sbxuanhuo: "眩惑",
		old_sbxuanhuo_info: "①出牌阶段限一次。你可以将一张牌交给一名没有“眩”标记的其他角色，然后令其获得“眩”标记。②当有“眩”的其他角色于摸牌阶段外得到牌后，若你以此法于其本次获得“眩”的期间内得到其的牌数小于5，你随机获得其一张手牌。",
		old_sbenyuan: "恩怨",
		old_sbenyuan_info: "锁定技。准备阶段，若场上存在有“眩”的角色，你移去该角色的“眩”，且你于其本次获得“眩”的期间内得到其的牌数：不小于3，你交给其两张牌；小于3，其失去1点体力，你回复1点体力。",
		old_sb_xuhuang: "旧谋徐晃",
		old_sb_xuhuang_prefix: "旧|谋",
		old_sbduanliang: "断粮",
		old_sbduanliang_info: "出牌阶段限两次。你可以与一名其他角色进行谋弈。若你赢，且你选择的选项为：“围城断粮”，若其判定区没有【兵粮寸断】，你将牌堆顶牌当【兵粮寸断】对其使用，否则你获得其一张牌；“擂鼓进军”，你视为对其使用一张【决斗】。",
		old_sb_yuanshao: "旧谋袁绍",
		old_sb_yuanshao_prefix: "旧|谋",
		old_sbluanji: "乱击",
		old_sbluanji_info: "①出牌阶段限一次。你可以将两张手牌当【万箭齐发】使用。②当其他角色因响应你使用的【万箭齐发】而打出【闪】时，你摸一张牌。",
		old_sbxueyi: "血裔",
		old_sbxueyi_info: "主公技，锁定技。①你的手牌上限+2X（X为场上其他群势力角色数）。②当你使用牌指定其他群势力角色为目标后，你摸一张牌。",
		old_sb_huaxiong: "旧谋华雄",
		old_sb_huaxiong_prefix: "旧|谋",
		old_sb_handang: "旧谋韩当",
		old_sb_handang_prefix: "旧|谋",
		old_sbjiefan: "解烦",
		old_sbjiefan_info: `出牌阶段限一次。你可以令一名角色选择一项：⒈令所有攻击范围内含有其的角色依次弃置两张牌；⒉其摸等同于攻击范围内含有其的角色数+2的牌；⒊${get.poptip("rule_beishui")}：此技能失效直到你杀死一名角色，然后依次执行上述所有选项。`,
		old_sb_caopi: "牢谋曹丕",
		old_sb_caopi_prefix: "牢|谋",
		old_sb_jiaxu: "旧谋贾诩",
		old_sb_jiaxu_prefix: "旧|谋",
		old_sbwansha: "完杀",
		old_sbwansha_info: "①你的回合内，不处于濒死状态的其他角色不能使用【桃】。②一名角色进入濒死状态时，你可以观看其手牌并选择其中零至两张牌（其他人不可见），然后其选择一项：1.你将这些牌分配给任意名不为其的角色；2.其弃置除这些牌以外的牌。",
		old_sbwansha_rewrite: "完杀·改",
		old_sbwansha_rewrite_info: "①你的回合内，不处于濒死状态的其他角色不能使用【桃】。②一名角色进入濒死状态时，你可以观看其手牌并选择其区域内零至三张牌（其他人不可见），然后其选择一项：1.你将这些牌分配给任意名不为其的角色；2.其弃置除这些牌以外的牌。",
		old_sbluanwu: "乱武",
		old_sbluanwu_info: "限定技，出牌阶段，你可令所有其他角色依次选择一项：①对距离最近（或之一）的另一名其他角色使用一张【杀】；②失去1点体力。一名角色因此失去体力后，你可以修改〖完杀〗或者〖帷幕〗。",
		old_sbweimu: "帷幕",
		old_sbweimu_info: "锁定技。当你成为黑色锦囊牌的目标时，取消之。",
		old_sbweimu_rewrite: "帷幕·改",
		old_sbweimu_rewrite_info: "锁定技。①当你成为黑色锦囊牌的目标时，取消之。②每轮开始时，若你上一轮成为其他角色使用牌的目标的次数不大于2，你从弃牌堆中随机获得一张黑色锦囊牌或防具牌。",
		old_sb_zhugejin: "旧谋诸葛瑾",
		old_sb_zhugejin_prefix: "旧|谋",
		old_sbhuanshi: "缓释",
		old_sbhuanshi_info: "一名角色的判定牌生效前，你可以观看牌堆顶X张牌（X为你的体力值），然后可以用此牌代替之或用一张手牌替换之。",
		old_sbhuanshi_tag: "牌堆顶",
		old_sbhongyuan: "弘援",
		old_sbhongyuan_info: "蓄力技（1/4）。你一次性获得至少两张牌时，可以消耗1点蓄力值并令至多两名角色各摸一张牌；一名其他角色一次性失去至少两张牌时，你可以消耗1点蓄力值令其摸两张牌。",
		old_sbmingzhe: "明哲",
		old_sbmingzhe_info: "锁定技，每轮限三次，你于回合外失去牌时，你选择一名角色：若其有蓄力技，其获得1点蓄力值；若你失去的牌中有非基本牌，其摸一张牌。",
		old_sb_zhangliao: "旧谋张辽",
		old_sb_zhangliao_prefix: "旧|谋",
		old_sbtuxi: "突袭",
		old_sbtuxi_info: "你的回合限三次，当你不因此技能获得牌后，你可以将其中任意张牌置入弃牌堆，然后获得至多X名其他角色各一张手牌（X为你以此法置入弃牌堆的牌数）。",
		old_sbdengfeng: "登锋",
		old_sbdengfeng_info: `准备阶段，你可以选择一名其他角色并选择一项：①令其获得其装备区的至多两张牌。②你获得牌堆中的一张【杀】。③${get.poptip("rule_beishui")}：你失去1点体力。`,
		old_sb_guojia: "旧谋郭嘉",
		old_sb_guojia_prefix: "旧|谋",
		old_sbyiji: "遗计",
		old_sbyiji_info: "当你受到伤害后，你可以摸两张牌，然后你可以将至多等量张手牌交给任意名其他角色。当你每轮首次进入濒死状态时，你可以摸两张牌，然后你可以将至多等量张牌交给任意名其他角色。",
		old_sb_gaoshun: "旧谋高顺",
		old_sb_gaoshun_prefix: "旧|谋",
		old_sbxianzhen: "陷阵",
		old_sbxianzhen_info: "出牌阶段限一次。你可以选择一名其他角色，你于本阶段获得如下效果：⒈你对其使用牌无距离限制；⒉当你使用【杀】指定其为目标后，你可以与其拼点：若你赢，此【杀】无视防具且不计入次数，且若你本回合以此法对其造成的伤害小于2，你对其造成1点伤害；若其拼点牌为【杀】，则你获得之；若其拼点牌为其最后的手牌，则此【杀】对其造成伤害时，此伤害+1。",
		old_sb_xiahouyuan: "旧谋夏侯渊",
		old_sb_xiahouyuan_prefix: "旧|谋",
		old_sbzhengzi: "整辎",
		old_sbzhengzi_info: "回合结束时，若你本回合造成的伤害不少于你的体力值，则你可以复原武将牌并摸两张牌。",
		old_sb_lvbu: "旧谋吕布",
		old_sb_lvbu_prefix: "旧|谋",
		old_sbwushuang: "无双",
		old_sbwushuang_info: "锁定技，你使用的【杀】需两张【闪】才能抵消；与你进行【决斗】的角色每次需要打出两张【杀】。此【杀】或【决斗】造成伤害时，若受伤角色没有使用或打出过【杀】或【闪】响应，此伤害+1。",
		old_sbliyu: "利驭",
		old_sbliyu_info: `当你使用【杀】对一名其他角色造成伤害后，你可获得其区域内至多等同于伤害值张牌，然后其摸等量张牌。若你与其因此获得了全部类型的牌，其选择一项:1.你视为对其指定的另一名其他角色使用一张【决斗】；2.其获得${get.poptip("old_sbwushuang")}直至其下个回合结束。`,
		old_sb_zhanghe: "旧谋张郃",
		old_sb_zhanghe_prefix: "旧|谋",
		old_sbqiaobian: "巧变",
		old_sbqiaobian_info: "每回合限一次。①你可以失去1点体力并跳过判定阶段，将判定区的所有牌移动给一名其他角色（无法置入其判定区的牌改为弃置之）。②你可以跳过摸牌阶段，于下个准备阶段摸五张牌并回复1点体力。③你可以将手牌数弃置至六张（若手牌数少于六张则跳过之）并跳过出牌阶段和弃牌阶段，然后移动场上的一张牌。",
		old_friend_xushu: "旧友徐庶",
		old_friend_xushu_prefix: "旧|友",
		old_friendxiaxing: "侠行",
		old_friendxiaxing_info: "游戏开始时，你获得并使用【玄剑】；当【玄剑】进入弃牌堆时，你可以移除1个“启诲”标记并获得之。",
		old_pot_taishici: "旧势太史慈",
		old_pot_taishici_prefix: "旧|势",
		old_pothanzhan: "酣战",
		old_pothanzhan_info: "出牌阶段限一次，你可以选择一名其他角色，你与其将手牌数摸至X张（X为各自体力上限且至多摸三张），然后你视为对其使用一张【决斗】。",
		old_potzhanlie: "战烈",
		old_potzhanlie_info: "①一名角色的回合开始时，你记录X（X为你的攻击范围），本回合中的前X张【杀】进入弃牌堆后，你获得等量“烈”标记（你至多拥有8个“烈”标记）。②出牌阶段结束时，你可移除全部”烈”标记（没有标记也可发动），视为使用一张无次数限制的【杀】并选择以下选项中的至多Y项（Y为你本次移除的标记数/2，向下取整）：1.令此【杀】可以额外指定一个目标；2.令此【杀】基础伤害值+1；3.令此【杀】需额外弃置一张牌方可响应；4.此【杀】结算完毕后，你摸两张牌。",
		old_potzhenfeng: "振锋",
		old_potzhenfeng_info: "限定技，出牌阶段，你可以选择一项：①回复2点体力；②修改〖酣战〗和〖战烈〗描述中的“X”为当前体力值、已损失体力值、场上人数中的一项（拥有对应技能方可选择）。",
		old_pot_lougui: "旧势娄圭",
		old_pot_lougui_prefix: "旧|势",
		old_potjiyu: "急御",
		old_potjiyu_info: "①出牌阶段限一次，你可以弃置一张手牌，从牌堆中随机获得与此牌类别不同的牌各一张。②当你失去本阶段因〖急御①〗获得的所有牌后，你重置〖急御①〗。",
		old_pot_chendao: "旧势陈到",
		old_pot_chendao_prefix: "旧|势",
		old_pothongyi: "弘毅",
		old_pothongyi_info: "锁定技。①游戏开始时，你获得2个「毅」标记；当你造成或受到1点伤害后，你获得1个「毅」标记；你至多拥有4个「毅」标记。②准备阶段，你选择一项：1.摸X张牌（X为你拥有的「毅」标记数）；2.移去所有「毅」标记，视为使用等量的【杀】。",
		old_pot_yuji: "旧势于吉",
		old_pot_yuji_prefix: "旧|势",
		old_potdaozhuan: "道转",
		old_potdaozhuan_info: "每轮每种牌名限一次，你可以将你与当前回合角色的共X张牌置入弃牌堆（X为本回合所有角色使用牌的类别数，X为0则跳过此步骤），视为使用一张基本牌。若X不为0且当前回合角色因此失去了X张牌，则本轮此技能失效。",
		old_potfuji: "符济",
		old_potfuji_info: "出牌阶段限一次，你可以展示全场共计Y张手牌并令等量角色获得之（Y为场上其他角色数）。因此获得【杀】的角色使用【杀】造成的伤害+1直到你的下个回合开始；因此获得【闪】的角色使用【闪】结算完毕后摸一张牌直到你的下个回合开始。然后若你的手牌数为全场最低，则你摸两张牌，获得这两项效果直到你的下个回合开始。",
		old_pot_weiyan: "旧势魏延",
		old_pot_weiyan_prefix: "旧|势",
		old_potzhongao: "忠傲",
		old_potzhongao_info: "使命技，①游戏开始时，你获得〖狂骨〗。②成功：你杀死一名角色，升级〖狂骨〗，回复X点体力并摸X张牌，体力值已满则改为摸等量张牌（X为你剩余的“壮誓”次数）。③失败：你进入濒死，或你未于出牌阶段开始时执行〖壮誓〗，失去〖壮誓〗并获得〖困奋〗，然后你回复1点体力并摸两张牌。",
		old_potzhuangshi: "壮誓",
		old_potzhuangshi_info: "出牌阶段开始时，你可以执行任意项：1.失去任意点体力，令你此阶段使用的前等量张牌不计入次数限制；2.弃置任意张手牌，令你此阶段使用的前等量张牌无距离限制且不可被响应。若均不执行，你增加1点体力上限并回复1点体力。",
		old_potzhuangshi_tag: "已选择弃置",
		old_mb_chenzhi: "旧势陈祗",
		old_mb_chenzhi_prefix: "旧|势",
		old_mbrenxing: "任行",
		old_mbrenxing_info: "每回合首次有牌不于弃牌阶段被弃置时，你可选择一项：1.与当前回合角色各摸一张牌；2.弃置一名本回合未使用或打出过【杀】的角色一张牌。",
		old_guoyuan: "旧势国渊",
		old_guoyuan_prefix: "旧|势",
		old_mbxiugeng: "修耕",
		old_mbxiugeng_info: "回合开始时，你可以记录至多三名角色的手牌数。若如此做，这些角色的下一个摸牌阶段开始时若其手牌数：小于等于记录值，其摸两张牌；大于等于记录值，其手牌上限+1。",
		old_mbchenshe: "陈赦",
		old_mbchenshe_info: "当一名其他角色进入濒死状态时，你可以依次弃置你、该角色、伤害来源的各一张牌，若这些角色以此法弃置了共计三张牌，且这些牌的颜色皆相同，则其回复体力至上限，然后你失去此技能。",
		old_mb_caocao: "旧手杀SP曹操",
		old_mb_caocao_prefix: "旧|手杀SP",
		old_mblingfa: "令法",
		old_mblingfa_info: `①第一轮开始时，你可令本轮其他角色使用【杀】时，其需弃置一张牌，否则你对其造成1点伤害。②第二轮游戏开始时，你可令本轮其他角色使用【桃】结算结束后，其需交给你一张牌，否则你对其造成1点伤害。③非前两轮游戏开始时，你可以失去〖令法〗并获得${get.poptip("new_rejianxiong")}。`,
		old_pot_lusu: "旧势鲁肃",
		old_pot_lusu_prefix: "旧|势",
		old_pothaoshi: "好施",
		old_pothaoshi_info: "结束阶段，你可以选择一名其他角色：直到你的下个回合开始，其可以如手牌般使用或打出你的手牌。你因此失去最后的手牌时，你将手牌摸至等同于体力上限数张。",
		old_pot_xinxianying: "旧势辛宪英",
		old_pot_xinxianying_prefix: "旧|势",
		old_potjiejie: "诫节",
		old_potjiejie_info: `每名角色的出牌阶段限一次，当前回合角色可以令你观看其手牌，然后你可以选择一种花色，若其手牌：1.包含此花色，其本回合使用此花色的牌无次数限制，然后弃置其余花色的手牌；2.不包含此花色，其获得此花色的一张牌。若其本轮以此法向你展示牌所包含的花色为唯一最多，你对其发动一次${get.poptip("old_potqingshi")}。`,
		old_potqingshi: "清识",
		old_potqingshi_info: "当你受到伤害后，你可选择一名角色，然后若你与其阵营：相同，你与其各摸一张牌；不同，你弃置你与其各一张牌。",
		old_mb_mengda: "旧手杀孟达",
		old_mb_mengda_prefix: "旧|手杀",
		old_mbjili: "积戾",
		old_mbjili_info: "一名其他角色的回合开始时，若其在你的攻击范围内，你可以从0~3中秘密选择一个本轮未选择过的数字X。若如此做，本回合结束阶段，若其本回合使用牌指定你为目标的次数：小于X，你摸4-X张牌；等于X，你交给其X张牌；大于X，你可以视为对其使用一张无距离限制的【杀】。",
		old_sb_jiangwei: "旧谋姜维",
		old_sb_jiangwei_prefix: "旧|谋",
		old_sbzhiji: "志继",
		old_sbzhiji_info: `觉醒技。准备阶段，若你的手牌数不大于体力值，你减少1点体力上限，回复1点体力并摸两张牌，获得${get.poptip("old_sbbeifa")}。`,
		old_sbbeifa: "北伐",
		old_sbbeifa_info: "蓄力技（3/9）。①出牌阶段，你可以消耗任意点蓄力值，将一张手牌当做等字数且未被记录的仅能对其他角色使用的牌使用或打出，然后记录之。②你于回合内受到伤害或〖北伐〗记录牌名数达到X时，清除所有记录，然后若X大于1，蓄力值上限-1（X为此技能提供的蓄力值上限）。③你的回合内，有转化牌被使用或打出时或有牌被弃置时，你获得对应实体牌数点蓄力值。",
		old_mb_zhangyan: "旧势张燕",
		old_mb_zhangyan_prefix: "旧|势",
		old_mbfeijing: "飞径",
		old_mbfeijing_info: "你可以将一张伤害类锦囊牌当做【杀】使用或打出。你使用【杀】指定唯一目标时，可以令你与其中间逆时针或顺时针方向上的所有角色同时展示并依次弃置一张手牌，然后你可以选择一种颜色，令弃置此颜色牌的角色成为此【杀】的额外目标，",
		old_mbxiaoge: "骁戈",
		old_mbxiaoge_info: "锁定技，你使用的【杀】：对因〖飞径〗成为此【杀】目标的角色造成伤害时，防止之，然后你回复1点体力并获得其因〖飞径〗弃置的牌；仅指定了一名角色为目标，此【杀】结算后你视为对其使用一张【决斗】。",
		old_mb_cuilingyi: "旧手杀崔令仪",
		old_mb_cuilingyi_ab: "旧手杀崔芙",
		old_mb_cuilingyi_prefix: "旧|手杀",
		old_mbcaiqiu: "裁裘",
		old_mbcaiqiu_info: "①每轮开始时，你观看牌堆顶X张牌（X为游戏人数），然后可以获得其中任意张牌。②其他角色使用牌结算结束后，若你本轮因〖裁裘〗获得过同名牌，你失去1点体力。",
		old_mbxishang: "袭裳",
		old_mbxishang_info: `锁定技，①游戏开始时，你选择本局形象并获得${get.poptip("old_mbweizhuang")}。②你不因摸牌而获得牌时，明置之。`,
		old_mbxishang_append: `<span style="font-family:yuanli">明置牌：一名角色装备区和判定区的牌都是明置牌，但是一名角色的明置牌不包括其判定区的牌`,
		faceup_tag: "明置牌",
		old_mbweizhuang: "褽装",
		old_mbweizhuang_info: `此技能效果根据你的形象发生变化：${get.poptip("old_mbweizhuang_guidianx")}${get.poptip("old_mbweizhuang_dongjiaox")}${get.poptip("old_mbweizhuang_xiugex")}。`,
		old_mbweizhuang_guidianx: "桂殿",
		old_mbweizhuang_guidianx_info: `①有明置牌的角色的结束阶段，你可令以下一个数值-1并发动${get.poptip("old_mbcaiqiu")}：1.摸牌阶段摸牌数；2.出【杀】次数；3.手牌上限；4.体力值。②每局游戏限X+1次，每X+1张牌被明置后，你令以上一项数值+1（X为游戏人数）。`,
		old_mbweizhuang_dongjiaox: "东郊",
		old_mbweizhuang_dongjiaox_info: `若你的明置牌包含类型数不小于：1，你使用基本牌数值+1；2，你使用锦囊牌指定目标后，可以获得其中一个目标一张牌；3，每回合每名角色限一次，你使用装备牌结算结束后，可以令一名有明置牌的角色摸两张牌。`,
		old_mbweizhuang_xiugex: "绣阁",
		old_mbweizhuang_xiugex_info: `①每回合每项各限一次，你可以弃置一张指定副类别的牌并视为使用一张无次数限制的对应牌，此牌结算结束后获得一张与弃置牌花色相同的牌：1.武器牌，【杀】；2.防具牌，【闪】；3.防御坐骑牌，【桃】；4.进攻坐骑牌，【酒】。②若你的明置牌包含四种花色，将此技能的“弃置”改为“展示”。`,
		old_pangxi: "旧势庞羲",
		old_pangxi_prefix: "旧|势",
		old_mbxuye: "蓄业",
		old_mbxuye_info: "当全场手牌数最少的角色受到伤害后，你可以令其摸两张牌，然后若其手牌数因此成为全场最多，你将其区域里的一张牌置于牌堆顶。",
		old_mbkuangxiang: "匡襄",
		old_mbkuangxiang_info: "出牌阶段限一次，你可以与一名手牌数不大于你的其他角色交换手牌，且直到你的下个出牌阶段开始前，你或其失去所有因此获得的手牌后，你可以执行一次〖蓄业〗的效果（不受发动次数影响）。",
		old_mb_liuhui: "旧数刘徽",
		old_mb_liuhui_prefix: "旧|数",
		old_mbgeyuan: "割圆",
		old_mbgeyuan_info: "当你使用点数为X的牌时（X为圆周率中小数点后第一位的值），你可以摸Y张牌并令X改为后移一位的值（Y为你本技能发动的次数+1)。",
		old_mbchongcha: "重差",
		old_mbchongcha_info: "①你的点数大于等于10的牌不计入手牌上限，且使用时视为满足〖割圆〗中的点数0。②出牌阶段限一次，你可以弃置一张牌，令〖割圆〗中的X改为后移一位的值。",
		old_mb_sunquan: "旧SP孙权",
		old_mb_sunquan_prefix: "旧|SP",
		old_mb_chulie: "出猎",
		old_mb_chulie_info: "游戏开始时，你为【雕弓】从黑桃、梅花、红桃、方块中选择一个花色。",
		old_mb_shehu: "射虎",
		old_mb_shehu_info: "准备阶段，你可以令一名角色装备或升级【雕弓】。出牌阶段限一次，你可以视为对一名其他角色使用X张【杀】。（X为【雕引】的升级次数）",
		old_pot_dengai: "旧势邓艾",
		old_pot_dengai_prefix: "旧|势",
		old_hefei_zhangliao: "旧骥张辽",
		old_hefei_zhangliao_prefix: "旧|骥",
		old_hefeichonglei: "冲垒",
		old_hefeichonglei_info: "锁定技，你的出牌阶段内：①你响应其他角色使用的牌后，或你使用的牌被其他角色响应后，获得其一张牌。②其他角色不处于濒死状态时，所有非【杀】手牌只能当作【闪】使用或打出。",
		old_hefeidangshi: "荡势",
		old_hefeidangshi_info: "你使用伤害牌结算结束后，你可令一名是此牌目标的其他角色选择一项：1.对你使用一张非转化，非虚拟且牌名相同的伤害牌；2.弃置X张牌（X为所有角色本轮选择此项的次数且至少为1）；3.受到你造成1点伤害。若其选择了本阶段未被执行过的选项，你摸一张牌且本阶段出【杀】次数+1。",
		old_hefeiheyuzhangliao: "合御",
		old_hefeiheyuzhangliao_info: `锁定技，①若${get.poptip({
			id: "characterx_hefei_yuejin",
			name: "骥乐进",
			type: "character",
			dialog: "characterDialog",
		})}在场且与你阵营相同，修改${get.poptip("old_hefeichonglei")}中的“非【杀】手牌”为“手牌”。②若${get.poptip({
			id: "characterx_hefei_lidian",
			name: "骥李典",
			type: "character",
			dialog: "characterDialog",
		})}在场且与你阵营相同，将${get.poptip("old_hefeidangshi")}中的X固定为3。`,

		old_shen_caopi: "旧神曹丕",
		old_shen_caopi_prefix: "旧|神",
		old_chuyuan: "储元",
		old_chuyuan_info: "一名角色受到伤害后，若你武将牌上「储」的数量小于体力上限，你可以令其摸一张牌。然后其将一张手牌置于你的武将牌上，称为「储」。",
		old_dengji: "登极",
		old_dengji_info: `觉醒技，准备阶段，若你武将牌上的「储」数不小于3，则你减1点体力上限并获得所有「储」，然后获得技能${get.poptip("old_tianxing")}和${get.poptip("new_rejianxiong")}。`,
		old_tianxing: "天行",
		old_tianxing_info: `觉醒技，准备阶段，若你武将牌上的「储」数不小于3，则你减1点体力上限并获得所有「储」，然后失去技能〖储元〗，选择获得以下技能中的一个：${get.poptip("rerende")}/${get.poptip("rezhiheng")}/${get.poptip("olluanji")}/${get.poptip("olfangquan")}。`,
		oldx_clan_xuncai: "旧族荀采",
		oldx_clan_xuncai_prefix: "旧|族",
		oldx_clanlieshi: "烈誓",
		oldx_clanlieshi_info: "出牌阶段，你可以执行其中一项：『受到1点火焰伤害并废除判定区；弃置手牌中的所有【闪】；弃置手牌中的所有【杀】』，然后你令一名其他角色选择执行另一项（不能选择无法执行的选项）。",
		oldx_clandianzhan: "点盏",
		oldx_clandianzhan_info: "锁定技，当你于每轮第一次使用一种花色的牌后，你横置此牌的唯一目标并重铸手牌中所有与此牌花色相同的牌。",
		old_clan_zhonghui: "旧族钟会",
		old_clan_zhonghui_prefix: "旧|族",
		old_clanyuzhi: "迂志",
		old_clanyuzhi_info: "锁定技。①每轮开始时，你展示一张手牌，然后摸X张牌（X为此牌牌名字数）。②每轮结束时，若你本轮使用的牌数或你上一轮因〖迂志〗摸的牌数小于你本轮因〖迂志〗摸的牌数，你失去1点体力或失去〖保族〗。",
		old_clanxieshu: "挟术",
		old_clanxieshu_info: "当你使用牌造成伤害后，或受到来自牌造成的伤害后，你可以弃置Y张牌并摸你已损失体力值张牌（Y为此牌牌名字数）。",
		old_clan_hanshao: "旧族韩韶",
		old_clan_hanshao_prefix: "旧|族",
		old_fangzhen: "放赈",
		old_fangzhen_info: "出牌阶段限一次，你可以横置一名角色，将手牌数摸至X张并交给其任意张牌，然后若本次为你第X次发动此技能，你翻面（X为其座位号）。",
		old_liuju: "留驹",
		old_liuju_info: "出牌阶段限一次，你可以与一名角色A拼点并使用拼点牌中的非基本牌。然后若你没赢或你与A相互之间的距离发生了变化，你复原武将牌或武将牌上的一个技能。",
		old_clan_hanrong: "旧族韩融",
		old_clan_hanrong_prefix: "旧|族",
		old_lianhe: "连和",
		old_lianhe_info: "出牌阶段限一次，你可以横置两名未被横置的角色并令其同时选择一项：1，令你摸一张牌；2，令你获得其一张牌并翻面。其下个出牌阶段结束时，其重复进行上述选择，直至其本次选择的选项序号总和大于X（X为其此阶段内获得牌的总数，且至多为5）。",
		old_huanjia: "缓颊",
		old_huanjia_info: "出牌阶段限一次，你可以拼点，赢的男性角色下次发动“出牌阶段限一次”的技能后复原之。",
		old_xumin: "恤民",
		old_xumin_info: "宗族技，限定技，你可以翻面，视为对任意名手牌数小于你的角色使用一张【五谷丰登】。",
		old_clan_xunshuang: "旧族荀爽",
		old_clan_xunshuang_prefix: "旧|族",
		old_clanyangji: "佯疾",
		old_clanyangji_info: "准备阶段，或你体力值变化过的回合结束时，你可以展示所有手牌，然后依次使用其中的黑色牌，直到你以此法无法使用或造成伤害。然后若以此法使用的最后一张为黑桃牌，你将之作为【乐不思蜀】置于当前回合角色的判定区。",
		old_clandandao: "耽道",
		old_clandandao_info: "锁定技，你判定后，当前回合角色本回合手牌上限+3。",
		old_clanqingli: "清励",
		old_clanqingli_info: "锁定技，每回合结束时，你将手牌摸至手牌上限（至多摸5张）。",
		old_clan_yangxiu: "旧族杨修",
		old_clan_yangxiu_prefix: "旧|族",
		old_clanjiewu: "捷悟",
		old_clanjiewu_info: "出牌阶段开始时，你可以令一名角色的手牌此阶段始终对你可见。然后你此阶段使用牌指定目标后，你可以展示「捷悟」角色一张手牌，若：两张牌花色相同，你摸一张牌，若此牌本回合以此法展示过的次数大于1，你将你与其之中手牌较多的角色一张牌置于牌堆顶（若该角色为你，则改为将你的一张牌置于牌堆顶）。",
		old_clangaoshi: "高视",
		old_clangaoshi_info: "结束阶段，你可以亮出牌堆顶X张牌（X为本回合你发动〖捷悟〗的次数），然后你可以使用其中任意张你本回合出牌阶段未使用过的牌名的牌，若你因此使用了所有亮出牌，你摸两张牌。",
		old_clan_wangmingshan: "旧族王明山",
		old_clan_wangmingshan_prefix: "旧|族",
		old_clantanque: "弹雀",
		old_clantanque_info: "每回合限一次。当你使用牌结算结束后，你可以对一名体力值为X且不为0的角色造成1点伤害（X为此牌点数与你上一张使用的牌的点数之差）。",
		old_clanshengmo: "剩墨",
		old_clanshengmo_info: "当你需要使用一张未以此法使用过的基本牌时，你可以获得一张于本回合进入弃牌堆且点数不为这些牌中最大且不为这些牌中最小的牌，视为你使用需要使用的牌。",
		old_clan_xunyu: "旧族荀彧",
		old_clan_xunyu_prefix: "旧|族",
		old_clandingan: "定安",
		old_clandingan_info: "锁定技，你使用牌后，若本回合此前有角色使用过同名牌，你与不为此牌目标的任意其他角色各摸一张牌，然后令因此摸牌的其他角色中手牌最多的角色执行一项：1.受到你造成的1点伤害；2.随机弃置手牌中最多的同名牌。",
		old_clanfuning: "抚宁",
		old_clanfuning_info: "每回合你的体力值首次变化后，可以将至少X张牌交给一名其他角色（X为你已损失体力值且至少为1），若你交出的牌：颜色均相同，你回复1点体力；数量大于本回合受到过伤害的角色数，你将手牌调整至体力上限。",
		old_clan_xunshi: "旧族荀莳",
		old_clan_xunshi_prefix: "旧|族",
		old_clanqingjue: "清绝",
		old_clanqingjue_info: "锁定技，你手牌中每个花色仅一张的牌不计入手牌上限。当你每回合体力值首次变化后，你弃置手牌中任意张花色数量不为一的牌，并执行以下等量项：1.将这些牌交给一名其他角色；2.获得手牌中未拥有花色的牌各一张。",
		old_clanxsyingxiang: "萦香",
		old_clanxsyingxiang_info: "锁定技，当其他角色获得你的牌后，将此牌称为“萦香”牌。当有角色失去“萦香”牌后，你和手牌中有“萦香”牌的角色各摸一张牌。若不因使用而失去，你发动一次〖清绝〗（每轮限一次）。",
		old_zhanghua: "旧张华",
		old_zhanghua_prefix: "旧",
		old_yuanji: "旧袁姬",
		old_yuanji_prefix: "旧",
		old_tengfanglan: "旧OL滕芳兰",
		old_tengfanglan_prefix: "旧|OL",
		old_luochong: "落宠",
		old_luochong_given: "落宠",
		old_luochong_info: "准备阶段或当你受到伤害后，你可以选择一项：1、令一名角色回复1点体力；2、令一名角色失去1点体力；3、令一名角色弃置两张牌；4、令一名角色摸两张牌并可以将这些牌分配任意名角色（每轮每项各限一次）。",
		old_aichen: "哀尘",		
		old_aichen_given: "哀尘",
		old_aichen_info: "锁定技，当你进入濒死状态时，若〖落宠〗中剩余选项数大于1，你将体力回复至一点，执行并移去其中一项。",
		old_dengzhong: "旧邓忠",
		old_dengzhong_prefix: "旧",
		old_dzkanpo: "勘破",
		old_dzkanpo_info: "出牌阶段限X次（X为你的体力值），当你使用非装备牌指定一名角色为目标后，若该角色有手牌，你可以观看其手牌并选择一项：<br>1.弃置其一张牌，然后若弃置的牌是能造成火焰伤害的牌，你摸一张牌。<br>2.重铸其手牌中的所有【杀】和【决斗】。<br>3.若其没有【闪】，你与其互相对对方造成1点伤害。",
		old_dzgengzhan: "更战",
		old_dzgengzhan_info: "①每当你受到1点伤害后，你可以令一名手牌数小于体力上限的角色摸三张牌，然后其将手牌弃至其体力上限。<br>②当你进入濒死状态时，你可以令一名其他角色观看随机五张魏势力武将牌，然后该角色可以从中选择一张并替换其原武将牌（体力上限与体力值不变）。",
		old_wangyan: "旧王衍",
		old_wangyan_prefix: "旧",
		old_cihuang: "雌黄",
		old_cihuang_info: "当有牌被抵消后，若此牌的目标数为1且此牌的使用者A为当前回合角色，则你可以视为对A使用一张你本轮内未以此法使用过的任意属性的【杀】或单目标锦囊牌（无距离限制且不可被响应）。",
		old_sanku: "三窟",
		old_sanku_info: "锁定技，当你进入濒死状态时，你减一点体力上限并将体力回复至体力上限。",
		old_ol_luyusheng: "旧陆郁生",
		old_ol_luyusheng_prefix: "旧",
		old_olcangxin: "藏心",
		old_olcangxin_info: "锁定技。①当你受到伤害时，你观看牌堆底的三张牌并弃置其中任意张牌，若你因此弃置了红桃牌，你防止此伤害。②摸牌阶段开始时，你展示牌堆底的三张牌，然后摸X张牌(X为其中红桃牌的数量)。",
		old_ol_hujinding: "旧胡金定",
		old_ol_hujinding_prefix: "旧",
		old_olchongshen: "重身",
		old_olchongshen_info: "当你获得牌时，本轮这些牌不计入手牌上限且可以当【闪】使用。",
		old_ol_feiyi: "旧费祎",
		old_ol_feiyi_prefix: "旧",
		old_hezhong: "和衷",
		old_hezhong_info: "每回合每项限一次，当你的手牌数变为1后，你可以展示此唯一手牌A并摸一张牌，然后你选择一项：①本回合使用点数大于A的点数的普通锦囊牌额外结算一次；②本回合使用点数小于A的点数的普通锦囊牌额外结算一次。",
		old_ol_pengyang: "旧彭羕",
		old_ol_pengyang_prefix: "旧",
		old_oltuishi: "侻失",
		old_oltuishi_info: "锁定技。①你不能使用【无懈可击】。②当你使用点数为字母的牌后，你摸两张牌，且你使用的下一张牌无距离和次数限制。",
		old_sp_sunce: "旧SP孙策",
		old_sp_sunce_prefix: "旧|SP",
		old_ol_yufan: "旧OL界虞翻",
		old_ol_yufan_prefix: "旧|OL界",
		old_olzongxuan: "纵玄",
		old_olzongxuan_info: "当你或你的上家因弃置而失去牌后，你可以将位于弃牌堆的这些牌中的任意牌以任意顺序置于牌堆顶。",
		old_olzhiyan: "直言",
		old_olzhiyan_info: "你或你的上家的结束阶段，你可以令一名角色正面朝上摸一张牌，然后若此牌：为装备牌，则其使用此牌并回复1点体力；不为装备牌且其体力值不小于你，则其失去1点体力。",
		old_zhugejin: "旧诸葛瑾",
		old_zhugejin_prefix: "旧",
		old_ruiji: "旧OL芮姬",
		old_ruiji_prefix: "旧|OL",
		old_qiaoli: "巧力",
		old_qiaoli_info: "出牌阶段，你可以将一张装备牌当作【决斗】使用。若此牌：为武器，此牌结算后你摸等同于其攻击范围的牌，并可以将这些牌分配给任意角色；不为武器，此【决斗】不可被响应。",
		old_qiaoli_given: "已分配",
		old_qingliang: "清靓",
		old_qingliang_info: "每回合限一次，当你成为其他角色使用的基本牌或普通锦囊牌的目标时，你可展示所有手牌，然后选择一项：⒈你与其各摸一张牌，⒉取消此目标，然后弃置你手牌中一种花色的所有牌。",
		old_xurong: "旧徐荣",
		old_xurong_prefix: "旧",
		old_xionghuo: "凶镬",
		old_xionghuo_info: "游戏开始时，你获得3个“暴戾”标记。出牌阶段，你可以交给一名其他角色一个“暴戾”标记。当你对有“暴戾”标记的其他角色造成伤害时，此伤害+1。有“暴戾”标记的其他角色的出牌阶段开始时，其移去所有“暴戾”标记并随机执行一项：1.受到1点火焰伤害且本回合不能对你使用【杀】；2.失去1点体力且本回合手牌上限-1；3.你随机获得其一张手牌和一张装备区里的牌。",
		old_shajue: "杀绝",
		old_shajue_info: "锁定技，其他角色进入濒死状态时，你获得一个“暴戾”标记。然后若其体力值小于0，你获得使其进入濒死状态的牌。",
		old_ol_qianzhao: "旧OL牵招",
		old_ol_qianzhao_prefix: "旧|OL",
		old_olkuansai: "款塞",
		old_olkuansai_info: "当一张牌指定第一个目标后，若目标数大于你的体力值，你可以令其中一个目标选择一项：1.交给你一张牌；2.令你回复1点体力。",
		old_ol_sb_dongzhuo: "旧OL谋董卓",
		old_ol_sb_dongzhuo_prefix: "旧|OL谋",
		old_olguanbian: "观变",
		old_olguanbian_info: "锁定技。①游戏开始时，你的手牌上限、其他角色计算与你的距离、你计算与其他角色的距离+X（X为游戏人数）。②第二轮游戏开始时，或当你发动〖凶逆〗或〖封赏〗后，你失去〖观变〗。",
		old_olxiongni: "凶逆",
		old_olxiongni_info: "出牌阶段开始时，你可以弃置一张牌，然后所有其他角色选择一项：1.弃置一张与此牌花色相同的牌；2.受到你的1点伤害。",
		old_olfengshang: "封赏",
		old_olfengshang_info: "出牌阶段限一次或当一名角色进入濒死状态时，你可以将两张本回合进入弃牌堆中的花色相同的牌分配给等量角色。若你未以此法获得牌，你视为使用一张不计入次数的【酒】。",
		old_olzhibin: "执柄",
		old_olzhibin_info: `主公技，锁定技。准备阶段，若其他群势力角色累计使用黑色牌的次数达到：3张，你增加1点体力上限并回复1点体力；6张，你获得${get.poptip("dcfencheng")}；9张：你获得${get.poptip("benghuai")}。`,
		old_ol_nanhualaoxian: "旧OL南华老仙",
		old_ol_nanhualaoxian_prefix: "旧|OL",
		old_olhedao: "合道",
		old_olhedao_info: `锁定技。①游戏开始时，你可至多拥有两册${get.poptip("old_olhedao_faq")}。②你的首次濒死结算后，你可至多拥有三册${get.poptip("old_olhedao_faq")}。`,
		old_olhedao_faq: "“天书”",
		old_olhedao_faq_info: "关于“天书”：<br>" + ["“天书”为随机三个时机和三个效果中各选择一个组成的技能，且时机等级越高，效果等级越高", "“天书”初始为未翻开状态，发动一次后翻开此“天书”（未翻开的“天书”技能对其他角色不可见）", "“天书”至多可发动三次，交给其他角色后至多可发动一次，“天书”次数用尽后失去此“天书”", "一名角色可至多拥有一册“天书”"].map(str => `<li>${str}`).join("<br>"),
		old_olqingshu: "青书",
		old_olqingshu_info: `锁定技，游戏开始时/准备阶段/结束阶段，你书写一册${get.poptip("old_olhedao_faq")}。`,
		old_olshoushu: "授术",
		old_olshoushu_info: `出牌阶段限一次，你可以将一册未翻开的${get.poptip("old_olhedao_faq")}交给一名其他角色。`,
		oldx_ol_sb_dengai: "废OL谋邓艾",
		oldx_ol_sb_dengai_prefix: "废|OL谋",
		oldx_olsbjiewan: "解腕",
		oldx_olsbjiewan_info: "出牌阶段限一次，你可以减1点体力上限以检索一张伤害类锦囊，然后你可令手牌中的一张伤害牌于本回合内造成的伤害+1。",
		olsbpixian: "僻险",
		olsbpixian_info: "锁定技，出牌阶段结束时，若你的体力值不为全场最高，你加1点体力上限或回复1点体力。",
		old_ol_sb_dengai: "旧OL谋邓艾",
		old_ol_sb_dengai_prefix: "旧|OL谋",
		old_olsbjigu: "积谷",
		old_olsbjigu_info: "锁定技。一名角色于其出牌阶段外使用的牌进入弃牌堆后，若“谷”的数量小于你的体力上限，你将其中的非♥牌置于你的武将牌上，称为“谷”。体力上限与你相同的角色的回合开始时，你用任意张手牌替换等量“谷”。",
		old_olsbjiewan: "解腕",
		old_olsbjiewan_info: "①每个准备阶段，你可以减少1点体力上限或移去两张“谷”，然后将一张手牌当无距离限制的【顺手牵羊】使用。②每个结束阶段，若你的手牌数与“谷”的数量相同且你的体力上限不为全场唯一最高，你增加1点体力上限。",
		old_ol_wangyi: "旧OL界王异",
		old_ol_wangyi_prefix: "旧|OL界",
		old_olzhenlie: "贞烈",
		old_olzhenlie_info: "当你成为其他角色使用的【杀】或非延时锦囊牌的目标后，你可以失去一点体力令此牌对你无效，然后选择一项：1，获得使用者的一张牌；2，发动一次【秘计】。",
		old_ol_chengpu: "旧OL界程普",
		old_ol_chengpu_prefix: "旧|OL界",
		old_olchunlao: "醇醪",
		old_olchunlao_info: "①当你或你的上下家的【杀】因弃置进入弃牌堆后，你将位于弃牌堆的这些牌称为“醇”置于武将牌上。②一名角色处于濒死状态时，你可以将一张“醇”置入弃牌堆，然后令其视为使用一张【酒】。③当一名角色失去体力后，你可以获得至多两张“醇”。",
		old_ol_xuelingyun: "旧OL薛灵芸",
		old_ol_xuelingyun_prefix: "旧|OL",
		old_olsiqi: "思泣",
		old_olsiqi_info: "你的红色牌进入弃牌堆时，将之置于牌堆底。当你受到伤害后，你可以亮出牌堆底至多五张连续的红色牌，使用其中【桃】、【无中生有】与装备牌（可指定其他角色为目标），然后你摸剩余不可使用的牌数张牌。",
		old_ol_sb_yl_luzhi: "旧OL谋卢植",
		old_ol_sb_yl_luzhi_prefix: "旧|OL谋",
		old_olsibing: "司兵",
		old_olsibing_info: "①当你使用伤害牌指定唯一目标时，你可以弃置任意张红色牌令目标弃置等量红色手牌，否则不能响应该牌；②以你为目标的伤害牌结算完成后，若未对你造成伤害，你可以弃置一张黑色牌并视为使用一张【杀】。",
		old_olliance: "敛策",
		old_olliance_info: "每回合限一次，当你的手牌数变化后，若为全场最少，你可将手牌摸至体力上限，然后本回合下一次有角色造成伤害时，此伤害+1",
		old_ol_liubiao: "旧OL界刘表",
		old_ol_liubiao_prefix: "旧|OL界",
		old_olzishou: "自守",
		old_olzishou_info: "摸牌阶段，你可以多摸X张牌，你以此法摸牌的结束阶段，若你本回合对其他角色造成过伤害，你弃置X张牌（X为全场势力数）。",
		old_olzongshi: "宗室",
		old_olzongshi_info: "锁定技。①你的手牌上限+X（X为全场势力数）。②每种势力限一次，当其他角色对你造成伤害时，你防止此伤害并令其摸一张牌。",
		old_kongshu: "旧孔淑",
		old_kongshu_prefix: "旧",
		old_ol_madai: "旧OL界马岱",
		old_ol_madai_prefix: "旧|OL界",
		old_olqianxi: "潜袭",
		old_olqianxi_info: "准备阶段，你可以摸一张牌并展示一张牌。若如此做，距离为1的其他角色本回合不能使用或打出与“潜袭”牌颜色相同的手牌，你本回合使用“潜袭”牌造成的伤害+1。",
		old_strong_caochong: "旧曹冲",
		old_strong_caochong_ab: "旧冲儿",
		old_strong_caochong_prefix: "旧",
		old_dm_sunquan: "旧魔孙权",
		old_dm_sunquan_prefix: "旧|魔",
		old_olquanyu: "权御",
		old_olquanyu_info: `锁定技，每轮开始时，你令所有角色同时选择一项其本局未选择过的“${get.poptip({
			id: "quanyu_effect",
			name: "权御",
			type: "character",
			info: "<li>白虹：伤害+1<br><li>青冥：额外指定一个目标<br><li>辟邪：无视防具<br><li>紫电：不可响应<br><li>百里：额外结算一次<br><li>流星：无次数限制",
		})}”效果，然后你摸X张牌（X为与你选择效果相同的角色数且至多为3）。你使用的指定唯一目标的【杀】附带你本轮所选的“权御”效果。`,
		old_oltianen: "天恩",
		old_oltianen_info: `锁定技，你使用牌指定唯一目标后：若本轮你与其选择的“权御”效果不同，你随机弃置其一张牌，对其发动一次${get.poptip("old_olquanyu")}；若与你相同，你从牌堆获得一张不计入手牌上限的【杀】，若其不为你，此技能本回合失效。`,
		old_olqiangang: "乾纲",
		old_olqiangang_info: `出牌阶段，你可${get.poptip("rule_rumo")}，失去〖天恩〗，然后本局你使用指定唯一目标的【杀】均执行目标所选择过的所有“权御”效果。`,
		old_ol_yangfeng: "旧OL杨奉",
		old_ol_yangfeng_prefix: "旧|OL",
		oldx_oljiawei: "假威",
		oldx_oljiawei_info: "出牌阶段限一次，你可以选择一名角色，弃置其X张牌，然后亮出牌堆顶X+1张牌，你获得其中的伤害牌并令其获得其中的非伤害牌。若如此做，本回合你使用牌无距离限制（X为你执行过的回合数且至多为你的体力上限）。",
		old_olqujia: "驱驾",
		old_olqujia_info: "锁定技，回合结束后，若你本回合未杀死角色，你选择一项：1.执行一个额外回合，若此回合内你未杀死角色，你失去此技能并摸X张牌；2.令你本局游戏使用【杀】的次数+1并获得一张【杀】（X为你执行过的回合数且至多为你的体力上限）。",
		old_ol_sb_zhangrang: "旧OL谋张让",
		old_ol_sb_zhangrang_prefix: "旧|OL谋",
		old_olsblucun: "赂存",
		old_olsblucun_info: "每回合限一次，你可以视为使用一张本轮未以此法使用过的基本牌或普通锦囊牌。此牌结算完毕后，当前回合角色将一张手牌置于你的武将牌上，称为“赂”；本回合结束时，你将一张“赂”置入弃牌堆并摸一张牌（若你本回合因此技能使用的牌名包含你选择移去的“赂”的牌名，则你额外摸一张牌）。",
		old_olsbtuisheng: "蜕生",
		old_olsbtuisheng_info: "限定技，准备阶段或当你进入濒死状态时，你可以重置你本轮〖赂存〗使用过的牌名，然后你选择一项并回复1点体力：①将所有手牌置于你的武将牌上，称为“赂”；②令当前回合角色获得你的所有“赂”且你回复1点体力。",

		old_re_caorui: "旧界曹叡",
		old_re_caorui_prefix: "旧|界",
		old_re_zhangchunhua: "旧界张春华",
		old_re_zhangchunhua_prefix: "旧|界",
		old_dc_xushu: "旧界徐庶",
		old_dc_xushu_prefix: "旧|界",
		old_rezhuhai: "诛害",
		old_rezhuhai_info: "其他角色的结束阶段，若其本回合造成过伤害，你可以视为对其使用一张【杀】或【过河拆桥】。",
		old_yuechen: "旧乐綝",
		old_yuechen_prefix: "旧",
		old_dcporui: "破锐",
		old_dcporui_info: "每轮限一次，其他角色的结束阶段，你可以弃置一张基本牌并选择另一名此回合内失去过牌的其他角色，你视为对该角色依次使用X+1张【杀】，然后你交给其X张手牌。（X为你的体力值，手牌不足X张则全给）",
		old_dcgonghu: "共护",
		old_dcgonghu_info: "锁定技，当你于回合外失去基本牌后，〖破锐〗最后增加描述“若其没有因此受到伤害，你回复1点体力”；当你于回合外造成或受到伤害后，你删除〖破锐〗中“交给”效果的描述。若以上两个效果均已触发，则你本局游戏接下来你使用红色基本牌无法响应，使用红色普通锦囊牌可以额外指定一个目标。",
		old_ruanyu: "旧阮瑀",
		old_ruanyu_prefix: "旧",
		old_miaoxian: "妙弦",
		old_miaoxian_info: "若你的手牌中仅有一张黑色牌，你可将此牌当作任意一张普通锦囊牌使用（每种牌名每回合限一次）；若你的手牌中仅有一张红色牌，你使用此牌时摸一张牌。",
		old_bailingyun: "旧柏灵筠",
		old_bailingyun_prefix: "旧",
		old_dclinghui: "灵慧",
		old_dclinghui_info: "每名角色的结束阶段，若本回合有至少两名角色受到过伤害，你可以观看的牌堆顶的三张牌：你可以使用其中一张牌，然后获得其余的牌。",
		oldx_dclinghui: "灵慧",
		oldx_dclinghui_info: "一名角色的结束阶段，若当前回合角色为你或本回合有角色进入过濒死状态，则你可以观看牌堆顶的三张牌并使用其中一张牌，然后获得剩余的牌。",
		old_dcyuxin: "御心",
		old_dcyuxin_info: "限定技，一名角色进入濒死状态时，你可以令其回复体力至1点。若以此法回复体力的是其他角色，你与其体力值互换且你摸等同于你以此法失去的体力值张牌。",
		old_dc_liuli: "旧刘理",
		old_dc_liuli_prefix: "旧",
		old_dcfuli: "抚黎",
		old_dcfuli_info: "出牌阶段，你可以展示手牌并弃置一种类别的所有手牌（每种类别每回合限一次），然后摸X张牌（X为这些牌的牌名字数和且X至多为场上手牌数最多的角色的手牌数）。若你因此弃置了伤害类卡牌，则你可以选择一名角色，令其攻击范围-1直到你的下个回合开始。",
		old_dcdehua: "德化",
		old_dcdehua_info: "锁定技。①一轮游戏开始时，若有你可以使用的非延时类伤害类牌的牌名，你选择其中一个并视为使用之，然后你不能从手牌中使用此牌名的牌，然后若你已选择过所有的伤害类牌牌名，你失去〖德化〗。②你的手牌上限+Y（Y为你〖德化①〗选择过的牌名数）。",
		old_yue_miheng: "旧乐祢衡",
		old_yue_miheng_prefix: "旧|乐",
		old_dcjigu: "激鼓",
		old_dcjigu_info: "锁定技。①游戏开始时，你将所有手牌标记为“激鼓”。②你的“激鼓”牌不计入手牌上限。③当你造成或受到伤害后，若你的“激鼓”牌数等于你的装备区牌数，则你可以摸X张牌（X为你的空置装备栏数）。",
		old_wu_zhugeliang: "旧武诸葛亮",
		old_wu_zhugeliang_prefix: "旧|武",
		old_dcqingshi: "情势",
		old_dcqingshi_info: "当你于出牌阶段使用牌时，若你手牌中有同名牌，你可以选择一项：1.令此牌对其中一个目标角色造成的伤害+1；2.令任意名其他角色各摸一张牌；3.摸X张牌，然后【情势】于本回合失效（X为你的体力值）。",
		old_dczhizhe: "智哲",
		old_dczhizhe_clear: "invisible",
		old_dczhizhe_info: "限定技。出牌阶段，你可以选择一张手牌并复制之。该复制牌不计入你的手牌上限，且当你使用或打出此牌结算结束后，你获得之，然后你本回合不能再使用或打出此牌。",
		old_wu_guanyu: "旧武关羽",
		old_wu_guanyu_prefix: "旧|武",
		old_dcjuewu: "绝武",
		old_dcjuewu_info: "①你可以将一张点数为2的牌当任意伤害类牌使用（包括【水淹七军】）。②当你得到其他角色区域内的牌后，你令这些牌的点数均视为2直到你失去这些牌。",
		old_dcwuyou: "灵显",
		old_dcwuyou_info: "其他角色的出牌阶段限一次，其可以交给你一张手牌，然后你可以声明一个非装备牌的牌名（包括【水淹七军】）并交给其一张手牌，令此牌的牌名与属性视为与你选择的相同。",
		old_dcyixian: "义贤",
		old_dcyixian_info: "限定技。出牌阶段，你可以获得场上和其他角色手牌中的所有武器和防具牌。然后你依次选择是否令被你以此法获得牌的角色摸X张牌或回复1点体力（X为其以此法失去的牌数）。",
		old_wu_huangfusong: "旧武皇甫嵩",
		old_wu_huangfusong_prefix: "旧|武",
		old_dcchaozhen: "朝镇",
		old_dcchaozhen_info: "准备阶段或当你进入濒死状态时，你可以获得牌堆里或场上点数最小的牌，若此牌点数为A，你回复1点体力并令〖朝镇〗本回合失效。",
		old_dclianjie: "连捷",
		old_dclianjie_info: "你使用手牌指定目标后，若此牌点数不大于你的所有手牌，你可令一名角色将其一张点数最小的手牌置于牌堆底，然后你将手牌摸至体力上限，以此法获得的牌本回合无距离次数限制（每个点数每回合限摸一次，无点数视为0）。",
		old_dcjiangxian: "将贤",
		old_dcjiangxian_info: "限定技，出牌阶段，你可以获得以下效果直到本回合结束：当你使用因〖连捷〗获得的牌造成伤害时，此伤害+X（X为你本回合造成伤害的次数且至多为5）。若如此做，本回合结束后你失去〖连捷〗或〖朝镇〗。",
		old_dc_shen_huatuo: "旧神华佗",
		old_dc_shen_huatuo_prefix: "旧|神",
		old_jingyu: "静域",
		old_jingyu_info: "锁定技。每个技能每回合限一次，当一名角色发动不为〖静域〗的技能时，你摸一张牌。",
		old_xunyuxunyou: "旧荀彧荀攸",
		old_xunyuxunyou_prefix: "旧",
		old_zhinang: "智囊",
		old_zhinang_info: "当你使用锦囊牌后，你可以获得一个技能台词包含“谋”的技能；当你使用装备牌后，你可以获得一个技能名包含“谋”的技能。",
		old_gouzhu: "苟渚",
		old_gouzhu_info: "你发动技能后，若此技能为：锁定技，回复1点体力；觉醒技，获得一张基本牌；限定技，对随机一名其他角色造成1点伤害；转换技，手牌上限+1；主公技，增加1点体力上限。",
		old_zhugejing: "旧诸葛京",
		old_zhugejing_prefix: "旧",
		old_dcpijian: "辟剑",
		old_dcpijian_info: "锁定技，结束阶段，若你的“研作”牌数不小于存活人数，你可以弃置这些牌，对一名角色造成2点伤害。",
		old_xin_zhonghui: "旧界钟会",
		old_xin_zhonghui_prefix: "旧|界",
		old_xinquanji: "权计",
		old_xinquanji_info: "①当你受到1点伤害后，或其他角色不因你的赠予而得到你的牌后，你可以摸一张牌，然后将一张手牌置于武将牌上，称为“权”。②你的手牌上限+X（X为“权”的数量）。",
		old_xinzili: "自立",
		old_xinzili_info: `觉醒技。准备阶段，若你的“权”数大于2，则你回复1点体力并摸两张牌，减1点体力上限并获得${get.poptip("old_xinpaiyi")}。`,
		old_xinpaiyi: "排异",
		old_xinpaiyi_backup: "排异",
		old_xinpaiyi_info: "出牌阶段每项各限一次，你可移去一张“权”并选择一项：①令一名角色摸X张牌。②对至多X名角色各造成1点伤害。（X为“权”数）",
		old_yj_majun: "旧马钧",
		old_yj_majun_prefix: "旧",
		old_jingyi: "精益",
		old_jingyi_info: "锁定技。当有实体牌进入你的装备区后，你摸X张牌，然后弃置两张牌（X为你装备区内实体牌的数量）。",
		old_star_fazheng: "旧星法正",
		old_star_fazheng_prefix: "旧|星",
		old_staranji: "谙计",
		old_staranji_info: "锁定技，一名角色使用牌时，若此花色的牌本轮游戏使用的最少，则你摸一张牌。",
		old_star_dingfeng: "旧星丁奉",
		old_star_dingfeng_prefix: "旧|星",
		old_stardangchen: "荡尘",
		old_stardangchen_info: "出牌阶段开始时，你可以令一名角色交给你任意张牌，然后你本回合使用基本牌或普通锦囊牌时，可以进行一次判定，若判定的点数为其他角色此次其交给你牌的数量的倍数，则此牌额外结算一次。",
		old_pangfengyi: "旧庞凤衣",
		old_pangfengyi_prefix: "旧",
		old_dcyitong: "异瞳",
		old_dcyitong_info: "锁定技。①游戏开始时，你记录一个花色。②每回合〖异瞳〗记录花色的牌首次进入弃牌堆后，你从牌堆或弃牌堆获得与此花色不同的牌各一张。",
		old_dcpeiniang: "醅酿",
		old_dcpeiniang_info: "①你可以将〖异瞳〗记录花色的牌当作【酒】使用（无任何次数限制）。②其他角色处于濒死状态时，你可以对其使用【酒】（回复效果）。③因你使用【酒】执行的体力回复效果至少令目标角色将体力值回复至1点。",
		old_dc_sp_zhurong: "旧SP祝融",
		old_dc_sp_zhurong_prefix: "旧|SP",
		old_dcremanhou: "蛮后",
		old_dcremanhou_info: "出牌阶段限一次，你可以摸至多四张牌并根据摸牌数依次执行以下等量项：①失去〖探乱〗；②弃置一张手牌；③失去1点体力，获得一名其他角色的一张手牌；④弃置场上的一张牌，获得〖探乱〗。",
		old_dcretanluan: "探乱",
		old_dcretanluan_info: "出牌阶段限一次，你可以使用本回合弃牌堆中因弃置进入弃牌堆的一张牌，若你因此造成伤害，则你重置〖蛮后〗。",
		old_v_sunquan: "旧威孙权",
		old_v_sunquan_prefix: "旧|威",
		old_dcwoheng: "斡衡",
		old_dcwoheng_info: "出牌阶段或当你受到伤害后，你可令一名角色摸或弃置X张牌，选择其他角色结算后其手牌数与你不同或选择自己时，此技能失效至本回合结束(X为此技能本轮发动的次数)。",
		old_dcjizheng: "集征",
		old_dcjizheng_info: "威主技，其他吴势力角色出牌阶段限一次，其可交给你一张牌，则其本回合使用牌无距离限制。其他角色出牌阶段限一次，其可交给你一张牌，则其本回合使用的下张牌无距离限制。",
		old_liujinliupei: "旧刘衿刘佩",
		old_liujinliupei_prefix: "旧",
		old_dcllqixin: "契心",
		old_dcllqixin_info: "当你不因本技能使用基本牌时/摸两张牌后，你可以摸两张牌/使用一张基本牌。",
		old_dc_sb_xunyu: "旧新杀谋荀彧",
		old_dc_sb_xunyu_prefix: "旧|新杀谋",
		old_dcsbshimou: "势谋",
		old_dcsbshimou_info: "转换技，游戏开始可自选阴阳状态，出牌阶段限一次，你可令一名{阳：手牌数全场最低的角色；阴：手牌数全场最高的角色}将手牌调整至体力上限（至多摸五张）并视为使用一张仅指定单目标的普通锦囊牌（此牌牌名与目标由你指定）。若以此法摸牌，此牌可额外增加一个目标；若以此法弃牌，此牌额外结算一次。",
		old_dc_xiahouxuan: "旧新杀夏侯玄",
		old_dc_xiahouxuan_prefix: "旧|新杀",
		old_dcyizheng: "议政",
		old_dcyizheng_info: "你的回合开始和结束时，你可与任意名其他角色各展示一张手牌，若展示的牌类型均相同，你可将这些牌交给一名角色，否则，你弃置这些牌。",
		old_dcguilin: "归林",
		old_dcguilin_info: `限定技，出牌阶段或你进入濒死状态时，你可以将体力回复至体力上限，然后失去${get.poptip("old_dcyizheng")}并修改${get.poptip("dcboxuan")}。`,
		old_dc_zhugejun: "旧新杀诸葛均",
		old_dc_zhugejun_prefix: "旧|新杀",
		old_dcgumai: "孤脉",
		old_dcgumai_info: "每回合限一次，你造成或受到伤害时，若你有手牌，你可以展示所有手牌并令此伤害+1/-1。若展示的牌花色均相同，你可以弃置一张手牌令此技能视为未发动过。",
		old_dc_tengfanglan: "旧滕芳兰",
		old_dc_tengfanglan_prefix: "旧",
		old_dcaichen: "哀尘",
		old_dcaichen_info: "锁定技。若牌堆剩余数：大于80，当你每次发动〖落宠〗弃置你区域内的牌后，你摸两张牌；大于40，你跳过弃牌阶段；小于40，你不能响应♠牌。",
		old_dc_sb_dengai: "旧新杀谋邓艾",
		old_dc_sb_dengai_prefix: "旧|新杀谋",
		old_dcsbzhouxi: "骤袭",
		old_dcsbzhouxi_info: "出牌阶段限一次，你弃置所有当前无法指定其他角色为目标的手牌，并根据弃牌数依次选择等量项：1.本回合计算与其他角色距离-X；2.视为对至多X名角色使用【顺手牵羊】；3.视为对至多X名角色使用【杀】。若你执行了所有选项，此技能视为未发动过（X未此项被选择的次序）。",
		old_dcsbshijin: "恃矜",
		old_dcsbshijin_info: "限定技，出牌阶段，若你本回合造成过伤害，你可以获得每种类型的牌各一张，且直到你的下个回合开始前，你受到伤害时防止之并摸一张牌。你的下个回合开始时，弃置所有【杀】和锦囊牌并失去等量体力，若你未因此失去体力，此技能视为未发动过。",
		old_renwan: "旧任婉",
		old_renwan_prefix: "旧",
		old_dcjuanji: "狷急",
		old_dcjuanji_info: "摸牌阶段开始时，你可以摸体力上限张牌；出牌阶段开始时，你可以失去1点体力，然后视为对一名角色使用一张【杀】；弃牌阶段开始时，你可以调整手牌至手牌上限，然后弃置一名角色区域里至多两张牌。",
		old_dcrenshuang: "纫霜",
		old_dcrenshuang_info: "锁定技，①你每轮首次进入濒死时，回复体力至1点并增加1点体力上限（至多以此法增加3点）。②你脱离濒死时，复原武将牌并视为使用一张普通锦囊牌。",
		old_lukai: "旧陆凯",
		old_lukai_prefix: "旧",
		old_bushi: "卜筮",
		old_bushi_info: "①你使用♠牌无次数限制；当你使用或打出♥牌后，你摸两张牌；结束阶段，或当你成为♣牌的目标后，你从牌堆或弃牌堆获得一张♦牌。②准备阶段，你可调整此技能中四种花色的对应顺序。",
		old_zhongzhuang: "忠壮",
		old_zhongzhuang_info: "锁定技，当你造成伤害时，若你的攻击范围：小于3，你令此伤害+1；大于3，你将此伤害值改为1",
		oldx_zhangqiying: "旧张琪瑛",
		oldx_zhangqiying_prefix: "旧",
		old_falu: "法箓",
		old_falu_info: "锁定技，游戏开始时，你获得「紫薇」「后土」「玉清」「勾陈」标记各一个。当你的牌因弃置而进入弃牌堆后，根据这些牌的花色，你获得对应的标记：黑桃，你获得1枚「紫薇」；梅花，你获得1枚「后土」；红桃，你获得1枚「玉清」；方块，你获得1枚「勾陈」。（每种标记限拥有1个）",
		old_dianhua: "点化",
		old_dianhua_info: "准备阶段或结束阶段，你可以观看牌堆顶的X张牌（X为你的「紫薇」「后土」「玉清」「勾陈」标记数的总和）。若如此做，你将这些牌以任意顺序放回牌堆顶或牌堆底。",
		old_zhenyi: "真仪",
		old_zhenyi_info: "你可以在以下时机弃置相应的标记来发动以下效果：一名角色的判定牌生效前，你可以弃置一枚「紫薇」，然后将判定结果改为任意花色且点数为5；你的回合外，你可以弃置一枚「后土」，然后将你的一张手牌当【桃】使用；当你造成伤害时，你可以弃置一枚「玉清」，然后令此伤害+1；当你受到伤害后，你可以弃置一张「勾陈」，然后你从牌堆中随机获得三种类型的牌各一张。",
		old_zhenyi_spade: "真仪",
		old_zhenyi_spade_info: "",
		old_zhenyi_club: "真仪",
		old_zhenyi_club_info: "",
		old_zhenyi_heart: "真仪",
		old_zhenyi_heart_info: "",
		old_v_machao: "旧威马超",
		old_v_machao_prefix: "旧|威",
		old_dczhongtao: "众讨",
		old_dczhongtao_info: "①出牌阶段限一次，你可以选择至多X+2种花色（X为你已损失的体力值），然后随机获得场上、弃牌堆或牌堆中你选择花色的各一张牌。②当你于回合内使用三种类别的牌后，此技能视为未发动过。",
		old_wufu: "旧伍孚",
		old_wufu_prefix: "旧",
		old_dc_sb_hulie: "旧新杀谋胡烈",
		old_dc_sb_hulie_prefix: "旧|新杀谋",
		old_dcsbchuanyu: "传舆",
		old_dcsbchuanyu_tag: "舆",
		old_dcsbchuanyu_info: "①每轮开始时，你可摸一张牌然后交给一名角色一张牌，称为「舆」。②每当「舆」因使用进入弃牌堆时，你可将其交给本轮未获得过「舆」的一名角色。③每轮结束时，你可令本轮所有获得过「舆」的角色依次视为对你指定的一名角色使用【杀】(不限距离），然后弃置所有「舆」。",
		old_dcsbyitou: "倚投",
		old_dcsbyitou_info: "其他角色的出牌阶段开始时，若其手牌数为全场最多，你可将所有手牌交给该角色，直到你的下回合开始，该角色造成伤害后，你摸一张牌。",
		old_chengui: "旧陈珪",
		old_chengui_prefix: "旧",
		old_yingtu: "营图",
		old_yingtu_info: "①当你的上家于摸牌阶段外获得牌后，你可以获得其等量的牌，然后将等量的牌交给你的下家。②当你的下家使用【杀】或【决斗】指定第一个目标时，若目标角色不包含你和你的上家，则你可以取消此牌的所有目标，然后将此牌目标改为你的上家。",
		old_congshi: "从势",
		old_congshi_info: "锁定技。①体力值最大的角色对你的上家和下家使用牌无距离限制。②有角色使用因〖从势①〗增加距离的牌对你的上家或下家造成伤害后，你回复1点体力。",
		old_dc_sb_luxun: "旧新杀谋陆逊",
		old_dc_sb_luxun_prefix: "旧|新杀谋",
		old_dcsbjunmou: "隽谋",
		old_dcsbjunmou_info: "转换技。①游戏开始时，你可以转换此技能状态；②一张牌结算结束后，若此牌的目标包括你，你可以摸一张牌并选择一张手牌，阳：此牌视为无次数限制的火【杀】；阴：重铸此牌并横置一名角色。",
		old_dcsbzhanyan: "绽炎",
		old_dcsbzhanyan_info: "限定技，出牌阶段，你可选择任意名横置的其他角色并摸等量张牌，然后这些角色同时展示一张手牌，你可弃置相同花色牌并对展示对应花色的角色各造成1点火焰伤害，若这些角色均受到伤害则重复此流程， 且此技能结算期间你每失去一张牌则摸一张牌。",
		old_v_sunce: "旧威孙策",
		old_v_sunce_prefix: "旧|威",
		old_dczhifeng: "猘锋",
		old_dczhifeng_info: "每回合限X次（X为游戏人数）。当你的手牌数：大于体力值时，你可将至少两张黑色牌当作不计入次数的【酒】使用；小于体力值时，你可将一张红色牌当作【杀】或【闪】使用或打出，然后将手牌摸至体力上限；等于体力值时，你可将任意张牌当作【决斗】使用。",
		old_dcweijing: "威靖",
		old_dcweijing_info: "其他吴势力角色的回合开始时，你可令其执行一项：1.受到你造成的1点伤害；2.交给你一张牌，然后其可发动一次对应条件的〖猘锋〗。",
		old_dc_shen_sunquan: "旧新杀神孙权",
		old_dc_shen_sunquan_prefix: "旧|新杀|神",
		old_dccangming: "沧溟",
		old_dccangming_info: "锁定技，分发初始手牌后，你令所有角色将手牌置于武将牌上，称为“溟”。有牌进入“溟”时，每包含一个类别，你摸一张牌。一名角色受到伤害后或回合开始时，获得其武将牌上的所有“溟”。",
		old_dcchouxi: "筹汐",
		old_dcchouxi_info: "出牌阶段，你可将一张牌当作“溟”中的一张基本牌或普通锦囊牌使用（每种牌名每回合限一次），以此法使用牌无距离次数限制。",
		old_dcjichao: "激潮",
		old_dcjichao_info: "出牌阶段限一次，你可选择一项：1.令一名其他角色将随机一半数量的手牌（向上取整）和装备区的牌置于武将牌上，称为“溟”；2.令所有其他角色将所有牌置于武将牌上，称为“溟”，然后此选项失效直到你累计造成3点伤害。",
		old_hansong: "旧韩嵩",
		old_hansong_prefix: "旧",
		old_dcshuaiyan: "率言",
		old_dcshuaiyan_info: "锁定技，其他角色手牌数变化后，若与你相等，你弃置其一张牌或摸一张牌。",
		old_liuyijun: "旧刘懿君",
		old_liuyijun_prefix: "旧",
		old_dcfuji: "缚己",
		old_dcfuji_info: "你的回合结束时，可令一名其他角色观看你的手牌。若如此做，其使用牌指定你为目标时，你可交给其这些牌中的任意张牌并令此牌无效；你的下个回合开始时，若这些牌仍在你手牌中，其获得这些牌并回复1点体力。",
		old_dc_sb_xuyou: "旧新杀谋许攸",
		old_dc_sb_xuyou_prefix: "旧|新杀谋",
		old_dcsbmoyou: "谟猷",
		old_dcsbmoyou_info: "你每使用两张手牌结算后，可以摸四张牌，并选择一种花色弃置手牌中所有此花色的牌，若你手牌未含有所有类型，本回合下次使用基本牌无次数与距离限制，使用锦囊牌不可响应。",

		old_tw_huojun: "旧TW霍峻",
		old_tw_huojun_prefix: "旧|TW",
		old_twjieyu: "竭御",
		old_twjieyu_info: "结束阶段开始时，或当你于一轮内第一次受到伤害后，你可以弃置所有手牌，然后从弃牌堆中获得不同牌名的基本牌各一张。",
		old_tw_guohuai: "旧TW界郭淮",
		old_tw_guohuai_prefix: "旧|TW|界",
		old_twjingce: "精策",
		old_twjingce_info: "当你于出牌阶段使用第X张牌时，你可以摸X张牌（X为你的体力值）。若此阶段你此前摸过牌或本回合造成过伤害，你获得一枚“策”标记。",
		old_yuzhang: "御嶂",
		old_yuzhang_info: "你可以弃置一枚“策”标记，然后跳过一个阶段。当你受到伤害后，你可弃置一枚“策”标记，然后选择一项：⒈令伤害来源弃置X张牌（X为其体力值）；⒉令伤害来源本回合不能再使用或打出牌。",
		oldx_quancong: "旧全琮",
		oldx_quancong_prefix: "旧",
		old_zhenshan: "振赡",
		old_zhenshan_info: "当你需要使用或打出一张基本牌时，你可以与一名手牌数少于你的角色交换手牌，视为使用或打出此牌。",
		old_tw_baoxin: "牢鲍信",
		old_tw_baoxin_prefix: "牢",
		old_twmutao: "募讨",
		old_twmutao_info: "出牌阶段限一次。你可以选择一名角色，令其将手牌中所有的【杀】依次交给其下家开始的每一名角色。然后其对最后一名以此法获得【杀】的角色A造成X点伤害（X为A手牌中【杀】的数量且至多为3）。",
		old_twyimou: "毅谋",
		old_twyimou_info: `当与你距离1以内的一名角色受到伤害后，你可以选择一项：1.令其从牌堆中获得一张【杀】；2.令其将一张手牌交给另一名角色并摸两张牌；3.${get.poptip("rule_beishui")}：将所有手牌交给其，然后依次执行上述所有选项。`,
		old_tw_zhangmancheng: "旧TW张曼成",
		old_tw_zhangmancheng_prefix: "旧|TW",
		old_twbudao: "布道",
		old_twbudao_info: "限定技。准备阶段，你可减1点体力上限，回复1点体力并从【咒护】【丰祈】【阻祸】中选择一个技能获得。然后你可以令一名其他角色也获得此技能并交给你一张牌。",
		old_tw_guanqiujian: "旧TW毌丘俭",
		old_tw_guanqiujian_prefix: "旧|TW",
		old_tw_niufudongxie: "旧牛辅董翓",
		old_tw_niufudongxie_prefix: "旧",
		old_twjuntun: "军屯",
		old_twjuntun_info: "①游戏开始时或当其他角色濒死状态结算完成后，你可令一名角色获得【凶军】。②当其他角色造成伤害后，若其拥有【凶军】，你获得等同于此次伤害值的暴虐值。",
		old_twxiongxi: "凶袭",
		old_twxiongxi_info: "每回合每名角色限一次，出牌阶段，你可以弃置X张牌对一名其他角色造成1点伤害（X为你的暴虐值与暴虐值上限之差）。",
		old_twxiongjun: "凶军",
		old_twxiongjun_info: "锁定技，当你造成伤害后，所有拥有【凶军】的角色摸一张牌。",
		old_xia_zhaoe: "旧赵娥",
		old_xia_zhaoe_prefix: "旧",
		old_twyanshi: "言誓",
		old_twyanshi_info: "①游戏开始时，你选择一名其他角色，称为“言誓”角色。②当你或“言誓”角色受到二者之外角色造成的伤害后，伤害来源获得1枚“誓”标记。③你对有“誓”的角色使用牌无距离限制。④当你对有“誓”的角色造成伤害时，此伤害+1，且当你对这些角色造成伤害后，你摸等同于伤害值的牌并移去其所有“誓”。",
		old_twrenchou: "刃仇",
		old_twrenchou_info: "锁定技。当你或“言誓”角色死亡时，若二者中的另一名角色A存活，A对杀死你或其的角色造成X点伤害（X为A的体力值）。",
		old_xia_guanyu: "旧侠关羽",
		old_xia_guanyu_prefix: "旧|侠",
		old_twzhongyi: "忠义",
		old_twzhongyi_info: `锁定技。①你使用【杀】无距离限制。②当你使用【杀】结算完毕后，你选择一项：⒈摸X张牌；⒉回复X点体力；⒊${get.poptip("rule_beishui")}：失去Y点体力，依次执行以上两项（X为此牌造成的伤害值，Y为你本局游戏此前选择此项的次数+1）。`,
		old_twchue: "除恶",
		old_twchue_info: "①当你使用【杀】指定唯一目标时，若场上存在可成为此【杀】目标的非目标角色，则你可以失去1点体力，为此牌额外指定Z个目标。②当你受到伤害或失去体力后，你摸一张牌并获得1个“勇”标记。③回合结束时，若你的“勇”标记数大于等于Z，则你可以失去Z个“勇”标记，视为使用一张伤害+1且可以额外指定Z个目标的【杀】。（Z为你的体力值）",
		old_huan_zhugeliang: "旧幻诸葛亮",
		old_huan_zhugeliang_prefix: "旧|幻",
		old_twhunyou: "魂游",
		old_twhunyou_info: "限定技，当你处于濒死状态时，你可以将体力值回复至1点，若如此做，本回合当你受到伤害时或失去体力时，取消之；当前回合结束后，你入幻：摸X张牌并进行一个额外的回合（X为〖北定〗记录牌名数，且至多为7）。",
		old_twchanggui: "怅归",
		old_twchanggui_info: "锁定技，结束阶段，若你的体力值为全场最低且不等于体力上限，你须退幻：将体力上限调整为当前体力值。",
		old_huan_caoang: "旧幻曹昂",
		old_huan_caoang_prefix: "旧|幻",
		old_twchihui: "炽灰",
		old_twchihui_info: "其他角色的回合开始时，你可废除一个装备栏并选择一项:1.弃置其区域内的一张牌；2.將牌堆中的一张与此次废除的装备栏相同副类别的装备牌置入其装备区。若如此做，你失去1点体力，然后摸X张牌（X为你已损失的体力值）。",
		old_twfuxi: "赴曦",
		old_twfuxi_info: `${get.poptip("rule_chihengji")}。当你进入濒死状态时或装备栏均废除后，你可选择依次执行一至两项:1.当前回合结束时，你执行一个额外的回合；2. 保留〖炽灰〗直到下次退幻；3.将手牌数摸至体力上限（至多摸至五张）；4.若你的装备栏均废除，恢复所有装备栏。然后你入幻：将体力值回复至体力上限。`,
		old_twhuangzhu: "煌烛",
		old_twhuangzhu_info: "准备阶段，你可选择一个废除的装备栏， 从牌堆或弃牌堆中随机获得一张对应副类别的装备牌，并记录其牌名。出牌阶段开始时，你可选择或变更至多两个已记录且与已废除的装备栏相同副类别的装备牌牌名（每种副类别限一个）。你视为拥有选择的牌名的效果直到此装备栏恢复。",
		old_twliyuan: "离渊",
		old_twliyuan_info: "你可将一张与你已废除的装备栏对应副类别的装备牌当【杀】使用或打出（无距离和次数限制），然后你摸两张牌。",
		old_twjifa: "冀筏",
		old_twjifa_info: "锁定技，当你进入濒死状态时，你减X点体力上限（X为你上次发动〖赴曦〗选择的项数），保留〖煌烛〗或〖离渊〗直到下次入幻， 然后退幻：将体力值回复至体力上限。",
		old_huan_weiyan: "旧幻魏延",
		old_huan_weiyan_prefix: "旧|幻",
		old_twpiankuang: "偏狂",
		old_twpiankuang_info: "锁定技，你使用的牌造成的伤害+Y（Y为你本回合使用过的且造成过伤害的相同牌名的牌的数量，且至多为3）。",
		old_huan_zhugeguo: "旧幻诸葛果",
		old_huan_zhugeguo_prefix: "旧|幻",
		old_rexianyuan: "仙援",
		old_rexianyuan_info: "①一轮游戏开始时，你获得4枚“仙援”标记（一名角色至多拥有4枚“仙援”标记）。②出牌阶段，你可以将“仙援”标记分配给其他角色。③拥有“仙援”标记的角色的出牌阶段开始时，你选择一项：⒈观看其手牌，将其中至多X张牌置于牌堆顶；⒉令其摸X张牌（X为其拥有的“仙援”标记数）。然后若当前回合角色不为你，则移去其所有“仙援”标记。",
		old_tw_shen_lvmeng: "旧TW神吕蒙",
		old_tw_shen_lvmeng_prefix: "旧|TW|神",
		old_twshelie: "涉猎",
		old_twshelie_info: "①摸牌阶段，你可放弃摸牌并亮出牌堆顶的五张牌，然后选择获得其中每种花色的牌各一张。②每轮限一次。结束阶段，若你本回合使用的花色数不小于你的体力值，你执行一个额外的摸牌阶段或出牌阶段。",
		old_twgongxin: "攻心",
		old_twgongxin2: "攻心",
		old_twgongxin_info: "出牌阶段限一次。你可以观看一名其他角色的手牌，然后你可以展示其中一张牌并选择一项：1.弃置此牌；2.将此牌置于牌堆顶。若该角色手牌中的花色数因此减少，你选择一种颜色，其于本回合不能使用或打出该颜色的牌。",
		old_tw_gexuan: "旧TW葛玄",
		old_tw_gexuan_prefix: "旧|TW",
		old_twdanfa: "丹法",
		old_twdanfa_info: "当你使用或打出的牌结算结束后，若此牌花色与你拥有的「丹」均不相同，你可以将此牌置于你的武将牌上，称为「丹」，然后摸一张牌。",
		old_twlingbao: "灵宝",
		old_twlingbao_info: "出牌阶段，你可以弃置两张花色不同的「丹」并摸两张牌，然后根据其情况执行如下效果：均为红色，你令一名角色从牌堆中获得两张基本牌；均为黑色，你弃置一名角色至多两个不同区域的共计至多两张牌；颜色不同，你令一名角色摸两张牌，另一名角色弃一张牌。然后若你于本回合弃置过两张相同花色的「丹」，则此技能失效直到回合结束。",
		old_twsidao: "司道",
		old_twsidao_info: "游戏开始时，你选择一张“法宝”置入装备区。准备阶段，若你以此法选择的法宝在牌堆/弃牌堆中，则你使用之。",
		old_jsrg_huangfusong: "旧TW起皇甫嵩",
		old_jsrg_huangfusong_prefix: "旧|TW|起",
		old_twjuxia: "居下",
		old_twjuxia_info: "①每回合限一次，其他角色使用牌指定你为目标后，若其技能数多于你，则你可以令此牌对你无效，然后你摸两张牌。②准备阶段，若你没有〖观火〗，则你可以获得之。",
		old_yinfuren: "旧尹夫人",
		old_yinfuren_prefix: "旧",
		old_dcyingyu: "媵予",
		old_dcyingyu_info: "准备阶段开始时，你可以展示两名角色的各一张手牌。若这两张牌的花色不同，则你可以令一名角色获得另一名角色的展示牌。",
		old_dcyongbi: "拥嬖",
		old_dcyongbi_info: "限定技。出牌阶段，你可以将所有手牌交给一名其他男性角色。你将〖媵予〗的发动时机改为“准备阶段和结束阶段开始时”。然后若这些牌中包含的花色数：大于1，则你与其本局游戏的手牌上限+2；大于2，则当你或其于本局游戏内受到大于1的伤害时，此伤害-2。",
		old_tw_jiangji: "旧TW蒋济",
		old_tw_jiangji_prefix: "旧|TW",
		old_twjilun: "机论",
		old_twjilun_info: "当你受到伤害后，你可以摸X张牌（X为【急筹】已记录牌名的数量且X至少为1），或视为使用一张〖急筹①〗记录过且未被〖机论〗记录过的普通锦囊牌并记录此牌。",
		old_tw_zhangzhao: "旧张昭",
		old_tw_zhangzhao_prefix: "旧",
		old_twlijian: "力谏",
		old_twlijian_info: `昂扬技。其他角色的弃牌阶段结束时，你可以令其获得任意本阶段进入弃牌堆的牌（可不选），然后你获得其余的牌，若其得到的牌数大于你，你可以对其造成1点伤害。<br>${get.poptip("rule_jiang")}：八张牌进入弃牌堆。`,
		old_twchungang: "纯刚",
		old_twchungang_info: "锁定技。一名其他角色于摸牌阶段外得到超过一张牌时，你令其弃置一张牌。",
		old_tw_zhanghong: "旧张纮",
		old_tw_zhanghong_prefix: "旧",
		old_twquanqian: "劝迁",
		old_twquanqian_info: `昂扬技。出牌阶段限一次，你可以将至多四张花色各不相同的手牌交给一名其他角色，然后若你交出的牌数大于1，则你从牌堆中获得一张装备牌，然后选择一项：①将手牌数摸至与其相同；②观看其手牌并获得其一种花色的所有牌。<br>${get.poptip("rule_jiang")}：你弃置六张手牌。`,
		old_twrouke: "柔克",
		old_twrouke_info: "锁定技。当你于摸牌阶段外得到超过一张牌时，你摸一张牌。",
		old_tw_huangfusong: "旧TW皇甫嵩",
		old_tw_huangfusong_prefix: "旧|TW",
		old_twtaoluan: "讨乱",
		old_twtaoluan_info: "每回合限一次，当一名角色的判定结果确认时，你可以弃置一张与判定结果颜色相同的牌，然后终止导致此判定发生的上级事件并获得判定牌。",
		old_twshiji: "势击",
		old_twshiji_info: "准备阶段或当你受到伤害后，你从牌堆或弃牌堆中获得两张颜色不同的牌，然后你可以弃置一张牌，与弃置牌颜色相同的牌于本回合内被展示后，你摸一张牌。你使用【火攻】造成伤害后，可以获得对方【火攻】展示的牌。",
		old_twzhengjun: "整军",
		old_twzhengjun_info: "当你不因使用或打出失去手牌后，你可以选择一项：1.从牌堆或弃牌堆中获得一张【火攻】；2.将手牌补至体力上限。当你一回合内因此技能获得的牌数不小于3时，此技能本回合失效。",

		old_gaowang: "旧高望",
		old_gaowang_prefix: "旧",
		diy_zhujun: "蛇朱儁",
		diy_zhujun_prefix: "蛇",
		diy_juxiang: "拒降",
		diy_juxiang_info: "锁定技，一名其他角色脱离濒死状态时，你可以对其造成1点伤害。",
		diy_liaohua: "蛇廖化",
		diy_liaohua_prefix: "蛇",
		diy_fuli: "伏枥",
		diy_fuli_info: "锁定技，当你处于濒死状态时，你可以将体力回复到X点，然后若你的体力值为场上唯一最高，你翻面。（X为场上势力数）",
		diy_zhangfei: "蛇张飞",
		diy_zhangfei_prefix: "蛇",
		diy_paoxiao: "咆哮",
		diy_paoxiao_info: "锁定技，你使用【杀】无次数限制；若你使用的【杀】被抵消，本回合你下一次使用【杀】造成的伤害+1。",
		diy_tishen: "替身",
		diy_tishen_info: "锁定技，回合开始时，你可以将体力回复至体力上限，然后摸X张牌（X为你回复的体力值）。",

		//十常侍
		lm_scs: "十常侍单体",
		lm_shichangshi: "真十常侍",
		lm_shichangshi_prefix: "真",
		lm_zhangrang: "张让",
		lm_zhaozhong: "赵忠",
		lm_sunzhang: "孙璋",
		lm_bilan: "毕岚",
		lm_xiayun: "夏恽",
		lm_hankui: "韩悝",
		lm_lisong: "栗嵩",
		lm_duangui: "段珪",
		lm_guosheng: "郭胜",
		lm_gaowang: "高望",

		lmCharacter_diy: "修改",
		lmCharacter_sw: "神武",
		lmCharacter_head: "头像",
		lmCharacter_other: "其他",

		//头像
		aaAronaPurana: "Arona&Purana",
		aaAqua: "阿夸",
		abAqua: "阿库娅",
		aamomo: "桃",
		aamidori: "绿",
		aahikari: "光",
		aanozomi: "望",
		aaNina: "仁菜",
		aaKotone: "琴音",

		wangtaowangyue: "王桃王悦",
		lm_old_caocao: "凌神曹操",
		lm_old_caocao_prefix: "凌|神",

		sw_guanyu: "☆神关羽",
		sw_guanyu_prefix: "☆神",
		sw_lvmeng: "☆神吕蒙",
		sw_lvmeng_prefix: "☆神",
		sw_zhugeliang: "☆神诸葛亮",
		sw_zhugeliang_prefix: "☆神",
		sw_zhouyu: "☆神周瑜",
		sw_zhouyu_prefix: "☆神",
		sw_simayi: "☆神司马懿",
		sw_simayi_prefix: "☆神",
		sw_zhaoyun: "☆神赵云",
		sw_zhaoyun_prefix: "☆神",
		sw_caocao: "☆神曹操",
		sw_caocao_prefix: "☆神",
		sw_lvbu: "☆神吕布",
		sw_lvbu_prefix: "☆神",
		sw_liubei: "☆神刘备",
		sw_liubei_prefix: "☆神",
		sw_luxun: "☆神陆逊",
		sw_luxun_prefix: "☆神",
		sw_zhangliao: "☆神张辽",
		sw_zhangliao_prefix: "☆神",
		sw_ganning: "☆神甘宁",
		sw_ganning_prefix: "☆神",
		sw_caopi: "☆神曹丕",
		sw_caopi_prefix: "☆神",
		sw_zhenji: "☆神甄宓",
		sw_zhenji_prefix: "☆神",
		sw_zhangjiao: "☆神张角",
		sw_zhangjiao_prefix: "☆神",
		sw_diaochan: "☆神貂蝉",
		sw_diaochan_prefix: "☆神",
		sw_tw_lvmeng: "TW☆神吕蒙",
		sw_tw_lvmeng_prefix: "TW|☆神",
		sw_tw_guanyu: "TW☆神关羽",
		sw_tw_guanyu_prefix: "TW|☆神",
		sw_wechat_zhugeliang: "微信☆神诸葛亮",
		sw_wechat_zhugeliang_prefix: "微信|☆神",
		lm_xurong: "虎翼徐荣",
		lm_xurong_prefix: "虎翼",

		unlock_dongzhao: "OL董昭",
		unlock_dongzhao_prefix: "OL",
		unlock_tianchuan: "田钏",
		lm_jikang: "嵇康",

		xr_huyi: "虎翼",
		xr_huyi_info: `游戏开始时，你获得${get.poptip("huyi")}。`,
		lmzhiti: "止啼",
		shenwuzaishi: "神武",
		shenwuzaishi_info: "游戏开始时，你选择一张“神武”置入装备区。准备阶段，若当前游戏轮数不大于3且你以此法选择的神武在牌堆/弃牌堆中，则你使用之。",
		lmzhiti: "止啼",
		lmzhiti_info: "锁定技。①你攻击范围内已受伤的其他角色手牌上限-1；②当你和已受伤的角色拼点或【决斗】胜利/受到已受伤角色造成的伤害后，若对方/伤害来源在你的攻击范围内，则你恢复一个装备栏。③若场上已受伤的角色数：不小于1，你的手牌上限+1；不小于3，你于摸牌阶段开始时令额定摸牌数+1；不小于5，回合结束时，你废除一名角色的一个随机装备栏。",
		lmjunkguixin: "归心",
		lmjunkguixin_info: "每轮开始时和你的回合结束时，你可以选择一项：①获得剩余武将牌堆的所有主公技的其中一个技能；②更改一名其他角色的势力。",

		wechatqixing: "七星",
		wechatqixing_info: "每轮限一次，当你进入濒死状态时，你可以进行一次判定，若判定结果大于7，你回复1点体力。",
		wechatjifeng: "祭风",
		wechatjifeng_info: "出牌阶段限一次，你可以弃置一张手牌，然后从牌堆中随机获得一张锦囊牌。",
		wechattianfa: "天罚",
		wechattianfa_info: "出牌阶段，你每使用两张锦囊牌，你获得1枚“罚”标记；回合结束时，你可以对至多X名其他角色各造成1点伤害（X为你拥有的“罚”标记数）。",
		minimeihun: "魅魂",
		minimeihun_info: "结束阶段，或你于当前回合首次成为【杀】的目标后，你可以选择一名其他角色，然后声明一个花色，令其交给你所有你此花色的牌，若其没有此花色的牌，则你观看其手牌并获得其中一张。",
		minihuoxin: "惑心",
		minihuoxin_info: "出牌阶段限一次，你可以弃置一张牌并令两名角色拼点，然后你可以声明一个花色，没赢的角色须选择一项：①令你获得其所有此花色的牌；②其不能使用或打出你此次声明的花色的牌直到其下个回合结束。",
		miniqinyin: "琴音",
		miniqinyin_info: "弃牌阶段结束时，若你于此阶段内弃置过牌，则你可以选择一项：1. 令所有角色各回复1点体力；2. 令所有角色各失去1点体力；3.令所有角色各摸一张牌。",
		dc_zj_a: "乐身",
		dc_zj_b: "养志",
		dc_zj_b_info: "结束阶段，你可以弃置所有牌并令一名其他角色获得〖乐身〗直到你的下个回合开始。",

		//前缀修改
		zc26_shen_huangyueying: "神黄月英",
		zc26_shen_huangyueying_prefix: "神",
		zc26_sp_xushi: "SP徐氏",
		zc26_sp_xushi_prefix: "SP",

		"#ext:星之梦/audio/die/old_mb_caomao:die": "司马昭！朕宁舍身一死，以坐汝弑君之名。",
		"#ext:星之梦/audio/die/wangtaowangyue1:die": "落花有意，何人来摘……",
		"#ext:星之梦/audio/die/wangtaowangyue2:die": "这次比试不算，再来……",
	},
};
if (!_status.postReconnect.extErdai_skill) {
	_status.postReconnect.extErdai_skill = [
		function (skills, info) {
			for (let skill in skills) {
				lib.skill[skill] = skills[skill];
				if (info[skill]) lib.translate[skill] = info[skill];
				if (info[skill + "_info"]) lib.translate[skill + "_info"] = info[skill + "_info"];
				game.finishSkill(skill);
			}
		},
		{},
		{},
	];
}
for (let skill in lmCharacter.skill) {
	_status.postReconnect.extErdai_skill[1][skill] = lmCharacter.skill[skill];
	if (lmCharacter.translate[skill]) _status.postReconnect.extErdai_skill[2][skill] = lmCharacter.translate[skill];
	if (lmCharacter.translate[skill + "_info"]) _status.postReconnect.extErdai_skill[2][skill + "_info"] = lmCharacter.translate[skill + "_info"];
}
export const skill = lmCharacter;
