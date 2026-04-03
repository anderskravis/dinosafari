const PERIODS = [
  {
    id: "triassic",
    name: "Triassic",
    era: "252-201 MYA",
    label: "Early Triassic",
    biomes: [
      ["volcanic", "volcanic", "badlands", "woodland", "woodland"],
      ["volcanic", "badlands", "badlands", "woodland", "coast"],
      ["badlands", "badlands", "fern", "fern", "coast"],
      ["badlands", "fern", "fern", "marsh", "coast"],
      ["woodland", "woodland", "fern", "marsh", "marsh"],
    ],
    locations: [
      ["Basalt Rise", "Ash Ridge", "Red Stone Flats", "Conifer Verge", "Shellwater Edge"],
      ["Smoke Hollow", "Dust Shelf", "Cinder Wash", "Ginkgo Run", "Breaker Beach"],
      ["Sun Crack Basin", "Bone Dry Delta", "Fern Fan", "Cycad Pocket", "Saltwind Cove"],
      ["Amber Trail", "Needle Plains", "Horsetail Grove", "Mire Channel", "Tide Mound"],
      ["Night Pine Yard", "Stonewood Cut", "Frond Terrace", "Mudglass Pool", "Reed Sink"],
    ],
  },
  {
    id: "jurassic",
    name: "Jurassic",
    era: "201-145 MYA",
    label: "Late Jurassic",
    biomes: [
      ["fern", "fern", "woodland", "coast", "coast"],
      ["fern", "fern", "woodland", "woodland", "coast"],
      ["marsh", "fern", "fern", "woodland", "fern"],
      ["marsh", "marsh", "fern", "woodland", "fern"],
      ["coast", "marsh", "fern", "fern", "woodland"],
    ],
    locations: [
      ["Fern Basin", "Cycad Meadow", "Tall Cedar Run", "Blue Inlet", "Shingle Shore"],
      ["Horsetail Garden", "Needle Hollow", "Pine Bench", "Shadow Grove", "Mist Lagoon"],
      ["Silt Marsh", "Ginkgo Trail", "Thunder Plain", "Amber Woods", "Stone Fern Pass"],
      ["Wet Reed Cut", "Quiet Bog", "Frond Terrace", "Split Cedar Vale", "Rook Ridge"],
      ["Shell Bay", "Mudglass Fen", "Warm Plain", "Dust Fern Pocket", "Juniper Rise"],
    ],
  },
  {
    id: "cretaceous",
    name: "Cretaceous",
    era: "145-66 MYA",
    label: "Late Cretaceous",
    biomes: [
      ["woodland", "woodland", "fern", "coast", "coast"],
      ["woodland", "fern", "fern", "fern", "coast"],
      ["badlands", "fern", "marsh", "fern", "woodland"],
      ["badlands", "badlands", "marsh", "woodland", "woodland"],
      ["volcanic", "badlands", "fern", "woodland", "coast"],
    ],
    locations: [
      ["Cedar Rise", "Flowering Glen", "Palm Sweep", "Chalkwater Bay", "Breaker Reach"],
      ["Redwood Gate", "Bloom Trail", "Golden Fern Run", "Dragonfly Meadow", "Pearl Cove"],
      ["Dustwall Bench", "Willow Fronds", "Crooked Marsh", "Amber Field", "Shade Timber"],
      ["Iron Flats", "Sunburn Wash", "Reed Delta", "North Cedar Cut", "Branch Lake"],
      ["Glass Fire Rim", "Hornstone Yard", "Petal Prairie", "Tall Timber Bend", "Moon Bay"],
    ],
  },
];

const DINOSAURS = [
  {
    id: "coelophysis",
    name: "Coelophysis",
    period: "triassic",
    diet: "Carnivore",
    size: "Small pack hunter",
    hint: "Tracks show up near open badlands and volcanic shelves.",
    notes: "A quick runner that darts through dry ground in groups.",
    coords: [
      [1, 2],
      [2, 1],
    ],
    palette: {
      body: "#6b56af",
      accent: "#4b327d",
      crest: "#2f1b57",
    },
    shape: "runner",
    renderScale: 0.7,
  },
  {
    id: "plateosaurus",
    name: "Plateosaurus",
    period: "triassic",
    diet: "Herbivore",
    size: "Long-neck browser",
    hint: "Search fern terraces where the ground softens after rain.",
    notes: "A calm grazer that pulls at cycads and young conifers.",
    coords: [
      [2, 3],
      [4, 2],
    ],
    palette: {
      body: "#7f6242",
      accent: "#583c27",
      crest: "#b08b61",
    },
    shape: "sauropod",
    renderScale: 0.86,
  },
  {
    id: "postosuchus",
    name: "Postosuchus",
    period: "triassic",
    diet: "Carnivore",
    size: "Top predator",
    hint: "If the scanner spikes near shore or marsh, stand still and wait.",
    notes: "Not a dinosaur, but a famous Triassic hunter that belongs in the hunt.",
    coords: [
      [4, 3],
      [3, 4],
    ],
    palette: {
      body: "#87523c",
      accent: "#643726",
      crest: "#ac7657",
    },
    shape: "croc-runner",
    renderScale: 0.88,
  },
  {
    id: "stegosaurus",
    name: "Stegosaurus",
    period: "jurassic",
    diet: "Herbivore",
    size: "Plate-backed browser",
    hint: "Low fern country and open plains are promising.",
    notes: "Its tail spikes are no joke, even if it looks slow from a distance.",
    coords: [
      [0, 1],
      [2, 2],
    ],
    palette: {
      body: "#b06d3f",
      accent: "#7b4620",
      crest: "#da9158",
    },
    shape: "stego",
    renderScale: 0.96,
  },
  {
    id: "brachiosaurus",
    name: "Brachiosaurus",
    period: "jurassic",
    diet: "Herbivore",
    size: "Towering giant",
    hint: "Tall woodland and quiet marsh edges suit giant browsers.",
    notes: "The skyline changes when one of these moves through the trees.",
    coords: [
      [3, 1],
      [4, 4],
    ],
    palette: {
      body: "#8a7b58",
      accent: "#5c5038",
      crest: "#b9a376",
    },
    shape: "sauropod",
    renderScale: 1.08,
  },
  {
    id: "allosaurus",
    name: "Allosaurus",
    period: "jurassic",
    diet: "Carnivore",
    size: "Large predator",
    hint: "Watch wide plains where the ferns thin out and the air feels still.",
    notes: "A dramatic sighting. Keep the camera ready when the signal turns strong.",
    coords: [
      [4, 2],
      [2, 4],
    ],
    palette: {
      body: "#944632",
      accent: "#662a1d",
      crest: "#d85c35",
    },
    shape: "tyrant",
    renderScale: 1.0,
  },
  {
    id: "parasaurolophus",
    name: "Parasaurolophus",
    period: "cretaceous",
    diet: "Herbivore",
    size: "Crested herd animal",
    hint: "Look around wet meadows and noisy shoreline grass.",
    notes: "Its head crest likely carried sound over long distances.",
    coords: [
      [1, 3],
      [2, 2],
    ],
    palette: {
      body: "#618f70",
      accent: "#3d644d",
      crest: "#dfbb60",
    },
    shape: "hadrosaur",
    renderScale: 0.9,
  },
  {
    id: "triceratops",
    name: "Triceratops",
    period: "cretaceous",
    diet: "Herbivore",
    size: "Horned giant",
    hint: "Dry flats beside fern corridors are good places to wait.",
    notes: "Heavy, stubborn, and impossible to miss once it enters a clearing.",
    coords: [
      [3, 0],
      [4, 1],
    ],
    palette: {
      body: "#866f4b",
      accent: "#523d25",
      crest: "#bb945a",
    },
    shape: "ceratopsian",
    renderScale: 0.98,
  },
  {
    id: "tyrannosaurus",
    name: "Tyrannosaurus",
    period: "cretaceous",
    diet: "Carnivore",
    size: "Apex predator",
    hint: "Badlands and coastal approaches both attract giant carnivores.",
    notes: "A classic. When the signal peaks, do not waste the shot.",
    coords: [
      [0, 4],
      [4, 0],
    ],
    palette: {
      body: "#7c3529",
      accent: "#4d1c16",
      crest: "#c86041",
    },
    shape: "tyrant",
    renderScale: 1.08,
  },
];

const AUTHORED_DINOSAURS = {
  brachiosaurus: {
    contact: "./assets/authored/brachiosaurus/contact.png",
    guide: "./assets/authored/brachiosaurus/guide.png",
  },
  tyrannosaurus: {
    contact: "./assets/authored/tyrannosaurus/contact.png",
    guide: "./assets/authored/tyrannosaurus/guide.png",
    sprite: {
      src: "./assets/authored/tyrannosaurus/strip.png",
      frames: 8,
      fps: 6,
      frameWidth: 72,
      frameHeight: 96,
      left: 140,
      top: 48,
      width: 100,
      height: 136,
    },
  },
};

const AUTHORED_SCENES = {
  "jurassic:3:1": {
    id: "shadow-grove",
    ambience: "shadow-grove",
    background: "./assets/authored/shadow-grove/background.png",
    foreground: "./assets/authored/shadow-grove/foreground.png",
    resolution: {
      width: 320,
      height: 200,
    },
    dinosaurs: {
      brachiosaurus: {
        sprite: "./assets/authored/brachiosaurus/shadow-grove-strip.png",
        frames: 8,
        fps: 6,
        frameWidth: 72,
        frameHeight: 96,
        left: 124,
        top: 54,
        width: 90,
        height: 126,
      },
    },
  },
};

const STORAGE_KEY = "dino-safari-tribute-state-v1";
const ATTACK_ROAR_SRC = "./sounds/trexroar.mp3";
const SCENE_BUFFER_WIDTH = 480;
const SCENE_BUFFER_HEIGHT = 300;
const SCENE_LOGICAL_WIDTH = 480;
const SCENE_LOGICAL_HEIGHT = 300;
const SCENE_PIXEL_WIDTH = 160;
const SCENE_PIXEL_HEIGHT = 100;

const BIOME_PALETTES = {
  fern: {
    skyTop: "#8fb3e6",
    skyBottom: "#dee6f8",
    haze: "#f6fbff",
    glow: "#fff6d6",
    ridge: "#6c8694",
    ridgeShadow: "#4e6570",
    midDark: "#39542f",
    midLight: "#708767",
    groundTop: "#95ab49",
    groundBottom: "#4f6121",
    grass: "#8cab44",
    grassDark: "#475b1f",
    water: "#85a7b3",
    rock: "#72674d",
    bark: "#6d5e46",
  },
  woodland: {
    skyTop: "#7ea0d4",
    skyBottom: "#d3e0f0",
    haze: "#edf7ff",
    glow: "#fff1c8",
    ridge: "#61778c",
    ridgeShadow: "#465b6b",
    midDark: "#314925",
    midLight: "#5f7957",
    groundTop: "#8ca546",
    groundBottom: "#45531b",
    grass: "#84a13f",
    grassDark: "#3b4d18",
    water: "#7ba1ad",
    rock: "#6b614f",
    bark: "#5e5037",
  },
  coast: {
    skyTop: "#88addf",
    skyBottom: "#e3ecfa",
    haze: "#f7fbff",
    glow: "#fff4d5",
    ridge: "#89a6bf",
    ridgeShadow: "#617b94",
    midDark: "#3c5c4b",
    midLight: "#7fa396",
    groundTop: "#c5b56f",
    groundBottom: "#62552f",
    grass: "#b79d4f",
    grassDark: "#675727",
    water: "#6a99c6",
    rock: "#8f8a73",
    bark: "#67583e",
  },
  marsh: {
    skyTop: "#93a8d0",
    skyBottom: "#dfe7f2",
    haze: "#f4fbf5",
    glow: "#fff8d7",
    ridge: "#667d74",
    ridgeShadow: "#4d6059",
    midDark: "#415132",
    midLight: "#738a60",
    groundTop: "#7f8d56",
    groundBottom: "#3a3d25",
    grass: "#7b8c50",
    grassDark: "#3c4625",
    water: "#6f94a0",
    rock: "#625b48",
    bark: "#584b35",
  },
  badlands: {
    skyTop: "#97a8c9",
    skyBottom: "#e4d7c1",
    haze: "#fff5ea",
    glow: "#ffe6c0",
    ridge: "#9e7254",
    ridgeShadow: "#6f4c36",
    midDark: "#755032",
    midLight: "#bb895f",
    groundTop: "#ad8b4c",
    groundBottom: "#5d4528",
    grass: "#987540",
    grassDark: "#5a4124",
    water: "#84a3ae",
    rock: "#8f6646",
    bark: "#6d5037",
  },
  volcanic: {
    skyTop: "#a56f4c",
    skyBottom: "#d5b58a",
    haze: "#f8e0c5",
    glow: "#ffddae",
    ridge: "#6d514c",
    ridgeShadow: "#453432",
    midDark: "#3e2e2c",
    midLight: "#8b6658",
    groundTop: "#7f5b32",
    groundBottom: "#30211e",
    grass: "#6f5a31",
    grassDark: "#2d221c",
    water: "#737f87",
    rock: "#734e42",
    bark: "#4f3b36",
  },
};

const PERIOD_TINTS = {
  triassic: "#d6aa72",
  jurassic: "#7ca4d5",
  cretaceous: "#e0bc72",
};

const state = {
  periodId: "jurassic",
  x: 0,
  y: 0,
  visibleDinoId: null,
  contactDinoId: null,
  contactVisible: false,
  captured: new Set(),
  log: [],
  encounterToken: 0,
  searchProgress: {},
  encounterCooldowns: {},
  visibleTimeoutId: 0,
  attackEffectTimeoutId: 0,
  attackLock: false,
  sessionStarted: false,
  hasRestorableProgress: false,
  lives: 3,
  maxLives: 3,
  gameOver: false,
  photoCelebrationActive: false,
  dinoExiting: false,
  dinoExitStart: 0,
};

const VIEWPORT_FIT = {
  shellWidth: 1380,
  shellHeight: 860,
};

const elements = {
  gameStage: document.getElementById("game-stage"),
  periodSwitcher: document.getElementById("period-switcher"),
  scenePeriod: document.getElementById("scene-period"),
  sceneLocation: document.getElementById("scene-location"),
  targetDino: document.getElementById("target-dino"),
  targetHint: document.getElementById("target-hint"),
  viewport: document.getElementById("viewport"),
  sceneAssets: document.getElementById("scene-assets"),
  sceneBg: document.getElementById("scene-bg"),
  sceneFg: document.getElementById("scene-fg"),
  sceneSprite: document.getElementById("scene-sprite"),
  sceneSpriteStrip: document.getElementById("scene-sprite-strip"),
  sceneCanvas: document.getElementById("scene-canvas"),
  sceneNameplate: document.getElementById("scene-nameplate"),
  flashOverlay: document.getElementById("flash-overlay"),
  messageBanner: document.getElementById("message-banner"),
  contactName: document.getElementById("contact-name"),
  contactStatus: document.getElementById("contact-status"),
  silhouetteCard: document.getElementById("silhouette-card"),
  contactImage: document.getElementById("contact-image"),
  contactCanvas: document.getElementById("contact-canvas"),
  signalValue: document.getElementById("signal-value"),
  signalFill: document.getElementById("signal-fill"),
  coordinates: document.getElementById("coordinates"),
  radarGrid: document.getElementById("radar-grid"),
  radarHint: document.getElementById("radar-hint"),
  captureCount: document.getElementById("capture-count"),
  captureStrip: document.getElementById("capture-strip"),
  guideDialog: document.getElementById("guide-dialog"),
  journalDialog: document.getElementById("journal-dialog"),
  guideGrid: document.getElementById("guide-grid"),
  logList: document.getElementById("log-list"),
  startOverlay: document.getElementById("start-overlay"),
  startCopy: document.getElementById("start-copy"),
  livesHearts: document.getElementById("lives-hearts"),
  photoCelebration: document.getElementById("photo-celebration"),
  photoCelebrationSnapshot: document.getElementById("photo-celebration-snapshot"),
  photoCelebrationLabel: document.getElementById("photo-celebration-label"),
  photoCelebrationName: document.getElementById("photo-celebration-name"),
  photoCelebrationNote: document.getElementById("photo-celebration-note"),
  victoryOverlay: document.getElementById("victory-overlay"),
  victoryGrid: document.getElementById("victory-grid"),
  gameoverOverlay: document.getElementById("gameover-overlay"),
  gameoverProgress: document.getElementById("gameover-progress"),
};

const buttons = {
  north: document.getElementById("move-north"),
  south: document.getElementById("move-south"),
  east: document.getElementById("move-east"),
  west: document.getElementById("move-west"),
  scan: document.getElementById("scan-btn"),
  photo: document.getElementById("photo-btn"),
  guide: document.getElementById("guide-btn"),
  closeGuide: document.getElementById("close-guide-btn"),
  journal: document.getElementById("journal-btn"),
  closeJournal: document.getElementById("close-journal-btn"),
  clearLog: document.getElementById("clear-log-btn"),
  resetGame: document.getElementById("reset-game-btn"),
  start: document.getElementById("start-btn"),
  playAgain: document.getElementById("play-again-btn"),
  retry: document.getElementById("retry-btn"),
};

const byPeriod = PERIODS.reduce((accumulator, period) => {
  accumulator[period.id] = period;
  return accumulator;
}, {});

const dinoById = DINOSAURS.reduce((accumulator, dino) => {
  accumulator[dino.id] = dino;
  return accumulator;
}, {});

const guidePreviewCache = new Map();
const renderer = createRetroRenderer();
const ambientAudio = createAmbientAudio();
const attackRoar = createAttackRoarPlayer(ATTACK_ROAR_SRC);

init();

function init() {
  loadSavedProgress();
  renderPeriodButtons();
  bindEvents();
  syncViewportFit();
  syncStartOverlay();
  renderLives();
  renderer.start();
  setPeriod(state.periodId, true, true);
  addLog("Field rig online. Render grid calibrated.");
}

function renderPeriodButtons() {
  elements.periodSwitcher.innerHTML = "";

  PERIODS.forEach((period) => {
    const button = document.createElement("button");
    button.className = "period-btn";
    button.type = "button";
    button.dataset.period = period.id;
    button.innerHTML = `
      <span>${period.name}</span>
      <span class="period-era">${period.era}</span>
    `;
    elements.periodSwitcher.append(button);
  });
}

function bindEvents() {
  window.addEventListener("pointerdown", () => {
    if (!state.sessionStarted) {
      return;
    }
    ambientAudio.userGesture();
  }, { passive: true });
  window.addEventListener("resize", syncViewportFit);
  if (window.visualViewport) {
    window.visualViewport.addEventListener("resize", syncViewportFit);
  }

  elements.periodSwitcher.addEventListener("click", (event) => {
    if (isInputBlocked()) return;
    const button = event.target.closest(".period-btn");
    if (!button) {
      return;
    }

    ambientAudio.userGesture();
    setPeriod(button.dataset.period);
  });

  buttons.north.addEventListener("click", () => move(0, -1));
  buttons.south.addEventListener("click", () => move(0, 1));
  buttons.east.addEventListener("click", () => move(1, 0));
  buttons.west.addEventListener("click", () => move(-1, 0));
  elements.radarGrid.addEventListener("click", (event) => {
    const cell = event.target.closest(".radar-cell");
    if (!cell) {
      return;
    }

    ambientAudio.userGesture();
    moveToSector(Number(cell.dataset.x), Number(cell.dataset.y));
  });
  buttons.scan.addEventListener("click", scanArea);
  buttons.photo.addEventListener("click", takePhoto);
  buttons.guide.addEventListener("click", () => {
    ambientAudio.userGesture();
    renderGuide();
    if (!elements.guideDialog.open) {
      elements.guideDialog.showModal();
    }
  });
  buttons.start.addEventListener("click", startGameSession);
  buttons.closeGuide.addEventListener("click", () => elements.guideDialog.close());
  buttons.journal.addEventListener("click", () => {
    if (!elements.journalDialog.open) {
      elements.journalDialog.showModal();
    }
  });
  buttons.closeJournal.addEventListener("click", () => elements.journalDialog.close());
  buttons.resetGame.addEventListener("click", resetGameProgress);
  buttons.playAgain.addEventListener("click", dismissVictoryAndRestart);
  buttons.retry.addEventListener("click", dismissGameOverAndRetry);
  buttons.clearLog.addEventListener("click", () => {
    state.log = [];
    renderLog();
    addLog("Journal wiped. Fresh page ready.");
  });

  window.addEventListener("keydown", (event) => {
    if (!state.sessionStarted) {
      return;
    }

    if ((elements.guideDialog.open || elements.journalDialog.open) && event.key === "Escape") {
      return;
    }

    const directionMap = {
      ArrowUp: [0, -1],
      ArrowDown: [0, 1],
      ArrowLeft: [-1, 0],
      ArrowRight: [1, 0],
    };

    if (directionMap[event.key]) {
      event.preventDefault();
      ambientAudio.userGesture();
      move(...directionMap[event.key]);
      return;
    }

    if (event.key.toLowerCase() === "s") {
      ambientAudio.userGesture();
      scanArea();
    }

    if (event.key.toLowerCase() === "p") {
      ambientAudio.userGesture();
      takePhoto();
    }
  });
}

function syncViewportFit() {
  const viewportWidth = window.visualViewport ? window.visualViewport.width : window.innerWidth;
  const viewportHeight = window.visualViewport ? window.visualViewport.height : window.innerHeight;
  const stagePadding = 28;
  const horizontalScale = (viewportWidth - stagePadding) / VIEWPORT_FIT.shellWidth;
  const verticalScale = (viewportHeight - stagePadding) / VIEWPORT_FIT.shellHeight;
  const nextScale = Math.min(horizontalScale, verticalScale, 1);
  const safeScale = Number.isFinite(nextScale) ? Math.max(nextScale, 0.32) : 1;

  document.documentElement.style.setProperty("--game-scale", safeScale.toFixed(4));
}

function syncStartOverlay() {
  elements.startOverlay.classList.toggle("is-hidden", state.sessionStarted);
  elements.startOverlay.setAttribute("aria-hidden", state.sessionStarted ? "true" : "false");
  elements.gameStage.classList.toggle("is-booting", !state.sessionStarted);
  buttons.start.textContent = state.hasRestorableProgress ? "Resume Expedition" : "Start Expedition";
  elements.startCopy.textContent = state.hasRestorableProgress
    ? "Continue your saved survey and wake the jungle ambience."
    : "Begin the survey and wake the jungle ambience.";
}

function startGameSession() {
  if (state.sessionStarted) {
    return;
  }

  state.sessionStarted = true;
  syncStartOverlay();
  ambientAudio.userGesture();
  renderScene();
  queueEncounter(true);
}

function syncPeriodButtons() {
  Array.from(elements.periodSwitcher.children).forEach((button) => {
    button.classList.toggle("is-active", button.dataset.period === state.periodId);
  });
}

function resetGameProgress() {
  const shouldReset = window.confirm("Reset the expedition and clear all photos, guide entries, and notes?");
  if (!shouldReset) {
    return;
  }

  resetGameState();
}

function setPeriod(periodId, force = false, preservePosition = false) {
  if (!force && periodId === state.periodId) {
    return;
  }

  clearVisibleEncounterTimer();
  clearAttackEffect();
  state.periodId = periodId;
  if (!preservePosition) {
    state.x = 0;
    state.y = 0;
  }
  state.visibleDinoId = null;
  state.contactDinoId = null;
  state.contactVisible = false;

  // Restore 1 heart when switching periods
  if (!force && state.lives < state.maxLives) {
    state.lives = Math.min(state.lives + 1, state.maxLives);
    renderLives();
  }

  syncPeriodButtons();

  addLog(`Temporal gate shifted to the ${currentPeriod().name}.`);
  persistState();
  renderScene();
  queueEncounter(true);
}

function isInputBlocked() {
  return state.gameOver || state.photoCelebrationActive;
}

function move(dx, dy) {
  if (isInputBlocked()) return;
  const nextX = clamp(state.x + dx, 0, 4);
  const nextY = clamp(state.y + dy, 0, 4);

  if (nextX === state.x && nextY === state.y) {
    updateMessage("Thick terrain blocks the rover here. Try another direction.");
    playTone("blocked");
    return;
  }

  updatePosition(nextX, nextY, `Moved to ${currentPeriod().locations[nextY][nextX]} in the ${currentPeriod().name}.`);
}

function moveToSector(targetX, targetY) {
  if (isInputBlocked()) return;
  const nextX = clamp(targetX, 0, 4);
  const nextY = clamp(targetY, 0, 4);

  if (nextX === state.x && nextY === state.y) {
    updateMessage("You are already surveying this sector.");
    return;
  }

  updatePosition(nextX, nextY, `Survey map jump to ${currentPeriod().locations[nextY][nextX]}.`);
}

function updatePosition(nextX, nextY, logMessage) {
  clearVisibleEncounterTimer();
  clearAttackEffect();
  state.x = nextX;
  state.y = nextY;
  state.visibleDinoId = null;

  renderScene();
  addLog(logMessage);
  persistState();
  queueEncounter(false);
}

function queueEncounter(isPeriodChange) {
  clearVisibleEncounterTimer();
  clearAttackEffect();
  state.encounterToken += 1;
  const encounterToken = state.encounterToken;
  const matchingDino = findDinoAt(state.periodId, state.x, state.y);
  const nearDino = nearestDinoForPeriod();

  renderStatus(nearDino);

  if (!state.sessionStarted) {
    updateMessage(state.hasRestorableProgress
      ? "Press Resume Expedition to continue the survey."
      : "Press Start Expedition to begin the survey.");
    return;
  }

  if (!matchingDino) {
    updateMessage(
      isPeriodChange
        ? `Arrival stable. ${currentPeriod().label} terrain ready for exploration.`
        : "No movement yet. Hold position, scan, or keep moving."
    );
    return;
  }

  updateMessage("Motion detected. Something is moving beyond the brush...");

  window.setTimeout(() => {
    if (encounterToken !== state.encounterToken) {
      return;
    }

    if (attemptEncounter(matchingDino, isPeriodChange ? "arrival" : "movement", encounterToken)) {
      return;
    }

    renderStatus(matchingDino);
    updateMessage(
      `${matchingDino.name} is using cover in this sector. Scan carefully or keep stalking it.`
    );
  }, isPeriodChange ? 420 : 620);
}

function scanArea() {
  if (isInputBlocked()) return;
  const nearest = nearestDinoForPeriod();
  renderStatus(nearest);

  if (state.visibleDinoId) {
    const dino = dinoById[state.visibleDinoId];
    updateMessage(`Scanner confirms ${dino.name}. ${dino.hint}`);
    addLog(`Scanner locked onto ${dino.name}.`);
    playTone("scan");
    return;
  }

  if (!nearest) {
    updateMessage("Scanner is flat. No major life signs in this era right now.");
    playTone("scan");
    return;
  }

  const concealed = findDinoAt(state.periodId, state.x, state.y);
  if (concealed) {
    if (attemptEncounter(concealed, "scan", state.encounterToken)) {
      return;
    }

    const effort = searchEffortFor(concealed);
    const signal = signalPercent(concealed);
    updateMessage(
      effort >= 3
        ? `${signal}% signal. ${concealed.name} is extremely close but still staying hidden. Scan again and hold your ground.`
        : `${signal}% signal. Brush snapped nearby, but ${concealed.name} stayed hidden in cover.`
    );
    addLog(`Scanner stirred ${concealed.name}, but it stayed hidden at ${locationName()}.`);
    playTone("scan");
    return;
  }

  const [nearestX, nearestY] = nearestCoordinate(nearest);
  const steps = manhattanDistance(state.x, state.y, nearestX, nearestY);
  const direction = directionHint(nearest);
  const heat = signalPercent(nearest);

  updateMessage(
    steps === 0
      ? `${heat}% signal. ${nearest.hint} The source is directly in this sector. Stay still and watch the clearing.`
      : `${heat}% signal. ${nearest.hint} Strongest reading is ${direction}, about ${steps} sector${steps === 1 ? "" : "s"} away.`
  );
  addLog(`Scan at ${locationName()}: ${nearest.name} signal ${heat}%.`);
  playTone("scan");
}

function takePhoto() {
  if (isInputBlocked()) return;
  if (state.attackLock) {
    updateMessage("Too late. The predator is already charging.");
    playTone("blocked");
    return;
  }

  if (!state.visibleDinoId) {
    updateMessage("You snapped empty scenery. Wait for a full sighting first.");
    addLog(`Empty photo taken at ${locationName()}.`);
    triggerFlash();
    playTone("blocked");
    return;
  }

  const dino = dinoById[state.visibleDinoId];
  const isNewCapture = !state.captured.has(dino.id);
  clearVisibleEncounterTimer();
  state.captured.add(dino.id);
  state.searchProgress[searchKeyFor(dino)] = 0;
  state.encounterCooldowns[dino.id] = Date.now() + 2800;
  state.photoCelebrationActive = true;

  triggerFlash();
  renderCaptureStrip();
  renderGuide();
  renderStatus(dino);

  updateMessage(
    isNewCapture
      ? `${dino.name} added to the field guide. Excellent shot.`
      : `${dino.name} photographed again. Album entry updated.`
  );
  addLog(`${dino.name} photographed at ${locationName()}.`);
  persistState();
  playTone("photo");

  window.setTimeout(() => {
    showPhotoCelebration(dino, isNewCapture);
  }, 400);
}

function showPhotoCelebration(dino, isNewCapture) {
  // Capture a snapshot of the scene canvas
  const snapshotCanvas = document.createElement("canvas");
  snapshotCanvas.width = elements.sceneCanvas.width;
  snapshotCanvas.height = elements.sceneCanvas.height;
  snapshotCanvas.getContext("2d").drawImage(elements.sceneCanvas, 0, 0);
  elements.photoCelebrationSnapshot.innerHTML = "";
  elements.photoCelebrationSnapshot.appendChild(snapshotCanvas);

  elements.photoCelebrationLabel.textContent = isNewCapture
    ? "New Species Discovered!"
    : "Photo Updated!";
  elements.photoCelebrationName.textContent = dino.name;
  elements.photoCelebrationNote.textContent = isNewCapture
    ? "Added to Field Guide"
    : "Album entry refreshed";

  elements.photoCelebration.classList.toggle("is-new", isNewCapture);
  elements.photoCelebration.classList.add("is-active");

  if (isNewCapture) {
    playTone("celebrate");
  }

  const dismiss = () => {
    elements.photoCelebration.removeEventListener("click", dismiss);
    dismissPhotoCelebration(dino);
  };

  elements.photoCelebration.addEventListener("click", dismiss);
  window.setTimeout(dismiss, 2500);
}

function dismissPhotoCelebration(dino) {
  if (!state.photoCelebrationActive) return;

  elements.photoCelebration.classList.remove("is-active");

  // Start dino exit animation
  state.dinoExiting = true;
  state.dinoExitStart = performance.now();

  // For authored scenes, use CSS transition
  if (elements.sceneSprite.classList.contains("is-visible")) {
    elements.sceneSprite.classList.add("is-exiting");
  }

  window.setTimeout(() => {
    state.visibleDinoId = null;
    state.contactVisible = false;
    state.dinoExiting = false;
    state.photoCelebrationActive = false;

    elements.sceneSprite.classList.remove("is-exiting");

    renderCaptureStrip();
    renderGuide();
    renderScene();
    renderStatus(dino);

    // Check for win
    if (state.captured.size === DINOSAURS.length) {
      window.setTimeout(() => showVictoryScreen(), 600);
    }
  }, 800);
}

// --- Lives / Energy ---

function renderLives() {
  elements.livesHearts.innerHTML = "";
  for (let i = 0; i < state.maxLives; i++) {
    const heart = document.createElement("span");
    heart.className = "heart" + (i >= state.lives ? " is-lost" : "");
    heart.textContent = "\u2764";
    elements.livesHearts.appendChild(heart);
  }
}

function loseLife() {
  if (state.lives <= 0) return;

  state.lives = Math.max(0, state.lives - 1);

  // Animate the losing heart
  const hearts = elements.livesHearts.querySelectorAll(".heart");
  const losingHeart = hearts[state.lives];
  if (losingHeart) {
    losingHeart.classList.add("is-losing");
    losingHeart.addEventListener("animationend", () => {
      losingHeart.classList.remove("is-losing");
      losingHeart.classList.add("is-lost");
    }, { once: true });
  }

  persistState();

  if (state.lives === 0) {
    window.setTimeout(() => showGameOver(), 1000);
  }
}

function showGameOver() {
  state.gameOver = true;
  elements.gameoverProgress.textContent =
    `You photographed ${state.captured.size} of ${DINOSAURS.length} dinosaurs.`;
  elements.gameoverOverlay.classList.add("is-active");
  playTone("gameover");
}

function dismissGameOverAndRetry() {
  elements.gameoverOverlay.classList.remove("is-active");
  state.lives = state.maxLives;
  state.gameOver = false;
  state.x = 0;
  state.y = 0;
  state.visibleDinoId = null;
  state.contactDinoId = null;
  state.contactVisible = false;
  clearVisibleEncounterTimer();
  clearAttackEffect();

  renderLives();
  renderScene();
  persistState();
  queueEncounter(true);
  addLog("Rover repaired. Expedition continues.");
}

// --- Victory ---

function showVictoryScreen() {
  elements.victoryGrid.innerHTML = "";

  DINOSAURS.forEach((dino, index) => {
    const cell = document.createElement("div");
    cell.className = "victory-dino";
    cell.style.animationDelay = `${index * 150}ms`;

    const imgSrc = guidePreviewSource(dino, true);
    cell.innerHTML = `<img src="${imgSrc}" alt="${dino.name}" /><p>${dino.name}</p>`;
    elements.victoryGrid.appendChild(cell);
  });

  elements.victoryOverlay.classList.add("is-active");
  playVictoryTones();
}

function playVictoryTones() {
  playTone("celebrate");
  window.setTimeout(() => playTone("celebrate"), 200);
  window.setTimeout(() => playTone("celebrate"), 400);
}

function dismissVictoryAndRestart() {
  elements.victoryOverlay.classList.remove("is-active");
  resetGameState();
}

function resetGameState() {
  try {
    window.localStorage.removeItem(STORAGE_KEY);
  } catch (error) {
    // Ignore
  }

  state.periodId = "jurassic";
  state.x = 0;
  state.y = 0;
  state.visibleDinoId = null;
  state.contactDinoId = null;
  state.contactVisible = false;
  state.captured = new Set();
  state.log = [];
  state.encounterToken = 0;
  state.searchProgress = {};
  state.encounterCooldowns = {};
  state.hasRestorableProgress = false;
  state.lives = state.maxLives;
  state.gameOver = false;
  state.photoCelebrationActive = false;
  clearVisibleEncounterTimer();
  clearAttackEffect();

  syncPeriodButtons();
  renderLog();
  renderLives();
  renderScene();
  queueEncounter(true);
  addLog("Expedition reset. Fresh survey loaded.");
}

function renderScene() {
  const period = currentPeriod();
  const biome = currentBiome();
  const target = nextTargetForPeriod();

  elements.scenePeriod.textContent = period.label;
  elements.sceneLocation.textContent = locationName();
  elements.viewport.dataset.biome = biome;
  elements.coordinates.textContent = `X ${state.x + 1} / Y ${state.y + 1}`;
  elements.targetDino.textContent = target ? target.name : "Era complete";
  elements.targetHint.textContent = target ? target.hint : "Every animal in this age has been photographed.";

  renderRadar();
  renderCaptureStrip();
  if (elements.guideDialog.open) {
    renderGuide();
  }
  updateSceneNameplate();
  renderAuthoredScene();
  ambientAudio.setProfile(currentAmbientProfile());
}

function renderStatus(referenceDino) {
  const visible = state.visibleDinoId ? dinoById[state.visibleDinoId] : null;
  const dino = visible || referenceDino || null;
  const signal = dino ? signalPercent(dino) : 12;

  state.contactDinoId = dino ? dino.id : null;
  state.contactVisible = Boolean(visible);

  if (!dino) {
    elements.contactName.textContent = "No dinosaur visible";
    elements.contactStatus.textContent = "Searching";
  } else {
    elements.contactName.textContent = visible ? dino.name : `Possible ${dino.name}`;
    elements.contactStatus.textContent = state.attackLock && visible ? "Attack" : visible ? "Visible" : "Tracking";
  }

  elements.signalFill.style.width = `${signal}%`;
  elements.signalValue.textContent = `${signal}%`;
  elements.captureCount.textContent = `${state.captured.size} / ${DINOSAURS.length} captured`;
  elements.radarHint.textContent = radarHint(visible || referenceDino);
  updateSceneNameplate();
  renderContactPreview();
}

function renderRadar() {
  const nearest = nearestDinoForPeriod();
  elements.radarGrid.innerHTML = "";

  for (let y = 0; y < 5; y += 1) {
    for (let x = 0; x < 5; x += 1) {
      const cell = document.createElement("button");
      cell.className = "radar-cell";
      cell.type = "button";
      cell.textContent = `${x + 1}:${y + 1}`;
      cell.dataset.x = String(x);
      cell.dataset.y = String(y);
      cell.title = `Travel to sector ${x + 1}:${y + 1}`;
      cell.setAttribute("aria-label", `Travel to sector ${x + 1}:${y + 1}`);

      if (x === state.x && y === state.y) {
        cell.classList.add("is-player");
        cell.textContent = "YOU";
        cell.setAttribute("aria-current", "true");
      }

      if (nearest && isNearby(x, y, nearest)) {
        cell.classList.add("is-hot");
      }

      if (state.captured.has(findDinoIdAt(state.periodId, x, y) || "")) {
        cell.classList.add("is-seen");
      }

      elements.radarGrid.append(cell);
    }
  }
}

function renderCaptureStrip() {
  elements.captureStrip.innerHTML = "";

  DINOSAURS.forEach((dino) => {
    const token = document.createElement("div");
    token.className = "capture-token";
    token.classList.toggle("is-complete", state.captured.has(dino.id));
    token.innerHTML = state.captured.has(dino.id)
      ? `<strong>${dino.name}</strong><span>${labelForPeriod(dino.period)}</span>`
      : `<strong>???</strong><span>${labelForPeriod(dino.period)}</span>`;
    elements.captureStrip.append(token);
  });
}

function renderGuide() {
  elements.guideGrid.innerHTML = "";

  DINOSAURS.forEach((dino) => {
    const captured = state.captured.has(dino.id);
    const entry = document.createElement("article");
    entry.className = "guide-entry bevel-inset";
    entry.classList.toggle("is-missing", !captured);
    entry.classList.toggle("is-captured", captured);
    entry.innerHTML = `
      <div class="guide-art">
        <img src="${guidePreviewSource(dino, captured)}" alt="${captured ? dino.name : "Unknown species"} preview" />
      </div>
      <div>
        <p class="period-badge">${labelForPeriod(dino.period)}</p>
        <h3>${captured ? dino.name : "Unknown Species"}</h3>
        <p class="guide-capture-status">${captured ? "Photographed" : "Unseen"}</p>
      </div>
      <p class="guide-stat"><strong>Diet:</strong> ${captured ? dino.diet : "Classified"}</p>
      <p class="guide-stat"><strong>Size:</strong> ${captured ? dino.size : "Classified"}</p>
      <p class="guide-note">${captured ? dino.notes : "Photograph this animal to unlock its entry."}</p>
    `;
    elements.guideGrid.append(entry);
  });
}

function guidePreviewSource(dino, captured) {
  const authored = AUTHORED_DINOSAURS[dino.id];
  if (captured && authored?.guide) {
    return authored.guide;
  }

  const key = `${dino.id}:${captured ? "full" : "locked"}`;
  if (!guidePreviewCache.has(key)) {
    guidePreviewCache.set(key, renderer.renderGuidePreview(dino, captured));
  }
  return guidePreviewCache.get(key);
}

function renderLog() {
  elements.logList.innerHTML = "";

  state.log.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    elements.logList.append(li);
  });
}

function updateSceneNameplate() {
  if (!state.visibleDinoId) {
    elements.sceneNameplate.textContent = "";
    elements.sceneNameplate.classList.remove("is-visible");
    return;
  }

  elements.sceneNameplate.textContent = dinoById[state.visibleDinoId].name;
  elements.sceneNameplate.classList.add("is-visible");
}

function renderAuthoredScene() {
  const scene = currentAuthoredScene();
  const hybridSprite = getHybridSprite();
  const hasFullScene = Boolean(scene);
  const hasHybrid = Boolean(hybridSprite);

  elements.viewport.classList.toggle("is-authored", hasFullScene);
  elements.viewport.classList.toggle("is-hybrid", !hasFullScene && hasHybrid);

  if (!hasFullScene && !hasHybrid) {
    elements.sceneBg.removeAttribute("src");
    elements.sceneFg.removeAttribute("src");
    elements.sceneSprite.classList.remove("is-visible");
    return;
  }

  // --- Full authored scene mode ---
  if (hasFullScene) {
    if (elements.sceneBg.getAttribute("src") !== scene.background) {
      elements.sceneBg.src = scene.background;
    }

    if (elements.sceneFg.getAttribute("src") !== scene.foreground) {
      elements.sceneFg.src = scene.foreground;
    }

    const spriteAsset = state.visibleDinoId ? scene.dinosaurs[state.visibleDinoId] : null;
    if (!spriteAsset) {
      elements.sceneSprite.classList.remove("is-visible");
      elements.sceneSpriteStrip.removeAttribute("src");
      elements.sceneSpriteStrip.style.transform = "translateX(0)";
      return;
    }

    applySpriteLayout(spriteAsset, scene.resolution.width, scene.resolution.height);
    return;
  }

  // --- Hybrid mode: authored sprite on procedural canvas ---
  elements.sceneBg.removeAttribute("src");
  elements.sceneFg.removeAttribute("src");
  applySpriteLayout(hybridSprite, SCENE_LOGICAL_WIDTH, SCENE_LOGICAL_HEIGHT);
}

function getHybridSprite() {
  if (!state.visibleDinoId) return null;
  const authored = AUTHORED_DINOSAURS[state.visibleDinoId];
  if (!authored?.sprite) return null;
  // Don't use hybrid if a full authored scene already covers this dino
  if (currentAuthoredScene()) return null;
  return authored.sprite;
}

function applySpriteLayout(spriteAsset, refWidth, refHeight) {
  if (elements.sceneSpriteStrip.getAttribute("src") !== spriteAsset.src && elements.sceneSpriteStrip.getAttribute("src") !== spriteAsset.sprite) {
    elements.sceneSpriteStrip.src = spriteAsset.src || spriteAsset.sprite;
  }

  const widthPercent = (spriteAsset.width / refWidth) * 100;
  const heightPercent = (spriteAsset.height / refHeight) * 100;
  const leftPercent = (spriteAsset.left / refWidth) * 100;
  const topPercent = (spriteAsset.top / refHeight) * 100;

  elements.sceneSprite.style.width = `${widthPercent}%`;
  elements.sceneSprite.style.height = `${heightPercent}%`;
  elements.sceneSprite.style.left = `${leftPercent}%`;
  elements.sceneSprite.style.top = `${topPercent}%`;
  elements.sceneSpriteStrip.style.width = `${spriteAsset.frames * 100}%`;
  elements.sceneSpriteStrip.style.transform = "translateX(0)";
  elements.sceneSprite.dataset.frames = String(spriteAsset.frames);
  elements.sceneSprite.dataset.fps = String(spriteAsset.fps);
  elements.sceneSprite.classList.add("is-visible");
}

function renderContactPreview() {
  const authored = state.contactDinoId ? AUTHORED_DINOSAURS[state.contactDinoId] : null;
  const canUseAuthored = Boolean(authored?.contact);

  elements.silhouetteCard.classList.toggle("is-authored", canUseAuthored);

  if (!canUseAuthored) {
    elements.contactImage.removeAttribute("src");
    return;
  }

  if (elements.contactImage.getAttribute("src") !== authored.contact) {
    elements.contactImage.src = authored.contact;
  }
}

function currentAuthoredScene() {
  return AUTHORED_SCENES[sceneKey()] || null;
}

function currentAmbientProfile() {
  const scene = currentAuthoredScene();
  if (scene?.ambience) {
    return scene.ambience;
  }

  return currentBiome();
}

function sceneKey(periodId = state.periodId, x = state.x, y = state.y) {
  return `${periodId}:${x}:${y}`;
}

function currentPeriod() {
  return byPeriod[state.periodId];
}

function currentBiome() {
  return currentPeriod().biomes[state.y][state.x];
}

function locationName() {
  return currentPeriod().locations[state.y][state.x];
}

function findDinoAt(periodId, x, y) {
  return DINOSAURS.find(
    (dino) => dino.period === periodId && dino.coords.some(([coordX, coordY]) => coordX === x && coordY === y)
  );
}

function findDinoIdAt(periodId, x, y) {
  const match = findDinoAt(periodId, x, y);
  return match ? match.id : null;
}

function nearestDinoForPeriod() {
  const candidates = DINOSAURS.filter((dino) => dino.period === state.periodId);

  if (!candidates.length) {
    return null;
  }

  return candidates.reduce((nearest, candidate) => {
    const candidateDistance = nearestEncounterDistance(candidate);
    if (!nearest) {
      return candidate;
    }

    return candidateDistance < nearestEncounterDistance(nearest) ? candidate : nearest;
  }, null);
}

function nearestEncounterDistance(dino) {
  return Math.min(
    ...dino.coords.map(([coordX, coordY]) => manhattanDistance(state.x, state.y, coordX, coordY))
  );
}

function nearestCoordinate(dino) {
  return dino.coords.reduce((best, current) => {
    if (!best) {
      return current;
    }

    return manhattanDistance(state.x, state.y, current[0], current[1]) <
      manhattanDistance(state.x, state.y, best[0], best[1])
      ? current
      : best;
  }, null);
}

function nextTargetForPeriod() {
  return DINOSAURS.find((dino) => dino.period === state.periodId && !state.captured.has(dino.id)) || null;
}

function signalPercent(dino) {
  const distance = nearestEncounterDistance(dino);
  return clamp(100 - distance * 22, 12, 100);
}

function directionHint(dino) {
  const [coordX, coordY] = nearestCoordinate(dino);
  const vertical = coordY < state.y ? "north" : coordY > state.y ? "south" : "";
  const horizontal = coordX < state.x ? "west" : coordX > state.x ? "east" : "";
  return [vertical, horizontal].filter(Boolean).join("-") || "right here";
}

function isNearby(x, y, dino) {
  return dino.coords.some(([coordX, coordY]) => manhattanDistance(x, y, coordX, coordY) <= 1);
}

function radarHint(dino) {
  if (!dino) {
    return "No live target data.";
  }

  const signal = signalPercent(dino);
  if (signal >= 80) {
    return "Heavy movement nearby. Stop and watch the clearing.";
  }
  if (signal >= 50) {
    return "Life signs in the next few sectors.";
  }
  return "Weak pulse. Keep sweeping the map.";
}

function updateMessage(message) {
  elements.messageBanner.textContent = message;
}

function addLog(message) {
  const time = new Date().toLocaleTimeString([], {
    hour: "numeric",
    minute: "2-digit",
  });
  state.log.unshift(`${time}: ${message}`);
  state.log = state.log.slice(0, 8);
  persistState();
  renderLog();
}

function clearVisibleEncounterTimer() {
  if (!state.visibleTimeoutId) {
    return;
  }

  window.clearTimeout(state.visibleTimeoutId);
  state.visibleTimeoutId = 0;
}

function clearAttackEffect() {
  if (state.attackEffectTimeoutId) {
    window.clearTimeout(state.attackEffectTimeoutId);
    state.attackEffectTimeoutId = 0;
  }

  state.attackLock = false;
  elements.viewport.classList.remove("is-under-attack");
}

function searchKeyFor(dino, x = state.x, y = state.y) {
  return `${dino.id}:${state.periodId}:${x}:${y}`;
}

function searchEffortFor(dino) {
  return state.searchProgress[searchKeyFor(dino)] || 0;
}

function encounterChanceFor(dino, source) {
  const effort = searchEffortFor(dino);
  const predator = isPredator(dino);
  const baseChance = source === "scan"
    ? predator ? 0.28 : 0.42
    : predator ? 0.14 : 0.24;
  const capturedPenalty = state.captured.has(dino.id) ? 0.05 : 0;

  return clamp(baseChance + effort * 0.16 - capturedPenalty, 0.08, 0.9);
}

function attemptEncounter(dino, source, encounterToken) {
  const cooldownUntil = state.encounterCooldowns[dino.id] || 0;
  if (Date.now() < cooldownUntil) {
    return false;
  }

  const key = searchKeyFor(dino);
  const success = Math.random() < encounterChanceFor(dino, source);
  if (!success) {
    state.searchProgress[key] = Math.min((state.searchProgress[key] || 0) + 1, 4);
    state.encounterCooldowns[dino.id] = Date.now() + (source === "scan" ? 900 : 1400);
    return false;
  }

  state.searchProgress[key] = 0;
  showEncounter(dino, encounterToken);
  return true;
}

function showEncounter(dino, encounterToken) {
  state.visibleDinoId = dino.id;
  renderStatus(dino);
  renderScene();
  updateMessage(`${dino.name} entered the clearing. Take the shot now.`);
  addLog(`${dino.name} sighted at ${locationName()}.`);
  playTone("encounter");
  scheduleVisibleEncounterResolution(dino, encounterToken);
}

function scheduleVisibleEncounterResolution(dino, encounterToken) {
  clearVisibleEncounterTimer();
  const lingerMs = isPredator(dino) ? 3600 : 5200;

  state.visibleTimeoutId = window.setTimeout(() => {
    if (encounterToken !== state.encounterToken || state.visibleDinoId !== dino.id) {
      return;
    }

    state.visibleTimeoutId = 0;
    state.encounterCooldowns[dino.id] = Date.now() + (isPredator(dino) ? 9000 : 6000);
    state.searchProgress[searchKeyFor(dino)] = Math.min(searchEffortFor(dino) + 1, 4);

    if (isPredator(dino)) {
      state.attackLock = true;
      renderStatus(dino);
      triggerAttackEffect();
      playAttackRoar();
      playTone("attack");
      updateMessage(`${dino.name} charged the rover and vanished before you got the shot.`);
      addLog(`${dino.name} attacked and fled from ${locationName()}.`);
      state.attackEffectTimeoutId = window.setTimeout(() => {
        if (encounterToken !== state.encounterToken) {
          clearAttackEffect();
          return;
        }

        state.visibleDinoId = null;
        state.contactVisible = false;
        clearAttackEffect();
        renderScene();
        renderStatus(dino);
        loseLife();
      }, 640);
      return;
    }

    state.visibleDinoId = null;
    state.contactVisible = false;
    renderScene();
    renderStatus(dino);
    updateMessage(`${dino.name} slipped back into cover before you got the shot.`);
    addLog(`${dino.name} vanished into cover at ${locationName()}.`);
    playTone("blocked");
  }, lingerMs);
}

function isPredator(dino) {
  return dino.diet === "Carnivore";
}

function triggerFlash() {
  elements.flashOverlay.classList.remove("is-active");
  void elements.flashOverlay.offsetWidth;
  elements.flashOverlay.classList.add("is-active");
}

function triggerAttackEffect() {
  elements.viewport.classList.remove("is-under-attack");
  void elements.viewport.offsetWidth;
  elements.viewport.classList.add("is-under-attack");
}

function createAttackRoarPlayer(source) {
  if (typeof Audio === "undefined") {
    return null;
  }

  const audio = new Audio(source);
  audio.preload = "auto";
  audio.volume = 0.9;
  return audio;
}

function playAttackRoar() {
  if (!attackRoar) {
    return;
  }

  try {
    attackRoar.pause();
    attackRoar.currentTime = 0;
    const playback = attackRoar.play();
    if (playback && typeof playback.catch === "function") {
      playback.catch(() => {});
    }
  } catch (error) {
    return;
  }
}

function playTone(type) {
  const AudioContextClass = window.AudioContext || window.webkitAudioContext;
  if (!AudioContextClass) {
    return;
  }

  const audioContext = new AudioContextClass();
  const oscillator = audioContext.createOscillator();
  const gain = audioContext.createGain();
  oscillator.connect(gain);
  gain.connect(audioContext.destination);

  const profiles = {
    scan: { frequency: 460, endFrequency: 640, duration: 0.16, wave: "triangle" },
    photo: { frequency: 880, endFrequency: 260, duration: 0.22, wave: "square" },
    encounter: { frequency: 140, endFrequency: 92, duration: 0.55, wave: "sawtooth" },
    blocked: { frequency: 220, endFrequency: 170, duration: 0.12, wave: "square" },
    attack: { frequency: 120, endFrequency: 62, duration: 0.42, wave: "sawtooth" },
    celebrate: { frequency: 523, endFrequency: 1047, duration: 0.35, wave: "square" },
    gameover: { frequency: 260, endFrequency: 80, duration: 0.6, wave: "sawtooth" },
  };

  const profile = profiles[type];
  oscillator.type = profile.wave;
  oscillator.frequency.setValueAtTime(profile.frequency, audioContext.currentTime);
  oscillator.frequency.exponentialRampToValueAtTime(
    Math.max(profile.endFrequency, 1),
    audioContext.currentTime + profile.duration
  );

  gain.gain.setValueAtTime(0.0001, audioContext.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.08, audioContext.currentTime + 0.02);
  gain.gain.exponentialRampToValueAtTime(0.0001, audioContext.currentTime + profile.duration);

  oscillator.start();
  oscillator.stop(audioContext.currentTime + profile.duration);
  oscillator.addEventListener("ended", () => audioContext.close());
}

function createAmbientAudio() {
  const AudioContextClass = window.AudioContext || window.webkitAudioContext;

  if (!AudioContextClass) {
    return {
      setEnabled() {},
      setProfile() {},
      userGesture() {},
    };
  }

  const profileSettings = {
    fern: {
      water: 0.018,
      waterMod: 0.006,
      air: 0.012,
      airMod: 0.003,
      insect: 0.006,
      insectMod: 0.003,
      bird: 0.8,
      birdMinDelay: 4200,
      birdMaxDelay: 7600,
      birdMinFreq: 900,
      birdMaxFreq: 1500,
      frog: 0.12,
      frogMinDelay: 6000,
      frogMaxDelay: 10000,
      rustle: 0.3,
      riverCutoff: 1250,
      insectCenter: 4700,
    },
    woodland: {
      water: 0.014,
      waterMod: 0.004,
      air: 0.014,
      airMod: 0.004,
      insect: 0.005,
      insectMod: 0.002,
      bird: 0.85,
      birdMinDelay: 4200,
      birdMaxDelay: 7800,
      birdMinFreq: 820,
      birdMaxFreq: 1350,
      frog: 0.08,
      frogMinDelay: 6500,
      frogMaxDelay: 11000,
      rustle: 0.45,
      riverCutoff: 980,
      insectCenter: 4300,
    },
    marsh: {
      water: 0.02,
      waterMod: 0.008,
      air: 0.01,
      airMod: 0.003,
      insect: 0.01,
      insectMod: 0.004,
      bird: 0.45,
      birdMinDelay: 5200,
      birdMaxDelay: 8800,
      birdMinFreq: 760,
      birdMaxFreq: 1200,
      frog: 0.7,
      frogMinDelay: 3200,
      frogMaxDelay: 5800,
      rustle: 0.25,
      riverCutoff: 1080,
      insectCenter: 3600,
    },
    coast: {
      water: 0.028,
      waterMod: 0.01,
      air: 0.015,
      airMod: 0.004,
      insect: 0.002,
      insectMod: 0.001,
      bird: 0.32,
      birdMinDelay: 6200,
      birdMaxDelay: 9800,
      birdMinFreq: 620,
      birdMaxFreq: 980,
      frog: 0.04,
      frogMinDelay: 7000,
      frogMaxDelay: 12000,
      rustle: 0.16,
      riverCutoff: 880,
      insectCenter: 3200,
    },
    badlands: {
      water: 0.004,
      waterMod: 0.002,
      air: 0.02,
      airMod: 0.006,
      insect: 0.001,
      insectMod: 0.001,
      bird: 0.18,
      birdMinDelay: 7000,
      birdMaxDelay: 11000,
      birdMinFreq: 700,
      birdMaxFreq: 1000,
      frog: 0,
      frogMinDelay: 0,
      frogMaxDelay: 0,
      rustle: 0.1,
      riverCutoff: 720,
      insectCenter: 2800,
    },
    volcanic: {
      water: 0.002,
      waterMod: 0.001,
      air: 0.024,
      airMod: 0.006,
      insect: 0,
      insectMod: 0,
      bird: 0.05,
      birdMinDelay: 9000,
      birdMaxDelay: 14000,
      birdMinFreq: 480,
      birdMaxFreq: 760,
      frog: 0,
      frogMinDelay: 0,
      frogMaxDelay: 0,
      rustle: 0.05,
      riverCutoff: 620,
      insectCenter: 2400,
    },
    "shadow-grove": {
      water: 0.016,
      waterMod: 0.006,
      air: 0.012,
      airMod: 0.004,
      insect: 0.004,
      insectMod: 0.002,
      bird: 0.75,
      birdMinDelay: 3400,
      birdMaxDelay: 6400,
      birdMinFreq: 820,
      birdMaxFreq: 1280,
      frog: 0.08,
      frogMinDelay: 6800,
      frogMaxDelay: 10200,
      rustle: 0.58,
      riverCutoff: 1120,
      insectCenter: 4100,
    },
  };

  let context = null;
  let enabled = true;
  let profileName = "fern";
  let currentSettings = profileSettings.fern;

  let masterGain = null;
  let riverGain = null;
  let riverFilter = null;
  let riverLfoDepth = null;
  let airGain = null;
  let airLfoDepth = null;
  let insectGain = null;
  let insectFilter = null;
  let insectLfoDepth = null;
  let birdTimer = 0;
  let frogTimer = 0;
  let rustleTimer = 0;
  let whiteNoiseBuffer = null;
  let brownNoiseBuffer = null;

  function setEnabled(nextEnabled) {
    enabled = nextEnabled;
    if (masterGain && context) {
      const target = enabled ? 0.95 : 0.0001;
      masterGain.gain.setTargetAtTime(target, context.currentTime, 0.25);
    }
  }

  function setProfile(nextProfile) {
    profileName = profileSettings[nextProfile] ? nextProfile : "fern";
    currentSettings = profileSettings[profileName];
    if (context) {
      applyProfile();
    }
  }

  function userGesture() {
    if (!enabled) {
      return;
    }

    ensureContext();
    if (!context) {
      return;
    }

    if (context.state === "suspended") {
      context.resume();
    }
    applyProfile();
  }

  function ensureContext() {
    if (context) {
      return;
    }

    context = new AudioContextClass();
    whiteNoiseBuffer = createNoiseBuffer(context, "white");
    brownNoiseBuffer = createNoiseBuffer(context, "brown");

    masterGain = context.createGain();
    masterGain.gain.value = enabled ? 0.95 : 0.0001;
    masterGain.connect(context.destination);

    const riverSource = createLoopingNoiseSource(context, brownNoiseBuffer);
    riverFilter = context.createBiquadFilter();
    riverFilter.type = "lowpass";
    riverFilter.Q.value = 0.7;
    const riverHighpass = context.createBiquadFilter();
    riverHighpass.type = "highpass";
    riverHighpass.frequency.value = 140;
    riverGain = context.createGain();
    riverGain.gain.value = currentSettings.water;
    riverLfoDepth = context.createGain();
    riverLfoDepth.gain.value = currentSettings.waterMod;
    const riverLfo = context.createOscillator();
    riverLfo.type = "sine";
    riverLfo.frequency.value = 0.12;
    riverLfo.connect(riverLfoDepth);
    riverLfoDepth.connect(riverGain.gain);
    riverSource.connect(riverFilter);
    riverFilter.connect(riverHighpass);
    riverHighpass.connect(riverGain);
    riverGain.connect(masterGain);
    riverSource.start();
    riverLfo.start();

    const airSource = createLoopingNoiseSource(context, brownNoiseBuffer);
    const airFilter = context.createBiquadFilter();
    airFilter.type = "lowpass";
    airFilter.frequency.value = 960;
    airGain = context.createGain();
    airGain.gain.value = currentSettings.air;
    airLfoDepth = context.createGain();
    airLfoDepth.gain.value = currentSettings.airMod;
    const airLfo = context.createOscillator();
    airLfo.type = "triangle";
    airLfo.frequency.value = 0.08;
    airLfo.connect(airLfoDepth);
    airLfoDepth.connect(airGain.gain);
    airSource.connect(airFilter);
    airFilter.connect(airGain);
    airGain.connect(masterGain);
    airSource.start();
    airLfo.start();

    const insectSource = createLoopingNoiseSource(context, whiteNoiseBuffer);
    insectFilter = context.createBiquadFilter();
    insectFilter.type = "bandpass";
    insectFilter.Q.value = 0.9;
    insectGain = context.createGain();
    insectGain.gain.value = currentSettings.insect;
    insectLfoDepth = context.createGain();
    insectLfoDepth.gain.value = currentSettings.insectMod;
    const insectLfo = context.createOscillator();
    insectLfo.type = "sine";
    insectLfo.frequency.value = 0.31;
    insectLfo.connect(insectLfoDepth);
    insectLfoDepth.connect(insectGain.gain);
    insectSource.connect(insectFilter);
    insectFilter.connect(insectGain);
    insectGain.connect(masterGain);
    insectSource.start();
    insectLfo.start();

    scheduleBirds();
    scheduleFrogs();
    scheduleRustle();
    applyProfile();
  }

  function applyProfile() {
    if (!context) {
      return;
    }

    riverGain.gain.setTargetAtTime(currentSettings.water, context.currentTime, 0.5);
    riverLfoDepth.gain.setTargetAtTime(currentSettings.waterMod, context.currentTime, 0.6);
    riverFilter.frequency.setTargetAtTime(currentSettings.riverCutoff, context.currentTime, 0.5);
    airGain.gain.setTargetAtTime(currentSettings.air, context.currentTime, 0.5);
    airLfoDepth.gain.setTargetAtTime(currentSettings.airMod, context.currentTime, 0.6);
    insectGain.gain.setTargetAtTime(currentSettings.insect, context.currentTime, 0.45);
    insectLfoDepth.gain.setTargetAtTime(currentSettings.insectMod, context.currentTime, 0.5);
    insectFilter.frequency.setTargetAtTime(currentSettings.insectCenter, context.currentTime, 0.45);
  }

  function scheduleBirds() {
    birdTimer = window.setTimeout(() => {
      if (context && enabled && context.state === "running" && Math.random() < currentSettings.bird) {
        playBirdCall(context, currentSettings, masterGain);
      }
      scheduleBirds();
    }, randomInRange(currentSettings.birdMinDelay, currentSettings.birdMaxDelay));
  }

  function scheduleFrogs() {
    const minDelay = currentSettings.frogMinDelay || 8000;
    const maxDelay = currentSettings.frogMaxDelay || 12000;
    frogTimer = window.setTimeout(() => {
      if (context && enabled && context.state === "running" && currentSettings.frog > 0 && Math.random() < currentSettings.frog) {
        playFrogCall(context, masterGain);
      }
      scheduleFrogs();
    }, randomInRange(minDelay, maxDelay));
  }

  function scheduleRustle() {
    rustleTimer = window.setTimeout(() => {
      if (context && enabled && context.state === "running" && Math.random() < currentSettings.rustle) {
        playRustle(context, whiteNoiseBuffer, masterGain);
      }
      scheduleRustle();
    }, randomInRange(2400, 5200));
  }

  return {
    setEnabled,
    setProfile,
    userGesture,
  };
}

function createLoopingNoiseSource(context, buffer) {
  const source = context.createBufferSource();
  source.buffer = buffer;
  source.loop = true;
  return source;
}

function createNoiseBuffer(context, type) {
  const length = context.sampleRate * 2.5;
  const buffer = context.createBuffer(1, length, context.sampleRate);
  const data = buffer.getChannelData(0);

  if (type === "brown") {
    let last = 0;
    for (let index = 0; index < length; index += 1) {
      const white = Math.random() * 2 - 1;
      last = (last + 0.02 * white) / 1.02;
      data[index] = last * 3.5;
    }
    return buffer;
  }

  for (let index = 0; index < length; index += 1) {
    data[index] = Math.random() * 2 - 1;
  }

  return buffer;
}

function playBirdCall(context, settings, output) {
  const start = context.currentTime;
  const attack = 0.02;
  const duration = 0.18 + Math.random() * 0.14;
  const base = randomInRange(settings.birdMinFreq, settings.birdMaxFreq);
  const overtone = base * 1.82;

  const primary = context.createOscillator();
  primary.type = "triangle";
  primary.frequency.setValueAtTime(base, start);
  primary.frequency.exponentialRampToValueAtTime(base * 1.18, start + duration * 0.28);
  primary.frequency.exponentialRampToValueAtTime(base * 0.82, start + duration);

  const secondary = context.createOscillator();
  secondary.type = "sine";
  secondary.frequency.setValueAtTime(overtone, start);
  secondary.frequency.exponentialRampToValueAtTime(overtone * 0.74, start + duration);

  const gain = context.createGain();
  gain.gain.setValueAtTime(0.0001, start);
  gain.gain.exponentialRampToValueAtTime(0.02, start + attack);
  gain.gain.exponentialRampToValueAtTime(0.0001, start + duration);

  primary.connect(gain);
  secondary.connect(gain);
  gain.connect(output);

  primary.start(start);
  secondary.start(start);
  primary.stop(start + duration + 0.02);
  secondary.stop(start + duration + 0.02);
}

function playFrogCall(context, output) {
  const start = context.currentTime;
  const duration = 0.22 + Math.random() * 0.16;

  const oscillator = context.createOscillator();
  oscillator.type = "sawtooth";
  oscillator.frequency.setValueAtTime(randomInRange(160, 220), start);
  oscillator.frequency.exponentialRampToValueAtTime(randomInRange(90, 120), start + duration);

  const filter = context.createBiquadFilter();
  filter.type = "lowpass";
  filter.frequency.value = 520;

  const gain = context.createGain();
  gain.gain.setValueAtTime(0.0001, start);
  gain.gain.exponentialRampToValueAtTime(0.018, start + 0.03);
  gain.gain.exponentialRampToValueAtTime(0.0001, start + duration);

  oscillator.connect(filter);
  filter.connect(gain);
  gain.connect(output);

  oscillator.start(start);
  oscillator.stop(start + duration + 0.02);
}

function playRustle(context, noiseBuffer, output) {
  const source = context.createBufferSource();
  source.buffer = noiseBuffer;

  const filter = context.createBiquadFilter();
  filter.type = "bandpass";
  filter.frequency.value = randomInRange(1200, 2400);
  filter.Q.value = 0.7;

  const gain = context.createGain();
  const start = context.currentTime;
  const duration = 0.22 + Math.random() * 0.12;
  gain.gain.setValueAtTime(0.0001, start);
  gain.gain.exponentialRampToValueAtTime(0.01, start + 0.03);
  gain.gain.exponentialRampToValueAtTime(0.0001, start + duration);

  source.connect(filter);
  filter.connect(gain);
  gain.connect(output);
  source.start(start, Math.random() * 0.5, duration);
  source.stop(start + duration + 0.02);
}

function randomInRange(min, max) {
  return min + Math.random() * (max - min);
}

function loadSavedProgress() {
  let raw = null;

  try {
    raw = window.localStorage.getItem(STORAGE_KEY);
  } catch (error) {
    return;
  }

  if (!raw) {
    return;
  }

  try {
    const saved = JSON.parse(raw);
    if (saved.periodId && byPeriod[saved.periodId]) {
      state.periodId = saved.periodId;
    }
    if (Number.isInteger(saved.x)) {
      state.x = clamp(saved.x, 0, 4);
    }
    if (Number.isInteger(saved.y)) {
      state.y = clamp(saved.y, 0, 4);
    }
    if (Array.isArray(saved.captured)) {
      state.captured = new Set(saved.captured.filter((id) => dinoById[id]));
    }
    if (Array.isArray(saved.log)) {
      state.log = saved.log.slice(0, 8);
    }
    if (Number.isInteger(saved.lives)) {
      state.lives = clamp(saved.lives, 0, state.maxLives);
    }
    state.hasRestorableProgress = (
      state.periodId !== "jurassic"
      || state.x !== 0
      || state.y !== 0
      || state.captured.size > 0
    );
  } catch (error) {
    try {
      window.localStorage.removeItem(STORAGE_KEY);
    } catch (removeError) {
      return;
    }
  }
}

function persistState() {
  const snapshot = {
    periodId: state.periodId,
    x: state.x,
    y: state.y,
    captured: Array.from(state.captured),
    log: state.log,
    lives: state.lives,
  };

  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(snapshot));
  } catch (error) {
    return;
  }
}

function labelForPeriod(periodId) {
  return byPeriod[periodId].name;
}

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function manhattanDistance(x1, y1, x2, y2) {
  return Math.abs(x1 - x2) + Math.abs(y1 - y2);
}

function createRetroRenderer() {
  const sceneOutputContext = elements.sceneCanvas.getContext("2d");
  const sceneBuffer = document.createElement("canvas");
  sceneBuffer.width = SCENE_BUFFER_WIDTH;
  sceneBuffer.height = SCENE_BUFFER_HEIGHT;
  const sceneContext = sceneBuffer.getContext("2d");

  // Pixelation buffer: downsample the full-res scene to this smaller canvas,
  // then upscale with nearest-neighbor for a chunky pixel-art look
  const pixelBuffer = document.createElement("canvas");
  pixelBuffer.width = SCENE_PIXEL_WIDTH;
  pixelBuffer.height = SCENE_PIXEL_HEIGHT;
  const pixelContext = pixelBuffer.getContext("2d");

  const contactOutputContext = elements.contactCanvas.getContext("2d");
  const contactBuffer = document.createElement("canvas");
  contactBuffer.width = 210;
  contactBuffer.height = 120;
  const contactContext = contactBuffer.getContext("2d");

  let animationFrameId = 0;

  function start() {
    if (animationFrameId) {
      return;
    }

    const tick = (time) => {
      updateAuthoredSceneAnimation(time);

      if (!currentAuthoredScene()) {
        drawSceneFrame(sceneContext, time);
        // Downsample to pixel buffer, then upscale with nearest-neighbor
        pixelContext.imageSmoothingEnabled = true;
        pixelContext.drawImage(sceneBuffer, 0, 0, SCENE_PIXEL_WIDTH, SCENE_PIXEL_HEIGHT);
        blitBuffer(sceneOutputContext, pixelBuffer, elements.sceneCanvas);
      }

      if (!elements.silhouetteCard.classList.contains("is-authored")) {
        drawContactFrame(contactContext, time);
        blitBuffer(contactOutputContext, contactBuffer, elements.contactCanvas);
      }

      animationFrameId = window.requestAnimationFrame(tick);
    };

    animationFrameId = window.requestAnimationFrame(tick);
  }

  function renderGuidePreview(dino, captured) {
    const canvas = document.createElement("canvas");
    canvas.width = 220;
    canvas.height = 132;
    const context = canvas.getContext("2d");
    drawGuidePreviewFrame(context, dino, captured);
    return canvas.toDataURL();
  }

  return {
    renderGuidePreview,
    start,
  };
}

function blitBuffer(outputContext, buffer, canvas) {
  outputContext.imageSmoothingEnabled = false;
  outputContext.clearRect(0, 0, canvas.width, canvas.height);
  outputContext.drawImage(buffer, 0, 0, canvas.width, canvas.height);
}

function updateAuthoredSceneAnimation(time) {
  if (!state.visibleDinoId || !elements.sceneSprite.classList.contains("is-visible")) {
    return;
  }

  // Resolve sprite asset from full scene or hybrid mode
  const scene = currentAuthoredScene();
  const spriteAsset = scene
    ? scene.dinosaurs[state.visibleDinoId]
    : getHybridSprite();

  if (!spriteAsset) {
    return;
  }

  const frame = Math.floor((time / 1000) * spriteAsset.fps) % spriteAsset.frames;
  const offsetPercent = (frame * 100) / spriteAsset.frames;
  elements.sceneSpriteStrip.style.transform = `translateX(-${offsetPercent}%)`;
}

function drawSceneFrame(context, time) {
  const biome = currentBiome();
  const palette = scenePalette(state.periodId, biome);
  const seed = hashString(`${state.periodId}:${state.x}:${state.y}`);
  const rng = mulberry32(seed);
  const horizonY = biome === "coast" ? 150 : biome === "marsh" ? 158 : 166;

  context.clearRect(0, 0, SCENE_BUFFER_WIDTH, SCENE_BUFFER_HEIGHT);

  drawSky(context, palette, rng, horizonY, time, biome);
  drawFarTerrain(context, palette, rng, horizonY, biome, time);
  drawMidground(context, palette, rng, horizonY, biome, time);
  drawGround(context, palette, rng, horizonY, biome, time);

  if (state.visibleDinoId && !getHybridSprite()) {
    const dino = dinoById[state.visibleDinoId];
    const placement = scenePlacement(dino, biome, seed);

    // Handle exit animation
    if (state.dinoExiting) {
      const elapsed = time - state.dinoExitStart;
      const alpha = Math.max(0, 1 - elapsed / 800);
      const drift = elapsed * 0.04;
      context.save();
      context.globalAlpha = alpha;
      drawDinosaur(context, dino, { ...placement, x: placement.x + drift }, {
        lighting: palette,
        monochrome: false,
        phase: time * 0.0024 + seed * 0.001,
      });
      context.restore();
    } else {
      drawDinosaur(context, dino, placement, {
        lighting: palette,
        monochrome: false,
        phase: time * 0.0024 + seed * 0.001,
      });
    }
  }

  drawForeground(context, palette, rng, horizonY, biome, time);
  drawNoise(context, seed, time);
}

function drawContactFrame(context, time) {
  context.clearRect(0, 0, 210, 120);

  const background = context.createLinearGradient(0, 0, 0, 120);
  background.addColorStop(0, "#f5f0e7");
  background.addColorStop(1, "#e5ddd0");
  context.fillStyle = background;
  context.fillRect(0, 0, 210, 120);

  context.fillStyle = "rgba(0, 0, 0, 0.06)";
  context.fillRect(0, 88, 210, 32);

  if (!state.contactDinoId) {
    context.fillStyle = "rgba(32, 24, 18, 0.3)";
    context.font = '11px "Geneva", "Verdana", sans-serif';
    context.fillText("No specimen locked", 16, 68);
    return;
  }

  const dino = dinoById[state.contactDinoId];
  const palette = {
    body: state.contactVisible ? "#181412" : "#4e463f",
    accent: state.contactVisible ? "#181412" : "#4e463f",
    crest: state.contactVisible ? "#181412" : "#4e463f",
    shadow: "#000000",
  };

  drawDinosaur(context, { ...dino, palette }, {
    x: 104,
    y: 84,
    scale: previewScaleForShape(dino.shape) * 0.82,
  }, {
    lighting: null,
    monochrome: true,
    phase: time * 0.0018,
    shadowOpacity: 0.08,
    preview: true,
  });
}

function drawGuidePreviewFrame(context, dino, captured) {
  const palette = scenePalette(dino.period, dino.period === "triassic" ? "badlands" : dino.period === "jurassic" ? "fern" : "woodland");
  const gradient = context.createLinearGradient(0, 0, 0, 132);
  gradient.addColorStop(0, mixColor(palette.skyTop, "#ffffff", 0.14));
  gradient.addColorStop(1, mixColor(palette.groundBottom, "#27211a", 0.15));
  context.fillStyle = gradient;
  context.fillRect(0, 0, 220, 132);

  context.fillStyle = "rgba(255, 255, 255, 0.18)";
  context.fillRect(0, 0, 220, 64);

  const previewPalette = captured
    ? dino.palette
    : {
        body: "#181412",
        accent: "#181412",
        crest: "#181412",
      };

  drawDinosaur(context, { ...dino, palette: previewPalette }, {
    x: 110,
    y: 100,
    scale: previewScaleForShape(dino.shape),
  }, {
    lighting: palette,
    monochrome: !captured,
    phase: 0.4,
    shadowOpacity: 0.1,
    preview: true,
  });

  context.fillStyle = "rgba(20, 15, 11, 0.16)";
  context.fillRect(0, 108, 220, 24);
}

function scenePalette(periodId, biome) {
  const base = BIOME_PALETTES[biome] || BIOME_PALETTES.fern;
  const tint = PERIOD_TINTS[periodId] || PERIOD_TINTS.jurassic;

  return {
    skyTop: mixColor(base.skyTop, tint, 0.12),
    skyBottom: mixColor(base.skyBottom, tint, 0.06),
    haze: mixColor(base.haze, "#ffffff", 0.25),
    glow: mixColor(base.glow, tint, 0.1),
    ridge: mixColor(base.ridge, tint, 0.08),
    ridgeShadow: mixColor(base.ridgeShadow, tint, 0.06),
    midDark: mixColor(base.midDark, tint, 0.05),
    midLight: mixColor(base.midLight, tint, 0.08),
    groundTop: mixColor(base.groundTop, tint, 0.08),
    groundBottom: mixColor(base.groundBottom, tint, 0.04),
    grass: base.grass,
    grassDark: base.grassDark,
    water: base.water,
    rock: base.rock,
    bark: base.bark,
  };
}

function drawSky(context, palette, rng, horizonY, time, biome) {
  const skyGradient = context.createLinearGradient(0, 0, 0, horizonY + 26);
  skyGradient.addColorStop(0, palette.skyTop);
  skyGradient.addColorStop(0.55, mixColor(palette.skyBottom, "#ffffff", 0.12));
  skyGradient.addColorStop(1, palette.skyBottom);
  context.fillStyle = skyGradient;
  context.fillRect(0, 0, SCENE_LOGICAL_WIDTH, horizonY + 30);

  const glowX = 80 + rng() * 260;
  const glowY = 42 + rng() * 24;
  drawSoftCircle(context, glowX, glowY, 52, withAlpha(palette.glow, biome === "volcanic" ? 0.2 : 0.3));

  if (biome === "volcanic") {
    for (let index = 0; index < 4; index += 1) {
      const smokeX = 80 + index * 100 + Math.sin(time * 0.00022 + index) * 6;
      const smokeY = 40 + index * 6;
      drawSoftCloud(context, smokeX, smokeY, 70, 28, "rgba(110, 84, 72, 0.22)", 5);
    }
    return;
  }

  for (let index = 0; index < 6; index += 1) {
    const cloudX = -40 + index * 96 + Math.sin(time * 0.00018 + index * 0.8) * 12;
    const cloudY = 26 + (index % 3) * 16 + rng() * 12;
    drawSoftCloud(context, cloudX, cloudY, 96 + rng() * 26, 26 + rng() * 14, "rgba(255, 255, 255, 0.52)", 6);
  }
}

function drawFarTerrain(context, palette, rng, horizonY, biome, time) {
  if (biome === "coast") {
    const waterGradient = context.createLinearGradient(0, horizonY - 2, 0, horizonY + 34);
    waterGradient.addColorStop(0, mixColor(palette.water, "#ffffff", 0.26));
    waterGradient.addColorStop(1, mixColor(palette.water, "#243546", 0.16));
    context.fillStyle = waterGradient;
    context.fillRect(0, horizonY - 2, SCENE_LOGICAL_WIDTH, 34);
  }

  drawRidgeLayer(context, horizonY - 8, 42, mixColor(palette.ridge, "#ffffff", 0.08), rng, 0.8, time * 0.00006);
  drawRidgeLayer(context, horizonY + 8, 24, palette.ridgeShadow, rng, 1.2, time * 0.00009);

  context.fillStyle = withAlpha(palette.haze, 0.6);
  context.fillRect(0, horizonY - 2, SCENE_LOGICAL_WIDTH, 34);
}

function drawMidground(context, palette, rng, horizonY, biome, time) {
  if (biome === "woodland" || biome === "fern") {
    drawForestBand(context, palette, horizonY + 6, rng, biome === "woodland" ? 15 : 11, time);
    return;
  }

  if (biome === "marsh") {
    drawReedBand(context, palette, horizonY + 12, rng, time);
    drawPools(context, palette, horizonY + 16, rng);
    return;
  }

  if (biome === "badlands" || biome === "volcanic") {
    drawMesaBand(context, palette, horizonY + 8, rng, biome === "volcanic");
    return;
  }

  if (biome === "coast") {
    drawCoastalBand(context, palette, horizonY + 10, rng, time);
  }
}

function drawGround(context, palette, rng, horizonY, biome, time) {
  const groundGradient = context.createLinearGradient(0, horizonY, 0, SCENE_LOGICAL_HEIGHT);
  groundGradient.addColorStop(0, mixColor(palette.groundTop, "#d4d08e", 0.18));
  groundGradient.addColorStop(0.35, palette.groundTop);
  groundGradient.addColorStop(1, palette.groundBottom);
  context.fillStyle = groundGradient;
  context.fillRect(0, horizonY, SCENE_LOGICAL_WIDTH, SCENE_LOGICAL_HEIGHT - horizonY);

  if (biome !== "badlands" && biome !== "volcanic") {
    for (let x = 0; x < SCENE_LOGICAL_WIDTH; x += 3) {
      const bladeHeight = 6 + ((x * 13) % 9);
      context.strokeStyle = x % 2 === 0 ? withAlpha(palette.grass, 0.56) : withAlpha(palette.grassDark, 0.5);
      context.beginPath();
      context.moveTo(x, horizonY + 6);
      context.lineTo(x + ((x % 5) - 2), horizonY + 6 - bladeHeight);
      context.stroke();
    }
  }

  if (biome === "marsh" || biome === "coast") {
    for (let index = 0; index < 4; index += 1) {
      const poolX = 20 + rng() * 420;
      const poolY = horizonY + 34 + rng() * 48;
      drawSoftEllipse(context, poolX, poolY, 36 + rng() * 18, 8 + rng() * 4, withAlpha(palette.water, 0.18));
    }
  }

  for (let index = 0; index < 20; index += 1) {
    const tuftX = rng() * SCENE_LOGICAL_WIDTH;
    const tuftY = horizonY + 8 + rng() * 86;
    const radius = 10 + rng() * 18;
    drawSoftEllipse(context, tuftX, tuftY, radius, radius * 0.45, withAlpha(palette.grassDark, 0.08));
  }

  context.fillStyle = "rgba(10, 8, 6, 0.06)";
  context.fillRect(0, horizonY + 72 + Math.sin(time * 0.0003) * 2, SCENE_LOGICAL_WIDTH, 1);
}

function drawForeground(context, palette, rng, horizonY, biome, time) {
  if (biome === "woodland" || biome === "fern") {
    drawForegroundTree(context, palette, 16, horizonY + 62, 0.88);
  }

  if (biome === "coast") {
    drawForegroundRock(context, palette, 28, horizonY + 66, 1.2);
  }

  if (biome === "badlands" || biome === "volcanic") {
    drawForegroundRock(context, palette, 34, horizonY + 58, 1.45);
  }

  for (let index = 0; index < 6; index += 1) {
    const x = 18 + index * 76 + Math.sin(time * 0.00024 + index) * 2;
    const y = SCENE_LOGICAL_HEIGHT - 8 - (index % 2) * 3;
    drawForegroundFronds(context, palette, x, y, 1 + (index % 3) * 0.18);
  }
}

function drawRidgeLayer(context, baseline, amplitude, color, rng, roughness, offset) {
  context.beginPath();
  context.moveTo(0, baseline);

  for (let x = 0; x <= SCENE_LOGICAL_WIDTH; x += 18) {
    const waveA = Math.sin((x + offset * 80) * 0.024 * roughness + rng() * 2);
    const waveB = Math.sin((x + offset * 130) * 0.011 * roughness + rng() * 3);
    const y = baseline - amplitude * (0.5 + waveA * 0.28 + waveB * 0.22);
    context.lineTo(x, y);
  }

  context.lineTo(SCENE_LOGICAL_WIDTH, SCENE_LOGICAL_HEIGHT);
  context.lineTo(0, SCENE_LOGICAL_HEIGHT);
  context.closePath();
  context.fillStyle = color;
  context.fill();
}

function drawForestBand(context, palette, baseY, rng, treeCount, time) {
  for (let index = 0; index < treeCount; index += 1) {
    const x = 10 + index * (SCENE_LOGICAL_WIDTH / treeCount) + rng() * 14;
    const trunkWidth = 10 + rng() * 10;
    const trunkHeight = 74 + rng() * 68;
    const crownWidth = 44 + rng() * 24;
    const crownHeight = 96 + rng() * 52;

    context.fillStyle = withAlpha(palette.bark, 0.8);
    context.fillRect(x, baseY - trunkHeight, trunkWidth, trunkHeight + 6);

    drawSoftEllipse(
      context,
      x + trunkWidth / 2 + Math.sin(time * 0.00016 + index) * 2,
      baseY - trunkHeight + 12,
      crownWidth,
      crownHeight,
      withAlpha(palette.midLight, 0.16)
    );
    drawSoftEllipse(
      context,
      x + trunkWidth / 2,
      baseY - trunkHeight / 2,
      crownWidth * 0.72,
      crownHeight * 0.9,
      withAlpha(palette.midDark, 0.42)
    );
  }
}

function drawReedBand(context, palette, baseY, rng, time) {
  context.fillStyle = withAlpha(palette.water, 0.34);
  context.fillRect(0, baseY + 8, SCENE_LOGICAL_WIDTH, 18);

  for (let x = 0; x < SCENE_LOGICAL_WIDTH; x += 4) {
    const reedHeight = 24 + ((x * 11) % 20);
    context.strokeStyle = x % 3 === 0 ? withAlpha(palette.midDark, 0.75) : withAlpha(palette.midLight, 0.68);
    context.beginPath();
    context.moveTo(x, baseY + 14);
    context.lineTo(x + Math.sin(time * 0.0002 + x * 0.03) * 2, baseY + 14 - reedHeight);
    context.stroke();
  }
}

function drawPools(context, palette, baseY, rng) {
  for (let index = 0; index < 3; index += 1) {
    const x = 30 + index * 150 + rng() * 16;
    const width = 68 + rng() * 30;
    drawSoftEllipse(context, x, baseY + 12, width, 10 + rng() * 4, withAlpha(palette.water, 0.26));
  }
}

function drawMesaBand(context, palette, baseY, rng, isVolcanic) {
  for (let index = 0; index < 6; index += 1) {
    const x = 12 + index * 74 + rng() * 12;
    const width = 24 + rng() * 24;
    const height = 44 + rng() * 52;
    const color = isVolcanic ? mixColor(palette.rock, "#241b19", 0.22) : palette.rock;
    context.fillStyle = withAlpha(color, 0.72);
    context.fillRect(x, baseY - height, width, height + 12);
    context.fillStyle = withAlpha(mixColor(color, "#f0c38b", 0.2), 0.3);
    context.fillRect(x + width * 0.62, baseY - height, width * 0.2, height + 12);
  }
}

function drawCoastalBand(context, palette, baseY, rng, time) {
  context.fillStyle = withAlpha(palette.water, 0.42);
  context.fillRect(0, baseY + 6, SCENE_LOGICAL_WIDTH, 24);

  for (let index = 0; index < 5; index += 1) {
    const x = 40 + index * 88 + rng() * 20;
    const y = baseY + 14 + Math.sin(time * 0.0004 + index) * 3;
    drawSoftEllipse(context, x, y, 22 + rng() * 12, 5 + rng() * 2, "rgba(255, 255, 255, 0.18)");
  }
}

function drawForegroundTree(context, palette, x, y, scale) {
  context.fillStyle = mixColor(palette.bark, "#000000", 0.25);
  context.fillRect(x, y - 46 * scale, 10 * scale, 54 * scale);
  drawSoftEllipse(context, x + 8 * scale, y - 56 * scale, 30 * scale, 42 * scale, withAlpha(palette.midLight, 0.4));
  drawSoftEllipse(context, x + 8 * scale, y - 52 * scale, 22 * scale, 30 * scale, withAlpha(palette.midDark, 0.72));
}

function drawForegroundRock(context, palette, x, y, scale) {
  context.beginPath();
  context.moveTo(x, y);
  context.lineTo(x + 12 * scale, y - 18 * scale);
  context.lineTo(x + 32 * scale, y - 16 * scale);
  context.lineTo(x + 42 * scale, y);
  context.closePath();
  const gradient = context.createLinearGradient(x, y - 20 * scale, x, y);
  gradient.addColorStop(0, mixColor(palette.rock, "#ffffff", 0.1));
  gradient.addColorStop(1, mixColor(palette.rock, "#1d140f", 0.24));
  context.fillStyle = gradient;
  context.fill();
}

function drawForegroundFronds(context, palette, x, y, scale) {
  context.strokeStyle = withAlpha(palette.grassDark, 0.7);
  context.lineWidth = 2;

  for (let index = 0; index < 5; index += 1) {
    const bend = -10 + index * 5;
    context.beginPath();
    context.moveTo(x, y);
    context.quadraticCurveTo(x + bend * scale, y - 14 * scale, x + bend * scale * 1.5, y - 28 * scale);
    context.stroke();
  }
}

function drawNoise(context, seed, time) {
  const rng = mulberry32(seed + Math.floor(time / 100));
  for (let index = 0; index < 240; index += 1) {
    const x = Math.floor(rng() * SCENE_LOGICAL_WIDTH);
    const y = Math.floor(rng() * SCENE_LOGICAL_HEIGHT);
    const alpha = 0.02 + rng() * 0.045;
    context.fillStyle = rng() > 0.5 ? `rgba(255, 255, 255, ${alpha})` : `rgba(0, 0, 0, ${alpha})`;
    context.fillRect(x, y, 1, 1);
  }
}

function scenePlacement(dino, biome, seed) {
  const shapePlacement = {
    tyrant: { x: 258, y: 224, scale: 1 },
    sauropod: { x: 260, y: 230, scale: 1.02 },
    stego: { x: 244, y: 228, scale: 0.96 },
    hadrosaur: { x: 250, y: 228, scale: 0.92 },
    ceratopsian: { x: 248, y: 232, scale: 0.96 },
    runner: { x: 240, y: 226, scale: 0.8 },
    "croc-runner": { x: 246, y: 232, scale: 0.88 },
  };

  const base = shapePlacement[dino.shape] || shapePlacement.tyrant;
  const offsetX = -14 + ((seed % 23) - 11);
  const offsetY = biome === "marsh" ? 4 : biome === "coast" ? 2 : 0;

  return {
    x: base.x + offsetX,
    y: base.y + offsetY,
    scale: base.scale * dino.renderScale,
  };
}

function previewScaleForShape(shape) {
  const scales = {
    tyrant: 0.76,
    sauropod: 0.7,
    stego: 0.72,
    hadrosaur: 0.74,
    ceratopsian: 0.76,
    runner: 0.68,
    "croc-runner": 0.7,
  };

  return scales[shape] || 0.74;
}

function drawDinosaur(context, dino, placement, options) {
  const bodyColor = dino.palette.body;
  const accentColor = dino.palette.accent;
  const crestColor = dino.palette.crest;
  const phase = options.phase || 0;
  const bob = Math.sin(phase) * 2.6;
  const scale = placement.scale;
  const shadowOpacity = options.shadowOpacity ?? 0.16;

  context.save();
  context.translate(placement.x, placement.y + bob);
  context.scale(scale, scale);

  drawShadow(context, 0, 0, shapeShadowWidth(dino.shape), 14, shadowOpacity);

  const palette = {
    body: bodyColor,
    accent: accentColor,
    crest: crestColor,
    shadow: mixColor(bodyColor, "#000000", 0.4),
    light: mixColor(bodyColor, "#ffd9ad", 0.18),
  };

  const drawByShape = {
    tyrant: drawTheropod,
    sauropod: drawSauropod,
    stego: drawStegosaur,
    hadrosaur: drawHadrosaur,
    ceratopsian: drawCeratopsian,
    runner: drawRunner,
    "croc-runner": drawCrocRunner,
  };

  drawByShape[dino.shape](context, palette, phase, options.monochrome);
  context.restore();
}

function shapeShadowWidth(shape) {
  const widths = {
    tyrant: 82,
    sauropod: 94,
    stego: 90,
    hadrosaur: 88,
    ceratopsian: 92,
    runner: 62,
    "croc-runner": 78,
  };
  return widths[shape] || 82;
}

function drawTheropod(context, palette, phase, monochrome) {
  const lean = Math.sin(phase) * 2;
  drawTail(context, [
    [-16, -34],
    [-86, -54 + lean],
    [-134, -42],
  ], 18, 5, palette.body, monochrome);

  drawEllipseBody(context, -20, -38, 54, 28, palette.body, palette.shadow, 0.05, monochrome);
  drawEllipseBody(context, 18, -42, 34, 22, mixColor(palette.body, palette.accent, 0.22), palette.shadow, -0.12, monochrome);

  drawLimb(context, [[-12, -18], [-10, 28], [-18, 82]], 18, palette.accent, monochrome);
  drawLimb(context, [[12, -14], [20, 30], [16, 84]], 16, palette.body, monochrome);
  drawLimb(context, [[18, -56], [44, -88], [70, -112 + lean]], 18, palette.body, monochrome);

  drawTheropodHead(context, 90, -118 + lean, palette, monochrome, 1);
  drawLimb(context, [[18, -42], [38, -36]], 6, palette.accent, monochrome);
  drawLimb(context, [[16, -34], [34, -24]], 5, palette.accent, monochrome);
  sprinkleTexture(context, -18, -38, 40, 22, palette.accent, monochrome, 20);
}

function drawSauropod(context, palette, phase, monochrome) {
  const neckLift = Math.sin(phase * 0.7) * 4;
  drawTail(context, [
    [-44, -34],
    [-112, -48],
    [-160, -34],
  ], 16, 4, palette.accent, monochrome);

  drawEllipseBody(context, -8, -40, 70, 28, palette.body, palette.shadow, 0.02, monochrome);
  drawEllipseBody(context, 42, -40, 28, 20, palette.body, palette.shadow, 0.06, monochrome);

  drawLimb(context, [[-42, -12], [-42, 76]], 16, palette.accent, monochrome);
  drawLimb(context, [[-10, -12], [-8, 80]], 18, palette.body, monochrome);
  drawLimb(context, [[24, -18], [28, 78]], 16, palette.body, monochrome);
  drawLimb(context, [[54, -18], [58, 76]], 14, palette.accent, monochrome);

  drawNeck(context, [[54, -58], [76, -112 - neckLift], [104, -156 - neckLift]], 20, 10, palette.body, monochrome);
  drawSauropodHead(context, 116, -166 - neckLift, palette, monochrome);
  sprinkleTexture(context, -6, -42, 48, 18, palette.accent, monochrome, 16);
}

function drawStegosaur(context, palette, phase, monochrome) {
  const tailSwing = Math.sin(phase * 1.1) * 8;
  drawEllipseBody(context, -8, -34, 74, 26, palette.body, palette.shadow, -0.04, monochrome);
  drawStegoHead(context, -94, -30, palette, monochrome);
  drawTail(context, [
    [56, -26],
    [122, -34 + tailSwing * 0.2],
    [164, -22 + tailSwing * 0.3],
  ], 16, 4, palette.accent, monochrome);

  drawLimb(context, [[-42, -8], [-44, 78]], 14, palette.accent, monochrome);
  drawLimb(context, [[-6, -8], [-10, 84]], 14, palette.body, monochrome);
  drawLimb(context, [[28, -8], [30, 80]], 14, palette.body, monochrome);
  drawLimb(context, [[58, -8], [60, 78]], 12, palette.accent, monochrome);

  const plateXs = [-52, -26, -4, 22, 44];
  plateXs.forEach((plateX, index) => {
    const height = 22 + index * 2;
    drawPlate(context, plateX, -64 - index * 2, 16, height, palette.crest, monochrome);
  });

  drawSpike(context, 156, -18, 18, palette.crest, monochrome);
  drawSpike(context, 148, -8, 16, palette.crest, monochrome);
}

function drawHadrosaur(context, palette, phase, monochrome) {
  const crestLift = Math.sin(phase * 0.9) * 2;
  drawTail(context, [
    [-52, -34],
    [-122, -44],
    [-170, -28],
  ], 16, 4, palette.accent, monochrome);

  drawEllipseBody(context, -10, -36, 68, 28, palette.body, palette.shadow, 0, monochrome);
  drawLimb(context, [[-28, -12], [-22, 34], [-26, 82]], 16, palette.accent, monochrome);
  drawLimb(context, [[6, -12], [12, 34], [12, 84]], 16, palette.body, monochrome);
  drawLimb(context, [[42, -18], [68, -64], [86, -88 + crestLift]], 18, palette.body, monochrome);
  drawHadrosaurHead(context, 106, -92 + crestLift, palette, monochrome);
  drawLimb(context, [[24, -34], [42, -26]], 6, palette.accent, monochrome);
  sprinkleTexture(context, -6, -34, 46, 18, palette.accent, monochrome, 18);
}

function drawCeratopsian(context, palette, phase, monochrome) {
  const nod = Math.sin(phase * 0.8) * 3;
  drawTail(context, [
    [-66, -26],
    [-108, -20],
    [-142, -12],
  ], 12, 3, palette.accent, monochrome);

  drawEllipseBody(context, -8, -34, 74, 30, palette.body, palette.shadow, 0.02, monochrome);
  drawFrillHead(context, 86, -46 + nod, palette, monochrome);
  drawLimb(context, [[-36, -8], [-32, 80]], 18, palette.accent, monochrome);
  drawLimb(context, [[-2, -8], [0, 84]], 18, palette.body, monochrome);
  drawLimb(context, [[40, -6], [42, 80]], 16, palette.body, monochrome);
  drawLimb(context, [[66, -4], [68, 74]], 14, palette.accent, monochrome);
  sprinkleTexture(context, -6, -34, 52, 18, palette.accent, monochrome, 16);
}

function drawRunner(context, palette, phase, monochrome) {
  const hop = Math.sin(phase * 1.8) * 3;
  drawTail(context, [
    [-12, -28],
    [-72, -42 + hop],
    [-114, -30],
  ], 10, 3, palette.accent, monochrome);

  drawEllipseBody(context, 6, -32, 38, 18, palette.body, palette.shadow, 0, monochrome);
  drawLimb(context, [[-4, -14], [-8, 22], [-18, 78]], 12, palette.accent, monochrome);
  drawLimb(context, [[18, -14], [28, 30], [24, 80]], 10, palette.body, monochrome);
  drawLimb(context, [[20, -46], [40, -78], [54, -96]], 10, palette.body, monochrome);
  drawTheropodHead(context, 66, -102, palette, monochrome, 0.7);
}

function drawCrocRunner(context, palette, phase, monochrome) {
  const sway = Math.sin(phase * 0.8) * 2;
  drawTail(context, [
    [-56, -24],
    [-128, -28 + sway],
    [-176, -18],
  ], 12, 4, palette.accent, monochrome);

  drawEllipseBody(context, -10, -28, 74, 22, palette.body, palette.shadow, 0, monochrome);
  drawLimb(context, [[-42, -6], [-46, 58]], 12, palette.accent, monochrome);
  drawLimb(context, [[-6, -6], [-4, 60]], 12, palette.body, monochrome);
  drawLimb(context, [[32, -6], [34, 58]], 12, palette.body, monochrome);
  drawLimb(context, [[64, -6], [66, 54]], 10, palette.accent, monochrome);
  drawCrocHead(context, 96, -34 + sway, palette, monochrome);
  sprinkleTexture(context, -4, -28, 54, 12, palette.accent, monochrome, 18);
}

function drawShadow(context, x, y, radiusX, radiusY, opacity) {
  drawSoftEllipse(context, x, y + 2, radiusX, radiusY, `rgba(0, 0, 0, ${opacity})`);
}

function drawEllipseBody(context, x, y, radiusX, radiusY, topColor, bottomColor, rotation, monochrome) {
  context.save();
  context.translate(x, y);
  context.rotate(rotation);

  const gradient = context.createLinearGradient(0, -radiusY, 0, radiusY);
  gradient.addColorStop(0, monochrome ? topColor : mixColor(topColor, "#ffe5bc", 0.16));
  gradient.addColorStop(0.55, topColor);
  gradient.addColorStop(1, mixColor(bottomColor, "#000000", 0.08));

  context.beginPath();
  context.ellipse(0, 0, radiusX, radiusY, 0, 0, Math.PI * 2);
  context.fillStyle = gradient;
  context.fill();

  context.strokeStyle = withAlpha(mixColor(bottomColor, "#000000", 0.2), 0.4);
  context.lineWidth = 1.2;
  context.stroke();

  context.beginPath();
  context.ellipse(-radiusX * 0.16, -radiusY * 0.28, radiusX * 0.55, radiusY * 0.28, 0, 0, Math.PI * 2);
  context.fillStyle = withAlpha("#ffffff", monochrome ? 0.08 : 0.12);
  context.fill();
  context.restore();
}

function drawLimb(context, points, width, baseColor, monochrome) {
  const gradient = context.createLinearGradient(points[0][0], points[0][1] - width, points[points.length - 1][0], points[points.length - 1][1] + width);
  gradient.addColorStop(0, monochrome ? baseColor : mixColor(baseColor, "#ffe2b0", 0.14));
  gradient.addColorStop(1, mixColor(baseColor, "#000000", 0.22));

  context.beginPath();
  context.moveTo(points[0][0], points[0][1]);
  for (let index = 1; index < points.length; index += 1) {
    context.lineTo(points[index][0], points[index][1]);
  }

  context.lineWidth = width;
  context.lineCap = "round";
  context.lineJoin = "round";
  context.strokeStyle = gradient;
  context.stroke();

  context.lineWidth = Math.max(1.4, width * 0.26);
  context.strokeStyle = withAlpha("#ffffff", monochrome ? 0.08 : 0.16);
  context.stroke();
}

function drawNeck(context, points, startWidth, endWidth, baseColor, monochrome) {
  drawTail(context, points, startWidth, endWidth, baseColor, monochrome);
}

function drawTail(context, points, startWidth, endWidth, baseColor, monochrome) {
  for (let index = 0; index < points.length - 1; index += 1) {
    const from = points[index];
    const to = points[index + 1];
    const width = lerp(startWidth, endWidth, index / Math.max(points.length - 2, 1));
    const segmentColor = index === 0 ? baseColor : mixColor(baseColor, "#000000", 0.12 * index);
    drawLimb(context, [from, to], width, segmentColor, monochrome);
  }
}

function drawTheropodHead(context, x, y, palette, monochrome, scale) {
  context.save();
  context.translate(x, y);
  context.scale(scale, scale);

  context.beginPath();
  context.moveTo(-4, -10);
  context.lineTo(24, -14);
  context.lineTo(42, -2);
  context.lineTo(34, 10);
  context.lineTo(0, 12);
  context.closePath();
  context.fillStyle = createPartGradient(context, -4, -14, 42, 12, palette.body, palette.accent, monochrome);
  context.fill();

  context.beginPath();
  context.moveTo(8, 2);
  context.lineTo(40, 0);
  context.lineTo(34, 10);
  context.closePath();
  context.fillStyle = monochrome ? palette.accent : mixColor(palette.accent, "#7d1204", 0.18);
  context.fill();

  if (!monochrome) {
    context.fillStyle = "#6d1a11";
    context.beginPath();
    context.moveTo(8, 2);
    context.lineTo(36, 2);
    context.lineTo(26, 8);
    context.closePath();
    context.fill();

    context.fillStyle = "#f4e8d5";
    for (let tooth = 0; tooth < 5; tooth += 1) {
      context.fillRect(12 + tooth * 5, 2, 1, 4);
    }
  }

  context.fillStyle = monochrome ? "#efe9de" : "#100e0c";
  context.fillRect(20, -8, 2, 2);
  context.restore();
}

function drawSauropodHead(context, x, y, palette, monochrome) {
  context.save();
  context.translate(x, y);
  drawEllipseBody(context, 0, 0, 12, 8, palette.body, palette.accent, 0, monochrome);
  context.fillStyle = monochrome ? "#efe9de" : "#1a120d";
  context.fillRect(4, -2, 2, 2);
  context.restore();
}

function drawHadrosaurHead(context, x, y, palette, monochrome) {
  context.save();
  context.translate(x, y);
  drawEllipseBody(context, 0, 0, 18, 10, palette.body, palette.accent, 0, monochrome);

  context.beginPath();
  context.moveTo(8, -16);
  context.lineTo(24, -28);
  context.lineTo(30, -10);
  context.lineTo(12, -6);
  context.closePath();
  context.fillStyle = createPartGradient(context, 8, -28, 30, -6, palette.crest, palette.accent, monochrome);
  context.fill();

  context.fillStyle = monochrome ? "#efe9de" : "#19130e";
  context.fillRect(4, -2, 2, 2);
  context.restore();
}

function drawStegoHead(context, x, y, palette, monochrome) {
  context.save();
  context.translate(x, y);
  drawEllipseBody(context, 0, 0, 12, 8, palette.accent, palette.accent, 0, monochrome);

  context.beginPath();
  context.moveTo(10, -2);
  context.lineTo(26, 0);
  context.lineTo(8, 6);
  context.closePath();
  context.fillStyle = monochrome ? palette.accent : createPartGradient(context, 8, -2, 26, 6, palette.crest, palette.accent, false);
  context.fill();

  context.fillStyle = monochrome ? "#efe9de" : "#1a120d";
  context.fillRect(2, -3, 2, 2);
  context.restore();
}

function drawFrillHead(context, x, y, palette, monochrome) {
  context.save();
  context.translate(x, y);

  context.beginPath();
  context.moveTo(-12, -18);
  context.lineTo(24, -28);
  context.lineTo(42, -8);
  context.lineTo(22, 18);
  context.lineTo(-8, 10);
  context.closePath();
  context.fillStyle = createPartGradient(context, -12, -28, 42, 18, palette.crest, palette.accent, monochrome);
  context.fill();

  drawEllipseBody(context, -4, 0, 20, 14, palette.body, palette.accent, 0, monochrome);

  context.strokeStyle = monochrome ? palette.accent : mixColor(palette.crest, "#ffffff", 0.08);
  context.lineWidth = 4;
  context.beginPath();
  context.moveTo(10, -6);
  context.lineTo(28, -18);
  context.moveTo(4, -2);
  context.lineTo(20, -10);
  context.stroke();

  context.fillStyle = monochrome ? "#efe9de" : "#1a120d";
  context.fillRect(2, -4, 2, 2);
  context.restore();
}

function drawCrocHead(context, x, y, palette, monochrome) {
  context.save();
  context.translate(x, y);

  context.beginPath();
  context.moveTo(-8, -12);
  context.lineTo(30, -10);
  context.lineTo(48, -4);
  context.lineTo(30, 6);
  context.lineTo(-4, 8);
  context.closePath();
  context.fillStyle = createPartGradient(context, -8, -12, 48, 8, palette.body, palette.accent, monochrome);
  context.fill();

  context.beginPath();
  context.moveTo(8, 2);
  context.lineTo(44, 0);
  context.lineTo(28, 6);
  context.closePath();
  context.fillStyle = monochrome ? palette.accent : mixColor(palette.accent, "#000000", 0.14);
  context.fill();

  context.fillStyle = monochrome ? "#efe9de" : "#140f0b";
  context.fillRect(16, -6, 2, 2);
  context.restore();
}

function drawPlate(context, x, y, width, height, color, monochrome) {
  context.beginPath();
  context.moveTo(x - width / 2, y + height);
  context.lineTo(x, y);
  context.lineTo(x + width / 2, y + height);
  context.closePath();
  context.fillStyle = monochrome ? color : createPartGradient(context, x - width / 2, y, x + width / 2, y + height, mixColor(color, "#ffe0ab", 0.18), mixColor(color, "#4b2519", 0.18), false);
  context.fill();
}

function drawSpike(context, x, y, length, color, monochrome) {
  context.save();
  context.translate(x, y);
  context.rotate(-0.4);
  context.beginPath();
  context.moveTo(0, 0);
  context.lineTo(length, -3);
  context.lineTo(length - 4, 4);
  context.closePath();
  context.fillStyle = monochrome ? color : createPartGradient(context, 0, -3, length, 4, mixColor(color, "#fff0c8", 0.2), mixColor(color, "#411f18", 0.2), false);
  context.fill();
  context.restore();
}

function sprinkleTexture(context, x, y, radiusX, radiusY, color, monochrome, count) {
  if (monochrome) {
    return;
  }

  const rng = mulberry32(hashString(`${x}:${y}:${radiusX}:${radiusY}:${count}`));
  context.fillStyle = withAlpha(color, 0.18);
  for (let index = 0; index < count; index += 1) {
    const dotX = x - radiusX / 2 + rng() * radiusX;
    const dotY = y - radiusY / 2 + rng() * radiusY;
    context.fillRect(dotX, dotY, 2, 2);
  }
}

function drawSoftCloud(context, x, y, width, height, color, blobCount) {
  for (let index = 0; index < blobCount; index += 1) {
    const offsetX = (index / Math.max(blobCount - 1, 1)) * width - width / 2;
    const offsetY = Math.sin(index * 1.4) * 4;
    drawSoftEllipse(context, x + offsetX, y + offsetY, width * 0.32, height * 0.6, color);
  }
}

function drawSoftCircle(context, x, y, radius, color) {
  drawSoftEllipse(context, x, y, radius, radius, color);
}

function drawSoftEllipse(context, x, y, radiusX, radiusY, color) {
  const gradient = context.createRadialGradient(x, y, 0, x, y, Math.max(radiusX, radiusY));
  gradient.addColorStop(0, color);
  gradient.addColorStop(1, "rgba(255, 255, 255, 0)");
  context.fillStyle = gradient;
  context.beginPath();
  context.ellipse(x, y, radiusX, radiusY, 0, 0, Math.PI * 2);
  context.fill();
}

function createPartGradient(context, x1, y1, x2, y2, topColor, bottomColor, monochrome) {
  const gradient = context.createLinearGradient(x1, y1, x2, y2);
  gradient.addColorStop(0, monochrome ? topColor : mixColor(topColor, "#ffe3c0", 0.12));
  gradient.addColorStop(1, mixColor(bottomColor, "#000000", 0.16));
  return gradient;
}

function mixColor(colorA, colorB, amount) {
  const a = hexToRgb(colorA);
  const b = hexToRgb(colorB);
  const mixed = {
    r: Math.round(a.r + (b.r - a.r) * amount),
    g: Math.round(a.g + (b.g - a.g) * amount),
    b: Math.round(a.b + (b.b - a.b) * amount),
  };

  return `rgb(${mixed.r}, ${mixed.g}, ${mixed.b})`;
}

function withAlpha(color, alpha) {
  if (color.startsWith("rgba")) {
    return color;
  }

  const { r, g, b } = hexToRgb(color);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

function hexToRgb(color) {
  if (color.startsWith("rgb")) {
    const values = color.match(/\d+/g).map(Number);
    return {
      r: values[0],
      g: values[1],
      b: values[2],
    };
  }

  const normalized = color.replace("#", "");
  const value = normalized.length === 3
    ? normalized
        .split("")
        .map((segment) => segment + segment)
        .join("")
    : normalized;

  const intValue = Number.parseInt(value, 16);
  return {
    r: (intValue >> 16) & 255,
    g: (intValue >> 8) & 255,
    b: intValue & 255,
  };
}

function lerp(start, end, amount) {
  return start + (end - start) * amount;
}

function hashString(input) {
  let hash = 0;
  for (let index = 0; index < input.length; index += 1) {
    hash = (hash << 5) - hash + input.charCodeAt(index);
    hash |= 0;
  }
  return Math.abs(hash);
}

function mulberry32(seed) {
  let value = seed || 1;
  return () => {
    value |= 0;
    value = (value + 0x6d2b79f5) | 0;
    let result = Math.imul(value ^ (value >>> 15), 1 | value);
    result = (result + Math.imul(result ^ (result >>> 7), 61 | result)) ^ result;
    return ((result ^ (result >>> 14)) >>> 0) / 4294967296;
  };
}
