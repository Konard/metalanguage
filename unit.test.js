const PEG = require("pegjs");
const fs = require("fs");
const grammar = fs.readFileSync("./grammar.pegjs", "utf8");
const parser = PEG.generate(grammar);
const generateTextFromParsed = require('./generateTextFromParsed');

test('Parsing and generating should produce the original input', () => {
    const sourceText = '({Hello} (world))';
    const parsed = parser.parse(sourceText);
    const generatedText = generateTextFromParsed(parsed);
    expect(generatedText).toBe(sourceText);
});
