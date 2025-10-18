# locale-string-summarizer

A lightweight TypeScript utility that intelligently summarizes text based on detected language/locale. Automatically detects the language and provides concise summaries or keyword extraction tailored to the specific locale.

## Features

- 🌍 **Automatic Locale Detection**: Detects Spanish, Russian, and English text automatically
- 📝 **Smart Summarization**: Extracts key sentences while preserving meaning
- 🔑 **Keyword Extraction**: Get the most important keywords from your text
- 🎯 **Configurable Options**: Customize sentence count and output format
- 📦 **Zero Dependencies**: Lightweight with no external dependencies
- 🔧 **TypeScript Support**: Full type definitions included

## Installation

```bash
npm install locale-string-summarizer
```

## Usage

### Basic Usage

```typescript
import { summarizeText } from 'locale-string-summarizer';

const text = "This is a very long sentence that contains multiple ideas and concepts. It should be summarized into a shorter version that captures the main points.";

// Basic summarization
const summary = summarizeText(text);
console.log(summary);
// Output: "This is a very long sentence that contains multiple ideas and concepts. It should be summarized into a shorter version that captures the main points."
```

### Advanced Options

```typescript
// Extract only keywords
const keywords = summarizeText(text, { keywordsOnly: true });
console.log(keywords);
// Output: "sentence, contains, multiple, ideas, concepts"

// Custom sentence count
const customSummary = summarizeText(text, { maxSentences: 1 });
console.log(customSummary);
// Output: "This is a very long sentence that contains multiple ideas and concepts."
```

### Multi-language Support

```typescript
// Spanish text
const spanishText = "Este es un texto muy largo en español que contiene múltiples ideas y conceptos.";
const spanishSummary = summarizeText(spanishText);
console.log(spanishSummary);

// Russian text  
const russianText = "Это очень длинный текст на русском языке который должен быть сокращен.";
const russianSummary = summarizeText(russianText);
console.log(russianSummary);
```

## API Reference

### `summarizeText(text: string, options?: SummarizerOptions): string`

Summarizes the input text based on detected locale.

**Parameters:**
- `text` (string): The input text to summarize
- `options` (SummarizerOptions, optional): Configuration options

**SummarizerOptions:**
- `maxSentences?: number` - Maximum number of sentences to return (default: 2)
- `keywordsOnly?: boolean` - If true, returns only keywords instead of sentences (default: false)

**Returns:** `string` - The summarized text or keywords

## Supported Languages

- **English** (en) - Default fallback
- **Spanish** (es) - Detected by accented characters (á, é, í, ó, ú, ñ, ü)
- **Russian** (ru) - Detected by Cyrillic characters

## License

MIT © Harsh Srivastava

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
