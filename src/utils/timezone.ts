// https://jp.cybozu.help/general/en/admin/list_systemadmin/list_localization/timezone.html
import {Locale} from "./locale.ts";

export const timezones = [
  {id: "Etc/GMT+12", utc:"UTC-12:00", en: "International Date Line West", ja: "国際日付変更線 西側", zh: "国际日期变更线西", zhTW: "國際換日線西側"},
  {id: "Etc/GMT+11", utc:"UTC-11:00", en: "Coordinated Universal Time-11", ja: "協定世界時-11", zh: "协调世界时-11", zhTW: "世界協調時間-11"},
  {id: "Pacific/Honolulu", utc:"UTC-10:00", en: "Hawaii", ja: "ハワイ", zh: "夏威夷", zhTW: "夏威夷"},
  {id: "America/Anchorage", utc:"UTC-09:00", en: "Alaska", ja: "アラスカ", zh: "安克雷奇", zhTW: "阿拉斯加"},
  {id: "America/Santa_Isabel", utc:"UTC-08:00", en: "Baja California", ja: "バハカリフォルニア", zh: "下加利福尼亚州", zhTW: "下加利福尼亞"},
  {id: "America/Los_Angeles", utc:"UTC-08:00", en: "Pacific Time (US and Canada)", ja: "太平洋標準時(米国およびカナダ)", zh: "太平洋时间（美国和加拿大）", zhTW: "太平洋標準時間(美國及加拿大)"},
  {id: "America/Chihuahua", utc:"UTC-07:00", en: "Chihuahua, La Paz, Mazatlan", ja: "チワワ、ラパス、マサトラン", zh: "奇瓦瓦,拉巴斯,马萨特兰", zhTW: "契瓦瓦、拉巴斯、馬薩特蘭"},
  {id: "America/Phoenix", utc:"UTC-07:00", en: "Arizona", ja: "アリゾナ", zh: "亚利桑那", zhTW: "亞利桑那州"},
  {id: "America/Denver", utc:"UTC-07:00", en: "Mountain Time (US and Canada)", ja: "山地標準時(米国およびカナダ)", zh: "山地时间（美国和加拿大）", zhTW: "山地標準時間(美國及加拿大)"},
  {id: "America/Guatemala", utc:"UTC-06:00", en: "Central America", ja: "中央アメリカ", zh: "中美洲", zhTW: "中美洲"},
  {id: "America/Chicago", utc:"UTC-06:00", en: "Central Time (US and Canada)", ja: "中部標準時(米国およびカナダ)", zh: "中部时间（美国和加拿大）", zhTW: "中部標準時間(美國及加拿大)"},
  {id: "America/Regina", utc:"UTC-06:00", en: "Saskatchewan", ja: "サスカチュワン", zh: "萨斯喀彻温", zhTW: "薩克其萬"},
  {id: "America/Mexico_City", utc:"UTC-06:00", en: "Guadalajara, Mexico City, Monterey", ja: "グアダラハラ、メキシコシティ、モンテレー", zh: "瓜达拉哈拉,墨西哥城,蒙特雷", zhTW: "瓜達拉哈拉、墨西哥城、蒙特雷"},
  {id: "America/Bogota", utc:"UTC-05:00", en: "Bogota, Lima, Quito", ja: "ボゴタ、リマ、キト", zh: "波哥大,利马,基多", zhTW: "波哥大、利馬、基多"},
  {id: "America/Indiana/Indianapolis", utc:"UTC-05:00", en: "Indiana (East)", ja: "インディアナ東部", zh: "印地安那州（东部）", zhTW: "印第安納東部"},
  {id: "America/New_York", utc:"UTC-05:00", en: "Eastern Time (US and Canada)", ja: "東部標準時(米国およびカナダ)", zh: "东部时间（美国和加拿大）", zhTW: "東部標準時間(美國及加拿大)"},
  {id: "America/Caracas", utc:"UTC-04:30", en: "Caracas", ja: "カラカス", zh: "加拉加斯", zhTW: "卡拉卡斯"},
  {id: "America/Halifax", utc:"UTC-04:00", en: "Atlantic Time (Canada)", ja: "大西洋標準時(カナダ)", zh: "大西洋时间（加拿大）", zhTW: "大西洋標準時間(加拿大)"},
  {id: "America/Asuncion", utc:"UTC-04:00", en: "Asuncion", ja: "アスンシオン", zh: "亚松森", zhTW: "亞松森"},
  {id: "America/La_Paz", utc:"UTC-04:00", en: "Georgetown, La Paz, Manaus, San Juan", ja: "ジョージタウン、ラパス、マナウス、サンフアン", zh: "乔治敦,拉巴斯,马瑙斯,圣胡安", zhTW: "喬治敦、拉巴斯、瑪瑙斯、聖胡安"},
  {id: "America/Cuiaba", utc:"UTC-04:00", en: "Cuiaba", ja: "クイアバ", zh: "库亚巴", zhTW: "庫亞巴"},
  {id: "America/Santiago", utc:"UTC-04:00", en: "Santiago", ja: "サンチアゴ", zh: "圣地亚哥", zhTW: "聖地牙哥"},
  {id: "America/St_Johns", utc:"UTC-03:30", en: "Newfoundland", ja: "ニューファンドランド", zh: "纽芬兰", zhTW: "紐芬蘭"},
  {id: "America/Sao_Paulo", utc:"UTC-03:00", en: "Brasilia", ja: "ブラジリア", zh: "巴西利亚", zhTW: "巴西利亞"},
  {id: "America/Godthab", utc:"UTC-03:00", en: "Greenland", ja: "グリーンランド", zh: "格陵兰", zhTW: "格陵蘭"},
  {id: "America/Cayenne", utc:"UTC-03:00", en: "Cayenne, Fortaleza", ja: "カイエンヌ、フォルタレザ", zh: "卡宴,福塔雷萨", zhTW: "開雲、福塔萊薩"},
  {id: "America/Argentina/Buenos_Aires", utc:"UTC-03:00", en: "Buenos Aires", ja: "ブエノスアイレス", zh: "布宜诺斯艾利斯", zhTW: "布宜諾斯艾利斯"},
  {id: "America/Montevideo", utc:"UTC-03:00", en: "Montevideo", ja: "モンテビデオ", zh: "蒙得维的亚", zhTW: "蒙特維多"},
  {id: "Etc/GMT+2", utc:"UTC-02:00", en: "Coordinated Universal Time-2", ja: "協定世界時-2", zh: "协调世界时-2", zhTW: "世界協調時間-2"},
  {id: "Atlantic/Cape_Verde", utc:"UTC-01:00", en: "Cape Verde", ja: "カーボベルデ諸島", zh: "佛得角群岛", zhTW: "維德角"},
  {id: "Atlantic/Azores", utc:"UTC-01:00", en: "Azores", ja: "アゾレス", zh: "亚速尔群岛", zhTW: "亞速"},
  {id: "Africa/Casablanca", utc:"UTC+00:00", en: "Casablanca", ja: "カサブランカ", zh: "卡萨布兰卡", zhTW: "卡薩布蘭卡"},
  {id: "Atlantic/Reykjavik", utc:"UTC+00:00", en: "Monrovia, Reykjavik", ja: "モンロビア、レイキャビク", zh: "蒙罗维亚,雷克雅未克", zhTW: "蒙羅維亞、雷克雅維克"},
  {id: "Europe/London", utc:"UTC+00:00", en: "Dublin, Edinburgh, Lisbon, London", ja: "ダブリン、エジンバラ、リスボン、ロンドン", zh: "都柏林,爱丁堡,里斯本,伦敦", zhTW: "都柏林、愛丁堡、里斯本、倫敦"},
  {id: "Etc/GMT", utc:"UTC+00:00", en: "Coordinated Universal Time", ja: "協定世界時", zh: "协调世界时", zhTW: "世界協調時間"},
  {id: "Europe/Berlin", utc:"UTC+01:00", en: "Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna", ja: "アムステルダム、ベルリン、ベルン、ローマ、ストックホルム、ウィーン", zh: "阿姆斯特丹,柏林,伯尔尼,罗马,斯德哥尔摩,维也纳", zhTW: "阿姆斯特丹、柏林、伯恩、羅馬、斯德哥爾摩、維也納"},
  {id: "Europe/Paris", utc:"UTC+01:00", en: "Brussels, Copenhagen, Madrid, Paris", ja: "ブリュッセル、コペンハーゲン、マドリード、パリ", zh: "布鲁塞尔,哥本哈根,马德里,巴黎", zhTW: "布魯塞爾、哥本哈根、馬德里、巴黎"},
  {id: "Africa/Lagos", utc:"UTC+01:00", en: "West Central Africa", ja: "西中央アフリカ", zh: "中非西部", zhTW: "西中非"},
  {id: "Europe/Budapest", utc:"UTC+01:00", en: "Belgrade, Bratislava, Budapest, Ljubljana, Prague", ja: "ベオグラード、ブラチスラバ、ブダペスト、リュブリャナ、プラハ", zh: "贝尔格莱德,布拉迪斯拉发,布达佩斯,卢布尔雅那,布拉格", zhTW: "貝爾格勒、布拉提斯拉瓦、布達佩斯、盧比安納、布拉格"},
  {id: "Europe/Warsaw", utc:"UTC+01:00", en: "Sarajevo, Skopje, Warsaw, Zagreb", ja: "サラエボ、スコピエ、ワルシャワ、ザグレブ", zh: "萨拉热窝,斯科普里,华沙,萨格勒布", zhTW: "塞拉耶佛、史高比耶、華沙、札格雷布"},
  {id: "Africa/Windhoek", utc:"UTC+01:00", en: "Windhoek", ja: "ウィントフック", zh: "温得和克", zhTW: "溫荷克"},
  {id: "Europe/Istanbul", utc:"UTC+02:00", en: "Athens, Bucharest, Istanbul", ja: "アテネ、ブカレスト、イスタンブール", zh: "雅典,布加勒斯特,伊斯坦布尔", zhTW: "雅典、布加勒斯特、伊斯坦堡"},
  {id: "Europe/Kiev", utc:"UTC+02:00", en: "Helsinki, Kyiv, Riga, Sofia, Tallinn, Vilnius", ja: "ヘルシンキ、キーウ、リガ、ソフィア、タリン、ビリニュス", zh: "赫尔辛基,基辅,里加,索非亚,塔林,维尔纽斯", zhTW: "赫爾辛基、基輔、里加、索菲亞、塔林、維爾紐斯"},
  {id: "Africa/Cairo", utc:"UTC+02:00", en: "Cairo", ja: "カイロ", zh: "开罗", zhTW: "開羅"},
  {id: "Asia/Damascus", utc:"UTC+02:00", en: "Damascus", ja: "ダマスカス", zh: "大马士革", zhTW: "大馬士革"},
  {id: "Asia/Amman", utc:"UTC+02:00", en: "Amman", ja: "アンマン", zh: "安曼", zhTW: "安曼"},
  {id: "Africa/Johannesburg", utc:"UTC+02:00", en: "Harare, Pretoria", ja: "ハラーレ、プレトリア", zh: "哈拉雷,比勒陀利亚", zhTW: "哈拉雷、普利托利亞"},
  {id: "Asia/Jerusalem", utc:"UTC+02:00", en: "Jerusalem", ja: "エルサレム", zh: "耶路撒冷", zhTW: "耶路撒冷"},
  {id: "Asia/Beirut", utc:"UTC+02:00", en: "Beirut", ja: "ベイルート", zh: "贝鲁特", zhTW: "貝魯特"},
  {id: "Asia/Baghdad", utc:"UTC+03:00", en: "Baghdad", ja: "バグダッド", zh: "巴格达", zhTW: "巴格達"},
  {id: "Europe/Minsk", utc:"UTC+03:00", en: "Minsk", ja: "ミンスク", zh: "明斯克", zhTW: "明斯克"},
  {id: "Asia/Riyadh", utc:"UTC+03:00", en: "Kuwait, Riyadh", ja: "クエート、リヤド", zh: "利雅得", zhTW: "科威特、利雅德"},
  {id: "Africa/Nairobi", utc:"UTC+03:00", en: "Nairobi", ja: "ナイロビ", zh: "内罗毕", zhTW: "奈洛比"},
  {id: "Asia/Tehran", utc:"UTC+03:30", en: "Tehran", ja: "テヘラン", zh: "德黑兰", zhTW: "德黑蘭"},
  {id: "Europe/Moscow", utc:"UTC+04:00", en: "Moscow, St. Petersburg, Volgograd", ja: "モスクワ、サンクトペテルブルグ、ボルゴグラード", zh: "莫斯科,圣彼得堡,伏尔加格勒", zhTW: "莫斯科、聖彼得堡、伏爾加格勒"},
  {id: "Asia/Tbilisi", utc:"UTC+04:00", en: "Tbilisi", ja: "トビリシ", zh: "第比利斯", zhTW: "提比里斯"},
  {id: "Asia/Yerevan", utc:"UTC+04:00", en: "Yerevan", ja: "エレバン", zh: "埃里温", zhTW: "葉里溫"},
  {id: "Asia/Dubai", utc:"UTC+04:00", en: "Abu Dhabi, Muscat", ja: "アブダビ、マスカット", zh: "阿布扎比,马斯喀特", zhTW: "阿布達比、馬斯喀特"},
  {id: "Asia/Baku", utc:"UTC+04:00", en: "Baku", ja: "バクー", zh: "巴库", zhTW: "巴庫"},
  {id: "Indian/Mauritius", utc:"UTC+04:00", en: "Port Louis", ja: "ポートルイス", zh: "路易港", zhTW: "路易港"},
  {id: "Asia/Kabul", utc:"UTC+04:30", en: "Kabul", ja: "カブール", zh: "喀布尔", zhTW: "喀布爾"},
  {id: "Asia/Tashkent", utc:"UTC+05:00", en: "Tashkent", ja: "タシケント", zh: "塔什干", zhTW: "塔什干"},
  {id: "Asia/Karachi", utc:"UTC+05:00", en: "Islamabad, Karachi", ja: "イスラマバード、カラチ", zh: "伊斯兰堡,卡拉奇", zhTW: "伊斯蘭馬巴德、喀拉蚩"},
  {id: "Asia/Colombo", utc:"UTC+05:30", en: "Sri Jayewardenepura Kotte", ja: "スリジャヤワルダナプラコッテ", zh: "斯里加亚渥登普拉", zhTW: "斯里賈亞瓦德納普拉科特"},
  {id: "Asia/Kolkata", utc:"UTC+05:30", en: "Chennai, Kolkata, Mumbai, New Delhi", ja: "チェンナイ、コルカタ、ムンバイ、ニューデリー", zh: "钦奈,加尔各答,孟买,新德里", zhTW: "清奈、加爾各答、孟買、新德里"},
  {id: "Asia/Kathmandu", utc:"UTC+05:45", en: "Kathmandu", ja: "カトマンズ", zh: "加德满都", zhTW: "加德滿都"},
  {id: "Asia/Almaty", utc:"UTC+06:00", en: "Astana", ja: "アスタナ", zh: "阿斯塔纳", zhTW: "努爾-蘇丹"},
  {id: "Asia/Dhaka", utc:"UTC+06:00", en: "Dhaka", ja: "ダッカ", zh: "达卡", zhTW: "達卡"},
  {id: "Asia/Yekaterinburg", utc:"UTC+06:00", en: "Yekaterinburg", ja: "エカテリンブルグ", zh: "叶卡捷琳堡", zhTW: "葉卡捷琳堡"},
  {id: "Asia/Yangon", utc:"UTC+06:30", en: "Yangon", ja: "ヤンゴン", zh: "仰光", zhTW: "仰光"},
  {id: "Asia/Bangkok", utc:"UTC+07:00", en: "Bangkok, Hanoi, Jakarta", ja: "バンコク、ハノイ、ジャカルタ", zh: "曼谷,河内,雅加达", zhTW: "曼谷、河內、雅加達"},
  {id: "Asia/Novosibirsk", utc:"UTC+07:00", en: "Novosibirsk", ja: "ノヴォシビルスク", zh: "新西伯利亚", zhTW: "新西伯利亞"},
  {id: "Asia/Krasnoyarsk", utc:"UTC+08:00", en: "Krasnoyarsk", ja: "クラスノヤルスク", zh: "克拉斯诺亚尔斯克", zhTW: "克拉斯諾亞爾斯克"},
  {id: "Asia/Ulaanbaatar", utc:"UTC+08:00", en: "Ulaanbaatar", ja: "ウランバートル", zh: "乌兰巴托", zhTW: "烏蘭巴托"},
  {id: "Asia/Shanghai", utc:"UTC+08:00", en: "Beijing, Chongqing, Hong Kong, Urumqi", ja: "北京、重慶、香港、ウルムチ", zh: "北京,重庆,香港,乌鲁木齐", zhTW: "北京、重慶、香港、烏魯木齊"},
  {id: "Australia/Perth", utc:"UTC+08:00", en: "Perth", ja: "パース", zh: "佩思", zhTW: "伯斯"},
  {id: "Asia/Singapore", utc:"UTC+08:00", en: "Kuala Lumpur, Singapore", ja: "クアラルンプール、シンガポール", zh: "吉隆坡,新加坡", zhTW: "吉隆坡、新加坡"},
  {id: "Asia/Taipei", utc:"UTC+08:00", en: "Taipei", ja: "台北", zh: "台北", zhTW: "台北"},
  {id: "Asia/Irkutsk", utc:"UTC+09:00", en: "Irkutsk", ja: "イルクーツク", zh: "伊尔库茨克", zhTW: "伊爾庫茨克"},
  {id: "Asia/Seoul", utc:"UTC+09:00", en: "Seoul", ja: "ソウル", zh: "首尔", zhTW: "首爾"},
  {id: "Asia/Tokyo", utc:"UTC+09:00", en: "Osaka, Sapporo, Tokyo", ja: "大阪、札幌、東京", zh: "大阪,札幌,东京", zhTW: "大阪、札幌、東京"},
  {id: "Australia/Darwin", utc:"UTC+09:30", en: "Darwin", ja: "ダーウィン", zh: "达尔文", zhTW: "達爾文"},
  {id: "Australia/Adelaide", utc:"UTC+09:30", en: "Adelaide", ja: "アデレード", zh: "阿德莱德", zhTW: "阿得雷德"},
  {id: "Australia/Hobart", utc:"UTC+10:00", en: "Hobart", ja: "ホバート", zh: "霍巴特", zhTW: "荷巴特"},
  {id: "Asia/Yakutsk", utc:"UTC+10:00", en: "Yakutsk", ja: "ヤクーツク", zh: "雅库茨克", zhTW: "雅庫次克"},
  {id: "Australia/Brisbane", utc:"UTC+10:00", en: "Brisbane", ja: "ブリスベン", zh: "布里斯班", zhTW: "布里斯本"},
  {id: "Pacific/Port_Moresby", utc:"UTC+10:00", en: "Guam, Port Moresby", ja: "グアム、ポートモレスビー", zh: "关岛,莫尔兹比港", zhTW: "關島、摩斯比港"},
  {id: "Australia/Sydney", utc:"UTC+10:00", en: "Canberra, Melbourne, Sydney", ja: "キャンベラ、メルボルン、シドニー", zh: "堪培拉,墨尔本,悉尼", zhTW: "坎培拉、墨爾本、雪梨"},
  {id: "Asia/Vladivostok", utc:"UTC+11:00", en: "Vladivostok", ja: "ウラジオストク", zh: "符拉迪沃斯托克", zhTW: "海參崴"},
  {id: "Pacific/Guadalcanal", utc:"UTC+11:00", en: "Solomon Islands, New Caledonia", ja: "ソロモン諸島、ニューカレドニア", zh: "所罗门群岛,新喀里多尼亚", zhTW: "索羅門群島、新喀里多尼亞"},
  {id: "Etc/GMT-12", utc:"UTC+12:00", en: "Coordinated Universal Time+12", ja: "協定世界時+12", zh: "协调世界时+12", zhTW: "世界協調時間+12"},
  {id: "Pacific/Fiji", utc:"UTC+12:00", en: "Fiji, Marshall Islands", ja: "フィジー、マーシャル諸島", zh: "斐济,马绍尔群岛", zhTW: "斐濟、馬紹爾群島"},
  {id: "Asia/Magadan", utc:"UTC+12:00", en: "Magadan", ja: "マガダン", zh: "马加丹", zhTW: "馬加丹"},
  {id: "Pacific/Auckland", utc:"UTC+12:00", en: "Auckland, Wellington", ja: "オークランド、ウェリントン", zh: "奥克兰,惠灵顿", zhTW: "奧克蘭、威靈頓"},
  {id: "Pacific/Tongatapu", utc:"UTC+13:00", en: "Nuku'alofa", ja: "ヌクアロファ", zh: "努库阿洛法", zhTW: "努瓜婁發"},
  {id: "Pacific/Apia", utc:"UTC+13:00", en: "Samoa", ja: "サモア", zh: "萨摩亚群岛", zhTW: "薩摩亞"},
] as const satisfies {id: string, utc: string, en: string, ja: string, zh: string, zhTW: string}[]

export const localeToTimezoneLabelId= (locale: Locale): keyof typeof timezones[number] => {
  switch (locale) {
    case "auto":
      return "en"
    case "en":
      return "en"
    case "ja":
      return "ja"
    case "zh":
      return 'zh'
    case "zh-TW":
      return 'zhTW'
    case "es":
      return 'en'

  }
}

export type Timezone = typeof timezones[number]['id'];
