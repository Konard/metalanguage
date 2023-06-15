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

test('Parsing and generating Python', () => {
    const sourceText = 'print("Hello, World!")';
    const parsed = parser.parse(sourceText);
    const generatedText = synthesis(parsed);
    expect(generatedText).toBe(sourceText);
});

test('Parsing and generating Java', () => {
    const sourceText = `
    public class HelloWorld {
        public static void main(String[] args) {
            System.out.println("Hello, World!");
        }
    }`;
    const parsed = parser.parse(sourceText);
    const generatedText = synthesis(parsed);
    expect(generatedText).toBe(sourceText);
});

test('Parsing and generating JavaScript', () => {
    const sourceText = `console.log("Hello, World!");`;
    const parsed = parser.parse(sourceText);
    const generatedText = synthesis(parsed);
    expect(generatedText).toBe(sourceText);
});

test('Parsing and generating C', () => {
    const sourceText = `
    #include <stdio.h>

    int main() {
        printf("Hello, World!\\n");
        return 0;
    }`;
    const parsed = parser.parse(sourceText);
    const generatedText = synthesis(parsed);
    expect(generatedText).toBe(sourceText);
});

test('Parsing and generating C++', () => {
    const sourceText = `
    #include <iostream>

    int main() {
        std::cout << "Hello, World!" << std::endl;
        return 0;
    }`;
    const parsed = parser.parse(sourceText);
    const generatedText = synthesis(parsed);
    expect(generatedText).toBe(sourceText);
});

test('Parsing and generating C#', () => {
    const sourceText = `
    using System;

    class Program {
        static void Main(string[] args) {
            Console.WriteLine("Hello, World!");
        }
    }`;
    const parsed = parser.parse(sourceText);
    const generatedText = synthesis(parsed);
    expect(generatedText).toBe(sourceText);
});

test('Parsing and generating PHP', () => {
    const sourceText = `
    <?php
    echo "Hello, World!";
    ?>`;
    const parsed = parser.parse(sourceText);
    const generatedText = synthesis(parsed);
    expect(generatedText).toBe(sourceText);
});

test('Parsing and generating Go', () => {
    const sourceText = `
    package main

    import "fmt"

    func main() {
        fmt.Println("Hello, World!")
    }`;
    const parsed = parser.parse(sourceText);
    const generatedText = synthesis(parsed);
    expect(generatedText).toBe(sourceText);
});

test('Parsing and generating Rust', () => {
    const sourceText = `
    fn main() {
        println!("Hello, World!");
    }`;
    const parsed = parser.parse(sourceText);
    const generatedText = synthesis(parsed);
    expect(generatedText).toBe(sourceText);
});

test('Parsing and generating Kotlin', () => {
    const sourceText = `
    fun main(args: Array<String>) {
        println("Hello, World!")
    }`;
    const parsed = parser.parse(sourceText);
    const generatedText = synthesis(parsed);
    expect(generatedText).toBe(sourceText);
});

test('Parsing and generating Ruby', () => {
    const sourceText = `puts "Hello, World!"`;
    const parsed = parser.parse(sourceText);
    const generatedText = synthesis(parsed);
    expect(generatedText).toBe(sourceText);
});

test('Parsing and generating Groovy', () => {
    const sourceText = `println "Hello, World!"`;
    const parsed = parser.parse(sourceText);
    const generatedText = synthesis(parsed);
    expect(generatedText).toBe(sourceText);
});
