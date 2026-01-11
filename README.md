# 📜 EasyScript — v0.1 (Unstable)

> **"If a beginner can read it out loud and understand it, the syntax is good."**

EasyScript is a beginner-friendly programming language designed to feel more like natural sentences than traditional code. It compiles into **JavaScript**, making it simple to learn while still powerful enough to run anywhere JavaScript runs.

---

## 🎯 The Goal of EasyScript
* **Readability** over syntax
* **Clarity** over symbols
* **Confidence** for beginners

## 🚀 Why EasyScript Exists
Most beginners struggle with complex symbols (`{}`, `;`, `==`, `=>`) and mixing logic with HTML/CSS too early. EasyScript removes that friction by:
* Using **English-like keywords**.
* Avoiding unnecessary punctuation.
* Letting users **think in steps**, not syntax.

---

## 🧠 Core Design Principles
1.  **Sentence-like syntax**: Code reads like instructions.
    * *EasyScript:* `set message to "Hello"`
    * *JavaScript:* `const message = "Hello";`
2.  **Minimal symbols**: No braces, semicolons, or parentheses (for now).
3.  **Beginner-first**: Designed so a non-programmer can read it and understand errors naturally.

---

## 🛠 Language Features (v0.1)

### Variables
`set` creates a variable and `to` assigns a value.
```easy
set x to 5
set name to "Odi"
```
### 🖥️ Output (Console)
EasyScript uses the `say` keyword, which compiles directly to the JavaScript `console.log()` method.

**Example:**
```easy
say "Hello World"
say x
```
### ⏳ Roadmap (Planned Features)
The following features are slated for upcoming versions to expand logic capabilities:

Conditions: ``easy
if x is greater than 5
``

Loops: ``repeat 3 times``

---

# Functions & Imports: Structured modularity for larger projects.
⚙️ **How It Works**

 > **"EasyScript follows a linear pipeline to transform natural language into executable code:"**

1. .easy file: The raw source code written by the user.

2. Lexer: Breaks down the text strings into identifiable tokens.

3. Parser: Analyzes tokens to build logical statements and structures.

4. Compiler: Translates the parsed logic into clean, optimized JavaScript.

5. Node.js: The environment that executes the resulting JavaScript.
   
--- 


# 💻 Tooling & Support

> **"VS Code Extension (v0.1")"**


. ✅ Syntax Highlighting: Easily distinguish keywords from values.

. ✅ File Recognition: Automatic support for .easy extensions.

. ✅ Theming: Custom keyword coloring designed for readability.

. 🚧 Planned: Error diagnostics, IntelliSense (autocompletion), and a code formatter.

---

# ⚠️ Current Limitations

> **"EasyScript v0.1 is intentionally minimal to ensure a stable core:"**

. No Error Recovery: The compiler may stop at the first sign of a syntax error.

. No Blocks: Indentation-based blocks or functions are not yet supported.

. Basic Math: Complex mathematical expressions are currently limited to basic values.

# 🗺 Versioning

| Version | Focus                                              |  |  |
| ------- | -------------------------------------------------- |  |  |
| v0.1    | Core language skeleton & basic variables (Current) |  |  |
| v0.2    | Logical conditions and repeat loops                |  |  |
| v0.3    | Function definitions and scope                     |  |  |
| v1.0    | Stable release for beginner education              |  |  |

---

# 🧪 Status
- ** Experimental/Unstable Built with ❤️ by @odinaka-123 for the next generation of learners.**
