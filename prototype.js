const TEAM_COUNT = 24;
const TEAMS_PER_PAGE = 6;
const BAG_PAGES = 3;
const ITEMS_PER_PAGE = 30;

const teamListEl = document.getElementById('teamList');
const teamTitleEl = document.getElementById('teamTitle');
const teamPageIndicatorEl = document.getElementById('teamPageIndicator');
const bagPageIndicatorEl = document.getElementById('bagPageIndicator');
const bagGridEl = document.getElementById('bagGrid');
const roleNameEl = document.getElementById('roleName');
const roleDescEl = document.getElementById('roleDesc');
const roleImageEl = document.getElementById('roleImage');
const dockRolePanelEl = document.getElementById('dockRolePanel');
const dockTextEl = document.getElementById('dockText');
const btnOpenEl = document.getElementById('btnOpen');
const rolePanelEl = document.getElementById('rolePanel');
const boxPanelEl = document.getElementById('boxPanel');

const state = {
  teamPage: 0,
  activeTeam: 0,
  bagPage: 0,
  selectedPetId: null,
  rolePanelExpanded: false,
  rolePanelClosed: false,
};

const petData = Array.from({ length: BAG_PAGES * ITEMS_PER_PAGE }, (_, i) => ({
  id: i + 1,
  name: `精灵 #${String(i + 1).padStart(3, '0')}`,
  lore: i % 2 === 0 ? '来自星界森林，擅长奥术支援。' : '来自风暴峡谷，擅长雷电突袭。'
}));

function renderTeams() {
  const start = state.teamPage * TEAMS_PER_PAGE;
  const current = Array.from({ length: TEAMS_PER_PAGE }, (_, idx) => start + idx).filter(i => i < TEAM_COUNT);
  teamListEl.innerHTML = '';

  current.forEach((teamIndex) => {
    const slot = document.createElement('button');
    slot.className = `slot ${state.activeTeam === teamIndex ? 'active' : ''}`;
    slot.innerHTML = `<strong>队伍 ${teamIndex + 1}</strong><span>6 个槽位</span>`;
    slot.addEventListener('click', () => {
      state.activeTeam = teamIndex;
      teamTitleEl.textContent = `队伍 ${teamIndex + 1}`;
      renderTeams();
    });
    teamListEl.appendChild(slot);
  });

  const pages = Math.ceil(TEAM_COUNT / TEAMS_PER_PAGE);
  teamPageIndicatorEl.textContent = `第 ${state.teamPage + 1} / ${pages} 页`;
}

function renderBag() {
  bagGridEl.innerHTML = '';
  const start = state.bagPage * ITEMS_PER_PAGE;
  const pageData = petData.slice(start, start + ITEMS_PER_PAGE);

  pageData.forEach((pet) => {
    const slot = document.createElement('button');
    slot.className = `pet-slot ${state.selectedPetId === pet.id ? 'selected' : ''}`;
    slot.title = pet.name;
    slot.innerHTML = `<span class="pet-avatar" aria-hidden="true"></span>`;

    slot.addEventListener('click', () => {
      state.selectedPetId = pet.id;
      state.rolePanelClosed = false;
      if (!state.rolePanelExpanded) {
        state.rolePanelExpanded = true;
      }
      updateRolePanel();
      renderBag();
    });

    bagGridEl.appendChild(slot);
  });

  bagPageIndicatorEl.textContent = `第 ${state.bagPage + 1} / ${BAG_PAGES} 页（30/页）`;
}

function updateRolePanel() {
  const pet = petData.find((x) => x.id === state.selectedPetId) || petData[0];

  roleNameEl.textContent = pet.name;
  roleDescEl.textContent = pet.lore;
  roleImageEl.style.filter = `hue-rotate(${(pet.id * 11) % 360}deg)`;
  dockTextEl.textContent = `${pet.name} 的详细信息已加载，可查看属性、技能、符文与羁绊。`;

  if (state.rolePanelClosed) {
    dockRolePanelEl.classList.remove('open');
    btnOpenEl.setAttribute('aria-expanded', 'false');
    return;
  }

  if (state.rolePanelExpanded) {
    dockRolePanelEl.classList.add('open');
    btnOpenEl.setAttribute('aria-expanded', 'true');
  } else {
    dockRolePanelEl.classList.remove('open');
    btnOpenEl.setAttribute('aria-expanded', 'false');
  }
}

function bindEvents() {
  document.getElementById('teamPrev').addEventListener('click', () => {
    state.teamPage = Math.max(0, state.teamPage - 1);
    renderTeams();
  });

  document.getElementById('teamNext').addEventListener('click', () => {
    const maxPage = Math.ceil(TEAM_COUNT / TEAMS_PER_PAGE) - 1;
    state.teamPage = Math.min(maxPage, state.teamPage + 1);
    renderTeams();
  });

  document.getElementById('bagPrev').addEventListener('click', () => {
    state.bagPage = Math.max(0, state.bagPage - 1);
    renderBag();
  });

  document.getElementById('bagNext').addEventListener('click', () => {
    state.bagPage = Math.min(BAG_PAGES - 1, state.bagPage + 1);
    renderBag();
  });

  btnOpenEl.addEventListener('click', () => {
    state.rolePanelClosed = false;
    state.rolePanelExpanded = !state.rolePanelExpanded;
    updateRolePanel();
  });

  document.getElementById('closeRoleBtn').addEventListener('click', () => {
    state.rolePanelClosed = true;
    state.rolePanelExpanded = false;
    updateRolePanel();
  });

  document.getElementById('toggleBoxBtn').addEventListener('click', () => {
    boxPanelEl.classList.add('open');
  });

  document.getElementById('collapseBoxBtn').addEventListener('click', () => {
    boxPanelEl.classList.remove('open');
  });
}

function init() {
  bindEvents();
  renderTeams();
  renderBag();
  updateRolePanel();
}

init();
