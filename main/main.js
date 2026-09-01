import { lib, game, ui, get, ai, _status } from "noname";
import { character } from "../character/index.js";
import { skill } from "../character/skill.js";
// import { card } from "../card/card.js"
import { basic } from "./basic.js";
export let extensionDefaultPackage = async function () {
	return {
		character: await basic.resolve(character),
		skill: await basic.resolve(skill),
		// card: await basic.resolve(card)
		intro: (function () {
			var log = ["最低适配：v1.11.3", "自用扩展，主要用于保留在正式服削弱前的牢武将，外加一些功能和美化。", "本扩展武将除涉及本扩展装备外（如神武）的武将基本支持单向联机，即客机没有装本扩展也可使用。", "水平有限，如关不掉武将包可以尝试关闭武将包里的小包或者单个武将。"];
			return "<p style='color: rgb(210, 210,000); font - size: 12px; line - height: 14px; text - shadow: 0 0 2px black; '>" + log.join("<br>•") + "</p>";
		})(),
	};
};
