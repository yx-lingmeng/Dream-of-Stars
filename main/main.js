import { lib, game, ui, get, ai, _status } from '../../../noname.js'
import { character } from '../character/index.js'
import { skill } from '../character/skill.js'
// import { card } from '../card/card.js'
import { basic } from './basic.js'
export let extensionDefaultPackage = async function () {
    return {
        character: await basic.resolve(character),
        skill: await basic.resolve(skill),
        // card: await basic.resolve(card)
        intro: (function () {
            var log = ["最低适配：v1.10.17.2",
                "本扩展武将除神武外均客机没有装也能用；武将包关不掉可以关小包"
            ];
            return '<p style="color:rgb(210,210,000); font-size:12px; line-height:14px; text-shadow: 0 0 2px black;">' + log.join("<br>•") + "</p>";
        })(),
    };
}