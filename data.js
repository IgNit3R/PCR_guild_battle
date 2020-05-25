const DATA_nameMap = [
	{name: "黑椿", id: 1341416184327},
	{name: "手手", id: 1110989227597},
	{name: "以摸多", id: 1131848569969},
	{name: "池霜", id: 1059202629191},
	{name: "咸鱼", id: 1072464889993},
	{name: "Alpha", id: 1402954104343},
	{name: "好好先生", id: 1197984197184},
	{name: "一起学猫叫", id: 1357698349190},
	{name: "向井蓝", id: 1227423942797},
	{name: "夜雨纷扬", id: 1364336248317},
	{name: "爱丽丝", id: 1182673656377},
	{name: "机智的阿斗", id: 1369618936374},
	{name: "爱莉杏菜", id: 1287647249903},
	{name: "宋寂", id: 1145480414777},
	{name: "金色之泪", id: 1384456670787},
	{name: "灼眼的Saber", id: 1016778001906},
	{name: "打个大西瓜", id: 1175451205131},
	{name: "我群最菜", id: 1373474221136},
	{name: "初心如故", id: 1020717944340},
	{name: "乐活", id: 1407880747519},
	{name: "香浓朱古力", id: 1369214661104},
	{name: "Lemon", id: 1418294443568},
	{name: "骡逃兵", id: 1199696096321},
	{name: "魂魄妖梦", id: 1420580320323},
	{name: "上杉谦信", id: 1314847096371},
	{name: "Ron洛神", id: 1087383237195},
	{name: "长星夜烁", id: 1135487787534},
	{name: "翻车大队长", id: 1291097389101},
	{name: "海豹", id: 1081885841947},
	{name: "老公", id: 1271928496391},
];

const DATA_mobParas = [
	{bossIdx: 1, health: 6000000, scoreFactor: 1, name: "龙", round: 1, bossNum: 1, bgC: "background: #300"},
	{bossIdx: 2, health: 8000000, scoreFactor: 1, name: "鸟", round: 1, bossNum: 2, bgC: "background: #c00"},
	{bossIdx: 3, health: 10000000, scoreFactor: 1.1, name: "花", round: 1, bossNum: 3, bgC: "background: #600"},
	{bossIdx: 4, health: 12000000, scoreFactor: 1.1, name: "熊", round: 1, bossNum: 4, bgC: "background: #f00"},
	{bossIdx: 5, health: 20000000, scoreFactor: 1.2, name: "羊", round: 1, bossNum: 5, bgC: "background: #900"},
	{bossIdx: 6, health: 6000000, scoreFactor: 1.2, name: "龙", round: 2, bossNum: 1, bgC: "background: #300"},
	{bossIdx: 7, health: 8000000, scoreFactor: 1.2, name: "鸟", round: 2, bossNum: 2, bgC: "background: #c00"},
	{bossIdx: 8, health: 10000000, scoreFactor: 1.5, name: "花", round: 2, bossNum: 3, bgC: "background: #600"},
	{bossIdx: 9, health: 12000000, scoreFactor: 1.7, name: "熊", round: 2, bossNum: 4, bgC: "background: #f00"},
	{bossIdx: 10, health: 20000000, scoreFactor: 2, name: "羊", round: 2, bossNum: 5, bgC: "background: #900"},
	{bossIdx: 11, health: 6000000, scoreFactor: 1.2, name: "龙", round: 3, bossNum: 1, bgC: "background: #311"},
	{bossIdx: 12, health: 8000000, scoreFactor: 1.2, name: "鸟", round: 3, bossNum: 2, bgC: "background: #c11"},
	{bossIdx: 13, health: 10000000, scoreFactor: 1.5, name: "花", round: 3, bossNum: 3, bgC: "background: #611"},
	{bossIdx: 14, health: 12000000, scoreFactor: 1.7, name: "熊", round: 3, bossNum: 4, bgC: "background: #f11"},
	{bossIdx: 15, health: 20000000, scoreFactor: 2, name: "羊", round: 3, bossNum: 5, bgC: "background: #911"},
	{bossIdx: 16, health: 6000000, scoreFactor: 1.2, name: "龙", round: 4, bossNum: 1, bgC: "background: #311"},
	{bossIdx: 17, health: 8000000, scoreFactor: 1.2, name: "鸟", round: 4, bossNum: 2, bgC: "background: #c11"},
	{bossIdx: 18, health: 10000000, scoreFactor: 1.5, name: "花", round: 4, bossNum: 3, bgC: "background: #611"},
	{bossIdx: 19, health: 12000000, scoreFactor: 1.7, name: "熊", round: 4, bossNum: 4, bgC: "background: #f11"},
	{bossIdx: 20, health: 20000000, scoreFactor: 2, name: "羊", round: 4, bossNum: 5, bgC: "background: #911"},
	{bossIdx: 21, health: 6000000, scoreFactor: 1.2, name: "龙", round: 5, bossNum: 1, bgC: "background: #322"},
	{bossIdx: 22, health: 8000000, scoreFactor: 1.2, name: "鸟", round: 5, bossNum: 2, bgC: "background: #c22"},
	{bossIdx: 23, health: 10000000, scoreFactor: 1.5, name: "花", round: 5, bossNum: 3, bgC: "background: #622"},
	{bossIdx: 24, health: 12000000, scoreFactor: 1.7, name: "熊", round: 5, bossNum: 4, bgC: "background: #f22"},
	{bossIdx: 25, health: 20000000, scoreFactor: 2, name: "羊", round: 5, bossNum: 5, bgC: "background: #922"},
	{bossIdx: 26, health: 6000000, scoreFactor: 1.2, name: "龙", round: 6, bossNum: 1, bgC: "background: #322"},
	{bossIdx: 27, health: 8000000, scoreFactor: 1.2, name: "鸟", round: 6, bossNum: 2, bgC: "background: #c22"},
	{bossIdx: 28, health: 10000000, scoreFactor: 1.5, name: "花", round: 6, bossNum: 3, bgC: "background: #622"},
	{bossIdx: 29, health: 12000000, scoreFactor: 1.7, name: "熊", round: 6, bossNum: 4, bgC: "background: #f22"},
	{bossIdx: 30, health: 20000000, scoreFactor: 2, name: "羊", round: 6, bossNum: 5, bgC: "background: #922"},
	{bossIdx: 31, health: 6000000, scoreFactor: 1.2, name: "龙", round: 7, bossNum: 1, bgC: "background: #322"},
	{bossIdx: 32, health: 8000000, scoreFactor: 1.2, name: "鸟", round: 7, bossNum: 2, bgC: "background: #c22"},
	{bossIdx: 33, health: 10000000, scoreFactor: 1.5, name: "花", round: 7, bossNum: 3, bgC: "background: #622"},
	{bossIdx: 34, health: 12000000, scoreFactor: 1.7, name: "熊", round: 7, bossNum: 4, bgC: "background: #f22"},
	{bossIdx: 35, health: 20000000, scoreFactor: 2, name: "羊", round: 7, bossNum: 5, bgC: "background: #922"},
];

const DATA_combineRule = [
	{factor:1, refund: 10},
	{factor:1.1, refund: 29},
	{factor:1.2, refund: 35},
	{factor:1.3, refund: 41},
	{factor:1.4, refund: 46},
	{factor:1.5, refund: 50},
	{factor:1.6, refund: 54},
	{factor:1.7, refund: 58},
	{factor:1.8, refund: 60},
	{factor:1.9, refund: 63},
	{factor:2, refund: 65},
	{factor:3, refund: 80},
	{factor:4, refund: 88},
	{factor:4.3, refund: 90},
];

const DATA_actionData = [
	// D1
	{
		day: 1,
		bossIdx: 1,
		log: [
			{name: "好好先生", damage: 819696},
			{name: "初心如故", damage: 754978},
			{name: "爱莉杏菜", damage: 729122},
			{name: "宋寂", damage: 657609},
			{name: "向井蓝", damage: 588688},
			{name: "打个大西瓜", damage: 582455},
			{name: "咸鱼", damage: 462544},
			{name: "老公", damage: 427843},
			{name: "爱丽丝", damage: 406698},
			{name: "池霜", damage: 315082},
			{name: "灼眼的Saber", damage: 255285}
		]
	},
	{
		day: 1,
		bossIdx: 2,
		log: [
			{name: "以摸多", damage: 1126371},
			{name: "黑椿", damage: 1055339},
			{name: "手手", damage: 945169},
			{name: "机智的阿斗", damage: 906561},
			{name: "乐活", damage: 675446},
			{name: "池霜", damage: 485988},
			{name: "打个大西瓜", damage: 400554},
			{name: "Lemon", damage: 388002},
			{name: "骡逃兵", damage: 386179},
			{name: "夜雨纷扬", damage: 315210},
			{name: "上杉谦信", damage: 312073},
			{name: "好好先生", damage: 291123},
			{name: "爱丽丝", damage: 288072},
			{name: "宋寂", damage: 229801},
			{name: "翻车大队长", damage: 194112}
		]
	},
	{
		day: 1,
		bossIdx: 3,
		log: [
			{name: "Alpha", damage: 1036913},
			{name: "我群最菜", damage: 1000953},
			{name: "金色之泪", damage: 943713},
			{name: "夜雨纷扬", damage: 832962},
			{name: "灼眼的Saber", damage: 780306},
			{name: "魂魄妖梦", damage: 779154},
			{name: "骡逃兵", damage: 596846},
			{name: "海豹", damage: 534583},
			{name: "咸鱼", damage: 525912},
			{name: "Lemon", damage: 409581},
			{name: "上杉谦信", damage: 383512},
			{name: "池霜", damage: 363605},
			{name: "Ron洛神", damage: 360373},
			{name: "一起学猫叫", damage: 283992},
			{name: "打个大西瓜", damage: 268277},
			{name: "向井蓝", damage: 241974},
			{name: "爱丽丝", damage: 228205},
			{name: "初心如故", damage: 223196},
			{name: "老公", damage: 205943}
		]
	},
	{
		day: 1,
		bossIdx: 4,
		log: [
			{name: "长星夜烁", damage: 888363},
			{name: "香浓朱古力", damage: 770474},
			{name: "一起学猫叫", damage: 695918},
			{name: "Ron洛神", damage: 533188},
			{name: "手手", damage: 285770},
			{name: "翻车大队长", damage: 179203}
		]
	},

	// D2
	{
		day: 2,
		bossIdx: 4,
		log: [
			{name: "爱莉杏菜", damage: 427853},
			{name: "爱莉杏菜", damage: 265079},
			{name: "爱莉杏菜", damage: 158140},
			{name: "爱丽丝", damage: 339337},
			{name: "魂魄妖梦", damage: 298512},
			{name: "老公", damage: 258138},
			{name: "灼眼的Saber", damage: 378034},
			{name: "宋寂", damage: 443157},
			{name: "向井蓝", damage: 374219},
			{name: "初心如故", damage: 431614},
			{name: "向井蓝", damage: 373881},
			{name: "宋寂", damage: 257858},
			{name: "海豹", damage: 246644},
			{name: "初心如故", damage: 315853},
			{name: "海豹", damage: 207000},
			{name: "海豹", damage: 155877},
			{name: "好好先生", damage: 412782},
			{name: "金色之泪", damage: 404515},
			{name: "金色之泪", damage: 288394},
			{name: "以摸多", damage: 272012},
			{name: "咸鱼", damage: 402840},
			{name: "手手", damage: 243386},
			{name: "骡逃兵", damage: 201942},
			{name: "手手", damage: 369626},
			{name: "打个大西瓜", damage: 271314},
			{name: "咸鱼", damage: 403070},
			{name: "打个大西瓜", damage: 379814},
			{name: "我群最菜", damage: 66193}
		]
	},
	{
		day: 2,
		bossIdx: 5,
		log: [
			{name: "机智的阿斗", damage: 533407},
			{name: "骡逃兵", damage: 322831},
			{name: "Alpha", damage: 465888},
			{name: "以摸多", damage: 507290},
			{name: "我群最菜", damage: 91865},
			{name: "灼眼的Saber", damage: 425492},
			{name: "好好先生", damage: 498776},
			{name: "Alpha", damage: 318708},
			{name: "好好先生", damage: 251740},
			{name: "机智的阿斗", damage: 385797},
			{name: "机智的阿斗", damage: 207912},
			{name: "爱丽丝", damage: 270685},
			{name: "夜雨纷扬", damage: 465893},
			{name: "黑椿", damage: 459151},
			{name: "夜雨纷扬", damage: 415108},
			{name: "黑椿", damage: 405655},
			{name: "池霜", damage: 577472},
			{name: "初心如故", damage: 244419},
			{name: "手手", damage: 563198},
			{name: "骡逃兵", damage: 564242},
			{name: "上杉谦信", damage: 270216},
			{name: "池霜", damage: 355764},
			{name: "池霜", damage: 320392},
			{name: "金色之泪", damage: 215472},
			{name: "向井蓝", damage: 261072},
			{name: "上杉谦信", damage: 333166},
			{name: "爱丽丝", damage: 263267},
			{name: "我群最菜", damage: 384428},
			{name: "我群最菜", damage: 386641},
			{name: "咸鱼", damage: 295887},
			{name: "Lemon", damage: 304668},
			{name: "Lemon", damage: 220519},
			{name: "Lemon", damage: 212473},
			{name: "宋寂", damage: 308688},
			{name: "乐活", damage: 291546},
			{name: "乐活", damage: 308623},
			{name: "乐活", damage: 274430},
			{name: "黑椿", damage: 307039},
			{name: "魂魄妖梦", damage: 330614},
			{name: "魂魄妖梦", damage: 259710},
			{name: "夜雨纷扬", damage: 303541},
			{name: "打个大西瓜", damage: 540371},
			{name: "上杉谦信", damage: 171233},
			{name: "Alpha", damage: 252145},
			{name: "灼眼的Saber", damage: 211401},
			{name: "老公", damage: 192207},
			{name: "老公", damage: 104114},
			{name: "Ron洛神", damage: 329786},
			{name: "Ron洛神", damage: 329517},
			{name: "以摸多", damage: 262455},
			{name: "Ron洛神", damage: 205731},
			{name: "翻车大队长", damage: 252999},
			{name: "翻车大队长", damage: 177711},
			{name: "翻车大队长", damage: 324516},
			{name: "一起学猫叫", damage: 422363},
			{name: "香浓朱古力", damage: 415656},
			{name: "一起学猫叫", damage: 325660},
			{name: "一起学猫叫", damage: 258237},
			{name: "香浓朱古力", damage: 304403},
			{name: "香浓朱古力", damage: 219828},
			{name: "长星夜烁", damage: 384801},
			{name: "长星夜烁", damage: 131181},
		]
	},
	{
		day: 2,
		bossIdx: 6,
		log: [
			{name: "长星夜烁", damage: 192176},
			{name: "长星夜烁", damage: 200736},
		]
	},

	// D3
	{
		day: 3,
		bossIdx: 6,
		log: [
			{name: "魂魄妖梦", damage: 318540},
			{name: "老公", damage: 283858},
			{name: "打个大西瓜", damage: 553699},
			{name: "打个大西瓜", damage: 443608},
			{name: "爱莉杏菜", damage: 287151},
			{name: "爱莉杏菜", damage: 301933},
			{name: "爱莉杏菜", damage: 203509},
			{name: "初心如故", damage: 458458},
			{name: "初心如故", damage: 360125},
			{name: "宋寂", damage: 284991},
			{name: "海豹", damage: 347675},
			{name: "以摸多", damage: 508313},
			{name: "海豹", damage: 380476},
			{name: "海豹", damage: 172960},
			{name: "好好先生", damage: 225404},
			{name: "池霜", damage: 323961},
			{name: "向井蓝", damage: 437643},
		]
	},
	{
		day: 3,
		bossIdx: 7,
		log: [
			{name: "骡逃兵", damage: 380819},
			{name: "向井蓝", damage: 340326},
			{name: "向井蓝", damage: 217891},
			{name: "宋寂", damage: 333782},
			{name: "金色之泪", damage: 470557},
			{name: "好好先生", damage: 406420},
			{name: "初心如故", damage: 247532},
			{name: "Ron洛神", damage: 336381},
			{name: "灼眼的Saber", damage: 255401},
			{name: "Ron洛神", damage: 356492},
			{name: "上杉谦信", damage: 275462},
			{name: "上杉谦信", damage: 209072},
			{name: "爱丽丝", damage: 430455},
			{name: "爱丽丝", damage: 301482},
			{name: "手手", damage: 307026},
			{name: "夜雨纷扬", damage: 314072},
			{name: "夜雨纷扬", damage: 457513},
			{name: "黑椿", damage: 318212},
			{name: "我群最菜", damage: 395867},
			{name: "灼眼的Saber", damage: 465640},
			{name: "咸鱼", damage: 466556},
			{name: "打个大西瓜", damage: 295771},
			{name: "池霜", damage: 417271},
		]
	},
	{
		day: 3,
		bossIdx: 8,
		log: [
			{name: "池霜", damage: 56278},
			{name: "宋寂", damage: 540821},
			{name: "灼眼的Saber", damage: 490812},
			{name: "以摸多", damage: 396865},
			{name: "金色之泪", damage: 325567},
			{name: "以摸多", damage: 227681},
			{name: "金色之泪", damage: 194464},
			{name: "黑椿", damage: 532486},
			{name: "老公", damage: 257666},
			{name: "好好先生", damage: 528302},
			{name: "夜雨纷扬", damage: 473562},
			{name: "Lemon", damage: 406266},
			{name: "Alpha", damage: 405046},
			{name: "Lemon", damage: 300733},
			{name: "Lemon", damage: 227147},
			{name: "Alpha", damage: 364708},
			{name: "魂魄妖梦", damage: 374781},
			{name: "Alpha", damage: 298662},
			{name: "魂魄妖梦", damage: 248659},
			{name: "手手", damage: 614501},
			{name: "池霜", damage: 572226},
			{name: "咸鱼", damage: 480111},
			{name: "长星夜烁", damage: 386057},
			{name: "咸鱼", damage: 273856},
			{name: "手手", damage: 457399},
			{name: "长星夜烁", damage: 358428},
			{name: "长星夜烁", damage: 206916},
		]
	},
	{
		day: 3,
		bossIdx: 9,
		log: [
			{name: "长星夜烁", damage: 13587},
			{name: "骡逃兵", damage: 425050},
			{name: "机智的阿斗", damage: 358737},
			{name: "机智的阿斗", damage: 284371},
			{name: "机智的阿斗", damage: 233123},
			{name: "黑椿", damage: 306620},
			{name: "爱丽丝", damage: 249811},
			{name: "向井蓝", damage: 252815},
			{name: "上杉谦信", damage: 146539},
			{name: "乐活", damage: 307739},
			{name: "乐活", damage: 187091},
			{name: "我群最菜", damage: 332367},
			{name: "我群最菜", damage: 277446},
			{name: "乐活", damage: 141521},
			{name: "翻车大队长", damage: 137617},
			{name: "翻车大队长", damage: 218257},
			{name: "翻车大队长", damage: 274610},
			{name: "Ron洛神", damage: 183598},
			{name: "香浓朱古力", damage: 364277},
			{name: "一起学猫叫", damage: 461800},
			{name: "一起学猫叫", damage: 264909},
			{name: "一起学猫叫", damage: 242172},
			{name: "香浓朱古力", damage: 202325},
			{name: "香浓朱古力", damage: 222814},
			{name: "老公", damage: 83489},
			{name: "骡逃兵", damage: 212702},
		]
	},

	// D4
	{
		day: 4,
		bossIdx: 9,
		log: [
			{name: "爱丽丝", damage: 378950},
			{name: "海豹", damage: 305285},
			{name: "海豹", damage: 283931},
			{name: "海豹", damage: 189797},
			{name: "骡逃兵", damage: 309817},
			{name: "老公", damage: 235626},
			{name: "爱莉杏菜", damage: 403668},
			{name: "爱莉杏菜", damage: 228050},
			{name: "爱莉杏菜", damage: 198225},
			{name: "打个大西瓜", damage: 409571},
			{name: "打个大西瓜", damage: 271246},
			{name: "初心如故", damage: 220193},
			{name: "魂魄妖梦", damage: 313321},
			{name: "好好先生", damage: 423138},
			{name: "好好先生", damage: 275101},
			{name: "长星夜烁", damage: 170178},
			{name: "长星夜烁", damage: 395082},
			{name: "上杉谦信", damage: 110302},
			{name: "池霜", damage: 436056},
			{name: "黑椿", damage: 402568},
		]
	},
	{
		day: 4,
		bossIdx: 10,
		log: [
			{name: "初心如故", damage: 466171},
			{name: "初心如故", damage: 422991},
			{name: "黑椿", damage: 408369},
			{name: "我群最菜", damage: 439316},
			{name: "我群最菜", damage: 394440},
			{name: "黑椿", damage: 473487},
			{name: "好好先生", damage: 561640},
			{name: "池霜", damage: 561994},
			{name: "黑椿", damage: 296857},
			{name: "骡逃兵", damage: 545541},
			{name: "灼眼的Saber", damage: 410395},
			{name: "夜雨纷扬", damage: 538568},
			{name: "骡逃兵", damage: 312460},
			{name: "灼眼的Saber", damage: 459134},
			{name: "手手", damage: 553066},
			{name: "池霜", damage: 314189},
			{name: "爱丽丝", damage: 296343},
			{name: "手手", damage: 455738},
			{name: "手手", damage: 360170},
			{name: "灼眼的Saber", damage: 258708},
			{name: "宋寂", damage: 507306},
			{name: "宋寂", damage: 354252},
			{name: "宋寂", damage: 259626},
			{name: "打个大西瓜", damage: 508462},
			{name: "向井蓝", damage: 442147},
			{name: "向井蓝", damage: 372092},
			{name: "咸鱼", damage: 560107},
			{name: "咸鱼", damage: 432017},
			{name: "咸鱼", damage: 313717},
			{name: "上杉谦信", damage: 254429},
			{name: "上杉谦信", damage: 197071},
			{name: "长星夜烁", damage: 395973},
			{name: "以摸多", damage: 551473},
			{name: "以摸多", damage: 441009},
			{name: "爱丽丝", damage: 273633},
			{name: "机智的阿斗", damage: 389695},
			{name: "机智的阿斗", damage: 419561},
			{name: "机智的阿斗", damage: 257047},
			{name: "翻车大队长", damage: 213660},
			{name: "夜雨纷扬", damage: 452160},
			{name: "翻车大队长", damage: 285663},
			{name: "翻车大队长", damage: 377615},
			{name: "夜雨纷扬", damage: 303444},
			{name: "Lemon", damage: 375159},
			{name: "乐活", damage: 377124},
			{name: "Lemon", damage: 243792},
			{name: "魂魄妖梦", damage: 290869},
			{name: "Lemon", damage: 242605},
			{name: "魂魄妖梦", damage: 380432},
			{name: "乐活", damage: 243386},
			{name: "金色之泪", damage: 435695},
			{name: "乐活", damage: 231768},
			{name: "金色之泪", damage: 267434},
		]
	},
	{
		day: 4,
		bossIdx: 11,
		log: [
			{name: "我群最菜", damage: 278780},
			{name: "Alpha", damage: 281018},
			{name: "Alpha", damage: 307780},
			{name: "Alpha", damage: 0},
			{name: "金色之泪", damage: 246676},
			{name: "一起学猫叫", damage: 478394},
			{name: "一起学猫叫", damage: 313586},
			{name: "一起学猫叫", damage: 233692},
			{name: "老公", damage: 283685},
			{name: "老公", damage: 121575},
			{name: "金色之泪", damage: 229565},
			{name: "向井蓝", damage: 280332},
			{name: "Ron洛神", damage: 440733},
			{name: "Ron洛神", damage: 302136},
			{name: "Ron洛神", damage: 222864},
			{name: "香浓朱古力", damage: 423186},
			{name: "香浓朱古力", damage: 342974},
			{name: "香浓朱古力", damage: 260514},
			{name: "以摸多", damage: 262553},
		]
	},

	// D5
	{
		day: 5,
		bossIdx: 11,
		log: [
			{name: "灼眼的Saber", damage: 290683},
			{name: "初心如故", damage: 399274},
		]
	},
	{
		day: 5,
		bossIdx: 12,
		log: [
			{name: "爱丽丝", damage: 425031},
			{name: "夜雨纷扬", damage: 524332},
			{name: "宋寂", damage: 268610},
			{name: "夜雨纷扬", damage: 325471},
			{name: "好好先生", damage: 468794},
			{name: "好好先生", damage: 293446},
			{name: "打个大西瓜", damage: 324100},
			{name: "池霜", damage: 336325},
			{name: "Alpha", damage: 367786},
			{name: "Alpha", damage: 282045},
			{name: "老公", damage: 284345},
			{name: "海豹", damage: 454009},
			{name: "我群最菜", damage: 309609},
			{name: "海豹", damage: 274436},
			{name: "海豹", damage: 212747},
			{name: "初心如故", damage: 27222},
			{name: "爱丽丝", damage: 326716},
			{name: "机智的阿斗", damage: 263196},
			{name: "向井蓝", damage: 418635},
			{name: "黑椿", damage: 321814},
			{name: "咸鱼", damage: 288047},
			{name: "咸鱼", damage: 518144},
			{name: "池霜", damage: 518240},
			{name: "黑椿", damage: 166900},
		]
	},
	{
		day: 5,
		bossIdx: 13,
		log: [
			{name: "黑椿", damage: 347180},
			{name: "上杉谦信", damage: 277781},
			{name: "池霜", damage: 609201},
			{name: "上杉谦信", damage: 213432},
			{name: "咸鱼", damage: 537397},
			{name: "初心如故", damage: 494507},
			{name: "打个大西瓜", damage: 568581},
			{name: "乐活", damage: 393586},
			{name: "夜雨纷扬", damage: 468915},
			{name: "乐活", damage: 215876},
			{name: "灼眼的Saber", damage: 493268},
			{name: "爱丽丝", damage: 263045},
			{name: "金色之泪", damage: 393195},
			{name: "初心如故", damage: 227360},
			{name: "手手", damage: 646508},
			{name: "金色之泪", damage: 349754},
			{name: "宋寂", damage: 563009},
			{name: "向井蓝", damage: 350897},
			{name: "Alpha", damage: 598752},
			{name: "手手", damage: 343402},
			{name: "乐活", damage: 218641},
			{name: "骡逃兵", damage: 584665},
			{name: "好好先生", damage: 556393},
			{name: "机智的阿斗", damage: 284475},
			{name: "香浓朱古力", damage: 180},
		]
	},
	{
		day: 5,
		bossIdx: 14,
		log: [
			{name: "黑椿", damage: 425608},
			{name: "我群最菜", damage: 389624},
			{name: "我群最菜", damage: 397949},
			{name: "香浓朱古力", damage: 187413},
			{name: "手手", damage: 444902},
			{name: "灼眼的Saber", damage: 418521},
			{name: "机智的阿斗", damage: 360912},
			{name: "魂魄妖梦", damage: 328665},
			{name: "骡逃兵", damage: 370130},
			{name: "魂魄妖梦", damage: 359509},
			{name: "魂魄妖梦", damage: 179488},
			{name: "骡逃兵", damage: 205437},
			{name: "金色之泪", damage: 208324},
			{name: "长星夜烁", damage: 490652},
			{name: "老公", damage: 227183},
			{name: "长星夜烁", damage: 381776},
			{name: "长星夜烁", damage: 179964},
			{name: "上杉谦信", damage: 243218},
			{name: "宋寂", damage: 291000},
			{name: "Lemon", damage: 386428},
			{name: "Lemon", damage: 258638},
			{name: "Lemon", damage: 231029},
			{name: "以摸多", damage: 445631},
			{name: "以摸多", damage: 372926},
			{name: "以摸多", damage: 221521},
			{name: "翻车大队长", damage: 261217},
			{name: "打个大西瓜", damage: 424186},
			{name: "翻车大队长", damage: 143966},
			{name: "翻车大队长", damage: 286043},
			{name: "老公", damage: 57265},
			{name: "一起学猫叫", damage: 401844},
			{name: "香浓朱古力", damage: 369111},
			{name: "Ron洛神", damage: 372858},
			{name: "一起学猫叫", damage: 293994},
			{name: "Ron洛神", damage: 284932},
			{name: "Ron洛神", damage: 209397},
			{name: "一起学猫叫", damage: 244480},
			{name: "香浓朱古力", damage: 330979},
		]
	},

	// D6
	{
		day: 6,
		bossIdx: 14,
		log: [
			{name: "初心如故", damage: 313280},
		]
	},
	{
		day: 6,
		bossIdx: 15,
		log: [
			{name: "骡逃兵", damage: 597429},
			{name: "池霜", damage: 578296},
			{name: "池霜", damage: 455827},
			{name: "夜雨纷扬", damage: 560166},
			{name: "初心如故", damage: 88460},
			{name: "初心如故", damage: 520370},
			{name: "Alpha", damage: 611616},
			{name: "宋寂", damage: 498151},
			{name: "打个大西瓜", damage: 537106},
			{name: "打个大西瓜", damage: 427416},
			{name: "我群最菜", damage: 570011},
			{name: "宋寂", damage: 365497},
			{name: "好好先生", damage: 536685},
			{name: "灼眼的Saber", damage: 487540},
			{name: "好好先生", damage: 459927},
			{name: "以摸多", damage: 491034},
			{name: "以摸多", damage: 474644},
			{name: "我群最菜", damage: 370527},
			{name: "乐活", damage: 352154},
			{name: "手手", damage: 596699},
			{name: "手手", damage: 479901},
			{name: "夜雨纷扬", damage: 491236},
			{name: "Alpha", damage: 363233},
			{name: "爱丽丝", damage: 431005},
			{name: "爱丽丝", damage: 322675},
			{name: "黑椿", damage: 489187},
			{name: "黑椿", damage: 476075},
			{name: "机智的阿斗", damage: 543224},
			{name: "机智的阿斗", damage: 339029},
			{name: "向井蓝", damage: 469872},
			{name: "向井蓝", damage: 424155},
			{name: "向井蓝", damage: 276546},
			{name: "灼眼的Saber", damage: 415946},
			{name: "爱丽丝", damage: 269695},
			{name: "魂魄妖梦", damage: 301218},
			{name: "魂魄妖梦", damage: 357130},
			{name: "魂魄妖梦", damage: 261471},
			{name: "金色之泪", damage: 434166},
			{name: "金色之泪", damage: 281934},
			{name: "金色之泪", damage: 269123},
			{name: "海豹", damage: 367711},
			{name: "海豹", damage: 254827},
			{name: "海豹", damage: 216796},
			{name: "手手", damage: 386782},
			{name: "长星夜烁", damage: 407885},
			{name: "长星夜烁", damage: 423719},
			{name: "长星夜烁", damage: 164696},
			{name: "咸鱼", damage: 501208},
		]
	},
	{
		day: 6,
		bossIdx: 16,
		log: [
			{name: "咸鱼", damage: 59585},
			{name: "机智的阿斗", damage: 320082},
			{name: "宋寂", damage: 273749},
			{name: "初心如故", damage: 240635},
			{name: "灼眼的Saber", damage: 299073},
			{name: "Lemon", damage: 415516},
			{name: "夜雨纷扬", damage: 321296},
			{name: "Lemon", damage: 326385},
			{name: "Lemon", damage: 255818},
			{name: "黑椿", damage: 337249},
			{name: "咸鱼", damage: 309020},
			{name: "打个大西瓜", damage: 313241},
			{name: "老公", damage: 274761},
			{name: "老公", damage: 302479},
			{name: "好好先生", damage: 291972},
			{name: "老公", damage: 186321},
			{name: "一起学猫叫", damage: 235557},
			{name: "上杉谦信", damage: 216668},
			{name: "乐活", damage: 238388},
			{name: "上杉谦信", damage: 254405},
			{name: "池霜", damage: 328652},
			{name: "乐活", damage: 199148},
		]
	},
	{
		day: 6,
		bossIdx: 17,
		log: [
			{name: "上杉谦信", damage: 165664},
			{name: "咸鱼", damage: 458261},
			{name: "一起学猫叫", damage: 280667},
			{name: "香浓朱古力", damage: 454576},
			{name: "一起学猫叫", damage: 520453},
			{name: "骡逃兵", damage: 369359},
			{name: "骡逃兵", damage: 278875},
			{name: "Alpha", damage: 284843},
			{name: "我群最菜", damage: 302225},
			{name: "乐活", damage: 122908},
			{name: "翻车大队长", damage: 360320},
			{name: "翻车大队长", damage: 250053},
			{name: "翻车大队长", damage: 165540},
			{name: "香浓朱古力", damage: 251948},
			{name: "香浓朱古力", damage: 323802},
			{name: "Ron洛神", damage: 434055},
			{name: "Ron洛神", damage: 334906},
			{name: "Ron洛神", damage: 226787},
			{name: "以摸多", damage: 290936},
		]
	},
	{
		day: 7,
		bossIdx: 17,
		log: [
			{name: "初心如故", damage: 238449},
			{name: "爱丽丝", damage: 424158},
			{name: "池霜", damage: 341733},
			{name: "骡逃兵", damage: 270554},
			{name: "咸鱼", damage: 306822},
			{name: "灼眼的Saber", damage: 324397},
			{name: "我群最菜", damage: 217709},
		]
	},
	{
		day: 7,
		bossIdx: 18,
		log: [
			{name: "海豹", damage: 530302},
			{name: "海豹", damage: 290791},
			{name: "宋寂", damage: 559678},
			{name: "池霜", damage: 619821},
			{name: "初心如故", damage: 561094},
			{name: "打个大西瓜", damage: 565878},
			{name: "咸鱼", damage: 611262},
			{name: "我群最菜", damage: 32604},
			{name: "我群最菜", damage: 584470},
			{name: "Alpha", damage: 557462},
			{name: "Alpha", damage: 294714},
			{name: "我群最菜", damage: 442440},
			{name: "翻车大队长", damage: 424553},
			{name: "手手", damage: 640713},
			{name: "翻车大队长", damage: 276109},
			{name: "一起学猫叫", damage: 309167},
			{name: "一起学猫叫", damage: 324189},
			{name: "好好先生", damage: 597422},
			{name: "骡逃兵", damage: 579788},
			{name: "夜雨纷扬", damage: 532841},
			{name: "机智的阿斗", damage: 493099},
			{name: "池霜", damage: 171603},
		]
	},
	{
		day: 7,
		bossIdx: 19,
		log: [
			{name: "池霜", damage: 242149},
			{name: "海豹", damage: 280832},
			{name: "骡逃兵", damage: 322732},
			{name: "黑椿", damage: 434224},
			{name: "咸鱼", damage: 477648},
			{name: "黑椿", damage: 441596},
			{name: "初心如故", damage: 440605},
			{name: "宋寂", damage: 263938},
			{name: "Lemon", damage: 386968},
			{name: "Lemon", damage: 267751},
			{name: "Lemon", damage: 224300},
			{name: "打个大西瓜", damage: 456013},
			{name: "打个大西瓜", damage: 301737},
			{name: "乐活", damage: 365150},
			{name: "手手", damage: 472565},
			{name: "手手", damage: 321444},
			{name: "灼眼的Saber", damage: 383581},
			{name: "爱丽丝", damage: 307834},
			{name: "夜雨纷扬", damage: 305601},
			{name: "好好先生", damage: 444310},
			{name: "好好先生", damage: 261703},
			{name: "Alpha", damage: 324425},
			{name: "香浓朱古力", damage: 420589},
			{name: "机智的阿斗", damage: 394152},
			{name: "机智的阿斗", damage: 268892},
			{name: "金色之泪", damage: 407289},
			{name: "爱丽丝", damage: 251639},
			{name: "金色之泪", damage: 314479},
			{name: "金色之泪", damage: 206171},
			{name: "上杉谦信", damage: 201854},
			{name: "上杉谦信", damage: 183489},
			{name: "一起学猫叫", damage: 451936},
			{name: "上杉谦信", damage: 157564},
			{name: "魂魄妖梦", damage: 319906},
			{name: "魂魄妖梦", damage: 393064},
			{name: "老公", damage: 301870},
		]
	},
	{
		day: 7,
		bossIdx: 20,
		log: [
			{name: "老公", damage: 35705},
			{name: "魂魄妖梦", damage: 292195},
			{name: "老公", damage: 242595},
			{name: "翻车大队长", damage: 198399},
			{name: "灼眼的Saber", damage: 524700},
			{name: "老公", damage: 185828},
			{name: "夜雨纷扬", damage: 553763},
			{name: "黑椿", damage: 318128},
			{name: "乐活", damage: 223675},
			{name: "长星夜烁", damage: 565088},
			{name: "长星夜烁", damage: 387080},
			{name: "宋寂", damage: 361810},
			{name: "乐活", damage: 291386},
			{name: "长星夜烁", damage: 223841},
			{name: "香浓朱古力", damage: 350605},
			{name: "香浓朱古力", damage: 288459},
			{name: "Ron洛神", damage: 426912},
			{name: "Ron洛神", damage: 339305},
			{name: "Ron洛神", damage: 226856},
			{name: "以摸多", damage: 472505},
			{name: "以摸多", damage: 472046},
			{name: "以摸多", damage: 293554},
		]
	},
	{
		day: 8,
		bossIdx: 20,
		log: [
			{name: "向井蓝", damage: 254171},
			{name: "向井蓝", damage: 413553},
			{name: "手手", damage: 617350},
			{name: "初心如故", damage: 486202},
			{name: "爱丽丝", damage: 389897},
			{name: "骡逃兵", damage: 586881},
			{name: "以摸多", damage: 472426},
			{name: "池霜", damage: 600979},
			{name: "Lemon", damage: 369610},
			{name: "Lemon", damage: 266103},
			{name: "Lemon", damage: 250770},
			{name: "宋寂", damage: 398292},
			{name: "宋寂", damage: 522647},
			{name: "海豹", damage: 474862},
			{name: "海豹", damage: 340361},
			{name: "灼眼的Saber", damage: 549202},
			{name: "灼眼的Saber", damage: 450825},
			{name: "打个大西瓜", damage: 548736},
			{name: "灼眼的Saber", damage: 298688},
			{name: "咸鱼", damage: 597502},
			{name: "手手", damage: 381259},
			{name: "咸鱼", damage: 292208},
			{name: "手手", damage: 449914},
			{name: "老公", damage: 384030},
			{name: "老公", damage: 224282},
			{name: "打个大西瓜", damage: 457675},
			{name: "我群最菜", damage: 563528},
			{name: "翻车大队长", damage: 454383},
			{name: "黑椿", damage: 510050},
			{name: "机智的阿斗", damage: 545998},
		]
	},
	{
		day: 8,
		bossIdx: 21,
		log: [
			{name: "我群最菜", damage: 476287},
			{name: "黑椿", damage: 332733},
			{name: "初心如故", damage: 485136},
			{name: "翻车大队长", damage: 354448},
			{name: "夜雨纷扬", damage: 329644},
			{name: "机智的阿斗", damage: 439456},
			{name: "翻车大队长", damage: 237367},
			{name: "机智的阿斗", damage: 381294},
			{name: "骡逃兵", damage: 285319},
			{name: "Alpha", damage: 296496},
			{name: "机智的阿斗", damage: 284638},
			{name: "一起学猫叫", damage: 323839},
			{name: "好好先生", damage: 344519},
			{name: "乐活", damage: 421477},
			{name: "乐活", damage: 323015},
			{name: "打个大西瓜", damage: 325280},
			{name: "Ron洛神", damage: 459216},
		]
	},
	{
		day: 8,
		bossIdx: 22,
		log: [
			{name: "Ron洛神", damage: 99064},
			{name: "Ron洛神", damage: 274137},
			{name: "以摸多", damage: 440065},
			{name: "乐活", damage: 244716},
			{name: "爱丽丝", damage: 398293},
			{name: "池霜", damage: 534634},
			{name: "池霜", damage: 347057},
			{name: "一起学猫叫", damage: 524823},
			{name: "夜雨纷扬", damage: 552449},
			{name: "向井蓝", damage: 493479},
			{name: "好好先生", damage: 457202},
			{name: "初心如故", damage: 246551},
			{name: "爱丽丝", damage: 280432},
			{name: "我群最菜", damage: 291466},
			{name: "咸鱼", damage: 517670},
			{name: "香浓朱古力", damage: 484729},
			{name: "Alpha", damage: 393512},
			{name: "金色之泪", damage: 489362},
			{name: "金色之泪", damage: 312827},
			{name: "金色之泪", damage: 200491},
			{name: "长星夜烁", damage: 417041},
		]
	},
	{
		day: 8,
		bossIdx: 23,
		log: [
			{name: "长星夜烁", damage: 117943},
			{name: "长星夜烁", damage: 444619},
			{name: "魂魄妖梦", damage: 336092},
			{name: "魂魄妖梦", damage: 396003},
			{name: "夜雨纷扬", damage: 597211},
			{name: "魂魄妖梦", damage: 258086},
			{name: "长星夜烁", damage: 221614},
			{name: "一起学猫叫", damage: 335800},
			{name: "宋寂", damage: 282167},
			{name: "香浓朱古力", damage: 356992},
			{name: "Alpha", damage: 566006},
			{name: "海豹", damage: 200388},
			{name: "爱莉杏菜", damage: 432559},
			{name: "爱莉杏菜", damage: 419546},
			{name: "爱莉杏菜", damage: 304482},
			{name: "黑椿", damage: 466087},
			{name: "上杉谦信", damage: 441157},
			{name: "上杉谦信", damage: 331273},
			{name: "香浓朱古力", damage: 253578},
			{name: "好好先生", damage: 586140},
			{name: "老公", damage: 222477},
			{name: "上杉谦信", damage: 233057},
			{name: "以摸多", damage: 297927},
			{name: "骡逃兵", damage: 298635},
			{name: "Ron洛神", damage: 232534},
		]
	}
];