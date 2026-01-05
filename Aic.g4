grammar Aic; // AliceInCradle 事件编辑器

entrance: '事件ID' String '对话是否单独导出' Bool BGNL? statement* ;
/* entrance
tooltip: 这是入口积木，必须存在且唯一。
default: ['test',false]
*/

statement
    : msg_prefix | msg | tx_board | talker | talker_replace | hkds | tutorial | titlecall | uialert | uialert_itemholdover
    | pic_b | pic_silhouette | pic_mp | pic_movea | pic_mva_whole | pic_fill | pic_tfade | pic_flash | pic_radiation | pic_move | pic_move2
    | epsitu | force_replace_noel_cane | xxxskill | getmagic | removemagic | enablemagic | setmagic | getitem_box | getitem | remitem | getmoney | wait_fn
    | alchemy | ui_forge | itemstore | storeflush | storeadd | bench_cmd_execute | mgmtimer
    | pr_key_simulate | pr_outfit | pr_beto | pr_breath | pr_voice | pr_gacha | pr_cure | ser_apply
    | wait | setTimeout | module | numcounter | select_case | select_str | ifthen | ifelse | ifstr | loop
    | posteffect | pe_fadeinout | qu_handshake | quake | mgm_4ascend | replace_bgm
    | greeting | move_script | custom
    | empty
    ;

msg: '对话：' '角色' char=Alphabet_List '额外参数' args=String? BGNL? text=String_Multi ;
/* msg
color: this.msgColor
tooltip: 本指令的部分额外参数（如 K[书页位置]）只有在「对话单独导出」时才有效。
default: ['n',"",'<c1>红<c2>橙<c3>黄<c4>绿<c5>蓝<c6>粉<c7>灰<c8>白']
*/

tx_board: '留言板：' '额外参数' args=String? BGNL? text=String_Multi ;
/* tx_board
color: this.msgColor
tooltip: 本指令的额外参数只有在「对话单独导出」时才有效。
default: ["",'→ 酸液巨树\n← 小恶魔之丘方向']
*/

talker: '设置立绘位置：' '角色' char=Alphabet_List '水平位置' x=Horizontal_List '竖直偏移' y=Vertical_List '额外参数' args=String?;
/* talker
color: this.msgColor
tooltip: 设置好位置后要用PIC原生指令（可从F7菜单的VP预览复制）才能真正显示立绘！
default: ['n','C',"",""]
*/

talker_replace: '绑定姓名音效：' '角色' arg1=Alphabet_List '姓名 Talker_' arg2=Talker_List '打字机音效' arg3=PrinterSound_List ;
/* talker_replace
color: this.msgColor
tooltip: 不在列表中的姓名和音效，可使用TALKER_REPLACE的原生指令。
default: ["n","'='","'='"]
*/

hkds: '设置对话框样式：' '角色' arg1=Alphabet_List '位置' arg2=String '尖角指向' arg3=String '样式' arg4=HkdsBounds_List ;
/* hkds
color: this.msgColor
tooltip: 本指令的各参数都可以是 '=' 或 '' 分别表示该项不变或重置。
default: ["n","''","''","''"]
*/

msg_prefix: '对话公共前缀：' '角色' arg1=Alphabet_List '前缀' arg2=String? ;
/* msg_prefix
color: this.msgColor
tooltip: 用来施加统一特效（如变色），如果对话本身为空，那前缀就是全部内容了，但不能换行。
default: ['n',""]
*/

tutorial: '操作提示：' '位置' pos=TutoPos_List '停留帧数' frame=String? BGNL? text=String_Multi ;
/* tutorial
color: this.msgColor
tooltip: 提示内容可以是任意字符串（换行的话效果会不好，且会有停留帧数失效的BUG），但这些首字母大写的词不要单独使用：Cancel Confirm Destination Disabled Eat Enabled GameStart Replay Reset Submit
default: ['C B','180','Destination[&&Area_mount]']
*/

titlecall: '显示字幕：' '词条' arg1=String '字号' arg2=String '额外设置' arg3=TitleCall_List '右移' x=String '上移' y=String;
/* titlecall
color: this.msgColor
tooltip: 词条名需要自行从localization誊抄，文本内容允许换行。如果设置了不自动消失（会锁定字号为32且带下划线），就要用原生指令TITLECALL_HIDE手动消失。
default: ['GM_error_sacred','32',"",'0','0']
*/

uialert: '左下角弹出提示：' '词条' arg1=String '样式' arg2=Alert_List ;
/* uialert
color: this.msgColor
tooltip: 词条名需要自行从localization誊抄，文本内容禁止换行。
default: ['Alert_autosave','ALERT']
*/

uialert_itemholdover: '物品超重提示：' arg1=Item_List '品质' arg2=Grade_List ;
/* uialert_itemholdover
color: this.msgColor
tooltip: 提示身上带的东西太多了，装不下某物品，品质可用于给诺艾儿汁添加词缀。
default: ['mtr_noel_juice0','0']
*/

pic_b: '带单色背景显示图片：' '图层参数' arg1=String '图片路径' arg2=String '背景色' arg4=Color_List ;
/* pic_b
color: this.picColor
tooltip: 此法显示的图片不支持淡入淡出，无需背景的情况下建议用PIC原生指令。
default: ['#0','scl_106/s106_00','DARK']
*/

pic_silhouette: '显示剪影：' '图层参数' arg1=String '图片路径' arg2=String '水平位置' arg3=Horizontal_List '额外参数' arg4=String? ;
/* pic_silhouette
color: this.picColor
tooltip: 用于显示mob_man2或mob_witchman这样的剪影（silhouette），额外参数填I可让剪影没有平移入画的过程。
default: ['#0','silhouette/mob_man2','C',""]
*/

pic_mp: '立绘漫符：' '角色' arg1=Alphabet_List '漫符' arg2=Manpu_List '额外参数' arg3=String? ;
/* pic_mp
color: this.picColor
tooltip: 如需多个漫符叠加，请使用原生指令PIC_MP并用竖线|分隔各个漫符。
default: ['n','BLS',""]
*/

pic_movea: '立绘跳动：' '角色' arg1=Alphabet_List '时间' arg2=String '跳动类型' arg3=SPmove_List ;
/* pic_movea
color: this.picColor
tooltip: 时间的单位不一定都是帧，但-1一定是无限（不循环的类型除外），即持续到下次更改立绘差分。
default: ['n','-1','BLINK2']
*/

pic_mva_whole: '图片批量跳动：' '图层类别' arg1=String '时间' arg2=String '跳动类型' arg3=SPmove_List ;
/* pic_mva_whole
color: this.picColor
tooltip: 图层类别是由 # % T & W 组成的字符串（''表示全部类别），分别表示背景（BACK）、未知（TALKERB）、立绘（TALKER）、前景（FRONT）、未知（SWIN）。
default: ["''",'-1','BLINK2']
*/

pic_fill: '单色填充图层：' '图层参数' arg1=String '颜色' arg2=Color_List '额外参数' arg3=String? ;
/* pic_fill
color: this.picColor
tooltip: 可配合原生指令PIC_FADEIN id n和PIC_FADEOUT id n来在n帧内淡入和淡出，这里id可以是角色或图层。
default: ['#0','DARK',""]
*/

pic_tfade: '图片淡入淡出方向：' '角色或图层' arg1=String '方向' arg2=Tfade_List ;
/* pic_tfade
color: this.picColor
tooltip: 必须紧跟在PIC_FADEIN或PIC_FADEOUT原生指令之后使用。
default: ['#0','DISSOLVE']
*/

pic_flash: '画面单色闪烁：' '图层参数' arg1=String '淡入' arg2=String '停留' arg3=String '淡出' arg4=String '颜色' arg5=Color_List ;
/* pic_flash
color: this.picColor
tooltip: 总时长等于三个帧数相加。
default: ['&0','25','10','25','WHITE']
*/

pic_radiation: '漫画放射线：' '图层参数' arg1=String '颜色' arg2=Color_List '额外参数' arg3=String? ;
/* pic_radiation
color: this.picColor
tooltip: 画面四周持续出现大量指向中心的尖刺，存在时段不尽相同。
default: ['#0','RED',""]
*/

pic_move: '移动图片：' '角色或图层' arg1=String 'x=' arg2=String 'y=' arg3=String '帧数' arg4=String '变速函数' arg5=Acceleration_List ;
/* pic_move
color: this.picColor
tooltip: 坐标范围是±640和±360，x轴向右y轴向上。变速函数中以R开头的会使起点和终点交换。
default: ['#0','256','144','60','ZLINE']
*/

pic_move2: '移动图片：' arg1=String 'x1' arg2=String 'y1' arg3=String 'x2' arg4=String 'y2' arg5=String '帧数' arg6=String '变速函数' arg7=Acceleration_List ;
/* pic_move2
color: this.picColor
tooltip: 图片会先瞬移到起点(x1,y1)，再逐渐移动到终点(x2,y2)。
default: ['#0','-320','-180','320','180','60','ZLINE']
*/

epsitu: '添加敏感的记录：' '是否加到开头' Bool '来源' arg1=Enemy_List '连续次数' arg2=String? ;
/* epsitu
color: this.dataColor
tooltip: 同一事件中多次使用时请注意哪些需要加到开头。使用原生指令EP_STATE_CLEAR可以清空记录。
default: [false,'OTHER','2147483647']
*/

force_replace_noel_cane: '强制更换法杖为：' arg1=Cane_List '星级' arg2=Grade_List ;
/* force_replace_noel_cane
color: this.dataColor
tooltip: 强制更换的法杖不会出现在物品栏里，下次手动更换时就会不见了。
default: ['default','4']
*/

xxxskill: arg0=Xxxskill_List '技能' arg1=Skill_List '额外参数' arg2=String? ;
/* xxxskill
color: this.dataColor
tooltip: HP上限和MP上限作为被动技能可以叠加，请注意辨别。习得技能的额外参数填1表示习得后不启用。
default: ['GETSKILL','sp_difficulty0',""]
*/

getmagic: '注册魔法：' arg1=Magic_List ;
/* getmagic
color: this.dataColor
tooltip: 魔法注册后需要有对应键位才能使用，比如0.28的⬆键对应环链水阵而不是雷霆电击。
default: ['POWERBOMB']
*/
removemagic: '注销魔法：' arg1=Magic_List ;
/* removemagic
color: this.dataColor
tooltip: 纯白之箭无法注销。即使注销了圣光爆发，仍可在格拉提亚城内快速传送。
default: ['PR_BURST']
*/

enablemagic: '设置魔法' arg1=Magic_List '是否启用' Bool ;
/* enablemagic
color: this.dataColor
tooltip: 被禁用的魔法（下划线_表示全部禁用，不可用于其他指令！）不可以开始咏唱（已咏唱一半的可以继续），切换地图后失效。
default: ['_',false]
*/

setmagic: '施展魔法：' arg1=Magic_List '不散落魔力' Bool '伤害对象' arg2=Mghit_List '基准点位' arg3=String '右移' arg4=String '下移' arg5=String ;
/* setmagic
color: this.dataColor
tooltip: 此指令瞄准方向不受控制，不适用于圣光爆发。主角（%）以外的基准点位都要事先在地图文件中定义。偏移量的单位不是像素，因此可以是小数。
default: ['WATERSHARD',false,'PR','%','0','0']
*/

getitem_box: '弹窗获得强化插件：' arg1=Enhancer_List ;
/* getitem_box
color: this.dataColor
tooltip: 实际用的原生指令也是GETITEM_BOX只不过不需要指定数量和品质。
default: ['Enhancer_anchor']
*/

getitem: arg0=Getitem_List '获得物品：' arg1=Item_List '数量' arg2=String '品质' arg3=Grade_List ;
/* getitem
color: this.dataColor
tooltip: 部分「重要物品」可能无法随意获得。数量可以填-1表示单格堆叠上限。
default: ['GETITEM','special_suicide','1','4']
*/

remitem: '失去物品：' arg1=Item_List '数量' arg2=String '品质' arg3=Grade_List '不提示' Bool '额外参数' arg4=String?;
/* remitem
color: this.dataColor
tooltip: 品质填-1表示优先失去最低品质。额外参数一般是以Alert_item_reduced开头的词条名，也可以不填。
default: ['mtr_essence_roaper','5','-1',false,'__adding']
*/

getmoney: '获得金币：' String '是否弹窗' Bool ;
/* getmoney
color: this.dataColor
tooltip: 金币上限是999999，本指令不能获得兑锭、精萃、公会积分等。
default: ['2147483647']
*/

wait_fn: '等待某功能：' arg1=WaitFn_List '额外参数' arg2=String? ;
/* wait_fn
color: this.dataColor
tooltip: 一般选择ITEMDESC来等待玩家按掉物品/魔法/技能/插件的介绍弹窗。
default: ['ITEMDESC',""]
*/

alchemy: '打开界面：' arg0=Alchemy_List ;
/* alchemy
color: this.uiColor
tooltip: 回忆相册界面需要根据变量 $_album_categ $_scene $_scene_index 自行后续处理。
default: ['ALCHEMY_COFFEEMAKER']
*/

ui_forge: '进入铁匠铺：' '自定义参数' String? ;
/* ui_forge
color: this.uiColor
tooltip: 如果不填写自定义参数，则会根据是否持有许可证自动填写。
default: [""]
*/

itemstore: '进入商店：' arg1=Store_List '是否堂食' Bool '水平位置' arg2=Horizontal_List ;
/* itemstore
color: this.uiColor
tooltip: 水平位置对堂食无效。非堂食的水平位置建议在CL CCL C CCR CR中选择。
default: ['city_bar_t02',false,'C']
*/

storeflush: '刷新商店库存：' arg1=Store_List '额外参数' arg2=String? ;
/* storeflush
color: this.uiColor
tooltip: 战斗结束后一般会自动刷新所有商店的库存。
default: ['city_bar_t02',""]
*/

storeadd: '商店进货：' arg1=Store_List '物品' arg2=Item_List '数量' arg3=String '品质' arg4=Grade_List '额外参数' arg5=String? ;
/* storeadd
color: this.uiColor
tooltip: 用来给指定商店临时添加某样货品，比如南丁格尔的三个精灵卵。
default: ['Night','mtr_elf_egg','3','3',""]
*/

bench_cmd_execute: '执行长椅/卫生间操作：' arg1=Bench_Cmd_List '额外参数' arg2=String? ;
/* bench_cmd_execute
color: this.uiColor
tooltip: 目前认为「清洗身体、淋浴」和「清空已吃下的食物、小便（会清空食物效果）」这两组是一样的，两种「排出卵」则是生效条件不同。
default: ['shower_cure_cloth',""]
*/

mgmtimer: '限时取出物品：' id=Item_List '限制秒数' limit=String '预备秒数' ready=String '右上角图标' icon=Icon_List BGNL? '如果超时' statement* '如果选对' statement* '选错或取消' statement* ;
/* mgmtimer
color: this.uiColor
tooltip: 限制秒数填0表示无限（但右上角会不显示任何内容，需要另行告知玩家要选的物品）。选对的话，变量$__grade会记录持有所选物品的最高品质(０～４)。
default: ['scapecat','10','3','IconNoel0']
*/

pr_key_simulate: '模拟按键：' arg1=Keyboard_List '额外参数' arg2=String? ;
/* pr_key_simulate
color: this.prColor
tooltip: 额外参数填0表示松开某个按键，不填表示按住某个按键。但是不知为何魔法键和攻击键无法单独生效，只能同时按下模拟圣光爆发。
default: ['T',""]
*/

pr_outfit: '主角换装：' arg1=Outfit_List ;
/* pr_outfit
color: this.prColor
tooltip: 睡裙状态下只能慢走和跳跃，道场训练服会用睡裙的动态立绘。
default: ['DOJO']
*/

pr_beto: '玷污主角动态立绘：' arg1=Beto_List ;
/* pr_beto
color: this.prColor
tooltip: 其中FREEZE或STONE_WHOLE要配合冻结或完全石化状态才合适。
default: ['WEB_TRAPPED']
*/

pr_breath: '改变主角呼吸声：' arg1=Voice_List ;
/* pr_breath
color: this.prColor
tooltip: 事件结束后会循环播放所选语音，直到做出任意战斗动作。
default: ['cough']
*/

pr_voice: '播放主角语音：' arg1=Voice_List ;
/* pr_voice
color: this.prColor
tooltip: 本指令不能播放伊夏和阿尔玛等同学的语音。
default: ['near_orgasm_iku']
*/

pr_gacha: 'QTE挑战：' arg1=Gacha_List '次数' arg2=String '额外参数' arg3=String? ;
/* pr_gacha
color: this.prColor
tooltip: 挑战结束后变量$_result会被代入1（成功）或0（失败），额外参数中F表示失败时不重试，P[xxx]表示挑战时的姿势。
default: ['PENDULUM','2','P[confused]F']
*/

pr_cure: '治疗角色：' '是否定量' Bool '生命' arg1=String '魔力' arg2=String '额外参数' arg3=String? ;
/* pr_cure
color: this.prColor
tooltip: 定量模式下（对应原生指令MV_CURE）生命和魔力支持填写具体的恢复量（而不是填1表示回满）。
default: [false,'1','1','']
*/

ser_apply: '获得异常状态：' arg1=Ser_List '额外参数' arg2=String? ;
/* ser_apply
color: this.prColor
tooltip: 部分异常状态（晕厥、睡眠等）支持用额外参数指定持续帧数，部分异常状态（晕乎乎、疲惫等）可以多次使用本指令来叠加等级。
default: ['BURNED',""]
*/

wait: '等待' String? '帧' '是否可被按键打断' Bool ;
/* wait
color: this.flowColor
tooltip: 如果希望无限期等待且只能被按键打断，则勾选后不要填写帧数。
default: ['60',false]
*/

setTimeout: '延迟执行' String? '帧' statement* ;
/* setTimeout
color: this.flowColor
tooltip: 不可以用来延迟复杂的多行指令！如果帧数不填，则默认延迟到下一条对话显示完成时。
default: ['60']
*/

module: '调用另一事件：' '模式' arg0=Module_List '事件ID' arg1=String '传入参数' arg2=String? ;
/* module
color: this.flowColor
tooltip: 事件ID指的是事件cmd文件在evt文件夹下的相对路径，可在事件运行过程中按F7在右上角查看。
default: ['CHANGE_EVENT2','107/51_tigrina_blackhole',""]
*/

numcounter: '输入整数：' '最小值' arg1=String '最大值' arg2=String '默认值' arg3=String '正解值' arg4=String? ;
/* numcounter
color: this.flowColor
tooltip: 输入值会被保存在变量$_result中，输入正解值会有开锁特效。
default: ['0','1410065407','1111111111','']
*/

select_case: '选项列表（标签跳转模式）' BGNL? choice_case* ;
/* select_case
color: this.flowColor
tooltip: 标签跳转模式在选中不同选项后直接执行不同的指令。
*/
choice_case: '子选项：' arg0=String '绿底叹号' quest=Bool '额外设置' arg2=ChoiceFlag_List '自动break' Bool BGNL? statement* ;
/* choice_case
color: this.entryColor
tooltip: 这里的break是switch语句中的概念，如果不懂请保持勾选。
default: ['确认许可',false,"",true]
*/

select_str: '选项列表（字符串变量模式）：' '变量名' String BGNL? choice_str* ;
/* select_str
color: this.flowColor
tooltip: 选中某个选项后会将对应的字符串代入变量，需要后续判断。
default: ['_result']
*/ 
choice_str: '子选项：' arg0=String '代入字符串' arg1=String? '绿底叹号' Bool '额外设置' arg2=ChoiceFlag_List ;
/* choice_str
color: this.entryColor
tooltip: 如果不填写代入字符串，就会使用显示内容（但不对&&词条做替换）。
default: ['确认许可','accept',false,""]
*/

ifthen: '如果' arg0=IfElse_List arg1=String BGNL? statement* ;
/* ifthen
color: this.flowColor
tooltip: 不带「否则」的条件分歧，后面可以紧跟ELSIFXXX形成多重分歧。
default: ['IF','is_night']
*/

ifelse: '如果' arg0=IfElse_List arg1=String BGNL? statement* '否则' statement* ;
/* ifelse
color: this.flowColor
tooltip: IFLANG可用于判断语言设置，此时参数为localization下的各文件夹名，但要大写。
default: ['IF','is_night']
*/

ifstr: '如果字符串' x=String op=Ifstr_List y=String BGNL? statement* '否则' statement* ;
/* ifstr
color: this.flowColor
tooltip: 用于判断两个字符串的包含和前后缀关系，字符串常量用单引号包裹。
default: ['kawaisou','STARTS','kawai']
*/

loop: '循环执行' Loop_List '条件' If_List String BGNL? statement* ;
/* loop
color: this.flowColor
tooltip: 带do的会至少循环一轮（首轮不检查条件是否成立），带until的表示否定条件（条件不成立时继续循环）。
default: ['dowhile','IF','0']
*/

mgm_4ascend: '启动四子棋：' '棋手列表' String ;
/* mgm_4ascend
color: this.otherColor
tooltip: 列表中的_auto表示自动包含已对决过的电脑棋手（因此前四个可以只留下alma），最后两个表示本地对战和在线对战。
default: ['ostrea ixia alma primula _auto _local2p _online']
*/

replace_bgm: '切换音乐：' arg0=Bgm_List '淡出帧数' arg1=String '淡入帧数' arg2=String '释放内存' Bool ;
/* replace_bgm
color: this.otherColor
tooltip: 相当于LOAD_BGM和REPLACE_BGM两条原生指令连用。
default: ['houkago_no_hitotoki','30','30',false]
*/

posteffect: '后期特效：' arg1=PostEffect_List '额外参数' arg2=String? ;
/* posteffect
color: this.otherColor
tooltip: 额外参数的第一项为淡入帧数，如果对一个已经存在的特效填-1，就会用和之前淡入时相同的帧数淡出。
default: ['RAIN','60']
*/

pe_fadeinout: '临时后期特效：' arg1=PostEffect_List '淡入淡出帧数' arg2=String '停留帧数' arg3=String '额外参数' arg4=String? ;
/* pe_fadeinout
color: this.otherColor
tooltip: 先在x帧内添加特效，再停留y帧，最后在x帧内撤去特效，共计2x+y帧。
default: ['STONEOVER','45','30',""]
*/

qu_handshake: '画面混沌摆：' '稳态帧数' arg1=String '启停帧数' arg2=String '摆动幅度' arg3=String '启动延迟' arg4=String? ;
/* qu_handshake
color: this.otherColor
tooltip: 启动后和「临时后期特效」类似是x+2y的总帧数，启动延迟帧数可以小于零。
default: ['180','60','100',""]
*/

quake: '画面其他抖动：' arg0=Quake_List '起始幅度' arg1=String '持续帧数' arg2=String '最终幅度' arg3=String '启动延迟' arg4=String? ;
/* quake
color: this.otherColor
tooltip: 抖动幅度会在一定帧数内由起始值变为最终值，启动延迟帧数可以小于零。
default: ['QU_VIB','100','180','10',""]
*/

greeting: '对齐调查点：' '背对方向' arg1=Greeting_List '相对位移' arg2=String? ;
/* greeting
color: this.otherColor
tooltip: 本指令可让主角的调查站位标准化，相对位移可以填正数（额外后退）或负数（额外前进）。
default: ['@',""]
*/

move_script: '移动角色：' String? '是否禁用脚步声' Bool BGNL? msitem* ;
/* move_script
color: this.otherColor
tooltip: 除了主角（%），其他角色都要先在地图文件中定义。
default: ['%',false]
*/
msitem: ms_raw | ms_bracket ;
ms_bracket: '移动指令：' MoveScript_List '[' String ']' String? ;
/* ms_bracket
color: this.entryColor
default: ['SND','sd_initialize',""]
return `{"type":"ms_raw","String_0":"${MoveScript_List_0}[${String_0}]${String_1||''}"},\n`; // 解析后自动变成下面只有一个 String 的版本
*/
ms_raw: '移动指令：' String ;
/* ms_raw
color: this.entryColor
default: ['##']
*/

custom: '原生指令：' String? ;
/* custom
color: this.otherColor
tooltip: 此积木用于誊抄现有事件中的指令，参数用空格隔开。
default: ['// 这是注释']
*/

empty: ''; // 虚空，需要手动从 toolboxObj 中删去
/* empty return '\n';*/

statExprSplit : '=== statement ^ === expression v ===' ;

BGNL: '\n' ;
Bool: 'false'|'true' ;
String: .* ;
String_Multi: .* ;

MoveScript_List: 'P'|'>'|'>+'|'>@'|'>>'|'@>>'|'>>X'|'@>>X'|'<<'|'@X'|'@#'|'M'|'S'|'TS'|'SND'|'SND!'|'MP'|'PTC'|'PTCC'|'PTCT'|'PTC!'|'J' ;

Acceleration_List: 'ZLINE'|'ZPOW'|'ZPOW3'|'ZPOWV'|'ZCOS'|'ZSIN'|'ZSIN2'|'ZSIN3'|'ZSINV'|'ZSINV2'|'ZSINV3'|'ZEXPLODE'|'RZLINE'|'RZPOW'|'RZPOW3'|'RZPOWV'|'RZCOS'|'RZSIN'|'RZSIN2'|'RZSIN3'|'RZSINV'|'RZSINV2'|'RZSINV3'|'RZEXPLODE' ;

Alchemy_List: '回忆相册'|'享用料理'|'烹饪'|'炼金术'|'香薰精油'|'香草茶'|'工作台'|'查看配方'|'查看图鉴'|'卫生间'|'接受委托'|'交付委托'|'等待商人'
/* Alchemy_List ['UIALBUM','LUNCHTIME','COOKING','ALCHEMY','ALCHEMY_TRM','ALCHEMY_COFFEEMAKER','ALCHEMY_WORKBENCH','ALCHEMY_RECIPE_BOOK','ALCHEMY_RECIPE_BOOK2','UI_RESTROOM_MENU TOP_BT','UI_GUILDQUEST city','UI_GUILDQUEST city 1',"CONFIRM_WAIT_NIGHTINGALE\nIF $_result'==1' UIGM WAIT_NIGHTINGALE"] */ ;

Alert_List: '默认'|'怀卵'|'低兴奋度'|'高兴奋度'|'灰色'|'输掉了'|'长椅'|'木偶'|'报错'|'酒保'
/* Alert_List ['ALERT','ALERT_EGG','ALERT_EP','ALERT_EP2','ALERT_GRAY','ALERT_HUNGER','ALERT_BENCH','ALERT_PUPPET','ALERT_FATAL','ALERT_BARU'] */ ;

Alphabet_List: '爱丽丝'|'酒保'|'c'|'提尔德'|'e'|'德尔菲尼'|'梅法'|'h'|'伊夏'|'j'|'k'|'阿尔玛'|'诺艾儿（洗手间）'|'诺艾儿'|'诺艾儿（长椅）'|'普莉姆拉'|'q'|'蒂格蕾娜'|'奥斯托利亚'|'南丁格尔'|'u'|'丽薇歌塔'|'瓦罗斯'|'x'|'y'|'z'
/* Alphabet_List ['a','bt','c','d','e','f','g','h','i','j','k','l','nb','n','nb2','p','q','so','s','t','u','v','w','x','y','z'] */
;

Bench_Cmd_List: '恢复HP'|'修补衣服（有音效）'|'MP恢复🏠'|'抚慰自己'|'清空已吃下的食物'|'将卵排出（需开健全）'|'修补衣服＋清洗身体'|'修补衣服（不清洗）'|'清洗身体'|'淋浴'|'小便（会清空食物效果）'|'把卵排出'|'小便'
/* Bench_Cmd_List ['cure_hp','cure_cloth','cure_mp','cure_ep','empty_stomach','cure_egged','shower_clean_cure_cloth','shower_cure_cloth','shower_clean','shower','pee_excrete','restroom_cure_egged','pee'] */ ;

Beto_List: 'Absorbed'|'Worm'|'Sperm'|'BigBite'|'Mud'|'Sperm2'|'EggLay'|'Vore'|'Ydrg'|'Ground'|'GroundHard'|'Blood'|'Lava'|'Thunder'|'Grab'|'SLASH'|'TORNADO'|'DarkTornado'|'FREEZE'|'DigestLiquid'|'Normal'|'NormalS'|'STONE_WHOLE'|'WEB_TRAPPED' ;

Bgm_List: '村子名为（未实装）'|'标题（格拉提亚）'|'刮风'|'蓝色祠堂'|'初遇史莱姆'|'编织者之森（普通）'|'编织者之森（战斗）'|'魔女杂货店（昼）'|'魔女杂货店（夜）'|'伊夏（昼）'|'伊夏（夜）'|'伊夏（被抓）'|'伊夏（被救）'|'丽薇歌塔姐姐'|'提尔德哥哥'|'德尔菲尼父亲'|'普莉姆拉老师'|'爱丽丝梦游仙境'|'虫鸣'|'夏丝塔祖母'|'护盾与闪避教学'|'睡个好觉（不循环）'|'烹饪教学'|'休息室准备'|'休息室成功'|'休息室失败'|'南丁格尔'|'染华EGG'|'咖啡师'|'木偶复仇战'|'水下'|'战败CG'|'阿尔玛同学'|'奥斯托利亚'|'蛊惑之沼'|'爆破现场'|'习得圣光爆发'|'森之领主'|'梅法队长'|'猜拳准备'|'猜拳一阶段'|'猜拳二阶段'|'猜拳三阶段'|'猜拳失败'|'牧场挤奶'|'三月兔酒吧'|'美术馆'|'贝尔米特学园'|'四子棋'|'和阿尔玛上课'|'食堂的嘈杂'|'武器库潜行'|'武器库搜身'|'蒂格蕾娜学姐'|'全息投影模拟战'|'水球教学'|'水球比赛'|'魔族入侵警报'|'学姐的恳求'|'保卫战在即'|'校园保卫战'|'初遇幽灵（不循环）'
/* Bgm_List ['muranonamaeha','title','wind','degree45','herghost','forest','forest Battle','cornehl','cornehl_night','ixia','ixia_night','ixia_battle','ixia_battle Ixia_Battle','popsup','tilde','town4','primula','tuuzyou','suzumusi','light','luminous_particle','inn','valentine','tokimeki','yatto_deaeta','bukiyou_na_hutari','shopping','taihai','sinwa','dungeon3','underwater','fatal_huon','sohunosyosai','hunter_minarai','yocho','madhatter','killing','battle_nusi','morinokioku','ChipBattle','dojogame0','dojogame1','dojogame2','dojo_loseb','sakura_skip','town2','houkago_no_hitotoki','school','mgm_ttr','piano_no_kakera','gaya_school_1','c_sign','A_suspicion','tigrina','tigrina Tigrina_Battle','tyousa_dbd_file_no3','oosoudou','sailen_2week','strigiformes','gaya_106','towerdefence','nusi_meet_ghost'] */ ;

Cane_List: '初始法杖'|'贝尔米特'|'贝尔米特・改'|'战锤'|'天马'|'独占者'
/* Cane_List ['default','bermit','bermit2','hammer','sleipner','monopolizer'] */ ;

ChoiceFlag_List: '无'|'禁止悬停和选中'|'允许悬停禁止选中'|'按取消键选中'|'初始悬停位置'|'初始悬停＋取消键选中'
/* ChoiceFlag_List ["",'S','s','C','D','CD'] */ ;

Color_List: '红'|'黑'|'黄'|'绿'|'蓝'|'紫'|'灰'|'白'|'无'
/* Color_List ['RED','BLACK','YELLOW','GREEN','SKY','PURPLE','DARK','WHITE','0x00000000'] */ ;

Enemy_List: '洒出母乳'|'失禁漏尿'|'自慰高潮'|'催淫光束'|'森之领主'|'奶牛'|'染华 EGG'|'巢厄'|'妖狐'|'沼蛙'|'沼蛙吞食'|'壁虎'|'木偶'|'光束发射台'|'木马'|'导弹发射架'|'杂波干扰器'|'木偶(静止)'|'巨人'|'巨人'|'蜂巢'|'愚者'|'机甲木偶'|'三角木马'|'蘑菇'|'敌人'|'五足'|'野猪'|'幼犬'|'酒壶'|'触须怪'|'史莱姆'|'催淫气体'|'土蛇'|'海绵'|'泡泡'|'触手'|'剑山'|'虫群'
/* Enemy_List ['_MILK','_PEE','MASTURBATE','BEAM','BOSS_NUSI','COW','EGGREMOVE','EHOME','FOX','FROG','FROG_VORE','GECKO','GOLEM','GOLEMTOY_BOW','GOLEMTOY_MKB','GOLEMTOY_POD','GOLEMTOY_RM','GOLEM_0_NM','GOLEM_OD','GOLEM_OD2','HONEYCOMB','MAGE','MECHGOLEM','MKB','MUSH','OTHER','PENTAPOD','PIG','PUPPY','RAMDA','ROAPER','SLIME','SMOKE','SNAKE','SPONGE','SYABON','TENTACLE','UNI','WORMS'] */ ;

Enhancer_List: '血之虹瞳'|'抓地鞋'|'超载咏唱'|'长法杖'|'猫之缓降'|'双重闪避'|'盗垒滑步'|'祈雨御守'|'恐高症'|'藏巧守拙'|'濡湿预兆'|'体术心得'|'磁性之心'|'灵魂吞噬者'
/* Enhancer_List ['Enhancer_hp_eye','Enhancer_cliff_stopper','Enhancer_overspell','Enhancer_long_reach','Enhancer_falling_cat','Enhancer_double_evade','Enhancer_sway_sliding','Enhancer_raincaller','Enhancer_shield_cat','Enhancer_singletask','Enhancer_juice_server','Enhancer_anchor','Enhancer_secure_absorb','Enhancer_soul_eater'] */ ;

Gacha_List: '单键连击'|'高潮后起身'|'单键长按'|'多键序列'|'憋尿单摆'|'自慰单摆'
/* Gacha_List ['REP','REP_AFTER_ORGASM','HOLD','SEQUENCE','PENDULUM','PENDULUM_ONNIE'] */ ;

Getitem_List: '常规'|'静默'|'弹窗'|'补液（慎用）'
/* Getitem_List ['GETITEM','GETITEM_NOANNOUNCE','GETITEM_BOX','GETITEM_SUPPLIER'] */ ;

Grade_List: '☆☆☆☆☆'|'★☆☆☆☆'|'★★☆☆☆'|'★★★☆☆'|'★★★★☆'|'★★★★★'
/* Grade_List ['-1','0','1','2','3','4'] */ ;

Greeting_List: '左(L)'|'右(R)'|'自动(@)' /* Greeting_List ['L','R','@'] */ ;

HkdsBounds_List: '重置'|'不变'|'NORMAL'|'TT'|'WIDE'|'WIDE_TT'|'WIDE_TT3'|'TT3'|'MONOLOGUE'|'ONELINE'|'_OFFLINE'
/* HkdsBounds_List ["''","'='"] */ ;

Horizontal_List: 'LL'|'L'|'CL'|'CCL'|'C'|'CCR'|'CR'|'R'|'RR' ;
Vertical_List: '上(T)'|'中'|'下(B)' /* Vertical_List ['T',"",'B'] */ ;

Icon_List: 'IconAlice'|'IconAlma'|'IconAlma_2'|'IconBarten'|'IconDelfini'|'IconGolem'|'IconIxia'|'IconIxia_2'|'IconIxia_3'|'IconIxiaCry'|'IconLaevi'|'IconLaeviLaugh'|'IconMepha'|'IconMob'|'IconMush'|'IconMushContaminated'|'IconNightingale'|'IconNightingale_2'|'IconNightingaleHappy'|'IconNoel0'|'IconNoel0_2'|'IconNoel0_3'|'IconNoel1'|'IconNoelDizzy'|'IconOstrea'|'IconPrimula'|'IconTilde'|'IconTildeSigh'|'IconTigrina'|'IconTigrina_2'|'IconTigrinaHappy'|'IconWalross' ;

If_List: 'IF'|'IFDEF'|'IFNDEF'|'IFSTR'|'IFLANG' ;

IfElse_List: 'IF'|'IFDEF'|'IFNDEF'|'IFSTR'|'IFLANG'|'ELSIF'|'ELSIFDEF'|'ELSIFNDEF'|'ELSIFSTR'|'ELSIFLANG' ;

Ifstr_List: '等于'|'不等于'|'包含于'|'不包含于'|'开头是'|'开头不是'|'结尾是'|'结尾不是'|'包含'|'不包含'
/* Ifstr_List ['IS','ISNOT','ISIN','ISNOTIN','STARTS','NOTSTARTS','ENDS','NOTENDS','CONTAINS','NOTCONTAINS'] */
;

Item_List: '清水'|'酿精'|'生命瓶'|'精灵乳'|'魔虫蜜汁'|'牧场纯牛奶'|'诺艾儿汁'|'诺艾儿乳'|'诺艾儿的卵'|'恩惠的生命之符'|'魔力滤芯'|'贝尔米特制式法杖'|'贝尔米特制式法杖・改'|'初学者法杖'|'魔法战锤'|'独占者・节制'|'斯莱普尼尔・天马'|'虹吸壶使用券'|'儿童用烹饪锅'|'强化插槽'|'血苹果'|'香蕉'|'血樱桃'|'禁忌的苹果'|'葡萄'|'猕猴桃'|'柠檬'|'桃子'|'血菠萝'|'李子'|'活力软糖'|'魔力软糖'|'便当盒'|'紫水晶'|'罗勒'|'豌豆'|'魔族的皮肤'|'甜菜'|'黑纹药草'|'空瓶子'|'西兰花'|'牛蒡'|'卷心菜'|'可可豆'|'胡萝卜'|'芹菜'|'洋甘菊'|'铬矿'|'煤炭'|'咖啡豆'|'铜矿'|'玉米'|'黄瓜'|'小瓶香料'|'大吉岭'|'家禽蛋'|'电路板'|'精灵的卵'|'黑暗精华'|'扭动的壁虎尾'|'木偶的右手'|'黑棉孢子'|'五足索'|'野猪牙'|'黏腻触须'|'史莱姆的假卵'|'蛇皮'|'海绵的球壳'|'剑山的刺'|'大蒜'|'爬行动物皮肤'|'玻璃碎片'|'金矿'|'青椒'|'瓜拿纳'|'铁矿'|'凝胶'|'柠檬香茅'|'生菜'|'铃兰球茎'|'禽类的肉'|'魔族的肉'|'摩根石'|'蘑菇'|'斑点蘑菇'|'猫硅石'|'硝石'|'洋葱'|'魔族的肝脏'|'甜椒'|'玫瑰天竺葵'|'胡椒'|'辣薄荷'|'木天蓼'|'马铃薯'|'南瓜'|'石英'|'红绿柱石'|'稻米'|'岩盐'|'迷迭香'|'庭园鼠尾草'|'蓝宝石'|'毒种子'|'石头'|'硫磺'|'塔罗牌：愚者'|'番茄'|'托帕石'|'大头菜'|'茄子'|'枯草'|'小麦'|'木材'|'锯末'|'商人的铃铛'|'过充插槽'|'兽人的炸弹'|'合金骨架'|'魔力磁计'|'取卵器'|'冒险者公会会员证'|'存储卡'|'旧式治疗师制服'|'棉质内裤'|'魔法设备特殊携带许可证'|'炼金术图鉴'|'腐烂的食物'|'替罪猫'|'背包扩容道具'|'不稳定的石块'|'土制榴弹'|'闪光弹'|'魔力炸弹'|'目标追踪配件'|'火力增幅配件'|'投掷辅助配件'|'悬浮感应配件'|'粘性外壳配件'|'陈旧的容器'|'面包窑'|'酿造桶'|'虹吸壶'|'锯木机'|'空瓶收纳槽'|'背包扩容'
/* Item_List ['mtr_water0','mtr_actihol','mtr_bottle_life0','mtr_elf_milk','mtr_honey','mtr_milk','mtr_noel_juice0','mtr_noel_milk','mtr_noel_egg','anc_mp0','bst_hvn_filter','cane_bermit','cane_bermit2','cane_default','cane_hammer','cane_monopolizer','cane_sleipner','coffeemaker_ticket','cooking_pan','enhancer_slot','fruit_apple0','fruit_banana','fruit_cherry0','fruit_epdmg_apple0','fruit_grape','fruit_kiwi','fruit_lemon','fruit_peach','fruit_pine0','fruit_plum','gummy_hp0','gummy_mp0','lunchbox','mtr_amethyst0','mtr_basil','mtr_bean','mtr_beast_skin0','mtr_beets','mtr_black_harb0','mtr_bottle0','mtr_broccoli','mtr_burdock','mtr_cabbage','mtr_cacao','mtr_carrot','mtr_celery','mtr_chamomile','mtr_chrom0','mtr_coal0','mtr_coffee','mtr_copper','mtr_corn','mtr_cucumber','mtr_curry','mtr_darjeeling','mtr_egg','mtr_elecboard','mtr_elf_egg','mtr_essence0','mtr_essence_gecko','mtr_essence_golem','mtr_essence_mush','mtr_essence_pentapod','mtr_essence_pig','mtr_essence_roaper','mtr_essence_slime','mtr_essence_snake','mtr_essence_sponge','mtr_essence_uni','mtr_garlic','mtr_gecko_skin0','mtr_glass0','mtr_gold','mtr_green_pepper','mtr_guarana','mtr_iron0','mtr_jelly0','mtr_lemongrass','mtr_lettuce','mtr_lily_bulb0','mtr_meat_chicken0','mtr_meat_demon0','mtr_morganite','mtr_mush','mtr_mush2','mtr_nekoite','mtr_nitre','mtr_onion','mtr_organ0','mtr_paprika','mtr_pelargonium','mtr_pepper','mtr_peppermint','mtr_polygama','mtr_potato','mtr_pumpkin','mtr_quartz0','mtr_redberyl','mtr_rice','mtr_rocksolt0','mtr_rosemary','mtr_sage','mtr_sapphire','mtr_seed0','mtr_stone','mtr_sulfur','mtr_tarot_fool','mtr_tomato','mtr_topaz','mtr_turnip','mtr_waterplant','mtr_weed0','mtr_wheat','mtr_wood','mtr_woodchip','nightingale_bell','oc_slot','ostrea_bomb','precious_bone_beast','precious_dangerous_meter','precious_egg_remover','precious_guild_card','precious_memorychip','precious_noel_cloth','precious_noel_shorts','precious_testor_lisence','recipe_collection','rotten_food','scapecat','special_inventory0','special_suicide','throw_bomb','throw_lightbomb ','throw_magicbomb','throwattach_chaser','throwattach_enpower','throwattach_long','throwattach_sensor','throwattach_suction','timecapsule','tool_bread_oven','tool_keg','tool_siphon','tool_woodchiper','workbench_bottle','workbench_capacity'] */ ;

Keyboard_List: '前进'|'下蹲'|'向左'|'向右'|'上跳'|'魔法'|'攻击'
/* Keyboard_List ['@','B','L','R','T','X','Z'] */ ;

Loop_List: 'while'|'until'|'dowhile'|'dountil' ;

Magic_List: '纯白之箭'|'地面炸弹'|'聚能火球'|'圣光爆发'|'雷霆电击'|'环链水阵'|'引力黑洞'|'高能炸弹'
/* Magic_List ['WHITEARROW','DROPBOMB','FIREBALL','PR_BURST','THUNDERBOLT','WATERSHARD','BLACKHOLE','POWERBOMB'] */ ;

Manpu_List: '无'|'愤怒'|'惊讶'|'脸红'|'蒸汽'|'蓝竖线'|'红叹号（不循环）'|'叹问号（不循环）'|'一颗心'|'三颗心'|'喘气'|'灵光一闪（不循环）'|'黄红牌'|'灯泡（不循环）'|'亮音符'|'暗音符'|'晕头转向'|'玉米粒'|'开心'|'蓝问号'|'黑螺旋'|'白气泡'|'一滴汗'|'很多汗'|'无语'
/* Manpu_List ["''",'ANG','AWK','BLS','BSM','DEP','EXC','EXQ','HEA','HEA2','HOT','KIR','LAG','LIG','ONP','ONP2','PIY','PLE','PLE2','QUE','SMK','SWB','SWT','SWT2','TTT'] */ ;

Mghit_List: '魔族'|'精灵'|'精灵和魔族'|'魔族和精灵'
/* Mghit_List ['PR','EN','EN|PR','PR|EN'] */ ;

Module_List: '不返回'|'会返回'|'宏指令'
/* Module_List ['CHANGE_EVENT','CHANGE_EVENT2','MODULE'] */ ;

Outfit_List: '祖母的制服'|'吊带睡裙'|'道场训练服'
/* Outfit_List ['NORMAL','BABYDOLL','DOJO'] */ ;

PostEffect_List: 'HP_REDUCE'|'MP_REDUCE'|'MP_ABSORBED'|'WHOLERIPPLE'|'FLASH'|'SUMMONER_ACTIVATE'|'LAYING_EGG'|'ENEMY_OVERDRIVE_APPEAR'|'MAGIC_DEVICE_ACTIVATE'|'JAMMING'|'GAS_APPLIED'|'POST_BLOOM'|'IRISOUT'|'WORM_TRAPPED'|'THUNDER_TRAP'|'BURST'|'SHOTGUN'|'MAGICSELECT'|'STONEOVER'|'SEPIA'|'GO_CLOSE_EYE'|'TS_SLOW'|'ZOOM2'|'ZOOM2_EATEN'|'HEARTBEAT'|'RAIN'|'CONFUSED_CAMERA'|'SND_VOLUME_REDUCE'|'M2D_VAR_0'|'BGM_LOWER'|'BGM_WATER'|'FINAL_ALPHA' ;

Quake_List: '左右抖动'|'上下抖动'|'横竖抖动'
/* Quake_List ['QU_SINH','QU_SINV','QU_VIB'] */ ;

SPmove_List: '静止'|'半透明'|'HOP'|'SCARY'|'FLY'|'CAR'|'SCARY2'|'ANGER'|'LOVELY'|'BLINK'|'JUMP'|'JUMPB'|'WEEKHITL'|'WEEKHITR'|'SHAKE'|'BLINK2'|'DANCE'|'SIN_H'|'SIN_V'|'SIN_H2'|'SIN_V2'|'HANDSHAKE'
/* SPmove_List ['NONE','ALP50'] */ ;

Ser_List: '燃烧'|'晕厥'|'服装损坏'|'混乱'|'无法产卵'|'晕乎乎'|'怀卵 Lv.2'|'禁止高潮'|'冻结'|'欲火中烧'|'杂念'|'产卵'|'母乳体质'|'枯竭'|'尿意'|'恍惚'|'高潮蓄积'|'疲惫'|'麻痹'|'植物寄生'|'催淫'|'羞耻'|'羞耻（兴奋）'|'羞耻（魔力流失）'|'羞耻（濡湿）'|'破盾'|'睡眠'|'石化'|'黏糊糊'
/* Ser_List ['BURNED','BURST_TIRED','CLT_BROKEN','CONFUSE','DO_NOT_LAY_EGG','DRUNK','EGGED','FORBIDDEN_ORGASM','FROZEN','FRUSTRATED','JAMMING','LAYING_EGG','MILKY','MP_REDUCE','NEAR_PEE','ORGASM_AFTER','ORGASM_STACK','OVERRUN_TIRED','PARALYSIS','PARASITISED','SEXERCISE','SHAMED','SHAMED_EP','SHAMED_SPLIT','SHAMED_WET','SHIELD_BREAK','SLEEP','STONE','WEB_TRAPPED'] */ ;

Skill_List: '轻攻击'|'魔法霰弹'|'滑铲'|'旋风斩击'|'彗星俯冲'|'突进冲击'|'凌空横斩'|'会心重击'|'羽翼护符'|'护盾'|'闪避'|'受身术'|'护盾冲击'|'环轨护盾'|'完美防御'|'轮舞斩击'|'圣光爆发'|'埴轮人偶的护符'|'编织者之森的地图'|'hp10_forest_0'|'hp10_forest_ct'|'hp10_forest_ruin_hall'|'hp20_forest_senzyo_rt'|'hp20_forest_wood_extender'|'hp20_store_0'|'mp10_forest_0'|'mp20_store_0'|'mp20_forest_lava_secret'|'mp20_forest_athletic_ladder'
/* Skill_List ['punch','shotgun','sliding','wheel','comet','dashpunch','airpunch','smash','sp_bird','guard','evade','ukemi','guard_bush','guard_lariat','justguard','evade_dancing','burst','sp_difficulty0','sp_map_forest'] */ ;

Store_List: '魔女杂货店'|'酒吧贮藏室'|'三月兔酒吧'|'免费喝一杯'|'现烤麦面包'|'虎莲咖啡厅'|'公会干粮店'|'天空便利店'|'卖蛋的精灵'|'矿石路边摊'|'新鲜果蔬摊'|'香草咖啡师'|'商人小姐姐'|'木偶采购员'|'校园小卖部'
/* Store_List ['Laevi','BarUnder','city_bar','city_bar_t02','city_bread','city_cafe','city_guild','city_hvn','city_slam_egg','city_stone','city_vegi','CoffeeMaker','Night','Puppet','scl_koubai'] */ ;

Talker_List: '重置'|'不变'|'爱丽丝'|'酒保'|'咖啡师'|'提尔德・柯涅尔'|'木偶型魔族'|'德尔菲尼・柯涅尔'|'梅法・格里亚德'|'法杖'|'伊夏・波利斯塔切尔'|'伊夏的法杖'|'诺艾儿的法杖'|'阿尔玛・奥普菲帕姆'|'＊'|'诺艾儿・柯涅尔'|'奥斯托利亚'|'普莉姆拉'|'老师'|'工程师'|'蒂格蕾娜・索菈'|'南丁格尔'|'？？？'|'丽薇歌塔・柯涅尔'|'瓦罗斯'|'精灵女性'|'精灵男性'|'精灵学生'
/* Talker_List ["''","'='",'Alice','Barten','CoffeeMaker','Tilde','EnemyPuppet','NoelDad','Mepha','Cane','Ixia','IxiaCane','NoelCane','Alma','Mob','Noel','Ostrea','Primula','teacher','engineer','Tigrina','Nightingale','Unknown','Laevi','Walross','elf_woman','elf_man','elf_student'] */
;

PrinterSound_List: '重置'|'静音'|'不变'|'爱丽丝'|'阿尔玛'|'酒保'|'法杖'|'魔族'|'卫兵'|'伊夏'|'丽薇歌塔'|'丽薇歌塔（未使用）'|'普莉姆拉'|'瓦罗斯'|'奥斯托利亚'|'梅法'|'梅法（通信）'|'南丁格尔'|'德尔菲尼'|'诺艾儿'|'蒂格蕾娜'|'蒂格蕾娜（未使用）'|'提尔德'
/* PrinterSound_List ["","''","'='",'talk_alice','talk_alma','talk_barten','talk_cane','talk_demon','talk_guard','talk_ixia','talk_levi','talk_levi2','talk_m1','talk_mob_m1','talk_mob_m2','talk_mob_w3','talk_mob_w3_noise','talk_nightingale','talk_nodad','talk_noel','talk_soala','talk_tigrina','talk_tilde'] */
;

Tfade_List: '同时整齐'|'错落有致'|'➡'|'⬇'|'⬅'|'⬆'|'↘'|'↙'|'↗'|'↖'|'⇅展开'|'⇵闭合'|'⇆展开'|'⇄闭合'|'↗↙闭合'|'↘↖闭合'|'向外扩散'|'向内收拢'|'＞'|'∨'|'＜'|'∧'
/* Tfade_List ['WHOLE','DISSOLVE','L2R','T2B','R2L','B2T','LT2RB','TR2BL','BL2TR','RB2LT','EYE_OPEN','EYE_CLOSE','DOOR_OPEN','DOOR_CLOSE','NANAMEDOOR_LT_RB','NANAMEDOOR_TR_BL','EXPAND','CONTRACT','ARROW_L','ARROW_T','ARROW_R','ARROW_B'] */ ;

TitleCall_List: '无'|'带下划线'|'不自动消失' /* TitleCall_List ["",'1','BOOK_TITLE'] */ ;

TutoPos_List: '↖'|'⬅'|'↙'|'⬆'|'⊙'|'⬇'|'↗'|'➡'|'↘'
/* TutoPos_List ['L T','L M','L B','C T','C M','C B','R T','R M','R B'] */ ;

Voice_List: 'el01（未实装）'|'must_ss（未实装）'|'orgasm_ng（未实装）'|'after_orgasm'|'after_pee'|'arrest'|'awk'|'awkx'|'breath_aft'|'breath_down'|'breath_e'|'breath_sleep'|'cough'|'death'|'dmgl'|'dmgs'|'dmgx'|'dmgx_eggremove'|'dmg_elec'|'ehard'|'el'|'es'|'ev_auu'|'ev_awk'|'ev_hitl'|'ev_hit_ground'|'feared'|'gaman'|'heat'|'laying_l'|'laying_s'|'mouth'|'mouthl'|'mouth_fin'|'mouth_split'|'mouth_wk'|'must'|'mustl'|'mustll'|'must_come'|'must_come_fatal'|'must_mouth'|'must_orgasm'|'near_orgasm'|'near_orgasm_iku'|'orgasm'|'orgasm_iku'|'shield_break'|'sleep_init'|'split'|'split_manual'|'sxx_awk'|'sxx_feared'|'sxx_mouth'|'water_choked'|'water_choked_release_a'|'water_choked_release_b'
/* Voice_List ['el01','must_ss','orgasm_ng'] */ ;

WaitFn_List: 'ITEMDESC'|'MAP_TRANSFER'|'MGFARM'|'NIGHTCON'|'NM2D_GAMEOVER'|'PXL_LOAD '|'REELMNG'|'UIGM_ACTIVATE' ;

Xxxskill_List: '习得'|'静默习得'|'启用'|'禁用'|'失去'
/* Xxxskill_List ['GETSKILL','GETSKILL_NOANNOUNCE','ENABLESKILL','DISABLESKILL','REMSKILL'] */ ;

MeaningfulSplit : '=== meaningful ^ ===' ;

/* Call_BeforeType
this.evisitor.entryColor = 260; // 入口积木
this.evisitor.statementColor = 260 - 180; // 指令块默认颜色
// this.evisitor.valueColor = 330; // 值块
this.evisitor.msgColor = 260 - 225; // 文字类
this.evisitor.picColor = 260 - 180; // 图片类
this.evisitor.dataColor = 260 - 135; // 数据类
this.evisitor.uiColor = 260 - 90; // 界面类
this.evisitor.prColor = 260 - 45; // 主角操作
this.evisitor.flowColor = 260 + 45; // 流程控制
this.evisitor.otherColor = 260 + 90; // 其他指令
*/

/* Call_AfterAllContent
this.js.BlocklyInject = this.js.BlocklyInject.replace('wheel: true,', 'wheel: false,'); // 禁用滚轮的缩放功能，配合最后的函数将其用于滚屏
this.js.checkUpdateFunction = this.js.checkUpdateFunction.replace( // 把实时更新 codeArea 的函数暴露出来，以在 debugFunctions 中修改
    /var codeAreaFunc[^}]+}/, 'var codeAreaFunc=function(err,data){return globalThis.codeAreaFunc(err,data);}'
);

this.js.toolbox=(()=>{
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

}).toString().slice(5, -1); // ()=>{ 和 } 的长度分别为 5 和 1

this.js.debugFunctions=(()=>{
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

}).toString().slice(5, -1); // ()=>{ 和 } 的长度分别为 5 和 1
*/