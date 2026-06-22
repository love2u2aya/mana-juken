// Per-faculty AO method overrides based on 2026年度入試版 総合型選抜PDF (東京都)
const AO_METHODS_OVERRIDE = {
  '19_法学部':         ['学力試験', '面接', '書類審査'],   // 慶應・FIT入試
  '19_文学部':         ['小論文', '書類審査'],              // 慶應・自主応募制
  '19_理工学部':       ['面接', '書類審査'],
  '19_総合政策学部':   ['面接', '書類審査'],
  '20_国際教養学部':   ['学力試験', '書類審査'],            // 早稲田・Critical Writing
  // 立教大学 (id:24) — 自由選抜入試（英語資格が出願条件の学部多数）
  '24_文学部':         ['小論文', '面接', '書類審査'],
  '24_経済学部':       ['学力試験', '面接', '書類審査'],    // 90分総合科目試験
  '24_理学部':         ['小論文', '面接', '書類審査'],      // 課題小論文
  '24_社会学部':       ['小論文', '面接', '書類審査'],      // 自由研究提出＋小論文
  '24_観光学部':       ['小論文', '面接', '書類審査'],
  '24_現代心理学部':   ['小論文', '面接', '書類審査'],
  // 明治大学 (id:22)
  '22_政治経済学部':   ['学力試験', '面接', '書類審査'],    // 明治・グローバル型（総合問題）
  '22_文学部':         ['小論文', '面接', '書類審査'],      // 明治・自己推薦
  '22_商学部':         ['学力試験', '面接', '書類審査'],    // 明治・公募制（共通テスト利用）
  '22_理工学部':       ['実技', '面接', '書類審査'],        // 明治・自己推薦（実技＋口頭試問）
  '22_国際日本学部':   ['小論文', '面接', '書類審査'],      // 明治・自己推薦（英語資格必須）
  '22_総合数理学部':   ['学力試験', '面接', '書類審査'],    // 明治・自己推薦（数学考査/プレゼン）
  '25_経済学部':       ['小論文', '面接', '書類審査'],      // 中央・英語小論文
  '25_商学部':         ['小論文', '面接', '書類審査'],      // 中央・英語運用能力特別入試
  '25_国際経営学部':   ['小論文', '面接', '書類審査'],      // 中央・自己推薦（英語資格必須）
  '26_情報科学部':     ['学力試験', '面接', '書類審査'],    // 法政・数学試験
  '26_国際文化学部':   ['書類審査'],                        // 法政・GIS
  '32_国際社会科学部': ['小論文', '面接', '書類審査'],      // 学習院・英語論文
  '40_文学部':         ['小論文', '面接', '書類審査'],      // 成蹊・発表・質疑応答
  '40_理工学部':       ['学力試験', '面接', '書類審査'],    // 成蹊・思考力審査
  '23_理工学部':       ['学力試験', '面接', '書類審査'],    // 青山・基礎学力調査
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

  const subjectHTML = subjects.map(subj => `<span class="subject-tag">${escHtml(subj)}</span>`).join('');
  const aoHTML = aoMethods ? aoMethods.map(m => `<span class="ao-method-tag">${escHtml(m)}</span>`).join('') : '';

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
