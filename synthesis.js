function generateTextFromParsed(parsed) {
    if (!parsed) return "";
    return parsed.reduce((acc, element) => {
        if (element.type === '{}') {
            return acc + '{' + generateTextFromParsed(element.content) + '}';
        }
        if (element.type === '()') {
            return acc + '(' + generateTextFromParsed(element.content) + ')';
        }
        if (element.type === 'text') {
            return acc + element.value;
        }
    }, "");
}

// Usage:
// const parsed = ... // The result of the parsing.
// const text = generateTextFromParsed(parsed);
// console.log(text);
