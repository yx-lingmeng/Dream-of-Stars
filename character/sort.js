import { lib, game, ui, get, ai, _status } from "noname";
const characterSorts = {
	//武将分类
	mode_extension_星之梦: {
		//OL武将
		//OL专属
		onlyOL_old: ["old_dm_sunquan", "old_ol_sb_zhangrang", "old_ol_sb_yl_luzhi", "old_ol_sb_dengai", "oldx_ol_sb_dengai", "old_ol_sb_dongzhuo", "old_ol_madai", "old_ol_liubiao", "old_ol_wangyi", "old_ol_chengpu", "old_ol_yufan", "old_shen_caopi"],
		//门阀士族
		clan_old: ["old_clan_xuncai", "old_clan_xunyu", "old_clan_xunshi", "old_clan_xunshuang", "old_clan_hanrong", "old_clan_hanshao", "old_clan_wangmingshan", "old_clan_zhonghui", "old_clan_yangxiu"],
		//璀璨星河
		sp_old: ["old_zhangqiying", "old_ol_yangfeng", "old_kongshu", "old_ol_xuelingyun", "old_ol_nanhualaoxian", "old_ol_qianzhao", "old_ruiji", "old_zhugejin", "old_sp_sunce", "old_ol_pengyang", "old_ol_feiyi", "old_ol_hujinding", "old_ol_luyusheng", "old_wangyan", "old_dengzhong", "old_zhanghua", "old_tengfanglan"],

		//新杀武将
		//界限突破
		refresh_old: ["old_xin_zhonghui", "old_dc_xushu", "old_re_caorui", "old_re_zhangchunhua"],
		//群英荟萃
		huicui_old: ["old_dc_weifeng", "old_chengui", "old_dc_zhugejun", "old_dc_xiahouxuan", "old_dc_sp_zhurong", "old_yue_miheng", "old_dc_liuli", "old_yuechen"],
		//系列专属
		sp2_old: ["old_hansong", "old_star_dingfeng", "old_star_fazheng"],
		//限定专属
		xianding_old: ["old_liufuren", "old_renwan", "old_dc_tengfanglan", "old_liujinliupei", "old_pangfengyi", "old_zhugejing", "old_bailingyun", "old_ruanyu", "old_xurong", "old_yuanji", "old_v_machao", "old_v_zhangxingcai", "old_dc_sb_xunyu", "old_dc_sb_luxun", "old_dc_sb_hulie", "old_dc_sb_xuyou", "old_dc_sb_zhuran", "old_dc_sb_dengai", "old_wu_zhugeliang", "old_wu_guanyu", "old_wu_huangfusong", "old_dc_shen_huatuo", "old_dc_shen_sunquan"],

		//手杀武将
		//始计篇
		shiji_old: ["old_sp_zhujun", "old_xin_zhangzhongjing", "old_sp_lvfan", "old_qiaogong", "old_sp_xinpi", "old_wujing", "old_sp_wangshuang", "old_wangling", "old_mb_shen_jiangwei", "oldx_mb_shen_jiangwei"],
		//移动版
		mobile_old: ["old_mb_sunquan", "old_mb_caomao", "old_mb_cuilingyi", "old_mb_mengda", "old_mb_caocao", "old_wuke", "old_zhangbu", "old_friend_xushu", "old_hefei_zhangliao", "old_sp_jianggan", "old_mb_wangjing", "old_mb_sp_guanqiujian", "old_shenpei", "old_liwei", "old_yangfu", "old_mb_chengui", "old_mb_guozhao", "old_fuqian", "old_mb_sp_zhenji", "old_mb_zhuzhi"],
		//谋攻篇
		sb_old: ["old_mb_liuhui", "old_sb_caopi", "old_sb_jiangwei", "old_sb_xuhuang", "old_sb_yuanshao", "old_sb_handang", "old_sb_huaxiong", "old_sb_jiaxu", "old_sb_zhugejin", "old_sb_zhangliao", "old_sb_zhanghe", "old_sb_guojia", "old_sb_gaoshun", "old_sb_xiahouyuan", "old_sb_lvbu", "old_sb_daqiao", "old_sb_sunce", "old_sb_sp_zhugeliang", "old_sb_zhugeliang", "oldx_sb_sp_zhugeliang", "oldx_sb_zhugeliang", "old_sb_menghuo", "old_sb_zhurong", "old_sb_guanyu", "old_sb_zhaoyun", "old_sb_fazheng", "old_sb_daqiao", "old_sb_sunce", "old_sb_sp_zhugeliang", "old_sb_zhugeliang", "oldx_sb_sp_zhugeliang", "oldx_sb_zhugeliang", "old_sb_menghuo", "old_sb_zhurong", "old_sb_guanyu", "old_sb_zhaoyun", "old_sb_fazheng", "old_sb_huangzhong", "old_sb_gongsunzan", "old_sb_sunquan", "old_sb_huanggai", "old_sb_ganning", "old_sb_xiaoqiao"],
		//兵势篇
		bingshi_old: ["old_pot_dengai", "old_pot_lusu", "old_pangxi", "old_mb_zhangyan", "old_pot_xinxianying", "old_guoyuan", "old_mb_chenzhi", "old_pot_weiyan", "old_pot_taishici", "old_pot_lougui", "old_pot_chendao", "old_pot_yuji"],

		//海外
		tw_old: ["old_tw_huojun", "old_tw_guohuai", "oldx_quancong", "old_tw_baoxin", "old_tw_zhangmancheng", "old_tw_guanqiujian", "old_tw_niufudongxie", "old_xia_guanyu", "old_xia_zhaoe", "old_huan_zhugeliang", "old_huan_weiyan", "old_huan_zhugeguo", "old_tw_shen_lvmeng", "old_huan_caoang", "old_tw_gexuan", "old_jsrg_huangfusong", "old_yinfuren", "old_tw_jiangji", "old_tw_zhangzhao", "old_tw_zhanghong", "old_tw_huangfusong"],
		//联动卡
		collab_old: ["old_strong_caochong", "old_jm_yuanshu"],
		//怀旧
		huaijiu_old: ["old_new_simayi"],
		//新一将成名
		newjiang_old: ["old_yj_zhoubuyi", "old_v_sunce", "old_wufu", "old_lukai", "old_yj_majun", "old_xunyuxunyou", "old_v_sunquan"],

		other_old: ["old_gaowang", "diy_zhujun", "diy_liaohua", "diy_zhangfei"],
		lm_scs: ["lm_shichangshi", "lm_zhangrang", "lm_zhaozhong", "lm_sunzhang", "lm_bilan", "lm_xiayun", "lm_hankui", "lm_lisong", "lm_duangui", "lm_guosheng", "lm_gaowang"],
		lmCharacter_sw: ["sw_guanyu", "sw_lvmeng", "sw_zhugeliang", "sw_zhouyu", "sw_simayi", "sw_zhaoyun", "sw_caocao", "sw_lvbu", "sw_liubei", "sw_luxun", "sw_zhangliao", "sw_ganning", "sw_caopi", "sw_zhenji", "sw_zhangjiao", "sw_diaochan", "sw_tw_guanyu", "sw_tw_lvmeng", "sw_wechat_zhugeliang", "lm_xurong"],
		lmCharacter_diy: ["wangtaowangyue", "lm_old_caocao"],
		lmCharacter_other: ["unlock_dongzhao", "unlock_tianchuan", "zhangjian", "lm_jikang"],
	},
};
export default characterSorts;
