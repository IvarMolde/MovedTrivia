/* ================================================================
   MovedTrivia – Game Logic
   ================================================================ */

/* ── DOM refs ── */
const screens = {
  setup:  document.getElementById("screen-setup"),
  game:   document.getElementById("screen-game"),
  result: document.getElementById("screen-result")
};

/* ── Game state ── */
let state = {};

/* ── Constants ── */
const TIMER_SECONDS = 20;          // Fast tid for alle vanskelighetsgrader
const BONUS_ZONE   = 5;            // Svar innen 5 sek → 100 poeng
const MAX_POINTS   = 100;
const MIN_POINTS   = 10;           // Gulv: alltid minst 10 poeng ved korrekt svar / tid ute
const ARC_CIRC = 2 * Math.PI * 28; // SVG circle circumference

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   SCREEN NAVIGATION
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
function showScreen(name) {
  Object.values(screens).forEach(s => s.classList.remove("active"));
  screens[name].classList.add("active");
  screens[name].focus?.();
}

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   SETUP
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
document.getElementById("btn-start").addEventListener("click", startGame);

function getSetupValues() {
  const get = name => document.querySelector(`input[name="${name}"]:checked`)?.value;
  return {
    mode:       parseInt(get("mode") || "1"),
    difficulty: get("difficulty") || "easy",
    count:      parseInt(get("count") || "10"),
    category:   get("category") || "all"
  };
}

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   GAME START
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
function startGame() {
  const cfg = getSetupValues();
  const questions = getQuestions(cfg.category, cfg.difficulty, cfg.count);

  if (questions.length === 0) {
    alert("Ingen spørsmål tilgjengelig for de valgte innstillingene. Prøv en annen kategori eller vanskelighetsgrad.");
    return;
  }

  state = {
    questions,
    current: 0,
    scores:  [0, 0],
    player:  0,            // 0-indexed
    mode:    cfg.mode,
    difficulty: cfg.difficulty,
    timerMax: TIMER_SECONDS,
    timerVal: TIMER_SECONDS,
    timerRef: null,
    answered: false,
    total:   questions.length
  };

  updateScoreDisplay();
  showScreen("game");
  renderQuestion();
}

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   RENDER QUESTION
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
function renderQuestion() {
  clearTimer();
  state.answered = false;

  const q = state.questions[state.current];
  const idx = state.current;
  const total = state.total;

  // Progress
  const pct = Math.round((idx / total) * 100);
  document.getElementById("progress-bar").style.width = `${pct}%`;
  document.getElementById("progress-bar").setAttribute("aria-valuenow", pct);
  document.getElementById("progress-label").textContent = `Spørsmål ${idx + 1} av ${total}`;

  // Player indicator
  const pi = document.getElementById("player-indicator");
  if (state.mode === 2) {
    pi.textContent = `🎮 Spiller ${state.player + 1} sin tur`;
    pi.className = `player-indicator p${state.player + 1}-active`;
    pi.removeAttribute("hidden");
  } else {
    pi.setAttribute("hidden", "");
  }

  // Category & difficulty chips
  document.getElementById("q-category").textContent = CATEGORY_LABELS[q.category] || q.category;
  document.getElementById("q-difficulty").textContent = DIFFICULTY_LABELS[q.difficulty] || q.difficulty;
  document.getElementById("q-difficulty").className = `difficulty-chip diff-${q.difficulty}`;

  // Question text
  document.getElementById("question-text").textContent = q.question;

  // Answer buttons
  const grid = document.getElementById("answers-grid");
  grid.innerHTML = "";
  q.options.forEach((opt, i) => {
    const btn = document.createElement("button");
    btn.className = "answer-btn";
    btn.setAttribute("role", "listitem");
    btn.setAttribute("aria-label", `Svaralternativ ${i + 1}: ${opt}`);
    btn.innerHTML = `<span class="ans-letter" aria-hidden="true">${["A","B","C","D"][i]}</span><span class="ans-text">${opt}</span>`;
    btn.addEventListener("click", () => handleAnswer(i));
    grid.appendChild(btn);
  });

  // Feedback clear
  const fb = document.getElementById("feedback-bar");
  fb.textContent = "";
  fb.className = "feedback-bar";

  // Start timer
  startTimer();
}

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   TIMER
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
function startTimer() {
  state.timerVal = state.timerMax;
  updateTimerDisplay();

  state.timerRef = setInterval(() => {
    state.timerVal--;
    updateTimerDisplay();
    if (state.timerVal <= 0) {
      clearTimer();
      if (!state.answered) timeUp();
    }
  }, 1000);
}

function clearTimer() {
  if (state.timerRef) {
    clearInterval(state.timerRef);
    state.timerRef = null;
  }
}

function updateTimerDisplay() {
  const el = document.getElementById("timer-number");
  const arc = document.getElementById("timer-arc");
  const n = state.timerVal;
  const max = state.timerMax;

  el.textContent = n;
  el.setAttribute("aria-label", `${n} sekunder igjen`);

  // SVG arc animation
  const fraction = n / max;
  const offset = ARC_CIRC * (1 - fraction);
  arc.style.strokeDashoffset = offset;

  // Color coding
  const ring = document.querySelector(".timer-ring");
  ring.classList.remove("timer-warn", "timer-danger");
  if (fraction <= 0.25) ring.classList.add("timer-danger");
  else if (fraction <= 0.5) ring.classList.add("timer-warn");
}

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   HANDLE ANSWER
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
function handleAnswer(selected) {
  if (state.answered) return;
  state.answered = true;
  clearTimer();

  const q = state.questions[state.current];
  const correct = selected === q.answer;
  const btns = document.querySelectorAll(".answer-btn");

  // Highlight answers
  btns.forEach((btn, i) => {
    btn.disabled = true;
    if (i === q.answer) {
      btn.classList.add("correct");
      btn.setAttribute("aria-pressed", "true");
    } else if (i === selected && !correct) {
      btn.classList.add("wrong");
    }
  });

  // Score
  if (correct) {
    const declining = TIMER_SECONDS - BONUS_ZONE; // = 15 sek som faller
    const earned = state.timerVal >= declining
      ? MAX_POINTS                                                                         // Innen de første 5 sek → 100 p
      : Math.round(MIN_POINTS + (state.timerVal / declining) * (MAX_POINTS - MIN_POINTS)); // Proporsjonal: 10–100 p
    state.scores[state.player] += earned;
    updateScoreDisplay();

    const fast = state.timerVal >= declining;
    const fb = document.getElementById("feedback-bar");
    fb.className = "feedback-bar fb-correct";
    fb.innerHTML = `✅ Riktig! +${earned} poeng${fast ? " ⚡ Lynraskt!" : ""}<br><small>${q.explanation}</small>`;
  } else {
    const fb = document.getElementById("feedback-bar");
    fb.className = "feedback-bar fb-wrong";
    fb.innerHTML = `❌ Feil svar.<br><small>${q.explanation}</small>`;
  }

  // Next step after short delay
  setTimeout(() => {
    advanceGame();
  }, 2600);
}

function timeUp() {
  state.answered = true;
  const q = state.questions[state.current];
  const btns = document.querySelectorAll(".answer-btn");
  btns.forEach((btn, i) => {
    btn.disabled = true;
    if (i === q.answer) btn.classList.add("correct");
  });

  // Gir alltid MIN_POINTS selv om tiden løper ut
  state.scores[state.player] += MIN_POINTS;
  updateScoreDisplay();

  const fb = document.getElementById("feedback-bar");
  fb.className = "feedback-bar fb-timeout";
  fb.innerHTML = `⏱️ Tiden er ute! +${MIN_POINTS} poeng<br><small>${q.explanation}</small>`;

  setTimeout(() => advanceGame(), 2600);
}

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   ADVANCE GAME
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
function advanceGame() {
  // In 2-player mode, alternate players each question
  if (state.mode === 2) {
    state.player = state.player === 0 ? 1 : 0;
  }

  state.current++;
  if (state.current >= state.total) {
    showResult();
  } else {
    renderQuestion();
  }
}

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   SCORE DISPLAY
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
function updateScoreDisplay() {
  const p1 = document.getElementById("score-p1");
  const p2 = document.getElementById("score-p2");

  if (state.mode === 1) {
    p1.textContent = `⭐ ${state.scores[0]} poeng`;
    p1.setAttribute("aria-label", `Poengsum: ${state.scores[0]} poeng`);
    p2.textContent = "";
    p2.removeAttribute("hidden");
    p2.setAttribute("hidden", "");
  } else {
    p1.textContent = `🧑 Spiller 1: ${state.scores[0]}`;
    p1.setAttribute("aria-label", `Spiller 1: ${state.scores[0]} poeng`);
    p2.textContent = `🧑 Spiller 2: ${state.scores[1]}`;
    p2.setAttribute("aria-label", `Spiller 2: ${state.scores[1]} poeng`);
    p2.removeAttribute("hidden");
  }
}

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   RESULT SCREEN
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
function showResult() {
  clearTimer();
  showScreen("result");

  const max = state.total * MAX_POINTS;

  if (state.mode === 1) {
    const score = state.scores[0];
    const pct = Math.round((score / max) * 100);
    const { trophy, title, subtitle } = getResultMessage(pct);

    document.getElementById("result-trophy").textContent = trophy;
    document.getElementById("result-heading").textContent = title;
    document.getElementById("result-subtitle").textContent = subtitle;

    document.getElementById("result-scores-wrap").innerHTML = `
      <div class="result-score-card">
        <div class="rs-label">Din poengsum</div>
        <div class="rs-points">${score} poeng</div>
        <div class="rs-bar-wrap">
          <div class="rs-bar" style="width:${Math.min(100, Math.round(score/max*100))}%"></div>
        </div>
        <div class="rs-detail">${state.total} spørsmål &bull; ${DIFFICULTY_LABELS[state.difficulty]}</div>
      </div>`;
  } else {
    const s0 = state.scores[0];
    const s1 = state.scores[1];
    let winnerMsg;
    if (s0 > s1) winnerMsg = "🏆 Spiller 1 vinner!";
    else if (s1 > s0) winnerMsg = "🏆 Spiller 2 vinner!";
    else winnerMsg = "🤝 Uavgjort! Dere er like gode!";

    document.getElementById("result-trophy").textContent = s0 > s1 ? "🥇" : s1 > s0 ? "🥈" : "🤝";
    document.getElementById("result-heading").textContent = winnerMsg;
    document.getElementById("result-subtitle").textContent = "Godt spilt – bra jobba begge to!";

    document.getElementById("result-scores-wrap").innerHTML = `
      <div class="result-score-card">
        <div class="rs-label">🧑 Spiller 1</div>
        <div class="rs-points">${s0} poeng</div>
        <div class="rs-bar-wrap">
          <div class="rs-bar rs-bar-p1" style="width:${Math.min(100, Math.round(s0/max*100))}%"></div>
        </div>
      </div>
      <div class="result-score-card">
        <div class="rs-label">🧑 Spiller 2</div>
        <div class="rs-points">${s1} poeng</div>
        <div class="rs-bar-wrap">
          <div class="rs-bar rs-bar-p2" style="width:${Math.min(100, Math.round(s1/max*100))}%"></div>
        </div>
      </div>`;
  }
}

function getResultMessage(pct) {
  if (pct >= 90) return { trophy: "🏆", title: "Utmerket! Du kan arbeidsnorsk!", subtitle: "Imponerende kunnskap om norsk arbeidsliv!" };
  if (pct >= 70) return { trophy: "🌟", title: "Bra jobba! Du kan mye!", subtitle: "Du har god kunnskap om norsk arbeidsliv." };
  if (pct >= 50) return { trophy: "👍", title: "Greit resultat! Fortsett å lære!", subtitle: "Du er på rett vei – øv litt mer og du er ekspert!" };
  if (pct >= 30) return { trophy: "📚", title: "Du lærer! Prøv igjen!", subtitle: "Ikke gi opp – hver gang lærer du mer om norsk arbeidsliv." };
  return { trophy: "🌱", title: "Du har begynt å lære!", subtitle: "Les litt mer om norsk arbeidsliv og prøv på nytt!" };
}

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   RESULT BUTTONS
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
document.getElementById("btn-play-again").addEventListener("click", () => {
  // Replay with same settings
  const q = getQuestions(
    document.querySelector('input[name="category"]:checked')?.value || "all",
    state.difficulty,
    state.total
  );
  if (q.length === 0) { alert("Ingen spørsmål tilgjengelig."); return; }
  const mode = state.mode;
  state = { ...state, questions: q, current: 0, scores: [0, 0], player: 0, answered: false };
  updateScoreDisplay();
  showScreen("game");
  renderQuestion();
});

document.getElementById("btn-new-settings").addEventListener("click", () => {
  clearTimer();
  showScreen("setup");
});

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   KEYBOARD NAVIGATION FOR ANSWERS
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
document.addEventListener("keydown", (e) => {
  if (!screens.game.classList.contains("active") || state.answered) return;
  const keyMap = { "1": 0, "2": 1, "3": 2, "4": 3, "a": 0, "b": 1, "c": 2, "d": 3 };
  const idx = keyMap[e.key.toLowerCase()];
  if (idx !== undefined) {
    const btns = document.querySelectorAll(".answer-btn");
    if (btns[idx]) btns[idx].click();
  }
});

/* ── Init arc ── */
document.getElementById("timer-arc").style.strokeDasharray = ARC_CIRC;
document.getElementById("timer-arc").style.strokeDashoffset = 0;
