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

const DIFFICULTY_LEVELS = [
  { value: 99, label: "指定なし" },
  { value: 5,  label: "中堅以上（日東駒専・産近甲龍クラス〜）" },
  { value: 3,  label: "難関以上（MARCH・関関同立クラス〜）" },
  { value: 2,  label: "上位難関以上（上理ICU・難関国公立〜）" },
  { value: 1,  label: "最難関のみ（旧帝・早慶クラス）" }
];

// hasAO at faculty level: true=総合型選抜あり、false=なし、省略=school.hasAO継承
const schools = [
  // ========== 国公立大学 ==========
  {
    id: 1, name: "東京大学", type: "国公立",
    prefecture: "東京都", region: "関東",
    groupRank: 1, group: "旧帝・難関国立",
    hasAO: false, hasRecommendation: false, mathOptional: false, englishEmphasis: false,
    faculties: [
      { name: "法学部",   category: "法・政治",       hensachi: 73 },
      { name: "経済学部", category: "経済・経営・商", hensachi: 72 },
      { name: "文学部",   category: "文・語学・人文", hensachi: 72 },
      { name: "理学部",   category: "理・工",         hensachi: 73 },
      { name: "工学部",   category: "理・工",         hensachi: 72 },
      { name: "農学部",   category: "農・生命",       hensachi: 68 },
      { name: "医学部",   category: "医・薬・歯・看護", hensachi: 77 },
      { name: "教育学部", category: "教育",           hensachi: 70 }
    ]
  },
  {
    id: 2, name: "京都大学", type: "国公立",
    prefecture: "京都府", region: "近畿",
    groupRank: 1, group: "旧帝・難関国立",
    hasAO: false, hasRecommendation: false, mathOptional: false, englishEmphasis: false,
    faculties: [
      { name: "法学部",   category: "法・政治",       hensachi: 72 },
      { name: "経済学部", category: "経済・経営・商", hensachi: 70 },
      { name: "文学部",   category: "文・語学・人文", hensachi: 70 },
      { name: "理学部",   category: "理・工",         hensachi: 71 },
      { name: "工学部",   category: "理・工",         hensachi: 69 },
      { name: "農学部",   category: "農・生命",       hensachi: 66 },
      { name: "医学部",   category: "医・薬・歯・看護", hensachi: 74 },
      { name: "教育学部", category: "教育",           hensachi: 68 }
    ]
  },
  {
    id: 3, name: "大阪大学", type: "国公立",
    prefecture: "大阪府", region: "近畿",
    groupRank: 1, group: "旧帝・難関国立",
    hasAO: true, hasRecommendation: true, mathOptional: false, englishEmphasis: true,
    faculties: [
      { name: "法学部",     category: "法・政治",       hensachi: 66 },
      { name: "経済学部",   category: "経済・経営・商", hensachi: 65 },
      { name: "文学部",     category: "文・語学・人文", hensachi: 65 },
      { name: "外国語学部", category: "社会・国際",     hensachi: 64 },
      { name: "理学部",     category: "理・工",         hensachi: 66 },
      { name: "工学部",     category: "理・工",         hensachi: 64 },
      { name: "農学部",     category: "農・生命",       hensachi: 62 },
      { name: "医学部",     category: "医・薬・歯・看護", hensachi: 70 }
    ]
  },
  {
    id: 4, name: "東北大学", type: "国公立",
    prefecture: "宮城県", region: "東北",
    groupRank: 1, group: "旧帝・難関国立",
    hasAO: true, hasRecommendation: true, mathOptional: false, englishEmphasis: false,
    faculties: [
      { name: "法学部",   category: "法・政治",       hensachi: 63 },
      { name: "経済学部", category: "経済・経営・商", hensachi: 62 },
      { name: "文学部",   category: "文・語学・人文", hensachi: 62 },
      { name: "理学部",   category: "理・工",         hensachi: 65 },
      { name: "工学部",   category: "理・工",         hensachi: 63 },
      { name: "農学部",   category: "農・生命",       hensachi: 60 },
      { name: "医学部",   category: "医・薬・歯・看護", hensachi: 69 },
      { name: "教育学部", category: "教育",           hensachi: 59 }
    ]
  },
  {
    id: 5, name: "名古屋大学", type: "国公立",
    prefecture: "愛知県", region: "中部",
    groupRank: 1, group: "旧帝・難関国立",
    hasAO: true, hasRecommendation: true, mathOptional: false, englishEmphasis: false,
    faculties: [
      { name: "法学部",   category: "法・政治",       hensachi: 62 },
      { name: "経済学部", category: "経済・経営・商", hensachi: 62 },
      { name: "文学部",   category: "文・語学・人文", hensachi: 62 },
      { name: "理学部",   category: "理・工",         hensachi: 64 },
      { name: "工学部",   category: "理・工",         hensachi: 63 },
      { name: "農学部",   category: "農・生命",       hensachi: 59 },
      { name: "医学部",   category: "医・薬・歯・看護", hensachi: 68 },
      { name: "教育学部", category: "教育",           hensachi: 58 },
      { name: "情報学部", category: "情報",           hensachi: 64 }
    ]
  },
  {
    id: 6, name: "九州大学", type: "国公立",
    prefecture: "福岡県", region: "九州・沖縄",
    groupRank: 1, group: "旧帝・難関国立",
    hasAO: true, hasRecommendation: true, mathOptional: false, englishEmphasis: false,
    faculties: [
      { name: "法学部",     category: "法・政治",       hensachi: 61 },
      { name: "経済学部",   category: "経済・経営・商", hensachi: 60 },
      { name: "文学部",     category: "文・語学・人文", hensachi: 60 },
      { name: "理学部",     category: "理・工",         hensachi: 62 },
      { name: "工学部",     category: "理・工",         hensachi: 61 },
      { name: "農学部",     category: "農・生命",       hensachi: 58 },
      { name: "医学部",     category: "医・薬・歯・看護", hensachi: 67 },
      { name: "芸術工学部", category: "芸術・デザイン", hensachi: 58 }
    ]
  },
  {
    id: 7, name: "北海道大学", type: "国公立",
    prefecture: "北海道", region: "北海道",
    groupRank: 1, group: "旧帝・難関国立",
    hasAO: true, hasRecommendation: true, mathOptional: false, englishEmphasis: false,
    faculties: [
      { name: "法学部",   category: "法・政治",       hensachi: 60 },
      { name: "経済学部", category: "経済・経営・商", hensachi: 59 },
      { name: "文学部",   category: "文・語学・人文", hensachi: 59 },
      { name: "理学部",   category: "理・工",         hensachi: 61 },
      { name: "工学部",   category: "理・工",         hensachi: 60 },
      { name: "農学部",   category: "農・生命",       hensachi: 58 },
      { name: "医学部",   category: "医・薬・歯・看護", hensachi: 66 },
      { name: "教育学部", category: "教育",           hensachi: 57 }
    ]
  },
  {
    id: 8, name: "神戸大学", type: "国公立",
    prefecture: "兵庫県", region: "近畿",
    groupRank: 2, group: "難関国公立",
    hasAO: true, hasRecommendation: true, mathOptional: false, englishEmphasis: true,
    faculties: [
      { name: "法学部",         category: "法・政治",       hensachi: 63 },
      { name: "経済学部",       category: "経済・経営・商", hensachi: 63 },
      { name: "文学部",         category: "文・語学・人文", hensachi: 61 },
      { name: "国際人間科学部", category: "社会・国際",     hensachi: 62 },
      { name: "理学部",         category: "理・工",         hensachi: 62 },
      { name: "工学部",         category: "理・工",         hensachi: 60 },
      { name: "農学部",         category: "農・生命",       hensachi: 58 },
      { name: "医学部",         category: "医・薬・歯・看護", hensachi: 67 }
    ]
  },
  {
    id: 9, name: "一橋大学", type: "国公立",
    prefecture: "東京都", region: "関東",
    groupRank: 1, group: "旧帝・難関国立",
    hasAO: false, hasRecommendation: true, mathOptional: false, englishEmphasis: true,
    faculties: [
      { name: "法学部",   category: "法・政治",       hensachi: 68 },
      { name: "経済学部", category: "経済・経営・商", hensachi: 68 },
      { name: "社会学部", category: "社会・国際",     hensachi: 67 },
      { name: "商学部",   category: "経済・経営・商", hensachi: 67 }
    ]
  },
  {
    id: 10, name: "東京工業大学", type: "国公立",
    prefecture: "東京都", region: "関東",
    groupRank: 1, group: "旧帝・難関国立",
    hasAO: false, hasRecommendation: true, mathOptional: false, englishEmphasis: false,
    faculties: [
      { name: "理学院",       category: "理・工", hensachi: 68 },
      { name: "工学院",       category: "理・工", hensachi: 67 },
      { name: "情報理工学院", category: "情報",   hensachi: 68 }
    ]
  },
  {
    id: 11, name: "筑波大学", type: "国公立",
    prefecture: "茨城県", region: "関東",
    groupRank: 2, group: "難関国公立",
    hasAO: true, hasRecommendation: true, mathOptional: false, englishEmphasis: true,
    faculties: [
      { name: "社会・国際学群", category: "社会・国際",     hensachi: 61 },
      { name: "人文・文化学群", category: "文・語学・人文", hensachi: 60 },
      { name: "医学群",         category: "医・薬・歯・看護", hensachi: 67 },
      { name: "理工学群",       category: "理・工",         hensachi: 60 },
      { name: "生命環境学群",   category: "農・生命",       hensachi: 58 },
      { name: "教育学群",       category: "教育",           hensachi: 59 },
      { name: "芸術専門学群",   category: "芸術・デザイン", hensachi: 60 }
    ]
  },
  {
    id: 12, name: "横浜国立大学", type: "国公立",
    prefecture: "神奈川県", region: "関東",
    groupRank: 2, group: "難関国公立",
    hasAO: true, hasRecommendation: true, mathOptional: false, englishEmphasis: false,
    faculties: [
      { name: "経済学部", category: "経済・経営・商", hensachi: 60 },
      { name: "経営学部", category: "経済・経営・商", hensachi: 61 },
      { name: "理工学部", category: "理・工",         hensachi: 59 },
      { name: "教育学部", category: "教育",           hensachi: 57 }
    ]
  },
  {
    id: 13, name: "千葉大学", type: "国公立",
    prefecture: "千葉県", region: "関東",
    groupRank: 2, group: "難関国公立",
    hasAO: true, hasRecommendation: true, mathOptional: false, englishEmphasis: false,
    faculties: [
      { name: "法政経学部",   category: "法・政治",       hensachi: 59 },
      { name: "文学部",       category: "文・語学・人文", hensachi: 59 },
      { name: "理学部",       category: "理・工",         hensachi: 59 },
      { name: "工学部",       category: "理・工",         hensachi: 58 },
      { name: "農学部",       category: "農・生命",       hensachi: 57 },
      { name: "医学部",       category: "医・薬・歯・看護", hensachi: 66 },
      { name: "教育学部",     category: "教育",           hensachi: 57 },
      { name: "デザイン学部", category: "芸術・デザイン", hensachi: 58 }
    ]
  },
  {
    id: 14, name: "広島大学", type: "国公立",
    prefecture: "広島県", region: "中国・四国",
    groupRank: 3, group: "中堅国公立",
    hasAO: true, hasRecommendation: true, mathOptional: false, englishEmphasis: false,
    faculties: [
      { name: "法学部",   category: "法・政治",       hensachi: 57 },
      { name: "経済学部", category: "経済・経営・商", hensachi: 57 },
      { name: "文学部",   category: "文・語学・人文", hensachi: 57 },
      { name: "理学部",   category: "理・工",         hensachi: 57 },
      { name: "工学部",   category: "理・工",         hensachi: 56 },
      { name: "農学部",   category: "農・生命",       hensachi: 55 },
      { name: "医学部",   category: "医・薬・歯・看護", hensachi: 64 },
      { name: "教育学部", category: "教育",           hensachi: 55 }
    ]
  },
  {
    id: 15, name: "岡山大学", type: "国公立",
    prefecture: "岡山県", region: "中国・四国",
    groupRank: 3, group: "中堅国公立",
    hasAO: true, hasRecommendation: true, mathOptional: false, englishEmphasis: false,
    faculties: [
      { name: "法学部",   category: "法・政治",       hensachi: 56 },
      { name: "経済学部", category: "経済・経営・商", hensachi: 56 },
      { name: "文学部",   category: "文・語学・人文", hensachi: 56 },
      { name: "理学部",   category: "理・工",         hensachi: 56 },
      { name: "工学部",   category: "理・工",         hensachi: 55 },
      { name: "農学部",   category: "農・生命",       hensachi: 54 },
      { name: "医学部",   category: "医・薬・歯・看護", hensachi: 63 },
      { name: "教育学部", category: "教育",           hensachi: 54 }
    ]
  },
  {
    id: 16, name: "金沢大学", type: "国公立",
    prefecture: "石川県", region: "中部",
    groupRank: 3, group: "中堅国公立",
    hasAO: true, hasRecommendation: true, mathOptional: false, englishEmphasis: false,
    faculties: [
      { name: "法学類",       category: "法・政治",       hensachi: 57 },
      { name: "経済学類",     category: "経済・経営・商", hensachi: 57 },
      { name: "人文学類",     category: "文・語学・人文", hensachi: 57 },
      { name: "理工学類",     category: "理・工",         hensachi: 57 },
      { name: "医薬保健学域", category: "医・薬・歯・看護", hensachi: 63 }
    ]
  },
  {
    id: 17, name: "大阪公立大学", type: "国公立",
    prefecture: "大阪府", region: "近畿",
    groupRank: 2, group: "難関国公立",
    hasAO: true, hasRecommendation: true, mathOptional: false, englishEmphasis: false,
    faculties: [
      { name: "法学部",             category: "法・政治",       hensachi: 57 },
      { name: "経済学部",           category: "経済・経営・商", hensachi: 58 },
      { name: "文学部",             category: "文・語学・人文", hensachi: 57 },
      { name: "理学部",             category: "理・工",         hensachi: 57 },
      { name: "工学部",             category: "理・工",         hensachi: 57 },
      { name: "農学部",             category: "農・生命",       hensachi: 56 },
      { name: "医学部",             category: "医・薬・歯・看護", hensachi: 65 },
      { name: "現代システム科学域", category: "社会・国際",     hensachi: 56 }
    ]
  },
  {
    id: 18, name: "東京都立大学", type: "国公立",
    prefecture: "東京都", region: "関東",
    groupRank: 3, group: "中堅国公立",
    hasAO: true, hasRecommendation: true, mathOptional: false, englishEmphasis: true,
    faculties: [
      { name: "法学部",       category: "法・政治",       hensachi: 58, hasAO: false },
      { name: "経済経営学部", category: "経済・経営・商", hensachi: 58, hasAO: false },
      { name: "人文社会学部", category: "文・語学・人文", hensachi: 57, hasAO: false },
      { name: "都市環境学部", category: "理・工",         hensachi: 57, hasAO: true  },
      { name: "理学部",       category: "理・工",         hensachi: 57, hasAO: true  },
      { name: "健康福祉学部", category: "医・薬・歯・看護", hensachi: 58, hasAO: false }
    ]
  },

  // ========== 私立：早慶 ==========
  {
    id: 19, name: "慶應義塾大学", type: "私立",
    prefecture: "東京都", region: "関東",
    groupRank: 1, group: "早慶",
    hasAO: true, hasRecommendation: true, mathOptional: true, englishEmphasis: true,
    faculties: [
      { name: "法学部",       category: "法・政治",       hensachi: 70, hasAO: true  },
      { name: "経済学部",     category: "経済・経営・商", hensachi: 70, hasAO: false },
      { name: "文学部",       category: "文・語学・人文", hensachi: 66, hasAO: true  },
      { name: "商学部",       category: "経済・経営・商", hensachi: 68, hasAO: false },
      { name: "理工学部",     category: "理・工",         hensachi: 67, hasAO: true  },
      { name: "医学部",       category: "医・薬・歯・看護", hensachi: 73, hasAO: false },
      { name: "総合政策学部", category: "社会・国際",     hensachi: 70, hasAO: true  }
    ]
  },
  {
    id: 20, name: "早稲田大学", type: "私立",
    prefecture: "東京都", region: "関東",
    groupRank: 1, group: "早慶",
    hasAO: true, hasRecommendation: true, mathOptional: true, englishEmphasis: true,
    faculties: [
      { name: "法学部",       category: "法・政治",       hensachi: 68, hasAO: true  },
      { name: "政治経済学部", category: "法・政治",       hensachi: 70, hasAO: false },
      { name: "文学部",       category: "文・語学・人文", hensachi: 65, hasAO: true  },
      { name: "文化構想学部", category: "文・語学・人文", hensachi: 66, hasAO: true  },
      { name: "商学部",       category: "経済・経営・商", hensachi: 67, hasAO: false },
      { name: "理工学部",     category: "理・工",         hensachi: 66, hasAO: true  },
      { name: "国際教養学部", category: "社会・国際",     hensachi: 69, hasAO: true  },
      { name: "教育学部",     category: "教育",           hensachi: 63, hasAO: true  }
    ]
  },
  {
    id: 21, name: "上智大学", type: "私立",
    prefecture: "東京都", region: "関東",
    groupRank: 2, group: "上理ICU",
    hasAO: true, hasRecommendation: true, mathOptional: true, englishEmphasis: true,
    faculties: [
      { name: "法学部",             category: "法・政治",       hensachi: 66 },
      { name: "経済学部",           category: "経済・経営・商", hensachi: 64 },
      { name: "文学部",             category: "文・語学・人文", hensachi: 64 },
      { name: "外国語学部",         category: "文・語学・人文", hensachi: 66 },
      { name: "理工学部",           category: "理・工",         hensachi: 62 },
      { name: "総合グローバル学部", category: "社会・国際",     hensachi: 67 },
      { name: "看護学部",           category: "医・薬・歯・看護", hensachi: 60 }
    ]
  },

  // ========== 私立：MARCH ==========
  {
    id: 22, name: "明治大学", type: "私立",
    prefecture: "東京都", region: "関東",
    groupRank: 3, group: "GMARCH",
    hasAO: true, hasRecommendation: true, mathOptional: true, englishEmphasis: false,
    faculties: [
      { name: "法学部",               category: "法・政治",       hensachi: 63, hasAO: false },
      { name: "政治経済学部",         category: "法・政治",       hensachi: 64, hasAO: true  },
      { name: "経営学部",             category: "経済・経営・商", hensachi: 63, hasAO: false },
      { name: "文学部",               category: "文・語学・人文", hensachi: 62, hasAO: true  },
      { name: "商学部",               category: "経済・経営・商", hensachi: 63, hasAO: true  },
      { name: "理工学部",             category: "理・工",         hensachi: 60, hasAO: true  },
      { name: "農学部",               category: "農・生命",       hensachi: 59, hasAO: true  },
      { name: "情報コミュニケーション学部", category: "情報",     hensachi: 63, hasAO: false },
      { name: "国際日本学部",         category: "社会・国際",     hensachi: 64, hasAO: true  },
      { name: "総合数理学部",         category: "情報",           hensachi: 58, hasAO: true  }
    ]
  },
  {
    id: 23, name: "青山学院大学", type: "私立",
    prefecture: "東京都", region: "関東",
    groupRank: 3, group: "GMARCH",
    hasAO: true, hasRecommendation: true, mathOptional: true, englishEmphasis: true,
    faculties: [
      { name: "法学部",           category: "法・政治",       hensachi: 62, hasAO: true  },
      { name: "経営学部",         category: "経済・経営・商", hensachi: 63, hasAO: true  },
      { name: "文学部",           category: "文・語学・人文", hensachi: 62, hasAO: true  },
      { name: "国際政治経済学部", category: "社会・国際",     hensachi: 65, hasAO: true  },
      { name: "理工学部",         category: "理・工",         hensachi: 59, hasAO: true  },
      { name: "地球社会共生学部", category: "社会・国際",     hensachi: 62, hasAO: true  },
      { name: "情報テクノロジー学部", category: "情報",       hensachi: 60, hasAO: false }
    ]
  },
  {
    id: 24, name: "立教大学", type: "私立",
    prefecture: "東京都", region: "関東",
    groupRank: 3, group: "GMARCH",
    hasAO: true, hasRecommendation: true, mathOptional: true, englishEmphasis: true,
    faculties: [
      { name: "法学部",               category: "法・政治",       hensachi: 62, hasAO: true  },
      { name: "経営学部",             category: "経済・経営・商", hensachi: 65, hasAO: true  },
      { name: "文学部",               category: "文・語学・人文", hensachi: 62, hasAO: true  },
      { name: "異文化コミュニケーション学部", category: "社会・国際", hensachi: 67, hasAO: true },
      { name: "理学部",               category: "理・工",         hensachi: 58, hasAO: true  },
      { name: "社会学部",             category: "社会・国際",     hensachi: 63, hasAO: true  },
      { name: "教育学部",             category: "教育",           hensachi: 61, hasAO: false }
    ]
  },
  {
    id: 25, name: "中央大学", type: "私立",
    prefecture: "東京都", region: "関東",
    groupRank: 3, group: "GMARCH",
    hasAO: true, hasRecommendation: true, mathOptional: true, englishEmphasis: false,
    faculties: [
      { name: "法学部",       category: "法・政治",       hensachi: 64, hasAO: true  },
      { name: "経済学部",     category: "経済・経営・商", hensachi: 61, hasAO: true  },
      { name: "文学部",       category: "文・語学・人文", hensachi: 61, hasAO: true  },
      { name: "商学部",       category: "経済・経営・商", hensachi: 61, hasAO: true  },
      { name: "理工学部",     category: "理・工",         hensachi: 59, hasAO: true  },
      { name: "国際情報学部", category: "情報",           hensachi: 62, hasAO: false },
      { name: "国際経営学部", category: "経済・経営・商", hensachi: 62, hasAO: true  }
    ]
  },
  {
    id: 26, name: "法政大学", type: "私立",
    prefecture: "東京都", region: "関東",
    groupRank: 3, group: "GMARCH",
    hasAO: true, hasRecommendation: true, mathOptional: true, englishEmphasis: false,
    faculties: [
      { name: "法学部",       category: "法・政治",       hensachi: 61, hasAO: true },
      { name: "経営学部",     category: "経済・経営・商", hensachi: 61, hasAO: true },
      { name: "文学部",       category: "文・語学・人文", hensachi: 60, hasAO: true },
      { name: "社会学部",     category: "社会・国際",     hensachi: 61, hasAO: true },
      { name: "理工学部",     category: "理・工",         hensachi: 57, hasAO: true },
      { name: "情報科学部",   category: "情報",           hensachi: 59, hasAO: true },
      { name: "国際文化学部", category: "社会・国際",     hensachi: 62, hasAO: true }
    ]
  },

  // ========== 私立：関関同立 ==========
  {
    id: 27, name: "同志社大学", type: "私立",
    prefecture: "京都府", region: "近畿",
    groupRank: 3, group: "関関同立",
    hasAO: false, hasRecommendation: true, mathOptional: true, englishEmphasis: true,
    faculties: [
      { name: "法学部",                   category: "法・政治",       hensachi: 63 },
      { name: "経済学部",                 category: "経済・経営・商", hensachi: 62 },
      { name: "文学部",                   category: "文・語学・人文", hensachi: 62 },
      { name: "商学部",                   category: "経済・経営・商", hensachi: 62 },
      { name: "理工学部",                 category: "理・工",         hensachi: 59 },
      { name: "グローバル・コミュニケーション学部", category: "社会・国際", hensachi: 64 },
      { name: "情報学部",                 category: "情報",           hensachi: 60 }
    ]
  },
  {
    id: 28, name: "立命館大学", type: "私立",
    prefecture: "京都府", region: "近畿",
    groupRank: 3, group: "関関同立",
    hasAO: true, hasRecommendation: true, mathOptional: true, englishEmphasis: true,
    faculties: [
      { name: "法学部",       category: "法・政治",       hensachi: 61 },
      { name: "経済学部",     category: "経済・経営・商", hensachi: 60 },
      { name: "文学部",       category: "文・語学・人文", hensachi: 60 },
      { name: "経営学部",     category: "経済・経営・商", hensachi: 61 },
      { name: "理工学部",     category: "理・工",         hensachi: 58 },
      { name: "国際関係学部", category: "社会・国際",     hensachi: 63 },
      { name: "情報理工学部", category: "情報",           hensachi: 59 },
      { name: "農学部",       category: "農・生命",       hensachi: 58 }
    ]
  },
  {
    id: 29, name: "関西学院大学", type: "私立",
    prefecture: "兵庫県", region: "近畿",
    groupRank: 3, group: "関関同立",
    hasAO: true, hasRecommendation: true, mathOptional: true, englishEmphasis: true,
    faculties: [
      { name: "法学部",   category: "法・政治",       hensachi: 61 },
      { name: "経済学部", category: "経済・経営・商", hensachi: 62 },
      { name: "文学部",   category: "文・語学・人文", hensachi: 61 },
      { name: "商学部",   category: "経済・経営・商", hensachi: 61 },
      { name: "理学部",   category: "理・工",         hensachi: 58 },
      { name: "国際学部", category: "社会・国際",     hensachi: 65 },
      { name: "教育学部", category: "教育",           hensachi: 59 },
      { name: "医学部",   category: "医・薬・歯・看護", hensachi: 65 }
    ]
  },
  {
    id: 30, name: "関西大学", type: "私立",
    prefecture: "大阪府", region: "近畿",
    groupRank: 3, group: "関関同立",
    hasAO: true, hasRecommendation: true, mathOptional: true, englishEmphasis: false,
    faculties: [
      { name: "法学部",         category: "法・政治",       hensachi: 58 },
      { name: "経済学部",       category: "経済・経営・商", hensachi: 57 },
      { name: "文学部",         category: "文・語学・人文", hensachi: 58 },
      { name: "商学部",         category: "経済・経営・商", hensachi: 57 },
      { name: "システム理工学部", category: "理・工",       hensachi: 56 },
      { name: "社会学部",       category: "社会・国際",     hensachi: 58 },
      { name: "情報学部",       category: "情報",           hensachi: 57 }
    ]
  },

  // ========== その他私立 ==========
  {
    id: 31, name: "国際基督教大学(ICU)", type: "私立",
    prefecture: "東京都", region: "関東",
    groupRank: 2, group: "上理ICU",
    hasAO: true, hasRecommendation: true, mathOptional: true, englishEmphasis: true,
    faculties: [
      { name: "教養学部（社会科学科）", category: "社会・国際",     hensachi: 67, hasAO: true },
      { name: "教養学部（人文科学科）", category: "文・語学・人文", hensachi: 65, hasAO: true }
    ]
  },
  {
    id: 32, name: "学習院大学", type: "私立",
    prefecture: "東京都", region: "関東",
    groupRank: 4, group: "成成明学・中堅私大",
    hasAO: true, hasRecommendation: true, mathOptional: true, englishEmphasis: false,
    faculties: [
      { name: "法学部",         category: "法・政治",       hensachi: 60, hasAO: false },
      { name: "経済学部",       category: "経済・経営・商", hensachi: 60, hasAO: false },
      { name: "文学部",         category: "文・語学・人文", hensachi: 59, hasAO: false },
      { name: "理学部",         category: "理・工",         hensachi: 57, hasAO: false },
      { name: "国際社会科学部", category: "社会・国際",     hensachi: 60, hasAO: true  }
    ]
  },
  {
    id: 33, name: "東京理科大学", type: "私立",
    prefecture: "東京都", region: "関東",
    groupRank: 2, group: "上理ICU",
    hasAO: true, hasRecommendation: true, mathOptional: false, englishEmphasis: false,
    faculties: [
      { name: "理学部",   category: "理・工",         hensachi: 63, hasAO: true },
      { name: "工学部",   category: "理・工",         hensachi: 62, hasAO: true },
      { name: "薬学部",   category: "医・薬・歯・看護", hensachi: 61, hasAO: true },
      { name: "経営学部", category: "経済・経営・商", hensachi: 60, hasAO: true },
      { name: "情報学部", category: "情報",           hensachi: 62, hasAO: true }
    ]
  },
  {
    id: 34, name: "近畿大学", type: "私立",
    prefecture: "大阪府", region: "近畿",
    groupRank: 5, group: "産近甲龍",
    hasAO: true, hasRecommendation: true, mathOptional: true, englishEmphasis: false,
    faculties: [
      { name: "法学部",   category: "法・政治",       hensachi: 52 },
      { name: "経済学部", category: "経済・経営・商", hensachi: 51 },
      { name: "文芸学部", category: "文・語学・人文", hensachi: 50 },
      { name: "医学部",   category: "医・薬・歯・看護", hensachi: 62 },
      { name: "理工学部", category: "理・工",         hensachi: 51 },
      { name: "農学部",   category: "農・生命",       hensachi: 51 },
      { name: "薬学部",   category: "医・薬・歯・看護", hensachi: 56 },
      { name: "情報学部", category: "情報",           hensachi: 51 }
    ]
  },
  {
    id: 35, name: "日本大学", type: "私立",
    prefecture: "東京都", region: "関東",
    groupRank: 5, group: "日東駒専",
    hasAO: true, hasRecommendation: true, mathOptional: true, englishEmphasis: false,
    faculties: [
      { name: "法学部",           category: "法・政治",       hensachi: 51, hasAO: true  },
      { name: "経済学部",         category: "経済・経営・商", hensachi: 50, hasAO: true  },
      { name: "文理学部（文系）", category: "文・語学・人文", hensachi: 50, hasAO: true  },
      { name: "理工学部",         category: "理・工",         hensachi: 49, hasAO: true  },
      { name: "農学部",           category: "農・生命",       hensachi: 49, hasAO: true  },
      { name: "医学部",           category: "医・薬・歯・看護", hensachi: 61, hasAO: false },
      { name: "芸術学部",         category: "芸術・デザイン", hensachi: 49, hasAO: true  }
    ]
  },
  {
    id: 36, name: "東洋大学", type: "私立",
    prefecture: "東京都", region: "関東",
    groupRank: 5, group: "日東駒専",
    hasAO: true, hasRecommendation: true, mathOptional: true, englishEmphasis: false,
    faculties: [
      { name: "法学部",       category: "法・政治",       hensachi: 55, hasAO: true },
      { name: "経営学部",     category: "経済・経営・商", hensachi: 56, hasAO: true },
      { name: "文学部",       category: "文・語学・人文", hensachi: 55, hasAO: true },
      { name: "社会学部",     category: "社会・国際",     hensachi: 55, hasAO: true },
      { name: "理工学部",     category: "理・工",         hensachi: 52, hasAO: true },
      { name: "情報連携学部", category: "情報",           hensachi: 54, hasAO: true }
    ]
  },
  {
    id: 37, name: "専修大学", type: "私立",
    prefecture: "東京都", region: "関東",
    groupRank: 5, group: "日東駒専",
    hasAO: true, hasRecommendation: true, mathOptional: true, englishEmphasis: false,
    faculties: [
      { name: "法学部",             category: "法・政治",       hensachi: 53, hasAO: false },
      { name: "経済学部",           category: "経済・経営・商", hensachi: 52, hasAO: true  },
      { name: "文学部",             category: "文・語学・人文", hensachi: 52, hasAO: false },
      { name: "経営学部",           category: "経済・経営・商", hensachi: 52, hasAO: true  },
      { name: "ネットワーク情報学部", category: "情報",         hensachi: 52, hasAO: true  }
    ]
  },
  {
    id: 38, name: "芝浦工業大学", type: "私立",
    prefecture: "東京都", region: "関東",
    groupRank: 4, group: "中堅私大",
    hasAO: true, hasRecommendation: true, mathOptional: false, englishEmphasis: false,
    faculties: [
      { name: "工学部",         category: "理・工",         hensachi: 56, hasAO: true  },
      { name: "システム理工学部", category: "理・工",       hensachi: 55, hasAO: true  },
      { name: "デザイン工学部", category: "芸術・デザイン", hensachi: 55, hasAO: true  },
      { name: "情報工学部",     category: "情報",           hensachi: 56, hasAO: false }
    ]
  },
  {
    id: 39, name: "東京農業大学", type: "私立",
    prefecture: "東京都", region: "関東",
    groupRank: 5, group: "中堅私大",
    hasAO: true, hasRecommendation: true, mathOptional: true, englishEmphasis: false,
    faculties: [
      { name: "農学部",   category: "農・生命", hensachi: 51, hasAO: true },
      { name: "生命科学部", category: "農・生命", hensachi: 49, hasAO: true }
    ]
  },
  {
    id: 40, name: "成蹊大学", type: "私立",
    prefecture: "東京都", region: "関東",
    groupRank: 4, group: "成成明学・中堅私大",
    hasAO: true, hasRecommendation: true, mathOptional: true, englishEmphasis: false,
    faculties: [
      { name: "法学部",   category: "法・政治",       hensachi: 57, hasAO: true  },
      { name: "経済学部", category: "経済・経営・商", hensachi: 57, hasAO: true  },
      { name: "文学部",   category: "文・語学・人文", hensachi: 56, hasAO: true  },
      { name: "理工学部", category: "理・工",         hensachi: 54, hasAO: true  },
      { name: "情報学部", category: "情報",           hensachi: 55, hasAO: false }
    ]
  },
  {
    id: 41, name: "津田塾大学", type: "私立",
    prefecture: "東京都", region: "関東",
    groupRank: 4, group: "中堅私大",
    hasAO: true, hasRecommendation: true, mathOptional: true, englishEmphasis: true,
    faculties: [
      { name: "学芸学部（英文学科）", category: "文・語学・人文", hensachi: 59, hasAO: true  },
      { name: "総合政策学部",         category: "社会・国際",     hensachi: 60, hasAO: true  },
      { name: "情報科学部",           category: "情報",           hensachi: 58, hasAO: false }
    ]
  },
  {
    id: 42, name: "南山大学", type: "私立",
    prefecture: "愛知県", region: "中部",
    groupRank: 4, group: "中堅私大",
    hasAO: true, hasRecommendation: true, mathOptional: true, englishEmphasis: true,
    faculties: [
      { name: "法学部",       category: "法・政治",       hensachi: 55 },
      { name: "経済学部",     category: "経済・経営・商", hensachi: 55 },
      { name: "外国語学部",   category: "文・語学・人文", hensachi: 58 },
      { name: "理工学部",     category: "理・工",         hensachi: 52 },
      { name: "国際教養学部", category: "社会・国際",     hensachi: 57 }
    ]
  },
  {
    id: 43, name: "愛知大学", type: "私立",
    prefecture: "愛知県", region: "中部",
    groupRank: 5, group: "中堅私大",
    hasAO: true, hasRecommendation: true, mathOptional: true, englishEmphasis: false,
    faculties: [
      { name: "法学部",               category: "法・政治",       hensachi: 51 },
      { name: "経済学部",             category: "経済・経営・商", hensachi: 50 },
      { name: "文学部",               category: "文・語学・人文", hensachi: 50 },
      { name: "現代中国学部",         category: "社会・国際",     hensachi: 50 },
      { name: "国際コミュニケーション学部", category: "社会・国際", hensachi: 50 },
      { name: "情報メディア学部",     category: "情報",           hensachi: 50 }
    ]
  },
  {
    id: 44, name: "龍谷大学", type: "私立",
    prefecture: "京都府", region: "近畿",
    groupRank: 5, group: "産近甲龍",
    hasAO: true, hasRecommendation: true, mathOptional: true, englishEmphasis: false,
    faculties: [
      { name: "法学部",   category: "法・政治",       hensachi: 53 },
      { name: "経済学部", category: "経済・経営・商", hensachi: 52 },
      { name: "文学部",   category: "文・語学・人文", hensachi: 52 },
      { name: "経営学部", category: "経済・経営・商", hensachi: 52 },
      { name: "理工学部", category: "理・工",         hensachi: 50 },
      { name: "社会学部", category: "社会・国際",     hensachi: 53 },
      { name: "農学部",   category: "農・生命",       hensachi: 50 }
    ]
  },
  {
    id: 45, name: "甲南大学", type: "私立",
    prefecture: "兵庫県", region: "近畿",
    groupRank: 5, group: "産近甲龍",
    hasAO: true, hasRecommendation: true, mathOptional: true, englishEmphasis: false,
    faculties: [
      { name: "法学部",       category: "法・政治",       hensachi: 51 },
      { name: "経済学部",     category: "経済・経営・商", hensachi: 50 },
      { name: "文学部",       category: "文・語学・人文", hensachi: 50 },
      { name: "理工学部",     category: "理・工",         hensachi: 49 },
      { name: "知能情報学部", category: "情報",           hensachi: 49 }
    ]
  },
  {
    id: 46, name: "西南学院大学", type: "私立",
    prefecture: "福岡県", region: "九州・沖縄",
    groupRank: 5, group: "中堅私大",
    hasAO: true, hasRecommendation: true, mathOptional: true, englishEmphasis: true,
    faculties: [
      { name: "法学部",       category: "法・政治",       hensachi: 53 },
      { name: "経済学部",     category: "経済・経営・商", hensachi: 52 },
      { name: "文学部",       category: "文・語学・人文", hensachi: 52 },
      { name: "国際文化学部", category: "社会・国際",     hensachi: 53 }
    ]
  },
  {
    id: 47, name: "福岡大学", type: "私立",
    prefecture: "福岡県", region: "九州・沖縄",
    groupRank: 6, group: "その他",
    hasAO: true, hasRecommendation: true, mathOptional: true, englishEmphasis: false,
    faculties: [
      { name: "法学部",   category: "法・政治",       hensachi: 48 },
      { name: "経済学部", category: "経済・経営・商", hensachi: 47 },
      { name: "人文学部", category: "文・語学・人文", hensachi: 47 },
      { name: "理学部",   category: "理・工",         hensachi: 47 },
      { name: "医学部",   category: "医・薬・歯・看護", hensachi: 63 }
    ]
  },
  {
    id: 48, name: "東北学院大学", type: "私立",
    prefecture: "宮城県", region: "東北",
    groupRank: 6, group: "その他",
    hasAO: true, hasRecommendation: true, mathOptional: true, englishEmphasis: false,
    faculties: [
      { name: "法学部",   category: "法・政治",       hensachi: 48 },
      { name: "経済学部", category: "経済・経営・商", hensachi: 47 },
      { name: "文学部",   category: "文・語学・人文", hensachi: 47 },
      { name: "工学部",   category: "理・工",         hensachi: 46 },
      { name: "情報学部", category: "情報",           hensachi: 47 }
    ]
  },
  {
    id: 49, name: "北海学園大学", type: "私立",
    prefecture: "北海道", region: "北海道",
    groupRank: 6, group: "その他",
    hasAO: true, hasRecommendation: true, mathOptional: true, englishEmphasis: false,
    faculties: [
      { name: "法学部",   category: "法・政治",       hensachi: 47 },
      { name: "経済学部", category: "経済・経営・商", hensachi: 47 },
      { name: "文学部",   category: "文・語学・人文", hensachi: 46 },
      { name: "工学部",   category: "理・工",         hensachi: 45 }
    ]
  },
  {
    id: 50, name: "武蔵大学", type: "私立",
    prefecture: "東京都", region: "関東",
    groupRank: 4, group: "成成明学・中堅私大",
    hasAO: true, hasRecommendation: true, mathOptional: true, englishEmphasis: true,
    faculties: [
      { name: "経済学部", category: "経済・経営・商", hensachi: 56, hasAO: true },
      { name: "人文学部", category: "文・語学・人文", hensachi: 56, hasAO: true },
      { name: "社会学部", category: "社会・国際",     hensachi: 56, hasAO: true }
    ]
  }
];
