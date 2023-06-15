function synthesis(parsed) {
    if (!parsed) return "";
    return parsed.reduce((acc, element) => {
        if (element.type === '{}') {
            return acc + '{' + synthesis(element.content) + '}';
        }
        if (element.type === '()') {
            return acc + '(' + synthesis(element.content) + ')';
        }
        if (element.type === 'text') {
            return acc + element.value;
        }
    }, "");
}

module.exports = synthesis;


// Usage:
// const parsed = ... // The result of the parsing.
// const text = synthesis(parsed);
// console.log(text);
