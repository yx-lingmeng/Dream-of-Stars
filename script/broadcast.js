"use strict";
window.lm_import(function (lib, game, ui, get, ai, _status) {
	lib.skill._OpenTheGame = {
		charlotte: true,
		ruleSkill: true,
		forceDie: true,
		trigger: { global: "gameDrawAfter" },
		filter: function (event, player) {
			game.TrueHasExtension =
				game.TrueHasExtension ||
				function (ext) {
					return lib.config.extensions && lib.config.extensions.includes(ext);
				};
			game.HasExtension =
				game.HasExtension ||
				function (ext) {
					return game.TrueHasExtension(ext) && lib.config["extension_" + ext + "_enable"];
				};
			const config = lib.config.extension_星之梦_HDfightAudio;
			return config && config !== "off";
		},
		direct: true,
		firstDo: true,
		priority: Infinity,
		content: function () {
			player.$fullscreenpop("游戏开始", "fire");
			game.broadcastAll(function (config) {
				if (lib.config.background_audio) game.playAudio("..", "extension", "星之梦/audio/effect", "bilibili_OpenTheGame" + (config === "default" ? "" : "_" + config));
			}, lib.config.extension_星之梦_HDfightAudio);
		},
	};
	lib.skill._bilibili_miaoshou = {
		charlotte: true,
		ruleSkill: true,
		trigger: { global: "xmiaoshou" },
		filter: function (event, player) {
			const config = lib.config.extension_星之梦_HDfightAudio;
			return config && config !== "off" && event.player == player;
		},
		direct: true,
		firstDo: true,
		forceDie: true,
		content: function () {
			const config = lib.config.extension_星之梦_HDfightAudio;
			trigger.player.$fullscreenpop({ default: "妙手回春", decade: "青囊济世", ol: "悬壶济世" }[config], "water");
			game.broadcastAll(function (config) {
				if (lib.config.background_audio) game.playAudio("..", "extension", "星之梦/audio/effect", "bilibili_miaoshou" + (config === "default" ? "" : "_" + config));
			}, config);
		},
	};
	lib.skill._bilibili_yishu = {
		charlotte: true,
		ruleSkill: true,
		trigger: { global: "xyishu" },
		filter: function (event, player) {
			const config = lib.config.extension_星之梦_HDfightAudio;
			return config && config !== "off" && event.player == player;
		},
		direct: true,
		firstDo: true,
		forceDie: true,
		content: function () {
			const config = lib.config.extension_星之梦_HDfightAudio;
			trigger.player.$fullscreenpop({ default: "医术高超", decade: "神医妙手", ol: "杏林春满" }[config], "water");
			game.broadcastAll(function (config) {
				if (lib.config.background_audio) game.playAudio("..", "extension", "星之梦/audio/effect", "bilibili_yishu" + (config === "default" ? "" : "_" + config));
			}, config);
		},
	};
	lib.skill._recovertrigger = {
		charlotte: true,
		ruleSkill: true,
		trigger: {
			player: "phaseEnd",
			global: "recoverEnd",
		},
		filter: function (event, player) {
			if (event.name === "phase") return player.storage.jstxyishugaochao;
			if (_status.currentPhase === player) return true;
			return event.player != event.source && event.source == player;
		},
		direct: true,
		firstDo: true,
		forceDie: true,
		content: function () {
			if (trigger.name === "phase") delete player.storage.jstxyishugaochao;
			else if (_status.currentPhase !== player) _status.event.trigger("xmiaoshou");
			else {
				if (player.storage.jstxyishugaochao == undefined) player.storage.jstxyishugaochao = trigger.num;
				else player.storage.jstxyishugaochao += trigger.num;
				if (player.storage.jstxyishugaochao >= 3) {
					player.storage.jstxyishugaochao -= 3;
					_status.event.trigger("xyishu");
				}
			}
		},
	};
	lib.skill._jishaAudio = {
		charlotte: true,
		ruleSkill: true,
		trigger: { global: "dieBegin" },
		filter: function (event, player) {
			const config = lib.config.extension_星之梦_HDfightAudio;
			return config && config !== "off" && event.source == player && event.player != player;
		},
		direct: true,
		firstDo: true,
		content: function () {
			"step 0";
			if (!player.storage.bilibili_kill) player.storage.bilibili_kill = 0;
			player.storage.bilibili_kill++;
			("step 1");
			let config = lib.config.extension_星之梦_HDfightAudio;
			config = config === "default" ? lib.config.extension_星之梦_HDkillAudio : config;
			let list;
			switch (config) {
				case "new":
					list = ["一破·卧龙出山", "双连·一战成名", "三连·举世皆惊", "四连·天下无敌", "五连·诛天灭地", "六连·诛天灭地", "七连·诛天灭地"];
					break;
				case "decade":
					list = ["首破<br>一骑当先", "连破<br>世无双", "三破<br>冠三军", "四破<br>震诸侯", "五破<br>天下无敌", "六破<br>统九州乾坤", "七破<br>千古第一人"];
					break;
				case "ol":
					list = ["一破·龙战于野", "二连<br>飞龙在天", "三连<br>亢龙有悔", "四连<br>天下无敌", "五连<br>威震天下", "六连<br>天崩地裂", "七连<br>毁天灭地"];
					break;
				default:
					list = ["一血·卧龙出山", "双杀·一战成名", "三杀·举世皆惊", "四杀·天下无敌", "五杀·诛天灭地", "六杀·癫狂杀戮", "无双·万军取首"];
					break;
			}
			var num = Math.min(7, player.storage.bilibili_kill);
			player.$fullscreenpop(list[num - 1], ["water", "wood", "thunder", "fire"][Math.min(3, num - 1)]);
			game.broadcastAll(
				function (num, config) {
					if (lib.config.background_audio) {
						game.playAudio("..", "extension", "星之梦/audio/effect", "bilibili_jisha" + num + (config === "default" ? "" : "_" + config));
					}
				},
				num,
				config
			);
		},
	};
	lib.skill._bilibili_HighDamageAudio = {
		charlotte: true,
		ruleSkill: true,
		trigger: { source: "damageBegin4" },
		filter: function (event, player) {
			const config = lib.config.extension_星之梦_HDfightAudio;
			return ["decade", "default"].includes(config) && event.player != player && event.num >= 3;
		},
		direct: true,
		lastDo: true,
		priority: -Infinity,
		content: function () {
			const config = lib.config.extension_星之梦_HDfightAudio === "decade";
			if (trigger.num == 3) {
				player.$fullscreenpop(config ? "万夫莫敌" : "癫狂屠戮", "fire");
				game.broadcastAll(function (config) {
					if (lib.config.background_audio) game.playAudio("..", "extension", "星之梦/audio/effect", "bilibili_diankuang" + (config ? "_decade" : ""));
				}, config);
			} else {
				player.$fullscreenpop(config ? "神威震乾坤" : "无双<br>万军取首", "fire");
				game.broadcastAll(function (config) {
					if (lib.config.background_audio) game.playAudio("..", "extension", "星之梦/audio/effect", "bilibili_wanjun" + (config ? "_decade" : ""));
				}, config);
			}
		},
	};
	//skillAnimation技能配音播放
	var originTrySkillAnimate = lib.element.player.trySkillAnimate;
	lib.element.player.trySkillAnimate = function (name, popname, checkShow) {
		if (!game.online && lib.config.skill_animation_type != "off" && lib.skill[name] && lib.skill[name].skillAnimation && lib.config.extension_星之梦_HDskillAnimateAudio) {
			game.broadcastAll(function (name) {
				if (ui.backgroundMusic) ui.backgroundMusic.pause();
				game.playAudio("..", "extension", "星之梦/audio/effect", "spell_" + (lib.skill[name].juexingji ? "wake" : "limit"));
			}, name);
			setTimeout(function () {
				if (ui.backgroundMusic) ui.backgroundMusic.play();
			}, 4000);
		}
		originTrySkillAnimate.apply(this, arguments);
	};
});
