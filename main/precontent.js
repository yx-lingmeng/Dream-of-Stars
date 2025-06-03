import { lib, game, ui, get, ai, _status } from "../../../noname.js"
import { character } from "../character/index.js";
import { skill } from "../character/skill.js";
export async function precontent(config, pack) {
    {
        //本体版本检测
        let noname = lib.version.split(".").slice(2),
            min = [17],
            len = Math.min(noname.length, min.length),
            status = false;
        if (lib.version.slice(0, 5) === "1.10.")
            for (let i = 0; i < len; i++) {
                if (Number(noname[i]) < min[i]) {
                    status = "您的无名杀版本太低";
                    break;
                }
            }
        else status = "检测到游戏大版本号与本扩展支持版本号不同";
        if (typeof status === "string") {
            alert(status + "，为避免版本不兼容产生不必要的问题，已为您关闭《星之梦》，稍后重启游戏");
            game.saveExtensionConfig("星之梦", "enable", false);
            game.reload();
        }
    }
    if (lib.config && lib.config[`extension_凌梦自用_enable`]) {
        alert("Tip:建议删除旧扩展凌梦自用")
    }
    if (lib.config.extension_星之梦_extensionClose) {
        lib.message.client.opened = function () {
            game.send(
                "init",
                lib.versionOL,
                {
                    id: game.onlineID,
                    onlineKey: game.onlineKey,
                    avatar: lib.config.connect_avatar,
                    nickname: get.connectNickname(),
                    versionLocal: lib.version,
                    extension: false,
                },
                lib.config.banned_info
            );
            if (ui.connecting && !ui.connecting.splashtimeout) {
                ui.connecting.firstChild.innerHTML = "重连成功";
            }
        }
    }
    //屏蔽弹窗
    if (lib.config.extension_星之梦_cancelwindow) {
        window.onerror = function (msg, src, line, column, err) { };
    }
    // 下面是一键导入的代码
    // 原理：根据extension目录下的扩展文件夹名写入游戏设置，完成后自动重启
    game.yjdrcqgn = function (bool) {
        var arr;
        game.getFileList("extension", function (fold, file) {
            arr = Array.from(fold);
            var f = function (array, ck) {
                if (!Array.isArray(array) || array.length == 0) return;
                var fail = [],
                    rean = false;
                while (array.length) {
                    var obj = array.shift();
                    // 新增当扩展文件夹内缺少extension.js时报错提示
                    if (lib.device) {
                        window.resolveLocalFileSystemURL(
                            localStorage.getItem("noname_inited") + "extension/" + obj + "/" + "extension.js",
                            function (entry) {
                                // alert('导入成功');
                            },
                            function () {
                                // 手机端用window.resolveLocalFileSystemURL无法检测文件是否存在，故更改了弹窗内容
                                alert("检测到扩展文件夹内缺少 extension.js 文件" + "\n\r请检查扩展文件夹的文件结构是否正确！");
                                // alert("本层文件夹内缺少 extension.js 文件:\n游戏目录/extension/" + obj + "\n\r请检查扩展文件夹的文件结构是否正确！");
                            }
                        );
                    } else {
                        // 非手机端，修复在非windows的平台上有问题的bug，感谢リいコしロ的指导
                        if (!lib.node.fs.existsSync(__dirname + "/extension/" + obj + "/" + "extension.js")) {
                            alert("本层文件夹内缺少 extension.js 文件:\n游戏目录/extension/" + obj + "\n\r请检查扩展文件夹的文件结构是否正确！");
                            continue;
                        }
                    }
                    if (["coin", "boss", "wuxing", "cardpile"].includes(obj)) continue;
                    if (ck.indexOf(obj) == -1) {
                        fail.add(obj);
                        continue;
                    }
                    if (lib.config.extensions.indexOf(obj) > -1) continue;
                    rean = true;
                    lib.config.extensions.add(obj);
                    game.saveConfig("extension_" + obj + "_enable", true);
                }
                if (fail.length == 0 && rean) {
                    game.saveConfig("extensions", lib.config.extensions);
                    if (bool == true) game.reload();
                }
            };
            f(arr, Array.from(fold));
        });
    };
    //官方势力
    if (lib.config.extension_星之梦_guanfangshili) {
        Object.defineProperty(lib, "group", {
            get: () => {
                if (get.mode() === "guozhan") return ["wei", "shu", "wu", "qun", "jin"];
                return ["wei", "shu", "wu", "qun", "jin"];
            },
            set: () => { },
        });
        lib.skill.guanfangshili = {
            trigger: {
                global: "gameStart",
                player: "enterGame",
            },
            forced: true,
            popup: false,
            silent: true,
            priority: Infinity,
            filter: (_, player) => {
                if (get.mode() === "guozhan") return false;
                return player.group && !lib.group.includes(player.group);
            },
            async content(event, trigger, player) {
                const list = lib.group.slice(0, 5);
                const result = await player
                    .chooseControl(list)
                    .set("ai", () => get.event().controls.randomGet())
                    .set("prompt", "请选择你的势力")
                    .forResult();
                if (result?.control) {
                    player.group = result.control;
                    player.node.name.dataset.nature = get.groupnature(result.control);
                }
            },
        };
    }
    //神将选择势力
    if (lib.config.extension_星之梦_shenjiangshili) {
        lib.skill._bol_doudizhuchoosegroup = {
            charlotte: true,
            ruleSkill: true,
            trigger: {
                global: "gameStart",
                player: "enterGame",
            },
            forced: true,
            popup: false,
            silent: true,
            priority: 520, //大于523是早于重新选将，小于523是晚于重新选将
            firstDo: true,
            direct: true,
            filter(event, player) {
                if (get.mode() != "doudizhu" && get.mode() != "versus" && get.mode() != "single") return false;
                if (lib.character[player.name1][1] == "shen" || lib.character[player.name1][1] == "devil") return true;
                // for (var i of lib.character[player.name1][4]) {
                //     return i.includes("doublegroup");
                // }
            },
            content() {
                "step 0";
                var name = player.name1;
                if (get.is.double(name)) {
                    player.chooseControl(get.is.double(name, true)).set("prompt", "请选择你的势力");
                } else if (lib.character[name][1] == "shen" || lib.character[name][1] == "devil") {
                    var list = lib.group.slice(0);
                    list.remove("shen");
                    list.remove("devil");
                    player.chooseControl(list).set("prompt", "请选择武将的势力");
                }
                "step 1";
                if (result.control) {
                    player.changeGroup(result.control);
                }
            },
        };
    }
    //阶段提示
    if (lib.config.extension_星之梦_tphaseTip) {
        lib.skill._tphaseTip = {
            trigger: {
                global: ["phaseBegin", "phaseZhunbeiBefore", "phaseJudgeBefore", "phaseDrawBefore", "phaseUseBefore", "phaseDiscardBefore", "phaseJieshuBefore", "phaseEnd", "phaseAfter"],
            },
            async content(event, trigger) {
                if (lib.config.extension_星之梦_tphaseTipStyle == "1") {
                    game.broadcastAll(
                        (phasename, player) => {
                            if (phasename === "phaseAfter") {
                                if (player.node.tphaseTip) {
                                    player.node.tphaseTip.innerHTML = "";
                                }
                            } else {
                                const phase = {
                                    phaseBegin: "extension/星之梦/image/JDTS/hhks.jpg",
                                    phaseZhunbeiBefore: "extension/星之梦/image/JDTS/zbjd.jpg",
                                    phaseJudgeBefore: "extension/星之梦/image/JDTS/pdjd.jpg",
                                    phaseDrawBefore: "extension/星之梦/image/JDTS/mpjd.jpg",
                                    phaseUseBefore: "extension/星之梦/image/JDTS/cpjd.jpg",
                                    phaseDiscardBefore: "extension/星之梦/image/JDTS/qpjd.jpg",
                                    phaseJieshuBefore: "extension/星之梦/image/JDTS/jsjd.jpg",
                                    phaseEnd: "extension/星之梦/image/JDTS/hhjs.jpg",
                                };
                                const imgSrc = phase[phasename];
                                if (!player.node.tphaseTip) {
                                    const addStyle = () => {
                                        const style = document.createElement("style");
                                        style.innerHTML = `
                                        .tphaseTip {
                                            display: none;
                                            left: 40px;
                                            bottom: 185px;
                                            width: 80px;
                                            position: fixed;                         
                                            transition-property:all; 
                                            transition-duration:1s;
                                            pointer-events: none;
                                        }
                                        .player[data-position="0"] .tphaseTip {
                                            display: block;                                
                                            left: 40px;
                                            bottom: 185px;
                                            width: 80px;
                                            position: fixed;                         
                                            transition-property:all; 
                                            transition-duration:1s;
                                            pointer-events: none;
                                        }
                                        .tphaseTip img {
                                            max-width: 100%;
                                            height: auto;
                                        }
                                        `;
                                        document.head.appendChild(style);
                                    };
                                    if (!game.phaseStyle) {
                                        game.phaseStyle = true;
                                        addStyle();
                                    }
                                    player.node.tphaseTip = ui.create.div(".tphaseTip", `<img src="${imgSrc}" alt="${phasename}">`, player);
                                    if (lib.node && lib.node.clients) {
                                        lib.node.clients.forEach(c => {
                                            if (!c.gameOptions) {
                                                c.gameOptions = {};
                                            }
                                            if (!c.gameOptions.phaseTip) {
                                                c.send(addStyle);
                                                c.gameOptions.phaseTip = true;
                                            }
                                        });
                                    }
                                } else {
                                    player.node.tphaseTip.innerHTML = `<img src="${imgSrc}" alt="${phasename}">`;
                                }
                            }
                        },
                        event.triggername,
                        trigger.player
                    );
                }
                if (lib.config.extension_星之梦_tphaseTipStyle == "2") {
                    game.broadcastAll(
                        (phasename, player) => {
                            if (phasename === "phaseAfter") {
                                if (player.node.tphaseTip) {
                                    player.node.tphaseTip.innerHTML = "";
                                }
                            } else {
                                const phase = {
                                    phaseBegin: "extension/星之梦/image/JDTS/hhks.png",
                                    phaseZhunbeiBefore: "extension/星之梦/image/JDTS/zbjd.png",
                                    phaseJudgeBefore: "extension/星之梦/image/JDTS/pdjd.png",
                                    phaseDrawBefore: "extension/星之梦/image/JDTS/mpjd.png",
                                    phaseUseBefore: "extension/星之梦/image/JDTS/cpjd.png",
                                    phaseDiscardBefore: "extension/星之梦/image/JDTS/qpjd.png",
                                    phaseJieshuBefore: "extension/星之梦/image/JDTS/jsjd.png",
                                    phaseEnd: "extension/星之梦/image/JDTS/hhjs.png",
                                };
                                const imgSrc = phase[phasename];
                                if (!player.node.tphaseTip) {
                                    const addStyle = () => {
                                        const style = document.createElement("style");
                                        style.innerHTML = `
                                        .tphaseTip {
                                            display: none;
                                            left: 40px;
                                            bottom: 185px;
                                            width: 80px;
                                            position: fixed;                         
                                            transition-property:all; 
                                            transition-duration:1s;
                                            pointer-events: none;
                                        }
                                        .player[data-position="0"] .tphaseTip {
                                            display: block;                                
                                            left: 40px;
                                            bottom: 185px;
                                            width: 80px;
                                            position: fixed;                         
                                            transition-property:all; 
                                            transition-duration:1s;
                                            pointer-events: none;
                                        }
                                        .player[data-position="0"] .tphaseTip.show {
                                            opacity: 1;
                                        }
                                        .tphaseTip img {
                                            max-width: 100%;
                                            height: auto;
                                        }
                                        `;
                                        document.head.appendChild(style);
                                    };
                                    if (!game.phaseStyle) {
                                        game.phaseStyle = true;
                                        addStyle();
                                    }
                                    player.node.tphaseTip = ui.create.div(".tphaseTip", `<img src="${imgSrc}" alt="${phasename}">`, player);
                                    if (lib.node && lib.node.clients) {
                                        lib.node.clients.forEach(c => {
                                            if (!c.gameOptions) {
                                                c.gameOptions = {};
                                            }
                                            if (!c.gameOptions.phaseTip) {
                                                c.send(addStyle);
                                                c.gameOptions.phaseTip = true;
                                            }
                                        });
                                    }
                                } else {
                                    player.node.tphaseTip.innerHTML = `<img src="${imgSrc}" alt="${phasename}">`;
                                }
                            }
                        },
                        event.triggername,
                        trigger.player
                    );
                }
            },
            direct: true,
            popup: false,
            forced: true,
            forceDie: true,
            charlotte: true,
            locked: true,
        };
    }
    //前缀Prefix添加
    lib.namePrefix.set("凌", {
        color: "#8470FF",
        nature: "LightSlateBlue",
        showName: "凌",
    });
    lib.namePrefix.set("☆神", {
        color: "#FFD700",
        nature: "GoldEnrod",
        showName: "☆神",
    });
    lib.namePrefix.set("虎翼", {
        color: "#FFD700",
        nature: "GoldEnrod",
        showName: "虎翼",
    });
    lib.namePrefix.set("勇", {
        color: "#def7ca",
        nature: "watermm",
        showName: "勇",
    });
    lib.namePrefix.set("严", {
        color: "#def7ca",
        nature: "watermm",
        showName: "严",
    });
    lib.namePrefix.set("旧界", {
        getSpan: (prefix, name) => `${get.prefixSpan("旧")}${get.prefixSpan("界")}`,
    });
    lib.namePrefix.set("旧谋", {
        getSpan: (prefix, name) => `${get.prefixSpan("旧")}${get.prefixSpan("谋")}`,
    });
    lib.namePrefix.set("旧勇", {
        getSpan: (prefix, name) => `${get.prefixSpan("旧")}${get.prefixSpan("勇")}`,
    });
    lib.namePrefix.set("旧严", {
        getSpan: (prefix, name) => `${get.prefixSpan("旧")}${get.prefixSpan("严")}`,
    });
    lib.namePrefix.set("旧玄", {
        getSpan: (prefix, name) => `${get.prefixSpan("旧")}${get.prefixSpan("玄")}`,
    });
    lib.namePrefix.set("旧友", {
        getSpan: (prefix, name) => `${get.prefixSpan("旧")}${get.prefixSpan("友")}`,
    });
    lib.namePrefix.set("旧势", {
        getSpan: (prefix, name) => `${get.prefixSpan("旧")}${get.prefixSpan("势")}`,
    });
    lib.namePrefix.set("旧☆", {
        getSpan: (prefix, name) => `${get.prefixSpan("旧")}${get.prefixSpan("☆")}`,
    });
    lib.namePrefix.set("旧SP", {
        getSpan: (prefix, name) => `${get.prefixSpan("旧")}${get.prefixSpan("SP")}`,
    });
    lib.namePrefix.set("旧族", {
        getSpan: (prefix, name) => `${get.prefixSpan("旧")}${get.prefixSpan("族")}`,
    });
    lib.namePrefix.set("旧星", {
        getSpan: (prefix, name) => `${get.prefixSpan("旧")}${get.prefixSpan("星")}`,
    });
    lib.namePrefix.set("旧乐", {
        getSpan: (prefix, name) => `${get.prefixSpan("旧")}${get.prefixSpan("乐")}`,
    });
    lib.namePrefix.set("旧武", {
        getSpan: (prefix, name) => `${get.prefixSpan("旧")}${get.prefixSpan("武")}`,
    });
    lib.namePrefix.set("旧威", {
        getSpan: (prefix, name) => `${get.prefixSpan("旧")}${get.prefixSpan("威")}`,
    });
    lib.namePrefix.set("旧神", {
        getSpan: (prefix, name) => `${get.prefixSpan("旧")}${get.prefixSpan("神")}`,
    });
    lib.namePrefix.set("旧侠", {
        getSpan: (prefix, name) => `${get.prefixSpan("旧")}${get.prefixSpan("侠")}`,
    });
    lib.namePrefix.set("旧幻", {
        getSpan: (prefix, name) => `${get.prefixSpan("旧")}${get.prefixSpan("幻")}`,
    });
    lib.namePrefix.set("凌界", {
        getSpan: (prefix, name) => `${get.prefixSpan("凌")}${get.prefixSpan("界")}`,
    });
    lib.namePrefix.set("凌谋", {
        getSpan: (prefix, name) => `${get.prefixSpan("凌")}${get.prefixSpan("谋")}`,
    });
    lib.namePrefix.set("凌神", {
        getSpan: (prefix, name) => `${get.prefixSpan("凌")}${get.prefixSpan("神")}`,
    });
    //添加卡牌包
    lib.init.js(
        lib.assetURL + "extension/星之梦/card/card.js",
        null,
        () => {
            //导入卡牌包
            lib.config.all.cards.push("swCard");
            lib.translate["swCard_card_config"] = "<span style='font-family: xingkai'>神武再世</span>";
        },
        () => {
            alert("error 〈神武再世〉卡牌导入失败");
        }
    );
    //单向联机
    if (skill.skill) character.skill = skill.skill;
    if (skill.translate) {
        for (let translate in skill.translate) if (!character.translate[translate]) character.translate[translate] = skill.translate[translate];
    };
    delete character.name;
    game.addCharacterPack(character);
    lib.translate.星之梦_character_config = "星之梦";
    lib.config.星之梦_characters_enable = true;
    lib.arenaReady.push(function () {
        lib.connectCharacterPack.add("星之梦");
    });
    if (!_status.postReconnect.lingmengziyong_pack) _status.postReconnect.lingmengziyong_pack = [function (pack) {
        lib.translate.星之梦_character_config = "星之梦";
        lib.characterPack["星之梦"] = pack;
        for (let key in pack) lib.character[key] = pack[key];
        lib.config.extension_星之梦_characters_enable = true;
        lib.connectCharacterPack.add("星之梦");
        lib.config.characters.add("星之梦");
    }, lib.characterPack["星之梦"]];
    if (!_status.postReconnect.lingmengziyong_translate) _status.postReconnect.lingmengziyong_translate = [function (translates) {
        lib.translate.星之梦_character_config = "星之梦";
        for (let key in translates) lib.translate[key] = translates[key];
    }, character.translate];
    if (!_status.postReconnect.lm_pack_namePrefix) _status.postReconnect.lm_pack_namePrefix = [function () {
        //Prefix添加
        lib.namePrefix.set("凌", {
            color: "#8470FF",
            nature: "LightSlateBlue",
            showName: "凌",
        });
        lib.namePrefix.set("☆神", {
            color: "#FFD700",
            nature: "GoldEnrod",
            showName: "☆神",
        });
        lib.namePrefix.set("虎翼", {
            color: "#FFD700",
            nature: "GoldEnrod",
            showName: "虎翼",
        });
        lib.namePrefix.set("勇", {
            color: "#def7ca",
            nature: "watermm",
            showName: "勇",
        });
        lib.namePrefix.set("严", {
            color: "#def7ca",
            nature: "watermm",
            showName: "严",
        });
        lib.namePrefix.set("旧界", {
            getSpan: (prefix, name) => `${get.prefixSpan("旧")}${get.prefixSpan("界")}`,
        });
        lib.namePrefix.set("旧谋", {
            getSpan: (prefix, name) => `${get.prefixSpan("旧")}${get.prefixSpan("谋")}`,
        });
        lib.namePrefix.set("旧勇", {
            getSpan: (prefix, name) => `${get.prefixSpan("旧")}${get.prefixSpan("勇")}`,
        });
        lib.namePrefix.set("旧严", {
            getSpan: (prefix, name) => `${get.prefixSpan("旧")}${get.prefixSpan("严")}`,
        });
        lib.namePrefix.set("旧玄", {
            getSpan: (prefix, name) => `${get.prefixSpan("旧")}${get.prefixSpan("玄")}`,
        });
        lib.namePrefix.set("旧友", {
            getSpan: (prefix, name) => `${get.prefixSpan("旧")}${get.prefixSpan("友")}`,
        });
        lib.namePrefix.set("旧势", {
            getSpan: (prefix, name) => `${get.prefixSpan("旧")}${get.prefixSpan("势")}`,
        });
        lib.namePrefix.set("旧☆", {
            getSpan: (prefix, name) => `${get.prefixSpan("旧")}${get.prefixSpan("☆")}`,
        });
        lib.namePrefix.set("旧SP", {
            getSpan: (prefix, name) => `${get.prefixSpan("旧")}${get.prefixSpan("SP")}`,
        });
        lib.namePrefix.set("旧族", {
            getSpan: (prefix, name) => `${get.prefixSpan("旧")}${get.prefixSpan("族")}`,
        });
        lib.namePrefix.set("旧星", {
            getSpan: (prefix, name) => `${get.prefixSpan("旧")}${get.prefixSpan("星")}`,
        });
        lib.namePrefix.set("旧乐", {
            getSpan: (prefix, name) => `${get.prefixSpan("旧")}${get.prefixSpan("乐")}`,
        });
        lib.namePrefix.set("旧武", {
            getSpan: (prefix, name) => `${get.prefixSpan("旧")}${get.prefixSpan("武")}`,
        });
        lib.namePrefix.set("旧威", {
            getSpan: (prefix, name) => `${get.prefixSpan("旧")}${get.prefixSpan("威")}`,
        });
        lib.namePrefix.set("旧神", {
            getSpan: (prefix, name) => `${get.prefixSpan("旧")}${get.prefixSpan("神")}`,
        });
        lib.namePrefix.set("旧侠", {
            getSpan: (prefix, name) => `${get.prefixSpan("旧")}${get.prefixSpan("侠")}`,
        });
        lib.namePrefix.set("旧幻", {
            getSpan: (prefix, name) => `${get.prefixSpan("旧")}${get.prefixSpan("幻")}`,
        });
        lib.namePrefix.set("凌界", {
            getSpan: (prefix, name) => `${get.prefixSpan("凌")}${get.prefixSpan("界")}`,
        });
        lib.namePrefix.set("凌谋", {
            getSpan: (prefix, name) => `${get.prefixSpan("凌")}${get.prefixSpan("谋")}`,
        });
        lib.namePrefix.set("凌神", {
            getSpan: (prefix, name) => `${get.prefixSpan("凌")}${get.prefixSpan("神")}`,
        });
    }, []];
    lib.element.content.waitForPlayer = function () {
        "step 0"
        ui.auto.hide();
        ui.pause.hide();
        game.createServer();
        if (!lib.translate.zhu) {
            lib.translate.zhu = "主";
        };
        if (event.func) {
            event.func();
        };
        if (!lib.configOL.number) {
            lib.configOL.number = parseInt(lib.configOL.player_number);
        };
        if (game.onlineroom) {
            game.send("server", "config", lib.configOL);
        };
        ui.create.connectPlayers(game.ip);
        if (!window.isNonameServer) {
            var me = game.connectPlayers[0];
            me.setIdentity("zhu");
            me.initOL(get.connectNickname(), lib.config.connect_avatar);
            me.playerid = "1";
            game.onlinezhu = "1";
        };
        _status.waitingForPlayer = true;
        if (window.isNonameServer) {
            document.querySelector("#server_status").innerHTML = "等待中";
        };
        game.pause();
        "step 1"
        _status.waitingForPlayer = false;
        lib.configOL.gameStarted = true;
        if (window.isNonameServer) {
            document.querySelector("#server_status").innerHTML = "游戏中";
        };
        if (game.onlineroom) {
            game.send("server", "config", lib.configOL);
        };
        for (var i = 0; i < game.connectPlayers.length; i++) {
            game.connectPlayers[i].delete();
        };
        delete game.connectPlayers;
        if (ui.roomInfo) {
            ui.roomInfo.remove();
            delete ui.roomInfo;
        };
        if (ui.exitroom) {
            ui.exitroom.remove();
            delete ui.exitroom;
        };
        game.broadcast(function (postReconnect, pack) {
            postReconnect = get.parsedResult(postReconnect);
            for (var i in postReconnect) {
                if (Array.isArray(postReconnect[i])) {
                    postReconnect[i].shift().apply(this, postReconnect[i]);
                };
            };
        }, _status.postReconnect);
        game.broadcast("gameStart");
        game.delay(2);
        ui.auto.show();
        ui.pause.show();
        if (lib.config.show_cardpile) {
            ui.cardPileButton.style.display = "";
        };
    };



    //转换技阴阳修正
    if (lib.config.extension_星之梦_zhuanhuanji) {
        lib.translate.nzry_juzhan_info = "转换技，阳：当你成为其他角色【杀】的目标后，你可以与其各摸一张牌，然后其本回合内不能再对你使用牌。阴：当你使用【杀】指定一名角色为目标后，你可以获得其一张牌，然后你本回合内不能再对其使用牌。";
        lib.dynamicTranslate.nzry_juzhan = function (player) {
            if (player.storage.nzry_juzhan == true) return '转换技，阳：当你成为其他角色【杀】的目标后，你可以与其各摸一张牌，然后其本回合内不能再对你使用牌。<span class="bluetext">阴：当你使用【杀】指定一名角色为目标后，你可以获得其一张牌，然后你本回合内不能再对其使用牌。</span>';
            return '转换技，<span class="bluetext">阳：当你成为其他角色【杀】的目标后，你可以与其各摸一张牌，然后其本回合内不能再对你使用牌。</span>阴：当你使用【杀】指定一名角色为目标后，你可以获得其一张牌，然后你本回合内不能再对其使用牌。';
        };
        lib.translate.nzry_chenglve_info = "转换技，出牌阶段限一次，阳：你可以摸一张牌，然后弃置两张手牌。阴：你可以摸两张牌，然后弃置一张手牌。若如此做，直到本回合结束，你使用与弃置牌花色相同的牌无距离和次数限制。";
        lib.dynamicTranslate.nzry_chenglve = function (player) {
            if (player.storage.nzry_chenglve == true) return '转换技，出牌阶段限一次，阳：你可以摸一张牌，然后弃置两张手牌。<span class="bluetext">阴：你可以摸两张牌，然后弃置一张手牌。</span>若如此做，直到本回合结束，你使用与弃置牌花色相同的牌无距离和次数限制。';
            return 'ngyi转换技，出牌阶段限一次，<span class="bluetext">阳：你可以摸一张牌，然后弃置两张手牌。</span>阴：你可以摸两张牌，然后弃置一张手牌。若如此做，直到本回合结束，你使用与弃置牌花色相同的牌无距离和次数限制。';
        };
        lib.translate.nzry_zhenliang_info = "转换技，阳：出牌阶段限一次，你可以弃置一张与“任”颜色相同的牌并对攻击范围内的一名角色造成1点伤害。阴：当你于回合外使用或打出的牌结算完成后，若此牌与“任”颜色相同，则你可以令一名角色摸一张牌。";
        lib.dynamicTranslate.nzry_zhenliang = function (player) {
            if (player.storage.nzry_zhenliang == true) return '转换技，阳：出牌阶段限一次，你可以弃置一张与“任”颜色相同的牌并对攻击范围内的一名角色造成1点伤害。<span class="bluetext">阴：当你于回合外使用或打出的牌结算完成后，若此牌与“任”颜色相同，则你可以令一名角色摸一张牌。</span>';
            return '转换技，<span class="bluetext">阳：出牌阶段限一次，你可以弃置一张与“任”颜色相同的牌并对攻击范围内的一名角色造成1点伤害。</span>阴：当你于回合外使用或打出的牌结算完成后，若此牌与“任”颜色相同，则你可以令一名角色摸一张牌。';
        };
        lib.translate.nzry_shenshi_info = "转换技，阳：出牌阶段限一次，你可以将一张牌交给一名除你外手牌数最多的角色，然后对其造成1点伤害，若该角色因此死亡，则你可以令一名角色将手牌摸至四张。阴：其他角色对你造成伤害后，你可以观看该角色的手牌，然后交给其一张牌，当前角色回合结束时，若此牌仍在该角色的区域内，你将手牌摸至四张。";
        lib.dynamicTranslate.nzry_shenshi = function (player) {
            if (player.storage.nzry_shenshi == true) return '转换技，阳：出牌阶段限一次，你可以将一张牌交给一名手牌数最多的角色，然后对其造成1点伤害，若该角色因此死亡，则你可以令一名角色将手牌摸至四张。<span class="bluetext">阴：其他角色对你造成伤害后，你可以观看该角色的手牌，然后交给其一张牌，当前角色回合结束时，若此牌仍在该角色的区域内，你将手牌摸至四张。</span>';
            return '转换技，<span class="bluetext">阳：出牌阶段限一次，你可以将一张牌交给一名手牌数最多的角色，然后对其造成1点伤害，若该角色因此死亡，则你可以令一名角色将手牌摸至四张。</span>阴：其他角色对你造成伤害后，你可以观看该角色的手牌，然后交给其一张牌，当前角色回合结束时，若此牌仍在该角色的区域内，你将手牌摸至四张。';
        };

        lib.translate.nzry_longnu_info = "转换技，锁定技，阳：出牌阶段开始时，你失去1点体力并摸一张牌，然后本阶段内你的红色手牌均视为火【杀】且无距离限制。阴：出牌阶段开始时，你减1点体力上限并摸一张牌，然后本阶段内你的锦囊牌均视为雷【杀】且无使用次数限制。";
        lib.dynamicTranslate.nzry_longnu = function (player) {
            if (player.hasSkill("nzry_longnu_2")) return '转换技，锁定技，阳：出牌阶段开始时，你失去1点体力并摸一张牌，然后本阶段内你的红色手牌均视为火【杀】且无距离限制。<span class="legendtext">阴：出牌阶段开始时，你减1点体力上限并摸一张牌，然后本阶段内你的锦囊牌均视为雷【杀】且无使用次数限制。</span>';
            if (player.hasSkill("nzry_longnu_1")) return '转换技，锁定技，<span class="legendtext">阳：出牌阶段开始时，你失去1点体力并摸一张牌，然后本阶段内你的红色手牌均视为火【杀】且无距离限制。</span>阴：出牌阶段开始时，你减1点体力上限并摸一张牌，然后本阶段内你的锦囊牌均视为雷【杀】且无使用次数限制。';
            if (player.storage.nzry_longnu == true) return '转换技，锁定技，阳：出牌阶段开始时，你失去1点体力并摸一张牌，然后本阶段内你的红色手牌均视为火【杀】且无距离限制。<span class="bluetext">阴：出牌阶段开始时，你减1点体力上限并摸一张牌，然后本阶段内你的锦囊牌均视为雷【杀】且无使用次数限制。</span>';
            return '转换技，锁定技，<span class="bluetext">阳：出牌阶段开始时，你失去1点体力并摸一张牌，然后本阶段内你的红色手牌均视为火【杀】且无距离限制。</span>阴：出牌阶段开始时，你减1点体力上限并摸一张牌，然后本阶段内你的锦囊牌均视为雷【杀】且无使用次数限制。';
        };

        lib.translate.diezhang_info = "转换技。①出牌阶段，你使用杀的次数上限+1。②阳：当你使用牌被其他角色抵消后，你可以弃置一张牌，视为对其使用X张【杀】；阴：当其他角色使用牌被你抵消后，你可以摸X张牌，视为对其使用一张【杀】（X为1）。";
        lib.dynamicTranslate.diezhang = function (player) {
            var str = "";
            str += player.storage.duanwan ? "" : "①出牌阶段，你使用杀的次数上限+1。②";
            str += "转换技" + (player.storage.duanwan ? "，每回合限一次" : "") + "。";
            var cnNum = get.cnNumber(player.storage.duanwan ? 2 : 1);
            var yinStr = "阳：当你使用牌被其他角色抵消后，你可以弃置一张牌，视为对其使用" + cnNum + "张【杀】";
            var yangStr = "阴：当其他角色使用牌被你抵消后，你可以摸" + cnNum + "张牌，视为对其使用一张【杀】";
            if (player.storage.diezhang) {
                if (player.storage.duanwan) yinStr = '<span style="text-decoration: line-through; ">' + yinStr + "</span>";
                yangStr = '<span class="bluetext">' + yangStr + "</span>";
            } else {
                yinStr = '<span class="bluetext">' + yinStr + "</span>";
                if (player.storage.duanwan) yangStr = '<span style="text-decoration: line-through; ">' + yangStr + "</span>";
            }
            return str + yinStr + "；" + yangStr + "。";
        };

        lib.translate.jsrgshichong_info = "转换技。当你使用牌指定其他角色为唯一目标后，阳：你可以获得目标角色一张手牌；阴：目标角色可以交给你一张手牌。";
        lib.dynamicTranslate.jsrgshichong = function (player) {
            if (player.storage.jsrgshichong) return '转换技。当你使用牌指定其他角色为唯一目标后，阳：你可以获得目标角色一张手牌；<span class="bluetext">阴：目标角色可以交给你一张手牌</span>。';
            return '转换技。当你使用牌指定其他角色为唯一目标后，<span class="bluetext">阳：你可以获得目标角色一张手牌</span>；阴：目标角色可以交给你一张手牌。';
        };
        lib.translate.spshidi_info = "转换技，锁定技，准备阶段，转换为阳，结束阶段，转换为阴，阳：你计算与其他角色的距离-1，你使用的黑色【杀】不可被响应。阴：其他角色计算与你的距离+1，你不可响应其他角色对你使用的红色【杀】。";
        lib.dynamicTranslate.spshidi = function (player) {
            if (player.countMark("spshidi") % 2 == 0) return '转换技，锁定技。准备阶段，转换为阳，结束阶段，转换为阴。<span class="bluetext">阳：你计算与其他角色的距离-1，你使用的黑色【杀】不可被响应。</span>阴：其他角色计算与你的距离+1，你不可响应其他角色对你使用的红色【杀】。';
            return '转换技，锁定技。准备阶段，转换为阳，结束阶段，转换为阴。阳：你计算与其他角色的距离-1，你使用的黑色【杀】不可被响应。<span class="bluetext">阴：其他角色计算与你的距离+1，你不可响应其他角色对你使用的红色【杀】。</span>';
        };
        lib.translate.sbzhenliang_info = "转换技。阳：出牌阶段限一次，你可以弃置X张与“任”颜色相同的牌并对攻击范围内的一名角色造成1点伤害（X为你与其体力值值差且X至少为1）。阴：你的回合外，一名角色使用或打出牌结算完成后，若此牌与“任”类别相同，则你可以令至多两名角色各摸两张牌。";
        lib.dynamicTranslate.sbzhenliang = function (player) {
            var storage = player.storage.sbzhenliang;
            var str = "转换技。";
            if (!storage) str += '<span class="bluetext">';
            str += "阳：出牌阶段限一次，你可以弃置X张与“任”颜色相同的牌并对攻击范围内的一名角色造成1点伤害（X为你与其体力值值差且X至少为1）。";
            if (!storage) str += "</span>";
            if (storage) str += '<span class="bluetext">';
            str += "阴：你的回合外，一名角色使用或打出牌结算完成后，若此牌与“任”类别相同，则你可以令至多两名角色各摸两张牌。";
            if (storage) str += "</span>";
            return str;
        };
        lib.translate.mbxuetu_info = "转换技。出牌阶段限一次，阳：你可以令一名角色回复1点体力；阴：你可以令一名角色摸两张牌。";
        lib.translate.mbxuetu_fail_info = "转换技。出牌阶段限一次，阳：你可以回复1点体力，然后令一名其他角色弃置两张牌；阴：你可以摸一张牌，然后对一名其他角色造成1点伤害。";
        lib.dynamicTranslate.mbxuetu = function (player) {
            const xuetu = player.storage.mbxuetu,
                status = player.countMark("mbxuetu_status");
            if (status === 0) {
                if (!xuetu) return '转换技。出牌阶段限一次，<span class="bluetext">阳：你可以令一名角色回复1点体力；</span>阴：你可以令一名角色摸两张牌。';
                return '转换技。出牌阶段限一次，阳：你可以令一名角色回复1点体力；<span class="bluetext">阴：你可以令一名角色摸两张牌。</span>';
            } else if (status === 1) {
                return lib.translate.mbxuetu_achieve_info;
            } else {
                if (!xuetu) return '转换技。出牌阶段限一次，<span class="bluetext">阳：你可以回复1点体力，然后令一名其他角色弃置两张牌；</span>阴：你可以摸一张牌，然后对一名其他角色造成1点伤害。';
                return '转换技。出牌阶段限一次，阳：你可以回复1点体力，然后令一名其他角色弃置两张牌；<span class="bluetext">阴：你可以摸一张牌，然后对一名其他角色造成1点伤害。</span>';
            }
        };
        lib.translate.mbzuoyou_info = "转换技。出牌阶段限一次，阳：你可以令一名角色摸三张牌，然后其弃置两张牌；阴：你可以令一名角色弃置一张手牌，然后其获得1点护甲。";
        lib.dynamicTranslate.mbzuoyou = function (player) {
            const mbzuoyou = player.storage.mbzuoyou,
                versus = get.mode() == "versus" && _status.mode == "two" ? "角色" : "有手牌的角色弃置一张手牌，然后其";
            if (mbzuoyou) return '转换技。出牌阶段限一次，阳：你可以令一名角色摸三张牌，然后其弃置两张牌；<span class="bluetext">阴：你可以令一名' + versus + "获得1点护甲。</span>";
            return '转换技。出牌阶段限一次，<span class="bluetext">阳：你可以令一名角色摸三张牌，然后其弃置两张牌；</span>阴：你可以令一名' + versus + "获得1点护甲。";
        };
        lib.translate.twfeifu_info = "锁定技，转换技。阳：当你成为【杀】的唯一目标后；阴：当你使用【杀】指定唯一目标后；目标角色须交给使用者一张牌。若此牌为装备牌，则使用者可使用此牌。";
        lib.dynamicTranslate.twfeifu = function (player) {
            var str = "锁定技，转换技。";
            if (!player.storage.twfeifu) str += '<span class="bluetext">';
            str += "阳：当你成为【杀】的唯一目标后；";
            if (!player.storage.twfeifu) str += "</span>";
            if (player.storage.twfeifu) str += '<span class="bluetext">';
            str += "阴：当你使用【杀】指定唯一目标后；";
            if (player.storage.twfeifu) str += "</span>";
            str += "目标角色须交给使用者一张牌。若此牌为装备牌，则使用者可使用此牌。";
            return str;
        };
        lib.translate.twzhenliang_info = "转换技。阳：出牌阶段限一次。你可以弃置一张牌并对攻击范围内的一名角色造成1点伤害。阴：当你或你攻击范围内的一名角色于你的回合外受到伤害时，你可以弃置一张牌令此伤害-1。然后若你以此法弃置的牌颜色与“任”的颜色相同，你摸一张牌。";
        lib.dynamicTranslate.twzhenliang = function (player) {
            if (player.storage.twzhenliang) return '转换技。阳：出牌阶段限一次。你可以弃置一张牌并对攻击范围内的一名角色造成1点伤害。<span class="bluetext">阴：当你或你攻击范围内的一名角色于你的回合外受到伤害时，你可以弃置一张牌令此伤害-1。然后若你以此法弃置的牌颜色与“任”的颜色相同，你摸一张牌。</span>';
            return '转换技。<span class="bluetext">阳：出牌阶段限一次。你可以弃置一张牌并对攻击范围内的一名角色造成1点伤害。</span>阴：当你或你攻击范围内的一名角色于你的回合外受到伤害时，你可以弃置一张牌令此伤害-1。<span class="bluetext">然后若你以此法弃置的牌颜色与“任”的颜色相同，你摸一张牌。</span>';
        };

        lib.translate.youlong_info = "转换技，阳，每轮限一次，你可以废除你的一个装备栏，视为使用一张未以此法使用过的普通锦囊牌；阴，每轮限一次，你可以废除你的一个装备栏，视为使用一张未以此法使用过的基本牌。";
        lib.dynamicTranslate.youlong = function (player) {
            if (player.storage.youlong) return '转换技，阳，每轮限一次，你可以废除你的一个装备栏，视为使用一张未以此法使用过的普通锦囊牌；<span class="bluetext">阴，每轮限一次，你可以废除你的一个装备栏，视为使用一张未以此法使用过的基本牌。</span>';
            return '转换技，<span class="bluetext">阳，每轮限一次，你可以废除你的一个装备栏，视为使用一张未以此法使用过的普通锦囊牌；</span>阴，每轮限一次，你可以废除你的一个装备栏，视为使用一张未以此法使用过的基本牌。';
        };
        lib.translate.olfeibai_info = "转换技，锁定技。阳：当你因执行你使用的非黑色牌的效果而造成伤害时，此伤害值+1；阴：当你因执行你使用的非红色牌的效果而回复体力时，此回复值+1。";
        lib.dynamicTranslate.olfeibai = function (player) {
            if (player.storage.olfeibai) return '转换技，锁定技。阳：当你因执行你使用的非黑色牌的效果而造成伤害时，此伤害值+1；<span class="bluetext">阴：当你因执行你使用的非红色牌的效果而回复体力时，此回复值+1。</span>';
            return '转换技，锁定技。<span class="bluetext">阳：当你因执行你使用的非黑色牌的效果而造成伤害时，此伤害值+1；</span>阴：当你因执行你使用的非红色牌的效果而回复体力时，此回复值+1。';
        };
        lib.translate.olmiuyan_info = "转换技，阳：你可以将一张黑色牌当【火攻】使用，若此牌造成伤害，你获得本阶段展示过的所有手牌；阴：你可以将一张黑色牌当【火攻】使用，若此牌未造成伤害，本轮本技能失效。";
        lib.dynamicTranslate.olmiuyan = function (player) {
            if (player.storage.olmiuyan) return '转换技，阳：你可以将一张黑色牌当【火攻】使用，若此牌造成伤害，你获得本阶段展示过的所有手牌；<span class="bluetext">阴：你可以将一张黑色牌当【火攻】使用，若此牌未造成伤害，本轮本技能失效。</span>';
            return '转换技，<span class="bluetext">阳：你可以将一张黑色牌当【火攻】使用，若此牌造成伤害，你获得本阶段展示过的所有手牌；</span>阴：你可以将一张黑色牌当【火攻】使用，若此牌未造成伤害，本轮本技能失效。';
        };
        lib.translate.olsaogu_info = "转换技。①出牌阶段，你可以。阳：弃置两张牌（不能包含你本阶段弃置过的花色），然后使用其中的【杀】；阴：摸一张牌。②结束阶段，你可以弃置一张牌，令一名其他角色执行你当前〖扫谷①〗的分支。";
        lib.dynamicTranslate.olsaogu = function (player) {
            if (player.storage.olsaogu) return '转换技。①出牌阶段，你可以。阳：弃置两张牌（不能包含你本阶段弃置过的花色），然后使用其中的【杀】；<span class="bluetext">阴：摸一张牌</span>。②结束阶段，你可以弃置一张牌，令一名其他角色执行你当前〖扫谷①〗的分支。';
            return '转换技。①出牌阶段，你可以。<span class="bluetext">阳：弃置两张牌（不能包含你本阶段弃置过的花色），然后使用其中的【杀】</span>；阴：摸一张牌。②结束阶段，你可以弃置一张牌，令一名其他角色执行你当前〖扫谷①〗的分支。';
        };
        lib.translate.olxuanzhu_info = "转换技，每回合限一次，你可以将一张牌称为“玄”置于武将牌上，然后视为使用：阳，任意基本牌；阴，任意普通锦囊牌（须指定目标且仅指定一个目标）。若此次置于武将牌上的“玄”：不为装备牌，你弃置一张牌；为装备牌，你将所有“玄”置入弃牌堆，然后摸等量的牌。";
        lib.dynamicTranslate.olxuanzhu = function (player) {
            if (player.storage.olxuanzhu) return '转换技，每回合限一次，你可以将一张牌称为“玄”置于武将牌上，然后视为使用：阳，任意基本牌；<span class="bluetext">阴，任意普通锦囊牌（须指定目标且仅指定一个目标）</span>。若此次置于武将牌上的“玄”：不为装备牌，你弃置一张牌；为装备牌，你将所有“玄”置入弃牌堆，然后摸等量的牌。';
            return '转换技，每回合限一次，你可以将一张牌称为“玄”置于武将牌上，然后视为使用：<span class="bluetext">阳，任意基本牌</span>；阴，任意普通锦囊牌（须指定目标且仅指定一个目标）。若此次置于武将牌上的“玄”：不为装备牌，你弃置一张牌；为装备牌，你将所有“玄”置入弃牌堆，然后摸等量的牌。';
        };
        lib.translate.piaoping_info = "转换技，锁定技。当你使用一张牌时，阳：你摸X张牌。阴：你弃置X张牌。（X为你本阶段内发动过〖漂萍〗的次数且至多等于你的体力值）";
        lib.dynamicTranslate.piaoping = function (player) {
            if (player.storage.piaoping) return '转换技，锁定技。当你使用一张牌时，阳：你摸X张牌。<span class="bluetext">阴：你弃置X张牌。</span>（X为你本阶段内发动过〖漂萍〗的次数且至多等于你的体力值）';
            return '转换技，锁定技。当你使用一张牌时，<span class="bluetext">阳：你摸X张牌。</span>阴：你弃置X张牌。（X为你本阶段内发动过〖漂萍〗的次数且至多等于你的体力值）';
        };

        lib.translate.chuaili_info = "锁定技。当你成为其他角色使用黑色牌的目标后，若你的〖漂萍〗：处于阴状态，则你将〖漂萍〗转换至阳状态；处于阳状态，则你令〖托献〗发动次数+1，然后若〖托献〗发动次数大于3，则〖惴栗〗于本回合内失效。";
        lib.dynamicTranslate.chuaili = function (player) {
            if (!player.hasSkill("piaoping", null, null, false)) return "锁定技。当你成为其他角色使用黑色牌的目标后，若你的〖漂萍〗：处于阴状态，则你将〖漂萍〗转换至阳状态；处于阳状态，则你令〖托献〗发动次数+1，然后若〖托献〗发动次数大于3，则〖惴栗〗于本回合内失效。";
            if (player.storage.piaoping) return '锁定技。当你成为其他角色使用黑色牌的目标后，若你的〖漂萍〗：<span class="bluetext">处于阴状态，则你将〖漂萍〗转换至阳状态；</span>处于阳状态，则你令〖托献〗发动次数+1，然后若〖托献〗发动次数大于3，则〖惴栗〗于本回合内失效。';
            return '锁定技。当你成为其他角色使用黑色牌的目标后，若你的〖漂萍〗：处于阴状态，则你将〖漂萍〗转换至阳状态；<span class="bluetext">处于阳状态，则你令〖托献〗发动次数+1，然后若〖托献〗发动次数大于3，则〖惴栗〗于本回合内失效。</span>';
        };
        lib.translate.dcdouzhen_info = "转换技，锁定技。你的回合内，阳：你的黑色基本牌只能当【决斗】使用，且使用时获得目标一张牌；阴：你的红色基本牌只能当【杀】使用或打出，且使用时无次数限制。";
        lib.dynamicTranslate.dcdouzhen = function (player) {
            var str = "锁定技，转换技。你的回合内，";
            if (player.countMark("dcdouzhen") % 2) str += '阳：你的黑色基本牌只能当【决斗】使用，且使用时获得目标一张牌；<span class="bluetext">阴：你的红色基本牌只能当【杀】使用或打出，且使用时无次数限制。</span>';
            else str += '<span class="bluetext">阳：你的黑色基本牌只能当【决斗】使用，且使用时获得目标一张牌；</span>阴：你的红色基本牌只能当【杀】使用或打出，且使用时无次数限制。';
            return str;
        };

        lib.translate.bazhan_info = "转换技，出牌阶段限一次，阳：你可以将至多两张手牌交给一名其他角色。阴：你可以获得一名其他角色的至多两张手牌。若以此法移动的牌包含【酒】或♥牌，则你可令得到牌的角色执行一项：①回复1点体力。②复原武将牌。";
        lib.dynamicTranslate.bazhan = function (player) {
            if (player.storage.bazhan) return '转换技，出牌阶段限一次，阳：你可以将至多两张手牌交给一名其他角色。<span class="bluetext">阴：你可以获得一名其他角色的至多两张手牌。</span>若以此法移动的牌包含【酒】或♥牌，则你可令得到此牌的角色执行一项：①回复1点体力。②复原武将牌。';
            return '转换技，出牌阶段限一次，<span class="bluetext">阳：你可以将至多两张手牌交给一名其他角色。</span>阴：你可以获得一名其他角色的至多两张手牌。若以此法移动的牌包含【酒】或♥牌，则你可令得到此牌的角色执行一项：①回复1点体力。②复原武将牌。';
        };
        lib.translate.caiyi_info = "转换技。结束阶段，你可令一名角色选择并执行一项，然后移除此选项。阳：⒈回复X点体力。⒉摸X张牌，⒊复原武将牌。⒋随机执行一个已经移除过的阳选项；阴：⒈受到X点伤害。⒉弃置X张牌。⒊翻面并横置。⒋随机执行一个已经移除过的阴选项。（X为该阳阴态剩余选项的数量）。";
        lib.dynamicTranslate.caiyi = function (player) {
            var current = player.storage.caiyi,
                list = player.storage.caiyi_info || [[], []];
            var str = "转换技。结束阶段，你可令一名角色选择并执行一项，然后移除此选项。";
            var list1 = ["⒈回复X点体力。", "⒉摸X张牌。", "⒊复原武将牌。", "⒋随机执行一个已经移除过的阳选项；"],
                list2 = ["⒈受到X点伤害。", "⒉弃置X张牌。", "⒊翻面并横置。", "⒋随机执行一个已经移除过的阴选项。"],
                str1 = "阳：",
                str2 = "阴：";
            for (var i = 0; i < 4; i++) {
                var clip1 = list1[i],
                    clip2 = list2[i];
                if (list[0].includes(i)) clip1 = '<span style="text-decoration:line-through;">' + clip1 + "</span>";
                if (list[1].includes(i)) clip2 = '<span style="text-decoration:line-through;">' + clip2 + "</span>";
                str1 += clip1;
                str2 += clip2;
            }
            if (current) str2 = '<span class="bluetext">' + str2 + "</span>";
            else str1 = '<span class="bluetext">' + str1 + "</span>";
            return str + str1 + str2 + "（X为该阳阴态剩余选项的数量）。";
        };
        lib.translate.dckaiji_info = "转换技。出牌阶段限一次，你可以：阳：摸X张牌；阴：弃置至多X张牌（X为你的体力上限且至多为5）。";
        lib.dynamicTranslate.dckaiji = function (player) {
            if (player.storage.dckaiji) return '转换技。出牌阶段限一次，你可以：阳：摸X张牌；<span class="bluetext">阴：你可以获得一名其他角色的至多两张手牌。</span>阴：弃置至多X张牌（X为你的体力上限且至多为5）。';
            return '转换技。出牌阶段限一次，你可以：<span class="bluetext">阳：摸X张牌；</span>阴：弃置至多X张牌（X为你的体力上限且至多为5）。';
        };
        lib.translate.dcshoutan_info = "转换技。出牌阶段限一次，阳：你可以弃置一张不为黑色的手牌。阴：你可以弃置一张黑色手牌。";
        lib.dynamicTranslate.dcshoutan = function (player) {
            if (player.storage.dcshoutan) return '转换技。出牌阶段限一次，阳：你可以弃置一张不为黑色的手牌。<span class="bluetext">阴：你可以弃置一张黑色手牌。</span>';
            return '转换技。出牌阶段限一次，<span class="bluetext">阳：你可以弃置一张不为黑色的手牌。</span>阴：你可以弃置一张黑色手牌。';
        };
        lib.translate.dcsbmengmou_info = "转换技，每回合每项各限一次，当你得到其他角色的牌后，或其他角色得到你的牌后：阳，你可以令该角色使用至多X张【杀】，且其每以此法造成1点伤害，其回复1点体力；阴，你可令该角色打出至多X张【杀】，然后其失去Y点体力。（X为你的体力值，Y为X-其打出【杀】数）";
        lib.dynamicTranslate.dcsbmengmou = function (player) {
            var storage = player.storage.dcsbmengmou;
            var str = "转换技，每回合每项各限一次，当你得到其他角色的牌后，或其他角色得到你的牌后：";
            if (!storage) str += '<span class="bluetext">';
            str += "阳，你可以令该角色使用至多X张【杀】，且其每以此法造成1点伤害，其回复1点体力；";
            if (!storage) str += "</span>";
            if (storage) str += '<span class="bluetext">';
            str += "阴，你可令该角色打出至多X张【杀】，然后其失去Y点体力。";
            if (storage) str += "</span>";
            str += "（X为你的体力值，Y为X-其打出【杀】数）";
            return str;
        };
        lib.translate.dcsbyingmou_info = "转换技，每回合限一次，当你对其他角色使用牌后，你可以选择其中一名目标角色：阳，你将手牌数摸至与其相同（至多摸五张），然后视为对其使用一张【火攻】；阴，令一名手牌数为全场最大的角色对其使用手牌中所有的【杀】和伤害类锦囊牌（若其没有可使用的牌则将手牌数弃至与你相同）。";
        lib.dynamicTranslate.dcsbyingmou = function (player) {
            var storage = player.storage.dcsbyingmou;
            var str = "转换技，每回合限一次，你对其他角色使用牌后，你可以选择其中一名目标角色：";
            if (!storage) str += '<span class="bluetext">';
            str += "阳，你将手牌数摸至与其相同（至多摸五张），然后视为对其使用一张【火攻】；";
            if (!storage) str += "</span>";
            if (storage) str += '<span class="bluetext">';
            str += "阴，令一名手牌数为全场最大的角色对其使用手牌中所有的【杀】和伤害类锦囊牌（若其没有可使用的牌则将手牌数弃至与你相同）。";
            if (storage) str += "</span>";
            return str;
        };
        lib.translate.dcsbquanmou_info = "转换技。出牌阶段每名角色限一次，你可以令一名攻击范围内的其他角色交给你一张牌。阳：当你于本阶段内下次对其造成伤害时，取消之；阴：当你于本阶段内下次对其造成伤害后，你可以选择除其外的至多三名其他角色，对这些角色依次造成1点伤害。";
        lib.dynamicTranslate.dcsbquanmou = function (player) {
            if (player.storage.dcsbquanmou) return '转换技。①游戏开始时，你可以转换此技能状态；②出牌阶段每名角色限一次，你可以令一名攻击范围内的其他角色交给你一张牌。阳：当你于本阶段内下次对其造成伤害时，取消之；<span class="bluetext">阴：当你于本阶段内下次对其造成伤害后，你可以选择除其外的至多三名其他角色，对这些角色依次造成1点伤害。</span>';
            return '转换技。①游戏开始时，你可以转换此技能状态；②出牌阶段每名角色限一次，你可以令一名攻击范围内的其他角色交给你一张牌。<span class="bluetext">阳：当你于本阶段内下次对其造成伤害时，取消之；</span>阴：当你于本阶段内下次对其造成伤害后，你可以选择除其外的至多三名其他角色，对这些角色依次造成1点伤害。';
        };

        lib.translate.clanlianzhu_info = "转换技。每名角色Ａ的出牌阶段限一次。阳：Ａ可以重铸一张牌，然后你可以重铸一张牌。若这两张牌颜色不同，则你的手牌上限-1；阴：Ａ可以令你选择一名在你或Ａ攻击范围内的另一名其他角色Ｂ，然后Ａ和你可依次选择是否对Ｂ使用一张【杀】。若这两张【杀】颜色相同，则你的手牌上限+1。";
        lib.dynamicTranslate.clanlianzhu = function (player) {
            if (player.storage.clanlianzhu) return '转换技。每名角色Ａ的出牌阶段限一次。阳：Ａ可以重铸一张牌，然后你可以重铸一张牌。若这两张牌颜色不同，则你的手牌上限-1；<span class="bluetext">阴：Ａ可以令你选择一名在你或Ａ攻击范围内的另一名其他角色Ｂ，然后Ａ和你可依次选择是否对Ｂ使用一张【杀】。若这两张【杀】颜色相同，则你的手牌上限+1</span>。';
            return '转换技。每名角色Ａ的出牌阶段限一次。<span class="bluetext">阳：Ａ可以重铸一张牌，然后你可以重铸一张牌。若这两张牌颜色不同，则你的手牌上限-1</span>；阴：Ａ可以令你选择一名在你或Ａ攻击范围内的另一名其他角色Ｂ，然后Ａ和你可依次选择是否对Ｂ使用一张【杀】。若这两张【杀】颜色相同，则你的手牌上限+1。';
        };
        lib.translate.clanguangu_info = "转换技，出牌阶段限一次。阳：你可以观看牌堆顶的至多四张牌；阴：你可以观看一名角色的至多四张手牌。然后你可以使用其中的一张牌。";
        lib.dynamicTranslate.clanguangu = function (player) {
            if (player.storage.clanguangu) return '转换技，出牌阶段限一次。阳：你可以观看牌堆顶的至多四张牌；<span class="bluetext">阴：你可以观看一名角色的至多四张手牌。</span>然后你可以使用其中的一张牌。';
            return '转换技，出牌阶段限一次。<span class="bluetext">阳：你可以观看牌堆顶的至多四张牌；</span>阴：你可以观看一名角色的至多四张手牌。然后你可以使用其中的一张牌。';
        };
        lib.translate.clanjiexuan_info = "限定技，转换技。阳：你可以将一张红色牌当【顺手牵羊】使用；阴：你可以将一张黑色牌当【过河拆桥】使用。";
        lib.dynamicTranslate.clanjiexuan = function (player) {
            if (player.storage.clanjiexuan) return '限定技，转换技。阳：你可以将一张红色牌当【顺手牵羊】使用；<span class="bluetext">阴：你可以将一张黑色牌当【过河拆桥】使用。</span>';
            return '限定技，转换技。<span class="bluetext">阳：你可以将一张红色牌当【顺手牵羊】使用；</span>阴：你可以将一张黑色牌当【过河拆桥】使用。';
        };
        lib.translate.dddlanghuai_info = "转换技。摸牌阶段，你可展示手牌（无牌则不展示），并改为摸其中：阳，包含花色数的牌；阴，缺少花色数的牌。";
        lib.dynamicTranslate.dddlanghuai = function (player) {
            return "转换技，摸牌阶段，你" + (player.hasMark("dddxuanlun_del") ? "" : "可") + "展示手牌（无牌则不展示），并改为摸其中" + (!player.storage["dddlanghuai"] ? "包含" : "缺少") + "花色数的牌。";
        };
        lib.translate.chihaya_youfeng_info = "转换技，阳，每轮限一次，你可以加1点体力上限，视为使用一张普通锦囊牌；阴，每轮限一次，你可以废除你的一个装备栏，视为使用一张基本牌。";

        lib.translate.kamome_jieban_info = "转换技。每回合限一次，当你受到或造成伤害后，阳：你可将两张牌交给一名其他角色，然后其交给你一张牌。阴：你可将一张牌交给一名其他角色，然后其交给你两张牌。";
        lib.dynamicTranslate.kamome_jieban = function (player) {
            if (player.storage.kamome_jieban) return '转换技。每回合限一次，当你受到或造成伤害后，阳：你可将两张牌交给一名其他角色，然后其交给你一张牌。<span class="bluetext">阴：你可将一张牌交给一名其他角色，然后其交给你两张牌。</span>';
            return '转换技。每回合限一次，当你受到或造成伤害后，<span class="bluetext">阳：你可将两张牌交给一名其他角色，然后其交给你一张牌。</span>阴：你可将一张牌交给一名其他角色，然后其交给你两张牌。';
        };
        lib.translate.junkchigang_info = "转换技，锁定技。判定阶段开始前，你取消此阶段。然后你获得一个额外的：阳，摸牌阶段；阴，出牌阶段。";
        lib.dynamicTranslate.junkchigang = function (player) {
            if (player.storage.junkchigang) return '转换技，锁定技。判定阶段开始前，你取消此阶段。然后你获得一个额外的：阳，摸牌阶段；<span class="bluetext">阴，出牌阶段。</span>';
            return '转换技，锁定技。判定阶段开始前，你取消此阶段。然后你获得一个额外的：<span class="bluetext">阳，摸牌阶段</span>；阴，出牌阶段。';
        };
        lib.translate.dcbenxi_info = "转换技，锁定技。当你失去手牌后，阳：系统随机检索出一句转换为拼音后包含“wu,yi”的技能台词，然后你念出此台词。阴：你获得上次所念出的台词对应的技能直到你的下个回合开始；若你已拥有该技能，则改为对其他角色各造成1点伤害。";
        lib.dynamicTranslate.dcbenxi = function (player) {
            if (player.storage.dcbenxi) return "转换技，锁定技。当你失去手牌后，阳：系统随机检索出一句转换为拼音后包含“wu,yi”的技能台词，然后你念出此台词。<span class='bluetext'>阴：你获得上次所念出的台词对应的技能直到你的下个回合开始；若你已拥有该技能，则改为对其他角色各造成1点伤害。</span>";
            return "转换技，锁定技。当你失去手牌后，<span class='bluetext'>阳：系统随机检索出一句转换为拼音后包含“wu,yi”的技能台词，然后你念出此台词。</span>阴：你获得上次所念出的台词对应的技能直到你的下个回合开始；若你已拥有该技能，则改为对其他角色各造成1点伤害。";
        };
        lib.translate.olziruo_info = "转换技，锁定技。①当你使用最{阳：左；阴：右}侧的手牌时，你摸一张牌。②你以此法摸牌后本回合不能整理手牌。";
        lib.dynamicTranslate.olziruo = function (player) {
            if (player.storage.olziruo) return '转换技，锁定技。①当你使用最{阳：左；<span class="bluetext">阴：右</span>}侧的手牌时，你摸一张牌。②你以此法摸牌后本回合不能整理手牌。';
            return '转换技，锁定技。①当你使用最{<span class="bluetext">阳：左</span>；阴：右}侧的手牌时，你摸一张牌。②你以此法摸牌后本回合不能整理手牌。';
        };
        lib.translate.jsrgdangren_info = "转换技。阳：当你需要对自己使用【桃】时，你可以视为使用之。阴：当你可以对其他角色使用【桃】时，你须视为使用之。";
        lib.dynamicTranslate.jsrgdangren = function (player) {
            if (player.storage.jsrgdangren) return '转换技。阳：当你需要对自己使用【桃】时，你可以视为使用之。<span class="bluetext">阴：当你可以对其他角色使用【桃】时，你须视为使用之。</span>';
            return '转换技。<span class="bluetext">阳：当你需要对自己使用【桃】时，你可以视为使用之。</span>阴：当你可以对其他角色使用【桃】时，你须视为使用之。';
        };
        lib.translate.dcsbfumou_info = "转换技，出牌阶段限一次，你可以观看一名其他角色A的手牌并展示其一半手牌：阳，并将这些牌交给另一名其他角色B，然后你与A各摸X张牌（X为A以此法失去的手牌数）；阴，令A依次使用这些牌中所有其可以使用的牌（无距离限制且不可被响应）。";
        lib.dynamicTranslate.dcsbfumou = function (player) {
            const storage = player.storage.dcsbfumou;
            var str = "转换技，出牌阶段限一次，你可以观看一名其他角色A的手牌并展示其一半手牌：";
            if (!storage) str += '<span class="bluetext">';
            str += "阳，并将这些牌交给另一名其他角色B，然后你与A各摸X张牌（X为A以此法失去的手牌数）；";
            if (!storage) str += "</span>";
            if (storage) str += '<span class="bluetext">';
            str += "阴，令A依次使用这些牌中所有其可以使用的牌（无距离限制且不可被响应）。";
            if (storage) str += "</span>";
            return str;
        };
        lib.translate.dcxianmou_info = "转换技，你失去过牌的回合结束时，你可以：阳，观看牌堆顶五张牌并获得至多X张牌，若未获得X张牌则获得〖遗计〗直到再发动此项；阴，观看一名角色手牌并弃置其中至多X张牌，若弃置X张牌则你进行一次【闪电】判定。（X为你本回合失去牌数）";
        lib.dynamicTranslate.dcxianmou = function (player) {
            const storage = player.storage.dcxianmou;
            var str = "转换技，你失去过牌的回合结束时，你可以：";
            if (!storage) str += '<span class="bluetext">';
            str += "阳，观看牌堆顶五张牌并获得至多X张牌，若未获得X张牌则获得〖遗计〗直到再发动此项；";
            if (!storage) str += "</span>";
            if (storage) str += '<span class="bluetext">';
            str += "阴，观看一名角色手牌并弃置其中至多X张牌，若弃置X张牌则你进行一次【闪电】判定。";
            if (storage) str += "</span>";
            return str + "（X为你本回合失去牌数）";
        };
        lib.translate.dcqixin_info = "转换技。①出牌阶段，你可以将性别变更为：阳，刘协--男；阴，曹节--女。②当你即将死亡时，你取消之并将性别变更为〖齐心①〗的转换状态，将体力调整至此状态的体力，然后你本局游戏不能发动〖齐心〗。";
        lib.dynamicTranslate.dcqixin = function (player) {
            const storage = player.storage["dcqixin"];
            const banned = player.storage.dcqixin_die;
            if (banned) return '<span style="opacity:0.5">' + lib.translate.dcqixin_info + "</span>";
            let str = "转换技。①出牌阶段，你可以将性别变更为：";
            if (!storage) str += '<span class="bluetext">';
            str += "阳，刘协--男。";
            if (!storage) str += "</span>";
            if (storage) str += '<span class="bluetext">';
            str += "阴，曹节--女；";
            if (storage) str += "</span>";
            return str + "②当你即将死亡时，你取消之并将性别变更为〖齐心①〗的转换状态，将体力调整至此状态的体力，然后你本局游戏不能发动〖齐心〗。";
        };
        lib.translate.dcsbkongwu_info = "转换技，出牌阶段限一次，你可以弃置至多体力上限张牌，选择一名其他角色：阳，弃置其至多等量张牌；阴，视为对其使用等量张【杀】。此阶段结束时，若其手牌数和体力值均不大于你，其下回合摸牌阶段摸牌数-1且装备区里的所有牌失效。";
        lib.dynamicTranslate.dcsbkongwu = function (player) {
            let str = "转换技，出牌阶段限一次，你可以弃置至多体力上限张牌，选择一名其他角色：",
                yin = "阳，弃置其至多等量张牌；",
                yang = "阴，视为对其使用等量张【杀】。";
            if (player.storage.dcsbkongwu) yang = `<span class="firetext">${yang}</span>`;
            else yin = `<span class="bluetext">${yin}</span>`;
            return str + yin + yang + "此阶段结束时，若其手牌数和体力值均不大于你，其下回合摸牌阶段摸牌数-1且装备区里的所有牌失效。";
        };
        lib.translate.jdjuqi_info = "转换技。阳：准备阶段，你摸三张牌；其他角色的准备阶段，其可以展示并交给你一张黑色手牌。阴：准备阶段，你令你本回合使用牌无次数限制且造成的伤害+1；其他角色的准备阶段，其可以展示并交给你一张红色手牌。";
        lib.dynamicTranslate.jdjuqi = function (player) {
            if (player.storage.jdjuqi) return '转换技。阳：准备阶段，你摸三张牌；其他角色的准备阶段，其可以展示并交给你一张黑色手牌。<span class="bluetext">阴：准备阶段，你令你本回合使用牌无次数限制且造成的伤害+1；其他角色的准备阶段，其可以展示并交给你一张红色手牌。</span>';
            return '转换技。<span class="bluetext">阳：准备阶段，你摸三张牌；其他角色的准备阶段，其可以展示并交给你一张黑色手牌。</span>阴：准备阶段，你令你本回合使用牌无次数限制且造成的伤害+1；其他角色的准备阶段，其可以展示并交给你一张红色手牌。';
        };
        lib.translate.tylongnu_info = "转换技，游戏开始时，你可以改变此转换技的状态。出牌阶段开始时，你可以摸一张牌并：阳：失去1点体力，然后此阶段内你可以将红色手牌当无距离限制的火【杀】使用或打出；阴：减少1点体力上限，然后此阶段内你可以将锦囊牌当无次数限制的雷【杀】使用或打出。";
        lib.dynamicTranslate.tylongnu = function (player) {
            let str = "转换技，游戏开始时，你可以改变此转换技的状态。出牌阶段开始时，你可以摸一张牌并：";
            let yin = "阳：失去1点体力，然后此阶段内你可以将红色手牌当无距离限制的火【杀】使用或打出；";
            if (player.hasSkill("tylongnu_yin")) yin = "<span class='legendtext'>" + yin + "</span>";
            else if (!player.storage.tylongnu && !player.hasSkill("tylongnu_yang")) yin = "<span class='bluetext'>" + yin + "</span>";
            str += yin;
            let yang = "阴：减少1点体力上限，然后此阶段内你可以将锦囊牌当无次数限制的雷【杀】使用或打出。";
            if (player.hasSkill("tylongnu_yang")) yang = "<span class='legendtext'>" + yang + "</span>";
            else if (player.storage.tylongnu && !player.hasSkill("tylongnu_yin")) yang = "<span class='firetext'>" + yang + "</span>";
            str += yang;
            return str;
        };
        lib.translate.tyqianshou_info = "转换技，其他角色的回合开始时，若其体力值大于你，或其未处于横置状态，阳：你可展示并交给其一张红色牌，本回合你不能使用手牌且你与其不能成为牌的目标；阴：你可令其展示并交给你一张牌，若此牌不为黑色，你失去一点体力。";
        lib.dynamicTranslate.tyqianshou = function (player) {
            let str = "转换技，其他角色的回合开始时，若其体力值大于你，或其未处于横置状态，",
                yin = "阳：你可展示并交给其一张红色牌，本回合你不能使用手牌且你与其不能成为牌的目标；",
                yang = "阴：你可令其展示并交给你一张牌，若此牌不为黑色，你失去一点体力。";
            if (player.storage.tyqianshou) yang = "<span class='firetext'>" + yang + "</span>";
            else yin = "<span class='bluetext'>" + yin + "</span>";
            return str + yin + yang;
        };
        lib.translate.tyliupo_info = "转换技，回合开始时，你令本轮：阳：所有角色不能使用【桃】；阴：所有即将造成的伤害均视为体力流失。";
        lib.dynamicTranslate.tyliupo = function (player) {
            let str = "转换技，回合开始时，你令本轮：",
                yin = "阳：所有角色不能使用【桃】；",
                yang = "阴：所有即将造成的伤害均视为体力流失。";
            if (player.storage.tyliupo) yang = "<span class='firetext'>" + yang + "</span>";
            else yin = "<span class='bluetext'>" + yin + "</span>";
            return str + yin + yang;
        };
        lib.translate.yyyanggu_info = "转换技。阳，当你受到伤害后，你可以回复1点体力；阴，你可以将一张手牌当作【声东击西】使用。";
        lib.dynamicTranslate.yyyanggu = function (player) {
            if (player.storage.yyyanggu) return '转换技。阳，当你受到伤害后，你可以回复1点体力；<span class="bluetext">阴，你可以将一张手牌当作【声东击西】使用</span>。';
            return '转换技。<span class="bluetext">阳，当你受到伤害后，你可以回复1点体力</span>；阴，你可以将一张手牌当作【声东击西】使用。';
        };
        lib.translate.sbtiandu_info = "转换技，出牌阶段开始时，阳：你可以弃置两张手牌，然后视为使用一张普通锦囊牌；阴：你进行判定并获得判定牌，然后若判定结果与你本局游戏因〖天妒〗弃置的牌花色相同，你受到1点无来源伤害。";
        lib.dynamicTranslate.sbtiandu = function (player) {
            if (player.storage.sbtiandu) return '转换技，出牌阶段开始时，阳：你可以弃置两张手牌，然后视为使用一张普通锦囊牌；<span class="bluetext">阴：你进行判定并获得判定牌，然后若判定结果与你本局游戏因〖天妒〗弃置的牌花色相同，你受到1点无来源伤害</span>。';
            return '转换技，出牌阶段开始时，<span class="bluetext">阳：你可以弃置两张手牌，然后视为使用一张普通锦囊牌</span>；阴：你进行判定并获得判定牌，然后若判定结果与你本局游戏因〖天妒〗弃置的牌花色相同，你受到1点无来源伤害。';
        };
        lib.translate.hm_shice_info = "转换技，阳：当你受到属性伤害时，若你的技能数不大于伤害来源，你可以防止此伤害并视为使用一张【火攻】；阴：当你不因此技能使用牌指定唯一目标后，你可以令其弃置装备区任意张牌，然后此牌额外结算X次（X为其装备区的牌数）。";
        lib.dynamicTranslate.hm_shice = function (player) {
            if (player.storage.hm_shice) return '转换技，<span class="bluetext">阳：当你受到属性伤害时，若你的技能数不大于伤害来源，你可以防止此伤害并视为使用一张【火攻】</span>；阴：当你不因此技能使用牌指定唯一目标后，你可以令其弃置装备区任意张牌，然后此牌额外结算X次（X为其装备区的牌数）。';
            return '转换技，阳：当你受到属性伤害时，若你的技能数不大于伤害来源，你可以防止此伤害并视为使用一张【火攻】；<span class="bluetext">阴：当你不因此技能使用牌指定唯一目标后，你可以令其弃置装备区任意张牌，然后此牌额外结算X次（X为其装备区的牌数）</span>。';
        };
        lib.translate.fengliao_info = "锁定技，转换技，你使用牌指定唯一目标后，阳：你令其摸一张牌；阴：你对其造成一点火焰伤害。";
        lib.dynamicTranslate.fengliao = function (player) {
            if (Boolean(player.storage["fengliao"])) return `锁定技，转换技，你使用牌指定唯一目标后，阳：你令其摸一张牌；<span class="bluetext">阴：你对其造成一点火焰伤害。</span>`;
            return `锁定技，转换技，你使用牌指定唯一目标后，<span class="bluetext">阳：你令其摸一张牌</span>；阴：你对其造成一点火焰伤害。`;
        };
        lib.translate.yyyanggu_info = "转换技。阳，当你受到伤害后，你可以回复1点体力；阴，你可以将一张手牌当作【声东击西】使用。";
        lib.dynamicTranslate.yyyanggu = function (player) {
            if (player.storage.yyyanggu) return '转换技。阳：当你受到伤害后，你可以回复1点体力；<span class="bluetext">阴：你可以将一张手牌当作【声东击西】使用</span>。';
            return '转换技。<span class="bluetext">阳：当你受到伤害后，你可以回复1点体力</span>；阴：你可以将一张手牌当作【声东击西】使用。';
        };
    }
    //自用定位

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
        };
        lib.translate.tianming_info = "当你成为【杀】的目标时，你可以弃置两张牌（不足则全弃，无牌则不弃），然后摸两张牌。然后你可以选择一名角色，令其弃置两张牌（不足则全弃，无牌则不弃），然后摸两张牌。";
    }
    //十常侍增强
    if (lib.config.extension_星之梦_scsEnhance) {
        lib.skill.mbdanggu = {
            audio: 2,
            trigger: {
                player: "enterGame",
                global: "phaseBefore",
            },
            filter(event, player) {
                return event.name != "phase" || game.phaseNumber == 0;
            },
            derivation: ["mbdanggu_faq", "mbdanggu_faq2", "scstaoluan", "scschiyan", "scszimou", "scspicai", "scsyaozhuo", "scsxiaolu", "scskuiji", "scschihe", "scsniqu", "scsmiaoyu"],
            forced: true,
            unique: true,
            onremove(player) {
                delete player.storage.mbdanggu;
                delete player.storage.mbdanggu_current;
                if (lib.skill.mbdanggu.isSingleShichangshi(player)) {
                    game.broadcastAll(function (player) {
                        player.name1 = player.name;
                        player.smoothAvatar(false);
                        player.node.avatar.setBackground(player.name, "character");
                        player.node.name.innerHTML = get.slimName(player.name);
                        delete player.name2;
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
            content() {
                "step 0";
                var list = lib.skill.mbdanggu.changshi.map(i => i[0]);
                player.markAuto("mbdanggu", list);
                game.broadcastAll(
                    function (player, list) {
                        var cards = [];
                        for (var i = 0; i < list.length; i++) {
                            var cardname = "huashen_card_" + list[i];
                            lib.card[cardname] = {
                                fullimage: true,
                                image: "character/" + list[i],
                            };
                            lib.translate[cardname] = get.rawName2(list[i]);
                            cards.push(game.createCard(cardname, "", ""));
                        }
                        player.$draw(cards, "nobroadcast");
                    },
                    player,
                    list
                );
                ("step 1");
                var next = game.createEvent("mbdanggu_clique");
                next.player = player;
                next.setContent(lib.skill.mbdanggu.contentx);
            },
            contentx() {
                "step 0";
                var list = player.getStorage("mbdanggu").slice();
                var first = list.randomRemove();
                event.first = first;
                var others = list.randomGets(4);
                if (others.length == 1) event._result = { bool: true, links: others };
                else {
                    var map = {
                        scs_bilan: "scs_hankui",
                        scs_hankui: "scs_bilan",
                        scs_duangui: "scs_guosheng",
                        scs_guosheng: "scs_duangui",
                    },
                        map2 = lib.skill.mbdanggu.conflictMap(player);
                    var conflictList = others.filter(changshi => {
                        if (map[first] && others.some(changshi2 => map[first] == changshi2)) return map[first] == changshi;
                        else return map2[first].includes(changshi);
                    }),
                        list = others.slice();
                    if (conflictList.length) {
                        var conflict = conflictList.randomGet();
                        list.remove(conflict);
                        game.broadcastAll(
                            function (changshi, player) {
                                if (lib.config.background_speak) {
                                    if (player.isUnderControl(true)) game.playAudio("skill", changshi + "_enter");
                                }
                            },
                            conflict,
                            player
                        );
                    }
                    player
                        .chooseButton(["党锢：请选择结党对象", [[first], "character"], "<div class='text center'>可选常侍</div>", [others, "character"]], true)
                        .set("filterButton", button => {
                            return _status.event.canChoose.includes(button.link);
                        })
                        .set("canChoose", list)
                        .set("ai", button => Math.random() * 10);
                }
                ("step 1");
                if (result.bool) {
                    var first = event.first;
                    var chosen = result.links[0];
                    var skills = [];
                    var list = lib.skill.mbdanggu.changshi;
                    var changshis = [first, chosen];
                    player.unmarkAuto("mbdanggu", changshis);
                    player.storage.mbdanggu_current = changshis;
                    for (var changshi of changshis) {
                        for (var cs of list) {
                            if (changshi == cs[0]) skills.push(cs[1]);
                        }
                    }
                    if (lib.skill.mbdanggu.isSingleShichangshi(player)) {
                        game.broadcastAll(
                            function (player, first, chosen) {
                                player.name1 = first;
                                player.node.avatar.setBackground(first, "character");
                                player.node.name.innerHTML = get.slimName(first);
                                player.name2 = chosen;
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
                        var str = "";
                        for (var i of skills) {
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
                    if (["shan", "tao", "wuxie", "caochuan"].includes(card.name)) return num / 10;
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
            audio: 2,
            trigger: { player: "dieBefore" },
            filter(event, player) {
                return event.getParent().name != "giveup" && player.maxHp > 0;
            },
            derivation: "mbmowang_faq",
            forced: true,
            direct: true,
            priority: 15,
            group: ["mbmowang_die", "mbmowang_return"],
            content() {
                if (_status.mbmowang_return && _status.mbmowang_return[player.playerid]) {
                    trigger.cancel();
                } else {
                    if (player.getStorage("mbdanggu").length) {
                        player.logSkill("mbmowang");
                        game.broadcastAll(function () {
                            if (lib.config.background_speak) game.playAudio("die", "shichangshiRest");
                        });
                        trigger.setContent(lib.skill.mbmowang.dieContent);
                        trigger.includeOut = true;
                    } else player.changeSkin("mbmowang", "shichangshi_dead");
                }
            },
            ai: {
                combo: "mbdanggu",
                neg: true,
            },
            dieContent() {
                "step 0";
                event.forceDie = true;
                if (source) {
                    game.log(player, "被", source, "杀害");
                    if (source.stat[source.stat.length - 1].kill == undefined) {
                        source.stat[source.stat.length - 1].kill = 1;
                    } else {
                        source.stat[source.stat.length - 1].kill++;
                    }
                } else {
                    game.log(player, "阵亡");
                }
                if (player.isIn() && (!_status.mbmowang_return || !_status.mbmowang_return[player.playerid])) {
                    event.reserveOut = true;
                    game.log(player, "进入了修整状态");
                    game.log(player, "移出了游戏");
                    //game.addGlobalSkill('mbmowang_return');
                    if (!_status.mbmowang_return) _status.mbmowang_return = {};
                    _status.mbmowang_return[player.playerid] = 1;
                } else event.finish();
                if (!game.countPlayer()) game.over();
                else if (player.hp != 0) {
                    player.changeHp(0 - player.hp, false).forceDie = true;
                }
                game.broadcastAll(function (player) {
                    if (player.isLinked()) {
                        if (get.is.linked2(player)) {
                            player.classList.toggle("linked2");
                        } else {
                            player.classList.toggle("linked");
                        }
                    }
                    if (player.isTurnedOver()) {
                        player.classList.toggle("turnedover");
                    }
                }, player);
                game.addVideo("link", player, player.isLinked());
                game.addVideo("turnOver", player, player.classList.contains("turnedover"));
                "step 1";
                event.trigger("die");
                "step 2";
                if (event.reserveOut) {
                    if (!game.reserveDead) {
                        for (var mark in player.marks) {
                            if (mark == "mbdanggu") continue;
                            player.unmarkSkill(mark);
                        }
                        var count = 1;
                        var list = Array.from(player.node.marks.childNodes);
                        if (list.some(i => i.name == "mbdanggu")) count++;
                        while (player.node.marks.childNodes.length > count) {
                            var node = player.node.marks.lastChild;
                            if (node.name == "mbdanggu") {
                                node = node.previousSibling;
                            }
                            node.remove();
                        }
                        game.broadcast(
                            function (player, count) {
                                while (player.node.marks.childNodes.length > count) {
                                    var node = player.node.marks.lastChild;
                                    if (node.name == "mbdanggu") {
                                        node = node.previousSibling;
                                    }
                                    node.remove();
                                }
                            },
                            player,
                            count
                        );
                    }
                    for (var i in player.tempSkills) {
                        player.removeSkill(i);
                    }
                    var skills = player.getSkills();
                    for (var i = 0; i < skills.length; i++) {
                        if (lib.skill[skills[i]].temp) {
                            player.removeSkill(skills[i]);
                        }
                    }
                    event.cards = player.getCards("hejsx");
                    if (event.cards.length) {
                        player.discard(event.cards).forceDie = true;
                    }
                }
                "step 3";
                if (event.reserveOut) {
                    game.broadcastAll(
                        function (player, list) {
                            player.classList.add("out");
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
                }
                if (source && lib.config.border_style == "auto" && (lib.config.autoborder_count == "kill" || lib.config.autoborder_count == "mix")) {
                    switch (source.node.framebg.dataset.auto) {
                        case "gold":
                        case "silver":
                            source.node.framebg.dataset.auto = "gold";
                            break;
                        case "bronze":
                            source.node.framebg.dataset.auto = "silver";
                            break;
                        default:
                            source.node.framebg.dataset.auto = lib.config.autoborder_start || "bronze";
                    }
                    if (lib.config.autoborder_count == "kill") {
                        source.node.framebg.dataset.decoration = source.node.framebg.dataset.auto;
                    } else {
                        var dnum = 0;
                        for (var j = 0; j < source.stat.length; j++) {
                            if (source.stat[j].damage != undefined) dnum += source.stat[j].damage;
                        }
                        source.node.framebg.dataset.decoration = "";
                        switch (source.node.framebg.dataset.auto) {
                            case "bronze":
                                if (dnum >= 4) source.node.framebg.dataset.decoration = "bronze";
                                break;
                            case "silver":
                                if (dnum >= 8) source.node.framebg.dataset.decoration = "silver";
                                break;
                            case "gold":
                                if (dnum >= 12) source.node.framebg.dataset.decoration = "gold";
                                break;
                        }
                    }
                    source.classList.add("topcount");
                }
            },
            subSkill: {
                die: {
                    audio: "mbmowang",
                    trigger: { player: "phaseAfter" },
                    forced: true,
                    forceDie: true,
                    content() {
                        "step 0";
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
                            game.delay();
                        }
                        "step 1";
                        player.die();
                    },
                },
                return: {
                    trigger: { player: "phaseBefore" },
                    forced: true,
                    charlotte: true,
                    silent: true,
                    forceDie: true,
                    forceOut: true,
                    filter(event, player) {
                        return !event._mbmowang_return && event.player.isOut() && _status.mbmowang_return[event.player.playerid];
                    },
                    content() {
                        "step 0";
                        trigger._mbmowang_return = true;
                        game.broadcastAll(function (player) {
                            player.classList.remove("out");
                        }, trigger.player);
                        game.log(trigger.player, "移回了游戏");
                        delete _status.mbmowang_return[trigger.player.playerid];
                        trigger.player.recover(trigger.player.maxHp - trigger.player.hp);
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
                        }, trigger.player);
                        "step 1";
                        event.trigger("restEnd");
                        if (!player.hasSkill("mbdanggu", null, null, false)) event.finish();
                        "step 2";
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
                        "step 3";
                        var next = game.createEvent("mbdanggu_clique");
                        next.player = player;
                        next.setContent(lib.skill.mbdanggu.contentx);
                        "step 4";
                        player.draw(2);
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
                    })
                }, 100);
                next.set("ai", function (button) {
                    if (!_status.event.goon) return 0;
                    var val = get.value(button.link);
                    if (button.link == _status.event.target.getEquip(2)) return 2 * (val + 3);
                    return val;
                });
                next.set("goon", get.attitude(player, trigger.target) <= 0);
                next.set("forceAuto", true);
                ("step 1");
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
                        ("step 1");
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
                ("step 1");
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
                    })
                }, 100);
                player.draw(3);
                "step 1";
                var num = player.countCards("he");
                if (!num) event.finish();
                else if (num < 3) event._result = { index: 1 };
                else
                    player
                        .chooseControl()
                        .set("choiceList", ["将三张牌交给一名其他角色", "弃置三张牌"])
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
                ("step 1");
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
                ("step 2");
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
                ("step 3");
                if (result.bool) {
                    var target = result.targets[0];
                    event.target = target;
                    player.line(target, "thunder");
                }
                ("step 4");
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
                ("step 5");
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
                ("step 1");
                if (result.bool) {
                    trigger.player.judge(lib.card.lebu.judge).judge2 = lib.card.lebu.judge2;
                } else event.finish();
                ("step 2");
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
                const {
                    result: { bool },
                } = await player
                    .chooseToRespond(get.prompt("vtbshanwu"), (card, player) => {
                        return get.name(card) == "shan";
                    })
                    .set("prompt2", "打出一张【闪】令" + get.translation(trigger.card) + "无效，然后你摸一张牌")
                    .set("ai", card => {
                        const trigger = get.event().getTrigger();
                        return -get.effect(player, trigger.card, trigger.target, player);
                    })
                    .set("logSkill", "vtbshanwu");
                if (bool) {
                    trigger.getParent().excluded.add(player);
                    await player.draw();
                }
            },
            group: ["vtbshanwu_1", "vtbshanwu_2"],
            subSkill: {
                1: {
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
                            .chooseToDiscard(get.prompt("vtbshanwu_1"), "弃置一张【闪】，取消此【杀】对" + get.translation(trigger.targets) + "的目标", { name: "shan" })
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
                        ("step 1");
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
                2: {
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
                            return lib.skill.vtbshanwu.subSkill.vtbshanwu_2.mod.aiValue.apply(this, arguments);
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
    //梦孙策制衡
    lib.skill.rezhiheng = {
        audio: 2,
        audioname2: { shen_caopi: "rezhiheng_shen_caopi", new_simayi: "rezhiheng_new_simayi", jsrg_sunce: "rezhiheng_jsrg_sunce" },
        mod: {
            aiOrder(player, card, num) {
                if (num <= 0 || get.itemtype(card) !== "card" || get.type(card) !== "equip") return num;
                let eq = player.getEquip(get.subtype(card));
                if (eq && get.equipValue(card) - get.equipValue(eq) < Math.max(1.2, 6 - player.hp)) return 0;
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
        check(card) {
            let player = _status.event.player;
            if (
                get.position(card) == "h" &&
                !player.countCards("h", "du") &&
                (player.hp > 2 ||
                    !player.countCards("h", i => {
                        return get.value(i) >= 8;
                    }))
            )
                return 1;
            if (get.position(card) == "e") {
                let subs = get.subtypes(card);
                if (subs.includes("equip2") || subs.includes("equip3")) return player.getHp() - get.value(card);
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
            player.draw(event.num + cards.length);
        },
        //group:'rezhiheng_draw',
        subSkill: {
            draw: {
                trigger: { player: "loseEnd" },
                silent: true,
                filter(event, player) {
                    if (event.getParent(2).skill != "rezhiheng" && event.getParent(2).skill != "jilue_zhiheng") return false;
                    if (player.countCards("h")) return false;
                    for (var i = 0; i < event.cards.length; i++) {
                        if (event.cards[i].original == "h") return true;
                    }
                    return false;
                },
                content() {
                    player.addTempSkill("rezhiheng_delay", trigger.getParent(2).skill + "After");
                },
            },
            delay: {},
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
                if (tag === "nokeep") return (!arg || (arg && arg.card && get.name(arg.card) === "tao")) && player.isPhaseUsing() && !player.getStat().skill.rezhiheng && player.hasCard(card => get.name(card) !== "tao", "h");
            },
            threaten: 1.55,
        },
    };
    //荆周瑜
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
    //自用ai简易调整
    //九鼎-刘备
    lib.skill.jdsbzhangwu = {
        audio: "sbzhangwu",
        enable: "phaseUse",
        filter(event, player) {
            return player.countMark("sbrende");
        },
        limited: true,
        chooseButton: {
            dialog(event, player) {
                return ui.create.dialog("###章武###" + get.translation("jdsbzhangwu_info"));
            },
            chooseControl(event, player) {
                return Array.from({
                    length: player.countMark("sbrende"),
                })
                    .map((_, i) => get.cnNumber(i + 1, true))
                    .concat(["cancel2"]);
            },
            check(event, player) {
                const choices = Array.from({
                    length: player.countMark("sbrende"),
                }).map((_, i) => get.cnNumber(i + 1, true));
                return choices.length - 1;
            },
            backup(result, player) {
                return {
                    num: result.index + 1,
                    audio: "sbzhangwu",
                    filterCard: () => false,
                    selectCard: -1,
                    skillAnimation: "epic",
                    animationColor: "orange",
                    async content(event, trigger, player) {
                        player.awakenSkill("jdsbzhangwu");
                        const num = lib.skill.jdsbzhangwu_backup.num;
                        player.removeMark("sbrende", num);
                        await player.draw(num);
                        player.tempBanSkill("sbrende", { player: "dying" });
                        player.addTempSkill("new_repaoxiao2");
                    },
                };
            },
            prompt(result, player) {
                return `移去${result.index + 1}枚“仁望”并摸等量张牌`;
            },
        },
        ai: {
            order: 9,
            combo: "sbrende",
            result: {
                player(player, target) {
                    return player.hp < 2 && player.countMark("sbrende") > 5 ? 1 : 0;
                },
            },
        },
        subSkill: {
            backup: {},
        },
    };
    lib.skill.sbrende = {
        audio: 3,
        enable: ["chooseToUse", "chooseToRespond"],
        maxNum: 8,
        filter(event, player) {
            if (event.type == "wuxie" || player.hasSkill("sbrende_used")) return false;
            if (player.countMark("sbrende") < 2) return false;
            for (var name of lib.inpile) {
                if (get.type(name) != "basic") continue;
                var card = { name: name, isCard: true };
                if (event.filterCard(card, player, event)) return true;
                if (name == "sha") {
                    for (var nature of lib.inpile_nature) {
                        card.nature = nature;
                        if (event.filterCard(card, player, event)) return true;
                    }
                }
            }
            return false;
        },
        group: ["sbrende_give", "sbrende_gain"],
        chooseButton: {
            dialog(event, player) {
                var dialog = ui.create.dialog("仁德");
                if (event.type == "phase") {
                    dialog._chosenOpt = [];
                    var table = document.createElement("div");
                    table.classList.add("add-setting");
                    table.style.margin = "0";
                    table.style.width = "100%";
                    table.style.position = "relative";
                    var list = ["视为使用基本牌", "交给其他角色牌"];
                    for (var i of list) {
                        var td = ui.create.div(".shadowed.reduce_radius.pointerdiv.tdnode");
                        td.innerHTML = "<span>" + i + "</span>";
                        td.link = i;
                        if (i == list[0]) {
                            td.classList.add("bluebg");
                            dialog._chosenOpt.add(td);
                        }
                        td.addEventListener(lib.config.touchscreen ? "touchend" : "click", function () {
                            if (_status.dragged) return;
                            if (_status.clicked) return;
                            if (_status.justdragged) return;
                            _status.tempNoButton = true;
                            _status.clicked = true;
                            setTimeout(function () {
                                _status.tempNoButton = false;
                            }, 500);
                            var link = this.link;
                            if (link == "交给其他角色牌") game.uncheck();
                            var current = this.parentNode.querySelector(".bluebg");
                            if (current) {
                                current.classList.remove("bluebg");
                                dialog._chosenOpt.remove(current);
                            }
                            dialog._chosenOpt.add(this);
                            this.classList.add("bluebg");
                            game.check();
                        });
                        table.appendChild(td);
                        dialog.buttons.add(td);
                    }
                    dialog.content.appendChild(table);
                }
                var cards = [];
                for (var name of lib.inpile) {
                    if (get.type(name) != "basic") continue;
                    var card = { name: name, isCard: true };
                    if (event.filterCard(card, player, event)) cards.push(["基本", "", name]);
                    if (name == "sha") {
                        for (var nature of lib.inpile_nature) {
                            card.nature = nature;
                            if (event.filterCard(card, player, event)) cards.push(["基本", "", name, nature]);
                        }
                    }
                }
                dialog.add([cards, "vcard"]);
                return dialog;
            },
            check(button, player) {
                if (typeof button.link == "string") return -1;
                if (_status.event.getParent().type != "phase") return 1;
                return _status.event.player.getUseValue({
                    name: button.link[2],
                    nature: button.link[3],
                });
            },
            select() {
                var opts = _status.event.dialog._chosenOpt;
                return opts && opts.length && opts[0].link == "交给其他角色牌" ? 0 : 1;
            },
            backup(links, player) {
                var isUse = links.length == 1;
                var backup = get.copy(lib.skill["sbrende_" + (isUse ? "use" : "give")]);
                if (isUse) backup.viewAs = { name: links[0][2], nature: links[0][3], isCard: true };
                return backup;
            },
            prompt(links, player) {
                var isUse = links.length == 1;
                return isUse ? "移去2枚“仁望”，视为使用或打出" + (get.translation(links[0][3]) || "") + get.translation(links[0][2]) : "###仁德###出牌阶段每名角色限一次。你可以将任意张牌交给一名其他角色，然后你获得等量“仁望”标记（至多为" + lib.skill.sbrende.maxNum + "）";
            },
        },
        hiddenCard(player, name) {
            return get.type(name) == "basic" && player.countMark("sbrende") > 1 && player.hasSkill("sbrende_used");
        },
        marktext: "仁",
        intro: {
            name: "仁望",
            name2: "仁望",
            content: "mark",
        },
        ai: {
            respondSha: true,
            respondShan: true,
            save: true,
            skillTagFilter(player) {
                return player.countMark("sbrende") > 1 && !player.hasSkill("sbrende_used");
            },
            order(item, player) {
                if (_status.event.type == "phase" && lib.skill.sbzhangwu.ai.result.player(player) > 0) return 9.1;
                return 0.5;
            },
            result: {
                player(player) {
                    if (_status.event.dying) {
                        return get.attitude(player, _status.event.dying);
                    }
                    return _status.event.type == "phase" && player.countMark("sbrende") <= 2 ? 0 : 1;
                },
            },
        },
        subSkill: {
            backup: {},
            used: { charlotte: true },
            given: { onremove: true },
            use: {
                audio: "sbrende",
                filterCard: () => false,
                selectCard: -1,
                popname: true,
                log: false,
                precontent() {
                    player.logSkill("sbrende_use");
                    player.removeMark("sbrende", 2);
                    player.addTempSkill("sbrende_used");
                },
            },
            give: {
                audio: "sbrende",
                enable: "phaseUse",
                filterCard: true,
                selectCard: [1, Infinity],
                position: "he",
                discard: false,
                lose: false,
                delay: false,
                filter(event, player) {
                    if (player.countMark("sbrende") < 2 || player.hasSkill("sbrende_used")) return true;
                    for (var name of lib.inpile) {
                        if (get.type(name) != "basic") continue;
                        var card = { name: name, isCard: true };
                        if (event.filterCard(card, player, event)) return false;
                        if (name == "sha") {
                            for (var nature of lib.inpile_nature) {
                                card.nature = nature;
                                if (event.filterCard(card, player, event)) return false;
                            }
                        }
                    }
                    return true;
                },
                filterTarget(card, player, target) {
                    if (player.getStorage("sbrende_given").includes(target)) return false;
                    return player != target;
                },
                prompt(event) {
                    return "出牌阶段每名角色限一次。你可以将任意张牌交给一名其他角色，然后你获得等量“仁望”标记（至多为" + lib.skill.sbrende.maxNum + "）";
                },
                check(card) {
                    var player = get.owner(card);
                    if (ui.selected.cards.length && ui.selected.cards[0].name == "du") return 0;
                    if (ui.selected.cards.length + player.countMark("sbrende") > lib.skill.sbrende.maxNum) return 0;
                    if (!ui.selected.cards.length && card.name == "du") return 20;
                    if (ui.selected.cards.length >= Math.max(2, player.countCards("he") - player.hp)) return 0;
                    if (player.countCards("he") <= 1) {
                        var players = game.filterPlayer();
                        for (var i = 0; i < players.length; i++) {
                            if (players[i].hasSkill("haoshi") && !players[i].isTurnedOver() && !players[i].hasJudge("lebu") && get.attitude(player, players[i]) >= 3 && get.attitude(players[i], player) >= 3) {
                                return 11 - get.value(card);
                            }
                        }
                        if (player.countCards("he") > player.hp) return 10 - get.value(card);
                        if (player.countCards("he") > 2) return 6 - get.value(card);
                        return -1;
                    }
                    return 18 - (ui.selected.cards.length + player.countMark("sbrende")) - get.value(card);
                },
                content() {
                    player.addTempSkill("sbrende_given", "phaseUseAfter");
                    player.markAuto("sbrende_given", [target]);
                    player.markAuto("sbrende_givenx", [target]);
                    player.give(cards, target);
                    var num = Math.min(lib.skill.sbrende.maxNum - player.countMark("sbrende"), cards.length);
                    if (num > 0) player.addMark("sbrende", num);
                },
                ai: {
                    order(skill, player) {
                        return player.countMark("sbrende") < 4 ? 9.8 : 5.8;
                    },
                    result: {
                        target(player, target) {
                            if (!player.hasFriend() && player.hasSkill("sbzhangwu") && ui.selected.cards.length && get.value(ui.selected.cards[0]) > (lib.skill.sbzhangwu.filterTarget(null, player, target) ? 3 : 5)) return -0.1;
                            if (target.hasSkillTag("nogain")) return 0;
                            if (ui.selected.cards.length && ui.selected.cards[0].name == "du") {
                                if (target.hasSkillTag("nodu")) return 0;
                                return -10;
                            }
                            if (target.hasJudge("lebu")) return 0;
                            var nh = target.countCards("h");
                            return Math.max(1, 5 - nh);
                        },
                    },
                    threaten: 1.1,
                },
            },
            gain: {
                audio: "sbrende",
                trigger: { player: "phaseUseBegin" },
                forced: true,
                locked: false,
                filter(event, player) {
                    return player.countMark("sbrende") < lib.skill.sbrende.maxNum;
                },
                content() {
                    var num = Math.min(lib.skill.sbrende.maxNum - player.countMark("sbrende"), 2);
                    if (num > 0) player.addMark("sbrende", num);
                },
            },
        },
    };

}