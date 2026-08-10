import { lib, game, ui, get, ai, _status } from "noname";
import { character } from "../character/index.js";
import { skill } from "../character/skill.js";
import {} from "../js/pause.js";
import {} from "../js/connect.js";
import {} from "../js/broadcast.js";
import {} from "../js/private.js";
export async function precontent(config, pack) {
	{
		//本体版本检测
		let noname = lib.version.split(".").slice(2),
			min = [0],
			len = Math.min(noname.length, min.length),
			status = false;
		if (lib.version.slice(0, 5) === "1.11.")
			for (let i = 0; i < len; i++) {
				if (Number(noname[i]) < min[i]) {
					status = "您的无名杀版本太低";
					break;
				}
			}
		else status = "检测到游戏版本号与本扩展支持版本号不同";
		if (typeof status === "string") {
			alert(status + "，为避免版本不兼容产生不必要的问题，已为您关闭《星之梦》，稍后重启游戏");
			game.saveExtensionConfig("星之梦", "enable", false);
			game.reload();
		}
	}
	if (lib.config && lib.config[`extension_凌梦自用_enable`]) {
		alert("Tip:建议删除旧扩展凌梦自用");
	}

	//屏蔽弹窗
	if (lib.config.extension_星之梦_cancelwindow) {
		window.onerror = function (msg, src, line, column, err) {};
	}
	if (lib.config.extension_星之梦_randomexpand) {
		setTimeout(function () {
			var characterRandomGets = Object.keys(lib.character).randomGets(parseInt(lib.config.recent_character_number));
			lib.characterDialogGroup["随机"] = function (name, capt) {
				return characterRandomGets.includes(name) ? capt : null;
			};
			var createDialog = {
				characterDialog() {
					var filter, str, noclick, thisiscard, seperate, expandall, onlypack, heightset, characterx;
					for (var i = 0; i < arguments.length; i++) {
						if (arguments[i] === "thisiscard") {
							thisiscard = true;
						} else if (arguments[i] === "expandall") {
							expandall = true;
						} else if (arguments[i] === "heightset") {
							heightset = true;
						} else if (arguments[i] == "characterx") {
							characterx = true;
						} else if (typeof arguments[i] == "string" && arguments[i].startsWith("onlypack:")) {
							onlypack = arguments[i].slice(9);
						} else if (typeof arguments[i] == "object" && typeof arguments[i].seperate == "function") {
							seperate = arguments[i].seperate;
						} else if (typeof arguments[i] === "string") {
							str = arguments[i];
						} else if (typeof arguments[i] === "function") {
							filter = arguments[i];
						} else if (typeof arguments[i] == "boolean") {
							noclick = arguments[i];
						}
					}
					var list = [];
					const groups = [];
					var dialog;
					var node = ui.create.div(".caption.pointerspan");
					if (get.is.phoneLayout()) {
						node.style.fontSize = "30px";
					}
					var namecapt = [];
					var getCapt = function (str2) {
						var capt;
						if (str2.indexOf("_") == -1) {
							capt = str2[0];
						} else {
							capt = str2[str2.lastIndexOf("_") + 1];
						}
						capt = capt.toLowerCase();
						if (!/[a-z]/i.test(capt)) {
							capt = "自定义";
						}
						return capt;
					};
					if (thisiscard) {
						for (var i in lib.card) {
							if (!lib.translate[i + "_info"]) {
								continue;
							}
							if (filter && filter(i)) {
								continue;
							}
							list.push(["", get.translation(lib.card[i].type), i]);
							if (namecapt.indexOf(getCapt(i)) == -1) {
								namecapt.push(getCapt(i));
							}
						}
					} else {
						for (var i in lib.character) {
							if (lib.character[i][4]) {
								if (lib.character[i].isMinskin) {
									continue;
								}
								if (lib.character[i].isBoss || lib.character[i].isHiddenBoss) {
									if (lib.config.mode == "boss") {
										continue;
									}
									if (!lib.character[i].isBossAllowed) {
										continue;
									}
								}
								if (lib.character[i].isHiddenInStoneMode) {
									continue;
								}
								if (lib.character[i].isUnseen) {
									continue;
								}
							}
							if (lib.config.banned.includes(i)) {
								continue;
							}
							if (lib.characterFilter[i] && !lib.characterFilter[i](get.mode())) {
								continue;
							}
							if (filter && filter(i)) {
								continue;
							}
							list.push(i);
							if (get.is.double(i)) {
								groups.add("double");
							} else {
								groups.add(lib.character[i][1]);
							}
							if (namecapt.indexOf(getCapt(i)) == -1) {
								namecapt.push(getCapt(i));
							}
						}
					}
					namecapt.sort(function (a, b) {
						return a > b ? 1 : -1;
					});
					groups.sort(lib.sort.group);
					if (!thisiscard) {
						namecapt.remove("自定义");
						namecapt.push("newline");
						for (var i in lib.characterDialogGroup) {
							namecapt.push(i);
						}
					}
					var newlined = false;
					var newlined2;
					var packsource;
					var clickCapt = function (e) {
						if (_status.dragged) {
							return;
						}
						if (dialog.currentcapt2 == "最近" && dialog.currentcaptnode2 != this && !dialog.currentcaptnode2.inited) {
							dialog.currentcapt2 = null;
							dialog.currentcaptnode2.classList.remove("thundertext");
							dialog.currentcaptnode2.inited = true;
							dialog.currentcaptnode2 = null;
						}
						if (this.alphabet) {
							if (this.classList.contains("thundertext")) {
								dialog.currentcapt = null;
								dialog.currentcaptnode = null;
								this.classList.remove("thundertext");
								if (this.touchlink) {
									this.touchlink.classList.remove("active");
								}
								for (var i2 = 0; i2 < dialog.buttons.length; i2++) {
									restoreState(dialog.buttons[i2]);
									if (dialog.currentgroup && dialog.buttons[i2].group != dialog.currentgroup) {
										dialog.buttons[i2].classList.add("nodisplay");
									} else if (dialog.currentcapt2 && dialog.buttons[i2].capt != dialog.getCurrentCapt(dialog.buttons[i2].link, dialog.buttons[i2].capt, true)) {
										dialog.buttons[i2].classList.add("nodisplay");
									} else {
										dialog.buttons[i2].classList.remove("nodisplay");
									}
								}
							} else {
								if (dialog.currentcaptnode) {
									dialog.currentcaptnode.classList.remove("thundertext");
									if (dialog.currentcaptnode.touchlink) {
										dialog.currentcaptnode.touchlink.classList.remove("active");
									}
								}
								dialog.currentcapt = this.link;
								dialog.currentcaptnode = this;
								this.classList.add("thundertext");
								if (this.touchlink) {
									this.touchlink.classList.add("active");
								}
								for (var i2 = 0; i2 < dialog.buttons.length; i2++) {
									restoreState(dialog.buttons[i2]);
									if (dialog.buttons[i2].capt != dialog.getCurrentCapt(dialog.buttons[i2].link, dialog.buttons[i2].capt)) {
										dialog.buttons[i2].classList.add("nodisplay");
									} else if (dialog.currentcapt2 && dialog.buttons[i2].capt != dialog.getCurrentCapt(dialog.buttons[i2].link, dialog.buttons[i2].capt, true)) {
										dialog.buttons[i2].classList.add("nodisplay");
									} else if (dialog.currentgroup && dialog.buttons[i2].group != dialog.currentgroup) {
										dialog.buttons[i2].classList.add("nodisplay");
									} else {
										dialog.buttons[i2].classList.remove("nodisplay");
									}
								}
							}
						} else {
							if (newlined2) {
								newlined2.style.display = "none";
								if (!packsource.onlypack) {
									packsource.classList.remove("thundertext");
									if (!get.is.phoneLayout() || !lib.config.filternode_button) {
										packsource.innerHTML = "武将包";
									}
								}
							}
							if (this.classList.contains("thundertext")) {
								dialog.currentcapt2 = null;
								dialog.currentcaptnode2 = null;
								this.classList.remove("thundertext");
								if (this.touchlink) {
									this.touchlink.classList.remove("active");
								}
								for (var i2 = 0; i2 < dialog.buttons.length; i2++) {
									restoreState(dialog.buttons[i2]);
									if (dialog.currentgroup && dialog.buttons[i2].group != dialog.currentgroup) {
										dialog.buttons[i2].classList.add("nodisplay");
									} else if (dialog.currentcapt && dialog.buttons[i2].capt != dialog.getCurrentCapt(dialog.buttons[i2].link, dialog.buttons[i2].capt)) {
										dialog.buttons[i2].classList.add("nodisplay");
									} else {
										dialog.buttons[i2].classList.remove("nodisplay");
									}
								}
							} else {
								if (dialog.currentcaptnode2) {
									dialog.currentcaptnode2.classList.remove("thundertext");
									if (dialog.currentcaptnode2.touchlink) {
										dialog.currentcaptnode2.touchlink.classList.remove("active");
									}
								}
								dialog.currentcapt2 = this.link;
								dialog.currentcaptnode2 = this;
								this.classList.add("thundertext");

								// 添加随机功能的核心代码
								if (dialog.currentcapt2 === "随机") {
									var identity = game.me.identity;
									if (get.mode() === "guozhan") identity = "num";
									// 生成随机武将列表，数量根据身份配置
									var randomCount = get.config(`choice_${identity}`) || 12;
									var availableCharacters = Object.keys(lib.character).filter(name => {
										// 过滤条件与之前生成list时相同
										if (lib.character[name][4]) {
											if (lib.character[name].isMinskin) return false;
											if (lib.character[name].isBoss || lib.character[name].isHiddenBoss) {
												if (lib.config.mode == "boss") return false;
												if (!lib.character[name].isBossAllowed) return false;
											}
											if (lib.character[name].isHiddenInStoneMode) return false;
											if (lib.character[name].isUnseen) return false;
										}
										if (lib.config.banned.includes(name)) return false;
										if (lib.characterFilter[name] && !lib.characterFilter[name](get.mode())) return false;
										if (filter && filter(name)) return false;
										return true;
									});
									// 随机选择指定数量的武将
									characterRandomGets = availableCharacters.randomGets(randomCount);
								}

								if (this.touchlink) {
									this.touchlink.classList.add("active");
								} else if (this.parentNode == newlined2) {
									packsource.innerHTML = this.innerHTML;
									packsource.classList.add("thundertext");
								}
								for (var i2 = 0; i2 < dialog.buttons.length; i2++) {
									restoreState(dialog.buttons[i2]);
									if (dialog.currentcapt && dialog.buttons[i2].capt != dialog.getCurrentCapt(dialog.buttons[i2].link, dialog.buttons[i2].capt)) {
										dialog.buttons[i2].classList.add("nodisplay");
									} else if (dialog.buttons[i2].capt != dialog.getCurrentCapt(dialog.buttons[i2].link, dialog.buttons[i2].capt, true)) {
										dialog.buttons[i2].classList.add("nodisplay");
									} else if (dialog.currentgroup && dialog.buttons[i2].group != dialog.currentgroup) {
										dialog.buttons[i2].classList.add("nodisplay");
									} else {
										if (dialog.buttons[i2].activate) {
											dialog.buttons[i2].activate();
										}
										dialog.buttons[i2].classList.remove("nodisplay");
									}
								}
							}
						}
						if (dialog.seperate) {
							for (var i2 = 0; i2 < dialog.seperate.length; i2++) {
								if (!dialog.seperate[i2].nextSibling.querySelector(".button:not(.nodisplay)")) {
									dialog.seperate[i2].style.display = "none";
									dialog.seperate[i2].nextSibling.style.display = "none";
								} else {
									dialog.seperate[i2].style.display = "";
									dialog.seperate[i2].nextSibling.style.display = "";
								}
							}
						}
						if (filternode) {
							if (filternode.querySelector(".active")) {
								packsource.classList.add("thundertext");
							} else {
								packsource.classList.remove("thundertext");
							}
						}
						updatePagination();
						if (e) {
							e.stopPropagation();
						}
					};
					for (i = 0; i < namecapt.length; i++) {
						if (namecapt[i] == "newline") {
							newlined = document.createElement("div");
							newlined.style.marginTop = "5px";
							newlined.style.display = "block";
							if (get.is.phoneLayout()) {
								newlined.style.fontSize = "32px";
							} else {
								newlined.style.fontSize = "22px";
							}
							newlined.style.textAlign = "center";
							node.appendChild(newlined);
						} else if (newlined) {
							var span = ui.create.div(".tdnode.pointerdiv.shadowed.reduce_radius");
							span.style.margin = "3px";
							span.style.width = "auto";
							span.innerHTML = " " + namecapt[i].toUpperCase() + " ";
							span.link = namecapt[i];
							span.addEventListener(lib.config.touchscreen ? "touchend" : "click", clickCapt);
							newlined.appendChild(span);
							node[namecapt[i]] = span;
							if (namecapt[i] == "收藏") {
								span._nature = "fire";
							} else {
								span._nature = "wood";
							}
						} else {
							var span = document.createElement("span");
							span.innerHTML = " " + namecapt[i].toUpperCase() + " ";
							span.link = namecapt[i];
							span.alphabet = true;
							span.addEventListener(lib.config.touchscreen ? "touchend" : "click", clickCapt);
							node.appendChild(span);
						}
					}
					if (!thisiscard) {
						var natures = ["water", "soil", "wood", "metal"];
						var span = document.createElement("span");
						newlined.appendChild(span);
						span.style.margin = "8px";
						var clickGroup = function () {
							if (_status.dragged) {
								return;
							}
							if (dialog.currentcapt2 == "最近" && dialog.currentcaptnode2 != this && !dialog.currentcaptnode2.inited) {
								dialog.currentcapt2 = null;
								dialog.currentcaptnode2.classList.remove("thundertext");
								dialog.currentcaptnode2.inited = true;
								dialog.currentcaptnode2 = null;
							}
							var node2 = this,
								link2 = this.link;
							if (node2.classList.contains("thundertext")) {
								dialog.currentgroup = null;
								dialog.currentgroupnode = null;
								node2.classList.remove("thundertext");
								for (var i2 = 0; i2 < dialog.buttons.length; i2++) {
									restoreState(dialog.buttons[i2]);
									if (dialog.currentcapt && dialog.buttons[i2].capt != dialog.getCurrentCapt(dialog.buttons[i2].link, dialog.buttons[i2].capt)) {
										dialog.buttons[i2].classList.add("nodisplay");
									} else if (dialog.currentcapt2 && dialog.buttons[i2].capt != dialog.getCurrentCapt(dialog.buttons[i2].link, dialog.buttons[i2].capt, true)) {
										dialog.buttons[i2].classList.add("nodisplay");
									} else {
										dialog.buttons[i2].classList.remove("nodisplay");
									}
								}
							} else {
								if (dialog.currentgroupnode) {
									dialog.currentgroupnode.classList.remove("thundertext");
								}
								dialog.currentgroup = link2;
								dialog.currentgroupnode = node2;
								node2.classList.add("thundertext");
								for (var i2 = 0; i2 < dialog.buttons.length; i2++) {
									restoreState(dialog.buttons[i2]);
									if (dialog.currentcapt && dialog.buttons[i2].capt != dialog.getCurrentCapt(dialog.buttons[i2].link, dialog.buttons[i2].capt)) {
										dialog.buttons[i2].classList.add("nodisplay");
									} else if (dialog.currentcapt2 && dialog.buttons[i2].capt != dialog.getCurrentCapt(dialog.buttons[i2].link, dialog.buttons[i2].capt, true)) {
										dialog.buttons[i2].classList.add("nodisplay");
									} else if (dialog.currentgroup == "double") {
										if (dialog.buttons[i2]._changeGroup) {
											dialog.buttons[i2].classList.remove("nodisplay");
										} else {
											dialog.buttons[i2].classList.add("nodisplay");
										}
									} else if (dialog.currentgroup == "ye") {
										if (dialog.buttons[i2].group == "ye") {
											dialog.buttons[i2].classList.remove("nodisplay");
										} else {
											dialog.buttons[i2].classList.add("nodisplay");
										}
									} else {
										if (dialog.buttons[i2]._changeGroup || dialog.buttons[i2].group != dialog.currentgroup) {
											dialog.buttons[i2].classList.add("nodisplay");
										} else {
											dialog.buttons[i2].classList.remove("nodisplay");
										}
									}
								}
							}
							updatePagination();
						};
						for (var i = 0; i < groups.length; i++) {
							var span = ui.create.div(".tdnode.pointerdiv.shadowed.reduce_radius.reduce_margin");
							span.style.margin = "3px";
							newlined.appendChild(span);
							span.innerHTML = get.translation(groups[i]);
							span.link = groups[i];
							span._nature = natures[i];
							span.addEventListener(lib.config.touchscreen ? "touchend" : "click", clickGroup);
						}
						var span = document.createElement("span");
						newlined.appendChild(span);
						span.style.margin = "8px";
						packsource = ui.create.div(".tdnode.pointerdiv.shadowed.reduce_radius.reduce_margin");
						packsource.style.margin = "3px";
						newlined.appendChild(packsource);
						var filternode = null;
						var clickCaptNode = function (e) {
							delete _status.filterCharacter;
							ui.window.classList.remove("shortcutpaused");
							filternode.delete();
							filternode.classList.remove("shown");
							clickCapt.call(this.link, e);
						};
						if (get.is.phoneLayout() && lib.config.filternode_button) {
							newlined.style.marginTop = "";
							packsource.innerHTML = "筛选";
							filternode = ui.create.div(".popup-container.filter-character.modenopause");
							ui.create.div(filternode);
							filternode.listen(function (e) {
								if (this.classList.contains("removing")) {
									return;
								}
								delete _status.filterCharacter;
								ui.window.classList.remove("shortcutpaused");
								this.delete();
								this.classList.remove("shown");
								e.stopPropagation();
							});
							for (var i = 0; i < node.childElementCount; i++) {
								if (node.childNodes[i].tagName.toLowerCase() == "span") {
									node.childNodes[i].style.display = "none";
									node.childNodes[i].touchlink = ui.create.div(filternode.firstChild, clickCaptNode, ".menubutton.large.capt", node.childNodes[i].innerHTML);
									node.childNodes[i].touchlink.link = node.childNodes[i];
								}
							}
							ui.create.node("br", filternode.firstChild);
						} else {
							if (onlypack) {
								packsource.onlypack = true;
								packsource.innerHTML = get.translation(onlypack + "_character_config");
								packsource.style.display = "none";
								packsource.previousSibling.style.display = "none";
							} else {
								packsource.innerHTML = "武将包";
							}
						}
						newlined2 = document.createElement("div");
						newlined2.style.marginTop = "5px";
						newlined2.style.display = "none";
						newlined2.style.fontFamily = "xinwei";
						newlined2.classList.add("pointernode");
						if (get.is.phoneLayout()) {
							newlined2.style.fontSize = "32px";
						} else {
							newlined2.style.fontSize = "22px";
						}
						newlined2.style.textAlign = "center";
						node.appendChild(newlined2);
						packsource.addEventListener(lib.config.touchscreen ? "touchend" : "click", function () {
							if (packsource.onlypack) {
								return;
							}
							if (_status.dragged) {
								return;
							}
							if (get.is.phoneLayout() && lib.config.filternode_button && filternode) {
								_status.filterCharacter = true;
								ui.window.classList.add("shortcutpaused");
								ui.window.appendChild(filternode);
								ui.refresh(filternode);
								filternode.classList.add("shown");
								var dh = filternode.offsetHeight - filternode.firstChild.offsetHeight;
								if (dh > 0) {
									filternode.firstChild.style.top = dh / 2 + "px";
								} else {
									filternode.firstChild.style.top = "";
								}
							} else {
								if (newlined2.style.display == "none") {
									newlined2.style.display = "block";
								} else {
									newlined2.style.display = "none";
								}
							}
						});
						var packlist = [];
						for (var i = 0; i < lib.config.all.characters.length; i++) {
							if (!lib.config.characters.includes(lib.config.all.characters[i])) {
								continue;
							}
							packlist.add(lib.config.all.characters[i]);
						}
						for (var i = 0; i < lib.config.characters.length; i++) {
							if (lib.config.all.characters.includes(lib.config.characters[i])) {
								continue;
							}
							if (!lib.characterPack[lib.config.characters[i]]) {
								continue;
							}
							if (!lib.translate[lib.config.characters[i] + "_character_config"]) {
								continue;
							}
							packlist.add(lib.config.characters[i]);
						}
						Object.keys(lib.characterPack)
							.filter(key => {
								if (key.indexOf("mode_extension") != 0) {
									return false;
								}
								const extName = key.slice(15);
								return lib.config[`extension_${extName}_characters_enable`] === true;
							})
							.forEach(key => packlist.add(key));

						// 添加"随机"按钮到武将包列表
						var randomSpan = document.createElement("div");
						randomSpan.style.display = "inline-block";
						randomSpan.style.width = "auto";
						randomSpan.style.margin = "5px";
						if (get.is.phoneLayout()) {
							randomSpan.style.fontSize = "32px";
						} else {
							randomSpan.style.fontSize = "22px";
						}
						randomSpan.innerHTML = "随机";
						randomSpan.link = "随机";
						randomSpan.addEventListener(lib.config.touchscreen ? "touchend" : "click", clickCapt);
						newlined2.appendChild(randomSpan);

						for (var i = 0; i < packlist.length; i++) {
							var span = document.createElement("div");
							span.style.display = "inline-block";
							span.style.width = "auto";
							span.style.margin = "5px";
							if (get.is.phoneLayout()) {
								span.style.fontSize = "32px";
							} else {
								span.style.fontSize = "22px";
							}
							span.innerHTML = lib.translate[packlist[i] + "_character_config"];
							span.link = packlist[i];
							span.addEventListener(lib.config.touchscreen ? "touchend" : "click", clickCapt);
							newlined2.appendChild(span);
							if (filternode && !onlypack) {
								span.touchlink = ui.create.div(filternode.firstChild, clickCaptNode, ".menubutton.large", span.innerHTML);
								span.touchlink.link = span;
							}
						}

						// 在筛选菜单中也添加"随机"选项
						if (filternode && !onlypack) {
							randomSpan.touchlink = ui.create.div(filternode.firstChild, clickCaptNode, ".menubutton.large", randomSpan.innerHTML);
							randomSpan.touchlink.link = randomSpan;
						}
					}
					var groupSort;
					if (thisiscard) {
						groupSort = function (name) {
							var type = lib.card[name[2]].type;
							if (lib.cardType[type]) {
								return lib.cardType[type];
							}
							switch (type) {
								case "basic":
									return 0;
								case "chess":
									return 1.5;
								case "trick":
									return 2;
								case "delay":
									return 3;
								case "equip":
									return 4;
								case "zhenfa":
									return 5;
								default:
									return 6;
							}
						};
						list.sort(function (a, b) {
							var del = groupSort(a) - groupSort(b);
							if (del != 0) {
								return del;
							}
							var aa = a,
								bb = b;
							if (a.includes("_")) {
								a = a.slice(a.lastIndexOf("_") + 1);
							}
							if (b.includes("_")) {
								b = b.slice(b.lastIndexOf("_") + 1);
							}
							if (a != b) {
								return a > b ? 1 : -1;
							}
							return aa > bb ? 1 : -1;
						});
					} else {
						list.sort(lib.sort.character);
					}
					dialog = ui.create.dialog("hidden");
					dialog.classList.add("noupdate");
					dialog.classList.add("scroll1");
					dialog.classList.add("scroll2");
					dialog.classList.add("scroll3");
					dialog.supportsPagination = Boolean(parseInt(lib.config.showMax_character_number));
					dialog.paginationMaxCount.set("character", parseInt(lib.config.showMax_character_number));
					dialog.addEventListener(lib.config.touchscreen ? "touchend" : "mouseup", function () {
						_status.clicked2 = true;
					});
					if (heightset) {
						dialog.style.height = (game.layout == "long2" || game.layout == "nova" ? 380 : 350) + 50 + "px";
						dialog._scrollset = true;
					}
					dialog.getCurrentCapt = function (link2, capt, noalph) {
						var currentcapt = noalph ? this.currentcapt2 : this.currentcapt;
						if (this.seperatelist && noalph) {
							if (this.seperatelist[currentcapt].includes(link2)) {
								return capt;
							}
							return null;
						}
						if (lib.characterDialogGroup[currentcapt]) {
							return lib.characterDialogGroup[currentcapt](link2, capt);
						}
						if (lib.characterPack[currentcapt]) {
							if (lib.characterPack[currentcapt][link2]) {
								return capt;
							}
							return null;
						}
						return this.currentcapt;
					};
					const container = dialog.querySelector(".content-container>.content");
					const Searcher = ui.create.div(".searcher.caption");
					const input = document.createElement("input").css({
						textAlign: "center",
						border: "solid 2px #294510",
						borderRadius: "6px",
						fontWeight: "bold",
						fontSize: "21px",
					});
					const div = ui.create.div(".searcher.find");
					input.placeholder = "支持正则搜索";
					let find = ui.create.button(["find", "搜索"], "tdnodes");
					find.style.display = "inline";
					const updatePagination = () => {
						if (dialog.paginationMaxCount.get("character")) {
							const buttons = dialog.content.querySelector(".buttons");
							const array = dialog.buttons.filter(item => !item.classList.contains("nodisplay") && item.style.display !== "none");
							const p = dialog.paginationMap.get(buttons);
							if (p) {
								p.state.data = array;
								p.setTotalPageCount(Math.ceil(array.length / dialog.paginationMaxCount.get("character")));
							}
						}
					};
					const restoreState = btn => {
						if (btn.style.display == "none") {
							btn.style.display = "";
						}
					};
					const updateFind = () => {
						const { value } = input;
						const reg = new RegExp(value);
						for (let btn of dialog.buttons) {
							if (reg.test(get.translation(btn.link)) || reg.test(get.translation(btn.link + "_ab"))) {
								btn.classList.remove("nodisplay");
							} else {
								btn.classList.add("nodisplay");
							}
						}
						updatePagination();
					};
					find.addEventListener("click", updateFind);
					input.onkeydown = function (e) {
						e.stopPropagation();
						if (e.code == "Enter") {
							updateFind();
						}
					};
					input.onmousedown = function (e) {
						e.stopPropagation();
					};
					Searcher.append(input, find);
					container.prepend(Searcher);
					if (str) {
						dialog.add(str);
					}
					dialog.add(node);
					if (thisiscard) {
						if (seperate) {
							seperate = seperate(list);
							dialog.seperate = [];
							dialog.seperatelist = seperate.list;
							if (dialog.seperatelist) {
								newlined = document.createElement("div");
								newlined.style.marginTop = "5px";
								newlined.style.display = "block";
								newlined.style.fontFamily = "xinwei";
								if (get.is.phoneLayout()) {
									newlined.style.fontSize = "32px";
								} else {
									newlined.style.fontSize = "22px";
								}
								newlined.style.textAlign = "center";
								node.appendChild(newlined);
								for (var i in dialog.seperatelist) {
									var span = document.createElement("span");
									span.style.margin = "3px";
									span.innerHTML = i;
									span.link = i;
									span.seperate = true;
									span.addEventListener(lib.config.touchscreen ? "touchend" : "click", clickCapt);
									newlined.appendChild(span);
								}
							}
							for (var i in seperate) {
								if (i == "list") {
									continue;
								}
								var link = "";
								var linkcontent = seperate[i];
								if (i.includes("_link:")) {
									link = i.slice(i.indexOf("_link:") + 6);
									i = i.slice(0, i.indexOf("_link:"));
								}
								var nodesep = dialog.add(i);
								nodesep.link = link;
								dialog.seperate.push(nodesep);
								dialog.add([linkcontent, "vcard"], noclick);
							}
						} else {
							dialog.add([list, "vcard"], noclick);
						}
					} else {
						if (characterx) {
							dialog.add([list, "characterx"], noclick);
						} else {
							dialog.add([list, "character"], noclick);
						}
					}
					dialog.add(ui.create.div(".placeholder"));
					for (i = 0; i < dialog.buttons.length; i++) {
						if (thisiscard) {
							dialog.buttons[i].capt = getCapt(dialog.buttons[i].link[2]);
						} else {
							dialog.buttons[i].group = lib.character[dialog.buttons[i].link][1];
							dialog.buttons[i].capt = getCapt(dialog.buttons[i].link);
						}
					}
					if (!expandall) {
						if (!thisiscard && (lib.characterDialogGroup[lib.config.character_dialog_tool] || lib.config.character_dialog_tool == "自创")) {
							clickCapt.call(node[lib.config.character_dialog_tool]);
						}
					}
					if (dialog.paginationMaxCount.get("character")) {
						const buttons = dialog.content.querySelector(".buttons");
						const array = dialog.buttons.filter(item => !item.classList.contains("nodisplay") && item.style.display !== "none");
						dialog.addPagination({
							// 数据
							data: array,
							// 总页数(向上取整)
							totalPageCount: Math.ceil(array.length / dialog.paginationMaxCount.get("character")),
							// 父元素
							container: dialog.content,
							// 添加到容器的哪个子元素后面
							insertAfter: buttons,
							// 回调修改数据
							onPageChange: state => {
								const { pageNumber, data } = state;
								data.forEach((item, index) => {
									const maxCount = dialog.paginationMaxCount.get("character");
									if (index >= (pageNumber - 1) * maxCount && index < pageNumber * maxCount) {
										item.classList.remove("nodisplay");
									} else {
										item.classList.add("nodisplay");
									}
								});
							},
							// 触发什么事件来更改当前页数，默认为click
							changePageEvent: "click",
						});
					}
					return dialog;
				},
			};
			Object.assign(ui.create, createDialog);
		}, 100);
	}
	// 自由选将-筛选按钮扩充
	if (lib.config.extension_星之梦_filterexpand) {
		lib.characterDialogGroup = {
			// 原版
			收藏: function (name, capt) {
				return lib.config.favouriteCharacter.includes(name) ? capt : null;
			},
			最近: function (name, capt) {
				var list = get.config("recentCharacter") || [];
				return list.includes(name) ? capt : null;
			},
			// 扩充
			"<span style=\'color:#00ADE7\'>♂</span>": function (name, capt) {
				var list = [];
				for (var i in lib.character) {
					if (lib.character[i][0] == "male") {
						list.push(i);
					}
				}
				return list.includes(name) ? capt : null;
			},
			"<span style=\'color:#E56587\'>♀</span>": function (name, capt) {
				var list = [];
				for (var i in lib.character) {
					if (lib.character[i][0] == "female") {
						list.push(i);
					}
				}
				return list.includes(name) ? capt : null;
			},
			"<span style=\'color:#00ADE7\'>♂</span><span style=\'color:#E56587\'>♀</span>": function (name, capt) {
				var list = [];
				for (var i in lib.character) {
					if (lib.character[i][0] == "double") {
						list.push(i);
					}
				}
				return list.includes(name) ? capt : null;
			},
			主公: function (name, capt) {
				var list = [];
				for (var i in lib.character) {
					if (lib.character[i][4].includes("zhu")) {
						list.push(i);
					}
				}
				return list.includes(name) ? capt : null;
			},
			护甲: function (name, capt) {
				var list = [];
				for (var i in lib.character) {
					if (typeof lib.character[i][2] == typeof "") {
						var list1 = lib.character[i][2].split("/");
						if (list1.length == 3) {
							list.push(i);
						}
					}
				}
				return list.includes(name) ? capt : null;
			},
			"体力≠上限": function (name, capt) {
				var list = [];
				for (var i in lib.character) {
					if (typeof lib.character[i][2] == typeof "") {
						var list1 = lib.character[i][2].split("/");
						if (Number(list1[0]) != Number(list1[1])) {
							list.push(i);
						}
					}
				}
				return list.includes(name) ? capt : null;
			},
			"1上限": function (name, capt) {
				var list = [];
				for (var i in lib.character) {
					if (typeof lib.character[i][2] == typeof "") {
						var list1 = lib.character[i][2].split("/");
						if (Number(list1[1]) == 1) {
							list.push(i);
						}
					}
					if (typeof lib.character[i][2] == typeof 0) {
						if (lib.character[i][2] == 1) {
							list.push(i);
						}
					}
				}
				return list.includes(name) ? capt : null;
			},
			"2上限": function (name, capt) {
				var list = [];
				for (var i in lib.character) {
					if (typeof lib.character[i][2] == typeof "") {
						var list1 = lib.character[i][2].split("/");
						if (Number(list1[1]) == 2) {
							list.push(i);
						}
					}
					if (typeof lib.character[i][2] == typeof 0) {
						if (lib.character[i][2] == 2) {
							list.push(i);
						}
					}
				}
				return list.includes(name) ? capt : null;
			},
			"3上限": function (name, capt) {
				var list = [];
				for (var i in lib.character) {
					if (typeof lib.character[i][2] == typeof "") {
						var list1 = lib.character[i][2].split("/");
						if (Number(list1[1]) == 3) {
							list.push(i);
						}
					}
					if (typeof lib.character[i][2] == typeof 0) {
						if (lib.character[i][2] == 3) {
							list.push(i);
						}
					}
				}
				return list.includes(name) ? capt : null;
			},
			"4上限": function (name, capt) {
				var list = [];
				for (var i in lib.character) {
					if (typeof lib.character[i][2] == typeof "") {
						var list1 = lib.character[i][2].split("/");
						if (Number(list1[1]) == 4) {
							list.push(i);
						}
					}
					if (typeof lib.character[i][2] == typeof 0) {
						if (lib.character[i][2] == 4) {
							list.push(i);
						}
					}
				}
				return list.includes(name) ? capt : null;
			},
			"5上限": function (name, capt) {
				var list = [];
				for (var i in lib.character) {
					if (typeof lib.character[i][2] == typeof "") {
						var list1 = lib.character[i][2].split("/");
						if (Number(list1[1]) == 5) {
							list.push(i);
						}
					}
					if (typeof lib.character[i][2] == typeof 0) {
						if (lib.character[i][2] == 5) {
							list.push(i);
						}
					}
				}
				return list.includes(name) ? capt : null;
			},
			"6上限": function (name, capt) {
				var list = [];
				for (var i in lib.character) {
					if (typeof lib.character[i][2] == typeof "") {
						var list1 = lib.character[i][2].split("/");
						if (Number(list1[1]) == 6) {
							list.push(i);
						}
					}
					if (typeof lib.character[i][2] == typeof 0) {
						if (lib.character[i][2] == 6) {
							list.push(i);
						}
					}
				}
				return list.includes(name) ? capt : null;
			},
			"7上限": function (name, capt) {
				var list = [];
				for (var i in lib.character) {
					if (typeof lib.character[i][2] == typeof "") {
						var list1 = lib.character[i][2].split("/");
						if (Number(list1[1]) == 7) {
							list.push(i);
						}
					}
					if (typeof lib.character[i][2] == typeof 0) {
						if (lib.character[i][2] == 7) {
							list.push(i);
						}
					}
				}
				return list.includes(name) ? capt : null;
			},
			"8上限": function (name, capt) {
				var list = [];
				for (var i in lib.character) {
					if (typeof lib.character[i][2] == typeof "") {
						var list1 = lib.character[i][2].split("/");
						if (Number(list1[1]) == 8) {
							list.push(i);
						}
					}
					if (typeof lib.character[i][2] == typeof 0) {
						if (lib.character[i][2] == 8) {
							list.push(i);
						}
					}
				}
				return list.includes(name) ? capt : null;
			},
			">8上限": function (name, capt) {
				var list = [];
				for (var i in lib.character) {
					if (typeof lib.character[i][2] == typeof "") {
						var list1 = lib.character[i][2].split("/");
						if (Number(list1[1]) > 8) {
							list.push(i);
						}
					}
					if (typeof lib.character[i][2] == typeof 0) {
						if (lib.character[i][2] > 8) {
							list.push(i);
						}
					}
				}
				return list.includes(name) ? capt : null;
			},
		};
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
								// alert("导入成功");
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
			get: () => ["wei", "shu", "wu", "qun", "jin"],
			set: () => {},
		});
		lib.skill._slyh = {
			trigger: { global: "gameStart", player: "enterGame" },
			forced: true,
			popup: false,
			silent: true,
			priority: Infinity,
			filter(_, player) {
				return get.mode() !== "guozhan" && player.group && !lib.group.includes(player.group);
			},
			async content(event, trigger, player) {
				const result = await player
					.chooseControl(lib.group.slice(0, 5))
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
				if ((get.mode() != "doudizhu" && get.mode() != "versus" && get.mode() != "single") || get.config("versus_mode") === "four") {
					return false;
				}
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
	lib.skill._tphaseTip = {
		trigger: {
			global: ["phaseBegin", "phaseZhunbeiBefore", "phaseJudgeBefore", "phaseDrawBefore", "phaseUseBefore", "phaseDiscardBefore", "phaseJieshuBefore", "phaseEnd", "phaseAfter"],
		},
		filter: function (event, player) {
			const config = lib.config.extension_星之梦_tphaseTipStyle;
			return config && lib.config.extension_星之梦_tphaseTip;
		},
		async content(event, trigger) {
			game.broadcastAll(
				(phasename, player) => {
					// 只对主玩家处理，非主玩家直接返回
					if (player !== game.me) return;

					if (phasename === "phaseAfter") {
						if (player.tphaseTip) {
							// 添加向右淡出动画
							if (player.tphaseTip && player.tphaseTip.classList) {
								player.tphaseTip.classList.remove("active");
								player.tphaseTip.classList.add("fade-out-right");
							}

							// 动画结束后移除元素
							setTimeout(() => {
								if (player.tphaseTip && player.tphaseTip.parentNode) {
									player.tphaseTip.remove();
								}
								player.tphaseTip = null;
								player.tphaseTipImg = null;
							}, 600);
						}
					} else {
						const config = lib.config.extension_星之梦_tphaseTipStyle;
						const basePath = "extension/星之梦/image/JDTS/";
						const imageTypes = ["hhks", "zbjd", "pdjd", "mpjd", "cpjd", "qpjd", "jsjd", "hhjs"];
						const phases = ["Begin", "ZhunbeiBefore", "JudgeBefore", "DrawBefore", "UseBefore", "DiscardBefore", "JieshuBefore", "End"];
						const phaseStyles = {
							1: {},
							2: {},
						};
						[1, 2].forEach(version => {
							const ext = version === 1 ? "jpg" : "png";
							phases.forEach((phase, index) => {
								const key = `phase${phase}`;
								phaseStyles[version][key] = `${basePath}${imageTypes[index]}.${ext}`;
							});
						});
						// 根据配置选择对应的图片路径
						const phase = phaseStyles[config] || phaseStyles["1"];
						const imgSrc = phase[phasename];

						if (!player.tphaseTip) {
							const addStyle = () => {
								// 检查样式是否已添加
								if (document.getElementById("tphaseTip-styles")) return;

								const style = document.createElement("style");
								style.id = "tphaseTip-styles";
								style.textContent = `
                                .tphaseTip {
                                    position: fixed;
                                    left: 40px;
                                    bottom: 195px;
                                    width: 85px;
                                    opacity: 0;
                                    pointer-events: none;
                                    z-index: 4;
                                }
                                .tphaseTip.active {
                                    opacity: 1;
                                }
                                .tphaseTip img {
                                    max-width: 100%;
                                    height: auto;
                                }

                                /* 从左淡入动画 */
                                @keyframes tphaseTip-fadeInLeft {
                                    from {
                                        opacity: 0;
                                        transform: translateX(-25px);
                                    }
                                    to {
                                        opacity: 1;
                                        transform: translateX(0);
                                    }
                                }

                                /* 向右淡出动画 */
                                @keyframes tphaseTip-fadeOutRight {
                                    from {
                                        opacity: 1;
                                        transform: translateX(0);
                                    }
                                    to {
                                        opacity: 0;
                                        transform: translateX(75px);
                                    }
                                }

                                .tphaseTip.fade-in-left {
                                    animation: tphaseTip-fadeInLeft 0.6s ease-out forwards; /* 改为0.6秒 */
                                }

                                .tphaseTip.fade-out-right {
                                    animation: tphaseTip-fadeOutRight 0.6s ease-in forwards; /* 改为0.6秒 */
                                }
                            `;
								document.head.appendChild(style);
							};

							if (!game.phaseStyle) {
								game.phaseStyle = true;
								addStyle();
							}

							// 创建并附加到 document.body
							player.tphaseTip = document.createElement("div");
							player.tphaseTip.className = "tphaseTip";
							document.body.appendChild(player.tphaseTip);

							// 创建图片元素并存储引用
							player.tphaseTipImg = document.createElement("img");
							player.tphaseTipImg.src = imgSrc;
							player.tphaseTipImg.alt = phasename;
							player.tphaseTip.appendChild(player.tphaseTipImg);

							// 执行淡入动画
							if (player.tphaseTip && player.tphaseTip.classList) {
								player.tphaseTip.classList.add("fade-in-left");
								setTimeout(() => {
									if (player.tphaseTip && player.tphaseTip.classList) {
										player.tphaseTip.classList.add("active");
									}
								}, 10);
							}

							// 客户端同步
							if (lib.node && lib.node.clients) {
								lib.node.clients.forEach(c => {
									if (!c.gameOptions) c.gameOptions = {};
									if (!c.gameOptions.phaseTip) {
										c.send(addStyle);
										c.gameOptions.phaseTip = true;
									}
								});
							}
						} else {
							// 先添加向右淡出动画
							if (player.tphaseTip && player.tphaseTip.classList) {
								player.tphaseTip.classList.remove("active", "fade-in-left");
								player.tphaseTip.classList.add("fade-out-right");
							}

							// 动画结束后更新图片并重新从左淡入
							setTimeout(() => {
								// 直接使用存储的图片引用更新
								if (player.tphaseTipImg) {
									player.tphaseTipImg.src = imgSrc;
									player.tphaseTipImg.alt = phasename;
								}

								// 移除淡出类，添加淡入类
								if (player.tphaseTip && player.tphaseTip.classList) {
									player.tphaseTip.classList.remove("fade-out-right");
									void player.tphaseTip.offsetWidth; // 触发重绘
									player.tphaseTip.classList.add("fade-in-left");

									// 短暂延迟后添加active类
									setTimeout(() => {
										if (player.tphaseTip && player.tphaseTip.classList) {
											player.tphaseTip.classList.add("active");
										}
									}, 10);
								}
							}, 600);
						}
					}
				},
				event.triggername,
				trigger.player
			);
		},
		direct: true,
		popup: false,
		forced: true,
		forceDie: true,
		charlotte: true,
		locked: true,
	};
	//前缀Prefix添加
	lib.namePrefix.set("风", {
		color: "#0d33ff",
		nature: "Celadon",
		showName: "风",
	});
	lib.namePrefix.set("凌", {
		color: "#8470FF",
		nature: "LightSlateBlue",
		showName: "凌",
	});
	lib.namePrefix.set("真", {
		color: "#FFD700",
		nature: "GoldEnrod",
		showName: "真",
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
	lib.namePrefix.set("信", {
		color: "#def7ca",
		nature: "watermm",
		showName: "信",
	});
	lib.namePrefix.set("废", {
		color: "#a4a4a4",
		nature: "black",
		showName: "废",
	});
	lib.namePrefix.set("ddd", {
		getSpan: () => {
			const span = document.createElement("span"),
				style = span.style;
			style.writingMode = style.webkitWritingMode = "horizontal-tb";
			style.fontFamily = "MotoyaLMaru";
			style.transform = "scaleY(0.85)";
			span.textContent = "3D";
			return span.outerHTML;
		},
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
	}
	// if (skill.dynamicTranslate) {
	//     character.dynamicTranslate = character.dynamicTranslate || {}; // 初始化
	//     for (let key in skill.dynamicTranslate) {
	//         if (!character.dynamicTranslate[key]) {  // 和translate一样的保护性赋值
	//             character.dynamicTranslate[key] = skill.dynamicTranslate[key];
	//         }
	//     }
	// };
	delete character.name;
	game.addCharacterPack(character);
	lib.translate.星之梦_character_config = "星之梦";
	lib.config.星之梦_characters_enable = true;
	lib.arenaReady.push(function () {
		lib.connectCharacterPack.add("星之梦");
	});
	if (!_status.postReconnect.lingmeng_pack)
		_status.postReconnect.lingmeng_pack = [
			function (pack) {
				lib.translate.星之梦_character_config = "星之梦";
				lib.characterPack["星之梦"] = pack;
				for (let key in pack) lib.character[key] = pack[key];
				lib.config.extension_星之梦_characters_enable = true;
				lib.connectCharacterPack.add("星之梦");
				lib.config.characters.add("星之梦");
			},
			lib.characterPack["星之梦"],
		];
	if (!_status.postReconnect.lingmeng_translate)
		_status.postReconnect.lingmeng_translate = [
			function (translates) {
				lib.translate.星之梦_character_config = "星之梦";
				for (let key in translates) lib.translate[key] = translates[key];
			},
			character.translate,
		];
	if (!_status.postReconnect.lm_pack_namePrefix)
		_status.postReconnect.lm_pack_namePrefix = [
			function () {
				//Prefix添加
				lib.namePrefix.set("风", {
					color: "#0d33ff",
					nature: "Celadon",
					showName: "风",
				});
				lib.namePrefix.set("凌", {
					color: "#8470FF",
					nature: "LightSlateBlue",
					showName: "凌",
				});
				lib.namePrefix.set("真", {
					color: "#FFD700",
					nature: "GoldEnrod",
					showName: "真",
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
				lib.namePrefix.set("信", {
					color: "#def7ca",
					nature: "watermm",
					showName: "信",
				});
				lib.namePrefix.set("废", {
					color: "#a4a4a4",
					nature: "black",
					showName: "废",
				});
			},
			[],
		];
	lib.element.content.waitForPlayer = function () {
		"step 0";
		ui.auto.hide();
		ui.pause.hide();
		game.createServer();
		if (!lib.translate.zhu) {
			lib.translate.zhu = "主";
		}
		if (event.func) {
			event.func();
		}
		if (!lib.configOL.number) {
			lib.configOL.number = parseInt(lib.configOL.player_number);
		}
		if (game.onlineroom) {
			game.send("server", "config", lib.configOL);
		}
		ui.create.connectPlayers(game.ip);
		if (!window.isNonameServer) {
			var me = game.connectPlayers[0];
			me.setIdentity("zhu");
			me.initOL(get.connectNickname(), lib.config.connect_avatar);
			me.playerid = "1";
			game.onlinezhu = "1";
		}
		_status.waitingForPlayer = true;
		if (window.isNonameServer) {
			document.querySelector("#server_status").innerHTML = "等待中";
		}
		game.pause();
		"step 1";
		_status.waitingForPlayer = false;
		lib.configOL.gameStarted = true;
		if (window.isNonameServer) {
			document.querySelector("#server_status").innerHTML = "游戏中";
		}
		if (game.onlineroom) {
			game.send("server", "config", lib.configOL);
		}
		for (var i = 0; i < game.connectPlayers.length; i++) {
			game.connectPlayers[i].delete();
		}
		delete game.connectPlayers;
		if (ui.roomInfo) {
			ui.roomInfo.remove();
			delete ui.roomInfo;
		}
		if (ui.exitroom) {
			ui.exitroom.remove();
			delete ui.exitroom;
		}
		game.broadcast(function (postReconnect, pack) {
			postReconnect = get.parsedResult(postReconnect);
			for (var i in postReconnect) {
				if (Array.isArray(postReconnect[i])) {
					postReconnect[i].shift().apply(this, postReconnect[i]);
				}
			}
		}, _status.postReconnect);
		game.broadcast("gameStart");
		game.delay(2);
		ui.auto.show();
		ui.pause.show();
		if (lib.config.show_cardpile) {
			ui.cardPileButton.style.display = "";
		}
	};
}
