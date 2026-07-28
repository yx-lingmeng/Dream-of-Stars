import { lib, game, ui, get, ai, _status } from "../../../noname.js";
const dynamicTranslates = {
	//动态翻译
	old_sblongdan(player) {
		if (player.hasSkill("old_sblongdan_mark", null, null, false)) return "蓄力技（1/4）。①你可以消耗1点蓄力值，将【杀】当做【闪】或将【闪】当做【杀】使用或打出，然后摸一张牌。②一名角色的回合结束时，你获得1点蓄力值。";
		return "蓄力技（1/4）。①你可以消耗1点蓄力值，将【杀】当做【闪】或将【闪】当做【杀】使用或打出，然后若你以此法使用牌，你摸一张牌。②一名角色的回合结束时，你获得1点蓄力值。";
	},
	old_sbwansha(player) {
		const storage = player.storage.old_sbwansha;
		var str = "①你的回合内，不处于濒死状态的其他角色不能使用【桃】。②一名角色进入濒死状态时，你可以观看其手牌并选择其";
		str += storage ? "区域内" : "中";
		str += "零至";
		str += storage ? "三" : "两";
		str += "张牌（其他角色不可见），然后其选择一项：1.你将这些牌分配给任意名不为其的角色；2.其弃置除这些牌以外的牌。";
		return str;
	},
	old_sbweimu(player) {
		const storage = player.storage.old_sbweimu;
		var str = "锁定技。";
		str += storage ? "①" : "";
		str += "当你成为黑色锦囊牌的目标时，取消之。";
		if (storage) {
			str += "②每轮开始时，若你上一轮成为其他角色使用牌的目标的次数不大于2，你从弃牌堆中随机获得一张黑色锦囊牌或防具牌。";
		}
		return str;
	},
	old_dcsbshimou(player) {
		let str1 = `阳：手牌数全场最低的角色`,
			str2 = `阴：手牌数全场最高的角色`;
		if (!player.storage.old_dcsbshimou) str1 = `<span class=thundertext>${str1}</span>`;
		else str2 = `<span class=thundertext>${str2}</span>`;
		return `转换技，游戏开始可自选阴阳状态，出牌阶段限一次，你可令一名{${str1}；${str2}}将手牌调整至体力上限（至多摸五张）并视为使用一张仅指定单目标的普通锦囊牌（此牌牌名与目标由你指定）。若以此法摸牌，此牌可额外增加一个目标；若以此法弃牌，此牌额外结算一次。`;
	},
	old_dcsbjunmou(player) {
		const bool = player.storage.old_dcsbjunmou;
		let yang = "此牌视为无次数限制的火【杀】",
			yin = "重铸此牌并横置一名角色";
		if (bool) {
			yin = `<span class="bluetext">${yin}</span>`;
		} else {
			yang = `<span class="firetext">${yang}</span>`;
		}
		const start = `转换技。①游戏开始时，你可以转换此技能状态；②一张牌结算结束后，若此牌的目标包括你，你可以摸一张牌并选择一张手牌，`,
			end = "。";
		return `${start}阳：${yang}；阴：${yin}${end}`;
	},
	old_mbweizhuang(player, skill) {
		if (!player) {
			return lib.translate[`${skill}_info`];
		}
		if (get.nameList(player).includes("old_mb_cuilingyi")) {
			const skin = player.skin[player.name2 === "old_mb_cuilingyi" ? "name2" : "name"],
				index = lib.characterSubstitute["old_mb_cuilingyi"].map(i => i[0]).indexOf(skin);
			if (index >= 0) {
				const trueSkill = `${skill}_${skin.slice(13, -1)}x`;
				return get.skillInfoTranslation(trueSkill, player, false);
			}
		}
		return "这衣服，岂是你配穿的？";
	},
};
export default dynamicTranslates;
