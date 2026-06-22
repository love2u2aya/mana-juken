const REGIONS = ["北海道", "東北", "関東", "中部", "近畿", "中国・四国", "九州・沖縄"];

const FACULTY_CATEGORIES = [
  "法・政治",
  "経済・経営・商",
  "文・語学・人文",
  "社会・国際",
  "理・工",
  "情報",
  "農・生命",
  "医・薬・歯・看護",
  "教育",
  "芸術・デザイン"
];

// 難易度グループ（下限）の選択肢。値が小さいほど難関。
// groupRank が値以下の大学が表示される。
const DIFFICULTY_LEVELS = [
  { value: 99, label: "指定なし" },
  { value: 5,  label: "中堅以上（日東駒専・産近甲龍クラス〜）" },
  { value: 3,  label: "難関以上（MARCH・関関同立クラス〜）" },
  { value: 2,  label: "上位難関以上（上理ICU・難関国公立〜）" },
  { value: 1,  label: "最難関のみ（旧帝・早慶クラス）" }
];

// 各大学の属性
//  groupRank       : 難易度ランク（1=最難関 〜 6=その他）
//  group           : 難易度グループのラベル
//  mathOptional    : 数学を使わずに受験できる学部・方式がある
//  englishEmphasis : 英語重視・英語が得意な人に向いた学部・方式がある
const schools = [
  // ========== 国公立大学 ==========
  {
    id: 1, name: "東京大学", type: "国公立",
    prefecture: "東京都", region: "関東",
    hensachi: 75, groupRank: 1, group: "旧帝・難関国立",
    hasAO: false, hasRecommendation: false, mathOptional: false, englishEmphasis: false,
    categories: ["法・政治", "経済・経営・商", "文・語学・人文", "理・工", "農・生命", "医・薬・歯・看護", "教育"]
  },
  {
    id: 2, name: "京都大学", type: "国公立",
    prefecture: "京都府", region: "近畿",
    hensachi: 72, groupRank: 1, group: "旧帝・難関国立",
    hasAO: false, hasRecommendation: false, mathOptional: false, englishEmphasis: false,
    categories: ["法・政治", "経済・経営・商", "文・語学・人文", "理・工", "農・生命", "医・薬・歯・看護", "教育"]
  },
  {
    id: 3, name: "大阪大学", type: "国公立",
    prefecture: "大阪府", region: "近畿",
    hensachi: 68, groupRank: 1, group: "旧帝・難関国立",
    hasAO: true, hasRecommendation: true, mathOptional: false, englishEmphasis: true,
    categories: ["法・政治", "経済・経営・商", "文・語学・人文", "社会・国際", "理・工", "医・薬・歯・看護"]
  },
  {
    id: 4, name: "東北大学", type: "国公立",
    prefecture: "宮城県", region: "東北",
    hensachi: 65, groupRank: 1, group: "旧帝・難関国立",
    hasAO: true, hasRecommendation: true, mathOptional: false, englishEmphasis: false,
    categories: ["法・政治", "経済・経営・商", "文・語学・人文", "理・工", "農・生命", "医・薬・歯・看護", "教育"]
  },
  {
    id: 5, name: "名古屋大学", type: "国公立",
    prefecture: "愛知県", region: "中部",
    hensachi: 65, groupRank: 1, group: "旧帝・難関国立",
    hasAO: true, hasRecommendation: true, mathOptional: false, englishEmphasis: false,
    categories: ["法・政治", "経済・経営・商", "文・語学・人文", "理・工", "農・生命", "医・薬・歯・看護", "教育", "情報"]
  },
  {
    id: 6, name: "九州大学", type: "国公立",
    prefecture: "福岡県", region: "九州・沖縄",
    hensachi: 63, groupRank: 1, group: "旧帝・難関国立",
    hasAO: true, hasRecommendation: true, mathOptional: false, englishEmphasis: false,
    categories: ["法・政治", "経済・経営・商", "文・語学・人文", "理・工", "農・生命", "医・薬・歯・看護", "芸術・デザイン"]
  },
  {
    id: 7, name: "北海道大学", type: "国公立",
    prefecture: "北海道", region: "北海道",
    hensachi: 62, groupRank: 1, group: "旧帝・難関国立",
    hasAO: true, hasRecommendation: true, mathOptional: false, englishEmphasis: false,
    categories: ["法・政治", "経済・経営・商", "文・語学・人文", "理・工", "農・生命", "医・薬・歯・看護", "教育"]
  },
  {
    id: 8, name: "神戸大学", type: "国公立",
    prefecture: "兵庫県", region: "近畿",
    hensachi: 63, groupRank: 2, group: "難関国公立",
    hasAO: true, hasRecommendation: true, mathOptional: false, englishEmphasis: true,
    categories: ["法・政治", "経済・経営・商", "文・語学・人文", "理・工", "農・生命", "医・薬・歯・看護", "社会・国際"]
  },
  {
    id: 9, name: "一橋大学", type: "国公立",
    prefecture: "東京都", region: "関東",
    hensachi: 68, groupRank: 1, group: "旧帝・難関国立",
    hasAO: false, hasRecommendation: true, mathOptional: false, englishEmphasis: true,
    categories: ["法・政治", "経済・経営・商", "社会・国際"]
  },
  {
    id: 10, name: "東京工業大学", type: "国公立",
    prefecture: "東京都", region: "関東",
    hensachi: 68, groupRank: 1, group: "旧帝・難関国立",
    hasAO: false, hasRecommendation: true, mathOptional: false, englishEmphasis: false,
    categories: ["理・工", "情報"]
  },
  {
    id: 11, name: "筑波大学", type: "国公立",
    prefecture: "茨城県", region: "関東",
    hensachi: 60, groupRank: 2, group: "難関国公立",
    hasAO: true, hasRecommendation: true, mathOptional: false, englishEmphasis: true,
    categories: ["法・政治", "経済・経営・商", "社会・国際", "理・工", "農・生命", "医・薬・歯・看護", "教育", "芸術・デザイン"]
  },
  {
    id: 12, name: "横浜国立大学", type: "国公立",
    prefecture: "神奈川県", region: "関東",
    hensachi: 60, groupRank: 2, group: "難関国公立",
    hasAO: true, hasRecommendation: true, mathOptional: false, englishEmphasis: false,
    categories: ["経済・経営・商", "理・工", "教育"]
  },
  {
    id: 13, name: "千葉大学", type: "国公立",
    prefecture: "千葉県", region: "関東",
    hensachi: 60, groupRank: 2, group: "難関国公立",
    hasAO: true, hasRecommendation: true, mathOptional: false, englishEmphasis: false,
    categories: ["法・政治", "文・語学・人文", "理・工", "農・生命", "医・薬・歯・看護", "教育", "芸術・デザイン"]
  },
  {
    id: 14, name: "広島大学", type: "国公立",
    prefecture: "広島県", region: "中国・四国",
    hensachi: 58, groupRank: 3, group: "中堅国公立",
    hasAO: true, hasRecommendation: true, mathOptional: false, englishEmphasis: false,
    categories: ["法・政治", "経済・経営・商", "文・語学・人文", "理・工", "農・生命", "医・薬・歯・看護", "教育"]
  },
  {
    id: 15, name: "岡山大学", type: "国公立",
    prefecture: "岡山県", region: "中国・四国",
    hensachi: 57, groupRank: 3, group: "中堅国公立",
    hasAO: true, hasRecommendation: true, mathOptional: false, englishEmphasis: false,
    categories: ["法・政治", "経済・経営・商", "文・語学・人文", "理・工", "農・生命", "医・薬・歯・看護", "教育"]
  },
  {
    id: 16, name: "金沢大学", type: "国公立",
    prefecture: "石川県", region: "中部",
    hensachi: 58, groupRank: 3, group: "中堅国公立",
    hasAO: true, hasRecommendation: true, mathOptional: false, englishEmphasis: false,
    categories: ["法・政治", "経済・経営・商", "文・語学・人文", "理・工", "医・薬・歯・看護"]
  },
  {
    id: 17, name: "大阪公立大学", type: "国公立",
    prefecture: "大阪府", region: "近畿",
    hensachi: 58, groupRank: 2, group: "難関国公立",
    hasAO: true, hasRecommendation: true, mathOptional: false, englishEmphasis: false,
    categories: ["法・政治", "経済・経営・商", "文・語学・人文", "理・工", "農・生命", "医・薬・歯・看護", "社会・国際"]
  },
  {
    id: 18, name: "東京都立大学", type: "国公立",
    prefecture: "東京都", region: "関東",
    hensachi: 58, groupRank: 3, group: "中堅国公立",
    hasAO: true, hasRecommendation: true, mathOptional: false, englishEmphasis: true,
    categories: ["法・政治", "経済・経営・商", "文・語学・人文", "理・工", "社会・国際", "医・薬・歯・看護"]
  },

  // ========== 私立：早慶上智 ==========
  {
    id: 19, name: "慶應義塾大学", type: "私立",
    prefecture: "東京都", region: "関東",
    hensachi: 70, groupRank: 1, group: "早慶",
    hasAO: false, hasRecommendation: true, mathOptional: true, englishEmphasis: true,
    categories: ["法・政治", "経済・経営・商", "文・語学・人文", "理・工", "医・薬・歯・看護", "社会・国際"]
  },
  {
    id: 20, name: "早稲田大学", type: "私立",
    prefecture: "東京都", region: "関東",
    hensachi: 68, groupRank: 1, group: "早慶",
    hasAO: true, hasRecommendation: true, mathOptional: true, englishEmphasis: true,
    categories: ["法・政治", "経済・経営・商", "文・語学・人文", "理・工", "社会・国際", "教育"]
  },
  {
    id: 21, name: "上智大学", type: "私立",
    prefecture: "東京都", region: "関東",
    hensachi: 65, groupRank: 2, group: "上理ICU",
    hasAO: true, hasRecommendation: true, mathOptional: true, englishEmphasis: true,
    categories: ["法・政治", "経済・経営・商", "文・語学・人文", "理・工", "社会・国際", "医・薬・歯・看護"]
  },

  // ========== 私立：MARCH ==========
  {
    id: 22, name: "明治大学", type: "私立",
    prefecture: "東京都", region: "関東",
    hensachi: 63, groupRank: 3, group: "GMARCH",
    hasAO: true, hasRecommendation: true, mathOptional: true, englishEmphasis: false,
    categories: ["法・政治", "経済・経営・商", "文・語学・人文", "理・工", "農・生命", "情報", "社会・国際"]
  },
  {
    id: 23, name: "青山学院大学", type: "私立",
    prefecture: "東京都", region: "関東",
    hensachi: 63, groupRank: 3, group: "GMARCH",
    hasAO: true, hasRecommendation: true, mathOptional: true, englishEmphasis: true,
    categories: ["法・政治", "経済・経営・商", "文・語学・人文", "理・工", "社会・国際", "情報"]
  },
  {
    id: 24, name: "立教大学", type: "私立",
    prefecture: "東京都", region: "関東",
    hensachi: 63, groupRank: 3, group: "GMARCH",
    hasAO: true, hasRecommendation: true, mathOptional: true, englishEmphasis: true,
    categories: ["法・政治", "経済・経営・商", "文・語学・人文", "理・工", "社会・国際", "教育"]
  },
  {
    id: 25, name: "中央大学", type: "私立",
    prefecture: "東京都", region: "関東",
    hensachi: 62, groupRank: 3, group: "GMARCH",
    hasAO: true, hasRecommendation: true, mathOptional: true, englishEmphasis: false,
    categories: ["法・政治", "経済・経営・商", "文・語学・人文", "理・工", "情報", "社会・国際"]
  },
  {
    id: 26, name: "法政大学", type: "私立",
    prefecture: "東京都", region: "関東",
    hensachi: 60, groupRank: 3, group: "GMARCH",
    hasAO: true, hasRecommendation: true, mathOptional: true, englishEmphasis: false,
    categories: ["法・政治", "経済・経営・商", "文・語学・人文", "理・工", "社会・国際", "情報"]
  },

  // ========== 私立：関関同立 ==========
  {
    id: 27, name: "同志社大学", type: "私立",
    prefecture: "京都府", region: "近畿",
    hensachi: 62, groupRank: 3, group: "関関同立",
    hasAO: false, hasRecommendation: true, mathOptional: true, englishEmphasis: true,
    categories: ["法・政治", "経済・経営・商", "文・語学・人文", "理・工", "社会・国際", "情報", "芸術・デザイン"]
  },
  {
    id: 28, name: "立命館大学", type: "私立",
    prefecture: "京都府", region: "近畿",
    hensachi: 60, groupRank: 3, group: "関関同立",
    hasAO: true, hasRecommendation: true, mathOptional: true, englishEmphasis: true,
    categories: ["法・政治", "経済・経営・商", "文・語学・人文", "理・工", "社会・国際", "情報", "農・生命"]
  },
  {
    id: 29, name: "関西学院大学", type: "私立",
    prefecture: "兵庫県", region: "近畿",
    hensachi: 60, groupRank: 3, group: "関関同立",
    hasAO: true, hasRecommendation: true, mathOptional: true, englishEmphasis: true,
    categories: ["法・政治", "経済・経営・商", "文・語学・人文", "理・工", "社会・国際", "教育", "医・薬・歯・看護"]
  },
  {
    id: 30, name: "関西大学", type: "私立",
    prefecture: "大阪府", region: "近畿",
    hensachi: 57, groupRank: 3, group: "関関同立",
    hasAO: true, hasRecommendation: true, mathOptional: true, englishEmphasis: false,
    categories: ["法・政治", "経済・経営・商", "文・語学・人文", "理・工", "社会・国際", "情報"]
  },

  // ========== その他私立 ==========
  {
    id: 31, name: "国際基督教大学(ICU)", type: "私立",
    prefecture: "東京都", region: "関東",
    hensachi: 65, groupRank: 2, group: "上理ICU",
    hasAO: true, hasRecommendation: true, mathOptional: true, englishEmphasis: true,
    categories: ["社会・国際", "文・語学・人文"]
  },
  {
    id: 32, name: "学習院大学", type: "私立",
    prefecture: "東京都", region: "関東",
    hensachi: 60, groupRank: 4, group: "成成明学・中堅私大",
    hasAO: false, hasRecommendation: true, mathOptional: true, englishEmphasis: false,
    categories: ["法・政治", "経済・経営・商", "文・語学・人文", "理・工", "社会・国際"]
  },
  {
    id: 33, name: "東京理科大学", type: "私立",
    prefecture: "東京都", region: "関東",
    hensachi: 62, groupRank: 2, group: "上理ICU",
    hasAO: false, hasRecommendation: true, mathOptional: false, englishEmphasis: false,
    categories: ["理・工", "医・薬・歯・看護", "経済・経営・商", "情報"]
  },
  {
    id: 34, name: "近畿大学", type: "私立",
    prefecture: "大阪府", region: "近畿",
    hensachi: 53, groupRank: 5, group: "産近甲龍",
    hasAO: true, hasRecommendation: true, mathOptional: true, englishEmphasis: false,
    categories: ["法・政治", "経済・経営・商", "文・語学・人文", "理・工", "農・生命", "医・薬・歯・看護", "情報"]
  },
  {
    id: 35, name: "日本大学", type: "私立",
    prefecture: "東京都", region: "関東",
    hensachi: 50, groupRank: 5, group: "日東駒専",
    hasAO: true, hasRecommendation: true, mathOptional: true, englishEmphasis: false,
    categories: ["法・政治", "経済・経営・商", "文・語学・人文", "理・工", "農・生命", "医・薬・歯・看護", "芸術・デザイン"]
  },
  {
    id: 36, name: "東洋大学", type: "私立",
    prefecture: "東京都", region: "関東",
    hensachi: 55, groupRank: 5, group: "日東駒専",
    hasAO: true, hasRecommendation: true, mathOptional: true, englishEmphasis: false,
    categories: ["法・政治", "経済・経営・商", "文・語学・人文", "理・工", "社会・国際", "情報"]
  },
  {
    id: 37, name: "専修大学", type: "私立",
    prefecture: "東京都", region: "関東",
    hensachi: 52, groupRank: 5, group: "日東駒専",
    hasAO: true, hasRecommendation: true, mathOptional: true, englishEmphasis: false,
    categories: ["法・政治", "経済・経営・商", "文・語学・人文", "社会・国際", "情報"]
  },
  {
    id: 38, name: "芝浦工業大学", type: "私立",
    prefecture: "東京都", region: "関東",
    hensachi: 55, groupRank: 4, group: "中堅私大",
    hasAO: true, hasRecommendation: true, mathOptional: false, englishEmphasis: false,
    categories: ["理・工", "情報", "芸術・デザイン"]
  },
  {
    id: 39, name: "東京農業大学", type: "私立",
    prefecture: "東京都", region: "関東",
    hensachi: 50, groupRank: 5, group: "中堅私大",
    hasAO: true, hasRecommendation: true, mathOptional: true, englishEmphasis: false,
    categories: ["農・生命"]
  },
  {
    id: 40, name: "成蹊大学", type: "私立",
    prefecture: "東京都", region: "関東",
    hensachi: 57, groupRank: 4, group: "成成明学・中堅私大",
    hasAO: false, hasRecommendation: true, mathOptional: true, englishEmphasis: false,
    categories: ["法・政治", "経済・経営・商", "文・語学・人文", "理・工", "情報"]
  },
  {
    id: 41, name: "津田塾大学", type: "私立",
    prefecture: "東京都", region: "関東",
    hensachi: 58, groupRank: 4, group: "中堅私大",
    hasAO: true, hasRecommendation: true, mathOptional: true, englishEmphasis: true,
    categories: ["文・語学・人文", "社会・国際", "情報"]
  },
  {
    id: 42, name: "南山大学", type: "私立",
    prefecture: "愛知県", region: "中部",
    hensachi: 55, groupRank: 4, group: "中堅私大",
    hasAO: true, hasRecommendation: true, mathOptional: true, englishEmphasis: true,
    categories: ["法・政治", "経済・経営・商", "文・語学・人文", "理・工", "社会・国際"]
  },
  {
    id: 43, name: "愛知大学", type: "私立",
    prefecture: "愛知県", region: "中部",
    hensachi: 50, groupRank: 5, group: "中堅私大",
    hasAO: true, hasRecommendation: true, mathOptional: true, englishEmphasis: false,
    categories: ["法・政治", "経済・経営・商", "文・語学・人文", "社会・国際", "情報"]
  },
  {
    id: 44, name: "龍谷大学", type: "私立",
    prefecture: "京都府", region: "近畿",
    hensachi: 52, groupRank: 5, group: "産近甲龍",
    hasAO: true, hasRecommendation: true, mathOptional: true, englishEmphasis: false,
    categories: ["法・政治", "経済・経営・商", "文・語学・人文", "理・工", "社会・国際", "農・生命"]
  },
  {
    id: 45, name: "甲南大学", type: "私立",
    prefecture: "兵庫県", region: "近畿",
    hensachi: 50, groupRank: 5, group: "産近甲龍",
    hasAO: true, hasRecommendation: true, mathOptional: true, englishEmphasis: false,
    categories: ["法・政治", "経済・経営・商", "文・語学・人文", "理・工", "情報"]
  },
  {
    id: 46, name: "西南学院大学", type: "私立",
    prefecture: "福岡県", region: "九州・沖縄",
    hensachi: 52, groupRank: 5, group: "中堅私大",
    hasAO: true, hasRecommendation: true, mathOptional: true, englishEmphasis: true,
    categories: ["法・政治", "経済・経営・商", "文・語学・人文", "社会・国際"]
  },
  {
    id: 47, name: "福岡大学", type: "私立",
    prefecture: "福岡県", region: "九州・沖縄",
    hensachi: 48, groupRank: 6, group: "その他",
    hasAO: true, hasRecommendation: true, mathOptional: true, englishEmphasis: false,
    categories: ["法・政治", "経済・経営・商", "文・語学・人文", "理・工", "医・薬・歯・看護"]
  },
  {
    id: 48, name: "東北学院大学", type: "私立",
    prefecture: "宮城県", region: "東北",
    hensachi: 47, groupRank: 6, group: "その他",
    hasAO: true, hasRecommendation: true, mathOptional: true, englishEmphasis: false,
    categories: ["法・政治", "経済・経営・商", "文・語学・人文", "理・工", "情報"]
  },
  {
    id: 49, name: "北海学園大学", type: "私立",
    prefecture: "北海道", region: "北海道",
    hensachi: 47, groupRank: 6, group: "その他",
    hasAO: true, hasRecommendation: true, mathOptional: true, englishEmphasis: false,
    categories: ["法・政治", "経済・経営・商", "文・語学・人文", "理・工"]
  },
  {
    id: 50, name: "武蔵大学", type: "私立",
    prefecture: "東京都", region: "関東",
    hensachi: 55, groupRank: 4, group: "成成明学・中堅私大",
    hasAO: true, hasRecommendation: true, mathOptional: true, englishEmphasis: true,
    categories: ["経済・経営・商", "文・語学・人文", "社会・国際"]
  }
];
