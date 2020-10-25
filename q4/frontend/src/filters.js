export function truncate(text, limit) {
  if (!text) return "";
  if (text.length <= limit) return text;
  return text.slice(0, limit) + "...";
}

export function pluralize(number, word) {
  return number + (number > 1 || number === 0 ? ` ${word}s` : ` ${word}`);
}
