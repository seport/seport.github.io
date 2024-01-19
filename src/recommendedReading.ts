export const notesData = {
  css: `
- [BEM](https://getbem.com/) is my favorite way to name CSS classes

Tip: When writing responsive styles, I like avoid overriding styles with media queries as much as possible.

For example, you often see:

.example {
  background: pink;
  color: white;
  height: 100px;
  font-size: 1em;
  position: absolute;
  top: 0;
  right: 0;
}
@min-width (200px) {
  .example {
    height: 200px;
    font-size: 2em;
    position: static;
  }
}

However, this can easily get out of hand when writing complex mobile responsive styles. It's not clear which styles are applied at which breakpoints.

Instead, I like to separate the shared, mobile, and desktop styles like so:

// these styles are applied at every breakpoint
.example {
  background: pink;
  color: white;
}

// these styles only apply to mobile sizes
@max-width (199px) {
  .example {
    position: absolute;
    top: 0;
    right: 0;
    height: 100px;
    font-size: 1em;
  }
}

// these styles only apply to desktop sizes
@min-width (200px) {
  .example {
    height: 200px;
    font-size: 2em;
  }
}

This way it is easy to see at a glance what styles are being applied at every breakpoint
`,
  nextjs: "",
  react: "",
  node: `# My favorite node.js frameworks
- The [express generator](https://expressjs.com/en/starter/generator.html) is still  my go-to for lightweight api-only projects.
- [Next.js](https://nextjs.org/) took some getting used to for me, but can be pretty nice for kickstarting full stack node/react apps.
`,
  elixir: "",
  rails: `# Ruby on rails resources

- For anyone starting out with rails programming I would totally recommend checking out [Codecademy's Ruby on Rails coourse](https://www.codecademy.com/learn/learn-rails), especially if you're new to backend programming.
`,
  react_testing_library: "When RTL first came to my attention I wasn't super in alignment with their ideology. At the time I was really into writing tons of teeny tiny, single assertion unit tests, which is occasionally at odds with RTL's more integration style component tests. Over time, though, I've really come around on it. My favorite thing about writing component tests purely from a user perspective is that it often reminds me to make my code accessible. Non accessible code is often times untestable code, and I love that it keeps me honest! By separating business logic into pure helper functions, I'm also able to mostly maintain my teeny tiny unit testing habit while respecting the RTL ideology.",
  jest: "",
  cypress: "I first learned about cypress during a presentation at a meetup during its infancy in 2018 or so. I immediately started using it on my personal projects and was really happy when it started becoming an industry standard! Prior to that using tools like Capybara, Cucumber, or Selenium was always so painful for me. Cypress was a total game changer!",
}

const normalizer = Object.keys(notesData).reduce((acc, key: keyof typeof notesData) => acc + notesData[key].length, 0) / Object.keys(notesData).length

export const treemapData = {
  name: "Skills",
  children: [
    {
      name: "Frontend",
      children: [
        {
          category: "Frontend",
          name: "CSS",
          value: notesData.css.length + normalizer
        },
        {
          category: "Frontend",
          name: "Next.js",
          value: notesData.nextjs.length + normalizer
        },
        {
          category: "Frontend",
          name: "React",
          value: notesData.react.length + normalizer
        },
      ]
    },
    {
      name: "Backend",
      children: [
        {
          category: "Backend",
          name: "Node.js",
          value: notesData.node.length + normalizer
        },
        {
          category: "Backend",
          name: "Elixir",
          value: notesData.elixir.length + normalizer
        },
        {
          category: "Backend",
          name: "Ruby on Rails",
          value: notesData.rails.length + normalizer
        },
      ]
    },
    {
      name: "Testing",
      children: [
        {
          category: "Testing",
          name: "React Testing Library",
          value: notesData.react_testing_library.length + normalizer
        },
        {
          category: "Testing",
          name: "Jest",
          value: notesData.jest.length + normalizer
        },
        {
          category: "Testing",
          name: "Cypress",
          value: notesData.cypress.length + normalizer
        },
      ]
    },
  ],
};
