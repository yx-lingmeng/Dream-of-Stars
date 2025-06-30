import { lib, game, ui, get, ai, _status } from '../../../noname.js'
export let config = {
	// supCharacter_head:{
	// 	name:"禁用头像",
	// 	intro:"将充当头像的武将禁用",
	// 	init:true
	// },//:{前面填武将包英文名
	fgx0: {
		name: "<font size='4'>---------实用功能---------</font>",
		clear: true,
	},
	cancelwindow: {
		//搬运自群英会
		name: "取消弹窗警告",
		intro: "开启此项后取消弹窗警告（自欺欺人），推荐用于忽略报错勉强能玩的场景等，重启游戏后生效。",
		init: true,
	},
	guanfangshili: {
		name: "仅保留官方势力",
		init: true,
		intro: "开启后，游戏的势力只保留：魏、蜀、吴、群、晋，其他势力的角色在游戏开始时重新选择以上势力进行游戏。",
	},
	shenjiangshili: {
		name: "神将与魔将选势力",
		init: true,
		intro: "开启后，神将与魔将能够在斗地主，对决以及单挑模式选择势力。",
	},
	ewhh: {
		name: "<span style='text-decoration: underline;'>点击获得一个额外的回合</span>",
		clear: true,
		onclick: function () {
			game.me.insertPhase();
		},
	},
	zdyjdrcq: {
		//搬运自搬运自用
		name: "自动一键导入重启",
		intro: '开启后每次重启自动执行一键导入重启功能：只需将一至多个解压好的扩展文件夹（注意检查文件夹名和内部文件结构是否正确）放入<br><span style="color:#0086FF">游戏目录</span>/extension/<br>内，重启后即可自动完成扩展导入。',
		init: true,
	},
	yjdrcqgn: {
		name: "<span style='text-decoration: underline;'>一键导入重启功能</span>",
		clear: true,
		onclick: function () {
			game.yjdrcqgn(true);
		},
	},
	fgx1: {
		name: "<font size='4'>---------美化相关---------</font>",
		clear: true,
	},
	// zhuanhuanji: {
	// 	name: "转换技修正",
	// 	init: true,
	// 	intro: "开启后，将修正转换技的阴阳描述。",
	// },
	tphaseTip: {
		//修改自联机修改与手杀ui
		name: "阶段提示",
		init: true,
		intro: "开启后，显示阶段提示图片,客机无素材时不建议使用。",
	},
	tphaseTipStyle: {
		name: "阶段提示样式",
		init: "1",
		intro: "切换阶段提示样式，可根据个人喜好切换",
		item: {
			1: "手杀阶段提示",
			2: "十周年阶段提示",
		},
	},
	shoushalog: {
		//搬运自手杀ui
		init: true,
		intro: "开启后，屏幕中间出现手杀样式的出牌记录栏",
		name: "手杀出牌记录栏",
		onclick: function () {
			if (lib.config.extension_星之梦_shoushalog == false) {
				game.saveConfig("extension_星之梦_shoushalog", true);
				game.saveConfig("show_log", "center");
				game.saveConfig("clear_log", true);
			} else {
				game.saveConfig("extension_星之梦_shoushalog", false);
				game.saveConfig("show_log", "off");
			}
			game.reload();
		},
	},
	pause: {
		//搬运自武将美化
		name: "历史记录栏美化",
		init: true,
		intro: "注意：将“设置-显示-标记身份操作”设置为【菜单】<br>补充：将“设置-显示-暂停时显示弃牌堆”开启，可以显示弃牌堆",
	},
	pausescrollsize: {
		name: "历史记录栏|滚轮横向调整",
		clear: true,
		onclick: function () {
			// 抄自<特效测试>和本体代码
			if (this.pausescroll_size == undefined) {
				var dv = document.createElement("div");
				dv.style.whiteSpace = "nowrap";
				dv.style.width = "calc(100% - 10px)";

				var jianwu = document.createElement("button");
				jianwu.style.width = "50px";
				jianwu.textContent = "-5%";

				var jianyi = document.createElement("button");
				jianyi.style.width = "50px";
				jianyi.textContent = "-1%";

				function getConfig(ext, id, def) {
					var str = ["extension", ext, id].join("_");
					var val = lib.config[str];
					return typeof val !== "undefined" || val ? val : def;
				}
				var text = document.createElement("div");
				text.style.width = "60px";
				text.textContent = getConfig("星之梦", "pausescrollsize", 22).toFixed(1) + "%";

				var jiayi = document.createElement("button");
				jiayi.style.width = "50px";
				jiayi.textContent = "+1%";

				var jiawu = document.createElement("button");
				jiawu.style.width = "50px";
				jiawu.textContent = "+5%";

				dv.appendChild(jianwu);
				dv.appendChild(jianyi);
				dv.appendChild(text);
				dv.appendChild(jiayi);
				dv.appendChild(jiawu);

				var div = ui.create.div();
				//div.link_XX = true;
				div.appendChild(dv);

				function changeValue(val = 0) {
					val = getConfig("星之梦", "pausescrollsize", 22) + val;
					text.textContent = val.toFixed(1) + "%";
					game.saveConfig("extension_星之梦_pausescrollsize", val);
					game.saveConfig("pausescrollsize", val);
					let element = document.querySelector(".pausedbg>.scrollbar");
					if (element) element.style.right = val.toFixed(1) + "%";
				}
				jianwu.onclick = () => changeValue(-5);
				jianyi.onclick = () => changeValue(-1);
				jiayi.onclick = () => changeValue(1);
				jiawu.onclick = () => changeValue(5);
				this.parentNode.insertBefore(div, this.nextSibling);
				this.pausescroll_size = div;
			} else {
				this.parentNode.removeChild(this.pausescroll_size);
				delete this.pausescroll_size;
			}
		},
	},
	fgx2: {
		name: "<font size='4'>---------联机修改---------</font>",
		clear: true,
	},
	lianji: {
		name: "联机功能",
		init: true,
		intro: "包括单人开房，连续交互等。",
	},
	emotionsize: {
		name: "聊天图片尺寸",
		intro: "设置聊天图片尺寸。",
		init: "100",
		item: {
			50: "50*50",
			60: "60*60",
			70: "70*70",
			80: "80*80",
			90: "90*90",
			100: "100*100",
			110: "110*110",
			120: "120*120",
			130: "130*130",
			140: "140*140",
			150: "150*150",
		},
	},
	// addquickVoice: {
	// 	//搬运自联机修改
	// 	name: "添加快捷短语",
	// 	onclick() {
	// 		if (ui.addquickVoice) return;
	// 		const menu = ui.create.div(".quickVoiceDiv", ui.window);
	// 		ui.addquickVoice = menu;
	// 		const addList = ui.create.div(".addList", menu);
	// 		const ul = document.createElement("ul");
	// 		addList.appendChild(ul);
	// 		lib.quickVoice.forEach(i => {
	// 			const li = document.createElement("li");
	// 			li.innerHTML = i;
	// 			ul.appendChild(li);
	// 			li.addEventListener("click", function () {
	// 				if (this === addList.lastLi) return;
	// 				addList.lastLi.classList.remove("active");
	// 				this.classList.add("active");
	// 				addList.lastLi = this;
	// 			});
	// 		});
	// 		addList.lastLi = ul.firstElementChild;
	// 		addList.lastLi.classList.add("active");
	// 		const buttons = [
	// 			[
	// 				"点击添加",
	// 				() => {
	// 					const _li = document.createElement("li");
	// 					ul.appendChild(_li);
	// 					_li.contentEditable = true;
	// 					_li.focus();
	// 					_li.onblur = function () {
	// 						lib.config.NewQuickVoice.push(this.innerHTML);
	// 						game.saveConfig("NewQuickVoice", lib.config.NewQuickVoice);
	// 						_li.contentEditable = false;
	// 					};
	// 				},
	// 			],
	// 			[
	// 				"播放",
	// 				function () {
	// 					game.me.say(addList.lastLi.innerHTML);
	// 				},
	// 			],
	// 			[
	// 				"删除",
	// 				function () {
	// 					lib.config.NewQuickVoice.remove(addList.lastLi.innerHTML);
	// 					addList.lastLi.remove();
	// 					game.saveConfig("NewQuickVoice", lib.config.NewQuickVoice);
	// 					addList.lastLi = ul.firstElementChild;
	// 					addList.lastLi.classList.add("active");
	// 				},
	// 			],
	// 			[
	// 				"关闭",
	// 				() => {
	// 					ui.addquickVoice.remove();
	// 					delete ui.addquickVoice;
	// 				},
	// 			],
	// 		];
	// 		buttons.forEach((b, i) => {
	// 			const button = document.createElement("button");
	// 			button.innerHTML = b[0];
	// 			button.classList.add("addQuickVoice", "index" + i);
	// 			button.style.right = i * 100 + "px";
	// 			button.addEventListener("click", b[1]);
	// 			addList.appendChild(button);
	// 		});
	// 	},
	// 	init: false,
	// 	clear: true,
	// },
	fgx3: {//搬运自活动武将
		name: "<font size='4'>---------游戏播报---------</font>",
		clear: true,
	},
	HDdamageAudio: {
		name: "失去上限音效",
		intro: "打开此选项后，失去体力上限会播放特定音效（实时生效）",
		init: true,
	},
	HDfightAudio: {
		name: "各项游戏播报",
		intro: "游戏播报包括以下内容（实时生效）" + "<br><li>游戏开始播报" + "<br><li>癫狂屠戮，万军取首播报" + "<br><li>击杀角色，回复体力播报",
		init: "off",
		item: {
			off: "关闭",
			default: "手杀",
			ol: "OL",
			decade: "十周年",
		},
	},
	HDkillAudio: {
		name: "手杀击杀播报选择",
		intro: "使用手杀游戏播报时，选择新旧版本",
		init: "default",
		item: {
			default: "旧版",
			new: "新版",
		},
	},
	HDskillAnimateAudio: {
		name: "skillAnimation技能音效",
		intro: "打开此选项后，含skillAnimation标签的技能发动时将会播放对应的音效",
		init: false,
	},

	fgx4: {
		name: "<font size='4'>---------自用修改---------</font>",
		clear: true,
	},
	scsEnhance: {
		name: "增强【十常侍】",
		init: true,
		intro: "开启后，将十常侍增强为最强版本。",
	},
	zxEnhance: {
		name: "增强【郑玄】",
		init: true,
		intro: "开启后，将斗地主郑玄数值调整为与其他模式相同。",
	},
	tmEnhance: {
		name: "增强【天命】",
		init: false,
		intro: "开启后，将【天命】增强为欢乐杀【天命】，以此加强主公。",
	},
	vtbEnhance: {
		name: "增强虚拟偶像",
		init: false,
		intro: "开启后，将增强小闪与小乐。",
	},
	// AIHD:{//搬运AI互动与说话
	// 	name:"AI互动",
	// 	intro:"开启此项，AI(包含玩家)一定概率将于特定时机进行发言、互动。(有可能会卡死不推荐打开)",
	// 	init:"0",
	// 	item: {
	// 		"0": "关闭",
	// 		"1": "普通模式",
	// 		//"2": "增强模式",
	// 	},
	// },
};