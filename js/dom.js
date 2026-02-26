// All getElementById calls happen once at module evaluation time rather than
// on every render cycle. Modules import from here instead of querying the DOM directly,
// keeping logic functions decoupled from DOM query mechanics.
export const dom = {
  categoryScreen:  document.getElementById('category-screen'),
  quizScreen:      document.getElementById('quiz-screen'),
  resultsScreen:   document.getElementById('results-screen'),
  categoryGrid:    document.getElementById('category-grid'),
  quizTitle:       document.getElementById('quiz-title'),
  quizSubtitle:    document.getElementById('quiz-subtitle'),
  qBadge:          document.getElementById('q-badge'),
  qCounter:        document.getElementById('q-counter'),
  qText:           document.getElementById('q-text'),
  choicesList:     document.getElementById('choices-list'),
  feedbackBar:     document.getElementById('feedback-bar'),
  nextBtn:         document.getElementById('next-btn'),
  progressFill:    document.getElementById('progress-fill'),
  card:            document.getElementById('question-card'),
  scoreRing:       document.getElementById('results-score-ring'),
  restartBtn:      document.getElementById('restart-btn'),
  backToCatBtn:    document.getElementById('back-to-cat-btn'),
  quizBackBtn:     document.getElementById('quiz-back-btn'),
  // Results screen value targets grouped here so showResults() doesn't
  // need its own getElementById calls breaking the single-query contract.
  resScore:        document.getElementById('res-score'),
  resTotal:        document.getElementById('res-total'),
  resCorrect:      document.getElementById('res-correct'),
  resWrong:        document.getElementById('res-wrong'),
  resTitle:        document.getElementById('res-title'),
  resMessage:      document.getElementById('res-message'),
};