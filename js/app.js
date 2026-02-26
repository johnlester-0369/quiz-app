import { dom }                                         from './dom.js';
import { state }                                       from './state.js';
import { quizGroups }                                  from './data.js';
import { showCategoryScreen, startQuiz, advanceQuestion } from './quiz.js';

// Wire DOM events to quiz engine — this file intentionally holds no logic,
// only the mapping between user interactions and the functions that handle them.
dom.nextBtn.addEventListener('click', advanceQuestion);
dom.quizBackBtn.addEventListener('click', showCategoryScreen);

// indexOf lookup is safe because state.activeGroup is a direct reference
// into the quizGroups array (set in startQuiz), not a copy.
dom.restartBtn.addEventListener('click', () => {
  startQuiz(quizGroups.indexOf(state.activeGroup));
});

dom.backToCatBtn.addEventListener('click', showCategoryScreen);

// Boot on the category screen — the type="module" attribute in index.html
// defers this script until the DOM is fully parsed, so no DOMContentLoaded needed.
showCategoryScreen();