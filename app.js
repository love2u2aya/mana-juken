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

// Per-faculty exam methods data — key: '${schoolId}_${facultyName}'
// Each method: { name, category, subjects?, englishReqs?, selectionMethods?, interviewLang?, notes? }
// category: 'general' | 'english-ext' | 'csat-combined' | 'csat-only' | 'ao' | 'recommendation' | 'other'
const EXAM_METHODS_DATA = {
  // ===== 慶應義塾大学 (id:19) =====
  '19_法学部': [
    { name: '一般選抜', category: 'general' },
    { name: 'FIT入試 A方式', category: 'ao', selectionMethods: ['学力試験', '面接', '書類審査'],
      notes: '学業以外の活動・探究経験等を重視。浪人生も受験可。' },
    { name: 'FIT入試 B方式', category: 'recommendation',
      notes: '評定平均4.0以上・現役生対象。合格者はすでに活動・成績で評価されているため推薦者不要。' },
  ],
  '19_文学部': [
    { name: '一般選抜', category: 'general' },
    { name: '一般選抜（英語外部試験利用）', category: 'english-ext',
      englishReqs: ['英検CSEスコア: 2500以上', 'IELTS: 可（スコア換算）', 'TEAP（4技能）: 可（スコア換算）'],
      notes: '英語外部試験スコアで当日英語試験を代替。スコアは取得後2年以内のものが有効。' },
    { name: '自主応募制推薦（学校推薦型選抜）', category: 'recommendation',
      notes: '評定平均4.1以上・現役生のみ。総合考査I（小論文＋外国語作文力）＋総合考査II。' },
  ],
  '19_経済学部': [
    { name: '一般選抜 A方式（数学型）', category: 'general', subjects: ['英語', '数学'] },
    { name: '一般選抜 B方式（地歴型）', category: 'general', subjects: ['英語', '地理歴史'] },
  ],
  '19_商学部': [
    { name: '一般選抜 A方式', category: 'general', subjects: ['英語', '地理歴史', '数学'] },
    { name: '一般選抜 B方式', category: 'general', subjects: ['英語', '地理歴史', '論文テスト'] },
  ],
  '19_理工学部': [
    { name: '一般選抜', category: 'general' },
    { name: '分野志向型入試（総合型選抜）', category: 'ao', selectionMethods: ['面接', '書類審査'],
      notes: '電気情報工学科・数理科学科・化学科の3学科のみ対象。1年次から学科所属（学門制非適用）。' },
  ],
  '19_医学部': [
    { name: '一般選抜', category: 'general' },
  ],
  '19_総合政策学部': [
    { name: '一般選抜', category: 'general', subjects: ['小論文', '外国語または数学（選択）'] },
    { name: 'AO入試', category: 'ao', selectionMethods: ['面接', '書類審査'],
      notes: '夏・秋入試あり。4月入学・9月入学を選択可。推薦者不要の公募制。' },
  ],
  // ===== 早稲田大学 (id:20) =====
  '20_法学部': [
    { name: '一般選抜', category: 'general' },
    { name: '英語4技能テスト利用方式', category: 'english-ext',
      englishReqs: ['英検CSEスコア: 2200以上（各技能500以上）', 'TOEFL iBT: 60点以上（各技能14点以上）', 'IELTS: 6.0以上（各技能5.0以上）', 'TEAP: 280点以上（各技能65点以上）'],
      notes: '英語試験免除。国語・地歴/数学の2科目で合否判定。' },
    { name: '共通テスト利用方式', category: 'csat-only', notes: '5教科6〜7科目。' },
    { name: '地域探究・貢献入試', category: 'ao', selectionMethods: ['小論文', '書類審査'],
      notes: '面接なし。第3次選考に共通テスト240/300点以上が必要。' },
  ],
  '20_文学部': [
    { name: '一般選抜', category: 'general' },
    { name: '英語4技能テスト利用方式', category: 'english-ext',
      englishReqs: ['英検CSEスコア: 2200以上（各技能500以上）', 'TOEFL iBT: 60点以上（各技能14点以上）', 'IELTS: 6.0以上（各技能5.0以上）', 'TEAP: 280点以上（各技能65点以上）'],
      notes: '英語試験免除。国語・地歴の2科目で合否判定。文化構想学部と同時出願可。' },
    { name: '地域探究・貢献入試', category: 'ao', selectionMethods: ['小論文', '書類審査'],
      notes: '面接なし。第3次選考に共通テスト240/300点以上が必要。' },
  ],
  '20_文化構想学部': [
    { name: '一般選抜', category: 'general' },
    { name: '英語4技能テスト利用方式', category: 'english-ext',
      englishReqs: ['英検CSEスコア: 2200以上（各技能500以上）', 'TOEFL iBT: 60点以上（各技能14点以上）', 'IELTS: 6.0以上（各技能5.0以上）', 'TEAP: 280点以上（各技能65点以上）'],
      notes: '英語試験免除。国語・地歴の2科目で合否判定。文学部と同時出願可。' },
    { name: '共通テスト利用方式', category: 'csat-only' },
    { name: '地域探究・貢献入試', category: 'ao', selectionMethods: ['小論文', '書類審査'],
      notes: '面接なし。第3次選考に共通テスト240/300点以上が必要。' },
    { name: 'JCulPコース AO入試', category: 'ao', selectionMethods: ['面接', '書類審査'],
      interviewLang: '英語',
      englishReqs: ['TEAP: 309点以上', 'IELTS: 5.5以上', '英検CSEスコア: 2300以上', 'TOEFL iBT: 72点以上'] },
  ],
  '20_政治経済学部': [
    { name: '一般選抜（共通テスト＋独自試験）', category: 'csat-combined',
      notes: '共通テスト3〜4科目（数IA必須）＋独自「総合問題」（日英両言語長文・記述、120分）。' },
    { name: '共通テスト単独利用方式', category: 'csat-only' },
  ],
  '20_商学部': [
    { name: '一般選抜', category: 'general' },
    { name: '共通テスト利用方式', category: 'csat-only' },
  ],
  '20_教育学部': [
    { name: '一般選抜 A方式', category: 'general', subjects: ['英語', '国語', '地歴'] },
    { name: '一般選抜 B方式', category: 'general', subjects: ['英語', '数学', '理科'] },
    { name: '共通テスト併用方式（C方式）', category: 'csat-combined',
      notes: '共通テスト6教科8科目（2026年度より情報Ⅰ追加）＋独自個別試験。国公立大志望者向け。' },
    { name: '地域探究・貢献入試', category: 'ao', selectionMethods: ['小論文', '書類審査'],
      notes: '面接なし。第3次選考に共通テスト240/300点以上が必要。' },
  ],
  '20_国際教養学部': [
    { name: '一般選抜（共通テスト必須）', category: 'csat-combined',
      notes: '共通テスト2科目＋独自英語試験＋英語資格加点（英検準1級=14点、1級=20点等）。英語資格は加点のみ（必須ではない）。' },
    { name: 'AO入試', category: 'ao', selectionMethods: ['学力試験', '書類審査'],
      englishReqs: ['TOEFL iBT: 任意提出（目安100点以上）', 'IELTS: 任意提出（目安7.0以上）', '英検・GTEC: 任意提出'],
      notes: '2026年度は面接なし。Critical Writingテスト（英語エッセイ）が中心。英語資格スコアの提出が必要。' },
  ],
  '20_理工学部': [
    { name: '一般選抜', category: 'general' },
    { name: '指定校推薦', category: 'recommendation' },
    { name: '特別選抜入学試験（オリンピック等）', category: 'ao',
      notes: '数学・物理・化学オリンピック等指定大会成績保有者。創造理工建築学科は別途「早稲田建築AO（創成入試）」あり。' },
  ],
  // ===== 明治大学 (id:22) — AO方式名を正式名に =====
  '22_政治経済学部': [
    { name: '一般選抜（学部別）', category: 'general' },
    { name: '全学部統一入試', category: 'general' },
    { name: '共通テスト利用方式', category: 'csat-only' },
    { name: '総合型選抜グローバル型', category: 'ao', selectionMethods: ['学力試験', '面接', '書類審査'],
      englishReqs: ['英検: 準1級以上', 'TOEFL iBT: 68点以上', 'IELTS: 6.0以上', 'TEAP: 285点以上', 'TOEIC L&R: 950点以上'] },
    { name: '学校推薦型選抜', category: 'recommendation' },
  ],
  '22_文学部': [
    { name: '一般選抜（学部別）', category: 'general' },
    { name: '全学部統一入試', category: 'general' },
    { name: '共通テスト利用方式', category: 'csat-only' },
    { name: '自己推薦特別入学試験', category: 'ao', selectionMethods: ['小論文', '面接', '書類審査'],
      notes: '評定平均3.5以上が出願条件。英語資格不要。' },
    { name: '学校推薦型選抜', category: 'recommendation' },
  ],
  '22_商学部': [
    { name: '一般選抜（学部別）', category: 'general' },
    { name: '全学部統一入試', category: 'general' },
    { name: '共通テスト利用方式', category: 'csat-only' },
    { name: '公募制特別入試（総合型選抜）', category: 'ao', selectionMethods: ['学力試験', '面接', '書類審査'],
      notes: '共通テスト利用。簿記2級またはTOEICなどの資格か海外留学経験が出願条件の一つ。' },
    { name: '学校推薦型選抜', category: 'recommendation' },
  ],
  '22_理工学部': [
    { name: '一般選抜（学部別）', category: 'general' },
    { name: '全学部統一入試', category: 'general' },
    { name: '共通テスト利用方式', category: 'csat-only' },
    { name: '自己推薦特別入試', category: 'ao', selectionMethods: ['実技', '面接', '書類審査'],
      notes: '評定平均3.8以上。口頭試問＋プレゼン形式。英語資格不要。' },
    { name: '学校推薦型選抜', category: 'recommendation' },
  ],
  '22_国際日本学部': [
    { name: '一般選抜（学部別）', category: 'general' },
    { name: '全学部統一入試', category: 'general' },
    { name: '共通テスト利用方式', category: 'csat-only' },
    { name: '自己推薦特別入試', category: 'ao', selectionMethods: ['小論文', '面接', '書類審査'],
      englishReqs: ['英検: 準1級以上', 'TOEFL iBT: 72点以上', 'IELTS: 5.5以上', 'TEAP: 309点以上', 'TOEIC L&R+S&W: 785＋310点以上'] },
    { name: '学校推薦型選抜', category: 'recommendation' },
  ],
  '22_総合数理学部': [
    { name: '一般選抜（学部別）', category: 'general' },
    { name: '全学部統一入試', category: 'general' },
    { name: '共通テスト利用方式', category: 'csat-only' },
    { name: '自己推薦特別入試', category: 'ao', selectionMethods: ['学力試験', '面接', '書類審査'],
      notes: '数学または情報系のプレゼンテーション＋口頭試問。英語資格不要。' },
    { name: '学校推薦型選抜', category: 'recommendation' },
  ],
  // ===== 青山学院大学 (id:23) =====
  '23_文学部': [
    { name: '一般選抜（学部別）', category: 'general' },
    { name: '全学部統一入試', category: 'general' },
    { name: '共通テスト利用方式', category: 'csat-only' },
    { name: '自己推薦入試', category: 'ao', selectionMethods: ['面接', '書類審査'],
      notes: '英米文学科は英語資格必須＋英語面接あり。史学科・比較芸術学科は英語資格不要・日本語面接。' },
    { name: '学校推薦型選抜', category: 'recommendation' },
  ],
  '23_地球社会共生学部': [
    { name: '一般選抜（学部別）', category: 'general' },
    { name: '全学部統一入試', category: 'general' },
    { name: '共通テスト利用方式', category: 'csat-only' },
    { name: '自己推薦入試', category: 'ao', selectionMethods: ['面接', '書類審査'],
      notes: '区分A〜Gに分かれ、英語スコア基準が異なる。区分Aは英検準1級相当以上、区分B〜Gは英検2級相当以上。' },
    { name: '学校推薦型選抜', category: 'recommendation' },
  ],
  '23_コミュニティ人間科学部': [
    { name: '一般選抜（学部別）', category: 'general' },
    { name: '全学部統一入試', category: 'general' },
    { name: '共通テスト利用方式', category: 'csat-only' },
    { name: '自己推薦入試', category: 'ao', selectionMethods: ['面接', '書類審査'],
      notes: '英語資格不要。地域・社会活動経験やボランティア実績が重視される。' },
    { name: '学校推薦型選抜', category: 'recommendation' },
  ],
  '23_理工学部': [
    { name: '一般選抜（学部別）', category: 'general' },
    { name: '全学部統一入試', category: 'general' },
    { name: '共通テスト利用方式', category: 'csat-only' },
    { name: '理工系女子特別入学者選抜', category: 'ao', selectionMethods: ['学力試験', '面接', '書類審査'],
      englishReqs: ['英検CSEスコア: 1980以上', 'TOEFL iBT: 42点以上', 'IELTS: 4.0以上', 'TEAP: 225点以上', 'TOEIC L&R+S&W: 550＋240点以上'],
      notes: '女子のみ対象（2026年度新設）。基礎学力調査（数学・理科）＋面接。' },
    { name: '学校推薦型選抜', category: 'recommendation' },
  ],
  // ===== 立教大学 (id:24) — 自由選抜入試（全12学部）=====
  '24_法学部': [
    { name: '一般選抜（学部別）', category: 'general' },
    { name: '全学部統一入試', category: 'general' },
    { name: '共通テスト利用方式', category: 'csat-only' },
    { name: '自由選抜入試', category: 'ao', selectionMethods: ['面接', '書類審査'],
      notes: '英語資格スコア提出必須（下限基準なし）。' },
    { name: '学校推薦型選抜', category: 'recommendation' },
  ],
  '24_経済学部': [
    { name: '一般選抜（学部別）', category: 'general' },
    { name: '全学部統一入試', category: 'general' },
    { name: '共通テスト利用方式', category: 'csat-only' },
    { name: '自由選抜入試', category: 'ao', selectionMethods: ['学力試験', '面接', '書類審査'],
      englishReqs: ['TOEFL iBT: 42点以上', 'IELTS: 4.0以上', '英検CSEスコア: 1950以上', 'TEAP: 225点以上', 'GTEC: 930点以上', 'TOEIC: 1150点以上'],
      notes: '第2次選考は90分の総合科目試験＋面接。' },
    { name: '学校推薦型選抜', category: 'recommendation' },
  ],
  '24_経営学部': [
    { name: '一般選抜（学部別）', category: 'general' },
    { name: '全学部統一入試', category: 'general' },
    { name: '共通テスト利用方式', category: 'csat-only' },
    { name: '自由選抜入試', category: 'ao', selectionMethods: ['面接', '書類審査'],
      notes: '資格型I（英検CSE 1700以上）と国際経営学科（英検CSE 2300以上）で基準が異なる。' },
    { name: '学校推薦型選抜', category: 'recommendation' },
  ],
  '24_文学部': [
    { name: '一般選抜（学部別）', category: 'general' },
    { name: '全学部統一入試', category: 'general' },
    { name: '共通テスト利用方式', category: 'csat-only' },
    { name: '自由選抜入試', category: 'ao', selectionMethods: ['小論文', '面接', '書類審査'],
      notes: '英米文学専修はTOEFL 72/IELTS 5.5/英検CSE 2300以上。他専修はスコア提出必須（下限なし）。' },
    { name: '学校推薦型選抜', category: 'recommendation' },
  ],
  '24_異文化コミュニケーション学部': [
    { name: '一般選抜（学部別）', category: 'general' },
    { name: '全学部統一入試', category: 'general' },
    { name: '共通テスト利用方式', category: 'csat-only' },
    { name: '自由選抜入試', category: 'ao', selectionMethods: ['面接', '書類審査'],
      interviewLang: '日本語および英語',
      englishReqs: ['TOEFL iBT: 72点以上', 'IELTS: 5.5以上', '英検CSEスコア: 2300以上', 'TEAP: 309点以上'] },
    { name: '学校推薦型選抜', category: 'recommendation' },
  ],
  '24_理学部': [
    { name: '一般選抜（学部別）', category: 'general' },
    { name: '全学部統一入試', category: 'general' },
    { name: '共通テスト利用方式', category: 'csat-only' },
    { name: '自由選抜入試', category: 'ao', selectionMethods: ['小論文', '面接', '書類審査'],
      englishReqs: ['TOEFL iBT: 57点以上', 'IELTS: 4.5以上', '英検CSEスコア: 1950以上', 'TEAP: 267点以上', 'GTEC: 930点以上'] },
    { name: '学校推薦型選抜', category: 'recommendation' },
  ],
  '24_社会学部': [
    { name: '一般選抜（学部別）', category: 'general' },
    { name: '全学部統一入試', category: 'general' },
    { name: '共通テスト利用方式', category: 'csat-only' },
    { name: '自由選抜入試', category: 'ao', selectionMethods: ['小論文', '面接', '書類審査'],
      englishReqs: ['TOEFL iBT: 42点以上', 'IELTS: 4.0以上', '英検CSEスコア: 1950以上', 'TEAP: 225点以上'],
      notes: '自由研究レポートの提出＋小論文＋面接。' },
    { name: '学校推薦型選抜', category: 'recommendation' },
  ],
  '24_観光学部': [
    { name: '一般選抜（学部別）', category: 'general' },
    { name: '全学部統一入試', category: 'general' },
    { name: '共通テスト利用方式', category: 'csat-only' },
    { name: '自由選抜入試', category: 'ao', selectionMethods: ['小論文', '面接', '書類審査'],
      englishReqs: ['TOEFL iBT: 42点以上', 'IELTS: 4.0以上', '英検CSEスコア: 1950以上', 'TEAP: 225点以上', 'TOEIC: 1560点以上'] },
    { name: '学校推薦型選抜', category: 'recommendation' },
  ],
  '24_コミュニティ福祉学部': [
    { name: '一般選抜（学部別）', category: 'general' },
    { name: '全学部統一入試', category: 'general' },
    { name: '共通テスト利用方式', category: 'csat-only' },
    { name: '自由選抜入試（資格型III）', category: 'ao', selectionMethods: ['面接', '書類審査'],
      englishReqs: ['TOEFL iBT: 80点以上', 'IELTS: 6.0以上', '英検CSEスコア: 2400以上', 'TEAP: 332点以上', 'TOEIC: 1660点以上'] },
    { name: '学校推薦型選抜', category: 'recommendation' },
  ],
  '24_現代心理学部': [
    { name: '一般選抜（学部別）', category: 'general' },
    { name: '全学部統一入試', category: 'general' },
    { name: '共通テスト利用方式', category: 'csat-only' },
    { name: '自由選抜入試（資格型V）', category: 'ao', selectionMethods: ['小論文', '面接', '書類審査'],
      englishReqs: ['TOEFL iBT: 72点以上', 'IELTS: 5.5以上', '英検CSEスコア: 2300以上', 'TEAP: 309点以上', 'GTEC: 1180点以上'] },
    { name: '学校推薦型選抜', category: 'recommendation' },
  ],
  '24_スポーツウエルネス学部': [
    { name: '一般選抜（学部別）', category: 'general' },
    { name: '全学部統一入試', category: 'general' },
    { name: '共通テスト利用方式', category: 'csat-only' },
    { name: '自由選抜入試', category: 'ao', selectionMethods: ['面接', '書類審査'],
      englishReqs: ['TOEFL iBT: 57点以上', 'IELTS: 4.5以上', '英検CSEスコア: 2125以上', 'TEAP: 267点以上', 'GTEC: 1065点以上'] },
    { name: '学校推薦型選抜', category: 'recommendation' },
  ],
  '24_環境学部': [
    { name: '一般選抜（学部別）', category: 'general' },
    { name: '全学部統一入試', category: 'general' },
    { name: '共通テスト利用方式', category: 'csat-only' },
    { name: '自由選抜入試', category: 'ao', selectionMethods: ['面接', '書類審査'],
      englishReqs: ['英検CSEスコア: 2067以上（目安）'] },
    { name: '学校推薦型選抜', category: 'recommendation' },
  ],
  // ===== 中央大学 (id:25) =====
  '25_法学部': [
    { name: '一般選抜（学部別）', category: 'general' },
    { name: '英語外部試験利用方式（フレックス・プラス英語コース）', category: 'english-ext',
      englishReqs: ['英検: 1級以上', 'TOEFL iBT: 80点以上', 'IELTS: 6.0以上', 'TEAP: 300点以上', 'TOEIC L&R: 785点以上'],
      notes: '英語の独自試験が免除。一部英語での口頭試問あり。' },
    { name: '共通テスト利用方式', category: 'csat-only' },
    { name: '自己推薦入試（総合型選抜）', category: 'ao', selectionMethods: ['面接', '書類審査'] },
    { name: '学校推薦型選抜', category: 'recommendation' },
  ],
  '25_経済学部': [
    { name: '一般選抜（学部別）', category: 'general' },
    { name: '全学部統一入試', category: 'general' },
    { name: '共通テスト利用方式', category: 'csat-only' },
    { name: '英語運用能力特別入試（総合型選抜）', category: 'ao', selectionMethods: ['小論文', '面接', '書類審査'],
      englishReqs: ['英検CSEスコア: 2200以上', 'TOEFL iBT: 61点以上', 'IELTS: 5.0以上', 'TEAP: 280点以上', 'TOEIC L&R+S&W: 940点以上', 'GTEC: 1050点以上'] },
    { name: '学校推薦型選抜', category: 'recommendation' },
  ],
  '25_文学部': [
    { name: '一般選抜（学部別）', category: 'general' },
    { name: '全学部統一入試', category: 'general' },
    { name: '共通テスト利用方式', category: 'csat-only' },
    { name: '自己推薦入試（外国語型）', category: 'ao', selectionMethods: ['小論文', '面接', '書類審査'],
      englishReqs: ['英検: 準1級以上', 'TOEFL iBT: 57点以上', 'IELTS: 4.5以上', 'TEAP: 270点以上', 'TOEIC: 1410点以上', 'GTEC: 1050点以上'],
      notes: '外国語型（英語資格必須）と専攻適性型（英語資格不要）の2種類あり。' },
    { name: '学校推薦型選抜', category: 'recommendation' },
  ],
  '25_商学部': [
    { name: '一般選抜（学部別）', category: 'general' },
    { name: '全学部統一入試', category: 'general' },
    { name: '共通テスト利用方式', category: 'csat-only' },
    { name: '英語運用能力特別入試（総合型選抜）', category: 'ao', selectionMethods: ['小論文', '面接', '書類審査'],
      englishReqs: ['英検: 準1級以上', 'TOEFL iBT: 68点以上', 'IELTS: 6.0以上', 'TEAP: 280点以上', 'TOEIC: 940点以上', 'GTEC: 1180点以上'],
      notes: '評定平均4.0以上が出願条件。英語筆記試験あり。' },
    { name: '学校推薦型選抜', category: 'recommendation' },
  ],
  '25_理工学部': [
    { name: '一般選抜（学部別）', category: 'general' },
    { name: '全学部統一入試', category: 'general' },
    { name: '共通テスト利用方式', category: 'csat-only' },
    { name: '自己推薦入試（総合型選抜）', category: 'ao', selectionMethods: ['学力試験', '面接', '書類審査'],
      notes: '2026年4月より基幹・社会・先進理工学部の3学部に再編。英語資格不要。学科別課題（数学・理科）＋面接。' },
    { name: '学校推薦型選抜', category: 'recommendation' },
  ],
  '25_国際経営学部': [
    { name: '一般選抜（学部別）', category: 'general' },
    { name: '英語外部試験利用方式（GLSP）', category: 'english-ext',
      englishReqs: ['英検CSEスコア: 2304以上', 'TOEFL iBT: 72点以上', 'IELTS: 5.5以上', 'TOEIC L&R+S&W: 785＋310点以上'],
      notes: '英語の独自試験が免除。スコアを出願資格として利用。' },
    { name: '共通テスト併用方式', category: 'csat-combined' },
    { name: '共通テスト利用方式（4教科型）', category: 'csat-only' },
    { name: '共通テスト利用方式（3教科型）', category: 'csat-only' },
    { name: '自己推薦入学試験（総合型選抜）', category: 'ao', selectionMethods: ['小論文', '面接', '書類審査'],
      interviewLang: '英語および日本語',
      englishReqs: ['英検CSEスコア: 2304以上', 'TOEFL iBT: 72点以上', 'IELTS: 5.5以上', 'TOEIC L&R+S&W: 785＋310点以上'],
      notes: '評定平均3.8以上。英語・日本語両方での面接。' },
    { name: '学校推薦型選抜', category: 'recommendation' },
  ],
  '25_国際情報学部': [
    { name: '一般選抜（学部別）', category: 'general' },
    { name: '全学部統一入試', category: 'general' },
    { name: '共通テスト利用方式', category: 'csat-only' },
    { name: '学校推薦型選抜', category: 'recommendation' },
  ],
  // ===== 法政大学 (id:26) =====
  '26_国際文化学部': [
    { name: '一般選抜（学部別）', category: 'general' },
    { name: '全学部統一入試', category: 'general' },
    { name: '共通テスト利用方式', category: 'csat-only' },
    { name: 'Self-Assessment試験（S基準・英語外部試験利用）', category: 'english-ext',
      englishReqs: ['TOEFL iBT: 90点以上', 'IELTS: 7.0以上'],
      notes: 'GIS（グローバル教養学院）。英語での面接・プレゼン。高い英語スコアが出願必須条件。' },
    { name: '総合型選抜 GIS AO（A基準）', category: 'ao', selectionMethods: ['面接', '書類審査'],
      interviewLang: '英語',
      notes: 'A基準はスコアの最低基準なし。英語での面接・プレゼン。' },
    { name: '学校推薦型選抜', category: 'recommendation' },
  ],
  '26_情報科学部': [
    { name: '一般選抜（学部別）', category: 'general' },
    { name: '全学部統一入試', category: 'general' },
    { name: '共通テスト利用方式', category: 'csat-only' },
    { name: 'IT特別選抜（総合型選抜）', category: 'ao', selectionMethods: ['学力試験', '面接', '書類審査'],
      notes: '数学試験必須。英検2級/GTEC 1000点が望ましい（必須ではない）。' },
    { name: '学校推薦型選抜', category: 'recommendation' },
  ],
  // ===== 学習院大学 (id:32) =====
  '32_法学部': [
    { name: '一般選抜 コア試験', category: 'general' },
    { name: '一般選抜 プラス試験', category: 'general' },
    { name: '共通テスト利用方式', category: 'csat-only' },
    { name: '学校推薦型選抜（指定校・公募制）', category: 'recommendation' },
  ],
  '32_経済学部': [
    { name: '一般選抜 コア試験', category: 'general' },
    { name: '一般選抜 プラス試験', category: 'general' },
    { name: '共通テスト利用方式（4または6科目型）', category: 'csat-only' },
    { name: '学校推薦型選抜', category: 'recommendation' },
  ],
  '32_文学部': [
    { name: '一般選抜 コア試験', category: 'general' },
    { name: '一般選抜 プラス試験', category: 'general' },
    { name: '共通テスト利用方式', category: 'csat-only' },
    { name: '学校推薦型選抜', category: 'recommendation' },
  ],
  '32_理学部': [
    { name: '一般選抜 コア試験', category: 'general' },
    { name: '一般選抜 プラス試験（化学科・数学科・生命科学科：英語筆記あり）', category: 'general' },
    { name: '一般選抜 プラス試験（物理学科：英語外部試験利用）', category: 'english-ext',
      englishReqs: ['英検CSEスコア: 1800以上', 'TOEFL iBT: 32点以上', 'IELTS: 4.0以上', 'TEAP: 210点以上', 'TOEIC L&R+S&W: 500点以上', 'GTEC: 990点以上'],
      notes: '物理学科のみ。英語外部試験スコアが出願資格として必要（英語筆記なし）。数学・理科の2科目で審査。' },
    { name: '共通テスト利用方式', category: 'csat-only' },
    { name: '学校推薦型選抜（公募制）', category: 'recommendation' },
  ],
  '32_国際社会科学部': [
    { name: '一般選抜 コア試験', category: 'general' },
    { name: '一般選抜 プラス試験（英語スコア換算）', category: 'english-ext',
      englishReqs: ['英検CSE 2630（1級）→最高換算点', '英検CSE 2310（2級）→120点換算', 'TOEFL iBT 100点→最高換算', 'IELTS 7.0→最高換算', 'TEAP 390点→最高換算', 'GTEC 1370点→最高換算', 'TOEIC L&R+S&W 1300点→最高換算'],
      notes: '英語外部試験スコアを点数換算して採用（国語・地歴/数学の2科目で判定）。' },
    { name: '共通テスト利用方式（4科目型）', category: 'csat-only' },
    { name: '総合型選抜（AO）', category: 'ao', selectionMethods: ['小論文', '面接', '書類審査'],
      interviewLang: '英語',
      englishReqs: ['英検CSEスコア: 2304以上（準1級相当）', 'TOEFL iBT: 62点以上', 'IELTS: 5.5以上', 'TEAP: 310点以上', 'TEAP CBT: 550点以上', 'TOEIC L&R+S&W: 910点以上', 'GTEC: 1220点以上'] },
    { name: '学校推薦型選抜（公募制）', category: 'recommendation' },
  ],
  // ===== 成蹊大学 (id:40) =====
  '40_法学部': [
    { name: '一般選抜（A方式・3教科）', category: 'general' },
    { name: '全学部統一入試（E方式・英語外部試験換算可）', category: 'english-ext',
      englishReqs: ['英検CSEスコア: 2300以上で換算開始（2600で満点換算）', 'TOEFL iBT: 換算あり', 'TEAP（4技能）: 換算あり', 'TOEIC L&R: 換算あり', 'GTEC（4技能）: 換算あり', '※IELTSは利用不可'],
      notes: '英語外部試験スコアと当日英語試験の高い方を採用。英語外部試験スコアは任意。' },
    { name: '共通テスト利用方式（C方式）', category: 'csat-only' },
    { name: '共通テスト+独自試験（P方式）', category: 'csat-combined',
      notes: '共通テスト5科目＋独自試験1科目。国公立大との併願向け。' },
    { name: 'AOマルデス入試', category: 'ao', selectionMethods: ['面接', '書類審査'],
      notes: '英語スコア提出必須だが最低点の基準なし。資料読解＋グループ討論＋面接。' },
    { name: '指定校推薦', category: 'recommendation' },
  ],
  '40_経済学部': [
    { name: '一般選抜（A方式・3教科）', category: 'general' },
    { name: '全学部統一入試（E方式・英語外部試験換算可）', category: 'english-ext',
      englishReqs: ['英検CSEスコア: 2300以上で換算開始', 'TOEFL iBT: 換算あり', 'TEAP（4技能）: 換算あり', 'TOEIC L&R: 換算あり', 'GTEC（4技能）: 換算あり', '※IELTSは利用不可'] },
    { name: '共通テスト利用方式（C方式）', category: 'csat-only' },
    { name: '共通テスト+独自試験（P方式）', category: 'csat-combined',
      notes: '共通テスト5科目＋独自試験1科目。' },
    { name: 'AOマルデス入試', category: 'ao', selectionMethods: ['面接', '書類審査'],
      notes: '英語スコア提出必須。課題提出＋プレゼンテーション＋面接。' },
    { name: '指定校推薦', category: 'recommendation' },
  ],
  '40_文学部': [
    { name: '一般選抜（A方式・3教科）', category: 'general' },
    { name: '全学部統一入試（E方式・英語外部試験換算可）', category: 'english-ext',
      englishReqs: ['英検CSEスコア: 2300以上で換算開始', 'TOEFL iBT: 換算あり', 'TEAP（4技能）: 換算あり', 'TOEIC L&R: 換算あり', 'GTEC（4技能）: 換算あり', '※IELTSは利用不可'] },
    { name: '共通テスト利用方式（C方式）', category: 'csat-only' },
    { name: '共通テスト+独自試験（P方式）', category: 'csat-combined',
      notes: '共通テスト5科目＋独自試験1科目。' },
    { name: 'AOマルデス入試', category: 'ao', selectionMethods: ['小論文', '面接', '書類審査'],
      notes: '英語スコア提出必須（国際文化学科は英検2級/TOEFL 52/TOEIC 560の基準あり）。英米文学科は英語プレゼンあり。' },
    { name: '指定校推薦', category: 'recommendation' },
  ],
  '40_理工学部': [
    { name: '一般選抜（A方式・3教科）', category: 'general' },
    { name: '全学部統一入試（E方式・英語外部試験換算可）', category: 'english-ext',
      englishReqs: ['英検CSEスコア: 2300以上で換算開始', 'TOEFL iBT: 換算あり', 'TEAP（4技能）: 換算あり', 'TOEIC L&R: 換算あり', 'GTEC（4技能）: 換算あり', '※IELTSは利用不可'] },
    { name: '共通テスト利用方式（C方式）', category: 'csat-only' },
    { name: '共通テスト利用（S方式・4教科6科目・奨学金付）', category: 'csat-only',
      notes: '数学200点＋理科2科目400点＋地歴公民情報から1科目＋国語または英語200点。' },
    { name: 'AOマルデス入試', category: 'ao', selectionMethods: ['学力試験', '面接', '書類審査'],
      notes: '英語スコア提出必須（最低基準なし）。思考力審査（90分数学演習）＋面接。' },
    { name: '指定校推薦', category: 'recommendation' },
  ],
  '40_経営学部': [
    { name: '一般選抜（A方式・3教科）', category: 'general' },
    { name: '全学部統一入試（E方式・英語外部試験換算可）', category: 'english-ext',
      englishReqs: ['英検CSEスコア: 2300以上で換算開始', 'TOEFL iBT: 換算あり', 'TEAP（4技能）: 換算あり', 'TOEIC L&R: 換算あり', 'GTEC（4技能）: 換算あり', '※IELTSは利用不可'] },
    { name: '共通テスト利用方式（C方式）', category: 'csat-only' },
    { name: '共通テスト+独自試験（P方式）', category: 'csat-combined',
      notes: '共通テスト5科目＋独自試験1科目。' },
    { name: 'AOマルデス入試', category: 'ao', selectionMethods: ['面接', '書類審査'],
      notes: '英語スコア提出必須（最低基準なし）。課題提出＋グループ討論＋面接。' },
    { name: '指定校推薦', category: 'recommendation' },
  ],
  // ===== 法政大学 (id:26) — 残り5学部 =====
  '26_法学部': [
    { name: 'T日程（全学部統一入試・1月）', category: 'general' },
    { name: 'A方式（学部別一般：2月）', category: 'general' },
    { name: '英語外部試験利用入試（準1級グループ）', category: 'english-ext',
      englishReqs: ['英検CSEスコア: 2304以上（準1級相当）', 'TOEFL iBT: 72点以上', 'IELTS: 5.5以上', 'TEAP（4技能）: 309点以上', 'TEAP CBT: 600点以上'],
      notes: '英語の得点を外部試験スコアに置き換えて合否判定。国語・地歴/政経で審査。' },
    { name: '共通テスト利用方式（B方式・C方式）', category: 'csat-only' },
    { name: 'スポーツ推薦・各種AO（総合型選抜）', category: 'ao', selectionMethods: ['面接', '書類審査'] },
    { name: '学校推薦型選抜', category: 'recommendation' },
  ],
  '26_経営学部': [
    { name: 'T日程（全学部統一入試・1月）', category: 'general' },
    { name: 'A方式（学部別一般：2月）', category: 'general' },
    { name: '英語外部試験利用入試（2級グループ）', category: 'english-ext',
      englishReqs: ['英検CSEスコア: 1950以上（2級相当）', 'TOEFL iBT: 42点以上', 'IELTS: 4.0以上', 'TEAP（4技能）: 225点以上', 'TEAP CBT: 350点以上'],
      notes: '英語の得点を外部試験スコアに置き換えて合否判定。' },
    { name: '共通テスト利用方式（B方式・C方式）', category: 'csat-only' },
    { name: '総合型選抜（AO）', category: 'ao', selectionMethods: ['面接', '書類審査'] },
    { name: '学校推薦型選抜', category: 'recommendation' },
  ],
  '26_文学部': [
    { name: 'T日程（全学部統一入試・1月）', category: 'general' },
    { name: 'A方式（学部別一般：2月）', category: 'general' },
    { name: '英語外部試験利用入試（英文学科・現代文化学科は準1級、他学科は2級グループ）', category: 'english-ext',
      englishReqs: ['英検CSEスコア: 1950〜2304以上（学科により異なる）', 'TOEFL iBT: 42〜72点以上（学科により異なる）', 'IELTS: 4.0〜5.5以上（学科により異なる）', 'TEAP（4技能）: 225〜309点以上（学科により異なる）'],
      notes: '英文学科・現代文化学科は準1級グループ（CSE 2304以上）。哲学科等は2級グループ（CSE 1950以上）。' },
    { name: '共通テスト利用方式（B方式・C方式）', category: 'csat-only' },
    { name: '総合型選抜（AO）', category: 'ao', selectionMethods: ['小論文', '面接', '書類審査'] },
    { name: '学校推薦型選抜', category: 'recommendation' },
  ],
  '26_社会学部': [
    { name: 'T日程（全学部統一入試・1月）', category: 'general' },
    { name: 'A方式（学部別一般：2月）', category: 'general' },
    { name: '英語外部試験利用入試（2級グループ）', category: 'english-ext',
      englishReqs: ['英検CSEスコア: 1950以上（2級相当）', 'TOEFL iBT: 42点以上', 'IELTS: 4.0以上', 'TEAP（4技能）: 225点以上', 'TEAP CBT: 350点以上'] },
    { name: '共通テスト利用方式（B方式・C方式）', category: 'csat-only' },
    { name: '総合型選抜（AO）', category: 'ao', selectionMethods: ['面接', '書類審査'] },
    { name: '学校推薦型選抜', category: 'recommendation' },
  ],
  '26_理工学部': [
    { name: 'T日程（全学部統一入試・1月）', category: 'general' },
    { name: 'A方式（学部別一般：2月）', category: 'general' },
    { name: '英語外部試験利用入試（2級グループ）', category: 'english-ext',
      englishReqs: ['英検CSEスコア: 1950以上（2級相当）', 'TOEFL iBT: 42点以上', 'IELTS: 4.0以上', 'TEAP（4技能）: 225点以上', 'TEAP CBT: 350点以上'] },
    { name: '共通テスト利用方式（B方式・C方式）', category: 'csat-only' },
    { name: '総合型選抜（AO）', category: 'ao', selectionMethods: ['学力試験', '面接', '書類審査'],
      notes: '数学・理科の基礎学力審査＋面接。英語資格提出は任意。' },
    { name: '学校推薦型選抜', category: 'recommendation' },
  ],
  // ===== 明治大学 (id:22) — 残り4学部 =====
  '22_法学部': [
    { name: '一般選抜（学部別）', category: 'general' },
    { name: '全学部統一入試', category: 'general' },
    { name: '共通テスト利用方式', category: 'csat-only' },
    { name: '学校推薦型選抜', category: 'recommendation' },
  ],
  '22_経営学部': [
    { name: '一般選抜（学部別）', category: 'general' },
    { name: '全学部統一入試', category: 'general' },
    { name: '共通テスト利用方式', category: 'csat-only' },
    { name: '学校推薦型選抜', category: 'recommendation' },
  ],
  '22_農学部': [
    { name: '一般選抜（学部別）', category: 'general' },
    { name: '全学部統一入試', category: 'general' },
    { name: '共通テスト利用方式', category: 'csat-only' },
    { name: '農学部特別入試（総合型選抜）', category: 'ao', selectionMethods: ['学力試験', '面接', '書類審査'],
      notes: '評定平均4.0以上。農業・自然・食の探究活動や資格・実績を重視。' },
    { name: '学校推薦型選抜', category: 'recommendation' },
  ],
  '22_情報コミュニケーション学部': [
    { name: '一般選抜（学部別）', category: 'general' },
    { name: '全学部統一入試', category: 'general' },
    { name: '共通テスト利用方式', category: 'csat-only' },
    { name: '学校推薦型選抜', category: 'recommendation' },
  ],
  // ===== 青山学院大学 (id:23) — hasAO:false の7学部 =====
  '23_法学部': [
    { name: '個別学部日程 A方式（3科目）', category: 'general' },
    { name: '個別学部日程 B方式（独自2科目＋共テ英語）', category: 'csat-combined',
      notes: '独自試験（国語・地歴/公民）＋共通テスト英語の3科目合算。' },
    { name: '全学部日程', category: 'general' },
    { name: '共通テスト利用方式', category: 'csat-only' },
    { name: '学校推薦型選抜', category: 'recommendation' },
  ],
  '23_経済学部': [
    { name: '個別学部日程 A方式（3科目）', category: 'general' },
    { name: '個別学部日程 B方式（3科目）', category: 'general' },
    { name: '全学部日程', category: 'general' },
    { name: '共通テスト利用方式', category: 'csat-only' },
    { name: '学校推薦型選抜', category: 'recommendation' },
  ],
  '23_経営学部': [
    { name: '個別学部日程 A方式（3科目）', category: 'general' },
    { name: '個別学部日程 B方式（独自2科目＋共テ英語）', category: 'csat-combined',
      notes: '独自試験（英語・国語）＋共通テスト地歴/公民の3科目合算。英語重視型。' },
    { name: '全学部日程', category: 'general' },
    { name: '共通テスト利用方式', category: 'csat-only' },
    { name: '学校推薦型選抜', category: 'recommendation' },
  ],
  '23_国際政治経済学部': [
    { name: '個別学部日程（英語重視3科目）', category: 'general',
      notes: '英語200点・国語150点・地歴100点の配点。英語の比重が大きい。' },
    { name: '全学部日程', category: 'general' },
    { name: '共通テスト利用方式', category: 'csat-only' },
    { name: '学校推薦型選抜', category: 'recommendation' },
  ],
  '23_社会情報学部': [
    { name: '全学部日程 A方式（文系型・英語+国語+地歴）', category: 'general' },
    { name: '全学部日程 B方式（理系型・英語+数学+理科）', category: 'general' },
    { name: '共通テスト利用方式（文系型・理系型）', category: 'csat-only' },
    { name: '学校推薦型選抜', category: 'recommendation' },
  ],
  '23_教育人間科学部': [
    { name: '個別学部日程 B方式（英語外部試験利用）', category: 'english-ext',
      englishReqs: ['英検CSEスコア: 1980以上（2級相当）', 'TOEFL iBT: 42点以上', 'IELTS: 4.0以上', 'TEAP（4技能）: 225点以上', 'GTEC（4技能）: 960点以上'],
      notes: '英語外部試験スコアを活用して英語試験を免除または換算。国語・地歴の2科目で審査。' },
    { name: '全学部日程 A方式', category: 'general' },
    { name: '全学部日程 B方式', category: 'general' },
    { name: '共通テスト利用方式', category: 'csat-only' },
    { name: '学校推薦型選抜', category: 'recommendation' },
  ],
  '23_総合文化政策学部': [
    { name: '個別学部日程（3科目・英語重視）', category: 'general',
      notes: '英語200点・国語150点・地歴/数学100点。英語の配点が高い。' },
    { name: '全学部日程', category: 'general' },
    { name: '共通テスト利用方式', category: 'csat-only' },
    { name: '学校推薦型選抜', category: 'recommendation' },
  ],
};

const METHOD_CATEGORY_LABELS = {
  'general':        '一般入試',
  'english-ext':    '英語外部',
  'csat-combined':  '共テ併用',
  'csat-only':      '共テ利用',
  'ao':             '総合型選抜',
  'recommendation': '推薦入試',
  'other':          'その他',
};

const METHOD_CATEGORY_CSS = {
  'general':        'cat-general',
  'english-ext':    'cat-english-ext',
  'csat-combined':  'cat-csat',
  'csat-only':      'cat-csat',
  'ao':             'cat-ao',
  'recommendation': 'cat-suisen',
  'other':          'cat-other',
};

let viewMode = 'faculty'; // 'faculty' | 'method'

function getExamMethods(school, faculty) {
  const key = `${school.id}_${faculty.name}`;
  if (EXAM_METHODS_DATA[key]) return EXAM_METHODS_DATA[key];
  const methods = [];
  if (school.type === '国公立') {
    methods.push({ name: '一般選抜', category: 'general' });
    methods.push({ name: '共通テスト（2次試験との組み合わせ）', category: 'csat-combined' });
  } else {
    methods.push({ name: '一般選抜（学部別）', category: 'general' });
    methods.push({ name: '全学部統一入試', category: 'general' });
    methods.push({ name: '共通テスト利用方式', category: 'csat-only' });
  }
  const hasAO = faculty.hasAO !== undefined ? faculty.hasAO : school.hasAO;
  if (hasAO) methods.push({ name: '総合型選抜（AO入試）', category: 'ao' });
  if (school.hasRecommendation) methods.push({ name: '学校推薦型選抜', category: 'recommendation' });
  return methods;
}

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

  document.getElementById('view-btn-faculty').addEventListener('click', () => {
    viewMode = 'faculty';
    document.getElementById('view-btn-faculty').classList.add('active');
    document.getElementById('view-btn-method').classList.remove('active');
    applyFilters();
  });

  document.getElementById('view-btn-method').addEventListener('click', () => {
    viewMode = 'method';
    document.getElementById('view-btn-method').classList.add('active');
    document.getElementById('view-btn-faculty').classList.remove('active');
    applyFilters();
  });

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

function sortResults(arr, sortVal) {
  if      (sortVal === 'hensachi-desc') arr.sort((a, b) => b.faculty.hensachi - a.faculty.hensachi);
  else if (sortVal === 'hensachi-asc')  arr.sort((a, b) => a.faculty.hensachi - b.faculty.hensachi);
  else if (sortVal === 'name')          arr.sort((a, b) => a.school.name.localeCompare(b.school.name, 'ja'));
}

function applyFilters() {
  const sortVal = document.getElementById('sort-select').value;

  if (viewMode === 'method') {
    const methodResults = [];
    schools.forEach(school => {
      if (filters.types.length   && !filters.types.includes(school.type))     return;
      if (filters.regions.length && !filters.regions.includes(school.region)) return;
      if (school.groupRank > filters.maxRank)                                  return;
      if (filters.noMath        && !school.mathOptional)                       return;
      if (filters.englishStrong && !school.englishEmphasis)                    return;
      school.faculties.forEach(faculty => {
        if (faculty.hensachi < filters.hensachiMin || faculty.hensachi > filters.hensachiMax) return;
        if (filters.categories.length && !filters.categories.includes(faculty.category)) return;
        const facultyHasAO = faculty.hasAO !== undefined ? faculty.hasAO : school.hasAO;
        const methods = getExamMethods(school, faculty);
        methods.forEach(method => {
          const cat = method.category;
          const isGeneral = ['general', 'english-ext', 'csat-combined', 'csat-only'].includes(cat);
          const isAO      = cat === 'ao';
          const isSuisen  = cat === 'recommendation';
          const anyTypeFilter = filters.hasGeneral || filters.hasAO || filters.hasSuisen;
          if (anyTypeFilter) {
            const passes = (filters.hasGeneral && isGeneral) ||
                           (filters.hasAO      && isAO)     ||
                           (filters.hasSuisen  && isSuisen);
            if (!passes) return;
          }
          if (filters.aoMethods.length) {
            if (!isAO) return;
            const sel = method.selectionMethods || getAOMethods(school, faculty);
            if (!filters.aoMethods.some(m => sel.includes(m))) return;
          }
          methodResults.push({ school, faculty, facultyHasAO, method });
        });
      });
    });
    sortResults(methodResults, sortVal);
    currentResults = methodResults;
    renderMethods(methodResults);
    updateCount(methodResults.length);
    updateActiveTags();
    return;
  }

  // Faculty mode
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
  sortResults(results, sortVal);
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

function renderMethods(results) {
  const grid = document.getElementById('school-grid');
  if (results.length === 0) {
    grid.innerHTML = `
      <div class="empty-state">
        <p>条件に合う入試方式が見つかりませんでした</p>
        <small>絞り込み条件を変えてみてください</small>
      </div>`;
    return;
  }
  grid.innerHTML = results.map(({ school: s, faculty: f, method: m }) => {
    const typeClass  = s.type === '国公立' ? 'kokuritu' : 'shiritsu';
    const catLabel   = METHOD_CATEGORY_LABELS[m.category] || m.category;
    const catCss     = METHOD_CATEGORY_CSS[m.category]    || 'cat-other';
    return `
      <div class="school-card">
        <div class="card-top">
          <div class="card-name-group">
            <span class="method-name-label">${escHtml(m.name)}</span>
            <span class="faculty-name">${escHtml(f.name)}</span>
            <span class="university-name">${escHtml(s.name)}</span>
          </div>
          <span class="method-cat-badge ${catCss}">${escHtml(catLabel)}</span>
        </div>
        <div class="card-meta">
          <span class="meta-location">${escHtml(s.prefecture)}（${escHtml(s.region)}）</span>
          <span class="group-badge">${escHtml(s.group)}</span>
          <span class="meta-hensachi">
            <span class="meta-hensachi-label">偏差値</span>
            <span class="meta-hensachi-value">${f.hensachi}</span>
          </span>
        </div>
        <div class="card-footer">
          <div class="card-categories">
            <span class="cat-tag">${escHtml(f.category)}</span>
            <span class="type-badge ${typeClass}">${escHtml(s.type)}</span>
          </div>
          <button class="detail-btn"
            data-school-id="${s.id}"
            data-faculty-name="${escHtml(f.name)}"
            data-method-name="${escHtml(m.name)}">詳細を見る</button>
        </div>
      </div>`;
  }).join('');
}

function openModal(schoolId, facultyName, methodName) {
  if (viewMode === 'method' && methodName) {
    openMethodModal(schoolId, facultyName, methodName);
    return;
  }
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

function openMethodModal(schoolId, facultyName, methodName) {
  const item = currentResults.find(r =>
    r.school.id === schoolId &&
    r.faculty.name === facultyName &&
    r.method && r.method.name === methodName
  );
  if (!item) return;
  const { school, faculty, method } = item;
  const catLabel = METHOD_CATEGORY_LABELS[method.category] || method.category;
  const catCss   = METHOD_CATEGORY_CSS[method.category]    || 'cat-other';
  const details  = FACULTY_DETAILS[`${school.id}_${faculty.name}`] || null;

  let sectionsHTML = '';

  // General/CSAT: show subjects
  const isGeneralType = ['general', 'english-ext', 'csat-combined', 'csat-only'].includes(method.category);
  if (isGeneralType) {
    const subjects = method.subjects || getGeneralSubjects(faculty, school);
    const subjectHTML = subjects.map(s => `<span class="subject-tag">${escHtml(s)}</span>`).join('');
    let note = '';
    if (method.category === 'csat-combined') note = '<p class="modal-note">大学入学共通テスト＋大学独自の2次試験を組み合わせた方式です</p>';
    if (method.category === 'csat-only')     note = '<p class="modal-note">大学入学共通テストのスコアのみで合否を判定する方式です</p>';
    sectionsHTML += `<div class="modal-section"><h4 class="modal-section-title">受験科目目安</h4><div class="subject-tags">${subjectHTML}</div>${note}</div>`;
  }

  // English requirements (for english-ext methods or method with englishReqs)
  if (method.englishReqs && method.englishReqs.length > 0) {
    sectionsHTML += `
      <div class="modal-section">
        <h4 class="modal-section-title">英語外部試験の条件</h4>
        <div class="ao-detail-block">
          <div class="ao-detail-row">
            <span class="ao-detail-label">スコア要件</span>
            <ul class="ao-eng-req-list">${method.englishReqs.map(r => `<li>${escHtml(r)}</li>`).join('')}</ul>
          </div>
        </div>
      </div>`;
  }

  // AO details
  if (method.category === 'ao') {
    const selMethods = method.selectionMethods || getAOMethods(school, faculty);
    const aoHTML = selMethods.map(m => `<span class="ao-method-tag">${escHtml(m)}</span>`).join('');
    let aoDetailBlock = '';
    if (details) {
      const interviewLang = method.interviewLang || details.aoInterviewLang;
      const langHTML = interviewLang
        ? `<div class="ao-detail-row"><span class="ao-detail-label">面接言語</span><span class="ao-detail-value">${escHtml(interviewLang)}</span></div>`
        : '';
      const engReqs = (method.englishReqs && method.englishReqs.length) ? method.englishReqs : (details.aoEnglishReqs || []);
      const engHTML = engReqs.length
        ? `<div class="ao-detail-row"><span class="ao-detail-label">英語資格条件</span><ul class="ao-eng-req-list">${engReqs.map(r => `<li>${escHtml(r)}</li>`).join('')}</ul></div>`
        : '';
      const notesText = method.notes || details.aoNotes;
      const notesHTML = notesText ? `<div class="ao-detail-notes">${escHtml(notesText)}</div>` : '';
      if (langHTML || engHTML || notesHTML) aoDetailBlock = `<div class="ao-detail-block">${langHTML}${engHTML}${notesHTML}</div>`;
    }
    sectionsHTML += `
      <div class="modal-section">
        <h4 class="modal-section-title">AO入試（総合型選抜）の選考内容</h4>
        <div class="ao-method-tags">${aoHTML}</div>
        ${aoDetailBlock}
      </div>`;
  }

  // Notes for non-AO methods
  if (method.notes && method.category !== 'ao') {
    sectionsHTML += `<div class="modal-section"><p class="modal-note">${escHtml(method.notes)}</p></div>`;
  }

  document.getElementById('modal-content').innerHTML = `
    <div class="modal-header">
      <div class="modal-name-group">
        <span class="method-name-label modal-method-name">${escHtml(method.name)}</span>
        <span class="modal-faculty-name">${escHtml(faculty.name)}</span>
        <span class="modal-univ-name">${escHtml(school.name)}</span>
      </div>
      <div style="display:flex;flex-direction:column;align-items:flex-end;gap:6px">
        <span class="method-cat-badge ${catCss}">${escHtml(catLabel)}</span>
        <span class="modal-hensachi">偏差値 <strong>${faculty.hensachi}</strong></span>
      </div>
    </div>
    ${sectionsHTML}
    <p class="modal-note">※詳細・日程は各大学の募集要項でご確認ください</p>
  `;
  document.getElementById('detail-modal').classList.add('open');
}

function closeModal() {
  document.getElementById('detail-modal').classList.remove('open');
}

function updateCount(n) {
  const unit = viewMode === 'method' ? '件の入試方式' : '件の学部';
  document.getElementById('result-count').innerHTML = `<strong>${n}</strong> ${unit}が見つかりました`;
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
    openModal(parseInt(btn.dataset.schoolId), btn.dataset.facultyName, btn.dataset.methodName || null);
  });
});
