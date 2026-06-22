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
  hasSuisen: false
};

function getCheckedValues(name) {
  return Array.from(document.querySelectorAll(`input[name="${name}"]:checked`)).map(el => el.value);
}

function initFilters() {
  // Difficulty level select
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

  // Generate region checkboxes
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
    label.appendChild(document.createTextNode(' ' + region));
    regionContainer.appendChild(label);
  });

  // Generate faculty category checkboxes
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
    label.appendChild(document.createTextNode(' ' + cat));
    catContainer.appendChild(label);
  });

  // Type checkboxes
  document.querySelectorAll('input[name="type"]').forEach(cb => {
    cb.addEventListener('change', () => {
      filters.types = getCheckedValues('type');
      applyFilters();
    });
  });

  // Hensachi sliders
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

  // AO / 推薦
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

  // Sort
  document.getElementById('sort-select').addEventListener('change', applyFilters);

  // Reset
  document.getElementById('reset-btn').addEventListener('click', resetFilters);

  // Mobile sidebar toggle
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
    hasGeneral: false, hasAO: false, hasSuisen: false
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
  let results = schools.filter(s => {
    if (filters.types.length      && !filters.types.includes(s.type))                                   return false;
    if (filters.regions.length    && !filters.regions.includes(s.region))                               return false;
    if (filters.categories.length && !filters.categories.some(c => s.categories.includes(c)))           return false;
    if (s.hensachi < filters.hensachiMin || s.hensachi > filters.hensachiMax)                           return false;
    if (s.groupRank > filters.maxRank)                                                                   return false;
    if (filters.noMath        && !s.mathOptional)                                                        return false;
    if (filters.englishStrong && !s.englishEmphasis)                                                     return false;
    if (filters.hasGeneral && s.hasGeneral === false)                                                    return false;
    if (filters.hasAO    && !s.hasAO)                                                                    return false;
    if (filters.hasSuisen && !s.hasRecommendation)                                                       return false;
    return true;
  });

  const sortVal = document.getElementById('sort-select').value;
  if      (sortVal === 'hensachi-desc') results.sort((a, b) => b.hensachi - a.hensachi);
  else if (sortVal === 'hensachi-asc')  results.sort((a, b) => a.hensachi - b.hensachi);
  else if (sortVal === 'name')          results.sort((a, b) => a.name.localeCompare(b.name, 'ja'));

  renderSchools(results);
  updateCount(results.length);
  updateActiveTags();
}

function renderSchools(results) {
  const grid = document.getElementById('school-grid');

  if (results.length === 0) {
    grid.innerHTML = `
      <div class="empty-state">
        <p>条件に合う大学が見つかりませんでした</p>
        <small>絞り込み条件を変えてみてください</small>
      </div>`;
    return;
  }

  grid.innerHTML = results.map(s => {
    const typeClass = s.type === '国公立' ? 'kokuritu' : 'shiritsu';
    const hasGeneral = s.hasGeneral !== false;
    const admissionBadges = [
      s.mathOptional    ? '<span class="badge badge-math">数学なしOK</span>' : '',
      s.englishEmphasis ? '<span class="badge badge-english">英語重視</span>' : '',
      hasGeneral        ? '<span class="badge badge-general">一般入試</span>' : '',
      s.hasAO           ? '<span class="badge badge-ao">AO入試</span>' : '',
      s.hasRecommendation ? '<span class="badge badge-suisen">推薦入試</span>' : ''
    ].filter(Boolean).join('');
    const noBadge = admissionBadges
      ? '' : '<span class="badge badge-none">一般入試のみ</span>';

    return `
      <div class="school-card">
        <div class="card-top">
          <span class="school-name">${escHtml(s.name)}</span>
          <span class="type-badge ${typeClass}">${escHtml(s.type)}</span>
        </div>
        <div class="card-meta">
          <span class="meta-location">${escHtml(s.prefecture)}（${escHtml(s.region)}）</span>
          <span class="group-badge">${escHtml(s.group)}</span>
          <span class="meta-hensachi">
            <span class="meta-hensachi-label">偏差値</span>
            <span class="meta-hensachi-value">${s.hensachi}</span>
          </span>
        </div>
        <div class="admission-badges">${admissionBadges || noBadge}</div>
        <div class="card-categories">
          ${s.categories.map(c => `<span class="cat-tag">${escHtml(c)}</span>`).join('')}
        </div>
      </div>`;
  }).join('');
}

function updateCount(n) {
  document.getElementById('result-count').innerHTML =
    `<strong>${n}</strong> 件の大学が見つかりました`;
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
  if (filters.hasGeneral) tags.push({ label: '一般入試あり', type: 'general', val: '' });
  if (filters.hasAO)    tags.push({ label: 'AO入試あり',  type: 'ao',     val: '' });
  if (filters.hasSuisen) tags.push({ label: '推薦入試あり', type: 'suisen', val: '' });

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
    const el = document.querySelector(`input[name="region"][value="${CSS.escape(val)}"]`);
    if (el) el.checked = false;
    // fallback for browsers without CSS.escape
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
  }
  applyFilters();
}

function escHtml(str) {
  return str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

document.addEventListener('DOMContentLoaded', () => {
  initFilters();
  applyFilters();
});
