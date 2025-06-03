import { lib, game, ui, get, ai, _status } from '../../../noname.js'
let lmCharacter = {//切换皮肤
    old_sb_sp_zhugeliang: [["sb_zhugeliang", []]],
    oldx_sb_sp_zhugeliang: [["sb_zhugeliang", []]],
    old_huan_zhugeliang: [["huan_zhugeliang_shadow", []]],
    old_huan_caoang: [["huan_caoang_shadow", []]],
    old_ol_sb_dongzhuo: [
        ["ol_sb_dongzhuo_shadow1", ["tempname:ol_sb_dongzhuo", "die:ol_sb_dongzhuo"]],
        ["ol_sb_dongzhuo_shadow2", ["tempname:ol_sb_dongzhuo", "die:ol_sb_dongzhuo"]],
    ],
    old_pot_taishici: [
        ["pot_taishici_shadow1", ["die:pot_taishici"]],
        ["pot_taishici_shadow2", ["die:pot_taishici"]],
        ["pot_taishici_shadow3", ["die:pot_taishici"]],
        ["pot_taishici_shadow4", ["die:pot_taishici"]],
    ],
    old_pot_yuji: [["pot_yuji_shadow", []]],
    old_dc_sb_xunyu: [["dc_sb_xunyu_shadow", []]],
};
export const characterSubstitute = lmCharacter;