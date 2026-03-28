const DESIGN_WIDTH = 750;
const DESIGN_HEIGHT = 1334;
const SAVE_KEY = "slime_pet_save_v3";
const UI_THEME_SAVE_KEY = "slime_ui_theme_config_v1";
const UI_THEME_STYLE_ID = "aiThemeStyle";
const UI_THEME_PROMPT_LIMIT = 320;
const FIRST_LOGIN_ADVENTURE_STORY = "风和日丽的一天，你在公司捡到一只蓝坨坨。它好像...可以长大";
const FIRST_LOGIN_ADVENTURE_IMAGE = "./assets/codex_album/story_begin.png";
const GROWTH_LOVE_ADVENTURE_THRESHOLD_MM = 100;
const GROWTH_LOVE_ADVENTURE_TITLE = "成长事件";
const GROWTH_LOVE_ADVENTURE_STORY = "喜欢阿姆，请一键三连投我一票！！";
const GROWTH_LOVE_ADVENTURE_IMAGE = "./assets/codex_album/story_love.png";
const DAY_MS = 86400000;
const LOG_LIMIT = 7;
const HISTORY_LIMIT = 5;
const MIN_SIZE_MM = 50;
const MAX_SIZE_MM = 640;
const EXPRESSION_HOLD_MS = 5200;
const INTIMACY_MAX = 50;
const CLICK_WINDOW_MS = 2 * 60 * 60 * 1000;
const CLICK_WINDOW_GAIN_MAX = 5;
const INTIMACY_TICK_MS = 5 * 60 * 1000;
const INTIMACY_HEALTH_UP_TICK_MS = 10 * 60 * 1000;
const SICK_SIZE_DECAY_TICK_MS = 5 * 60 * 1000;
const DIRTY_APPEAR_INTERVAL_MS = 10 * 60 * 1000;
const DIRTY_HEALTH_DECAY_TICK_MS = 5 * 60 * 1000;
const BATHING_REQUIRED_MS = 3000;
const BATHING_TIMEOUT_MS = 15 * 1000;
const BATHING_ZONE_PAD = 50;
const BATHING_MOVE_MIN_DIST = 0.45;
const BATHING_MOVE_GRACE_MS = 220;
const BATHING_PROGRESS_GAIN = 1.3;
const BATHING_PROGRESS_DIST_BONUS = 1.2;
const WATER_GAME_UNLOCK_MM = 80;
const WATER_GAME_DRINK_GAIN_MM = 8;
const WATER_GAME_FORCE_DRINK_COUNT = 5;
const WATER_GAME_COOLDOWN_OPTIONS_MINUTES = [10, 30, 60];
const WATER_GAME_COOLDOWN_OPTION_SET = new Set(WATER_GAME_COOLDOWN_OPTIONS_MINUTES);
const WATER_GAME_COOLDOWN_DEFAULT_MINUTES = 30;
const STAMINA_MAX = 5;
const STAMINA_RECOVER_INTERVAL_MS = 2 * 60 * 1000;
const HUNGER_DECAY_PER_HOUR = 12;
const WILD_HUNGER_LOSS = 3;
const HEALTH_DECAY_WITH_POOP_PER_10MIN = 10;
const POOP_MIN_INTERVAL_MS = 5 * 60 * 1000;
const POOP_MAX_INTERVAL_MS = 10 * 60 * 1000;
const WILD_RANDOM_EVENT_CHANCE = 0.55;
const WILD_TRAVEL_ADVENTURE_CHANCE = 0.45;
const WILD_EVENT_DURATION_MS = {
  hotspring: 90 * 1000,
  farming: 90 * 1000,
  camping: 2 * 60 * 1000,
  travel: 3 * 60 * 1000,
};
const WILD_RUNNER_JUMP_FPS = 12;
const WILD_RUNNER_JUMP_FRAME_SEQUENCE = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
  13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24,
  23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12,
  11, 10, 9, 8, 7, 6, 5, 4, 3, 2,
];
const WILD_EVENT_HINT = {
  hotspring: "1.5分钟，健康+3~5，清除肮脏",
  farming: "1.5分钟，饱食+3~5，清洁-3",
  camping: "2分钟，主食+1，饱食+10",
  travel: "3分钟，大小+10mm，饱食-10",
};
const WILD_EVENT_UNLOCK_MM = {
  camping: 70,
  travel: 90,
};
const WILD_EVENT_LOCK_ICON = "./assets/codex_album/lock.svg";
const FEED_TICK_MS = 10 * 1000;
const PICKUP_SPAWN_MIN_MS = 5 * 60 * 1000;
const PICKUP_SPAWN_MAX_MS = 10 * 60 * 1000;
const PICKUP_MAX_DROPS = 10;
const GM_FAST_FORWARD_HOLD_MS = 1000;
const GM_FAST_FORWARD_SECONDS = 3 * 60;
const PICKUP_DROP_SIZE = 65;
const PICKUP_COLLISION_SIZE = 58;
const PICKUP_MIN_DIST = 67;
const ITEM_DEFS = {
  item1: { id: "item1", name: "水果", iconPath: "./assets/UI/item_1.png", inventoryKey: "item1" },
  item2: { id: "item2", name: "主食", iconPath: "./assets/UI/item_2.png", inventoryKey: "item2" },
  item3: { id: "item3", name: "饮料", iconPath: "./assets/UI/item_3.png", inventoryKey: "item3" },
  item4: { id: "item4", name: "肥皂", iconPath: "./assets/UI/item_4.png", inventoryKey: "cleanse" },
};
const FOOD_ITEM_DEFS = {
  item1: { ...ITEM_DEFS.item1, satietyPerTick: 2, durationMs: 30 * 1000 },
  item2: { ...ITEM_DEFS.item2, satietyPerTick: 3, durationMs: 60 * 1000 },
  item3: { ...ITEM_DEFS.item3, satietyPerTick: 1, durationMs: 3 * 1000 },
};
const FOOD_ITEM_ORDER = ["item1", "item2", "item3"];
const PICKUP_ITEM_ORDER = ["item1", "item2", "item3", "item4"];
const HEART_SVG_PATH = "M12 21.4L10.6 20.1C5.5 15.4 2 12.2 2 8.4C2 5.3 4.4 3 7.4 3C9.1 3 10.7 3.8 11.8 5.1L12 5.3L12.2 5.1C13.3 3.8 14.9 3 16.6 3C19.6 3 22 5.3 22 8.4C22 12.2 18.5 15.4 13.4 20.1L12 21.4Z";
const SVG_NS = "http://www.w3.org/2000/svg";
const PHYSICS = {
  gravity: 3200,
  dragX: 1.95,
  dragY: 0.24,
  bounceX: 0.82,
  bounceTop: 0.62,
  bounceBottom: 0.66,
  floorFriction: 0.93,
  minBounceVy: 145,
  groundDrag: 8.5,
  restFramesToSleep: 4,
  stopVx: 20,
  stopVy: 30,
  floorSnapEps: 1.2,
  wallSnapEps: 1,
  launchSpeedMin: 150,
};
const UI_THEME_ALLOWED_TOKENS = new Set([
  "frameBg",
  "panelBg",
  "panelBorder",
  "textPrimary",
  "textStrong",
  "accent",
  "accentWarm",
  "speechBg",
  "speechText",
  "buttonBg",
  "buttonText",
  "eventCardBg",
  "popupBg",
]);
const UI_THEME_ALLOWED_RADIUS = new Set(["panel", "button", "bubble"]);
const UI_THEME_DEFAULT_PROMPT = "做成半透明冷灰风格，保持可读性高，强调色偏暖黄。";

const EVENT_META = {
  feed: "喂食",
  cleanPoop: "清粪",
  bath: "洗澡",
  heal: "治病",
  chat: "聊天",
  hotspring: "泡温泉",
  farming: "务农",
  camping: "露营",
  travel: "远行",
};

const DEFAULT_SPEECH_CONFIG = {
  auto: {
    critical_sick: "呜呜呜~不想打针",
    dirty_active: "想洗个澡，身上黏黏的-—-",
    satiety_low: "宝宝肚肚打雷了",
    health_low: "生长动力不足...",
    poop_many: "地上脏脏的，可以帮我清理吗？",
    cleanliness_low: "想洗个澡，身上黏黏的。",
    stamina_low: "有点累了，在家恢复下体力吧",
    stamina_high: "体力充沛，出门看看吧",
    intimacy_high: "和你在一起好安心。",
    mood_high: "今天心情真棒！",
    default: "你好呀，今天也一起玩吧。",
  },
  events: {
    stage_upgrade: "进化啦！我现在是{stage}。",
    bath_complete: "舒服(●ˇ∀ˇ●)，亲密度+5，健康+8",
    clean_poop_empty: "地面很干净，不需要清理。",
    clean_poop_success: "谢谢你帮我清理，舒服多了。",
    mode_switch_blocked_by_bath: "洗澡进行中，先划动完成吧。",
    switch_to_codex: "日记已打开，可以查看成长和历史。",
    switch_to_observe: "你回来啦~主人记得多喝水",
    gm_add_cleanse: "GM指令：洗澡道具+1。",
    gm_food_pack: "GM指令：水果+1、主食+1、饮料+1；健康-10、饱食-10、亲密度-5。",
    home_action_blocked_by_bath: "先帮我洗完澡，划动3秒就好。",
    home_feed: "吃饱啦，感觉元气满满。",
    home_bath_normal: "洗澡后香香的，真开心。",
    home_heal_denied: "我现在状态很好，不用治病。",
    home_heal_success: "治疗完成，身体舒服多了。",
    home_chat: "和你聊天最开心了。",
    use_food_item_denied: "没有食材道具可用。",
    use_food_item_success: "使用了食材道具，饱食度+{gain}。",
    use_cleanse_item_denied: "没有清澡道具可用。",
    food_plate_pick: "嗷呜~旋风吸入！{foodName}",
    food_plate_empty: "口袋空空没有饭吃╮(╯▽╰)╭",
    food_plate_busy: "{foodName}还没吃完呢×",
    food_plate_finished: "{foodName}吃完啦。",
    pickup_item_gain: "捡到了{items}。",
    pickup_spawn_invite: "拖拽阿姆我可以向上弹出吃掉头顶上的泡泡",
    water_game_prompt: "到点喝水啦！",
    water_game_drink: "蒸蚌(๑•̀ㅂ•́)و✧",
    water_game_decline: "不喝水会干巴的",
    sick_heal_button: "痛 T T",
    dirty_bath_no_soap: "没有肥皂呢，去泡温泉试试吧",
    wild_stamina_low: "有点累了，在家恢复下体力吧",
    wild_action_done_limit: "本次外出已完成1项活动，先回家吧。",
    wild_event_cooldown: "{eventName}冷却中，还需{remain}。",
    wild_hotspring_done: "泡温泉结束，健康+{gain}，并清除肮脏状态。",
    wild_farming_done: "务农结束，饱食度+{gain}，清洁度-3。",
    wild_camping_done: "露营结束，获得主食x1，饱食度+10。",
    wild_travel_done: "远行结束，大小+10mm，饱食度-10。",
    scene_switch_blocked_by_bath: "洗澡进行中，先完成再切换场景。",
    switch_to_wild: "走吧，我们去野外看看。",
    switch_to_home: "回家啦，慢慢休息。体力会每2分钟恢复1点。",
    expression_blocked_by_sick: "呜呜呜~不想打针",
    expression_click_gain: "戳我就会变表情喔。亲密度+1。",
    expression_click_cap: "表情切换成功，本2小时亲密度加成已达上限。",
  },
  holdMs: {},
};

function mergeSpeechConfig(defaultConfig, externalConfig) {
  const ext = (externalConfig && typeof externalConfig === "object") ? externalConfig : {};
  return {
    auto: { ...defaultConfig.auto, ...(ext.auto && typeof ext.auto === "object" ? ext.auto : {}) },
    events: { ...defaultConfig.events, ...(ext.events && typeof ext.events === "object" ? ext.events : {}) },
    holdMs: { ...defaultConfig.holdMs, ...(ext.holdMs && typeof ext.holdMs === "object" ? ext.holdMs : {}) },
  };
}

function formatSpeechTemplate(template, vars = {}) {
  if (typeof template !== "string") return "";
  return template.replace(/\$\{([a-zA-Z0-9_]+)\}|\{([a-zA-Z0-9_]+)\}/g, (_, a, b) => {
    const key = a || b;
    if (!Object.prototype.hasOwnProperty.call(vars, key)) return "";
    const value = vars[key];
    return value == null ? "" : String(value);
  });
}

const SPEECH_CONFIG = mergeSpeechConfig(
  DEFAULT_SPEECH_CONFIG,
  (typeof window !== "undefined")
    ? (window.__SLIME_SPEECH_CONFIG || window.__SLIME_SPEECH_CONFIG__ || {})
    : {}
);

function autoSpeechText(key, fallback) {
  const text = SPEECH_CONFIG.auto[key];
  return (typeof text === "string" && text.length > 0) ? text : fallback;
}

function eventSpeechText(key, fallback, vars = {}) {
  const text = SPEECH_CONFIG.events[key];
  const template = (typeof text === "string" && text.length > 0) ? text : fallback;
  return formatSpeechTemplate(template, vars);
}

function eventSpeechHoldMs(key, fallback) {
  const value = Number(SPEECH_CONFIG.holdMs[key]);
  return Number.isFinite(value) && value > 0 ? value : fallback;
}

function sayEvent(key, fallbackText, fallbackHoldMs = 3200, vars = {}) {
  const line = eventSpeechText(key, fallbackText, vars);
  say(line, eventSpeechHoldMs(key, fallbackHoldMs));
  addHistoryTriggeredSpeech(line);
}

function sayEventLowPriority(key, fallbackText, fallbackHoldMs = 2200, vars = {}) {
  if (runtime.speechTimer || runtime.bathing.active) return false;
  const currentAuto = speechAuto();
  const blockingAutoSpeech = new Set([
    autoSpeechText("critical_sick", "呜呜呜~不想打针"),
    autoSpeechText("dirty_active", "想洗个澡，身上黏黏的-—-"),
    autoSpeechText("satiety_low", "宝宝肚肚打雷了"),
    autoSpeechText("health_low", "生长动力不足..."),
    autoSpeechText("poop_many", "地上脏脏的，可以帮我清理吗？"),
    autoSpeechText("cleanliness_low", "想洗个澡，身上黏黏的。"),
    autoSpeechText("stamina_low", "有点累了，在家恢复下体力吧"),
  ]);
  if (blockingAutoSpeech.has(currentAuto)) return false;
  sayEvent(key, fallbackText, fallbackHoldMs, vars);
  return true;
}

const STAGES = [
  { t: 80, n: "幼生体", d: "刚刚开始依赖你的照顾。" },
  { t: 120, n: "成长体", d: "互动明显增多，性格更活泼。" },
  { t: 301, n: "活力体", d: "状态稳定，探索欲变强。" },
  { t: 551, n: "成熟体", d: "亲密关系稳固，行动更大胆。" },
  { t: 1001, n: "闪耀体", d: "高亲密高健康的长期陪伴形态。" },
];
const ALBUM_ITEMS = [
  { id: "image1", name: "形象1", unlockMm: 500, src: "./assets/codex_album/image1.svg" },
  { id: "image2", name: "形象2", unlockMm: 1000, src: "./assets/codex_album/image2.svg" },
];
const ALBUM_LOCKED_PLACEHOLDER_SRC = "./assets/codex_album/imageempty.png";
const ADVENTURE_PHOTO_LIMIT = 28;
const ADVENTURE_STORY_MAX_CHARS = 30;
const ADVENTURE_PHOTO_SRC_POOL = [
  "./assets/codex_album/story01.png",
  "./assets/codex_album/story02.png",
  "./assets/codex_album/story03.png",
  "./assets/codex_album/story04.png",
  "./assets/codex_album/story05.png",
];
const GEMINI_STORY_PREFIX = ["史莱姆", "它", "小家伙", "旅途中"];
const GEMINI_STORY_PLACE = ["在云海边", "穿过星屑林", "于薄雾峡谷", "在晚霞湖畔", "于风铃山道"];
const GEMINI_STORY_ACTION = ["追到一只发光蝶", "捡到会唱歌的叶片", "帮迷路种子回家", "和月光泡泡赛跑", "找到会发芽的石头"];
const GEMINI_STORY_ENDING = ["，回家时笑眯眯。", "，一路哼着小曲。", "，把好运装进口袋。", "，脚步都变轻了。", "，尾巴都在冒星星。"];

const CLICK_GAIN_EXPRESSIONS = ["wink", "smile"];
const CLICK_CAP_EXPRESSIONS = ["surprised", "shock"];
const CLICK_EXPRESSIONS = [...new Set([...CLICK_GAIN_EXPRESSIONS, ...CLICK_CAP_EXPRESSIONS])];
const SEQ_EXPRESSIONS = ["normal", "happy", "wink", "smile", "surprised", "shock", "neutral", "sad", "hungry", "dirty", "sick", "call"];
const SEQ_EXPRESSION_SET = new Set(SEQ_EXPRESSIONS);
const CLICK_OVERRIDE_SET = new Set(CLICK_EXPRESSIONS);
function generatePoopSlots(count = 6) {
  const slots = [];
  let guard = 0;
  while (slots.length < count && guard < 800) {
    const x = Math.round(72 + Math.random() * 548);
    const y = Math.round(18 + Math.random() * 126);
    let overlapped = false;
    for (let i = 0; i < slots.length; i += 1) {
      const dx = slots[i].x - x;
      const dy = slots[i].y - y;
      if (dx * dx + dy * dy < 66 * 66) {
        overlapped = true;
        break;
      }
    }
    if (!overlapped) slots.push({ x, y });
    guard += 1;
  }
  const fallback = [
    { x: 102, y: 26 }, { x: 278, y: 102 }, { x: 512, y: 38 },
    { x: 184, y: 138 }, { x: 612, y: 118 }, { x: 384, y: 62 },
  ];
  while (slots.length < count) slots.push(fallback[slots.length % fallback.length]);
  for (let i = slots.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    const tmp = slots[i];
    slots[i] = slots[j];
    slots[j] = tmp;
  }
  return slots;
}

const POOP_SLOTS = generatePoopSlots(6);
const MAX_POOP_ON_FLOOR = POOP_SLOTS.length;
const PICKUP_ZONE = {
  leftRatio: 0.05,
  rightRatio: 0.95,
  topRatio: 0.08,
  bottomRatio: 0.24,
};
const HOME_MOVE_ZONE_BOTTOM_GAP = 228;
const AUTO_MOTION_PAUSE_MS = 1600;
const AUTO_IDLE_STANDBY_MS = 10000;
const AUTO_JUMP_COUNT_MIN = 3;
const AUTO_JUMP_COUNT_MAX = 6;
const AUTO_JUMP_DURATION_MIN_MS = 760;
const AUTO_JUMP_DURATION_MAX_MS = 1140;
const AUTO_JUMP_HEIGHT_MIN = 10;
const AUTO_JUMP_HEIGHT_MAX = 18;
const AUTO_JUMP_DX_MIN = 24;
const AUTO_JUMP_DX_MAX = 84;
const AUTO_JUMP_GAP_MIN_MS = 260;
const AUTO_JUMP_GAP_MAX_MS = 520;
const STATUS_ANIM_FRAMES = 12;
const STATUS_ANIM_FPS = 10;

const refs = {
  frame: document.getElementById("gameFrame"),
  bottomBar: document.querySelector(".bottom-bar"),
  homeScene: document.getElementById("homeScene"),
  wildScene: document.getElementById("wildScene"),
  codexPanel: document.getElementById("codexPanel"),
  homeFxLayer: document.getElementById("homeFxLayer"),
  wildFxLayer: document.getElementById("wildFxLayer"),
  sceneToggleBtn: document.getElementById("sceneToggleBtn"),
  aiThemeBtn: document.getElementById("aiThemeBtn"),
  aiThemePanel: document.getElementById("aiThemePanel"),
  aiThemePrompt: document.getElementById("aiThemePrompt"),
  aiThemeStatus: document.getElementById("aiThemeStatus"),
  aiThemeName: document.getElementById("aiThemeName"),
  aiThemeGenerateBtn: document.getElementById("aiThemeGenerateBtn"),
  aiThemeApplyBtn: document.getElementById("aiThemeApplyBtn"),
  aiThemeResetBtn: document.getElementById("aiThemeResetBtn"),
  aiThemeCloseBtn: document.getElementById("aiThemeCloseBtn"),
  soundBtn: document.getElementById("soundBtn"),
  modeSwitch: document.getElementById("modeSwitch"),
  modeButtons: [...document.querySelectorAll(".mode-btn")],
  petName: document.getElementById("petName"),
  growthRateFill: document.getElementById("growthRateFill"),
  staminaValue: document.getElementById("staminaValue"),
  daysValue: document.getElementById("daysValue"),
  intimacyHearts: document.getElementById("intimacyHearts"),
  sizeValue: document.getElementById("sizeValue"),
  satietyValue: document.getElementById("satietyValue"),
  healthValue: document.getElementById("healthValue"),
  speechBubble: document.getElementById("speechBubble"),
  bathHud: document.getElementById("bathHud"),
  bathProgressFill: document.getElementById("bathProgressFill"),
  bathSoapIcon: document.getElementById("bathSoapIcon"),
  sickHealBtn: document.getElementById("sickHealBtn"),
  dirtyBathBtn: document.getElementById("dirtyBathBtn"),
  dirtyBathCount: document.getElementById("dirtyBathCount"),
  waterGamePopup: document.getElementById("waterGamePopup"),
  waterGameActions: document.getElementById("waterGameActions"),
  waterDrinkBtn: document.getElementById("waterDrinkBtn"),
  waterDenyBtn: document.getElementById("waterDenyBtn"),
  waterSettingBtn: document.getElementById("waterSettingBtn"),
  waterSettingModal: document.getElementById("waterSettingModal"),
  waterSettingOpt10: document.getElementById("waterSettingOpt10"),
  waterSettingOpt30: document.getElementById("waterSettingOpt30"),
  waterSettingOpt60: document.getElementById("waterSettingOpt60"),
  waterSettingCancelBtn: document.getElementById("waterSettingCancelBtn"),
  waterSettingConfirmBtn: document.getElementById("waterSettingConfirmBtn"),
  homeAwayMask: document.getElementById("homeAwayMask"),
  pickupDropLayer: document.getElementById("pickupDropLayer"),
  feedTrayWrap: document.getElementById("feedTrayWrap"),
  feedPlateBtn: document.getElementById("feedPlateBtn"),
  feedPlateCore: document.getElementById("feedPlateCore"),
  feedPlateLabel: document.getElementById("feedPlateLabel"),
  feedPlateItem: document.getElementById("feedPlateItem"),
  feedPlateTimer: document.getElementById("feedPlateTimer"),
  foodListPanel: document.getElementById("foodListPanel"),
  slime: document.getElementById("slime"),
  slimeSeqFrame: document.getElementById("slimeSeqFrame"),
  wildRunner: document.getElementById("wildRunner"),
  wildGainPopup: document.getElementById("wildGainPopup"),
  wildGainBody: document.getElementById("wildGainBody"),
  wildRandomPopup: document.getElementById("wildRandomPopup"),
  wildRandomIcon: document.getElementById("wildRandomIcon"),
  wildRandomBody: document.getElementById("wildRandomBody"),
  poopArea: document.getElementById("poopArea"),
  actionButtons: [...document.querySelectorAll(".action-btn")],
  eventButtons: [...document.querySelectorAll(".event-card")],
  codexStageName: document.getElementById("codexStageName"),
  codexStageDesc: document.getElementById("codexStageDesc"),
  codexStageBar: document.getElementById("codexStageBar"),
  codexStageNext: document.getElementById("codexStageNext"),
  codexTotalInteractions: document.getElementById("codexTotalInteractions"),
  codexHomeInteractions: document.getElementById("codexHomeInteractions"),
  codexWildInteractions: document.getElementById("codexWildInteractions"),
  codexExpressionInteractions: document.getElementById("codexExpressionInteractions"),
  codexDragInteractions: document.getElementById("codexDragInteractions"),
  codexEventStats: document.getElementById("codexEventStats"),
  codexHistoryList: document.getElementById("codexHistoryList"),
  codexAlbumList: document.getElementById("codexAlbumList"),
  codexAdventureList: document.getElementById("codexAdventureList"),
  adventureModal: document.getElementById("adventureModal"),
  adventureModalPanel: document.getElementById("adventureModalPanel"),
  adventureModalImage: document.getElementById("adventureModalImage"),
  adventureModalTitle: document.getElementById("adventureModalTitle"),
  adventureModalStory: document.getElementById("adventureModalStory"),
  gmItem1Btn: document.getElementById("gmItem1Btn"),
  gmItem2Btn: document.getElementById("gmItem2Btn"),
  gmItem3Btn: document.getElementById("gmItem3Btn"),
  gmHealthMinusBtn: document.getElementById("gmHealthMinusBtn"),
  gmSatietyMinusBtn: document.getElementById("gmSatietyMinusBtn"),
  gmIntimacyMinusBtn: document.getElementById("gmIntimacyMinusBtn"),
  gmCleanseItemBtn: document.getElementById("gmCleanseItemBtn"),
  gmOpenWaterGameBtn: document.getElementById("gmOpenWaterGameBtn"),
  gmResetDay1Btn: document.getElementById("gmResetDay1Btn"),
  gmSizePlus1000Btn: document.getElementById("gmSizePlus1000Btn"),
};

const mkCounters = () => Object.fromEntries(Object.keys(EVENT_META).map((k) => [k, 0]));
const mkInteractions = () => ({ total: 0, home: 0, wild: 0, expression: 0, drag: 0 });
const mkCooldowns = () => ({ hotspring: 0, farming: 0, camping: 0, travel: 0 });
const mkItems = () => ({ food: 0, cleanse: 0, item1: 2, item2: 2, item3: 2 });
const mkTray = () => ({ activeItemId: "", remainMs: 0, tickCarryMs: 0 });
const mkWildTask = () => ({ name: "", startedAt: 0, endsAt: 0 });
const mkWaterGameState = () => ({
  unlocked: false,
  successCount: 0,
  nextTriggerAt: 0,
  cooldownMinutes: WATER_GAME_COOLDOWN_DEFAULT_MINUTES,
});
const nextPoopDelayMs = () => POOP_MIN_INTERVAL_MS + Math.random() * (POOP_MAX_INTERVAL_MS - POOP_MIN_INTERVAL_MS);
const mkPickupDrops = () => [];
const nextPickupDelayMs = () => PICKUP_SPAWN_MIN_MS + Math.random() * (PICKUP_SPAWN_MAX_MS - PICKUP_SPAWN_MIN_MS);

const baseState = {
  version: 12,
  name: "史莱姆1",
  createdAt: Date.now(),
  lastTickAt: Date.now(),
  currentScene: "home",
  viewMode: "observe",
  soundEnabled: true,
  satiety: 50,
  health: 50,
  stamina: STAMINA_MAX,
  staminaRecoverTimerMs: 0,
  wildActionDone: false,
  eventCooldowns: mkCooldowns(),
  items: mkItems(),
  tray: mkTray(),
  intimacy: 0,
  cleanliness: 78,
  mood: 76,
  sizeMm: 50,
  maxSizeReachedMm: 50,
  sizeBonusMm: 0,
  poopCount: 0,
  poopSlots: [],
  expressionOverride: "",
  expressionUntil: 0,
  clickWindowStartedAt: Date.now(),
  clickWindowGain: 0,
  intimacySatietyTimerMs: 0,
  intimacyHealthTimerMs: 0,
  intimacySatietyLowTimerMs: 0,
  intimacyHealthLowTimerMs: 0,
  sickSizeTimerMs: 0,
  sickSizePenaltyMm: 0,
  dirtyActive: false,
  dirtyTimerMs: 0,
  dirtyHealthTimerMs: 0,
  nextPoopAt: Date.now() + nextPoopDelayMs(),
  pickupDrops: mkPickupDrops(),
  nextPickupSpawnAt: Date.now() + nextPickupDelayMs(),
  wildTask: mkWildTask(),
  waterGame: mkWaterGameState(),
  growthLoveAdventureShown: false,
  maxStageReached: 0,
  slime: { x: 355, y: 408 },
  logs: ["欢迎回家，史莱姆在等你。"],
  history: [{ at: Date.now(), text: "你领养了史莱姆。" }],
  adventurePhotos: [],
  interactions: mkInteractions(),
  eventCounters: mkCounters(),
};

const runtime = {
  speechTimer: 0,
  gmVisible: false,
  gmFastForward: {
    pressed: false,
    active: false,
    holdTimer: 0,
    repeatTimer: 0,
  },
  foodListOpen: false,
  aiTheme: {
    panelOpen: false,
    busy: false,
    previewConfig: null,
    appliedConfig: null,
  },
  drag: {
    active: false,
    pointerId: -1,
    moved: false,
    startX: 0,
    startY: 0,
    offsetX: 0,
    offsetY: 0,
    lastX: 0,
    lastY: 0,
    lastTime: 0,
    vx: 0,
    vy: 0,
    lastDragEndAt: 0,
  },
  inertia: {
    active: false,
    rafId: 0,
    vx: 0,
    vy: 0,
    lastTs: 0,
    startedAt: 0,
    bounceCount: 0,
    groundedFrames: 0,
    grounded: false,
    lowEnergyFrames: 0,
  },
  bathing: {
    active: false,
    pointerId: -1,
    captureEl: null,
    draggingSoap: false,
    progressMs: 0,
    progressRafId: 0,
    progressLoopLastTs: 0,
    speedPxPerMs: 0,
    inZone: false,
    lastMoveAt: 0,
    lastTs: 0,
    lastX: 0,
    lastY: 0,
    completedAt: 0,
    startedAt: 0,
    timeoutTimer: 0,
  },
  priorityExpression: {
    name: "",
    until: 0,
  },
  waterGame: {
    active: false,
    speechText: "",
    settingsOpen: false,
    settingsDraftMinutes: WATER_GAME_COOLDOWN_DEFAULT_MINUTES,
  },
  statusAnim: {
    active: false,
    rafId: 0,
    runId: 0,
    lastTs: 0,
    frame: 0,
    folder: "",
    pendingFolder: "",
    loadedFolders: {},
    loadingFolders: {},
  },
  autoMotion: {
    active: false,
    rafId: 0,
    lastTs: 0,
    pauseUntil: 0,
    mode: "idle",
    modeUntil: 0,
    jumpsLeft: 0,
    jumpStartX: 0,
    jumpEndX: 0,
    jumpPeakY: 0,
    jumpStartTs: 0,
    jumpDurationMs: 0,
    jumpPauseUntil: 0,
  },
  ui: {
    lastRenderedPoopSignature: "",
    lastRenderedPickupSignature: "",
    lastStatFxSnapshot: null,
    wildGainTimer: 0,
    wildRandomTimer: 0,
    wildPopupLayoutRaf: 0,
    wildPopupLayoutTimer: 0,
    codexScrollDrag: {
      active: false,
      pointerId: -1,
      startY: 0,
      startScrollTop: 0,
    },
  },
  adventureModal: {
    open: false,
    photoId: "",
    customActive: false,
    customTitle: "",
    customStory: "",
    customPhotoSrc: "",
  },
  wildRunnerAnim: {
    active: false,
    rafId: 0,
    lastTs: 0,
    frame: 0,
    currentUrl: "",
    preloaded: false,
    preloading: false,
    loadingPromise: null,
    loadedUrls: {},
  },
};

const clamp = (v, min = 0, max = 100) => Math.max(min, Math.min(max, v));
const num = (v, f) => (Number.isFinite(Number(v)) ? Number(v) : f);
const rand = (a, b) => a + Math.random() * (b - a);
const randInt = (a, b) => Math.floor(rand(a, b + 1));
const mkSvg = (name) => document.createElementNS(SVG_NS, name);
const cloneState = () => JSON.parse(JSON.stringify(baseState));
const isCriticalSick = () => state.health < 10;
const isDirtyActive = () => Boolean(state.dirtyActive);
let shouldShowFirstLoginAdventure = false;

function sanitizePoopSlots(input) {
  const out = [];
  const seen = new Set();
  if (!Array.isArray(input)) return out;
  input.forEach((slot) => {
    const idx = Math.round(num(slot, -1));
    if (idx < 0 || idx >= MAX_POOP_ON_FLOOR || seen.has(idx)) return;
    seen.add(idx);
    out.push(idx);
  });
  return out;
}

function normalizePoopState(target) {
  if (!target || typeof target !== "object") return;
  const targetCount = Math.round(clamp(num(target.poopCount, 0), 0, MAX_POOP_ON_FLOOR));
  const slots = sanitizePoopSlots(target.poopSlots).slice(0, targetCount);
  const used = new Set(slots);
  const candidates = [];
  for (let i = 0; i < MAX_POOP_ON_FLOOR; i += 1) {
    if (!used.has(i)) candidates.push(i);
  }
  for (let i = candidates.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    const tmp = candidates[i];
    candidates[i] = candidates[j];
    candidates[j] = tmp;
  }
  while (slots.length < targetCount && candidates.length > 0) {
    slots.push(candidates.pop());
  }
  target.poopSlots = slots;
  target.poopCount = slots.length;
}

function addRandomPoop(target) {
  normalizePoopState(target);
  if (!target || !Array.isArray(target.poopSlots) || target.poopSlots.length >= MAX_POOP_ON_FLOOR) return false;
  const used = new Set(target.poopSlots);
  const available = [];
  for (let i = 0; i < MAX_POOP_ON_FLOOR; i += 1) if (!used.has(i)) available.push(i);
  if (!available.length) return false;
  const picked = available[randInt(0, available.length - 1)];
  target.poopSlots.push(picked);
  target.poopCount = target.poopSlots.length;
  return true;
}

function removePoop(target, preferredSlot = null) {
  normalizePoopState(target);
  if (!target || !Array.isArray(target.poopSlots) || target.poopSlots.length <= 0) return false;
  let removeAt = -1;
  if (Number.isInteger(preferredSlot)) removeAt = target.poopSlots.indexOf(preferredSlot);
  if (removeAt < 0) removeAt = target.poopSlots.length - 1;
  target.poopSlots.splice(removeAt, 1);
  target.poopCount = target.poopSlots.length;
  return true;
}

function pickupSpawnBounds() {
  const w = refs.homeScene?.clientWidth || 712;
  const h = refs.homeScene?.clientHeight || 760;
  const half = PICKUP_DROP_SIZE / 2;
  const left = (w * PICKUP_ZONE.leftRatio) + half;
  const right = (w * PICKUP_ZONE.rightRatio) - half;
  const top = (h * PICKUP_ZONE.topRatio) + half;
  const bottom = (h * PICKUP_ZONE.bottomRatio) - half;
  return {
    left: Math.min(left, right),
    right: Math.max(left, right),
    top: Math.min(top, bottom),
    bottom: Math.max(top, bottom),
  };
}

let pickupDropSerial = 0;
function nextPickupDropId() {
  pickupDropSerial += 1;
  return `drop_${Date.now().toString(36)}_${pickupDropSerial}`;
}

function sanitizePickupDrops(input) {
  if (!Array.isArray(input)) return [];
  const bounds = pickupSpawnBounds();
  const seen = new Set();
  const out = [];
  for (let i = 0; i < input.length; i += 1) {
    const raw = input[i];
    if (!raw || typeof raw !== "object") continue;
    const itemId = typeof raw.itemId === "string" ? raw.itemId : "";
    if (!ITEM_DEFS[itemId]) continue;
    const xNum = num(raw.x, Number.NaN);
    const yNum = num(raw.y, Number.NaN);
    if (!Number.isFinite(xNum) || !Number.isFinite(yNum)) continue;

    let id = typeof raw.id === "string" ? raw.id.trim() : "";
    if (!id || seen.has(id)) id = nextPickupDropId();
    seen.add(id);
    out.push({
      id,
      itemId,
      x: Math.round(clamp(xNum, bounds.left, bounds.right)),
      y: Math.round(clamp(yNum, bounds.top, bounds.bottom)),
    });
    if (out.length >= PICKUP_MAX_DROPS) break;
  }
  return out;
}

function normalizePickupState(target) {
  if (!target || typeof target !== "object") return;
  target.pickupDrops = sanitizePickupDrops(target.pickupDrops);
  target.nextPickupSpawnAt = num(target.nextPickupSpawnAt, Date.now() + nextPickupDelayMs());
  const now = Date.now();
  if (target.nextPickupSpawnAt < now - DAY_MS || target.nextPickupSpawnAt > now + (90 * DAY_MS)) {
    target.nextPickupSpawnAt = now + nextPickupDelayMs();
  }
}

function findPickupSpawnPoint(existingDrops) {
  const bounds = pickupSpawnBounds();
  let fallback = null;
  for (let i = 0; i < 120; i += 1) {
    const x = rand(bounds.left, bounds.right);
    const y = rand(bounds.top, bounds.bottom);
    let overlapped = false;
    for (let k = 0; k < existingDrops.length; k += 1) {
      const dx = existingDrops[k].x - x;
      const dy = existingDrops[k].y - y;
      if ((dx * dx + dy * dy) < (PICKUP_MIN_DIST * PICKUP_MIN_DIST)) {
        overlapped = true;
        break;
      }
    }
    if (!overlapped) {
      return { x: Math.round(x), y: Math.round(y) };
    }
    if (!fallback) fallback = { x: Math.round(x), y: Math.round(y) };
  }
  return fallback;
}

function spawnRandomPickupDrop(target) {
  if (!target || typeof target !== "object") return null;
  normalizePickupState(target);
  if (!Array.isArray(target.pickupDrops) || target.pickupDrops.length >= PICKUP_MAX_DROPS) return null;
  const itemId = PICKUP_ITEM_ORDER[randInt(0, PICKUP_ITEM_ORDER.length - 1)];
  const point = findPickupSpawnPoint(target.pickupDrops);
  if (!point) return null;
  const drop = { id: nextPickupDropId(), itemId, x: point.x, y: point.y };
  target.pickupDrops.push(drop);
  return drop;
}

function rectsOverlap(a, b) {
  return !(a.right < b.left || a.left > b.right || a.bottom < b.top || a.top > b.bottom);
}

function pickupDropRect(drop) {
  const half = PICKUP_COLLISION_SIZE / 2;
  return {
    left: drop.x - half,
    right: drop.x + half,
    top: drop.y - half,
    bottom: drop.y + half,
  };
}

function statusFrameUrl(folder, frame) {
  const mappedFolder = folder === "normal" ? "nomal" : folder;
  const n = String((frame % STATUS_ANIM_FRAMES) + 1).padStart(2, "0");
  return `./assets/slime_expressions/${mappedFolder}/frame_${n}.svg`;
}

function cooldownRemainMs(name, now = Date.now()) {
  return Math.max(0, num(state.eventCooldowns?.[name], 0) - now);
}

function formatRemain(ms) {
  const sec = Math.max(1, Math.ceil(ms / 1000));
  const m = Math.floor(sec / 60);
  const s = sec % 60;
  if (!m) return `${s}秒`;
  if (!s) return `${m}分`;
  return `${m}分${s}秒`;
}

function activeWildTaskName(now = Date.now()) {
  const task = state.wildTask;
  if (!task || typeof task !== "object") return "";
  const name = typeof task.name === "string" ? task.name : "";
  if (!Object.prototype.hasOwnProperty.call(WILD_EVENT_DURATION_MS, name)) return "";
  return num(task.endsAt, 0) > now ? name : "";
}

function isWildTaskActive(now = Date.now()) {
  return Boolean(activeWildTaskName(now));
}

function wildTaskRemainMs(now = Date.now()) {
  if (!isWildTaskActive(now)) return 0;
  return Math.max(0, num(state.wildTask.endsAt, 0) - now);
}

function isHomeAwayActive(now = Date.now()) {
  return state.viewMode === "observe"
    && state.currentScene === "home"
    && isWildTaskActive(now);
}

function sanitizeWaterCooldownMinutes(value) {
  const minutes = Math.round(num(value, WATER_GAME_COOLDOWN_DEFAULT_MINUTES));
  return WATER_GAME_COOLDOWN_OPTION_SET.has(minutes) ? minutes : WATER_GAME_COOLDOWN_DEFAULT_MINUTES;
}

function waterCooldownMs(minutes = state.waterGame?.cooldownMinutes) {
  return sanitizeWaterCooldownMinutes(minutes) * 60 * 1000;
}

function isWaterGameContextReady(now = Date.now()) {
  return state.viewMode === "observe"
    && state.currentScene === "home"
    && !runtime.bathing.active
    && !isHomeAwayActive(now);
}

function shouldTriggerWaterGame(now = Date.now()) {
  if (runtime.waterGame.active) return false;
  if (!isWaterGameContextReady(now)) return false;
  const unlocked = Boolean(state.waterGame && state.waterGame.unlocked);
  if (!unlocked && num(state.sizeMm, MIN_SIZE_MM) < WATER_GAME_UNLOCK_MM) return false;
  if (!unlocked) return true;
  return now >= Math.max(0, num(state.waterGame.nextTriggerAt, 0));
}

function resetWaterDenyButtonPosition() {
  if (!refs.waterDenyBtn) return;
  refs.waterDenyBtn.style.left = "";
  refs.waterDenyBtn.style.top = "";
  refs.waterDenyBtn.style.bottom = "";
  refs.waterDenyBtn.classList.remove("shifted");
}

function moveWaterDenyButtonRandom() {
  if (!refs.waterGameActions || !refs.waterDenyBtn || !refs.waterDrinkBtn) return false;
  const panel = refs.waterGameActions;
  const denyBtn = refs.waterDenyBtn;
  const drinkBtn = refs.waterDrinkBtn;
  const panelW = panel.clientWidth || 620;
  const panelH = panel.clientHeight || 360;
  const denyW = denyBtn.offsetWidth || 150;
  const denyH = denyBtn.offsetHeight || 74;
  const drinkW = drinkBtn.offsetWidth || 150;
  const drinkH = drinkBtn.offsetHeight || 74;
  const drinkX = Number.isFinite(drinkBtn.offsetLeft) ? drinkBtn.offsetLeft : Math.max(0, panelW - drinkW - 8);
  const drinkY = Number.isFinite(drinkBtn.offsetTop) ? drinkBtn.offsetTop : Math.max(0, (panelH - drinkH) / 2);
  const drinkRect = { l: drinkX - 14, t: drinkY - 14, r: drinkX + drinkW + 14, b: drinkY + drinkH + 14 };
  const curX = Number.isFinite(parseFloat(denyBtn.style.left)) ? parseFloat(denyBtn.style.left) : denyBtn.offsetLeft;
  const curY = Number.isFinite(parseFloat(denyBtn.style.top)) ? parseFloat(denyBtn.style.top) : denyBtn.offsetTop;
  const overlap = (a, b) => a.l < b.r && a.r > b.l && a.t < b.b && a.b > b.t;
  const minPad = 8;
  const minX = minPad;
  const minY = minPad;
  const maxX = Math.max(minX, panelW - denyW - minPad);
  const maxY = Math.max(minY, panelH - denyH - minPad);
  const jumpMinDist = Math.min(
    Math.hypot(panelW, panelH) * 0.68,
    Math.max(190, Math.min(panelW, panelH) * 0.6)
  );

  let picked = null;
  let best = null;
  for (let guard = 0; guard < 180; guard += 1) {
    const x = rand(minX, maxX);
    const y = rand(minY, maxY);
    const rect = { l: x, t: y, r: x + denyW, b: y + denyH };
    if (overlap(rect, drinkRect)) continue;
    const dist = Math.hypot(x - curX, y - curY);
    if (!best || dist > best.dist) best = { x, y, dist };
    if (dist < jumpMinDist) continue;
    picked = { x, y };
    break;
  }
  if (!picked && best) picked = { x: best.x, y: best.y };
  if (!picked) return false;
  denyBtn.style.left = `${picked.x.toFixed(1)}px`;
  denyBtn.style.top = `${picked.y.toFixed(1)}px`;
  denyBtn.style.bottom = "auto";
  denyBtn.classList.add("shifted");
  return true;
}

function syncWaterSettingOptionsUi() {
  const selected = sanitizeWaterCooldownMinutes(
    runtime.waterGame.settingsOpen
      ? runtime.waterGame.settingsDraftMinutes
      : state.waterGame?.cooldownMinutes
  );
  const options = [refs.waterSettingOpt10, refs.waterSettingOpt30, refs.waterSettingOpt60];
  options.forEach((btn) => {
    if (!btn) return;
    const minutes = sanitizeWaterCooldownMinutes(btn.dataset.minutes);
    const active = minutes === selected;
    btn.classList.toggle("active", active);
    btn.setAttribute("aria-checked", active ? "true" : "false");
  });
}

function openWaterSettingModal() {
  if (!runtime.waterGame.active || !isWaterGameContextReady()) return false;
  runtime.waterGame.settingsOpen = true;
  runtime.waterGame.settingsDraftMinutes = sanitizeWaterCooldownMinutes(state.waterGame?.cooldownMinutes);
  syncWaterSettingOptionsUi();
  return true;
}

function closeWaterSettingModal(save = false) {
  if (save) {
    state.waterGame.cooldownMinutes = sanitizeWaterCooldownMinutes(runtime.waterGame.settingsDraftMinutes);
  }
  runtime.waterGame.settingsOpen = false;
  runtime.waterGame.settingsDraftMinutes = sanitizeWaterCooldownMinutes(state.waterGame?.cooldownMinutes);
  syncWaterSettingOptionsUi();
}

function syncWaterGameUi() {
  const visible = runtime.waterGame.active && isWaterGameContextReady();
  if (refs.waterGamePopup) refs.waterGamePopup.classList.toggle("hidden", !visible);
  if (!visible) {
    if (refs.waterSettingModal) refs.waterSettingModal.classList.add("hidden");
    if (refs.waterSettingBtn) refs.waterSettingBtn.setAttribute("aria-expanded", "false");
    return;
  }
  const forcedDrink = num(state.waterGame.successCount, 0) < WATER_GAME_FORCE_DRINK_COUNT;
  if (refs.waterDenyBtn) {
    refs.waterDenyBtn.classList.toggle("evasive", forcedDrink);
    refs.waterDenyBtn.setAttribute("aria-label", forcedDrink ? "不喝（会躲开）" : "不喝");
  }
  if (refs.waterDrinkBtn) refs.waterDrinkBtn.disabled = false;
  if (refs.waterSettingModal) refs.waterSettingModal.classList.toggle("hidden", !runtime.waterGame.settingsOpen);
  if (refs.waterSettingBtn) refs.waterSettingBtn.setAttribute("aria-expanded", runtime.waterGame.settingsOpen ? "true" : "false");
  syncWaterSettingOptionsUi();
  if (!runtime.waterGame.speechText) runtime.waterGame.speechText = eventSpeechText("water_game_prompt", "到点喝水啦！");
}

function activateWaterGame() {
  if (runtime.waterGame.active) return false;
  pauseAutoMotion();
  stopInertia();
  runtime.waterGame.active = true;
  runtime.waterGame.speechText = eventSpeechText("water_game_prompt", "到点喝水啦！");
  runtime.waterGame.settingsOpen = false;
  runtime.waterGame.settingsDraftMinutes = sanitizeWaterCooldownMinutes(state.waterGame?.cooldownMinutes);
  state.waterGame.unlocked = true;
  resetWaterDenyButtonPosition();
  addLog("喝水小游戏触发：到点喝水啦！", true);
  addHistory("小游戏触发：喝水提醒");
  return true;
}

function dismissWaterGame() {
  if (!runtime.waterGame.active) return;
  runtime.waterGame.active = false;
  runtime.waterGame.speechText = "";
  runtime.waterGame.settingsOpen = false;
  runtime.waterGame.settingsDraftMinutes = sanitizeWaterCooldownMinutes(state.waterGame?.cooldownMinutes);
  resetWaterDenyButtonPosition();
  if (refs.waterGamePopup) refs.waterGamePopup.classList.add("hidden");
  if (refs.waterSettingModal) refs.waterSettingModal.classList.add("hidden");
  if (refs.waterSettingBtn) refs.waterSettingBtn.setAttribute("aria-expanded", "false");
}

function playWaterSplashFx() {
  if (!refs.homeFxLayer) return;
  const sceneW = refs.homeScene?.clientWidth || 712;
  const sceneH = refs.homeScene?.clientHeight || 760;
  spawnFx(refs.homeFxLayer, "fx-water-splash", 0, 0, {}, 980);
  for (let i = 0; i < 28; i += 1) {
    spawnFx(
      refs.homeFxLayer,
      "fx-bubble",
      rand(40, sceneW - 40),
      rand(80, sceneH - 70),
      {
        "--dx": `${rand(-54, 54).toFixed(1)}px`,
        "--dy": `${rand(-150, -70).toFixed(1)}px`,
        "--dur": `${rand(0.72, 1.12).toFixed(2)}s`,
      },
      1100
    );
  }
}

function maybeTriggerWaterGame(now = Date.now()) {
  if (!shouldTriggerWaterGame(now)) return false;
  return activateWaterGame();
}

function stageIndex(size) {
  let i = 0;
  for (let k = 0; k < STAGES.length; k += 1) if (size >= STAGES[k].t) i = k;
  return i;
}

function shouldMuteHistoryText(text) {
  const msg = (typeof text === "string" ? text.trim() : "");
  if (!msg) return false;
  if (msg.includes("图鉴已打开，可以查看成长和历史。")) return true;
  if (msg.includes("图鉴已打开，可以查看成长和历史")) return true;
  if (msg.includes("日记已打开，可以查看成长和历史。")) return true;
  if (msg.includes("日记已打开，可以查看成长和历史")) return true;
  if (msg.includes("触发对白：回到观察模式，继续陪伴史莱姆。")) return true;
  if (msg.includes("触发对白：回到观察模式，继续陪伴史莱姆")) return true;
  if (msg.includes("回到观察模式，继续陪伴史莱姆。")) return true;
  if (msg.includes("回到观察模式，继续陪伴史莱姆")) return true;
  return false;
}

function normHistory(input, fallback) {
  if (!Array.isArray(input) || !input.length) return fallback;
  const out = [];
  input.forEach((it) => {
    if (typeof it === "string" && it.trim() && !shouldMuteHistoryText(it)) out.push({ at: Date.now(), text: it.trim() });
    else if (it && typeof it === "object" && typeof it.text === "string" && it.text.trim() && !shouldMuteHistoryText(it.text)) out.push({ at: num(it.at, Date.now()), text: it.text.trim() });
  });
  return out.length ? out.slice(0, HISTORY_LIMIT) : fallback;
}

function normalizeAdventurePhotoSrc(srcRaw, seed = 0) {
  const src = typeof srcRaw === "string" ? srcRaw.trim() : "";
  if (src === FIRST_LOGIN_ADVENTURE_IMAGE) return src;
  if (src === GROWTH_LOVE_ADVENTURE_IMAGE) return src;
  if (ADVENTURE_PHOTO_SRC_POOL.includes(src)) return src;
  const idx = Math.abs(Math.round(num(seed, 0))) % ADVENTURE_PHOTO_SRC_POOL.length;
  return ADVENTURE_PHOTO_SRC_POOL[idx] || ADVENTURE_PHOTO_SRC_POOL[0];
}

function normalizeAdventurePhotos(input, fallback = []) {
  if (!Array.isArray(input) || !input.length) return Array.isArray(fallback) ? fallback.slice(0, ADVENTURE_PHOTO_LIMIT) : [];
  const out = [];
  input.forEach((it) => {
    if (!it || typeof it !== "object") return;
    const srcRaw = typeof it.photoSrc === "string" ? it.photoSrc.trim() : "";
    const storyRaw = typeof it.story === "string" ? it.story.trim() : "";
    if (!storyRaw) return;
    const story = storyRaw.length > ADVENTURE_STORY_MAX_CHARS ? storyRaw.slice(0, ADVENTURE_STORY_MAX_CHARS) : storyRaw;
    const at = Math.max(0, Math.round(num(it.at, Date.now())));
    const idRaw = typeof it.id === "string" ? it.id.trim() : "";
    const id = idRaw || `adv_${at.toString(36)}_${out.length}`;
    const photoSrc = normalizeAdventurePhotoSrc(srcRaw, at + out.length);
    out.push({ id, at, story, photoSrc });
  });
  return out.slice(0, ADVENTURE_PHOTO_LIMIT);
}

function randomGeminiAdventureStory() {
  const story = `${GEMINI_STORY_PREFIX[randInt(0, GEMINI_STORY_PREFIX.length - 1)]}${GEMINI_STORY_PLACE[randInt(0, GEMINI_STORY_PLACE.length - 1)]}${GEMINI_STORY_ACTION[randInt(0, GEMINI_STORY_ACTION.length - 1)]}${GEMINI_STORY_ENDING[randInt(0, GEMINI_STORY_ENDING.length - 1)]}`;
  return story.length > ADVENTURE_STORY_MAX_CHARS ? story.slice(0, ADVENTURE_STORY_MAX_CHARS) : story;
}

function pickAdventurePhotoSrc(existingPhotos = state.adventurePhotos) {
  const counts = new Map();
  ADVENTURE_PHOTO_SRC_POOL.forEach((src) => counts.set(src, 0));
  const photos = normalizeAdventurePhotos(existingPhotos, []);
  photos.forEach((photo) => {
    if (!counts.has(photo.photoSrc)) return;
    counts.set(photo.photoSrc, Math.max(0, num(counts.get(photo.photoSrc), 0)) + 1);
  });
  let minCount = Infinity;
  counts.forEach((count) => {
    minCount = Math.min(minCount, Math.max(0, num(count, 0)));
  });
  const candidates = ADVENTURE_PHOTO_SRC_POOL.filter((src) => Math.max(0, num(counts.get(src), 0)) === minCount);
  const pool = candidates.length ? candidates : ADVENTURE_PHOTO_SRC_POOL;
  return pool[randInt(0, pool.length - 1)];
}

function addAdventurePhotoRecord(storyText, photoSrcOverride = "") {
  const story = (typeof storyText === "string" ? storyText.trim() : "").slice(0, ADVENTURE_STORY_MAX_CHARS);
  if (!story) return null;
  const at = Date.now();
  const photoSrc = (typeof photoSrcOverride === "string" && photoSrcOverride.trim())
    ? normalizeAdventurePhotoSrc(photoSrcOverride, at)
    : pickAdventurePhotoSrc(state.adventurePhotos);
  const rec = {
    id: `adv_${at.toString(36)}_${randInt(100, 999)}`,
    at,
    story,
    photoSrc,
  };
  if (!Array.isArray(state.adventurePhotos)) state.adventurePhotos = [];
  state.adventurePhotos.unshift(rec);
  state.adventurePhotos = state.adventurePhotos.slice(0, ADVENTURE_PHOTO_LIMIT);
  return rec;
}

let state = loadState();

const sound = {
  ctx: null,
  bus: null,
  ensure() {
    if (!state.soundEnabled) return false;
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return false;
    if (!this.ctx) {
      try {
        this.ctx = new AC();
        this.bus = this.ctx.createGain();
        this.bus.gain.value = 0.84;
        this.bus.connect(this.ctx.destination);
      } catch {
        this.ctx = null;
        this.bus = null;
        return false;
      }
    }
    if (this.ctx.state === "suspended") this.ctx.resume().catch(() => {});
    return true;
  },
  tone(f = 440, d = 0.1, type = "sine", g = 0.02, delay = 0, to = null) {
    if (!this.ensure() || !this.ctx || !this.bus) return;
    const o = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    const t0 = this.ctx.currentTime + delay;
    const t1 = t0 + d;
    o.type = type;
    o.frequency.setValueAtTime(Math.max(20, f), t0);
    if (Number.isFinite(to)) o.frequency.exponentialRampToValueAtTime(Math.max(20, to), t1);
    gain.gain.setValueAtTime(0.0001, t0);
    gain.gain.exponentialRampToValueAtTime(Math.max(0.0001, g), t0 + Math.min(0.03, d * 0.4));
    gain.gain.exponentialRampToValueAtTime(0.0001, t1);
    o.connect(gain);
    gain.connect(this.bus);
    o.start(t0);
    o.stop(t1 + 0.02);
  },
  noise(d = 0.2, g = 0.015, delay = 0, hp = 700) {
    if (!this.ensure() || !this.ctx || !this.bus) return;
    const len = Math.max(1, Math.floor(this.ctx.sampleRate * d));
    const buf = this.ctx.createBuffer(1, len, this.ctx.sampleRate);
    const data = buf.getChannelData(0);
    for (let i = 0; i < len; i += 1) data[i] = (Math.random() * 2 - 1) * 0.9;
    const src = this.ctx.createBufferSource();
    const gain = this.ctx.createGain();
    const f = this.ctx.createBiquadFilter();
    f.type = "highpass";
    f.frequency.value = hp;
    const t0 = this.ctx.currentTime + delay;
    const t1 = t0 + d;
    gain.gain.setValueAtTime(0.0001, t0);
    gain.gain.exponentialRampToValueAtTime(Math.max(0.0001, g), t0 + Math.min(0.04, d * 0.45));
    gain.gain.exponentialRampToValueAtTime(0.0001, t1);
    src.buffer = buf;
    src.connect(f);
    f.connect(gain);
    gain.connect(this.bus);
    src.start(t0);
    src.stop(t1 + 0.02);
  },
  play(name) {
    if (!this.ensure()) return;
    if (name === "feed") { this.tone(360, 0.09, "triangle", 0.028, 0, 460); this.tone(520, 0.1, "triangle", 0.024, 0.08, 650); }
    else if (name === "cleanPoop") { this.tone(220, 0.11, "square", 0.023, 0, 160); this.noise(0.06, 0.01, 0.02, 1200); }
    else if (name === "bath") { this.noise(0.24, 0.017, 0, 600); this.tone(520, 0.2, "sine", 0.018, 0, 420); }
    else if (name === "heal") { this.tone(560, 0.12, "sine", 0.024); this.tone(700, 0.14, "sine", 0.023, 0.08); this.tone(860, 0.15, "sine", 0.02, 0.16); }
    else if (name === "chat") { this.tone(410, 0.07, "triangle", 0.022); this.tone(470, 0.07, "triangle", 0.022, 0.07); this.tone(530, 0.09, "triangle", 0.02, 0.14); }
    else if (name === "hotspring") { this.noise(0.32, 0.018, 0, 700); this.tone(300, 0.24, "sine", 0.018, 0, 240); }
    else if (name === "farming") { this.tone(280, 0.08, "triangle", 0.024); this.tone(330, 0.08, "triangle", 0.022, 0.08); this.tone(390, 0.09, "triangle", 0.02, 0.16); }
    else if (name === "camping") { this.noise(0.2, 0.014, 0, 900); this.tone(210, 0.2, "sawtooth", 0.016, 0.03, 180); }
    else if (name === "travel") { this.tone(380, 0.24, "sine", 0.026, 0, 980); this.tone(780, 0.2, "triangle", 0.018, 0.08, 500); }
    else if (name === "scene") this.tone(300, 0.12, "triangle", 0.022, 0, 420);
    else if (name === "expression") this.tone(640, 0.07, "triangle", 0.02, 0, 780);
    else if (name === "drag") this.tone(220, 0.11, "sine", 0.018, 0, 330);
    else if (name === "mode") this.tone(460, 0.09, "triangle", 0.018, 0, 560);
    else if (name === "toggleOn") this.tone(520, 0.1, "triangle", 0.024, 0, 780);
    else if (name === "toggleOff") this.tone(360, 0.11, "triangle", 0.022, 0, 220);
    else if (name === "deny") this.tone(190, 0.1, "square", 0.018, 0, 150);
  },
};

function loadState() {
  try {
    const raw = localStorage.getItem(SAVE_KEY);
    if (!raw) {
      shouldShowFirstLoginAdventure = true;
      return cloneState();
    }
    shouldShowFirstLoginAdventure = false;
    const parsed = JSON.parse(raw);
    const base = cloneState();
    const s = {
      ...base,
      ...parsed,
      slime: { ...base.slime, ...(parsed.slime || {}) },
      interactions: { ...base.interactions, ...(parsed.interactions || {}) },
      eventCounters: { ...base.eventCounters, ...(parsed.eventCounters || {}) },
      eventCooldowns: { ...base.eventCooldowns, ...(parsed.eventCooldowns || {}) },
      items: { ...base.items, ...(parsed.items || {}) },
      tray: { ...base.tray, ...(parsed.tray || {}) },
      wildTask: { ...base.wildTask, ...(parsed.wildTask || {}) },
      waterGame: { ...base.waterGame, ...(parsed.waterGame || {}) },
      logs: Array.isArray(parsed.logs) && parsed.logs.length ? parsed.logs.slice(0, LOG_LIMIT) : base.logs,
      history: normHistory(parsed.history, base.history),
      adventurePhotos: normalizeAdventurePhotos(parsed.adventurePhotos, base.adventurePhotos),
    };
    const rawVersion = Math.round(num(parsed.version, 0));
    s.version = 12;
    s.currentScene = s.currentScene === "wild" ? "wild" : "home";
    s.viewMode = s.viewMode === "codex" ? "codex" : "observe";
    s.soundEnabled = typeof s.soundEnabled === "boolean" ? s.soundEnabled : true;
    s.createdAt = num(s.createdAt, base.createdAt);
    s.lastTickAt = num(s.lastTickAt, Date.now());
    ["satiety", "health", "cleanliness", "mood"].forEach((k) => { s[k] = clamp(num(s[k], base[k])); });
    const rawStamina = num(s.stamina, base.stamina);
    const migratedStamina = (rawVersion < 5 || rawStamina > STAMINA_MAX)
      ? Math.round(rawStamina / 20)
      : Math.round(rawStamina);
    s.stamina = clamp(migratedStamina, 0, STAMINA_MAX);
    s.staminaRecoverTimerMs = clamp(num(s.staminaRecoverTimerMs, 0), 0, STAMINA_RECOVER_INTERVAL_MS);
    s.wildActionDone = Boolean(s.wildActionDone);
    s.intimacy = clamp(num(s.intimacy, base.intimacy), 0, INTIMACY_MAX);
    s.sizeMm = Math.max(MIN_SIZE_MM, num(s.sizeMm, base.sizeMm));
    s.maxSizeReachedMm = Math.max(MIN_SIZE_MM, num(s.maxSizeReachedMm, Math.max(base.maxSizeReachedMm, s.sizeMm)));
    s.sizeBonusMm = clamp(num(s.sizeBonusMm, base.sizeBonusMm), 0, MAX_SIZE_MM - MIN_SIZE_MM);
    s.poopCount = Math.round(clamp(num(s.poopCount, base.poopCount), 0, MAX_POOP_ON_FLOOR));
    s.poopSlots = sanitizePoopSlots(parsed.poopSlots);
    s.expressionOverride = typeof s.expressionOverride === "string" ? s.expressionOverride : "";
    s.expressionUntil = num(s.expressionUntil, 0);
    s.clickWindowStartedAt = num(s.clickWindowStartedAt, Date.now());
    s.clickWindowGain = Math.round(clamp(num(s.clickWindowGain, 0), 0, CLICK_WINDOW_GAIN_MAX));
    s.intimacySatietyTimerMs = clamp(num(s.intimacySatietyTimerMs, 0), 0, INTIMACY_TICK_MS);
    s.intimacyHealthTimerMs = clamp(num(s.intimacyHealthTimerMs, 0), 0, INTIMACY_HEALTH_UP_TICK_MS);
    s.intimacySatietyLowTimerMs = clamp(num(s.intimacySatietyLowTimerMs, 0), 0, INTIMACY_TICK_MS);
    s.intimacyHealthLowTimerMs = clamp(num(s.intimacyHealthLowTimerMs, 0), 0, INTIMACY_TICK_MS);
    s.sickSizeTimerMs = clamp(num(s.sickSizeTimerMs, 0), 0, SICK_SIZE_DECAY_TICK_MS);
    s.sickSizePenaltyMm = clamp(num(s.sickSizePenaltyMm, 0), 0, MAX_SIZE_MM - MIN_SIZE_MM);
    s.dirtyActive = Boolean(s.dirtyActive);
    s.dirtyTimerMs = clamp(num(s.dirtyTimerMs, 0), 0, DIRTY_APPEAR_INTERVAL_MS);
    s.dirtyHealthTimerMs = clamp(num(s.dirtyHealthTimerMs, 0), 0, DIRTY_HEALTH_DECAY_TICK_MS);
    s.nextPoopAt = num(s.nextPoopAt, Date.now() + nextPoopDelayMs());
    if (s.nextPoopAt < Date.now() - DAY_MS) {
      s.nextPoopAt = Date.now() + nextPoopDelayMs();
    }
    normalizePoopState(s);
    s.pickupDrops = sanitizePickupDrops(parsed.pickupDrops);
    s.nextPickupSpawnAt = num(s.nextPickupSpawnAt, Date.now() + nextPickupDelayMs());
    if (s.nextPickupSpawnAt < Date.now() - DAY_MS || s.nextPickupSpawnAt > Date.now() + (90 * DAY_MS)) {
      s.nextPickupSpawnAt = Date.now() + nextPickupDelayMs();
    }
    s.slime.x = num(s.slime.x, base.slime.x);
    s.slime.y = num(s.slime.y, base.slime.y);
    Object.keys(base.eventCooldowns).forEach((k) => { s.eventCooldowns[k] = Math.max(0, Math.round(num(s.eventCooldowns[k], 0))); });
    Object.keys(base.items).forEach((k) => { s.items[k] = Math.max(0, Math.round(num(s.items[k], 0))); });
    if (rawVersion < 8 && s.items.item1 <= 0 && s.items.food > 0) {
      s.items.item1 = Math.max(0, Math.round(num(s.items.food, 0)));
    }
    if (rawVersion < 9 && Array.isArray(parsed.pickupDrops) && parsed.pickupDrops.length > 0) {
      s.pickupDrops = sanitizePickupDrops(parsed.pickupDrops);
    }
    s.tray.activeItemId = FOOD_ITEM_DEFS[s.tray.activeItemId] ? s.tray.activeItemId : "";
    s.tray.remainMs = Math.max(0, Math.round(num(s.tray.remainMs, 0)));
    s.tray.tickCarryMs = Math.max(0, Math.round(num(s.tray.tickCarryMs, 0)));
    if (!s.tray.activeItemId || s.tray.remainMs <= 0) {
      s.tray.activeItemId = "";
      s.tray.remainMs = 0;
      s.tray.tickCarryMs = 0;
    }
    s.wildTask.name = typeof s.wildTask?.name === "string" ? s.wildTask.name : "";
    if (!Object.prototype.hasOwnProperty.call(WILD_EVENT_DURATION_MS, s.wildTask.name)) s.wildTask.name = "";
    s.wildTask.startedAt = Math.max(0, Math.round(num(s.wildTask?.startedAt, 0)));
    s.wildTask.endsAt = Math.max(0, Math.round(num(s.wildTask?.endsAt, 0)));
    if (!s.wildTask.name || s.wildTask.endsAt <= s.wildTask.startedAt) s.wildTask = mkWildTask();
    s.waterGame = (s.waterGame && typeof s.waterGame === "object") ? s.waterGame : mkWaterGameState();
    s.waterGame.unlocked = Boolean(s.waterGame.unlocked);
    s.waterGame.successCount = Math.max(0, Math.round(num(s.waterGame.successCount, 0)));
    s.waterGame.nextTriggerAt = Math.max(0, Math.round(num(s.waterGame.nextTriggerAt, 0)));
    s.waterGame.cooldownMinutes = sanitizeWaterCooldownMinutes(s.waterGame.cooldownMinutes);
    s.growthLoveAdventureShown = Boolean(s.growthLoveAdventureShown);
    if (s.waterGame.nextTriggerAt > Date.now() + (365 * DAY_MS)) s.waterGame.nextTriggerAt = Date.now() + waterCooldownMs(s.waterGame.cooldownMinutes);
    s.adventurePhotos = normalizeAdventurePhotos(parsed.adventurePhotos, base.adventurePhotos);
    if (s.currentScene !== "wild") s.wildActionDone = false;
    Object.keys(base.interactions).forEach((k) => { s.interactions[k] = Math.max(0, Math.round(num(s.interactions[k], base.interactions[k]))); });
    Object.keys(base.eventCounters).forEach((k) => { s.eventCounters[k] = Math.max(0, Math.round(num(s.eventCounters[k], base.eventCounters[k]))); });
    s.maxStageReached = Object.prototype.hasOwnProperty.call(parsed, "maxStageReached")
      ? Math.round(clamp(num(s.maxStageReached, stageIndex(s.sizeMm)), 0, STAGES.length - 1))
      : stageIndex(s.sizeMm);
    return s;
  } catch {
    shouldShowFirstLoginAdventure = true;
    return cloneState();
  }
}

function saveState() { localStorage.setItem(SAVE_KEY, JSON.stringify(state)); }
function companionDays() { return Math.floor(Math.max(0, Date.now() - state.createdAt) / DAY_MS) + 1; }
function timeText(ts = Date.now()) { const d = new Date(ts); return `${String(d.getHours()).padStart(2, "0")}:${String(d.getMinutes()).padStart(2, "0")}`; }
function historyTime(ts) { const d = new Date(num(ts, Date.now())); return `${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")} ${timeText(d.getTime())}`; }
function addLog(text, clock = false) { state.logs.unshift(clock ? `[${timeText()}] ${text}` : text); state.logs = state.logs.slice(0, LOG_LIMIT); }
function addHistory(text) {
  const msg = (typeof text === "string" ? text.trim() : "");
  if (!msg || shouldMuteHistoryText(msg)) return;
  state.history.unshift({ at: Date.now(), text: msg });
  state.history = state.history.slice(0, HISTORY_LIMIT);
}
function addHistoryTriggeredSpeech(text) {
  const msg = (typeof text === "string" ? text.trim() : "");
  if (!msg) return;
  const line = `触发对白：${msg}`;
  const head = state.history && state.history[0] ? state.history[0] : null;
  const headText = head && typeof head.text === "string" ? head.text : "";
  const headAt = num(head && head.at, 0);
  const now = Date.now();
  if (headText === line && now - headAt < 800) return;
  addHistory(line);
}

function safeCssValue(input, maxLen = 140) {
  if (typeof input !== "string") return "";
  const s = input.trim();
  if (!s || s.length > maxLen) return "";
  if (/[{};<>\n\r]/.test(s)) return "";
  return s;
}

function clampRadiusValue(input) {
  const n = Math.round(num(input, Number.NaN));
  if (!Number.isFinite(n)) return null;
  return clamp(n, 4, 36);
}

function sanitizeUiThemeConfig(input) {
  if (!input || typeof input !== "object") return null;
  const rawName = typeof input.name === "string" ? input.name.trim() : "";
  const name = rawName ? rawName.slice(0, 42) : "AI主题";
  const sourceTokens = (input.tokens && typeof input.tokens === "object") ? input.tokens : {};
  const sourceRadius = (input.radius && typeof input.radius === "object") ? input.radius : {};

  const tokens = {};
  UI_THEME_ALLOWED_TOKENS.forEach((key) => {
    const value = safeCssValue(sourceTokens[key], 160);
    if (value) tokens[key] = value;
  });

  const radius = {};
  UI_THEME_ALLOWED_RADIUS.forEach((key) => {
    const value = clampRadiusValue(sourceRadius[key]);
    if (value != null) radius[key] = value;
  });

  if (!Object.keys(tokens).length && !Object.keys(radius).length) return null;
  return { name, tokens, radius };
}

function ensureUiThemeStyleEl() {
  let el = document.getElementById(UI_THEME_STYLE_ID);
  if (el) return el;
  el = document.createElement("style");
  el.id = UI_THEME_STYLE_ID;
  document.head.appendChild(el);
  return el;
}

function buildUiThemeCss(themeConfig) {
  const t = (themeConfig && themeConfig.tokens) || {};
  const r = (themeConfig && themeConfig.radius) || {};
  const lines = [];
  const add = (selector, prop, value) => {
    if (!value) return;
    lines.push(`${selector} { ${prop}: ${value} !important; }`);
  };
  const addPx = (selector, prop, value) => {
    if (!Number.isFinite(value)) return;
    lines.push(`${selector} { ${prop}: ${value}px !important; }`);
  };

  add(".game-frame", "background", t.frameBg);
  add(".pet-card, .days-card, .status-board, .codex-card, .ai-theme-panel", "background", t.panelBg);
  add(".pet-card, .days-card, .status-board, .codex-card, .wild-popup, .home-away-mask, .ai-theme-panel, .history-list, .album-item, .adventure-photo-item", "border-color", t.panelBorder);
  add(".game-frame, .status-board, .codex-panel, .codex-card, .event-card, .wild-popup-title, .wild-popup-body, .ai-theme-title, .ai-theme-name, .ai-theme-status, .stage-next", "color", t.textPrimary);
  add("#petName, #sizeValue, #daysValue", "color", t.textStrong);
  add(".speech-bubble", "background", t.speechBg);
  add(".speech-bubble", "color", t.speechText);
  add(".mode-btn, .ai-theme-btn, .ai-theme-action, .dirty-bath-btn, .sick-heal-btn", "background", t.buttonBg);
  add(".mode-btn, .ai-theme-btn, .ai-theme-action, .dirty-bath-btn, .sick-heal-btn", "color", t.buttonText);
  add(".event-card", "background", t.eventCardBg);
  add(".wild-popup, .home-away-mask, .ai-theme-panel", "background", t.popupBg);
  if (t.accent && t.accentWarm) {
    add(".growth-rate-fill, .stage-progress-fill", "background", `linear-gradient(90deg, ${t.accent}, ${t.accentWarm})`);
  } else {
    add(".growth-rate-fill, .stage-progress-fill", "background", t.accent);
  }
  add(".mode-btn.active", "background", t.accent);
  add(".mode-btn.active", "color", t.buttonText || t.textStrong || "");
  add(".ai-theme-action.primary", "background", t.accentWarm);

  addPx(".pet-card, .days-card, .status-board, .codex-card, .wild-popup, .home-away-mask, .ai-theme-panel", "border-radius", r.panel);
  addPx(".mode-btn, .ai-theme-btn, .ai-theme-action, .dirty-bath-btn, .sick-heal-btn", "border-radius", r.button);
  addPx(".speech-bubble", "border-radius", r.bubble);
  return lines.join("\n");
}

function setAiThemeStatus(text, isError = false) {
  if (!refs.aiThemeStatus) return;
  refs.aiThemeStatus.textContent = String(text || "");
  refs.aiThemeStatus.classList.toggle("error", Boolean(isError));
}

function syncAiThemeUi() {
  if (refs.aiThemePanel) refs.aiThemePanel.classList.toggle("hidden", !runtime.aiTheme.panelOpen);
  if (refs.aiThemeGenerateBtn) refs.aiThemeGenerateBtn.disabled = Boolean(runtime.aiTheme.busy);
  if (refs.aiThemeApplyBtn) refs.aiThemeApplyBtn.disabled = Boolean(runtime.aiTheme.busy || !runtime.aiTheme.previewConfig);
  if (refs.aiThemeResetBtn) refs.aiThemeResetBtn.disabled = Boolean(runtime.aiTheme.busy && !runtime.aiTheme.appliedConfig);
  if (refs.aiThemeBtn) refs.aiThemeBtn.textContent = runtime.aiTheme.busy ? "AI生成中" : "AI换肤";
  if (refs.aiThemeName) {
    const picked = runtime.aiTheme.previewConfig || runtime.aiTheme.appliedConfig;
    refs.aiThemeName.textContent = `当前：${picked && picked.name ? picked.name : "默认主题"}`;
  }
}

function setAiThemePanelOpen(open) {
  runtime.aiTheme.panelOpen = Boolean(open);
  syncAiThemeUi();
}

function loadSavedUiThemeConfig() {
  try {
    const raw = localStorage.getItem(UI_THEME_SAVE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    return sanitizeUiThemeConfig(parsed);
  } catch {
    return null;
  }
}

function persistUiThemeConfig(config) {
  if (!config) {
    localStorage.removeItem(UI_THEME_SAVE_KEY);
    return;
  }
  localStorage.setItem(UI_THEME_SAVE_KEY, JSON.stringify(config));
}

function applyUiThemeConfig(config, persist = false) {
  const normalized = sanitizeUiThemeConfig(config);
  if (!normalized) return false;
  const css = buildUiThemeCss(normalized);
  const styleEl = ensureUiThemeStyleEl();
  styleEl.textContent = css;
  runtime.aiTheme.previewConfig = normalized;
  if (persist) {
    runtime.aiTheme.appliedConfig = normalized;
    persistUiThemeConfig(normalized);
  }
  syncAiThemeUi();
  return true;
}

function clearUiThemeConfig(clearSaved = true) {
  const styleEl = document.getElementById(UI_THEME_STYLE_ID);
  if (styleEl) styleEl.textContent = "";
  runtime.aiTheme.previewConfig = null;
  if (clearSaved) {
    runtime.aiTheme.appliedConfig = null;
    persistUiThemeConfig(null);
  }
  syncAiThemeUi();
}

async function fetchGeminiUiThemeConfig(promptText) {
  const prompt = String(promptText || "").trim().slice(0, UI_THEME_PROMPT_LIMIT);
  const controller = new AbortController();
  const timer = window.setTimeout(() => controller.abort(), 18000);
  try {
    const response = await fetch("/api/gemini/ui-theme", {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify({
        prompt,
        scene: state.currentScene,
        mode: state.viewMode,
      }),
      signal: controller.signal,
    });
    const payload = await response.json().catch(() => ({}));
    if (!response.ok || !payload || payload.ok !== true) {
      const code = payload && typeof payload.error === "string" ? payload.error : `http_${response.status}`;
      throw new Error(code);
    }
    const theme = sanitizeUiThemeConfig(payload.theme);
    if (!theme) throw new Error("invalid_theme_payload");
    return { model: payload.model || "", theme };
  } finally {
    window.clearTimeout(timer);
  }
}

function aiThemeErrorText(error) {
  const code = error && typeof error.message === "string" ? error.message : "unknown";
  if (code === "missing_gemini_api_key") return "缺少 GEMINI_API_KEY，请先在终端设置后重启。";
  if (code === "gemini_timeout") return "Gemini 请求超时，请稍后重试。";
  if (code.startsWith("gemini_http_")) return `Gemini 服务返回错误：${code}`;
  if (code === "invalid_theme_payload" || code === "gemini_invalid_theme_json") return "Gemini 没有返回可用的JSON主题（常见是返回了解释文本或字段不匹配），请重试。";
  if (code === "AbortError") return "请求超时或被中断。";
  return `生成失败：${code}`;
}

async function onAiThemeGenerateClick() {
  if (runtime.aiTheme.busy) return;
  runtime.aiTheme.busy = true;
  syncAiThemeUi();
  const inputPrompt = refs.aiThemePrompt ? refs.aiThemePrompt.value : "";
  const prompt = inputPrompt && inputPrompt.trim() ? inputPrompt.trim() : UI_THEME_DEFAULT_PROMPT;
  setAiThemeStatus("正在调用 Gemini 生成主题，请稍候…");
  try {
    const result = await fetchGeminiUiThemeConfig(prompt);
    const ok = applyUiThemeConfig(result.theme, false);
    if (!ok) throw new Error("invalid_theme_payload");
    setAiThemeStatus(`预览已生成：${result.theme.name}（模型：${result.model || "Gemini"}）。`);
    addHistory(`AI换肤预览：${result.theme.name}`);
  } catch (error) {
    setAiThemeStatus(aiThemeErrorText(error), true);
  } finally {
    runtime.aiTheme.busy = false;
    syncAiThemeUi();
  }
}

function onAiThemeApplyClick() {
  if (runtime.aiTheme.busy) return;
  const preview = runtime.aiTheme.previewConfig;
  if (!preview) {
    setAiThemeStatus("请先点击“生成预览”。", true);
    return;
  }
  applyUiThemeConfig(preview, true);
  setAiThemeStatus(`已应用并保存：${preview.name}`);
  addHistory(`AI换肤应用：${preview.name}`);
  saveState();
}

function onAiThemeResetClick() {
  if (runtime.aiTheme.busy) return;
  clearUiThemeConfig(true);
  setAiThemeStatus("已恢复默认主题。");
  addHistory("AI换肤：恢复默认主题");
  saveState();
}

function onAiThemeBtnClick() {
  setAiThemePanelOpen(!runtime.aiTheme.panelOpen);
}

function onAiThemeCloseClick() {
  setAiThemePanelOpen(false);
}

function record(category, key, historyText) {
  state.interactions.total += 1;
  if (category === "home") state.interactions.home += 1;
  if (category === "wild") state.interactions.wild += 1;
  if (category === "expression") state.interactions.expression += 1;
  if (category === "drag") state.interactions.drag += 1;
  if (key && Object.prototype.hasOwnProperty.call(state.eventCounters, key)) state.eventCounters[key] += 1;
  if (historyText) addHistory(historyText);
}

function fitScreen() {
  const vv = window.visualViewport;
  const innerW = Math.max(1, window.innerWidth || DESIGN_WIDTH);
  const innerH = Math.max(1, window.innerHeight || DESIGN_HEIGHT);
  const docW = Math.max(1, document.documentElement?.clientWidth || innerW);
  const docH = Math.max(1, document.documentElement?.clientHeight || innerH);
  let vvW = Number.POSITIVE_INFINITY;
  let vvH = Number.POSITIVE_INFINITY;
  if (vv) {
    vvW = Math.max(1, vv.width);
    vvH = Math.max(1, vv.height);
    const dpr = Math.max(1, window.devicePixelRatio || 1);
    // Some embedded browsers may report visualViewport in physical pixels.
    if (vvW > innerW * 1.2) vvW /= dpr;
    if (vvH > innerH * 1.2) vvH /= dpr;
  }
  const viewportW = Math.max(1, Math.min(innerW, docW, vvW));
  const viewportH = Math.max(1, Math.min(innerH, docH, vvH));
  const safePadX = 8;
  const safePadY = 8;
  const availW = Math.max(1, viewportW - safePadX * 2);
  const availH = Math.max(1, viewportH - safePadY * 2);
  const scale = Math.max(0.1, Math.min(availW / DESIGN_WIDTH, availH / DESIGN_HEIGHT));
  const frameW = DESIGN_WIDTH * scale;
  const frameH = DESIGN_HEIGHT * scale;
  const offsetX = (viewportW - frameW) / 2;
  const offsetY = (viewportH - frameH) / 2;
  refs.frame.style.transform = `translate(${offsetX.toFixed(2)}px, ${offsetY.toFixed(2)}px) scale(${scale.toFixed(6)})`;
}

function stageInfo() {
  const idx = stageIndex(state.sizeMm);
  const cur = STAGES[idx];
  const nxt = STAGES[idx + 1] || null;
  if (!nxt) return { idx, cur, nxt, p: 100, remain: 0 };
  return { idx, cur, nxt, p: clamp(((state.sizeMm - cur.t) / (nxt.t - cur.t)) * 100, 0, 100), remain: Math.max(0, Math.ceil(nxt.t - state.sizeMm)) };
}

function refreshSizeAndStage() {
  state.sizeMm = Math.max(MIN_SIZE_MM, num(state.sizeMm, MIN_SIZE_MM));
  state.maxSizeReachedMm = Math.max(MIN_SIZE_MM, Math.max(num(state.maxSizeReachedMm, MIN_SIZE_MM), state.sizeMm));
  const s = stageInfo();
  if (s.idx > state.maxStageReached) {
    for (let i = state.maxStageReached + 1; i <= s.idx; i += 1) {
      addLog(`成长阶段提升：${STAGES[i].n}。`, true);
      addHistory(`成长阶段提升到 ${STAGES[i].n}`);
      sayEvent("stage_upgrade", "进化啦！我现在是{stage}。", 3000, { stage: STAGES[i].n });
    }
    state.maxStageReached = s.idx;
  }
  maybeShowGrowthLoveAdventureModal();
}

function maybeShowGrowthLoveAdventureModal() {
  if (state.growthLoveAdventureShown) return false;
  if (runtime.adventureModal.open) return false;
  const reached = Math.round(Math.max(num(state.sizeMm, MIN_SIZE_MM), num(state.maxSizeReachedMm, MIN_SIZE_MM)));
  if (reached < GROWTH_LOVE_ADVENTURE_THRESHOLD_MM) return false;
  const rec = addAdventurePhotoRecord(GROWTH_LOVE_ADVENTURE_STORY, GROWTH_LOVE_ADVENTURE_IMAGE);
  if (!rec) return false;
  state.growthLoveAdventureShown = true;
  addLog(`成长事件触发：体型达到${GROWTH_LOVE_ADVENTURE_THRESHOLD_MM}mm。`, true);
  addHistory(`成长事件：达到${GROWTH_LOVE_ADVENTURE_THRESHOLD_MM}mm`);
  return openAdventureModalCustom(
    GROWTH_LOVE_ADVENTURE_STORY,
    GROWTH_LOVE_ADVENTURE_IMAGE,
    GROWTH_LOVE_ADVENTURE_TITLE
  );
}

function normalizeStats() {
  ["satiety", "health", "cleanliness", "mood"].forEach((k) => { state[k] = clamp(state[k]); });
  state.stamina = Math.round(clamp(num(state.stamina, STAMINA_MAX), 0, STAMINA_MAX));
  state.staminaRecoverTimerMs = clamp(num(state.staminaRecoverTimerMs, 0), 0, STAMINA_RECOVER_INTERVAL_MS);
  state.wildActionDone = Boolean(state.wildActionDone);
  if (!state.items || typeof state.items !== "object") state.items = mkItems();
  if (!state.tray || typeof state.tray !== "object") state.tray = mkTray();
  if (!state.wildTask || typeof state.wildTask !== "object") state.wildTask = mkWildTask();
  if (!state.eventCooldowns || typeof state.eventCooldowns !== "object") state.eventCooldowns = mkCooldowns();
  Object.keys(mkItems()).forEach((k) => { state.items[k] = Math.max(0, Math.round(num(state.items[k], 0))); });
  Object.keys(mkCooldowns()).forEach((k) => { state.eventCooldowns[k] = Math.max(0, Math.round(num(state.eventCooldowns[k], 0))); });
  state.tray.activeItemId = FOOD_ITEM_DEFS[state.tray.activeItemId] ? state.tray.activeItemId : "";
  state.tray.remainMs = Math.max(0, Math.round(num(state.tray.remainMs, 0)));
  state.tray.tickCarryMs = Math.max(0, Math.round(num(state.tray.tickCarryMs, 0)));
  if (!state.tray.activeItemId || state.tray.remainMs <= 0) {
    state.tray.activeItemId = "";
    state.tray.remainMs = 0;
    state.tray.tickCarryMs = 0;
  }
  state.wildTask.name = typeof state.wildTask.name === "string" ? state.wildTask.name : "";
  if (!Object.prototype.hasOwnProperty.call(WILD_EVENT_DURATION_MS, state.wildTask.name)) state.wildTask.name = "";
  state.wildTask.startedAt = Math.max(0, Math.round(num(state.wildTask.startedAt, 0)));
  state.wildTask.endsAt = Math.max(0, Math.round(num(state.wildTask.endsAt, 0)));
  if (!state.wildTask.name || state.wildTask.endsAt <= state.wildTask.startedAt) state.wildTask = mkWildTask();
  if (!state.waterGame || typeof state.waterGame !== "object") state.waterGame = mkWaterGameState();
  state.waterGame.unlocked = Boolean(state.waterGame.unlocked);
  state.waterGame.successCount = Math.max(0, Math.round(num(state.waterGame.successCount, 0)));
  state.waterGame.nextTriggerAt = Math.max(0, Math.round(num(state.waterGame.nextTriggerAt, 0)));
  state.waterGame.cooldownMinutes = sanitizeWaterCooldownMinutes(state.waterGame.cooldownMinutes);
  state.growthLoveAdventureShown = Boolean(state.growthLoveAdventureShown);
  if (state.waterGame.nextTriggerAt > Date.now() + (365 * DAY_MS)) state.waterGame.nextTriggerAt = Date.now() + waterCooldownMs(state.waterGame.cooldownMinutes);
  state.adventurePhotos = normalizeAdventurePhotos(state.adventurePhotos, []);
  if (state.currentScene !== "wild") state.wildActionDone = false;
  state.intimacy = clamp(state.intimacy, 0, INTIMACY_MAX);
  state.sizeBonusMm = clamp(num(state.sizeBonusMm, 0), 0, MAX_SIZE_MM - MIN_SIZE_MM);
  normalizePoopState(state);
  normalizePickupState(state);
  state.clickWindowGain = clamp(state.clickWindowGain, 0, CLICK_WINDOW_GAIN_MAX);
  state.intimacySatietyTimerMs = clamp(state.intimacySatietyTimerMs, 0, INTIMACY_TICK_MS);
  state.intimacyHealthTimerMs = clamp(state.intimacyHealthTimerMs, 0, INTIMACY_HEALTH_UP_TICK_MS);
  state.intimacySatietyLowTimerMs = clamp(num(state.intimacySatietyLowTimerMs, 0), 0, INTIMACY_TICK_MS);
  state.intimacyHealthLowTimerMs = clamp(num(state.intimacyHealthLowTimerMs, 0), 0, INTIMACY_TICK_MS);
  state.sickSizeTimerMs = clamp(num(state.sickSizeTimerMs, 0), 0, SICK_SIZE_DECAY_TICK_MS);
  state.sickSizePenaltyMm = clamp(num(state.sickSizePenaltyMm, 0), 0, MAX_SIZE_MM - MIN_SIZE_MM);
  state.dirtyActive = Boolean(state.dirtyActive);
  state.dirtyTimerMs = clamp(num(state.dirtyTimerMs, 0), 0, DIRTY_APPEAR_INTERVAL_MS);
  state.dirtyHealthTimerMs = clamp(num(state.dirtyHealthTimerMs, 0), 0, DIRTY_HEALTH_DECAY_TICK_MS);
  state.maxSizeReachedMm = Math.max(MIN_SIZE_MM, num(state.maxSizeReachedMm, state.sizeMm));
  state.lastTickAt = num(state.lastTickAt, Date.now());
  if (Array.isArray(state.history)) {
    state.history = state.history
      .map((it) => {
        if (typeof it === "string") {
          const text = it.trim();
          if (!text) return null;
          return { at: Date.now(), text };
        }
        if (it && typeof it === "object") {
          const text = String(it.text ?? "").trim();
          if (!text) return null;
          return { at: num(it.at, Date.now()), text };
        }
        return null;
      })
      .filter((it) => it && !shouldMuteHistoryText(it.text))
      .slice(0, HISTORY_LIMIT);
  }
  refreshSizeAndStage();
}

function speechAuto() {
  if (isCriticalSick()) return autoSpeechText("critical_sick", "呜呜呜~不想打针");
  if (isDirtyActive()) return autoSpeechText("dirty_active", "想洗个澡，身上黏黏的-—-");
  if (state.satiety < 25) return autoSpeechText("satiety_low", "宝宝肚肚打雷了");
  if (state.health < 30) return autoSpeechText("health_low", "生长动力不足...");
  if (state.poopCount >= 4) return autoSpeechText("poop_many", "地上脏脏的，可以帮我清理吗？");
  if (state.cleanliness < 35) return autoSpeechText("cleanliness_low", "想洗个澡，身上黏黏的。");
  if (state.stamina <= 1) return autoSpeechText("stamina_low", "有点累了，在家恢复下体力吧");
  if (
    state.currentScene === "home"
    && state.viewMode === "observe"
    && Array.isArray(state.pickupDrops)
    && state.pickupDrops.length > 0
  ) {
    return eventSpeechText("pickup_spawn_invite", "拖拽阿姆我可以向上弹出吃掉头顶上的泡泡");
  }
  if (state.stamina > 4) return autoSpeechText("stamina_high", "体力充沛，出门看看吧");
  if (state.intimacy > 35) return autoSpeechText("intimacy_high", "和你在一起好安心。");
  if (state.mood > 80) return autoSpeechText("mood_high", "今天心情真棒！");
  return autoSpeechText("default", "你好呀，今天也一起玩吧。");
}

function say(text, holdMs = 3200) {
  refs.speechBubble.textContent = text;
  positionSpeechBubble();
  if (runtime.speechTimer) clearTimeout(runtime.speechTimer);
  runtime.speechTimer = window.setTimeout(() => {
    refs.speechBubble.textContent = speechAuto();
    positionSpeechBubble();
    runtime.speechTimer = 0;
  }, holdMs);
}

function positionSpeechBubble() {
  const sceneW = refs.homeScene.clientWidth || 712;
  const sceneH = refs.homeScene.clientHeight || 760;
  const bubbleW = refs.speechBubble.offsetWidth || 280;
  const bubbleH = refs.speechBubble.offsetHeight || 64;
  const s = slimeScale();
  const slimeH = 148 * s;

  const minCenterX = 14 + bubbleW / 2;
  const maxCenterX = sceneW - 14 - bubbleW / 2;
  const centerX = clamp(state.slime.x, minCenterX, maxCenterX);
  const top = clamp(state.slime.y - slimeH / 2 - bubbleH - 10, 10, sceneH - bubbleH - 10);

  const tailOffset = clamp(state.slime.x - centerX, -bubbleW / 2 + 18, bubbleW / 2 - 18);
  refs.speechBubble.style.left = `${centerX}px`;
  refs.speechBubble.style.top = `${top}px`;
  refs.speechBubble.style.setProperty("--tail-offset-x", `${tailOffset.toFixed(1)}px`);
}

function positionEventButton(btn, offsetX = 0) {
  if (!btn) return;
  const sceneW = refs.homeScene.clientWidth || 712;
  const sceneH = refs.homeScene.clientHeight || 760;
  const btnW = btn.offsetWidth || 78;
  const btnH = btn.offsetHeight || 42;
  const s = slimeScale();
  const slimeW = 176 * s;
  const slimeH = 148 * s;
  // Anchor near the slime's upper-right shoulder and allow slight overlap.
  const anchorCx = state.slime.x + slimeW * 0.38 + offsetX;
  const anchorTop = state.slime.y - slimeH * 0.5;
  const cx = clamp(anchorCx, 10 + btnW / 2, sceneW - 10 - btnW / 2);
  const top = clamp(anchorTop, 6, sceneH - btnH - 6);
  btn.style.left = `${cx}px`;
  btn.style.top = `${top}px`;
}

function positionStatusButtons() {
  if (refs.sickHealBtn && !refs.sickHealBtn.classList.contains("hidden") && !refs.sickHealBtn.classList.contains("motion-hidden")) {
    positionEventButton(refs.sickHealBtn);
  }
  if (refs.dirtyBathBtn && !refs.dirtyBathBtn.classList.contains("hidden") && !refs.dirtyBathBtn.classList.contains("motion-hidden")) {
    positionEventButton(refs.dirtyBathBtn, 50);
  }
}

function applyStatusFrame() {
  if (!refs.slimeSeqFrame) return;
  const nextSrc = statusFrameUrl(runtime.statusAnim.folder, runtime.statusAnim.frame);
  if (refs.slimeSeqFrame.getAttribute("src") !== nextSrc) refs.slimeSeqFrame.setAttribute("src", nextSrc);
}

function isStatusFolderLoaded(folder) {
  return Boolean(runtime.statusAnim.loadedFolders?.[folder]);
}

function preloadStatusFolder(folder) {
  if (!folder) return Promise.resolve(false);
  if (isStatusFolderLoaded(folder)) return Promise.resolve(true);
  if (runtime.statusAnim.loadingFolders?.[folder]) return runtime.statusAnim.loadingFolders[folder];
  const jobs = [];
  for (let i = 0; i < STATUS_ANIM_FRAMES; i += 1) {
    jobs.push(new Promise((resolve) => {
      const img = new Image();
      img.onload = () => {
        if (typeof img.decode === "function") {
          img.decode().then(() => resolve(true)).catch(() => resolve(true));
          return;
        }
        resolve(true);
      };
      img.onerror = () => resolve(false);
      img.src = statusFrameUrl(folder, i);
    }));
  }
  const task = Promise.all(jobs).then((results) => {
    const allReady = results.every(Boolean);
    if (allReady) runtime.statusAnim.loadedFolders[folder] = true;
    delete runtime.statusAnim.loadingFolders[folder];
    return allReady;
  });
  runtime.statusAnim.loadingFolders[folder] = task;
  return task;
}

function prewarmStatusFolders() {
  SEQ_EXPRESSIONS.forEach((folder) => { preloadStatusFolder(folder).catch(() => {}); });
}

function stopStatusAnimation() {
  runtime.statusAnim.runId += 1;
  runtime.statusAnim.pendingFolder = "";
  runtime.statusAnim.active = false;
  if (runtime.statusAnim.rafId) cancelAnimationFrame(runtime.statusAnim.rafId);
  runtime.statusAnim.rafId = 0;
  runtime.statusAnim.frame = 0;
  runtime.statusAnim.folder = "";
  refs.slime.classList.remove("sprite-seq");
  if (refs.slimeSeqFrame) refs.slimeSeqFrame.removeAttribute("src");
  revealSlimeIfHidden();
}

function startStatusAnimation(folder) {
  if (!folder) return;
  runtime.statusAnim.pendingFolder = folder;
  if (!isStatusFolderLoaded(folder)) {
    preloadStatusFolder(folder).then((ready) => {
      if (ready && runtime.statusAnim.pendingFolder === folder) startStatusAnimation(folder);
    }).catch(() => {});
    return;
  }
  if (runtime.statusAnim.active && runtime.statusAnim.folder === folder) return;
  runtime.statusAnim.runId += 1;
  const runId = runtime.statusAnim.runId;
  runtime.statusAnim.active = false;
  if (runtime.statusAnim.rafId) cancelAnimationFrame(runtime.statusAnim.rafId);
  runtime.statusAnim.rafId = 0;
  runtime.statusAnim.active = true;
  runtime.statusAnim.folder = folder;
  runtime.statusAnim.lastTs = performance.now();
  runtime.statusAnim.frame = 0;
  applyStatusFrame();
  refs.slime.classList.add("sprite-seq");
  revealSlimeIfHidden();
  const frameDur = 1000 / STATUS_ANIM_FPS;
  const step = (ts) => {
    if (!runtime.statusAnim.active || runtime.statusAnim.runId !== runId) return;
    const delta = ts - runtime.statusAnim.lastTs;
    if (delta >= frameDur) {
      const adv = Math.max(1, Math.floor(delta / frameDur));
      runtime.statusAnim.frame = (runtime.statusAnim.frame + adv) % STATUS_ANIM_FRAMES;
      runtime.statusAnim.lastTs = ts;
      applyStatusFrame();
    }
    runtime.statusAnim.rafId = requestAnimationFrame(step);
  };
  runtime.statusAnim.rafId = requestAnimationFrame(step);
}

function syncStatusUI() {
  const inObserveHome = state.currentScene === "home" && state.viewMode === "observe" && !isHomeAwayActive();
  const blockByWaterGame = runtime.waterGame.active;
  const showSick = inObserveHome && !runtime.bathing.active && !blockByWaterGame && isCriticalSick();
  const showDirty = inObserveHome && !runtime.bathing.active && !blockByWaterGame && !showSick && isDirtyActive();
  const expression = refs.slime.dataset.expression || "normal";
  const useSeqExpression = inObserveHome && SEQ_EXPRESSION_SET.has(expression);

  if (refs.sickHealBtn) refs.sickHealBtn.classList.toggle("hidden", !showSick);
  if (refs.dirtyBathBtn) refs.dirtyBathBtn.classList.toggle("hidden", !showDirty);
  if (refs.dirtyBathCount) refs.dirtyBathCount.textContent = `x${Math.max(0, Math.round(num(state.items?.cleanse, 0)))}`;

  if (useSeqExpression) startStatusAnimation(expression);
  else stopStatusAnimation();
  positionStatusButtons();
}

function trayActiveDef() {
  if (!state.tray || !state.tray.activeItemId) return null;
  return FOOD_ITEM_DEFS[state.tray.activeItemId] || null;
}

function formatTrayRemain(ms) {
  const sec = Math.max(0, Math.ceil(ms / 1000));
  const m = Math.floor(sec / 60);
  const s = sec % 60;
  return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}

function closeFoodList() {
  runtime.foodListOpen = false;
}

function renderFoodList() {
  if (!refs.foodListPanel) return;
  refs.foodListPanel.innerHTML = "";
  FOOD_ITEM_ORDER.forEach((id) => {
    const def = FOOD_ITEM_DEFS[id];
    if (!def) return;
    const qty = Math.max(0, Math.round(num(state.items?.[id], 0)));
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = `food-item-btn ${qty <= 0 ? "empty" : ""}`;
    btn.dataset.itemId = id;
    btn.innerHTML = `
      <img class="food-item-icon" src="${def.iconPath}" alt="${def.name}" draggable="false" />
      <span class="food-item-name">${def.name}</span>
      <span class="food-item-count">x${qty}</span>
    `;
    refs.foodListPanel.appendChild(btn);
  });
  refs.foodListPanel.classList.toggle("hidden", !runtime.foodListOpen);
}

function renderFoodTray() {
  if (!refs.feedTrayWrap || !refs.feedPlateBtn) return;
  const visible = state.currentScene === "home" && state.viewMode === "observe" && !runtime.bathing.active && !isHomeAwayActive();
  refs.feedTrayWrap.classList.toggle("hidden", !visible);
  if (!visible) {
    closeFoodList();
    if (refs.foodListPanel) refs.foodListPanel.classList.add("hidden");
    return;
  }

  const active = trayActiveDef();
  if (active && runtime.foodListOpen) closeFoodList();

  if (refs.feedPlateLabel) refs.feedPlateLabel.textContent = active ? "" : "喂食";
  if (refs.feedPlateItem) {
    refs.feedPlateItem.classList.toggle("hidden", !active);
    refs.feedPlateItem.dataset.item = active ? active.id : "";
    refs.feedPlateItem.innerHTML = active
      ? `<img class="feed-plate-item-icon" src="${active.iconPath}" alt="${active.name}" draggable="false" />`
      : "";
  }
  if (refs.feedPlateTimer) {
    refs.feedPlateTimer.classList.toggle("hidden", !active);
    refs.feedPlateTimer.textContent = active ? formatTrayRemain(state.tray.remainMs) : "00:00";
  }

  refs.feedPlateBtn.setAttribute("aria-expanded", runtime.foodListOpen ? "true" : "false");
  renderFoodList();
}

function placeFoodOnTray(itemId) {
  const def = FOOD_ITEM_DEFS[itemId];
  if (!def) return false;
  const qty = Math.max(0, Math.round(num(state.items?.[itemId], 0)));
  if (qty <= 0) return false;
  state.items[itemId] = qty - 1;
  state.tray.activeItemId = itemId;
  state.tray.remainMs = def.durationMs;
  state.tray.tickCarryMs = 0;
  return true;
}

function processTrayFeeding(deltaMs, silent = false) {
  const active = trayActiveDef();
  if (!active) return;
  let remain = Math.max(0, Math.round(num(state.tray.remainMs, 0)));
  let carry = Math.max(0, Math.round(num(state.tray.tickCarryMs, 0)));

  const usedMs = Math.min(deltaMs, remain);
  remain -= usedMs;
  carry += usedMs;

  while (carry >= FEED_TICK_MS) {
    state.satiety = clamp(state.satiety + active.satietyPerTick);
    carry -= FEED_TICK_MS;
  }

  state.tray.remainMs = remain;
  state.tray.tickCarryMs = carry;

  if (state.tray.remainMs <= 0) {
    const foodName = active.name;
    state.tray.activeItemId = "";
    state.tray.remainMs = 0;
    state.tray.tickCarryMs = 0;
    closeFoodList();
    if (!silent) {
      addLog(`${foodName}已被吃完。`, true);
      sayEvent("food_plate_finished", "{foodName}吃完啦。", 2200, { foodName });
    }
  }
}

function onFeedPlateClick(event) {
  if (state.currentScene !== "home" || state.viewMode !== "observe" || isHomeAwayActive()) return;
  event.preventDefault();
  event.stopPropagation();
  const active = trayActiveDef();
  if (active) {
    closeFoodList();
    sayEvent("food_plate_busy", "{foodName}还没吃完呢×", 2200, { foodName: active.name });
    renderFoodTray();
    return;
  }
  runtime.foodListOpen = true;
  renderFoodTray();
}

function onFoodListClick(event) {
  const btn = event.target.closest(".food-item-btn");
  if (!btn) return;
  event.preventDefault();
  event.stopPropagation();

  const itemId = btn.dataset.itemId;
  const def = FOOD_ITEM_DEFS[itemId];
  if (!def) return;

  const qty = Math.max(0, Math.round(num(state.items?.[itemId], 0)));
  if (qty <= 0) {
    sayEvent("food_plate_empty", "口袋空空没有饭吃╮(╯▽╰)╭", 2200);
    renderFoodList();
    return;
  }

  if (placeFoodOnTray(itemId)) {
    closeFoodList();
    sayEvent("food_plate_pick", "嗷呜~旋风吸入！{foodName}", 2200, { foodName: def.name });
    addLog(`你将${def.name}放入了餐盘。`, true);
    saveState();
  }
  renderFoodTray();
}

function onGlobalPointerDown(event) {
  if (runtime.foodListOpen) {
    if (!(refs.feedTrayWrap && refs.feedTrayWrap.contains(event.target))) {
      closeFoodList();
      renderFoodTray();
    }
  }
  if (runtime.aiTheme.panelOpen) {
    const hitPanel = refs.aiThemePanel && refs.aiThemePanel.contains(event.target);
    const hitTrigger = refs.aiThemeBtn && refs.aiThemeBtn.contains(event.target);
    if (!hitPanel && !hitTrigger) setAiThemePanelOpen(false);
  }
}

function applyTimeProgress(seconds, silent = false) {
  if (seconds <= 0) return;

  const tickStartAt = state.lastTickAt;
  const tickEndAt = tickStartAt + Math.round(seconds * 1000);
  const satietyDecayPerSec = HUNGER_DECAY_PER_HOUR / 3600;

  let simSeconds = seconds;
  let simStartAt = tickStartAt;

  // During active wild task: only satiety decays with time.
  if (isWildTaskActive(tickStartAt)) {
    const taskEndAt = Math.max(tickStartAt, Math.round(num(state.wildTask?.endsAt, tickStartAt)));
    const activeMs = Math.max(0, Math.min(tickEndAt, taskEndAt) - tickStartAt);
    const activeSeconds = activeMs / 1000;
    if (activeSeconds > 0) {
      state.satiety = clamp(state.satiety - satietyDecayPerSec * activeSeconds);
      simSeconds = Math.max(0, simSeconds - activeSeconds);
      simStartAt = tickStartAt + activeMs;
    }
  }

  resolveWildTaskIfDue(tickEndAt, silent && document.hidden);
  if (isWildTaskActive(tickEndAt) || simSeconds <= 0) return;
  const endAt = simStartAt + Math.round(simSeconds * 1000);

  state.satiety = clamp(state.satiety - satietyDecayPerSec * simSeconds);
  if (state.poopCount > 0) {
    state.health = clamp(state.health - (HEALTH_DECAY_WITH_POOP_PER_10MIN * simSeconds) / 600);
  }

  const deltaMs = simSeconds * 1000;
  processTrayFeeding(deltaMs, silent);
  let sickShrink = 0;
  let dirtyTriggered = 0;
  let dirtyHealthLoss = 0;
  if (state.currentScene === "home") {
    if (state.stamina < STAMINA_MAX) {
      state.staminaRecoverTimerMs += deltaMs;
      while (state.staminaRecoverTimerMs >= STAMINA_RECOVER_INTERVAL_MS && state.stamina < STAMINA_MAX) {
        state.stamina += 1;
        state.staminaRecoverTimerMs -= STAMINA_RECOVER_INTERVAL_MS;
      }
    } else {
      state.staminaRecoverTimerMs = 0;
    }
  } else {
    state.staminaRecoverTimerMs = 0;
  }

  if (isCriticalSick()) {
    state.sickSizeTimerMs += deltaMs;
    while (state.sickSizeTimerMs >= SICK_SIZE_DECAY_TICK_MS) {
      state.sizeMm = Math.max(MIN_SIZE_MM, num(state.sizeMm, MIN_SIZE_MM) - 1);
      state.sickSizeTimerMs -= SICK_SIZE_DECAY_TICK_MS;
      sickShrink += 1;
    }
  } else {
    state.sickSizeTimerMs = 0;
  }

  if (!isDirtyActive()) {
    state.dirtyTimerMs += deltaMs;
    while (state.dirtyTimerMs >= DIRTY_APPEAR_INTERVAL_MS) {
      state.dirtyActive = true;
      state.dirtyHealthTimerMs = 0;
      state.dirtyTimerMs -= DIRTY_APPEAR_INTERVAL_MS;
      dirtyTriggered += 1;
    }
  }

  const shouldDecayHealthByStatus = isDirtyActive() || isCriticalSick();
  if (shouldDecayHealthByStatus) {
    state.dirtyHealthTimerMs += deltaMs;
    while (state.dirtyHealthTimerMs >= DIRTY_HEALTH_DECAY_TICK_MS) {
      state.health = clamp(state.health - 1);
      state.dirtyHealthTimerMs -= DIRTY_HEALTH_DECAY_TICK_MS;
      dirtyHealthLoss += 1;
    }
  } else {
    state.dirtyHealthTimerMs = 0;
  }

  if (state.satiety > 80) {
    state.intimacySatietyTimerMs += deltaMs;
    while (state.intimacySatietyTimerMs >= INTIMACY_TICK_MS) {
      state.intimacy = clamp(state.intimacy + 1, 0, INTIMACY_MAX);
      state.intimacySatietyTimerMs -= INTIMACY_TICK_MS;
    }
  } else {
    state.intimacySatietyTimerMs = 0;
  }

  if (state.health > 70) {
    state.intimacyHealthTimerMs += deltaMs;
    while (state.intimacyHealthTimerMs >= INTIMACY_HEALTH_UP_TICK_MS) {
      state.intimacy = clamp(state.intimacy + 1, 0, INTIMACY_MAX);
      state.intimacyHealthTimerMs -= INTIMACY_HEALTH_UP_TICK_MS;
    }
  } else {
    state.intimacyHealthTimerMs = 0;
  }

  if (state.satiety < 30) {
    state.intimacySatietyLowTimerMs += deltaMs;
    while (state.intimacySatietyLowTimerMs >= INTIMACY_TICK_MS) {
      state.intimacy = clamp(state.intimacy - 1, 0, INTIMACY_MAX);
      state.intimacySatietyLowTimerMs -= INTIMACY_TICK_MS;
    }
  } else {
    state.intimacySatietyLowTimerMs = 0;
  }

  if (state.health < 30) {
    state.intimacyHealthLowTimerMs += deltaMs;
    while (state.intimacyHealthLowTimerMs >= INTIMACY_TICK_MS) {
      state.intimacy = clamp(state.intimacy - 1, 0, INTIMACY_MAX);
      state.intimacyHealthLowTimerMs -= INTIMACY_TICK_MS;
    }
  } else {
    state.intimacyHealthLowTimerMs = 0;
  }

  if (!state.nextPoopAt || !Number.isFinite(state.nextPoopAt)) {
    state.nextPoopAt = endAt + nextPoopDelayMs();
  }

  let produced = 0;
  let guard = 0;
  while (state.nextPoopAt <= endAt && guard < 500) {
    if (addRandomPoop(state)) produced += 1;
    state.nextPoopAt += nextPoopDelayMs();
    guard += 1;
  }

  if (!state.nextPickupSpawnAt || !Number.isFinite(state.nextPickupSpawnAt)) {
    state.nextPickupSpawnAt = endAt + nextPickupDelayMs();
  }
  let pickupProduced = 0;
  let pickupGuard = 0;
  while (state.nextPickupSpawnAt <= endAt && pickupGuard < 500) {
    if (spawnRandomPickupDrop(state)) pickupProduced += 1;
    state.nextPickupSpawnAt += nextPickupDelayMs();
    pickupGuard += 1;
  }

  if (produced > 0 && !silent) {
    addLog(`史莱姆随机产出了${produced}个便便，记得清理。`, true);
    addHistory(`自然事件：随机产出${produced}个便便`);
  }
  if (pickupProduced > 0 && !silent) {
    addLog(`上方区域随机出现了${pickupProduced}个道具。`, true);
    addHistory(`自然事件：上方区域随机出现${pickupProduced}个道具`);
  }
  if (
    pickupProduced > 0
    && state.currentScene === "home"
    && state.viewMode === "observe"
    && !document.hidden
    && simSeconds <= 2.2
  ) {
    sayEventLowPriority("pickup_spawn_invite", "拖拽阿姆我可以向上弹出吃掉头顶上的泡泡", 2200);
  }
  if (sickShrink > 0 && !silent) {
    addLog(`生病影响：史莱姆体型衰减 ${sickShrink}mm。`, true);
    addHistory(`生病状态：体型衰减 ${sickShrink}mm`);
  }
  if (dirtyTriggered > 0 && !silent) {
    addLog("史莱姆进入肮脏状态，想要洗澡。", true);
    addHistory("状态变化：进入肮脏状态");
  }
  if (dirtyHealthLoss > 0 && !silent) {
    if (isDirtyActive()) {
      addLog(`肮脏影响：健康-${dirtyHealthLoss}。`, true);
      addHistory(`肮脏状态：健康-${dirtyHealthLoss}`);
    } else {
      addLog(`生病影响：健康-${dirtyHealthLoss}。`, true);
      addHistory(`生病状态：健康-${dirtyHealthLoss}`);
    }
  }

  const growthGain = (growthPerMinuteMm() * seconds) / 60;
  if (growthGain > 0) {
    state.sizeMm = Math.max(MIN_SIZE_MM, num(state.sizeMm, MIN_SIZE_MM) + growthGain);
  }

  normalizeStats();
}

function expressionAuto() {
  const now = Date.now();
  if (runtime.priorityExpression.name) {
    if (
      now < num(runtime.priorityExpression.until, 0)
      && SEQ_EXPRESSION_SET.has(runtime.priorityExpression.name)
    ) {
      return runtime.priorityExpression.name;
    }
    runtime.priorityExpression.name = "";
    runtime.priorityExpression.until = 0;
  }
  if (runtime.waterGame.active && isWaterGameContextReady()) {
    state.expressionOverride = "";
    state.expressionUntil = 0;
    return "call";
  }
  if (isCriticalSick()) {
    state.expressionOverride = "";
    state.expressionUntil = 0;
    return "sick";
  }
  if (isDirtyActive()) {
    state.expressionOverride = "";
    state.expressionUntil = 0;
    return "dirty";
  }
  if (state.satiety < 25) return "hungry";
  if (
    state.expressionOverride
    && Date.now() < state.expressionUntil
    && CLICK_OVERRIDE_SET.has(state.expressionOverride)
  ) return state.expressionOverride;
  state.expressionOverride = "";
  state.expressionUntil = 0;
  if (state.mood < 34) return "sad";
  if (state.intimacy > 35 || state.mood > 82) return "normal";
  if (state.stamina <= 1) return "neutral";
  return "normal";
}

function renderPips(el, percent, asHeart = false) {
  if (!el) return;
  el.innerHTML = "";
  const active = Math.round(percent / 20);
  for (let i = 0; i < 5; i += 1) {
    const s = document.createElement("span");
    if (asHeart) s.textContent = "♥";
    if (i < active) s.classList.add("active");
    el.appendChild(s);
  }
}

function growthRateCoefficient() {
  const intimacyPart = clamp(state.intimacy / INTIMACY_MAX, 0, 1);
  const satietyPart = clamp(state.satiety / 100, 0, 1);
  const healthPart = clamp(state.health / 100, 0, 1);
  return clamp(intimacyPart * 0.5 + satietyPart * 0.2 + healthPart * 0.3, 0, 1);
}

function growthPerMinuteMm() {
  return 1 * (1 + growthRateCoefficient());
}

function renderIntimacyStars() {
  refs.intimacyHearts.innerHTML = "";
  refs.intimacyHearts.setAttribute("aria-label", `亲密度 ${Math.round(state.intimacy)}/${INTIMACY_MAX}`);
  for (let i = 0; i < 5; i += 1) {
    const fill = clamp((state.intimacy - i * 10) / 10, 0, 1);
    const clipId = `intimacy-heart-clip-${i}`;
    const svg = mkSvg("svg");
    svg.setAttribute("class", "heart-meter");
    svg.setAttribute("viewBox", "0 0 24 24");
    svg.setAttribute("aria-hidden", "true");

    const defs = mkSvg("defs");
    const clip = mkSvg("clipPath");
    clip.setAttribute("id", clipId);
    clip.setAttribute("clipPathUnits", "userSpaceOnUse");
    const clipPath = mkSvg("path");
    clipPath.setAttribute("d", HEART_SVG_PATH);
    clip.appendChild(clipPath);
    defs.appendChild(clip);
    svg.appendChild(defs);

    const base = mkSvg("path");
    base.setAttribute("class", "heart-meter-base");
    base.setAttribute("d", HEART_SVG_PATH);
    svg.appendChild(base);

    const fillRect = mkSvg("rect");
    fillRect.setAttribute("class", "heart-meter-fill");
    fillRect.setAttribute("x", "0");
    fillRect.setAttribute("y", (24 - 24 * fill).toFixed(2));
    fillRect.setAttribute("width", "24");
    fillRect.setAttribute("height", (24 * fill).toFixed(2));
    fillRect.setAttribute("clip-path", `url(#${clipId})`);
    svg.appendChild(fillRect);

    refs.intimacyHearts.appendChild(svg);
  }
}

function slimeScale() {
  const baseScale = 0.72;
  const scalePerMm = 0.92 / 590;
  const sizeMm = Math.max(MIN_SIZE_MM, num(state.sizeMm, MIN_SIZE_MM));
  const rawScale = Math.max(baseScale, baseScale + (sizeMm - MIN_SIZE_MM) * scalePerMm);
  const w = refs.homeScene?.clientWidth || 712;
  const h = refs.homeScene?.clientHeight || 760;
  const maxScaleByScreen = Math.max(baseScale, Math.min((w - 20) / 176, (h - 20) / 148));
  return Math.min(rawScale, maxScaleByScreen);
}
function slimeBounds() {
  const w = refs.homeScene.clientWidth || 712;
  const h = refs.homeScene.clientHeight || 760;
  const s = slimeScale();
  const rawHw = (176 * s) / 2;
  const rawHh = (148 * s) / 2;
  // Keep at least a small movement corridor even when slime is visually very large.
  const minRoamX = 64;
  const minRoamY = 72;
  const maxHwForMove = Math.max(12, (w - 20 - minRoamX) / 2);
  const moveBottom = Math.max(150, h - HOME_MOVE_ZONE_BOTTOM_GAP);
  const maxHhForMove = Math.max(12, (moveBottom - 10 - minRoamY) / 2);
  const hw = Math.min(rawHw, maxHwForMove);
  const hh = Math.min(rawHh, maxHhForMove);
  return {
    minX: 10 + hw,
    maxX: w - 10 - hw,
    minY: 10 + hh,
    maxY: Math.max(10 + hh, moveBottom - hh),
  };
}
function clampSlimePos(x, y) {
  const b = slimeBounds();
  return { x: clamp(x, b.minX, b.maxX), y: clamp(y, b.minY, b.maxY) };
}

function placeSlimeAtHomeBottom() {
  const wasHidden = refs.homeScene.classList.contains("hidden");
  if (wasHidden) refs.homeScene.classList.remove("hidden");
  const b = slimeBounds();
  state.slime = {
    x: clamp(state.slime.x, b.minX, b.maxX),
    y: b.maxY,
  };
  if (wasHidden && !(state.viewMode === "observe" && state.currentScene === "home")) {
    refs.homeScene.classList.add("hidden");
  }
}

function settleSlimeToHomeBottom() {
  if (!(state.viewMode === "observe" && state.currentScene === "home")) return;
  placeSlimeAtHomeBottom();
  renderSlime();
  requestAnimationFrame(() => {
    if (state.viewMode === "observe" && state.currentScene === "home") {
      placeSlimeAtHomeBottom();
      renderSlime();
    }
  });
}

function setAutoSpeechVisible(visible) {
  refs.speechBubble.classList.toggle("hidden", !visible);
}

function revealSlimeIfHidden() {
  if (refs.slime.classList.contains("pre-init")) refs.slime.classList.remove("pre-init");
}

function syncMotionOverlayVisibility() {
  const hideByMotion = runtime.drag.active || runtime.inertia.active;
  refs.speechBubble.classList.toggle("motion-hidden", hideByMotion);
  if (refs.sickHealBtn) refs.sickHealBtn.classList.toggle("motion-hidden", hideByMotion);
  if (refs.dirtyBathBtn) refs.dirtyBathBtn.classList.toggle("motion-hidden", hideByMotion);
}

function syncBathingHud() {
  const bathingActive = runtime.bathing.active
    && state.currentScene === "home"
    && state.viewMode === "observe";
  const bathSuccessCount = Math.max(0, Math.round(num(state.eventCounters?.bath, 0)));
  const showBathingHud = bathingActive && bathSuccessCount < 10;
  const showBathSoap = bathingActive;

  refs.speechBubble.classList.toggle("bath-hidden", bathingActive);
  if (refs.bathHud) refs.bathHud.classList.toggle("hidden", !showBathingHud);
  if (refs.bathSoapIcon) refs.bathSoapIcon.classList.toggle("hidden", !showBathSoap);

  if (!bathingActive) {
    if (refs.bathProgressFill) refs.bathProgressFill.style.width = "0%";
    return;
  }

  if (showBathingHud && refs.bathProgressFill) {
    const ratio = clamp(runtime.bathing.progressMs / BATHING_REQUIRED_MS, 0, 1);
    refs.bathProgressFill.style.width = `${(ratio * 100).toFixed(1)}%`;
  }

  if (refs.bathSoapIcon) {
    if (runtime.bathing.draggingSoap && runtime.bathing.pointerId !== -1) return;
    const sceneW = refs.homeScene.clientWidth || 712;
    const sceneH = refs.homeScene.clientHeight || 760;
    const s = slimeScale();
    const slimeW = 176 * s;
    const slimeH = 148 * s;
    const soapW = refs.bathSoapIcon.offsetWidth || 132;
    const soapH = refs.bathSoapIcon.offsetHeight || 92;
    const x = clamp(state.slime.x - slimeW * 0.9, soapW / 2 + 12, sceneW - soapW / 2 - 12);
    const y = clamp(state.slime.y + slimeH * 0.14, soapH / 2 + 18, sceneH - soapH / 2 - 22);
    refs.bathSoapIcon.style.left = `${x.toFixed(1)}px`;
    refs.bathSoapIcon.style.top = `${y.toFixed(1)}px`;
  }
}

function positionBathSoapByPoint(p) {
  if (!refs.bathSoapIcon) return;
  const sceneW = refs.homeScene.clientWidth || 712;
  const sceneH = refs.homeScene.clientHeight || 760;
  const soapW = refs.bathSoapIcon.offsetWidth || 132;
  const soapH = refs.bathSoapIcon.offsetHeight || 92;
  const x = clamp(p.x, soapW / 2 + 12, sceneW - soapW / 2 - 12);
  const y = clamp(p.y, soapH / 2 + 18, sceneH - soapH / 2 - 22);
  refs.bathSoapIcon.style.left = `${x.toFixed(1)}px`;
  refs.bathSoapIcon.style.top = `${y.toFixed(1)}px`;
}

function bathZone() {
  const s = slimeScale();
  const halfW = (176 * s) / 2 + BATHING_ZONE_PAD;
  const halfH = (148 * s) / 2 + BATHING_ZONE_PAD;
  return {
    minX: state.slime.x - halfW,
    maxX: state.slime.x + halfW,
    minY: state.slime.y - halfH,
    maxY: state.slime.y + halfH,
  };
}

function isPointInBathZone(p) {
  const z = bathZone();
  return p.x >= z.minX && p.x <= z.maxX && p.y >= z.minY && p.y <= z.maxY;
}

function stopBathingProgressLoop() {
  if (runtime.bathing.progressRafId) {
    cancelAnimationFrame(runtime.bathing.progressRafId);
    runtime.bathing.progressRafId = 0;
  }
  runtime.bathing.progressLoopLastTs = 0;
}

function startBathingProgressLoop() {
  stopBathingProgressLoop();
  runtime.bathing.progressLoopLastTs = performance.now();
  const step = (ts) => {
    if (!runtime.bathing.active) {
      runtime.bathing.progressRafId = 0;
      return;
    }
    const dt = Math.min(34, Math.max(0, ts - runtime.bathing.progressLoopLastTs));
    runtime.bathing.progressLoopLastTs = ts;

    const movedRecently = (ts - num(runtime.bathing.lastMoveAt, 0)) <= BATHING_MOVE_GRACE_MS;
    const canGain = runtime.bathing.draggingSoap
      && runtime.bathing.pointerId !== -1
      && runtime.bathing.inZone
      && movedRecently;

    if (canGain && dt > 0) {
      const movedPx = Math.max(0, num(runtime.bathing.speedPxPerMs, 0)) * dt;
      const gain = dt * BATHING_PROGRESS_GAIN + Math.min(14, movedPx * BATHING_PROGRESS_DIST_BONUS);
      runtime.bathing.progressMs = clamp(runtime.bathing.progressMs + gain, 0, BATHING_REQUIRED_MS);
      if (runtime.bathing.progressMs >= BATHING_REQUIRED_MS) {
        syncBathingHud();
        completeBathing();
        return;
      }
    }

    syncBathingHud();
    runtime.bathing.progressRafId = requestAnimationFrame(step);
  };
  runtime.bathing.progressRafId = requestAnimationFrame(step);
}

function clearBathingState() {
  if (runtime.bathing.timeoutTimer) {
    clearTimeout(runtime.bathing.timeoutTimer);
    runtime.bathing.timeoutTimer = 0;
  }
  stopBathingProgressLoop();
  const pointerId = runtime.bathing.pointerId;
  const captureEl = runtime.bathing.captureEl || refs.slime;
  if (pointerId !== -1) {
    try { captureEl.releasePointerCapture(pointerId); } catch {}
  }
  runtime.bathing.active = false;
  runtime.bathing.pointerId = -1;
  runtime.bathing.captureEl = null;
  runtime.bathing.draggingSoap = false;
  runtime.bathing.progressMs = 0;
  runtime.bathing.speedPxPerMs = 0;
  runtime.bathing.inZone = false;
  runtime.bathing.lastMoveAt = 0;
  runtime.bathing.lastTs = 0;
  runtime.bathing.lastX = 0;
  runtime.bathing.lastY = 0;
  runtime.bathing.startedAt = 0;
}

function completeBathing(autoCompleted = false) {
  runtime.bathing.completedAt = performance.now();
  clearBathingState();
  state.dirtyActive = false;
  state.dirtyTimerMs = 0;
  state.dirtyHealthTimerMs = 0;
  state.intimacy = clamp(state.intimacy + 5, 0, INTIMACY_MAX);
  state.health = clamp(state.health + 8);
  state.cleanliness = clamp(state.cleanliness + 20);
  if (autoCompleted) addLog("洗澡玩法超过15秒，已自动完成。", true);
  sayEvent("bath_complete", "舒服(●ˇ∀ˇ●)，亲密度+5，健康+8", 2800);
  addLog("你完成了洗澡操作：亲密度+5，健康+8。", true);
  record("home", "bath", "事件交互：完成洗澡操作");
  playHomeFx("bath");
  render();
  saveState();
}

function enterBathingState() {
  if (state.currentScene !== "home" || state.viewMode !== "observe") return false;
  if (runtime.bathing.active) return false;
  if (runtime.waterGame.active) return false;
  if (state.items.cleanse <= 0) return false;
  pauseAutoMotion();
  sound.ensure();
  stopInertia();
  state.items.cleanse -= 1;
  runtime.bathing.active = true;
  runtime.bathing.pointerId = -1;
  runtime.bathing.captureEl = null;
  runtime.bathing.draggingSoap = false;
  runtime.bathing.progressMs = 0;
  runtime.bathing.speedPxPerMs = 0;
  runtime.bathing.inZone = false;
  runtime.bathing.lastMoveAt = 0;
  runtime.bathing.lastTs = 0;
  runtime.bathing.lastX = 0;
  runtime.bathing.lastY = 0;
  runtime.bathing.completedAt = 0;
  runtime.bathing.startedAt = performance.now();
  startBathingProgressLoop();
  runtime.bathing.timeoutTimer = window.setTimeout(() => {
    if (runtime.bathing.active) completeBathing(true);
  }, BATHING_TIMEOUT_MS);
  addLog("已进入洗澡状态，请在史莱姆周围划动累计3秒。", true);
  render();
  saveState();
  return true;
}

function enterAutoIdle(ts, bounds = slimeBounds()) {
  runtime.autoMotion.mode = "idle";
  runtime.autoMotion.modeUntil = ts + AUTO_IDLE_STANDBY_MS;
  runtime.autoMotion.jumpsLeft = 0;
  runtime.autoMotion.jumpDurationMs = 0;
  runtime.autoMotion.jumpPauseUntil = 0;
  state.slime.y = bounds.maxY;
  refs.slime.style.setProperty("--slime-tilt", "0deg");
  setAutoSpeechVisible(true);
}

function startAutoJumpBurst(ts) {
  runtime.autoMotion.mode = "jump";
  runtime.autoMotion.jumpsLeft = randInt(AUTO_JUMP_COUNT_MIN, AUTO_JUMP_COUNT_MAX);
  runtime.autoMotion.jumpDurationMs = 0;
  runtime.autoMotion.jumpPauseUntil = ts;
  setAutoSpeechVisible(false);
}

function setupNextAutoJump(ts, bounds = slimeBounds()) {
  const edgePad = Math.max(24, (bounds.maxX - bounds.minX) * 0.08);
  let direction = Math.random() < 0.5 ? -1 : 1;
  if (state.slime.x <= bounds.minX + edgePad) direction = 1;
  if (state.slime.x >= bounds.maxX - edgePad) direction = -1;

  let dx = rand(AUTO_JUMP_DX_MIN, AUTO_JUMP_DX_MAX) * direction;
  let endX = clamp(state.slime.x + dx, bounds.minX, bounds.maxX);
  if (Math.abs(endX - state.slime.x) < AUTO_JUMP_DX_MIN * 0.5) {
    dx = -dx;
    endX = clamp(state.slime.x + dx, bounds.minX, bounds.maxX);
  }

  runtime.autoMotion.jumpStartX = state.slime.x;
  runtime.autoMotion.jumpEndX = endX;
  runtime.autoMotion.jumpPeakY = clamp(bounds.maxY - rand(AUTO_JUMP_HEIGHT_MIN, AUTO_JUMP_HEIGHT_MAX), bounds.minY, bounds.maxY);
  runtime.autoMotion.jumpStartTs = ts;
  runtime.autoMotion.jumpDurationMs = rand(AUTO_JUMP_DURATION_MIN_MS, AUTO_JUMP_DURATION_MAX_MS);
  runtime.autoMotion.jumpPauseUntil = 0;
  runtime.autoMotion.jumpsLeft = Math.max(0, runtime.autoMotion.jumpsLeft - 1);
}

function pauseAutoMotion(ms = AUTO_MOTION_PAUSE_MS) {
  const now = performance.now();
  runtime.autoMotion.pauseUntil = Math.max(runtime.autoMotion.pauseUntil, now + ms);
  if (runtime.autoMotion.active) enterAutoIdle(runtime.autoMotion.pauseUntil);
}

function startAutoMotion() {
  if (runtime.autoMotion.active) return;
  runtime.autoMotion.active = true;
  runtime.autoMotion.lastTs = performance.now();
  runtime.autoMotion.pauseUntil = runtime.autoMotion.lastTs + AUTO_MOTION_PAUSE_MS;
  enterAutoIdle(runtime.autoMotion.pauseUntil);

  const step = (ts) => {
    if (!runtime.autoMotion.active) return;
    runtime.autoMotion.lastTs = ts;

    const awayFromHome = isHomeAwayActive();
    const canAutoMove = !document.hidden
      && state.currentScene === "home"
      && state.viewMode === "observe"
      && !awayFromHome
      && !runtime.bathing.active
      && !runtime.drag.active
      && !runtime.inertia.active
      && ts >= runtime.autoMotion.pauseUntil;

    if (canAutoMove) {
      const b = slimeBounds();

      if (runtime.autoMotion.mode === "idle") {
        state.slime.y = b.maxY;
        refs.slime.style.setProperty("--slime-tilt", "0deg");
        setAutoSpeechVisible(true);
        if (ts >= runtime.autoMotion.modeUntil) {
          startAutoJumpBurst(ts);
          setupNextAutoJump(ts, b);
        }
      }

      if (runtime.autoMotion.mode === "jump") {
        setAutoSpeechVisible(false);
        state.slime.y = b.maxY;

        if (runtime.autoMotion.jumpDurationMs <= 0) {
          if (ts >= runtime.autoMotion.jumpPauseUntil) {
            if (runtime.autoMotion.jumpsLeft > 0) setupNextAutoJump(ts, b);
            else enterAutoIdle(ts, b);
          } else {
            refs.slime.style.setProperty("--slime-tilt", "0deg");
          }
        }

        if (runtime.autoMotion.mode === "jump" && runtime.autoMotion.jumpDurationMs > 0) {
          const t = clamp((ts - runtime.autoMotion.jumpStartTs) / runtime.autoMotion.jumpDurationMs, 0, 1);
          const easeX = t < 0.5 ? 2 * t * t : 1 - (Math.pow(-2 * t + 2, 2) / 2);
          const arc = 4 * t * (1 - t);
          const jumpHeight = b.maxY - runtime.autoMotion.jumpPeakY;
          state.slime.x = clamp(runtime.autoMotion.jumpStartX + (runtime.autoMotion.jumpEndX - runtime.autoMotion.jumpStartX) * easeX, b.minX, b.maxX);
          state.slime.y = clamp(b.maxY - arc * jumpHeight, b.minY, b.maxY);

          const tilt = clamp((runtime.autoMotion.jumpEndX - runtime.autoMotion.jumpStartX) / 10, -9, 9);
          refs.slime.style.setProperty("--slime-tilt", `${tilt.toFixed(2)}deg`);

          if (t >= 1) {
            state.slime.x = runtime.autoMotion.jumpEndX;
            state.slime.y = b.maxY;
            runtime.autoMotion.jumpDurationMs = 0;
            refs.slime.style.setProperty("--slime-tilt", "0deg");
            if (runtime.autoMotion.jumpsLeft > 0) {
              runtime.autoMotion.jumpPauseUntil = ts + rand(AUTO_JUMP_GAP_MIN_MS, AUTO_JUMP_GAP_MAX_MS);
            } else {
              enterAutoIdle(ts, b);
            }
          }
        }
      }

      renderSlime();
    } else if (!runtime.drag.active && !runtime.inertia.active) {
      refs.slime.style.setProperty("--slime-tilt", "0deg");
      setAutoSpeechVisible(!awayFromHome);
    }

    runtime.autoMotion.rafId = requestAnimationFrame(step);
  };
  runtime.autoMotion.rafId = requestAnimationFrame(step);
}

function renderPickupDrops() {
  if (!refs.pickupDropLayer) return;
  normalizePickupState(state);
  const visible = state.currentScene === "home" && state.viewMode === "observe";
  refs.pickupDropLayer.classList.toggle("hidden", !visible);
  if (!visible) return;

  const drops = state.pickupDrops.slice(0, PICKUP_MAX_DROPS);
  const signature = drops.map((d) => `${d.id}:${d.itemId}:${d.x}:${d.y}`).join("|");
  if (
    runtime.ui.lastRenderedPickupSignature === signature
    && refs.pickupDropLayer.childElementCount === drops.length
  ) {
    return;
  }

  refs.pickupDropLayer.innerHTML = "";
  for (let i = 0; i < drops.length; i += 1) {
    const drop = drops[i];
    const def = ITEM_DEFS[drop.itemId];
    if (!def) continue;
    const node = document.createElement("button");
    node.className = "pickup-drop";
    node.type = "button";
    node.dataset.itemId = drop.itemId;
    node.dataset.dropId = drop.id;
    node.setAttribute("aria-label", `道具：${def.name}`);
    node.style.left = `${drop.x}px`;
    node.style.top = `${drop.y}px`;
    node.innerHTML = `<img src="${def.iconPath}" alt="${def.name}" draggable="false" />`;
    node.addEventListener("click", onPickupDropClick);
    refs.pickupDropLayer.appendChild(node);
  }
  runtime.ui.lastRenderedPickupSignature = signature;
}

function onPickupDropClick(event) {
  if (state.currentScene !== "home" || state.viewMode !== "observe") return;
  event.preventDefault();
  event.stopPropagation();
  const target = event.currentTarget;
  if (!(target instanceof HTMLElement)) return;
  const x = Number.parseFloat(target.style.left || "0");
  const y = Number.parseFloat(target.style.top || "0");
  if (!Number.isFinite(x) || !Number.isFinite(y)) return;
  spawnFx(
    refs.homeFxLayer,
    "fx-pickup-hint",
    x,
    y - 18,
    {},
    4300,
    "拽动史莱姆，释放弹动吃泡泡"
  );
}

function slimeCollisionRect() {
  const s = slimeScale();
  const halfW = (176 * s * 0.56) / 2;
  const halfH = (148 * s * 0.56) / 2;
  return {
    left: state.slime.x - halfW,
    right: state.slime.x + halfW,
    top: state.slime.y - halfH,
    bottom: state.slime.y + halfH,
  };
}

function collectPickupDropsByCollision() {
  if (state.currentScene !== "home" || state.viewMode !== "observe") return false;
  if (!Array.isArray(state.pickupDrops) || state.pickupDrops.length <= 0) return false;

  const slimeRect = slimeCollisionRect();
  const remain = [];
  const gainMap = {};
  const pickupFxPoints = [];

  for (let i = 0; i < state.pickupDrops.length; i += 1) {
    const drop = state.pickupDrops[i];
    const itemDef = ITEM_DEFS[drop.itemId];
    if (!itemDef) continue;
    if (rectsOverlap(slimeRect, pickupDropRect(drop))) {
      const key = itemDef.inventoryKey;
      state.items[key] = Math.max(0, Math.round(num(state.items[key], 0))) + 1;
      gainMap[itemDef.id] = (gainMap[itemDef.id] || 0) + 1;
      pickupFxPoints.push({
        x: drop.x + PICKUP_DROP_SIZE / 2,
        y: drop.y - 6,
      });
    } else {
      remain.push(drop);
    }
  }

  const pickedCount = state.pickupDrops.length - remain.length;
  if (pickedCount <= 0) return false;

  state.pickupDrops = remain;
  runtime.ui.lastRenderedPickupSignature = "";
  renderPickupDrops();

  const gainEntries = Object.entries(gainMap);
  const summary = gainEntries
    .map(([itemId, count]) => `${ITEM_DEFS[itemId].name}x${count}`)
    .join("、");
  const historySummary = gainEntries
    .map(([itemId, count]) => `【${ITEM_DEFS[itemId].name}】x【${count}】`)
    .join("、");
  if (refs.homeFxLayer) {
    pickupFxPoints.slice(0, 8).forEach((point, idx) => {
      spawnFx(
        refs.homeFxLayer,
        "fx-pickup-gain",
        point.x + rand(-5, 5),
        point.y + rand(-4, 4) - idx * 2,
        {
          "--dur": `${rand(1.15, 1.4).toFixed(2)}s`,
          "--dy": `${rand(-56, -40).toFixed(1)}px`,
        },
        1700,
        "获得道具x1"
      );
    });
  }
  addLog(`史莱姆拾取了道具：${summary}。`, true);
  addHistory(`弹弹乐：拾取到${historySummary}`);
  sayEvent("pickup_item_gain", "捡到了{items}。", 1800, { items: summary });
  return true;
}

function renderPoop() {
  normalizePoopState(state);
  const visiblePoopSlots = state.poopSlots.slice(0, MAX_POOP_ON_FLOOR);
  const signature = visiblePoopSlots.join(",");
  if (
    runtime.ui.lastRenderedPoopSignature === signature
    && refs.poopArea.childElementCount === visiblePoopSlots.length
  ) {
    return;
  }
  refs.poopArea.innerHTML = "";
  for (let i = 0; i < visiblePoopSlots.length; i += 1) {
    const slotIndex = visiblePoopSlots[i];
    const slot = POOP_SLOTS[slotIndex];
    if (!slot) continue;
    const e = document.createElement("button");
    e.className = "poop";
    e.type = "button";
    e.dataset.slotIndex = String(slotIndex);
    e.setAttribute("aria-label", "清理便便");
    e.style.left = `${slot.x}px`;
    e.style.top = `${slot.y}px`;
    e.addEventListener("click", onPoopClick);
    refs.poopArea.appendChild(e);
  }
  runtime.ui.lastRenderedPoopSignature = signature;
}

function renderSlime() {
  const p = clampSlimePos(state.slime.x, state.slime.y);
  state.slime = p;
  refs.slime.style.left = `${p.x}px`;
  refs.slime.style.top = `${p.y}px`;
  refs.slime.style.setProperty("--slime-scale", slimeScale().toFixed(3));
  refs.slime.dataset.expression = expressionAuto();
  const away = isHomeAwayActive();
  refs.slime.classList.toggle("hidden", away);
  if (refs.homeAwayMask) refs.homeAwayMask.classList.toggle("hidden", !away);
  if (!away) {
    positionSpeechBubble();
    if (!runtime.drag.active && !runtime.inertia.active) refs.speechBubble.classList.remove("hidden");
  }
  syncMotionOverlayVisibility();
  if (away) refs.speechBubble.classList.add("hidden");
  positionStatusButtons();
  syncBathingHud();
}

function statFxSnapshot() {
  return {
    intimacy: Math.round(clamp(state.intimacy, 0, INTIMACY_MAX)),
    satiety: Math.round(clamp(state.satiety)),
    health: Math.round(clamp(state.health)),
  };
}

function statGainFxAnchor() {
  const sceneW = refs.homeScene?.clientWidth || 712;
  const sceneH = refs.homeScene?.clientHeight || 760;
  const bubbleVisible = !refs.speechBubble.classList.contains("hidden")
    && !refs.speechBubble.classList.contains("motion-hidden")
    && !refs.speechBubble.classList.contains("bath-hidden");

  if (bubbleVisible) {
    const bubbleCx = num(parseFloat(refs.speechBubble.style.left), state.slime.x);
    const bubbleTop = num(parseFloat(refs.speechBubble.style.top), 90);
    return {
      x: clamp(bubbleCx, 22, sceneW - 22),
      y: clamp(bubbleTop - 16, 20, sceneH - 20),
    };
  }

  const s = slimeScale();
  const slimeH = 148 * s;
  return {
    x: clamp(state.slime.x, 22, sceneW - 22),
    y: clamp(state.slime.y - slimeH / 2 - 24, 20, sceneH - 20),
  };
}

function showStatGainFx(gains) {
  if (state.viewMode !== "observe" || state.currentScene !== "home") return;
  const entries = [];
  if (gains.health > 0) entries.push({ label: "健康", value: gains.health });
  if (gains.satiety > 0) entries.push({ label: "饱食度", value: gains.satiety });
  if (gains.intimacy > 0) entries.push({ label: "亲密度", value: gains.intimacy });
  if (!entries.length) return;
  if (!refs.homeFxLayer) return;

  const anchor = statGainFxAnchor();
  const rowGap = 34;
  const baseY = anchor.y - (entries.length - 1) * rowGap;
  entries.forEach((entry, idx) => {
    spawnFx(
      refs.homeFxLayer,
      "fx-stat-gain",
      anchor.x + rand(-6, 6),
      baseY + idx * rowGap,
      {
        "--dx": `${rand(-10, 10).toFixed(1)}px`,
        "--dy": `${rand(-88, -62).toFixed(1)}px`,
        "--dur": `${rand(1.45, 1.78).toFixed(2)}s`,
        "--delay": `${(idx * 0.06).toFixed(2)}s`,
        "--alpha": idx === 0 && entries.length > 1 ? "0.58" : "0.94",
      },
      2200,
      `${entry.label}+${entry.value}`
    );
  });
}

function showSizeGainFx(mmGain) {
  const gain = Math.max(0, Math.round(num(mmGain, 0)));
  if (gain <= 0) return;
  if (state.viewMode !== "observe" || state.currentScene !== "home") return;
  if (!refs.homeFxLayer) return;

  const anchor = statGainFxAnchor();
  spawnFx(
    refs.homeFxLayer,
    "fx-stat-gain",
    anchor.x + rand(-4, 4),
    anchor.y + 10,
    {
      "--dx": `${rand(-9, 9).toFixed(1)}px`,
      "--dy": `${rand(-98, -72).toFixed(1)}px`,
      "--dur": "1.62s",
      "--alpha": "0.96",
    },
    2200,
    `大小+${gain}mm`
  );
}

function syncStatGainFx() {
  const cur = statFxSnapshot();
  const prev = runtime.ui.lastStatFxSnapshot;
  runtime.ui.lastStatFxSnapshot = cur;
  if (!prev) return;

  const gains = {
    intimacy: Math.max(0, cur.intimacy - prev.intimacy),
    satiety: Math.max(0, cur.satiety - prev.satiety),
    health: Math.max(0, cur.health - prev.health),
  };
  showStatGainFx(gains);
}

function renderButtons() {
  refs.actionButtons.forEach((btn) => {
    const action = btn.dataset.action;
    if (action === "heal") btn.disabled = state.health >= 98;
    else if (action === "useFoodItem") {
      btn.disabled = state.items.food <= 0;
      btn.textContent = `用食材(${state.items.food})`;
    } else if (action === "useCleanseItem") {
      btn.disabled = state.items.cleanse <= 0;
      btn.textContent = `用清澡(${state.items.cleanse})`;
    } else btn.disabled = false;
  });
  const activeWildName = activeWildTaskName();
  const activeRemain = wildTaskRemainMs();
  refs.eventButtons.forEach((btn) => {
    const ev = btn.dataset.event;
    const unlocked = isWildEventUnlocked(ev);
    const unlockMm = wildEventUnlockMm(ev);
    const locked = !unlocked;
    const activeCard = activeWildName === ev;
    btn.classList.toggle("active-task", activeCard);
    btn.classList.toggle("task-muted", Boolean(activeWildName) && !activeCard);
    btn.classList.toggle("event-locked", locked);
    btn.disabled = locked || Boolean(activeWildName && !activeCard);

    let lockIcon = btn.querySelector(".event-lock-icon");
    if (!lockIcon) {
      lockIcon = document.createElement("img");
      lockIcon.className = "event-lock-icon hidden";
      lockIcon.src = WILD_EVENT_LOCK_ICON;
      lockIcon.alt = "未解锁";
      lockIcon.draggable = false;
      btn.insertBefore(lockIcon, btn.firstChild);
    }
    lockIcon.classList.toggle("hidden", !locked);

    const span = btn.querySelector("span");
    if (span) {
      if (locked && unlockMm > 0) span.textContent = `解锁条件：史莱姆达到${unlockMm}mm`;
      else if (activeCard) span.textContent = `进行中 ${formatRemain(activeRemain)}`;
      else if (activeWildName) span.textContent = `等待${EVENT_META[activeWildName]}结束`;
      else span.textContent = WILD_EVENT_HINT[ev] || "";
    }
  });
  syncWildRunner();
}

function cleanOnePoop(fromTap = false, preferredSlot = null) {
  if (state.poopCount <= 0) {
    if (fromTap) {
      sound.play("deny");
      sayEvent("clean_poop_empty", "地面很干净，不需要清理。", 1800);
    }
    return false;
  }
  if (!removePoop(state, preferredSlot)) return false;
  const away = isHomeAwayActive();
  const healthGain = away ? 1 : 3;
  const intimacyGain = away ? 0 : 3;
  state.cleanliness = clamp(state.cleanliness + 18);
  state.health = clamp(state.health + healthGain);
  state.mood = clamp(state.mood + 5);
  if (intimacyGain > 0) {
    state.intimacy = clamp(state.intimacy + intimacyGain, 0, INTIMACY_MAX);
  }
  sayEvent("clean_poop_success", "谢谢你帮我清理，舒服多了。", 2600);
  addLog(
    `${fromTap ? "你点击清理了一份粪便" : "你清理了一份粪便"}（健康+${healthGain}${intimacyGain > 0 ? `，亲密度+${intimacyGain}` : "，亲密度+0"}）。`,
    true
  );
  record("home", "cleanPoop", away ? "外出期间：清理粪便" : "室内互动：清理粪便");
  playHomeFx("cleanPoop");
  return true;
}

function renderMode() {
  const observe = state.viewMode === "observe";
  refs.modeButtons.forEach((b) => {
    const active = b.dataset.mode === state.viewMode;
    b.classList.toggle("active", active);
    b.style.setProperty(
      "background",
      active ? "linear-gradient(180deg, #fff7e4, #f6dfaf)" : "var(--cozy-btn-face-soft)",
      "important"
    );
    b.style.setProperty("color", active ? "#5e4531" : "#7a6755", "important");
    b.style.setProperty("border-color", active ? "#9d7f60" : "#b49a7d", "important");
    b.style.setProperty("opacity", active ? "1" : "0.86", "important");
  });
  refs.codexPanel.classList.toggle("hidden", observe);
  if (observe && runtime.ui.codexScrollDrag.active) {
    runtime.ui.codexScrollDrag.active = false;
    runtime.ui.codexScrollDrag.pointerId = -1;
    refs.codexPanel.classList.remove("codex-dragging");
  }
  refs.sceneToggleBtn.disabled = false;
  if (refs.bottomBar) {
    refs.bottomBar.classList.add("bottom-bar-wild-left");
  }
  if (refs.modeSwitch) {
    const hideTabs = observe && state.currentScene === "wild";
    refs.modeSwitch.classList.toggle("hidden", hideTabs);
  }
}

function renderScene() {
  const atHomeForLabel = state.currentScene === "home";
  refs.sceneToggleBtn.textContent = "";
  refs.sceneToggleBtn.setAttribute("aria-label", atHomeForLabel ? "外出" : "回家");
  refs.sceneToggleBtn.setAttribute("title", atHomeForLabel ? "外出" : "回家");
  if (state.viewMode !== "observe") {
    refs.homeScene.classList.add("hidden");
    refs.wildScene.classList.add("hidden");
    return;
  }
  const atHome = state.currentScene === "home";
  refs.homeScene.classList.toggle("hidden", !atHome);
  refs.wildScene.classList.toggle("hidden", atHome);
}

function renderCodex() {
  const s = stageInfo();
  refs.codexStageName.textContent = `${s.cur.n}（${Math.round(state.sizeMm)}mm）`;
  refs.codexStageDesc.textContent = s.cur.d;
  refs.codexStageBar.style.width = `${s.p.toFixed(1)}%`;
  refs.codexStageNext.textContent = s.nxt ? `距下一阶段 ${s.nxt.n} 还差 ${s.remain}mm` : "已达到最高成长阶段";
  const interactionBindings = [
    [refs.codexTotalInteractions, state.interactions.total],
    [refs.codexHomeInteractions, state.interactions.home],
    [refs.codexWildInteractions, state.interactions.wild],
    [refs.codexExpressionInteractions, state.interactions.expression],
    [refs.codexDragInteractions, state.interactions.drag],
  ];
  interactionBindings.forEach(([node, value]) => {
    if (node) {
      node.textContent = String(value);
    }
  });

  refs.codexEventStats.innerHTML = "";
  Object.entries(EVENT_META).forEach(([k, label]) => {
    const b = document.createElement("span");
    b.className = "event-badge";
    b.textContent = `${label} ${state.eventCounters[k] || 0}`;
    refs.codexEventStats.appendChild(b);
  });

  refs.codexHistoryList.innerHTML = "";
  const recordsRaw = Array.isArray(state.history) ? state.history : [];
  const records = recordsRaw
    .map((it) => {
      if (!it || typeof it !== "object") return null;
      const text = String(it.text ?? "").trim();
      if (!text) return null;
      return { at: num(it.at, Date.now()), text };
    })
    .filter(Boolean)
    .slice(0, HISTORY_LIMIT);
  const displayRecords = records.length ? records : [{ at: Date.now(), text: "暂无历史事件" }];
  displayRecords.forEach((it) => {
    const li = document.createElement("li");
    const line = document.createElement("span");
    line.className = "history-entry-text";
    line.textContent = `[${historyTime(it.at)}] ${it.text}`;
    line.style.setProperty("color", "#5f4f43", "important");
    line.style.setProperty("-webkit-text-fill-color", "#5f4f43", "important");
    line.style.setProperty("font-size", "18px", "important");
    line.style.setProperty("line-height", "1.72", "important");
    line.style.setProperty("opacity", "1", "important");
    line.style.setProperty("visibility", "visible", "important");
    line.style.setProperty("display", "block", "important");
    li.appendChild(line);
    li.style.setProperty("color", "#5f4f43", "important");
    li.style.setProperty("-webkit-text-fill-color", "#5f4f43", "important");
    li.style.setProperty("opacity", "1", "important");
    refs.codexHistoryList.appendChild(li);
  });

  if (refs.codexAlbumList) {
    refs.codexAlbumList.innerHTML = "";
    const reached = Math.round(Math.max(state.sizeMm, num(state.maxSizeReachedMm, state.sizeMm)));
    ALBUM_ITEMS.forEach((item) => {
      const unlocked = reached >= item.unlockMm;
      const card = document.createElement("article");
      card.className = `album-item ${unlocked ? "unlocked" : "locked"}`;

      const thumb = document.createElement("div");
      thumb.className = `album-thumb ${unlocked ? "unlocked" : "locked"}`;
      const img = document.createElement("img");
      img.src = unlocked ? item.src : ALBUM_LOCKED_PLACEHOLDER_SRC;
      img.alt = unlocked ? item.name : "未解锁形象";
      thumb.appendChild(img);

      const tip = document.createElement("p");
      tip.className = "album-unlock";
      tip.textContent = unlocked ? "已解锁" : `${item.unlockMm}mm解锁`;

      card.appendChild(thumb);
      if (unlocked) {
        const title = document.createElement("p");
        title.className = "album-name";
        title.textContent = item.name;
        card.appendChild(title);
      }
      card.appendChild(tip);
      refs.codexAlbumList.appendChild(card);
    });
  }
  if (refs.codexAdventureList) {
    refs.codexAdventureList.innerHTML = "";
    const photos = normalizeAdventurePhotos(state.adventurePhotos, []);
    if (!photos.length) {
      const empty = document.createElement("p");
      empty.className = "adventure-empty";
      empty.textContent = "暂无奇遇照片";
      refs.codexAdventureList.appendChild(empty);
    } else {
      photos.forEach((photo) => {
        const card = document.createElement("article");
        card.className = "adventure-photo-item";
        card.dataset.adventureId = photo.id;
        card.setAttribute("role", "button");
        card.setAttribute("tabindex", "0");
        card.setAttribute("aria-label", "打开奇遇照片详情");

        const thumb = document.createElement("div");
        thumb.className = "adventure-photo-thumb";
        const img = document.createElement("img");
        img.src = photo.photoSrc;
        img.alt = "奇遇照片";
        thumb.appendChild(img);

        const time = document.createElement("p");
        time.className = "adventure-photo-time";
        time.textContent = historyTime(photo.at);

        const story = document.createElement("p");
        story.className = "adventure-photo-story";
        story.textContent = photo.story;

        card.appendChild(thumb);
        card.appendChild(time);
        card.appendChild(story);
        refs.codexAdventureList.appendChild(card);
      });
    }
  }
}

function closeAdventureModal() {
  runtime.adventureModal.open = false;
  runtime.adventureModal.photoId = "";
  runtime.adventureModal.customActive = false;
  runtime.adventureModal.customTitle = "";
  runtime.adventureModal.customStory = "";
  runtime.adventureModal.customPhotoSrc = "";
}

function openAdventureModal(photoId) {
  const id = typeof photoId === "string" ? photoId.trim() : "";
  if (!id) return false;
  const photos = normalizeAdventurePhotos(state.adventurePhotos, []);
  const hit = photos.find((it) => it.id === id);
  if (!hit) return false;
  runtime.adventureModal.open = true;
  runtime.adventureModal.photoId = hit.id;
  runtime.adventureModal.customActive = false;
  runtime.adventureModal.customTitle = "";
  runtime.adventureModal.customStory = "";
  runtime.adventureModal.customPhotoSrc = "";
  return true;
}

function openAdventureModalCustom(storyText, photoSrc = FIRST_LOGIN_ADVENTURE_IMAGE, titleText = "奇遇事件") {
  const story = (typeof storyText === "string" ? storyText.trim() : "").slice(0, ADVENTURE_STORY_MAX_CHARS * 3);
  if (!story) return false;
  const title = (typeof titleText === "string" ? titleText.trim() : "") || "奇遇事件";
  runtime.adventureModal.open = true;
  runtime.adventureModal.photoId = "";
  runtime.adventureModal.customActive = true;
  runtime.adventureModal.customTitle = title;
  runtime.adventureModal.customStory = story;
  runtime.adventureModal.customPhotoSrc = typeof photoSrc === "string" && photoSrc.trim()
    ? photoSrc.trim()
    : FIRST_LOGIN_ADVENTURE_IMAGE;
  return true;
}

function syncAdventureModalUi() {
  const visible = runtime.adventureModal.open;
  if (!refs.adventureModal) return;
  refs.adventureModal.classList.toggle("hidden", !visible);
  if (!visible) return;
  if (runtime.adventureModal.customActive) {
    if (refs.adventureModalTitle) refs.adventureModalTitle.textContent = runtime.adventureModal.customTitle || "奇遇事件";
    if (refs.adventureModalImage) {
      refs.adventureModalImage.src = runtime.adventureModal.customPhotoSrc || FIRST_LOGIN_ADVENTURE_IMAGE;
      refs.adventureModalImage.alt = "奇遇照片";
    }
    if (refs.adventureModalStory) refs.adventureModalStory.textContent = runtime.adventureModal.customStory || "";
    return;
  }
  const id = runtime.adventureModal.photoId;
  const photos = normalizeAdventurePhotos(state.adventurePhotos, []);
  const hit = photos.find((it) => it.id === id);
  if (!hit) {
    closeAdventureModal();
    refs.adventureModal.classList.add("hidden");
    return;
  }
  if (refs.adventureModalImage) {
    refs.adventureModalImage.src = hit.photoSrc;
    refs.adventureModalImage.alt = "奇遇照片";
  }
  if (refs.adventureModalTitle) refs.adventureModalTitle.textContent = "奇遇事件";
  if (refs.adventureModalStory) refs.adventureModalStory.textContent = hit.story;
}

function maybeShowFirstLoginAdventureModal() {
  if (!shouldShowFirstLoginAdventure) return false;
  shouldShowFirstLoginAdventure = false;
  state.viewMode = "observe";
  state.currentScene = "home";
  state.wildTask = mkWildTask();
  state.wildActionDone = false;
  closeFoodList();
  dismissWaterGame();
  clearBathingState();
  stopInertia();
  pauseAutoMotion();
  settleSlimeToHomeBottom();
  addAdventurePhotoRecord(FIRST_LOGIN_ADVENTURE_STORY, FIRST_LOGIN_ADVENTURE_IMAGE);
  return openAdventureModalCustom(FIRST_LOGIN_ADVENTURE_STORY, FIRST_LOGIN_ADVENTURE_IMAGE);
}

function fitDaysValueNoWrap() {
  if (!refs.daysValue) return;
  const el = refs.daysValue;
  const parent = el.parentElement;
  if (!parent) return;

  const maxWidth = Math.max(1, parent.clientWidth - 6);
  let fontSize = 58;
  el.style.fontSize = `${fontSize}px`;
  while (fontSize > 22 && el.scrollWidth > maxWidth) {
    fontSize -= 1;
    el.style.fontSize = `${fontSize}px`;
  }
}

function render() {
  normalizeStats();
  refs.petName.textContent = state.name;
  refs.daysValue.textContent = `${companionDays()}天`;
  fitDaysValueNoWrap();
  refs.staminaValue.textContent = `${Math.round(state.stamina)}/${STAMINA_MAX}`;
  refs.sizeValue.textContent = `大小${Math.round(state.sizeMm)}mm`;
  const growthCoeff = growthRateCoefficient();
  if (refs.growthRateFill) refs.growthRateFill.style.width = `${(growthCoeff * 100).toFixed(1)}%`;
  refs.satietyValue.textContent = `${Math.round(state.satiety)}%`;
  refs.healthValue.textContent = `${Math.round(state.health)}%`;
  renderIntimacyStars();
  renderMode();
  renderScene();
  maybeTriggerWaterGame();
  renderPickupDrops();
  renderPoop();
  renderSlime();
  syncStatusUI();
  syncStatGainFx();
  renderButtons();
  syncWaterGameUi();
  renderFoodTray();
  refs.soundBtn.textContent = state.soundEnabled ? "音效 开" : "音效 关";
  refs.soundBtn.classList.toggle("off", !state.soundEnabled);
  if (refs.gmItem1Btn) {
    refs.gmItem1Btn.classList.toggle("hidden", !runtime.gmVisible);
    refs.gmItem1Btn.textContent = `GM item1(水果)+1 (${Math.max(0, Math.round(num(state.items.item1, 0)))})`;
  }
  if (refs.gmItem2Btn) {
    refs.gmItem2Btn.classList.toggle("hidden", !runtime.gmVisible);
    refs.gmItem2Btn.textContent = `GM item2(主食)+1 (${Math.max(0, Math.round(num(state.items.item2, 0)))})`;
  }
  if (refs.gmItem3Btn) {
    refs.gmItem3Btn.classList.toggle("hidden", !runtime.gmVisible);
    refs.gmItem3Btn.textContent = `GM item3(饮料)+1 (${Math.max(0, Math.round(num(state.items.item3, 0)))})`;
  }
  if (refs.gmHealthMinusBtn) {
    refs.gmHealthMinusBtn.classList.toggle("hidden", !runtime.gmVisible);
    refs.gmHealthMinusBtn.textContent = `GM 健康值-10 (${Math.round(state.health)}%)`;
  }
  if (refs.gmSatietyMinusBtn) {
    refs.gmSatietyMinusBtn.classList.toggle("hidden", !runtime.gmVisible);
    refs.gmSatietyMinusBtn.textContent = `GM 饱食度-10 (${Math.round(state.satiety)}%)`;
  }
  if (refs.gmIntimacyMinusBtn) {
    refs.gmIntimacyMinusBtn.classList.toggle("hidden", !runtime.gmVisible);
    refs.gmIntimacyMinusBtn.textContent = `GM 亲密度-5 (${Math.round(state.intimacy)}/${INTIMACY_MAX})`;
  }
  if (refs.gmCleanseItemBtn) {
    refs.gmCleanseItemBtn.classList.toggle("hidden", !runtime.gmVisible);
    refs.gmCleanseItemBtn.textContent = `GM 洗澡道具(肥皂)+1 (${Math.max(0, Math.round(num(state.items.cleanse, 0)))})`;
  }
  if (refs.gmOpenWaterGameBtn) {
    refs.gmOpenWaterGameBtn.classList.toggle("hidden", !runtime.gmVisible);
    refs.gmOpenWaterGameBtn.textContent = "GM 打开喝水小游戏";
  }
  if (refs.gmResetDay1Btn) {
    refs.gmResetDay1Btn.classList.toggle("hidden", !runtime.gmVisible);
    refs.gmResetDay1Btn.textContent = "GM 重置回初始(第1天)";
  }
  if (refs.gmSizePlus1000Btn) {
    refs.gmSizePlus1000Btn.classList.toggle("hidden", !runtime.gmVisible);
    refs.gmSizePlus1000Btn.textContent = `GM 增加大小+1000 (${Math.round(num(state.sizeMm, MIN_SIZE_MM))}mm)`;
  }
  if (state.viewMode !== "observe") renderCodex();
  syncAdventureModalUi();
  if (runtime.waterGame.active && isWaterGameContextReady()) {
    refs.speechBubble.textContent = runtime.waterGame.speechText || eventSpeechText("water_game_prompt", "到点喝水啦！");
    positionSpeechBubble();
  } else if (!runtime.bathing.active && !runtime.speechTimer && !isHomeAwayActive()) {
    refs.speechBubble.textContent = speechAuto();
  }
  syncAiThemeUi();
  syncBathingHud();
}

function spawnFx(layer, cls, x, y, vars = {}, life = 1200, text = "") {
  if (!layer) return;
  const e = document.createElement("span");
  e.className = `fx-item ${cls}`;
  if (text) e.textContent = text;
  if (Number.isFinite(x)) e.style.left = `${x}px`;
  if (Number.isFinite(y)) e.style.top = `${y}px`;
  Object.entries(vars).forEach(([k, v]) => e.style.setProperty(k, String(v)));
  layer.appendChild(e);
  window.setTimeout(() => e.remove(), life);
}

function wildAnchor(name) {
  const w = refs.wildScene.clientWidth || 712;
  const h = refs.wildScene.clientHeight || 760;
  if (name === "hotspring") return { x: w * 0.27, y: h * 0.42 };
  if (name === "farming") return { x: w * 0.73, y: h * 0.42 };
  if (name === "camping") return { x: w * 0.27, y: h * 0.77 };
  return { x: w * 0.73, y: h * 0.77 };
}

function wildScenePointFromEvent(event) {
  if (!event || !refs.wildScene) return null;
  if (typeof event.detail === "number" && event.detail === 0) return null;
  const clientX = num(event.clientX, NaN);
  const clientY = num(event.clientY, NaN);
  if (!Number.isFinite(clientX) || !Number.isFinite(clientY)) return null;
  const rect = refs.wildScene.getBoundingClientRect();
  if (!rect || rect.width <= 0 || rect.height <= 0) return null;
  const sceneW = refs.wildScene.clientWidth || 712;
  const sceneH = refs.wildScene.clientHeight || 760;
  const x = ((clientX - rect.left) * sceneW) / rect.width;
  const y = ((clientY - rect.top) * sceneH) / rect.height;
  return { x: clamp(x, 0, sceneW), y: clamp(y, 0, sceneH) };
}
function playWildFx(name) {
  const a = wildAnchor(name);
  const layer = refs.wildFxLayer;
  sound.play(name);
  if (name === "hotspring") {
    for (let i = 0; i < 14; i += 1) spawnFx(layer, "fx-steam", a.x + rand(-34, 34), a.y + rand(8, 20), {
      "--dx": `${rand(-26, 26).toFixed(1)}px`, "--size": `${rand(18, 32).toFixed(1)}px`, "--dur": `${rand(1.1, 1.9).toFixed(2)}s`,
    }, 1900);
  } else if (name === "farming") {
    for (let i = 0; i < 16; i += 1) spawnFx(layer, "fx-leaf", a.x + rand(-52, 52), a.y + rand(10, 32), {
      "--dx": `${rand(-68, 68).toFixed(1)}px`, "--dy": `${rand(-170, -85).toFixed(1)}px`, "--r": `${rand(-220, 220).toFixed(1)}deg`, "--dur": `${rand(0.85, 1.25).toFixed(2)}s`,
    }, 1300);
  } else if (name === "camping") {
    for (let i = 0; i < 16; i += 1) spawnFx(layer, "fx-ember", a.x + rand(-28, 28), a.y + rand(8, 24), {
      "--dx": `${rand(-55, 55).toFixed(1)}px`, "--dy": `${rand(-138, -72).toFixed(1)}px`, "--dur": `${rand(0.9, 1.2).toFixed(2)}s`,
    }, 1300);
  } else if (name === "travel") {
    spawnFx(layer, "fx-flash", 0, 0, {}, 700);
    for (let i = 0; i < 4; i += 1) spawnFx(layer, "fx-streak", a.x - 160 + i * 16, a.y - 28 + i * 8, {}, 700);
    for (let i = 0; i < 9; i += 1) spawnFx(layer, "fx-sparkle", a.x + rand(-68, 68), a.y + rand(-34, 36), {
      "--dx": `${rand(-52, 52).toFixed(1)}px`, "--dy": `${rand(-102, -30).toFixed(1)}px`, "--dur": `${rand(0.7, 1.0).toFixed(2)}s`,
    }, 1000);
  }
}

function showWildStaminaHint(name, text = "有点累了，在家恢复下体力吧", anchor = null) {
  if (!refs.wildFxLayer || state.currentScene !== "wild") return;
  const fallback = wildAnchor(name);
  const hasAnchor = anchor && Number.isFinite(anchor.x) && Number.isFinite(anchor.y);
  const a = hasAnchor ? anchor : fallback;
  spawnFx(
    refs.wildFxLayer,
    "fx-pickup-hint",
    a.x,
    a.y,
    {},
    2200,
    text
  );
}

function playHomeFx(action) {
  const layer = refs.homeFxLayer;
  const x = state.slime.x;
  const y = state.slime.y;
  sound.play(action);
  if (action === "feed" || action === "chat") {
    const c = action === "feed" ? 8 : 9;
    for (let i = 0; i < c; i += 1) spawnFx(layer, "fx-heart", x + rand(-56, 56), y + rand(-18, 22), {
      "--dx": `${rand(-50, 50).toFixed(1)}px`, "--dur": `${rand(0.8, 1.2).toFixed(2)}s`,
    }, 1300, "♥");
  } else if (action === "cleanPoop") {
    const baseY = (refs.homeScene.clientHeight || 760) - 168;
    for (let i = 0; i < 12; i += 1) spawnFx(layer, "fx-sparkle", rand(92, 622), baseY + rand(-24, 24), {
      "--dx": `${rand(-42, 42).toFixed(1)}px`, "--dy": `${rand(-95, -38).toFixed(1)}px`, "--dur": `${rand(0.68, 1.0).toFixed(2)}s`,
    }, 1100);
  } else if (action === "bath") {
    for (let i = 0; i < 14; i += 1) spawnFx(layer, "fx-bubble", x + rand(-58, 58), y + rand(-12, 36), {
      "--dx": `${rand(-42, 42).toFixed(1)}px`, "--dy": `${rand(-130, -60).toFixed(1)}px`, "--dur": `${rand(0.85, 1.25).toFixed(2)}s`,
    }, 1300);
  } else if (action === "heal") {
    for (let i = 0; i < 10; i += 1) spawnFx(layer, "fx-sparkle", x + rand(-46, 46), y + rand(-22, 26), {
      "--dx": `${rand(-46, 46).toFixed(1)}px`, "--dy": `${rand(-102, -40).toFixed(1)}px`, "--dur": `${rand(0.75, 1.1).toFixed(2)}s`,
    }, 1200);
  }
}

function setMode(mode) {
  if (runtime.bathing.active) {
    sound.ensure();
    sound.play("deny");
    sayEvent("mode_switch_blocked_by_bath", "洗澡进行中，先划动完成吧。", 2200);
    return;
  }
  const next = mode === "codex" ? "codex" : "observe";
  if (state.viewMode === next) return;
  if (next === "codex" && runtime.waterGame.active) {
    dismissWaterGame();
  }
  pauseAutoMotion();
  sound.ensure();
  sound.play("mode");
  state.viewMode = next;
  if (next !== "codex") closeAdventureModal();
  if (next === "codex") { stopInertia(); sayEvent("switch_to_codex", "日记已打开，可以查看成长和历史。", 2500); }
  else {
    if (state.currentScene === "home") settleSlimeToHomeBottom();
    const line = eventSpeechText("switch_to_observe", "你回来啦~主人记得多喝水");
    say(line, eventSpeechHoldMs("switch_to_observe", 2200));
  }
  render();
  saveState();
}

function toggleSound() {
  if (state.soundEnabled) { sound.play("toggleOff"); state.soundEnabled = false; }
  else { state.soundEnabled = true; sound.ensure(); sound.play("toggleOn"); }
  render();
  saveState();
}

function onGmItem1Click() {
  state.items.item1 = Math.max(0, Math.round(num(state.items.item1, 0))) + 1;
  const line = "GM指令：item1(水果)+1。";
  say(line, 1500);
  addHistoryTriggeredSpeech(line);
  addLog("GM指令：item1(水果)+1。", true);
  render();
  saveState();
}

function onGmItem2Click() {
  state.items.item2 = Math.max(0, Math.round(num(state.items.item2, 0))) + 1;
  const line = "GM指令：item2(主食)+1。";
  say(line, 1500);
  addHistoryTriggeredSpeech(line);
  addLog("GM指令：item2(主食)+1。", true);
  render();
  saveState();
}

function onGmItem3Click() {
  state.items.item3 = Math.max(0, Math.round(num(state.items.item3, 0))) + 1;
  const line = "GM指令：item3(饮料)+1。";
  say(line, 1500);
  addHistoryTriggeredSpeech(line);
  addLog("GM指令：item3(饮料)+1。", true);
  render();
  saveState();
}

function onGmHealthMinusClick() {
  state.health = clamp(state.health - 10);
  const line = "GM指令：健康值-10。";
  say(line, 1500);
  addHistoryTriggeredSpeech(line);
  addLog("GM指令：健康值-10。", true);
  render();
  saveState();
}

function onGmSatietyMinusClick() {
  state.satiety = clamp(state.satiety - 10);
  const line = "GM指令：饱食度-10。";
  say(line, 1500);
  addHistoryTriggeredSpeech(line);
  addLog("GM指令：饱食度-10。", true);
  render();
  saveState();
}

function onGmIntimacyMinusClick() {
  state.intimacy = clamp(state.intimacy - 5, 0, INTIMACY_MAX);
  const line = "GM指令：亲密度-5。";
  say(line, 1500);
  addHistoryTriggeredSpeech(line);
  addLog("GM指令：亲密度-5。", true);
  render();
  saveState();
}

function onGmCleanseItemClick() {
  state.items.cleanse = Math.max(0, Math.round(num(state.items.cleanse, 0))) + 1;
  const line = "GM指令：洗澡道具(肥皂)+1。";
  say(line, 1500);
  addHistoryTriggeredSpeech(line);
  addLog("GM指令：洗澡道具(肥皂)+1。", true);
  render();
  saveState();
}

function onGmOpenWaterGameClick() {
  pauseAutoMotion();
  sound.ensure();
  if (runtime.bathing.active) {
    clearBathingState();
    state.items.cleanse = Math.max(0, Math.round(num(state.items.cleanse, 0))) + 1;
  }
  if (isWildTaskActive()) {
    state.wildTask = mkWildTask();
    state.wildActionDone = false;
  }
  if (runtime.waterGame.active) dismissWaterGame();
  state.viewMode = "observe";
  state.currentScene = "home";
  state.waterGame.unlocked = true;
  state.waterGame.nextTriggerAt = 0;
  settleSlimeToHomeBottom();
  activateWaterGame();
  addLog("GM指令：已直接打开喝水小游戏。", true);
  addHistory("GM指令：打开喝水小游戏");
  render();
  saveState();
}

function onGmResetDay1Click() {
  sound.ensure();
  sound.play("mode");
  stopGmFastForwardHold();

  if (runtime.speechTimer) {
    clearTimeout(runtime.speechTimer);
    runtime.speechTimer = 0;
  }
  if (runtime.ui.wildGainTimer) {
    clearTimeout(runtime.ui.wildGainTimer);
    runtime.ui.wildGainTimer = 0;
  }
  if (runtime.ui.wildRandomTimer) {
    clearTimeout(runtime.ui.wildRandomTimer);
    runtime.ui.wildRandomTimer = 0;
  }
  if (runtime.ui.wildPopupLayoutRaf) {
    cancelAnimationFrame(runtime.ui.wildPopupLayoutRaf);
    runtime.ui.wildPopupLayoutRaf = 0;
  }
  if (runtime.ui.wildPopupLayoutTimer) {
    clearTimeout(runtime.ui.wildPopupLayoutTimer);
    runtime.ui.wildPopupLayoutTimer = 0;
  }
  hideWildGainPopup();
  hideWildRandomPopup();
  clearBathingState();
  dismissWaterGame();
  closeAdventureModal();
  stopInertia();
  pauseAutoMotion();

  runtime.priorityExpression.name = "";
  runtime.priorityExpression.until = 0;
  runtime.ui.lastRenderedPoopSignature = "";
  runtime.ui.lastRenderedPickupSignature = "";
  runtime.ui.lastStatFxSnapshot = null;
  runtime.ui.codexScrollDrag.active = false;
  runtime.ui.codexScrollDrag.pointerId = -1;
  if (refs.codexPanel) refs.codexPanel.classList.remove("codex-dragging");
  runtime.waterGame.active = false;
  runtime.waterGame.speechText = "";
  runtime.waterGame.settingsOpen = false;
  runtime.waterGame.settingsDraftMinutes = WATER_GAME_COOLDOWN_DEFAULT_MINUTES;

  const now = Date.now();
  state = cloneState();
  state.createdAt = now;
  state.lastTickAt = now;
  state.clickWindowStartedAt = now;
  state.nextPoopAt = now + nextPoopDelayMs();
  state.nextPickupSpawnAt = now + nextPickupDelayMs();
  state.history = [{ at: now, text: "你领养了史莱姆。" }];
  state.logs = ["欢迎回家，史莱姆在等你。"];
  state.currentScene = "home";
  state.viewMode = "observe";

  settleSlimeToHomeBottom();
  shouldShowFirstLoginAdventure = true;
  maybeShowFirstLoginAdventureModal();
  render();
  saveState();
}

function onGmSizePlus1000Click() {
  const gain = 1000;
  state.sizeMm = Math.max(MIN_SIZE_MM, num(state.sizeMm, MIN_SIZE_MM) + gain);
  state.maxSizeReachedMm = Math.max(num(state.maxSizeReachedMm, state.sizeMm), state.sizeMm);
  refreshSizeAndStage();
  showSizeGainFx(gain);

  const line = "GM指令：大小+1000mm。";
  say(line, 1500);
  addHistoryTriggeredSpeech(line);
  addLog(line, true);
  addHistory("GM指令：大小+1000mm");
  render();
  saveState();
}

function shiftFastForwardDeadlines(offsetMs) {
  const shift = Math.round(num(offsetMs, 0));
  if (!shift) return;

  if (Number.isFinite(state.nextPoopAt)) {
    state.nextPoopAt = Math.max(0, Math.round(num(state.nextPoopAt, 0) + shift));
  }
  if (Number.isFinite(state.nextPickupSpawnAt)) {
    state.nextPickupSpawnAt = Math.max(0, Math.round(num(state.nextPickupSpawnAt, 0) + shift));
  }

  if (state.eventCooldowns && typeof state.eventCooldowns === "object") {
    Object.keys(state.eventCooldowns).forEach((key) => {
      state.eventCooldowns[key] = Math.max(0, Math.round(num(state.eventCooldowns[key], 0) + shift));
    });
  }

  if (state.wildTask && typeof state.wildTask === "object") {
    state.wildTask.startedAt = Math.max(0, Math.round(num(state.wildTask.startedAt, 0) + shift));
    state.wildTask.endsAt = Math.max(0, Math.round(num(state.wildTask.endsAt, 0) + shift));
    if (!Object.prototype.hasOwnProperty.call(WILD_EVENT_DURATION_MS, state.wildTask.name)) {
      state.wildTask = mkWildTask();
    } else if (num(state.wildTask.endsAt, 0) <= num(state.wildTask.startedAt, 0)) {
      state.wildTask = mkWildTask();
    }
  }

  if (state.waterGame && typeof state.waterGame === "object") {
    state.waterGame.nextTriggerAt = Math.max(0, Math.round(num(state.waterGame.nextTriggerAt, 0) + shift));
  }
}

function runGmFastForwardStep() {
  const now = Date.now();
  const normalSec = Math.max(0, (now - state.lastTickAt) / 1000);
  if (normalSec > 0) applyTimeProgress(normalSec, true);
  applyTimeProgress(GM_FAST_FORWARD_SECONDS, false);
  // GM快进需要同步推进绝对时间戳型计时器（如道具泡泡产出时间）。
  shiftFastForwardDeadlines(-(GM_FAST_FORWARD_SECONDS * 1000));
  state.lastTickAt = now;
  addLog("GM快进：+3分钟。", true);
  render();
  saveState();
}

function startGmFastForwardHold() {
  if (runtime.gmFastForward.pressed) return;
  runtime.gmFastForward.pressed = true;
  runtime.gmFastForward.holdTimer = window.setTimeout(() => {
    runtime.gmFastForward.holdTimer = 0;
    if (!runtime.gmFastForward.pressed) return;
    runtime.gmFastForward.active = true;
    runGmFastForwardStep();
    runtime.gmFastForward.repeatTimer = window.setInterval(() => {
      if (!runtime.gmFastForward.pressed) return;
      runGmFastForwardStep();
    }, GM_FAST_FORWARD_HOLD_MS);
  }, GM_FAST_FORWARD_HOLD_MS);
}

function stopGmFastForwardHold() {
  if (runtime.gmFastForward.holdTimer) {
    clearTimeout(runtime.gmFastForward.holdTimer);
    runtime.gmFastForward.holdTimer = 0;
  }
  if (runtime.gmFastForward.repeatTimer) {
    clearInterval(runtime.gmFastForward.repeatTimer);
    runtime.gmFastForward.repeatTimer = 0;
  }
  runtime.gmFastForward.pressed = false;
  runtime.gmFastForward.active = false;
}

function onGlobalKeyDown(event) {
  const target = event.target;
  const typingTarget = target instanceof HTMLElement
    && (target.isContentEditable || target.tagName === "INPUT" || target.tagName === "TEXTAREA");
  if (typingTarget) return;
  if (event.repeat || event.altKey || event.ctrlKey || event.metaKey) return;
  if (event.code === "KeyG") {
    startGmFastForwardHold();
    return;
  }
  if (event.code === "Escape" && runtime.aiTheme.panelOpen) {
    setAiThemePanelOpen(false);
    return;
  }
  if (event.code === "KeyU") {
    setAiThemePanelOpen(!runtime.aiTheme.panelOpen);
    return;
  }
  if (event.code !== "KeyE") return;
  runtime.gmVisible = !runtime.gmVisible;
  if (refs.gmItem1Btn) refs.gmItem1Btn.classList.toggle("hidden", !runtime.gmVisible);
  if (refs.gmItem2Btn) refs.gmItem2Btn.classList.toggle("hidden", !runtime.gmVisible);
  if (refs.gmItem3Btn) refs.gmItem3Btn.classList.toggle("hidden", !runtime.gmVisible);
  if (refs.gmHealthMinusBtn) refs.gmHealthMinusBtn.classList.toggle("hidden", !runtime.gmVisible);
  if (refs.gmSatietyMinusBtn) refs.gmSatietyMinusBtn.classList.toggle("hidden", !runtime.gmVisible);
  if (refs.gmIntimacyMinusBtn) refs.gmIntimacyMinusBtn.classList.toggle("hidden", !runtime.gmVisible);
  if (refs.gmCleanseItemBtn) refs.gmCleanseItemBtn.classList.toggle("hidden", !runtime.gmVisible);
  if (refs.gmOpenWaterGameBtn) refs.gmOpenWaterGameBtn.classList.toggle("hidden", !runtime.gmVisible);
  if (refs.gmResetDay1Btn) refs.gmResetDay1Btn.classList.toggle("hidden", !runtime.gmVisible);
  if (refs.gmSizePlus1000Btn) refs.gmSizePlus1000Btn.classList.toggle("hidden", !runtime.gmVisible);
}

function onGlobalKeyUp(event) {
  if (event.code === "KeyG") stopGmFastForwardHold();
}

function homeAction(action) {
  if (runtime.bathing.active) {
    sound.ensure();
    sound.play("deny");
    sayEvent("home_action_blocked_by_bath", "先帮我洗完澡，划动3秒就好。", 2200);
    return;
  }
  pauseAutoMotion();
  sound.ensure();
  if (action === "feed") {
    state.satiety = clamp(state.satiety + 20);
    state.mood = clamp(state.mood + 4);
    sayEvent("home_feed", "吃饱啦，感觉元气满满。", 3200); addLog("你喂食了史莱姆。", true); record("home", "feed", "室内互动：喂食"); playHomeFx("feed");
  } else if (action === "cleanPoop") {
    if (!cleanOnePoop(false)) return;
  } else if (action === "bath") {
    if (isDirtyActive()) {
      onDirtyBathClick();
      return;
    }
    state.cleanliness = clamp(state.cleanliness + 24); state.health = clamp(state.health + 10); state.mood = clamp(state.mood + 6);
    sayEvent("home_bath_normal", "洗澡后香香的，真开心。", 3200); addLog("你给史莱姆洗澡了。", true); record("home", "bath", "室内互动：洗澡"); playHomeFx("bath");
  } else if (action === "heal") {
    if (state.health >= 98) { sound.play("deny"); sayEvent("home_heal_denied", "我现在状态很好，不用治病。", 2400); return; }
    state.health = clamp(state.health + 20); state.mood = clamp(state.mood - 2);
    sayEvent("home_heal_success", "治疗完成，身体舒服多了。", 3200); addLog("你给史莱姆进行了治疗。", true); record("home", "heal", "室内互动：治病"); playHomeFx("heal");
  } else if (action === "chat") {
    state.mood = clamp(state.mood + 10); state.satiety = clamp(state.satiety - 3);
    sayEvent("home_chat", "和你聊天最开心了。", 3200); addLog("你和史莱姆聊了会儿天。", true); record("home", "chat", "室内互动：聊天"); playHomeFx("chat");
  } else if (action === "useFoodItem") {
    if (state.items.food <= 0) { sound.play("deny"); sayEvent("use_food_item_denied", "没有食材道具可用。", 2200); return; }
    state.items.food -= 1;
    const gain = randInt(10, 16);
    state.satiety = clamp(state.satiety + gain);
    sayEvent("use_food_item_success", "使用了食材道具，饱食度+{gain}。", 2600, { gain });
    addLog(`你使用了食材道具，饱食度+${gain}。`, true);
    record("home", "", "室内互动：使用食材道具");
    playHomeFx("feed");
  } else if (action === "useCleanseItem") {
    if (state.items.cleanse <= 0) { sound.play("deny"); sayEvent("use_cleanse_item_denied", "没有清澡道具可用。", 2200); return; }
    if (!enterBathingState()) { sound.play("deny"); return; }
    return;
  }
  render();
  saveState();
}

function onPoopClick(event) {
  if (state.currentScene !== "home" || state.viewMode !== "observe") return;
  if (runtime.bathing.active) return;
  const target = event.currentTarget?.classList?.contains("poop")
    ? event.currentTarget
    : event.target.closest(".poop");
  if (!target) return;
  event.preventDefault();
  event.stopPropagation();
  pauseAutoMotion();
  sound.ensure();
  const slot = Number.parseInt(target.dataset.slotIndex || "", 10);
  if (!cleanOnePoop(true, Number.isInteger(slot) ? slot : null)) return;
  render();
  saveState();
}

function onSickHealClick() {
  if (state.currentScene !== "home" || state.viewMode !== "observe" || !isCriticalSick()) {
    sound.play("deny");
    return;
  }
  pauseAutoMotion();
  sound.ensure();
  state.intimacy = clamp(state.intimacy - 10, 0, INTIMACY_MAX);
  state.health = clamp(state.health + 15);
  const holdMs = eventSpeechHoldMs("sick_heal_button", 2800);
  runtime.priorityExpression.name = "shock";
  runtime.priorityExpression.until = Date.now() + holdMs;
  sayEvent("sick_heal_button", "痛 T T", holdMs);
  addLog("你进行了打针，健康+15，亲密度-10。", true);
  record("home", "", "事件交互：打针按钮");
  playHomeFx("heal");
  render();
  saveState();
}

function onDirtyBathClick() {
  if (state.currentScene !== "home" || state.viewMode !== "observe" || !isDirtyActive()) {
    sound.play("deny");
    return;
  }
  sound.ensure();
  if (state.items.cleanse <= 0) {
    sound.play("deny");
    sayEvent("dirty_bath_no_soap", "没有肥皂呢，去泡温泉试试吧", 2800);
    render();
    saveState();
    return;
  }

  enterBathingState();
}

function wildEventButton(name) {
  return refs.eventButtons.find((btn) => btn.dataset.event === name) || null;
}

function wildEventUnlockMm(name) {
  return Number.isFinite(Number(WILD_EVENT_UNLOCK_MM[name])) ? Number(WILD_EVENT_UNLOCK_MM[name]) : 0;
}

function isWildEventUnlocked(name) {
  const needMm = wildEventUnlockMm(name);
  if (needMm <= 0) return true;
  const reachedMm = Math.max(
    Math.round(num(state.sizeMm, MIN_SIZE_MM)),
    Math.round(num(state.maxSizeReachedMm, MIN_SIZE_MM))
  );
  return reachedMm >= needMm;
}

function wildRunnerFrameUrl(index) {
  const seq = WILD_RUNNER_JUMP_FRAME_SEQUENCE[index % WILD_RUNNER_JUMP_FRAME_SEQUENCE.length] || 1;
  return `./assets/slime_expressions/jump/jump_${String(seq).padStart(2, "0")}.png`;
}

function ensureWildRunnerFrameEl() {
  if (!refs.wildRunner) return null;
  let frameEl = refs.wildRunner.querySelector(".wild-runner-frame");
  if (!(frameEl instanceof HTMLImageElement)) {
    frameEl = document.createElement("img");
    frameEl.className = "wild-runner-frame";
    frameEl.alt = "";
    frameEl.draggable = false;
    refs.wildRunner.appendChild(frameEl);
  }
  return frameEl;
}

function preloadWildRunnerFrames() {
  if (runtime.wildRunnerAnim.preloaded) return Promise.resolve(true);
  if (runtime.wildRunnerAnim.loadingPromise) return runtime.wildRunnerAnim.loadingPromise;
  runtime.wildRunnerAnim.preloading = true;
  const uniqueUrls = [...new Set(
    WILD_RUNNER_JUMP_FRAME_SEQUENCE.map((_, idx) => wildRunnerFrameUrl(idx))
  )];
  runtime.wildRunnerAnim.loadingPromise = new Promise((resolve) => {
    let pending = uniqueUrls.length;
    if (pending <= 0) {
      runtime.wildRunnerAnim.preloaded = true;
      runtime.wildRunnerAnim.preloading = false;
      runtime.wildRunnerAnim.loadingPromise = null;
      resolve(true);
      return;
    }

    const onOneDone = () => {
      pending -= 1;
      if (pending <= 0) {
        runtime.wildRunnerAnim.preloaded = true;
        runtime.wildRunnerAnim.preloading = false;
        runtime.wildRunnerAnim.loadingPromise = null;
        resolve(true);
      }
    };

    uniqueUrls.forEach((url) => {
      const img = new Image();
      let done = false;
      const finish = () => {
        if (done) return;
        done = true;
        runtime.wildRunnerAnim.loadedUrls[url] = true;
        onOneDone();
      };
      img.onload = () => {
        if (typeof img.decode === "function") {
          img.decode().then(finish).catch(finish);
          return;
        }
        finish();
      };
      img.onerror = finish;
      img.src = url;
      if (img.complete) finish();
    });
  });
  return runtime.wildRunnerAnim.loadingPromise;
}

function applyWildRunnerFrame() {
  const frameEl = ensureWildRunnerFrameEl();
  if (!frameEl) return;
  const url = wildRunnerFrameUrl(runtime.wildRunnerAnim.frame);
  if (!runtime.wildRunnerAnim.loadedUrls[url]) return;
  if (url === runtime.wildRunnerAnim.currentUrl) return;
  frameEl.src = url;
  runtime.wildRunnerAnim.currentUrl = url;
}

function stopWildRunnerAnim() {
  runtime.wildRunnerAnim.active = false;
  if (runtime.wildRunnerAnim.rafId) cancelAnimationFrame(runtime.wildRunnerAnim.rafId);
  runtime.wildRunnerAnim.rafId = 0;
  runtime.wildRunnerAnim.currentUrl = "";
}

function ensureWildRunnerAnim() {
  const start = () => {
    if (runtime.wildRunnerAnim.active) return;
    runtime.wildRunnerAnim.active = true;
    runtime.wildRunnerAnim.frame = 0;
    runtime.wildRunnerAnim.lastTs = performance.now();
    applyWildRunnerFrame();
    const frameDur = 1000 / WILD_RUNNER_JUMP_FPS;
    const step = (ts) => {
      if (!runtime.wildRunnerAnim.active) return;
      const delta = ts - runtime.wildRunnerAnim.lastTs;
      if (delta >= frameDur) {
        const adv = Math.max(1, Math.floor(delta / frameDur));
        runtime.wildRunnerAnim.frame = (runtime.wildRunnerAnim.frame + adv) % WILD_RUNNER_JUMP_FRAME_SEQUENCE.length;
        runtime.wildRunnerAnim.lastTs = ts;
        applyWildRunnerFrame();
      }
      runtime.wildRunnerAnim.rafId = requestAnimationFrame(step);
    };
    runtime.wildRunnerAnim.rafId = requestAnimationFrame(step);
  };

  if (runtime.wildRunnerAnim.preloaded) {
    start();
    return;
  }

  preloadWildRunnerFrames().then(() => {
    const activeName = activeWildTaskName();
    const canShow = Boolean(activeName) && state.currentScene === "wild" && state.viewMode === "observe";
    if (!canShow) return;
    start();
  }).catch(() => {});
}

function syncWildRunner() {
  if (!refs.wildRunner) return;
  const activeName = activeWildTaskName();
  const visible = Boolean(activeName) && state.currentScene === "wild" && state.viewMode === "observe";
  refs.wildRunner.classList.toggle("hidden", !visible);
  if (!visible) {
    stopWildRunnerAnim();
    return;
  }
  const card = wildEventButton(activeName);
  if (!card) {
    stopWildRunnerAnim();
    return;
  }
  const sceneRect = refs.wildScene.getBoundingClientRect();
  const cardRect = card.getBoundingClientRect();
  const x = Math.round((cardRect.left + cardRect.width * 0.5) - sceneRect.left);
  const y = Math.round((cardRect.top + cardRect.height * 0.5) - sceneRect.top);
  refs.wildRunner.style.left = `${x}px`;
  refs.wildRunner.style.top = `${y}px`;
  ensureWildRunnerAnim();
}

function syncWildPopupLayout() {
  if (!refs.wildGainPopup || !refs.wildRandomPopup) return;
  const gain = refs.wildGainPopup;
  const random = refs.wildRandomPopup;
  const gainVisible = !gain.classList.contains("hidden");
  const randomVisible = !random.classList.contains("hidden");

  gain.classList.remove("wild-popup-shifted");
  random.classList.remove("wild-popup-shifted");
  gain.style.removeProperty("--popup-shift-y");
  random.style.removeProperty("--popup-shift-y");
  gain.style.top = "50%";
  random.style.top = "50%";

  if (!(gainVisible && randomVisible)) return;

  const gainH = Math.max(108, Math.round(gain.getBoundingClientRect().height || 0), gain.offsetHeight || 0);
  const randomH = Math.max(108, Math.round(random.getBoundingClientRect().height || 0), random.offsetHeight || 0);
  const gap = 28;
  const gainOffset = Math.round((randomH + gap) / 2);
  const randomOffset = Math.round((gainH + gap) / 2);

  gain.style.top = `calc(50% - ${gainOffset}px)`;
  random.style.top = `calc(50% + ${randomOffset}px)`;
}

function queueWildPopupLayoutSync() {
  if (runtime.ui.wildPopupLayoutRaf) {
    cancelAnimationFrame(runtime.ui.wildPopupLayoutRaf);
    runtime.ui.wildPopupLayoutRaf = 0;
  }
  if (runtime.ui.wildPopupLayoutTimer) {
    clearTimeout(runtime.ui.wildPopupLayoutTimer);
    runtime.ui.wildPopupLayoutTimer = 0;
  }
  runtime.ui.wildPopupLayoutRaf = requestAnimationFrame(() => {
    runtime.ui.wildPopupLayoutRaf = 0;
    syncWildPopupLayout();
  });
  runtime.ui.wildPopupLayoutTimer = window.setTimeout(() => {
    runtime.ui.wildPopupLayoutTimer = 0;
    syncWildPopupLayout();
  }, 180);
}

function hideWildGainPopup() {
  if (!refs.wildGainPopup) return;
  refs.wildGainPopup.classList.add("hidden");
  syncWildPopupLayout();
}

function showWildGainPopup(lines) {
  if (!refs.wildGainPopup || !refs.wildGainBody) return;
  if (runtime.ui.wildGainTimer) clearTimeout(runtime.ui.wildGainTimer);
  refs.wildGainBody.textContent = Array.isArray(lines) ? lines.join("\n") : String(lines || "");
  refs.wildGainPopup.classList.remove("hidden");
  syncWildPopupLayout();
  queueWildPopupLayoutSync();
  runtime.ui.wildGainTimer = window.setTimeout(() => {
    hideWildGainPopup();
    runtime.ui.wildGainTimer = 0;
  }, 2600);
}

function hideWildRandomPopup() {
  if (!refs.wildRandomPopup) return;
  refs.wildRandomPopup.classList.add("hidden");
  syncWildPopupLayout();
}

function showWildRandomPopup(payload) {
  if (!payload || !refs.wildRandomPopup || !refs.wildRandomBody || !refs.wildRandomIcon) return;
  if (runtime.ui.wildRandomTimer) clearTimeout(runtime.ui.wildRandomTimer);
  refs.wildRandomIcon.src = payload.iconPath || ITEM_DEFS.item4.iconPath;
  refs.wildRandomIcon.alt = payload.iconAlt || "随机事件";
  refs.wildRandomBody.textContent = Array.isArray(payload.lines) ? payload.lines.join("\n") : String(payload.lines || "");
  refs.wildRandomPopup.classList.remove("hidden");
  syncWildPopupLayout();
  queueWildPopupLayoutSync();
  runtime.ui.wildRandomTimer = window.setTimeout(() => {
    hideWildRandomPopup();
    runtime.ui.wildRandomTimer = 0;
  }, 3600);
}

function rollWildRandomEvent(name) {
  const triggerCommon = Math.random() < WILD_RANDOM_EVENT_CHANCE;
  const lines = [];
  let iconPath = "";
  let iconAlt = "";
  let adventurePhotoId = "";
  const logs = [];

  if (name === "hotspring") {
    if (!triggerCommon) return null;
    state.items.cleanse = Math.max(0, Math.round(num(state.items.cleanse, 0))) + 1;
    lines.push("获得洗澡道具（肥皂）x1");
    iconPath = ITEM_DEFS.item4.iconPath;
    iconAlt = ITEM_DEFS.item4.name;
  }

  if (name === "camping") {
    if (!triggerCommon) return null;
    state.items.cleanse = Math.max(0, Math.round(num(state.items.cleanse, 0))) + 1;
    state.items.item3 = Math.max(0, Math.round(num(state.items.item3, 0))) + 1;
    const sizeGain = randInt(2, 5);
    state.sizeMm = Math.max(MIN_SIZE_MM, num(state.sizeMm, MIN_SIZE_MM) + sizeGain);
    lines.push("获得洗澡道具（肥皂）x1");
    lines.push("饮料x1");
    lines.push(`大小+${sizeGain}mm`);
    iconPath = ITEM_DEFS.item3.iconPath;
    iconAlt = ITEM_DEFS.item3.name;
  }

  if (name === "farming") {
    if (!triggerCommon) return null;
    const pool = [
      { id: "item1", quality: "普通" },
      { id: "item3", quality: "良好" },
      { id: "item2", quality: "高级" },
    ];
    const picked = pool[randInt(0, pool.length - 1)];
    const def = ITEM_DEFS[picked.id];
    state.items[picked.id] = Math.max(0, Math.round(num(state.items[picked.id], 0))) + 1;
    lines.push(`获得${picked.quality}食物：${def.name}x1`);
    iconPath = def.iconPath;
    iconAlt = def.name;
  }

  if (name === "travel") {
    if (triggerCommon) {
      const delta = randInt(-5, 5);
      state.intimacy = clamp(state.intimacy + delta, 0, INTIMACY_MAX);
      lines.push(`亲密度${delta >= 0 ? "+" : ""}${delta}`);
      iconPath = "./assets/slime_expressions/smile/frame_01.svg";
      iconAlt = "亲密度事件";
    }
    const isFirstTravel = Math.max(0, Math.round(num(state.eventCounters?.travel, 0))) === 0;
    if (isFirstTravel || Math.random() < WILD_TRAVEL_ADVENTURE_CHANCE) {
      const story = randomGeminiAdventureStory();
      const rec = addAdventurePhotoRecord(story);
      if (rec) {
        adventurePhotoId = rec.id;
        lines.push(`奇遇：${story}`);
        lines.push("获得奇遇照片x1");
        if (!iconPath) {
          iconPath = rec.photoSrc;
          iconAlt = "奇遇照片";
        }
        logs.push(`奇遇触发：${story}（已封存照片）`);
      }
    }
  }

  if (!lines.length) return null;
  lines.forEach((line) => addHistory(`随机事件：${line}`));
  const logText = [...lines.map((line) => `随机事件触发：${line}。`), ...logs].join(" ");
  return {
    iconPath: iconPath || ITEM_DEFS.item4.iconPath,
    iconAlt: iconAlt || "随机事件",
    lines,
    logText,
    adventurePhotoId,
  };
}

function completeWildTask(name, silent = false) {
  if (!Object.prototype.hasOwnProperty.call(WILD_EVENT_DURATION_MS, name)) return;
  const gainLines = [];
  let detailLog = "";

  if (name === "hotspring") {
    const healthGain = randInt(3, 5);
    state.health = clamp(state.health + healthGain);
    state.dirtyActive = false;
    state.dirtyTimerMs = 0;
    state.dirtyHealthTimerMs = 0;
    gainLines.push(`健康+${healthGain}`);
    gainLines.push("肮脏状态已清除");
    detailLog = `健康+${healthGain}，清除肮脏状态。`;
  } else if (name === "farming") {
    const satietyGain = randInt(3, 5);
    state.satiety = clamp(state.satiety + satietyGain);
    state.cleanliness = clamp(state.cleanliness - 3);
    gainLines.push(`饱食度+${satietyGain}`);
    gainLines.push("清洁度-3");
    detailLog = `饱食度+${satietyGain}，清洁度-3。`;
  } else if (name === "camping") {
    state.items.item2 = Math.max(0, Math.round(num(state.items.item2, 0))) + 1;
    state.satiety = clamp(state.satiety + 10);
    gainLines.push("主食+1");
    gainLines.push("饱食度+10");
    detailLog = "主食+1，饱食度+10。";
  } else if (name === "travel") {
    state.sizeMm = Math.max(MIN_SIZE_MM, num(state.sizeMm, MIN_SIZE_MM) + 10);
    state.satiety = clamp(state.satiety - 10);
    gainLines.push("大小+10mm");
    gainLines.push("饱食度-10");
    detailLog = "大小+10mm，饱食度-10。";
  }

  const randomEvent = rollWildRandomEvent(name);
  state.wildTask = mkWildTask();
  state.wildActionDone = false;
  record("wild", name, `野外事件：${EVENT_META[name]}（完成）`);
  addLog(`完成野外事件：${EVENT_META[name]}。${detailLog}`, true);
  addHistory(`野外事件完成：${EVENT_META[name]}`);
  if (randomEvent?.logText) addLog(randomEvent.logText, true);
  playWildFx(name);

  if (!silent) {
    showWildGainPopup(gainLines);
    if (randomEvent) {
      const rawLines = Array.isArray(randomEvent.lines) ? randomEvent.lines : [];
      const popupLines = randomEvent.adventurePhotoId
        ? rawLines.filter((line) => {
          const text = typeof line === "string" ? line.trim() : "";
          if (!text) return false;
          if (text.startsWith("奇遇：")) return false;
          if (text.includes("奇遇照片")) return false;
          return true;
        })
        : rawLines;
      if (popupLines.length) showWildRandomPopup({ ...randomEvent, lines: popupLines });
      else hideWildRandomPopup();
      if (randomEvent.adventurePhotoId) openAdventureModal(randomEvent.adventurePhotoId);
    }
  }
}

function resolveWildTaskIfDue(now = Date.now(), silent = false) {
  const name = activeWildTaskName(now);
  if (name) return false;
  const taskName = typeof state.wildTask?.name === "string" ? state.wildTask.name : "";
  if (!Object.prototype.hasOwnProperty.call(WILD_EVENT_DURATION_MS, taskName)) return false;
  if (num(state.wildTask?.endsAt, 0) <= 0) return false;
  completeWildTask(taskName, silent);
  return true;
}

function wildEvent(name, triggerEvent = null) {
  sound.ensure();
  const durationMs = WILD_EVENT_DURATION_MS[name];
  if (!durationMs) return;
  if (!isWildEventUnlocked(name)) {
    sound.play("deny");
    const needMm = wildEventUnlockMm(name);
    const line = `未解锁：史莱姆达到${needMm}mm后可进行${EVENT_META[name]}。`;
    say(line, 2400);
    addHistoryTriggeredSpeech(line);
    render();
    saveState();
    return;
  }
  const activeName = activeWildTaskName();
  if (activeName) {
    sound.play("deny");
    const remain = wildTaskRemainMs();
    const line = `正在进行${EVENT_META[activeName]}，剩余${formatRemain(remain)}。`;
    say(line, 2400);
    addHistoryTriggeredSpeech(line);
    render();
    saveState();
    return;
  }
  if (state.stamina <= 0) {
    sound.play("deny");
    const line = eventSpeechText("wild_stamina_low", "有点累了，在家恢复下体力吧");
    say(line, eventSpeechHoldMs("wild_stamina_low", 2800));
    addHistoryTriggeredSpeech(line);
    const hintAnchor = wildScenePointFromEvent(triggerEvent);
    showWildStaminaHint(name, line, hintAnchor);
    addLog(`体力不足，无法进行${EVENT_META[name]}。`, true);
    render();
    saveState();
    return;
  }

  state.stamina = clamp(state.stamina - 1, 0, STAMINA_MAX);
  state.wildActionDone = false;
  const now = Date.now();
  state.wildTask = {
    name,
    startedAt: now,
    endsAt: now + durationMs,
  };

  addLog(`开始野外事件：${EVENT_META[name]}。体力-1，倒计时${formatRemain(durationMs)}。`, true);
  addHistory(`野外事件开始：${EVENT_META[name]}`);
  playWildFx(name);
  render();
  saveState();
}

function onWaterDrinkClick() {
  if (!runtime.waterGame.active) return;
  pauseAutoMotion();
  sound.ensure();
  const sizeGain = WATER_GAME_DRINK_GAIN_MM;
  state.sizeMm = Math.max(MIN_SIZE_MM, num(state.sizeMm, MIN_SIZE_MM) + WATER_GAME_DRINK_GAIN_MM);
  state.maxSizeReachedMm = Math.max(num(state.maxSizeReachedMm, state.sizeMm), state.sizeMm);
  state.waterGame.unlocked = true;
  state.waterGame.successCount = Math.max(0, Math.round(num(state.waterGame.successCount, 0))) + 1;
  state.waterGame.nextTriggerAt = Date.now() + waterCooldownMs(state.waterGame.cooldownMinutes);
  dismissWaterGame();
  playWaterSplashFx();
  playHomeFx("bath");
  const line = eventSpeechText("water_game_drink", "蒸蚌(๑•̀ㅂ•́)و✧");
  const holdMs = eventSpeechHoldMs("water_game_drink", 2400);
  runtime.priorityExpression.name = "smile";
  runtime.priorityExpression.until = Date.now() + holdMs;
  addLog(`喝水小游戏：选择“喝”，大小+${WATER_GAME_DRINK_GAIN_MM}mm。`, true);
  addHistory(`喝水小游戏：喝水成功，大小+${WATER_GAME_DRINK_GAIN_MM}mm`);
  showSizeGainFx(sizeGain);
  say(line, holdMs);
  addHistoryTriggeredSpeech(line);
  render();
  saveState();
}

function onWaterDenyClick(event) {
  if (!runtime.waterGame.active) return;
  const forcedDrink = Math.max(0, Math.round(num(state.waterGame.successCount, 0))) < WATER_GAME_FORCE_DRINK_COUNT;
  if (forcedDrink) {
    event.preventDefault();
    event.stopPropagation();
    sound.ensure();
    sound.play("deny");
    moveWaterDenyButtonRandom();
    return;
  }
  state.waterGame.nextTriggerAt = Date.now() + waterCooldownMs(state.waterGame.cooldownMinutes);
  dismissWaterGame();
  addLog("喝水小游戏：选择“不喝”，本次已跳过。", true);
  addHistory("喝水小游戏：选择不喝");
  render();
  const line = eventSpeechText("water_game_decline", "不喝水会干巴的");
  say(line, 2600);
  addHistoryTriggeredSpeech(line);
  saveState();
}

function onWaterSettingTriggerClick(event) {
  if (event) {
    event.preventDefault();
    event.stopPropagation();
  }
  if (!runtime.waterGame.active) return;
  sound.ensure();
  sound.play("mode");
  if (openWaterSettingModal()) render();
}

function onWaterSettingOptionClick(event) {
  event.preventDefault();
  const btn = event.currentTarget;
  const minutes = sanitizeWaterCooldownMinutes(btn?.dataset?.minutes);
  runtime.waterGame.settingsDraftMinutes = minutes;
  syncWaterSettingOptionsUi();
}

function onWaterSettingConfirmClick(event) {
  if (event) {
    event.preventDefault();
    event.stopPropagation();
  }
  const nextMinutes = sanitizeWaterCooldownMinutes(runtime.waterGame.settingsDraftMinutes);
  closeWaterSettingModal(true);
  sound.ensure();
  sound.play("toggleOn");
  addLog(`喝水提醒设置：再次触发时间已设为${nextMinutes}分钟。`, true);
  render();
  saveState();
}

function onWaterSettingCancelClick(event) {
  if (event) {
    event.preventDefault();
    event.stopPropagation();
  }
  closeWaterSettingModal(false);
  sound.ensure();
  sound.play("deny");
  render();
}

function onWaterSettingModalPointerDown(event) {
  if (!runtime.waterGame.settingsOpen) return;
  if (!(event.target instanceof Node)) return;
  const hitPanel = refs.waterSettingModal && refs.waterSettingModal.querySelector(".water-setting-panel");
  if (hitPanel && !hitPanel.contains(event.target)) {
    event.preventDefault();
    event.stopPropagation();
  }
}

function onCodexAdventureListClick(event) {
  if (!refs.codexAdventureList) return;
  const target = event.target instanceof Element ? event.target : null;
  if (!target) return;
  const card = target.closest(".adventure-photo-item");
  if (!card) return;
  const photoId = typeof card.dataset.adventureId === "string" ? card.dataset.adventureId : "";
  if (!photoId) return;
  event.preventDefault();
  event.stopPropagation();
  if (openAdventureModal(photoId)) {
    sound.ensure();
    sound.play("mode");
    render();
  }
}

function onCodexAdventureListPointerDown(event) {
  if (!refs.codexAdventureList) return;
  const target = event.target instanceof Element ? event.target : null;
  if (!target) return;
  const card = target.closest(".adventure-photo-item");
  if (!card) return;
  event.stopPropagation();
}

function onAdventureModalPointerDown(event) {
  if (!runtime.adventureModal.open || !refs.adventureModalPanel) return;
  const target = event.target instanceof Node ? event.target : null;
  if (!target) return;
  if (!refs.adventureModalPanel.contains(target)) {
    event.preventDefault();
    event.stopPropagation();
    closeAdventureModal();
    render();
  }
}

function toggleScene() {
  if (runtime.bathing.active) {
    sound.ensure();
    sound.play("deny");
    sayEvent("scene_switch_blocked_by_bath", "洗澡进行中，先完成再切换场景。", 2400);
    return;
  }
  pauseAutoMotion();
  if (runtime.waterGame.active && state.currentScene === "home") {
    dismissWaterGame();
  }
  const fromCodex = state.viewMode !== "observe";
  sound.ensure();
  sound.play("scene");
  state.currentScene = state.currentScene === "home" ? "wild" : "home";
  if (fromCodex) state.viewMode = "observe";
  if (state.currentScene === "wild") {
    state.wildActionDone = false;
    sayEvent("switch_to_wild", "走吧，我们去野外看看。", 2600);
    addLog("你带史莱姆外出了。", true);
  } else {
    settleSlimeToHomeBottom();
    sayEvent("switch_to_home", "回家啦，慢慢休息。体力会每2分钟恢复1点。", 2800);
    addLog("你和史莱姆回到了室内。", true);
  }
  stopInertia();
  render();
  saveState();
}

function cycleExpression() {
  if (runtime.bathing.active) return;
  if (isCriticalSick()) {
    sound.ensure();
    sound.play("deny");
    sayEvent("expression_blocked_by_sick", "呜呜呜~不想打针", 2200);
    render();
    saveState();
    return;
  }
  pauseAutoMotion();
  sound.ensure();
  sound.play("expression");
  state.mood = clamp(state.mood + 2);

  const now = Date.now();
  if (!state.clickWindowStartedAt || now - state.clickWindowStartedAt >= CLICK_WINDOW_MS) {
    state.clickWindowStartedAt = now;
    state.clickWindowGain = 0;
  }

  let gained = false;
  if (state.clickWindowGain < CLICK_WINDOW_GAIN_MAX) {
    state.clickWindowGain += 1;
    state.intimacy = clamp(state.intimacy + 1, 0, INTIMACY_MAX);
    gained = true;
  }

  const pool = gained ? CLICK_GAIN_EXPRESSIONS : CLICK_CAP_EXPRESSIONS;
  let next = pool[randInt(0, pool.length - 1)];
  if (pool.length > 1 && next === state.expressionOverride) {
    next = pool[(pool.indexOf(next) + 1) % pool.length];
  }
  state.expressionOverride = next;
  state.expressionUntil = Date.now() + EXPRESSION_HOLD_MS;

  if (gained) {
    sayEvent("expression_click_gain", "戳我就会变表情喔。亲密度+1。", 2200);
  } else {
    sayEvent("expression_click_cap", "表情切换成功，本2小时亲密度加成已达上限。", 2200);
  }
  addLog(gained ? "你点击了史莱姆，亲密度+1（2小时上限规则）。" : "你点击了史莱姆，但本2小时亲密度上限已满。", true);
  record("expression", "");
  for (let i = 0; i < 3; i += 1) spawnFx(refs.homeFxLayer, "fx-sparkle", state.slime.x + rand(-44, 44), state.slime.y + rand(-20, 26), {
    "--dx": `${rand(-40, 40).toFixed(1)}px`, "--dy": `${rand(-90, -36).toFixed(1)}px`, "--dur": `${rand(0.7, 0.95).toFixed(2)}s`,
  }, 980);
  render();
  saveState();
}

function scenePoint(event) {
  const r = refs.homeScene.getBoundingClientRect();
  return { x: ((event.clientX - r.left) * refs.homeScene.clientWidth) / r.width, y: ((event.clientY - r.top) * refs.homeScene.clientHeight) / r.height };
}

function stopInertia() {
  runtime.inertia.active = false;
  if (runtime.inertia.rafId) cancelAnimationFrame(runtime.inertia.rafId);
  runtime.inertia.rafId = 0;
  runtime.inertia.vx = 0;
  runtime.inertia.vy = 0;
  runtime.inertia.startedAt = 0;
  runtime.inertia.bounceCount = 0;
  runtime.inertia.groundedFrames = 0;
  runtime.inertia.grounded = false;
  runtime.inertia.lowEnergyFrames = 0;
  refs.slime.style.setProperty("--slime-tilt", "0deg");
  refs.slime.style.setProperty("--slime-stretch-x", "1");
  refs.slime.style.setProperty("--slime-stretch-y", "1");
  syncMotionOverlayVisibility();
}

function startInertia(vx, vy) {
  stopInertia();
  runtime.inertia.active = true;
  runtime.inertia.vx = vx * 1000;
  runtime.inertia.vy = vy * 1000;
  runtime.inertia.lastTs = performance.now();
  runtime.inertia.startedAt = runtime.inertia.lastTs;
  runtime.inertia.bounceCount = 0;
  runtime.inertia.groundedFrames = 0;
  runtime.inertia.lowEnergyFrames = 0;
  syncMotionOverlayVisibility();
  const b0 = slimeBounds();
  runtime.inertia.grounded = Math.abs(state.slime.y - b0.maxY) <= PHYSICS.floorSnapEps && Math.abs(runtime.inertia.vy) <= PHYSICS.stopVy;
  const step = (ts) => {
    if (!runtime.inertia.active) return;
    const dtSec = Math.min(0.034, Math.max(0.008, (ts - runtime.inertia.lastTs) / 1000));
    runtime.inertia.lastTs = ts;
    const wasGrounded = runtime.inertia.grounded;
    const b = slimeBounds();

    state.slime.x += runtime.inertia.vx * dtSec;
    if (!wasGrounded) {
      state.slime.y += runtime.inertia.vy * dtSec;
      runtime.inertia.vy += PHYSICS.gravity * dtSec;
      runtime.inertia.vx *= Math.exp(-PHYSICS.dragX * dtSec);
      runtime.inertia.vy *= Math.exp(-PHYSICS.dragY * dtSec);
    } else {
      // Grounded objects should slide and stop, not keep re-applying gravity jitter.
      state.slime.y = b.maxY;
      runtime.inertia.vy = 0;
      runtime.inertia.vx *= Math.exp(-PHYSICS.groundDrag * dtSec);
    }

    if (state.slime.x <= b.minX + PHYSICS.wallSnapEps) {
      state.slime.x = b.minX;
      if (Math.abs(runtime.inertia.vx) <= PHYSICS.stopVx) runtime.inertia.vx = 0;
      else runtime.inertia.vx = Math.abs(runtime.inertia.vx) * PHYSICS.bounceX;
    }
    if (state.slime.x >= b.maxX - PHYSICS.wallSnapEps) {
      state.slime.x = b.maxX;
      if (Math.abs(runtime.inertia.vx) <= PHYSICS.stopVx) runtime.inertia.vx = 0;
      else runtime.inertia.vx = -Math.abs(runtime.inertia.vx) * PHYSICS.bounceX;
    }
    if (!wasGrounded && state.slime.y <= b.minY) {
      state.slime.y = b.minY;
      runtime.inertia.vy = Math.abs(runtime.inertia.vy) * PHYSICS.bounceTop;
    }

    if (state.slime.y >= b.maxY - PHYSICS.floorSnapEps) {
      state.slime.y = b.maxY;
      const impactVy = Math.abs(runtime.inertia.vy);
      if (!wasGrounded && impactVy > PHYSICS.minBounceVy && runtime.inertia.bounceCount < 4) {
        // Bounce gets softer every landing; after a few landings it should settle quickly.
        runtime.inertia.bounceCount += 1;
        const impactNorm = clamp((impactVy - PHYSICS.stopVy) / (PHYSICS.minBounceVy * 1.5), 0, 1);
        const decayByCount = Math.pow(0.68, Math.max(0, runtime.inertia.bounceCount - 1));
        const bounceRatio = PHYSICS.bounceBottom * (0.3 + impactNorm * 0.62) * decayByCount;
        const reboundVy = impactVy * bounceRatio;
        const shouldSettle =
          runtime.inertia.bounceCount >= 3
          && reboundVy <= PHYSICS.minBounceVy * 0.96;
        if (shouldSettle) {
          runtime.inertia.vy = 0;
          runtime.inertia.grounded = true;
          runtime.inertia.groundedFrames = wasGrounded ? runtime.inertia.groundedFrames + 1 : 1;
        } else {
          runtime.inertia.grounded = false;
          runtime.inertia.vy = -reboundVy;
          runtime.inertia.vx *= PHYSICS.floorFriction;
          runtime.inertia.groundedFrames = 0;
        }
      } else {
        runtime.inertia.bounceCount = Math.max(runtime.inertia.bounceCount, 4);
        runtime.inertia.vy = 0;
        runtime.inertia.grounded = true;
        runtime.inertia.groundedFrames = wasGrounded ? runtime.inertia.groundedFrames + 1 : 1;
      }
    } else {
      runtime.inertia.grounded = false;
      runtime.inertia.groundedFrames = 0;
    }

    const nearFloor = state.slime.y >= b.maxY - PHYSICS.floorSnapEps;
    const lowEnergy =
      Math.abs(runtime.inertia.vx) <= PHYSICS.stopVx * 1.5
      && Math.abs(runtime.inertia.vy) <= Math.max(PHYSICS.stopVy * 2.5, PHYSICS.minBounceVy * 0.85);
    runtime.inertia.lowEnergyFrames = nearFloor && lowEnergy
      ? runtime.inertia.lowEnergyFrames + 1
      : 0;

    let stretchX = 1;
    let stretchY = 1;
    if (nearFloor) {
      const t = clamp(Math.abs(runtime.inertia.vy) / 500, 0, 0.24);
      stretchX = 1 + t;
      stretchY = 1 - t * 0.9;
    } else {
      const t = clamp(Math.abs(runtime.inertia.vy) / 860, 0, 0.14);
      stretchX = 1 - t * 0.52;
      stretchY = 1 + t;
    }
    refs.slime.style.setProperty("--slime-stretch-x", stretchX.toFixed(3));
    refs.slime.style.setProperty("--slime-stretch-y", stretchY.toFixed(3));

    refs.slime.style.setProperty("--slime-tilt", `${clamp(runtime.inertia.vx / 120, -14, 14).toFixed(2)}deg`);
    renderSlime();
    if (collectPickupDropsByCollision()) {
      sound.play("chat");
      saveState();
    }

    if (runtime.inertia.grounded && runtime.inertia.groundedFrames >= PHYSICS.restFramesToSleep && Math.abs(runtime.inertia.vx) < PHYSICS.stopVx) {
      stopInertia();
      pauseAutoMotion(2200);
      saveState();
      return;
    }

    if (
      runtime.inertia.lowEnergyFrames >= 2
      || (
        nearFloor
        && runtime.inertia.startedAt > 0
        && (ts - runtime.inertia.startedAt) > 4200
      )
    ) {
      state.slime.y = b.maxY;
      stopInertia();
      pauseAutoMotion(2200);
      saveState();
      return;
    }

    runtime.inertia.rafId = requestAnimationFrame(step);
  };
  runtime.inertia.rafId = requestAnimationFrame(step);
}

function onPointerDown(event) {
  if (state.currentScene !== "home" || state.viewMode !== "observe") return;
  if (runtime.waterGame.active) return;
  if (isHomeAwayActive()) return;
  if (runtime.inertia.active) return;
  if (runtime.bathing.active) {
    const p = scenePoint(event);
    const captureEl = (event.currentTarget && typeof event.currentTarget.setPointerCapture === "function")
      ? event.currentTarget
      : refs.slime;
    runtime.bathing.pointerId = event.pointerId;
    runtime.bathing.captureEl = captureEl;
    runtime.bathing.draggingSoap = true;
    runtime.bathing.lastTs = performance.now();
    runtime.bathing.lastX = p.x;
    runtime.bathing.lastY = p.y;
    runtime.bathing.inZone = isPointInBathZone(p);
    runtime.bathing.speedPxPerMs = 0;
    runtime.bathing.lastMoveAt = 0;
    positionBathSoapByPoint(p);
    event.preventDefault();
    try { captureEl.setPointerCapture(event.pointerId); } catch {}
    return;
  }
  pauseAutoMotion();
  sound.ensure();
  stopInertia();
  const p = scenePoint(event);
  state.slime = clampSlimePos(state.slime.x, state.slime.y);
  Object.assign(runtime.drag, {
    active: true, pointerId: event.pointerId, moved: false, startX: p.x, startY: p.y,
    offsetX: p.x - state.slime.x, offsetY: p.y - state.slime.y, lastX: p.x, lastY: p.y,
    lastTime: performance.now(), vx: 0, vy: 0,
  });
  refs.slime.classList.add("dragging");
  try { refs.slime.setPointerCapture(event.pointerId); } catch {}
  syncMotionOverlayVisibility();
}

function onPointerMove(event) {
  const isWindowProxy = event.currentTarget === window;
  if (
    isWindowProxy
    && (
      (event.target instanceof Node && refs.slime && refs.slime.contains(event.target))
      || event.target === refs.bathSoapIcon
    )
  ) {
    return;
  }

  if (runtime.bathing.active) {
    if (runtime.bathing.pointerId !== event.pointerId) return;
    const p = scenePoint(event);
    const now = performance.now();
    const dt = Math.max(0, now - runtime.bathing.lastTs);
    const moveDist = Math.hypot(p.x - runtime.bathing.lastX, p.y - runtime.bathing.lastY);
    const moved = moveDist >= BATHING_MOVE_MIN_DIST;
    const inZoneNow = isPointInBathZone(p);
    const inZonePrev = isPointInBathZone({ x: runtime.bathing.lastX, y: runtime.bathing.lastY });
    runtime.bathing.inZone = inZoneNow || inZonePrev;
    if (moved) {
      runtime.bathing.speedPxPerMs = moveDist / Math.max(1, dt);
      runtime.bathing.lastMoveAt = now;
    } else {
      runtime.bathing.speedPxPerMs *= 0.86;
    }
    if (runtime.bathing.draggingSoap) {
      positionBathSoapByPoint(p);
      event.preventDefault();
    }
    runtime.bathing.lastTs = now;
    runtime.bathing.lastX = p.x;
    runtime.bathing.lastY = p.y;
    return;
  }
  if (!runtime.drag.active || runtime.drag.pointerId !== event.pointerId) return;
  const p = scenePoint(event);
  const now = performance.now();
  const dt = Math.max(8, now - runtime.drag.lastTime);
  state.slime = clampSlimePos(p.x - runtime.drag.offsetX, p.y - runtime.drag.offsetY);
  runtime.drag.vx = (p.x - runtime.drag.lastX) / dt;
  runtime.drag.vy = (p.y - runtime.drag.lastY) / dt;
  runtime.drag.lastX = p.x;
  runtime.drag.lastY = p.y;
  runtime.drag.lastTime = now;
  if (!runtime.drag.moved) runtime.drag.moved = Math.hypot(p.x - runtime.drag.startX, p.y - runtime.drag.startY) > 6;
  refs.slime.style.setProperty("--slime-tilt", `${clamp(runtime.drag.vx * 18, -16, 16).toFixed(2)}deg`);
  renderSlime();
}

function onPointerUp(event) {
  if (runtime.bathing.active) {
    if (runtime.bathing.pointerId !== event.pointerId) return;
    const captureEl = runtime.bathing.captureEl || refs.slime;
    runtime.bathing.pointerId = -1;
    runtime.bathing.captureEl = null;
    runtime.bathing.draggingSoap = false;
    runtime.bathing.inZone = false;
    runtime.bathing.speedPxPerMs = 0;
    runtime.bathing.lastMoveAt = 0;
    runtime.bathing.lastTs = 0;
    try { captureEl.releasePointerCapture(event.pointerId); } catch {}
    syncBathingHud();
    return;
  }
  if (!runtime.drag.active || runtime.drag.pointerId !== event.pointerId) return;
  const wasMoved = runtime.drag.moved;
  const upPoint = scenePoint(event);
  if (!wasMoved) {
    const upDist = Math.hypot(upPoint.x - runtime.drag.startX, upPoint.y - runtime.drag.startY);
    if (upDist > 6) {
      runtime.drag.moved = true;
      runtime.drag.lastX = upPoint.x;
      runtime.drag.lastY = upPoint.y;
    }
  }
  runtime.drag.active = false;
  refs.slime.classList.remove("dragging");
  try { refs.slime.releasePointerCapture(event.pointerId); } catch {}
  const didDragMove = runtime.drag.moved;
  if (didDragMove) {
    const minLaunchSpeed = PHYSICS.launchSpeedMin / 1000;
    let vx = num(runtime.drag.vx, 0);
    let vy = num(runtime.drag.vy, 0);
    const releaseSpeed = Math.hypot(vx, vy);
    if (releaseSpeed < minLaunchSpeed) {
      const dx = runtime.drag.lastX - runtime.drag.startX;
      const dy = runtime.drag.lastY - runtime.drag.startY;
      const dist = Math.hypot(dx, dy);
      if (dist > 1) {
        const boosted = Math.max(minLaunchSpeed, Math.min(0.42, dist / 220));
        vx = (dx / dist) * boosted;
        vy = (dy / dist) * boosted;
      }
    }
    if (Math.abs(vy) < 0.06) vy = -0.06;
    startInertia(vx, vy);
    sound.play("drag");
    record("drag", "", "手势互动：拖动史莱姆并触发弹跳");
    addLog("你拖动了史莱姆，松手后弹跳了一下。", true);
    saveState();
  }
  runtime.drag.moved = false;
  if (didDragMove) runtime.drag.lastDragEndAt = performance.now();
  if (!runtime.inertia.active) syncMotionOverlayVisibility();
}

function onSlimeClick() {
  if (isHomeAwayActive()) return;
  if (performance.now() - num(runtime.drag.lastDragEndAt, 0) < 280) return;
  if (performance.now() - num(runtime.bathing.completedAt, 0) < 260) return;
  if (runtime.inertia.active) return;
  if (runtime.drag.moved) { runtime.drag.moved = false; return; }
  cycleExpression();
}

function onCodexPanelPointerDown(event) {
  if (!refs.codexPanel) return;
  if (state.viewMode !== "codex") return;
  if (event.pointerType !== "mouse" || event.button !== 0) return;
  if (refs.codexPanel.scrollHeight <= refs.codexPanel.clientHeight + 1) return;
  runtime.ui.codexScrollDrag.active = true;
  runtime.ui.codexScrollDrag.pointerId = event.pointerId;
  runtime.ui.codexScrollDrag.startY = event.clientY;
  runtime.ui.codexScrollDrag.startScrollTop = refs.codexPanel.scrollTop;
  refs.codexPanel.classList.add("codex-dragging");
  try { refs.codexPanel.setPointerCapture(event.pointerId); } catch {}
  event.preventDefault();
}

function onCodexPanelPointerMove(event) {
  if (!refs.codexPanel) return;
  const drag = runtime.ui.codexScrollDrag;
  if (!drag.active || drag.pointerId !== event.pointerId) return;
  const dy = event.clientY - drag.startY;
  refs.codexPanel.scrollTop = drag.startScrollTop - dy;
  event.preventDefault();
}

function onCodexPanelPointerUp(event) {
  if (!refs.codexPanel) return;
  const drag = runtime.ui.codexScrollDrag;
  if (!drag.active || drag.pointerId !== event.pointerId) return;
  drag.active = false;
  drag.pointerId = -1;
  refs.codexPanel.classList.remove("codex-dragging");
  try { refs.codexPanel.releasePointerCapture(event.pointerId); } catch {}
}

function tick() {
  const now = Date.now();
  const sec = Math.max(0, (now - state.lastTickAt) / 1000);
  applyTimeProgress(sec, true);
  state.lastTickAt = now;
  render();
  saveState();
}

function applyOfflineProgress() {
  const now = Date.now();
  const sec = Math.max(0, (now - state.lastTickAt) / 1000);
  if (sec > 1) {
    const eff = Math.min(sec, 15 * 24 * 3600);
    applyTimeProgress(eff, true);
    const mins = Math.floor(eff / 60);
    if (mins >= 1) {
      addLog(`你离开了${mins}分钟，状态已自动结算。`, true);
      addHistory(`离线结算：累计${mins}分钟`);
    }
  }
  state.lastTickAt = now;
}

function bindEvents() {
  refs.sceneToggleBtn.addEventListener("click", toggleScene);
  refs.soundBtn.addEventListener("click", toggleSound);
  if (refs.aiThemeBtn) refs.aiThemeBtn.addEventListener("click", onAiThemeBtnClick);
  if (refs.aiThemeGenerateBtn) refs.aiThemeGenerateBtn.addEventListener("click", onAiThemeGenerateClick);
  if (refs.aiThemeApplyBtn) refs.aiThemeApplyBtn.addEventListener("click", onAiThemeApplyClick);
  if (refs.aiThemeResetBtn) refs.aiThemeResetBtn.addEventListener("click", onAiThemeResetClick);
  if (refs.aiThemeCloseBtn) refs.aiThemeCloseBtn.addEventListener("click", onAiThemeCloseClick);
  if (refs.gmItem1Btn) refs.gmItem1Btn.addEventListener("click", onGmItem1Click);
  if (refs.gmItem2Btn) refs.gmItem2Btn.addEventListener("click", onGmItem2Click);
  if (refs.gmItem3Btn) refs.gmItem3Btn.addEventListener("click", onGmItem3Click);
  if (refs.gmHealthMinusBtn) refs.gmHealthMinusBtn.addEventListener("click", onGmHealthMinusClick);
  if (refs.gmSatietyMinusBtn) refs.gmSatietyMinusBtn.addEventListener("click", onGmSatietyMinusClick);
  if (refs.gmIntimacyMinusBtn) refs.gmIntimacyMinusBtn.addEventListener("click", onGmIntimacyMinusClick);
  if (refs.gmCleanseItemBtn) refs.gmCleanseItemBtn.addEventListener("click", onGmCleanseItemClick);
  if (refs.gmOpenWaterGameBtn) refs.gmOpenWaterGameBtn.addEventListener("click", onGmOpenWaterGameClick);
  if (refs.gmResetDay1Btn) refs.gmResetDay1Btn.addEventListener("click", onGmResetDay1Click);
  if (refs.gmSizePlus1000Btn) refs.gmSizePlus1000Btn.addEventListener("click", onGmSizePlus1000Click);
  refs.modeButtons.forEach((b) => b.addEventListener("click", () => setMode(b.dataset.mode)));
  refs.actionButtons.forEach((b) => b.addEventListener("click", () => homeAction(b.dataset.action)));
  refs.eventButtons.forEach((b) => b.addEventListener("click", (event) => wildEvent(b.dataset.event, event)));
  if (refs.sickHealBtn) refs.sickHealBtn.addEventListener("click", onSickHealClick);
  if (refs.dirtyBathBtn) refs.dirtyBathBtn.addEventListener("click", onDirtyBathClick);
  if (refs.waterDrinkBtn) refs.waterDrinkBtn.addEventListener("click", onWaterDrinkClick);
  if (refs.waterDenyBtn) refs.waterDenyBtn.addEventListener("click", onWaterDenyClick);
  if (refs.waterSettingBtn) refs.waterSettingBtn.addEventListener("click", onWaterSettingTriggerClick);
  if (refs.waterSettingOpt10) refs.waterSettingOpt10.addEventListener("click", onWaterSettingOptionClick);
  if (refs.waterSettingOpt30) refs.waterSettingOpt30.addEventListener("click", onWaterSettingOptionClick);
  if (refs.waterSettingOpt60) refs.waterSettingOpt60.addEventListener("click", onWaterSettingOptionClick);
  if (refs.waterSettingConfirmBtn) refs.waterSettingConfirmBtn.addEventListener("click", onWaterSettingConfirmClick);
  if (refs.waterSettingCancelBtn) refs.waterSettingCancelBtn.addEventListener("click", onWaterSettingCancelClick);
  if (refs.waterSettingModal) refs.waterSettingModal.addEventListener("pointerdown", onWaterSettingModalPointerDown);
  if (refs.codexAdventureList) refs.codexAdventureList.addEventListener("pointerdown", onCodexAdventureListPointerDown);
  if (refs.codexAdventureList) refs.codexAdventureList.addEventListener("click", onCodexAdventureListClick);
  if (refs.adventureModal) refs.adventureModal.addEventListener("pointerdown", onAdventureModalPointerDown);
  if (refs.feedPlateBtn) refs.feedPlateBtn.addEventListener("click", onFeedPlateClick);
  if (refs.foodListPanel) refs.foodListPanel.addEventListener("click", onFoodListClick);
  if (refs.codexPanel) {
    refs.codexPanel.addEventListener("pointerdown", onCodexPanelPointerDown);
    refs.codexPanel.addEventListener("pointermove", onCodexPanelPointerMove);
    refs.codexPanel.addEventListener("pointerup", onCodexPanelPointerUp);
    refs.codexPanel.addEventListener("pointercancel", onCodexPanelPointerUp);
  }
  refs.slime.addEventListener("pointerdown", onPointerDown);
  refs.slime.addEventListener("pointermove", onPointerMove);
  refs.slime.addEventListener("pointerup", onPointerUp);
  refs.slime.addEventListener("pointercancel", onPointerUp);
  if (refs.bathSoapIcon) {
    refs.bathSoapIcon.addEventListener("pointerdown", onPointerDown);
    refs.bathSoapIcon.addEventListener("pointermove", onPointerMove);
    refs.bathSoapIcon.addEventListener("pointerup", onPointerUp);
    refs.bathSoapIcon.addEventListener("pointercancel", onPointerUp);
  }
  window.addEventListener("pointermove", onPointerMove);
  window.addEventListener("pointerup", onPointerUp);
  window.addEventListener("pointercancel", onPointerUp);
  refs.slime.addEventListener("click", onSlimeClick);
  const onResize = () => { fitScreen(); renderSlime(); syncWildRunner(); syncWildPopupLayout(); };
  window.addEventListener("resize", onResize);
  window.addEventListener("orientationchange", onResize);
  window.addEventListener("keydown", onGlobalKeyDown);
  window.addEventListener("keyup", onGlobalKeyUp);
  window.addEventListener("blur", stopGmFastForwardHold);
  document.addEventListener("pointerdown", onGlobalPointerDown);
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) { stopGmFastForwardHold(); saveState(); return; }
    applyOfflineProgress();
    render();
    saveState();
  });
  window.addEventListener("beforeunload", () => { stopGmFastForwardHold(); saveState(); });
}

function init() {
  fitScreen();
  if (refs.aiThemePrompt && !refs.aiThemePrompt.value) refs.aiThemePrompt.value = UI_THEME_DEFAULT_PROMPT;
  const savedUiTheme = loadSavedUiThemeConfig();
  if (savedUiTheme) {
    applyUiThemeConfig(savedUiTheme, true);
    setAiThemeStatus(`已加载主题：${savedUiTheme.name}`);
  } else {
    setAiThemeStatus("输入描述后，点击“生成预览”。");
  }
  syncAiThemeUi();
  prewarmStatusFolders();
  preloadWildRunnerFrames();
  applyOfflineProgress();
  normalizeStats();
  state.slime = clampSlimePos(state.slime.x, state.slime.y);
  if (state.viewMode === "observe" && state.currentScene === "home") settleSlimeToHomeBottom();
  bindEvents();
  startAutoMotion();
  render();
  if (maybeShowFirstLoginAdventureModal()) {
    render();
  }
  if (!(state.viewMode === "observe" && state.currentScene === "home")) revealSlimeIfHidden();
  saveState();
  setInterval(tick, 1000);
}

init();


