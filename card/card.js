game.import("card", (lib, game, ui, get, ai, _status) => {
    let swCard = {
        name: "swCard",
        connect: true,
        //主要搬运自猫猫叹气、民间卡牌
        card: {
            sw_guilongzhanyuedao: {
                image: "ext:星之梦/image/card/sw_guilongzhanyuedao.png",
                type: "equip",
                subtype: "equip1",
                fullskin: true,
                distance: {
                    attackFrom: -2,
                },
                skills: ["guilongzhanyuedao"],
                ai: {
                    equipValue: 4,
                },
            },
            sw_guofengyupao: {
                image: "ext:星之梦/image/card/sw_guofengyupao.png",
                type: "equip",
                subtype: "equip2",
                fullskin: true,
                skills: ["guofengyupao"],
                ai: {
                    equipValue: 7,
                },
            },
            sw_qimenbagua: {
                image: "ext:星之梦/image/card/sw_qimenbagua.png",
                type: "equip",
                subtype: "equip2",
                fullskin: true,
                skills: ["qimenbagua"],
                ai: {
                    equipValue: 7.5,
                },
            },
            sw_chiyanzhenhunqin: {
                image: "ext:星之梦/image/card/sw_chiyanzhenhunqin.png",
                type: "equip",
                subtype: "equip1",
                distance: {
                    attackFrom: -3,
                },
                fullskin: true,
                skills: ["chiyanzhenhunqin"],
                ai: {
                    equipValue: 5,
                },
            },

            sw_juechenjinge: {
                image: "ext:星之梦/image/card/sw_juechenjinge.png",
                type: "equip",
                subtype: "equip3",
                fullskin: true,
                distance: {
                    globalTo: 1,
                },
                skills: ["juechenjinge"],
                ai: {
                    equipValue(card, player) {
                        if (player.hp != player.maxHp) return 5;
                        if (player.hasSkill("guixin")) return 9;
                        return 0;
                    },
                    basic: {
                        equipValue: 0,
                    },
                },
            },
            sw_xiuluolianyuji: {
                image: "ext:星之梦/image/card/sw_xiuluolianyuji.png",
                type: "equip",
                subtype: "equip1",
                fullskin: true,
                distance: {
                    attackFrom: -3,
                },
                skills: ["xiuluolianyuji"],
                ai: {
                    equipValue: (card, player) => {
                        if (
                            player.countCards("h", {
                                name: "sha",
                            })
                        )
                            return 6.5;
                        return 6;
                    },
                    basic: {
                        equipValue: 6,
                    },
                },
            },
            sw_chixueqingfeng: {
                image: "ext:星之梦/image/card/sw_chixueqingfeng.png",
                type: "equip",
                subtype: "equip1",
                fullskin: true,
                distance: {
                    attackFrom: -1,
                },
                skills: ["chixueqingfeng"],
                ai: {
                    equipValue: 6.7,
                },
            },
            sw_xuwangzhimian: {
                image: "ext:星之梦/image/card/sw_xuwangzhimian.png",
                type: "equip",
                subtype: "equip5",
                fullskin: true,
                skills: ["xuwangzhimian"],
                ai: {
                    equipValue: (card, player) => {
                        if (player.getHandcardLimit() <= 2) return 3;
                        return Math.min(5, player.getHandcardLimit()) + 3;
                    },
                    basic: {
                        equipValue: 5,
                    },
                },
            },
            sw_qicaishenlu: {
                image: "ext:星之梦/image/card/sw_qicaishenlu.png",
                type: "equip",
                subtype: "equip4",
                fullskin: true,
                distance: {
                    globalFrom: -1,
                },
                skills: ["qicaishenlu"],
                ai: {
                    basic: {
                        equipValue: 8.5,
                    },
                },
            },
            sw_luanfenghemingjian: {
                image: "ext:星之梦/image/card/sw_luanfenghemingjian.png",
                type: "equip",
                subtype: "equip1",
                fullskin: true,
                skills: ["luanfenghemingjian"],
                distance: {
                    attackFrom: -2,
                },
                ai: {
                    equipValue: (card, player) => {
                        for (var n of ["fire", "thunder"]) {
                            if (
                                player.countCards("h", {
                                    name: "sha",
                                    nature: n,
                                })
                            )
                                return 5.5;
                        }
                        return 5;
                    },
                    basic: {
                        equipValue: 5,
                    },
                },
            },
            sw_xingtianpojunfu: {
                image: "ext:星之梦/image/card/sw_xingtianpojunfu.png",
                type: "equip",
                subtype: "equip1",
                fullskin: true,
                distance: {
                    attackFrom: -2,
                },
                skills: ["xingtianpojunfu"],
                ai: {
                    equipValue: (card, player) => {
                        return Math.min(9, 5 + player.countCards("he"));
                    },
                    basic: {
                        equipValue: 8,
                    },
                },
            },
            sw_jinwuluorigong: {
                image: "ext:星之梦/image/card/sw_jinwuluorigong.png",
                type: "equip",
                subtype: "equip1",
                fullskin: true,
                distance: {
                    attackFrom: -8,
                },
                skills: ["jinwuluorigong"],
                ai: {
                    equipValue(card, player) {
                        if (player.hasSkill("poxi")) return 8;
                        return 6;
                    },
                    basic: {
                        equipValue: 6,
                    },
                },
            },
            sw_lingsheji: {
                image: "ext:星之梦/image/card/sw_lingsheji.png",
                type: "equip",
                subtype: "equip5",
                fullskin: true,
                skills: ["lingsheji"],
                ai: {
                    equipValue: 6,
                },
            },
            sw_shanrangzhaoshu: {
                image: "ext:星之梦/image/card/sw_shanrangzhaoshu.png",
                type: "equip",
                subtype: "equip5",
                fullskin: true,
                skills: ["shanrangzhaoshu"],
                ai: {
                    equipValue: 6,
                },
            },
            sw_sanshou: {
                image: "ext:星之梦/image/card/sw_sanshou.png",
                type: "equip",
                subtype: "equip2",
                fullskin: true,
                skills: ["sanshou"],
                ai: {
                    equipValue: 8,
                },
            },
            sw_wushuangfangtianji: {
                image: "ext:星之梦/image/card/sw_wushuangfangtianji.png",
                type: "equip",
                subtype: "equip1",
                fullskin: true,
                distance: {
                    attackFrom: -3,
                },
                skills: ["wushuangfangtianji_skill"],
                ai: {
                    equipValue: 3,
                },
            },
            sw_shufazijinguan: {
                image: "ext:星之梦/image/card/sw_shufazijinguan.png",
                type: "equip",
                subtype: "equip5",
                fullskin: true,
                skills: ["shufazijinguan_skill"],
                ai: {
                    equipValue: 8,
                },
            },
            sw_hongmianbaihuapao: {
                image: "ext:星之梦/image/card/sw_hongmianbaihuapao.png",
                type: "equip",
                subtype: "equip2",
                fullskin: true,
                skills: ["hongmianbaihuapao_skill"],
                ai: {
                    equipValue: 4,
                },
            },
            sw_linglongshimandai: {
                image: "ext:星之梦/image/card/sw_linglongshimandai.png",
                type: "equip",
                subtype: "equip2",
                fullskin: true,
                skills: ["linglongshimandai_skill"],
                ai: {
                    equipValue: 5,
                },
            },
            mj_guilongzhanyuedao: {
                image: "ext:星之梦/image/card/mj_guilongzhanyuedao.png",
                type: "equip",
                subtype: "equip1",
                fullskin: true,
                distance: {
                    attackFrom: -2,
                },
                skills: ["mj_guilongzhanyuedao"],
                toseIf: true,
                ai: {
                    equipValue: (card, player) => {
                        if (player.name.indexOf("shen_guanyu") != -1 || player.name.indexOf("tw_shen_guanyu") != -1 || player.name.indexOf("sw_guanyu") != -1)
                            return (
                                player.countCards("h", {
                                    suit: "heart",
                                }).length + 4
                            );
                        return 2;
                    },
                    basic: {
                        equipValue: 2,
                    },
                },
            },
            mj_mengyanchitu: {
                image: "ext:星之梦/image/card/mj_mengyanchitu.png",
                fullskin: true,
                type: "equip",
                subtype: "equip6",
                subtypes: ["equip3", "equip4"],
                nomod: true,
                nopower: true,
                distance: {
                    globalFrom: -1,
                    globalTo: 1,
                },
                skills: ["mj_mengyanchitu"],
                ai: {
                    equipValue(card, player) {
                        if (player.countCards("e", { subtype: ["equip3", "equip4"] }) > 1) return 1;
                        return 7.2;
                    },
                    basic: {
                        equipValue: 7.2,
                    },
                },
            },
            mj_qixingpao: {
                image: "ext:星之梦/image/card/mj_qixingpao.png",
                type: "equip",
                subtype: "equip2",
                fullskin: true,
                skills: ["mj_qixingpao"],
                ai: {
                    equipValue: 5,
                },
            },
            mj_zhenhunqin: {
                image: "ext:星之梦/image/card/mj_zhenhunqin.png",
                type: "equip",
                subtype: "equip1",
                fullskin: true,
                distance: {
                    attackFrom: -3,
                },
                skills: ["mj_zhenhunqin"],
                ai: {
                    equipValue: (card, player) => {
                        var value = game.players.filter(target => {
                            return target.hasSkillTag("nothunder");
                        }).length;
                        return game.players.length - value;
                    },
                    basic: {
                        equipValue: 4,
                    },
                },
            },
            mj_shengguangbaiyi: {
                image: "ext:星之梦/image/card/mj_shengguangbaiyi.png",
                type: "equip",
                subtype: "equip2",
                fullskin: true,
                skills: ["mj_shengguangbaiyi"],
                ai: {
                    equipValue: 8,
                },
            },
            mj_xieshenmianju: {
                image: "ext:星之梦/image/card/mj_xieshenmianju.png",
                type: "equip",
                subtype: "equip2",
                fullskin: true,
                skills: ["mj_xieshenmianju"],
                ai: {
                    equipValue(card, player) {
                        if (player.hasSkill("shenfen")) return 7;
                        return 4;
                    },
                    basic: {
                        equipValue: 4,
                    },
                },
            },
            mj_jishengong: {
                image: "ext:星之梦/image/card/mj_jishengong.png",
                type: "equip",
                subtype: "equip1",
                fullskin: true,
                distance: {
                    attackFrom: -4,
                },
                skills: ["mj_jishengong"],
                ai: {
                    equipValue: 4,
                },
            },
            mj_baihuaqun: {
                image: "ext:星之梦/image/card/mj_baihuaqun.png",
                type: "equip",
                subtype: "equip2",
                fullskin: true,
                skills: ["mj_baihuaqun"],
                onLose: () => {
                    player.draw(2);
                },
                ai: {
                    equipValue: (card, player) => {
                        if (player.getDamagedHp() == 0) return 8;
                        return 10 - Math.min(4, player.hp);
                    },
                    basic: {
                        equipValue: 7,
                    },
                },
            },
            mj_yinyueqiang: {
                image: "ext:星之梦/image/card/mj_yinyueqiang.png",
                audio: "yinyueqiang",
                fullskin: true,
                type: "equip",
                subtype: "equip1",
                distance: {
                    attackFrom: -2,
                },
                skills: ["yinyueqiang"],
                ai: {
                    equipValue: 4,
                },
            },
            mj_monkey: {
                image: "ext:星之梦/image/card/mj_monkey.png",
                audio: "monkey",
                fullskin: true,
                type: "equip",
                subtype: "equip5",
                skills: ["monkey"],
                ai: {
                    equipValue: 8,
                },
            },
            mj_zhanying: {
                image: "ext:星之梦/image/card/mj_zhanying.png",
                fullskin: true,
                type: "equip",
                subtype: "equip5",
                skills: ["mj_zhanying"],
                ai: {
                    basic: {
                        equipValue: 4,
                    },
                },
            },
            mj_canglang: {
                image: "ext:星之梦/image/card/mj_canglang.png",
                fullskin: true,
                type: "equip",
                subtype: "equip5",
                skills: ["mj_canglang"],
                ai: {
                    basic: {
                        equipValue: 4,
                    },
                },
            },
            fh_yinyueqiang: {
                audio: "yinyueqiang",
                cardimage: "yinyueqiang",
                fullskin: true,
                type: "equip",
                subtype: "equip1",
                distance: { attackFrom: -2 },
                ai: { basic: { equipValue: 4 } },
                skills: ["fh_yinyueqiang_skill"],
            },
            huyi: {
                image: "ext:星之梦/image/card/huyi.png",
                fullskin: true,
                type: "equip",
                subtype: "equip1",
                distance: {
                    attackFrom: -2,
                },
                skills: ["huyi_skill"],
                ai: {
                    equipValue: 5,
                },
            },
        },
        skill: {
            chiyanzhenhunqin: {
                equipSkill: true,
                trigger: { source: "damageBegin1" },
                audio: "zhuque_skill",
                forced: true,
                content() {
                    if (trigger.nature != "fire") trigger.nature = "fire";
                    else trigger.num++;
                },
            },
            // chiyanzhenhunqin:{
            //     equipSkill:true,
            //     audio:"zhuque_skill",
            // 	trigger:{source:"damageBegin1"},
            // 	forced:true,
            // 	content:function(){
            // 		game.setNature(trigger,"fire");
            // 	},
            //     ai:{
            //         fireAttack:true,
            //     },
            // },

            // juechenjinge:{
            //     equipSkill:true,
            //     trigger:{
            //         player:"phaseJieshuBegin",
            //     },
            //     cheak:(event, player) => {
            //         return true;
            //     },
            //     markText:"戈",
            //     intro:{
            //         content:"其他角色计算与你距离时+1",
            //     },
            //     content:() => {
            //         "step 0"
            //         player.chooseTarget("绝尘金戈：请选择任意角色", false, [1, Infinity])
            //             .set("ai", function(target) {
            //             var player = get.player();
            //             if (player == target) return 10;
            //             return get.attitude(player, target);
            //         });
            //         "step 1"
            //         if (result.bool) {
            //             for (var target of result.targets) {
            //                 player.line(target);
            //                 target.addSkill("juechenjinge_distance");
            //                 target.markSkill("juechenjinge");
            //             }
            //         }
            //     },
            //     ai:{
            //         threaten:1.2,
            //         result:{
            //             player:1,
            //             target:(player, target) => {
            //                 if (get.attitude(player, target) < 0) return -1;
            //                 if (get.attitude(player, target) > 0) return 1;
            //                 return 0;
            //             },
            //         },
            //     },
            //     group:"juechenjinge_reset",
            //     subSkill:{
            //         reset:{
            //             forced:true,
            //             firstDo:true,
            //             trigger:{
            //                 player:"phaseBegin",
            //             },
            //             content:() => {
            //                 game.players.filter((target) => {
            //                     if (target.hasSkill("juechenjinge_distance")) {
            //                         target.removeSkill("juechenjinge_distance");
            //                         target.unmarkSkill("juechenjinge");
            //                     }
            //                     return false;
            //                 })
            //             },
            //             sub:true,
            //             "_priority":0,
            //         },
            //         distance:{
            //             slient:true,
            //             direct:true,
            //             mod:{
            //                 globalTo:function(from, to, current) {
            //                     return current + 1;
            //                 },
            //             },
            //             sub:true,
            //             "_priority":0,
            //         },
            //     },
            //     "_priority":-25,
            // },
            juechenjinge: {
                trigger: { player: "damageBegin" },
                forced: true,
                filter(event, player) {
                    return event.num % 2 == 1;
                },
                content() {
                    player.recover();
                    trigger.num++;
                },
                _priority: 0,
            },
            xiuluolianyuji2: {
                equipSkill: true,
                vanish: true,
                trigger: { player: "damageEnd" },
                forced: true,
                popup: false,
                content() {
                    if (trigger.xiuluolianyuji) player.recover();
                    player.removeSkill("xiuluolianyuji2");
                },
            },
            xiuluolianyuji: {
                mod: {
                    selectTarget(card, player, range) {
                        if (card.name != "sha") return;
                        if (range[1] == -1) return;
                        range[1] = Infinity;
                    },
                },
                trigger: { source: "damageBegin1" },
                forced: true,
                filter(event) {
                    return event.card && event.card.name == "sha";
                },
                content() {
                    trigger.num++;
                    trigger.xiuluolianyuji = true;
                    trigger.player.addSkill("xiuluolianyuji2");
                },
            },
            qicaishenlu: {
                equipSkill: true,
                trigger: { source: "damageBegin1" },
                forced: true,
                filter(event) {
                    return event.hasNature("linked");
                },
                content() {
                    trigger.num++;
                },
            },
            luanfenghemingjian: {
                equipSkill: true,
                inherit: "cixiong_skill",
                filter(event) {
                    return get.natureList(event.card).some(i => {
                        return i === "thunder" || i === "fire";
                    });
                },
            },
            shanrangzhaoshu: {
                trigger: {
                    global: ["gainEnd", "loseAsyncAfter"],
                },
                direct: true,
                filter(event, player) {
                    let min = 0;
                    if (!player.hasSkill("shanrangzhaoshu", null, false)) min += get.sgn(player.getEquips("shanrangzhaoshu").length);
                    const bool = player.countCards("he") > min;
                    return game.hasPlayer(current => {
                        if (current == player || current == _status.currentPhase) return false;
                        if (!bool && current.countCards("h") == 0) return false;
                        const history = current.getHistory("gain")[0];
                        if (!history) return false;
                        if (event.name == "gain") {
                            return history == event && event.getlx !== false;
                        }
                        return history.getParent() == event;
                    });
                },
                content() {
                    "step 0";
                    event.targets = game
                        .filterPlayer(function (current) {
                            if (current == player || current == _status.currentPhase) return false;
                            const history = current.getHistory("gain")[0];
                            if (!history) return false;
                            if (trigger.name == "gain") {
                                return history == trigger && trigger.getlx !== false;
                            }
                            return history.getParent() == trigger;
                        })
                        .sortBySeat(_status.currentPhase);
                    ("step 1");
                    var target = event.targets.shift();
                    event.target = target;
                    if (target.isIn()) {
                        var list = [];
                        var min = 0;
                        if (!player.hasSkill("shanrangzhaoshu", null, false)) min += get.sgn(player.getEquips("shanrangzhaoshu").length);
                        if (player.countCards("he") > min) list.push(`交给${get.translation(target)}一张牌`);
                        if (target.countCards("he") > 0) list.push(`令${get.translation(target)}交给你一张牌`);
                        event.list = list;
                        if (list.length == 0) event.goto(4);
                        else if (list.length == 1) event._result = { index: 0 };
                        else
                            player
                                .chooseControl("cancel2")
                                .set("choiceList", list)
                                .set("prompt", get.prompt("shanrangzhaoshu", target))
                                .set("ai", function () {
                                    if (get.attitude(_status.event.player, _status.event.getParent().target) < 0) return 1;
                                    return "cancel2";
                                });
                    } else event.goto(4);
                    ("step 2");
                    if (result.control == "cancel2") {
                        event.goto(4);
                        return;
                    }
                    player.logSkill("shanrangzhaoshu", target);
                    if (event.list[result.index][0] == "令") {
                        event.gainner = player;
                        event.giver = target;
                        target.chooseCard("he", true, `交给${get.translation(player)}一张牌`);
                    } else {
                        event.giver = player;
                        event.gainner = target;
                        player
                            .chooseCard("he", true, `交给${get.translation(target)}一张牌`)
                            .set("filterCard", function (card, player) {
                                if (_status.event.ignoreCard) return true;
                                var cards = player.getEquips("shanrangzhaoshu");
                                if (!cards.includes(card)) return true;
                                return cards.some(cardx => cardx != card && !ui.selected.cards.includes(cardx));
                            })
                            .set("ignoreCard", player.hasSkill("shanrangzhaoshu", null, false));
                    }
                    ("step 3");
                    if (result.cards && result.cards.length) event.giver.give(result.cards, event.gainner);
                    ("step 4");
                    if (targets.length > 0) event.goto(1);
                },
            },
            lingsheji: {
                trigger: { player: "phaseUseEnd" },
                equipSkill: true,
                direct: true,
                content() {
                    "step 0";
                    var list = ["摸一张牌"];
                    if (player.countCards("he") > 1) list.push("将一张牌置于武将牌上，于回合结束后获得之");
                    player
                        .chooseControl("cancel2")
                        .set("prompt", get.prompt("lingsheji"))
                        .set("choiceList", list)
                        .set("ai", function () {
                            var player = _status.event.player;
                            if (
                                player.countCards("e", function (card) {
                                    return card.name != "tengjia" && get.value(card) <= 0;
                                })
                            )
                                return 1;
                            if (!player.needsToDiscard()) return 0;
                            return 1;
                        });
                    ("step 1");
                    if (result.control == "cancel2") {
                        event.finish();
                        return;
                    }
                    player.logSkill("lingsheji");
                    if (result.index == 0) {
                        player.draw();
                        event.finish();
                    } else {
                        player
                            .chooseCard("he", true, function (card, player) {
                                return card != player.getEquip(5);
                            })
                            .set("ai", function (card) {
                                if (get.position(card) == "e" && get.value(card) <= 0) return 10;
                                return (get.position(card) == "h" ? 2 : 1) * -get.value(card);
                            });
                    }
                    ("step 2");
                    player.addSkill("lingsheji2");
                    player.lose(result.cards, ui.special, "toStorage");
                    player.markAuto("lingsheji2", result.cards);
                },
            },
            lingsheji2: {
                trigger: { player: "phaseEnd" },
                equipSkill: true,
                forced: true,
                popup: false,
                content() {
                    player.gain(player.getStorage("lingsheji2"), "gain2", "log");
                    player.storage.lingsheji2.length = 0;
                    player.removeSkill("lingsheji2");
                },
                intro: { content: "cards" },
            },
            xingtianpojunfu: {
                trigger: { player: "useCardToPlayered" },
                equipSkill: true,
                direct: true,
                audio: "guanshi_skill",
                filter(event, player) {
                    return player.isPhaseUsing() && player != event.target && event.targets.length == 1 && player.countCards("he") > 2;
                },
                content() {
                    "step 0";
                    player
                        .chooseToDiscard("he", get.prompt("xingtianpojunfu", trigger.target), 2, "弃置两张牌，令" + get.translation(trigger.target) + "本回合内不能使用或打出牌且防具技能无效。", function (card, player) {
                            return card != player.getEquip(1);
                        })
                        .set("logSkill", ["xingtianpojunfu", trigger.target])
                        .set(
                            "goon",
                            (function (event, player) {
                                if (player.hasSkill("xingtianpojunfu2")) return false;
                                if (event.getParent().excluded.includes(player)) return false;
                                if (get.attitude(event.player, player) > 0) {
                                    return false;
                                }
                                if (get.type(event.card) == "trick" && event.player.hasWuxie()) return true;
                                if (get.tag(event.card, "respondSha")) {
                                    if (!player.hasSha()) return false;
                                    return true;
                                } else if (get.tag(event.card, "respondShan")) {
                                    if (!player.hasShan()) return false;
                                    return true;
                                }
                                return false;
                            })(trigger, trigger.target)
                        )
                        .set("ai", function (card) {
                            if (_status.event.goon) return 7.5 - get.value(card);
                            return 0;
                        });
                    ("step 1");
                    if (result.bool) trigger.target.addTempSkill("xingtianpojunfu2");
                },
            },
            xingtianpojunfu2: {
                equipSkill: true,
                mod: {
                    cardEnabled() {
                        return false;
                    },
                    cardSavable() {
                        return false;
                    },
                    cardRespondable() {
                        return false;
                    },
                },
                mark: true,
                intro: {
                    content: "不能使用或打出牌且防具技能无效直到回合结束",
                },
                ai: { unequip2: true },
            },
            jinwuluorigong: {
                equipSkill: true,
                audio: "qilin_skill",
                trigger: {
                    player: "loseAfter",
                    global: ["equipAfter", "addJudgeAfter", "gainAfter", "loseAsyncAfter", "addToExpansionAfter"],
                },
                direct: true,
                filter(event, player) {
                    var evt = event.getl(player);
                    return evt && evt.hs && evt.hs.length > 1 && player.isPhaseUsing();
                },
                content() {
                    "step 0";
                    var evt = trigger.getl(player);
                    event.num = evt.hs.length;
                    player
                        .chooseTarget(get.prompt("jinwuluorigong"), "弃置一名其他角色的" + get.cnNumber(event.num) + "张牌", function (card, player, target) {
                            return player != target && target.countDiscardableCards(player, "he") > 0;
                        })
                        .set("ai", function (target) {
                            var att = get.attitude(_status.event.player, target);
                            if (target.countDiscardableCards(_status.event.player, "he") >= _status.event.getParent().num) att = att * 2;
                            return -att;
                        });
                    ("step 1");
                    if (result.bool) {
                        var target = result.targets[0];
                        player.logSkill("jinwuluorigong", target);
                        player.discardPlayerCard(target, "he", true, num);
                    }
                },
            },
            mj_guilongzhanyuedao: {
                equipSkill: true,
                audio: "qinglong_skill",
                mod: {
                    suit(card, suit) {
                        if (suit != "heart") return "heart";
                    },
                    targetInRange(card) {
                        if (get.suit(card) == "heart") return true;
                    },
                },
            },
            mj_mengyanchitu: {
                equipSkill: true,
                mod: {
                    canBeReplaced(card, player) {
                        if (player.getEquips("mj_mengyanchitu").includes(card)) return false;
                    },
                },
            },
            mj_qixingpao: {
                equipSkill: true,
                inherit: "hongmianbaihuapao_skill",
                // trigger:{
                //     player:"damageBegin4",
                // },
                // filter:(evt, player) => {
                //     return evt.nature && evt.nature == "thunder";
                // },
                // content:() => {
                //     trigger.cancel();
                // },
                // ai:{
                //     nothunder:true,
                //     effect:{
                //         target:function(card, player, target, current) {
                //             if (get.tag(card, "damage") && get.tag(card, "thunderDamage")) return [0, 0];
                //         },
                //     },
                // },
                // "_priority":-25,
            },
            mj_zhenhunqin: {
                equipSkill: true,
                trigger: {
                    player: "useCard1",
                },

                filter(event, player) {
                    if (event.card.name == "sha" && !game.hasNature(event.card)) return true;
                },
                check(event, player) {
                    var eff = 0;
                    for (var i = 0; i < event.targets.length; i++) {
                        var target = event.targets[i];
                        var eff1 = get.damageEffect(target, player, player);
                        var eff2 = get.damageEffect(target, player, player, "thunder");
                        eff += eff2;
                        eff -= eff1;
                    }
                    return eff >= 0;
                },
                prompt2(event, player) {
                    return "将" + get.translation(event.card) + "改为雷属性";
                },
                content() {
                    game.setNature(trigger.card, "thunder");
                    if (get.itemtype(trigger.card) == "card") {
                        var next = game.createEvent("zhuque_clear");
                        next.card = trigger.card;
                        event.next.remove(next);
                        trigger.after.push(next);
                        next.setContent(function () {
                            game.setNature(trigger.card, []);
                        });
                    }
                },
                _priority: -25,
            },
            mj_shengguangbaiyi: {
                equipSkill: true,
                trigger: {
                    target: "shaBegin",
                },
                forced: true,
                priority: 6,
                filter(event, player) {
                    if (player.hasSkillTag("unequip2")) return false;
                    if (
                        event.player.hasSkillTag("unequip", false, {
                            name: event.card ? event.card.name : null,
                            target: player,
                            card: event.card,
                        })
                    )
                        return false;
                    return event.card.name == "sha" && get.color(event.card) == "red";
                },
                content() {
                    trigger.cancel();
                },
                mod: {
                    maxHandcard: (player, num) => {
                        return num + 2;
                    },
                },
                ai: {
                    effect: {
                        target(card, player, target) {
                            if (target.hasSkillTag("unequip2")) return;
                            if (
                                player.hasSkillTag("unequip", false, {
                                    name: card ? card.name : null,
                                    target: target,
                                    card: card,
                                }) ||
                                player.hasSkillTag("unequip_ai", false, {
                                    name: card ? card.name : null,
                                    target: target,
                                    card: card,
                                })
                            )
                                return;
                            if (card.name == "sha" && get.color(card) == "red") return "zerotarget";
                        },
                    },
                },
                _priority: 575,
            },
            mj_xieshenmianju: {
                equipSkill: true,
                forced: true,
                trigger: {
                    player: "turnOverBegin",
                },
                filter: (event, player) => {
                    if (event.num <= 1) return false;
                    if (player.hasSkillTag("unequip2")) return false;
                    if (
                        event.source &&
                        event.source.hasSkillTag("unequip", false, {
                            name: event.card ? event.card.name : null,
                            target: player,
                            card: event.card,
                        })
                    )
                        return false;
                    return true;
                },
                content: () => {
                    trigger.cancel();
                },
                group: "xieshenmianju_damage",
                subSkill: {
                    damage: {
                        sub: true,
                        forced: true,
                        trigger: {
                            player: "damageBegin4",
                        },
                        filter: (event, player) => {
                            if (event.num <= 1) return false;
                            if (player.hasSkillTag("unequip2")) return false;
                            if (
                                event.source &&
                                event.source.hasSkillTag("unequip", false, {
                                    name: event.card ? event.card.name : null,
                                    target: player,
                                    card: event.card,
                                })
                            )
                                return false;
                            return true;
                        },
                        content: () => {
                            trigger.num--;
                        },
                        ai: {
                            filterDamage: true,
                            skillTagFilter(player, tag, arg) {
                                if (player.hasSkillTag("unequip2")) return false;
                                if (arg && arg.player) {
                                    if (
                                        arg.player.hasSkillTag("unequip", false, {
                                            name: arg.card ? arg.card.name : null,
                                            target: player,
                                            card: arg.card,
                                        })
                                    )
                                        return false;
                                    if (
                                        arg.player.hasSkillTag("unequip_ai", false, {
                                            name: arg.card ? arg.card.name : null,
                                            target: player,
                                            card: arg.card,
                                        })
                                    )
                                        return false;
                                    if (arg.player.hasSkillTag("jueqing", false, player)) return false;
                                }
                            },
                        },
                        _priority: 0,
                    },
                },
                _priority: -25,
            },
            mj_jishengong: {
                equipSkill: true,
                trigger: {
                    source: "damageBegin2",
                },
                filter: (evt, player) => {
                    return evt.card && evt.card.name == "sha" && evt.player != player && evt.player.countCards("e");
                },
                content: () => {
                    player.gainPlayerCard(trigger.player, 1, true, "e");
                },
                _priority: -25,
            },
            mj_baihuaqun: {
                equipSkill: true,
                forced: true,
                trigger: {
                    player: "damageBegin1",
                },
                filter: (event, player) => {
                    if (player.hp != 1) return false;
                    if (player.hasSkillTag("unequip2")) return false;
                    if (
                        event.source &&
                        event.source.hasSkillTag("unequip", false, {
                            name: event.card ? event.card.name : null,
                            target: player,
                            card: event.card,
                        })
                    )
                        return false;
                    return true;
                },
                content: () => {
                    trigger.cancel();
                },
                ai: {
                    filterDamage: true,
                    skillTagFilter(player, tag, arg) {
                        if (player.hasSkillTag("unequip2")) return false;
                        if (arg && arg.player) {
                            if (
                                arg.player.hasSkillTag("unequip", false, {
                                    name: arg.card ? arg.card.name : null,
                                    target: player,
                                    card: arg.card,
                                })
                            )
                                return false;
                            if (
                                arg.player.hasSkillTag("unequip_ai", false, {
                                    name: arg.card ? arg.card.name : null,
                                    target: player,
                                    card: arg.card,
                                })
                            )
                                return false;
                            if (arg.player.hasSkillTag("jueqing", false, player)) return false;
                        }
                        if (player.hp == 1) return true;
                        return false;
                    },
                },
            },
            mj_zhanying: {
                equipSkill: true,
                trigger: {
                    player: "phaseBegin",
                },
                forced: true,
                content() {
                    player.chooseToGuanxing();
                },
            },
            mj_canglang: {
                equipSkill: true,
                trigger: {
                    source: "damageBegin1",
                },
                logTarget: "player",
                filter(event, player) {
                    var list = 0;
                    var history = player.getHistory("useCard");
                    for (var i = 0; i < history.length; i++) {
                        if (history[i].card == event.card) list++;
                    }
                    return event.card && ["sha", "juedou"].contains(event.card.name) && event.notLink() && event.player && event.player.isAlive() && event.player.countCards("e") <= 0 && history && list > 0;
                },
                forced: true,
                content() {
                    trigger.num++;
                },
                ai: {
                    damageBonus: true,
                    effect: {
                        player(card, player, target) {
                            if (get.attitude(target, player) <= 0 && ["sha", "juedou"].contains(card.name) && !target.countCards("e")) return [1, 0.3];
                        },
                    },
                },
            },
            //银月枪
            fh_yinyueqiang_skill: {
                equipSkill: true,
                trigger: { global: "phaseEnd" },
                filter(event, player) {
                    if (_status.currentPhase == player) return false;
                    if (!player.getHistory("lose", evt => evt.hs && evt.hs.length).length) return false;
                    return player.hasSha() || player.countCards("h") > 0;
                },
                direct: true,
                content() {
                    "step 0";
                    player
                        .chooseToUse(get.prompt("fh_yinyueqiang_skill"), { name: "sha" })
                        .set("aidelay", true)
                        .set("noButton", true)
                        .set("filterTarget", function (card, player, target) {
                            var targets = _status.event.targets;
                            if (!targets.includes(target) && !ui.selected.targets.some(targetx => targets.includes(target))) return false;
                            return lib.filter.filterTarget.apply(this, arguments);
                        })
                        .set(
                            "targets",
                            game.filterPlayer(current => current.getHistory("gain").length)
                        ).logSkill = "fh_yinyueqiang_skill";
                    ("step 1");
                    if (result.bool) game.delayx();
                },
            },
            huyi_skill: {
                equipSkill: true,
                trigger: {
                    source: "damageBegin3",
                },
                filter(event) {
                    return event.card && event.card.name == "sha" && event.hasNature("linked");
                },
                direct: true,
                content() {
                    "step 0";
                    player
                        .chooseTarget(get.prompt2("huyi"), [1, 2], (card, player, target) => {
                            return !target.isLinked();
                        })
                        .set("ai", target => {
                            var att = get.attitude(_status.event.player, target);
                            if (att > 0) att /= 1.2;
                            return Math.abs(att);
                        });
                    ("step 1");
                    if (result.bool) {
                        var targets = result.targets.sortBySeat();
                        targets.forEach(i => i.link(true));
                    }
                },
            },
        },
        translate: {
            sw_guilongzhanyuedao: "鬼龙斩月刀",
            sw_guilongzhanyuedao_info: "锁定技，你使用的红色【杀】不可被响应。",
            sw_guofengyupao: "国风玉袍",
            sw_guofengyupao_info: "锁定技，你不是其他角色使用普通锦囊牌的合法目标。",
            sw_qimenbagua: "奇门八卦",
            sw_qimenbagua_info: "锁定技，【杀】对你无效。",
            sw_chiyanzhenhunqin: "赤焰镇魂琴",
            // sw_chiyanzhenhunqin_info:"锁定技，你造成的伤害均视为火焰伤害。",
            sw_chiyanzhenhunqin_info: "锁定技，你造成的伤害均视为火焰伤害；你造成的不因此装备转化的火属性伤害+1。",
            chiyanzhenhunqin: "赤焰镇魂琴",
            // chiyanzhenhunqin_info:"锁定技，你造成的伤害均视为火焰伤害。",
            chiyanzhenhunqin_info: "锁定技，你造成的伤害均视为火焰伤害；你造成的不因此装备转化的火属性伤害+1。",
            sw_juechenjinge: "绝尘金戈",
            // "juechenjinge_info":"结束阶段，你可以选择任意角色，令其他角色计算与这些角色距离时+1直到你下回合开始。当你失去装备区里的此牌时，你移除此效果。",
            sw_juechenjinge_info: "锁定技，①其他角色计算与你的距离时+1；②当你受到伤害时，若伤害值为奇数，你回复一点体力，然后此伤害+1。",
            juechenjinge: "绝尘金戈",
            juechenjinge_info: "锁定技，①其他角色计算与你的距离时+1；②当你受到伤害时，若伤害值为奇数，你回复一点体力，然后此伤害+1。",
            sw_xiuluolianyuji: "修罗炼狱戟",
            sw_xiuluolianyuji_info: "①你使用【杀】可以多指定任意攻击范围内的角色为目标；②锁定技，当你使用【杀】造成伤害时，此伤害+1，然后受伤角色回复一点体力。",
            xiuluolianyuji: "修罗炼狱戟",
            xiuluolianyuji2: "修罗炼狱戟",
            xiuluolianyuji_info: "①你使用【杀】可以多指定任意攻击范围内的角色为目标；②锁定技，当你使用【杀】造成伤害时，此伤害+1，然后受伤角色回复一点体力。",
            sw_chixueqingfeng: "赤血青锋",
            sw_chixueqingfeng_info: "锁定技，你使用【杀】指定目标时，你令目标角色防具技能失效，且不能使用或打出手牌直到此杀结算。",
            sw_xuwangzhimian: "虚妄之冕",
            sw_xuwangzhimian_info: "锁定技，你摸牌阶段额定摸牌数+2，你的手牌上限-1。",
            sw_qicaishenlu: "七彩神鹿",
            sw_qicaishenlu_info: "锁定技，①你计算与其他角色距离时-1；②当你造成属性伤害时，此伤害+1。",
            qicaishenlu: "七彩神鹿",
            qicaishenlu_info: "锁定技，①你计算与其他角色距离时-1；②当你造成属性伤害时，此伤害+1。",
            sw_luanfenghemingjian: "鸾凤和鸣剑",
            sw_luanfenghemingjian_info: "当你使用雷【杀】和火【杀】指定目标后，你可以令此【杀】的目标选择一项：1.你摸一张牌；2.弃置一张牌。",
            luanfenghemingjian: "鸾凤和鸣剑",
            luanfenghemingjian_info: "当你使用雷【杀】和火【杀】指定目标后，你可以令此【杀】的目标选择一项：1.你摸一张牌；2.弃置一张牌。",
            sw_xingtianpojunfu: "刑天破军斧",
            sw_xingtianpojunfu_info: "出牌阶段，当你使用牌指定唯一目标后，你可以弃置两张牌，令其本回合防具无效且不能使用或打出牌。",
            xingtianpojunfu: "刑天破军斧",
            xingtianpojunfu2: "刑天破军斧",
            xingtianpojunfu_info: "出牌阶段，当你使用牌指定唯一目标后，你可以弃置两张牌，令其本回合防具无效且不能使用或打出牌。",
            sw_jinwuluorigong: "金乌落日弓",
            sw_jinwuluorigong_info: "出牌阶段，当你一次性失去至少两张手牌后，你可以弃置一名其他角色等量的牌。",
            jinwuluorigong: "金乌落日弓",
            jinwuluorigong_info: "出牌阶段，当你一次性失去至少两张手牌后，你可以弃置一名其他角色等量的牌。",
            sw_lingsheji: "灵蛇髻",
            sw_lingsheji_info: "出牌阶段结束时，你可以选择一项：1.摸一张牌；2.将一张牌置于武将牌上，然后于结束阶段开始时获得之。",
            lingsheji: "灵蛇髻",
            lingsheji2: "灵蛇髻",
            lingsheji_info: "出牌阶段结束时，你可以选择一项：1.摸一张牌；2.将一张牌置于武将牌上，并于回合结束后获得此牌。",
            sw_shanrangzhaoshu: "禅让诏书",
            sw_shanrangzhaoshu_info: "其他角色于回合外得到牌后，若是其本回合内第一次得到牌，则你可以选择一项：1.交给其一张牌；2.令其交给你一张牌。",
            shanrangzhaoshu: "禅让诏书",
            shanrangzhaoshu_info: "其他角色于回合外得到牌后，若是其本回合内第一次得到牌，则你可以选择一项：1.交给其一张牌；2.令其交给你一张牌。",
            sw_sanshou: "三首",
            sw_sanshou_info: "当你受到伤害时，你可以亮出牌堆顶3张牌，若其中有本回合未使用过的牌的类型，防止此伤害。",
            sw_wushuangfangtianji: "无双方天戟",
            sw_wushuangfangtianji_info: "你使用【杀】对目标角色造成伤害后，你可以摸一张牌或弃置目标角色一张牌。",
            sw_shufazijinguan: "束发紫金冠",
            sw_shufazijinguan_info: "准备阶段，你可以对一名其他角色造成一点伤害。",
            sw_hongmianbaihuapao: "红棉百花袍",
            sw_hongmianbaihuapao_info: "锁定技，防止你受到的属性伤害。",
            sw_linglongshimandai: "玲珑狮蛮带",
            sw_linglongshimandai_info: "当你成为其他角色使用牌的目标时，你可以判定，若结果为♥，此牌对你无效。",
            mj_guilongzhanyuedao: "鬼龙斩月刀",
            mj_guilongzhanyuedao_info: "锁定技，你的牌均视为♥花色。",
            mj_mengyanchitu: "梦魇赤兔",
            mj_mengyanchitu_info: "锁定技，①你计算与其他角色距离时-1，其他角色计算与你距离时+1；②当你【梦魇赤兔】置入你的装备区后，弃置你装备区里的其他坐骑牌，③你不能装备其他坐骑牌。",
            mj_qixingpao: "七星袍",
            mj_qixingpao_info: "锁定技，当你受到伤害时，若此伤害为属性伤害，防止之。",
            mj_zhenhunqin: "镇魂琴",
            mj_zhenhunqin_info: "当你使用普【杀】指定目标时，你可以将此【杀】改为雷【杀】。",
            mj_shengguangbaiyi: "圣光白衣",
            mj_shengguangbaiyi_info: "锁定技，①红色杀对你无效；②你的手牌上限+2。",
            mj_xieshenmianju: "邪神面具",
            mj_xieshenmianju_info: "锁定技，①你的武将牌不能被翻面；①当你受到大于1点伤害时，此伤害-1。",
            mj_jishengong: "姬神弓",
            mj_jishengong_info: "当你使用【杀】造成伤害后，你可以获得目标角色装备区里的一张牌。",
            mj_baihuaqun: "百花裙",
            mj_baihuaqun_info: "锁定技，①当你的体力值为1时，防止你受到的所有伤害；②当你失去装备区里的【百花裙】时，你摸2张牌。",
            mj_yinyueqiang: "银月枪",
            mj_yinyueqiang_info: "你的回合外，每当你使用或打出了一张黑色手牌（若为使用则在它结算之前），你可以立即对你攻击范围内的任意一名角色使用一张【杀】。",
            mj_monkey: "猴子",
            mj_monkey_info: "猴子偷桃：当场上有其他角色使用【桃】时，你可以弃掉【猴子】，阻止【桃】的结算并将其收为手牌。",
            mj_zhanying: "战鹰",
            mj_zhanying_info: "回合开始时，你可以观看牌堆顶的一张牌，然后选择将其置于牌堆顶或牌堆底。",
            mj_canglang: "苍狼",
            mj_canglang_info: "你使用【杀】或【决斗】对装备区内没有牌的角色造成伤害时，此伤害+1。",
            fh_yinyueqiang: "银月枪",
            fh_yinyueqiang_skill: "银月枪",
            fh_yinyueqiang_info: "其他角色的回合结束时，若你本回合失去过手牌，则你可以对一名攻击范围内本回合获得过牌的角色使用一张【杀】。",
            huyi: "虎翼",
            huyi_skill: "虎翼",
            huyi_info: "你使用【杀】对目标造成属性伤害时，你可以横置至多两名角色。",
        },

        list: [
            ["spade", 5, "sw_guilongzhanyuedao"],
            ["spade", 9, "sw_guofengyupao"],
            ["club", 2, "sw_qimenbagua"],
            ["diamond", 1, "sw_chiyanzhenhunqin"],
            ["spade", 5, "sw_juechenjinge"],
            ["diamond", 12, "sw_xiuluolianyuji"],
            ["spade", 6, "sw_chixueqingfeng"],
            ["club", 4, "sw_xuwangzhimian"],
            ["heart", 13, "sw_qicaishenlu"],
            ["spade", 2, "sw_luanfenghemingjian"],
            ["diamond", 5, "sw_xingtianpojunfu"],
            ["heart", 5, "sw_jinwuluorigong"],
            ["club", 12, "sw_lingsheji"],
            ["spade", 13, "sw_shanrangzhaoshu"],
            ["diamond", 12, "sw_sanshou"],
            ["diamond", 12, "sw_wushuangfangtianji"],
            ["diamond", 1, "sw_shufazijinguan"],
            ["club", 1, "sw_hongmianbaihuapao"],
            ["club", 2, "sw_linglongshimandai"],
            ["diamond", 5, "mj_guilongzhanyuedao"],
            ["diamond", 13, "mj_mengyanchitu"],
            ["spade", 1, "mj_qixingpao"],
            ["club", 3, "mj_zhenhunqin"],
            ["heart", 6, "mj_shengguangbaiyi"],
            ["diamond", 6, "mj_xieshenmianju"],
            ["heart", 5, "mj_jishengong"],
            ["spade", 2, "mj_baihuaqun"],
            ["diamond", 12, "mj_yinyueqiang"],
            ["diamond", 5, "mj_monkey"],
            ["diamond", 13, "mj_zhanying"],
            ["club", 5, "mj_canglang"],
            ["diamond", 12, "fh_yinyueqiang"],
            ["spade", 11, "huyi"],
        ],
    };
    return swCard;
});