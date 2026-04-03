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
      body: "#6350a4",
      accent: "#48307e",
      crest: "#2e1b59",
    },
    shape: "runner",
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
      body: "#7a5c3d",
      accent: "#573b25",
      crest: "#9d7b54",
    },
    shape: "sauropod",
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
      body: "#86513c",
      accent: "#613524",
      crest: "#a47252",
    },
    shape: "croc-runner",
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
      body: "#a56939",
      accent: "#7d471f",
      crest: "#cf8b52",
    },
    shape: "stego",
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
      body: "#7d6f4f",
      accent: "#594d35",
      crest: "#b49f72",
    },
    shape: "sauropod",
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
      body: "#8a3f2d",
      accent: "#63291c",
      crest: "#d45a31",
    },
    shape: "tyrant",
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
      body: "#5f8c6d",
      accent: "#3a5f49",
      crest: "#d5b35b",
    },
    shape: "hadrosaur",
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
      body: "#7f6947",
      accent: "#4d3a24",
      crest: "#b59058",
    },
    shape: "ceratopsian",
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
      body: "#7a3328",
      accent: "#4b1b15",
      crest: "#c45d3f",
    },
    shape: "tyrant",
  },
];

const STORAGE_KEY = "dino-safari-tribute-state-v1";

const state = {
  periodId: "jurassic",
  x: 0,
  y: 0,
  visibleDinoId: null,
  captured: new Set(),
  log: [],
  encounterToken: 0,
};

const elements = {
  periodSwitcher: document.getElementById("period-switcher"),
  scenePeriod: document.getElementById("scene-period"),
  sceneLocation: document.getElementById("scene-location"),
  targetDino: document.getElementById("target-dino"),
  targetHint: document.getElementById("target-hint"),
  viewport: document.getElementById("viewport"),
  farLayer: document.getElementById("far-layer"),
  midLayer: document.getElementById("mid-layer"),
  groundLayer: document.getElementById("ground-layer"),
  dinoStage: document.getElementById("dino-stage"),
  flashOverlay: document.getElementById("flash-overlay"),
  messageBanner: document.getElementById("message-banner"),
  contactName: document.getElementById("contact-name"),
  contactStatus: document.getElementById("contact-status"),
  silhouetteCard: document.getElementById("silhouette-card"),
  signalValue: document.getElementById("signal-value"),
  signalFill: document.getElementById("signal-fill"),
  coordinates: document.getElementById("coordinates"),
  radarGrid: document.getElementById("radar-grid"),
  radarHint: document.getElementById("radar-hint"),
  captureCount: document.getElementById("capture-count"),
  captureStrip: document.getElementById("capture-strip"),
  guideDialog: document.getElementById("guide-dialog"),
  guideGrid: document.getElementById("guide-grid"),
  logList: document.getElementById("log-list"),
  journalPanel: document.getElementById("journal-panel"),
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
  clearLog: document.getElementById("clear-log-btn"),
};

const byPeriod = PERIODS.reduce((accumulator, period) => {
  accumulator[period.id] = period;
  return accumulator;
}, {});

const dinoById = DINOSAURS.reduce((accumulator, dino) => {
  accumulator[dino.id] = dino;
  return accumulator;
}, {});

init();

function init() {
  loadSavedProgress();
  renderPeriodButtons();
  bindEvents();
  setPeriod(state.periodId, true, true);
  addLog("Field rig online. Gate calibration complete.");
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
  elements.periodSwitcher.addEventListener("click", (event) => {
    const button = event.target.closest(".period-btn");
    if (!button) {
      return;
    }

    setPeriod(button.dataset.period);
  });

  buttons.north.addEventListener("click", () => move(0, -1));
  buttons.south.addEventListener("click", () => move(0, 1));
  buttons.east.addEventListener("click", () => move(1, 0));
  buttons.west.addEventListener("click", () => move(-1, 0));
  buttons.scan.addEventListener("click", scanArea);
  buttons.photo.addEventListener("click", takePhoto);
  buttons.guide.addEventListener("click", () => {
    renderGuide();
    elements.guideDialog.showModal();
  });
  buttons.closeGuide.addEventListener("click", () => elements.guideDialog.close());
  buttons.journal.addEventListener("click", () => {
    elements.journalPanel.scrollIntoView({ behavior: "smooth", block: "start" });
  });
  buttons.clearLog.addEventListener("click", () => {
    state.log = [];
    renderLog();
    addLog("Journal wiped. Fresh page ready.");
  });

  window.addEventListener("keydown", (event) => {
    if (elements.guideDialog.open && event.key === "Escape") {
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
      move(...directionMap[event.key]);
      return;
    }

    if (event.key.toLowerCase() === "s") {
      scanArea();
    }

    if (event.key.toLowerCase() === "p") {
      takePhoto();
    }
  });
}

function setPeriod(periodId, force = false, preservePosition = false) {
  if (!force && periodId === state.periodId) {
    return;
  }

  state.periodId = periodId;
  if (!preservePosition) {
    state.x = 0;
    state.y = 0;
  }
  state.visibleDinoId = null;

  Array.from(elements.periodSwitcher.children).forEach((button) => {
    button.classList.toggle("is-active", button.dataset.period === periodId);
  });

  const period = currentPeriod();
  addLog(`Temporal gate shifted to the ${period.name}.`);
  persistState();
  renderScene();
  queueEncounter(true);
}

function move(dx, dy) {
  const nextX = clamp(state.x + dx, 0, 4);
  const nextY = clamp(state.y + dy, 0, 4);

  if (nextX === state.x && nextY === state.y) {
    updateMessage("Thick terrain blocks the rover here. Try another direction.");
    playTone("blocked");
    return;
  }

  state.x = nextX;
  state.y = nextY;
  state.visibleDinoId = null;

  renderScene();
  addLog(`Moved to ${locationName()} in the ${currentPeriod().name}.`);
  persistState();
  queueEncounter(false);
}

function queueEncounter(isPeriodChange) {
  state.encounterToken += 1;
  const encounterToken = state.encounterToken;
  const matchingDino = findDinoAt(state.periodId, state.x, state.y);
  const nearDino = nearestDinoForPeriod();

  renderStatus(nearDino);

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

    state.visibleDinoId = matchingDino.id;
    renderStatus(matchingDino);
    renderDino();
    updateMessage(`${matchingDino.name} entered the clearing. Take the shot now.`);
    addLog(`${matchingDino.name} sighted at ${locationName()}.`);
    playTone("encounter");
  }, isPeriodChange ? 500 : 650);
}

function scanArea() {
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
  if (!state.visibleDinoId) {
    updateMessage("You snapped empty scenery. Wait for a full sighting first.");
    addLog(`Empty photo taken at ${locationName()}.`);
    triggerFlash();
    playTone("blocked");
    return;
  }

  const dino = dinoById[state.visibleDinoId];
  const isNewCapture = !state.captured.has(dino.id);
  state.captured.add(dino.id);

  triggerFlash();
  renderGuide();
  renderCaptureStrip();
  renderStatus(dino);

  updateMessage(
    isNewCapture
      ? `${dino.name} added to the field guide. Excellent shot.`
      : `${dino.name} photographed again. Album entry updated.`
  );
  addLog(`${dino.name} photographed at ${locationName()}.`);
  persistState();
  playTone("photo");
}

function renderScene() {
  const period = currentPeriod();
  const biome = currentBiome();
  const nearest = nearestDinoForPeriod();

  elements.scenePeriod.textContent = period.label;
  elements.sceneLocation.textContent = locationName();
  elements.viewport.dataset.biome = biome;
  elements.coordinates.textContent = `X ${state.x + 1} / Y ${state.y + 1}`;

  const target = nextTargetForPeriod();
  elements.targetDino.textContent = target ? target.name : "Era complete";
  elements.targetHint.textContent = target ? target.hint : "Every animal in this age has been photographed.";

  paintSceneLayers(period.id, biome);
  renderDino();
  renderRadar(nearest);
  renderCaptureStrip();
  renderGuide();
}

function renderDino() {
  elements.dinoStage.innerHTML = "";

  if (!state.visibleDinoId) {
    return;
  }

  const dino = dinoById[state.visibleDinoId];
  const art = createDinoMarkup(dino, false);
  elements.dinoStage.innerHTML = `
    <div class="dino is-visible">${art}</div>
    <div class="dino-label">${dino.name}</div>
  `;
}

function renderStatus(referenceDino) {
  const visible = state.visibleDinoId ? dinoById[state.visibleDinoId] : null;
  const dino = visible || referenceDino;
  const signal = dino ? signalPercent(dino) : 12;

  if (!dino) {
    elements.contactName.textContent = "No dinosaur visible";
    elements.contactStatus.textContent = "Searching";
    elements.silhouetteCard.innerHTML = `<p>Keep moving. The next clearing could hold a surprise.</p>`;
  } else {
    elements.contactName.textContent = visible ? dino.name : `Possible ${dino.name}`;
    elements.contactStatus.textContent = visible ? "Visible" : "Tracking";
    elements.silhouetteCard.innerHTML = createDinoMarkup(dino, true);
  }

  elements.signalFill.style.width = `${signal}%`;
  elements.signalValue.textContent = `${signal}%`;
  elements.captureCount.textContent = `${state.captured.size} / ${DINOSAURS.length} captured`;
  elements.radarHint.textContent = radarHint(referenceDino || visible);
}

function renderRadar(referenceDino) {
  const nearest = referenceDino || nearestDinoForPeriod();
  elements.radarGrid.innerHTML = "";

  for (let y = 0; y < 5; y += 1) {
    for (let x = 0; x < 5; x += 1) {
      const cell = document.createElement("div");
      cell.className = "radar-cell";
      cell.textContent = `${x + 1}:${y + 1}`;

      if (x === state.x && y === state.y) {
        cell.classList.add("is-player");
        cell.textContent = "YOU";
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
    entry.innerHTML = `
      <div class="guide-art">${createDinoMarkup(dino, !captured)}</div>
      <div>
        <p class="period-badge">${labelForPeriod(dino.period)}</p>
        <h3>${captured ? dino.name : "Unknown Species"}</h3>
      </div>
      <p class="guide-stat"><strong>Diet:</strong> ${captured ? dino.diet : "Classified"}</p>
      <p class="guide-stat"><strong>Size:</strong> ${captured ? dino.size : "Classified"}</p>
      <p class="guide-note">${captured ? dino.notes : "Photograph this animal to unlock its entry."}</p>
    `;
    elements.guideGrid.append(entry);
  });
}

function renderLog() {
  elements.logList.innerHTML = "";

  state.log.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    elements.logList.append(li);
  });
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
  const percent = 100 - distance * 22;
  return clamp(percent, 12, 100);
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

function triggerFlash() {
  elements.flashOverlay.classList.remove("is-active");
  void elements.flashOverlay.offsetWidth;
  elements.flashOverlay.classList.add("is-active");
}

function createDinoMarkup(dino, silhouetteOnly) {
  const fill = silhouetteOnly ? "#12100f" : dino.palette.body;
  const accent = silhouetteOnly ? "#12100f" : dino.palette.accent;
  const crest = silhouetteOnly ? "#12100f" : dino.palette.crest;
  const shapeFns = {
    tyrant: tyrantSvg,
    stego: stegoSvg,
    sauropod: sauropodSvg,
    hadrosaur: hadrosaurSvg,
    ceratopsian: ceratopsianSvg,
    runner: runnerSvg,
    "croc-runner": crocRunnerSvg,
  };

  return shapeFns[dino.shape]({ fill, accent, crest });
}

function tyrantSvg({ fill, accent, crest }) {
  return `
    <svg viewBox="0 0 280 180" role="img" aria-label="Theropod">
      <path fill="${fill}" d="M48 132c18-25 39-43 66-52l39-10 24-24 41 4 24 17-6 16-19 2-8-7-16 5-15 17-28 15-26 8-2 43h-17l-2-35-16 4-7 31H85l5-31-23 5-18 14H26l22-22z"/>
      <path fill="${accent}" d="M176 73l33-2-14 11-18 4z"/>
      <circle cx="214" cy="65" r="3" fill="${crest}" />
      <path fill="${crest}" d="M92 88l23 9-22 10z"/>
    </svg>
  `;
}

function stegoSvg({ fill, accent, crest }) {
  return `
    <svg viewBox="0 0 280 180" role="img" aria-label="Stegosaur">
      <path fill="${fill}" d="M42 116c16-17 43-29 84-29h36l22 9 27 17-4 14h-21l-11-7-12 41h-14l3-37h-31l-10 37H98l8-39-21-1-8 40H64l1-34-20 1-16 15H14l19-24z"/>
      <path fill="${crest}" d="M90 88l10-28 14 28zm26-4l11-30 16 31zm32 0l9-26 13 28zm27 4l7-22 12 24z"/>
      <path fill="${accent}" d="M210 112l34 14-13 9-28-10z"/>
    </svg>
  `;
}

function sauropodSvg({ fill, accent, crest }) {
  return `
    <svg viewBox="0 0 280 180" role="img" aria-label="Sauropod">
      <path fill="${fill}" d="M39 118c18-21 36-32 65-36l53-1 12-34 15-24 16 1-4 21-12 16-4 34 12 17 3 36h-15l-8-33-52-5-2 40h-14l-5-39-32 4-5 35H60l1-34-20 0-16 13H12l27-26z"/>
      <path fill="${accent}" d="M172 48l15 0-2 18-17 14 2-20z"/>
      <circle cx="193" cy="25" r="3" fill="${crest}" />
    </svg>
  `;
}

function hadrosaurSvg({ fill, accent, crest }) {
  return `
    <svg viewBox="0 0 280 180" role="img" aria-label="Hadrosaur">
      <path fill="${fill}" d="M45 121c16-20 37-34 73-41l45-5 17-23 28 1 16 14-4 15-20 4-8-5-8 4-12 12 11 25 1 38h-15l-7-34-41-2-3 36h-14l-4-36-28 4-6 32H69l2-31-22 2-16 13H19l26-23z"/>
      <path fill="${crest}" d="M194 49c6-16 12-20 18-20 8 0 15 7 15 16 0 9-8 12-17 12h-18z"/>
      <path fill="${accent}" d="M121 86l42-5-32 24z"/>
    </svg>
  `;
}

function ceratopsianSvg({ fill, accent, crest }) {
  return `
    <svg viewBox="0 0 280 180" role="img" aria-label="Ceratopsian">
      <path fill="${fill}" d="M37 121c13-20 39-35 73-35h47l25-17 27 8 13 19-3 12-16 3-9-8-17 0-13 17-15 7 1 34h-15l-4-31-34-1-8 32h-15l2-32-25 0-8 32H58l0-30-18 0-14 12H14l23-22z"/>
      <path fill="${crest}" d="M175 73l24-21 21 4 13 18-12 7-17-3z"/>
      <path fill="${accent}" d="M201 82l13 16-7 8-16-18zm-18-5l-9 25-6-24z"/>
      <circle cx="210" cy="74" r="3" fill="${fill}" />
    </svg>
  `;
}

function runnerSvg({ fill, accent, crest }) {
  return `
    <svg viewBox="0 0 280 180" role="img" aria-label="Runner">
      <path fill="${fill}" d="M58 131c13-22 27-38 48-50l29-9 18-20 29 2 17 12-3 11-15 3-6-4-8 3-10 12-21 15-12 20 0 35h-11l-6-27-11 4-7 24H98l5-28-12 8-17 20H58l12-28-17 17H39l19-20z"/>
      <path fill="${accent}" d="M149 79l26 0-11 8-16 5z"/>
      <circle cx="182" cy="62" r="2.5" fill="${crest}" />
    </svg>
  `;
}

function crocRunnerSvg({ fill, accent, crest }) {
  return `
    <svg viewBox="0 0 280 180" role="img" aria-label="Pseudosuchian">
      <path fill="${fill}" d="M36 128c17-15 39-28 73-34l56-4 25-15 37 3 13 13-5 10-18 2-8-4-16 4-17 13-33 12-5 33h-13l-2-31-32-2-5 33H79l2-32-23 3-10 26H35l8-24-22 17H11l25-23z"/>
      <path fill="${accent}" d="M192 86l28 1-15 9-18 2z"/>
      <path fill="${crest}" d="M92 98l18-14 20 8-13 11z"/>
      <circle cx="218" cy="85" r="2.5" fill="${fill}" />
    </svg>
  `;
}

function paintSceneLayers(periodId, biome) {
  const farPatterns = {
    fern: `
      radial-gradient(circle at 12% 100%, rgba(44, 79, 48, 0.95), transparent 20%),
      radial-gradient(circle at 38% 100%, rgba(56, 90, 48, 0.92), transparent 22%),
      radial-gradient(circle at 76% 100%, rgba(49, 82, 43, 0.9), transparent 18%)
    `,
    woodland: `
      linear-gradient(90deg, rgba(43, 69, 39, 0.88) 0 7%, transparent 7% 11%, rgba(53, 79, 43, 0.82) 11% 16%, transparent 16% 20%, rgba(40, 63, 35, 0.88) 20% 27%, transparent 27% 35%, rgba(48, 76, 42, 0.88) 35% 42%, transparent 42% 48%, rgba(39, 66, 36, 0.9) 48% 56%, transparent 56% 62%, rgba(45, 70, 38, 0.88) 62% 69%, transparent 69% 76%, rgba(44, 69, 41, 0.88) 76% 83%, transparent 83% 100%)
    `,
    coast: `
      linear-gradient(180deg, rgba(123, 151, 188, 0.7) 0%, rgba(189, 212, 228, 0.9) 78%, rgba(212, 225, 235, 0.6) 100%),
      linear-gradient(90deg, rgba(91, 122, 146, 0.58) 0 18%, transparent 18% 28%, rgba(91, 122, 146, 0.55) 28% 48%, transparent 48% 58%, rgba(91, 122, 146, 0.56) 58% 72%, transparent 72% 100%)
    `,
    marsh: `
      radial-gradient(circle at 20% 100%, rgba(75, 88, 52, 0.95), transparent 22%),
      radial-gradient(circle at 52% 100%, rgba(64, 82, 52, 0.9), transparent 22%),
      radial-gradient(circle at 82% 100%, rgba(85, 101, 63, 0.9), transparent 18%)
    `,
    badlands: `
      linear-gradient(180deg, rgba(141, 99, 70, 0.72) 0%, rgba(173, 125, 79, 0.92) 78%, rgba(103, 76, 49, 0.84) 100%),
      linear-gradient(90deg, rgba(112, 75, 44, 0.66) 0 20%, transparent 20% 36%, rgba(130, 92, 56, 0.62) 36% 56%, transparent 56% 70%, rgba(120, 81, 50, 0.62) 70% 90%, transparent 90% 100%)
    `,
    volcanic: `
      radial-gradient(circle at 18% 100%, rgba(67, 55, 52, 1), transparent 18%),
      radial-gradient(circle at 44% 100%, rgba(84, 64, 57, 0.95), transparent 23%),
      radial-gradient(circle at 80% 100%, rgba(61, 47, 45, 0.94), transparent 18%)
    `,
  };

  const midPatterns = {
    fern: `
      linear-gradient(90deg, rgba(51, 104, 53, 0.94) 0 5%, transparent 5% 9%, rgba(67, 123, 68, 0.94) 9% 16%, transparent 16% 24%, rgba(58, 118, 61, 0.94) 24% 30%, transparent 30% 38%, rgba(61, 110, 54, 0.94) 38% 45%, transparent 45% 52%, rgba(62, 117, 59, 0.94) 52% 58%, transparent 58% 64%, rgba(49, 103, 51, 0.95) 64% 72%, transparent 72% 80%, rgba(70, 119, 58, 0.95) 80% 89%, transparent 89% 100%)
    `,
    woodland: `
      linear-gradient(90deg, rgba(46, 66, 35, 0.94) 0 4%, transparent 4% 14%, rgba(41, 59, 31, 0.94) 14% 18%, transparent 18% 30%, rgba(47, 66, 35, 0.96) 30% 34%, transparent 34% 45%, rgba(41, 59, 31, 0.94) 45% 50%, transparent 50% 62%, rgba(44, 62, 32, 0.96) 62% 66%, transparent 66% 78%, rgba(47, 66, 35, 0.94) 78% 82%, transparent 82% 94%, rgba(39, 55, 30, 0.94) 94% 100%),
      radial-gradient(circle at 22% 10%, rgba(67, 111, 59, 0.9), transparent 12%),
      radial-gradient(circle at 58% 18%, rgba(67, 111, 59, 0.82), transparent 16%),
      radial-gradient(circle at 82% 12%, rgba(73, 117, 64, 0.82), transparent 14%)
    `,
    coast: `
      linear-gradient(180deg, rgba(153, 191, 212, 0.92) 0%, rgba(116, 154, 179, 0.84) 60%, rgba(110, 138, 152, 0.66) 100%),
      linear-gradient(90deg, rgba(98, 134, 155, 0.52) 0 12%, transparent 12% 24%, rgba(98, 134, 155, 0.5) 24% 38%, transparent 38% 48%, rgba(98, 134, 155, 0.52) 48% 61%, transparent 61% 72%, rgba(98, 134, 155, 0.5) 72% 86%, transparent 86% 100%)
    `,
    marsh: `
      linear-gradient(90deg, rgba(70, 98, 54, 0.94) 0 8%, transparent 8% 15%, rgba(90, 117, 62, 0.94) 15% 19%, transparent 19% 28%, rgba(77, 106, 57, 0.94) 28% 34%, transparent 34% 44%, rgba(70, 98, 54, 0.94) 44% 50%, transparent 50% 62%, rgba(90, 117, 62, 0.94) 62% 67%, transparent 67% 78%, rgba(77, 106, 57, 0.94) 78% 84%, transparent 84% 100%)
    `,
    badlands: `
      linear-gradient(90deg, rgba(143, 98, 56, 0.94) 0 8%, transparent 8% 18%, rgba(173, 123, 74, 0.94) 18% 29%, transparent 29% 40%, rgba(136, 93, 54, 0.94) 40% 52%, transparent 52% 62%, rgba(160, 111, 67, 0.94) 62% 74%, transparent 74% 86%, rgba(133, 94, 56, 0.94) 86% 100%)
    `,
    volcanic: `
      linear-gradient(90deg, rgba(77, 55, 52, 0.94) 0 15%, transparent 15% 28%, rgba(99, 71, 61, 0.94) 28% 46%, transparent 46% 58%, rgba(84, 60, 55, 0.94) 58% 74%, transparent 74% 86%, rgba(67, 48, 47, 0.94) 86% 100%)
    `,
  };

  const horizonByPeriod = {
    triassic: "linear-gradient(180deg, rgba(206, 167, 116, 0.22) 0%, rgba(126, 86, 50, 0.52) 100%)",
    jurassic: "linear-gradient(180deg, rgba(173, 199, 227, 0.2) 0%, rgba(99, 129, 151, 0.35) 100%)",
    cretaceous: "linear-gradient(180deg, rgba(226, 200, 136, 0.24) 0%, rgba(124, 110, 78, 0.36) 100%)",
  };

  elements.farLayer.style.background = `${horizonByPeriod[periodId]}, ${farPatterns[biome] || farPatterns.fern}`;
  elements.midLayer.style.background = midPatterns[biome] || midPatterns.fern;
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
    scan: { frequency: 480, endFrequency: 660, duration: 0.16, wave: "triangle" },
    photo: { frequency: 820, endFrequency: 220, duration: 0.22, wave: "square" },
    encounter: { frequency: 120, endFrequency: 80, duration: 0.55, wave: "sawtooth" },
    blocked: { frequency: 220, endFrequency: 170, duration: 0.12, wave: "square" },
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

function labelForPeriod(periodId) {
  return byPeriod[periodId].name;
}

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function manhattanDistance(x1, y1, x2, y2) {
  return Math.abs(x1 - x2) + Math.abs(y1 - y2);
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
  };

  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(snapshot));
  } catch (error) {
    return;
  }
}
