//typescript
// Basic intelligent locale-aware string summarizer
type SummarizerOptions = {
maxSentences?: number;
keywordsOnly?: boolean;

};
function detectLocale(text: string): string {
// Extremely naive implementation — demo only
if (/[áéíóúñü]/i.test(text)) return "es";
if (/[а-яё]/i.test(text)) return "ru";
return "en";
}
function extractSentences(text: string, locale: string): string[] {
// Basic split — for demo. Expandable for locale
if (locale === "en") return text.match(/[^.!?]+[.!?]+/g) || [text];
if (locale === "es") return text.match(/[^.!?¡¿]+[.!?¡¿]+/g) || [text];
return [text];
}
function extractKeywords(text: string, maxKeywords = 5): string[] {
// Simple most frequent words, skip stop words (for demo, English only)
const stopWords = [
"the", "and", "to", "of", "in", "a", "is", "for", "on", "with", "as", "by", "an", "at", "be", "from", "or",
"that", "la", "el", "de", "en", "y", "un"
];
const words = text.toLowerCase().replace(/[.,!?\n]/g, " ").split(/\s+/);
const freqMap: { [word: string]: number } = {};
for (const word of words) {
if (word.length < 3 || stopWords.includes(word)) continue;
freqMap[word] = (freqMap[word] || 0) + 1;
}
return Object.entries(freqMap)
.sort(([, a], [, b]) => b - a)
.slice(0, maxKeywords)
.map(([word]) => word);
}
/**
* Summarizes a string based on locale
* @param text The input text
* @param options { maxSentences, keywordsOnly }
*/
export function summarizeText(text: string, options: SummarizerOptions = {}) {
const locale = detectLocale(text);
if (options.keywordsOnly) {
return extractKeywords(text, 5).join(", ");
}

const sentences = extractSentences(text, locale);
const max = options.maxSentences || 2;
return sentences.slice(0, max).map(s => s.trim()).join(" ");
}