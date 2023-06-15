const PEG = require("pegjs");
const fs = require("fs");
const grammar = fs.readFileSync("./mini.grammar.pegjs", "utf8");
const parser = PEG.generate(grammar);
const synthesis = require('./synthesis');

test('Parsing and generating should produce the original input', () => {
    const sourceText = '({Hello} (world))';
    const parsed = parser.parse(sourceText);
    const generatedText = synthesis(parsed);
    expect(generatedText).toBe(sourceText);
});
