// Per-faculty AO method overrides based on 2026年度入試版 総合型選抜PDF (東京都)
const AO_METHODS_OVERRIDE = {
  '19_法学部':         ['学力試験', '面接', '書類審査'],   // 慶應・FIT入試
  '19_文学部':         ['小論文', '書類審査'],              // 慶應・自主応募制
  '19_理工学部':       ['面接', '書類審査'],
  '19_総合政策学部':   ['面接', '書類審査'],
  // 早稲田大学 (id:20)
  '20_法学部':         ['小論文', '書類審査'],              // 地域探究・貢献入試
  '20_文学部':         ['小論文', '書類審査'],              // 地域探究・貢献入試
  '20_文化構想学部':   ['小論文', '書類審査'],              // 地域探究・貢献入試 / JCulP
  '20_教育学部':       ['小論文', '書類審査'],              // 地域探究・貢献入試
  '20_国際教養学部':   ['学力試験', '書類審査'],            // 早稲田・Critical Writing
  '20_理工学部':       ['面接', '書類審査'],                // 早稲田・帰国生・英語面接
  // 立教大学 (id:24) — 自由選抜入試（英語資格が出願条件の学部多数）
  '24_法学部':         ['面接', '書類審査'],
  '24_文学部':         ['小論文', '面接', '書類審査'],
  '24_経済学部':       ['学力試験', '面接', '書類審査'],    // 90分総合科目試験
  '24_経営学部':       ['面接', '書類審査'],
  '24_異文化コミュニケーション学部': ['面接', '書類審査'],
  '24_理学部':         ['小論文', '面接', '書類審査'],      // 課題小論文
  '24_社会学部':       ['小論文', '面接', '書類審査'],      // 自由研究提出＋小論文
  '24_観光学部':       ['小論文', '面接', '書類審査'],
  '24_コミュニティ福祉学部': ['面接', '書類審査'],
  '24_現代心理学部':   ['小論文', '面接', '書類審査'],
  '24_スポーツウエルネス学部': ['面接', '書類審査'],
  '24_環境学部':       ['面接', '書類審査'],
  // 明治大学 (id:22)
  '22_政治経済学部':   ['学力試験', '面接', '書類審査'],    // 明治・グローバル型（総合問題）
  '22_文学部':         ['小論文', '面接', '書類審査'],      // 明治・自己推薦
  '22_商学部':         ['学力試験', '面接', '書類審査'],    // 明治・公募制（共通テスト利用）
  '22_理工学部':       ['実技', '面接', '書類審査'],        // 明治・自己推薦（実技＋口頭試問）
  '22_国際日本学部':   ['小論文', '面接', '書類審査'],      // 明治・自己推薦（英語資格必須）
  '22_総合数理学部':   ['学力試験', '面接', '書類審査'],    // 明治・自己推薦（数学考査/プレゼン）
  // 青山学院大学 (id:23) — 自己推薦入試（4学部のみ）
  '23_文学部':         ['面接', '書類審査'],
  '23_地球社会共生学部': ['面接', '書類審査'],
  '23_コミュニティ人間科学部': ['面接', '書類審査'],
  '23_理工学部':       ['学力試験', '面接', '書類審査'],    // 青山・基礎学力調査
  // 中央大学 (id:25)
  '25_経済学部':       ['小論文', '面接', '書類審査'],      // 中央・英語小論文
  '25_商学部':         ['小論文', '面接', '書類審査'],      // 中央・英語運用能力特別入試
  '25_国際経営学部':   ['小論文', '面接', '書類審査'],      // 中央・自己推薦（英語資格必須）
  // 法政大学 (id:26)
  '26_情報科学部':     ['学力試験', '面接', '書類審査'],    // 法政・数学試験
  '26_国際文化学部':   ['面接', '書類審査'],                // 法政・GIS（英語面接）
  '32_国際社会科学部': ['小論文', '面接', '書類審査'],      // 学習院・英語論文
  // 成蹊大学 (id:40)
  '40_文学部':         ['小論文', '面接', '書類審査'],      // 成蹊・発表・質疑応答
  '40_理工学部':       ['学力試験', '面接', '書類審査'],    // 成蹊・思考力審査
};

// Per-faculty AO detailed info: interview language, English score requirements, notes
const FACULTY_DETAILS = {
  // ===== 慶應義塾大学 (id:19) =====
  '19_法学部': {
    aoInterviewLang: '日本語',
    aoEnglishReqs: [],
    aoNotes: 'FIT入試A方式：模擬講義→小論文→口頭試問。B方式：総合考査→面接。合格者に英検準1級保持者が多い。',
  },
  '19_文学部': {
    aoInterviewLang: null,
    aoEnglishReqs: [],
    aoNotes: '自主応募制推薦。面接なし。試験内で外国語作文あり（英語含む複数言語から選択）。評定平均4.1以上が出願条件。',
  },
  '19_理工学部': {
    aoInterviewLang: '日本語',
    aoEnglishReqs: [],
    aoNotes: '学門A・C・Dの3学門のみ実施。志望理由書＋口頭試問形式の面接。英語スコア提出は任意。',
  },
  '19_総合政策学部': {
    aoInterviewLang: '日本語または英語（選択可）',
    aoEnglishReqs: [],
    aoNotes: 'AO入試。英語または日本語で面接。英語スコアは任意提出（高スコアが有利）。',
  },
  // ===== 早稲田大学 (id:20) =====
  '20_法学部': {
    aoInterviewLang: null,
    aoEnglishReqs: [],
    aoNotes: '地域探究・貢献入試。面接なし。第1次：書類審査。第2次：小論文。第3次：共通テスト240/300点以上が必要。',
  },
  '20_文学部': {
    aoInterviewLang: null,
    aoEnglishReqs: [],
    aoNotes: '地域探究・貢献入試。面接なし。第1次：書類審査。第2次：小論文。第3次：共通テスト240/300点以上が必要。',
  },
  '20_文化構想学部': {
    aoInterviewLang: '英語（JCulPコース）',
    aoEnglishReqs: [
      'TEAP: 309点以上',
      'IELTS: 5.5以上',
      '英検CSEスコア: 2300以上',
      'TOEFL iBT: 72点以上',
    ],
    aoNotes: '2種類のAO入試あり。①地域探究・貢献入試（英語不要、共通テスト240/300点以上）。②JCulPコース（英語で面接、上記英語資格のいずれかが必要）。',
  },
  '20_教育学部': {
    aoInterviewLang: null,
    aoEnglishReqs: [],
    aoNotes: '地域探究・貢献入試。面接なし。第1次：書類審査。第2次：小論文。第3次：共通テスト240/300点以上が必要。',
  },
  '20_国際教養学部': {
    aoInterviewLang: null,
    aoEnglishReqs: [
      'TOEFL iBT: 目安100点以上（基準なし）',
      'IELTS: 目安7.0以上（基準なし）',
    ],
    aoNotes: '2026年度は面接なし。Critical Writingテスト（英語エッセイ）が選考の中心。英語資格提出必須だが合否への影響は参考程度。',
  },
  '20_理工学部': {
    aoInterviewLang: '英語',
    aoEnglishReqs: [
      'TOEFL iBT: 提出推奨',
      'IELTS: 提出推奨',
    ],
    aoNotes: '主に帰国生・外国人向け入試。英語での面接。英語資格スコアの提出が求められる。',
  },
  // ===== 明治大学 (id:22) =====
  '22_政治経済学部': {
    aoInterviewLang: '日本語',
    aoEnglishReqs: [
      '英検: 準1級以上',
      'TOEFL iBT: 68点以上',
      'IELTS: 6.0以上',
      'TEAP: 285点以上',
      'TOEIC L&R: 950点以上',
    ],
    aoNotes: 'グローバル型総合選抜。上記英語資格のいずれかが出願に必須。総合問題（英語長文含む）＋面接。',
  },
  '22_文学部': {
    aoInterviewLang: '日本語',
    aoEnglishReqs: [],
    aoNotes: '自己推薦特別入学試験。英語資格不要。評定平均3.5以上が出願条件。小論文＋面接。',
  },
  '22_商学部': {
    aoInterviewLang: '日本語',
    aoEnglishReqs: [],
    aoNotes: '公募制特別入試。共通テスト利用（英・国・数/社から選択）。簿記2級またはTOEIC等の資格か海外留学経験が出願条件。',
  },
  '22_理工学部': {
    aoInterviewLang: '日本語',
    aoEnglishReqs: [],
    aoNotes: '自己推薦特別入試。評定平均3.8以上。実技課題（口頭試問＋プレゼン形式）。英語スコアの明確な基準なし。',
  },
  '22_国際日本学部': {
    aoInterviewLang: '日本語',
    aoEnglishReqs: [
      '英検: 準1級以上',
      'TOEFL iBT: 72点以上',
      'IELTS: 5.5以上',
      'TEAP: 309点以上',
      'TOEIC L&R+S&W: 785＋310点以上',
    ],
    aoNotes: '自己推薦特別入試。上記英語資格のいずれかが出願に必須。小論文（英文含む）＋面接。',
  },
  '22_総合数理学部': {
    aoInterviewLang: '日本語',
    aoEnglishReqs: [],
    aoNotes: '自己推薦特別入試。数学または情報系のプレゼンテーション＋口頭試問。英語資格不要。',
  },
  // ===== 青山学院大学 (id:23) =====
  '23_文学部': {
    aoInterviewLang: '英語＋日本語（英米文学科）／日本語（史学科・比較芸術学科）',
    aoEnglishReqs: [
      '英検: 準1級以上（英米文学科）',
      'TOEFL iBT: 68点以上（英米文学科）',
      'IELTS: 5.5以上（英米文学科）',
      'TEAP: 300点以上（英米文学科）',
      'TOEIC: 730点以上（英米文学科）',
    ],
    aoNotes: '学科により条件が異なる。英米文学科は英語資格必須＋英語面接あり。史学科・比較芸術学科は英語資格不要・日本語面接。',
  },
  '23_地球社会共生学部': {
    aoInterviewLang: '日本語（一部英語）',
    aoEnglishReqs: [
      '英検: 準1級以上（区分A）／2級以上（区分B〜G）',
      'TOEFL iBT: 68点以上（区分A）／54点以上（区分B〜G）',
      'IELTS: 5.5以上（区分A）／4.5以上（区分B〜G）',
      'TEAP: 300点以上（区分A）／225点以上（区分B〜G）',
    ],
    aoNotes: '区分（A〜G）ごとに英語基準が異なる。区分Aは英語資格の高スコアが求められ一部英語での面接あり。区分B〜Gは英語2級相当で可。',
  },
  '23_コミュニティ人間科学部': {
    aoInterviewLang: '日本語',
    aoEnglishReqs: [],
    aoNotes: '自己推薦入試。英語資格不要。地域・社会活動経験やボランティア実績が重視される。',
  },
  '23_理工学部': {
    aoInterviewLang: '日本語',
    aoEnglishReqs: [
      '英検CSEスコア: 1980以上',
      'TOEFL iBT: 42点以上',
      'IELTS: 4.0以上',
      'TEAP: 225点以上',
      'TOEIC L&R+S&W: 550＋240点以上',
    ],
    aoNotes: '理工系女子特別入学者選抜（2026年度新設）。女子のみ対象。上記英語資格のいずれかが出願に必須。基礎学力調査（数学・理科）＋面接。',
  },
  // ===== 立教大学 (id:24) =====
  '24_法学部': {
    aoInterviewLang: '日本語',
    aoEnglishReqs: [
      '英語資格スコア: 提出必須（下限基準なし）',
    ],
    aoNotes: '自由選抜入試。英語資格スコアの提出が必須だが最低点の基準は設けられていない。書類審査＋面接。',
  },
  '24_経済学部': {
    aoInterviewLang: '日本語',
    aoEnglishReqs: [
      'TOEFL iBT: 42点以上',
      'IELTS: 4.0以上',
      '英検CSEスコア: 1950以上',
      'TEAP: 225点以上',
      'GTEC: 930点以上',
      'TOEIC: 1150点以上',
    ],
    aoNotes: '自由選抜入試。上記英語資格のいずれかが出願に必須。第2次選考は90分の総合科目試験＋面接。',
  },
  '24_経営学部': {
    aoInterviewLang: '日本語',
    aoEnglishReqs: [
      '英検CSEスコア: 1700以上（資格型I）／2300以上（国際経営学科）',
      'TOEFL iBT: 42点以上（資格型I）／72点以上（国際経営学科）',
      'IELTS: 4.0以上（資格型I）／5.5以上（国際経営学科）',
      'TEAP: 要確認（国際経営学科）: 309点以上',
    ],
    aoNotes: '学科により基準が異なる。資格型Iは英検CSE 1700相当以上。国際経営学科はより高い基準（英検CSE 2300相当以上）が必要。',
  },
  '24_文学部': {
    aoInterviewLang: '日本語',
    aoEnglishReqs: [
      'TOEFL iBT: 72点以上（英米文学専修）',
      'IELTS: 5.5以上（英米文学専修）',
      '英検CSEスコア: 2300以上（英米文学専修）',
      'TEAP: 309点以上（英米文学専修）',
      '他専修: スコア提出必須（下限基準なし）',
    ],
    aoNotes: '英米文学専修は高い英語基準あり。他専修（日本文学、史学、教育学等）はスコア提出必須だが下限基準なし。',
  },
  '24_異文化コミュニケーション学部': {
    aoInterviewLang: '日本語および英語',
    aoEnglishReqs: [
      'TOEFL iBT: 72点以上',
      'IELTS: 5.5以上',
      '英検CSEスコア: 2300以上',
      'TEAP: 309点以上',
    ],
    aoNotes: '自由選抜入試。上記英語資格のいずれかが出願に必須。面接は日英両言語で実施される。',
  },
  '24_理学部': {
    aoInterviewLang: '日本語',
    aoEnglishReqs: [
      'TOEFL iBT: 57点以上',
      'IELTS: 4.5以上',
      '英検CSEスコア: 1950以上',
      'TEAP: 267点以上',
      'GTEC: 930点以上',
    ],
    aoNotes: '自由選抜入試。英語資格提出必須。課題小論文（理系）＋面接。',
  },
  '24_社会学部': {
    aoInterviewLang: '日本語',
    aoEnglishReqs: [
      'TOEFL iBT: 42点以上',
      'IELTS: 4.0以上',
      '英検CSEスコア: 1950以上',
      'TEAP: 225点以上',
    ],
    aoNotes: '自由選抜入試。英語資格提出必須。自由研究レポートの提出＋小論文＋面接。',
  },
  '24_観光学部': {
    aoInterviewLang: '日本語',
    aoEnglishReqs: [
      'TOEFL iBT: 42点以上',
      'IELTS: 4.0以上',
      '英検CSEスコア: 1950以上',
      'TEAP: 225点以上',
      'TOEIC: 1560点以上',
    ],
    aoNotes: '自由選抜入試。英語資格提出必須。小論文＋面接。',
  },
  '24_コミュニティ福祉学部': {
    aoInterviewLang: '日本語',
    aoEnglishReqs: [
      'TOEFL iBT: 80点以上（資格型III）',
      'IELTS: 6.0以上（資格型III）',
      '英検CSEスコア: 2400以上（資格型III）',
      'TEAP: 332点以上（資格型III）',
      'TOEIC: 1660点以上（資格型III）',
    ],
    aoNotes: '資格型IIIは高い英語基準（英検準1級以上相当）。福祉・コミュニティ活動の実績も重視。',
  },
  '24_現代心理学部': {
    aoInterviewLang: '日本語',
    aoEnglishReqs: [
      'TOEFL iBT: 72点以上',
      'IELTS: 5.5以上',
      '英検CSEスコア: 2300以上',
      'TEAP: 309点以上',
      'GTEC: 1180点以上',
    ],
    aoNotes: '自由選抜入試（資格型V）。上記英語資格のいずれかが出願に必須。小論文（心理・映像系）＋面接。',
  },
  '24_スポーツウエルネス学部': {
    aoInterviewLang: '日本語',
    aoEnglishReqs: [
      'TOEFL iBT: 57点以上',
      'IELTS: 4.5以上',
      '英検CSEスコア: 2125以上',
      'TEAP: 267点以上',
      'GTEC: 1065点以上',
    ],
    aoNotes: '自由選抜入試。英語資格提出必須。スポーツ・健康に関する活動実績と面接重視。',
  },
  '24_環境学部': {
    aoInterviewLang: '日本語',
    aoEnglishReqs: [
      '英検CSEスコア: 2067以上（目安）',
    ],
    aoNotes: '自由選抜入試。英語資格提出必須。環境・自然科学に関する研究や活動実績が重視される。',
  },
  // ===== 中央大学 (id:25) =====
  '25_法学部': {
    aoInterviewLang: '日本語（一部英語）',
    aoEnglishReqs: [
      '英検: 1級以上',
      'TOEFL iBT: 80点以上',
      'IELTS: 6.0以上',
      'TEAP: 300点以上',
      'TOEIC L&R: 785点以上',
    ],
    aoNotes: 'フレックス・プラス（英語）コース型。上記英語資格のいずれかが出願に必須。英語での口頭試問が含まれる。',
  },
  '25_経済学部': {
    aoInterviewLang: '日本語',
    aoEnglishReqs: [
      '英検CSEスコア: 2200以上',
      'TOEFL iBT: 61点以上',
      'IELTS: 5.0以上',
      'TEAP: 280点以上',
      'TOEIC L&R+S&W: 940点以上',
      'GTEC: 1050点以上',
    ],
    aoNotes: '英語運用能力特別入試。上記英語資格のいずれかが出願に必須。英語小論文＋面接。',
  },
  '25_商学部': {
    aoInterviewLang: '日本語',
    aoEnglishReqs: [
      '英検: 準1級以上',
      'TOEFL iBT: 68点以上',
      'IELTS: 6.0以上',
      'TEAP: 280点以上',
      'TOEIC: 940点以上',
      'GTEC: 1180点以上',
    ],
    aoNotes: '英語運用能力特別入試。評定平均4.0以上が出願条件。英語筆記試験＋面接。',
  },
  '25_文学部': {
    aoInterviewLang: '日本語',
    aoEnglishReqs: [
      '英検: 準1級以上（外国語型）',
      'TOEFL iBT: 57点以上（外国語型）',
      'IELTS: 4.5以上（外国語型）',
      'TEAP: 270点以上（外国語型）',
      'TOEIC: 1410点以上（外国語型）',
      'GTEC: 1050点以上（外国語型）',
    ],
    aoNotes: '外国語型（英語資格必須）と専攻適性型（英語資格不要）の2種類。英語・語学系専攻志望者は外国語型が推奨。',
  },
  '25_理工学部': {
    aoInterviewLang: '日本語',
    aoEnglishReqs: [],
    aoNotes: '2026年4月より基幹理工学部・社会理工学部・先進理工学部の3学部に再編。英語資格不要。学科別課題（数学・理科の問題演習）＋面接。',
  },
  '25_国際経営学部': {
    aoInterviewLang: '英語および日本語',
    aoEnglishReqs: [
      '英検CSEスコア: 2304以上',
      'TOEFL iBT: 72点以上',
      'IELTS: 5.5以上',
      'TOEIC L&R+S&W: 785＋310点以上',
    ],
    aoNotes: '自己推薦入試。評定平均3.8以上。英語・日本語両方での面接。上記英語資格のいずれかが出願に必須。',
  },
  // ===== 法政大学 (id:26) =====
  '26_法学部': {
    aoInterviewLang: '日本語',
    aoEnglishReqs: [],
    aoNotes: '自己推薦入試。英語資格不要（国際政治学科のTOEFL/英検等が必要な別入試とは異なる）。小論文＋面接。',
  },
  '26_情報科学部': {
    aoInterviewLang: '日本語',
    aoEnglishReqs: [
      '英検: 2級（望ましい）',
      'GTEC: 1000点（望ましい）',
    ],
    aoNotes: 'IT特別選抜。数学の試験あり（必須）。英語スコアは必須ではないが提出が望ましい。',
  },
  '26_国際文化学部': {
    aoInterviewLang: '英語',
    aoEnglishReqs: [
      'TOEFL iBT: 90点以上（S基準）／任意提出（A基準）',
      'IELTS: 7.0以上（S基準）／任意提出（A基準）',
    ],
    aoNotes: 'GIS（グローバル教養学院）。英語での面接・プレゼン。S基準（TOEFL 90/IELTS 7.0以上）とA基準（スコア任意）の2種類あり。',
  },
  // ===== 学習院大学 (id:32) =====
  '32_国際社会科学部': {
    aoInterviewLang: '英語',
    aoEnglishReqs: [
      '英検: 2級以上',
      'TOEFL iBT: 42点以上',
      'IELTS: 4.5以上',
      'TOEIC: 650点以上',
      'TEAP: 210点以上',
      'TEAP CBT: 310点以上',
      'GTEC: 1050点以上',
    ],
    aoNotes: '英語資格の提出が必須。英語での論文・小論文＋英語面接。英語のみで審査が行われる。',
  },
  // ===== 東京理科大学 (id:33) =====
  '33_工学部': {
    aoInterviewLang: '日本語',
    aoEnglishReqs: [
      'TOEFL iBT: 42点以上',
      'IELTS: 4.0以上',
      '英検CSEスコア: 1950以上',
      'TOEIC L&R+S&W: 1150点以上',
      'TEAP: 225点以上',
      'TEAP CBT: 420点以上',
      'GTEC: 930点以上',
    ],
    aoNotes: '全学部共通の英語資格条件。数学・理科の評定平均4.0以上が出願条件。専門口頭試問（日本語）＋面接。',
  },
  '33_理学部': {
    aoInterviewLang: '日本語',
    aoEnglishReqs: [
      'TOEFL iBT: 42点以上',
      'IELTS: 4.0以上',
      '英検CSEスコア: 1950以上',
      'TOEIC L&R+S&W: 1150点以上',
      'TEAP: 225点以上',
      'TEAP CBT: 420点以上',
      'GTEC: 930点以上',
    ],
    aoNotes: '全学部共通の英語資格条件。数学・理科の評定平均4.0以上が出願条件。専門口頭試問（日本語）＋面接。',
  },
  '33_薬学部': {
    aoInterviewLang: '日本語',
    aoEnglishReqs: [
      'TOEFL iBT: 42点以上',
      'IELTS: 4.0以上',
      '英検CSEスコア: 1950以上',
      'TOEIC L&R+S&W: 1150点以上',
      'TEAP: 225点以上',
      'TEAP CBT: 420点以上',
      'GTEC: 930点以上',
    ],
    aoNotes: '全学部共通の英語資格条件。数学・理科の評定平均4.0以上が出願条件。専門口頭試問（日本語）＋面接。',
  },
  '33_経営学部': {
    aoInterviewLang: '日本語',
    aoEnglishReqs: [
      'TOEFL iBT: 42点以上',
      'IELTS: 4.0以上',
      '英検CSEスコア: 1950以上',
      'TOEIC L&R+S&W: 1150点以上',
      'TEAP: 225点以上',
      'TEAP CBT: 420点以上',
      'GTEC: 930点以上',
    ],
    aoNotes: '全学部共通の英語資格条件。数学・理科の評定平均4.0以上が出願条件。専門口頭試問（日本語）＋面接。',
  },
  '33_情報学部': {
    aoInterviewLang: '日本語',
    aoEnglishReqs: [
      'TOEFL iBT: 42点以上',
      'IELTS: 4.0以上',
      '英検CSEスコア: 1950以上',
      'TOEIC L&R+S&W: 1150点以上',
      'TEAP: 225点以上',
      'TEAP CBT: 420点以上',
      'GTEC: 930点以上',
    ],
    aoNotes: '全学部共通の英語資格条件。数学・理科の評定平均4.0以上が出願条件。専門口頭試問（日本語）＋面接。',
  },
  // ===== 成蹊大学 (id:40) =====
  '40_法学部': {
    aoInterviewLang: '日本語',
    aoEnglishReqs: [
      '英語スコア: 提出必須（下限基準なし）',
    ],
    aoNotes: 'AOマルデス入試。英語スコア提出必須だが最低点の基準なし。資料読解＋グループ討論＋面接。',
  },
  '40_経済学部': {
    aoInterviewLang: '日本語',
    aoEnglishReqs: [
      '英語スコア: 提出必須（下限基準なし）',
    ],
    aoNotes: 'AOマルデス入試。英語スコア提出必須だが最低点の基準なし。課題提出＋プレゼンテーション＋面接。',
  },
  '40_文学部': {
    aoInterviewLang: '日本語（英米文学科は英語プレゼンあり）',
    aoEnglishReqs: [
      '英検: 2級以上（国際文化学科）',
      'TOEFL iBT: 52点以上（国際文化学科）',
      'TOEIC: 560点以上（国際文化学科）',
    ],
    aoNotes: 'AOマルデス入試。国際文化学科は英語資格必須。英米文学科は英語プレゼンあり（資格不要）。日本文学科は英語資格不要。',
  },
  '40_理工学部': {
    aoInterviewLang: '日本語',
    aoEnglishReqs: [
      '英語スコア: 提出必須（下限基準なし）',
    ],
    aoNotes: 'AOマルデス入試。英語スコア提出必須だが最低点の基準なし。思考力審査（90分数学演習）＋面接。',
  },
};

function getAOMethods(school, faculty) {
  const key = `${school.id}_${faculty.name}`;
  if (AO_METHODS_OVERRIDE[key]) return AO_METHODS_OVERRIDE[key];
  if (faculty.category === '芸術・デザイン') return ['実技', '面接', '書類審査'];
  return ['面接', '書類審査'];
}

function getGeneralSubjects(faculty, school) {
  const cat = faculty.category;
  if (cat === '理・工' || cat === '農・生命' || cat === '情報' || cat === '医・薬・歯・看護') {
    return ['英語', '数学', '理科'];
  }
  if (cat === '芸術・デザイン') return ['英語', '国語'];
  if (school.mathOptional) return ['英語', '国語', '社会'];
  if (cat === '経済・経営・商') return ['英語', '数学または社会', '国語'];
  return ['英語', '国語', '社会'];
}

const filters = {
  types: [],
  regions: [],
  categories: [],
  hensachiMin: 35,
  hensachiMax: 80,
  maxRank: 99,
  noMath: false,
  englishStrong: false,
  hasGeneral: false,
  hasAO: false,
  hasSuisen: false,
  aoMethods: []
};

let currentResults = [];

function getCheckedValues(name) {
  return Array.from(document.querySelectorAll(`input[name="${name}"]:checked`)).map(el => el.value);
}

function initFilters() {
  const levelSelect = document.getElementById('level-select');
  DIFFICULTY_LEVELS.forEach(lv => {
    const opt = document.createElement('option');
    opt.value = lv.value;
    opt.textContent = lv.label;
    levelSelect.appendChild(opt);
  });
  levelSelect.addEventListener('change', e => {
    filters.maxRank = parseInt(e.target.value);
    applyFilters();
  });

  const regionContainer = document.getElementById('region-filters');
  REGIONS.forEach(region => {
    const label = document.createElement('label');
    label.className = 'checkbox-label';
    const input = document.createElement('input');
    input.type = 'checkbox';
    input.name = 'region';
    input.value = region;
    input.addEventListener('change', () => {
      filters.regions = getCheckedValues('region');
      applyFilters();
    });
    label.appendChild(input);
    label.appendChild(document.createTextNode(' ' + region));
    regionContainer.appendChild(label);
  });

  const catContainer = document.getElementById('faculty-filters');
  FACULTY_CATEGORIES.forEach(cat => {
    const label = document.createElement('label');
    label.className = 'checkbox-label';
    const input = document.createElement('input');
    input.type = 'checkbox';
    input.name = 'category';
    input.value = cat;
    input.addEventListener('change', () => {
      filters.categories = getCheckedValues('category');
      applyFilters();
    });
    label.appendChild(input);
    label.appendChild(document.createTextNode(' ' + cat));
    catContainer.appendChild(label);
  });

  document.querySelectorAll('input[name="type"]').forEach(cb => {
    cb.addEventListener('change', () => {
      filters.types = getCheckedValues('type');
      applyFilters();
    });
  });

  const minSlider = document.getElementById('hensachi-min');
  const maxSlider = document.getElementById('hensachi-max');
  const minLabel  = document.getElementById('hensachi-min-label');
  const maxLabel  = document.getElementById('hensachi-max-label');

  function syncRange() {
    let min = parseInt(minSlider.value);
    let max = parseInt(maxSlider.value);
    if (min > max) { [min, max] = [max, min]; minSlider.value = min; maxSlider.value = max; }
    minLabel.textContent = min;
    maxLabel.textContent = max;
    filters.hensachiMin = min;
    filters.hensachiMax = max;
    applyFilters();
  }

  minSlider.addEventListener('input', syncRange);
  maxSlider.addEventListener('input', syncRange);

  document.getElementById('filter-math').addEventListener('change', e => {
    filters.noMath = e.target.checked;
    applyFilters();
  });

  document.getElementById('filter-english').addEventListener('change', e => {
    filters.englishStrong = e.target.checked;
    applyFilters();
  });

  document.getElementById('filter-general').addEventListener('change', e => {
    filters.hasGeneral = e.target.checked;
    applyFilters();
  });

  document.getElementById('filter-ao').addEventListener('change', e => {
    filters.hasAO = e.target.checked;
    applyFilters();
  });

  document.getElementById('filter-suisen').addEventListener('change', e => {
    filters.hasSuisen = e.target.checked;
    applyFilters();
  });

  document.querySelectorAll('input[name="ao-method"]').forEach(cb => {
    cb.addEventListener('change', () => {
      filters.aoMethods = getCheckedValues('ao-method');
      applyFilters();
    });
  });

  document.getElementById('sort-select').addEventListener('change', applyFilters);
  document.getElementById('reset-btn').addEventListener('click', resetFilters);

  const toggleBtn = document.getElementById('filter-toggle-btn');
  const sidebar   = document.getElementById('sidebar');
  const overlay   = document.getElementById('overlay');

  toggleBtn.addEventListener('click', () => {
    sidebar.classList.toggle('open');
    overlay.classList.toggle('active');
  });

  overlay.addEventListener('click', () => {
    sidebar.classList.remove('open');
    overlay.classList.remove('active');
  });
}

function resetFilters() {
  Object.assign(filters, {
    types: [], regions: [], categories: [],
    hensachiMin: 35, hensachiMax: 80,
    maxRank: 99, noMath: false, englishStrong: false,
    hasGeneral: false, hasAO: false, hasSuisen: false,
    aoMethods: []
  });
  document.querySelectorAll('input[type="checkbox"]').forEach(cb => { cb.checked = false; });
  document.getElementById('level-select').value = 99;
  document.getElementById('hensachi-min').value = 35;
  document.getElementById('hensachi-max').value = 80;
  document.getElementById('hensachi-min-label').textContent = '35';
  document.getElementById('hensachi-max-label').textContent = '80';
  applyFilters();
}

function applyFilters() {
  const results = [];

  schools.forEach(school => {
    if (filters.types.length   && !filters.types.includes(school.type))     return;
    if (filters.regions.length && !filters.regions.includes(school.region)) return;
    if (school.groupRank > filters.maxRank)                                  return;
    if (filters.noMath        && !school.mathOptional)                       return;
    if (filters.englishStrong && !school.englishEmphasis)                    return;
    if (filters.hasGeneral    && school.hasGeneral === false)                 return;
    if (filters.hasSuisen     && !school.hasRecommendation)                  return;

    school.faculties.forEach(faculty => {
      if (faculty.hensachi < filters.hensachiMin || faculty.hensachi > filters.hensachiMax) return;
      if (filters.categories.length && !filters.categories.includes(faculty.category))       return;
      const facultyHasAO = faculty.hasAO !== undefined ? faculty.hasAO : school.hasAO;
      if (filters.hasAO && !facultyHasAO) return;
      if (filters.aoMethods.length) {
        if (!facultyHasAO) return;
        const methods = getAOMethods(school, faculty);
        if (!filters.aoMethods.some(m => methods.includes(m))) return;
      }
      results.push({ school, faculty, facultyHasAO });
    });
  });

  const sortVal = document.getElementById('sort-select').value;
  if      (sortVal === 'hensachi-desc') results.sort((a, b) => b.faculty.hensachi - a.faculty.hensachi);
  else if (sortVal === 'hensachi-asc')  results.sort((a, b) => a.faculty.hensachi - b.faculty.hensachi);
  else if (sortVal === 'name')          results.sort((a, b) => a.school.name.localeCompare(b.school.name, 'ja'));

  currentResults = results;
  renderFaculties(results);
  updateCount(results.length);
  updateActiveTags();
}

function renderFaculties(results) {
  const grid = document.getElementById('school-grid');

  if (results.length === 0) {
    grid.innerHTML = `
      <div class="empty-state">
        <p>条件に合う学部が見つかりませんでした</p>
        <small>絞り込み条件を変えてみてください</small>
      </div>`;
    return;
  }

  grid.innerHTML = results.map(({ school: s, faculty: f, facultyHasAO }) => {
    const typeClass = s.type === '国公立' ? 'kokuritu' : 'shiritsu';
    const hasGeneral = s.hasGeneral !== false;
    const admissionBadges = [
      s.mathOptional      ? '<span class="badge badge-math">数学なしOK</span>'   : '',
      s.englishEmphasis   ? '<span class="badge badge-english">英語重視</span>'  : '',
      hasGeneral          ? '<span class="badge badge-general">一般入試</span>'  : '',
      facultyHasAO        ? '<span class="badge badge-ao">AO入試</span>'         : '',
      s.hasRecommendation ? '<span class="badge badge-suisen">推薦入試</span>'   : ''
    ].filter(Boolean).join('');
    const noBadge = admissionBadges ? '' : '<span class="badge badge-none">一般入試のみ</span>';

    return `
      <div class="school-card">
        <div class="card-top">
          <div class="card-name-group">
            <span class="faculty-name">${escHtml(f.name)}</span>
            <span class="university-name">${escHtml(s.name)}</span>
          </div>
          <span class="type-badge ${typeClass}">${escHtml(s.type)}</span>
        </div>
        <div class="card-meta">
          <span class="meta-location">${escHtml(s.prefecture)}（${escHtml(s.region)}）</span>
          <span class="group-badge">${escHtml(s.group)}</span>
          <span class="meta-hensachi">
            <span class="meta-hensachi-label">偏差値</span>
            <span class="meta-hensachi-value">${f.hensachi}</span>
          </span>
        </div>
        <div class="admission-badges">${admissionBadges || noBadge}</div>
        <div class="card-footer">
          <div class="card-categories">
            <span class="cat-tag">${escHtml(f.category)}</span>
          </div>
          <button class="detail-btn" data-school-id="${s.id}" data-faculty-name="${escHtml(f.name)}">詳細を見る</button>
        </div>
      </div>`;
  }).join('');
}

function openModal(schoolId, facultyName) {
  const item = currentResults.find(r => r.school.id === schoolId && r.faculty.name === facultyName);
  if (!item) return;
  const { school, faculty, facultyHasAO } = item;
  const subjects = getGeneralSubjects(faculty, school);
  const aoMethods = facultyHasAO ? getAOMethods(school, faculty) : null;
  const details = FACULTY_DETAILS[`${school.id}_${faculty.name}`] || null;

  const subjectHTML = subjects.map(subj => `<span class="subject-tag">${escHtml(subj)}</span>`).join('');
  const aoHTML = aoMethods ? aoMethods.map(m => `<span class="ao-method-tag">${escHtml(m)}</span>`).join('') : '';

  let aoDetailHTML = '';
  if (facultyHasAO && details) {
    const langHTML = details.aoInterviewLang
      ? `<div class="ao-detail-row"><span class="ao-detail-label">面接言語</span><span class="ao-detail-value">${escHtml(details.aoInterviewLang)}</span></div>`
      : '';
    const engHTML = details.aoEnglishReqs && details.aoEnglishReqs.length > 0
      ? `<div class="ao-detail-row"><span class="ao-detail-label">英語資格条件</span><ul class="ao-eng-req-list">${details.aoEnglishReqs.map(r => `<li>${escHtml(r)}</li>`).join('')}</ul></div>`
      : '';
    const notesHTML = details.aoNotes
      ? `<div class="ao-detail-notes">${escHtml(details.aoNotes)}</div>`
      : '';
    if (langHTML || engHTML || notesHTML) {
      aoDetailHTML = `<div class="ao-detail-block">${langHTML}${engHTML}${notesHTML}</div>`;
    }
  }

  document.getElementById('modal-content').innerHTML = `
    <div class="modal-header">
      <div class="modal-name-group">
        <span class="modal-faculty-name">${escHtml(faculty.name)}</span>
        <span class="modal-univ-name">${escHtml(school.name)}</span>
      </div>
      <span class="modal-hensachi">偏差値 <strong>${faculty.hensachi}</strong></span>
    </div>
    <div class="modal-section">
      <h4 class="modal-section-title">一般入試の科目目安</h4>
      <div class="subject-tags">${subjectHTML}</div>
      <p class="modal-note">※実際の科目・配点は各大学の募集要項でご確認ください</p>
    </div>
    ${facultyHasAO ? `
    <div class="modal-section">
      <h4 class="modal-section-title">AO入試（総合型選抜）の選考内容</h4>
      <div class="ao-method-tags">${aoHTML}</div>
      ${aoDetailHTML}
      <p class="modal-note">※詳細・日程は各大学の募集要項でご確認ください</p>
    </div>
    ` : `
    <div class="modal-section">
      <h4 class="modal-section-title">AO入試（総合型選抜）</h4>
      <p class="modal-note">この学部ではAO入試は行っていません</p>
    </div>
    `}
  `;

  document.getElementById('detail-modal').classList.add('open');
}

function closeModal() {
  document.getElementById('detail-modal').classList.remove('open');
}

function updateCount(n) {
  document.getElementById('result-count').innerHTML =
    `<strong>${n}</strong> 件の学部が見つかりました`;
}

function updateActiveTags() {
  const container = document.getElementById('active-filters');
  const tags = [];

  filters.types.forEach(v      => tags.push({ label: v,             type: 'type',     val: v }));
  filters.regions.forEach(v    => tags.push({ label: v,             type: 'region',   val: v }));
  filters.categories.forEach(v => tags.push({ label: v,             type: 'category', val: v }));
  if (filters.maxRank < 99) {
    const lv = DIFFICULTY_LEVELS.find(l => l.value === filters.maxRank);
    if (lv) tags.push({ label: lv.label, type: 'level', val: '' });
  }
  if (filters.hensachiMin > 35 || filters.hensachiMax < 80)
    tags.push({ label: `偏差値 ${filters.hensachiMin}〜${filters.hensachiMax}`, type: 'hensachi', val: '' });
  if (filters.noMath)        tags.push({ label: '数学なしOK',   type: 'math',    val: '' });
  if (filters.englishStrong) tags.push({ label: '英語重視',     type: 'english', val: '' });
  if (filters.hasGeneral)    tags.push({ label: '一般入試あり', type: 'general', val: '' });
  if (filters.hasAO)         tags.push({ label: 'AO入試あり',  type: 'ao',      val: '' });
  if (filters.hasSuisen)     tags.push({ label: '推薦入試あり', type: 'suisen',  val: '' });
  filters.aoMethods.forEach(v => tags.push({ label: `AO:${v}あり`, type: 'aomethod', val: v }));

  container.innerHTML = '';
  tags.forEach(tag => {
    const span = document.createElement('span');
    span.className = 'filter-tag';
    span.textContent = tag.label + ' ';

    const btn = document.createElement('button');
    btn.className = 'filter-tag-remove';
    btn.textContent = '×';
    btn.setAttribute('aria-label', tag.label + ' を解除');
    btn.addEventListener('click', () => removeFilter(tag.type, tag.val));
    span.appendChild(btn);
    container.appendChild(span);
  });
}

function removeFilter(type, val) {
  if (type === 'type') {
    filters.types = filters.types.filter(v => v !== val);
    const el = document.querySelector(`input[name="type"][value="${val}"]`);
    if (el) el.checked = false;
  } else if (type === 'region') {
    filters.regions = filters.regions.filter(v => v !== val);
    document.querySelectorAll('input[name="region"]').forEach(cb => {
      if (cb.value === val) cb.checked = false;
    });
  } else if (type === 'category') {
    filters.categories = filters.categories.filter(v => v !== val);
    document.querySelectorAll('input[name="category"]').forEach(cb => {
      if (cb.value === val) cb.checked = false;
    });
  } else if (type === 'level') {
    filters.maxRank = 99;
    document.getElementById('level-select').value = 99;
  } else if (type === 'hensachi') {
    filters.hensachiMin = 35; filters.hensachiMax = 80;
    document.getElementById('hensachi-min').value = 35;
    document.getElementById('hensachi-max').value = 80;
    document.getElementById('hensachi-min-label').textContent = '35';
    document.getElementById('hensachi-max-label').textContent = '80';
  } else if (type === 'math') {
    filters.noMath = false;
    document.getElementById('filter-math').checked = false;
  } else if (type === 'english') {
    filters.englishStrong = false;
    document.getElementById('filter-english').checked = false;
  } else if (type === 'general') {
    filters.hasGeneral = false;
    document.getElementById('filter-general').checked = false;
  } else if (type === 'ao') {
    filters.hasAO = false;
    document.getElementById('filter-ao').checked = false;
  } else if (type === 'suisen') {
    filters.hasSuisen = false;
    document.getElementById('filter-suisen').checked = false;
  } else if (type === 'aomethod') {
    filters.aoMethods = filters.aoMethods.filter(v => v !== val);
    document.querySelectorAll('input[name="ao-method"]').forEach(cb => {
      if (cb.value === val) cb.checked = false;
    });
  }
  applyFilters();
}

function escHtml(str) {
  return str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

document.addEventListener('DOMContentLoaded', () => {
  initFilters();
  applyFilters();

  const modal = document.getElementById('detail-modal');
  document.getElementById('modal-close').addEventListener('click', closeModal);
  modal.addEventListener('click', e => { if (e.target === modal) closeModal(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

  document.getElementById('school-grid').addEventListener('click', e => {
    const btn = e.target.closest('.detail-btn');
    if (!btn) return;
    openModal(parseInt(btn.dataset.schoolId), btn.dataset.facultyName);
  });
});
