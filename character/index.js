import { lib, game, ui, get, ai, _status } from '../../../noname.js'
import { characterData } from './characterData.js'
import { characterIntro } from './characterIntro.js'
import { characterReplace } from './characterReplace.js'
import { characterSort } from './characterSort.js'
import { characterSubstitute } from './characterSubstitute.js'
import { characterTitle } from './characterTitle.js'
import { perfectPair } from './perfectPair.js'
import { translate } from './translate.js'
let lmCharacter = {
    name: 'mode_extension_星之梦',
    connect: true,
    character: { ...characterData },//武将信息
    characterIntro: { ...characterIntro },//武将简介
    characterReplace: { ...characterReplace },//武将切换
    characterSort: { ...characterSort },//武将分类
    characterTitle: { ...characterTitle },//武将称号
    characterSubstitute: { ...characterSubstitute },//转换技切换皮肤
    perfectPair: { ...perfectPair },//珠联璧合
    translate: translate,//翻译信息
};
if (lib.device || lib.node) {
    if (!_status.postReconnect.LM) _status.postReconnect.LM = [function (list, info) {
        for (let i in list) {
            lib.character[i] = list[i];
        };
        for (let i in info) if (!lib.translate[i]) lib.translate[i] = info[i];
    }, {}, {}]
    for (let name in characterData) {
        //添加原画
        characterData[name][4].push("ext:星之梦/image/character/" + name + ".jpg");
        //添加阵亡语音
        characterData[name][4].push('die:ext:星之梦/image/audio/' + name + '.mp3');
    };
};
export const character = lmCharacter;