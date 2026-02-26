// Guards against question/choice text that contains HTML angle-brackets (e.g. "<link>")
// being parsed as live DOM elements when interpolated into innerHTML template literals.
// Applied to any data value injected via innerHTML — textContent assignments are inherently safe.
export function escapeHTML(str) {
  return String(str)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;')
    .replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}