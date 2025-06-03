import { lib, game, ui, get, ai, _status } from '../../../noname.js'
export async function content(config, pack) {
	//联机不执行
	if (lib.rank) {
		//设置评级
		var rank = {
			rarity: {
				//传说
				legend: [
				],
				//史诗
				epic: [
				],
				//稀有
				rare: [
				],
				//普通
				common: [
				],
				//平凡
				junk: [
				],
			},
			//出场率
			s: [
			],
			ap: [
			],
			a: [
			],
			am: [
			],
			bp: [
			],
			b: [
			],
			bm: [
			],
			c: [
			],
			d: [
			],
		};
		//总置
		var addRank = function (rank) {
			if (!lib.rank) return;
			for (var i in rank) {
				if (i == 'rarity') continue;
				lib.rank[i].addArray(rank[i]);
			}
			if (rank.rarity && lib.rank.rarity) {
				for (var i in rank.rarity) {
					if (!lib.rank.rarity[i]) lib.rank.rarity[i] = [];
					lib.rank.rarity[i].addArray(rank.rarity[i]);
				}
			}
		};
		addRank(rank);
	}
	// 自动一键导入重启
	if (config.zdyjdrcq) {
		game.yjdrcqgn(true);
	}
	// 扩展导入完成后，再次重启时，检测扩展文件夹名是否正确，新增为防出现bug请修正的提示
	for (var i in lib.extensionPack) {
		if (!lib.config.extensions.includes(i)) {
			alert("检测到扩展文件夹名不正确！\r将会引起很多跟路径相关的bug，而且这样导入的扩展无法在游戏内删除。\n\r为防出现bug，请依照如下路径修正扩展文件夹名:\n游戏目录/extension/" + i);
		}
	}
	if (lib.config.extensions && game.getFileList && game.readFile && game.writeFile) { //添加交互素材
		game.getFileList('extension/星之梦/copy/throw_emotion/', (folders, files) => {
			game.getFileList('image/emotion/throw_emotion/', (targetFolders, targetFiles) => {
				for (let img of files) {
					if (targetFiles.includes(img)) continue;
					game.readFile(
						'extension/星之梦/copy/throw_emotion/' + img,
						(data) => {
							game.writeFile(data, 'image/emotion/throw_emotion/', img, () => { });
						},
						(err) => {
							alert('复制『星之梦』交互素材时出现问题：\n' + err);
						}
					);
				}
			});
		});
		game.getFileList('extension/星之梦/copy/effect/', (folders, files) => {
			game.getFileList('audio/effect/', (targetFolders, targetFiles) => {
				for (let audio of files) {
					if (targetFiles.includes(audio)) continue;
					game.readFile(
						'extension/星之梦/copy/effect/' + audio,
						(data) => {
							game.writeFile(data, 'audio/effect/', audio, () => { });
						},
						(err) => {
							alert('复制『星之梦』交互素材时出现问题：\n' + err);
						}
					);
				}
			});
		});
	}
};