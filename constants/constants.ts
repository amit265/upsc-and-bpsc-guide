export const courseIcons = {
  html: require("../assets/images/courses/html.png"),
  css: require("../assets/images/courses/css.png"),
  js: require("../assets/images/courses/js.png"),
  react: require("../assets/images/courses/react.png"),
  py: require("../assets/images/courses/py.png"),
  node: require("../assets/images/courses/node.png"),
  rn: require("../assets/images/courses/rn.png"),
  dsa: require("../assets/images/courses/dsa.png"),

};

export const flashcardIcons = {
  html: require("../assets/images/flashcards/html.png"),
  css: require("../assets/images/flashcards/css.png"),
  js: require("../assets/images/flashcards/js.png"),
  react: require("../assets/images/flashcards/react.png"),
  py: require("../assets/images/flashcards/py.png"),
  node: require("../assets/images/flashcards/node.png"),
  rn: require("../assets/images/flashcards/rn.png"),
  dsa: require("../assets/images/flashcards/dsa.png"),

  // Add other mappings
};



export const availableImages = [
  {
    name: "avatar1.png",
    source: require("../assets/images/avatar/avatar1.png"),
  },
  {
    name: "avatar2.png",
    source: require("../assets/images/avatar/avatar2.png"),
  },
  {
    name: "avatar3.png",
    source: require("../assets/images/avatar/avatar3.png"),
  },
  {
    name: "avatar4.png",
    source: require("../assets/images/avatar/avatar4.png"),
  },
  {
    name: "avatar5.png",
    source: require("../assets/images/avatar/avatar5.png"),
  },
  {
    name: "avatar6.png",
    source: require("../assets/images/avatar/avatar6.png"),
  },
  {
    name: "avatar7.png",
    source: require("../assets/images/avatar/avatar7.png"),
  },
  {
    name: "avatar8.png",
    source: require("../assets/images/avatar/avatar8.png"),
  },
  {
    name: "avatar9.png",
    source: require("../assets/images/avatar/avatar9.png"),
  },
  {
    name: "avatar10.png",
    source: require("../assets/images/avatar/avatar10.png"),
  },
  {
    name: "avatar11.png",
    source: require("../assets/images/avatar/avatar11.png"),
  },
  {
    name: "avatar12.png",
    source: require("../assets/images/avatar/avatar12.png"),
  },

  // add more as needed
];

export const getAvatarImage = (name) => {
  switch (name) {
    case "avatar1.png":
      return require("../assets/images/avatar/avatar1.png");
    case "avatar2.png":
      return require("../assets/images/avatar/avatar2.png");
    case "avatar3.png":
      return require("../assets/images/avatar/avatar3.png");
    case "avatar4.png":
      return require("../assets/images/avatar/avatar4.png");
    case "avatar5.png":
      return require("../assets/images/avatar/avatar5.png");
    case "avatar6.png":
      return require("../assets/images/avatar/avatar6.png");
    case "avatar7.png":
      return require("../assets/images/avatar/avatar7.png");
    case "avatar8.png":
      return require("../assets/images/avatar/avatar8.png");
    case "avatar9.png":
      return require("../assets/images/avatar/avatar9.png");
    case "avatar10.png":
      return require("../assets/images/avatar/avatar10.png");
    case "avatar11.png":
      return require("../assets/images/avatar/avatar11.png");
    case "avatar12.png":
      return require("../assets/images/avatar/avatar12.png");
    default:
      return require("../assets/images/avatar/avatar1.png"); // fallback image
  }
};
export const levels = [
  {
    id: 1,
    level: "Level 1",
    title: "Curious Kitten",
    description:
      "You've just wandered into the world of code. Everything is new, shiny, and full of wonder.",
  },
  {
    id: 2,
    level: "Level 2",
    title: "Playful Pouncer",
    description:
      "You're playfully exploring concepts, pouncing on ideas and testing your paws.",
  },
  {
    id: 3,
    level: "Level 3",
    title: "Clever Climber",
    description:
      "You’re scaling learning walls with grace. Each concept is a branch you confidently leap to.",
  },
  {
    id: 4,
    level: "Level 4",
    title: "Nimble Navigator",
    description:
      "You’re darting through syntax and concepts like a cat through a maze of furniture.",
  },
  {
    id: 5,
    level: "Level 5",
    title: "Code Catnip",
    description:
      "You've found your groove! Concepts excite you like a whiff of catnip.",
  },
  {
    id: 6,
    level: "Level 6",
    title: "Debugging Lynx",
    description:
      "You’ve developed sharp senses. Errors don’t stand a chance under your focused gaze.",
  },
  {
    id: 7,
    level: "Level 7",
    title: "Tactical Tabby",
    description:
      "Strategic and precise — your learning is no longer random, but calculated.",
  },
  {
    id: 8,
    level: "Level 8",
    title: "Purring Prodigy",
    description:
      "You’re confident, calm, and consistently improving. Others can feel your confident purr.",
  },
  {
    id: 9,
    level: "Level 9",
    title: "Whiskered Wizard",
    description:
      "Your instincts and logic are perfectly in sync. You make the complex look easy.",
  },
  {
    id: 10,
    level: "Level 10",
    title: "Supreme Meowster",
    description:
      "You’ve mastered the art of learning. A legendary coder-cat with stories told in every byte.",
  },
];

export const WELCOME_MESSAGES = [
  "Ready for a quick code break?",
  "Let's sharpen those skills! 💡",
  "Back for more challenges? 🚀",
  "Code. Learn. Repeat. 🔁",
  "Fuel up your brain with some quizzes 🧠",
  "Time for a quick revision? Let’s brush up your skills! 🔁",
  "Flashcards and quizzes ready — let’s reinforce your knowledge! 🧠",
  "Just a few minutes a day keeps the bugs away! 🐞",
  "Master one concept at a time. You've got this! 💪",
  "Quick recap time! Let’s tackle a few flashcards 🔄",
  "Your dev journey just got smarter. Ready to revise? 🚀",
  "Repetition builds mastery. Start your revision now! 🔁",
  "Short sessions, big progress. Let’s dive in! 🌊",
  "Your learning playground is ready. Jump in! 🎮",
];


export const getQuizFeedback = (score) => {
  if (score === null || score === undefined) {
    return {
      title: "Ready to Challenge Yourself?",
      message:
        "Wrap up this module by taking a short quiz. Score more than ",
      highlight: "90%",
      emoji: "💪",
    };
  }

  if (score >= 90) {
    return {
      title: "You Nailed It! 🔥",
      message:
        "You've scored above 90%! Still, give it another go to sharpen your skills or try a new module!",
      highlight: "",
      emoji: "",
    };
  }

  if (score >= 70) {
    return {
      title: "Great Effort! ✨",
      message:
        "You're almost there. Just a bit more effort to cross the 90% mark!",
      highlight: "",
      emoji: "",
    };
  }

  if (score >= 50) {
    return {
      title: "Keep Pushing Forward! 🚀",
      message: "You've made a start, now let’s boost that score. Try again!",
      highlight: "",
      emoji: "",
    };
  }

  return {
    title: "Don't Give Up! 💡",
    message:
      "Mistakes are proof you're trying. Retake the quiz and conquer it!",
    highlight: "",
    emoji: "",
  };
};


export const lessons = {
  title: "JavaScript Modules",
  type: "theory", // or "code", if you're showing code examples only
  content: [
    {
      type: "heading",
      text: "JavaScript Modules – Explained in Detail",
    },
    {
      type: "paragraph",
      text: "In JavaScript, a module is a reusable piece of code that is exported from one file and imported into another. Modules help you organize code into smaller, manageable, and independent units, improving maintainability and scalability."
    },
    {
      type: "heading",
      text: "Key Concepts:",
    },
    {
      type: "list",
      items: [
        "**Exporting:** You can export variables, functions, or classes using named or default export.",
        "**Importing:** Use `import` to bring functionality into another file.",
        "**Benefits:** Avoids global pollution, modularity, lazy loading, etc.",
        "**Browser Support:** Use `<script type='module'>` and run from a server.",
      ]
    },
    {
      type: "code",
      text: `// Named Export
export const greet = () => "Hello";

// Default Export
export default function sayHi() { return "Hi"; }

// Import
import { greet } from "./utils.js";
import sayHi from "./utils.js";`
    },
    {
      type: "paragraph",
      text: "Modules are core to modern JavaScript development, especially in frameworks like React, Vue, and Node.js.",
    }
  ]
};
