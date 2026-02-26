// Self-contained quiz groups — append an entry here to add a new category without
// touching any other module. gradient/accentRgb drive per-quiz theming (progress bar,
// next button, score ring) so each topic feels visually distinct without per-group CSS rules.
export const quizGroups = [
  {
    id: 'python',
    title: 'Python',
    icon: '🐍',
    gradient: 'linear-gradient(135deg, rgb(49,150,82) 0%, rgb(24,133,154) 100%)',
    accentRgb: '49 150 82',
    difficulty: 'beginner',
    questions: [
      {
        num: 1,
        question: "What is the correct file extension for Python files?",
        choices: [
          { label: "A", text: ".py",     isCorrect: true  },
          { label: "B", text: ".pt",     isCorrect: false },
          { label: "C", text: ".pyt",    isCorrect: false },
          { label: "D", text: ".python", isCorrect: false }
        ]
      },
      {
        num: 2,
        question: "Which keyword is used to define a function in Python?",
        choices: [
          { label: "A", text: "function", isCorrect: false },
          { label: "B", text: "func",     isCorrect: false },
          { label: "C", text: "def",      isCorrect: true  },
          { label: "D", text: "define",   isCorrect: false }
        ]
      },
      {
        num: 3,
        question: "What data type is the result of: type([])?",
        choices: [
          { label: "A", text: "tuple", isCorrect: false },
          { label: "B", text: "array", isCorrect: false },
          { label: "C", text: "list",  isCorrect: true  },
          { label: "D", text: "dict",  isCorrect: false }
        ]
      },
      {
        num: 4,
        question: "Which of the following is used to handle exceptions in Python?",
        choices: [
          { label: "A", text: "try / catch",   isCorrect: false },
          { label: "B", text: "try / except",  isCorrect: true  },
          { label: "C", text: "begin / rescue", isCorrect: false },
          { label: "D", text: "check / handle", isCorrect: false }
        ]
      },
      {
        num: 5,
        question: "What does the `len()` function return?",
        choices: [
          { label: "A", text: "The last element of a sequence",  isCorrect: false },
          { label: "B", text: "The memory size of an object",    isCorrect: false },
          { label: "C", text: "The number of items in an object", isCorrect: true  },
          { label: "D", text: "The type of an object",           isCorrect: false }
        ]
      },
      {
        num: 6,
        question: "Which symbol is used for single-line comments in Python?",
        choices: [
          { label: "A", text: "//",   isCorrect: false },
          { label: "B", text: "--",   isCorrect: false },
          { label: "C", text: "#",    isCorrect: true  },
          { label: "D", text: "/* */", isCorrect: false }
        ]
      }
    ]
  },
  {
    id: 'javascript',
    title: 'JavaScript',
    icon: '⚡',
    gradient: 'linear-gradient(135deg, rgb(225,175,0) 0%, rgb(210,110,0) 100%)',
    accentRgb: '200 140 0',
    difficulty: 'intermediate',
    questions: [
      {
        num: 1,
        question: "What does HTML stand for?",
        choices: [
          { label: "A", text: "HyperText Markup Language",   isCorrect: true  },
          { label: "B", text: "HyperText Markdown Language", isCorrect: false },
          { label: "C", text: "HighText Machine Language",   isCorrect: false },
          { label: "D", text: "HyperTool Multi Language",    isCorrect: false }
        ]
      },
      {
        num: 2,
        question: "Which method adds an element to the end of a JavaScript array?",
        choices: [
          { label: "A", text: "append()", isCorrect: false },
          { label: "B", text: "add()",    isCorrect: false },
          { label: "C", text: "push()",   isCorrect: true  },
          { label: "D", text: "insert()", isCorrect: false }
        ]
      },
      {
        num: 3,
        question: "Which of the following is a JavaScript framework?",
        choices: [
          { label: "A", text: "Django",  isCorrect: false },
          { label: "B", text: "Laravel", isCorrect: false },
          { label: "C", text: "React",   isCorrect: true  },
          { label: "D", text: "Flask",   isCorrect: false }
        ]
      },
      {
        num: 4,
        question: "What does `===` check in JavaScript?",
        choices: [
          { label: "A", text: "Value only",                    isCorrect: false },
          { label: "B", text: "Type only",                     isCorrect: false },
          { label: "C", text: "Value and type (strict equality)", isCorrect: true  },
          { label: "D", text: "Reference equality",            isCorrect: false }
        ]
      },
      {
        num: 5,
        question: "Which keyword declares a block-scoped variable in modern JavaScript?",
        choices: [
          { label: "A", text: "var",    isCorrect: false },
          { label: "B", text: "let",    isCorrect: true  },
          { label: "C", text: "set",    isCorrect: false },
          { label: "D", text: "define", isCorrect: false }
        ]
      },
      {
        num: 6,
        question: "What does `console.log()` do?",
        choices: [
          { label: "A", text: "Writes to a file",                     isCorrect: false },
          { label: "B", text: "Sends data to the server",             isCorrect: false },
          { label: "C", text: "Prints output to the browser console", isCorrect: true  },
          { label: "D", text: "Displays a browser alert",             isCorrect: false }
        ]
      }
    ]
  },
  {
    id: 'html-css',
    title: 'HTML & CSS',
    icon: '🎨',
    gradient: 'linear-gradient(135deg, rgb(53,109,232) 0%, rgb(23,129,175) 100%)',
    accentRgb: '53 109 232',
    difficulty: 'beginner',
    questions: [
      {
        num: 1,
        question: "Which CSS property controls the text size?",
        choices: [
          { label: "A", text: "text-size",  isCorrect: false },
          { label: "B", text: "font-size",  isCorrect: true  },
          { label: "C", text: "text-style", isCorrect: false },
          { label: "D", text: "font-style", isCorrect: false }
        ]
      },
      {
        num: 2,
        question: "What does CSS stand for?",
        choices: [
          { label: "A", text: "Computer Style Sheets",  isCorrect: false },
          { label: "B", text: "Cascading Style Sheets", isCorrect: true  },
          { label: "C", text: "Creative Style System",  isCorrect: false },
          { label: "D", text: "Colorful Styling Script", isCorrect: false }
        ]
      },
      {
        num: 3,
        question: "Which HTML tag is used to link an external stylesheet?",
        choices: [
          { label: "A", text: "<style>",  isCorrect: false },
          { label: "B", text: "<script>", isCorrect: false },
          { label: "C", text: "<link>",   isCorrect: true  },
          { label: "D", text: "<css>",    isCorrect: false }
        ]
      },
      {
        num: 4,
        question: "Which CSS property is used to add space inside an element's border?",
        choices: [
          { label: "A", text: "margin",         isCorrect: false },
          { label: "B", text: "spacing",        isCorrect: false },
          { label: "C", text: "padding",        isCorrect: true  },
          { label: "D", text: "border-spacing", isCorrect: false }
        ]
      },
      {
        num: 5,
        question: "Which HTML attribute specifies the URL of a hyperlink?",
        choices: [
          { label: "A", text: "src",  isCorrect: false },
          { label: "B", text: "href", isCorrect: true  },
          { label: "C", text: "url",  isCorrect: false },
          { label: "D", text: "link", isCorrect: false }
        ]
      },
      {
        num: 6,
        question: "What value of `display` makes an element a flex container?",
        choices: [
          { label: "A", text: "block",     isCorrect: false },
          { label: "B", text: "inline",    isCorrect: false },
          { label: "C", text: "flex",      isCorrect: true  },
          { label: "D", text: "grid-flex", isCorrect: false }
        ]
      }
    ]
  },
  {
    id: 'computer-history',
    title: 'Computer History',
    icon: '🖥️',
    gradient: 'linear-gradient(135deg, rgb(128,87,221) 0%, rgb(55,109,232) 100%)',
    accentRgb: '128 87 221',
    difficulty: 'intermediate',
    questions: [
      {
        num: 1,
        question: "Who is widely credited as the inventor of the World Wide Web?",
        choices: [
          { label: "A", text: "Bill Gates",      isCorrect: false },
          { label: "B", text: "Tim Berners-Lee", isCorrect: true  },
          { label: "C", text: "Vint Cerf",       isCorrect: false },
          { label: "D", text: "Alan Turing",     isCorrect: false }
        ]
      },
      {
        num: 2,
        question: "What was the name of the first commercially successful personal computer?",
        choices: [
          { label: "A", text: "Apple I",    isCorrect: false },
          { label: "B", text: "Altair 8800", isCorrect: false },
          { label: "C", text: "IBM PC",     isCorrect: false },
          { label: "D", text: "Apple II",   isCorrect: true  }
        ]
      },
      {
        num: 3,
        question: "ENIAC, one of the first general-purpose computers, was built in which decade?",
        choices: [
          { label: "A", text: "1930s", isCorrect: false },
          { label: "B", text: "1940s", isCorrect: true  },
          { label: "C", text: "1950s", isCorrect: false },
          { label: "D", text: "1960s", isCorrect: false }
        ]
      },
      {
        num: 4,
        question: "Alan Turing is best known for his foundational work in which area?",
        choices: [
          { label: "A", text: "Database design",             isCorrect: false },
          { label: "B", text: "Computer networking",         isCorrect: false },
          { label: "C", text: "Theoretical computation and AI", isCorrect: true  },
          { label: "D", text: "Integrated circuit design",   isCorrect: false }
        ]
      },
      {
        num: 5,
        question: "The first computer mouse was invented by whom?",
        choices: [
          { label: "A", text: "Steve Jobs",       isCorrect: false },
          { label: "B", text: "Douglas Engelbart", isCorrect: true  },
          { label: "C", text: "Gordon Moore",     isCorrect: false },
          { label: "D", text: "Dennis Ritchie",   isCorrect: false }
        ]
      },
      {
        num: 6,
        question: "What does 'Moore's Law' predict?",
        choices: [
          { label: "A", text: "Internet bandwidth doubles every 18 months", isCorrect: false },
          { label: "B", text: "Storage cost halves every 2 years",         isCorrect: false },
          { label: "C", text: "Transistor count on chips roughly doubles every two years", isCorrect: true  },
          { label: "D", text: "CPU clock speed doubles every year",        isCorrect: false }
        ]
      }
    ]
  }
];