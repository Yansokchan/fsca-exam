
export interface QuestionAnswer {
  id: number;
  question: string;
  answer: string;
  tags: string[];
}

export const questionsData: QuestionAnswer[] = [
  {
    id: 1,
    question: "What is JavaScript?",
    answer: "JavaScript is a programming language that enables interactive web pages. It is an essential part of web applications, and the majority of websites use it for client-side page behavior.",
    tags: ["programming", "basics", "web development"]
  },
  {
    id: 2,
    question: "How do I create a responsive website?",
    answer: "Creating a responsive website involves using flexible grid layouts, responsive images, and CSS media queries. This ensures your site looks good on all devices, from desktop computers to mobile phones.",
    tags: ["web design", "css", "responsive"]
  },
  {
    id: 3,
    question: "What is React?",
    answer: "React is a JavaScript library for building user interfaces, particularly single-page applications. It allows developers to create reusable UI components and efficiently update the DOM when data changes.",
    tags: ["programming", "javascript", "frontend"]
  },
  {
    id: 4,
    question: "How do I optimize website performance?",
    answer: "To optimize website performance, minimize HTTP requests, compress images, use browser caching, minify CSS and JavaScript files, and consider using a Content Delivery Network (CDN).",
    tags: ["performance", "optimization", "web development"]
  },
  {
    id: 5,
    question: "What is CSS Grid?",
    answer: "CSS Grid is a two-dimensional layout system designed for user interface design. It enables the creation of complex responsive layouts with rows and columns, making it easier to design web pages without using floats and positioning.",
    tags: ["css", "layout", "web design"]
  },
  {
    id: 6,
    question: "How do API requests work?",
    answer: "API requests work by sending HTTP requests to a server endpoint. The client sends a request with specific parameters, and the server processes this request and returns a response, typically in JSON or XML format.",
    tags: ["api", "backend", "programming"]
  },
  {
    id: 7,
    question: "What is TypeScript?",
    answer: "TypeScript is a superset of JavaScript that adds static typing to the language. It helps catch errors during development and provides better tooling support, making it easier to maintain large codebases.",
    tags: ["programming", "javascript", "typescript"]
  },
  {
    id: 8,
    question: "How do I deploy a website?",
    answer: "To deploy a website, you need to choose a hosting provider, register a domain name, upload your files to the server (using FTP or Git), and configure your domain to point to your hosting provider.",
    tags: ["deployment", "hosting", "web development"]
  },
  {
    id: 9,
    question: "What is SEO?",
    answer: "Search Engine Optimization (SEO) is the practice of increasing the quantity and quality of traffic to your website through organic search engine results. It involves optimizing content, improving site structure, and building backlinks.",
    tags: ["seo", "marketing", "web"]
  },
  {
    id: 10,
    question: "How do I use Git for version control?",
    answer: "To use Git, initialize a repository with 'git init', make changes to your files, stage them with 'git add', and commit them with 'git commit'. You can create branches with 'git branch', and push to remote repositories with 'git push'.",
    tags: ["git", "version control", "development"]
  },
  {
    id: 11,
    question: "What are CSS preprocessors?",
    answer: "CSS preprocessors like Sass, LESS, and Stylus extend CSS with features like variables, nesting, mixins, and functions. They help organize CSS code and make it more maintainable, especially for large projects.",
    tags: ["css", "web design", "frontend"]
  },
  {
    id: 12,
    question: "How do I implement authentication in my application?",
    answer: "To implement authentication, you can use techniques like JWT (JSON Web Tokens), OAuth, or session-based authentication. You'll need to create login/registration forms, securely store passwords, and protect routes/resources based on user permissions.",
    tags: ["security", "authentication", "backend"]
  },
  {
    id: 13,
    question: "What is a REST API?",
    answer: "A REST API (Representational State Transfer) is an architectural style for designing networked applications. It uses HTTP requests to GET, PUT, POST, and DELETE data, and is stateless, meaning each request contains all necessary information.",
    tags: ["api", "backend", "architecture"]
  },
  {
    id: 14,
    question: "How do I optimize images for the web?",
    answer: "To optimize images for the web, use the appropriate format (JPEG for photos, PNG for transparency, SVG for graphics), compress them without significant quality loss, specify dimensions, and consider lazy loading for better performance.",
    tags: ["images", "performance", "web design"]
  },
  {
    id: 15,
    question: "What is a progressive web app (PWA)?",
    answer: "A Progressive Web App (PWA) is a website that uses modern web capabilities to deliver an app-like experience to users. PWAs are reliable (work offline), fast, and engaging with features like push notifications and home screen installation.",
    tags: ["pwa", "mobile", "web development"]
  },
  {
    id: 16,
    question: "How do I make websites accessible?",
    answer: "To make websites accessible, use semantic HTML, provide alt text for images, ensure keyboard navigation, maintain sufficient color contrast, use ARIA attributes when needed, and test with screen readers and other assistive technologies.",
    tags: ["accessibility", "a11y", "web design"]
  },
  {
    id: 17,
    question: "What is Node.js?",
    answer: "Node.js is a JavaScript runtime built on Chrome's V8 engine that allows developers to run JavaScript on the server side. It's event-driven, non-blocking, and enables building scalable network applications.",
    tags: ["node.js", "javascript", "backend"]
  },
  {
    id: 18,
    question: "How do I implement responsive images?",
    answer: "Implement responsive images using the 'srcset' and 'sizes' attributes or the 'picture' element. This allows browsers to choose the best image based on the device's screen size, resolution, and other factors.",
    tags: ["images", "responsive", "web design"]
  },
  {
    id: 19,
    question: "What is webpack?",
    answer: "Webpack is a module bundler for JavaScript applications. It takes modules with dependencies and generates static assets representing those modules, helping manage and optimize the build process for web applications.",
    tags: ["webpack", "build tools", "javascript"]
  },
  {
    id: 20,
    question: "How do CSS media queries work?",
    answer: "CSS media queries allow you to apply different styles based on device characteristics like screen width, height, or orientation. They use the @media rule to conditionally apply CSS when the defined conditions are true.",
    tags: ["css", "responsive", "web design"]
  },
  {
    id: 21,
    question: "What is the box model in CSS?",
    answer: "The CSS box model describes the rectangular boxes generated for elements in the document tree. It consists of content, padding, border, and margin areas, which can be adjusted using CSS properties to control layout and spacing.",
    tags: ["css", "box model", "web design"]
  },
  {
    id: 22,
    question: "How do I use Flexbox for layout?",
    answer: "To use Flexbox, set an element's display property to 'flex' or 'inline-flex'. This creates a flex container, and its direct children become flex items. You can then use properties like justify-content, align-items, and flex to control the layout.",
    tags: ["css", "flexbox", "layout"]
  },
  {
    id: 23,
    question: "What are web components?",
    answer: "Web Components are a set of web platform APIs that allow you to create custom, reusable, encapsulated HTML tags for use in web pages and apps. They consist of Custom Elements, Shadow DOM, HTML Templates, and HTML Imports.",
    tags: ["web components", "frontend", "javascript"]
  },
  {
    id: 24,
    question: "How do I implement form validation?",
    answer: "Implement form validation using HTML5 attributes like 'required', 'pattern', and 'type', combined with JavaScript for custom validations. Show clear error messages, validate in real-time, and ensure the form is accessible.",
    tags: ["forms", "validation", "usability"]
  },
  {
    id: 25,
    question: "What is CORS?",
    answer: "Cross-Origin Resource Sharing (CORS) is a security feature that restricts web pages from making requests to a different domain than the one that served the original page. It can be configured server-side to allow specific cross-origin requests.",
    tags: ["security", "cors", "web"]
  },
  {
    id: 26,
    question: "How do I use local storage in the browser?",
    answer: "Use localStorage by calling localStorage.setItem(key, value) to store data, localStorage.getItem(key) to retrieve it, and localStorage.removeItem(key) to delete it. Data is stored as strings and persists across browser sessions.",
    tags: ["storage", "javascript", "browser"]
  },
  {
    id: 27,
    question: "What is a single-page application (SPA)?",
    answer: "A Single-Page Application (SPA) is a web application that loads a single HTML page and dynamically updates content as the user interacts with it, without reloading the entire page. SPAs typically rely heavily on JavaScript frameworks like React, Vue, or Angular.",
    tags: ["spa", "architecture", "frontend"]
  },
  {
    id: 28,
    question: "How do I implement dark mode on a website?",
    answer: "Implement dark mode using CSS variables for colors, a toggle switch UI element, JavaScript to change the theme, and the 'prefers-color-scheme' media query for respecting user preferences. Store the user's preference in localStorage.",
    tags: ["dark mode", "ui", "css"]
  },
  {
    id: 29,
    question: "What is AJAX?",
    answer: "AJAX (Asynchronous JavaScript and XML) is a technique that allows web pages to be updated asynchronously by exchanging data with a server behind the scenes. This means parts of a page can be updated without reloading the entire page.",
    tags: ["ajax", "javascript", "web"]
  },
  {
    id: 30,
    question: "How do I optimize CSS for performance?",
    answer: "Optimize CSS by removing unused styles, minimizing specificity, reducing duplicates, using efficient selectors, minifying files, considering critical CSS, and employing techniques like code splitting for larger applications.",
    tags: ["css", "performance", "optimization"]
  }
];
