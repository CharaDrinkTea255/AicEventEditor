// Generated from Aic.g4 by antlr-blockly
// 语句集合和表达式集合
AicBlocks = {
    "statement": [
        "msg_prefix",
        "msg",
        "tx_board",
        "talker",
        "talker_replace",
        "hkds",
        "tutorial",
        "titlecall",
        "uialert",
        "uialert_itemholdover",
        "pic_b",
        "pic_silhouette",
        "pic_mp",
        "pic_movea",
        "pic_mva_whole",
        "pic_fill",
        "pic_tfade",
        "pic_flash",
        "pic_radiation",
        "pic_move",
        "pic_move2",
        "epsitu",
        "force_replace_noel_cane",
        "xxxskill",
        "getmagic",
        "removemagic",
        "enablemagic",
        "setmagic",
        "getitem_box",
        "getitem",
        "remitem",
        "getmoney",
        "wait_fn",
        "alchemy",
        "ui_forge",
        "itemstore",
        "storeflush",
        "storeadd",
        "bench_cmd_execute",
        "mgmtimer",
        "pr_key_simulate",
        "pr_outfit",
        "pr_beto",
        "pr_breath",
        "pr_voice",
        "pr_gacha",
        "pr_cure",
        "ser_apply",
        "wait",
        "setTimeout",
        "module",
        "numcounter",
        "select_case",
        "select_str",
        "ifthen",
        "ifelse",
        "ifstr",
        "loop",
        "posteffect",
        "pe_fadeinout",
        "qu_handshake",
        "quake",
        "mgm_4ascend",
        "replace_bgm",
        "greeting",
        "move_script",
        "custom",
        "empty"
    ],
    "msitem": [
        "ms_raw",
        "ms_bracket"
    ]
}


// 所有域的默认行为
Object.assign(AicBlocks,{
    "BGNL": {
        "type": "input_dummy"
    },
    "Bool": {
        "type": "field_checkbox",
        "checked": true
    },
    "String": {
        "type": "field_input",
        "text": "String_default"
    },
    "String_Multi": {
        "type": "field_multilinetext",
        "text": "String_Multi_default"
    },
    "MoveScript_List": {
        "type": "field_dropdown",
        "options": [
            ["P","P"],
            [">",">"],
            [">+",">+"],
            [">@",">@"],
            [">>",">>"],
            ["@>>","@>>"],
            [">>X",">>X"],
            ["@>>X","@>>X"],
            ["<<","<<"],
            ["@X","@X"],
            ["@#","@#"],
            ["M","M"],
            ["S","S"],
            ["TS","TS"],
            ["SND","SND"],
            ["SND!","SND!"],
            ["MP","MP"],
            ["PTC","PTC"],
            ["PTCC","PTCC"],
            ["PTCT","PTCT"],
            ["PTC!","PTC!"],
            ["J","J"]
        ],
        "default": "P"
    },
    "Acceleration_List": {
        "type": "field_dropdown",
        "options": [
            ["ZLINE","ZLINE"],
            ["ZPOW","ZPOW"],
            ["ZPOW3","ZPOW3"],
            ["ZPOWV","ZPOWV"],
            ["ZCOS","ZCOS"],
            ["ZSIN","ZSIN"],
            ["ZSIN2","ZSIN2"],
            ["ZSIN3","ZSIN3"],
            ["ZSINV","ZSINV"],
            ["ZSINV2","ZSINV2"],
            ["ZSINV3","ZSINV3"],
            ["ZEXPLODE","ZEXPLODE"],
            ["RZLINE","RZLINE"],
            ["RZPOW","RZPOW"],
            ["RZPOW3","RZPOW3"],
            ["RZPOWV","RZPOWV"],
            ["RZCOS","RZCOS"],
            ["RZSIN","RZSIN"],
            ["RZSIN2","RZSIN2"],
            ["RZSIN3","RZSIN3"],
            ["RZSINV","RZSINV"],
            ["RZSINV2","RZSINV2"],
            ["RZSINV3","RZSINV3"],
            ["RZEXPLODE","RZEXPLODE"]
        ],
        "default": "ZLINE"
    },
    "Alchemy_List": {
        "type": "field_dropdown",
        "options": [
            ["回忆相册","UIALBUM"],
            ["享用料理","LUNCHTIME"],
            ["烹饪","COOKING"],
            ["炼金术","ALCHEMY"],
            ["香薰精油","ALCHEMY_TRM"],
            ["香草茶","ALCHEMY_COFFEEMAKER"],
            ["工作台","ALCHEMY_WORKBENCH"],
            ["查看配方","ALCHEMY_RECIPE_BOOK"],
            ["查看图鉴","ALCHEMY_RECIPE_BOOK2"],
            ["卫生间","UI_RESTROOM_MENU TOP_BT"],
            ["接受委托","UI_GUILDQUEST city"],
            ["交付委托","UI_GUILDQUEST city 1"],
            ["等待商人","CONFIRM_WAIT_NIGHTINGALE\nIF $_result'==1' UIGM WAIT_NIGHTINGALE"]
        ],
        "default": "UIALBUM"
    },
    "Alert_List": {
        "type": "field_dropdown",
        "options": [
            ["默认","ALERT"],
            ["怀卵","ALERT_EGG"],
            ["低兴奋度","ALERT_EP"],
            ["高兴奋度","ALERT_EP2"],
            ["灰色","ALERT_GRAY"],
            ["输掉了","ALERT_HUNGER"],
            ["长椅","ALERT_BENCH"],
            ["木偶","ALERT_PUPPET"],
            ["报错","ALERT_FATAL"],
            ["酒保","ALERT_BARU"]
        ],
        "default": "ALERT"
    },
    "Alphabet_List": {
        "type": "field_dropdown",
        "options": [
            ["爱丽丝","a"],
            ["酒保","bt"],
            ["c","c"],
            ["提尔德","d"],
            ["e","e"],
            ["德尔菲尼","f"],
            ["梅法","g"],
            ["h","h"],
            ["伊夏","i"],
            ["j","j"],
            ["k","k"],
            ["阿尔玛","l"],
            ["诺艾儿（洗手间）","nb"],
            ["诺艾儿","n"],
            ["诺艾儿（长椅）","nb2"],
            ["普莉姆拉","p"],
            ["q","q"],
            ["蒂格蕾娜","so"],
            ["奥斯托利亚","s"],
            ["南丁格尔","t"],
            ["u","u"],
            ["丽薇歌塔","v"],
            ["瓦罗斯","w"],
            ["x","x"],
            ["y","y"],
            ["z","z"]
        ],
        "default": "a"
    },
    "Bench_Cmd_List": {
        "type": "field_dropdown",
        "options": [
            ["恢复HP","cure_hp"],
            ["修补衣服（有音效）","cure_cloth"],
            ["MP恢复🏠","cure_mp"],
            ["抚慰自己","cure_ep"],
            ["清空已吃下的食物","empty_stomach"],
            ["将卵排出（需开健全）","cure_egged"],
            ["修补衣服＋清洗身体","shower_clean_cure_cloth"],
            ["修补衣服（不清洗）","shower_cure_cloth"],
            ["清洗身体","shower_clean"],
            ["淋浴","shower"],
            ["小便（会清空食物效果）","pee_excrete"],
            ["把卵排出","restroom_cure_egged"],
            ["小便","pee"]
        ],
        "default": "cure_hp"
    },
    "Beto_List": {
        "type": "field_dropdown",
        "options": [
            ["Absorbed","Absorbed"],
            ["Worm","Worm"],
            ["Sperm","Sperm"],
            ["BigBite","BigBite"],
            ["Mud","Mud"],
            ["Sperm2","Sperm2"],
            ["EggLay","EggLay"],
            ["Vore","Vore"],
            ["Ydrg","Ydrg"],
            ["Ground","Ground"],
            ["GroundHard","GroundHard"],
            ["Blood","Blood"],
            ["Lava","Lava"],
            ["Thunder","Thunder"],
            ["Grab","Grab"],
            ["SLASH","SLASH"],
            ["TORNADO","TORNADO"],
            ["DarkTornado","DarkTornado"],
            ["FREEZE","FREEZE"],
            ["DigestLiquid","DigestLiquid"],
            ["Normal","Normal"],
            ["NormalS","NormalS"],
            ["STONE_WHOLE","STONE_WHOLE"],
            ["WEB_TRAPPED","WEB_TRAPPED"]
        ],
        "default": "Absorbed"
    },
    "Bgm_List": {
        "type": "field_dropdown",
        "options": [
            ["村子名为（未实装）","muranonamaeha"],
            ["标题（格拉提亚）","title"],
            ["刮风","wind"],
            ["蓝色祠堂","degree45"],
            ["初遇史莱姆","herghost"],
            ["编织者之森（普通）","forest"],
            ["编织者之森（战斗）","forest Battle"],
            ["魔女杂货店（昼）","cornehl"],
            ["魔女杂货店（夜）","cornehl_night"],
            ["伊夏（昼）","ixia"],
            ["伊夏（夜）","ixia_night"],
            ["伊夏（被抓）","ixia_battle"],
            ["伊夏（被救）","ixia_battle Ixia_Battle"],
            ["丽薇歌塔姐姐","popsup"],
            ["提尔德哥哥","tilde"],
            ["德尔菲尼父亲","town4"],
            ["普莉姆拉老师","primula"],
            ["爱丽丝梦游仙境","tuuzyou"],
            ["虫鸣","suzumusi"],
            ["夏丝塔祖母","light"],
            ["护盾与闪避教学","luminous_particle"],
            ["睡个好觉（不循环）","inn"],
            ["烹饪教学","valentine"],
            ["休息室准备","tokimeki"],
            ["休息室成功","yatto_deaeta"],
            ["休息室失败","bukiyou_na_hutari"],
            ["南丁格尔","shopping"],
            ["染华EGG","taihai"],
            ["咖啡师","sinwa"],
            ["木偶复仇战","dungeon3"],
            ["水下","underwater"],
            ["战败CG","fatal_huon"],
            ["阿尔玛同学","sohunosyosai"],
            ["奥斯托利亚","hunter_minarai"],
            ["蛊惑之沼","yocho"],
            ["爆破现场","madhatter"],
            ["习得圣光爆发","killing"],
            ["森之领主","battle_nusi"],
            ["梅法队长","morinokioku"],
            ["猜拳准备","ChipBattle"],
            ["猜拳一阶段","dojogame0"],
            ["猜拳二阶段","dojogame1"],
            ["猜拳三阶段","dojogame2"],
            ["猜拳失败","dojo_loseb"],
            ["牧场挤奶","sakura_skip"],
            ["三月兔酒吧","town2"],
            ["美术馆","houkago_no_hitotoki"],
            ["贝尔米特学园","school"],
            ["四子棋","mgm_ttr"],
            ["和阿尔玛上课","piano_no_kakera"],
            ["食堂的嘈杂","gaya_school_1"],
            ["武器库潜行","c_sign"],
            ["武器库搜身","A_suspicion"],
            ["蒂格蕾娜学姐","tigrina"],
            ["全息投影模拟战","tigrina Tigrina_Battle"],
            ["水球教学","tyousa_dbd_file_no3"],
            ["水球比赛","oosoudou"],
            ["魔族入侵警报","sailen_2week"],
            ["学姐的恳求","strigiformes"],
            ["保卫战在即","gaya_106"],
            ["校园保卫战","towerdefence"],
            ["初遇幽灵（不循环）","nusi_meet_ghost"]
        ],
        "default": "muranonamaeha"
    },
    "Cane_List": {
        "type": "field_dropdown",
        "options": [
            ["初始法杖","default"],
            ["贝尔米特","bermit"],
            ["贝尔米特・改","bermit2"],
            ["战锤","hammer"],
            ["天马","sleipner"],
            ["独占者","monopolizer"]
        ],
        "default": "default"
    },
    "ChoiceFlag_List": {
        "type": "field_dropdown",
        "options": [
            ["无",""],
            ["禁止悬停和选中","S"],
            ["允许悬停禁止选中","s"],
            ["按取消键选中","C"],
            ["初始悬停位置","D"],
            ["初始悬停＋取消键选中","CD"]
        ],
        "default": ""
    },
    "Color_List": {
        "type": "field_dropdown",
        "options": [
            ["红","RED"],
            ["黑","BLACK"],
            ["黄","YELLOW"],
            ["绿","GREEN"],
            ["蓝","SKY"],
            ["紫","PURPLE"],
            ["灰","DARK"],
            ["白","WHITE"],
            ["无","0x00000000"]
        ],
        "default": "RED"
    },
    "Enemy_List": {
        "type": "field_dropdown",
        "options": [
            ["洒出母乳","_MILK"],
            ["失禁漏尿","_PEE"],
            ["自慰高潮","MASTURBATE"],
            ["催淫光束","BEAM"],
            ["森之领主","BOSS_NUSI"],
            ["奶牛","COW"],
            ["染华 EGG","EGGREMOVE"],
            ["巢厄","EHOME"],
            ["妖狐","FOX"],
            ["沼蛙","FROG"],
            ["沼蛙吞食","FROG_VORE"],
            ["壁虎","GECKO"],
            ["木偶","GOLEM"],
            ["光束发射台","GOLEMTOY_BOW"],
            ["木马","GOLEMTOY_MKB"],
            ["导弹发射架","GOLEMTOY_POD"],
            ["杂波干扰器","GOLEMTOY_RM"],
            ["木偶(静止)","GOLEM_0_NM"],
            ["巨人","GOLEM_OD"],
            ["巨人","GOLEM_OD2"],
            ["蜂巢","HONEYCOMB"],
            ["愚者","MAGE"],
            ["机甲木偶","MECHGOLEM"],
            ["三角木马","MKB"],
            ["蘑菇","MUSH"],
            ["敌人","OTHER"],
            ["五足","PENTAPOD"],
            ["野猪","PIG"],
            ["幼犬","PUPPY"],
            ["酒壶","RAMDA"],
            ["触须怪","ROAPER"],
            ["史莱姆","SLIME"],
            ["催淫气体","SMOKE"],
            ["土蛇","SNAKE"],
            ["海绵","SPONGE"],
            ["泡泡","SYABON"],
            ["触手","TENTACLE"],
            ["剑山","UNI"],
            ["虫群","WORMS"]
        ],
        "default": "_MILK"
    },
    "Enhancer_List": {
        "type": "field_dropdown",
        "options": [
            ["血之虹瞳","Enhancer_hp_eye"],
            ["抓地鞋","Enhancer_cliff_stopper"],
            ["超载咏唱","Enhancer_overspell"],
            ["长法杖","Enhancer_long_reach"],
            ["猫之缓降","Enhancer_falling_cat"],
            ["双重闪避","Enhancer_double_evade"],
            ["盗垒滑步","Enhancer_sway_sliding"],
            ["祈雨御守","Enhancer_raincaller"],
            ["恐高症","Enhancer_shield_cat"],
            ["藏巧守拙","Enhancer_singletask"],
            ["濡湿预兆","Enhancer_juice_server"],
            ["体术心得","Enhancer_anchor"],
            ["磁性之心","Enhancer_secure_absorb"],
            ["灵魂吞噬者","Enhancer_soul_eater"]
        ],
        "default": "Enhancer_hp_eye"
    },
    "Gacha_List": {
        "type": "field_dropdown",
        "options": [
            ["单键连击","REP"],
            ["高潮后起身","REP_AFTER_ORGASM"],
            ["单键长按","HOLD"],
            ["多键序列","SEQUENCE"],
            ["憋尿单摆","PENDULUM"],
            ["自慰单摆","PENDULUM_ONNIE"]
        ],
        "default": "REP"
    },
    "Getitem_List": {
        "type": "field_dropdown",
        "options": [
            ["常规","GETITEM"],
            ["静默","GETITEM_NOANNOUNCE"],
            ["弹窗","GETITEM_BOX"],
            ["补液（慎用）","GETITEM_SUPPLIER"]
        ],
        "default": "GETITEM"
    },
    "Grade_List": {
        "type": "field_dropdown",
        "options": [
            ["☆☆☆☆☆","-1"],
            ["★☆☆☆☆","0"],
            ["★★☆☆☆","1"],
            ["★★★☆☆","2"],
            ["★★★★☆","3"],
            ["★★★★★","4"]
        ],
        "default": "-1"
    },
    "Greeting_List": {
        "type": "field_dropdown",
        "options": [
            ["左(L)","L"],
            ["右(R)","R"],
            ["自动(@)","@"]
        ],
        "default": "L"
    },
    "HkdsBounds_List": {
        "type": "field_dropdown",
        "options": [
            ["重置","''"],
            ["不变","'='"],
            ["NORMAL","NORMAL"],
            ["TT","TT"],
            ["WIDE","WIDE"],
            ["WIDE_TT","WIDE_TT"],
            ["WIDE_TT3","WIDE_TT3"],
            ["TT3","TT3"],
            ["MONOLOGUE","MONOLOGUE"],
            ["ONELINE","ONELINE"],
            ["_OFFLINE","_OFFLINE"]
        ],
        "default": "''"
    },
    "Horizontal_List": {
        "type": "field_dropdown",
        "options": [
            ["LL","LL"],
            ["L","L"],
            ["CL","CL"],
            ["CCL","CCL"],
            ["C","C"],
            ["CCR","CCR"],
            ["CR","CR"],
            ["R","R"],
            ["RR","RR"]
        ],
        "default": "LL"
    },
    "Vertical_List": {
        "type": "field_dropdown",
        "options": [
            ["上(T)","T"],
            ["中",""],
            ["下(B)","B"]
        ],
        "default": "T"
    },
    "Icon_List": {
        "type": "field_dropdown",
        "options": [
            ["IconAlice","IconAlice"],
            ["IconAlma","IconAlma"],
            ["IconAlma_2","IconAlma_2"],
            ["IconBarten","IconBarten"],
            ["IconDelfini","IconDelfini"],
            ["IconGolem","IconGolem"],
            ["IconIxia","IconIxia"],
            ["IconIxia_2","IconIxia_2"],
            ["IconIxia_3","IconIxia_3"],
            ["IconIxiaCry","IconIxiaCry"],
            ["IconLaevi","IconLaevi"],
            ["IconLaeviLaugh","IconLaeviLaugh"],
            ["IconMepha","IconMepha"],
            ["IconMob","IconMob"],
            ["IconMush","IconMush"],
            ["IconMushContaminated","IconMushContaminated"],
            ["IconNightingale","IconNightingale"],
            ["IconNightingale_2","IconNightingale_2"],
            ["IconNightingaleHappy","IconNightingaleHappy"],
            ["IconNoel0","IconNoel0"],
            ["IconNoel0_2","IconNoel0_2"],
            ["IconNoel0_3","IconNoel0_3"],
            ["IconNoel1","IconNoel1"],
            ["IconNoelDizzy","IconNoelDizzy"],
            ["IconOstrea","IconOstrea"],
            ["IconPrimula","IconPrimula"],
            ["IconTilde","IconTilde"],
            ["IconTildeSigh","IconTildeSigh"],
            ["IconTigrina","IconTigrina"],
            ["IconTigrina_2","IconTigrina_2"],
            ["IconTigrinaHappy","IconTigrinaHappy"],
            ["IconWalross","IconWalross"]
        ],
        "default": "IconAlice"
    },
    "If_List": {
        "type": "field_dropdown",
        "options": [
            ["IF","IF"],
            ["IFDEF","IFDEF"],
            ["IFNDEF","IFNDEF"],
            ["IFSTR","IFSTR"],
            ["IFLANG","IFLANG"]
        ],
        "default": "IF"
    },
    "IfElse_List": {
        "type": "field_dropdown",
        "options": [
            ["IF","IF"],
            ["IFDEF","IFDEF"],
            ["IFNDEF","IFNDEF"],
            ["IFSTR","IFSTR"],
            ["IFLANG","IFLANG"],
            ["ELSIF","ELSIF"],
            ["ELSIFDEF","ELSIFDEF"],
            ["ELSIFNDEF","ELSIFNDEF"],
            ["ELSIFSTR","ELSIFSTR"],
            ["ELSIFLANG","ELSIFLANG"]
        ],
        "default": "IF"
    },
    "Ifstr_List": {
        "type": "field_dropdown",
        "options": [
            ["等于","IS"],
            ["不等于","ISNOT"],
            ["包含于","ISIN"],
            ["不包含于","ISNOTIN"],
            ["开头是","STARTS"],
            ["开头不是","NOTSTARTS"],
            ["结尾是","ENDS"],
            ["结尾不是","NOTENDS"],
            ["包含","CONTAINS"],
            ["不包含","NOTCONTAINS"]
        ],
        "default": "IS"
    },
    "Item_List": {
        "type": "field_dropdown",
        "options": [
            ["清水","mtr_water0"],
            ["酿精","mtr_actihol"],
            ["生命瓶","mtr_bottle_life0"],
            ["精灵乳","mtr_elf_milk"],
            ["魔虫蜜汁","mtr_honey"],
            ["牧场纯牛奶","mtr_milk"],
            ["诺艾儿汁","mtr_noel_juice0"],
            ["诺艾儿乳","mtr_noel_milk"],
            ["诺艾儿的卵","mtr_noel_egg"],
            ["恩惠的生命之符","anc_mp0"],
            ["魔力滤芯","bst_hvn_filter"],
            ["贝尔米特制式法杖","cane_bermit"],
            ["贝尔米特制式法杖・改","cane_bermit2"],
            ["初学者法杖","cane_default"],
            ["魔法战锤","cane_hammer"],
            ["独占者・节制","cane_monopolizer"],
            ["斯莱普尼尔・天马","cane_sleipner"],
            ["虹吸壶使用券","coffeemaker_ticket"],
            ["儿童用烹饪锅","cooking_pan"],
            ["强化插槽","enhancer_slot"],
            ["血苹果","fruit_apple0"],
            ["香蕉","fruit_banana"],
            ["血樱桃","fruit_cherry0"],
            ["禁忌的苹果","fruit_epdmg_apple0"],
            ["葡萄","fruit_grape"],
            ["猕猴桃","fruit_kiwi"],
            ["柠檬","fruit_lemon"],
            ["桃子","fruit_peach"],
            ["血菠萝","fruit_pine0"],
            ["李子","fruit_plum"],
            ["活力软糖","gummy_hp0"],
            ["魔力软糖","gummy_mp0"],
            ["便当盒","lunchbox"],
            ["紫水晶","mtr_amethyst0"],
            ["罗勒","mtr_basil"],
            ["豌豆","mtr_bean"],
            ["魔族的皮肤","mtr_beast_skin0"],
            ["甜菜","mtr_beets"],
            ["黑纹药草","mtr_black_harb0"],
            ["空瓶子","mtr_bottle0"],
            ["西兰花","mtr_broccoli"],
            ["牛蒡","mtr_burdock"],
            ["卷心菜","mtr_cabbage"],
            ["可可豆","mtr_cacao"],
            ["胡萝卜","mtr_carrot"],
            ["芹菜","mtr_celery"],
            ["洋甘菊","mtr_chamomile"],
            ["铬矿","mtr_chrom0"],
            ["煤炭","mtr_coal0"],
            ["咖啡豆","mtr_coffee"],
            ["铜矿","mtr_copper"],
            ["玉米","mtr_corn"],
            ["黄瓜","mtr_cucumber"],
            ["小瓶香料","mtr_curry"],
            ["大吉岭","mtr_darjeeling"],
            ["家禽蛋","mtr_egg"],
            ["电路板","mtr_elecboard"],
            ["精灵的卵","mtr_elf_egg"],
            ["黑暗精华","mtr_essence0"],
            ["扭动的壁虎尾","mtr_essence_gecko"],
            ["木偶的右手","mtr_essence_golem"],
            ["黑棉孢子","mtr_essence_mush"],
            ["五足索","mtr_essence_pentapod"],
            ["野猪牙","mtr_essence_pig"],
            ["黏腻触须","mtr_essence_roaper"],
            ["史莱姆的假卵","mtr_essence_slime"],
            ["蛇皮","mtr_essence_snake"],
            ["海绵的球壳","mtr_essence_sponge"],
            ["剑山的刺","mtr_essence_uni"],
            ["大蒜","mtr_garlic"],
            ["爬行动物皮肤","mtr_gecko_skin0"],
            ["玻璃碎片","mtr_glass0"],
            ["金矿","mtr_gold"],
            ["青椒","mtr_green_pepper"],
            ["瓜拿纳","mtr_guarana"],
            ["铁矿","mtr_iron0"],
            ["凝胶","mtr_jelly0"],
            ["柠檬香茅","mtr_lemongrass"],
            ["生菜","mtr_lettuce"],
            ["铃兰球茎","mtr_lily_bulb0"],
            ["禽类的肉","mtr_meat_chicken0"],
            ["魔族的肉","mtr_meat_demon0"],
            ["摩根石","mtr_morganite"],
            ["蘑菇","mtr_mush"],
            ["斑点蘑菇","mtr_mush2"],
            ["猫硅石","mtr_nekoite"],
            ["硝石","mtr_nitre"],
            ["洋葱","mtr_onion"],
            ["魔族的肝脏","mtr_organ0"],
            ["甜椒","mtr_paprika"],
            ["玫瑰天竺葵","mtr_pelargonium"],
            ["胡椒","mtr_pepper"],
            ["辣薄荷","mtr_peppermint"],
            ["木天蓼","mtr_polygama"],
            ["马铃薯","mtr_potato"],
            ["南瓜","mtr_pumpkin"],
            ["石英","mtr_quartz0"],
            ["红绿柱石","mtr_redberyl"],
            ["稻米","mtr_rice"],
            ["岩盐","mtr_rocksolt0"],
            ["迷迭香","mtr_rosemary"],
            ["庭园鼠尾草","mtr_sage"],
            ["蓝宝石","mtr_sapphire"],
            ["毒种子","mtr_seed0"],
            ["石头","mtr_stone"],
            ["硫磺","mtr_sulfur"],
            ["塔罗牌：愚者","mtr_tarot_fool"],
            ["番茄","mtr_tomato"],
            ["托帕石","mtr_topaz"],
            ["大头菜","mtr_turnip"],
            ["茄子","mtr_waterplant"],
            ["枯草","mtr_weed0"],
            ["小麦","mtr_wheat"],
            ["木材","mtr_wood"],
            ["锯末","mtr_woodchip"],
            ["商人的铃铛","nightingale_bell"],
            ["过充插槽","oc_slot"],
            ["兽人的炸弹","ostrea_bomb"],
            ["合金骨架","precious_bone_beast"],
            ["魔力磁计","precious_dangerous_meter"],
            ["取卵器","precious_egg_remover"],
            ["冒险者公会会员证","precious_guild_card"],
            ["存储卡","precious_memorychip"],
            ["旧式治疗师制服","precious_noel_cloth"],
            ["棉质内裤","precious_noel_shorts"],
            ["魔法设备特殊携带许可证","precious_testor_lisence"],
            ["炼金术图鉴","recipe_collection"],
            ["腐烂的食物","rotten_food"],
            ["替罪猫","scapecat"],
            ["背包扩容道具","special_inventory0"],
            ["不稳定的石块","special_suicide"],
            ["土制榴弹","throw_bomb"],
            ["闪光弹","throw_lightbomb "],
            ["魔力炸弹","throw_magicbomb"],
            ["目标追踪配件","throwattach_chaser"],
            ["火力增幅配件","throwattach_enpower"],
            ["投掷辅助配件","throwattach_long"],
            ["悬浮感应配件","throwattach_sensor"],
            ["粘性外壳配件","throwattach_suction"],
            ["陈旧的容器","timecapsule"],
            ["面包窑","tool_bread_oven"],
            ["酿造桶","tool_keg"],
            ["虹吸壶","tool_siphon"],
            ["锯木机","tool_woodchiper"],
            ["空瓶收纳槽","workbench_bottle"],
            ["背包扩容","workbench_capacity"]
        ],
        "default": "mtr_water0"
    },
    "Keyboard_List": {
        "type": "field_dropdown",
        "options": [
            ["前进","@"],
            ["下蹲","B"],
            ["向左","L"],
            ["向右","R"],
            ["上跳","T"],
            ["魔法","X"],
            ["攻击","Z"]
        ],
        "default": "@"
    },
    "Loop_List": {
        "type": "field_dropdown",
        "options": [
            ["while","while"],
            ["until","until"],
            ["dowhile","dowhile"],
            ["dountil","dountil"]
        ],
        "default": "while"
    },
    "Magic_List": {
        "type": "field_dropdown",
        "options": [
            ["纯白之箭","WHITEARROW"],
            ["地面炸弹","DROPBOMB"],
            ["聚能火球","FIREBALL"],
            ["圣光爆发","PR_BURST"],
            ["雷霆电击","THUNDERBOLT"],
            ["环链水阵","WATERSHARD"],
            ["引力黑洞","BLACKHOLE"],
            ["高能炸弹","POWERBOMB"]
        ],
        "default": "WHITEARROW"
    },
    "Manpu_List": {
        "type": "field_dropdown",
        "options": [
            ["无","''"],
            ["愤怒","ANG"],
            ["惊讶","AWK"],
            ["脸红","BLS"],
            ["蒸汽","BSM"],
            ["蓝竖线","DEP"],
            ["红叹号（不循环）","EXC"],
            ["叹问号（不循环）","EXQ"],
            ["一颗心","HEA"],
            ["三颗心","HEA2"],
            ["喘气","HOT"],
            ["灵光一闪（不循环）","KIR"],
            ["黄红牌","LAG"],
            ["灯泡（不循环）","LIG"],
            ["亮音符","ONP"],
            ["暗音符","ONP2"],
            ["晕头转向","PIY"],
            ["玉米粒","PLE"],
            ["开心","PLE2"],
            ["蓝问号","QUE"],
            ["黑螺旋","SMK"],
            ["白气泡","SWB"],
            ["一滴汗","SWT"],
            ["很多汗","SWT2"],
            ["无语","TTT"]
        ],
        "default": "''"
    },
    "Mghit_List": {
        "type": "field_dropdown",
        "options": [
            ["魔族","PR"],
            ["精灵","EN"],
            ["精灵和魔族","EN|PR"],
            ["魔族和精灵","PR|EN"]
        ],
        "default": "PR"
    },
    "Module_List": {
        "type": "field_dropdown",
        "options": [
            ["不返回","CHANGE_EVENT"],
            ["会返回","CHANGE_EVENT2"],
            ["宏指令","MODULE"]
        ],
        "default": "CHANGE_EVENT"
    },
    "Outfit_List": {
        "type": "field_dropdown",
        "options": [
            ["祖母的制服","NORMAL"],
            ["吊带睡裙","BABYDOLL"],
            ["道场训练服","DOJO"]
        ],
        "default": "NORMAL"
    },
    "PostEffect_List": {
        "type": "field_dropdown",
        "options": [
            ["HP_REDUCE","HP_REDUCE"],
            ["MP_REDUCE","MP_REDUCE"],
            ["MP_ABSORBED","MP_ABSORBED"],
            ["WHOLERIPPLE","WHOLERIPPLE"],
            ["FLASH","FLASH"],
            ["SUMMONER_ACTIVATE","SUMMONER_ACTIVATE"],
            ["LAYING_EGG","LAYING_EGG"],
            ["ENEMY_OVERDRIVE_APPEAR","ENEMY_OVERDRIVE_APPEAR"],
            ["MAGIC_DEVICE_ACTIVATE","MAGIC_DEVICE_ACTIVATE"],
            ["JAMMING","JAMMING"],
            ["GAS_APPLIED","GAS_APPLIED"],
            ["POST_BLOOM","POST_BLOOM"],
            ["IRISOUT","IRISOUT"],
            ["WORM_TRAPPED","WORM_TRAPPED"],
            ["THUNDER_TRAP","THUNDER_TRAP"],
            ["BURST","BURST"],
            ["SHOTGUN","SHOTGUN"],
            ["MAGICSELECT","MAGICSELECT"],
            ["STONEOVER","STONEOVER"],
            ["SEPIA","SEPIA"],
            ["GO_CLOSE_EYE","GO_CLOSE_EYE"],
            ["TS_SLOW","TS_SLOW"],
            ["ZOOM2","ZOOM2"],
            ["ZOOM2_EATEN","ZOOM2_EATEN"],
            ["HEARTBEAT","HEARTBEAT"],
            ["RAIN","RAIN"],
            ["CONFUSED_CAMERA","CONFUSED_CAMERA"],
            ["SND_VOLUME_REDUCE","SND_VOLUME_REDUCE"],
            ["M2D_VAR_0","M2D_VAR_0"],
            ["BGM_LOWER","BGM_LOWER"],
            ["BGM_WATER","BGM_WATER"],
            ["FINAL_ALPHA","FINAL_ALPHA"]
        ],
        "default": "HP_REDUCE"
    },
    "Quake_List": {
        "type": "field_dropdown",
        "options": [
            ["左右抖动","QU_SINH"],
            ["上下抖动","QU_SINV"],
            ["横竖抖动","QU_VIB"]
        ],
        "default": "QU_SINH"
    },
    "SPmove_List": {
        "type": "field_dropdown",
        "options": [
            ["静止","NONE"],
            ["半透明","ALP50"],
            ["HOP","HOP"],
            ["SCARY","SCARY"],
            ["FLY","FLY"],
            ["CAR","CAR"],
            ["SCARY2","SCARY2"],
            ["ANGER","ANGER"],
            ["LOVELY","LOVELY"],
            ["BLINK","BLINK"],
            ["JUMP","JUMP"],
            ["JUMPB","JUMPB"],
            ["WEEKHITL","WEEKHITL"],
            ["WEEKHITR","WEEKHITR"],
            ["SHAKE","SHAKE"],
            ["BLINK2","BLINK2"],
            ["DANCE","DANCE"],
            ["SIN_H","SIN_H"],
            ["SIN_V","SIN_V"],
            ["SIN_H2","SIN_H2"],
            ["SIN_V2","SIN_V2"],
            ["HANDSHAKE","HANDSHAKE"]
        ],
        "default": "NONE"
    },
    "Ser_List": {
        "type": "field_dropdown",
        "options": [
            ["燃烧","BURNED"],
            ["晕厥","BURST_TIRED"],
            ["服装损坏","CLT_BROKEN"],
            ["混乱","CONFUSE"],
            ["无法产卵","DO_NOT_LAY_EGG"],
            ["晕乎乎","DRUNK"],
            ["怀卵 Lv.2","EGGED"],
            ["禁止高潮","FORBIDDEN_ORGASM"],
            ["冻结","FROZEN"],
            ["欲火中烧","FRUSTRATED"],
            ["杂念","JAMMING"],
            ["产卵","LAYING_EGG"],
            ["母乳体质","MILKY"],
            ["枯竭","MP_REDUCE"],
            ["尿意","NEAR_PEE"],
            ["恍惚","ORGASM_AFTER"],
            ["高潮蓄积","ORGASM_STACK"],
            ["疲惫","OVERRUN_TIRED"],
            ["麻痹","PARALYSIS"],
            ["植物寄生","PARASITISED"],
            ["催淫","SEXERCISE"],
            ["羞耻","SHAMED"],
            ["羞耻（兴奋）","SHAMED_EP"],
            ["羞耻（魔力流失）","SHAMED_SPLIT"],
            ["羞耻（濡湿）","SHAMED_WET"],
            ["破盾","SHIELD_BREAK"],
            ["睡眠","SLEEP"],
            ["石化","STONE"],
            ["黏糊糊","WEB_TRAPPED"]
        ],
        "default": "BURNED"
    },
    "Skill_List": {
        "type": "field_dropdown",
        "options": [
            ["轻攻击","punch"],
            ["魔法霰弹","shotgun"],
            ["滑铲","sliding"],
            ["旋风斩击","wheel"],
            ["彗星俯冲","comet"],
            ["突进冲击","dashpunch"],
            ["凌空横斩","airpunch"],
            ["会心重击","smash"],
            ["羽翼护符","sp_bird"],
            ["护盾","guard"],
            ["闪避","evade"],
            ["受身术","ukemi"],
            ["护盾冲击","guard_bush"],
            ["环轨护盾","guard_lariat"],
            ["完美防御","justguard"],
            ["轮舞斩击","evade_dancing"],
            ["圣光爆发","burst"],
            ["埴轮人偶的护符","sp_difficulty0"],
            ["编织者之森的地图","sp_map_forest"],
            ["hp10_forest_0","hp10_forest_0"],
            ["hp10_forest_ct","hp10_forest_ct"],
            ["hp10_forest_ruin_hall","hp10_forest_ruin_hall"],
            ["hp20_forest_senzyo_rt","hp20_forest_senzyo_rt"],
            ["hp20_forest_wood_extender","hp20_forest_wood_extender"],
            ["hp20_store_0","hp20_store_0"],
            ["mp10_forest_0","mp10_forest_0"],
            ["mp20_store_0","mp20_store_0"],
            ["mp20_forest_lava_secret","mp20_forest_lava_secret"],
            ["mp20_forest_athletic_ladder","mp20_forest_athletic_ladder"]
        ],
        "default": "punch"
    },
    "Store_List": {
        "type": "field_dropdown",
        "options": [
            ["魔女杂货店","Laevi"],
            ["酒吧贮藏室","BarUnder"],
            ["三月兔酒吧","city_bar"],
            ["免费喝一杯","city_bar_t02"],
            ["现烤麦面包","city_bread"],
            ["虎莲咖啡厅","city_cafe"],
            ["公会干粮店","city_guild"],
            ["天空便利店","city_hvn"],
            ["卖蛋的精灵","city_slam_egg"],
            ["矿石路边摊","city_stone"],
            ["新鲜果蔬摊","city_vegi"],
            ["香草咖啡师","CoffeeMaker"],
            ["商人小姐姐","Night"],
            ["木偶采购员","Puppet"],
            ["校园小卖部","scl_koubai"]
        ],
        "default": "Laevi"
    },
    "Talker_List": {
        "type": "field_dropdown",
        "options": [
            ["重置","''"],
            ["不变","'='"],
            ["爱丽丝","Alice"],
            ["酒保","Barten"],
            ["咖啡师","CoffeeMaker"],
            ["提尔德・柯涅尔","Tilde"],
            ["木偶型魔族","EnemyPuppet"],
            ["德尔菲尼・柯涅尔","NoelDad"],
            ["梅法・格里亚德","Mepha"],
            ["法杖","Cane"],
            ["伊夏・波利斯塔切尔","Ixia"],
            ["伊夏的法杖","IxiaCane"],
            ["诺艾儿的法杖","NoelCane"],
            ["阿尔玛・奥普菲帕姆","Alma"],
            ["＊","Mob"],
            ["诺艾儿・柯涅尔","Noel"],
            ["奥斯托利亚","Ostrea"],
            ["普莉姆拉","Primula"],
            ["老师","teacher"],
            ["工程师","engineer"],
            ["蒂格蕾娜・索菈","Tigrina"],
            ["南丁格尔","Nightingale"],
            ["？？？","Unknown"],
            ["丽薇歌塔・柯涅尔","Laevi"],
            ["瓦罗斯","Walross"],
            ["精灵女性","elf_woman"],
            ["精灵男性","elf_man"],
            ["精灵学生","elf_student"]
        ],
        "default": "''"
    },
    "PrinterSound_List": {
        "type": "field_dropdown",
        "options": [
            ["重置",""],
            ["静音","''"],
            ["不变","'='"],
            ["爱丽丝","talk_alice"],
            ["阿尔玛","talk_alma"],
            ["酒保","talk_barten"],
            ["法杖","talk_cane"],
            ["魔族","talk_demon"],
            ["卫兵","talk_guard"],
            ["伊夏","talk_ixia"],
            ["丽薇歌塔","talk_levi"],
            ["丽薇歌塔（未使用）","talk_levi2"],
            ["普莉姆拉","talk_m1"],
            ["瓦罗斯","talk_mob_m1"],
            ["奥斯托利亚","talk_mob_m2"],
            ["梅法","talk_mob_w3"],
            ["梅法（通信）","talk_mob_w3_noise"],
            ["南丁格尔","talk_nightingale"],
            ["德尔菲尼","talk_nodad"],
            ["诺艾儿","talk_noel"],
            ["蒂格蕾娜","talk_soala"],
            ["蒂格蕾娜（未使用）","talk_tigrina"],
            ["提尔德","talk_tilde"]
        ],
        "default": ""
    },
    "Tfade_List": {
        "type": "field_dropdown",
        "options": [
            ["同时整齐","WHOLE"],
            ["错落有致","DISSOLVE"],
            ["➡","L2R"],
            ["⬇","T2B"],
            ["⬅","R2L"],
            ["⬆","B2T"],
            ["↘","LT2RB"],
            ["↙","TR2BL"],
            ["↗","BL2TR"],
            ["↖","RB2LT"],
            ["⇅展开","EYE_OPEN"],
            ["⇵闭合","EYE_CLOSE"],
            ["⇆展开","DOOR_OPEN"],
            ["⇄闭合","DOOR_CLOSE"],
            ["↗↙闭合","NANAMEDOOR_LT_RB"],
            ["↘↖闭合","NANAMEDOOR_TR_BL"],
            ["向外扩散","EXPAND"],
            ["向内收拢","CONTRACT"],
            ["＞","ARROW_L"],
            ["∨","ARROW_T"],
            ["＜","ARROW_R"],
            ["∧","ARROW_B"]
        ],
        "default": "WHOLE"
    },
    "TitleCall_List": {
        "type": "field_dropdown",
        "options": [
            ["无",""],
            ["带下划线","1"],
            ["不自动消失","BOOK_TITLE"]
        ],
        "default": ""
    },
    "TutoPos_List": {
        "type": "field_dropdown",
        "options": [
            ["↖","L T"],
            ["⬅","L M"],
            ["↙","L B"],
            ["⬆","C T"],
            ["⊙","C M"],
            ["⬇","C B"],
            ["↗","R T"],
            ["➡","R M"],
            ["↘","R B"]
        ],
        "default": "L T"
    },
    "Voice_List": {
        "type": "field_dropdown",
        "options": [
            ["el01（未实装）","el01"],
            ["must_ss（未实装）","must_ss"],
            ["orgasm_ng（未实装）","orgasm_ng"],
            ["after_orgasm","after_orgasm"],
            ["after_pee","after_pee"],
            ["arrest","arrest"],
            ["awk","awk"],
            ["awkx","awkx"],
            ["breath_aft","breath_aft"],
            ["breath_down","breath_down"],
            ["breath_e","breath_e"],
            ["breath_sleep","breath_sleep"],
            ["cough","cough"],
            ["death","death"],
            ["dmgl","dmgl"],
            ["dmgs","dmgs"],
            ["dmgx","dmgx"],
            ["dmgx_eggremove","dmgx_eggremove"],
            ["dmg_elec","dmg_elec"],
            ["ehard","ehard"],
            ["el","el"],
            ["es","es"],
            ["ev_auu","ev_auu"],
            ["ev_awk","ev_awk"],
            ["ev_hitl","ev_hitl"],
            ["ev_hit_ground","ev_hit_ground"],
            ["feared","feared"],
            ["gaman","gaman"],
            ["heat","heat"],
            ["laying_l","laying_l"],
            ["laying_s","laying_s"],
            ["mouth","mouth"],
            ["mouthl","mouthl"],
            ["mouth_fin","mouth_fin"],
            ["mouth_split","mouth_split"],
            ["mouth_wk","mouth_wk"],
            ["must","must"],
            ["mustl","mustl"],
            ["mustll","mustll"],
            ["must_come","must_come"],
            ["must_come_fatal","must_come_fatal"],
            ["must_mouth","must_mouth"],
            ["must_orgasm","must_orgasm"],
            ["near_orgasm","near_orgasm"],
            ["near_orgasm_iku","near_orgasm_iku"],
            ["orgasm","orgasm"],
            ["orgasm_iku","orgasm_iku"],
            ["shield_break","shield_break"],
            ["sleep_init","sleep_init"],
            ["split","split"],
            ["split_manual","split_manual"],
            ["sxx_awk","sxx_awk"],
            ["sxx_feared","sxx_feared"],
            ["sxx_mouth","sxx_mouth"],
            ["water_choked","water_choked"],
            ["water_choked_release_a","water_choked_release_a"],
            ["water_choked_release_b","water_choked_release_b"]
        ],
        "default": "el01"
    },
    "WaitFn_List": {
        "type": "field_dropdown",
        "options": [
            ["ITEMDESC","ITEMDESC"],
            ["MAP_TRANSFER","MAP_TRANSFER"],
            ["MGFARM","MGFARM"],
            ["NIGHTCON","NIGHTCON"],
            ["NM2D_GAMEOVER","NM2D_GAMEOVER"],
            ["PXL_LOAD ","PXL_LOAD "],
            ["REELMNG","REELMNG"],
            ["UIGM_ACTIVATE","UIGM_ACTIVATE"]
        ],
        "default": "ITEMDESC"
    },
    "Xxxskill_List": {
        "type": "field_dropdown",
        "options": [
            ["习得","GETSKILL"],
            ["静默习得","GETSKILL_NOANNOUNCE"],
            ["启用","ENABLESKILL"],
            ["禁用","DISABLESKILL"],
            ["失去","REMSKILL"]
        ],
        "default": "GETSKILL"
    }
});


// 所有方块的实际内容
Object.assign(AicBlocks,{
    "entrance": {
        "type": "statement",
        "json": {
            "type": "entrance",
            "message0": "事件ID %1 对话是否单独导出 %2 %3 %4",
            "args0": [
                Object.assign({},AicBlocks.String,{
                    "name": "String_0",
                    "text": "test"
                }),
                Object.assign({},AicBlocks.Bool,{
                    "name": "Bool_0",
                    "checked": false
                }),
                {
                    "type": "input_dummy"
                },
                {
                    "type": "input_statement",
                    "name": "statement_0",
                    "check": AicBlocks.statement
                }
            ],
            "tooltip": "这是入口积木，必须存在且唯一。",
            "helpUrl": "",
            "colour": 260
        },
        "generFunc": function(block) {
            var String_0 = block.getFieldValue('String_0');
            if (String_0==='') {
                throw new OmitedError(block,'String_0','entrance');
            }
            String_0 = AicFunctions.pre('String')(String_0,block,'String_0','entrance');
            var Bool_0 = block.getFieldValue('Bool_0') === 'TRUE';
            Bool_0 = AicFunctions.pre('Bool')(Bool_0,block,'Bool_0','entrance');
            var statement_0 = Blockly.JavaScript.statementToCode(block, 'statement_0');
            var code = AicFunctions.defaultCode('entrance',eval('['+AicBlocks['entrance'].args.join(',')+']'),block);
            return code;
        },
        "args": ["String_0","Bool_0","statement_0"],
        "argsType": ["field","field","statement"],
        "argsGrammarName": ["String","Bool","statement"],
        "omitted": [false,false,true],
        "multi": [false,false,true],
        "fieldDefault": function (keyOrIndex) {
            return AicFunctions.fieldDefault('entrance',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return AicFunctions.xmlText('entrance',inputs,next,isShadow,comment,attribute);
        }
    },
    "msg": {
        "type": "statement",
        "json": {
            "type": "msg",
            "message0": "对话： 角色 %1 额外参数 %2 %3 %4",
            "args0": [
                Object.assign({},AicBlocks.Alphabet_List,{
                    "name": "char",
                    "default": "n"
                }),
                Object.assign({},AicBlocks.String,{
                    "name": "args",
                    "text": ""
                }),
                {
                    "type": "input_dummy"
                },
                Object.assign({},AicBlocks.String_Multi,{
                    "name": "text",
                    "text": "<c1>红<c2>橙<c3>黄<c4>绿<c5>蓝<c6>粉<c7>灰<c8>白"
                })
            ],
            "tooltip": "本指令的部分额外参数（如 K[书页位置]）只有在「对话单独导出」时才有效。",
            "helpUrl": "",
            "colour": 35,
            "previousStatement": "msg",
            "nextStatement": AicBlocks.statement
        },
        "generFunc": function(block) {
            var char = block.getFieldValue('char');
            char = AicFunctions.pre('Alphabet_List')(char,block,'char','msg');
            var args = block.getFieldValue('args');
            args = AicFunctions.pre('String')(args,block,'args','msg');
            var text = block.getFieldValue('text');
            if (text==='') {
                throw new OmitedError(block,'text','msg');
            }
            text = AicFunctions.pre('String_Multi')(text,block,'text','msg');
            var code = AicFunctions.defaultCode('msg',eval('['+AicBlocks['msg'].args.join(',')+']'),block);
            return code;
        },
        "args": ["char","args","text"],
        "argsType": ["field","field","field"],
        "argsGrammarName": ["Alphabet_List","String","String_Multi"],
        "omitted": [false,true,false],
        "multi": [false,false,false],
        "fieldDefault": function (keyOrIndex) {
            return AicFunctions.fieldDefault('msg',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return AicFunctions.xmlText('msg',inputs,next,isShadow,comment,attribute);
        }
    },
    "tx_board": {
        "type": "statement",
        "json": {
            "type": "tx_board",
            "message0": "留言板： 额外参数 %1 %2 %3",
            "args0": [
                Object.assign({},AicBlocks.String,{
                    "name": "args",
                    "text": ""
                }),
                {
                    "type": "input_dummy"
                },
                Object.assign({},AicBlocks.String_Multi,{
                    "name": "text",
                    "text": "→ 酸液巨树\n← 小恶魔之丘方向"
                })
            ],
            "tooltip": "本指令的额外参数只有在「对话单独导出」时才有效。",
            "helpUrl": "",
            "colour": 35,
            "previousStatement": "tx_board",
            "nextStatement": AicBlocks.statement
        },
        "generFunc": function(block) {
            var args = block.getFieldValue('args');
            args = AicFunctions.pre('String')(args,block,'args','tx_board');
            var text = block.getFieldValue('text');
            if (text==='') {
                throw new OmitedError(block,'text','tx_board');
            }
            text = AicFunctions.pre('String_Multi')(text,block,'text','tx_board');
            var code = AicFunctions.defaultCode('tx_board',eval('['+AicBlocks['tx_board'].args.join(',')+']'),block);
            return code;
        },
        "args": ["args","text"],
        "argsType": ["field","field"],
        "argsGrammarName": ["String","String_Multi"],
        "omitted": [true,false],
        "multi": [false,false],
        "fieldDefault": function (keyOrIndex) {
            return AicFunctions.fieldDefault('tx_board',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return AicFunctions.xmlText('tx_board',inputs,next,isShadow,comment,attribute);
        }
    },
    "talker": {
        "type": "statement",
        "json": {
            "type": "talker",
            "message0": "设置立绘位置： 角色 %1 水平位置 %2 竖直偏移 %3 额外参数 %4",
            "args0": [
                Object.assign({},AicBlocks.Alphabet_List,{
                    "name": "char",
                    "default": "n"
                }),
                Object.assign({},AicBlocks.Horizontal_List,{
                    "name": "x",
                    "default": "C"
                }),
                Object.assign({},AicBlocks.Vertical_List,{
                    "name": "y",
                    "default": ""
                }),
                Object.assign({},AicBlocks.String,{
                    "name": "args",
                    "text": ""
                })
            ],
            "inputsInline": true,
            "tooltip": "设置好位置后要用PIC原生指令（可从F7菜单的VP预览复制）才能真正显示立绘！",
            "helpUrl": "",
            "colour": 35,
            "previousStatement": "talker",
            "nextStatement": AicBlocks.statement
        },
        "generFunc": function(block) {
            var char = block.getFieldValue('char');
            char = AicFunctions.pre('Alphabet_List')(char,block,'char','talker');
            var x = block.getFieldValue('x');
            x = AicFunctions.pre('Horizontal_List')(x,block,'x','talker');
            var y = block.getFieldValue('y');
            y = AicFunctions.pre('Vertical_List')(y,block,'y','talker');
            var args = block.getFieldValue('args');
            args = AicFunctions.pre('String')(args,block,'args','talker');
            var code = AicFunctions.defaultCode('talker',eval('['+AicBlocks['talker'].args.join(',')+']'),block);
            return code;
        },
        "args": ["char","x","y","args"],
        "argsType": ["field","field","field","field"],
        "argsGrammarName": ["Alphabet_List","Horizontal_List","Vertical_List","String"],
        "omitted": [false,false,false,true],
        "multi": [false,false,false,false],
        "fieldDefault": function (keyOrIndex) {
            return AicFunctions.fieldDefault('talker',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return AicFunctions.xmlText('talker',inputs,next,isShadow,comment,attribute);
        }
    },
    "talker_replace": {
        "type": "statement",
        "json": {
            "type": "talker_replace",
            "message0": "绑定姓名音效： 角色 %1 姓名 Talker_ %2 打字机音效 %3",
            "args0": [
                Object.assign({},AicBlocks.Alphabet_List,{
                    "name": "arg1",
                    "default": "n"
                }),
                Object.assign({},AicBlocks.Talker_List,{
                    "name": "arg2",
                    "default": "'='"
                }),
                Object.assign({},AicBlocks.PrinterSound_List,{
                    "name": "arg3",
                    "default": "'='"
                })
            ],
            "inputsInline": true,
            "tooltip": "不在列表中的姓名和音效，可使用TALKER_REPLACE的原生指令。",
            "helpUrl": "",
            "colour": 35,
            "previousStatement": "talker_replace",
            "nextStatement": AicBlocks.statement
        },
        "generFunc": function(block) {
            var arg1 = block.getFieldValue('arg1');
            arg1 = AicFunctions.pre('Alphabet_List')(arg1,block,'arg1','talker_replace');
            var arg2 = block.getFieldValue('arg2');
            arg2 = AicFunctions.pre('Talker_List')(arg2,block,'arg2','talker_replace');
            var arg3 = block.getFieldValue('arg3');
            arg3 = AicFunctions.pre('PrinterSound_List')(arg3,block,'arg3','talker_replace');
            var code = AicFunctions.defaultCode('talker_replace',eval('['+AicBlocks['talker_replace'].args.join(',')+']'),block);
            return code;
        },
        "args": ["arg1","arg2","arg3"],
        "argsType": ["field","field","field"],
        "argsGrammarName": ["Alphabet_List","Talker_List","PrinterSound_List"],
        "omitted": [false,false,false],
        "multi": [false,false,false],
        "fieldDefault": function (keyOrIndex) {
            return AicFunctions.fieldDefault('talker_replace',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return AicFunctions.xmlText('talker_replace',inputs,next,isShadow,comment,attribute);
        }
    },
    "hkds": {
        "type": "statement",
        "json": {
            "type": "hkds",
            "message0": "设置对话框样式： 角色 %1 位置 %2 尖角指向 %3 样式 %4",
            "args0": [
                Object.assign({},AicBlocks.Alphabet_List,{
                    "name": "arg1",
                    "default": "n"
                }),
                Object.assign({},AicBlocks.String,{
                    "name": "arg2",
                    "text": "''"
                }),
                Object.assign({},AicBlocks.String,{
                    "name": "arg3",
                    "text": "''"
                }),
                Object.assign({},AicBlocks.HkdsBounds_List,{
                    "name": "arg4",
                    "default": "''"
                })
            ],
            "inputsInline": true,
            "tooltip": "本指令的各参数都可以是 '=' 或 '' 分别表示该项不变或重置。",
            "helpUrl": "",
            "colour": 35,
            "previousStatement": "hkds",
            "nextStatement": AicBlocks.statement
        },
        "generFunc": function(block) {
            var arg1 = block.getFieldValue('arg1');
            arg1 = AicFunctions.pre('Alphabet_List')(arg1,block,'arg1','hkds');
            var arg2 = block.getFieldValue('arg2');
            if (arg2==='') {
                throw new OmitedError(block,'arg2','hkds');
            }
            arg2 = AicFunctions.pre('String')(arg2,block,'arg2','hkds');
            var arg3 = block.getFieldValue('arg3');
            if (arg3==='') {
                throw new OmitedError(block,'arg3','hkds');
            }
            arg3 = AicFunctions.pre('String')(arg3,block,'arg3','hkds');
            var arg4 = block.getFieldValue('arg4');
            arg4 = AicFunctions.pre('HkdsBounds_List')(arg4,block,'arg4','hkds');
            var code = AicFunctions.defaultCode('hkds',eval('['+AicBlocks['hkds'].args.join(',')+']'),block);
            return code;
        },
        "args": ["arg1","arg2","arg3","arg4"],
        "argsType": ["field","field","field","field"],
        "argsGrammarName": ["Alphabet_List","String","String","HkdsBounds_List"],
        "omitted": [false,false,false,false],
        "multi": [false,false,false,false],
        "fieldDefault": function (keyOrIndex) {
            return AicFunctions.fieldDefault('hkds',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return AicFunctions.xmlText('hkds',inputs,next,isShadow,comment,attribute);
        }
    },
    "msg_prefix": {
        "type": "statement",
        "json": {
            "type": "msg_prefix",
            "message0": "对话公共前缀： 角色 %1 前缀 %2",
            "args0": [
                Object.assign({},AicBlocks.Alphabet_List,{
                    "name": "arg1",
                    "default": "n"
                }),
                Object.assign({},AicBlocks.String,{
                    "name": "arg2",
                    "text": ""
                })
            ],
            "inputsInline": true,
            "tooltip": "用来施加统一特效（如变色），如果对话本身为空，那前缀就是全部内容了，但不能换行。",
            "helpUrl": "",
            "colour": 35,
            "previousStatement": "msg_prefix",
            "nextStatement": AicBlocks.statement
        },
        "generFunc": function(block) {
            var arg1 = block.getFieldValue('arg1');
            arg1 = AicFunctions.pre('Alphabet_List')(arg1,block,'arg1','msg_prefix');
            var arg2 = block.getFieldValue('arg2');
            arg2 = AicFunctions.pre('String')(arg2,block,'arg2','msg_prefix');
            var code = AicFunctions.defaultCode('msg_prefix',eval('['+AicBlocks['msg_prefix'].args.join(',')+']'),block);
            return code;
        },
        "args": ["arg1","arg2"],
        "argsType": ["field","field"],
        "argsGrammarName": ["Alphabet_List","String"],
        "omitted": [false,true],
        "multi": [false,false],
        "fieldDefault": function (keyOrIndex) {
            return AicFunctions.fieldDefault('msg_prefix',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return AicFunctions.xmlText('msg_prefix',inputs,next,isShadow,comment,attribute);
        }
    },
    "tutorial": {
        "type": "statement",
        "json": {
            "type": "tutorial",
            "message0": "操作提示： 位置 %1 停留帧数 %2 %3 %4",
            "args0": [
                Object.assign({},AicBlocks.TutoPos_List,{
                    "name": "pos",
                    "default": "C B"
                }),
                Object.assign({},AicBlocks.String,{
                    "name": "frame",
                    "text": "180"
                }),
                {
                    "type": "input_dummy"
                },
                Object.assign({},AicBlocks.String_Multi,{
                    "name": "text",
                    "text": "Destination[&&Area_mount]"
                })
            ],
            "tooltip": "提示内容可以是任意字符串（换行的话效果会不好，且会有停留帧数失效的BUG），但这些首字母大写的词不要单独使用：Cancel Confirm Destination Disabled Eat Enabled GameStart Replay Reset Submit",
            "helpUrl": "",
            "colour": 35,
            "previousStatement": "tutorial",
            "nextStatement": AicBlocks.statement
        },
        "generFunc": function(block) {
            var pos = block.getFieldValue('pos');
            pos = AicFunctions.pre('TutoPos_List')(pos,block,'pos','tutorial');
            var frame = block.getFieldValue('frame');
            frame = AicFunctions.pre('String')(frame,block,'frame','tutorial');
            var text = block.getFieldValue('text');
            if (text==='') {
                throw new OmitedError(block,'text','tutorial');
            }
            text = AicFunctions.pre('String_Multi')(text,block,'text','tutorial');
            var code = AicFunctions.defaultCode('tutorial',eval('['+AicBlocks['tutorial'].args.join(',')+']'),block);
            return code;
        },
        "args": ["pos","frame","text"],
        "argsType": ["field","field","field"],
        "argsGrammarName": ["TutoPos_List","String","String_Multi"],
        "omitted": [false,true,false],
        "multi": [false,false,false],
        "fieldDefault": function (keyOrIndex) {
            return AicFunctions.fieldDefault('tutorial',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return AicFunctions.xmlText('tutorial',inputs,next,isShadow,comment,attribute);
        }
    },
    "titlecall": {
        "type": "statement",
        "json": {
            "type": "titlecall",
            "message0": "显示字幕： 词条 %1 字号 %2 额外设置 %3 右移 %4 上移 %5",
            "args0": [
                Object.assign({},AicBlocks.String,{
                    "name": "arg1",
                    "text": "GM_error_sacred"
                }),
                Object.assign({},AicBlocks.String,{
                    "name": "arg2",
                    "text": "32"
                }),
                Object.assign({},AicBlocks.TitleCall_List,{
                    "name": "arg3",
                    "default": ""
                }),
                Object.assign({},AicBlocks.String,{
                    "name": "x",
                    "text": "0"
                }),
                Object.assign({},AicBlocks.String,{
                    "name": "y",
                    "text": "0"
                })
            ],
            "inputsInline": true,
            "tooltip": "词条名需要自行从localization誊抄，文本内容允许换行。如果设置了不自动消失（会锁定字号为32且带下划线），就要用原生指令TITLECALL_HIDE手动消失。",
            "helpUrl": "",
            "colour": 35,
            "previousStatement": "titlecall",
            "nextStatement": AicBlocks.statement
        },
        "generFunc": function(block) {
            var arg1 = block.getFieldValue('arg1');
            if (arg1==='') {
                throw new OmitedError(block,'arg1','titlecall');
            }
            arg1 = AicFunctions.pre('String')(arg1,block,'arg1','titlecall');
            var arg2 = block.getFieldValue('arg2');
            if (arg2==='') {
                throw new OmitedError(block,'arg2','titlecall');
            }
            arg2 = AicFunctions.pre('String')(arg2,block,'arg2','titlecall');
            var arg3 = block.getFieldValue('arg3');
            arg3 = AicFunctions.pre('TitleCall_List')(arg3,block,'arg3','titlecall');
            var x = block.getFieldValue('x');
            if (x==='') {
                throw new OmitedError(block,'x','titlecall');
            }
            x = AicFunctions.pre('String')(x,block,'x','titlecall');
            var y = block.getFieldValue('y');
            if (y==='') {
                throw new OmitedError(block,'y','titlecall');
            }
            y = AicFunctions.pre('String')(y,block,'y','titlecall');
            var code = AicFunctions.defaultCode('titlecall',eval('['+AicBlocks['titlecall'].args.join(',')+']'),block);
            return code;
        },
        "args": ["arg1","arg2","arg3","x","y"],
        "argsType": ["field","field","field","field","field"],
        "argsGrammarName": ["String","String","TitleCall_List","String","String"],
        "omitted": [false,false,false,false,false],
        "multi": [false,false,false,false,false],
        "fieldDefault": function (keyOrIndex) {
            return AicFunctions.fieldDefault('titlecall',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return AicFunctions.xmlText('titlecall',inputs,next,isShadow,comment,attribute);
        }
    },
    "uialert": {
        "type": "statement",
        "json": {
            "type": "uialert",
            "message0": "左下角弹出提示： 词条 %1 样式 %2",
            "args0": [
                Object.assign({},AicBlocks.String,{
                    "name": "arg1",
                    "text": "Alert_autosave"
                }),
                Object.assign({},AicBlocks.Alert_List,{
                    "name": "arg2",
                    "default": "ALERT"
                })
            ],
            "inputsInline": true,
            "tooltip": "词条名需要自行从localization誊抄，文本内容禁止换行。",
            "helpUrl": "",
            "colour": 35,
            "previousStatement": "uialert",
            "nextStatement": AicBlocks.statement
        },
        "generFunc": function(block) {
            var arg1 = block.getFieldValue('arg1');
            if (arg1==='') {
                throw new OmitedError(block,'arg1','uialert');
            }
            arg1 = AicFunctions.pre('String')(arg1,block,'arg1','uialert');
            var arg2 = block.getFieldValue('arg2');
            arg2 = AicFunctions.pre('Alert_List')(arg2,block,'arg2','uialert');
            var code = AicFunctions.defaultCode('uialert',eval('['+AicBlocks['uialert'].args.join(',')+']'),block);
            return code;
        },
        "args": ["arg1","arg2"],
        "argsType": ["field","field"],
        "argsGrammarName": ["String","Alert_List"],
        "omitted": [false,false],
        "multi": [false,false],
        "fieldDefault": function (keyOrIndex) {
            return AicFunctions.fieldDefault('uialert',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return AicFunctions.xmlText('uialert',inputs,next,isShadow,comment,attribute);
        }
    },
    "uialert_itemholdover": {
        "type": "statement",
        "json": {
            "type": "uialert_itemholdover",
            "message0": "物品超重提示： %1 品质 %2",
            "args0": [
                Object.assign({},AicBlocks.Item_List,{
                    "name": "arg1",
                    "default": "mtr_noel_juice0"
                }),
                Object.assign({},AicBlocks.Grade_List,{
                    "name": "arg2",
                    "default": "0"
                })
            ],
            "inputsInline": true,
            "tooltip": "提示身上带的东西太多了，装不下某物品，品质可用于给诺艾儿汁添加词缀。",
            "helpUrl": "",
            "colour": 35,
            "previousStatement": "uialert_itemholdover",
            "nextStatement": AicBlocks.statement
        },
        "generFunc": function(block) {
            var arg1 = block.getFieldValue('arg1');
            arg1 = AicFunctions.pre('Item_List')(arg1,block,'arg1','uialert_itemholdover');
            var arg2 = block.getFieldValue('arg2');
            arg2 = AicFunctions.pre('Grade_List')(arg2,block,'arg2','uialert_itemholdover');
            var code = AicFunctions.defaultCode('uialert_itemholdover',eval('['+AicBlocks['uialert_itemholdover'].args.join(',')+']'),block);
            return code;
        },
        "args": ["arg1","arg2"],
        "argsType": ["field","field"],
        "argsGrammarName": ["Item_List","Grade_List"],
        "omitted": [false,false],
        "multi": [false,false],
        "fieldDefault": function (keyOrIndex) {
            return AicFunctions.fieldDefault('uialert_itemholdover',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return AicFunctions.xmlText('uialert_itemholdover',inputs,next,isShadow,comment,attribute);
        }
    },
    "pic_b": {
        "type": "statement",
        "json": {
            "type": "pic_b",
            "message0": "带单色背景显示图片： 图层参数 %1 图片路径 %2 背景色 %3",
            "args0": [
                Object.assign({},AicBlocks.String,{
                    "name": "arg1",
                    "text": "#0"
                }),
                Object.assign({},AicBlocks.String,{
                    "name": "arg2",
                    "text": "scl_106/s106_00"
                }),
                Object.assign({},AicBlocks.Color_List,{
                    "name": "arg4",
                    "default": "DARK"
                })
            ],
            "inputsInline": true,
            "tooltip": "此法显示的图片不支持淡入淡出，无需背景的情况下建议用PIC原生指令。",
            "helpUrl": "",
            "colour": 80,
            "previousStatement": "pic_b",
            "nextStatement": AicBlocks.statement
        },
        "generFunc": function(block) {
            var arg1 = block.getFieldValue('arg1');
            if (arg1==='') {
                throw new OmitedError(block,'arg1','pic_b');
            }
            arg1 = AicFunctions.pre('String')(arg1,block,'arg1','pic_b');
            var arg2 = block.getFieldValue('arg2');
            if (arg2==='') {
                throw new OmitedError(block,'arg2','pic_b');
            }
            arg2 = AicFunctions.pre('String')(arg2,block,'arg2','pic_b');
            var arg4 = block.getFieldValue('arg4');
            arg4 = AicFunctions.pre('Color_List')(arg4,block,'arg4','pic_b');
            var code = AicFunctions.defaultCode('pic_b',eval('['+AicBlocks['pic_b'].args.join(',')+']'),block);
            return code;
        },
        "args": ["arg1","arg2","arg4"],
        "argsType": ["field","field","field"],
        "argsGrammarName": ["String","String","Color_List"],
        "omitted": [false,false,false],
        "multi": [false,false,false],
        "fieldDefault": function (keyOrIndex) {
            return AicFunctions.fieldDefault('pic_b',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return AicFunctions.xmlText('pic_b',inputs,next,isShadow,comment,attribute);
        }
    },
    "pic_silhouette": {
        "type": "statement",
        "json": {
            "type": "pic_silhouette",
            "message0": "显示剪影： 图层参数 %1 图片路径 %2 水平位置 %3 额外参数 %4",
            "args0": [
                Object.assign({},AicBlocks.String,{
                    "name": "arg1",
                    "text": "#0"
                }),
                Object.assign({},AicBlocks.String,{
                    "name": "arg2",
                    "text": "silhouette/mob_man2"
                }),
                Object.assign({},AicBlocks.Horizontal_List,{
                    "name": "arg3",
                    "default": "C"
                }),
                Object.assign({},AicBlocks.String,{
                    "name": "arg4",
                    "text": ""
                })
            ],
            "inputsInline": true,
            "tooltip": "用于显示mob_man2或mob_witchman这样的剪影（silhouette），额外参数填I可让剪影没有平移入画的过程。",
            "helpUrl": "",
            "colour": 80,
            "previousStatement": "pic_silhouette",
            "nextStatement": AicBlocks.statement
        },
        "generFunc": function(block) {
            var arg1 = block.getFieldValue('arg1');
            if (arg1==='') {
                throw new OmitedError(block,'arg1','pic_silhouette');
            }
            arg1 = AicFunctions.pre('String')(arg1,block,'arg1','pic_silhouette');
            var arg2 = block.getFieldValue('arg2');
            if (arg2==='') {
                throw new OmitedError(block,'arg2','pic_silhouette');
            }
            arg2 = AicFunctions.pre('String')(arg2,block,'arg2','pic_silhouette');
            var arg3 = block.getFieldValue('arg3');
            arg3 = AicFunctions.pre('Horizontal_List')(arg3,block,'arg3','pic_silhouette');
            var arg4 = block.getFieldValue('arg4');
            arg4 = AicFunctions.pre('String')(arg4,block,'arg4','pic_silhouette');
            var code = AicFunctions.defaultCode('pic_silhouette',eval('['+AicBlocks['pic_silhouette'].args.join(',')+']'),block);
            return code;
        },
        "args": ["arg1","arg2","arg3","arg4"],
        "argsType": ["field","field","field","field"],
        "argsGrammarName": ["String","String","Horizontal_List","String"],
        "omitted": [false,false,false,true],
        "multi": [false,false,false,false],
        "fieldDefault": function (keyOrIndex) {
            return AicFunctions.fieldDefault('pic_silhouette',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return AicFunctions.xmlText('pic_silhouette',inputs,next,isShadow,comment,attribute);
        }
    },
    "pic_mp": {
        "type": "statement",
        "json": {
            "type": "pic_mp",
            "message0": "立绘漫符： 角色 %1 漫符 %2 额外参数 %3",
            "args0": [
                Object.assign({},AicBlocks.Alphabet_List,{
                    "name": "arg1",
                    "default": "n"
                }),
                Object.assign({},AicBlocks.Manpu_List,{
                    "name": "arg2",
                    "default": "BLS"
                }),
                Object.assign({},AicBlocks.String,{
                    "name": "arg3",
                    "text": ""
                })
            ],
            "inputsInline": true,
            "tooltip": "如需多个漫符叠加，请使用原生指令PIC_MP并用竖线|分隔各个漫符。",
            "helpUrl": "",
            "colour": 80,
            "previousStatement": "pic_mp",
            "nextStatement": AicBlocks.statement
        },
        "generFunc": function(block) {
            var arg1 = block.getFieldValue('arg1');
            arg1 = AicFunctions.pre('Alphabet_List')(arg1,block,'arg1','pic_mp');
            var arg2 = block.getFieldValue('arg2');
            arg2 = AicFunctions.pre('Manpu_List')(arg2,block,'arg2','pic_mp');
            var arg3 = block.getFieldValue('arg3');
            arg3 = AicFunctions.pre('String')(arg3,block,'arg3','pic_mp');
            var code = AicFunctions.defaultCode('pic_mp',eval('['+AicBlocks['pic_mp'].args.join(',')+']'),block);
            return code;
        },
        "args": ["arg1","arg2","arg3"],
        "argsType": ["field","field","field"],
        "argsGrammarName": ["Alphabet_List","Manpu_List","String"],
        "omitted": [false,false,true],
        "multi": [false,false,false],
        "fieldDefault": function (keyOrIndex) {
            return AicFunctions.fieldDefault('pic_mp',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return AicFunctions.xmlText('pic_mp',inputs,next,isShadow,comment,attribute);
        }
    },
    "pic_movea": {
        "type": "statement",
        "json": {
            "type": "pic_movea",
            "message0": "立绘跳动： 角色 %1 时间 %2 跳动类型 %3",
            "args0": [
                Object.assign({},AicBlocks.Alphabet_List,{
                    "name": "arg1",
                    "default": "n"
                }),
                Object.assign({},AicBlocks.String,{
                    "name": "arg2",
                    "text": "-1"
                }),
                Object.assign({},AicBlocks.SPmove_List,{
                    "name": "arg3",
                    "default": "BLINK2"
                })
            ],
            "inputsInline": true,
            "tooltip": "时间的单位不一定都是帧，但-1一定是无限（不循环的类型除外），即持续到下次更改立绘差分。",
            "helpUrl": "",
            "colour": 80,
            "previousStatement": "pic_movea",
            "nextStatement": AicBlocks.statement
        },
        "generFunc": function(block) {
            var arg1 = block.getFieldValue('arg1');
            arg1 = AicFunctions.pre('Alphabet_List')(arg1,block,'arg1','pic_movea');
            var arg2 = block.getFieldValue('arg2');
            if (arg2==='') {
                throw new OmitedError(block,'arg2','pic_movea');
            }
            arg2 = AicFunctions.pre('String')(arg2,block,'arg2','pic_movea');
            var arg3 = block.getFieldValue('arg3');
            arg3 = AicFunctions.pre('SPmove_List')(arg3,block,'arg3','pic_movea');
            var code = AicFunctions.defaultCode('pic_movea',eval('['+AicBlocks['pic_movea'].args.join(',')+']'),block);
            return code;
        },
        "args": ["arg1","arg2","arg3"],
        "argsType": ["field","field","field"],
        "argsGrammarName": ["Alphabet_List","String","SPmove_List"],
        "omitted": [false,false,false],
        "multi": [false,false,false],
        "fieldDefault": function (keyOrIndex) {
            return AicFunctions.fieldDefault('pic_movea',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return AicFunctions.xmlText('pic_movea',inputs,next,isShadow,comment,attribute);
        }
    },
    "pic_mva_whole": {
        "type": "statement",
        "json": {
            "type": "pic_mva_whole",
            "message0": "图片批量跳动： 图层类别 %1 时间 %2 跳动类型 %3",
            "args0": [
                Object.assign({},AicBlocks.String,{
                    "name": "arg1",
                    "text": "''"
                }),
                Object.assign({},AicBlocks.String,{
                    "name": "arg2",
                    "text": "-1"
                }),
                Object.assign({},AicBlocks.SPmove_List,{
                    "name": "arg3",
                    "default": "BLINK2"
                })
            ],
            "inputsInline": true,
            "tooltip": "图层类别是由 # % T & W 组成的字符串（''表示全部类别），分别表示背景（BACK）、未知（TALKERB）、立绘（TALKER）、前景（FRONT）、未知（SWIN）。",
            "helpUrl": "",
            "colour": 80,
            "previousStatement": "pic_mva_whole",
            "nextStatement": AicBlocks.statement
        },
        "generFunc": function(block) {
            var arg1 = block.getFieldValue('arg1');
            if (arg1==='') {
                throw new OmitedError(block,'arg1','pic_mva_whole');
            }
            arg1 = AicFunctions.pre('String')(arg1,block,'arg1','pic_mva_whole');
            var arg2 = block.getFieldValue('arg2');
            if (arg2==='') {
                throw new OmitedError(block,'arg2','pic_mva_whole');
            }
            arg2 = AicFunctions.pre('String')(arg2,block,'arg2','pic_mva_whole');
            var arg3 = block.getFieldValue('arg3');
            arg3 = AicFunctions.pre('SPmove_List')(arg3,block,'arg3','pic_mva_whole');
            var code = AicFunctions.defaultCode('pic_mva_whole',eval('['+AicBlocks['pic_mva_whole'].args.join(',')+']'),block);
            return code;
        },
        "args": ["arg1","arg2","arg3"],
        "argsType": ["field","field","field"],
        "argsGrammarName": ["String","String","SPmove_List"],
        "omitted": [false,false,false],
        "multi": [false,false,false],
        "fieldDefault": function (keyOrIndex) {
            return AicFunctions.fieldDefault('pic_mva_whole',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return AicFunctions.xmlText('pic_mva_whole',inputs,next,isShadow,comment,attribute);
        }
    },
    "pic_fill": {
        "type": "statement",
        "json": {
            "type": "pic_fill",
            "message0": "单色填充图层： 图层参数 %1 颜色 %2 额外参数 %3",
            "args0": [
                Object.assign({},AicBlocks.String,{
                    "name": "arg1",
                    "text": "#0"
                }),
                Object.assign({},AicBlocks.Color_List,{
                    "name": "arg2",
                    "default": "DARK"
                }),
                Object.assign({},AicBlocks.String,{
                    "name": "arg3",
                    "text": ""
                })
            ],
            "inputsInline": true,
            "tooltip": "可配合原生指令PIC_FADEIN id n和PIC_FADEOUT id n来在n帧内淡入和淡出，这里id可以是角色或图层。",
            "helpUrl": "",
            "colour": 80,
            "previousStatement": "pic_fill",
            "nextStatement": AicBlocks.statement
        },
        "generFunc": function(block) {
            var arg1 = block.getFieldValue('arg1');
            if (arg1==='') {
                throw new OmitedError(block,'arg1','pic_fill');
            }
            arg1 = AicFunctions.pre('String')(arg1,block,'arg1','pic_fill');
            var arg2 = block.getFieldValue('arg2');
            arg2 = AicFunctions.pre('Color_List')(arg2,block,'arg2','pic_fill');
            var arg3 = block.getFieldValue('arg3');
            arg3 = AicFunctions.pre('String')(arg3,block,'arg3','pic_fill');
            var code = AicFunctions.defaultCode('pic_fill',eval('['+AicBlocks['pic_fill'].args.join(',')+']'),block);
            return code;
        },
        "args": ["arg1","arg2","arg3"],
        "argsType": ["field","field","field"],
        "argsGrammarName": ["String","Color_List","String"],
        "omitted": [false,false,true],
        "multi": [false,false,false],
        "fieldDefault": function (keyOrIndex) {
            return AicFunctions.fieldDefault('pic_fill',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return AicFunctions.xmlText('pic_fill',inputs,next,isShadow,comment,attribute);
        }
    },
    "pic_tfade": {
        "type": "statement",
        "json": {
            "type": "pic_tfade",
            "message0": "图片淡入淡出方向： 角色或图层 %1 方向 %2",
            "args0": [
                Object.assign({},AicBlocks.String,{
                    "name": "arg1",
                    "text": "#0"
                }),
                Object.assign({},AicBlocks.Tfade_List,{
                    "name": "arg2",
                    "default": "DISSOLVE"
                })
            ],
            "inputsInline": true,
            "tooltip": "必须紧跟在PIC_FADEIN或PIC_FADEOUT原生指令之后使用。",
            "helpUrl": "",
            "colour": 80,
            "previousStatement": "pic_tfade",
            "nextStatement": AicBlocks.statement
        },
        "generFunc": function(block) {
            var arg1 = block.getFieldValue('arg1');
            if (arg1==='') {
                throw new OmitedError(block,'arg1','pic_tfade');
            }
            arg1 = AicFunctions.pre('String')(arg1,block,'arg1','pic_tfade');
            var arg2 = block.getFieldValue('arg2');
            arg2 = AicFunctions.pre('Tfade_List')(arg2,block,'arg2','pic_tfade');
            var code = AicFunctions.defaultCode('pic_tfade',eval('['+AicBlocks['pic_tfade'].args.join(',')+']'),block);
            return code;
        },
        "args": ["arg1","arg2"],
        "argsType": ["field","field"],
        "argsGrammarName": ["String","Tfade_List"],
        "omitted": [false,false],
        "multi": [false,false],
        "fieldDefault": function (keyOrIndex) {
            return AicFunctions.fieldDefault('pic_tfade',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return AicFunctions.xmlText('pic_tfade',inputs,next,isShadow,comment,attribute);
        }
    },
    "pic_flash": {
        "type": "statement",
        "json": {
            "type": "pic_flash",
            "message0": "画面单色闪烁： 图层参数 %1 淡入 %2 停留 %3 淡出 %4 颜色 %5",
            "args0": [
                Object.assign({},AicBlocks.String,{
                    "name": "arg1",
                    "text": "&0"
                }),
                Object.assign({},AicBlocks.String,{
                    "name": "arg2",
                    "text": "25"
                }),
                Object.assign({},AicBlocks.String,{
                    "name": "arg3",
                    "text": "10"
                }),
                Object.assign({},AicBlocks.String,{
                    "name": "arg4",
                    "text": "25"
                }),
                Object.assign({},AicBlocks.Color_List,{
                    "name": "arg5",
                    "default": "WHITE"
                })
            ],
            "inputsInline": true,
            "tooltip": "总时长等于三个帧数相加。",
            "helpUrl": "",
            "colour": 80,
            "previousStatement": "pic_flash",
            "nextStatement": AicBlocks.statement
        },
        "generFunc": function(block) {
            var arg1 = block.getFieldValue('arg1');
            if (arg1==='') {
                throw new OmitedError(block,'arg1','pic_flash');
            }
            arg1 = AicFunctions.pre('String')(arg1,block,'arg1','pic_flash');
            var arg2 = block.getFieldValue('arg2');
            if (arg2==='') {
                throw new OmitedError(block,'arg2','pic_flash');
            }
            arg2 = AicFunctions.pre('String')(arg2,block,'arg2','pic_flash');
            var arg3 = block.getFieldValue('arg3');
            if (arg3==='') {
                throw new OmitedError(block,'arg3','pic_flash');
            }
            arg3 = AicFunctions.pre('String')(arg3,block,'arg3','pic_flash');
            var arg4 = block.getFieldValue('arg4');
            if (arg4==='') {
                throw new OmitedError(block,'arg4','pic_flash');
            }
            arg4 = AicFunctions.pre('String')(arg4,block,'arg4','pic_flash');
            var arg5 = block.getFieldValue('arg5');
            arg5 = AicFunctions.pre('Color_List')(arg5,block,'arg5','pic_flash');
            var code = AicFunctions.defaultCode('pic_flash',eval('['+AicBlocks['pic_flash'].args.join(',')+']'),block);
            return code;
        },
        "args": ["arg1","arg2","arg3","arg4","arg5"],
        "argsType": ["field","field","field","field","field"],
        "argsGrammarName": ["String","String","String","String","Color_List"],
        "omitted": [false,false,false,false,false],
        "multi": [false,false,false,false,false],
        "fieldDefault": function (keyOrIndex) {
            return AicFunctions.fieldDefault('pic_flash',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return AicFunctions.xmlText('pic_flash',inputs,next,isShadow,comment,attribute);
        }
    },
    "pic_radiation": {
        "type": "statement",
        "json": {
            "type": "pic_radiation",
            "message0": "漫画放射线： 图层参数 %1 颜色 %2 额外参数 %3",
            "args0": [
                Object.assign({},AicBlocks.String,{
                    "name": "arg1",
                    "text": "#0"
                }),
                Object.assign({},AicBlocks.Color_List,{
                    "name": "arg2",
                    "default": "RED"
                }),
                Object.assign({},AicBlocks.String,{
                    "name": "arg3",
                    "text": ""
                })
            ],
            "inputsInline": true,
            "tooltip": "画面四周持续出现大量指向中心的尖刺，存在时段不尽相同。",
            "helpUrl": "",
            "colour": 80,
            "previousStatement": "pic_radiation",
            "nextStatement": AicBlocks.statement
        },
        "generFunc": function(block) {
            var arg1 = block.getFieldValue('arg1');
            if (arg1==='') {
                throw new OmitedError(block,'arg1','pic_radiation');
            }
            arg1 = AicFunctions.pre('String')(arg1,block,'arg1','pic_radiation');
            var arg2 = block.getFieldValue('arg2');
            arg2 = AicFunctions.pre('Color_List')(arg2,block,'arg2','pic_radiation');
            var arg3 = block.getFieldValue('arg3');
            arg3 = AicFunctions.pre('String')(arg3,block,'arg3','pic_radiation');
            var code = AicFunctions.defaultCode('pic_radiation',eval('['+AicBlocks['pic_radiation'].args.join(',')+']'),block);
            return code;
        },
        "args": ["arg1","arg2","arg3"],
        "argsType": ["field","field","field"],
        "argsGrammarName": ["String","Color_List","String"],
        "omitted": [false,false,true],
        "multi": [false,false,false],
        "fieldDefault": function (keyOrIndex) {
            return AicFunctions.fieldDefault('pic_radiation',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return AicFunctions.xmlText('pic_radiation',inputs,next,isShadow,comment,attribute);
        }
    },
    "pic_move": {
        "type": "statement",
        "json": {
            "type": "pic_move",
            "message0": "移动图片： 角色或图层 %1 x= %2 y= %3 帧数 %4 变速函数 %5",
            "args0": [
                Object.assign({},AicBlocks.String,{
                    "name": "arg1",
                    "text": "#0"
                }),
                Object.assign({},AicBlocks.String,{
                    "name": "arg2",
                    "text": "256"
                }),
                Object.assign({},AicBlocks.String,{
                    "name": "arg3",
                    "text": "144"
                }),
                Object.assign({},AicBlocks.String,{
                    "name": "arg4",
                    "text": "60"
                }),
                Object.assign({},AicBlocks.Acceleration_List,{
                    "name": "arg5",
                    "default": "ZLINE"
                })
            ],
            "inputsInline": true,
            "tooltip": "坐标范围是±640和±360，x轴向右y轴向上。变速函数中以R开头的会使起点和终点交换。",
            "helpUrl": "",
            "colour": 80,
            "previousStatement": "pic_move",
            "nextStatement": AicBlocks.statement
        },
        "generFunc": function(block) {
            var arg1 = block.getFieldValue('arg1');
            if (arg1==='') {
                throw new OmitedError(block,'arg1','pic_move');
            }
            arg1 = AicFunctions.pre('String')(arg1,block,'arg1','pic_move');
            var arg2 = block.getFieldValue('arg2');
            if (arg2==='') {
                throw new OmitedError(block,'arg2','pic_move');
            }
            arg2 = AicFunctions.pre('String')(arg2,block,'arg2','pic_move');
            var arg3 = block.getFieldValue('arg3');
            if (arg3==='') {
                throw new OmitedError(block,'arg3','pic_move');
            }
            arg3 = AicFunctions.pre('String')(arg3,block,'arg3','pic_move');
            var arg4 = block.getFieldValue('arg4');
            if (arg4==='') {
                throw new OmitedError(block,'arg4','pic_move');
            }
            arg4 = AicFunctions.pre('String')(arg4,block,'arg4','pic_move');
            var arg5 = block.getFieldValue('arg5');
            arg5 = AicFunctions.pre('Acceleration_List')(arg5,block,'arg5','pic_move');
            var code = AicFunctions.defaultCode('pic_move',eval('['+AicBlocks['pic_move'].args.join(',')+']'),block);
            return code;
        },
        "args": ["arg1","arg2","arg3","arg4","arg5"],
        "argsType": ["field","field","field","field","field"],
        "argsGrammarName": ["String","String","String","String","Acceleration_List"],
        "omitted": [false,false,false,false,false],
        "multi": [false,false,false,false,false],
        "fieldDefault": function (keyOrIndex) {
            return AicFunctions.fieldDefault('pic_move',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return AicFunctions.xmlText('pic_move',inputs,next,isShadow,comment,attribute);
        }
    },
    "pic_move2": {
        "type": "statement",
        "json": {
            "type": "pic_move2",
            "message0": "移动图片： %1 x1 %2 y1 %3 x2 %4 y2 %5 帧数 %6 变速函数 %7",
            "args0": [
                Object.assign({},AicBlocks.String,{
                    "name": "arg1",
                    "text": "#0"
                }),
                Object.assign({},AicBlocks.String,{
                    "name": "arg2",
                    "text": "-320"
                }),
                Object.assign({},AicBlocks.String,{
                    "name": "arg3",
                    "text": "-180"
                }),
                Object.assign({},AicBlocks.String,{
                    "name": "arg4",
                    "text": "320"
                }),
                Object.assign({},AicBlocks.String,{
                    "name": "arg5",
                    "text": "180"
                }),
                Object.assign({},AicBlocks.String,{
                    "name": "arg6",
                    "text": "60"
                }),
                Object.assign({},AicBlocks.Acceleration_List,{
                    "name": "arg7",
                    "default": "ZLINE"
                })
            ],
            "inputsInline": true,
            "tooltip": "图片会先瞬移到起点(x1,y1)，再逐渐移动到终点(x2,y2)。",
            "helpUrl": "",
            "colour": 80,
            "previousStatement": "pic_move2",
            "nextStatement": AicBlocks.statement
        },
        "generFunc": function(block) {
            var arg1 = block.getFieldValue('arg1');
            if (arg1==='') {
                throw new OmitedError(block,'arg1','pic_move2');
            }
            arg1 = AicFunctions.pre('String')(arg1,block,'arg1','pic_move2');
            var arg2 = block.getFieldValue('arg2');
            if (arg2==='') {
                throw new OmitedError(block,'arg2','pic_move2');
            }
            arg2 = AicFunctions.pre('String')(arg2,block,'arg2','pic_move2');
            var arg3 = block.getFieldValue('arg3');
            if (arg3==='') {
                throw new OmitedError(block,'arg3','pic_move2');
            }
            arg3 = AicFunctions.pre('String')(arg3,block,'arg3','pic_move2');
            var arg4 = block.getFieldValue('arg4');
            if (arg4==='') {
                throw new OmitedError(block,'arg4','pic_move2');
            }
            arg4 = AicFunctions.pre('String')(arg4,block,'arg4','pic_move2');
            var arg5 = block.getFieldValue('arg5');
            if (arg5==='') {
                throw new OmitedError(block,'arg5','pic_move2');
            }
            arg5 = AicFunctions.pre('String')(arg5,block,'arg5','pic_move2');
            var arg6 = block.getFieldValue('arg6');
            if (arg6==='') {
                throw new OmitedError(block,'arg6','pic_move2');
            }
            arg6 = AicFunctions.pre('String')(arg6,block,'arg6','pic_move2');
            var arg7 = block.getFieldValue('arg7');
            arg7 = AicFunctions.pre('Acceleration_List')(arg7,block,'arg7','pic_move2');
            var code = AicFunctions.defaultCode('pic_move2',eval('['+AicBlocks['pic_move2'].args.join(',')+']'),block);
            return code;
        },
        "args": ["arg1","arg2","arg3","arg4","arg5","arg6","arg7"],
        "argsType": ["field","field","field","field","field","field","field"],
        "argsGrammarName": ["String","String","String","String","String","String","Acceleration_List"],
        "omitted": [false,false,false,false,false,false,false],
        "multi": [false,false,false,false,false,false,false],
        "fieldDefault": function (keyOrIndex) {
            return AicFunctions.fieldDefault('pic_move2',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return AicFunctions.xmlText('pic_move2',inputs,next,isShadow,comment,attribute);
        }
    },
    "epsitu": {
        "type": "statement",
        "json": {
            "type": "epsitu",
            "message0": "添加敏感的记录： 是否加到开头 %1 来源 %2 连续次数 %3",
            "args0": [
                Object.assign({},AicBlocks.Bool,{
                    "name": "Bool_0",
                    "checked": false
                }),
                Object.assign({},AicBlocks.Enemy_List,{
                    "name": "arg1",
                    "default": "OTHER"
                }),
                Object.assign({},AicBlocks.String,{
                    "name": "arg2",
                    "text": "2147483647"
                })
            ],
            "inputsInline": true,
            "tooltip": "同一事件中多次使用时请注意哪些需要加到开头。使用原生指令EP_STATE_CLEAR可以清空记录。",
            "helpUrl": "",
            "colour": 125,
            "previousStatement": "epsitu",
            "nextStatement": AicBlocks.statement
        },
        "generFunc": function(block) {
            var Bool_0 = block.getFieldValue('Bool_0') === 'TRUE';
            Bool_0 = AicFunctions.pre('Bool')(Bool_0,block,'Bool_0','epsitu');
            var arg1 = block.getFieldValue('arg1');
            arg1 = AicFunctions.pre('Enemy_List')(arg1,block,'arg1','epsitu');
            var arg2 = block.getFieldValue('arg2');
            arg2 = AicFunctions.pre('String')(arg2,block,'arg2','epsitu');
            var code = AicFunctions.defaultCode('epsitu',eval('['+AicBlocks['epsitu'].args.join(',')+']'),block);
            return code;
        },
        "args": ["Bool_0","arg1","arg2"],
        "argsType": ["field","field","field"],
        "argsGrammarName": ["Bool","Enemy_List","String"],
        "omitted": [false,false,true],
        "multi": [false,false,false],
        "fieldDefault": function (keyOrIndex) {
            return AicFunctions.fieldDefault('epsitu',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return AicFunctions.xmlText('epsitu',inputs,next,isShadow,comment,attribute);
        }
    },
    "force_replace_noel_cane": {
        "type": "statement",
        "json": {
            "type": "force_replace_noel_cane",
            "message0": "强制更换法杖为： %1 星级 %2",
            "args0": [
                Object.assign({},AicBlocks.Cane_List,{
                    "name": "arg1",
                    "default": "default"
                }),
                Object.assign({},AicBlocks.Grade_List,{
                    "name": "arg2",
                    "default": "4"
                })
            ],
            "inputsInline": true,
            "tooltip": "强制更换的法杖不会出现在物品栏里，下次手动更换时就会不见了。",
            "helpUrl": "",
            "colour": 125,
            "previousStatement": "force_replace_noel_cane",
            "nextStatement": AicBlocks.statement
        },
        "generFunc": function(block) {
            var arg1 = block.getFieldValue('arg1');
            arg1 = AicFunctions.pre('Cane_List')(arg1,block,'arg1','force_replace_noel_cane');
            var arg2 = block.getFieldValue('arg2');
            arg2 = AicFunctions.pre('Grade_List')(arg2,block,'arg2','force_replace_noel_cane');
            var code = AicFunctions.defaultCode('force_replace_noel_cane',eval('['+AicBlocks['force_replace_noel_cane'].args.join(',')+']'),block);
            return code;
        },
        "args": ["arg1","arg2"],
        "argsType": ["field","field"],
        "argsGrammarName": ["Cane_List","Grade_List"],
        "omitted": [false,false],
        "multi": [false,false],
        "fieldDefault": function (keyOrIndex) {
            return AicFunctions.fieldDefault('force_replace_noel_cane',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return AicFunctions.xmlText('force_replace_noel_cane',inputs,next,isShadow,comment,attribute);
        }
    },
    "xxxskill": {
        "type": "statement",
        "json": {
            "type": "xxxskill",
            "message0": "%1 技能 %2 额外参数 %3",
            "args0": [
                Object.assign({},AicBlocks.Xxxskill_List,{
                    "name": "arg0",
                    "default": "GETSKILL"
                }),
                Object.assign({},AicBlocks.Skill_List,{
                    "name": "arg1",
                    "default": "sp_difficulty0"
                }),
                Object.assign({},AicBlocks.String,{
                    "name": "arg2",
                    "text": ""
                })
            ],
            "inputsInline": true,
            "tooltip": "HP上限和MP上限作为被动技能可以叠加，请注意辨别。习得技能的额外参数填1表示习得后不启用。",
            "helpUrl": "",
            "colour": 125,
            "previousStatement": "xxxskill",
            "nextStatement": AicBlocks.statement
        },
        "generFunc": function(block) {
            var arg0 = block.getFieldValue('arg0');
            arg0 = AicFunctions.pre('Xxxskill_List')(arg0,block,'arg0','xxxskill');
            var arg1 = block.getFieldValue('arg1');
            arg1 = AicFunctions.pre('Skill_List')(arg1,block,'arg1','xxxskill');
            var arg2 = block.getFieldValue('arg2');
            arg2 = AicFunctions.pre('String')(arg2,block,'arg2','xxxskill');
            var code = AicFunctions.defaultCode('xxxskill',eval('['+AicBlocks['xxxskill'].args.join(',')+']'),block);
            return code;
        },
        "args": ["arg0","arg1","arg2"],
        "argsType": ["field","field","field"],
        "argsGrammarName": ["Xxxskill_List","Skill_List","String"],
        "omitted": [false,false,true],
        "multi": [false,false,false],
        "fieldDefault": function (keyOrIndex) {
            return AicFunctions.fieldDefault('xxxskill',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return AicFunctions.xmlText('xxxskill',inputs,next,isShadow,comment,attribute);
        }
    },
    "getmagic": {
        "type": "statement",
        "json": {
            "type": "getmagic",
            "message0": "注册魔法： %1",
            "args0": [
                Object.assign({},AicBlocks.Magic_List,{
                    "name": "arg1",
                    "default": "POWERBOMB"
                })
            ],
            "inputsInline": true,
            "tooltip": "魔法注册后需要有对应键位才能使用，比如0.28的⬆键对应环链水阵而不是雷霆电击。",
            "helpUrl": "",
            "colour": 125,
            "previousStatement": "getmagic",
            "nextStatement": AicBlocks.statement
        },
        "generFunc": function(block) {
            var arg1 = block.getFieldValue('arg1');
            arg1 = AicFunctions.pre('Magic_List')(arg1,block,'arg1','getmagic');
            var code = AicFunctions.defaultCode('getmagic',eval('['+AicBlocks['getmagic'].args.join(',')+']'),block);
            return code;
        },
        "args": ["arg1"],
        "argsType": ["field"],
        "argsGrammarName": ["Magic_List"],
        "omitted": [false],
        "multi": [false],
        "fieldDefault": function (keyOrIndex) {
            return AicFunctions.fieldDefault('getmagic',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return AicFunctions.xmlText('getmagic',inputs,next,isShadow,comment,attribute);
        }
    },
    "removemagic": {
        "type": "statement",
        "json": {
            "type": "removemagic",
            "message0": "注销魔法： %1",
            "args0": [
                Object.assign({},AicBlocks.Magic_List,{
                    "name": "arg1",
                    "default": "PR_BURST"
                })
            ],
            "inputsInline": true,
            "tooltip": "纯白之箭无法注销。即使注销了圣光爆发，仍可在格拉提亚城内快速传送。",
            "helpUrl": "",
            "colour": 125,
            "previousStatement": "removemagic",
            "nextStatement": AicBlocks.statement
        },
        "generFunc": function(block) {
            var arg1 = block.getFieldValue('arg1');
            arg1 = AicFunctions.pre('Magic_List')(arg1,block,'arg1','removemagic');
            var code = AicFunctions.defaultCode('removemagic',eval('['+AicBlocks['removemagic'].args.join(',')+']'),block);
            return code;
        },
        "args": ["arg1"],
        "argsType": ["field"],
        "argsGrammarName": ["Magic_List"],
        "omitted": [false],
        "multi": [false],
        "fieldDefault": function (keyOrIndex) {
            return AicFunctions.fieldDefault('removemagic',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return AicFunctions.xmlText('removemagic',inputs,next,isShadow,comment,attribute);
        }
    },
    "enablemagic": {
        "type": "statement",
        "json": {
            "type": "enablemagic",
            "message0": "设置魔法 %1 是否启用 %2",
            "args0": [
                Object.assign({},AicBlocks.Magic_List,{
                    "name": "arg1",
                    "default": "_"
                }),
                Object.assign({},AicBlocks.Bool,{
                    "name": "Bool_0",
                    "checked": false
                })
            ],
            "inputsInline": true,
            "tooltip": "被禁用的魔法（下划线_表示全部禁用，不可用于其他指令！）不可以开始咏唱（已咏唱一半的可以继续），切换地图后失效。",
            "helpUrl": "",
            "colour": 125,
            "previousStatement": "enablemagic",
            "nextStatement": AicBlocks.statement
        },
        "generFunc": function(block) {
            var arg1 = block.getFieldValue('arg1');
            arg1 = AicFunctions.pre('Magic_List')(arg1,block,'arg1','enablemagic');
            var Bool_0 = block.getFieldValue('Bool_0') === 'TRUE';
            Bool_0 = AicFunctions.pre('Bool')(Bool_0,block,'Bool_0','enablemagic');
            var code = AicFunctions.defaultCode('enablemagic',eval('['+AicBlocks['enablemagic'].args.join(',')+']'),block);
            return code;
        },
        "args": ["arg1","Bool_0"],
        "argsType": ["field","field"],
        "argsGrammarName": ["Magic_List","Bool"],
        "omitted": [false,false],
        "multi": [false,false],
        "fieldDefault": function (keyOrIndex) {
            return AicFunctions.fieldDefault('enablemagic',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return AicFunctions.xmlText('enablemagic',inputs,next,isShadow,comment,attribute);
        }
    },
    "setmagic": {
        "type": "statement",
        "json": {
            "type": "setmagic",
            "message0": "施展魔法： %1 不散落魔力 %2 伤害对象 %3 基准点位 %4 右移 %5 下移 %6",
            "args0": [
                Object.assign({},AicBlocks.Magic_List,{
                    "name": "arg1",
                    "default": "WATERSHARD"
                }),
                Object.assign({},AicBlocks.Bool,{
                    "name": "Bool_0",
                    "checked": false
                }),
                Object.assign({},AicBlocks.Mghit_List,{
                    "name": "arg2",
                    "default": "PR"
                }),
                Object.assign({},AicBlocks.String,{
                    "name": "arg3",
                    "text": "%"
                }),
                Object.assign({},AicBlocks.String,{
                    "name": "arg4",
                    "text": "0"
                }),
                Object.assign({},AicBlocks.String,{
                    "name": "arg5",
                    "text": "0"
                })
            ],
            "inputsInline": true,
            "tooltip": "此指令瞄准方向不受控制，不适用于圣光爆发。主角（%）以外的基准点位都要事先在地图文件中定义。偏移量的单位不是像素，因此可以是小数。",
            "helpUrl": "",
            "colour": 125,
            "previousStatement": "setmagic",
            "nextStatement": AicBlocks.statement
        },
        "generFunc": function(block) {
            var arg1 = block.getFieldValue('arg1');
            arg1 = AicFunctions.pre('Magic_List')(arg1,block,'arg1','setmagic');
            var Bool_0 = block.getFieldValue('Bool_0') === 'TRUE';
            Bool_0 = AicFunctions.pre('Bool')(Bool_0,block,'Bool_0','setmagic');
            var arg2 = block.getFieldValue('arg2');
            arg2 = AicFunctions.pre('Mghit_List')(arg2,block,'arg2','setmagic');
            var arg3 = block.getFieldValue('arg3');
            if (arg3==='') {
                throw new OmitedError(block,'arg3','setmagic');
            }
            arg3 = AicFunctions.pre('String')(arg3,block,'arg3','setmagic');
            var arg4 = block.getFieldValue('arg4');
            if (arg4==='') {
                throw new OmitedError(block,'arg4','setmagic');
            }
            arg4 = AicFunctions.pre('String')(arg4,block,'arg4','setmagic');
            var arg5 = block.getFieldValue('arg5');
            if (arg5==='') {
                throw new OmitedError(block,'arg5','setmagic');
            }
            arg5 = AicFunctions.pre('String')(arg5,block,'arg5','setmagic');
            var code = AicFunctions.defaultCode('setmagic',eval('['+AicBlocks['setmagic'].args.join(',')+']'),block);
            return code;
        },
        "args": ["arg1","Bool_0","arg2","arg3","arg4","arg5"],
        "argsType": ["field","field","field","field","field","field"],
        "argsGrammarName": ["Magic_List","Bool","Mghit_List","String","String","String"],
        "omitted": [false,false,false,false,false,false],
        "multi": [false,false,false,false,false,false],
        "fieldDefault": function (keyOrIndex) {
            return AicFunctions.fieldDefault('setmagic',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return AicFunctions.xmlText('setmagic',inputs,next,isShadow,comment,attribute);
        }
    },
    "getitem_box": {
        "type": "statement",
        "json": {
            "type": "getitem_box",
            "message0": "弹窗获得强化插件： %1",
            "args0": [
                Object.assign({},AicBlocks.Enhancer_List,{
                    "name": "arg1",
                    "default": "Enhancer_anchor"
                })
            ],
            "inputsInline": true,
            "tooltip": "实际用的原生指令也是GETITEM_BOX只不过不需要指定数量和品质。",
            "helpUrl": "",
            "colour": 125,
            "previousStatement": "getitem_box",
            "nextStatement": AicBlocks.statement
        },
        "generFunc": function(block) {
            var arg1 = block.getFieldValue('arg1');
            arg1 = AicFunctions.pre('Enhancer_List')(arg1,block,'arg1','getitem_box');
            var code = AicFunctions.defaultCode('getitem_box',eval('['+AicBlocks['getitem_box'].args.join(',')+']'),block);
            return code;
        },
        "args": ["arg1"],
        "argsType": ["field"],
        "argsGrammarName": ["Enhancer_List"],
        "omitted": [false],
        "multi": [false],
        "fieldDefault": function (keyOrIndex) {
            return AicFunctions.fieldDefault('getitem_box',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return AicFunctions.xmlText('getitem_box',inputs,next,isShadow,comment,attribute);
        }
    },
    "getitem": {
        "type": "statement",
        "json": {
            "type": "getitem",
            "message0": "%1 获得物品： %2 数量 %3 品质 %4",
            "args0": [
                Object.assign({},AicBlocks.Getitem_List,{
                    "name": "arg0",
                    "default": "GETITEM"
                }),
                Object.assign({},AicBlocks.Item_List,{
                    "name": "arg1",
                    "default": "special_suicide"
                }),
                Object.assign({},AicBlocks.String,{
                    "name": "arg2",
                    "text": "1"
                }),
                Object.assign({},AicBlocks.Grade_List,{
                    "name": "arg3",
                    "default": "4"
                })
            ],
            "inputsInline": true,
            "tooltip": "部分「重要物品」可能无法随意获得。数量可以填-1表示单格堆叠上限。",
            "helpUrl": "",
            "colour": 125,
            "previousStatement": "getitem",
            "nextStatement": AicBlocks.statement
        },
        "generFunc": function(block) {
            var arg0 = block.getFieldValue('arg0');
            arg0 = AicFunctions.pre('Getitem_List')(arg0,block,'arg0','getitem');
            var arg1 = block.getFieldValue('arg1');
            arg1 = AicFunctions.pre('Item_List')(arg1,block,'arg1','getitem');
            var arg2 = block.getFieldValue('arg2');
            if (arg2==='') {
                throw new OmitedError(block,'arg2','getitem');
            }
            arg2 = AicFunctions.pre('String')(arg2,block,'arg2','getitem');
            var arg3 = block.getFieldValue('arg3');
            arg3 = AicFunctions.pre('Grade_List')(arg3,block,'arg3','getitem');
            var code = AicFunctions.defaultCode('getitem',eval('['+AicBlocks['getitem'].args.join(',')+']'),block);
            return code;
        },
        "args": ["arg0","arg1","arg2","arg3"],
        "argsType": ["field","field","field","field"],
        "argsGrammarName": ["Getitem_List","Item_List","String","Grade_List"],
        "omitted": [false,false,false,false],
        "multi": [false,false,false,false],
        "fieldDefault": function (keyOrIndex) {
            return AicFunctions.fieldDefault('getitem',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return AicFunctions.xmlText('getitem',inputs,next,isShadow,comment,attribute);
        }
    },
    "remitem": {
        "type": "statement",
        "json": {
            "type": "remitem",
            "message0": "失去物品： %1 数量 %2 品质 %3 不提示 %4 额外参数 %5",
            "args0": [
                Object.assign({},AicBlocks.Item_List,{
                    "name": "arg1",
                    "default": "mtr_essence_roaper"
                }),
                Object.assign({},AicBlocks.String,{
                    "name": "arg2",
                    "text": "5"
                }),
                Object.assign({},AicBlocks.Grade_List,{
                    "name": "arg3",
                    "default": "-1"
                }),
                Object.assign({},AicBlocks.Bool,{
                    "name": "Bool_0",
                    "checked": false
                }),
                Object.assign({},AicBlocks.String,{
                    "name": "arg4",
                    "text": "__adding"
                })
            ],
            "inputsInline": true,
            "tooltip": "品质填-1表示优先失去最低品质。额外参数一般是以Alert_item_reduced开头的词条名，也可以不填。",
            "helpUrl": "",
            "colour": 125,
            "previousStatement": "remitem",
            "nextStatement": AicBlocks.statement
        },
        "generFunc": function(block) {
            var arg1 = block.getFieldValue('arg1');
            arg1 = AicFunctions.pre('Item_List')(arg1,block,'arg1','remitem');
            var arg2 = block.getFieldValue('arg2');
            if (arg2==='') {
                throw new OmitedError(block,'arg2','remitem');
            }
            arg2 = AicFunctions.pre('String')(arg2,block,'arg2','remitem');
            var arg3 = block.getFieldValue('arg3');
            arg3 = AicFunctions.pre('Grade_List')(arg3,block,'arg3','remitem');
            var Bool_0 = block.getFieldValue('Bool_0') === 'TRUE';
            Bool_0 = AicFunctions.pre('Bool')(Bool_0,block,'Bool_0','remitem');
            var arg4 = block.getFieldValue('arg4');
            arg4 = AicFunctions.pre('String')(arg4,block,'arg4','remitem');
            var code = AicFunctions.defaultCode('remitem',eval('['+AicBlocks['remitem'].args.join(',')+']'),block);
            return code;
        },
        "args": ["arg1","arg2","arg3","Bool_0","arg4"],
        "argsType": ["field","field","field","field","field"],
        "argsGrammarName": ["Item_List","String","Grade_List","Bool","String"],
        "omitted": [false,false,false,false,true],
        "multi": [false,false,false,false,false],
        "fieldDefault": function (keyOrIndex) {
            return AicFunctions.fieldDefault('remitem',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return AicFunctions.xmlText('remitem',inputs,next,isShadow,comment,attribute);
        }
    },
    "getmoney": {
        "type": "statement",
        "json": {
            "type": "getmoney",
            "message0": "获得金币： %1 是否弹窗 %2",
            "args0": [
                Object.assign({},AicBlocks.String,{
                    "name": "String_0",
                    "text": "2147483647"
                }),
                Object.assign({},AicBlocks.Bool,{
                    "name": "Bool_0"
                })
            ],
            "inputsInline": true,
            "tooltip": "金币上限是999999，本指令不能获得兑锭、精萃、公会积分等。",
            "helpUrl": "",
            "colour": 125,
            "previousStatement": "getmoney",
            "nextStatement": AicBlocks.statement
        },
        "generFunc": function(block) {
            var String_0 = block.getFieldValue('String_0');
            if (String_0==='') {
                throw new OmitedError(block,'String_0','getmoney');
            }
            String_0 = AicFunctions.pre('String')(String_0,block,'String_0','getmoney');
            var Bool_0 = block.getFieldValue('Bool_0') === 'TRUE';
            Bool_0 = AicFunctions.pre('Bool')(Bool_0,block,'Bool_0','getmoney');
            var code = AicFunctions.defaultCode('getmoney',eval('['+AicBlocks['getmoney'].args.join(',')+']'),block);
            return code;
        },
        "args": ["String_0","Bool_0"],
        "argsType": ["field","field"],
        "argsGrammarName": ["String","Bool"],
        "omitted": [false,false],
        "multi": [false,false],
        "fieldDefault": function (keyOrIndex) {
            return AicFunctions.fieldDefault('getmoney',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return AicFunctions.xmlText('getmoney',inputs,next,isShadow,comment,attribute);
        }
    },
    "wait_fn": {
        "type": "statement",
        "json": {
            "type": "wait_fn",
            "message0": "等待某功能： %1 额外参数 %2",
            "args0": [
                Object.assign({},AicBlocks.WaitFn_List,{
                    "name": "arg1",
                    "default": "ITEMDESC"
                }),
                Object.assign({},AicBlocks.String,{
                    "name": "arg2",
                    "text": ""
                })
            ],
            "inputsInline": true,
            "tooltip": "一般选择ITEMDESC来等待玩家按掉物品/魔法/技能/插件的介绍弹窗。",
            "helpUrl": "",
            "colour": 125,
            "previousStatement": "wait_fn",
            "nextStatement": AicBlocks.statement
        },
        "generFunc": function(block) {
            var arg1 = block.getFieldValue('arg1');
            arg1 = AicFunctions.pre('WaitFn_List')(arg1,block,'arg1','wait_fn');
            var arg2 = block.getFieldValue('arg2');
            arg2 = AicFunctions.pre('String')(arg2,block,'arg2','wait_fn');
            var code = AicFunctions.defaultCode('wait_fn',eval('['+AicBlocks['wait_fn'].args.join(',')+']'),block);
            return code;
        },
        "args": ["arg1","arg2"],
        "argsType": ["field","field"],
        "argsGrammarName": ["WaitFn_List","String"],
        "omitted": [false,true],
        "multi": [false,false],
        "fieldDefault": function (keyOrIndex) {
            return AicFunctions.fieldDefault('wait_fn',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return AicFunctions.xmlText('wait_fn',inputs,next,isShadow,comment,attribute);
        }
    },
    "alchemy": {
        "type": "statement",
        "json": {
            "type": "alchemy",
            "message0": "打开界面： %1",
            "args0": [
                Object.assign({},AicBlocks.Alchemy_List,{
                    "name": "arg0",
                    "default": "ALCHEMY_COFFEEMAKER"
                })
            ],
            "inputsInline": true,
            "tooltip": "回忆相册界面需要根据变量 $_album_categ $_scene $_scene_index 自行后续处理。",
            "helpUrl": "",
            "colour": 170,
            "previousStatement": "alchemy",
            "nextStatement": AicBlocks.statement
        },
        "generFunc": function(block) {
            var arg0 = block.getFieldValue('arg0');
            arg0 = AicFunctions.pre('Alchemy_List')(arg0,block,'arg0','alchemy');
            var code = AicFunctions.defaultCode('alchemy',eval('['+AicBlocks['alchemy'].args.join(',')+']'),block);
            return code;
        },
        "args": ["arg0"],
        "argsType": ["field"],
        "argsGrammarName": ["Alchemy_List"],
        "omitted": [false],
        "multi": [false],
        "fieldDefault": function (keyOrIndex) {
            return AicFunctions.fieldDefault('alchemy',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return AicFunctions.xmlText('alchemy',inputs,next,isShadow,comment,attribute);
        }
    },
    "ui_forge": {
        "type": "statement",
        "json": {
            "type": "ui_forge",
            "message0": "进入铁匠铺： 自定义参数 %1",
            "args0": [
                Object.assign({},AicBlocks.String,{
                    "name": "String_0",
                    "text": ""
                })
            ],
            "inputsInline": true,
            "tooltip": "如果不填写自定义参数，则会根据是否持有许可证自动填写。",
            "helpUrl": "",
            "colour": 170,
            "previousStatement": "ui_forge",
            "nextStatement": AicBlocks.statement
        },
        "generFunc": function(block) {
            var String_0 = block.getFieldValue('String_0');
            String_0 = AicFunctions.pre('String')(String_0,block,'String_0','ui_forge');
            var code = AicFunctions.defaultCode('ui_forge',eval('['+AicBlocks['ui_forge'].args.join(',')+']'),block);
            return code;
        },
        "args": ["String_0"],
        "argsType": ["field"],
        "argsGrammarName": ["String"],
        "omitted": [true],
        "multi": [false],
        "fieldDefault": function (keyOrIndex) {
            return AicFunctions.fieldDefault('ui_forge',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return AicFunctions.xmlText('ui_forge',inputs,next,isShadow,comment,attribute);
        }
    },
    "itemstore": {
        "type": "statement",
        "json": {
            "type": "itemstore",
            "message0": "进入商店： %1 是否堂食 %2 水平位置 %3",
            "args0": [
                Object.assign({},AicBlocks.Store_List,{
                    "name": "arg1",
                    "default": "city_bar_t02"
                }),
                Object.assign({},AicBlocks.Bool,{
                    "name": "Bool_0",
                    "checked": false
                }),
                Object.assign({},AicBlocks.Horizontal_List,{
                    "name": "arg2",
                    "default": "C"
                })
            ],
            "inputsInline": true,
            "tooltip": "水平位置对堂食无效。非堂食的水平位置建议在CL CCL C CCR CR中选择。",
            "helpUrl": "",
            "colour": 170,
            "previousStatement": "itemstore",
            "nextStatement": AicBlocks.statement
        },
        "generFunc": function(block) {
            var arg1 = block.getFieldValue('arg1');
            arg1 = AicFunctions.pre('Store_List')(arg1,block,'arg1','itemstore');
            var Bool_0 = block.getFieldValue('Bool_0') === 'TRUE';
            Bool_0 = AicFunctions.pre('Bool')(Bool_0,block,'Bool_0','itemstore');
            var arg2 = block.getFieldValue('arg2');
            arg2 = AicFunctions.pre('Horizontal_List')(arg2,block,'arg2','itemstore');
            var code = AicFunctions.defaultCode('itemstore',eval('['+AicBlocks['itemstore'].args.join(',')+']'),block);
            return code;
        },
        "args": ["arg1","Bool_0","arg2"],
        "argsType": ["field","field","field"],
        "argsGrammarName": ["Store_List","Bool","Horizontal_List"],
        "omitted": [false,false,false],
        "multi": [false,false,false],
        "fieldDefault": function (keyOrIndex) {
            return AicFunctions.fieldDefault('itemstore',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return AicFunctions.xmlText('itemstore',inputs,next,isShadow,comment,attribute);
        }
    },
    "storeflush": {
        "type": "statement",
        "json": {
            "type": "storeflush",
            "message0": "刷新商店库存： %1 额外参数 %2",
            "args0": [
                Object.assign({},AicBlocks.Store_List,{
                    "name": "arg1",
                    "default": "city_bar_t02"
                }),
                Object.assign({},AicBlocks.String,{
                    "name": "arg2",
                    "text": ""
                })
            ],
            "inputsInline": true,
            "tooltip": "战斗结束后一般会自动刷新所有商店的库存。",
            "helpUrl": "",
            "colour": 170,
            "previousStatement": "storeflush",
            "nextStatement": AicBlocks.statement
        },
        "generFunc": function(block) {
            var arg1 = block.getFieldValue('arg1');
            arg1 = AicFunctions.pre('Store_List')(arg1,block,'arg1','storeflush');
            var arg2 = block.getFieldValue('arg2');
            arg2 = AicFunctions.pre('String')(arg2,block,'arg2','storeflush');
            var code = AicFunctions.defaultCode('storeflush',eval('['+AicBlocks['storeflush'].args.join(',')+']'),block);
            return code;
        },
        "args": ["arg1","arg2"],
        "argsType": ["field","field"],
        "argsGrammarName": ["Store_List","String"],
        "omitted": [false,true],
        "multi": [false,false],
        "fieldDefault": function (keyOrIndex) {
            return AicFunctions.fieldDefault('storeflush',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return AicFunctions.xmlText('storeflush',inputs,next,isShadow,comment,attribute);
        }
    },
    "storeadd": {
        "type": "statement",
        "json": {
            "type": "storeadd",
            "message0": "商店进货： %1 物品 %2 数量 %3 品质 %4 额外参数 %5",
            "args0": [
                Object.assign({},AicBlocks.Store_List,{
                    "name": "arg1",
                    "default": "Night"
                }),
                Object.assign({},AicBlocks.Item_List,{
                    "name": "arg2",
                    "default": "mtr_elf_egg"
                }),
                Object.assign({},AicBlocks.String,{
                    "name": "arg3",
                    "text": "3"
                }),
                Object.assign({},AicBlocks.Grade_List,{
                    "name": "arg4",
                    "default": "3"
                }),
                Object.assign({},AicBlocks.String,{
                    "name": "arg5",
                    "text": ""
                })
            ],
            "inputsInline": true,
            "tooltip": "用来给指定商店临时添加某样货品，比如南丁格尔的三个精灵卵。",
            "helpUrl": "",
            "colour": 170,
            "previousStatement": "storeadd",
            "nextStatement": AicBlocks.statement
        },
        "generFunc": function(block) {
            var arg1 = block.getFieldValue('arg1');
            arg1 = AicFunctions.pre('Store_List')(arg1,block,'arg1','storeadd');
            var arg2 = block.getFieldValue('arg2');
            arg2 = AicFunctions.pre('Item_List')(arg2,block,'arg2','storeadd');
            var arg3 = block.getFieldValue('arg3');
            if (arg3==='') {
                throw new OmitedError(block,'arg3','storeadd');
            }
            arg3 = AicFunctions.pre('String')(arg3,block,'arg3','storeadd');
            var arg4 = block.getFieldValue('arg4');
            arg4 = AicFunctions.pre('Grade_List')(arg4,block,'arg4','storeadd');
            var arg5 = block.getFieldValue('arg5');
            arg5 = AicFunctions.pre('String')(arg5,block,'arg5','storeadd');
            var code = AicFunctions.defaultCode('storeadd',eval('['+AicBlocks['storeadd'].args.join(',')+']'),block);
            return code;
        },
        "args": ["arg1","arg2","arg3","arg4","arg5"],
        "argsType": ["field","field","field","field","field"],
        "argsGrammarName": ["Store_List","Item_List","String","Grade_List","String"],
        "omitted": [false,false,false,false,true],
        "multi": [false,false,false,false,false],
        "fieldDefault": function (keyOrIndex) {
            return AicFunctions.fieldDefault('storeadd',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return AicFunctions.xmlText('storeadd',inputs,next,isShadow,comment,attribute);
        }
    },
    "bench_cmd_execute": {
        "type": "statement",
        "json": {
            "type": "bench_cmd_execute",
            "message0": "执行长椅/卫生间操作： %1 额外参数 %2",
            "args0": [
                Object.assign({},AicBlocks.Bench_Cmd_List,{
                    "name": "arg1",
                    "default": "shower_cure_cloth"
                }),
                Object.assign({},AicBlocks.String,{
                    "name": "arg2",
                    "text": ""
                })
            ],
            "inputsInline": true,
            "tooltip": "目前认为「清洗身体、淋浴」和「清空已吃下的食物、小便（会清空食物效果）」这两组是一样的，两种「排出卵」则是生效条件不同。",
            "helpUrl": "",
            "colour": 170,
            "previousStatement": "bench_cmd_execute",
            "nextStatement": AicBlocks.statement
        },
        "generFunc": function(block) {
            var arg1 = block.getFieldValue('arg1');
            arg1 = AicFunctions.pre('Bench_Cmd_List')(arg1,block,'arg1','bench_cmd_execute');
            var arg2 = block.getFieldValue('arg2');
            arg2 = AicFunctions.pre('String')(arg2,block,'arg2','bench_cmd_execute');
            var code = AicFunctions.defaultCode('bench_cmd_execute',eval('['+AicBlocks['bench_cmd_execute'].args.join(',')+']'),block);
            return code;
        },
        "args": ["arg1","arg2"],
        "argsType": ["field","field"],
        "argsGrammarName": ["Bench_Cmd_List","String"],
        "omitted": [false,true],
        "multi": [false,false],
        "fieldDefault": function (keyOrIndex) {
            return AicFunctions.fieldDefault('bench_cmd_execute',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return AicFunctions.xmlText('bench_cmd_execute',inputs,next,isShadow,comment,attribute);
        }
    },
    "mgmtimer": {
        "type": "statement",
        "json": {
            "type": "mgmtimer",
            "message0": "限时取出物品： %1 限制秒数 %2 预备秒数 %3 右上角图标 %4 %5 如果超时 %6 如果选对 %7 选错或取消 %8",
            "args0": [
                Object.assign({},AicBlocks.Item_List,{
                    "name": "id",
                    "default": "scapecat"
                }),
                Object.assign({},AicBlocks.String,{
                    "name": "limit",
                    "text": "10"
                }),
                Object.assign({},AicBlocks.String,{
                    "name": "ready",
                    "text": "3"
                }),
                Object.assign({},AicBlocks.Icon_List,{
                    "name": "icon",
                    "default": "IconNoel0"
                }),
                {
                    "type": "input_dummy"
                },
                {
                    "type": "input_statement",
                    "name": "statement_0",
                    "check": AicBlocks.statement
                },
                {
                    "type": "input_statement",
                    "name": "statement_1",
                    "check": AicBlocks.statement
                },
                {
                    "type": "input_statement",
                    "name": "statement_2",
                    "check": AicBlocks.statement
                }
            ],
            "tooltip": "限制秒数填0表示无限（但右上角会不显示任何内容，需要另行告知玩家要选的物品）。选对的话，变量$__grade会记录持有所选物品的最高品质(０～４)。",
            "helpUrl": "",
            "colour": 170,
            "previousStatement": "mgmtimer",
            "nextStatement": AicBlocks.statement
        },
        "generFunc": function(block) {
            var id = block.getFieldValue('id');
            id = AicFunctions.pre('Item_List')(id,block,'id','mgmtimer');
            var limit = block.getFieldValue('limit');
            if (limit==='') {
                throw new OmitedError(block,'limit','mgmtimer');
            }
            limit = AicFunctions.pre('String')(limit,block,'limit','mgmtimer');
            var ready = block.getFieldValue('ready');
            if (ready==='') {
                throw new OmitedError(block,'ready','mgmtimer');
            }
            ready = AicFunctions.pre('String')(ready,block,'ready','mgmtimer');
            var icon = block.getFieldValue('icon');
            icon = AicFunctions.pre('Icon_List')(icon,block,'icon','mgmtimer');
            var statement_0 = Blockly.JavaScript.statementToCode(block, 'statement_0');
            var statement_1 = Blockly.JavaScript.statementToCode(block, 'statement_1');
            var statement_2 = Blockly.JavaScript.statementToCode(block, 'statement_2');
            var code = AicFunctions.defaultCode('mgmtimer',eval('['+AicBlocks['mgmtimer'].args.join(',')+']'),block);
            return code;
        },
        "args": ["id","limit","ready","icon","statement_0","statement_1","statement_2"],
        "argsType": ["field","field","field","field","statement","statement","statement"],
        "argsGrammarName": ["Item_List","String","String","Icon_List","statement","statement","statement"],
        "omitted": [false,false,false,false,true,true,true],
        "multi": [false,false,false,false,true,true,true],
        "fieldDefault": function (keyOrIndex) {
            return AicFunctions.fieldDefault('mgmtimer',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return AicFunctions.xmlText('mgmtimer',inputs,next,isShadow,comment,attribute);
        }
    },
    "pr_key_simulate": {
        "type": "statement",
        "json": {
            "type": "pr_key_simulate",
            "message0": "模拟按键： %1 额外参数 %2",
            "args0": [
                Object.assign({},AicBlocks.Keyboard_List,{
                    "name": "arg1",
                    "default": "T"
                }),
                Object.assign({},AicBlocks.String,{
                    "name": "arg2",
                    "text": ""
                })
            ],
            "inputsInline": true,
            "tooltip": "额外参数填0表示松开某个按键，不填表示按住某个按键。但是不知为何魔法键和攻击键无法单独生效，只能同时按下模拟圣光爆发。",
            "helpUrl": "",
            "colour": 215,
            "previousStatement": "pr_key_simulate",
            "nextStatement": AicBlocks.statement
        },
        "generFunc": function(block) {
            var arg1 = block.getFieldValue('arg1');
            arg1 = AicFunctions.pre('Keyboard_List')(arg1,block,'arg1','pr_key_simulate');
            var arg2 = block.getFieldValue('arg2');
            arg2 = AicFunctions.pre('String')(arg2,block,'arg2','pr_key_simulate');
            var code = AicFunctions.defaultCode('pr_key_simulate',eval('['+AicBlocks['pr_key_simulate'].args.join(',')+']'),block);
            return code;
        },
        "args": ["arg1","arg2"],
        "argsType": ["field","field"],
        "argsGrammarName": ["Keyboard_List","String"],
        "omitted": [false,true],
        "multi": [false,false],
        "fieldDefault": function (keyOrIndex) {
            return AicFunctions.fieldDefault('pr_key_simulate',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return AicFunctions.xmlText('pr_key_simulate',inputs,next,isShadow,comment,attribute);
        }
    },
    "pr_outfit": {
        "type": "statement",
        "json": {
            "type": "pr_outfit",
            "message0": "主角换装： %1",
            "args0": [
                Object.assign({},AicBlocks.Outfit_List,{
                    "name": "arg1",
                    "default": "DOJO"
                })
            ],
            "inputsInline": true,
            "tooltip": "睡裙状态下只能慢走和跳跃，道场训练服会用睡裙的动态立绘。",
            "helpUrl": "",
            "colour": 215,
            "previousStatement": "pr_outfit",
            "nextStatement": AicBlocks.statement
        },
        "generFunc": function(block) {
            var arg1 = block.getFieldValue('arg1');
            arg1 = AicFunctions.pre('Outfit_List')(arg1,block,'arg1','pr_outfit');
            var code = AicFunctions.defaultCode('pr_outfit',eval('['+AicBlocks['pr_outfit'].args.join(',')+']'),block);
            return code;
        },
        "args": ["arg1"],
        "argsType": ["field"],
        "argsGrammarName": ["Outfit_List"],
        "omitted": [false],
        "multi": [false],
        "fieldDefault": function (keyOrIndex) {
            return AicFunctions.fieldDefault('pr_outfit',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return AicFunctions.xmlText('pr_outfit',inputs,next,isShadow,comment,attribute);
        }
    },
    "pr_beto": {
        "type": "statement",
        "json": {
            "type": "pr_beto",
            "message0": "玷污主角动态立绘： %1",
            "args0": [
                Object.assign({},AicBlocks.Beto_List,{
                    "name": "arg1",
                    "default": "WEB_TRAPPED"
                })
            ],
            "inputsInline": true,
            "tooltip": "其中FREEZE或STONE_WHOLE要配合冻结或完全石化状态才合适。",
            "helpUrl": "",
            "colour": 215,
            "previousStatement": "pr_beto",
            "nextStatement": AicBlocks.statement
        },
        "generFunc": function(block) {
            var arg1 = block.getFieldValue('arg1');
            arg1 = AicFunctions.pre('Beto_List')(arg1,block,'arg1','pr_beto');
            var code = AicFunctions.defaultCode('pr_beto',eval('['+AicBlocks['pr_beto'].args.join(',')+']'),block);
            return code;
        },
        "args": ["arg1"],
        "argsType": ["field"],
        "argsGrammarName": ["Beto_List"],
        "omitted": [false],
        "multi": [false],
        "fieldDefault": function (keyOrIndex) {
            return AicFunctions.fieldDefault('pr_beto',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return AicFunctions.xmlText('pr_beto',inputs,next,isShadow,comment,attribute);
        }
    },
    "pr_breath": {
        "type": "statement",
        "json": {
            "type": "pr_breath",
            "message0": "改变主角呼吸声： %1",
            "args0": [
                Object.assign({},AicBlocks.Voice_List,{
                    "name": "arg1",
                    "default": "cough"
                })
            ],
            "inputsInline": true,
            "tooltip": "事件结束后会循环播放所选语音，直到做出任意战斗动作。",
            "helpUrl": "",
            "colour": 215,
            "previousStatement": "pr_breath",
            "nextStatement": AicBlocks.statement
        },
        "generFunc": function(block) {
            var arg1 = block.getFieldValue('arg1');
            arg1 = AicFunctions.pre('Voice_List')(arg1,block,'arg1','pr_breath');
            var code = AicFunctions.defaultCode('pr_breath',eval('['+AicBlocks['pr_breath'].args.join(',')+']'),block);
            return code;
        },
        "args": ["arg1"],
        "argsType": ["field"],
        "argsGrammarName": ["Voice_List"],
        "omitted": [false],
        "multi": [false],
        "fieldDefault": function (keyOrIndex) {
            return AicFunctions.fieldDefault('pr_breath',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return AicFunctions.xmlText('pr_breath',inputs,next,isShadow,comment,attribute);
        }
    },
    "pr_voice": {
        "type": "statement",
        "json": {
            "type": "pr_voice",
            "message0": "播放主角语音： %1",
            "args0": [
                Object.assign({},AicBlocks.Voice_List,{
                    "name": "arg1",
                    "default": "near_orgasm_iku"
                })
            ],
            "inputsInline": true,
            "tooltip": "本指令不能播放伊夏和阿尔玛等同学的语音。",
            "helpUrl": "",
            "colour": 215,
            "previousStatement": "pr_voice",
            "nextStatement": AicBlocks.statement
        },
        "generFunc": function(block) {
            var arg1 = block.getFieldValue('arg1');
            arg1 = AicFunctions.pre('Voice_List')(arg1,block,'arg1','pr_voice');
            var code = AicFunctions.defaultCode('pr_voice',eval('['+AicBlocks['pr_voice'].args.join(',')+']'),block);
            return code;
        },
        "args": ["arg1"],
        "argsType": ["field"],
        "argsGrammarName": ["Voice_List"],
        "omitted": [false],
        "multi": [false],
        "fieldDefault": function (keyOrIndex) {
            return AicFunctions.fieldDefault('pr_voice',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return AicFunctions.xmlText('pr_voice',inputs,next,isShadow,comment,attribute);
        }
    },
    "pr_gacha": {
        "type": "statement",
        "json": {
            "type": "pr_gacha",
            "message0": "QTE挑战： %1 次数 %2 额外参数 %3",
            "args0": [
                Object.assign({},AicBlocks.Gacha_List,{
                    "name": "arg1",
                    "default": "PENDULUM"
                }),
                Object.assign({},AicBlocks.String,{
                    "name": "arg2",
                    "text": "2"
                }),
                Object.assign({},AicBlocks.String,{
                    "name": "arg3",
                    "text": "P[confused]F"
                })
            ],
            "inputsInline": true,
            "tooltip": "挑战结束后变量$_result会被代入1（成功）或0（失败），额外参数中F表示失败时不重试，P[xxx]表示挑战时的姿势。",
            "helpUrl": "",
            "colour": 215,
            "previousStatement": "pr_gacha",
            "nextStatement": AicBlocks.statement
        },
        "generFunc": function(block) {
            var arg1 = block.getFieldValue('arg1');
            arg1 = AicFunctions.pre('Gacha_List')(arg1,block,'arg1','pr_gacha');
            var arg2 = block.getFieldValue('arg2');
            if (arg2==='') {
                throw new OmitedError(block,'arg2','pr_gacha');
            }
            arg2 = AicFunctions.pre('String')(arg2,block,'arg2','pr_gacha');
            var arg3 = block.getFieldValue('arg3');
            arg3 = AicFunctions.pre('String')(arg3,block,'arg3','pr_gacha');
            var code = AicFunctions.defaultCode('pr_gacha',eval('['+AicBlocks['pr_gacha'].args.join(',')+']'),block);
            return code;
        },
        "args": ["arg1","arg2","arg3"],
        "argsType": ["field","field","field"],
        "argsGrammarName": ["Gacha_List","String","String"],
        "omitted": [false,false,true],
        "multi": [false,false,false],
        "fieldDefault": function (keyOrIndex) {
            return AicFunctions.fieldDefault('pr_gacha',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return AicFunctions.xmlText('pr_gacha',inputs,next,isShadow,comment,attribute);
        }
    },
    "pr_cure": {
        "type": "statement",
        "json": {
            "type": "pr_cure",
            "message0": "治疗角色： 是否定量 %1 生命 %2 魔力 %3 额外参数 %4",
            "args0": [
                Object.assign({},AicBlocks.Bool,{
                    "name": "Bool_0",
                    "checked": false
                }),
                Object.assign({},AicBlocks.String,{
                    "name": "arg1",
                    "text": "1"
                }),
                Object.assign({},AicBlocks.String,{
                    "name": "arg2",
                    "text": "1"
                }),
                Object.assign({},AicBlocks.String,{
                    "name": "arg3",
                    "text": ""
                })
            ],
            "inputsInline": true,
            "tooltip": "定量模式下（对应原生指令MV_CURE）生命和魔力支持填写具体的恢复量（而不是填1表示回满）。",
            "helpUrl": "",
            "colour": 215,
            "previousStatement": "pr_cure",
            "nextStatement": AicBlocks.statement
        },
        "generFunc": function(block) {
            var Bool_0 = block.getFieldValue('Bool_0') === 'TRUE';
            Bool_0 = AicFunctions.pre('Bool')(Bool_0,block,'Bool_0','pr_cure');
            var arg1 = block.getFieldValue('arg1');
            if (arg1==='') {
                throw new OmitedError(block,'arg1','pr_cure');
            }
            arg1 = AicFunctions.pre('String')(arg1,block,'arg1','pr_cure');
            var arg2 = block.getFieldValue('arg2');
            if (arg2==='') {
                throw new OmitedError(block,'arg2','pr_cure');
            }
            arg2 = AicFunctions.pre('String')(arg2,block,'arg2','pr_cure');
            var arg3 = block.getFieldValue('arg3');
            arg3 = AicFunctions.pre('String')(arg3,block,'arg3','pr_cure');
            var code = AicFunctions.defaultCode('pr_cure',eval('['+AicBlocks['pr_cure'].args.join(',')+']'),block);
            return code;
        },
        "args": ["Bool_0","arg1","arg2","arg3"],
        "argsType": ["field","field","field","field"],
        "argsGrammarName": ["Bool","String","String","String"],
        "omitted": [false,false,false,true],
        "multi": [false,false,false,false],
        "fieldDefault": function (keyOrIndex) {
            return AicFunctions.fieldDefault('pr_cure',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return AicFunctions.xmlText('pr_cure',inputs,next,isShadow,comment,attribute);
        }
    },
    "ser_apply": {
        "type": "statement",
        "json": {
            "type": "ser_apply",
            "message0": "获得异常状态： %1 额外参数 %2",
            "args0": [
                Object.assign({},AicBlocks.Ser_List,{
                    "name": "arg1",
                    "default": "BURNED"
                }),
                Object.assign({},AicBlocks.String,{
                    "name": "arg2",
                    "text": ""
                })
            ],
            "inputsInline": true,
            "tooltip": "部分异常状态（晕厥、睡眠等）支持用额外参数指定持续帧数，部分异常状态（晕乎乎、疲惫等）可以多次使用本指令来叠加等级。",
            "helpUrl": "",
            "colour": 215,
            "previousStatement": "ser_apply",
            "nextStatement": AicBlocks.statement
        },
        "generFunc": function(block) {
            var arg1 = block.getFieldValue('arg1');
            arg1 = AicFunctions.pre('Ser_List')(arg1,block,'arg1','ser_apply');
            var arg2 = block.getFieldValue('arg2');
            arg2 = AicFunctions.pre('String')(arg2,block,'arg2','ser_apply');
            var code = AicFunctions.defaultCode('ser_apply',eval('['+AicBlocks['ser_apply'].args.join(',')+']'),block);
            return code;
        },
        "args": ["arg1","arg2"],
        "argsType": ["field","field"],
        "argsGrammarName": ["Ser_List","String"],
        "omitted": [false,true],
        "multi": [false,false],
        "fieldDefault": function (keyOrIndex) {
            return AicFunctions.fieldDefault('ser_apply',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return AicFunctions.xmlText('ser_apply',inputs,next,isShadow,comment,attribute);
        }
    },
    "wait": {
        "type": "statement",
        "json": {
            "type": "wait",
            "message0": "等待 %1 帧 是否可被按键打断 %2",
            "args0": [
                Object.assign({},AicBlocks.String,{
                    "name": "String_0",
                    "text": "60"
                }),
                Object.assign({},AicBlocks.Bool,{
                    "name": "Bool_0",
                    "checked": false
                })
            ],
            "inputsInline": true,
            "tooltip": "如果希望无限期等待且只能被按键打断，则勾选后不要填写帧数。",
            "helpUrl": "",
            "colour": 305,
            "previousStatement": "wait",
            "nextStatement": AicBlocks.statement
        },
        "generFunc": function(block) {
            var String_0 = block.getFieldValue('String_0');
            String_0 = AicFunctions.pre('String')(String_0,block,'String_0','wait');
            var Bool_0 = block.getFieldValue('Bool_0') === 'TRUE';
            Bool_0 = AicFunctions.pre('Bool')(Bool_0,block,'Bool_0','wait');
            var code = AicFunctions.defaultCode('wait',eval('['+AicBlocks['wait'].args.join(',')+']'),block);
            return code;
        },
        "args": ["String_0","Bool_0"],
        "argsType": ["field","field"],
        "argsGrammarName": ["String","Bool"],
        "omitted": [true,false],
        "multi": [false,false],
        "fieldDefault": function (keyOrIndex) {
            return AicFunctions.fieldDefault('wait',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return AicFunctions.xmlText('wait',inputs,next,isShadow,comment,attribute);
        }
    },
    "setTimeout": {
        "type": "statement",
        "json": {
            "type": "setTimeout",
            "message0": "延迟执行 %1 帧 %2",
            "args0": [
                Object.assign({},AicBlocks.String,{
                    "name": "String_0",
                    "text": "60"
                }),
                {
                    "type": "input_statement",
                    "name": "statement_0",
                    "check": AicBlocks.statement
                }
            ],
            "inputsInline": true,
            "tooltip": "不可以用来延迟复杂的多行指令！如果帧数不填，则默认延迟到下一条对话显示完成时。",
            "helpUrl": "",
            "colour": 305,
            "previousStatement": "setTimeout",
            "nextStatement": AicBlocks.statement
        },
        "generFunc": function(block) {
            var String_0 = block.getFieldValue('String_0');
            String_0 = AicFunctions.pre('String')(String_0,block,'String_0','setTimeout');
            var statement_0 = Blockly.JavaScript.statementToCode(block, 'statement_0');
            var code = AicFunctions.defaultCode('setTimeout',eval('['+AicBlocks['setTimeout'].args.join(',')+']'),block);
            return code;
        },
        "args": ["String_0","statement_0"],
        "argsType": ["field","statement"],
        "argsGrammarName": ["String","statement"],
        "omitted": [true,true],
        "multi": [false,true],
        "fieldDefault": function (keyOrIndex) {
            return AicFunctions.fieldDefault('setTimeout',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return AicFunctions.xmlText('setTimeout',inputs,next,isShadow,comment,attribute);
        }
    },
    "module": {
        "type": "statement",
        "json": {
            "type": "module",
            "message0": "调用另一事件： 模式 %1 事件ID %2 传入参数 %3",
            "args0": [
                Object.assign({},AicBlocks.Module_List,{
                    "name": "arg0",
                    "default": "CHANGE_EVENT2"
                }),
                Object.assign({},AicBlocks.String,{
                    "name": "arg1",
                    "text": "107/51_tigrina_blackhole"
                }),
                Object.assign({},AicBlocks.String,{
                    "name": "arg2",
                    "text": ""
                })
            ],
            "inputsInline": true,
            "tooltip": "事件ID指的是事件cmd文件在evt文件夹下的相对路径，可在事件运行过程中按F7在右上角查看。",
            "helpUrl": "",
            "colour": 305,
            "previousStatement": "module",
            "nextStatement": AicBlocks.statement
        },
        "generFunc": function(block) {
            var arg0 = block.getFieldValue('arg0');
            arg0 = AicFunctions.pre('Module_List')(arg0,block,'arg0','module');
            var arg1 = block.getFieldValue('arg1');
            if (arg1==='') {
                throw new OmitedError(block,'arg1','module');
            }
            arg1 = AicFunctions.pre('String')(arg1,block,'arg1','module');
            var arg2 = block.getFieldValue('arg2');
            arg2 = AicFunctions.pre('String')(arg2,block,'arg2','module');
            var code = AicFunctions.defaultCode('module',eval('['+AicBlocks['module'].args.join(',')+']'),block);
            return code;
        },
        "args": ["arg0","arg1","arg2"],
        "argsType": ["field","field","field"],
        "argsGrammarName": ["Module_List","String","String"],
        "omitted": [false,false,true],
        "multi": [false,false,false],
        "fieldDefault": function (keyOrIndex) {
            return AicFunctions.fieldDefault('module',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return AicFunctions.xmlText('module',inputs,next,isShadow,comment,attribute);
        }
    },
    "numcounter": {
        "type": "statement",
        "json": {
            "type": "numcounter",
            "message0": "输入整数： 最小值 %1 最大值 %2 默认值 %3 正解值 %4",
            "args0": [
                Object.assign({},AicBlocks.String,{
                    "name": "arg1",
                    "text": "0"
                }),
                Object.assign({},AicBlocks.String,{
                    "name": "arg2",
                    "text": "1410065407"
                }),
                Object.assign({},AicBlocks.String,{
                    "name": "arg3",
                    "text": "1111111111"
                }),
                Object.assign({},AicBlocks.String,{
                    "name": "arg4",
                    "text": ""
                })
            ],
            "inputsInline": true,
            "tooltip": "输入值会被保存在变量$_result中，输入正解值会有开锁特效。",
            "helpUrl": "",
            "colour": 305,
            "previousStatement": "numcounter",
            "nextStatement": AicBlocks.statement
        },
        "generFunc": function(block) {
            var arg1 = block.getFieldValue('arg1');
            if (arg1==='') {
                throw new OmitedError(block,'arg1','numcounter');
            }
            arg1 = AicFunctions.pre('String')(arg1,block,'arg1','numcounter');
            var arg2 = block.getFieldValue('arg2');
            if (arg2==='') {
                throw new OmitedError(block,'arg2','numcounter');
            }
            arg2 = AicFunctions.pre('String')(arg2,block,'arg2','numcounter');
            var arg3 = block.getFieldValue('arg3');
            if (arg3==='') {
                throw new OmitedError(block,'arg3','numcounter');
            }
            arg3 = AicFunctions.pre('String')(arg3,block,'arg3','numcounter');
            var arg4 = block.getFieldValue('arg4');
            arg4 = AicFunctions.pre('String')(arg4,block,'arg4','numcounter');
            var code = AicFunctions.defaultCode('numcounter',eval('['+AicBlocks['numcounter'].args.join(',')+']'),block);
            return code;
        },
        "args": ["arg1","arg2","arg3","arg4"],
        "argsType": ["field","field","field","field"],
        "argsGrammarName": ["String","String","String","String"],
        "omitted": [false,false,false,true],
        "multi": [false,false,false,false],
        "fieldDefault": function (keyOrIndex) {
            return AicFunctions.fieldDefault('numcounter',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return AicFunctions.xmlText('numcounter',inputs,next,isShadow,comment,attribute);
        }
    },
    "select_case": {
        "type": "statement",
        "json": {
            "type": "select_case",
            "message0": "选项列表（标签跳转模式） %1 %2",
            "args0": [
                {
                    "type": "input_dummy"
                },
                {
                    "type": "input_statement",
                    "name": "choice_case_0",
                    "check": "choice_case"
                }
            ],
            "tooltip": "标签跳转模式在选中不同选项后直接执行不同的指令。",
            "helpUrl": "",
            "colour": 305,
            "previousStatement": "select_case",
            "nextStatement": AicBlocks.statement
        },
        "generFunc": function(block) {
            var choice_case_0 = Blockly.JavaScript.statementToCode(block, 'choice_case_0');
            var code = AicFunctions.defaultCode('select_case',eval('['+AicBlocks['select_case'].args.join(',')+']'),block);
            return code;
        },
        "args": ["choice_case_0"],
        "argsType": ["statement"],
        "argsGrammarName": ["choice_case"],
        "omitted": [true],
        "multi": [true],
        "fieldDefault": function (keyOrIndex) {
            return AicFunctions.fieldDefault('select_case',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return AicFunctions.xmlText('select_case',inputs,next,isShadow,comment,attribute);
        }
    },
    "choice_case": {
        "type": "statement",
        "json": {
            "type": "choice_case",
            "message0": "子选项： %1 绿底叹号 %2 额外设置 %3 自动break %4 %5 %6",
            "args0": [
                Object.assign({},AicBlocks.String,{
                    "name": "arg0",
                    "text": "确认许可"
                }),
                Object.assign({},AicBlocks.Bool,{
                    "name": "quest",
                    "checked": false
                }),
                Object.assign({},AicBlocks.ChoiceFlag_List,{
                    "name": "arg2",
                    "default": ""
                }),
                Object.assign({},AicBlocks.Bool,{
                    "name": "Bool_1",
                    "checked": true
                }),
                {
                    "type": "input_dummy"
                },
                {
                    "type": "input_statement",
                    "name": "statement_0",
                    "check": AicBlocks.statement
                }
            ],
            "tooltip": "这里的break是switch语句中的概念，如果不懂请保持勾选。",
            "helpUrl": "",
            "colour": 260,
            "previousStatement": "choice_case",
            "nextStatement": "choice_case"
        },
        "generFunc": function(block) {
            var arg0 = block.getFieldValue('arg0');
            if (arg0==='') {
                throw new OmitedError(block,'arg0','choice_case');
            }
            arg0 = AicFunctions.pre('String')(arg0,block,'arg0','choice_case');
            var quest = block.getFieldValue('quest') === 'TRUE';
            quest = AicFunctions.pre('Bool')(quest,block,'quest','choice_case');
            var arg2 = block.getFieldValue('arg2');
            arg2 = AicFunctions.pre('ChoiceFlag_List')(arg2,block,'arg2','choice_case');
            var Bool_1 = block.getFieldValue('Bool_1') === 'TRUE';
            Bool_1 = AicFunctions.pre('Bool')(Bool_1,block,'Bool_1','choice_case');
            var statement_0 = Blockly.JavaScript.statementToCode(block, 'statement_0');
            var code = AicFunctions.defaultCode('choice_case',eval('['+AicBlocks['choice_case'].args.join(',')+']'),block);
            return code;
        },
        "args": ["arg0","quest","arg2","Bool_1","statement_0"],
        "argsType": ["field","field","field","field","statement"],
        "argsGrammarName": ["String","Bool","ChoiceFlag_List","Bool","statement"],
        "omitted": [false,false,false,false,true],
        "multi": [false,false,false,false,true],
        "fieldDefault": function (keyOrIndex) {
            return AicFunctions.fieldDefault('choice_case',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return AicFunctions.xmlText('choice_case',inputs,next,isShadow,comment,attribute);
        }
    },
    "select_str": {
        "type": "statement",
        "json": {
            "type": "select_str",
            "message0": "选项列表（字符串变量模式）： 变量名 %1 %2 %3",
            "args0": [
                Object.assign({},AicBlocks.String,{
                    "name": "String_0",
                    "text": "_result"
                }),
                {
                    "type": "input_dummy"
                },
                {
                    "type": "input_statement",
                    "name": "choice_str_0",
                    "check": "choice_str"
                }
            ],
            "tooltip": "选中某个选项后会将对应的字符串代入变量，需要后续判断。",
            "helpUrl": "",
            "colour": 305,
            "previousStatement": "select_str",
            "nextStatement": AicBlocks.statement
        },
        "generFunc": function(block) {
            var String_0 = block.getFieldValue('String_0');
            if (String_0==='') {
                throw new OmitedError(block,'String_0','select_str');
            }
            String_0 = AicFunctions.pre('String')(String_0,block,'String_0','select_str');
            var choice_str_0 = Blockly.JavaScript.statementToCode(block, 'choice_str_0');
            var code = AicFunctions.defaultCode('select_str',eval('['+AicBlocks['select_str'].args.join(',')+']'),block);
            return code;
        },
        "args": ["String_0","choice_str_0"],
        "argsType": ["field","statement"],
        "argsGrammarName": ["String","choice_str"],
        "omitted": [false,true],
        "multi": [false,true],
        "fieldDefault": function (keyOrIndex) {
            return AicFunctions.fieldDefault('select_str',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return AicFunctions.xmlText('select_str',inputs,next,isShadow,comment,attribute);
        }
    },
    "choice_str": {
        "type": "statement",
        "json": {
            "type": "choice_str",
            "message0": "子选项： %1 代入字符串 %2 绿底叹号 %3 额外设置 %4",
            "args0": [
                Object.assign({},AicBlocks.String,{
                    "name": "arg0",
                    "text": "确认许可"
                }),
                Object.assign({},AicBlocks.String,{
                    "name": "arg1",
                    "text": "accept"
                }),
                Object.assign({},AicBlocks.Bool,{
                    "name": "Bool_0",
                    "checked": false
                }),
                Object.assign({},AicBlocks.ChoiceFlag_List,{
                    "name": "arg2",
                    "default": ""
                })
            ],
            "inputsInline": true,
            "tooltip": "如果不填写代入字符串，就会使用显示内容（但不对&&词条做替换）。",
            "helpUrl": "",
            "colour": 260,
            "previousStatement": "choice_str",
            "nextStatement": "choice_str"
        },
        "generFunc": function(block) {
            var arg0 = block.getFieldValue('arg0');
            if (arg0==='') {
                throw new OmitedError(block,'arg0','choice_str');
            }
            arg0 = AicFunctions.pre('String')(arg0,block,'arg0','choice_str');
            var arg1 = block.getFieldValue('arg1');
            arg1 = AicFunctions.pre('String')(arg1,block,'arg1','choice_str');
            var Bool_0 = block.getFieldValue('Bool_0') === 'TRUE';
            Bool_0 = AicFunctions.pre('Bool')(Bool_0,block,'Bool_0','choice_str');
            var arg2 = block.getFieldValue('arg2');
            arg2 = AicFunctions.pre('ChoiceFlag_List')(arg2,block,'arg2','choice_str');
            var code = AicFunctions.defaultCode('choice_str',eval('['+AicBlocks['choice_str'].args.join(',')+']'),block);
            return code;
        },
        "args": ["arg0","arg1","Bool_0","arg2"],
        "argsType": ["field","field","field","field"],
        "argsGrammarName": ["String","String","Bool","ChoiceFlag_List"],
        "omitted": [false,true,false,false],
        "multi": [false,false,false,false],
        "fieldDefault": function (keyOrIndex) {
            return AicFunctions.fieldDefault('choice_str',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return AicFunctions.xmlText('choice_str',inputs,next,isShadow,comment,attribute);
        }
    },
    "ifthen": {
        "type": "statement",
        "json": {
            "type": "ifthen",
            "message0": "如果 %1 %2 %3 %4",
            "args0": [
                Object.assign({},AicBlocks.IfElse_List,{
                    "name": "arg0",
                    "default": "IF"
                }),
                Object.assign({},AicBlocks.String,{
                    "name": "arg1",
                    "text": "is_night"
                }),
                {
                    "type": "input_dummy"
                },
                {
                    "type": "input_statement",
                    "name": "statement_0",
                    "check": AicBlocks.statement
                }
            ],
            "tooltip": "不带「否则」的条件分歧，后面可以紧跟ELSIFXXX形成多重分歧。",
            "helpUrl": "",
            "colour": 305,
            "previousStatement": "ifthen",
            "nextStatement": AicBlocks.statement
        },
        "generFunc": function(block) {
            var arg0 = block.getFieldValue('arg0');
            arg0 = AicFunctions.pre('IfElse_List')(arg0,block,'arg0','ifthen');
            var arg1 = block.getFieldValue('arg1');
            if (arg1==='') {
                throw new OmitedError(block,'arg1','ifthen');
            }
            arg1 = AicFunctions.pre('String')(arg1,block,'arg1','ifthen');
            var statement_0 = Blockly.JavaScript.statementToCode(block, 'statement_0');
            var code = AicFunctions.defaultCode('ifthen',eval('['+AicBlocks['ifthen'].args.join(',')+']'),block);
            return code;
        },
        "args": ["arg0","arg1","statement_0"],
        "argsType": ["field","field","statement"],
        "argsGrammarName": ["IfElse_List","String","statement"],
        "omitted": [false,false,true],
        "multi": [false,false,true],
        "fieldDefault": function (keyOrIndex) {
            return AicFunctions.fieldDefault('ifthen',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return AicFunctions.xmlText('ifthen',inputs,next,isShadow,comment,attribute);
        }
    },
    "ifelse": {
        "type": "statement",
        "json": {
            "type": "ifelse",
            "message0": "如果 %1 %2 %3 %4 否则 %5",
            "args0": [
                Object.assign({},AicBlocks.IfElse_List,{
                    "name": "arg0",
                    "default": "IF"
                }),
                Object.assign({},AicBlocks.String,{
                    "name": "arg1",
                    "text": "is_night"
                }),
                {
                    "type": "input_dummy"
                },
                {
                    "type": "input_statement",
                    "name": "statement_0",
                    "check": AicBlocks.statement
                },
                {
                    "type": "input_statement",
                    "name": "statement_1",
                    "check": AicBlocks.statement
                }
            ],
            "tooltip": "IFLANG可用于判断语言设置，此时参数为localization下的各文件夹名，但要大写。",
            "helpUrl": "",
            "colour": 305,
            "previousStatement": "ifelse",
            "nextStatement": AicBlocks.statement
        },
        "generFunc": function(block) {
            var arg0 = block.getFieldValue('arg0');
            arg0 = AicFunctions.pre('IfElse_List')(arg0,block,'arg0','ifelse');
            var arg1 = block.getFieldValue('arg1');
            if (arg1==='') {
                throw new OmitedError(block,'arg1','ifelse');
            }
            arg1 = AicFunctions.pre('String')(arg1,block,'arg1','ifelse');
            var statement_0 = Blockly.JavaScript.statementToCode(block, 'statement_0');
            var statement_1 = Blockly.JavaScript.statementToCode(block, 'statement_1');
            var code = AicFunctions.defaultCode('ifelse',eval('['+AicBlocks['ifelse'].args.join(',')+']'),block);
            return code;
        },
        "args": ["arg0","arg1","statement_0","statement_1"],
        "argsType": ["field","field","statement","statement"],
        "argsGrammarName": ["IfElse_List","String","statement","statement"],
        "omitted": [false,false,true,true],
        "multi": [false,false,true,true],
        "fieldDefault": function (keyOrIndex) {
            return AicFunctions.fieldDefault('ifelse',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return AicFunctions.xmlText('ifelse',inputs,next,isShadow,comment,attribute);
        }
    },
    "ifstr": {
        "type": "statement",
        "json": {
            "type": "ifstr",
            "message0": "如果字符串 %1 %2 %3 %4 %5 否则 %6",
            "args0": [
                Object.assign({},AicBlocks.String,{
                    "name": "x",
                    "text": "kawaisou"
                }),
                Object.assign({},AicBlocks.Ifstr_List,{
                    "name": "op",
                    "default": "STARTS"
                }),
                Object.assign({},AicBlocks.String,{
                    "name": "y",
                    "text": "kawai"
                }),
                {
                    "type": "input_dummy"
                },
                {
                    "type": "input_statement",
                    "name": "statement_0",
                    "check": AicBlocks.statement
                },
                {
                    "type": "input_statement",
                    "name": "statement_1",
                    "check": AicBlocks.statement
                }
            ],
            "tooltip": "用于判断两个字符串的包含和前后缀关系，字符串常量用单引号包裹。",
            "helpUrl": "",
            "colour": 305,
            "previousStatement": "ifstr",
            "nextStatement": AicBlocks.statement
        },
        "generFunc": function(block) {
            var x = block.getFieldValue('x');
            if (x==='') {
                throw new OmitedError(block,'x','ifstr');
            }
            x = AicFunctions.pre('String')(x,block,'x','ifstr');
            var op = block.getFieldValue('op');
            op = AicFunctions.pre('Ifstr_List')(op,block,'op','ifstr');
            var y = block.getFieldValue('y');
            if (y==='') {
                throw new OmitedError(block,'y','ifstr');
            }
            y = AicFunctions.pre('String')(y,block,'y','ifstr');
            var statement_0 = Blockly.JavaScript.statementToCode(block, 'statement_0');
            var statement_1 = Blockly.JavaScript.statementToCode(block, 'statement_1');
            var code = AicFunctions.defaultCode('ifstr',eval('['+AicBlocks['ifstr'].args.join(',')+']'),block);
            return code;
        },
        "args": ["x","op","y","statement_0","statement_1"],
        "argsType": ["field","field","field","statement","statement"],
        "argsGrammarName": ["String","Ifstr_List","String","statement","statement"],
        "omitted": [false,false,false,true,true],
        "multi": [false,false,false,true,true],
        "fieldDefault": function (keyOrIndex) {
            return AicFunctions.fieldDefault('ifstr',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return AicFunctions.xmlText('ifstr',inputs,next,isShadow,comment,attribute);
        }
    },
    "loop": {
        "type": "statement",
        "json": {
            "type": "loop",
            "message0": "循环执行 %1 条件 %2 %3 %4 %5",
            "args0": [
                Object.assign({},AicBlocks.Loop_List,{
                    "name": "Loop_List_0",
                    "default": "dowhile"
                }),
                Object.assign({},AicBlocks.If_List,{
                    "name": "If_List_0",
                    "default": "IF"
                }),
                Object.assign({},AicBlocks.String,{
                    "name": "String_0",
                    "text": "0"
                }),
                {
                    "type": "input_dummy"
                },
                {
                    "type": "input_statement",
                    "name": "statement_0",
                    "check": AicBlocks.statement
                }
            ],
            "tooltip": "带do的会至少循环一轮（首轮不检查条件是否成立），带until的表示否定条件（条件不成立时继续循环）。",
            "helpUrl": "",
            "colour": 305,
            "previousStatement": "loop",
            "nextStatement": AicBlocks.statement
        },
        "generFunc": function(block) {
            var Loop_List_0 = block.getFieldValue('Loop_List_0');
            Loop_List_0 = AicFunctions.pre('Loop_List')(Loop_List_0,block,'Loop_List_0','loop');
            var If_List_0 = block.getFieldValue('If_List_0');
            If_List_0 = AicFunctions.pre('If_List')(If_List_0,block,'If_List_0','loop');
            var String_0 = block.getFieldValue('String_0');
            if (String_0==='') {
                throw new OmitedError(block,'String_0','loop');
            }
            String_0 = AicFunctions.pre('String')(String_0,block,'String_0','loop');
            var statement_0 = Blockly.JavaScript.statementToCode(block, 'statement_0');
            var code = AicFunctions.defaultCode('loop',eval('['+AicBlocks['loop'].args.join(',')+']'),block);
            return code;
        },
        "args": ["Loop_List_0","If_List_0","String_0","statement_0"],
        "argsType": ["field","field","field","statement"],
        "argsGrammarName": ["Loop_List","If_List","String","statement"],
        "omitted": [false,false,false,true],
        "multi": [false,false,false,true],
        "fieldDefault": function (keyOrIndex) {
            return AicFunctions.fieldDefault('loop',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return AicFunctions.xmlText('loop',inputs,next,isShadow,comment,attribute);
        }
    },
    "mgm_4ascend": {
        "type": "statement",
        "json": {
            "type": "mgm_4ascend",
            "message0": "启动四子棋： 棋手列表 %1",
            "args0": [
                Object.assign({},AicBlocks.String,{
                    "name": "String_0",
                    "text": "ostrea ixia alma primula _auto _local2p _online"
                })
            ],
            "inputsInline": true,
            "tooltip": "列表中的_auto表示自动包含已对决过的电脑棋手（因此前四个可以只留下alma），最后两个表示本地对战和在线对战。",
            "helpUrl": "",
            "colour": 350,
            "previousStatement": "mgm_4ascend",
            "nextStatement": AicBlocks.statement
        },
        "generFunc": function(block) {
            var String_0 = block.getFieldValue('String_0');
            if (String_0==='') {
                throw new OmitedError(block,'String_0','mgm_4ascend');
            }
            String_0 = AicFunctions.pre('String')(String_0,block,'String_0','mgm_4ascend');
            var code = AicFunctions.defaultCode('mgm_4ascend',eval('['+AicBlocks['mgm_4ascend'].args.join(',')+']'),block);
            return code;
        },
        "args": ["String_0"],
        "argsType": ["field"],
        "argsGrammarName": ["String"],
        "omitted": [false],
        "multi": [false],
        "fieldDefault": function (keyOrIndex) {
            return AicFunctions.fieldDefault('mgm_4ascend',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return AicFunctions.xmlText('mgm_4ascend',inputs,next,isShadow,comment,attribute);
        }
    },
    "replace_bgm": {
        "type": "statement",
        "json": {
            "type": "replace_bgm",
            "message0": "切换音乐： %1 淡出帧数 %2 淡入帧数 %3 释放内存 %4",
            "args0": [
                Object.assign({},AicBlocks.Bgm_List,{
                    "name": "arg0",
                    "default": "houkago_no_hitotoki"
                }),
                Object.assign({},AicBlocks.String,{
                    "name": "arg1",
                    "text": "30"
                }),
                Object.assign({},AicBlocks.String,{
                    "name": "arg2",
                    "text": "30"
                }),
                Object.assign({},AicBlocks.Bool,{
                    "name": "Bool_0",
                    "checked": false
                })
            ],
            "inputsInline": true,
            "tooltip": "相当于LOAD_BGM和REPLACE_BGM两条原生指令连用。",
            "helpUrl": "",
            "colour": 350,
            "previousStatement": "replace_bgm",
            "nextStatement": AicBlocks.statement
        },
        "generFunc": function(block) {
            var arg0 = block.getFieldValue('arg0');
            arg0 = AicFunctions.pre('Bgm_List')(arg0,block,'arg0','replace_bgm');
            var arg1 = block.getFieldValue('arg1');
            if (arg1==='') {
                throw new OmitedError(block,'arg1','replace_bgm');
            }
            arg1 = AicFunctions.pre('String')(arg1,block,'arg1','replace_bgm');
            var arg2 = block.getFieldValue('arg2');
            if (arg2==='') {
                throw new OmitedError(block,'arg2','replace_bgm');
            }
            arg2 = AicFunctions.pre('String')(arg2,block,'arg2','replace_bgm');
            var Bool_0 = block.getFieldValue('Bool_0') === 'TRUE';
            Bool_0 = AicFunctions.pre('Bool')(Bool_0,block,'Bool_0','replace_bgm');
            var code = AicFunctions.defaultCode('replace_bgm',eval('['+AicBlocks['replace_bgm'].args.join(',')+']'),block);
            return code;
        },
        "args": ["arg0","arg1","arg2","Bool_0"],
        "argsType": ["field","field","field","field"],
        "argsGrammarName": ["Bgm_List","String","String","Bool"],
        "omitted": [false,false,false,false],
        "multi": [false,false,false,false],
        "fieldDefault": function (keyOrIndex) {
            return AicFunctions.fieldDefault('replace_bgm',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return AicFunctions.xmlText('replace_bgm',inputs,next,isShadow,comment,attribute);
        }
    },
    "posteffect": {
        "type": "statement",
        "json": {
            "type": "posteffect",
            "message0": "后期特效： %1 额外参数 %2",
            "args0": [
                Object.assign({},AicBlocks.PostEffect_List,{
                    "name": "arg1",
                    "default": "RAIN"
                }),
                Object.assign({},AicBlocks.String,{
                    "name": "arg2",
                    "text": "60"
                })
            ],
            "inputsInline": true,
            "tooltip": "额外参数的第一项为淡入帧数，如果对一个已经存在的特效填-1，就会用和之前淡入时相同的帧数淡出。",
            "helpUrl": "",
            "colour": 350,
            "previousStatement": "posteffect",
            "nextStatement": AicBlocks.statement
        },
        "generFunc": function(block) {
            var arg1 = block.getFieldValue('arg1');
            arg1 = AicFunctions.pre('PostEffect_List')(arg1,block,'arg1','posteffect');
            var arg2 = block.getFieldValue('arg2');
            arg2 = AicFunctions.pre('String')(arg2,block,'arg2','posteffect');
            var code = AicFunctions.defaultCode('posteffect',eval('['+AicBlocks['posteffect'].args.join(',')+']'),block);
            return code;
        },
        "args": ["arg1","arg2"],
        "argsType": ["field","field"],
        "argsGrammarName": ["PostEffect_List","String"],
        "omitted": [false,true],
        "multi": [false,false],
        "fieldDefault": function (keyOrIndex) {
            return AicFunctions.fieldDefault('posteffect',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return AicFunctions.xmlText('posteffect',inputs,next,isShadow,comment,attribute);
        }
    },
    "pe_fadeinout": {
        "type": "statement",
        "json": {
            "type": "pe_fadeinout",
            "message0": "临时后期特效： %1 淡入淡出帧数 %2 停留帧数 %3 额外参数 %4",
            "args0": [
                Object.assign({},AicBlocks.PostEffect_List,{
                    "name": "arg1",
                    "default": "STONEOVER"
                }),
                Object.assign({},AicBlocks.String,{
                    "name": "arg2",
                    "text": "45"
                }),
                Object.assign({},AicBlocks.String,{
                    "name": "arg3",
                    "text": "30"
                }),
                Object.assign({},AicBlocks.String,{
                    "name": "arg4",
                    "text": ""
                })
            ],
            "inputsInline": true,
            "tooltip": "先在x帧内添加特效，再停留y帧，最后在x帧内撤去特效，共计2x+y帧。",
            "helpUrl": "",
            "colour": 350,
            "previousStatement": "pe_fadeinout",
            "nextStatement": AicBlocks.statement
        },
        "generFunc": function(block) {
            var arg1 = block.getFieldValue('arg1');
            arg1 = AicFunctions.pre('PostEffect_List')(arg1,block,'arg1','pe_fadeinout');
            var arg2 = block.getFieldValue('arg2');
            if (arg2==='') {
                throw new OmitedError(block,'arg2','pe_fadeinout');
            }
            arg2 = AicFunctions.pre('String')(arg2,block,'arg2','pe_fadeinout');
            var arg3 = block.getFieldValue('arg3');
            if (arg3==='') {
                throw new OmitedError(block,'arg3','pe_fadeinout');
            }
            arg3 = AicFunctions.pre('String')(arg3,block,'arg3','pe_fadeinout');
            var arg4 = block.getFieldValue('arg4');
            arg4 = AicFunctions.pre('String')(arg4,block,'arg4','pe_fadeinout');
            var code = AicFunctions.defaultCode('pe_fadeinout',eval('['+AicBlocks['pe_fadeinout'].args.join(',')+']'),block);
            return code;
        },
        "args": ["arg1","arg2","arg3","arg4"],
        "argsType": ["field","field","field","field"],
        "argsGrammarName": ["PostEffect_List","String","String","String"],
        "omitted": [false,false,false,true],
        "multi": [false,false,false,false],
        "fieldDefault": function (keyOrIndex) {
            return AicFunctions.fieldDefault('pe_fadeinout',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return AicFunctions.xmlText('pe_fadeinout',inputs,next,isShadow,comment,attribute);
        }
    },
    "qu_handshake": {
        "type": "statement",
        "json": {
            "type": "qu_handshake",
            "message0": "画面混沌摆： 稳态帧数 %1 启停帧数 %2 摆动幅度 %3 启动延迟 %4",
            "args0": [
                Object.assign({},AicBlocks.String,{
                    "name": "arg1",
                    "text": "180"
                }),
                Object.assign({},AicBlocks.String,{
                    "name": "arg2",
                    "text": "60"
                }),
                Object.assign({},AicBlocks.String,{
                    "name": "arg3",
                    "text": "100"
                }),
                Object.assign({},AicBlocks.String,{
                    "name": "arg4",
                    "text": ""
                })
            ],
            "inputsInline": true,
            "tooltip": "启动后和「临时后期特效」类似是x+2y的总帧数，启动延迟帧数可以小于零。",
            "helpUrl": "",
            "colour": 350,
            "previousStatement": "qu_handshake",
            "nextStatement": AicBlocks.statement
        },
        "generFunc": function(block) {
            var arg1 = block.getFieldValue('arg1');
            if (arg1==='') {
                throw new OmitedError(block,'arg1','qu_handshake');
            }
            arg1 = AicFunctions.pre('String')(arg1,block,'arg1','qu_handshake');
            var arg2 = block.getFieldValue('arg2');
            if (arg2==='') {
                throw new OmitedError(block,'arg2','qu_handshake');
            }
            arg2 = AicFunctions.pre('String')(arg2,block,'arg2','qu_handshake');
            var arg3 = block.getFieldValue('arg3');
            if (arg3==='') {
                throw new OmitedError(block,'arg3','qu_handshake');
            }
            arg3 = AicFunctions.pre('String')(arg3,block,'arg3','qu_handshake');
            var arg4 = block.getFieldValue('arg4');
            arg4 = AicFunctions.pre('String')(arg4,block,'arg4','qu_handshake');
            var code = AicFunctions.defaultCode('qu_handshake',eval('['+AicBlocks['qu_handshake'].args.join(',')+']'),block);
            return code;
        },
        "args": ["arg1","arg2","arg3","arg4"],
        "argsType": ["field","field","field","field"],
        "argsGrammarName": ["String","String","String","String"],
        "omitted": [false,false,false,true],
        "multi": [false,false,false,false],
        "fieldDefault": function (keyOrIndex) {
            return AicFunctions.fieldDefault('qu_handshake',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return AicFunctions.xmlText('qu_handshake',inputs,next,isShadow,comment,attribute);
        }
    },
    "quake": {
        "type": "statement",
        "json": {
            "type": "quake",
            "message0": "画面其他抖动： %1 起始幅度 %2 持续帧数 %3 最终幅度 %4 启动延迟 %5",
            "args0": [
                Object.assign({},AicBlocks.Quake_List,{
                    "name": "arg0",
                    "default": "QU_VIB"
                }),
                Object.assign({},AicBlocks.String,{
                    "name": "arg1",
                    "text": "100"
                }),
                Object.assign({},AicBlocks.String,{
                    "name": "arg2",
                    "text": "180"
                }),
                Object.assign({},AicBlocks.String,{
                    "name": "arg3",
                    "text": "10"
                }),
                Object.assign({},AicBlocks.String,{
                    "name": "arg4",
                    "text": ""
                })
            ],
            "inputsInline": true,
            "tooltip": "抖动幅度会在一定帧数内由起始值变为最终值，启动延迟帧数可以小于零。",
            "helpUrl": "",
            "colour": 350,
            "previousStatement": "quake",
            "nextStatement": AicBlocks.statement
        },
        "generFunc": function(block) {
            var arg0 = block.getFieldValue('arg0');
            arg0 = AicFunctions.pre('Quake_List')(arg0,block,'arg0','quake');
            var arg1 = block.getFieldValue('arg1');
            if (arg1==='') {
                throw new OmitedError(block,'arg1','quake');
            }
            arg1 = AicFunctions.pre('String')(arg1,block,'arg1','quake');
            var arg2 = block.getFieldValue('arg2');
            if (arg2==='') {
                throw new OmitedError(block,'arg2','quake');
            }
            arg2 = AicFunctions.pre('String')(arg2,block,'arg2','quake');
            var arg3 = block.getFieldValue('arg3');
            if (arg3==='') {
                throw new OmitedError(block,'arg3','quake');
            }
            arg3 = AicFunctions.pre('String')(arg3,block,'arg3','quake');
            var arg4 = block.getFieldValue('arg4');
            arg4 = AicFunctions.pre('String')(arg4,block,'arg4','quake');
            var code = AicFunctions.defaultCode('quake',eval('['+AicBlocks['quake'].args.join(',')+']'),block);
            return code;
        },
        "args": ["arg0","arg1","arg2","arg3","arg4"],
        "argsType": ["field","field","field","field","field"],
        "argsGrammarName": ["Quake_List","String","String","String","String"],
        "omitted": [false,false,false,false,true],
        "multi": [false,false,false,false,false],
        "fieldDefault": function (keyOrIndex) {
            return AicFunctions.fieldDefault('quake',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return AicFunctions.xmlText('quake',inputs,next,isShadow,comment,attribute);
        }
    },
    "greeting": {
        "type": "statement",
        "json": {
            "type": "greeting",
            "message0": "对齐调查点： 背对方向 %1 相对位移 %2",
            "args0": [
                Object.assign({},AicBlocks.Greeting_List,{
                    "name": "arg1",
                    "default": "@"
                }),
                Object.assign({},AicBlocks.String,{
                    "name": "arg2",
                    "text": ""
                })
            ],
            "inputsInline": true,
            "tooltip": "本指令可让主角的调查站位标准化，相对位移可以填正数（额外后退）或负数（额外前进）。",
            "helpUrl": "",
            "colour": 350,
            "previousStatement": "greeting",
            "nextStatement": AicBlocks.statement
        },
        "generFunc": function(block) {
            var arg1 = block.getFieldValue('arg1');
            arg1 = AicFunctions.pre('Greeting_List')(arg1,block,'arg1','greeting');
            var arg2 = block.getFieldValue('arg2');
            arg2 = AicFunctions.pre('String')(arg2,block,'arg2','greeting');
            var code = AicFunctions.defaultCode('greeting',eval('['+AicBlocks['greeting'].args.join(',')+']'),block);
            return code;
        },
        "args": ["arg1","arg2"],
        "argsType": ["field","field"],
        "argsGrammarName": ["Greeting_List","String"],
        "omitted": [false,true],
        "multi": [false,false],
        "fieldDefault": function (keyOrIndex) {
            return AicFunctions.fieldDefault('greeting',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return AicFunctions.xmlText('greeting',inputs,next,isShadow,comment,attribute);
        }
    },
    "move_script": {
        "type": "statement",
        "json": {
            "type": "move_script",
            "message0": "移动角色： %1 是否禁用脚步声 %2 %3 %4",
            "args0": [
                Object.assign({},AicBlocks.String,{
                    "name": "String_0",
                    "text": "%"
                }),
                Object.assign({},AicBlocks.Bool,{
                    "name": "Bool_0",
                    "checked": false
                }),
                {
                    "type": "input_dummy"
                },
                {
                    "type": "input_statement",
                    "name": "msitem_0",
                    "check": AicBlocks.msitem
                }
            ],
            "tooltip": "除了主角（%），其他角色都要先在地图文件中定义。",
            "helpUrl": "",
            "colour": 350,
            "previousStatement": "move_script",
            "nextStatement": AicBlocks.statement
        },
        "generFunc": function(block) {
            var String_0 = block.getFieldValue('String_0');
            String_0 = AicFunctions.pre('String')(String_0,block,'String_0','move_script');
            var Bool_0 = block.getFieldValue('Bool_0') === 'TRUE';
            Bool_0 = AicFunctions.pre('Bool')(Bool_0,block,'Bool_0','move_script');
            var msitem_0 = Blockly.JavaScript.statementToCode(block, 'msitem_0');
            var code = AicFunctions.defaultCode('move_script',eval('['+AicBlocks['move_script'].args.join(',')+']'),block);
            return code;
        },
        "args": ["String_0","Bool_0","msitem_0"],
        "argsType": ["field","field","statement"],
        "argsGrammarName": ["String","Bool","msitem"],
        "omitted": [true,false,true],
        "multi": [false,false,true],
        "fieldDefault": function (keyOrIndex) {
            return AicFunctions.fieldDefault('move_script',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return AicFunctions.xmlText('move_script',inputs,next,isShadow,comment,attribute);
        }
    },
    "ms_bracket": {
        "type": "statement",
        "json": {
            "type": "ms_bracket",
            "message0": "移动指令： %1 [ %2 ] %3",
            "args0": [
                Object.assign({},AicBlocks.MoveScript_List,{
                    "name": "MoveScript_List_0",
                    "default": "SND"
                }),
                Object.assign({},AicBlocks.String,{
                    "name": "String_0",
                    "text": "sd_initialize"
                }),
                Object.assign({},AicBlocks.String,{
                    "name": "String_1",
                    "text": ""
                })
            ],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 260,
            "previousStatement": "ms_bracket",
            "nextStatement": AicBlocks.msitem
        },
        "generFunc": function(block) {
            var MoveScript_List_0 = block.getFieldValue('MoveScript_List_0');
            MoveScript_List_0 = AicFunctions.pre('MoveScript_List')(MoveScript_List_0,block,'MoveScript_List_0','ms_bracket');
            var String_0 = block.getFieldValue('String_0');
            if (String_0==='') {
                throw new OmitedError(block,'String_0','ms_bracket');
            }
            String_0 = AicFunctions.pre('String')(String_0,block,'String_0','ms_bracket');
            var String_1 = block.getFieldValue('String_1');
            String_1 = AicFunctions.pre('String')(String_1,block,'String_1','ms_bracket');
            return `{"type":"ms_raw","String_0":"${MoveScript_List_0}[${String_0}]${String_1||''}"},\n`; // 解析后自动变成下面只有一个 String 的版本
        },
        "args": ["MoveScript_List_0","String_0","String_1"],
        "argsType": ["field","field","field"],
        "argsGrammarName": ["MoveScript_List","String","String"],
        "omitted": [false,false,true],
        "multi": [false,false,false],
        "fieldDefault": function (keyOrIndex) {
            return AicFunctions.fieldDefault('ms_bracket',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return AicFunctions.xmlText('ms_bracket',inputs,next,isShadow,comment,attribute);
        }
    },
    "ms_raw": {
        "type": "statement",
        "json": {
            "type": "ms_raw",
            "message0": "移动指令： %1",
            "args0": [
                Object.assign({},AicBlocks.String,{
                    "name": "String_0",
                    "text": "##"
                })
            ],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 260,
            "previousStatement": "ms_raw",
            "nextStatement": AicBlocks.msitem
        },
        "generFunc": function(block) {
            var String_0 = block.getFieldValue('String_0');
            if (String_0==='') {
                throw new OmitedError(block,'String_0','ms_raw');
            }
            String_0 = AicFunctions.pre('String')(String_0,block,'String_0','ms_raw');
            var code = AicFunctions.defaultCode('ms_raw',eval('['+AicBlocks['ms_raw'].args.join(',')+']'),block);
            return code;
        },
        "args": ["String_0"],
        "argsType": ["field"],
        "argsGrammarName": ["String"],
        "omitted": [false],
        "multi": [false],
        "fieldDefault": function (keyOrIndex) {
            return AicFunctions.fieldDefault('ms_raw',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return AicFunctions.xmlText('ms_raw',inputs,next,isShadow,comment,attribute);
        }
    },
    "custom": {
        "type": "statement",
        "json": {
            "type": "custom",
            "message0": "原生指令： %1",
            "args0": [
                Object.assign({},AicBlocks.String,{
                    "name": "String_0",
                    "text": "// 这是注释"
                })
            ],
            "inputsInline": true,
            "tooltip": "此积木用于誊抄现有事件中的指令，参数用空格隔开。",
            "helpUrl": "",
            "colour": 350,
            "previousStatement": "custom",
            "nextStatement": AicBlocks.statement
        },
        "generFunc": function(block) {
            var String_0 = block.getFieldValue('String_0');
            String_0 = AicFunctions.pre('String')(String_0,block,'String_0','custom');
            var code = AicFunctions.defaultCode('custom',eval('['+AicBlocks['custom'].args.join(',')+']'),block);
            return code;
        },
        "args": ["String_0"],
        "argsType": ["field"],
        "argsGrammarName": ["String"],
        "omitted": [true],
        "multi": [false],
        "fieldDefault": function (keyOrIndex) {
            return AicFunctions.fieldDefault('custom',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return AicFunctions.xmlText('custom',inputs,next,isShadow,comment,attribute);
        }
    },
    "empty": {
        "type": "statement",
        "json": {
            "type": "empty",
            "message0": "",
            "args0": [],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 80,
            "previousStatement": "empty",
            "nextStatement": AicBlocks.statement
        },
        "generFunc": function(block) {
            return '\n';
        },
        "args": [],
        "argsType": [],
        "argsGrammarName": [],
        "omitted": [],
        "multi": [],
        "fieldDefault": function (keyOrIndex) {
            return AicFunctions.fieldDefault('empty',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return AicFunctions.xmlText('empty',inputs,next,isShadow,comment,attribute);
        }
    }
});



//生成代码中,当一个不允许省略的值或块省略时,会抛出这个错误
function OmitedError(block, var_, rule, fileName, lineNumber) {
    var message = 'no omitted '+var_+' at '+rule;
    var instance = new Error(message, fileName, lineNumber);
    instance.block = block;
    instance.varName = var_;
    instance.blockName = rule;
    instance.name = 'OmitedError';
    Object.setPrototypeOf(instance, Object.getPrototypeOf(this));
    if (Error.captureStackTrace) {
        Error.captureStackTrace(instance, OmitedError);
    }
    return instance;
}

OmitedError.prototype = Object.create(Error.prototype);
OmitedError.prototype.constructor = OmitedError;
//处理此错误的omitedcheckUpdateFunction定义在下面

//生成代码中,当一个不允许多个语句输入的块放入多语句时,会抛出这个错误
function MultiStatementError(block, var_, rule, fileName, lineNumber) {
    var message = 'no multi-Statement '+var_+' at '+rule;
    var instance = new Error(message, fileName, lineNumber);
    instance.block = block;
    instance.varName = var_;
    instance.blockName = rule;
    instance.name = 'MultiStatementError';
    Object.setPrototypeOf(instance, Object.getPrototypeOf(this));
    if (Error.captureStackTrace) {
        Error.captureStackTrace(instance, MultiStatementError);
    }
    return instance;
}

MultiStatementError.prototype = Object.create(Error.prototype);
MultiStatementError.prototype.constructor = MultiStatementError;
//处理此错误的omitedcheckUpdateFunction定义在下面


AicFunctions={}


AicFunctions.Int_pre = function(intstr) {
    return parseInt(intstr);
}

AicFunctions.Number_pre = function(intstr) {
    return parseFloat(intstr);
}

//返回各LexerRule文本域的预处理函数,方便用来统一转义等等
AicFunctions.pre = function(LexerId) {
    if (AicFunctions.hasOwnProperty(LexerId+'_pre')) {
        return AicFunctions[LexerId+'_pre'];
    }
    return function(obj,block,fieldName,blockType){return obj}
}



// AicFunctions.fieldDefault
// 根据输入是整数字符串或null
// 第index个或者名字为key的域的默认值, null时返回所有field默认值的数组
AicFunctions.fieldDefault = function (ruleName,keyOrIndex) {
    var rule = AicBlocks[ruleName];
    var iskey=typeof keyOrIndex==typeof '';
    var isindex=typeof keyOrIndex==typeof 0;
    function args0_content_to_default(cnt) {
        var key = ({
            'field_input':'text',
            'field_multilinetext':'text',
            'field_number':'value',
            'field_dropdown':'default',
            'field_checkbox':'checked',
            'field_colour':'colour',
            'field_angle':'angle',
            // 'field_image':'src'
        })[cnt.type];
        return cnt[key];
    }
    var allDefault=[];
    for(var ii=0,index=-1,cnt;cnt=rule.json.args0[ii];ii++){
        if (!cnt.name || cnt.type.slice(0,5)!='field' || cnt.type=='field_image') continue;
        index++;
        if (iskey && cnt.name==keyOrIndex)return args0_content_to_default(cnt);
        if (isindex && index==keyOrIndex)return args0_content_to_default(cnt);
        allDefault.push(args0_content_to_default(cnt))
    }
    if (iskey || isindex) return undefined;
    return allDefault;
}



// AicFunctions.defaultCode_TEXT
AicFunctions.defaultCode_TEXT = function (ruleName,args,block) {
    var rule = AicBlocks[ruleName];
    var message=rule.json.message0;
    var args0=rule.json.args0;
    for(var ii=0,jj=0;ii<args0.length;ii++){
        message=message.split(new RegExp('%'+(ii+1)+'\\b'));
        var content='\n';
        if (args0[ii].type==='input_dummy') {
            message[1]=message[1].slice(1);
        } else if(args0[ii].type==='field_image') {
            content=args0[ii].alt;
        } else {
            content=args[jj++];
        }
        if (args0[ii].type=="input_statement") {
            message[0]=message[0]+'\n';
            message[1]=message[1].slice(1);
        }
        message=message.join(content);
    }
    if (rule.type=='statement') {
        message=message+'\n';
    }
    return message;
}

AicFunctions.defaultCode_JSON_TYPE='type'

AicFunctions.parserPre={}
AicFunctions.parserPre.pre = function(LexerId) {
    if (AicFunctions.parserPre.hasOwnProperty(LexerId+'_pre')) {
        return AicFunctions.parserPre[LexerId+'_pre'];
    }
    return function(obj,blockObj,fieldName,blockType,index){return obj}
}
/** @class */
AicFunctions.parserClass = function (params) {
}
AicFunctions.parserClass.prototype.parse = function (obj,next) {
    var blockType = obj[AicFunctions.defaultCode_JSON_TYPE]
    var rule = AicBlocks[blockType]
    if (AicFunctions.parserPre.hasOwnProperty(blockType+'_pre')) {
        obj = AicFunctions.parserPre[blockType+'_pre'](obj)
    }
    var input = []
    for (var index = 0; index < rule.args.length; index++) {
        var dobj = obj[rule.args[index]];
        if (rule.argsType[index]==='statement') {
            if (!rule.multi[index])dobj=[dobj];
            var snext=null
            while (dobj.length) {
                var ds=dobj.pop()
                snext=this.parse(ds,snext)
            }
            input.push(snext)
        } else if (rule.argsType[index]==='value') {
            input.push(this.parse(dobj))
        } else {
            var LexerId = rule.argsGrammarName[index]
            input.push(AicFunctions.parserPre.pre(LexerId)(dobj,obj,rule.args[index],blockType,index))
        }
    }
    return rule.xmlText(input,next)
}
AicFunctions.parser=new AicFunctions.parserClass()
AicFunctions.parse=function(obj){
    var xml_text = AicFunctions.parser.parse(obj);
    var xml = Blockly.Xml.textToDom('<xml>'+xml_text+'</xml>');
    AicFunctions.workspace().clear();
    Blockly.Xml.domToWorkspace(xml, AicFunctions.workspace());
}

// AicFunctions.defaultCode_JSON
AicFunctions.defaultCode_JSON = function (ruleName,args,block) {
    var rule = AicBlocks[ruleName];
    var values=args
    var output={}
    var ret=''
    if (rule.type==='statement'||rule.type==='value') {
        output[AicFunctions.defaultCode_JSON_TYPE]=rule.json.type
        ret=block.getNextBlock()==null?'':','
    }
    for (var index = 0; index < values.length; index++) {
        var value = values[index];
        if (rule.argsType[index]==='statement') {
            output[rule.args[index]]=eval('['+value+']')
            if (!rule.multi[index]) output[rule.args[index]]=output[rule.args[index]][0];
        } else if (rule.argsType[index]==='value') {
            output[rule.args[index]]=eval('('+value+')')
        } else {
            output[rule.args[index]]=value
        }
    }
    ret=JSON.stringify(output,null,1)+ret
    return ret
}

// AicFunctions.defaultCode
AicFunctions.defaultCode=AicFunctions.defaultCode_JSON



// AicFunctions.xmlText
// 构造这个方法是为了能够不借助workspace,从语法树直接构造图块结构
// inputs的第i个元素是第i个args的xmlText,null或undefined表示空
// next是其下一个语句的xmlText
AicFunctions.xmlText = function (ruleName,inputs,next,isShadow,comment,attribute) {
    var rule = AicBlocks[ruleName];
    var blocktext = isShadow?'shadow':'block';
    var xmlText = [];
    xmlText.push('<'+blocktext+' type="'+ruleName+'"');
    for (var attr in attribute) {
        xmlText.push(' '+attr+'="'+attribute[attr]+'"');
    }
    xmlText.push('>');
    if(!inputs)inputs=[];
    var inputIsArray = inputs instanceof Array;
    for (var ii=0,inputType;inputType=rule.argsType[ii];ii++) {
        var input = inputIsArray?inputs[ii]:inputs[rule.args[ii]];
        var _input = '';
        var noinput = input==null;
        if(noinput && inputType==='field' && AicBlocks[rule.argsGrammarName[ii]].type!=='field_dropdown') continue;
        if(noinput && inputType==='field') {
            noinput = false;
            input = rule.fieldDefault(rule.args[ii])
        }
        if(noinput) input = '';
        if(inputType==='field' && AicBlocks[rule.argsGrammarName[ii]].type==='field_checkbox')input=input?'TRUE':'FALSE';
        if(inputType!=='field') {
            var subList = false;
            var subrulename = rule.argsGrammarName[ii];
            var subrule = AicBlocks[subrulename];
            if (subrule instanceof Array) {
                subrulename=subrule[subrule.length-1];
                subrule = AicBlocks[subrulename];
                subList = true;
            }
            _input = subrule.xmlText([],null,true);
            if(noinput && !subList && !isShadow) {
                //无输入的默认行为是: 如果语句块的备选方块只有一个,直接代入方块
                input = subrule.xmlText();
            }
        }
        xmlText.push('<'+inputType+' name="'+rule.args[ii]+'">');
        xmlText.push(_input+input);
        xmlText.push('</'+inputType+'>');
    }
    if(comment){
        xmlText.push('<comment><![CDATA[');
        xmlText.push(comment.replace(/]]>/g,'] ] >'));
        xmlText.push(']]></comment>');
    }
    if (next) {
        xmlText.push('<next>');
        xmlText.push(next);
        xmlText.push('</next>');
    }
    xmlText.push('</'+blocktext+'>');
    return xmlText.join('');
}



// AicFunctions.blocksIniter
// 把各方块的信息注册到Blockly中
AicFunctions.blocksIniter = function(){
    var blocksobj = AicBlocks;
    for(var key in blocksobj) {
        var value = blocksobj[key];
        if(value instanceof Array)continue;
        if(/^[A-Z].*$/.exec(key))continue;
        (function(key,value){
            if (value.menu && value.menu.length) {
                var menuRegisterMixin={
                    customContextMenu: function(options) {
                        for(var ii=0,op;op=value.menu[ii];ii++){
                            var option = {enabled: true};
                            option.text = op[0];
                            var check = 'function('
                            if (option.text.slice(0,check.length)==check){
                                option.text=eval('('+option.text+')(this)');
                            }
                            (function(block,fstr){
                                option.callback = function(){
                                    eval(fstr)
                                }
                            })(this,op[1]);
                            options.push(option);
                        }
                    }
                };
                value.json.extensions=value.json.extensions||[];
                var mixinName = 'contextMenu_Aic_'+value.json.type
                value.json.extensions.push(mixinName)
                Blockly.Extensions.registerMixin(mixinName,menuRegisterMixin);
            }
            Blockly.Blocks[key] = {
                init: function() {this.jsonInit(value.json);}
            }
            Blockly.JavaScript[key] = value.generFunc;
        })(key,value);
    }
}


AicFunctions.blocksIniter();


// toolbox
var toolbox = (function(){
    var toolboxXml = document.createElement('xml')
    // 调整这个 obj 来更改侧边栏和其中的方块
    // 可以直接填 '<block type="xxx">...</block>'
    // 标签 '<label text="标签文本"></label>'
var toolboxObj = {
  // 每个键值对作为一页
  '未分类': [
    '<label text="第一个是入口积木，点击它开始创作吧！"></label>',
    AicBlocks["entrance"].xmlText(),
    '<label text="想从游戏现有的 .cmd 文件中抄写指令？试试原生指令块！"></label>',
    AicBlocks["custom"].xmlText(),
    AicBlocks["mgm_4ascend"].xmlText(),
    AicBlocks["replace_bgm"].xmlText(),
    AicBlocks["posteffect"].xmlText(),
    AicBlocks["pe_fadeinout"].xmlText(),
    AicBlocks["qu_handshake"].xmlText(),
    AicBlocks["quake"].xmlText(),
    '<label text="用下面这些指令移动角色是「异步」的（需要时间完成），"></label>',
    '<label text="你可以用原生指令 WAIT_MOVE 等待移动完成，再继续执行后面的指令。"></label>',
    AicBlocks["greeting"].xmlText(),
    AicBlocks["move_script"].xmlText(),
    '<label text="移动角色的指令子项有待研究，你可以反编译 unsafeAssem.dll，"></label>',
    '<label text="并查看 m2d 命名空间中的 M2MoveScriptItem 类来了解更多。"></label>',
    AicBlocks["ms_bracket"].xmlText(),
    AicBlocks["ms_raw"].xmlText(),
  ],
  '文字类': [
    '<label text="根据入口积木中「对话是否单独导出」的勾选情况，"></label>',
    '<label text="对话和留言板的正文导出方式会有不同，请仔细观察。"></label>',
    '<label text="对话的正文可以使用星号*独占一行来分页（留言板不可以），"></label>',
    '<label text="其余技巧请阅读编辑器目录下附带的 localization.md 文档。"></label>',
    AicBlocks["msg"].xmlText(),
    AicBlocks["tx_board"].xmlText(),
    AicBlocks["talker"].xmlText(),
    AicBlocks["talker_replace"].xmlText(),
    AicBlocks["hkds"].xmlText(),
    AicBlocks["msg_prefix"].xmlText(),
    '<label text="下面这些指令会用到「词条」，不同于 ev_*.txt 中的对话，"></label>',
    '<label text="词条存储在 *_tx*.txt 中，你需要自己去添加。"></label>',
    AicBlocks["tutorial"].xmlText(),
    AicBlocks["titlecall"].xmlText(),
    AicBlocks["uialert"].xmlText(),
    AicBlocks["uialert_itemholdover"].xmlText(),
  ],
  '图片类': [
    '<label text="下面的 PIC 指令是从游戏中 F7 菜单的 VP 预览功能中复制来的，"></label>',
    '<label text="角色立绘在设置好位置后都要这样复制才行。除了角色以外，"></label>',
    '<label text="图片的显示还可以指定图层，一般是类型符号再加上一位数字，"></label>',
    '<label text="如背景层（#0 到 #9）、插画层（%0 到 %9）、前景层（&0 到 &9）。"></label>',
    AicBlocks["custom"].xmlText(['PIC #0 scl_106/s106_00']),
    AicBlocks["pic_b"].xmlText(),
    AicBlocks["pic_silhouette"].xmlText(),
    AicBlocks["pic_mp"].xmlText(),
    AicBlocks["pic_movea"].xmlText(),
    AicBlocks["pic_mva_whole"].xmlText(),
    AicBlocks["pic_radiation"].xmlText(),
    AicBlocks["pic_fill"].xmlText(),
    '<label text="显示图片或纯色填充后一般要紧接着下面的淡入淡出指令（可以用于立绘），"></label>',
    '<label text="并可再紧接着设置淡入淡出的方向。淡入淡出、闪烁和移动都是「异步」指令"></label>',
    '<label text="（需要时间完成），你需要配合使用流程控制中的「等待指定帧数」指令。"></label>',
    AicBlocks["custom"].xmlText(['PIC_FADEIN #0 60']),
    AicBlocks["custom"].xmlText(['PIC_FADEOUT #0 60']),
    AicBlocks["pic_tfade"].xmlText(),
    AicBlocks["pic_flash"].xmlText(),
    AicBlocks["pic_move"].xmlText(),
    AicBlocks["pic_move2"].xmlText(),
    '<label text="如果你注意到颜色列表中的「无色」是 8 位十六进制数，"></label>',
    '<label text="你可以切换到工程模式，在代码区把它改成任意的 0xAARRGGBB 颜色，"></label>',
    '<label text="再点击「读取工程」。像这样追加新项的操作适用于编辑器中的所有列表。"></label>',
  ],
  '数据类': [
    '<label text="这类指令用来操作玩家最关心的游戏数据，其中 DANGER"></label>',
    '<label text="和 DANGER_MANUAL 第二个参数 0 可以改成 1 表示跳过天色渐变动画。"></label>',
    AicBlocks["custom"].xmlText(['DANGER 9 0 // 设置战斗危险度']),
    AicBlocks["custom"].xmlText(['DANGER_MANUAL 0.5 0 // 仅设置天色（0.0~2.0）']),
    AicBlocks["custom"].xmlText(['DANGER_ADDITIONAL 45 // 增加丢汁危险度']),
    AicBlocks["epsitu"].xmlText(),
    AicBlocks["force_replace_noel_cane"].xmlText(),
    AicBlocks["xxxskill"].xmlText(),
    AicBlocks["getmagic"].xmlText(),
    AicBlocks["removemagic"].xmlText(),
    AicBlocks["enablemagic"].xmlText(),
    AicBlocks["setmagic"].xmlText(),
    AicBlocks["getitem_box"].xmlText(),
    AicBlocks["getitem"].xmlText(),
    AicBlocks["remitem"].xmlText(),
    AicBlocks["getmoney"].xmlText(),
    AicBlocks["wait_fn"].xmlText(),
    '<label text="除了上面这个等待玩家按掉弹窗的指令，也可用原生指令 CLOSE_DESCBOX 自动按掉。"></label>',
  ],
  '界面类': [
    '<label text="这类指令用于呼出游戏中预设的各种界面或执行相关操作。"></label>',
    AicBlocks["alchemy"].xmlText(),
    AicBlocks["ui_forge"].xmlText(),
    AicBlocks["itemstore"].xmlText(),
    AicBlocks["storeflush"].xmlText(),
    AicBlocks["storeadd"].xmlText(),
    AicBlocks["bench_cmd_execute"].xmlText(),
    AicBlocks["mgmtimer"].xmlText(),
  ],
  '主角操作': [
    '<label text="这类指令需要在事件中预先用原生指令 #<%> 声明主角才能执行。"></label>',
    AicBlocks["pr_key_simulate"].xmlText(),
    AicBlocks["pr_outfit"].xmlText(),
    AicBlocks["pr_beto"].xmlText(),
    AicBlocks["pr_breath"].xmlText(),
    AicBlocks["pr_voice"].xmlText(),
    AicBlocks["pr_gacha"].xmlText(),
    AicBlocks["pr_cure"].xmlText(),
    AicBlocks["ser_apply"].xmlText(),
    '<label text="「定量治疗角色」和「获得异常状态」可以用于 #<xxx> 声明的其他单位。"></label>',
  ],
  '流程控制': [
    '<label text="流程控制是哈语言中最接近编程的部分。请注意区分「等待若干帧」"></label>',
    '<label text="和「延迟执行若干帧」，不严谨地说前者是阻塞主线程，后者是创建子线程。"></label>',
    AicBlocks["wait"].xmlText(),
    AicBlocks["setTimeout"].xmlText(),
    AicBlocks["module"].xmlText(),
    AicBlocks["numcounter"].xmlText(),
    '<label text="为临时变量赋值可以使用下面两种指令，"></label>',
    '<label text="=~ 表示代入数值，= 表示代入字符串，美元符号 $ 表示读取变量值。"></label>',
    AicBlocks["custom"].xmlText(["_result=~1+$_result"]),
    AicBlocks["custom"].xmlText(["_result='HelloWorld'"]),
    '<label text="除了临时变量，游戏中还有会写入存档的 GFC变量 和 GFB开关，有待研究。"></label>',
    AicBlocks["select_case"].xmlText(),
    // AicBlocks["choice_case"].xmlText(),
    AicBlocks["select_str"].xmlText(),
    // AicBlocks["choice_str"].xmlText(),
    `<label text="最基本的 IF 语句可以用 '字符串常量' 和 $变量名 拼接出表达式作为条件，例如"></label>`,
    `<label text="'('$x'<10||'$x'>=100)&&'$x'%2==0' 判断 x 是否为 小于10或大于等于100的偶数。"></label>`,
    AicBlocks["ifthen"].xmlText(),
    AicBlocks["ifelse"].xmlText(),
    AicBlocks["ifstr"].xmlText(),
    AicBlocks["loop"].xmlText(),
    '<label text="为了确保安全，这里仿照 Visual Basic 给出了四种循环类型，"></label>',
    '<label text="编译出的「有条件跳转」语句都不使用「逻辑非」运算。"></label>',
  ],
}
    var getCategory = function(toolboxXml,name,custom){
        var node = document.createElement('category');
        node.setAttribute('name',name);
        if(custom)node.setAttribute('custom',custom);
        toolboxXml.appendChild(node);
        return node;
    }
    var toolboxGap = '<sep gap="3"></sep>'
    for (var name in toolboxObj){
        var custom = null;
        if(name=='xxxxxx')custom='xxxxxx';
        if(name=='zzzzzz')custom='zzzzzz';
        getCategory(toolboxXml,name,custom).innerHTML = toolboxObj[name].join(toolboxGap);
        var node = document.createElement('sep');
        node.setAttribute('gap', 0 * 3);
        toolboxXml.appendChild(node);
    }
    return toolboxXml;
})();


var workspace = Blockly.inject('blocklyDiv',{
    media: './media/',
    toolbox: toolbox,
    zoom:{
        controls: true,
        wheel: false, // 重要！鼠标滚轮不用于缩放，配合本文件最后的函数使其只用于滚屏
        startScale: 1.0,
        maxScale: 3,
        minScale: 0.3,
        scaleSpeed: 1.08
    },
    trashcan: false,
});
AicFunctions.workspace = function(){return workspace}

function omitedcheckUpdateFunction(event) {
    // console.log(event);
    var codeAreaElement = document.getElementById('codeArea');
    var codeAreaFunc=function(err,data){return globalThis.codeAreaFunc(err,data);};
    try {
        var code = Blockly.JavaScript.workspaceToCode(workspace);
        codeAreaFunc(null,code);
    } catch (error) {
        codeAreaFunc(error,null);
        if (error instanceof OmitedError ||error instanceof MultiStatementError){
            var blockName = error.blockName;
            var varName = error.varName;
            var block = error.block;
        }
        console.log(error);
    }
}

workspace.addChangeListener(omitedcheckUpdateFunction);

//自动禁用任何未连接到根块的块
workspace.addChangeListener(Blockly.Events.disableOrphans);

// debugFunctions
Blockly.Tooltip.DIV.style.font = '17px monospace'; // 更改悬停提示的字体字号

globalThis.codeAreaFunc = function(err, data) { // 在 checkUpdateFunction 中暴露出来的 codeArea 更新函数
    try {
        if (!document.getElementById('project')?.checked)
            data = compile(data); // 未开启工程模式时，直接显示编译结果
    } catch (e) {
        err = e; // 重要！编译器的报错也要显示在代码区
    }
    let area = document.getElementById('codeArea'); // 取决于是 <pre> 还是 <textarea>
    area[area instanceof HTMLTextAreaElement ? 'value' : 'innerText'] = err ? String(err) : data;
}

Blockly.FieldDropdown.prototype.doClassValidation_ = function (opt_newValue) { // 取消下拉框范围校验，配合下面的函数动态追加
    return opt_newValue;
}
Blockly.FieldDropdown.prototype.doValueUpdate_ = function (newValue) {
    Blockly.FieldDropdown.superClass_.doValueUpdate_.call(this, newValue);
    var options = this.getOptions(true);
    for (var i = 0, option; (option = options[i]); i++)
        if (option[1] == this.value_)
            this.selectedOption_ = option;
    if (this.selectedOption_[1] != this.value_) {
        options.push([this.value_, this.value_]);
        this.selectedOption_ = options[options.length - 1];
    }
};

// 编译器和各按钮的回调函数
function compile() { // 编译（不传参则显示单独导出的对话）
  let l10n = false; // 对话是否单独导出
  let EventID = ""; // 事件ID，用于对话单独导出
  let txt = ""; // 对话单独导出时的localization内容
  let msg_count = 0; // 对话和留言板计数器
  let select_count = 0; // 选项列表（标签跳转模式）计数器
  let loop_count = 0; // 循环计数器
  let mgmtimer_count = 0; // 限时取出物品计数器

let f = function (o) { // 对每个块的处理
  let k; // 用于备份递归调用之前的计数器值
  let jump; // 循环指令中的跳转语句
  let param; // 用于 MSG 和 TX_BOARD 指令的形式参数
  let tl_prefix; // 延迟执行指令的前缀
  let arr; // 用于存放 SELECT 或 TUTO_MSG 等多行内容的临时数组

  let cmd = "";
  switch (o.type) {
    case 'msg': // 对话
      if (o.text.trim().split('\n').some(
        (x, i, a) => /^\s*[*]\s*\S/.test(x) || (i === 0 || i === a.length - 1) && /^\s*[*]/.test(x)
      ))
        throw '对话格式错误！位于行首的星号*必须独占一行（且不能是首尾两行！），否则请写成\\*\n' + JSON.stringify(o, undefined, 1);
      if (!l10n)
        return `MSG ${o.char}_<<<EOF ${o.args}\n${o.text}\nEOF;`;
      msg_count += 1;
      k = msg_count;
      param = `${o.char}_${k.toString(10).padStart(3,'0')}`;
      txt += `*${k<=1?EventID+' ':""}${param}\n${o.text}\n`;
      return `MSG ${param} ${o.args}`;
    case 'tx_board': // 留言板
      if (/^\s*[*]/m.test(o.text))
        throw '格式错误！留言板不支持分页，位于行首的星号*请写成\\*\n' + JSON.stringify(o, undefined, 1);
      if (!l10n)
        return `TX_BOARD <<<EOF ${o.args}\n${o.text}\nEOF;`;
      msg_count += 1;
      k = msg_count;
      param = `b_${k.toString(10).padStart(2,'0')}`;
      txt += `*${k<=1?EventID+' ':""}${param}\n${o.text}\n`;
      return `TX_BOARD *${param} ${o.args}`;
    case 'talker': // 设置立绘位置
      return `TALKER ${o.char} ${o.x+o.y} ${o.args}`;
    case 'pic_b': // 带单色背景显示图片
      return `PIC_B ${o.arg1} ${o.arg2} '' ${o.arg4}`;
    case 'pr_cure': // 治疗角色
      return `${o.Bool_0?'MV_CURE':'PR_CURE'} ${o.arg1} ${o.arg2} ${o.arg3}`;
    case 'epsitu': // 添加敏感的记录
      return `${o.Bool_0 ? 'EPSITU_B' : 'EPSITU'} ${o.arg1} ${o.arg2}`;
    case 'enablemagic': // 是否启用魔法
      return 'ENABLEMAGIC ' + o.arg1 + (o.Bool_0?' 1':' 0');
    case 'setmagic': // 施展魔法
      return `${o.Bool_0 ? 'SETMAGIC_NOMANA' : 'SETMAGIC'} ${o.arg1} ${o.arg2} ${o.arg3} ${o.arg4} ${o.arg5}`;
    case 'remitem': // 失去物品
      return `${o.Bool_0 ? 'REMITEM_NOANNOUNCE' : 'REMITEM'} ${o.arg1} ${o.arg2} ${o.arg3} ${o.arg4}`;
    case 'getmoney': // 获得金币
      return `${o.Bool_0 ? 'GETMONEY_BOX' : 'GETMONEY'} ${o.String_0}`;
    case 'wait': // 等待（阻塞事件流程）
      return `${o.Bool_0 ? 'WAIT_BUTTON' : 'WAIT'} ${o.String_0}`;
    case 'setTimeout': // 延迟执行
      tl_prefix = o.String_0 === "" ? 'MTL ' : `TL ${o.String_0} `;
      return o.statement_0.map(x => tl_prefix + f(x)).join('\n');
    case 'select_case': // 选项列表（标签跳转模式）
      select_count += 1;
      k = select_count;
      arr = o.choice_case_0.map(
        (x, i) => `${x.arg0} ch${k}_${i} ${x.quest?'Q':""}${x.arg2}`
      );
      cmd = `SELECT ${arr.length}\n` + arr.join('\n') + '\n';
      cmd += o.choice_case_0.map(
        (x, i) => `LABEL ch${k}_${i}\n` + x.statement_0.map(y => '    ' + f(y)).join('\n') + `\n ${x.Bool_1?'  ':'//'} GOTO ch${k}_${arr.length}`
      ).join('\n') + `\nLABEL ch${k}_${arr.length}`;
      return cmd;
    case 'select_str': // 选项列表（字符串变量模式）
      cmd = `SELECT ${o.choice_str_0.length} ${o.String_0}\n`;
      cmd += o.choice_str_0.map(x => `${x.arg0} ${x.arg1||x.arg0} ${x.Bool_0?'Q':""}${x.arg2}`).join('\n');
      return cmd;
    case 'ifthen': // 条件分歧
    case 'ifelse': // 四格缩进不能保证对每行都生效，选项列表和循环那里也是
    case 'ifstr':
      cmd = o.type === 'ifstr' ? `IFSTR ${o.x} ${o.op} ${o.y} {\n` : `${o.arg0} ${o.arg1} {\n`;
      cmd += o.statement_0.map(x => '    ' + f(x)).join('\n') + '\n}';
      if (o.statement_1?.length > 0) {
        cmd += ' ELSE {\n' + o.statement_1.map(x => '    ' + f(x)).join('\n') + '\n}';
      }
      return cmd;
    case 'loop': // 循环
      loop_count += 1;
      k = loop_count;
      jump = `${o.If_List_0} ${o.String_0} GOTO `;
      cmd = '\n' + o.statement_0.map(x => '    ' + f(x)).join('\n') + '\n';
      switch (o.Loop_List_0) {
        case 'dowhile':
          return `LABEL begin${k}${cmd}${jump}begin${k}`;
        case 'dountil':
          return `LABEL begin${k}${cmd}${jump}end${k}\nGOTO begin${k}\nLABEL end${k}`;
        case 'until':
          return `LABEL begin${k}\n${jump}end${k}${cmd}GOTO begin${k}\nLABEL end${k}`;
        case 'while':
          return `GOTO end${k}\nLABEL begin${k}${cmd}LABEL end${k}\n${jump}begin${k}`;
        default:
          throw '语法错误！循环类型 ' + o.Loop_List_0 + ' 不存在\n' + JSON.stringify(o, undefined, 1);
      }
    case 'ui_forge': // 进入铁匠铺（不复杂但是冗长）
      if (o.String_0 !== "")
        cmd = 'UI_FORGE ' + o.String_0;
      else
        cmd = "IF 'ItemHas[precious_testor_lisence]' {\n    _result=BUY\n} ELSE {\n    _result=BUY_LISTEN\n}\nUI_FORGE TESTABLE $_result TESTABLE_REPLACABLE";
      cmd += "\nIFSTR $_result IS 'REPLACE' {\n    FORGE_REPLACE_CANE $_cane $_cane_grade $prev_cane $prev_cane_grade 0\n    GETITEM_NOANNOUNCE 'cane_'$_cane 1 $_cane_grade\n} ELSIFSTR $_result IS 'BUY' {\n    FORGE_BUY_CANE $_cane $_cane_grade 1\n} ELSIFSTR $_result IS 'TESTFIRE' {\n    FORGE_TESTFIRE_INIT $_cane $_cane_grade\n    // FORGE_TESTFIRE_INIT // 用此指令归还法杖\n} ELSIFSTR $_result IS 'CANCELED' {\n    // 取消\n} ELSE {\n    TX_BOARD ___city_forge/board_recruit*board_recruit 4\n}";
      return '\n' + cmd + '\n';
    case 'itemstore': // 进入商店
      return 'SHOW_BLURSC\n' + (o.Bool_0 ? `LUNCHSTORE ${o.arg1}` : `ITEMSTORE ${o.arg1} ${o.arg2}`) + '\nHIDE_BLURSC';
    case 'bench_cmd_execute': // 执行长椅/卫生间操作
      if (o.arg1 === 'empty_stomach' || o.arg1.startsWith('cure_'))
        cmd = 'BENCH_CMD_EXECUTE';
      else
        cmd = 'BENCH_CMD_EXECUTE_O';
      return `${cmd} ${o.arg1} ${o.arg2}`;
    case 'mgmtimer': // 限时取出物品（超复杂！）
      mgmtimer_count += 1;
      k = mgmtimer_count;
      cmd = `UI_MGMTIMER_ACTIVATE ${o.limit} ${o.ready} !timeout${k}\n`;
      if (o.limit === '0') cmd = '// ' + cmd; // 不然右上角会显示红色的0
      cmd += `UI_MGMTIMER_ADDSCORE_TX ${o.icon} _NelItem_Name_${o.id}\n`;
      if (o.ready !== '0') {
        cmd += `_result=~${o.ready}\n`; // 预备秒数
        cmd += '_result=~60*$_result\nDENY_EVENTHANDLE_KEY CANCEL\nWAIT $_result\nALLOW_EVENTHANDLE_KEY CANCEL\n'; // 转换为帧数
      }
      cmd += `UIGM CHOOSE_ITEM ${o.id} _result 1\n`;
      cmd += `IF 0 {\n    LABEL timeout${k}\n    UIGM DEACTIVATE\n    UI_MGMTIMER_DEACTIVATE\n`;
      cmd += o.statement_0.map(x => '    ' + f(x)).join('\n'); // 如果超时
      cmd += "\n} ELSIFSTR $_result ISNOT '' {\n    UI_MGMTIMER_DEACTIVATE\n";
      cmd += o.statement_1.map(x => '    ' + f(x)).join('\n'); // 如果选对
      cmd += '\n} ELSE {\n    UI_MGMTIMER_DEACTIVATE\n';
      cmd += o.statement_2.map(x => '    ' + f(x)).join('\n'); // 选错或取消
      cmd += '\n}';
      return '\n' + cmd + '\n';
    case 'tutorial': // 操作提示
      if (o.text.indexOf('\n') >= 0) { // 多行
        arr = o.text.split('\n');
        cmd = `TUTO_MSG ${arr.length} ${o.frame}\n` + arr.map(x => f(x)).join('\n');
      } else { // 单行
        cmd = `TUTO_MSG ${o.text} ${o.frame}`;
      }
      if (o.pos !== 'C B') cmd += `\nTUTO_POS ${o.pos}`;
      return cmd;
    case 'titlecall': // 显示字幕
      if (o.arg3 === 'BOOK_TITLE')
        return `BOOK_TITLE ${o.arg1}\nTITLE_POS_SHIFT ${o.x} ${o.y}`;
      else
        return `TITLECALL ${o.arg1} ${o.arg2} ${o.arg3}\nTITLE_POS_SHIFT ${o.x} ${o.y}`;
    case 'mgm_4ascend': // 启动四子棋
      return `MGM_4ASCEND INIT ${o.String_0}\nMGM_4ASCEND PLAY`;
    case 'replace_bgm': // 切换音乐
      return `LOAD_BGM BGM_${o.arg0}\nREPLACE_BGM ${o.arg1} ${o.arg2} ${o.Bool_0?'1':""}`;
    case 'posteffect': // 后期特效
      return `PE ${o.arg1} ${o.arg2}`;
    case 'move_script': // 移动角色
      return (o.Bool_0 ? '#MS_SOFT_ ' : '#MS_ ') + o.String_0 + " '" + o.msitem_0.map(x => x.String_0).join(' ') + "'";
    case 'custom': // 原生指令
      return o.String_0;
    default: // arg0 arg1 arg2 ...
      cmd = o.arg0 ?? o.type.toUpperCase();
      for (let i = 1; i <= 9; i += 1) if ('arg'+i in o) cmd += ' ' + o['arg' + i];
      return cmd;
  }
}

  let s = arguments[0] || Blockly.JavaScript.workspaceToCode(workspace);
  try {
    s = JSON5.parse(s); // 为了在有注释时也能成功
  } catch (e) {
    return '入口积木必须存在且唯一！';
  }
  l10n = s.Bool_0 || !arguments[0];
  EventID = s.String_0;
  s = s.statement_0.map(x => f(x)).join('\n');
  if (!arguments[0]) {
    if (txt === '')
      txt = '没有对话文本需要导出！';
    else {
      navigator.clipboard.writeText(txt).catch(
        () => alert('对话自动复制失败！请手动从代码区全选复制。')
      );
      txt = '// 粘贴到任意 ev_*.txt 中后，MSG 和 TX_BOARD 指令就无需再用 <<<EOF 的写法。\n' + txt;
    }
    let area = document.getElementById('codeArea'); // 取决于是 <pre> 还是 <textarea>
    area[area instanceof HTMLTextAreaElement ? 'value' : 'innerText'] = txt;
  }
  return s;
}

function showHelp() { // 显示帮助
    alert('欢迎使用这一款事件编辑器！左侧是编辑区，右侧是代码区。\n'
        + '点击左侧分类将积木拖到编辑区，鼠标悬停在积木上有提示。\n'
        + '单击积木后，可用 Ctrl 组合键操作，或者拖出左边缘删除。\n'
        + '缩放：设置编辑区的宽高，代码区则可拖动右下角自行调节。\n'
        + '工程模式：此模式下，才能查看和读取如下所述的工程代码。\n'
        + '保存工程：将可以用来重建出积木的工程代码复制到剪贴板。\n'
        + '读取工程：工程模式常用，将代码区的工程代码重建成积木。\n'
        + '导出对话：非工程模式常用，在代码区显示单独导出的对话。'
    );
}

function saveRaw() { // 保存工程（请勿在控制台传参）
    let s = Blockly.JavaScript.workspaceToCode(workspace);
    if (arguments.length === 0)
        return console.log(s);
    navigator.clipboard.writeText(s).then(
        () => alert('当前工程已复制到剪贴板，请粘贴到记事本等处保存。')
    ).catch(
        () => alert('工程复制失败！请在工程模式下手动从代码区全选复制。')
    );
}

function loadRaw() { // 读取工程（只支持 JSON，不支持 cmd）
    let area = document.getElementById('codeArea'); // 取决于是 <pre> 还是 <textarea>
    let s = arguments[0] || area[area instanceof HTMLTextAreaElement ? 'value' : 'innerText'];
    try {
        if (typeof s !== 'string') s = JSON.stringify(s); // 传入了对象
        s = s.replace(/[<>&]/g, c => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;' }[c])); // 旧版 blockly 使用 xml 因此需要转义
        AicFunctions.parse(JSON5.parse(s)); // 为了在有注释时也能成功
    } catch (e) {
        alert('代码区的内容不是一个有效的工程，请检查！');
    }
}

function resizeArea() { // 缩放（调节编辑区大小）
    let div = document.getElementById('blocklyDiv');
    let w = div.style.width.slice(0, -2), h = div.style.height.slice(0, -2);
    let s = prompt('请输入积木编辑区的宽高，两个正整数之间用一个空格隔开：', w + ' ' + h);
    if (/^\d+ \d+$/.test(s)) {
        s = s.split(' ');
        div.style.width = s[0] + 'px';
        div.style.height = s[1] + 'px';
        window.dispatchEvent(new Event('resize')); // 立刻生效
    } else
        alert(s ? '输入格式不正确！' : '觉得每次刷新网页都要重新调节很麻烦？\n试试用记事本打开 index.html 来更改默认值吧！');
}

Blockly.bindEventWithChecks_(workspace.svgGroup_,"wheel",workspace,function(e){
    e.preventDefault();
    let hvScroll = e.shiftKey?'hScroll':'vScroll';
    workspace.scrollbar[hvScroll].handlePosition_+=( ((e.deltaY||0)+(e.detail||0)) >0?20:-20);
    workspace.scrollbar[hvScroll].onScroll_();
    // workspace.setScale(workspace.scale); // 如果不注释掉这一行，积木会不断左移
});
