import { useLocation, useParams } from "wouter";
import { ArrowLeft, ExternalLink, Youtube, Code, Lightbulb, BookOpen } from "lucide-react";

type LanguageData = {
  slug: string;
  name: string;
  gradient: string;
  badge: string;
  badgeText: string;
  origin: string;
  bestFor: string[];
  projectIdeas: { title: string; desc: string }[];
  weekPlan: { week: string; topics: string[] }[];
  ytChannels: { name: string; url: string; focus: string }[];
};

const languages: LanguageData[] = [
  {
    slug: "cpp",
    name: "C++",
    gradient: "linear-gradient(135deg,#e8711a,#c0392b)",
    badge: "C++",
    badgeText: "#fff",
    origin:
      "C++ was created by Bjarne Stroustrup at Bell Labs starting in 1979, originally called 'C with Classes'. It was designed as an extension of C that added object-oriented features like classes and polymorphism. The first commercial release came in 1985. C++ has evolved significantly through C++11, C++14, C++17, and C++20 standards, each bringing modern features like lambda expressions, smart pointers, coroutines, and ranges. It remains one of the fastest and most widely used languages in the world, powering everything from operating systems to AAA video games to competitive programming.",
    bestFor: [
      "Competitive programming (CP) — the go-to language on Codeforces, ICPC",
      "Game engines — Unreal Engine is built in C++",
      "Systems software — OS kernels, device drivers, compilers",
      "Embedded systems and real-time applications",
      "High-frequency trading and performance-critical finance",
      "Graphics and rendering engines (Blender, VFX pipelines)",
    ],
    projectIdeas: [
      { title: "Mini Chess Engine", desc: "Implement basic chess move generation, evaluation, and minimax search." },
      { title: "File Compressor", desc: "Build a Huffman encoding compression tool that reads and compresses any file." },
      { title: "Ray Tracer", desc: "Implement a basic ray tracing renderer from scratch — great for learning graphics math." },
      { title: "STL-like Data Structures", desc: "Rebuild a simplified vector, linked list, and hash map to understand internals." },
      { title: "OS Shell", desc: "Create a basic Unix-like shell that executes commands, handles pipes, and redirections." },
    ],
    weekPlan: [
      { week: "Week 1", topics: ["Variables, data types, I/O with cin/cout", "Operators, control flow (if/else, loops)", "Functions and recursion basics"] },
      { week: "Week 2", topics: ["Arrays and strings", "Pointers and references", "Dynamic memory allocation (new/delete)"] },
      { week: "Week 3", topics: ["OOP: classes, constructors, destructors", "Inheritance and polymorphism", "Operator overloading"] },
      { week: "Week 4", topics: ["STL: vectors, pairs, maps, sets", "STL algorithms: sort, find, lower_bound", "Iterators and range-based for loops"] },
      { week: "Week 5", topics: ["Templates and generic programming", "Smart pointers: unique_ptr, shared_ptr", "File I/O and exception handling"] },
      { week: "Week 6", topics: ["Competitive programming patterns: DP, graphs, greedy", "Practice on Codeforces Div. 2 A/B problems", "Analyze time complexity of your solutions"] },
    ],
    ytChannels: [
      { name: "The Cherno", url: "https://youtube.com/@TheCherno", focus: "Game dev, C++ internals, memory" },
      { name: "CodeWithHarry", url: "https://youtube.com/@CodeWithHarry", focus: "Beginner-friendly Hindi C++ series" },
      { name: "Apna College", url: "https://youtube.com/@ApnaCollegeOfficial", focus: "DSA with C++ for interviews" },
      { name: "Striver (takeUforward)", url: "https://youtube.com/@takeUforward", focus: "CP + DSA interview prep" },
    ],
  },
  {
    slug: "python",
    name: "Python",
    gradient: "linear-gradient(135deg,#3776ab,#ffd340)",
    badge: "Py",
    badgeText: "#fff",
    origin:
      "Python was created by Guido van Rossum and first released in 1991. Van Rossum wanted a language that emphasized code readability and simplicity, inspired by the ABC language. The name came from Monty Python's Flying Circus — not the snake. Python 2 was widely adopted through the 2000s, and Python 3 (released 2008) is now the standard. Python's philosophy, captured in 'The Zen of Python', values simplicity and explicitness. Today, Python is the world's most popular programming language, dominating data science, machine learning, automation, and web backend development.",
    bestFor: [
      "Data science and analytics — pandas, NumPy, Matplotlib",
      "Machine learning and AI — scikit-learn, TensorFlow, PyTorch",
      "Web backend — Django and Flask are battle-tested frameworks",
      "Automation and scripting — the best glue language",
      "APIs and microservices with FastAPI",
      "Academic research and rapid prototyping",
    ],
    projectIdeas: [
      { title: "Web Scraper", desc: "Scrape a website (e.g., job listings) using BeautifulSoup and store in a CSV." },
      { title: "Sentiment Analyzer", desc: "Analyze Twitter data to determine positive/negative sentiment with NLTK or HuggingFace." },
      { title: "Personal Finance Dashboard", desc: "Parse your bank statement CSV, categorize expenses, and visualize with Matplotlib." },
      { title: "Chatbot with OpenAI API", desc: "Build a simple CLI chatbot using the OpenAI API and conversation history." },
      { title: "Image Classifier", desc: "Train a CNN on a dataset (e.g., cats vs dogs) using PyTorch or Keras." },
    ],
    weekPlan: [
      { week: "Week 1", topics: ["Syntax, variables, data types", "Control flow: if/else, for, while", "Functions, scope, and modules"] },
      { week: "Week 2", topics: ["Lists, tuples, dictionaries, sets", "List comprehensions and generators", "File I/O and error handling"] },
      { week: "Week 3", topics: ["OOP: classes, inheritance, dunder methods", "Decorators and context managers", "Iterators and functional programming (map, filter)"] },
      { week: "Week 4", topics: ["NumPy: arrays, broadcasting, operations", "Pandas: DataFrames, groupby, merge, plotting", "Reading CSVs and JSON data"] },
      { week: "Week 5", topics: ["Matplotlib and Seaborn for visualization", "Flask basics — build a simple REST API", "Working with external APIs (requests library)"] },
      { week: "Week 6", topics: ["Intro to ML: scikit-learn, model training, evaluation", "Train a simple classifier on a real dataset", "Deploy a Flask API to the web (Render or Railway)"] },
    ],
    ytChannels: [
      { name: "Corey Schafer", url: "https://youtube.com/@coreyms", focus: "Best Python tutorials on the internet" },
      { name: "Tech With Tim", url: "https://youtube.com/@TechWithTim", focus: "Projects, ML, game dev in Python" },
      { name: "Krish Naik", url: "https://youtube.com/@krishnaik06", focus: "ML/DL with Python, very practical" },
      { name: "Sentdex", url: "https://youtube.com/@sentdex", focus: "Finance, ML, neural networks in Python" },
    ],
  },
  {
    slug: "java",
    name: "Java",
    gradient: "linear-gradient(135deg,#f89820,#e05d2e)",
    badge: "☕",
    badgeText: "#fff",
    origin:
      "Java was created by James Gosling and his team at Sun Microsystems, with the first public release in 1995. The language was designed with the principle of 'Write Once, Run Anywhere' — Java programs compile to bytecode that runs on any platform with a Java Virtual Machine (JVM). Originally targeting interactive television, it quickly became the dominant language for enterprise software and web backends. Oracle acquired Sun Microsystems in 2010 and now stewards Java. Java remains one of the most widely used languages globally, powering Android apps, enterprise systems, and large-scale distributed applications at companies like Google, LinkedIn, and Amazon.",
    bestFor: [
      "Enterprise applications — Spring Boot is the gold standard",
      "Android development — Java was the original Android language",
      "Large-scale backend systems — used at Netflix, Amazon, LinkedIn",
      "Banking and financial systems — extremely stable ecosystem",
      "Distributed systems with Java concurrency features",
      "Interview prep — many FAANG interviews use Java",
    ],
    projectIdeas: [
      { title: "Banking System", desc: "CLI app with accounts, deposits, withdrawals, and transaction history using OOP." },
      { title: "Library Management System", desc: "Full CRUD with file persistence or a SQLite database via JDBC." },
      { title: "Spring Boot REST API", desc: "Build a REST API with Spring Boot, connected to a PostgreSQL database." },
      { title: "Chat Application", desc: "Multi-client chat server using Java sockets and threads." },
      { title: "Android To-Do App", desc: "Build a simple task manager app for Android using Java and Room DB." },
    ],
    weekPlan: [
      { week: "Week 1", topics: ["Syntax, data types, variables, operators", "Control flow, loops, and arrays", "Methods and basic I/O"] },
      { week: "Week 2", topics: ["OOP: classes, objects, constructors", "Inheritance, interfaces, polymorphism", "Abstract classes and encapsulation"] },
      { week: "Week 3", topics: ["Collections: ArrayList, HashMap, HashSet, LinkedList", "Comparable and Comparator for sorting", "Enhanced for loops and iterators"] },
      { week: "Week 4", topics: ["Exception handling: try/catch/finally, custom exceptions", "File I/O with BufferedReader and FileWriter", "Java 8+: Lambda expressions and Stream API"] },
      { week: "Week 5", topics: ["Multithreading: Thread class and Runnable interface", "Synchronization and thread safety", "Java 8 Streams and Optional"] },
      { week: "Week 6", topics: ["Spring Boot intro: controllers, services, repositories", "Build a REST API with Spring and JPA", "Connect to a database with Spring Data"] },
    ],
    ytChannels: [
      { name: "Telusko", url: "https://youtube.com/@Telusko", focus: "Java and Spring Boot, very thorough" },
      { name: "Programming with Mosh", url: "https://youtube.com/@programmingwithmosh", focus: "Clean Java fundamentals for beginners" },
      { name: "Amigoscode", url: "https://youtube.com/@amigoscode", focus: "Spring Boot and backend Java, real projects" },
      { name: "Kunal Kushwaha", url: "https://youtube.com/@KunalKushwaha", focus: "DSA in Java, interview prep, open source" },
    ],
  },
  {
    slug: "javascript",
    name: "JavaScript",
    gradient: "linear-gradient(135deg,#f7df1e,#e8a020)",
    badge: "JS",
    badgeText: "#222",
    origin:
      "JavaScript was created by Brendan Eich at Netscape Communications in just 10 days in 1995, originally named Mocha, then LiveScript, before becoming JavaScript — a marketing move to capitalize on Java's popularity (the two are unrelated). It was designed to add interactivity to web pages. JavaScript was standardized as ECMAScript in 1997. For years it was considered a 'toy language', but Node.js (2009) changed everything by bringing JavaScript to the server. Today, JavaScript is the only language that runs natively in browsers and is the most widely used programming language in the world for web development.",
    bestFor: [
      "Frontend web development — the only native browser language",
      "React, Vue, Angular — all JavaScript frameworks",
      "Backend with Node.js and Express.js",
      "Full-stack with Next.js, Remix, or Nuxt",
      "Mobile apps with React Native",
      "Serverless functions and edge computing",
    ],
    projectIdeas: [
      { title: "Weather App", desc: "Fetch from OpenWeatherMap API and display live weather with a clean UI." },
      { title: "Real-time Chat", desc: "Build a chat app with Socket.io — one of the best ways to learn websockets." },
      { title: "Portfolio Website", desc: "Build and deploy your personal developer portfolio with animations." },
      { title: "REST API with Express", desc: "Create a CRUD API for a note-taking app with Express.js and MongoDB." },
      { title: "React Dashboard", desc: "Build a data visualization dashboard using React and Chart.js or Recharts." },
    ],
    weekPlan: [
      { week: "Week 1", topics: ["Variables (var/let/const), data types", "DOM manipulation: querySelector, addEventListener", "Control flow, loops, and functions"] },
      { week: "Week 2", topics: ["Arrays and objects in depth", "ES6+: arrow functions, destructuring, spread/rest", "Template literals and optional chaining"] },
      { week: "Week 3", topics: ["Asynchronous JS: callbacks, promises", "async/await syntax", "Fetch API and working with REST APIs"] },
      { week: "Week 4", topics: ["React basics: components, props, state, hooks", "useEffect and managing side effects", "Routing with React Router"] },
      { week: "Week 5", topics: ["Node.js basics and the event loop", "Express.js: routes, middleware, error handling", "REST API design: GET, POST, PUT, DELETE"] },
      { week: "Week 6", topics: ["Connect frontend to backend (full-stack app)", "Authentication with JWT or sessions", "Deploy with Vercel (frontend) and Render (backend)"] },
    ],
    ytChannels: [
      { name: "Traversy Media", url: "https://youtube.com/@TraversyMedia", focus: "Practical JS, Node, React projects" },
      { name: "Fireship", url: "https://youtube.com/@Fireship", focus: "Fast-paced, high quality modern JS content" },
      { name: "Akshay Saini", url: "https://youtube.com/@akshaymarch7", focus: "Namaste JavaScript — JS internals explained beautifully" },
      { name: "Kevin Powell", url: "https://youtube.com/@KevinPowell", focus: "CSS + JS for frontend, highly recommended" },
    ],
  },
  {
    slug: "typescript",
    name: "TypeScript",
    gradient: "linear-gradient(135deg,#3178c6,#1a5fa8)",
    badge: "TS",
    badgeText: "#fff",
    origin:
      "TypeScript was developed by Microsoft and publicly released in October 2012, primarily authored by Anders Hejlsberg (also the creator of C#). It is a strict syntactical superset of JavaScript, meaning all valid JavaScript is valid TypeScript. TypeScript adds optional static typing, interfaces, generics, and enhanced IDE support. As JavaScript projects grew larger and harder to maintain, TypeScript emerged as the industry standard for scalable frontend and backend development. Today, virtually every major JavaScript framework (React, Angular, Vue, Nest.js) officially recommends TypeScript. Stack Overflow surveys consistently rank it among the most loved languages.",
    bestFor: [
      "Large-scale React and Angular applications",
      "APIs and backend with Node.js + TypeScript (NestJS, Hono)",
      "Monorepos and shared libraries across teams",
      "Open source libraries where type safety is critical",
      "Any JavaScript project that needs maintainability at scale",
      "GraphQL APIs with typed schemas",
    ],
    projectIdeas: [
      { title: "Typed REST API", desc: "Build an Express API with full TypeScript types, Zod validation, and Prisma." },
      { title: "Component Library", desc: "Create a small React component library with TypeScript and publish to npm." },
      { title: "CLI Tool", desc: "Build a command-line tool with TypeScript and ts-node." },
      { title: "Full-stack Next.js App", desc: "Build a blog or e-commerce site with Next.js 14 + TypeScript." },
      { title: "Type-safe State Machine", desc: "Implement a finite state machine with discriminated unions — great for learning advanced types." },
    ],
    weekPlan: [
      { week: "Week 1", topics: ["Types, type inference, and type annotations", "Interfaces vs type aliases", "Enums, tuples, and union types"] },
      { week: "Week 2", topics: ["Functions with typed parameters and return types", "Classes and access modifiers (public, private, readonly)", "Generics: writing reusable typed functions"] },
      { week: "Week 3", topics: ["Advanced types: mapped types, conditional types", "Type guards and narrowing", "Utility types: Partial, Required, Pick, Omit, Record"] },
      { week: "Week 4", topics: ["TypeScript with React: typing props, state, hooks", "React.FC vs function components with explicit types", "Typing event handlers and refs"] },
      { week: "Week 5", topics: ["TypeScript with Node.js and Express", "Prisma ORM with TypeScript", "Environment variable type safety with Zod"] },
      { week: "Week 6", topics: ["Build a full-stack Next.js + TypeScript project", "Add tRPC or GraphQL for type-safe APIs", "Deploy to Vercel with proper TS configuration"] },
    ],
    ytChannels: [
      { name: "Matt Pocock", url: "https://youtube.com/@mattpocockuk", focus: "Advanced TypeScript, the best TS teacher" },
      { name: "Fireship", url: "https://youtube.com/@Fireship", focus: "TypeScript quick dives, very sharp" },
      { name: "Traversy Media", url: "https://youtube.com/@TraversyMedia", focus: "Practical TS + React projects" },
      { name: "Jack Herrington", url: "https://youtube.com/@jherr", focus: "TypeScript patterns, microfrontends, advanced React" },
    ],
  },
  {
    slug: "rust",
    name: "Rust",
    gradient: "linear-gradient(135deg,#ce4a00,#7c2900)",
    badge: "🦀",
    badgeText: "#fff",
    origin:
      "Rust began as a personal project of Mozilla employee Graydon Hoare in 2006. Mozilla began sponsoring it in 2009 and announced it in 2010. The first stable release (Rust 1.0) came in 2015. Rust was created to solve fundamental memory safety problems in systems programming without using a garbage collector — instead using an ownership model with borrowing and lifetimes enforced at compile time. Since 2016, Rust has been the most loved language in Stack Overflow's developer survey for 8 consecutive years. It is used at Microsoft, Google, Amazon, Meta, and the Linux kernel now includes Rust as a supported language.",
    bestFor: [
      "Systems programming where C/C++ was previously required",
      "WebAssembly (Wasm) — Rust compiles to the fastest Wasm",
      "CLI tools — fast, self-contained binaries",
      "Game development with the Bevy engine",
      "Embedded systems and microcontrollers (no OS required)",
      "Network programming, parsers, and compilers",
    ],
    projectIdeas: [
      { title: "CLI File Manager", desc: "Build a command-line file browser with navigation, copy, and delete using Rust std library." },
      { title: "HTTP Server from Scratch", desc: "Implement a basic HTTP/1.1 server using std::net::TcpListener without any framework." },
      { title: "Markdown to HTML Converter", desc: "Write a parser that reads markdown and outputs HTML — great for learning parsing." },
      { title: "Todo App with Serde", desc: "Build a persistent todo CLI that serializes/deserializes JSON with serde." },
      { title: "Game in Bevy", desc: "Make a small 2D game (snake, pong, or platformer) using the Bevy game engine." },
    ],
    weekPlan: [
      { week: "Week 1", topics: ["Variables, mutability, and data types", "Ownership, borrowing, and the borrow checker", "Slices and the stack vs heap distinction"] },
      { week: "Week 2", topics: ["Structs and their methods (impl blocks)", "Enums and pattern matching (match keyword)", "Option<T> and Result<T, E> for error handling"] },
      { week: "Week 3", topics: ["Traits: defining and implementing shared behavior", "Generics and lifetime annotations", "Closures and iterators"] },
      { week: "Week 4", topics: ["Modules and the Rust package system (Cargo)", "Error handling with ? operator and custom errors", "Testing in Rust: unit tests and integration tests"] },
      { week: "Week 5", topics: ["Concurrency: threads and the Send/Sync traits", "Message passing with channels (mpsc)", "Arc<Mutex<T>> for shared state"] },
      { week: "Week 6", topics: ["Build a CLI tool with Clap crate", "Or: build an HTTP API with Axum", "Publish your crate to crates.io"] },
    ],
    ytChannels: [
      { name: "Jon Gjengset", url: "https://youtube.com/@jonhoo", focus: "Deep, expert-level Rust — best for serious learning" },
      { name: "Let's Get Rusty", url: "https://youtube.com/@letsgetrusty", focus: "Beginner to intermediate Rust, covers the book" },
      { name: "Fireship", url: "https://youtube.com/@Fireship", focus: "Rust quick intros and humor" },
      { name: "No Boilerplate", url: "https://youtube.com/@NoBoilerplate", focus: "Rust evangelism, motivational and informative" },
    ],
  },
  {
    slug: "go",
    name: "Go (Golang)",
    gradient: "linear-gradient(135deg,#00acd7,#007d9c)",
    badge: "Go",
    badgeText: "#fff",
    origin:
      "Go (commonly called Golang) was designed at Google by Robert Griesemer, Rob Pike, and Ken Thompson, with the first public release in 2009 and Go 1.0 in 2012. It was created out of frustration with slow build times and complex dependency management in large C++ codebases at Google. Go was designed to be simple, fast to compile, and easy to write concurrent programs in. Its goroutines and channels make concurrency lightweight and readable. Go powers some of the most important infrastructure software in the world: Docker, Kubernetes, Terraform, CockroachDB, and Caddy are all written in Go.",
    bestFor: [
      "Backend APIs and microservices — fast and resource-efficient",
      "Cloud-native tooling and Kubernetes operators",
      "CLI tools — Go produces single, self-contained binaries",
      "DevOps infrastructure (Terraform, Ansible providers)",
      "Network services and proxies with high concurrency",
      "Serverless functions on AWS Lambda or GCP Cloud Functions",
    ],
    projectIdeas: [
      { title: "URL Shortener API", desc: "Build a REST API that creates short URLs, stores in Redis or SQLite, and redirects." },
      { title: "Concurrent Web Scraper", desc: "Scrape multiple URLs in parallel using goroutines and channels." },
      { title: "CLI Task Manager", desc: "A todo app as a CLI binary with subcommands (add, list, done, delete)." },
      { title: "TCP Chat Server", desc: "Build a multi-client chat server using Go's net package and goroutines." },
      { title: "REST API with Gin + PostgreSQL", desc: "Full CRUD API using the Gin framework and GORM for database access." },
    ],
    weekPlan: [
      { week: "Week 1", topics: ["Variables, constants, and basic types", "Functions, multiple return values, named returns", "Control flow: if, for (Go's only loop), switch"] },
      { week: "Week 2", topics: ["Arrays, slices, and maps", "Structs and methods", "Pointers in Go (simpler than C)"] },
      { week: "Week 3", topics: ["Interfaces: implicit implementation, the empty interface", "Type assertions and type switches", "Error handling with error interface and custom errors"] },
      { week: "Week 4", topics: ["Goroutines and the go keyword", "Channels: unbuffered and buffered", "select statement for concurrent operations"] },
      { week: "Week 5", topics: ["HTTP server with net/http package", "Building a REST API from scratch", "JSON encoding/decoding with encoding/json"] },
      { week: "Week 6", topics: ["Using Gin or Chi for a production REST API", "Working with PostgreSQL via sqlx or GORM", "Writing tests in Go with testing package"] },
    ],
    ytChannels: [
      { name: "TechWorld with Nana", url: "https://youtube.com/@TechWorldwithNana", focus: "Go for DevOps and cloud, very practical" },
      { name: "NerdCademy", url: "https://youtube.com/@NerdCademy", focus: "Go tutorials, beginner-friendly" },
      { name: "Anthony GG", url: "https://youtube.com/@anthonygg_", focus: "Go projects, clean architecture, advanced" },
      { name: "Dreams of Code", url: "https://youtube.com/@dreamsofcode", focus: "Go + tools, great production mindset" },
    ],
  },
  {
    slug: "kotlin",
    name: "Kotlin",
    gradient: "linear-gradient(135deg,#7f52ff,#e44857)",
    badge: "Kt",
    badgeText: "#fff",
    origin:
      "Kotlin was created by JetBrains (the company behind IntelliJ IDEA and Android Studio) and publicly released in 2011, with Kotlin 1.0 arriving in 2016. JetBrains needed a more modern language for their own large codebase. In 2017, Google announced official support for Kotlin on Android, and by 2019 it became the preferred language for Android development, surpassing Java. Kotlin is fully interoperable with Java, meaning you can use all Java libraries in Kotlin and vice versa. Kotlin also introduced Kotlin Multiplatform (KMP), which allows sharing business logic between Android, iOS, and web.",
    bestFor: [
      "Android development — the official preferred language",
      "Jetpack Compose for modern Android UI",
      "Kotlin Multiplatform for sharing code across platforms",
      "Spring Boot backend — Kotlin + Spring is increasingly popular",
      "Kotlin coroutines for elegant async programming",
      "Replacing Java in enterprise codebases gradually",
    ],
    projectIdeas: [
      { title: "Android Calculator", desc: "Build a calculator with Jetpack Compose and proper state management." },
      { title: "Note-Taking App", desc: "Full Android app with Room database, ViewModel, and Compose UI." },
      { title: "Weather Android App", desc: "Fetch weather from API using Retrofit and display with Compose." },
      { title: "Spring Boot + Kotlin API", desc: "Build a REST API using Spring Boot, Kotlin, and JPA with PostgreSQL." },
      { title: "KMP Shared Logic", desc: "Shared business logic between Android and iOS using Kotlin Multiplatform." },
    ],
    weekPlan: [
      { week: "Week 1", topics: ["Variables (val vs var), data types, null safety", "Functions and default parameters", "Control flow: when (Kotlin's switch), loops"] },
      { week: "Week 2", topics: ["Classes, data classes, and sealed classes", "Objects and companion objects", "Inheritance, interfaces, and abstract classes"] },
      { week: "Week 3", topics: ["Extension functions and properties", "Lambda expressions and higher-order functions", "Kotlin standard library: let, apply, run, also, with"] },
      { week: "Week 4", topics: ["Introduction to Android Studio and Jetpack Compose", "Composable functions, state, and recomposition", "Navigation in Compose: NavHost and routes"] },
      { week: "Week 5", topics: ["ViewModel, LiveData, and StateFlow", "Room database for local storage", "Retrofit for network requests"] },
      { week: "Week 6", topics: ["Kotlin Coroutines: launch, async, Flow", "Hilt for dependency injection", "Build and publish a complete Android app"] },
    ],
    ytChannels: [
      { name: "Philipp Lackner", url: "https://youtube.com/@PhilippLackner", focus: "Best Kotlin + Android + Compose tutorials" },
      { name: "Coding in Flow", url: "https://youtube.com/@codinginflow", focus: "Android, Room, Retrofit, practical projects" },
      { name: "Android Developers", url: "https://youtube.com/@AndroidDevelopers", focus: "Official Google channel for Android/Kotlin" },
      { name: "Simplified Coding", url: "https://youtube.com/@SimplifiedCoding", focus: "Kotlin for beginners and Android basics" },
    ],
  },
];

export default function LanguageDetail() {
  const params = useParams<{ slug: string }>();
  const [, navigate] = useLocation();

  const lang = languages.find((l) => l.slug === params.slug);

  if (!lang) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center" style={{ background: "linear-gradient(135deg,#2e3f52,#1e2d3d)" }}>
        <p className="text-white text-xl font-bold mb-4">Language not found</p>
        <button onClick={() => navigate("/languages")} className="text-white/50 underline text-sm hover:text-white">← Back to languages</button>
      </div>
    );
  }

  return (
    <div className="min-h-screen" style={{ background: "linear-gradient(135deg, #2e3f52 0%, #1e2d3d 60%, #16232f 100%)" }}>
      {/* Header */}
      <header className="flex items-center gap-4 px-6 py-5 border-b border-white/10">
        <button
          onClick={() => navigate("/languages")}
          className="flex items-center gap-2 text-white/60 hover:text-white transition-colors group text-sm"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-0.5 transition-transform" />
          Languages
        </button>
        <div className="h-4 w-px bg-white/20" />
        <h1 className="text-white font-bold text-lg">{lang.name}</h1>
      </header>

      <main className="max-w-2xl mx-auto px-6 py-10 pb-20">
        {/* Hero badge */}
        <div
          className="flex flex-col items-center text-center p-8 rounded-3xl mb-8"
          style={{ background: lang.gradient }}
        >
          <div
            className="w-20 h-20 rounded-2xl flex items-center justify-center text-3xl font-black mb-4 shadow-lg"
            style={{ background: "rgba(0,0,0,0.20)", color: lang.badgeText, fontFamily: "monospace" }}
          >
            {lang.badge}
          </div>
          <h2 className="text-white text-2xl font-black mb-1">{lang.name}</h2>
          <p className="text-white/70 text-sm">Complete Fresher's Guide</p>
        </div>

        {/* Origin */}
        <section className="mb-8">
          <h3 className="text-white font-bold text-base mb-3 flex items-center gap-2">
            <BookOpen size={15} className="text-white/50" />
            Origin & History
          </h3>
          <p className="text-white/65 text-sm leading-relaxed">{lang.origin}</p>
        </section>

        {/* Best For */}
        <section className="mb-8">
          <h3 className="text-white font-bold text-base mb-3 flex items-center gap-2">
            <Code size={15} className="text-white/50" />
            What {lang.name} Does Best
          </h3>
          <div className="flex flex-col gap-2">
            {lang.bestFor.map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="text-white/40 text-sm flex-shrink-0">→</span>
                <p className="text-white/65 text-sm">{item}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Project Ideas */}
        <section className="mb-8">
          <h3 className="text-white font-bold text-base mb-3 flex items-center gap-2">
            <Lightbulb size={15} className="text-white/50" />
            Project Ideas to Build
          </h3>
          <div className="flex flex-col gap-3">
            {lang.projectIdeas.map((p, i) => (
              <div
                key={i}
                className="p-4 rounded-2xl"
                style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}
              >
                <div className="flex items-start gap-3">
                  <span
                    className="flex-shrink-0 w-6 h-6 rounded-lg flex items-center justify-center text-xs font-bold text-white/50 mt-0.5"
                    style={{ background: "rgba(255,255,255,0.08)" }}
                  >
                    {i + 1}
                  </span>
                  <div>
                    <p className="text-white font-semibold text-sm mb-1">{p.title}</p>
                    <p className="text-white/55 text-xs leading-snug">{p.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Week Plan */}
        <section className="mb-8">
          <h3 className="text-white font-bold text-base mb-3">6-Week Learning Roadmap</h3>
          <div className="flex flex-col gap-3">
            {lang.weekPlan.map((w, i) => (
              <div
                key={i}
                className="p-4 rounded-2xl"
                style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}
              >
                <div
                  className="inline-block text-xs font-bold px-2.5 py-0.5 rounded-full mb-2"
                  style={{ background: lang.gradient, color: "#fff" }}
                >
                  {w.week}
                </div>
                <ul className="flex flex-col gap-1">
                  {w.topics.map((topic, j) => (
                    <li key={j} className="text-white/65 text-sm flex items-start gap-2">
                      <span className="text-white/30 flex-shrink-0">·</span>
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* YouTube Channels */}
        <section>
          <h3 className="text-white font-bold text-base mb-3 flex items-center gap-2">
            <Youtube size={15} className="text-white/50" />
            Recommended YouTube Channels
          </h3>
          <div className="flex flex-col gap-3">
            {lang.ytChannels.map((ch) => (
              <a
                key={ch.name}
                href={ch.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between gap-4 p-4 rounded-2xl group transition-all hover:brightness-110"
                style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.09)" }}
              >
                <div>
                  <p className="text-white font-semibold text-sm group-hover:underline">{ch.name}</p>
                  <p className="text-white/50 text-xs mt-0.5">{ch.focus}</p>
                </div>
                <ExternalLink size={14} className="text-white/30 group-hover:text-white/60 flex-shrink-0 transition-colors" />
              </a>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
