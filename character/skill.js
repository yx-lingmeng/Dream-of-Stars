import { lib, game, ui, get, ai, _status } from "../../../noname.js"
let lmCharacter = {
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
            }
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
                "step 0"
                player.judge(function (card) {
                    if (get.number(card) > 7) return 2;
                    return -2;
                }).judge2 = function (result) {
                    return result.bool ? true : false;
                };
                "step 1"
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
                return player.getHistory("useCard", function (evt) {
                    return get.type2(evt.card) == "trick" && evt.getParent("phaseUse") == event.getParent("phaseUse");
                }).indexOf(event) % 2 == 1;
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
                        "step 0"
                        player.chooseTarget([1, player.countMark("wechattianfa")], get.prompt("wechattianfa"), "对至多" + get.cnNumber(player.countMark("wechattianfa")) + "名其他角色造成1点伤害", lib.filter.notMe).set("ai", function (target) {
                            var player = _status.event.player;
                            return get.damageEffect(target, player, player);
                        });
                        "step 1"
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

        //谋孟获
        lmsbzaiqi: {
            audio: "sbzaiqi",
            trigger: {
                player: "phaseDiscardEnd",
            },
            chargeSkill: 7,
            filter(event, player) {
                return player.countCharge();
            },
            group: "lmsbzaiqi_backflow",
            direct: true,
            content() {
                "step 0";
                player.chooseTarget(get.prompt("lmsbzaiqi"), "选择任意名角色并消耗等量蓄力值，令这些角色选择一项：1.令你摸一张牌；2.弃置一张牌，然后你回复1点体力", [1, player.countMark("charge")]).set("ai", function (target) {
                    var player = _status.event.player;
                    var att = get.attitude(player, target);
                    return 3 - get.sgn(att) + Math.abs(att / 1000);
                });
                ("step 1");
                if (result.bool) {
                    var targets = result.targets;
                    targets.sortBySeat();
                    event.targets = targets;
                    player.logSkill("lmsbzaiqi", targets);
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
                    usable: 3,
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
        //谋夏侯惇
        lmsbganglie: {
            audio: "sbganglie",
            enable: "phaseUse",
            usable: 1,
            filter(event, player) {
                if (!event.lmsbganglie_enabledTargets) return false;
                return game.hasPlayer(current => {
                    return lib.skill.lmsbganglie.filterTarget(null, player, current);
                });
            },
            onChooseToUse(event) {
                if (game.online || event.type !== "phase") return;
                const player = event.player;
                const chosen = player
                    .getAllHistory("useSkill", evt => evt.skill === "lmsbganglie")
                    .map(evt => {
                        return evt.targets;
                    });
                let targets = player
                    .getAllHistory("damage", evt => evt.source && evt.source.isIn())
                    .map(evt => evt.source)
                    .unique();
                targets = [...targets, ...targets];
                targets.removeArray(chosen);
                event.set("lmsbganglie_enabledTargets", targets);
            },
            filterTarget(card, player, target) {
                return get.event("lmsbganglie_enabledTargets").includes(target);
            },
            selectTarget: [1, Infinity],
            multitarget: true,
            multiline: true,
            async content(event, trigger, player) {
                for (const target of event.targets.sortBySeat()) await target.damage();
            },
            ai: {
                order: 6,
                result: {
                    target: -2,
                },
            },
        },
        //谋姜维
        lmsbzhiji: {
            audio: "sbzhiji",
            trigger: { player: "phaseZhunbeiBegin" },
            juexingji: true,
            forced: true,
            skillAnimation: true,
            animationColor: "fire",
            filter(event, player) {
                var len = 0;
                player.getAllHistory("useSkill", evt => {
                    if (evt.skill != "sbtiaoxin") return false;
                    len += evt.targets.length;
                });
                return len >= 4;
            },
            content() {
                "step 0";
                player.awakenSkill("lmsbzhiji");
                player.loseMaxHp();
                ("step 1");
                player.addSkill("sbguanxing");
            },
            derivation: ["sbguanxing"],
            ai: {
                combo: "sbtiaoxin",
            },
        },

        //曹丕
        lmfangzhu: {
            audio: "fangzhu",
            trigger: {
                player: "damageEnd",
            },
            direct: true,
            preHidden: true,
            content() {
                "step 0";
                player
                    .chooseTarget(get.prompt("lmfangzhu"), "令一名其他角色将武将牌翻面，然后你摸" + get.cnNumber(player.getDamagedHp()) + "张牌并交给其等量的牌", function (card, player, target) {
                        return player != target;
                    })
                    .setHiddenSkill("lmfangzhu").ai = function (target) {
                        if (target.hasSkillTag("noturn")) return 0;
                        var player = _status.event.player;
                        if (get.attitude(_status.event.player, target) == 0) return 0;
                        if (get.attitude(_status.event.player, target) > 0) {
                            if (target.classList.contains("turnedover")) return 1000 - target.countCards("h");
                            if (player.getDamagedHp() < 3) return -1;
                            return 100 - target.countCards("h");
                        } else {
                            if (target.classList.contains("turnedover")) return -1;
                            if (player.getDamagedHp() >= 3) return -1;
                            return 1 + target.countCards("h");
                        }
                    };
                ("step 1");
                if (result.bool) {
                    player.logSkill("lmfangzhu", result.targets);
                    result.targets[0].turnOver();
                    var num = player.getDamagedHp();
                    player.draw(num);
                    event.target = result.targets[0];
                    player.chooseCard("he", num, "放逐：交给" + get.translation(event.target) + num + "张牌", true);
                } else event.finish();
                ("step 2");
                if (result.bool) {
                    player.give(result.cards, event.target);
                }
            },
            ai: {
                maixie: true,
                maixie_hp: true,
                effect: {
                    target(card, player, target) {
                        if (get.tag(card, "damage")) {
                            if (player.hasSkillTag("jueqing", false, target)) return [1, -2];
                            if (target.hp <= 1) return;
                            if (!target.hasFriend()) return;
                            var hastarget = false;
                            var turnfriend = false;
                            var players = game.filterPlayer();
                            for (var i = 0; i < players.length; i++) {
                                if (get.attitude(target, players[i]) < 0 && !players[i].isTurnedOver()) {
                                    hastarget = true;
                                }
                                if (get.attitude(target, players[i]) > 0 && players[i].isTurnedOver()) {
                                    hastarget = true;
                                    turnfriend = true;
                                }
                            }
                            if (get.attitude(player, target) > 0 && !hastarget) return;
                            if (turnfriend || target.hp == target.maxHp) return [0.5, 1];
                            if (target.hp > 1) return [1, 0.5];
                        }
                    },
                },
            },
        },
        //新袁术
        lmyongsi: {
            audio: "drlt_yongsi",
            group: ["lmyongsi_1", "lmyongsi_2"],
            locked: true,
            subSkill: {
                1: {
                    audio: "drlt_yongsi",
                    trigger: {
                        player: "phaseDrawBegin2",
                    },
                    forced: true,
                    filter(event, player) {
                        return !event.numFixed;
                    },
                    content() {
                        trigger.num += game.countGroup();
                    },
                },
                2: {
                    audio: "drlt_yongsi",
                    trigger: {
                        player: "phaseUseEnd",
                    },
                    forced: true,
                    filter(event, player) {
                        var num = 0;
                        player.getHistory("sourceDamage", function (evt) {
                            if (evt.getParent("phaseUse") == event) num += evt.num;
                        });
                        return !num || num > 1;
                    },
                    content() {
                        var numx = 0;
                        player.getHistory("sourceDamage", function (evt) {
                            if (evt.getParent("phaseUse") == trigger) numx += evt.num;
                        });
                        if (!numx) {
                            var num = player.maxHp - player.countCards("h");
                            if (num > 0) player.draw(num);
                        } else {
                            player.addTempSkill("lmyongsi1", { player: "phaseDiscardAfter" });
                        }
                    },
                },
            },
        },
        lmyongsi1: {
            mod: {
                maxHandcard(player, num) {
                    return num + player.maxHp - 2 * Math.max(0, player.hp);
                },
            },
        },
        //刘虞
        lmzongzuo: {
            trigger: {
                global: "phaseBefore",
                player: "enterGame",
            },
            forced: true,
            audio: "zongzuo",
            filter(event, player) {
                return event.name != "phase" || game.phaseNumber == 0;
            },
            content() {
                "step 0";
                var num = game.countGroup() * 2;
                player.gainMaxHp(num);
                event.num = num;
                ("step 1");
                player.recover(event.num);
                //player.update();
            },
            group: "lmzongzuo_lose",
            subSkill: {
                lose: {
                    trigger: { global: "dieAfter" },
                    forced: true,
                    audio: "zongzuo",
                    filter(event, player) {
                        if (!lib.group.includes(event.player.group)) return false;
                        if (
                            game.hasPlayer(function (current) {
                                return current.group == event.player.group;
                            })
                        ) {
                            return false;
                        }
                        return true;
                    },
                    content() {
                        "step 0";
                        player.loseMaxHp();
                        ("step 1");
                        player.draw(2);
                    },
                },
            },
        },
        //刘繇
        lmkannan: {
            audio: "xinfu_kannan",
            group: "lmkannan_gain",
            subSkill: {
                gain: {
                    trigger: {
                        player: ["chooseToCompareAfter", "compareMultipleAfter"],
                        target: ["chooseToCompareAfter", "compareMultipleAfter"],
                    },
                    filter(event, player) {
                        if (event.preserve) return false;
                        return [event.card1, event.card2].filterInD("od").length > 0;
                    },
                    prompt2(event, player) {
                        return "获得" + get.translation([event.card1, event.card2].filterInD("od"));
                    },
                    content() {
                        player.gain([trigger.card1, trigger.card2].filterInD("od"), "gain2", "log");
                    },
                },
                phase: {
                    sub: true,
                },
            },
            enable: "phaseUse",
            filter(event, player) {
                if (player.hasSkill("lmkannan_phase")) return false;
                if (player.getStat().skill.lmkannan >= player.hp) return false;
                return player.countCards("h") > 0;
            },
            filterTarget(card, player, target) {
                if (target.hasSkill("lmkannan_phase")) return false;
                return player.canCompare(target);
            },
            ai: {
                order() {
                    return get.order({ name: "sha" }) + 0.4;
                },
                result: {
                    target(player, target) {
                        if (
                            player.hasCard(function (card) {
                                if (get.position(card) != "h") return false;
                                var val = get.value(card);
                                if (val < 0) return true;
                                if (val <= 5) {
                                    return card.number >= 12;
                                }
                                if (val <= 6) {
                                    return card.number >= 13;
                                }
                                return false;
                            })
                        )
                            return -1;
                        return 0;
                    },
                },
            },
            content() {
                "step 0";
                player.chooseToCompare(target);
                ("step 1");
                if (result.bool) {
                    player.addTempSkill("lmkannan_phase");
                    if (!player.hasSkill("kannan_eff")) {
                        player.addSkill("kannan_eff");
                    } else {
                        if (!player.storage.kannan_eff) player.storage.kannan_eff = 0;
                    }
                    player.storage.kannan_eff++;
                    player.markSkill("kannan_eff");
                } else {
                    target.addTempSkill("lmkannan_phase");
                    if (!target.hasSkill("kannan_eff")) {
                        target.addSkill("kannan_eff");
                    } else {
                        if (!target.storage.kannan_eff) player.storage.kannan_eff = 0;
                        //target.storage.kannan_eff++;
                        //target.markSkill("kannan_eff");
                    }
                    target.storage.kannan_eff++;
                    target.markSkill("kannan_eff");
                }
            },
        },

        //界张角
        minihuangtian: {
            audio: "huangtian2",
            unique: true,
            zhuSkill: true,
            global: "minihuangtian2",
            group: "minihuangtian4",
        },
        minihuangtian2: {
            audio: "huangtian2",
            enable: "phaseUse",
            discard: false,
            lose: false,
            delay: false,
            line: true,
            direct: true,
            clearTime: true,
            prepare(cards, player, targets) {
                targets[0].logSkill("minihuangtian");
            },
            prompt() {
                var player = _status.event.player;
                var list = game.filterPlayer(function (target) {
                    return target != player && target.hasZhuSkill("minihuangtian", player);
                });
                var str = "将一张【闪】或【闪电】或黑桃手牌交给" + get.translation(list);
                if (list.length > 1) str += "中的一人";
                return str;
            },
            filter(event, player) {
                if (player.group != "qun") return false;
                if (player.countCards("h", { name: ["shan", "shandian"] }) + player.countCards("h", { suit: "spade" }) == 0) return false;
                return game.hasPlayer(function (target) {
                    return target != player && target.hasZhuSkill("minihuangtian", player) && !target.hasSkill("minihuangtian3");
                });
            },
            filterCard(card) {
                return card.name == "shan" || card.name == "shandian" || get.suit(card) == "spade";
            },
            log: false,
            visible: true,
            filterTarget(card, player, target) {
                return target != player && target.hasZhuSkill("minihuangtian", player) && !target.hasSkill("minihuangtian3");
            },
            content() {
                target.gain(cards, player, "giveAuto");
                target.addTempSkill("minihuangtian3", "phaseUseEnd");
            },
            ai: {
                expose: 0.3,
                order: 10,
                result: { target: 1 },
            },
        },
        minihuangtian3: {},
        minihuangtian4: {
            audio: "huangtian2",
            trigger: { global: ["useCardAfter", "responseAfter"] },
            filter(event, player) {
                return event.card.name == "shan" && event.player != player && event.cards.filterInD().length > 0 && event.player.group == "qun";
            },
            prompt2(event, player) {
                return "获得" + get.translation(event.cards.filterInD());
            },
            usable: 1,
            logTarget: "player",
            content() {
                player.gain(trigger.cards.filterInD(), "gain2");
            },
        },
        //界孙休
        miniyanzhu: {
            audio: "yanzhu",
            enable: "phaseUse",
            filterTarget: lib.filter.notMe,
            usable: 1,
            content() {
                "step 0";
                if (!target.countCards("e") || player.storage.miniyanzhu) event._result = { index: 0 };
                else
                    target
                        .chooseControl()
                        .set("prompt", get.translation(player) + "发动了【宴诛】，请选择一项")
                        .set("choiceList", ["弃置一张牌，并令下次受到的伤害+1直到下回合开始", "将装备区内的所有牌交给" + get.translation(player) + "并令其发动【宴诛】无法选择此项"])
                        .set("ai", function () {
                            if (_status.event.player.countCards("e") >= 3) return 0;
                            return 1;
                        });
                ("step 1");
                if (result.index == 1) {
                    target.give(target.getCards("e"), player);
                    player.storage.miniyanzhu = true;
                } else {
                    if (target.countCards("he") > 0) target.chooseToDiscard("he", true);
                    target.addTempSkill("reyanzhu2", { player: "phaseBegin" });
                    target.addMark("reyanzhu2", 1, false);
                }
            },
            ai: {
                order: 6,
                result: {
                    target(player, target) {
                        if (player.storage.miniyanzhu) return -1;
                        var ne = target.countCards("e");
                        if (!ne) return -2;
                        if (ne >= 2) return -ne;
                        return 0;
                    },
                },
            },
        },
        minixingxue: {
            audio: "xingxue",
            trigger: { player: "phaseJieshuBegin" },
            filter(event, player) {
                return player.maxHp > 0;
            },
            direct: true,
            content() {
                "step 0";
                player.chooseTarget([1, player.maxHp], get.prompt2("minixingxue")).set("ai", function (target) {
                    var att = get.attitude(_status.event.player, target);
                    if (target.countCards("he")) return att;
                    return att / 10;
                });
                ("step 1");
                if (result.bool) {
                    var targets = result.targets.sortBySeat();
                    event.targets = result.targets;
                    player.logSkill("minixingxue", targets);
                    event.targets2 = event.targets.slice(0);
                } else event.finish();
                ("step 2");
                if (event.targets.length) {
                    var target = event.targets.shift();
                    target.draw();
                    event.current = target;
                } else event.finish();
                ("step 3");
                if (event.current && event.current.countCards("he")) {
                    if (event.targets2.length == 1) event.current.chooseCard("选择一张牌置于牌堆顶", "he", true);
                    else
                        event.current.chooseCardTarget({
                            prompt: "将一张牌置于牌堆顶，或交给其他目标角色",
                            filterCard: true,
                            position: "he",
                            filterTarget(card, player, target) {
                                return target != player && _status.event.getParent().targets2.includes(target);
                            },
                            forced: true,
                            selectTarget: [0, 1],
                            ai1: card => 6 - get.value(card),
                            ai2: target => get.attitude(_status.event.player, target),
                        });
                } else event.goto(2);
                ("step 4");
                if (result && result.cards) {
                    if (!result.targets || !result.targets.length) {
                        event.current.lose(result.cards, ui.cardPile, "insert");
                        event.current.$throw(result.cards.length, 1000);
                    } else event.current.give(result.cards, result.targets[0]);
                }
                ("step 5");
                event.goto(2);
            },
        },
        //界刘谌
        minizhanjue: {
            audio: "zhanjue",
            enable: "phaseUse",
            filterCard(card) {
                return !card.hasGaintag("miniqinwang");
            },
            selectCard: -1,
            position: "h",
            filter(event, player) {
                var stat = player.getStat().skill;
                if (stat.minizhanjue_draw && stat.minizhanjue_draw >= 3) return false;
                var hs = player.getCards("h", function (card) {
                    return !card.hasGaintag("miniqinwang");
                });
                if (!hs.length) return false;
                for (var i = 0; i < hs.length; i++) {
                    var mod2 = game.checkMod(hs[i], player, "unchanged", "cardEnabled2", player);
                    if (mod2 === false) return false;
                }
                return event.filterCard(get.autoViewAs({ name: "juedou" }, hs));
            },
            viewAs: { name: "juedou" },
            onuse(links, player) {
                player.addTempSkill("minizhanjue_effect", "phaseUseEnd");
            },
            ai: {
                order: 1,
                tag: {
                    respond: 2,
                    respondSha: 2,
                    damage: 1,
                },
                result: {
                    target: -1.5,
                    player(player, target) {
                        if (
                            player.hasSkillTag(
                                "directHit_ai",
                                true,
                                {
                                    target: target,
                                    card: { name: "juedou" },
                                },
                                true
                            )
                        ) {
                            return 0;
                        }
                        if (get.damageEffect(target, player, target) > 0 && get.attitude(player, target) > 0 && get.attitude(target, player) > 0) {
                            return 0;
                        }
                        var hs1 = target.getCards("h", "sha");
                        var hs2 = player.getCards("h", function (card) {
                            return card.hasGaintag("miniqinwang") && get.name(card) == "sha";
                        });
                        if (hs1.length > hs2.length + 1) {
                            return -2;
                        }
                        var hsx = target.getCards("h");
                        if (hsx.length > 2 && hs2.length == 0 && hsx[0].number < 6) {
                            return -2;
                        }
                        if (hsx.length > 3 && hs2.length == 0) {
                            return -2;
                        }
                        if (hs1.length > hs2.length && (!hs2.length || hs1[0].number > hs2[0].number)) {
                            return -2;
                        }
                        return -0.5;
                    },
                },
            },
            subSkill: {
                effect: {
                    charlotte: true,
                    onremove(player) {
                        delete player.getStat().skill.minizhanjue_draw;
                    },
                    trigger: { player: "useCardAfter" },
                    filter(event, player) {
                        return event.skill == "minizhanjue";
                    },
                    forced: true,
                    popup: false,
                    content() {
                        "step 0";
                        var stat = player.getStat().skill;
                        if (!stat.minizhanjue_draw) stat.minizhanjue_draw = 0;
                        stat.minizhanjue_draw++;
                        player.draw("nodelay");
                        var list = game.filterPlayer(function (current) {
                            if (
                                current.getHistory("damage", function (evt) {
                                    return evt.card == trigger.card;
                                }).length > 0
                            ) {
                                if (current == player) {
                                    stat.minizhanjue_draw++;
                                }
                                return true;
                            }
                            return false;
                        });
                        if (list.length) {
                            list.sortBySeat();
                            game.asyncDraw(list);
                        }
                        ("step 1");
                        game.delay();
                        ("step 2");
                        if (
                            player.getHistory("damage", function (evt) {
                                return evt.card == trigger.card;
                            }).length
                        ) {
                            for (var i of game.filterPlayer().filter(function (target) {
                                return (
                                    target.getHistory("sourceDamage", function (evt) {
                                        return evt.card == trigger.card && evt.player == player;
                                    }).length &&
                                    target.isIn() &&
                                    target.countCards("he")
                                );
                            }))
                                player.discardPlayerCard(i, "he");
                        }
                    },
                },
            },
        },
        miniqinwang: {
            audio: "qinwang1",
            enable: "phaseUse",
            usable: 1,
            zhuSkill: true,
            filter(event, player) {
                return game.hasPlayer(function (current) {
                    return current != player && current.group == "shu" && player.hasZhuSkill("miniqinwang", current);
                });
            },
            filterTarget(card, player, current) {
                return current != player && current.group == "shu" && player.hasZhuSkill("miniqinwang", current);
            },
            selectTarget: -1,
            content() {
                "step 0";
                if (
                    target.hasCard(function (card) {
                        return _status.connectMode || get.name(card, target) == "sha";
                    }, "h")
                ) {
                    target
                        .chooseCard(
                            "是否交给" + get.translation(player) + "一张基本牌？",
                            function (card, player) {
                                return get.type(card) == "basic";
                            },
                            "h"
                        )
                        .set("goon", get.attitude(target, player) > 0)
                        .set("ai", function (card) {
                            return _status.event.goon ? 1 : 0;
                        });
                } else event.finish();
                ("step 1");
                if (result.bool) {
                    var card = result.cards[0];
                    target.give(card, player).gaintag.add("miniqinwang");
                    player.addTempSkill("miniqinwang_clear");
                    player.chooseBool("是否令" + get.translation(target) + "摸一张牌？");
                } else event.finish();
                ("step 2");
                if (result.bool) target.draw();
            },
            ai: {
                order: 5,
                result: { player: 1 },
            },
            subSkill: {
                clear: {
                    charlotte: true,
                    onremove(player) {
                        player.removeGaintag("miniqinwang");
                    },
                },
            },
        },
        //张鲁
        miniyishe: {
            audio: "yishe",
            inherit: "yishe",
            filter: () => true,
            frequent: true,
        },
        minibushi: {
            audio: "bushi",
            inherit: "bushi",
            async content(event, trigger, player) {
                let sum = trigger.num;
                while (sum && player.getExpansions("yishe").length && player.hasSkill("minibushi")) {
                    sum--;
                    const {
                        result: { bool, links },
                    } = await player.chooseCardButton("布施：是否" + (trigger.player != player ? "令" + get.translation(trigger.player) : "") + "获得一张“米”？", player.getExpansions("yishe")).set("ai", button => {
                        const att = get.attitude(get.event("player"), get.event().getTrigger().player);
                        return get.value(button.link) * get.sgn(get.sgn(att) - 0.5);
                    });
                    if (bool) {
                        player.logSkill("minibushi", trigger.player);
                        await player.give(links, trigger.player);
                    } else break;
                }
            },
            ai: { combo: "miniyishe" },
        },
        minimidao: {
            audio: "midao",
            inherit: "midao",
            async content(event, trigger, player) {
                const {
                    result: { bool, links },
                } = await player
                    .chooseButton([get.translation(trigger.player) + "的" + (trigger.judgestr || "") + "判定为" + get.translation(trigger.player.judging[0]) + "，" + get.prompt("minimidao"), player.getExpansions("yishe"), "hidden"])
                    .set("filterButton", button => {
                        const player = get.event("player"),
                            card = button.link;
                        const mod2 = game.checkMod(card, player, "unchanged", "cardEnabled2", player);
                        if (mod2 != "unchanged") return mod2;
                        const mod = game.checkMod(card, player, "unchanged", "cardRespondable", player);
                        if (mod != "unchanged") return mod;
                        return true;
                    })
                    .set("ai", button => {
                        const card = button.link,
                            trigger = get.event().getTrigger();
                        const player = get.event("player"),
                            judging = get.event("judging");
                        const result = trigger.judge(card) - trigger.judge(judging) + 0.00001;
                        const attitude = get.attitude(player, trigger.player);
                        return result * attitude;
                    })
                    .set("judging", trigger.player.judging[0]);
                if (bool) {
                    event.forceDie = true;
                    await player.respond(links, "minimidao", "highlight", "noOrdering");
                    if (trigger.player.judging[0].clone) {
                        trigger.player.judging[0].clone.classList.remove("thrownhighlight");
                        game.broadcast(card => {
                            if (card.clone) card.clone.classList.remove("thrownhighlight");
                        }, trigger.player.judging[0]);
                        game.addVideo("deletenode", player, get.cardsInfo([trigger.player.judging[0].clone]));
                    }
                    await game.cardsDiscard(trigger.player.judging[0]);
                    trigger.player.judging[0] = links[0];
                    trigger.orderingCards.addArray(links);
                    game.log(trigger.player, "的判定牌改为", links[0]);
                    await game.asyncDelay(2);
                    await player.draw();
                }
            },
            ai: {
                combo: "miniyishe",
                rejudge: true,
                tag: { rejudge: 0.6 },
            },
        },
        //刘协
        minitianming: {
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
                ("step 1");
                player.chooseTarget("是否令一名角色弃置两张牌，然后摸两张牌？").set("ai", function (target) {
                    var cards = target.getCards("he");
                    if (cards.length <= 2) {
                        for (var i = 0; i < cards.length; i++) {
                            if (cards[i].name == "shan" || cards[i].name == "tao") return 0;
                        }
                    }
                    return get.attitude(player, target) * (target == player ? 1.2 : 1);
                });
                ("step 2");
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
        },
        minimizhao: {
            audio: "mizhao",
            inherit: "mizhao",
            check(card) {
                var player = _status.event.player;
                if (
                    ui.selected.cards.length &&
                    !game.hasPlayer(function (current) {
                        return get.attitude(player, current) > 0;
                    })
                )
                    return -1;
                return 1 / (get.value(card) || 0.5);
            },
            selectCard: [1, Infinity],
            ai: {
                order: 1,
                result: {
                    target(player, target) {
                        var num1 = game.countPlayer(function (current) {
                            return get.attitude(player, current) > 0;
                        }),
                            num2 = game.countPlayer(function (current) {
                                return get.attitude(player, current) < 0;
                            });
                        if (target.hasSkillTag("nogain")) return 0;
                        if (num1 > 0 && num2 > 0) return 1;
                        if (player.countCards("h", card => get.value(card) > 0)) return 0;
                        if (num1 == 0 && num2 > 1) return -1;
                        return 0;
                    },
                },
            },
        },
        //吕布
        gz_wushuang: {
            audio: "wushuang",
            forced: true,
            locked: true,
            group: ["wushuang1", "wushuang2"],
            preHidden: ["wushuang1", "wushuang2", "gz_wushuang"],
            trigger: { player: "useCard1" },
            direct: true,
            filter(event, player) {
                if (event.card.name != "juedou" || !event.card.isCard) return false;
                if (event.targets) {
                    if (
                        game.hasPlayer(function (current) {
                            return !event.targets.includes(current) && lib.filter.targetEnabled2(event.card, player, current);
                        })
                    ) {
                        return true;
                    }
                }
                return false;
            },
            content() {
                "step 0";
                var num = game.countPlayer(function (current) {
                    return !trigger.targets.includes(current) && lib.filter.targetEnabled2(trigger.card, player, current);
                });
                player
                    .chooseTarget("无双：是否为" + get.translation(trigger.card) + "增加" + (num > 1 ? "至多两个" : "一个") + "目标？", [1, Math.min(2, num)], function (card, player, target) {
                        var trigger = _status.event.getTrigger();
                        var card = trigger.card;
                        return !trigger.targets.includes(target) && lib.filter.targetEnabled2(card, player, target);
                    })
                    .set("ai", function (target) {
                        var player = _status.event.player;
                        var card = _status.event.getTrigger().card;
                        return get.effect(target, card, player, player);
                    })
                    .setHiddenSkill("gz_wushuang");
                ("step 1");
                if (result.bool) {
                    if (player != game.me && !player.isOnline()) game.delayx();
                } else event.finish();
                ("step 2");
                var targets = result.targets.sortBySeat();
                player.logSkill("gz_wushuang", targets);
                trigger.targets.addArray(targets);
            },
        },
        //神貂蝉
        minimeihun: {
            audio: "meihun",
            trigger: { player: "phaseJieshuBegin", target: "useCardToTargeted" },
            filter(event, player) {
                if (event.name != "phaseJieshu" && game.getGlobalHistory("useCard", function (evt) {
                    return evt.card.name == "sha" && evt.targets.includes(player);
                }).indexOf(event.getParent()) != 0) return false;
                return game.hasPlayer(function (current) {
                    return current != player && current.countCards("he");
                });
            },
            direct: true,
            content() {
                "step 0"
                player.chooseTarget(get.prompt2("minimeihun"), function (card, player, target) {
                    return target != player && target.countCards("he");
                }).set("ai", function (target) {
                    var player = _status.event.player;
                    return -get.sgn(get.attitude(player, target)) * target.countCards("he");
                });
                "step 1"
                if (result.bool) {
                    var target = result.targets[0];
                    player.logSkill("minimeihun", target);
                    event.target = target;
                    player.chooseControl(lib.suit.slice(0).reverse()).set("prompt", "请声明一个花色").set("ai", function () {
                        var target = _status.event.target, cards = target.getCards("he");
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
                    }).set("target", target);
                }
                else event.finish();
                "step 2"
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
                return game.hasPlayer(function (target) {
                    return lib.skill.minihuoxin.filterTarget(null, player, target);
                }) && player.countCards("he");
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
                "step 0"
                event.list = [];
                targets[0].chooseToCompare(targets[1]);
                "step 1"
                for (var target of targets) {
                    if (result.winner !== target) event.list.push(target);
                }
                event.list.sortBySeat();
                var suits = lib.suit.slice(0).reverse();
                suits.push("cancel2");
                player.chooseControl(suits).set("prompt", get.translation(event.list) + "拼点没赢，是否声明一个花色令其进行选择？").set("ai", function () {
                    var currents = _status.event.list, cards = [];
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
                }).set("list", event.list);
                "step 2"
                var suit = result.control;
                if (suit != "cancel2") {
                    player.chat(get.translation(suit + 2));
                    game.log(player, "选择了", "#y" + get.translation(suit + 2));
                    event.suit = suit;
                }
                else event.finish();
                "step 3"
                var target = event.list.shift();
                event.target = target;
                player.line(target);
                if (!target.countCards("he", { suit: event.suit })) event._result = { index: 1 };
                else target.chooseControl().set("choiceList", [
                    "交给" + get.translation(player) + "所有的" + get.translation(event.suit) + "牌",
                    "不能使用或打出" + get.translation(event.suit) + "牌直到你的下个回合结束"
                ]).set("ai", () => 1);
                "step 4"
                if (result.index == 0) player.gain(target.getCards("he", { suit: event.suit }), target, "giveAuto");
                else {
                    target.addTempSkill("minihuoxin_use", { player: "phaseEnd" });
                    target.markAuto("minihuoxin_use", [event.suit]);
                }
                "step 5"
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
                            const bool = await player
                                .chooseBool("戢鳞：明置一张“志”", `令${get.translation(trigger.card)}对你无效`)
                                .set("choice", goon)
                                .forResultBool();
                            event.result = {
                                bool: bool,
                                cost_data: hidden,
                            };
                        } else {
                            const {
                                result: { bool, links },
                            } = await player
                                .chooseButton(["戢鳞：明置一张“志”", hidden])
                                .set("ai", button => {
                                    const player = get.player(),
                                        card = button.link,
                                        suits = get.event("suits");
                                    if (!get.event("goon")) return 0;
                                    if (!suits.includes(get.suit(card))) return 10;
                                    return 6 - get.value(card);
                                })
                                .set("suits", suits)
                                .set("goon", goon);
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
                        const {
                            result: { bool, moved },
                        } = await next;
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
                const {
                    result: { bool, links },
                } = await player
                    .chooseButton(["英猷：你可以明志", hidden])
                    .set("ai", button => {
                        const player = get.player(),
                            card = button.link,
                            suits = get.event("suits");
                        const getNum = player => {
                            var list = [];
                            for (var i of lib.suit) list.push(player.countCards("h", { suit: i }) + 3);
                            return list.sort((a, b) => b - a)[0];
                        };
                        if (!suits.includes(get.suit(card))) return 10;
                        if (get.suit(card) == getNum(player)) return 5;
                        return 0;
                    })
                    .set("suits", suits);
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
        //神鲁肃
        old_dingzhou: {
            audio: "dingzhou",
            enable: "phaseUse",
            usable: 1,
            filter(event, player) {
                const num = player.countCards("he");
                return game.hasPlayer(current => {
                    if (current == player) return false;
                    const total = current.countCards("ej");
                    return total > 0 && num >= total;
                });
            },
            filterCard: true,
            selectCard() {
                return [1, Math.max(...game.filterPlayer(i => i != get.player()).map(i => i.countCards("ej")))];
            },
            check(card) {
                return 7 - get.value(card);
            },
            filterTarget(card, player, target) {
                const num = target.countCards("ej");
                if (!num) return false;
                return ui.selected.cards.length == num && player != target;
            },
            filterOk() {
                return ui.selected.cards.length == ui.selected.targets[0].countCards("ej");
            },
            position: "he",
            lose: false,
            discard: false,
            delay: false,
            async content(event, trigger, player) {
                const target = event.targets[0];
                await player.give(event.cards, target);
                const cards = target.getGainableCards(player, "ej");
                if (cards.length) player.gain(cards, "give", target);
            },
            ai: {
                order: 9,
                result: {
                    target(player, target) {
                        let eff = 0;
                        if (ui.selected.cards.length) eff = ui.selected.cards.map(card => get.value(card)).reduce((p, c) => p + c, 0);
                        if (player.hasSkill("old_zhimeng")) eff *= 1 + get.sgnAttitude(player, target) * 0.15;
                        const es = target.getCards("e"),
                            js = target.getCards("j");
                        es.forEach(card => {
                            eff -= get.value(card, target);
                        });
                        js.forEach(card => {
                            eff -= get.effect(
                                target,
                                {
                                    name: card.viewAs || card.name,
                                    cards: [card],
                                },
                                target,
                                target
                            );
                        });
                        return eff;
                    },
                },
            },
        },
        old_tamo: {
            available(mode) {
                // 走另外的phaseLoop的模式/子模式/设置
                if (["boss", "stone", "tafang"].includes(mode) || ["jiange", "standard", "three", "leader"].includes(_status.mode) || get.config("seat_order") === "指定") {
                    return false;
                }
            },
            getTargets() {
                return game.filterPlayer(current => {
                    return !current.isZhu2();
                });
            },
            audio: "tamo",
            trigger: {
                global: "phaseBefore",
                player: "enterGame",
            },
            filter(event, player) {
                return (event.name != "phase" || game.phaseNumber == 0) && get.info("old_tamo").getTargets().length > 1;
            },
            seatRelated: "changeSeat",
            derivation: "old_tamo_faq",
            async cost(event, trigger, player) {
                const toSortPlayers = get.info(event.skill).getTargets();
                toSortPlayers.sortBySeat(game.findPlayer2(current => current.getSeatNum() == 1, true));
                const next = player.chooseToMove("榻谟：是否分配" + (get.mode() != "doudizhu" ? (game.hasPlayer(cur => cur.isZhu2()) ? "除主公外" : "") : "除三号位外") + "所有角色的座次？");
                next.set("list", [["（以下排列的顺序即为发动技能后角色的座次顺序）", [toSortPlayers.map(i => `${i.getSeatNum()}|${i.name}`), lib.skill.old_tamo.$createButton]]]);
                next.set("toSortPlayers", toSortPlayers.slice(0));
                next.set("processAI", () => {
                    const players = get.event("toSortPlayers"),
                        player = get.player();
                    players.randomSort().sort((a, b) => get.attitude(player, b) - get.attitude(player, a));
                    return [players.map(i => `${i.getSeatNum()}|${i.name}`)];
                });
                const { result } = await next;
                event.result = {
                    bool: result?.bool,
                    cost_data: [toSortPlayers, result?.moved],
                };
            },
            async content(event, trigger, player) {
                const [toSortPlayers, moved] = event.cost_data;
                const resultList = moved[0].map(info => {
                    return parseInt(info.split("|")[0]);
                });
                const toSwapList = [];
                const cmp = (a, b) => {
                    return resultList.indexOf(a) - resultList.indexOf(b);
                };
                for (let i = 0; i < toSortPlayers.length; i++) {
                    for (let j = 0; j < toSortPlayers.length; j++) {
                        if (cmp(toSortPlayers[i].getSeatNum(), toSortPlayers[j].getSeatNum()) < 0) {
                            toSwapList.push([toSortPlayers[i], toSortPlayers[j]]);
                            [toSortPlayers[i], toSortPlayers[j]] = [toSortPlayers[j], toSortPlayers[i]];
                        }
                    }
                }
                game.broadcastAll(toSwapList => {
                    for (const list of toSwapList) {
                        game.swapSeat(list[0], list[1], false);
                    }
                }, toSwapList);
                if (trigger.name === "phase" && !trigger.player.isZhu2() && trigger.player !== toSortPlayers[0] && !trigger._finished) {
                    trigger.finish();
                    trigger._triggered = 5;
                    const evt = toSortPlayers[0].insertPhase();
                    delete evt.skill;
                    const evt2 = trigger.getParent();
                    if (evt2.name == "phaseLoop" && evt2._isStandardLoop) {
                        evt2.player = toSortPlayers[0];
                    }
                    //跳过新回合的phaseBefore
                    evt.pushHandler("onPhase", (event, option) => {
                        if (event.step === 0 && option.state === "begin") {
                            event.step = 1;
                        }
                    });
                }
                await game.delay();
            },
            $createButton(item, type, position, noclick, node) {
                const info = item.split("|"),
                    _item = item;
                const seat = parseInt(info[0]);
                item = info[1];
                if (node) {
                    node.classList.add("button");
                    node.classList.add("character");
                    node.style.display = "";
                } else {
                    node = ui.create.div(".button.character", position);
                }
                node._link = item;
                node.link = item;

                const func = function (node, item) {
                    const currentPlayer = game.findPlayer(current => current.getSeatNum() == seat);
                    if (currentPlayer.classList.contains("unseen_show")) {
                        node.setBackground("hidden_image", "character");
                    } else if (item != "unknown") {
                        node.setBackground(item, "character");
                    }
                    if (node.node) {
                        node.node.name.remove();
                        node.node.hp.remove();
                        node.node.group.remove();
                        node.node.intro.remove();
                        if (node.node.replaceButton) {
                            node.node.replaceButton.remove();
                        }
                    }
                    node.node = {
                        name: ui.create.div(".name", node),
                        group: ui.create.div(".identity", node),
                        intro: ui.create.div(".intro", node),
                    };
                    const infoitem = [currentPlayer.sex, currentPlayer.group, `${currentPlayer.hp}/${currentPlayer.maxHp}/${currentPlayer.hujia}`];
                    node.node.name.innerHTML = get.slimName(item);
                    if (lib.config.buttoncharacter_style == "default" || lib.config.buttoncharacter_style == "simple") {
                        if (lib.config.buttoncharacter_style == "simple") {
                            node.node.group.style.display = "none";
                        }
                        node.classList.add("newstyle");
                        node.node.name.dataset.nature = get.groupnature(get.bordergroup(infoitem));
                        node.node.group.dataset.nature = get.groupnature(get.bordergroup(infoitem), "raw");
                    }
                    node.node.name.style.top = "8px";
                    if (node.node.name.querySelectorAll("br").length >= 4) {
                        node.node.name.classList.add("long");
                        if (lib.config.buttoncharacter_style == "old") {
                            node.addEventListener("mouseenter", ui.click.buttonnameenter);
                            node.addEventListener("mouseleave", ui.click.buttonnameleave);
                        }
                    }
                    node.node.intro.innerHTML = lib.config.intro;
                    if (!noclick) {
                        lib.setIntro(node);
                    }
                    node.node.group.innerHTML = `<div>${get.cnNumber(seat, true)}号</div>`;
                    node.node.group.style.backgroundColor = get.translation(`${get.bordergroup(infoitem)}Color`);
                };
                node.refresh = func;
                node.refresh(node, item);

                node.link = _item;
                node.seatNumber = seat;
                node._customintro = uiintro => {
                    uiintro.add(`${get.translation(node._link)}(原${get.cnNumber(node.seatNumber, true)}号位)`);
                };
                return node;
            },
        },
        //什么均贫卡
        old_zhimeng: {
            audio: "zhimeng",
            trigger: { player: "phaseAfter" },
            filter(event, player) {
                return game.hasPlayer(target => {
                    return target != player && target.countCards("h") + player.countCards("h") != 0;
                });
            },
            direct: true,
            async content(event, trigger, player) {
                const {
                    result: { bool, targets },
                } = await player
                    .chooseTarget(get.prompt("old_zhimeng"), "与一名其他角色平分手牌", (card, player, target) => {
                        return target != player && target.countCards("h") + player.countCards("h") != 0;
                    })
                    .set("ai", target => {
                        const player = get.player();
                        const pvalue = -player
                            .getCards("h")
                            .map(card => get.value(card, player))
                            .reduce((p, c) => p + c, 0);
                        const tvalue =
                            -target
                                .getCards("h")
                                .map(card => get.value(card, target))
                                .reduce((p, c) => p + c, 0) * get.sgnAttitude(player, target);
                        return (pvalue + tvalue) / 2;
                    });
                if (!bool) return;
                const target = targets[0];
                player.logSkill("old_zhimeng", target);
                const lose_list = [];
                let cards = [];
                [player, target].forEach(current => {
                    const hs = current.getCards("h");
                    if (hs.length) {
                        cards.addArray(hs);
                        current.$throw(hs.length, 500);
                        game.log(current, "将", get.cnNumber(hs.length), "张牌置入了处理区");
                        lose_list.push([current, hs]);
                    }
                });
                await game
                    .loseAsync({
                        lose_list: lose_list,
                    })
                    .setContent("chooseToCompareLose");
                await game.delay();
                cards = cards.filterInD();
                const pcards = cards.randomGets(Math.ceil(cards.length / 2));
                const tcards = cards.removeArray(pcards);
                const list = [];
                if (pcards.length) {
                    list.push([player, pcards]);
                    game.log(player, "获得了", get.cnNumber(pcards.length), "张牌");
                }
                if (tcards.length) {
                    list.push([target, tcards]);
                    game.log(target, "获得了", get.cnNumber(tcards.length), "张牌");
                }
                game.loseAsync({
                    gain_list: list,
                    player: player,
                    animate: "draw",
                }).setContent("gaincardMultiple");
            },
            ai: {
                threaten: 4,
            },
        },
        //手杀界沮授
        old_xinjianying: {
            audio: "xinjianying",
            subfrequent: ["draw"],
            enable: "phaseUse",
            usable: 1,
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
                        player.when("phaseUseAfter").then(() => {
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
            content() {
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
                    direct: true,
                    trigger: { player: "phaseUseBegin" },
                    filter(event, player) {
                        return game.hasPlayer(current => current.hasSkill("old_sbanguo_mark")) && game.hasPlayer(current => !current.hasMark("old_sbanguo_marked") && current != player);
                    },
                    content() {
                        "step 0";
                        var targets = game.filterPlayer(current => current.hasSkill("old_sbanguo_mark"));
                        var prompt2 = targets.length == 1 ? "将" + get.translation(targets[0]) + "的“安国”交给一名未获得过“安国”的其他角色" : "选择一名有“安国”的角色，将该标记交给一名未获得过“安国”的其他角色";
                        player
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
                            .set("targets", targets);
                        "step 1";
                        if (result.bool) {
                            var targets = result.targets;
                            if (targets.length == 1) {
                                var target1 = game.filterPlayer(current => current.hasSkill("old_sbanguo_mark"))[0];
                                var target2 = targets[0];
                            } else {
                                var target1 = targets[0];
                                var target2 = targets[1];
                            }
                            player.logSkill("old_sbanguo_move", target2, false);
                            player.line2([target1, target2], "green");
                            var map = target1.additionalSkills;
                            for (var key in map) {
                                if (key.indexOf("old_sbanguo_") != 0) {
                                    continue;
                                }
                                var id = parseInt(key.slice(8));
                                target1.removeAdditionalSkill("old_sbanguo_" + id);
                                target2.addMark("old_sbanguo_mark", 1, false);
                                target2.addAdditionalSkill("old_sbanguo_" + id, "old_sbanguo_mark");
                                target2.addMark("old_sbanguo_marked", 1, false);
                            }
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
                    content() {
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
                    content() {
                        "step 0";
                        trigger.player.removeAdditionalSkill("old_sbanguo_" + player.playerid);
                        var num = 1 - trigger.player.hp;
                        if (num > 0) trigger.player.recover(num);
                        "step 1";
                        var hp = player.hp - 1,
                            maxhp = player.maxHp - 1;
                        if (hp > 0 && maxhp > 0) {
                            player
                                .chooseControl()
                                .set("prompt", "安国：请选择一项")
                                .set("choiceList", ["失去" + hp + "点体力，令" + get.translation(trigger.player) + "获得" + hp + "点护甲", "减" + maxhp + "点体力上限，令" + get.translation(trigger.player) + "获得" + maxhp + "点护甲"])
                                .set("ai", () => "选项一");
                        } else if (hp > 0) event._result = { control: "选项一" };
                        else if (maxhp > 0) event._result = { control: "选项二" };
                        else event.finish();
                        "step 2";
                        if (result.control == "选项一") {
                            var num = player.hp - 1;
                            if (num > 0) {
                                player.loseHp(num);
                                trigger.player.changeHujia(num);
                            }
                        } else {
                            var num = player.maxHp - 1;
                            if (num > 0) {
                                player.loseMaxHp(num);
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
                    const links =
                        cards.length == 1
                            ? cards
                            : await player
                                .chooseButton(["博鉴：请选择要分配的牌", cards], true)
                                .set("ai", button => {
                                    return get.value(button.link);
                                })
                                .forResultLinks();
                    const togive = links[0];
                    const { result } = await player.chooseTarget("选择获得" + get.translation(togive) + "的角色", true).set("ai", target => {
                        const player = get.player();
                        return get.attitude(player, target);
                    });
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
                    const control = colors.length == 1 ? colors[0] : await player.chooseControl(colors).set("prompt", "济危：请选择一个颜色").forResultControl();
                    let togive = player.getCards("h").filter(card => get.color(card) == control.slice(0, -1));
                    if (_status.connectMode) game.broadcastAll(() => (_status.noclearcountdown = true));
                    let given_map = [];
                    while (togive.length) {
                        const {
                            result: { bool, cards, targets },
                        } = await player.chooseCardTarget({
                            forced: true,
                            filterCard(card, player) {
                                return get.event("togive").includes(card) && !card.hasGaintag("olsujian_given");
                            },
                            selectCard: [1, Infinity],
                            position: "h",
                            filterTarget: lib.filter.notMe,
                            prompt: "济危：请选择要分配的卡牌和目标",
                            ai1(card) {
                                return !ui.selected.cards.length && card.name == "du" ? 1 : 0;
                            },
                            ai2(target) {
                                const player = get.event("player");
                                const card = ui.selected.cards[0];
                                if (card) return get.value(card, target) * get.attitude(player, target);
                                return 0;
                            },
                            togive: togive,
                        });
                        if (bool) {
                            togive.removeArray(cards);
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
                "step 1";
                var cards = player.getExpansions("old_jueyong");
                if (cards.length) player.loseToDiscardpile(cards);
                player.unmarkSkill("old_jueyong");
                player.loseHp();
                "step 2";
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
            trigger: {
                player: "phaseZhunbeiBegin",
            },
            direct: true,
            content() {
                "step 0";
                player.chooseTarget(get.prompt("old_yichong"), "选择一名其他角色并选择一个花色，获得其此花色的所有牌并令其获得“雀”标记", lib.filter.notMe).set("ai", function (target) {
                    var player = _status.event.player;
                    var att = get.attitude(player, target);
                    if (att > 0) return 0;
                    var getNum = function (player) {
                        var list = [];
                        for (var i of lib.suit) list.push(player.countCards("he", { suit: i }) + 3);
                        return list.sort((a, b) => b - a)[0];
                    };
                    return getNum(target) + target.countCards("h") / 10;
                });
                "step 1";
                if (result.bool) {
                    var target = result.targets[0];
                    player.logSkill("old_yichong", target);
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
                "step 2";
                var suit = result.control;
                event.suit = suit;
                player.chat(get.translation(suit + 2));
                game.log(player, "选择了", "#y" + get.translation(suit + 2));
                if (target.countCards("he", { suit: suit })) player.gain(target.getCards("he", { suit: suit }), target, "giveAuto");
                "step 3";
                var suit = event.suit;
                player.storage.old_yichong = suit;
                player.markSkill("old_yichong");
                var skill = "old_yichong_" + player.playerid;
                game.broadcastAll(lib.skill.old_yichong.initSkill, skill);
                game.broadcastAll(
                    function (player, suit) {
                        if (player.marks.old_yichong) player.marks.old_yichong.firstChild.innerHTML = get.translation(suit);
                    },
                    player,
                    suit
                );
                game.countPlayer(function (current) {
                    current.removeSkill("old_yichong_" + player.playerid);
                    if (current == target) target.addSkill("old_yichong_" + player.playerid);
                });
                player.addTempSkill("old_yichong_clear", { player: "phaseBegin" });
            },
            onremove: true,
            intro: {
                content: "拥有“雀”标记的角色得到$牌后，你获得之",
            },
            group: "old_yichong_gain",
            subSkill: {
                gain: {
                    audio: "yichong",
                    trigger: {
                        global: ["gainAfter", "loseAsyncAfter"],
                    },
                    filter(event, player) {
                        if (!player.storage.old_yichong) return false;
                        return game.hasPlayer(function (current) {
                            if (!event.getg(current).length || !current.hasSkill("old_yichong_" + player.playerid)) return false;
                            if (current.countMark("old_yichong_" + player.playerid) >= lib.skill.old_yichong.getLimit) return false;
                            return event.getg(current).some(card => get.suit(card, current) == player.storage.old_yichong && lib.filter.canBeGained(card, current, player));
                        });
                    },
                    forced: true,
                    content() {
                        var target = game.findPlayer(function (current) {
                            if (!trigger.getg(current).length || !current.hasSkill("old_yichong_" + player.playerid)) return false;
                            if (current.countMark("old_yichong_" + player.playerid) >= lib.skill.old_yichong.getLimit) return false;
                            return trigger.getg(current).some(card => get.suit(card, current) == player.storage.old_yichong && lib.filter.canBeGained(card, current, player));
                        });
                        var cards = trigger.getg(target).filter(card => get.suit(card, target) == player.storage.old_yichong && lib.filter.canBeGained(card, target, player));
                        var num = lib.skill.old_yichong.getLimit - target.countMark("old_yichong_" + player.playerid);
                        cards = cards.randomGets(num);
                        player.gain(cards, target, "giveAuto");
                        target.addMark("old_yichong_" + player.playerid, cards.length, false);
                    },
                    sourceSkill: "old_yichong",
                },
                clear: {
                    charlotte: true,
                    onremove(player) {
                        game.countPlayer(function (current) {
                            current.removeSkill("old_yichong_" + player.playerid);
                        });
                    },
                    sourceSkill: "old_yichong",
                },
            },
        },
        old_wufei: {
            audio: "wufei",
            trigger: {
                player: ["useCardToPlayered", "damageEnd"],
            },
            filter(event, player) {
                var target = game.findPlayer(current => current.hasSkill("old_yichong_" + player.playerid));
                if (!target) return false;
                if (event.name == "damage") return target.hp > 1 && target.hp > player.hp;
                return event.isFirstTarget && (event.card.name == "sha" || (get.type(event.card) == "trick" && get.tag(event.card, "damage")));
            },
            direct: true,
            content() {
                "step 0";
                var target = game.findPlayer(current => current.hasSkill("old_yichong_" + player.playerid));
                event.target = target;
                if (trigger.name == "damage") {
                    player.chooseBool(get.prompt("old_wufei", target), "令" + get.translation(target) + "受到1点无来源伤害").set("choice", get.damageEffect(target, player, player) > 0);
                } else {
                    player.logSkill("old_wufei", target);
                    player.addTempSkill("old_wufei_effect");
                    player.markAuto("old_wufei_effect", [trigger.card]);
                    game.log(target, "成为了", trigger.card, "的伤害来源");
                    event.finish();
                }
                "step 1";
                if (result.bool) {
                    player.logSkill("old_wufei", target);
                    target.damage("nosource");
                }
            },
            subSkill: {
                effect: {
                    charlotte: true,
                    trigger: {
                        source: "damageBefore",
                    },
                    filter(event, player) {
                        if (!event.card) return false;
                        return player.getStorage("old_wufei_effect").includes(event.card);
                    },
                    forced: true,
                    popup: false,
                    firstDo: true,
                    content() {
                        var target = game.findPlayer(current => current.hasSkill("old_yichong_" + player.playerid));
                        if (!target) delete trigger.source;
                        else trigger.source = target;
                    },
                    sub: true,
                    sourceSkill: "old_wufei",
                    _priority: 0,
                },
            },
            ai: {
                combo: "old_yichong",
            },
            _priority: 0,
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
            *content(event, map) {
                var player = map.player,
                    trigger = map.trigger;
                if (trigger.name != "phaseZhunbei") {
                    player.logSkill("old_guimou");
                    var result,
                        choiceList = ["惩罚期间使用牌最少的角色", "惩罚期间弃置牌最少的角色", "惩罚期间得到牌最少的角色"];
                    if (trigger.name != "phase" || game.phaseNumber == 0) result = { index: get.rand(0, 2) };
                    else
                        result = yield player
                            .chooseControl()
                            .set("choiceList", choiceList)
                            .set("ai", () => get.rand(0, 2));
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
                    var result = yield player
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
                        .set("targets", targets);
                    if (result.bool) {
                        var target = result.targets[0];
                        player.logSkill("old_guimou", target);
                        player.addExpose(0.3);
                        var result2 = yield player.choosePlayerCard(target, "h", "visible", "<div class='text center'>选择其中至多三张牌，然后你可以将其中至多两张牌交给另一名其他角色，然后弃置剩余的牌</div>", [1, 3], true).set("ai", button => get.value(button.link));
                        if (result2.bool) {
                            var cards = result2.links.slice();
                            var result3;
                            if (!game.hasPlayer(targetx => targetx != player && targetx != target)) result3 = { bool: false };
                            else
                                result3 = yield player
                                    .chooseCardButton("是否将其中至多两张牌交给另一名其他角色", cards, [1, Math.min(2, cards.length)])
                                    .set("ai", button => {
                                        var player = _status.event.player;
                                        if (!game.hasPlayer(target => target != player && target != _status.event.target && get.attitude(player, target) > 0)) return 0;
                                        return get.value(button.link, _status.event.player);
                                    })
                                    .set("target", target);
                            if (result3.bool) {
                                var result4 = yield player
                                    .chooseTarget("请选择获得" + get.translation(result3.links) + "的目标", (card, player, target) => {
                                        return target != player && target != _status.event.target;
                                    })
                                    .set("ai", target => get.attitude(_status.event.player, target))
                                    .set("target", target);
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
                "step 1";
                if (result.bool) {
                    var target = result.targets[0];
                    player.logSkill("oldx_jiebing", target);
                    if (target.ai.shown > 0) player.addExpose(0.15);
                    var cards = target.getGainableCards(player, "he").randomGets(2);
                    event.cards = cards;
                    player.gain(target, cards, "give", "bySelf");
                    player.showCards(cards, "借兵");
                } else event.finish();
                "step 2";
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
                "step 1";
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
        //李昭焦伯
        old_mbzuoyou: {
            audio: "mbzuoyou",
            enable: "phaseUse",
            usable: 1,
            zhuanhuanji: true,
            filterTarget(card, player, target) {
                if (player.storage.mbzuoyou) return target.countCards("he");
                return true;
            },
            async content(event, trigger, player) {
                const storage = player.storage.old_mbzuoyou,
                    target = event.target;
                if (event.name === "old_mbzuoyou") player.changeZhuanhuanji("old_mbzuoyou");
                if (!storage) {
                    await target.draw(3);
                    await target.chooseToDiscard(2, true, "h");
                } else {
                    await target.changeHujia(1, null, true);
                }
            },
            mark: true,
            marktext: "☯",
            intro: {
                content(storage, player) {
                    if (!storage) return "转换技。出牌阶段限一次，你可以令一名角色摸三张牌，然后其弃置两张手牌。";
                    return "转换技。出牌阶段限一次，你可以令一名角色获得1点护甲。";
                },
            },
            ai: {
                order(item, player) {
                    if (
                        player.storage.old_mbzuoyou &&
                        game.hasPlayer(current => {
                            return current !== player && get.effect(current, "old_mbzuoyou", player, player) > 0;
                        })
                    )
                        return get.order({ name: "zengbin" }) + 0.1;
                    return 2;
                },
                result: {
                    target(player, target) {
                        let eff = 0;
                        if (player.storage.old_mbzuoyou) eff = target.hujia < 5 ? 1 : 0;
                        else eff = 1;
                        if (target === player && player.hasSkill("old_mbshishou")) eff /= 10;
                        return eff;
                    },
                },
            },
        },
        old_mbshishou: {
            audio: "mbshishou",
            trigger: { player: "useSkillAfter" },
            filter(event, player) {
                return event.skill === "old_mbzuoyou" && !event.targets.includes(player);
            },
            forced: true,
            async content(event, trigger, player) {
                await lib.skill.old_mbzuoyou.content(
                    {
                        target: player,
                    },
                    {},
                    player
                );
            },
            ai: {
                combo: "old_mbzuoyou",
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
                "step 1";
                if (player.getCards("h").includes(card) && get.type(card, null, player) == "equip" && player.hasUseTarget(card)) player.chooseUseTarget(card, true, "nopopup");
                "step 2";
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
                "step 3";
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
                    .chooseToUse(function (card, player, event) {
                        if (get.name(card) != "sha") {
                            return false;
                        }
                        return lib.filter.filterCard.apply(this, arguments);
                    }, "引裾：对" + get.translation(player) + "使用一张杀，或跳过下回合的出牌阶段和弃牌阶段")
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
                "step 1";
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
                "step 1";
                var hs = player.getCards("he");
                if (!hs.length) event.finish();
                else if (hs.length <= 2) event._result = { bool: true, cards: hs };
                else player.chooseCard("he", true, 2, "选择两张牌洗入牌堆");
                "step 2";
                if (result.bool) {
                    player.$throw(result.cards.length, 1000);
                    player.lose(result.cards, ui.cardPile).insert_index = function () {
                        return ui.cardPile.childNodes[get.rand(0, game.players.length * 2 - 2)];
                    };
                    player.markAuto("old_yizhu", result.cards);
                } else event.finish();
                "step 3";
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
                "step 1";
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
                            return target == get.event("aiTargets")[ui.selected.targets.length] ? 10 : 0;
                        })
                        .set("aiTargets", lib.skill.old_mbhuiyao.getUnrealDamageTargets(player, [game.filterPlayer(i => i != player), game.filterPlayer()], true));
                "step 2";
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
                "step 1";
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
                "step 2";
                if (result.index == 1) {
                    target.recover();
                    event.finish();
                } else target.draw(Math.max(lib.skill.old_mbquesong.getNum(target), 1));
                "step 3";
                target.link(false);
                "step 4";
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
                        const player = get.event("player");
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
                        if (!get.tag(event.card, "damage")) return false;
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
                                    if (get.event("used").includes(target)) return 0;
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
                        if (get.type(event.card) == "equip") return false;
                        if (!event.targets || event.targets.length != 1) return false;
                        if (!event.targets[0].hasMark("old_mbjiejian_mark")) return false;
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
                        const num = get.event("num");
                        return target.countCards("he") >= num;
                    })
                    .set("num", num)
                    .set("color", get.color(trigger.card))
                    .set("ai", function (target) {
                        let player = get.player(),
                            eff = get.effect(target, { name: "guohe_copy2" }, player, player);
                        const color = get.event("color");
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
                        if (get.position(button.link) == "e" && get.color(button.link) == get.event("color")) return (val *= 2);
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
            logAudio: index => (typeof index === "number" ? "old_mbzhuguo" + index + ".mp3" : 2),
            usable: 1,
            enable: "phaseUse",
            filterTarget: true,
            async content(event, trigger, player) {
                const target = event.targets[0];
                const num = target.maxHp - target.countCards("h");
                const isMax = target.isMaxHandcard();
                if (num > 0) {
                    await target.drawTo(target.maxHp);
                } else if (num < 0 && target.countDiscardableCards(target, "h") > 0) {
                    await target.chooseToDiscard("h", -num, true);
                }
                const isDraw = target.hasHistory("gain", evt => evt.getParent().name == "draw" && evt.getParent(2) == event);
                if (!isDraw && target.isDamaged()) {
                    await target.recover();
                }
                //按描述来说是因此成为，所以必须得是调整前不是最多，而且还必须要有摸牌且最后是最多，共三个条件（官方实际的结算也是这么回事）
                if (!isMax && isDraw && target.isMaxHandcard()) {
                    const result = await player
                        .chooseTarget("助国：选择一名其他角色，令" + get.translation(target) + "选择是否对其使用一张无距离限制的【杀】", (card, player, targetx) => ![player, get.event("target")].includes(targetx))
                        .set("ai", targetz => {
                            let player = get.player(),
                                target = get.event("target");
                            return get.effect(targetz, { name: "sha" }, target, player);
                        })
                        .set("target", target)
                        .forResult();
                    if (result.bool) {
                        player.logSkill("old_mbzhuguo", [result.targets[0]], null, null, [3]);
                        await target
                            .chooseToUse(function (card, player, event) {
                                return get.name(card, player) === "sha" && lib.filter.filterCard.apply(this, arguments);
                            }, `助国：是否对${get.translation(result.targets[0])}使用【杀】？`)
                            .set("filterTarget", function (card, player, target) {
                                const sourcex = get.event("sourcex");
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
                            source = get.event("source");
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
                            "step 1";
                            player.markAuto("old_jiaohua", [lib.skill.old_jiaohua_backup.type]);
                            "step 2";
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
                            if (!player.storage.old_sbliegong_blocker) return;
                            const suit = get.suit(card);
                            if (suit == "none") return;
                            let evt = _status.event;
                            if (evt.name != "chooseToUse") evt = evt.getParent("chooseToUse");
                            if (!evt || !evt.respondTo || evt.respondTo[1].name != "sha") return;
                            if (player.storage.old_sbliegong_blocker.includes(suit)) return false;
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
        //谋黄月英
        old_sbqicai: {
            mod: {
                targetInRange(card, player, target) {
                    if (get.type2(card) == "trick") return true;
                },
            },
            locked: false,
            getLimit: 3,
            audio: "sbqicai",
            enable: "phaseUse",
            onChooseToUse(event) {
                if (!event.old_sbqicai && !game.online) {
                    const player = get.player();
                    const cards = Array.from(ui.discardPile.childNodes).filter(card => lib.skill.old_sbqicai.filterCardx(card, player));
                    event.set("old_sbqicai", cards);
                }
            },
            filter(event, player) {
                return player.countCards("h", card => lib.skill.old_sbqicai.filterCardx(card, player)) || (event.old_sbqicai && event.old_sbqicai.length);
            },
            filterCardx(card, player) {
                if (player.getStorage("old_sbqicai").includes(card.name)) return false;
                return get.type(card) == "equip" && game.hasPlayer(target => target != player && target.hasEmptySlot(get.subtype(card)));
            },
            usable: 1,
            chooseButton: {
                dialog(event, player) {
                    const list1 = player.getCards("h", card => lib.skill.old_sbqicai.filterCardx(card, player));
                    const list2 = event.old_sbqicai;
                    var dialog = ui.create.dialog('###奇才###<div class="text center">请选择一张装备牌置入一名其他角色的装备区</div>');
                    if (list1.length) {
                        dialog.add('<div class="text center">手牌区</div>');
                        dialog.add(list1);
                    }
                    if (list2.length) {
                        dialog.add('<div class="text center">弃牌堆</div>');
                        dialog.add(list2);
                        if (list1.length) dialog.classList.add("fullheight");
                    }
                    return dialog;
                },
                check(button) {
                    var player = _status.event.player;
                    var num = get.value(button.link);
                    if (!game.hasPlayer(target => target != player && target.hasEmptySlot(get.subtype(button.link)) && get.attitude(player, target) > 0)) num = 1 / (get.value(button.link) || 0.5);
                    if (get.owner(button.link)) return num;
                    return num * 5;
                },
                backup(links, player) {
                    return {
                        audio: "sbqicai",
                        card: links[0],
                        filterCard(card, player) {
                            var cardx = lib.skill.old_sbqicai_backup.card;
                            if (get.owner(cardx)) return card == cardx;
                            return false;
                        },
                        selectCard: -1,
                        filterTarget(card, player, target) {
                            return target != player && target.canEquip(lib.skill.old_sbqicai_backup.card);
                        },
                        check: () => 1,
                        discard: false,
                        lose: false,
                        prepare(cards, player, targets) {
                            if (cards && cards.length) player.$give(cards, targets[0], false);
                        },
                        content() {
                            if (!cards || !cards.length) {
                                cards = [lib.skill.old_sbqicai_backup.card];
                                target.$gain2(cards);
                                game.delayx();
                            }
                            target.equip(cards[0]);
                            player.addSkill("old_sbqicai_gain");
                            lib.skill.old_sbqicai.updateCounter(player, target, 0);
                        },
                        ai: {
                            result: {
                                target(player, target) {
                                    var att = get.attitude(player, target);
                                    if (att > 0) return 1;
                                    if (att < 0) return -3;
                                    return 0;
                                },
                            },
                        },
                    };
                },
                prompt(links, player) {
                    return "请选择置入" + get.translation(links) + "的角色";
                },
            },
            updateCounter(player, target, num) {
                const skill = `old_sbqicai_${player.playerid}`;
                game.broadcastAll(lib.skill.old_sbqicai.initSkill, skill);
                if (!target.hasSkill(skill)) target.addSkill(skill);
                if (num == 0) target.clearMark(skill, false);
                else if (num > 0) target.addMark(skill, num, false);
                if (target.countMark(skill) >= lib.skill.old_sbqicai.getLimit) target.removeSkill(skill);
                if (!_status.postReconnect.old_sbqicai) {
                    _status.postReconnect.old_sbqicai = [lib.skill.old_sbqicai.initSkill, []];
                }
                _status.postReconnect.old_sbqicai[1].add(skill);
            },
            initSkill: skill => {
                if (!lib.skill[skill]) {
                    lib.skill[skill] = {
                        onremove: true,
                        mark: true,
                        marktext: "奇",
                        intro: {
                            markcount(storage) {
                                return (storage || 0).toString();
                            },
                            content(storage) {
                                return "已被掠夺" + get.cnNumber(storage || 0) + "张普通锦囊牌";
                            },
                        },
                    };
                    lib.translate[skill] = "奇才";
                    lib.translate[skill + "_bg"] = "奇";
                }
            },
            ai: {
                order: 7,
                result: {
                    player(player) {
                        if (!game.hasPlayer(target => target != player && target.hasEmptySlot(2) && get.attitude(player, target) != 0)) return 0;
                        return 1;
                    },
                },
            },
            marktext: "才",
            intro: { content: "已使用$发动过此技能" },
            subSkill: {
                gain: {
                    audio: "sbqicai",
                    trigger: { global: ["gainAfter", "loseAsyncAfter"] },
                    filter(event, player) {
                        return game.hasPlayer(function (current) {
                            if (!event.getg(current).length || !current.hasSkill("old_sbqicai_" + player.playerid)) return false;
                            if (current.countMark("old_sbqicai_" + player.playerid) >= lib.skill.old_sbqicai.getLimit) return false;
                            return event.getg(current).some(card => get.type(card) == "trick" && lib.filter.canBeGained(card, current, player));
                        });
                    },
                    forced: true,
                    direct: true,
                    charlotte: true,
                    content() {
                        "step 0";
                        if (!event.checkedTargets) event.checkedTargets = [];
                        var target = game.findPlayer(function (current) {
                            if (!trigger.getg(current).length || !current.hasSkill("old_sbqicai_" + player.playerid)) return false;
                            if (event.checkedTargets.includes(current)) return false;
                            if (current.countMark("old_sbqicai_" + player.playerid) >= lib.skill.old_sbqicai.getLimit) return false;
                            return trigger.getg(current).some(card => get.type(card) == "trick" && lib.filter.canBeGained(card, current, player));
                        });
                        if (!target) {
                            event.finish();
                            return;
                        }
                        event.target = target;
                        player.logSkill("old_sbqicai_gain", target);
                        event.checkedTargets.add(target);
                        var cards = trigger.getg(target).filter(card => get.type(card) == "trick" && lib.filter.canBeGained(card, target, player));
                        if (cards.length <= lib.skill.old_sbqicai.getLimit - target.countMark("old_sbqicai_" + player.playerid)) event._result = { bool: true, links: cards };
                        else {
                            var num = lib.skill.old_sbqicai.getLimit - target.countMark("old_sbqicai_" + player.playerid);
                            target
                                .chooseButton(["奇才：将其中" + get.cnNumber(num) + "张牌交给" + get.translation(player), cards], num, true)
                                .set("ai", function (button) {
                                    return get.value(button.link) * get.sgn(_status.event.att);
                                })
                                .set("att", get.attitude(target, player));
                        }
                        "step 1";
                        if (result.bool) {
                            game.delaye(0.5);
                            target.give(result.links, player);
                            lib.skill.old_sbqicai.updateCounter(player, target, result.links.length);
                        }
                        event.goto(0);
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
                        return get.event("choice");
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
                "step 1";
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
                "step 1";
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
                "step 1";
                if (result.bool) {
                    player.logSkill("old_sbfenwei", result.targets);
                    player.awakenSkill("old_sbfenwei");
                    trigger.getParent().excluded.addArray(result.targets);
                    event.num = Math.min(4, result.targets.length);
                } else event.finish();
                "step 2";
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
                return player.countCards("he", card => lib.skill.old_sbtianxiang.filterCard(card, player)) && game.hasPlayer(target => lib.skill.old_sbtianxiang.filterTarget(null, player, target));
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
                    content() {
                        var num = 0;
                        game.countPlayer(target => {
                            var skills = target.getSkills().filter(skill => skill.indexOf("old_sbtianxiang_") == 0);
                            target.removeSkill(skills);
                            num += skills.length;
                        });
                        num += 3;
                        player.draw(num);
                    },
                },
                effect: {
                    trigger: { player: "damageBegin3" },
                    filter(event, player) {
                        return game.hasPlayer(target => target.getSkills().some(skill => skill.indexOf("old_sbtianxiang_") == 0));
                    },
                    direct: true,
                    content() {
                        "step 0";
                        player
                            .chooseTarget(get.prompt("old_sbtianxiang"), "移去一名角色的“天香”标记并执行相应效果", function (card, player, target) {
                                return target.getSkills().some(skill => skill.indexOf("old_sbtianxiang_") == 0);
                            })
                            .set("ai", target => {
                                var player = _status.event.player;
                                return -get.attitude(player, target) * target.getSkills().filter(skill => skill.indexOf("old_sbtianxiang_") == 0).length;
                            });
                        "step 1";
                        if (result.bool) {
                            var target = result.targets[0];
                            event.target = target;
                            player.logSkill("old_sbtianxiang", target);
                            var skills = target.getSkills().filter(skill => skill.indexOf("old_sbtianxiang_") == 0);
                            target.removeSkill(skills);
                            if (skills.includes("old_sbtianxiang_heart")) {
                                target.damage(trigger.source ? trigger.source : "nosource");
                                trigger.cancel();
                            }
                            if (skills.includes("old_sbtianxiang_diamond")) {
                                var cards = target.getCards("he");
                                if (!cards.length) event.finish();
                                else if (cards.length <= 2) event._result = { bool: true, cards: cards };
                                else target.chooseCard("he", 2, "天香：交给" + get.translation(player) + "两张牌", true);
                            } else event.finish();
                        } else event.finish();
                        "step 2";
                        if (result.bool) player.gain(result.cards, target, "giveAuto");
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
                if (get.suit(card) != "diamond") return false;
                var mod = game.checkMod(ui.selected.cards[0], player, "unchanged", "cardEnabled2", player);
                if (!mod) return false;
                return true;
            },
            selectCard: [0, 1],
            filterTarget(card, player, target) {
                if (!ui.selected.cards.length) {
                    if (target.hasJudge("lebu")) return true;
                    return false;
                }
                if (player == target) return false;
                return player.canUse(get.autoViewAs({ name: "lebu" }, ui.selected.cards), target);
            },
            complexSelect: true,
            check(card) {
                return 7 - get.value(card);
            },
            content() {
                "step 0";
                if (target.hasJudge("lebu")) {
                    target.discard(target.getJudge("lebu"));
                } else {
                    player.useCard({ name: "lebu" }, target, cards).audio = false;
                }
                "step 1";
                player.draw(2);
                player.chooseToDiscard("h", true);
            },
            ai: {
                result: {
                    target(player, target) {
                        if (target.hasJudge("lebu")) return -get.effect(target, { name: "lebu" }, player, target);
                        return get.effect(target, { name: "lebu" }, player, target);
                    },
                },
                order: 9,
            },
        },
        //谋孙策
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
                player.awakenSkill("old_sbhunzi");
                player.loseMaxHp();
                "step 1";
                player.changeHujia(2, null, true);
                "step 2";
                player.draw(3);
                "step 3";
                player.addSkills(["sbyingzi", "gzyinghun"]);
            },
            ai: {
                threaten(player, target) {
                    if (target.hp == 1) return 2;
                    return 0.5;
                },
                maixie: true,
                effect: {
                    target(card, player, target) {
                        if (!target.hasFriend() || target.hp > 1) return;
                        if (get.tag(card, "damage") == 1 && ((target.hasZhuSkill("sbzhiba") && game.countPlayer(current => current != target && current.group == "wu")) || player.countCards("hs", card => player.canSaveCard(card, target)) + target.countCards("hs", card => target.canSaveCard(card, target)) > 0) && !target.isTurnedOver() && _status.currentPhase != target && get.distance(_status.currentPhase, target, "absolute") <= 3) return [0.5, 1];
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
                        "step 1";
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
                    sub: true,
                    sourceSkill: "old_sbhuoji",
                    "_priority": 0,
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
                    sub: true,
                    sourceSkill: "old_sbhuoji",
                    "_priority": 0,
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
            *content(event, map) {
                var player = map.player;
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
                var result = yield player
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
                    });
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
                "step 1";
                var cards2 = get.cards(num);
                player.$gain2(cards2, false);
                game.log(player, "将", cards2, "置于了武将牌上");
                player.loseToSpecial(cards2, "old_sbguanxing").visible = true;
                player.markSkill("old_sbguanxing");
                "step 2";
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
                "step 3";
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
                        "step 1";
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
                    sub: true,
                    sourceSkill: "oldx_sbhuoji",
                    "_priority": 0,
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
            *content(event, map) {
                var player = map.player,
                    storage = player.storage.oldx_sbkanpo;
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
                var result = yield player
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
                    .set("sum", sum);
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
                "step 1";
                if (num) {
                    var cards2 = get.cards(num);
                    player.$gain2(cards2, false);
                    game.log(player, "将", cards2, "置于了武将牌上");
                    player.loseToSpecial(cards2, "oldx_sbguanxing").visible = true;
                    player.markSkill("oldx_sbguanxing");
                }
                "step 2";
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
                "step 3";
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
                "step 1";
                if (result.bool) {
                    var targets = result.targets;
                    targets.sortBySeat();
                    event.targets = targets;
                    player.logSkill("old_sbzaiqi", targets);
                    player.removeCharge(targets.length);
                } else event.finish();
                "step 2";
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
                "step 3";
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
                "step 1";
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
            *content(event, map) {
                var player = map.player;
                var result = yield player
                    .chooseTarget(get.prompt("old_sbwusheng"), "选择一名非主公的其他角色，本阶段对其使用【杀】无距离和次数限制，使用【杀】指定其为目标后摸一张牌，对其使用五张【杀】后不能对其使用【杀】", (card, player, target) => {
                        return target != player && !target.isZhu2();
                    })
                    .set("ai", target => {
                        var player = _status.event.player;
                        return get.effect(target, { name: "sha" }, player, player);
                    });
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
                if (event.type == "wuxie" || !player.countCharge()) return false;
                var marked = player.hasSkill("old_sblongdan_mark", null, null, false);
                for (var name of lib.inpile) {
                    if (!marked && name != "sha" && name != "shan") continue;
                    if (get.type(name) != "basic") continue;
                    if (player.hasCard(lib.skill.old_sblongdan.getFilter(name, player), "hs")) {
                        if (event.filterCard(get.autoViewAs({ name }, "unsure"), player, event)) return true;
                        if (marked && name == "sha") {
                            for (var nature of lib.inpile_nature) {
                                if (event.filterCard(get.autoViewAs({ name, nature }, "unsure"), player, event)) return true;
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
                        if (!marked && name != "sha" && name != "shan") continue;
                        if (get.type(name) != "basic") continue;
                        if (player.hasCard(lib.skill.old_sblongdan.getFilter(name, player), "hs")) {
                            if (event.filterCard(get.autoViewAs({ name }, "unsure"), player, event)) list.push(["基本", "", name]);
                            if (marked && name == "sha") {
                                for (var nature of lib.inpile_nature) {
                                    if (event.filterCard(get.autoViewAs({ name, nature }, "unsure"), player, event)) list.push(["基本", "", name, nature]);
                                }
                            }
                        }
                    }
                    return ui.create.dialog("龙胆", [list, "vcard"], "hidden");
                },
                check(button) {
                    if (_status.event.getParent().type != "phase") return 1;
                    var player = _status.event.player,
                        card = { name: button.link[2], nature: button.link[3] };
                    if (card.name == "jiu" && Math.min(player.countMark("charge"), player.countCards("h", { type: "basic" })) < 2) return 0;
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
                    if (marked) return "将一张基本牌当做" + get.translation(card) + "使用";
                    return "将一张" + (card.name == "sha" ? "闪" : "杀") + "当做" + get.translation(card) + "使用";
                },
            },
            hiddenCard(player, name) {
                if (get.type(name) != "basic" || !player.countCharge()) return false;
                var marked = player.hasSkill("old_sblongdan_mark", null, null, false);
                if (!marked && name != "sha" && name != "shan") return false;
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
                        if (_status.event.dying) return get.attitude(player, _status.event.dying);
                        return 1;
                    },
                },
            },
            getFilter(name, player) {
                if (!player.hasSkill("old_sblongdan_mark", null, null, false)) {
                    if (name == "sha") return { name: "shan" };
                    if (name == "shan") return { name: "sha" };
                    return () => false;
                }
                return { type: "basic" };
            },
            group: "old_sblongdan_charge",
            onremove(player) {
                player.removeSkill("old_sblongdan_mark");
            },
            subSkill: {
                backup: { audio: "sblongdan" },
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
                        if (!player.countCharge(true)) return false;
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
            trigger: { player: "phaseZhunbeiBegin" },
            direct: true,
            content() {
                "step 0";
                player.chooseTarget(lib.filter.notMe, get.prompt("old_sbjizhu"), "和一名其他角色进行“协力”").set("ai", function (target) {
                    return get.threaten(target) * Math.sqrt(1 + target.countCards("h")) * (target.isTurnedOver() || target.hasJudge("lebu") ? 0.1 : 1);
                });
                "step 1";
                if (result.bool) {
                    var target = result.targets[0];
                    player.logSkill("old_sbjizhu", target);
                    player.chooseCooperationFor(target, "old_sbjizhu").set("ai", function (button) {
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
                    });
                    player.addAdditionalSkill("cooperation", "old_sbjizhu_effect");
                } else event.finish();
                "step 2";
                game.delayx();
            },
            subSkill: {
                effect: {
                    audio: "sbjizhu",
                    charlotte: true,
                    trigger: { global: "phaseJieshuBegin" },
                    forced: true,
                    logTarget: "player",
                    filter(event, player) {
                        return player.checkCooperationStatus(event.player, "old_sbjizhu") && player.hasSkill("old_sblongdan", null, null, false);
                    },
                    content() {
                        game.log(player, "和", trigger.player, "的协力成功");
                        player.addTempSkill("old_sblongdan_mark", { player: "phaseJieshuBegin" });
                        game.delayx();
                    },
                },
            },
            derivation: "old_sblongdan_shabi",
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
                if (player.storage[event.name] && player.storage[event.name][target.playerid]) delete player.storage[event.name][target.playerid];
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
                        if (evt[mark]) break;
                        if (typeof skill == "string") {
                            if (evt.getParent(2).name == skill || evt.getParent(3).name == skill) num += evt.cards2.length;
                        } else {
                            var evtx = evt.getParent(),
                                player = skill;
                            if (evtx.name == "gain") {
                                var cards = evtx.cards;
                                if (evtx.player == player && cards.length > 0) num += cards.length;
                            } else if (evtx.name == "loseAsync") {
                                if (evtx.type != "gain" || evtx.giver) return false;
                                var cards = evtx.getl(current).cards2;
                                var cardsx = evtx.getg(player);
                                if (cardsx.length > 0) num += cardsx.length;
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
                    if (!storage || get.is.empty(storage)) return "未得到过牌";
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
                    audio: "old_sbxuanhuo",
                    trigger: {
                        global: ["gainAfter", "loseAsyncAfter"],
                    },
                    filter(event, player, name, target) {
                        const evt = event.getParent("phaseDraw");
                        if (evt && evt.name == "phaseDraw") return false;
                        if (!event.getg(target).length || !target.hasMark("old_sbxuanhuo_mark")) return false;
                        if (evt && evt.player == target) return false;
                        if (lib.skill.old_sbxuanhuo.getNum(target, "old_sbxuanhuo_rob", "old_sbxuanhuo_mark") >= 5) return false;
                        return target.hasCard(card => lib.filter.canBeGained(card, target, player), "he");
                    },
                    getIndex(event, player) {
                        const evt = event.getParent("phaseDraw");
                        if (evt && evt.name == "phaseDraw") return false;
                        return game
                            .filterPlayer(current => {
                                if (!event.getg(current).length || !current.hasMark("old_sbxuanhuo_mark")) return false;
                                if (evt && evt.player == current) return false;
                                if (lib.skill.old_sbxuanhuo.getNum(current, "old_sbxuanhuo_rob", "old_sbxuanhuo_mark") >= 5) return false;
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
                            if (!player.storage.old_sbxuanhuo) player.storage.old_sbxuanhuo = {};
                            player.storage.old_sbxuanhuo[target.playerid] = lib.skill.old_sbxuanhuo.getNum(target, "old_sbxuanhuo_rob", "old_sbxuanhuo_mark");
                            player.markSkill("old_sbxuanhuo");
                        }
                    },
                },
            },
        },
        old_sbenyuan: {
            audio: "sbenyuan",
            forced: true,
            direct: true,
            trigger: { player: "phaseZhunbeiBegin" },
            filter(event, player) {
                return game.hasPlayer(current => current.hasMark("old_sbxuanhuo_mark"));
            },
            content() {
                "step 0";
                var targets = game.filterPlayer(current => current.hasMark("old_sbxuanhuo_mark"));
                event.targets = targets;
                "step 1";
                var target = targets.shift();
                event.target = target;
                player.logSkill("old_sbenyuan", target);
                target.removeMark("old_sbxuanhuo_mark", target.countMark("old_sbxuanhuo_mark"));
                game.players.forEach(current => {
                    var storage = current.storage.old_sbxuanhuo;
                    if (storage && storage[target.playerid]) delete storage[target.playerid];
                    if (storage && get.is.empty(storage)) {
                        delete current.storage.old_sbxuanhuo;
                        current.unmarkSkill("old_sbxuanhuo");
                    }
                });
                var num = lib.skill.old_sbxuanhuo.getNum(target, player);
                if (num >= 3) {
                    var cards = player.getCards("he");
                    if (!cards.length) event._result = { bool: false };
                    else if (cards.length <= 3) event._result = { bool: true, cards: cards };
                    else player.chooseCard("恩怨：交给" + get.translation(target) + "两张牌", true, 2, "he");
                } else {
                    target.loseHp();
                    player.recover();
                    event.goto(3);
                }
                "step 2";
                if (result.bool) player.give(result.cards, target);
                "step 3";
                if (targets.length) event.goto(1);
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
                "step 1";
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
                "step 1";
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
                const control = await target
                    .chooseControl(controls)
                    .set("choiceList", [`令所有攻击范围内含有你的角色依次弃置两张牌（${get.translation(targets)}）`, `你摸等同于攻击范围内含有你的角色数+2的牌（${get.cnNumber(count)}张牌）`, `背水！令${get.translation(player)}的〖解烦〗失效直到其杀死一名角色，然后你依次执行上述所有选项`])
                    .set("ai", () => {
                        return get.event("choice");
                    })
                    .set(
                        "choice",
                        (() => {
                            const eff1 = targets
                                .map(current => {
                                    let position = "h";
                                    if (!current.countCards("h")) position += "e";
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
                            )
                                return "背水！";
                            if (eff1 > 3 * eff2) return "选项一";
                            return "选项二";
                        })()
                    )
                    .forResultControl();
                game.log(target, "选择了", "#g" + control);
                if (control === "背水！") {
                    player.tempBanSkill("old_sbjiefan", { source: "die" });
                }
                if (control !== "选项二") {
                    for (const current of targets) {
                        target.line(current, "thunder");
                        await current.chooseToDiscard("解烦：请弃置一张牌", "he", true);
                    }
                }
                if (control !== "选项一") {
                    await target.draw(count);
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
        //谋曹丕
        old_sbxingshang: {
            getLimit: 9,
            getList: [
                {
                    cost: 2,
                    prompt: () => "令一名角色复原武将牌",
                    filter: () => game.hasPlayer(target => target.isLinked() || target.isTurnedOver()),
                    filterTarget: (card, player, target) => target.isLinked() || target.isTurnedOver(),
                    async content(player, target) {
                        if (target.isLinked()) await target.link(false);
                        if (target.isTurnedOver()) await target.turnOver(false);
                    },
                    ai: {
                        result: {
                            target(player, target) {
                                let res = 0;
                                if (target.isLinked()) res = 0.3;
                                if (target.isTurnedOver()) res += 3.5 * get.threaten(target, player);
                                return res;
                            },
                        },
                    },
                },
                {
                    cost: 2,
                    prompt: () => "令一名角色摸" + get.cnNumber(Math.min(5, Math.max(2, game.dead.length))) + "张牌",
                    filter: () => true,
                    filterTarget: true,
                    async content(player, target) {
                        await target.draw(Math.min(5, Math.max(2, game.dead.length)));
                    },
                    ai: {
                        result: {
                            target(player, target) {
                                return Math.min(5, Math.max(2, game.dead.length));
                            },
                        },
                    },
                },
                {
                    cost: 5,
                    prompt: () => "令一名体力上限小于10的角色回复1点体力，增加1点体力上限，随机恢复一个废除的装备栏",
                    filter: () => game.hasPlayer(target => target.maxHp < 10),
                    filterTarget: true,
                    async content(player, target) {
                        await target.recover();
                        await target.gainMaxHp();
                        let list = Array.from({ length: 13 }).map((_, i) => "equip" + parseFloat(i + 1));
                        list = list.filter(i => target.hasDisabledSlot(i));
                        if (list.length) await target.enableEquip(list.randomGet());
                    },
                    ai: {
                        result: {
                            target(player, target) {
                                let res = 0.2;
                                if (target.isHealthy()) res += 0.4;
                                if (
                                    Array.from({ length: 5 })
                                        .map((_, i) => "equip" + parseFloat(i + 1))
                                        .some(i => target.hasDisabledSlot(i))
                                )
                                    res += 0.3;
                                return res + get.recoverEffect(target, target, target) / 16;
                            },
                        },
                    },
                },
                {
                    cost: 5,
                    prompt: () => "获得一名已阵亡角色的武将牌上的所有技能，然后失去〖行殇〗〖放逐〗〖颂威〗",
                    filter: () => game.dead.some(target => target.getStockSkills(true, true).some(i => get.info(i) && !get.info(i).charlotte)),
                    filterTarget(card, player, target) {
                        if (!target.isDead()) return false;
                        return target.getStockSkills(true, true).some(i => get.info(i) && !get.info(i).charlotte);
                    },
                    deadTarget: true,
                    async content(player, target) {
                        await player.changeSkills(
                            target.getStockSkills(true, true).filter(i => get.info(i) && !get.info(i).charlotte),
                            ["old_sbxingshang", "old_sbfangzhu", "old_sbsongwei"]
                        );
                    },
                    ai: {
                        result: {
                            player(player, target) {
                                return ["name", "name1", "name2"].reduce((sum, name) => {
                                    if (!target[name] || !lib.character[target[name]] || (name == "name1" && target.name1 == target.name)) return sum;
                                    return sum + get.rank(target[name], true);
                                }, 0);
                            },
                        },
                    },
                },
            ],
            marktext: "颂",
            intro: {
                name: "颂",
                content: "mark",
            },
            audio: "ext:星之梦/audio/skill:2",
            enable: "phaseUse",
            filter(event, player) {
                return get.info("old_sbxingshang").getList.some(effect => {
                    return player.countMark("old_sbxingshang") >= effect.cost && effect.filter(player);
                });
            },
            usable: 2,
            chooseButton: {
                dialog() {
                    let dialog = ui.create.dialog("行殇：请选择一项", "hidden");
                    const list = get.info("old_sbxingshang").getList.slice();
                    dialog.add([
                        list.map(effect => {
                            return [effect, "移去" + effect.cost + "个“颂”标记，" + effect.prompt()];
                        }),
                        "textbutton",
                    ]);
                    return dialog;
                },
                filter(button, player) {
                    const effect = button.link;
                    return player.countMark("old_sbxingshang") >= effect.cost && effect.filter(player);
                },
                check(button) {
                    const player = get.event().player,
                        effect = button.link;
                    return Math.max(
                        ...game
                            .filterPlayer(target => {
                                const filterTarget = effect.filterTarget;
                                if (!filterTarget) return target == player;
                                if (typeof filterTarget == "function") return filterTarget(null, player, target);
                                return true;
                            })
                            .map(target => {
                                game.broadcastAll(effect => (lib.skill["old_sbxingshang_aiSkill"].ai = effect.ai), effect);
                                return get.effect(target, "old_sbxingshang_aiSkill", player, player);
                            })
                    );
                },
                backup(links, player) {
                    const effect = links[0];
                    return {
                        effect: effect,
                        audio: "ext:星之梦/audio/skill:2",
                        filterCard: () => false,
                        selectCard: -1,
                        filterTarget: effect.filterTarget,
                        deadTarget: effect.deadTarget,
                        async content(event, trigger, player) {
                            const target = event.targets[0],
                                effect = lib.skill.old_sbxingshang_backup.effect;
                            player.removeMark("old_sbxingshang", effect.cost);
                            await effect.content(player, target);
                        },
                        ai: effect.ai,
                    };
                },
                prompt(links, player) {
                    const effect = links[0],
                        str = "###行殇###";
                    return str + '<div class="text center">' + "移去" + effect.cost + "个“颂”标记，" + effect.prompt() + "</div>";
                },
            },
            ai: {
                order: 6.5,
                result: {
                    player(player) {
                        const list = get.info("old_sbxingshang").getList.filter(effect => {
                            return player.countMark("old_sbxingshang") >= effect.cost && effect.filter(player);
                        });
                        return Math.max(
                            ...list.map(effect => {
                                return Math.max(
                                    ...game
                                        .filterPlayer(target => {
                                            const filterTarget = effect.filterTarget;
                                            if (!filterTarget) return target == player;
                                            if (typeof filterTarget == "function") return filterTarget(null, player, target);
                                            return true;
                                        })
                                        .map(target => {
                                            game.broadcastAll(effect => (lib.skill["old_sbxingshang_aiSkill"].ai = effect.ai), effect);
                                            return get.effect(target, "old_sbxingshang_aiSkill", player, player);
                                        })
                                );
                            })
                        );
                    },
                },
            },
            group: "old_sbxingshang_gain",
            subSkill: {
                aiSkill: {},
                backup: {},
                gain: {
                    audio: "old_sbxingshang",
                    trigger: { global: ["die", "damageEnd"] },
                    filter(event, player) {
                        if (player.countMark("old_sbxingshang") >= get.info("old_sbxingshang").getLimit) return false;
                        return event.name == "die" || !player.getHistory("custom", evt => evt.old_sbxingshang).length;
                    },
                    forced: true,
                    locked: false,
                    async content(event, trigger, player) {
                        player.addMark("old_sbxingshang", Math.min(2, get.info("old_sbxingshang").getLimit - player.countMark("old_sbxingshang")));
                        if (trigger.name == "damage") player.getHistory("custom").push({ old_sbxingshang: true });
                    },
                },
            },
        },
        old_sbfangzhu: {
            getList: [
                {
                    cost: 1,
                    prompt: () => "令一名其他角色于手牌中只能使用基本牌直到其回合结束",
                    filter: player => game.hasPlayer(target => target != player && !target.getStorage("old_sbfangzhu_ban").includes("basic")),
                    filterTarget: (card, player, target) => target != player && !target.getStorage("old_sbfangzhu_ban").includes("basic"),
                    async content(player, target) {
                        target.addTempSkill("old_sbfangzhu_ban", { player: "phaseEnd" });
                        target.markAuto("old_sbfangzhu_ban", ["basic"]);
                        lib.skill.old_sbfangzhu_ban.init(target, "old_sbfangzhu_ban");
                    },
                    ai: {
                        result: {
                            target(player, target) {
                                return -(target.countCards("hs") + 2) / 3;
                            },
                        },
                    },
                },
                {
                    cost: 2,
                    prompt: () => "令一名其他角色于手牌中只能使用锦囊牌直到其回合结束",
                    filter: player => game.hasPlayer(target => target != player && !target.getStorage("old_sbfangzhu_ban").includes("trick")),
                    filterTarget: (card, player, target) => target != player && !target.getStorage("old_sbfangzhu_ban").includes("trick"),
                    async content(player, target) {
                        target.addTempSkill("old_sbfangzhu_ban", { player: "phaseEnd" });
                        target.markAuto("old_sbfangzhu_ban", ["trick"]);
                        lib.skill.old_sbfangzhu_ban.init(target, "old_sbfangzhu_ban");
                    },
                    ai: {
                        result: {
                            target(player, target) {
                                return -(target.countCards("hs") + 2) / 2;
                            },
                        },
                    },
                },
                {
                    cost: 3,
                    prompt: () => "令一名其他角色于手牌中只能使用装备牌直到其回合结束",
                    filter: player => get.mode() != "doudizhu" && game.hasPlayer(target => target != player && !target.getStorage("old_sbfangzhu_ban").includes("equip")),
                    filterTarget: (card, player, target) => target != player && !target.getStorage("old_sbfangzhu_ban").includes("equip"),
                    async content(player, target) {
                        target.addTempSkill("old_sbfangzhu_ban", { player: "phaseEnd" });
                        target.markAuto("old_sbfangzhu_ban", ["equip"]);
                        lib.skill.old_sbfangzhu_ban.init(target, "old_sbfangzhu_ban");
                    },
                    ai: {
                        result: {
                            target(player, target) {
                                return -target.countCards("hs") - 2;
                            },
                        },
                    },
                },
                {
                    cost: 2,
                    prompt: () => "令一名其他角色的非Charlotte技能失效直到其回合结束",
                    filter: player => get.mode() != "doudizhu" && game.hasPlayer(target => target != player),
                    filterTarget: lib.filter.notMe,
                    async content(player, target) {
                        target.addTempSkill("old_sbfangzhu_baiban", { player: "phaseEnd" });
                    },
                    ai: {
                        result: {
                            target(player, target) {
                                return -target.getSkills(null, false).filter(i => get.info(i) && !get.info(i).charlotte).length * get.threaten(target, player);
                            },
                        },
                    },
                },
                {
                    cost: 2,
                    prompt: () => "令一名其他角色不能响应除其外的角色使用的牌直到其回合结束",
                    filter: player => game.hasPlayer(target => target != player && !target.hasSkill("old_sbfangzhu_kill")),
                    filterTarget: lib.filter.notMe,
                    async content(player, target) {
                        target.addTempSkill("old_sbfangzhu_kill", { player: "phaseEnd" });
                    },
                    ai: {
                        result: {
                            target(player, target) {
                                return -(target.countCards("hs") + 2) / target.hp;
                            },
                        },
                    },
                },
                {
                    cost: 3,
                    prompt: () => "令一名其他角色将武将牌翻面",
                    filter: player => get.mode() != "doudizhu" && game.hasPlayer(target => target != player),
                    filterTarget: lib.filter.notMe,
                    async content(player, target) {
                        await target.turnOver();
                    },
                    ai: {
                        result: {
                            target(player, target) {
                                return target.isTurnedOver() ? 3.5 : -3.5;
                            },
                        },
                    },
                },
            ],
            audio: "ext:星之梦/audio/skill:2",
            enable: "phaseUse",
            filter(event, player) {
                return get.info("old_sbfangzhu").getList.some(effect => {
                    return player.countMark("old_sbxingshang") >= effect.cost && effect.filter(player);
                });
            },
            usable: 1,
            chooseButton: {
                dialog() {
                    let dialog = ui.create.dialog("放逐：请选择一项", "hidden");
                    const list = get.info("old_sbfangzhu").getList.slice();
                    dialog.add([
                        list.map(effect => {
                            return [effect, "移去" + effect.cost + "个“颂”标记，" + effect.prompt()];
                        }),
                        "textbutton",
                    ]);
                    return dialog;
                },
                filter(button, player) {
                    const effect = button.link;
                    return player.countMark("old_sbxingshang") >= effect.cost && effect.filter(player);
                },
                check(button) {
                    const player = get.event().player,
                        effect = button.link;
                    return Math.max(
                        ...game
                            .filterPlayer(target => {
                                const filterTarget = effect.filterTarget;
                                if (!filterTarget) return target == player;
                                if (typeof filterTarget == "function") return filterTarget(null, player, target);
                                return true;
                            })
                            .map(target => {
                                game.broadcastAll(effect => (lib.skill["old_sbxingshang_aiSkill"].ai = effect.ai), effect);
                                return get.effect(target, "old_sbxingshang_aiSkill", player, player);
                            })
                    );
                },
                backup(links, player) {
                    const effect = links[0];
                    return {
                        effect: effect,
                        audio: "old_sbfangzhu",
                        filterCard: () => false,
                        selectCard: -1,
                        filterTarget: effect.filterTarget,
                        async content(event, trigger, player) {
                            const target = event.targets[0],
                                effect = lib.skill.old_sbfangzhu_backup.effect;
                            player.removeMark("old_sbxingshang", effect.cost);
                            await effect.content(player, target);
                        },
                        ai: effect.ai,
                    };
                },
                prompt(links, player) {
                    const effect = links[0],
                        str = "###放逐###";
                    return str + '<div class="text center">' + "移去" + effect.cost + "个“颂”标记，" + effect.prompt() + "</div>";
                },
            },
            ai: {
                combo: "old_sbxingshang",
                order: 7,
                result: {
                    player(player) {
                        const list = get.info("old_sbfangzhu").getList.filter(effect => {
                            return player.countMark("old_sbxingshang") >= effect.cost && effect.filter(player);
                        });
                        return Math.max(
                            ...list.map(effect => {
                                return Math.max(
                                    ...game
                                        .filterPlayer(target => {
                                            const filterTarget = effect.filterTarget;
                                            if (!filterTarget) return target == player;
                                            if (typeof filterTarget == "function") return filterTarget(null, player, target);
                                            return true;
                                        })
                                        .map(target => {
                                            game.broadcastAll(effect => (lib.skill["old_sbxingshang_aiSkill"].ai = effect.ai), effect);
                                            return get.effect(target, "old_sbxingshang_aiSkill", player, player);
                                        })
                                );
                            })
                        );
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
                kill: {
                    charlotte: true,
                    mark: true,
                    marktext: "禁",
                    intro: { content: "不能响应其他角色使用的牌" },
                    trigger: { global: "useCard1" },
                    filter(event, player) {
                        return event.player != player;
                    },
                    forced: true,
                    popup: false,
                    async content(event, trigger, player) {
                        trigger.directHit.add(player);
                    },
                    init(player, skill) {
                        player.addTip(skill, "放逐 无法响应");
                    },
                    onremove(player, skill) {
                        player.removeTip(skill);
                    },
                },
                ban: {
                    charlotte: true,
                    mark: true,
                    marktext: "禁",
                    intro: {
                        markcount: () => 0,
                        content(storage) {
                            if (storage.length > 1) return "不能使用手牌";
                            return "于手牌中只能使用" + get.translation(storage[0]) + "牌";
                        },
                    },
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
                    mod: {
                        cardEnabled(card, player) {
                            const storage = player.getStorage("old_sbfangzhu_ban");
                            const hs = player.getCards("h"),
                                cards = [card];
                            if (Array.isArray(card.cards)) cards.addArray(card.cards);
                            if (cards.containsSome(...hs) && (storage.length > 1 || !storage.includes(get.type2(card)))) return false;
                        },
                        cardSavable(card, player) {
                            const storage = player.getStorage("old_sbfangzhu_ban");
                            const hs = player.getCards("h"),
                                cards = [card];
                            if (Array.isArray(card.cards)) cards.addArray(card.cards);
                            if (cards.containsSome(...hs) && (storage.length > 1 || !storage.includes(get.type2(card)))) return false;
                        },
                    },
                },
            },
        },
        old_sbsongwei: {
            audio: "ext:星之梦/audio/skill:2",
            trigger: { player: "phaseUseBegin" },
            filter(event, player) {
                if (player.countMark("old_sbxingshang") >= get.info("old_sbxingshang").getLimit) return false;
                return game.hasPlayer(target => target.group == "wei" && target != player);
            },
            zhuSkill: true,
            forced: true,
            locked: false,
            async content(event, trigger, player) {
                player.addMark("old_sbxingshang", Math.min(get.info("old_sbxingshang").getLimit - player.countMark("old_sbxingshang"), 2 * game.countPlayer(target => target.group == "wei" && target != player)));
            },
            group: "old_sbsongwei_delete",
            subSkill: {
                delete: {
                    audio: "old_sbsongwei",
                    enable: "phaseUse",
                    filter(event, player) {
                        if (player.storage.old_sbsongwei_delete) return false;
                        return game.hasPlayer(target => lib.skill.old_sbsongwei.subSkill.delete.filterTarget(null, player, target));
                    },
                    filterTarget(card, player, target) {
                        return target != player && target.group == "wei" && target.getStockSkills(false, true).length;
                    },
                    skillAnimation: true,
                    animationColor: "thunder",
                    async content(event, trigger, player) {
                        player.storage.old_sbsongwei_delete = true;
                        player.awakenSkill("old_sbsongwei_delete");
                        event.target.removeSkills(event.target.getStockSkills(false, true));
                    },
                    ai: {
                        order: 13,
                        result: {
                            target(player, target) {
                                return -target.getStockSkills(false, true).length;
                            },
                        },
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
                        return get.event("goon") ? 0 : 1;
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
                                return get.attitude(get.event("player"), target) * get.sgn(get.sgn(get.event("goon")) + 0.5);
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
                        }
                        else return;
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
                const { result } = await target
                    .chooseToUse(
                        "乱武：使用一张【杀】或失去1点体力",
                        function (card) {
                            if (get.name(card) != "sha") {
                                return false;
                            }
                            return lib.filter.filterCard.apply(this, arguments);
                        },
                        function (card, player, target) {
                            if (player == target || target == get.event("targetx")) {
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
                        return get.effect_use.apply(this, arguments) - get.event("effect");
                    })
                    .set("effect", get.effect(target, { name: "losehp" }, target, target))
                    .set("addCount", false)
                    .set("targetx", player);
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
                        const control = await player
                            .chooseControl(choices, "cancel2")
                            .set("choiceList", choiceList)
                            .set("prompt", get.prompt(event.name.slice(0, -5)))
                            .set("ai", () => {
                                const choices = get.event().controls.slice().remove("cancel2");
                                return choices.randomGet();
                            })
                            .forResultControl();
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
                    var cardx = ui.create.card();
                    cardx.init(get.cardInfo(card));
                    cardx._cardid = card.cardid;
                    cardx.preCard = card;
                    return cardx;
                });
                if (cardsx.length) player.directgains(cardsx, null, "old_sbhuanshi_tag");
                let {
                    result: { bool, cards },
                } = await player
                    .chooseCard(get.translation(trigger.player) + "的" + (trigger.judgestr || "") + "判定为" + get.translation(trigger.player.judging[0]) + "，" + get.prompt("old_sbhuanshi"), "hs", card => {
                        const player = _status.event.player;
                        const mod2 = game.checkMod(card, player, "unchanged", "cardEnabled2", player);
                        if (mod2 != "unchanged") return mod2;
                        const mod = game.checkMod(card, player, "unchanged", "cardRespondable", player);
                        if (mod != "unchanged") return mod;
                        return true;
                    })
                    .set("ai", card => {
                        const trigger = _status.event.getTrigger();
                        const player = _status.event.player;
                        const judging = _status.event.judging;
                        const result = trigger.judge(card) - trigger.judge(judging);
                        const attitude = get.attitude(player, trigger.player);
                        if (attitude == 0 || result == 0) return 0;
                        if (get.event("pile").includes(card)) return attitude > 0 ? result : -result;
                        if (attitude > 0) {
                            return result - get.value(card) * 0.3;
                        } else {
                            return -result - get.value(card) * 0.3;
                        }
                    })
                    .set("judging", trigger.player.judging[0])
                    .set("pile", cardsx);
                const gain = bool && cards?.[0] && !cards[0].hasGaintag("old_sbhuanshi_tag");
                cardsx = player.getCards("s", card => card.hasGaintag("old_sbhuanshi_tag"));
                if (cardsx.length) {
                    if (cards) {
                        cards = cards.map(card => {
                            if (cardsx.includes(card)) return card.preCard;
                            return card;
                        });
                    }
                    if (player.isOnline2()) {
                        player.send(
                            function (cards, player) {
                                cards.forEach(i => i.delete());
                                if (player == game.me) ui.updatehl();
                            },
                            cardsx,
                            player
                        );
                    }
                    cardsx.forEach(i => i.delete());
                    if (player == game.me) ui.updatehl();
                }

                event.result = {
                    bool: bool,
                    cards: cards,
                    cost_data: gain,
                };
            },
            popup: false,
            async content(event, trigger, player) {
                const cards = event.cards;
                await player.respond(cards, "old_sbhuanshi", "highlight", "noOrdering");
                if (trigger.player.judging[0].clone) {
                    trigger.player.judging[0].clone.classList.remove("thrownhighlight");
                    game.broadcast(function (card) {
                        if (card.clone) {
                            card.clone.classList.remove("thrownhighlight");
                        }
                    }, trigger.player.judging[0]);
                    game.addVideo("deletenode", player, get.cardsInfo([trigger.player.judging[0].clone]));
                }
                game.cardsDiscard(trigger.player.judging[0]);



                if (event.cost_data) await player.gain(trigger.player.judging, "gain2");


                else await game.cardsDiscard(trigger.player.judging);
                trigger.player.judging[0] = cards[0];
                trigger.orderingCards.addArray(cards);
                game.log(trigger.player, "的判定牌改为", cards[0]);
                await game.delay(2);
            },
            locked: false,
            mod: {
                cardRespondable(card, player) {
                    if (!card.preCard) return;
                    return _status.event?.getParent()?.name == "old_sbhuanshi_cost";
                },
            },
            ai: {
                rejudge: true,
                tag: {
                    rejudge: 1,
                },
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
                const {
                    result: { bool, targets },
                } = await player
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
                    });
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
                const skillName = event.name.slice(0, -5);
                const targets = await player
                    .chooseTarget(lib.filter.notMe, get.prompt2(skillName))
                    .set("ai", target => {
                        const player = get.player();
                        const att = get.attitude(player, target);
                        const es = target.getCards("e");
                        if ((es.some(card => get.equipValue(card, target) <= 4) && att > 0) || (es.some(card => get.equipValue(card, target) > 7) && att < 0)) return 10;
                        return 1;
                    })
                    .forResultTargets();
                if (!targets || !targets.length) return;
                const target = targets[0];
                const list = [];
                if (target.countCards("e")) list.push("选项一");
                list.push("选项二");
                list.push("背水！");
                list.push("cancel2");
                const control = await await player
                    .chooseControl(list)
                    .set("choiceList", [`令${get.translation(target)}获得其装备区的至多两张牌`, `获得牌堆中的一张【杀】`, "背水！失去1点体力并执行所有选项"])
                    .set("prompt", get.prompt(skillName, target))
                    .set("ai", () => {
                        const { player, target } = get.event();
                        const att = get.attitude(player, target);
                        const es = target.getCards("e");
                        const bool1 = (es.some(card => get.equipValue(card, target) <= 4) && att > 0) || (es.some(card => get.equipValue(card, target) > 7) && att < 0);
                        const bool2 = !player.countCards("hs", { name: "sha" }) || player.hasSkill("old_sbtuxi");
                        if (bool1 && bool2 && (player.getHp() > 2 || get.effect(player, { name: "losehp" }, player, player) > 0)) return "背水！";
                        if (bool1) return "选项一";
                        if (bool2) return "选项二";
                        return "cancel2";
                    })
                    .set("target", target)
                    .forResultControl();
                event.result = {
                    bool: control != "cancel2",
                    targets: targets,
                    cost_data: control,
                };
            },
            async content(event, trigger, player) {
                const {
                    cost_data: control,
                    targets: [target],
                } = event;
                if (control == "背水！") await player.loseHp();
                if (["选项一", "背水！"].includes(control) && target.countCards("e")) {
                    const cards = await player.choosePlayerCard(target, true, "e", [1, 2], `选择${get.translation(target)}至多两张装备牌令其获得之`).forResultCards();
                    if (cards?.length) await target.gain(cards, "gain2");
                }
                if (["选项二", "背水！"].includes(control)) {
                    const card = get.cardPile2(card => card.name == "sha");
                    if (card) await player.gain(card, "gain2");
                }
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
                    const {
                        result: { bool, cards, targets },
                    } = await player.chooseCardTarget({
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
                            const player = get.event("player");
                            const card = ui.selected.cards[0];
                            if (card) return get.value(card, target) * get.attitude(player, target);
                            return 0;
                        },
                        yiji: yiji,
                        position: "eh".slice(-1 + (name === "dying")), //三若为，怎么若都为构思
                    });
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
                                player.when("phaseAfter").then(() => {
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
                            player.when("old_sbxianzhen_attackAfter").then(() => {
                                delete player.storage.old_sbxianzhen_recorded;
                            });
                        }
                        player.markAuto("old_sbxianzhen_recorded", targets);
                    },
                },
            },
        },
        //谋陆逊
        old_sblianying: {
            audio: "sblianying",
            trigger: {
                global: "phaseEnd",
            },
            filter(event, player) {
                if (player == event.player) return false;
                return true;
            },
            frequent: true,
            async content(event, trigger, player) {
                let num = 0;
                num++;
                player.getHistory("lose", evt => {
                    if (evt.cards2) num += evt.cards2.length;
                });
                num = Math.min(5, num);
                const { cards } = await game.cardsGotoOrdering(get.cards(num));
                if (!cards.length) return;
                do {
                    const {
                        result: { bool, links },
                    } =
                        cards.length == 1
                            ? { result: { links: cards.slice(0), bool: true } }
                            : await player.chooseCardButton("连营：请选择要分配的牌", true, cards, [1, cards.length]).set("ai", () => {
                                if (ui.selected.buttons.length == 0) return 1;
                                return 0;
                            });
                    if (!bool) return;
                    cards.removeArray(links);
                    const togive = links.slice(0);
                    const {
                        result: { targets },
                    } = await player
                        .chooseTarget("选择一名角色获得" + get.translation(links), true)
                        .set("ai", target => {
                            const att = get.attitude(_status.event.player, target);
                            if (_status.event.enemy) {
                                return -att;
                            } else if (att > 0) {
                                return att / (1 + target.countCards("h"));
                            } else {
                                return att / 100;
                            }
                        })
                        .set("enemy", get.value(togive[0], player, "raw") < 0);
                    if (targets.length) await targets[0].gain(togive, "gain2");
                } while (cards.length > 0);
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
                const draw = await target.draw(cards.length).forResult();
                if (Array.isArray(cards) && Array.isArray(draw)) {
                    let types = [cards, draw]
                        .map(list => list.map(card => get.type2(card)))
                        .flat()
                        .unique();
                    if (types.length >= 3) {
                        let list = [`${get.translation(player)}视为对你指定的另一名其他角色使用一张【决斗】`, `你获得技能〖无双〗直至你下个回合结束`];
                        let result;
                        const juedou = game.hasPlayer(current => current != player && current != target && player.canUse(new lib.element.VCard({ name: "juedou", isCard: true }), current, false));
                        const wushuang = !target.hasSkill("wushuang", null, false, false);
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
                                await target.addAdditionalSkills(skill, "wushuang");
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
                "step 1";
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
                "step 2";
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
                "step 3";
                player.chat(result.control);
                game.log(player, "认为", "#y" + result.control);
                game.delayx();
                "step 4";
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
                    var cards = target.getCards("h", function (card) {
                        return lib.filter.canBeGained(card, player, target);
                    }).randomGets(5);
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
        //族荀采
        oldx_clanlieshi: {
            audio: "clanlieshi",
            enable: "phaseUse",
            content() {
                "step 0";
                var choice = [];
                var list = ["受到1点火属性伤害并废除判定区", "弃置所有【闪】", "弃置所有【杀】"];
                for (var i = 1; i <= 3; i++) {
                    if (i == 2 && !player.countCards("h", { name: "shan" })) list[i - 1] = '<span style="opacity:0.5">' + list[i - 1] + "</span>";
                    else if (i == 3 && !player.countCards("h", { name: "sha" })) list[i - 1] = '<span style="opacity:0.5">' + list[i - 1] + "</span>";
                    else choice.push("选项" + get.cnNumber(i, true));
                }
                if (choice.length)
                    player
                        .chooseControl(choice)
                        .set("choiceList", list)
                        .set("ai", function () {
                            if (choice.length == 1) return choice[0];
                            var player = _status.event.player;
                            if (get.damageEffect(player, player, player, "fire") > 0) return "选项一";
                            return choice[choice.length - 1];
                        })
                        .set("prompt", "烈誓：请选择一项执行，然后选择一名其他角色执行另一项");
                else event.finish();
                "step 1";
                var num = result.control;
                event.num = num;
                game.log(player, "选择执行", "#g【烈誓】", "的" + result.control);
                switch (num) {
                    case "选项一":
                        player.damage(1, "fire");
                        if (!player.storage._disableJudge) player.disableJudge();
                        break;
                    case "选项二":
                        player.discard(player.getCards("h", { name: "shan" }));
                        break;
                    case "选项三":
                        player.discard(player.getCards("h", { name: "sha" }));
                        break;
                }
                "step 2";
                if (!player.isIn() || game.countPlayer() < 2) event.finish();
                else
                    player
                        .chooseTarget("请选择一名其他角色，执行【烈誓】的剩余选项", lib.filter.notMe, true)
                        .set("ai", function (target) {
                            var player = _status.event.player;
                            var choice = [],
                                att = get.attitude(player, target);
                            for (var i = 1; i <= 3; i++) {
                                if ("选项" + get.cnNumber(i, true) == _status.event.control) continue;
                                else if (i == 2 && !target.countCards("h", { name: "shan" })) continue;
                                else if (i == 3 && !target.countCards("h", { name: "sha" })) continue;
                                else choice.push("选项" + get.cnNumber(i, true));
                            }
                            if (!choice.length) return -1 / Infinity;
                            if (choice.length == 1) {
                                if (choice[0] == "选项一") return -att * 3;
                                return -att * 2;
                            }
                            return -att;
                        })
                        .set("control", num);
                "step 3";
                if (!result.bool) {
                    event.finish();
                    return;
                }
                player.addExpose(0.3);
                var target = result.targets[0];
                event.target = target;
                player.line(target);
                var choice = [];
                var list = ["受到1点火属性伤害并废除判定区", "弃置所有【闪】", "弃置所有【杀】"];
                for (var i = 1; i <= 3; i++) {
                    if ("选项" + get.cnNumber(i, true) == num) list[i - 1] = '<span style="opacity:0.5">' + list[i - 1] + "</span>";
                    else if (i == 2 && !target.countCards("h", { name: "shan" })) list[i - 1] = '<span style="opacity:0.5">' + list[i - 1] + "</span>";
                    else if (i == 3 && !target.countCards("h", { name: "sha" })) list[i - 1] = '<span style="opacity:0.5">' + list[i - 1] + "</span>";
                    else choice.push("选项" + get.cnNumber(i, true));
                }
                if (choice.length)
                    target
                        .chooseControl(choice)
                        .set("choiceList", list)
                        .set("ai", function () {
                            if (get.damageEffect(target, target, target, "fire") > 0) return "选项一";
                            return choice[choice.length - 1];
                        })
                        .set("prompt", "烈誓：请选择一项执行");
                else event.finish();
                "step 4";
                game.log(target, "选择执行", "#g【烈誓】", "的" + result.control);
                switch (result.control) {
                    case "选项一":
                        target.damage(1, "fire");
                        if (!target.storage._disableJudge) target.disableJudge();
                        break;
                    case "选项二":
                        target.discard(target.getCards("h", { name: "shan" }));
                        break;
                    case "选项三":
                        target.discard(target.getCards("h", { name: "sha" }));
                        break;
                }
            },
            ai: {
                order: 1,
                nokeep: true,
                skillTagFilter(player) {
                    if (!player.hasSkill("bolhuanyin")) return false;
                },
                result: {
                    player(player) {
                        var choice = [];
                        for (var i = 1; i <= 3; i++) {
                            if (i == 2 && !player.countCards("h", { name: "shan" })) continue;
                            else if (i == 3 && !player.countCards("h", { name: "sha" })) continue;
                            else choice.push("选项" + get.cnNumber(i, true));
                        }
                        var control = get.damageEffect(player, player, player, "fire") > 0 ? "选项一" : choice[choice.length - 1];
                        if (choice[choice.length - 1] == "选项一" && player.hp + player.countCards("hs", { name: ["tao", "jiu"] }) < 2 && (player.identity == "zhu" || !player.hasFriend() || !player.hasSkill("bolhuanyin") || !player.countCards("h") >= 4)) return 0;
                        if (
                            game.hasPlayer(function (target) {
                                if (get.attitude(player, target) >= 0) return false;
                                var list = [];
                                for (var i = 1; i <= 3; i++) {
                                    if ("选项" + get.cnNumber(i, true) == control) continue;
                                    else if (i == 2 && !target.countCards("h", { name: "shan" })) continue;
                                    else if (i == 3 && !target.countCards("h", { name: "sha" })) continue;
                                    else list.push("选项" + get.cnNumber(i, true));
                                }
                                if (list.length) return 1;
                            })
                        )
                            return 1;
                        return 0;
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
                "step 1";
                var cards = player.getCards("h", card => get.suit(card) == get.suit(trigger.card) && player.canRecast(card));
                if (cards.length) player.recast(cards);
            },
        },
        //族钟会
        // old_clanyuzhi: {
        //     mod: {
        //         aiOrder(player, card, num) {
        //             if (card.name == "tao") return num / 114514;
        //         },
        //     },
        //     audio: "clanyuzhi",
        //     trigger: { global: "roundStart" },
        //     direct: true,
        //     locked: true,
        //     content() {
        //         "step 0";
        //         player.unmarkSkill("old_clanyuzhi");
        //         var num1 = 0,
        //             num2 = 0,
        //             num3 = 0,
        //             bool = true;
        //         var history = player.actionHistory;
        //         for (var i = history.length - 2; i >= 0; i--) {
        //             for (var evt of history[i].gain) {
        //                 if (evt.getParent().name == "draw" && evt.getParent(2).name == "old_clanyuzhi") {
        //                     if (bool) num1 += evt.cards.length;
        //                     else num2 += evt.cards.length;
        //                 }
        //             }
        //             if (bool) num3 += history[i].useCard.length;
        //             if (history[i].isRound) {
        //                 if (bool) bool = false;
        //                 else break;
        //             }
        //         }
        //         event.num1 = num1;
        //         if ((num1 > 0 && num2 > 0 && num1 > num2) || num1 > num3) {
        //             player.logSkill("old_clanyuzhi");
        //             if (num2 > 0 && num1 > num2) game.log(player, "的野心已开始膨胀", "#y(" + num1 + "张>" + num2 + "张)");
        //             if (num1 > num3) game.log(player, "的行动未达到野心", "#y(" + num3 + "张<" + num1 + "张)");
        //             if (player.hasSkill("clanbaozu", null, false, false)) player.chooseBool("迂志：是否失去〖保族〗？", "若选择“否”，则你失去1点体力").set("choice", player.awakenedSkills.includes("clanbaozu"));
        //             else event._result = { bool: false };
        //         } else event.goto(2);
        //         "step 1";
        //         if (result.bool) {
        //             player.removeSkills("clanbaozu");
        //         } else player.loseHp();
        //         "step 2";
        //         if (!player.countCards("h")) event.finish();
        //         "step 3";
        //         player
        //             .chooseCard("迂志：请展示一张手牌", "摸此牌牌名字数的牌。下一轮开始时，若本轮你使用的牌数或上一轮你以此法摸的牌数小于此牌牌名字数，则你失去1点体力。", true, function (card, player) {
        //                 var num = get.cardNameLength(card);
        //                 return typeof num == "number" && num > 0;
        //             })
        //             .set("ai", function (card) {
        //                 if (_status.event.dying && _status.event.num > 0 && get.cardNameLength(card) > _status.event.num) return 1 / get.cardNameLength(card); //怂
        //                 return get.cardNameLength(card); //勇
        //             })
        //             .set("dying", player.hp + player.countCards("hs", { name: ["tao", "jiu"] }) < 1)
        //             .set("num", event.num1);
        //         "step 4";
        //         if (result.bool) {
        //             player.logSkill("old_clanyuzhi");
        //             player.showCards(result.cards, get.translation(player) + "发动了【迂志】");
        //             player.draw(get.cardNameLength(result.cards[0]));
        //             player.storage.old_clanyuzhi = get.cardNameLength(result.cards[0]);
        //             player.markSkill("old_clanyuzhi");
        //         }
        //     },
        //     ai: {
        //         threaten: 3,
        //         nokeep: true,
        //     },
        //     onremove: true,
        //     intro: { content: "本轮野心：#张" },
        // },
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
                                "摸此牌牌名字数的牌。本轮结束时弃置此牌，若本轮你使用的牌数或上一轮你以此法摸的牌数小于此牌牌名字数，则你受到1点雷属性伤害或失去〖保族〗。",
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
                            if (player.hasSkill("clanbaozu", null, false, false)) result2 = await player.chooseBool("迂志：是否失去〖保族〗？", "若选择“否”，则你受到1点雷属性伤害").set("choice", player.awakenedSkills.includes("clanbaozu")).forResult();
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
                if (!event.card) return false;
                var num = get.cardNameLength(event.card);
                return typeof num == "number" && num > 0 && player.countCards("he") > 0;
            },
            direct: true,
            content() {
                "step 0";
                var num = get.cardNameLength(trigger.card),
                    str = "";
                if (player.getDamagedHp() > 0) str += "并摸" + get.cnNumber(player.getDamagedHp()) + "张牌";
                player
                    .chooseToDiscard(get.prompt("old_clanxieshu"), "弃置" + get.cnNumber(num) + "张牌" + str, "he", num)
                    .set("ai", function (card) {
                        var player = _status.event.player;
                        var num = _status.event.num;
                        var num2 = player.getDamagedHp();
                        if (num < num2) return 8 - get.value(card);
                        if (num == num2 || num2 >= 2 + num - num2) return lib.skill.zhiheng.check(card);
                        return 0;
                    })
                    .set("num", num).logSkill = "old_clanxieshu";
                "step 1";
                if (result.bool && player.getDamagedHp() > 0) player.draw(player.getDamagedHp());
            },
            ai: { threaten: 3 },
        },
        //韩融
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
                    let { result } = await player.chooseCard("he", [1, Infinity], "是否交给" + get.translation(target) + "任意张牌？").set("ai", card => 0.1 - get.value(card));
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
                        if (player.isTurnedOver() && target.getSeatNum() == player.countMark("old_fangzhen") + 1) return 5;
                        else return target.countCards("h") - player.countCards("h");
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
                let { result } = await player.chooseToCompare(target).set("small", true);
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
                    let { result } = await player
                        .chooseButton(["留驹：是否使用其中的一张牌？", cardsx])
                        .set("filterButton", button => {
                            return _status.event.player.hasUseTarget(button.link);
                        })
                        .set("ai", button => {
                            return _status.event.player.getUseValue(button.link) + 0.1;
                        });
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
                    let { result } = await player.chooseControl(["复原武将牌", "复原武将牌上一个技能", "cancel2"]).set(ai, function () {
                        let player = _status.event.player;
                        if (player.isTurnedOver()) return 0;
                        else return 1;
                    });
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
                "step 1";
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
                        )
                            return 3;
                        else return player.isTurnedOver() ? 1 : 0;
                    },
                },
            },
        },
        old_xumin_old_clan_hanshao: {
            audio: "ext:星之梦/audio/skill:2",
        },
        //韩韶
        old_huanjia: {
            audio: "clanhuanjia",
            usable: 1,
            enable: "phaseUse",
            filterTarget(card, player, target) {
                return player.canCompare(target);
            },
            async content(event, trigger, player) {
                const { result } = await player.chooseToCompare(event.target);
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
                            await player.gainPlayerCard(i, "he", true);
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
                                    await i.gainPlayerCard(player, "he", true);
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
            trigger: {
                player: ["phaseZhunbeiBegin", "damageEnd"],
            },
            direct: true,
            filter(event, player) {
                var bool = false;
                for (var i = 0; i < 4; i++) {
                    if (!player.storage.old_luochong[i] && !player.storage.old_luochong_round[i]) bool = true;
                }
                return bool;
            },
            init(player) {
                player.storage.old_luochong = [false, false, false, false];
                player.storage.old_luochong_round = [false, false, false, false];
            },
            onremove: true,
            content() {
                "step 0";
                var list = [];
                var choiceList = ["令一名角色回复1点体力。", "令一名角色失去1点体力。", "弃置至多两名角色场上的各一张牌。", "摸两张牌，并可以将其分配给任意角色。"];
                for (var i = 0; i < 4; i++) {
                    if (player.storage.old_luochong[i]) choiceList[i] += "（已移除）";
                    else if (player.storage.old_luochong_round[i]) choiceList[i] += "（本轮已发动过）";
                    else {
                        if (
                            i == 0 &&
                            game.hasPlayer(function (current) {
                                return current.isDamaged();
                            })
                        )
                            list.push("选项一");
                        if (i == 1) list.push("选项二");
                        if (
                            i == 2 &&
                            game.countPlayer(function (current) {
                                return current.countDiscardableCards(player, "ej") > 0;
                            }) > 0
                        )
                            list.push("选项三");
                        if (i == 3) list.push("选项四");
                    }
                }
                list.push("cancel2");
                player
                    .chooseControl(list)
                    .set("prompt", get.prompt("old_luochong"))
                    .set("choiceList", choiceList)
                    .set("ai", function () {
                        var player = _status.event.player;
                        var list = _status.event.controls.slice(0);
                        var gett = function (choice) {
                            if (choice == "cancel2") return 0.1;
                            switch (choice) {
                                case "选项一":
                                    if (
                                        game.hasPlayer(function (current) {
                                            return get.recoverEffect(current, player, player);
                                        })
                                    )
                                        return 4;
                                    else return -1;
                                case "选项二":
                                    return 5;
                                case "选项三":
                                    if (
                                        game.hasPlayer(function (target) {
                                            return (
                                                6 -
                                                target
                                                    .getCards("ej")
                                                    .map(i => {
                                                        var sign = get.sgnAttitude(_status.event.player, target);
                                                        var val = 0;
                                                        if (get.position(i) == "e") val = get.value(i, target);
                                                        else {
                                                            val = get.effect(player, { name: i.viewAs || i.name, cards: [i] }, target, target);
                                                        }
                                                        return sign * val;
                                                    })
                                                    .sort((a, b) => a - b)[0] >
                                                0
                                            );
                                        })
                                    )
                                        return 2;
                                    else return -1;
                                case "选项四":
                                    return 3;
                            }
                        };
                        return list.sort(function (a, b) {
                            return gett(b) - gett(a);
                        })[0];
                    });
                "step 1";
                if (result.control != "cancel2") {
                    var index = ["选项一", "选项二", "选项三", "选项四"].indexOf(result.control);
                    event.index = index;
                    switch (index) {
                        case 0:
                            player
                                .chooseTarget("选择一名角色，令其回复1点体力", true, function (card, player, target) {
                                    return target.isDamaged();
                                })
                                .set("ai", function (target) {
                                    return get.attitude(_status.event.player, target);
                                });
                            break;
                        case 1:
                            player.chooseTarget("选择一名角色，令其失去1点体力", true).set("ai", function (target) {
                                return -get.attitude(_status.event.player, target);
                            });
                            break;
                        case 2:
                            player
                                .chooseTarget("选择至多两名角色，弃置其场上各一张牌", true, [1, 2], function (card, player, target) {
                                    return target.countDiscardableCards(player, "ej") > 0;
                                })
                                .set("ai", function (target) {
                                    var player = _status.event.player;
                                    var sign = get.sgnAttitude(_status.event.player, target);
                                    return (
                                        6 -
                                        target
                                            .getCards("ej")
                                            .map(i => {
                                                var val = 0;
                                                if (get.position(i) == "e") val = get.value(i, target);
                                                else {
                                                    val = get.effect(player, { name: i.viewAs || i.name, cards: [i] }, target, target);
                                                }
                                                return sign * val;
                                            })
                                            .sort((a, b) => a - b)[0]
                                    );
                                });
                            break;
                        case 3:
                            player.draw(2);
                    }
                } else event.finish();
                "step 2";
                switch (event.index) {
                    case 0:
                        var target = result.targets[0];
                        player.line(target, "green");
                        target.recover();
                        break;
                    case 1:
                        var target = result.targets[0];
                        player.line(target, "green");
                        target.loseHp();
                        break;
                    case 2:
                        player.line(result.targets, "green");
                        for (var target of result.targets) {
                            player.discardPlayerCard(target, "ej", true);
                        }
                        break;
                }
                player.storage.old_luochong_round[event.index] = true;
                "step 3";
                if (event.index == 3) {
                    var e1 = player.getHistory("gain", function (evt) {
                        return evt.getParent(2) == event;
                    })[0];
                    event.cardsL = e1.cards;
                    event.given_map = {};
                    event.num = 2;
                } else event.finish();
                "step 4";
                player.chooseCardTarget({
                    filterCard(card) {
                        return get.itemtype(card) == "card" && !card.hasGaintag("old_luochong") && event.cardsL.contains(card);
                    },
                    filterTarget: lib.filter.notMe,
                    selectCard: [1, event.num],
                    prompt: "请选择要分配的卡牌和目标",
                    ai1(card) {
                        if (!ui.selected.cards.length) return 1;
                        return 0;
                    },
                    ai2(target) {
                        var player = _status.event.player,
                            card = ui.selected.cards[0];
                        var val = target.getUseValue(card);
                        if (val > 0) return val * get.attitude(player, target) * 2;
                        return get.value(card, target) * get.attitude(player, target);
                    },
                });
                "step 5";
                if (result.bool) {
                    var res = result.cards,
                        target = result.targets[0].playerid;
                    player.addGaintag(res, "old_luochong");
                    event.num -= res.length;
                    if (!event.given_map[target]) event.given_map[target] = [];
                    event.given_map[target].addArray(res);
                    if (event.num > 0) event.goto(4);
                } else if (event.num == 2) {
                    event.finish();
                }
                "step 6";
                var map = [],
                    cards = [];
                for (var i in event.given_map) {
                    var source = (_status.connectMode ? lib.playerOL : game.playerMap)[i];
                    player.line(source, "green");
                    if (player !== source && (get.mode() !== "identity" || player.identity !== "nei")) player.addExpose(0.18);
                    map.push([source, event.given_map[i]]);
                    cards.addArray(event.given_map[i]);
                }
                game.loseAsync({
                    gain_list: map,
                    player: player,
                    cards: cards,
                    giver: player,
                    animate: "giveAuto",
                }).setContent("gaincardMultiple");
            },
            group: ["old_luochong_round"],
            subSkill: {
                round: {
                    charlotte: true,
                    direct: true,
                    trigger: { global: "roundStart" },
                    content() {
                        player.storage.old_luochong_round = [false, false, false, false];
                    },
                },
            },
            mark: true,
            intro: {
                onunmark: true,
                content(storage, player) {
                    var str1 = "本轮已发动过选项：";
                    var str2 = "已移除选项：";
                    var bool1 = false;
                    var bool2 = false;
                    var list = ["回血 ", "崩血 ", "弃牌 ", "摸牌 "];
                    for (var i = 0; i < 4; i++) {
                        if (player.storage.old_luochong_round[i]) {
                            str1 += list[i];
                            bool1 = true;
                        }
                        if (player.storage.old_luochong[i]) {
                            str2 += list[i];
                            bool2 = true;
                        }
                    }
                    if (!bool1) str1 += "暂无";
                    if (!bool2) str2 += "暂无";
                    var str = str1 + "<br>" + str2;
                    return str;
                },
            },
        },
        old_aichen: {
            audio: "aichen",
            trigger: {
                player: "dying",
            },
            forced: true,
            filter(event, player) {
                if (!player.hasSkill("old_luochong", null, null, false) || !player.storage.old_luochong) return false;
                var count = 0;
                for (var i of player.storage.old_luochong) {
                    if (!i) count++;
                }
                return count > 1;
            },
            content() {
                "step 0";
                var num = 1 - player.hp;
                if (num > 0) player.recover(num);
                var list = [];
                var choiceList = ["令一名角色回复1点体力。", "令一名角色失去1点体力。", "弃置至多两名角色场上的各一张牌。", "摸两张牌，并可以将其分配给任意角色。"];
                for (var i = 0; i < 4; i++) {
                    if (player.storage.old_luochong[i]) choiceList[i] += "（已移除）";
                    else {
                        if (i == 0) list.push("选项一");
                        if (i == 1) list.push("选项二");
                        if (i == 2) list.push("选项三");
                        if (i == 3) list.push("选项四");
                    }
                }
                player
                    .chooseControl(list)
                    .set("prompt", "哀尘：选择移去并执行一个【落宠】的选项")
                    .set("choiceList", choiceList)
                    .set("ai", function () {
                        var controls = _status.event.controls.slice(0);
                        var list = ["选项三", "选项四", "选项二", "选项一"];
                        for (var i of list) {
                            if (controls.contains(i)) return i;
                        }
                        return 0;
                    });
                "step 1";
                var index = ["选项一", "选项二", "选项三", "选项四"].indexOf(result.control);
                event.index = index;
                game.log(player, "移去了", "#g【落宠】", "的", "#y" + ["回血", "崩血", "弃牌", "摸牌"][index], "选项");
                player.storage.old_luochong[index] = true;
                switch (index) {
                    case 0:
                        player
                            .chooseTarget("选择一名角色，令其回复1点体力", true, function (card, player, target) {
                                return target.isDamaged();
                            })
                            .set("ai", function (target) {
                                return get.attitude(_status.event.player, target);
                            });
                        break;
                    case 1:
                        player.chooseTarget("选择一名角色，令其失去1点体力", true).set("ai", function (target) {
                            return -get.attitude(_status.event.player, target);
                        });
                        break;
                    case 2:
                        player
                            .chooseTarget("选择至多两名角色，弃置其场上各一张牌", true, [1, 2], function (card, player, target) {
                                return target.countDiscardableCards(player, "ej") > 0;
                            })
                            .set("ai", function (target) {
                                var player = _status.event.player;
                                var sign = get.sgnAttitude(_status.event.player, target);
                                return (
                                    6 -
                                    target
                                        .getCards("ej")
                                        .map(i => {
                                            var val = 0;
                                            if (get.position(i) == "e") val = get.value(i, target);
                                            else {
                                                val = get.effect(player, { name: i.viewAs || i.name, cards: [i] }, target, target);
                                            }
                                            return sign * val;
                                        })
                                        .sort((a, b) => a - b)[0]
                                );
                            });
                        break;
                    case 3:
                        player.draw(2);
                }
                "step 2";
                switch (event.index) {
                    case 0:
                        var target = result.targets[0];
                        target.recover();
                        break;
                    case 1:
                        var target = result.targets[0];
                        target.loseHp();
                        break;
                    case 2:
                        for (var target of result.targets) {
                            player.discardPlayerCard(target, "ej", true);
                        }
                        break;
                }
                "step 3";
                if (event.index == 3) {
                    var e1 = player.getHistory("gain", function (evt) {
                        return evt.getParent(2) == event;
                    })[0];
                    event.cardsL = e1.cards;
                    event.given_map = {};
                    event.num = 2;
                } else event.finish();
                "step 4";
                player.chooseCardTarget({
                    filterCard(card) {
                        return get.itemtype(card) == "card" && !card.hasGaintag("old_luochong") && event.cardsL.contains(card);
                    },
                    filterTarget: lib.filter.notMe,
                    selectCard: [1, event.num],
                    prompt: "请选择要分配的卡牌和目标",
                    ai1(card) {
                        if (!ui.selected.cards.length) return 1;
                        return 0;
                    },
                    ai2(target) {
                        var player = _status.event.player,
                            card = ui.selected.cards[0];
                        var val = target.getUseValue(card);
                        if (val > 0) return val * get.attitude(player, target) * 2;
                        return get.value(card, target) * get.attitude(player, target);
                    },
                });
                "step 5";
                if (result.bool) {
                    var res = result.cards,
                        target = result.targets[0].playerid;
                    player.addGaintag(res, "old_luochong");
                    event.num -= res.length;
                    if (!event.given_map[target]) event.given_map[target] = [];
                    event.given_map[target].addArray(res);
                    if (event.num > 0) event.goto(4);
                } else if (event.num == 2) {
                    event.finish();
                }
                "step 6";
                var map = [],
                    cards = [];
                for (var i in event.given_map) {
                    var source = (_status.connectMode ? lib.playerOL : game.playerMap)[i];
                    player.line(source, "green");
                    if (player !== source && (get.mode() !== "identity" || player.identity !== "nei")) player.addExpose(0.18);
                    map.push([source, event.given_map[i]]);
                    cards.addArray(event.given_map[i]);
                }
                game.loseAsync({
                    gain_list: map,
                    player: player,
                    cards: cards,
                    giver: player,
                    animate: "giveAuto",
                }).setContent("gaincardMultiple");
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
                "step 1";
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
                "step 2";
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
                "step 1";
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
                "step 2";
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
                "step 3";
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
                        "step 1";
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
                        "step 2";
                        if (result.bool) {
                            var target = result.targets[0];
                            event.target = target;
                            player.logSkill("old_dzgengzhan_jieming", target);
                            target.draw(3);
                        } else event.finish();
                        "step 3";
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
                "step 1";
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
                "step 2";
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
                "step 1";
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
                "step 1";
                if (result.bool) {
                    player.$throw(result.links, 1000);
                    game.cardsDiscard(result.links);
                    const num = result.links.filter(card => get.suit(card, false) == "heart").length;
                    if (num) trigger.cancel();
                } else event.finish();
                "step 2";
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
                if (player.countCards("h") != 1 || typeof get.number(player.getCards("h")[0], player) != "number") return false;
                if (player.hasSkill("old_hezhong_0") && player.hasSkill("old_hezhong_1")) return false;
                if (event.getg) return event.getg(player).length;
                var evt = event.getl(player);
                return evt && evt.player == player && evt.hs && evt.hs.length > 0;
            },
            prompt2(event, player) {
                var str = "展示最后一张手牌并摸一张牌";
                if (!player.hasSkill("old_hezhong_0") || !player.hasSkill("old_hezhong_0")) {
                    str += "，然后令本回合使用点数";
                    if (!player.hasSkill("old_hezhong_0")) str += "大于";
                    if (!player.hasSkill("old_hezhong_0") && !player.hasSkill("old_hezhong_0")) str += "或";
                    if (!player.hasSkill("old_hezhong_1")) str += "小于";
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
                "step 1";
                player.draw();
                "step 2";
                if (player.hasSkill("old_hezhong_0")) event._result = { index: 1 };
                else if (player.hasSkill("old_hezhong_1")) event._result = { index: 0 };
                else {
                    player
                        .chooseControl()
                        .set("choiceList", ["本回合使用点数大于" + num + "的普通锦囊牌额外结算一次", "本回合使用点数小于" + num + "的普通锦囊牌额外结算一次"])
                        .set("ai", () => {
                            var player = _status.event.player;
                            var num = _status.event.player;
                            if (
                                player.getCards("h").reduce(function (num, card) {
                                    return num + (get.number(card, player) || 0);
                                }, 0) >
                                num * 2
                            )
                                return 0;
                            return 1;
                        })
                        .set("num", num);
                }
                "step 3";
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
                            var list2 = [1, 11, 12, 13];
                            return list.reduce((str, num) => {
                                if (list2.includes(num)) return str + ["A", "J", "Q", "K"][list2.indexOf(num)];
                                return str + parseFloat(num);
                            }, "");
                        },
                        content: "使用点数大于$的普通锦囊牌额外结算一次",
                    },
                    audio: "hezhong",
                    trigger: { player: "useCard" },
                    filter(event, player) {
                        if (get.type(event.card) != "trick") return false;
                        var num = get.number(event.card, player);
                        return typeof num == "number" && player.getStorage("old_hezhong_0").some(numx => num > numx);
                    },
                    forced: true,
                    content() {
                        trigger.effectCount++;
                        game.log(trigger.card, "额外结算一次");
                    },
                    ai: {
                        effect: {
                            player(card, player, target) {
                                if (card.name == "tiesuo") return "zerotarget";
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
                            var list2 = [1, 11, 12, 13];
                            return list.reduce((str, num) => {
                                if (list2.includes(num)) return str + ["A", "J", "Q", "K"][list2.indexOf(num)];
                                return str + parseFloat(num);
                            }, "");
                        },
                        content: "使用点数小于$的普通锦囊牌额外结算一次",
                    },
                    audio: "hezhong",
                    trigger: { player: "useCard" },
                    filter(event, player) {
                        if (get.type(event.card) != "trick") return false;
                        var num = get.number(event.card, player);
                        return typeof num == "number" && player.getStorage("old_hezhong_1").some(numx => num < numx);
                    },
                    forced: true,
                    content() {
                        trigger.effectCount++;
                        game.log(trigger.card, "额外结算一次");
                    },
                    ai: {
                        effect: {
                            player(card, player, target) {
                                if (card.name == "tiesuo") return "zerotarget";
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
                const {
                    result: { bool, moved },
                } = await player
                    .chooseToMove("纵玄：将任意张牌置于牌堆顶", true)
                    .set("list", [["本次弃置的牌", get.info("old_olzongxuan").getCards(trigger, player)], ["牌堆顶"]])
                    .set("filterOk", moved => moved[1].length)
                    .set("processAI", list => {
                        const player = get.event("player");
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
                    });
                if (bool) {
                    let cards = moved[1].slice();
                    game.log(player, "将", cards, "置于了牌堆顶");
                    while (cards.length) {
                        ui.cardPile.insertBefore(cards.pop().fix(), ui.cardPile.firstChild);
                    }
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
                const {
                    result: { bool, targets },
                } = await player
                    .chooseTarget(get.prompt2("old_olzhiyan"))
                    .set("ai", target => {
                        const player = get.event("player"),
                            cards = get.event("cards");
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
                    .set("cards", Array.from(ui.cardPile.childNodes || []) || []);
                if (bool) {
                    const target = targets[0];
                    player.logSkill("old_olzhiyan", target);
                    const { result } = await target.draw("visible");
                    if (result) {
                        const card = result[0];
                        if (get.type(card, null, target) == "equip") {
                            if (target.getCards("h").includes(card) && target.hasUseTarget(card)) {
                                const {
                                    result: { bool },
                                } = await target.chooseUseTarget(card, true, "nopopup");
                                if (bool) await target.recover();
                            }
                        } else if (target.getHp() !== player.getHp()) await target.loseHp();
                    }
                }
            },
            ai: { expose: 0.2 },
        },
        //程普
        // olchunlao: {
        //     audio: "chunlao",
        //     audioname: ["xin_chengpu"],
        //     trigger: { global: ["loseAfter", "loseAsyncAfter"] },
        //     filter(event, player) {
        //         if (event.type != "discard" || event.getlx === false) return false;
        //         return game.hasPlayer(target => {
        //             if (![player.getPrevious(), player, player.getNext()].includes(target)) return false;
        //             return event.getl(target)?.cards2?.some(i => i.name == "sha" && get.position(i) == "d");
        //         });
        //     },
        //     forced: true,
        //     locked: false,
        //     content() {
        //         player
        //             .addToExpansion(
        //                 game
        //                     .filterPlayer(target => {
        //                         if (![player.getPrevious(), player, player.getNext()].includes(target)) return false;
        //                         return trigger.getl(target)?.cards2?.some(i => i.name == "sha" && get.position(i) == "d");
        //                     })
        //                     .map(target => {
        //                         return trigger.getl(target).cards2.filter(i => i.name == "sha" && get.position(i) == "d");
        //                     })
        //                     .flat()
        //                     .unique(),
        //                 "gain2"
        //             )
        //             .gaintag.add("olchunlao");
        //     },
        //     ai: {
        //         effect: {
        //             player_use(card, player, target) {
        //                 if (_status.currentPhase != player) return;
        //                 if (card.name == "sha" && !player.getExpansions("olchunlao").length && target.hp > 1) {
        //                     return "zeroplayertarget";
        //                 }
        //             },
        //         },
        //     },
        //     intro: {
        //         content: "expansion",
        //         markcount: "expansion",
        //     },
        //     onremove(player, skill) {
        //         var cards = player.getExpansions(skill);
        //         if (cards.length) player.loseToDiscardpile(cards);
        //     },
        //     group: ["olchunlao_save", "olchunlao_gain"],
        //     subSkill: {
        //         save: {
        //             inherit: "chunlao2",
        //             filter(event, player) {
        //                 return event.type == "dying" && event.dying && event.dying.hp <= 0 && player.getExpansions("olchunlao").length;
        //             },
        //             async content(event, trigger, player) {
        //                 const target = event.targets[0];
        //                 const {
        //                     result: { bool, links },
        //                 } = await player.chooseCardButton(get.translation("olchunlao"), player.getExpansions("olchunlao"), true);
        //                 if (bool) {
        //                     player.logSkill("olchunlao", target);
        //                     await player.loseToDiscardpile(links);
        //                     event.type = "dying";
        //                     await target.useCard({ name: "jiu", isCard: true }, target);
        //                 }
        //             },
        //             ai: {
        //                 save: true,
        //                 skillTagFilter(player) {
        //                     return player.getExpansions("olchunlao").length;
        //                 },
        //                 order: 6,
        //                 result: { target: 1 },
        //             },
        //         },
        //         gain: {
        //             audio: "chunlao",
        //             audioname: ["xin_chengpu"],
        //             trigger: { global: "loseHpEnd" },
        //             filter(event, player) {
        //                 return player.getExpansions("olchunlao").length;
        //             },
        //             async cost(event, trigger, player) {
        //                 const cards = player.getExpansions("olchunlao");
        //                 event.result = await player
        //                     .chooseButton(["###" + get.prompt("olchunlao") + "###获得至多两张“醇”？", cards], [1, 2])
        //                     .set("ai", button => {
        //                         const player = get.event().player;
        //                         return player.hasSha() ? 0 : get.value(button.link);
        //                     })
        //                     .forResult();
        //                 if (event.result.bool) event.result.cards = event.result.links;
        //             },
        //             async content(event, trigger, player) {
        //                 await player.gain(event.cards, player, "give");
        //             },
        //         },
        //     },
        // },
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
                    sub: true,
                    sourceSkill: "old_qiaoli",
                    _priority: 0,
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
                        "step 1";
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
                        "step 2";
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
                        "step 3";
                        if (result.bool) {
                            var res = result.cards,
                                target = result.targets[0].playerid;
                            player.addGaintag(res, "old_qiaoli_given");
                            cards.removeArray(res);
                            if (!event.given_map[target]) event.given_map[target] = [];
                            event.given_map[target].addArray(res);
                            if (cards.length) event.goto(2);
                        }
                        "step 4";
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
                    sourceSkill: "old_qiaoli",
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
                target: "useCardToTarget",
            },
            filter(event, player) {
                var bool1 = get.type(event.card) == "basic";
                var bool2 = get.type(event.card) == "trick";
                if (!bool1 && !bool2) return false;
                return player != event.player && player.countCards("h") > 0;
            },
            usable: 1,
            logTarget: "player",
            check(event, player) {
                if (get.attitude(player, event.player) > 0 || event.player.hasSkillTag("nogain")) return true;
                var eff = get.effect(player, event.card, event.player, player);
                if (eff >= 0) return false;
                var suits = [],
                    banned = [],
                    hs = player.getCards("h");
                for (var i of hs) {
                    var suit = get.suit(i, player);
                    suits.add(suit);
                    if (!lib.filter.cardDiscardable(i, player, "old_qingliang")) banned.add(suit);
                }
                suits.removeArray(banned);
                for (var i of suits) {
                    var cards = player.getCards("h", function (card) {
                        return get.suit(card, player) == i;
                    });
                    if (-eff / 2 - get.value(cards, player) > 0) return true;
                }
                return false;
            },
            content() {
                "step 0";
                player.showHandcards(get.translation(player) + "发动了【清靓】");
                "step 1";
                var suits = [],
                    banned = [],
                    hs = player.getCards("h");
                for (var i of hs) {
                    var suit = get.suit(i, player);
                    suits.add(suit);
                    if (!lib.filter.cardDiscardable(i, player, "old_qingliang")) banned.add(suit);
                }
                if (suits.length > banned.length) {
                    player
                        .chooseControl()
                        .set("choiceList", ["和" + get.translation(trigger.player) + "各摸一张牌", "弃置一种花色的所有手牌，令" + get.translation(trigger.card) + "对自己无效"])
                        .set("ai", function () {
                            var player = _status.event.player,
                                event = _status.event.getTrigger();
                            if (get.attitude(player, event.player) > 0 || event.player.hasSkillTag("nogain")) return 0;
                            return 1;
                        });
                    event.suits = suits;
                    suits.removeArray(banned);
                    suits.sort();
                } else {
                    event._result = { index: 0 };
                }
                "step 2";
                if (result.index == 0) {
                    var list = [player, trigger.player].sortBySeat();
                    list[0].draw("nodelay");
                    list[1].draw();
                    event.finish();
                } else {
                    if (event.suits.length == 1) event._result = { control: event.suits[0] };
                    else
                        player
                            .chooseControl(event.suits)
                            .set("prompt", "选择弃置一种花色的所有牌")
                            .set("ai", function () {
                                var player = _status.event.player,
                                    list = _status.event.controls.slice(0);
                                var gett = function (suit) {
                                    var cards = player.getCards("h", function (card) {
                                        return get.suit(card, player) == suit;
                                    });
                                    return get.value(cards);
                                };
                                return list.sort(function (b, a) {
                                    return gett(b) - gett(a);
                                })[0];
                            });
                }
                "step 3";
                var cards = player.getCards("h", function (card) {
                    return get.suit(card) == result.control;
                });
                if (cards.length) player.discard(cards);
                trigger.targets.remove(player);
                trigger.getParent().triggeredTargets2.remove(player);
                trigger.untrigger();
            },
            _priority: 0,
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
                        "step 1";
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
                        "step 2";
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
                "step 1";
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
                "step 2";
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
                    const bool = await target
                        .chooseToDiscard(`弃置一张${get.translation(suit)}牌，否则${get.translation(player)}对你造成1点伤害`, "he", (card, player) => {
                            return get.event("suit") == get.suit(card);
                        })
                        .set("ai", card => {
                            const player = get.player(),
                                target = get.event().getParent().player;
                            if (get.damageEffect(player, target, player) > 0) return 0;
                            return 7.5 - get.value(card);
                        })
                        .set("suit", suit)
                        .forResultBool();
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
                                if (!Object.values(map).flat().length) return get.event("cards").filter(card => get.suit(card) == get.suit(link)).length > 1;
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
                            if (get.event("toEnemy")) return Math.max(0.01, 100 - att);
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
                                .chooseTarget(get.prompt2(event.name.slice(0, -"_cost".length)), (card, player, target) => {
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
                            const name = event.name.slice(0, -"_cost".length);
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
                                .chooseTarget(get.prompt2(event.name.slice(0, -"_cost".length)), (card, player, target) => {
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
                                .chooseTarget(get.prompt2(event.name.slice(0, -"_cost".length)), (card, player, target) => {
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
                                .chooseTarget(get.prompt2(event.name.slice(0, -"_cost".length)))
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
                                .chooseTarget(get.prompt2(event.name.slice(0, -"_cost".length)), lib.filter.notMe)
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
                    name: "你可以打出一张手牌替换此判定牌",
                    filter: item => item.includes("判定牌生效前"),
                    effect: {
                        filter(event, player) {
                            return player.countCards("hs");
                        },
                        async cost(event, trigger, player) {
                            const {
                                result: { bool, cards },
                            } = await player
                                .chooseCard(get.translation(trigger.player) + "的" + (trigger.judgestr || "") + "判定为" + get.translation(trigger.player.judging[0]) + "，" + get.prompt(event.name.slice(0, -"_cost".length)), "hs", card => {
                                    const player = _status.event.player;
                                    const mod2 = game.checkMod(card, player, "unchanged", "cardEnabled2", player);
                                    if (mod2 != "unchanged") return mod2;
                                    const mod = game.checkMod(card, player, "unchanged", "cardRespondable", player);
                                    if (mod != "unchanged") return mod;
                                    return true;
                                })
                                .set("ai", card => {
                                    const trigger = _status.event.getTrigger();
                                    const player = _status.event.player;
                                    const judging = _status.event.judging;
                                    const result = trigger.judge(card) - trigger.judge(judging);
                                    const attitude = get.attitude(player, trigger.player);
                                    if (attitude == 0 || result == 0) return 0;
                                    if (attitude > 0) {
                                        return result - get.value(card) / 2;
                                    } else {
                                        return -result - get.value(card) / 2;
                                    }
                                })
                                .set("judging", trigger.player.judging[0]);
                            if (bool) event.result = { bool, cost_data: { cards } };
                        },
                        popup: false,
                        async content(event, trigger, player) {
                            const chooseCardResultCards = event.cost_data.cards;
                            lib.skill.old_olhedao.tianshuClear(event.name, player);
                            await player.respond(chooseCardResultCards, event.name, "highlight", "noOrdering");
                            if (trigger.player.judging[0].clone) {
                                trigger.player.judging[0].clone.classList.remove("thrownhighlight");
                                game.broadcast(card => {
                                    if (card.clone) card.clone.classList.remove("thrownhighlight");
                                }, trigger.player.judging[0]);
                                game.addVideo("deletenode", player, get.cardsInfo([trigger.player.judging[0].clone]));
                            }
                            player.$gain2(trigger.player.judging);
                            await player.gain(trigger.player.judging);
                            trigger.player.judging[0] = chooseCardResultCards[0];
                            trigger.orderingCards.addArray(chooseCardResultCards);
                            game.log(trigger.player, "的判定牌改为", chooseCardResultCards[0]);
                            await game.delay(2);
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
                                .chooseTarget(get.prompt2(event.name.slice(0, -"_cost".length)), (card, player, target) => {
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
                                .chooseTarget(get.prompt2(event.name.slice(0, -"_cost".length)), [1, 2])
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
                                .chooseTarget(get.prompt2(event.name.slice(0, -"_cost".length)))
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
                    name: "你可令你对一名角色使用牌无距离和次数限制直到回合结束",
                    effect: {
                        filter(event, player) {
                            return game.hasPlayer(target => !player.getStorage("old_olhedao_effect").includes(target));
                        },
                        async cost(event, trigger, player) {
                            event.result = await player
                                .chooseTarget(get.prompt2(event.name.slice(0, -"_cost".length)), (card, player, target) => {
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
                            return player.countCards("he", card => {
                                if (get.position(card) === "h" && _status.connectMode) {
                                    return true;
                                }
                                return lib.filter.cardDiscardable(card, player);
                            }) >= 2 && game.hasPlayer(target => target != player);
                        },
                        async cost(event, trigger, player) {
                            event.result = await player
                                .chooseCardTarget({
                                    prompt: get.prompt2(event.name.slice(0, -"_cost".length)),
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
                                    get.prompt2(event.name.slice(0, -"_cost".length)),
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
                                    get.prompt2(event.name.slice(0, -"_cost".length)),
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
                    game.broadcastAll((player, skill) => {
                        delete lib.skill[skill].nopop;
                        lib.skill[skill].markimage = "image/card/tianshu1.png";
                        if (player.marks[skill]) player.marks[skill].setBackgroundImage(lib.skill[skill].markimage);
                    }, player, skill);
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
                    intro: { content: "对$使用牌无距离和次数限制" },
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
                const froms = await player
                    .chooseButton(["青书：请选择“天书”时机", [FromItems.randomGets(3).map(item => [item, item.name]), "textbutton"]], true)
                    .set("ai", () => 1 + Math.random())
                    .forResult("links");
                if (!froms?.length) return;
                const [from] = froms;
                const ToItems = lib.skill.old_olhedao.tianshuContent.filter(item => {
                    return !item.filter || item.filter(from.name);
                });
                const tos = await player
                    .chooseButton(['###青书：请选择“天书”效果###<div class="text center">' + from.name + "</div>", [ToItems.randomGets(3).map(item => [item, item.name]), "textbutton"]], true)
                    .set("ai", () => 1 + Math.random())
                    .forResult("links");
                if (!tos?.length) return;
                const [to] = tos;
                let skill;
                while (true) {
                    skill = "old_olhedao_tianshu_" + Math.random().toString(36).slice(-8);
                    if (!lib.skill[skill]) break;
                }
                game.broadcastAll(
                    (skill, from, to) => {
                        lib.skill[skill] = { nopop: true, old_olhedao: true, charlotte: true, onremove: true, ...from.effect, ...to.effect };
                        lib.skill[skill].filter = function (...args) {
                            return (from.filter ? from.filter(...args) : true) && (to.filter ? to.filter(...args) : true);
                        };
                        lib.skill[skill].init = (player, skill) => (player.storage[skill] = player.storage[skill] || [0, skill]);
                        lib.skill[skill].intro = {
                            markcount: (storage = [0]) => storage[0],
                            content(storage, player) {
                                const book = storage?.[1];
                                if (!book) return "查无此书";
                                return [
                                    "此书还可使用" + storage[0] + "次",
                                    (() => {
                                        if (!player.isUnderControl(true) && get.info(book)?.nopop) return "此书仍是个秘密";
                                        return lib.translate[book + "_info"];
                                    })(),
                                ]
                                    .map(str => "<li>" + str)
                                    .join("<br>");
                            },
                        };
                        lib.skill[skill].markimage = "image/card/tianshu2.png";
                        lib.translate[skill] = "天书";
                        lib.translate[skill + "_info"] = from.name + "，" + to.name + "。";
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
            derivation: "old_olhedao_faq",
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
                    lib.skill.old_olhedao.tianshuClear(skill, target, -1);
                }
            },
            ai: {
                order: 1,
                result: { target: 1 },
                combo: "old_olhedao",
            },
        },
        //谋邓艾
        old_olsbjiewan: {
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
                "step 1";
                player
                    .chooseCard("h", true, "解腕：请选择一张伤害类手牌，令此牌本回合造成伤害+1", function (card, player) {
                        var type = get.type(card, false);
                        if (type != "basic" && type != "trick") return false;
                        return get.tag(card, "damage") > 0;
                    })
                    .set("ai", card => 6 - get.value(card));
                "step 2";
                if (result.bool) {
                    player.addGaintag(result.cards, "old_olsbjiewan");
                    player.addTempSkill("old_olsbjiewan_damage");
                    player.addTempSkill("old_olsbjiewan_2");
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
                            return Object.values(evt.gaintag_map).some(tags => tags.includes("old_olsbjiewan"));
                        });
                    },
                    content() {
                        game.countPlayer(function (current) {
                            current.addTempSkill("old_olsbjiewan_1");
                        });
                    },
                },
                1: {
                    audio: "old_olsbjiewan",
                    trigger: {
                        player: "damageBegin4",
                    },
                    forced: true,
                    charlotte: true,
                    logTarget: "player",
                    content() {
                        trigger.num++;
                        player.removeSkill("old_olsbjiewan_1");
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
                            current.removeSkill("old_olsbjiewan_1");
                        });
                    },
                },
            },
        },
        olsbpixian: {
            audio: 2,
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
                "step 1";
                if (result.control == "回复1点体力") {
                    player.recover();
                }
                "step 2";
                if (result.control == "增加1点体力上限") {
                    player.gainMaxHp();
                }
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
                                const player = get.event("player"),
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
                if (get.attitude(player, event.player) > 0 || (player.hp < 2 && !get.tag(event.card, "damage"))) return false;
                let evt = event.getParent(),
                    directHit = (evt.nowuxie && get.type(event.card, "trick") === "trick") || (evt.directHit && evt.directHit.includes(player)) || (evt.customArgs && evt.customArgs.default && evt.customArgs.default.directHit2);
                if (get.tag(event.card, "respondSha")) {
                    if (directHit || player.countCards("h", { name: "sha" }) === 0) return true;
                } else if (get.tag(event.card, "respondShan")) {
                    if (directHit || player.countCards("h", { name: "shan" }) === 0) return true;
                } else if (get.tag(event.card, "damage")) {
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
                const { result } = await player
                    .chooseNumbers(get.prompt2("old_olsiqi"), [{ prompt: "请选择你要亮出的牌数", min: 1, max: redCards.length }])
                    .set("processAI", () => {
                        return [get.event().maxNum];
                    })
                    .set("maxNum", redCards.length);
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
                    const { result: result2 } = await player
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
                        });
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
                            replace: { window() { } },
                        });
                        next.backup("old_olsiqi_backup");
                        next.set("addCount", false);
                        player
                            .when("chooseToUseBegin")
                            .filter(evt => evt === next)
                            .then(() => (trigger.filterCard = () => false));
                        const { result: result3 } = await next;
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
                    audio: "old_olsiqi",
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
                if (name == "useCardToPlayer") return get.tag(event.card, "damage") > 0.5 && event.targets.length == 1 && player.countDiscardableCards(player, "he", card => get.color(card, player) == "red");
                return get.tag(event.card, "damage") > 0.5 && event.targets.includes(player) && !player.hasHistory("damage", evt => evt.getParent("useCard") == event) && player.countDiscardableCards(player, "he", card => get.color(card, player) == "black") && player.hasUseTarget({ name: "sha", isCard: true }, false, false);
            },
            logTarget(event, player, name) {
                if (name == "useCardToPlayer") return [event.target];
                return [];
            },
            async cost(event, trigger, player) {
                const name = event.triggername;
                if (name == "useCardToPlayer") {
                    event.result = await player
                        .chooseToDiscard(`###${get.prompt(event.skill, trigger.target)}###弃置任意张红色牌并令其弃置等量红色手牌，否则不能响应该牌`, [1, Infinity], "he", "chooseonly", (card, player) => get.color(card, player) == "red")
                        .set("ai", card => {
                            const player = get.player(),
                                target = get.event().getTrigger().target,
                                cardx = get.event().getTrigger().card;
                            if (get.effect(target, cardx, player, player) < 0 || cardx.name == "huogong") return 0;
                            if (ui.selected.cards?.length == target.countCards("h", { color: "red" })) return 0;
                            return 7 - get.value(card);
                        })
                        .forResult();
                } else {
                    event.result = await player
                        .chooseToDiscard(`###${get.prompt(event.skill)}###弃置一张黑色牌并视为使用一张【杀】`, "he", "chooseonly", (card, player) => get.color(card, player) == "black")
                        .set("ai", card => {
                            if (!get.player().hasValueTarget({ name: "sha", isCard: true }, false, false)) return 0;
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
                            if (get.event().num > 2 || !player.canRespond(trigger) || trigger.card.name == "huogong") return 0;
                            if (player.canRespond(trigger, card)) return 6 - get.value(card);
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
                    .then(() => {
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
                "step 1";
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
                "step 1";
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
                "step 2";
                var card = { name: "sha", isCard: true, storage: { old_dcporui: true } };
                if (player.canUse(card, target, false) && target.isIn()) {
                    player.useCard(card, target);
                    event.num--;
                } else event.goto(4);
                "step 3";
                if (event.num > 0) event.goto(2);
                "step 4";
                if (!player.hasMark("old_dcgonghu_damage")) {
                    var cards = player.getCards("h");
                    if (cards.length == 0) event._result = { bool: false };
                    else if (cards.length <= event.num2) event._result = { bool: true, cards: cards };
                    else player.chooseCard("破锐：交给" + get.translation(target) + get.cnNumber(event.num2) + "张手牌", true, event.num2);
                } else event.finish();
                "step 5";
                if (result.bool) {
                    player.give(result.cards, target);
                }
                event.finish();
                "step 6";
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
                        "step 1";
                        if (result.bool) {
                            if (!event.isMine() && !event.isOnline()) game.delayx();
                            event.targets = result.targets;
                        } else {
                            event.finish();
                        }
                        "step 2";
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
                "step 1";
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
                "step 2";
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
                const {
                    result: { bool, links },
                } = await player
                    .chooseButton(["灵慧：是否使用其中的一张牌并获得剩余牌？", cards])
                    .set("filterButton", button => {
                        return get.player().hasUseTarget(button.link);
                    })
                    .set("ai", button => {
                        return get.event("player").getUseValue(button.link);
                    });
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
                "step 1";
                if (trigger.player != player && trigger.player.hp != player.hp) {
                    event.num1 = player.hp;
                    event.num2 = trigger.player.hp;
                    event.num3 = event.num1 - event.num2;
                } else event.finish();
                "step 2";
                player.hp = event.num2;
                player.update();
                if (trigger.player.isIn()) {
                    trigger.player.hp = event.num1;
                    trigger.player.update();
                }
                game.log(player, "和", trigger.player, "交换了体力值");
                "step 3";
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
                    const {
                        result: { control },
                    } = await player
                        .chooseControl(types)
                        .set("ai", () => {
                            const player = get.event("player"),
                                types = get.event("controls").slice();
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
                        .set("prompt", "弃置一种类别的所有手牌，然后摸这些牌的名字字数之和的牌");
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
                            const {
                                result: { bool, targets },
                            } = await player.chooseTarget("抚黎：是否令一名角色的攻击范围-1直到你的下个回合开始？").set("ai", target => {
                                const player = get.event("player"),
                                    num = target.getAttackRange();
                                return -get.sgn(get.attitude(player, target)) * (target.getAttackRange() + (num <= 0 ? -num + 0.5 : num));
                            });
                            if (bool) {
                                const target = targets[0];
                                player.line(target);
                                target.addSkill("old_dcfuli_range");
                                target.addMark("old_dcfuli_range", 1, false);
                                player
                                    .when(["phaseBegin", "dieBegin"])
                                    .then(() => {
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
                    const {
                        result: { bool, links },
                    } = await player.chooseButton(['###德化###<div class="text center">视为使用一张未以此法选择过且可以使用的伤害类卡牌</div>', [list, "vcard"]], true).set("ai", button => {
                        const name = button.link[2],
                            player = get.player();
                        let value = player.getUseValue({ name, isCard: true }, null, true);
                        if (player.countCards("h", card => get.name(card) === name && player.hasUseTarget(card))) value /= 3;
                        if (name === "sha") value /= 2;
                        return value;
                    });
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
                    sub: true,
                    sourceSkill: "old_dcdehua",
                    "_priority": 0,
                },
            },
            "_priority": 0,
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
                if (player.hp > 0) choices.push("选项三");
                else choiceList[2] = "<span style='opacity:0.5'>" + choiceList[1] + "(体力值为0)</span>";
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
                "step 1";
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
                "step 1";
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
                "step 1";
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
                    sourceSkill: "old_dcqingshi",
                },
                clear: {
                    onremove: true,
                    charlotte: true,
                    sourceSkill: "old_dcqingshi",
                },
                blocker: {
                    charlotte: true,
                    sourceSkill: "old_dcqingshi",
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
                            if (evt.getParent() != trigger) return false;
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
                        if (get.event("dying")) return get.attitude(player, get.event("dying"));
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
                        const links = await target
                            .chooseButton(["选择一个牌名", [vcard, "vcard"]], true)
                            .set("user", player)
                            .set("ai", button => {
                                const player = get.player(),
                                    user = get.event("user");
                                return user.getUseValue({ name: button.link[2], nature: button.link[3] }) * get.attitude(player, user);
                            })
                            .forResultLinks();
                        if (!links || !links.length) return;
                        const viewAs = { name: links[0][2], nature: links[0][3] };
                        if (!isMe) {
                            cards = await target
                                .chooseToGive(player)
                                .set("ai", card => {
                                    const player = get.event("player"),
                                        target = get.event().getParent().player;
                                    if (get.attitude(player, target) <= 0) return 0;
                                    return 6 - get.value(card);
                                })
                                .forResultCards();
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
                            if (evt.getParent() != event) return false;
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
                "step 1";
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
                "step 2";
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
                "step 3";
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
                const control = await player
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
                    .forResultControl();
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
                        if (evt.getParent() != event.getParent()) return false;
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
                        if (player == target && !get.event("drawed")) return eff2 * (1 + player.maxHp - player.countCards("h"));
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
                        .chooseCard("h", card => get.event("toLose")?.includes(card), true)
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
                const result = await player.drawTo(player.maxHp).forResult();
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
                        const {
                            result: { bool, links },
                        } = await player
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
                            });
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
                                if (evt.getParent() != event.getParent("useCard")) return false;
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
                        .then(() => delete player.storage.old_jingyu_used);
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
                "step 1";
                event.count--;
                player.draw();
                "step 2";
                var hs = player.getCards("h");
                if (hs.length) {
                    if (hs.length == 1) event._result = { bool: true, cards: hs };
                    else player.chooseCard("h", true, "选择一张手牌作为“权”");
                } else event.goto(4);
                "step 3";
                if (result.bool && result.cards && result.cards.length) {
                    player.addToExpansion(result.cards, "giveAuto", player).gaintag.add("old_xinquanji");
                }
                "step 4";
                if (event.count > 0 && player.hasSkill(event.name) && !get.is.blocked(event.name, player)) {
                    player.chooseBool(get.prompt2("old_xinquanji")).set("frequentSkill", event.name);
                } else event.finish();
                "step 5";
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
                        "step 1";
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
                        "step 1";
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
                const { result } = await player
                    .chooseTarget()
                    .set("filterTarget", function (card, player, target) {
                        return player != target && target.countCards("he");
                    })
                    .set("prompt", get.prompt2("old_stardangchen"))
                    .set("ai", function (card, player, target) {
                        return -get.attitude(player, target);
                    });
                event.result = result;
            },
            async content(event, trigger, player) {
                const target = event.targets[0];
                const { result } = await target.chooseToGive(player).set("selectCard", [1, Infinity]).set("forced", true).set("position", "he");
                if (result?.bool && result.cards?.length) {
                    player.addTempSkill("old_stardangchen_buff");
                    player.addMark("old_stardangchen_buff", result.cards.length, false);
                }
            },
            subSkill: {
                buff: {
                    audio: "old_stardangchen",
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
                        const { result } = await player
                            .judge(card => {
                                const number = get.number(card);
                                return 10 * (0.5 - (number % get.player().countMark("old_stardangchen_buff") !== 0));
                            })
                            .set("judge2", result => Boolean(result.bool));
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
                                        (await player
                                            .chooseTarget("是否获得一名其他角色的一张手牌？", (card, player, target) => {
                                                return target !== player && target.countCards("h");
                                            })
                                            .set("ai", target => {
                                                const player = get.player();
                                                return get.effect(target, { name: "shunshou_copy", position: "h" }, player, player);
                                            })
                                            .forResult("targets")) ?? [];
                                    if (target) {
                                        player.line(target);
                                        await player.gainPlayerCard(target, "h", true);
                                    }
                                }
                            }
                            if (num >= 4) {
                                if (game.hasPlayer(target => target.countDiscardableCards(player, "ej"))) {
                                    const [target] =
                                        (await player
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
                                            .forResult("targets")) ?? [];
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
                    (await player
                        .chooseControl(list, function (event, player) {
                            return _status.event.choice;
                        })
                        .set("choice", get.attitude(player, target) > 0 ? str1 : str2)
                        .forResultControl());
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
        //二刘
        old_dcllqixin: {
            audio: "dcllqixin",
            trigger: {
                player: ["gainAfter", "useCard"],
                global: "loseAsyncAfter",
            },
            filter(event, player) {
                if (event.name === "useCard") return event.getParent(2).name !== "old_dcllqixin" && get.type(event.card) === "basic";
                if (event.name === "gain" && (event.getParent().name !== "draw" || event.getParent(2).name === "old_dcllqixin")) return false;
                if (event.name !== "gain" && event.type !== "draw") return false;
                return event.getg(player).length === 2;
            },
            direct: true,
            clearTime: true,
            frequent: true,
            async content(event, trigger, player) {
                let result;
                if (trigger.name === "useCard") {
                    result = await player.chooseBool(get.prompt(event.name), "摸两张牌").set("frequentSkill", event.name).forResult();
                    if (result?.bool) {
                        player.logSkill(event.name);
                        await player.draw(2);
                    }
                } else {
                    result = await player
                        .chooseToUse(function (card, player, event) {
                            if (get.type(card) !== "basic") return false;
                            return lib.filter.cardEnabled.apply(this, arguments);
                        }, get.translation(event.name) + "：是否使用一张基本牌？")
                        .set("logSkill", event.name)
                        .set("addCount", false)
                        .forResult();
                }
                if (!result?.bool && player.storage.counttrigger?.[event.name] > 0) player.storage.counttrigger[event.name]--;
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
                const player = get.event("player");
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
                        const source = get.event("source");
                        return game.hasPlayer(target => {
                            return lib.filter.targetEnabled2({ name: button.link[2], isCard: true }, source, target);
                        });
                    })
                    .set("ai", button => {
                        const card = get.autoViewAs({ name: button.link[2], isCard: true });
                        return get.event("source").getUseValue(card) * Math.sign(get.attitude(get.player(), get.event("source")));
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
                            return lib.filter.targetEnabled2(get.event("cardx"), get.event("source"), target);
                        },
                        true,
                        range
                    )
                    .set("source", target)
                    .set("cardx", card)
                    .set("ai", target => {
                        return get.effect(target, get.event("cardx"), get.event("source"), get.player());
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
                    audio: "old_dcsbshimou",
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
                    "step 1";
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
                const num = player.getDamagedHp();
                await player.recover(num);
                await player.draw(num);
                await player.removeSkills("old_dcyizheng");
                if (player.hasSkill("dcboxuan")) {
                    player.storage.dcboxuan = true;
                }
                game.log(player, `修改了〖博玄〗`);
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
                "step 1";
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
                "step 1";
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
                "step 1";
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
                    sourceSkill: "old_yuzhang",
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
                    sourceSkill: "old_yuzhang",
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
                            "step 1";
                            if (result.bool) {
                                player.logSkill("old_zhenshan", result.targets);
                                //player.addTempSkill("old_zhenshan_used");
                                player.swapHandcards(result.targets[0]);
                                delete event.result.skill;
                            } else event.finish();
                            "step 2";
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
                "step 1";
                event.choice = result.control;
                if (event.choice == "背水！" && player != trigger.player) {
                    player.give(player.getCards("h"), trigger.player);
                }
                "step 2";
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
                "step 3";
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
                "step 4";
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
                "step 1";
                var skill = result.control;
                player.addSkills(skill);
                event.old_twbudao_skill = skill;
                player.chooseTarget(lib.filter.notMe, "是否令一名其他角色也获得【" + get.translation(skill) + "】？").set("ai", function (target) {
                    var player = _status.event.player;
                    if (player.identity == "nei") return 0;
                    return get.attitude(player, target);
                });
                "step 2";
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
                "step 3";
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
                "step 1";
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
                        if (!get.event("bool")) return 0;
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
                        "step 1";
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
                const {
                    result: { control },
                } = await player
                    .chooseControl(choice)
                    .set("prompt", "忠义：请选择一项")
                    .set("choiceList", choiceList)
                    .set("ai", () => {
                        const player = get.event("player");
                        const num = get.event("num"),
                            num2 = get.event("num2");
                        if (player.isHealthy()) return "摸牌";
                        return player.hp + player.countCards("hs", card => player.canSaveCard(card, player)) - num2 > 0 && num > num2 ? "背水！" : "回血";
                    })
                    .set("num", num)
                    .set("num2", num2);
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
                const {
                    result: { bool, targets },
                } = await player
                    .chooseTarget("额外指定至多" + get.cnNumber(num) + "名目标", [1, num], (card, player, target) => {
                        const trigger = _status.event.getTrigger();
                        return !trigger.targets.includes(target) && player.canUse(trigger.card, target);
                    })
                    .set("ai", target => {
                        const player = get.event("player"),
                            trigger = _status.event.getTrigger();
                        return get.effect(target, trigger.card, player, player);
                    });
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
                            .when("useCard2")
                            .filter(evt => evt.getParent(2) == event)
                            .assign({
                                firstDo: true,
                            })
                            .then(() => {
                                trigger.baseDamage++;
                                if (
                                    !game.hasPlayer(target => {
                                        return !trigger.targets.includes(target) && player.canUse(trigger.card, target);
                                    })
                                )
                                    return;
                                player
                                    .chooseTarget("额外指定至多" + get.cnNumber(num) + "名目标", [1, num], (card, player, target) => {
                                        const trigger = _status.event.getTrigger();
                                        return !trigger.targets.includes(target) && player.canUse(trigger.card, target);
                                    })
                                    .set("ai", target => {
                                        const player = get.event("player"),
                                            trigger = _status.event.getTrigger();
                                        return get.effect(target, trigger.card, player, player);
                                    });
                            })
                            .then(() => {
                                if (result.bool) {
                                    const targets = result.targets;
                                    player.line(targets);
                                    trigger.targets.addArray(targets);
                                }
                            })
                            .vars({ num: num });
                        player.chooseUseTarget("视为使用造成的伤害+1且可以额外指定" + num + "个目标的【杀】", card, false, true);
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
                player
                    .when({ global: "phaseAfter" })
                    .then(() => {
                        player.insertPhase();
                    })
                    .then(() => {
                        const num = Math.min(7, player.getStorage("twbeiding").length);
                        if (num > 0) player.draw(num);
                    })
                    .then(() => {
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
                const {
                    result: { bool, links },
                } = await player
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
                    );
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
                const {
                    result: { bool, links },
                } = await player
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
                    .set("selectButton", [1, 2]);
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
                        .map((_, i) => `equip${i}`)
                        .filter(i => player.hasDisabledSlot(i))
                        .concat(["cancel2"]);
                    const control = await player
                        .chooseControl(list)
                        .set("prompt", "煌烛：选择一个已废除装备栏的类别")
                        .set("prompt2", "从牌堆或弃牌堆中随机获得一张对应副类别的装备牌，并记录其牌名")
                        .set("ai", () => {
                            return get
                                .event()
                                .controls.filter(i => i !== "cancel2")
                                .randomGet();
                        })
                        .forResultControl();
                    event.result = {
                        bool: control != "cancel2",
                        cost_data: control,
                    };
                } else {
                    const storage = player.getStorage("old_twhuangzhu_effect");
                    const st2 = player.getStorage("old_twhuangzhu_equip").slice().map(equip => equip[2]);
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
                        let list = [equips, "vcard"]
                        if (equips.length) {
                            chooseList.push(list);
                        }
                    }
                    console.log(chooseList);
                    const {
                        result: { bool, links },
                    } = await player.chooseButton(chooseList, [1, 2])
                        .set("filterButton", button => {
                            let st2 = get.event("st2");
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
                        .set("ai", button => get.equipValue({ name: button.link[2] }, get.player()));
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
                        player.unmarkAuto(
                            event.name,
                            player.getStorage(event.name).filter(name => trigger.slots.some(t => get.subtypes(name[2]).includes(t)))
                        );
                        if (!player.getStorage(event.name).length) player.removeSkill(event.name);
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
                const control = await player
                    .chooseControl(["old_twhuangzhu", "old_twliyuan"])
                    .set("prompt", "选择保留的技能")
                    .set("ai", () => {
                        return get.event().controls.randomGet();
                    })
                    .forResultControl();
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
                    choice = await player
                        .chooseControl()
                        .set("choiceList", ["观看" + str + "的手牌并将其中至多" + get.cnNumber(num) + "张牌置于牌堆顶", "令" + str + "摸" + get.cnNumber(num) + "张牌"])
                        .set("ai", () => (get.attitude(get.player(), get.event().getTrigger().player) > 0 ? 1 : 0))
                        .forResult("index");
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
                            give = await player
                                .chooseControl(gives)
                                .set("ai", () => 0)
                                .set("prompt", "仙援：将任意枚“仙援”标记分配给" + get.translation(target))
                                .forResult("index");
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
                    content() {
                        "step 0";
                        player.addTempSkill("old_twshelie_round", "roundStart");
                        player.chooseControl("摸牌阶段", "出牌阶段").set("prompt", "涉猎：请选择要执行的额外阶段");
                        "step 1";
                        const evt = trigger.getParent("phase", true, true);
                        if (result.index == 0) {
                            if (evt && evt.phaseList) evt.phaseList.splice(evt.num + 1, 0, "phaseDraw|old_twshelie");
                        }
                        if (result.index == 1) {
                            var next = player.phaseUse();
                            event.next.remove(next);
                            if (evt && evt.phaseList) evt.phaseList.splice(evt.num + 1, 0, "phaseUse|old_twshelie");
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
                    return arr.add(get.suit(card, player)), arr;
                }, []).length;
                "step 1";
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
                "step 2";
                if (result.bool) {
                    if (result.moved[1].length) target.discard(result.moved[1]);
                    else {
                        player.showCards(result.moved[2], get.translation(player) + "对" + get.translation(target) + "发动了【攻心】");
                        target.lose(result.moved[2], ui.cardPile, "visible", "insert");
                    }
                }
                "step 3";
                if (
                    event.num ==
                    target.getCards("h").reduce(function (arr, card) {
                        return arr.add(get.suit(card, player)), arr;
                    }, []).length
                )
                    event.finish();
                "step 4";
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
                "step 5";
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
                        const {
                            result: { links, bool },
                        } = await player.chooseButton(["###" + get.prompt("old_friendxiaxing") + '###<div class="text center">移去1枚“启诲”标记，获得' + get.translation(gains) + "</div>", [storage.map(c => [c, get.translation(c)]), "tdnodes"]]).set("ai", button => {
                            const player = get.player();
                            if (player.getVEquip("xuanjian")) return 0;
                            return (
                                1 +
                                Math.random() +
                                player.countCards("he", card => {
                                    return get.type2(card) === button.link && player.hasValueTarget(card);
                                })
                            );
                        });
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
                                            .then(() => {
                                                player
                                                    .chooseTarget("是否为" + get.translation(trigger.card) + "增加一个目标？", (card, player, target) => {
                                                        const evt = get.event().getTrigger();
                                                        return !evt.targets.includes(target) && lib.filter.targetEnabled2(evt.card, player, target) && lib.filter.targetInRange(evt.card, player, target);
                                                    })
                                                    .set("ai", target => {
                                                        const player = get.player(),
                                                            evt = get.event().getTrigger();
                                                        return get.effect(target, evt.card, player);
                                                    });
                                            })
                                            .then(() => {
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
                                            .then(() => player.draw(2));
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
                        const { result } = await target.chooseToDiscard("战烈：弃置一张牌，否则不可响应" + get.translation(trigger.card)).set("ai", card => {
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
                        });
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
        old_potwanglie: {
            audio: "potwanglie",
            trigger: { player: "phaseUseBegin" },
            filter(event, player) {
                return player.countCards("h");
            },
            async cost(event, trigger, player) {
                event.result = await player
                    .chooseCard(get.prompt2("old_potwanglie"), "h")
                    .set("ai", card => {
                        const player = get.player();
                        if (player.hasValueTarget(card, true)) {
                            return player.getUseValue(card, false, true) * (get.tag(card, "damage") > 0.5 ? 2 : 1);
                        }
                        return 0.1 + Math.random();
                    })
                    .forResult();
            },
            async content(event, trigger, player) {
                const card = event.cards[0];
                player.addGaintag(card, "old_potwanglie");
                player.addTempSkill(event.name + "_effect", "phaseUseAfter");
                await game.delayx();
            },
            locked: false,
            mod: {
                aiOrder(player, card, num) {
                    if (!player.isPhaseUsing() || typeof card !== "object" || num <= 0) return;
                    if (get.itemtype(card) == "card" && card.hasGaintag("old_potwanglie")) num / 20;
                    return num;
                },
            },
            subSkill: {
                effect: {
                    charlotte: true,
                    onremove(player) {
                        player.removeGaintag("old_potwanglie");
                    },
                    mod: {
                        targetInRange(card, player, target) {
                            if (card.cards?.some(cardx => cardx.hasGaintag("old_potwanglie"))) return true;
                        },
                    },
                    audio: "old_potwanglie",
                    trigger: { player: ["useCard", "useCardAfter"] },
                    filter(event, player) {
                        return player.hasHistory("lose", evt => {
                            if (event !== evt.getParent()) return false;
                            return Object.values(evt.gaintag_map).flat().includes("old_potwanglie");
                        });
                    },
                    silent: true,
                    content() {
                        if (event.triggername == "useCard") {
                            player.logSkill(event.name);
                            trigger.directHit.addArray(game.players);
                            game.log(trigger.card, "不可被响应");
                        } else {
                            player.addTempSkill("old_potwanglie_debuff", "phaseUseAfter");
                        }
                    },
                    ai: {
                        directHit_ai: true,
                        skillTagFilter(player, tag, arg) {
                            if (arg?.card?.cards?.some(card => card.hasGaintag("old_potwanglie"))) return true;
                        },
                    },
                },
                debuff: {
                    mark: true,
                    charlotte: true,
                    intro: { content: "本阶段不能对其他角色使用牌" },
                    mod: {
                        playerEnabled(card, player, target) {
                            if (player !== target) return false;
                        },
                    },
                },
            },
        },
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
            logAudio: index => (typeof index === "number" ? "old_pothongyi" + index + ".mp3" : 2),
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
                    audio: ["old_pothongyi3.mp3", "old_pothongyi4.mp3"],
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
                                await player.draw(2);
                                player.addTempSkill("old_potfuji_clear", { player: "phaseBegin" });
                                await player.addAdditionalSkills("old_potfuji_" + player.playerid, ["old_potfuji_sha", "old_potfuji_shan"], true);
                            }
                            player.when({ player: "phaseBegin" }).then(() => {
                                player.changeSkin({ characterName: "old_pot_yuji" }, "pot_yuji");
                            });
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
    },
    //翻译
    translate: {
        mb_old: "手杀怀旧",
        ol_old: "OL怀旧",
        xin_old: "新杀怀旧",
        tw_old: "海外怀旧",
        other_old: "线下怀旧",

        old_new_simayi: "旧应天神司马懿",
        old_new_simayi_ab: "旧神司马懿",
        old_new_simayi_prefix: "旧|神",
        old_jilin: "戢鳞",
        old_jilin_info: "①游戏开始时，你将牌堆顶三张牌暗置于你的武将牌上，称为“志”。②当你成为其他角色使用牌的目标时，你可以明置一张暗置的“志”令此牌对你无效。③回合开始时，你可用任意张手牌替换等量暗置的“志”。",
        old_yingyou: "英猷",
        old_yingyou_info: "①出牌阶段开始时，你可明置一张“志”然后摸X张牌（X为明置的“志”的数量）。②当你失去与明置的“志”其中一张花色相同的牌时，你摸一张牌。",
        old_yingtian: "应天",
        old_yingtian_info: "觉醒技。一名角色死亡后，若场上势力数不大于2，则你获得〖鬼才〗、〖完杀〗、〖连破〗并失去〖英猷〗且你本局游戏使用牌没有距离限制。",
        old_shen_lusu: "旧神鲁肃",
        old_shen_lusu_prefix: "旧|神",
        old_dingzhou: "定州",
        old_dingzhou_info: "出牌阶段限一次。你可以将X张牌交给一名场上有牌的角色，然后你获得其场上的所有牌（X为其场上的牌数）。",
        old_tamo: "榻谟",
        old_tamo_info: "游戏开始时，你可以重新分配除主公外所有角色的座次。",
        old_tamo_faq: "FAQ",
        old_tamo_faq_info: "<br><li>Q：在一号位不为主公的情况下，〖榻谟〗如何结算？</li><li>A：该角色可以正常进行座次交换。若受此技能影响导致一号位角色发生了变化，则以排列后的一号位角色为起始角色开始本局游戏。</li>",
        old_zhimeng: "智盟",
        old_zhimeng_info: "回合结束后，你可以选择一名其他角色。若如此做，你与其将各自所有手牌置于处理区，然后你随机获得这些牌中的一半（向上取整），其获得剩余的牌。",
        old_mb_jushou: "旧手杀界沮授",
        old_mb_jushou_ab: "旧界沮授",
        old_mb_jushou_prefix: "旧|界",
        old_xinjianying: "渐营",
        old_xinjianying_info: "①当你于出牌阶段内使用与此阶段你使用的上一张牌点数或花色相同的牌时，你可以摸一张牌。②出牌阶段限一次，你可以将一张牌当做任意基本牌使用（不计入次数限制）。若你于此阶段内使用的上一张牌有花色，则此牌的花色视为上一张牌的花色。",
        xinshibei: "矢北",
        xinshibei_info: "锁定技，当你受到伤害后：若此伤害是你本回合第一次受到的伤害，则你回复1点体力；否则你失去1点体力。",
        old_mb_zhuzhi: "旧手杀界朱治",
        old_mb_zhuzhi_ab: "旧界朱治",
        old_mb_zhuzhi_prefix: "旧|界",
        old_sbanguo: "安国",
        old_sbanguo_info: "①游戏开始时，你令一名其他角色获得1枚“安国”标记（有“安国”的角色手牌上限基数等于体力上限）。②出牌阶段开始时，你可以将一名有“安国”的角色的所有“安国”移动给一名本局游戏未获得过“安国”的其他角色。③当你受到伤害时，若有有“安国”的角色且伤害值不小于你的体力值且此伤害没有来源或来源没有“安国”，防止此伤害。④一名角色进入濒死状态时，若其有你因〖安国①〗获得的“安国”，你移去其该“安国”，令其将体力回复至1点。然后你选择一项：1.若你的体力值大于1，你失去体力至1点；2.若你的体力上限大于1，你将体力上限减至1。最后你令其获得X点护甲（X为你以此法失去的体力值或减少的体力上限）。",
        old_mb_sp_zhenji: "手杀SP甄宓",
        old_mb_sp_zhenji_ab: "旧SP甄宓",
        old_mb_sp_zhenji_prefix: "旧|SP",
        old_mbbojian: "博鉴",
        old_mbbojian_info: "锁定技。出牌阶段结束时，若你本阶段使用牌数与花色数与上个出牌阶段皆不同，你摸两张牌；否则你将一张弃牌堆中本阶段你因使用而失去的牌交给一名角色。",
        old_mbjiwei: "济危",
        old_mbjiwei_info: "锁定技。①每个其他角色的回合结束时，此回合每满足一项，你便摸一张牌：1.有至少一名角色失去过牌；2.有至少一名角色受到过伤害。②准备阶段，若你的手牌数不小于存活人数且不小于体力值，你须将手牌中数量较多颜色的牌全部分配给其他角色（若数量相同则选择一种颜色）。",
        old_fuqian: "旧手杀傅佥",
        old_fuqian_ab: "旧傅佥",
        old_fuqian_prefix: "旧",
        old_jueyong: "绝勇",
        old_jueyong_info: "锁定技。①当你不因【绝勇】成为唯一牌的目标时，若此牌不为转化牌且对应的实体牌牌数为1且不为【桃】或【酒】，则你将此牌置于你的武将牌上，称为“绝”，且取消此牌的目标。②结束阶段开始时，若你有“绝”，且“绝”的数量不小于你已损失的体力值，则你令所有“绝”的原使用者依次对你使用所有“绝”，将无法使用的“绝”置入弃牌堆。",
        old_poxiang: "破降",
        old_poxiang_info: "出牌阶段限一次。你可以将一张牌交给一名其他角色并摸三张牌，移去所有“绝”并失去1点体力，然后你跳过本回合的弃牌阶段。",
        old_mb_guozhao: "旧手杀郭照",
        old_mb_guozhao_ab: "旧郭照",
        old_mb_guozhao_prefix: "旧",
        old_yichong: "易宠",
        old_yichong_info: "①准备阶段，你可以选择一名其他角色并选择一个花色，然后你获得其所有此花色的牌，移除场上的所有“雀”标记，令其获得“雀”标记直到你的下个回合开始。②拥有“雀”标记的角色获得你最后一次发动〖易宠①〗选择的花色的牌后，你获得这些牌（你至多通过每个“雀”得到五张牌）。",
        old_wufei: "诬诽",
        old_wufei_info: "若场上存在拥有“雀”标记的角色A，则：①当你使用【杀】或伤害类锦囊牌指定第一个目标后，你令A成为此牌伤害来源。②当你受到伤害后，若A的体力值大于1且A的体力值大于你，则你可以对A造成1点伤害。",
        old_mb_chengui: "旧手杀陈珪",
        old_mb_chengui_ab: "旧陈珪",
        old_mb_chengui_prefix: "旧",
        old_guimou: "诡谋",
        old_guimou_info: "锁定技。游戏开始时/回合结束时，你随机/须选择以下一项直到你的下个准备阶段：①记录场上期间角色使用牌数；②记录期间场上角色弃置牌数；③记录期间场上角色获得牌数。准备阶段，你可以选择一名场上对应记录数值最少的其他角色，观看其手牌并选择其中至多三张牌，然后你可以将其中至多两张牌交给另一名其他角色，然后弃置其余牌。",
        old_yangfu: "旧杨阜",
        old_yangfu_prefix: "旧",
        oldx_jiebing: "借兵",
        oldx_jiebing_info: "每当你受到伤害后，你可以选择一名不为伤害来源的其他角色，随机展示并获得其两张牌，若其中有装备牌，你使用之。",
        old_hannan: "扞难",
        old_hannan_info: "出牌阶段限一次。你可以与一名角色拼点，赢的角色对没赢的角色造成2点伤害。",
        old_lizhaojiaobo: "旧李昭焦伯",
        old_lizhaojiaobo_prefix: "旧",
        old_mbzuoyou: "佐佑",
        old_mbzuoyou_info: "转换技。出牌阶段限一次，阳：你可以令一名角色摸三张牌，然后其弃置两张手牌；阴：你可以令一名角色获得1点护甲。",
        old_mbshishou: "侍守",
        old_mbshishou_info: "锁定技。当你发动〖佐佑〗后，若目标角色不为你，你执行〖佐佑〗中目标角色未执行的一项。",
        old_wangling: "旧王凌",
        old_wangling_prefix: "旧",
        old_sp_wangshuang: "旧手杀王双",
        old_sp_wangshuang_ab: "旧勇王双",
        old_sp_wangshuang_prefix: "旧|勇",
        old_shanxie: "擅械",
        old_shanxie_info: "①出牌阶段限一次，你可选择一项：⒈从牌堆中获得一张武器牌。⒉获得一名其他角色装备区内的一张武器牌并使用，然后其将一张手牌当做【杀】对你使用。②当其他角色使用【闪】响应你使用的【杀】时，若此【闪】没有点数或点数不大于你攻击范围的二倍，则你令此【闪】无效。",
        old_wujing: "旧吴景",
        old_wujing_prefix: "旧",
        old_liubing: "流兵",
        old_liubing_info: "锁定技。①当你声明使用【杀】后，若此牌是你本回合使用的第一张有唯一对应实体牌的【杀】，则你将此牌的花色改为♦。②其他角色于其出牌阶段内使用的非转化黑色杀结算结束后，若此【杀】未造成伤害，则你获得之。",
        old_sp_xinpi: "旧手杀辛毗",
        old_sp_xinpi_ab: "旧信辛毗",
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
        old_sp_zhujun: "旧手杀朱儁",
        old_sp_zhujun_ab: "旧严朱儁",
        old_sp_zhujun_prefix: "旧|严",
        old_yj_weiyan: "旧☆魏延",
        old_yj_weiyan_prefix: "旧|☆",
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
        old_mbjiejian_info: "准备阶段，你可将任意张手牌交给任意名其他角色，并令这些角色获得“节谏”标记。“节谏”角色成为一张非装备牌的唯一目标时，你可将此牌转移给你，然后摸一张牌。“节谏”角色的回合结束时，移去其“节谏”标记，若其体力值不小于X（X为你交给其牌时其的体力值），你摸两张牌。",
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

        old_sb_huangyueying: "旧谋黄月英",
        old_sb_huangyueying_prefix: "旧|谋",
        old_sbqicai: "奇才",
        old_sbqicai_backup: "奇才",
        old_sbqicai_info: "①出牌阶段限一次。你可以将手牌中或弃牌堆中的一张装备牌置于一名其他角色的对应装备栏，然后其获得如下效果：当其得到普通锦囊牌后，其将此牌交给你（限三张）。②你使用锦囊牌无距离限制。",
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
        old_sbhunzi: "魂姿",
        old_sbhunzi_info: "觉醒技。当你脱离濒死状态后，你减1点体力上限，获得2点护甲，摸三张牌。然后你获得〖英姿〗和〖英魂〗。",
        old_sb_sp_zhugeliang: "旧谋卧龙诸葛亮·初版",
        old_sb_sp_zhugeliang_ab: "旧谋卧龙",
        old_sb_sp_zhugeliang_prefix: "旧|谋",
        old_sbhuoji: "火计",
        old_sbhuoji_info: "使命技。①使命：出牌阶段限一次。你可以对一名其他角色造成1点火焰伤害，然后你对所有与其势力相同的不为其的其他角色各造成1点火焰伤害。②成功：准备阶段，若你本局游戏已对其他角色造成的火焰伤害不小于本局游戏总角色数，则你失去〖火计〗和〖看破〗，然后获得〖观星〗和〖空城〗。③失败：使命成功前进入濒死状态。",
        old_sbkanpo: "看破",
        old_sbkanpo_info: "①一轮游戏开始时，你清除〖看破①〗记录的牌名，然后你可以依次记录共计三个未于本次清除过的非装备牌牌名（对其他角色不可见）。②当其他角色使用你〖看破①〗记录过的牌名的牌时，你可以移去一个〖看破①〗中的此牌名的记录，令此牌无效。",
        old_sb_zhugeliang: "旧谋诸葛亮·初版",
        old_sb_zhugeliang_ab: "旧谋诸葛亮",
        old_sb_zhugeliang_prefix: "旧|谋",
        old_sbguanxing: "观星",
        old_sbguanxing_info: "①准备阶段，你将所有“星”置入弃牌堆，将牌堆顶的X张牌置于你的武将牌上，称为“星”。然后你可以将任意张“星”置于牌堆顶（X为你此次移去的“星”数+1且至多为7，若你此前未发动过〖观星①〗则X为7）。②结束阶段，若你未于本回合的准备阶段将“星”置于过牌堆顶，你可以将任意张“星”置于牌堆顶。③你可以如手牌般使用或打出“星”。",
        old_sbkongcheng: "空城",
        old_sbkongcheng_info: "锁定技。当你受到伤害时，若你有〖观星〗，且若你：有“星”，你判定，若结果点数不大于你的“星”数，此伤害-1；没有“星”，此伤害+1。",
        oldx_sb_sp_zhugeliang: "旧谋卧龙诸葛亮",
        oldx_sb_sp_zhugeliang_ab: "旧谋卧龙",
        oldx_sb_sp_zhugeliang_prefix: "旧|谋",
        oldx_sbhuoji: "火计",
        oldx_sbhuoji_info: "使命技。①使命：出牌阶段限一次。你可以对一名其他角色造成1点火焰伤害，然后你对所有与其势力相同的不为其的其他角色各造成1点火焰伤害。②成功：准备阶段，若你本局游戏已造成的火焰伤害不小于本局游戏总角色数，则你失去〖火计〗和〖看破〗，然后获得〖观星〗和〖空城〗。③失败：使命成功前进入濒死状态。",
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
        old_sbjizhu_info: "准备阶段开始时，你可以和一名其他角色进行协力。其的下个结束阶段开始时，若你与其协力成功，则你修改〖龙胆〗直到你的下个结束阶段开始。",
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
        // old_sb_zhangjiao: "旧谋张角",
        // old_sb_zhangjiao_prefix: "旧|谋",
        // old_sbleiji: "雷击",
        // old_sbleiji_info: "出牌阶段，你可以选择一名其他角色并弃4枚“道兵”，对其造成1点雷电伤害。",
        // old_sbguidao: "鬼道",
        // old_sbguidao_info: "①游戏开始时/一名角色受到属性伤害后，你获得4/2枚“道兵”。②当你受到伤害时，你可以弃2枚“道兵”并防止此伤害。然后若当前回合角色不为你，〖鬼道①〗于你下回合开始前无效。③“道兵”上限为8。",
        // old_sbhuangtian: "黄天",
        // old_sbhuangtian_info: "主公技，锁定技。①回合开始时，若本回合为你的第一个回合且游戏轮数为1，且游戏内没有【太平要术】，你装备【太平要术】。②其他群势力角色造成伤害后，若你拥有〖鬼道〗，你获得2枚“道兵”（每轮你至多以此法获得4枚“道兵”）。",
        old_sb_huaxiong: "旧谋华雄",
        old_sb_huaxiong_prefix: "旧|谋",
        old_sb_handang: "旧谋韩当",
        old_sb_handang_prefix: "旧|谋",
        old_sbjiefan: "解烦",
        old_sbjiefan_info: "出牌阶段限一次。你可以令一名角色选择一项：⒈令所有攻击范围内含有其的角色依次弃置两张牌；⒉其摸等同于攻击范围内含有其的角色数+2的牌；⒊背水：此技能失效直到你杀死一名角色，然后依次执行上述所有选项。",
        // old_sb_caopi: "旧谋曹丕",
        // old_sb_caopi_prefix: "旧|谋",
        // old_sbxingshang: "行殇",
        // old_sbxingshang_info: "①当一名角色受到伤害后（每回合限一次）或死亡时，你获得2个“颂”标记（你至多拥有9个“颂”标记）。②出牌阶段限两次，你可以：1.移去2个“颂”标记，令一名角色复原武将牌；2.移去2个“颂”标记，令一名角色摸X张牌（X为场上阵亡角色数，且X至少为2，至多为5）；3.移去5个“颂”标记，令一名体力上限小于10的角色回复1点体力，增加1点体力上限，随机恢复一个已废除的装备栏；4.移去5个“颂”标记，获得一名阵亡角色武将牌上的所有技能，然后你失去〖行殇〗〖放逐〗〖颂威〗。",
        // old_sbfangzhu: "放逐",
        // old_sbfangzhu_info: "出牌阶段限一次，你可以：1.移去1个“颂”标记，令一名其他角色于手牌中只能使用基本牌直到其回合结束；2.移去2个“颂”标记，令一名其他角色于手牌中只能使用锦囊牌直到其回合结束。3.移去3个“颂”标记，令一名其他角色于手牌中只能使用装备牌直到其回合结束；4.移去2个“颂”标记，令一名其他角色的非Charlotte技能失效直到其回合结束；5.移去2个“颂”标记，令一名其他角色不能响应除其以外的角色使用的牌直到其回合结束；6.移去3个“颂”标记，令一名其他角色将武将牌翻面；",
        // old_sbfangzhu_info_doudizhu: "出牌阶段限一次，你可以：1.移去2个“颂”标记，令一名其他角色于手牌中只能使用锦囊牌直到其回合结束。2.移去2个“颂”标记，令一名其他角色不能响应除其以外的角色使用的牌直到其回合结束；3.移去3个“颂”标记，令一名其他角色将武将牌翻面；",
        // old_sbsongwei: "颂威",
        // old_sbsongwei_info: "主公技。①出牌阶段开始时，你获得Y个“颂”标记（Y为场上其他魏势力角色数的两倍）。②每局游戏限一次，出牌阶段，你可以令一名其他魏势力角色失去所有其武将牌上的技能。",
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
        old_sbdengfeng_info: "准备阶段，你可以选择一名其他角色并选择一项：①令其获得其装备区的至多两张牌。②你获得牌堆中的一张【杀】。③背水：你失去1点体力。",
        old_sb_guojia: "旧谋郭嘉",
        old_sb_guojia_prefix: "旧|谋",
        old_sbyiji: "遗计",
        old_sbyiji_info: "当你受到伤害后，你可以摸两张牌，然后你可以将至多等量张手牌交给任意名其他角色。当你每轮首次进入濒死状态时，你可以摸两张牌，然后你可以将至多等量张牌交给任意名其他角色。",
        old_sb_gaoshun: "旧谋高顺",
        old_sb_gaoshun_prefix: "旧|谋",
        old_sbxianzhen: "陷阵",
        old_sbxianzhen_info: "出牌阶段限一次。你可以选择一名其他角色，你于本阶段获得如下效果：⒈你对其使用牌无距离限制；⒉当你使用【杀】指定其为目标后，你可以与其拼点：若你赢，此【杀】无视防具且不计入次数，且若你本回合以此法对其造成的伤害小于2，你对其造成1点伤害；若其拼点牌为【杀】，则你获得之；若其拼点牌为其最后的手牌，则此【杀】对其造成伤害时，此伤害+1。",
        old_sb_luxun: "旧谋陆逊",
        old_sb_luxun_prefix: "旧|谋",
        old_sblianying: "连营",
        old_sblianying_info: "其他角色的回合结束时，你可以观看牌堆顶的X张牌，然后将这些牌交给任意角色（X为你本回合失去的牌数+1，至多为5）。",
        old_sb_xiahouyuan: "旧谋夏侯渊",
        old_sb_xiahouyuan_prefix: "旧|谋",
        old_sbzhengzi: "整辎",
        old_sbzhengzi_info: "回合结束时，若你本回合造成的伤害不少于你的体力值，则你可以复原武将牌并摸两张牌。",
        old_sb_lvbu: "旧谋吕布",
        old_sb_lvbu_prefix: "旧|谋",
        old_sbwushuang: "无双",
        old_sbwushuang_info: "锁定技，你使用的【杀】需两张【闪】才能抵消；与你进行【决斗】的角色每次需要打出两张【杀】。此【杀】或【决斗】造成伤害时，若受伤角色没有使用或打出过【杀】或【闪】响应，此伤害+1。",
        old_sbliyu: "利驭",
        old_sbliyu_info: "当你使用【杀】对一名其他角色造成伤害后，你可获得其区域内至多等同于伤害值张牌，然后其摸等量张牌。若你与其因此获得了全部类型的牌，其选择一项:1.你视为对其指定的另一名其他角色使用一张【决斗】；2.其获得〖无双〗直至其下个回合结束。",
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
        old_potwanglie: "往烈",
        old_potwanglie_info: "出牌阶段开始时，你可以选择一张手牌，你此阶段使用此牌无距离限制且不可被响应，且你使用此牌结算结束后，你于此阶段不能对其他角色使用牌。",
        old_pothongyi: "弘毅",
        old_pothongyi_info: "锁定技。①游戏开始时，你获得2个「毅」标记；当你造成或受到1点伤害后，你获得1个「毅」标记；你至多拥有4个「毅」标记。②准备阶段，你选择一项：1.摸X张牌（X为你拥有的「毅」标记数）；2.移去所有「毅」标记，视为使用等量的【杀】。",
        old_pot_yuji: "旧势于吉",
        old_pot_yuji_prefix: "旧|势",
        old_potdaozhuan: "道转",
        old_potdaozhuan_info: "每轮每种牌名限一次，你可以将你与当前回合角色的共X张牌置入弃牌堆（X为本回合所有角色使用牌的类别数，X为0则跳过此步骤），视为使用一张基本牌。若X不为0且当前回合角色因此失去了X张牌，则本轮此技能失效。",
        old_potfuji: "符济",
        old_potfuji_info: "出牌阶段限一次，你可以展示全场共计Y张手牌并令等量角色获得之（Y为场上其他角色数）。因此获得【杀】的角色使用【杀】造成的伤害+1直到你的下个回合开始；因此获得【闪】的角色使用【闪】结算完毕后摸一张牌直到你的下个回合开始。然后若你的手牌数为全场最低，则你获得摸两张牌，获得这两项效果直到你的下个回合开始。",

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
        old_zhanghua: "旧张华",
        old_zhanghua_prefix: "旧",
        old_yuanji: "旧袁姬",
        old_yuanji_prefix: "旧",
        old_tengfanglan: "旧OL滕芳兰",
        old_tengfanglan_ab: "旧滕芳兰",
        old_tengfanglan_prefix: "旧",
        old_luochong: "落宠",
        old_luochong_info: "准备阶段或当你受到伤害后，你可以选择一项：1、令一名角色回复1点体力；2、令一名角色失去1点体力；3、弃置至多两名角色场上各一张牌；4、摸两张牌并可以将其交给其他角色（每轮每项各限一次）。",
        old_aichen: "哀尘",
        old_aichen_info: "锁定技，当你进入濒死状态时，若【落宠】中剩余选项数大于1，你将体力回复至一点，执行并移去其中一项。",
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
        old_ol_yufan_ab: "旧界虞翻",
        old_ol_yufan_prefix: "旧|界",
        old_olzongxuan: "纵玄",
        old_olzongxuan_info: "当你或你的上家因弃置而失去牌后，你可以将位于弃牌堆的这些牌中的任意牌以任意顺序置于牌堆顶。",
        old_olzhiyan: "直言",
        old_olzhiyan_info: "你或你的上家的结束阶段，你可以令一名角色正面朝上摸一张牌，然后若此牌：为装备牌，则其使用此牌并回复1点体力；不为装备牌且其体力值不小于你，则其失去1点体力。",
        old_zhugejin: "旧诸葛瑾",
        old_zhugejin_prefix: "旧",
        old_ruiji: "旧OL芮姬",
        old_ruiji_ab: "旧芮姬",
        old_ruiji_prefix: "旧",
        old_qiaoli: "巧力",
        old_qiaoli_info: "出牌阶段，你可以将一张装备牌当作【决斗】使用。若此牌：为武器，此牌结算后你摸等同于其攻击范围的牌，并可以将这些牌分配给任意角色；不为武器，此【决斗】不可被响应。",
        old_qiaoli_given: "已分配",
        old_qingliang: "清靓",
        old_qingliang_info: "每回合限一次，当你成为其他角色使用的基本牌或普通锦囊牌的目标时，你可以展示所有手牌，然后选择一项：1，与其各摸一张牌；2，弃置一种花色的所有手牌，令此牌对你无效。",
        old_xurong: "旧徐荣",
        old_xurong_prefix: "旧",
        old_xionghuo: "凶镬",
        old_xionghuo_info: "游戏开始时，你获得3个“暴戾”标记。出牌阶段，你可以交给一名其他角色一个“暴戾”标记。当你对有“暴戾”标记的其他角色造成伤害时，此伤害+1。有“暴戾”标记的其他角色的出牌阶段开始时，其移去所有“暴戾”标记并随机执行一项：1.受到1点火焰伤害且本回合不能对你使用【杀】；2.失去1点体力且本回合手牌上限-1；3.你随机获得其一张手牌和一张装备区里的牌。",
        old_shajue: "杀绝",
        old_shajue_info: "锁定技，其他角色进入濒死状态时，你获得一个“暴戾”标记。然后若其体力值小于0，你获得使其进入濒死状态的牌。",
        old_ol_qianzhao: "旧OL牵招",
        old_ol_qianzhao_ab: "旧牵招",
        old_ol_qianzhao_prefix: "旧",
        old_olkuansai: "款塞",
        old_olkuansai_info: "当一张牌指定第一个目标后，若目标数大于你的体力值，你可以令其中一个目标选择一项：1.交给你一张牌；2.令你回复1点体力。",
        old_ol_sb_dongzhuo: "旧OL谋董卓",
        old_ol_sb_dongzhuo_ab: "旧谋董卓",
        old_ol_sb_dongzhuo_prefix: "旧|谋",
        old_olguanbian: "观变",
        old_olguanbian_info: "锁定技。①游戏开始时，你的手牌上限、其他角色计算与你的距离、你计算与其他角色的距离+X（X为游戏人数）。②第二轮游戏开始时，或当你发动〖凶逆〗或〖封赏〗后，你失去〖观变〗。",
        old_olxiongni: "凶逆",
        old_olxiongni_info: "出牌阶段开始时，你可以弃置一张牌，然后所有其他角色选择一项：1.弃置一张与此牌花色相同的牌；2.受到你的1点伤害。",
        old_olfengshang: "封赏",
        old_olfengshang_info: "出牌阶段限一次或当一名角色进入濒死状态时，你可以将两张本回合进入弃牌堆中的花色相同的牌分配给等量角色。若你未以此法获得牌，你视为使用一张不计入次数的【酒】。",
        old_olzhibin: "执柄",
        old_olzhibin_info: "主公技，锁定技。准备阶段，若其他群势力角色累计使用黑色牌的次数达到：3张，你增加1点体力上限并回复1点体力；6张，你获得〖焚城〗；9张：你获得〖崩坏〗。",
        old_ol_nanhualaoxian: "旧OL南华老仙",
        old_ol_nanhualaoxian_ab: "旧南华老仙",
        old_ol_nanhualaoxian_prefix: "旧",
        old_olhedao: "合道",
        old_olhedao_info: "锁定技，游戏开始时/当你首次进入濒死状态时，你至多可拥有的“天书”上限+2/+1。",
        old_olhedao_faq: "关于天书",
        old_olhedao_faq_info: "<br>书写“天书”时，系统先从30个“天书”时机中随机筛选出三个，角色选择时机后，系统再从30个“天书”效果中随机筛选出三个可以和选择的时机匹配的效果，然后角色获得技能为你选择的“天书”时机+“天书”效果的〖天书〗，此技能被发动前对其余玩家不可见，发动三次时失去此〖天书〗。",
        old_olqingshu: "青书",
        old_olqingshu_info: "锁定技，游戏开始时/准备阶段/结束阶段，你书写一册“天书”。",
        old_olshoushu: "授术",
        old_olshoushu_info: "出牌阶段限一次，你可以将一册未发动过的“天书”交给一名其他角色（此“天书”其仅可发动一次）。",
        old_ol_sb_dengai: "旧OL谋邓艾",
        old_ol_sb_dengai_ab: "旧谋邓艾",
        old_ol_sb_dengai_prefix: "旧|谋",
        old_olsbjiewan: "解腕",
        old_olsbjiewan_info: "出牌阶段限一次，你可以减1点体力上限以检索一张伤害类锦囊，然后你可令手牌中的一张伤害牌于本回合内造成的伤害+1。",
        olsbpixian: "僻险",
        olsbpixian_info: "锁定技，出牌阶段结束时，若你的体力值不为全场最高，你加1点体力上限或回复1点体力。",
        old_ol_wangyi: "旧OL界王异",
        old_ol_wangyi_ab: "旧界王异",
        old_ol_wangyi_prefix: "旧|界",
        old_olzhenlie: "贞烈",
        old_olzhenlie_info: "当你成为其他角色使用的【杀】或非延时锦囊牌的目标后，你可以失去一点体力令此牌对你无效，然后选择一项：1，获得使用者的一张牌；2，发动一次【秘计】。",
        // olchunlao: "醇醪",
        // olchunlao_info: "①当你或你的上下家的【杀】因弃置进入弃牌堆后，你将位于弃牌堆的这些牌称为“醇”置于武将牌上。②一名角色处于濒死状态时，你可以将一张“醇”置入弃牌堆，然后令其视为使用一张【酒】。③当一名角色失去体力后，你可以获得至多两张“醇”。",
        old_ol_xuelingyun: "旧OL薛灵芸",
        old_ol_xuelingyun_ab: "旧薛灵芸",
        old_ol_xuelingyun_prefix: "旧",
        old_olsiqi: "思泣",
        old_olsiqi_info: "你的红色牌进入弃牌堆时，将之置于牌堆底。当你受到伤害后，你可以亮出牌堆底至多五张连续的红色牌，使用其中【桃】、【无中生有】与装备牌（可指定其他角色为目标），然后你摸剩余不可使用的牌数张牌。",
        old_ol_sb_yl_luzhi: "旧OL谋卢植",
        old_ol_sb_yl_luzhi_ab: "旧谋卢植",
        old_ol_sb_yl_luzhi_prefix: "旧|谋",
        old_olsibing: "司兵",
        old_olsibing_info: "①当你使用伤害牌指定唯一目标时，你可以弃置任意张红色牌令目标弃置等量红色手牌，否则不能响应该牌；②以你为目标的伤害牌结算完成后，若未对你造成伤害，你可以弃置一张黑色牌并视为使用一张【杀】。",
        old_olliance: "敛策",
        old_olliance_info: "每回合限一次，当你的手牌数变化后，若为全场最少，你可将手牌摸至体力上限，然后本回合下一次有角色造成伤害时，此伤害+1",
        old_ol_liubiao: "旧OL界刘表",
        old_ol_liubiao_ab: "旧界刘表",
        old_ol_liubiao_prefix: "旧|界",
        old_olzishou: "自守",
        old_olzishou_info: "摸牌阶段，你可以多摸X张牌，你以此法摸牌的结束阶段，若你本回合对其他角色造成过伤害，你弃置X张牌（X为全场势力数）。",
        old_olzongshi: "宗室",
        old_olzongshi_info: "锁定技。①你的手牌上限+X（X为全场势力数）。②每种势力限一次，当其他角色对你造成伤害时，你防止此伤害并令其摸一张牌。",
        old_kongshu: "旧孔淑",
        old_kongshu_prefix: "旧",

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
        old_dcgonghu_info: "锁定技，当你于回合外失去基本牌后，【破锐】最后增加描述“若其没有因此受到伤害，你回复1点体力”；当你于回合外造成或受到伤害后，你删除【破锐】中“交给”效果的描述。若以上两个效果均已触发，则你本局游戏接下来你使用红色基本牌无法响应，使用红色普通锦囊牌可以额外指定一个目标。",
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
        old_jingyu_info: "锁定技。每个技能每回合限一次，当一名角色发动不为【静域】的技能时，你摸一张牌。",
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
        old_xinzili_info: "觉醒技。准备阶段，若你的“权”数大于2，则你回复1点体力并摸两张牌，减1点体力上限并获得〖排异〗。",
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
        old_dc_sb_xunyu_ab: "旧谋荀彧",
        old_dc_sb_xunyu_prefix: "旧|谋",
        old_dcsbshimou: "势谋",
        old_dcsbshimou_info: "转换技，游戏开始可自选阴阳状态，出牌阶段限一次，你可令一名{阳：手牌数全场最低的角色；阴：手牌数全场最高的角色}将手牌调整至体力上限（至多摸五张）并视为使用一张仅指定单目标的普通锦囊牌（此牌牌名与目标由你指定）。若以此法摸牌，此牌可额外增加一个目标；若以此法弃牌，此牌额外结算一次。",
        old_dc_xiahouxuan: "旧新杀夏侯玄",
        old_dc_xiahouxuan_ab: "旧夏侯玄",
        old_dc_xiahouxuan_prefix: "旧",
        old_dcyizheng: "议政",
        old_dcyizheng_info: "你的回合开始和结束时，你可与任意名其他角色各展示一张手牌，若展示的牌类型均相同，你可将这些牌交给一名角色，否则，你弃置这些牌。",
        old_dcguilin: "归林",
        old_dcguilin_info: "限定技，出牌阶段或你进入濒死状态时，你可以回满体力并摸回复值张牌，然后失去〖议政〗并修改〖博玄〗。",
        old_dc_zhugejun: "旧新杀诸葛均",
        old_dc_zhugejun_ab: "旧诸葛均",
        old_dc_zhugejun_prefix: "旧",
        old_dcgumai: "孤脉",
        old_dcgumai_info: "每回合限一次，你造成或受到伤害时，若你有手牌，你可以展示所有手牌并令此伤害+1/-1。若展示的牌花色均相同，你可以弃置一张手牌令此技能视为未发动过。",

        old_tw_huojun: "旧TW霍峻",
        old_tw_huojun_ab: "旧霍峻",
        old_tw_huojun_prefix: "旧",
        old_twjieyu: "竭御",
        old_twjieyu_info: "结束阶段开始时，或当你于一轮内第一次受到伤害后，你可以弃置所有手牌，然后从弃牌堆中获得不同牌名的基本牌各一张。",
        old_tw_guohuai: "旧TW界郭淮",
        old_tw_guohuai_ab: "旧界郭淮",
        old_tw_guohuai_prefix: "旧|界",
        old_twjingce: "精策",
        old_twjingce_info: "当你于出牌阶段使用第X张牌时，你可以摸X张牌（X为你的体力值）。若此阶段你此前摸过牌或本回合造成过伤害，你获得一枚“策”标记。",
        old_yuzhang: "御嶂",
        old_yuzhang_info: "你可以弃置一枚“策”标记，然后跳过一个阶段。当你受到伤害后，你可弃置一枚“策”标记，然后选择一项：⒈令伤害来源弃置X张牌（X为其体力值）；⒉令伤害来源本回合不能再使用或打出牌。",
        oldx_quancong: "旧全琮",
        oldx_quancong_prefix: "旧",
        old_zhenshan: "振赡",
        old_zhenshan_info: "当你需要使用或打出一张基本牌时，你可以与一名手牌数少于你的角色交换手牌，视为使用或打出此牌。",
        old_tw_baoxin: "旧TW鲍信",
        old_tw_baoxin_ab: "牢鲍信",
        old_tw_baoxin_prefix: "牢",
        old_twmutao: "募讨",
        old_twmutao_info: "出牌阶段限一次。你可以选择一名角色，令其将手牌中所有的【杀】依次交给其下家开始除你外的每一名角色。然后其对最后一名以此法获得【杀】的角色A造成X点伤害（X为A手牌中【杀】的数量且至多为3）。",
        old_twyimou: "毅谋",
        old_twyimou_info: "当与你距离1以内的一名角色受到伤害后，你可以选择一项：1.令其从牌堆中获得一张【杀】；2.令其将一张手牌交给另一名角色并摸两张牌；3.背水：将所有手牌交给其，然后依次执行上述所有选项。",
        old_tw_zhangmancheng: "旧TW张曼成",
        old_tw_zhangmancheng_ab: "旧张曼成",
        old_tw_zhangmancheng_prefix: "旧",
        old_twbudao: "布道",
        old_twbudao_info: "限定技。准备阶段，你可减1点体力上限，回复1点体力并从【咒护】【丰祈】【阻祸】中选择一个技能获得。然后你可以令一名其他角色也获得此技能并交给你一张牌。",
        old_tw_guanqiujian: "旧TW毌丘俭",
        old_tw_guanqiujian_ab: "旧毌丘俭",
        old_tw_guanqiujian_prefix: "旧",
        old_tw_niufudongxie: "旧牛辅董翓",
        old_tw_niufudongxie_prefix: "旧",
        old_twjuntun: "军屯",
        old_twjuntun_info: "①游戏开始时或当其他角色濒死状态结算完成后，你可令一名角色获得【凶军】。②当其他角色造成伤害后，若其拥有【凶军】，你获得等同于此次伤害值的暴虐值。",
        old_twxiongxi: "凶袭",
        old_twxiongxi_info: "每回合每名角色限一次，出牌阶段，你可以弃置X张牌对一名其他角色造成1点伤害（X为你的暴虐值与暴虐值上限之差）。",
        old_twxiongjun: "凶军",
        old_twxiongjun_info: "锁定技，当你造成伤害后，所有拥有【凶军】的角色摸一张牌。",
        old_xia_tongyuan: "旧侠童渊",
        old_xia_tongyuan_prefix: "旧|侠",
        old_twchuanshu: "传术",
        old_twchuanshu_info: "准备阶段，你可以选择一名角色。直到你的下回合开始，其获得以下效果：1.当其拼点牌亮出时，此牌点数+3；2.其使用的下一张【杀】对除你外的角色造成伤害时，此伤害+1；3.若其不为你，其使用的下一张【杀】结算结束后，你摸等同于其因此【杀】造成的伤害值数的牌。",
        old_xia_guanyu: "旧侠关羽",
        old_xia_guanyu_prefix: "旧|侠",
        old_twzhongyi: "忠义",
        old_twzhongyi_info: "锁定技。①你使用【杀】无距离限制。②当你使用【杀】结算完毕后，你选择一项：⒈摸X张牌；⒉回复X点体力；⒊背水：失去Y点体力，依次执行以上两项（X为此牌造成的伤害值，Y为你本局游戏此前选择此项的次数+1）。",
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
        old_twfuxi_info: "持恒技。当你进入濒死状态时或装备栏均废除后，你可选择依次执行一至两项:1.当前回合结束时，你执行一个额外的回合；2. 保留〖炽灰〗直到下次退幻；3.将手牌数摸至体力上限（至多摸至五张）；4.若你的装备栏均废除，恢复所有装备栏。然后你入幻：将体力值回复至体力上限。",
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
        old_tw_shen_lvmeng_ab: "旧神吕蒙",
        old_tw_shen_lvmeng_prefix: "旧|神",
        old_twshelie: "涉猎",
        old_twshelie_info: "①摸牌阶段，你可放弃摸牌并亮出牌堆顶的五张牌，然后选择获得其中每种花色的牌各一张。②每轮限一次。结束阶段，若你本回合使用的花色数不小于你的体力值，你执行一个额外的摸牌阶段或出牌阶段。",
        old_twgongxin: "攻心",
        old_twgongxin_info: "出牌阶段限一次。你可以观看一名其他角色的手牌，然后你可以展示其中一张牌并选择一项：1.弃置此牌；2.将此牌置于牌堆顶。若该角色手牌中的花色数因此减少，你选择一种颜色，其于本回合不能使用或打出该颜色的牌。",

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
        lm_shichangshi: "真·十常侍",
        lm_shichangshi_ab: "真十常侍",
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
        lmCharacter_other: "其他",


        wangtaowangyue: "王桃王悦",
        lm_old_caocao: "旧神曹操·修改",
        lm_old_caocao_ab: "凌神曹操",
        lm_old_caocao_prefix: "凌|神",


        sw_guanyu: "神关羽·神武",
        sw_guanyu_ab: "☆神关羽",
        sw_guanyu_prefix: "☆神",
        sw_lvmeng: "神吕蒙·神武",
        sw_lvmeng_ab: "☆神吕蒙",
        sw_lvmeng_prefix: "☆神",
        sw_zhugeliang: "神诸葛亮·神武",
        sw_zhugeliang_ab: "☆神诸葛亮",
        sw_zhugeliang_prefix: "☆神",
        sw_zhouyu: "神周瑜·神武",
        sw_zhouyu_ab: "☆神周瑜",
        sw_zhouyu_prefix: "☆神",
        sw_simayi: "神司马懿·神武",
        sw_simayi_ab: "☆神司马懿",
        sw_simayi_prefix: "☆神",
        sw_zhaoyun: "神赵云·神武",
        sw_zhaoyun_ab: "☆神赵云",
        sw_zhaoyun_prefix: "☆神",
        sw_caocao: "神曹操·神武",
        sw_caocao_ab: "☆神曹操",
        sw_caocao_prefix: "☆神",
        sw_lvbu: "神吕布·神武",
        sw_lvbu_ab: "☆神吕布",
        sw_lvbu_prefix: "☆神",
        sw_liubei: "神刘备·神武",
        sw_liubei_ab: "☆神刘备",
        sw_liubei_prefix: "☆神",
        sw_luxun: "神陆逊·神武",
        sw_luxun_ab: "☆神陆逊",
        sw_luxun_prefix: "☆神",
        sw_zhangliao: "神张辽·神武",
        sw_zhangliao_ab: "☆神张辽",
        sw_zhangliao_prefix: "☆神",
        sw_ganning: "神甘宁·神武",
        sw_ganning_ab: "☆神甘宁",
        sw_ganning_prefix: "☆神",
        sw_caopi: "神曹丕·神武",
        sw_caopi_ab: "☆神曹丕",
        sw_caopi_prefix: "☆神",
        sw_zhenji: "神甄姬·神武",
        sw_zhenji_ab: "☆神甄姬",
        sw_zhenji_prefix: "☆神",
        sw_zhangjiao: "神张角·神武",
        sw_zhangjiao_ab: "☆神张角",
        sw_zhangjiao_prefix: "☆神",
        sw_diaochan: "神貂蝉·神武",
        sw_diaochan_ab: "☆神貂蝉",
        sw_diaochan_prefix: "☆神",
        sw_tw_lvmeng: "TW神吕蒙·神武",
        sw_tw_lvmeng_ab: "☆神吕蒙",
        sw_tw_lvmeng_prefix: "☆神",
        sw_tw_guanyu: "TW神关羽·神武",
        sw_tw_guanyu_ab: "☆神关羽",
        sw_tw_guanyu_prefix: "☆神",
        sw_wechat_zhugeliang: "微信神诸葛亮·神武",
        sw_wechat_zhugeliang_ab: "☆神诸葛亮",
        sw_wechat_zhugeliang_prefix: "☆神",
        lm_xurong: "虎翼徐荣",
        lm_xurong_prefix: "虎翼",

        unlock_dongzhao: "OL董昭",
        unlock_dongzhao_prefix: "OL",
        unlock_tianchuan: "田钏",
        lm_jikang: "嵇康",

        xr_huyi: "虎翼",
        xr_huyi_info: "游戏开始时，你获得【虎翼】。",
        lmzhiti: "止啼",
        shenwuzaishi: "神武",
        shenwuzaishi_info: "游戏开始时，你选择一张“神武”置入装备区。准备阶段，若当前游戏轮数不大于3且你以此法选择的神武在牌堆/弃牌堆中，则你使用之。",
        lmzhiti: "止啼",
        lmzhiti_info: "锁定技。①你攻击范围内已受伤的其他角色手牌上限-1；②当你和已受伤的角色拼点或【决斗】胜利/受到已受伤角色造成的伤害后，若对方/伤害来源在你的攻击范围内，则你恢复一个装备栏。③若场上已受伤的角色数：不小于1，你的手牌上限+1；不小于3，你于摸牌阶段开始时令额定摸牌数+1；不小于5，回合结束时，你废除一名角色的一个随机装备栏。",
        lmjunkguixin: "归心",
        lmjunkguixin_info: "每轮开始时和你的回合结束时，你可以选择一项：①获得剩余武将牌堆的所有主公技的其中一个技能；②更改一名其他角色的势力。",

        lmsbniepan: "涅槃",
        lmsbniepan_info: "限定技。当你处于濒死状态时，你可以弃置区域里的所有牌，摸三张牌，将体力回复至3点，复原武将牌，然后修改〖连环〗并选择获得以下技能中的一个：〖八阵〗/〖火计〗/〖看破〗。",
        lmsbzaiqi: "再起",
        lmsbzaiqi_info: "蓄力技（3/7）。①弃牌阶段结束时，你可以消耗任意点蓄力值并选择等量名角色，然后令这些角色选择一项：1.令你摸一张牌；2.弃置一张牌，然后你回复1点体力。②每回合限三次，每当你造成伤害后，你获得1点蓄力值。",
        lmsbganglie: "刚烈",
        lmsbganglie_info: "出牌阶段限一次。你可以选择任意名本局游戏对你造成过伤害的角色，你对其造成1点伤害。",
        lmsbzhiji: "志继",
        lmsbzhiji_info: "觉醒技。准备阶段，若你因〖挑衅①〗消耗过至少4点蓄力值，你减1点体力上限，然后你获得技能【观星】。",
        lmrebaobian: "豹变",
        lmrebaobian_info: "锁定技。当你受到伤害后，你获得以下技能中第一个未拥有的技能：〖挑衅〗/〖咆哮〗/〖神速〗。",
        lmfangzhu: "放逐",
        lmfangzhu_info: "当你受到伤害后，你可以令一名其他角色翻面，然后你摸X张牌并交给其等量的牌（X为你已损失的体力值）。",

        lmkannan: "戡难",
        lmkannan_info: "出牌阶段限X次，你可以与一名本回合内未成为过〖戡难〗目标的角色拼点。若你赢，你使用的下一张【杀】的伤害值基数+1，且你本回合内不能再发动〖戡难〗。若你没赢，其使用的下一张【杀】的伤害值基数+1。（X为你的体力值）。当你拼点后，你可以获得两张拼点牌。",
        lmzongzuo: "宗祚",
        lmzongzuo_info: "锁定技，游戏的第一个回合开始前，你加2X点体力上限并回复2X点体力（X为全场势力数）；当一名角色死亡后，若没有与其势力相同的角色，你减1点体力上限并摸两张牌。",
        lmyongsi: "庸肆",
        lmyongsi_info: "锁定技，摸牌阶段，你多摸X张牌（X为存活势力数）；出牌阶段结束时，若你本回合：1.没有造成伤害，将手牌摸至体力上限；2.造成的伤害超过1点，本回合手牌上限改为已损失体力值。",

        gz_wushuang: "无双",
        gz_wushuang_info: "锁定技。①当你使用【杀】或【决斗】指定目标后/成为【决斗】的目标后，你令此牌需要依次使用或打出两张【闪】或【杀】响应。②当你使用非转化的【决斗】选择目标后，你可为此【决斗】增加两个目标。",
        wechatqixing: "七星",
        wechatqixing_info: "每轮限一次，当你进入濒死状态时，你可以进行一次判定，若判定结果大于7，你回复1点体力。",
        wechatjifeng: "祭风",
        wechatjifeng_info: "出牌阶段限一次，你可以弃置一张手牌，然后从牌堆中随机获得一张锦囊牌。",
        wechattianfa: "天罚",
        wechattianfa_info: "出牌阶段，你每使用两张锦囊牌，你获得1枚“罚”标记；回合结束时，你可以对至多X名其他角色各造成1点伤害（X为你拥有的“罚”标记数）。",
        minihuangtian: "黄天",
        minihuangtian2: "黄天",
        minihuangtian4: "黄天",
        minihuangtian_info: "主公技。①其他群势力角色的出牌阶段限一次，其可以交给你一张【闪】或【闪电】或黑桃手牌。②每回合限一次，你可以获得其他群势力角色使用或打出的【闪】。",
        miniyanzhu: "宴诛",
        miniyanzhu_info: "出牌阶段限一次，你可以令一名其他角色选择一项：弃置一张牌并令下一次受到的伤害+1直到其下回合开始，或将装备区里的所有牌交给你并令你发动〖宴诛〗无法选择此项。",
        minixingxue: "兴学",
        minixingxue_info: "结束阶段开始时，你可以令至多X名角色依次摸一张牌并将一张牌置于牌堆顶或交给一名其他目标角色（X为你的体力上限）。",
        minizhanjue: "战绝",
        minizhanjue_info: "出牌阶段，若你本阶段内因〖战绝〗获得过的牌数小于3，则你可以将所有手牌当做【决斗】使用。此【决斗】使用结算结束后，你摸一张牌，然后所有因此【决斗】受到过伤害的角色也各摸一张牌。若你因此【决斗】受到过伤害，则你可以弃置伤害来源的一张牌。",
        miniqinwang: "勤王",
        miniqinwang_info: "主公技。出牌阶段限一次，你可以令所有其他蜀势力角色依次选择是否交给你一张基本牌，然后你可以令选择是的角色摸一张牌（以此法获得的牌本回合不计算在〖战绝〗使用的牌中）。",
        minikuizhu: "溃诛",
        minikuizhu_info: "弃牌阶段结束后，你可以选择一项：①令至多X名角色各摸一张牌。②对任意名体力值之和不大于X的角色各造成1点伤害。（X为你此阶段弃置的牌数）",
        minichezheng: "掣政",
        minichezheng_info: "锁定技，你的出牌阶段内，攻击范围内不包含你的其他角色不能成为你使用【杀】的目标。出牌阶段结束时，你摸X张牌（X为攻击范围内不包含你的其他角色数且X至少为2）。",
        miniyishe: "义舍",
        miniyishe_info: "①结束阶段，你可以摸两张牌，然后将两张牌置于武将牌上，称为「米」。②当有「米」移至其他区域后，若你的武将牌上没有「米」，则你回复1点体力。",
        minibushi: "布施",
        minibushi_info: "当你受到1点伤害后，或其他角色受到你造成的1点伤害后，你可以选择一张「米」令受伤角色获得之。",
        minimidao: "米道",
        minimidao_info: "一名角色的判定牌生效前，你可以打出一张「米」代替之，然后你摸一张牌。",
        minitianming: "天命",
        minitianming_info: "当你成为【杀】的目标时，你可以弃置两张牌（不足则全弃，无牌则不弃），然后摸两张牌。然后你可以选择一名角色，令其弃置两张牌（不足则全弃，无牌则不弃），然后摸两张牌。",
        minimizhao: "密诏",
        minimizhao_info: "出牌阶段限一次，你可以将任意张手牌交给一名其他角色。若如此做，你令该角色与你指定的另一名有手牌的角色拼点，视为拼点赢的角色对没赢的角色使用一张【杀】。",
        minimeihun: "魅魂",
        minimeihun_info: "结束阶段，或你于当前回合首次成为【杀】的目标后，你可以选择一名其他角色，然后声明一个花色，令其交给你所有你此花色的牌，若其没有此花色的牌，则你观看其手牌并获得其中一张。",
        minihuoxin: "惑心",
        minihuoxin_info: "出牌阶段限一次，你可以弃置一张牌并令两名角色拼点，然后你可以声明一个花色，没赢的角色须选择一项：①令你获得其所有此花色的牌；②其不能使用或打出你此次声明的花色的牌直到其下个回合结束。",
        dc_zj_a: "乐身",
        dc_zj_b: "养志",
        dc_zj_b_info: "结束阶段，你可以弃置所有牌并令一名其他角色获得〖乐身〗直到你的下个回合开始。",


    },
};
if (!_status.postReconnect.extErdai_skill) {
    _status.postReconnect.extErdai_skill = [function (skills, info) {
        for (let skill in skills) {
            lib.skill[skill] = skills[skill];
            if (info[skill]) lib.translate[skill] = info[skill];
            if (info[skill + "_info"]) lib.translate[skill + "_info"] = info[skill + "_info"];
            game.finishSkill(skill);
        };
    }, {}, {}];
};
for (let skill in lmCharacter.skill) {
    _status.postReconnect.extErdai_skill[1][skill] = lmCharacter.skill[skill];
    if (lmCharacter.translate[skill]) _status.postReconnect.extErdai_skill[2][skill] = lmCharacter.translate[skill];
    if (lmCharacter.translate[skill + "_info"]) _status.postReconnect.extErdai_skill[2][skill + "_info"] = lmCharacter.translate[skill + "_info"];
};
export const skill = lmCharacter;