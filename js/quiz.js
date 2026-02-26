import { quizGroups } from './data.js';
import { escapeHTML }  from './utils.js';
import { dom }         from './dom.js';
import { state }       from './state.js';

/* ==================== CATEGORY SCREEN ==================== */

// Re-renders category cards on every call so the stagger animations
// replay when the user returns from results — a deliberate UX reward.
export function showCategoryScreen() {
  dom.resultsScreen.classList.add('hidden');
  dom.quizScreen.classList.add('hidden');
  dom.categoryScreen.classList.remove('hidden');
  renderCategories();
}

function renderCategories() {
  dom.categoryGrid.innerHTML = '';

  quizGroups.forEach((group, idx) => {
    const btn = document.createElement('button');
    btn.className = 'category-card';
    btn.setAttribute('aria-label', `Start ${group.title} quiz, ${group.questions.length} questions`);

    const diffLabel = group.difficulty === 'beginner' ? 'Beginner' : 'Intermediate';
    const diffClass = group.difficulty === 'beginner' ? 'difficulty-beginner' : 'difficulty-intermediate';

    btn.innerHTML = `
      <div class="category-icon-wrap" style="background:${escapeHTML(group.gradient)};">
        <span role="img" aria-hidden="true">${escapeHTML(group.icon)}</span>
      </div>
      <div class="category-card-title">${escapeHTML(group.title)}</div>
      <div class="category-card-meta">
        <span class="category-count">${group.questions.length} questions</span>
        <span class="category-difficulty ${diffClass}">${diffLabel}</span>
      </div>
    `;

    btn.addEventListener('click', () => startQuiz(idx));
    dom.categoryGrid.appendChild(btn);
  });
}

/* ==================== QUIZ START ==================== */

// Applies the group's gradient to shared UI elements so each quiz feels
// visually distinct without needing per-group CSS classes.
export function startQuiz(groupIndex) {
  state.activeGroup  = quizGroups[groupIndex];
  state.currentIndex = 0;
  state.score        = 0;
  state.answered     = false;

  dom.progressFill.style.background = state.activeGroup.gradient;
  dom.nextBtn.style.background      = state.activeGroup.gradient;
  dom.scoreRing.style.background    = state.activeGroup.gradient;
  dom.scoreRing.style.boxShadow     = `0 4px 20px rgba(${state.activeGroup.accentRgb}, 0.35)`;
  dom.restartBtn.style.background   = state.activeGroup.gradient;

  dom.quizTitle.textContent    = state.activeGroup.title;
  dom.quizSubtitle.textContent = `${state.activeGroup.questions.length} questions · ${state.activeGroup.difficulty === 'beginner' ? 'Beginner' : 'Intermediate'}`;

  dom.categoryScreen.classList.add('hidden');
  dom.resultsScreen.classList.add('hidden');
  dom.quizScreen.classList.remove('hidden');

  renderQuestion();
}

/* ==================== QUESTION RENDER ==================== */

// Called on every question transition including "Try Again" — removing both
// animation classes up front clears any stale fill-mode:forwards state that
// would keep the card invisible after the last-question slide-out (history #4).
export function renderQuestion() {
  state.answered = false;
  dom.card.classList.remove('question-transition-out', 'question-transition-in');

  const q       = state.activeGroup.questions[state.currentIndex];
  const total   = state.activeGroup.questions.length;
  const progress = (state.currentIndex / total) * 100;

  dom.qBadge.textContent       = `Question ${q.num}`;
  dom.qCounter.textContent     = `${state.currentIndex + 1} / ${total}`;
  dom.qText.textContent        = q.question;
  dom.progressFill.style.width = `${progress}%`;

  dom.nextBtn.textContent = state.currentIndex < total - 1 ? 'Next Question →' : 'See Results';
  dom.nextBtn.classList.remove('visible');

  dom.feedbackBar.className   = 'feedback-bar';
  dom.feedbackBar.textContent = '';

  dom.choicesList.innerHTML = '';
  q.choices.forEach(choice => {
    const li  = document.createElement('li');
    const btn = document.createElement('button');
    btn.className       = 'choice-btn';
    btn.dataset.correct = choice.isCorrect;

    btn.innerHTML = `
      <span class="choice-label">${escapeHTML(choice.label)}</span>
      <span class="choice-text">${escapeHTML(choice.text)}</span>
      <svg class="choice-icon" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        ${choice.isCorrect
          ? `<path d="M4 10l4.5 4.5L16 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`
          : `<path d="M6 6l8 8M14 6l-8 8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`
        }
      </svg>
    `;

    btn.setAttribute('aria-label', `Choice ${choice.label}: ${choice.text}`);
    btn.addEventListener('click', () => handleAnswer(btn, choice.isCorrect));
    li.appendChild(btn);
    dom.choicesList.appendChild(li);
  });
}

/* ==================== ANSWER HANDLER ==================== */

function handleAnswer(selectedBtn, isCorrect) {
  // Guard prevents double-submission during the next-question delay window
  if (state.answered) return;
  state.answered = true;

  const allBtns = dom.choicesList.querySelectorAll('.choice-btn');
  allBtns.forEach(btn => (btn.disabled = true));

  if (isCorrect) {
    state.score++;
    selectedBtn.classList.add('correct');
    allBtns.forEach(btn => { if (btn !== selectedBtn) btn.classList.add('muted'); });
    showFeedback(true, 'Correct! Great job.');
  } else {
    selectedBtn.classList.add('wrong');
    allBtns.forEach(btn => {
      if (btn.dataset.correct === 'true') btn.classList.add('reveal-correct');
      else if (btn !== selectedBtn)       btn.classList.add('muted');
    });
    showFeedback(false, 'Not quite — the correct answer is highlighted.');
  }

  // Advance progress bar to the answered position (not just the viewed position)
  const total = state.activeGroup.questions.length;
  dom.progressFill.style.width = `${((state.currentIndex + 1) / total) * 100}%`;
  dom.nextBtn.classList.add('visible');
}

/* ==================== FEEDBACK ==================== */

function showFeedback(isCorrect, message) {
  dom.feedbackBar.textContent = (isCorrect ? '✓ ' : '✗ ') + message;
  dom.feedbackBar.className   = `feedback-bar visible ${isCorrect ? 'correct-feedback' : 'wrong-feedback'}`;
}

/* ==================== NAVIGATION ==================== */

// Exported so app.js can attach it to the nextBtn click event without
// the button needing to know about internal question state.
export function advanceQuestion() {
  if (!state.answered) return;

  dom.card.classList.add('question-transition-out');

  setTimeout(() => {
    state.currentIndex++;

    if (state.currentIndex >= state.activeGroup.questions.length) {
      showResults();
    } else {
      renderQuestion();
      dom.card.classList.remove('question-transition-out');
      dom.card.classList.add('question-transition-in');
      // Class must be removed after the animation completes so it can replay on the next transition
      setTimeout(() => dom.card.classList.remove('question-transition-in'), 300);
    }
  }, 220);
}

/* ==================== RESULTS ==================== */

function showResults() {
  dom.quizScreen.classList.add('hidden');
  dom.resultsScreen.classList.remove('hidden');

  const total   = state.activeGroup.questions.length;
  const wrong   = total - state.score;
  const percent = Math.round((state.score / total) * 100);

  dom.resScore.textContent   = state.score;
  dom.resTotal.textContent   = `/ ${total}`;
  dom.resCorrect.textContent = state.score;
  dom.resWrong.textContent   = wrong;

  let title, message;
  if (percent === 100) {
    title   = 'Perfect Score! 🎉';
    message = 'You got every question right. Incredible!';
  } else if (percent >= 70) {
    title   = 'Well Done!';
    message = `You scored ${percent}%. Solid performance — keep it up!`;
  } else if (percent >= 40) {
    title   = 'Good Effort!';
    message = `You scored ${percent}%. A little more practice and you'll ace it.`;
  } else {
    title   = 'Keep Practicing!';
    message = `You scored ${percent}%. Don't give up — try again!`;
  }

  dom.resTitle.textContent   = title;
  dom.resMessage.textContent = message;
}