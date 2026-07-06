import { lib, game, ui, get, ai, _status } from "../../../noname.js";
const characterSubstitute = {
	//切换皮肤
	old_sb_sp_zhugeliang: [["sb_zhugeliang", ["tempname:sb_zhugeliang"]]],
	oldx_sb_sp_zhugeliang: [["sb_zhugeliang", ["tempname:sb_zhugeliang"]]],
	old_pot_yuji: [["pot_yuji_shadow", ["tempname:pot_yuji_shadow"]]],
	old_mb_caomao: [
		["old_mb_caomao_shadow", ["ext:星之梦/image/character/old_mb_caomao_shadow.jpg", "die:old_mb_caomao"]],
		["mb_caomao_dead", ["die:old_mb_caomao"]],
	],
	old_pot_taishici: [
		["pot_taishici_shadow1", ["die:pot_taishici"]],
		["pot_taishici_shadow2", ["die:pot_taishici"]],
		["pot_taishici_shadow3", ["die:pot_taishici"]],
		["pot_taishici_shadow4", ["die:pot_taishici"]],
	],
	old_pot_weiyan: [
		["pot_weiyan_achieve", ["tempname:pot_weiyan_achieve"]],
		["pot_weiyan_fail", ["tempname:pot_weiyan_fail"]],
	],
	old_mb_cuilingyi: [
		["mb_cuilingyi_guidian1", ["character:mb_cuilingyi", "die:mb_cuilingyi"]],
		["mb_cuilingyi_guidian2", ["die:mb_cuilingyi"]],
		["mb_cuilingyi_guidian3", ["die:mb_cuilingyi"]],
		["mb_cuilingyi_dongjiao1", ["die:mb_cuilingyi"]],
		["mb_cuilingyi_dongjiao2", ["die:mb_cuilingyi"]],
		["mb_cuilingyi_dongjiao3", ["die:mb_cuilingyi"]],
		["mb_cuilingyi_xiuge1", ["die:mb_cuilingyi"]],
		["mb_cuilingyi_xiuge2", ["die:mb_cuilingyi"]],
		["mb_cuilingyi_xiuge3", ["die:mb_cuilingyi"]],
	],
	old_huan_zhugeliang: [["huan_zhugeliang_shadow", ["tempname:huan_zhugeliang_shadow"]]],
	old_huan_caoang: [["huan_caoang_shadow", ["tempname:huan_caoang_shadow"]]],
	old_ol_sb_dongzhuo: [
		["ol_sb_dongzhuo_shadow1", ["tempname:ol_sb_dongzhuo", "die:ol_sb_dongzhuo"]],
		["ol_sb_dongzhuo_shadow2", ["tempname:ol_sb_dongzhuo", "die:ol_sb_dongzhuo"]],
	],
	old_dc_sb_xunyu: [["dc_sb_xunyu_shadow", ["tempname:dc_sb_xunyu_shadow"]]],
	old_dc_sb_luxun: [["dc_sb_luxun_shadow", ["tempname:dc_sb_luxun_shadow"]]],
	old_ol_sb_zhangrang: [["ol_sb_zhangrang_shadow", ["tempname:ol_sb_zhangrang_shadow"]]],
	old_v_zhangxingcai: [["v_zhangxingcai_shadow", ["tempname:v_zhangxingcai_shadow"]]],
};
export default characterSubstitute;
