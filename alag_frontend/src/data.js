import reactjs from './assets/technology-icon/physics.png'
import js from './assets/technology-icon/java-script.png'
import server from './assets/technology-icon/server.png'
import html from './assets/technology-icon/html.png'
import css from './assets/technology-icon/css-3.png'
import node from './assets/technology-icon/node-js.png'
import redux from './assets/technology-icon/redux-icon-2048x1945-ahvhunxp-removebg-preview.png'
import android from './assets/technology-icon/android.png'
import ios from './assets/technology-icon/apple.png'
import express from './assets/technology-icon/express-removebg-preview.png'
import reactnative from './assets/technology-icon/Rectangle 1.png'
import mongo from './assets/technology-icon/mongodb (1).png'
import postman from './assets/technology-icon/sky.png'
import jest from './assets/technology-icon/red.png'
import flutter from './assets/technology-icon/flutter.png'
import python from './assets/technology-icon/python.png'
import django from './assets/technology-icon/django.png'
import psql from './assets/technology-icon/psql-removebg-preview.png'
import figma from './assets/technology-icon/figma.png'
import sketch from './assets/technology-icon/sketch.png'
import adobe from './assets/technology-icon/adobe.png'
import invision from './assets/technology-icon/invision.png'
import photoshop from './assets/technology-icon/adobe-photoshop.png'
import illustrator from './assets/technology-icon/illustrator.png'
import panda from './assets/technology-icon/panda.png'
import mat from './assets/technology-icon/mat2-removebg-preview.png'
import learn from './assets/technology-icon/Scikit-removebg-preview.png'
import jupyter from './assets/technology-icon/rg1.png'
import docker from './assets/technology-icon/docker-removebg-preview.png'
import hadoop from './assets/technology-icon/What is Hadoop.jpg'
import aws from './assets/technology-icon/web.png'
import cgp from './assets/technology-icon/cgp-removebg-preview.png'
import tenserflow from './assets/technology-icon/tf.png'
import pytorch from './assets/technology-icon/py.png'
import keras from './assets/technology-icon/keras.png'
import bg1 from './assets/img/bg7.png'
import mlpy from './assets/img/ML + python 3.png'
import bg2 from './assets/img/pythonn full stack.png'
import bg3 from './assets/img/javascript.png'
import bg4 from './assets/img/flutter.png'
import bg5 from './assets/img/bg.png'
import bg6 from './assets/img/pyai.png'
import bg7 from './assets/img/bgg7.png'
import bg8 from './assets/img/bg8.png'
import bg9 from './assets/img/bg9.png'
import bg10 from './assets/img/node1.png'
import bg11 from './assets/img/node+react.png'
// import bg9 from './assets/img/' 

const data = [
  {
    "id": 1,
    "title": "Full Stack JavaScript",
    "description": "This course covers JavaScript, the core scripting language for web development. Learn to create dynamic and interactive web applications by mastering core concepts like variables, functions, objects, and asynchronous programming. Explore modern JavaScript features, including ES6+ syntax, and work with libraries and frameworks to enhance your development skills. Build practical, real-world applications and gain a solid understanding of front-end and back-end integration.",
    "backgroundImage": bg3,
    image: "JavaScript",
    "toolsAndTechnology": [
      { name: "React", image: reactjs },
      { name: "JavaScript", image: js },
      { name: "MongoDB", image: server },
      { name: "HTML", image: html },
      { name: "CSS", image: css },
      { name: "Node.js", image: node }
    ],
    "sectionData": [
      {
        "key": "foundation",
        "title": "Foundations of JavaScript",
        "description": "Establish a strong foundation in JavaScript, covering fundamentals to advanced concepts necessary for web development.",
        "subsections": [
          {
            "key": "fundamentals",
            "title": "JavaScript Fundamentals",
            "description": "Learn the basics of JavaScript, including variables, functions, and event handling."
          },
          {
            "key": "advanced",
            "title": "Advanced JavaScript Concepts",
            "description": "Dive deeper into JavaScript with advanced topics like closures, asynchronous programming, and more."
          },
          {
            "key": "htmlCss",
            "title": "HTML and CSS Fundamentals",
            "description": "Learn the basics of HTML and CSS to create and style web pages."
          }
        ]
      },
      {
        key: "intermediate",
        title: "Intermediate JavaScript",
        description: "Build on your JavaScript foundation with more in-depth knowledge and practices.",
        subsections: [
          {
            key: "oop",
            title: "Object-Oriented Programming",
            description: "Learn the principles of OOP and how to apply them in JavaScript."
          },
          {
            key: "functionalProgramming",
            title: "Functional Programming",
            description: "Explore the concepts of functional programming in JavaScript."
          },
          {
            key: "errorHandling",
            title: "Error Handling",
            description: "Understand how to properly handle errors in JavaScript applications."
          },
          {
            key: "asynchronousJS",
            title: "Asynchronous JavaScript",
            description: "Master asynchronous programming with callbacks, promises, and async/await."
          },
          {
            key: "modules",
            title: "Modules",
            description: "Learn how to organize your code using ES6 modules."
          }
        ]
      },
      {
        key: "advanced",
        title: "Advanced JavaScript",
        description: "Gain expertise in advanced JavaScript topics for professional-level development.",
        subsections: [
          {
            key: "designPatterns",
            title: "Design Patterns",
            description: "Understand common design patterns and how to implement them in JavaScript."
          },
          {
            key: "performanceOptimization",
            title: "Performance Optimization",
            description: "Learn techniques to optimize the performance of JavaScript applications."
          },
          {
            key: "testing",
            title: "Testing",
            description: "Get acquainted with testing frameworks and libraries for writing unit and integration tests."
          },
          {
            key: "buildTools",
            title: "Build Tools",
            description: "Explore tools like Webpack, Babel, and others for enhancing your development workflow."
          },
          {
            key: "security",
            title: "Security",
            description: "Learn about common security issues and best practices for securing JavaScript applications."
          }
        ]
      }
    ]
  },
  {
    "id": 2,
    "title": "React JS",
    "description": "The world can’t live without mobile and web applications in this day and age. Everything is digitized, from booking cabs to ordering food to making bank transactions. Thanks to efficient frameworks that provide a seamless user experience. One such robust frontend library is React. This tutorial on ‘what is React’ will help you understand the library’s fundamentals and work with a simple demo.",
    "backgroundImage": bg1,
    image: "React",
    "toolsAndTechnology": [
      { name: "React", image: reactjs },
      { name: "node", image: node },
      { name: "html", image: html },
      { name: "css", image: css },
      { name: "redux", image: redux },
      { name: "javascript", image: js }
    ],
    "sectionData": [
      {
        key: "foundation",
        title: "Foundations of React",
        description: "Establish a strong foundation in React, covering fundamentals to advanced concepts necessary for web development.",
        subsections: [
          {
            key: "reactBasics",
            title: "React Basics",
            description: "Learn the basics of React, including components, props, and state."
          },
          {
            key: "jsx",
            title: "JSX",
            description: "Understand JSX syntax and how it integrates with JavaScript."
          },
          {
            key: "reactLifecycle",
            title: "React Lifecycle Methods",
            description: "Learn about React component lifecycle methods and their usage."
          }
        ]
      },
      {
        key: "intermediate",
        title: "Intermediate React",
        description: "Build on your React foundation with more in-depth knowledge and practices.",
        subsections: [
          {
            key: "stateManagement",
            title: "State Management",
            description: "Learn about state management solutions like Context API, Redux, and MobX."
          },
          {
            key: "reactHooks",
            title: "React Hooks",
            description: "Understand the power of React Hooks to manage state and side effects in functional components."
          },
          {
            key: "reactRouter",
            title: "React Router",
            description: "Get to grips with React Router for building single-page applications with dynamic routing."
          },
          {
            key: "formHandling",
            title: "Form Handling",
            description: "Learn how to manage form state and validation in React."
          },
          {
            key: "apiIntegration",
            title: "API Integration",
            description: "Understand how to integrate external APIs with your React applications."
          }
        ]
      },
      {
        key: "advanced",
        title: "Advanced React",
        description: "Gain expertise in advanced React topics for professional-level development.",
        subsections: [
          {
            key: "performanceOptimization",
            title: "Performance Optimization",
            description: "Learn techniques to optimize the performance of React applications."
          },
          {
            key: "reactPatterns",
            title: "React Design Patterns",
            description: "Understand common design patterns and how to implement them in React."
          },
          {
            key: "testingReact",
            title: "Testing React Applications",
            description: "Get acquainted with testing frameworks and libraries for writing unit and integration tests."
          },
          {
            key: "serverSideRendering",
            title: "Server-Side Rendering",
            description: "Explore server-side rendering (SSR) and how to implement it with React."
          },
          {
            key: "reactNative",
            title: "React Native",
            description: "Learn the basics of building mobile applications using React Native."
          }
        ]
      }
    ]
  },
  {
    "id": 3,
    "title": "React Native & FireBase",
    "description": "In this course, you'll explore React Native and Firebase for mobile app development. Learn to build cross-platform apps with React Native's component-based framework while integrating Firebase for backend services. Gain hands-on experience with authentication, real-time databases, and cloud storage, enabling you to create robust, scalable, and feature-rich mobile applications.",
    "backgroundImage": bg11,
    image: "ReactNative",
    "toolsAndTechnology": [
      { "name": "React", image: reactjs },
      { "name": "React Native", image: node },
      { "name": "Android", image: android },
      { "name": "iOS", image: ios },
      { "name": "Redux", image: redux },
      { "name": "Flux", image: server }
    ],
    "sectionData": [
      {
        key: "foundationReactNative",
        title: "Foundations of React Native",
        description: "Establish a strong foundation in React Native, covering fundamentals necessary for mobile app development.",
        subsections: [
          {
            key: "reactNativeBasics",
            title: "React Native Basics",
            description: "Learn the basics of React Native, including components, props, and state."
          },
          {
            key: "navigation",
            title: "Navigation in React Native",
            description: "Understand how to implement navigation in React Native applications using React Navigation."
          },
          {
            key: "styling",
            title: "Styling in React Native",
            description: "Learn how to style React Native components using StyleSheet and other styling libraries."
          },
          {
            key: "layout",
            title: "Layout and Flexbox",
            description: "Understand how to use Flexbox for layout in React Native applications."
          },
          {
            key: "apis",
            title: "Using Native APIs",
            description: "Learn how to interact with device APIs such as Camera, Location, and Sensors."
          }
        ]
      },
      {
        key: "intermediateReactNative",
        title: "Intermediate React Native",
        description: "Build on your React Native foundation with more in-depth knowledge and practices.",
        subsections: [
          {
            key: "stateManagement",
            title: "State Management",
            description: "Learn about state management solutions like Context API, Redux, and MobX in React Native."
          },
          {
            key: "hooks",
            title: "React Hooks in React Native",
            description: "Understand the power of React Hooks to manage state and side effects in functional components."
          },
          {
            key: "performanceOptimization",
            title: "Performance Optimization",
            description: "Explore techniques to optimize the performance of React Native applications."
          },
          {
            key: "animations",
            title: "Animations in React Native",
            description: "Learn how to create animations using libraries like Animated and React Native Reanimated."
          },
          {
            key: "testing",
            title: "Testing React Native Apps",
            description: "Get acquainted with testing frameworks and libraries for writing unit and integration tests."
          }
        ]
      },
      {
        key: "advancedReactNative",
        title: "Advanced React Native",
        description: "Gain expertise in advanced React Native topics for professional-level mobile app development.",
        subsections: [
          {
            key: "nativeModules",
            title: "Creating Native Modules",
            description: "Learn how to write custom native modules to extend React Native functionality."
          },
          {
            key: "codePush",
            title: "Code Push and OTA Updates",
            description: "Understand how to implement over-the-air (OTA) updates using CodePush."
          },
          {
            key: "offlineStorage",
            title: "Offline Storage",
            description: "Learn about offline storage solutions like AsyncStorage, SQLite, and Realm."
          },
          {
            key: "appDeployment",
            title: "App Deployment",
            description: "Understand the process of deploying React Native apps to the App Store and Google Play Store."
          },
          {
            key: "security",
            title: "Security",
            description: "Learn about common security issues and best practices for securing React Native applications."
          }
        ]
      },
      {
        key: "foundationFirebase",
        title: "Foundations of Firebase",
        description: "Establish a strong foundation in Firebase, covering the essential services needed for modern web and mobile app development.",
        subsections: [
          {
            key: "firebaseOverview",
            title: "Firebase Overview",
            description: "Get an overview of Firebase services and their use cases."
          },
          {
            key: "firebaseAuthentication",
            title: "Firebase Authentication",
            description: "Learn how to implement authentication using Firebase Authentication."
          },
          {
            key: "firebaseFirestore",
            title: "Firestore Database",
            description: "Understand how to use Firestore for real-time database functionalities."
          },
          {
            key: "firebaseStorage",
            title: "Firebase Storage",
            description: "Learn how to handle file uploads and storage using Firebase Storage."
          },
          {
            key: "firebaseHosting",
            title: "Firebase Hosting",
            description: "Understand how to deploy web applications using Firebase Hosting."
          }
        ]
      },
      {
        key: "intermediateFirebase",
        title: "Intermediate Firebase",
        description: "Build on your Firebase foundation with more in-depth knowledge and practices.",
        subsections: [
          {
            key: "firebaseFunctions",
            title: "Firebase Cloud Functions",
            description: "Learn how to create serverless functions using Firebase Cloud Functions."
          },
          {
            key: "firebaseMessaging",
            title: "Firebase Cloud Messaging",
            description: "Understand how to implement push notifications using Firebase Cloud Messaging."
          },
          {
            key: "firebaseAnalytics",
            title: "Firebase Analytics",
            description: "Get insights into user behavior and app performance using Firebase Analytics."
          },
          {
            key: "firebaseML",
            title: "Firebase ML Kit",
            description: "Explore machine learning capabilities with Firebase ML Kit."
          },
          {
            key: "firebaseRemoteConfig",
            title: "Firebase Remote Config",
            description: "Learn how to remotely configure your app's behavior and appearance using Firebase Remote Config."
          }
        ]
      },
      {
        key: "advancedFirebase",
        title: "Advanced Firebase",
        description: "Gain expertise in advanced Firebase topics for professional-level app development.",
        subsections: [
          {
            key: "firebaseSecurity",
            title: "Firebase Security Rules",
            description: "Learn how to write security rules to protect your Firebase data."
          },
          {
            key: "firebasePerformance",
            title: "Firebase Performance Monitoring",
            description: "Understand how to monitor and improve app performance using Firebase Performance Monitoring."
          },
          {
            key: "firebaseDynamicLinks",
            title: "Firebase Dynamic Links",
            description: "Learn how to create and manage dynamic links to enhance user experience."
          },
          {
            key: "firebaseABTesting",
            title: "Firebase A/B Testing",
            description: "Understand how to conduct A/B testing to optimize app features and performance."
          },
          {
            key: "firebaseAppIndexing",
            title: "Firebase App Indexing",
            description: "Explore how to improve app discoverability using Firebase App Indexing."
          }
        ]
      }
    ]
  },
  {
    "id": 4,
    "title": "React Native & Node.js",
    "description": "This course covers React Native and Node.js for full-stack mobile app development. Learn to build cross-platform mobile applications using React Native, and develop scalable backend services with Node.js. You'll gain practical skills in connecting your mobile apps to RESTful APIs, managing server-side logic, and ensuring seamless integration between frontend and backend systems.",
    "backgroundImage": bg5,
    image: "ReactNativeNodejs",
    "toolsAndTechnology": [
      { "name": "React", image: reactjs },
      { "name": "React Native", image: reactnative },
      { "name": "Node.js", image: node },
      { "name": "Express", image: express },
      { "name": "MongoDB", image: mongo },
      { "name": "SQL", image: server }
    ],
    "sectionData": [
      {
        key: "foundationReactNative",
        title: "Foundations of React Native",
        description: "Establish a strong foundation in React Native, covering fundamentals necessary for mobile app development.",
        subsections: [
          {
            key: "reactNativeBasics",
            title: "React Native Basics",
            description: "Learn the basics of React Native, including components, props, and state."
          },
          {
            key: "navigation",
            title: "Navigation in React Native",
            description: "Understand how to implement navigation in React Native applications using React Navigation."
          },
          {
            key: "styling",
            title: "Styling in React Native",
            description: "Learn how to style React Native components using StyleSheet and other styling libraries."
          },
          {
            key: "layout",
            title: "Layout and Flexbox",
            description: "Understand how to use Flexbox for layout in React Native applications."
          },
          {
            key: "apis",
            title: "Using Native APIs",
            description: "Learn how to interact with device APIs such as Camera, Location, and Sensors."
          }
        ]
      },
      {
        key: "intermediateReactNative",
        title: "Intermediate React Native",
        description: "Build on your React Native foundation with more in-depth knowledge and practices.",
        subsections: [
          {
            key: "stateManagement",
            title: "State Management",
            description: "Learn about state management solutions like Context API, Redux, and MobX in React Native."
          },
          {
            key: "hooks",
            title: "React Hooks in React Native",
            description: "Understand the power of React Hooks to manage state and side effects in functional components."
          },
          {
            key: "performanceOptimization",
            title: "Performance Optimization",
            description: "Explore techniques to optimize the performance of React Native applications."
          },
          {
            key: "animations",
            title: "Animations in React Native",
            description: "Learn how to create animations using libraries like Animated and React Native Reanimated."
          },
          {
            key: "testing",
            title: "Testing React Native Apps",
            description: "Get acquainted with testing frameworks and libraries for writing unit and integration tests."
          }
        ]
      },
      {
        key: "advancedReactNative",
        title: "Advanced React Native",
        description: "Gain expertise in advanced React Native topics for professional-level mobile app development.",
        subsections: [
          {
            key: "nativeModules",
            title: "Creating Native Modules",
            description: "Learn how to write custom native modules to extend React Native functionality."
          },
          {
            key: "codePush",
            title: "Code Push and OTA Updates",
            description: "Understand how to implement over-the-air (OTA) updates using CodePush."
          },
          {
            key: "offlineStorage",
            title: "Offline Storage",
            description: "Learn about offline storage solutions like AsyncStorage, SQLite, and Realm."
          },
          {
            key: "appDeployment",
            title: "App Deployment",
            description: "Understand the process of deploying React Native apps to the App Store and Google Play Store."
          },
          {
            key: "security",
            title: "Security",
            description: "Learn about common security issues and best practices for securing React Native applications."
          }
        ]
      },
      {
        key: "foundationNodeJS",
        title: "Foundations of Node.js",
        description: "Establish a strong foundation in Node.js, covering the essential concepts necessary for backend development.",
        subsections: [
          {
            key: "nodeBasics",
            title: "Node.js Basics",
            description: "Learn the basics of Node.js, including modules, file system, and event-driven architecture."
          },
          {
            key: "npm",
            title: "npm and Package Management",
            description: "Understand how to manage dependencies using npm (Node Package Manager)."
          },
          {
            key: "http",
            title: "Building HTTP Servers",
            description: "Learn how to create and manage HTTP servers using Node.js."
          },
          {
            key: "express",
            title: "Express.js Framework",
            description: "Get to know Express.js, a popular web framework for Node.js."
          },
          {
            key: "templating",
            title: "Templating Engines",
            description: "Learn how to use templating engines like EJS, Pug, or Handlebars with Node.js."
          }
        ]
      },
      {
        key: "intermediateNodeJS",
        title: "Intermediate Node.js",
        description: "Build on your Node.js foundation with more in-depth knowledge and practices.",
        subsections: [
          {
            key: "middleware",
            title: "Middleware in Express.js",
            description: "Understand how to use middleware functions to handle requests and responses in Express.js."
          },
          {
            key: "databases",
            title: "Database Integration",
            description: "Learn how to integrate databases like MongoDB, MySQL, or PostgreSQL with Node.js."
          },
          {
            key: "authentication",
            title: "Authentication and Authorization",
            description: "Implement user authentication and authorization using libraries like Passport.js."
          },
          {
            key: "restAPIs",
            title: "Building REST APIs",
            description: "Understand how to design and build RESTful APIs with Node.js and Express."
          },
          {
            key: "testing",
            title: "Testing Node.js Applications",
            description: "Get acquainted with testing frameworks and libraries like Mocha, Chai, and Jest."
          }
        ]
      },
      {
        key: "advancedNodeJS",
        title: "Advanced Node.js",
        description: "Gain expertise in advanced Node.js topics for professional-level backend development.",
        subsections: [
          {
            key: "performanceOptimization",
            title: "Performance Optimization",
            description: "Learn techniques to optimize the performance of Node.js applications."
          },
          {
            key: "microservices",
            title: "Microservices Architecture",
            description: "Understand how to design and implement microservices with Node.js."
          },
          {
            key: "graphql",
            title: "GraphQL",
            description: "Explore GraphQL and how to implement it in your Node.js applications."
          },
          {
            key: "webSockets",
            title: "WebSockets",
            description: "Learn how to implement real-time communication using WebSockets in Node.js."
          },
          {
            key: "security",
            title: "Security",
            description: "Learn about common security issues and best practices for securing Node.js applications."
          }
        ]
      }
    ]
  },
  {
    "id": 5,
    "title": "Node.js",
    "description": "This course focuses on Node.js, a powerful JavaScript runtime for server-side development. Learn to build scalable and high-performance web applications using Node.js’s asynchronous, event-driven architecture. Gain practical skills in creating RESTful APIs, managing server-side logic, and integrating with databases. By the end, you'll be equipped to develop robust backend solutions for modern web applications.",
    "backgroundImage": bg10,
    image: "NodeJS",
    "toolsAndTechnology": [
      { "name": "Node.js", image: node },
      { "name": "Express", image: express },
      { "name": "MongoDB", image: mongo },
      { "name": "Mongoose", image: server },
      { "name": "Postman", image: postman },
      { "name": "Jest", image: jest }
    ],
    "sectionData": [
      {
        key: "foundationNodeJS",
        title: "Foundations of Node.js",
        description: "Establish a strong foundation in Node.js, covering essential concepts necessary for backend development.",
        subsections: [
          {
            key: "nodeBasics",
            title: "Node.js Basics",
            description: "Learn the basics of Node.js, including modules, file system, and event-driven architecture."
          },
          {
            key: "npm",
            title: "npm and Package Management",
            description: "Understand how to manage dependencies using npm (Node Package Manager)."
          },
          {
            key: "http",
            title: "Building HTTP Servers",
            description: "Learn how to create and manage HTTP servers using Node.js."
          },
          {
            key: "express",
            title: "Express.js Framework",
            description: "Get to know Express.js, a popular web framework for Node.js."
          },
          {
            key: "templating",
            title: "Templating Engines",
            description: "Learn how to use templating engines like EJS, Pug, or Handlebars with Node.js."
          }
        ]
      },
      {
        key: "intermediateNodeJS",
        title: "Intermediate Node.js",
        description: "Build on your Node.js foundation with more in-depth knowledge and practices.",
        subsections: [
          {
            key: "middleware",
            title: "Middleware in Express.js",
            description: "Understand how to use middleware functions to handle requests and responses in Express.js."
          },
          {
            key: "databases",
            title: "Database Integration",
            description: "Learn how to integrate databases like MongoDB, MySQL, or PostgreSQL with Node.js."
          },
          {
            key: "authentication",
            title: "Authentication and Authorization",
            description: "Implement user authentication and authorization using libraries like Passport.js."
          },
          {
            key: "restAPIs",
            title: "Building REST APIs",
            description: "Understand how to design and build RESTful APIs with Node.js and Express."
          },
          {
            key: "testing",
            title: "Testing Node.js Applications",
            description: "Get acquainted with testing frameworks and libraries like Mocha, Chai, and Jest."
          }
        ]
      },
      {
        key: "advancedNodeJS",
        title: "Advanced Node.js",
        description: "Gain expertise in advanced Node.js topics for professional-level backend development.",
        subsections: [
          {
            key: "performanceOptimization",
            title: "Performance Optimization",
            description: "Learn techniques to optimize the performance of Node.js applications."
          },
          {
            key: "microservices",
            title: "Microservices Architecture",
            description: "Understand how to design and implement microservices with Node.js."
          },
          {
            key: "graphql",
            title: "GraphQL",
            description: "Explore GraphQL and how to implement it in your Node.js applications."
          },
          {
            key: "webSockets",
            title: "WebSockets",
            description: "Learn how to implement real-time communication using WebSockets in Node.js."
          },
          {
            key: "security",
            title: "Security",
            description: "Learn about common security issues and best practices for securing Node.js applications."
          }
        ]
      }
    ]
  },
  {
    "id": 6,
    "title": "Flutter",
    "description": "This course introduces Flutter, a modern UI toolkit for building natively compiled applications across mobile, web, and desktop from a single codebase. Learn to design beautiful and responsive user interfaces using Flutter's rich widget library, manage app state efficiently, and integrate with various APIs. Gain hands-on experience in developing high-performance, cross-platform apps with ease.Flutter is a UI toolkit for building natively compiled applications for mobile, web, and desktop from a single codebase. Explore its capabilities to create visually appealing apps with a smooth user experience.",
    "backgroundImage": bg4,
    image: "Flutter",
    "toolsAndTechnology": [
      { name: "Flutter", image: flutter },
      { name: "JavaScript", image: js },
      { name: "MongoDB", image: mongo },
      { name: "HTML", image: html },
      { name: "CSS", image: css },
      { name: "Node.js", image: node }
    ],
    "sectionData": [
      {
        key: "foundationFlutter",
        title: "Foundations of Flutter",
        description: "Establish a strong foundation in Flutter, covering the essential concepts necessary for mobile app development.",
        subsections: [
          {
            key: "flutterBasics",
            title: "Flutter Basics",
            description: "Learn the basics of Flutter, including widgets, state management, and the widget tree."
          },
          {
            key: "dart",
            title: "Dart Programming Language",
            description: "Understand the Dart language, which is the foundation for Flutter development."
          },
          {
            key: "uiComponents",
            title: "UI Components",
            description: "Explore Flutter's built-in widgets and how to use them to create user interfaces."
          },
          {
            key: "navigation",
            title: "Navigation and Routing",
            description: "Learn how to implement navigation and routing in Flutter applications."
          },
          {
            key: "layouts",
            title: "Layouts and Responsive Design",
            description: "Understand how to create flexible and responsive layouts using Flutter's layout widgets."
          }
        ]
      },
      {
        key: "intermediateFlutter",
        title: "Intermediate Flutter",
        description: "Build on your Flutter foundation with more in-depth knowledge and practices.",
        subsections: [
          {
            key: "stateManagement",
            title: "State Management",
            description: "Learn about state management solutions in Flutter such as Provider, Riverpod, and Bloc."
          },
          {
            key: "animations",
            title: "Animations",
            description: "Explore how to create smooth and interactive animations in Flutter applications."
          },
          {
            key: "networking",
            title: "Networking",
            description: "Understand how to make network requests and handle responses using packages like Dio or HTTP."
          },
          {
            key: "localStorage",
            title: "Local Storage",
            description: "Learn about local storage options such as Shared Preferences and SQLite for persisting data."
          },
          {
            key: "testing",
            title: "Testing",
            description: "Get acquainted with testing frameworks and libraries for unit, widget, and integration testing."
          }
        ]
      },
      {
        key: "advancedFlutter",
        title: "Advanced Flutter",
        description: "Gain expertise in advanced Flutter topics for professional-level mobile app development.",
        subsections: [
          {
            key: "customWidgets",
            title: "Creating Custom Widgets",
            description: "Learn how to create and reuse custom widgets to build complex UIs."
          },
          {
            key: "nativeIntegration",
            title: "Integrating Native Code",
            description: "Understand how to integrate native code using platform channels to interact with native APIs."
          },
          {
            key: "performance",
            title: "Performance Optimization",
            description: "Explore techniques to optimize the performance of Flutter applications."
          },
          {
            key: "flutterWeb",
            title: "Flutter for Web",
            description: "Learn how to build and deploy Flutter applications for the web."
          },
          {
            key: "flutterDesktop",
            title: "Flutter for Desktop",
            description: "Explore how to develop and deploy Flutter applications for desktop platforms."
          }
        ]
      }
    ]
  },
  {
    "id": 7,
    "title": "Python Full Stack",
    "description": "This course offers a comprehensive introduction to full-stack development using Python. Learn to build robust web applications with Python's backend frameworks like Django or Flask, and create dynamic frontends with HTML, CSS, and JavaScript. You'll gain expertise in database management, RESTful API development, and deployment, equipping you to handle both client and server-side development efficiently.",
    "backgroundImage": bg2,
    image: "PythonFullStack",
    "toolsAndTechnology": [
      { "name": "Python", image: python },
      { "name": "Django", image: django },
      { "name": "HTML", image: html },
      { "name": "CSS", image: css },
      { "name": "JavaScript", image: js },
      { "name": "PostgreSQL", image: psql }
    ]
    ,
    "sectionData": [
      {
        key: "foundationPython",
        title: "Foundations of Python",
        description: "Establish a strong foundation in Python, covering essential programming concepts necessary for backend development.",
        subsections: [
          {
            key: "pythonBasics",
            title: "Python Basics",
            description: "Learn the fundamentals of Python, including syntax, data types, control flow, and functions."
          },
          {
            key: "oopPython",
            title: "Object-Oriented Programming",
            description: "Understand the principles of OOP and how to implement them in Python."
          },
          {
            key: "dataStructures",
            title: "Data Structures and Algorithms",
            description: "Explore Python's built-in data structures and algorithms for efficient data handling."
          },
          {
            key: "modules",
            title: "Modules and Packages",
            description: "Learn about Python's module system and how to use and create packages."
          },
          {
            key: "virtualenv",
            title: "Virtual Environments",
            description: "Understand how to manage dependencies and environments using virtualenv or pipenv."
          }
        ]
      },
      {
        key: "intermediatePython",
        title: "Intermediate Python",
        description: "Build on your Python foundation with more in-depth knowledge and practices.",
        subsections: [
          {
            key: "webFrameworks",
            title: "Web Frameworks",
            description: "Learn about web frameworks like Django and Flask for building web applications."
          },
          {
            key: "databases",
            title: "Database Integration",
            description: "Understand how to integrate databases like SQLite, PostgreSQL, or MySQL with Python applications."
          },
          {
            key: "apiDevelopment",
            title: "API Development",
            description: "Explore how to develop RESTful APIs using frameworks like Django REST Framework or Flask-RESTful."
          },
          {
            key: "authentication",
            title: "Authentication and Authorization",
            description: "Implement authentication and authorization mechanisms in your Python web applications."
          },
          {
            key: "testing",
            title: "Testing",
            description: "Get acquainted with testing frameworks like pytest or unittest for writing tests."
          }
        ]
      },
      {
        key: "advancedPython",
        title: "Advanced Python",
        description: "Gain expertise in advanced Python topics and full stack development practices.",
        subsections: [
          {
            key: "asynchronousProgramming",
            title: "Asynchronous Programming",
            description: "Learn about asynchronous programming in Python using asyncio and libraries like aiohttp."
          },
          {
            key: "containerization",
            title: "Containerization",
            description: "Explore containerization with Docker and Kubernetes for deploying Python applications."
          },
          {
            key: "devOps",
            title: "DevOps and CI/CD",
            description: "Understand DevOps practices and continuous integration/continuous deployment (CI/CD) pipelines."
          },
          {
            key: "scalability",
            title: "Scalability and Performance",
            description: "Learn techniques for scaling and optimizing the performance of Python applications."
          },
          {
            key: "microservices",
            title: "Microservices Architecture",
            description: "Understand how to design and implement microservices with Python."
          }
        ]
      }
    ]
  },
  {
    "id": 8,
    "title": "UI-UX Design",
    "description": "This course covers UI/UX design principles to create intuitive and visually appealing user interfaces. Learn the fundamentals of user research, wireframing, prototyping, and usability testing. Gain skills in design tools like Adobe XD or Figma and understand how to craft engaging user experiences through thoughtful design strategies and best practices.",
    "backgroundImage": bg9,
    image: "UIUX",
    "toolsAndTechnology": [
      { "name": "Figma", image: figma },
      { "name": "Sketch", image: sketch },
      { "name": "Adobe XD", image: adobe },
      { "name": "InVision", image: invision },
      { "name": "Photoshop", image: photoshop },
      { "name": "Illustrator", image: illustrator }
    ]
    ,
    "sectionData": [
      {
        key: "foundationUIUX",
        title: "Foundations of UI/UX Design",
        description: "Establish a strong foundation in UI/UX design principles, essential for creating effective user interfaces and experiences.",
        subsections: [
          {
            key: "designPrinciples",
            title: "Design Principles",
            description: "Learn the fundamental principles of design, including contrast, alignment, repetition, and proximity."
          },
          {
            key: "uxResearch",
            title: "UX Research",
            description: "Understand the basics of user research, including methods for gathering user insights and feedback."
          },
          {
            key: "personaCreation",
            title: "Creating Personas",
            description: "Learn how to create user personas to guide design decisions based on user needs and behaviors."
          },
          {
            key: "wireframing",
            title: "Wireframing",
            description: "Explore wireframing techniques to plan and structure the layout of your designs."
          },
          {
            key: "prototyping",
            title: "Prototyping",
            description: "Understand how to create interactive prototypes to test and validate design ideas."
          }
        ]
      },
      {
        key: "intermediateUIUX",
        title: "Intermediate UI/UX Design",
        description: "Build on your design foundation with more in-depth knowledge and practical skills.",
        subsections: [
          {
            key: "uiComponents",
            title: "UI Components",
            description: "Learn about common UI components and how to design them effectively."
          },
          {
            key: "interactionDesign",
            title: "Interaction Design",
            description: "Explore how to design interactions and user flows to enhance user experience."
          },
          {
            key: "usabilityTesting",
            title: "Usability Testing",
            description: "Understand methods for conducting usability tests to identify and resolve design issues."
          },
          {
            key: "responsiveDesign",
            title: "Responsive Design",
            description: "Learn techniques for designing responsive layouts that work across various devices and screen sizes."
          },
          {
            key: "visualDesign",
            title: "Visual Design",
            description: "Dive into visual design elements like color theory, typography, and iconography."
          }
        ]
      },
      {
        key: "advancedUIUX",
        title: "Advanced UI/UX Design",
        description: "Gain expertise in advanced UI/UX design practices and strategies for professional-level design work.",
        subsections: [
          {
            key: "designSystems",
            title: "Design Systems",
            description: "Learn how to create and implement design systems for consistent and scalable design solutions."
          },
          {
            key: "advancedPrototyping",
            title: "Advanced Prototyping",
            description: "Explore advanced prototyping techniques and tools for high-fidelity prototypes."
          },
          {
            key: "UXStrategy",
            title: "UX Strategy",
            description: "Understand how to develop and implement UX strategies aligned with business goals."
          },
          {
            key: "accessibility",
            title: "Accessibility",
            description: "Learn about designing for accessibility to ensure your designs are usable by people with disabilities."
          },
          {
            key: "dataDrivenDesign",
            title: "Data-Driven Design",
            description: "Explore how to use data and analytics to inform and refine design decisions."
          }
        ]
      }
    ]
  },
  {
    "id": 9,
    "title": "Data Science & Python",
    "description": "This course explores data science using Python, focusing on data analysis, visualization, and machine learning. Learn to manipulate and analyze datasets with libraries like Pandas and NumPy, create insightful visualizations with Matplotlib and Seaborn, and build predictive models with Scikit-Learn. Gain practical skills in data-driven decision-making and advanced analytical techniques.",
    "backgroundImage": bg8,
    image: "DataSciencePython",
    "toolsAndTechnology": [
      { "name": "Python", image: python },
      { "name": "Pandas", image: panda },
      { "name": "Matplotlib", image: mat },
      { "name": "Scikit-Learn", image: learn },
      { "name": "Jupyter", image: jupyter },
      { "name": "SQL", image: server }
    ]
    ,
    "sectionData": [
      {
        key: "foundationDataScience",
        title: "Foundations of Data Science",
        description: "Establish a strong foundation in data science concepts and Python programming necessary for analyzing and interpreting data.",
        subsections: [
          {
            key: "pythonBasics",
            title: "Python Basics for Data Science",
            description: "Learn the fundamentals of Python, including data types, control flow, and functions."
          },
          {
            key: "dataManipulation",
            title: "Data Manipulation with Pandas",
            description: "Explore data manipulation and analysis using Pandas library for handling data structures and performing operations on datasets."
          },
          {
            key: "dataVisualization",
            title: "Data Visualization",
            description: "Understand how to create visualizations using libraries like Matplotlib and Seaborn to interpret data effectively."
          },
          {
            key: "numpy",
            title: "Numerical Computations with NumPy",
            description: "Learn how to perform numerical operations and array manipulations using NumPy."
          },
          {
            key: "dataCleaning",
            title: "Data Cleaning",
            description: "Explore techniques for cleaning and preparing data for analysis, including handling missing values and data transformation."
          }
        ]
      },
      {
        key: "intermediateDataScience",
        title: "Intermediate Data Science",
        description: "Build on your foundational knowledge with more advanced techniques and tools in data science.",
        subsections: [
          {
            key: "exploratoryDataAnalysis",
            title: "Exploratory Data Analysis (EDA)",
            description: "Learn techniques for exploring and summarizing datasets to uncover patterns and insights."
          },
          {
            key: "statisticalAnalysis",
            title: "Statistical Analysis",
            description: "Understand basic statistical concepts and methods for analyzing data distributions and relationships."
          },
          {
            key: "machineLearning",
            title: "Introduction to Machine Learning",
            description: "Get started with machine learning algorithms, including supervised and unsupervised learning techniques using scikit-learn."
          },
          {
            key: "featureEngineering",
            title: "Feature Engineering",
            description: "Learn how to select, transform, and create features to improve model performance."
          },
          {
            key: "modelEvaluation",
            title: "Model Evaluation",
            description: "Explore methods for evaluating and validating machine learning models, including metrics like accuracy, precision, recall, and F1 score."
          }
        ]
      },
      {
        key: "advancedDataScience",
        title: "Advanced Data Science",
        description: "Gain expertise in advanced data science topics and practices for professional-level data analysis and machine learning.",
        subsections: [
          {
            key: "deepLearning",
            title: "Deep Learning",
            description: "Learn about deep learning techniques and frameworks such as TensorFlow and PyTorch for building neural networks."
          },
          {
            key: "naturalLanguageProcessing",
            title: "Natural Language Processing (NLP)",
            description: "Understand techniques for processing and analyzing text data using NLP libraries and models."
          },
          {
            key: "bigData",
            title: "Big Data Technologies",
            description: "Explore tools and technologies for handling large-scale data processing, including Hadoop and Spark."
          },
          {
            key: "dataPipeline",
            title: "Data Pipelines",
            description: "Learn how to design and implement data pipelines for automating data collection, transformation, and analysis."
          },
          {
            key: "deployment",
            title: "Model Deployment",
            description: "Understand how to deploy machine learning models into production environments using tools like Docker and cloud platforms."
          }
        ]
      }
    ]
  },
  {
    "id": 10,
    "title": "Data Engineering & Python",
    "description": "This course delves into data engineering using Python, focusing on designing and building scalable data pipelines. Learn to extract, transform, and load (ETL) data efficiently with libraries like Pandas and Dask, manage data workflows with Apache Airflow, and work with databases and cloud platforms. Gain the skills needed to handle large-scale data processing and ensure data quality and integrity.",
    "backgroundImage": bg7,
    image: "DataEngineeringPython",
    "toolsAndTechnology": [
      { "name": "Python", image: python },
      { "name": "SQL", image: server },
      { "name": "Hadoop", image: hadoop },
      { "name": "Docker", image: docker },
      { "name": "AWS", image: aws },
      { "name": "GCP", image: cgp }
    ]
    ,
    "sectionData": [
      {
        key: "foundationDataEngineering",
        title: "Foundations of Data Engineering",
        description: "Establish a strong foundation in data engineering concepts and Python programming necessary for managing and processing large datasets.",
        subsections: [
          {
            key: "pythonBasics",
            title: "Python Basics for Data Engineering",
            description: "Learn the fundamentals of Python, including data types, control flow, and functions."
          },
          {
            key: "dataHandling",
            title: "Data Handling with Pandas",
            description: "Explore data manipulation and analysis using Pandas for handling large datasets and performing operations."
          },
          {
            key: "dataStorage",
            title: "Data Storage Solutions",
            description: "Understand different data storage solutions such as relational databases (SQL) and NoSQL databases (MongoDB, Redis)."
          },
          {
            key: "etlBasics",
            title: "ETL Basics",
            description: "Learn the basics of Extract, Transform, Load (ETL) processes and how to implement them using Python."
          },
          {
            key: "fileFormats",
            title: "Handling File Formats",
            description: "Understand how to work with different file formats like CSV, JSON, Parquet, and Avro."
          }
        ]
      },
      {
        key: "intermediateDataEngineering",
        title: "Intermediate Data Engineering",
        description: "Build on your foundational knowledge with more advanced techniques and tools for data engineering.",
        subsections: [
          {
            key: "dataPipelines",
            title: "Building Data Pipelines",
            description: "Learn how to design and implement data pipelines using tools like Apache Airflow and Luigi."
          },
          {
            key: "bigData",
            title: "Big Data Technologies",
            description: "Explore big data technologies such as Hadoop and Apache Spark for processing large-scale datasets."
          },
          {
            key: "dataStreaming",
            title: "Data Streaming",
            description: "Understand real-time data processing with tools like Apache Kafka and Flink."
          },
          {
            key: "cloudServices",
            title: "Cloud Data Engineering",
            description: "Learn about cloud data engineering services like AWS (Redshift, S3), Google Cloud (BigQuery, Cloud Storage), and Azure."
          },
          {
            key: "dataQuality",
            title: "Data Quality and Governance",
            description: "Explore techniques for ensuring data quality and implementing data governance practices."
          }
        ]
      },
      {
        key: "advancedDataEngineering",
        title: "Advanced Data Engineering",
        description: "Gain expertise in advanced data engineering practices and strategies for complex data systems.",
        subsections: [
          {
            key: "advancedDataPipelines",
            title: "Advanced Data Pipelines",
            description: "Learn advanced techniques for optimizing and scaling data pipelines."
          },
          {
            key: "distributedSystems",
            title: "Distributed Systems",
            description: "Understand concepts and architectures of distributed systems and their applications in data engineering."
          },
          {
            key: "dataIntegration",
            title: "Data Integration",
            description: "Explore methods for integrating data from various sources and systems."
          },
          {
            key: "machineLearningIntegration",
            title: "Integrating Machine Learning",
            description: "Learn how to integrate machine learning models into data engineering workflows."
          },
          {
            key: "dataSecurity",
            title: "Data Security and Privacy",
            description: "Understand best practices for ensuring data security and compliance with privacy regulations."
          }
        ]
      }
    ]
  },
  {
    "id": 11,
    "title": "AI & Python",
    "description": "This course introduces AI with Python, covering foundational concepts and practical applications. Learn to build intelligent systems using machine learning frameworks like TensorFlow and PyTorch. Topics include supervised and unsupervised learning, natural language processing, and computer vision. Gain hands-on experience in developing AI models, evaluating their performance, and integrating them into real-world applications.",
    "backgroundImage": bg6,
    image: "AIandPython",
    "toolsAndTechnology": [
      { "name": "Python", image: python },
      { "name": "TensorFlow", image: tenserflow },
      { "name": "PyTorch", image: pytorch },
      { "name": "Pandas", image: panda },
      { "name": "Matplotlib", image: mat },
      { "name": "Jupyter", image: jupyter }
    ]
    ,
    "sectionData": [
      {
        key: "foundationAI",
        title: "Foundations of AI with Python",
        description: "Establish a strong foundation in AI concepts and Python programming necessary for developing intelligent systems.",
        subsections: [
          {
            key: "pythonBasics",
            title: "Python Basics for AI",
            description: "Learn the fundamentals of Python, including data types, control flow, and functions, tailored for AI applications."
          },
          {
            key: "linearAlgebra",
            title: "Linear Algebra",
            description: "Understand basic linear algebra concepts such as vectors, matrices, and operations crucial for machine learning algorithms."
          },
          {
            key: "probabilityStatistics",
            title: "Probability and Statistics",
            description: "Explore fundamental concepts in probability and statistics used in data analysis and machine learning."
          },
          {
            key: "dataHandling",
            title: "Data Handling with Pandas",
            description: "Learn to manipulate and analyze data using the Pandas library, including data cleaning and preparation."
          },
          {
            key: "dataVisualization",
            title: "Data Visualization",
            description: "Understand how to create visualizations using Matplotlib and Seaborn to interpret data effectively."
          }
        ]
      },
      {
        key: "intermediateAI",
        title: "Intermediate AI with Python",
        description: "Build on your foundational knowledge with more advanced AI techniques and algorithms.",
        subsections: [
          {
            key: "machineLearning",
            title: "Machine Learning Algorithms",
            description: "Learn about common machine learning algorithms, including linear regression, decision trees, and clustering techniques using scikit-learn."
          },
          {
            key: "featureEngineering",
            title: "Feature Engineering",
            description: "Explore techniques for selecting, transforming, and creating features to improve model performance."
          },
          {
            key: "modelEvaluation",
            title: "Model Evaluation and Tuning",
            description: "Understand methods for evaluating machine learning models, including cross-validation, and techniques for hyperparameter tuning."
          },
          {
            key: "deepLearningBasics",
            title: "Basics of Deep Learning",
            description: "Get introduced to deep learning concepts, neural networks, and frameworks like TensorFlow and Keras."
          },
          {
            key: "naturalLanguageProcessing",
            title: "Natural Language Processing (NLP)",
            description: "Learn techniques for processing and analyzing text data using NLP libraries and models."
          }
        ]
      },
      {
        key: "advancedAI",
        title: "Advanced AI with Python",
        description: "Gain expertise in advanced AI topics and techniques for developing sophisticated AI systems.",
        subsections: [
          {
            key: "advancedDeepLearning",
            title: "Advanced Deep Learning",
            description: "Dive into advanced deep learning techniques such as convolutional neural networks (CNNs) and recurrent neural networks (RNNs)."
          },
          {
            key: "reinforcementLearning",
            title: "Reinforcement Learning",
            description: "Understand reinforcement learning concepts and algorithms, including Q-learning and policy gradients."
          },
          {
            key: "generativeModels",
            title: "Generative Models",
            description: "Explore generative models like Generative Adversarial Networks (GANs) and Variational Autoencoders (VAEs)."
          },
          {
            key: "AIethics",
            title: "Ethics in AI",
            description: "Learn about ethical considerations in AI, including fairness, accountability, and transparency."
          },
          {
            key: "AIDeployment",
            title: "AI Deployment",
            description: "Understand how to deploy AI models into production environments, including using tools like Docker and cloud platforms."
          }
        ]
      }
    ]
  },
  {
    "id": 12,
    "title": "Machine Learning with Python",
    "description": "This course provides a comprehensive introduction to machine learning with Python. Learn to develop and implement machine learning models using libraries like Scikit-Learn and TensorFlow. Explore key concepts such as supervised and unsupervised learning, feature engineering, and model evaluation. Gain practical skills in building, training, and deploying machine learning models for various applications.",
    "backgroundImage": mlpy,
    image: "MachineLearningPython",
    "toolsAndTechnology": [
      { "name": "Python", image: python },
      { "name": "TensorFlow", image: tenserflow },
      { "name": "Keras", image: keras },
      { "name": "Pandas", image: panda },
      { "name": "Matplotlib", image: mat },
      { "name": "Jupyter", image: jupyter }
    ]
    ,
    "sectionData": [
      {
        key: "foundationML",
        title: "Foundations of Machine Learning with Python",
        description: "Establish a strong foundation in machine learning concepts and Python programming necessary for building predictive models.",
        subsections: [
          {
            key: "pythonBasics",
            title: "Python Basics for ML",
            description: "Learn the fundamentals of Python, including data types, control flow, and functions, with a focus on applications in machine learning."
          },
          {
            key: "numpyPandas",
            title: "Numerical Computations and Data Handling",
            description: "Understand how to perform numerical operations and data manipulation using NumPy and Pandas."
          },
          {
            key: "dataExploration",
            title: "Exploratory Data Analysis (EDA)",
            description: "Learn techniques for exploring and visualizing data to understand its structure and uncover patterns."
          },
          {
            key: "basicAlgorithms",
            title: "Basic Machine Learning Algorithms",
            description: "Get introduced to fundamental ML algorithms such as linear regression, logistic regression, and k-nearest neighbors (KNN)."
          },
          {
            key: "modelEvaluation",
            title: "Model Evaluation Techniques",
            description: "Understand methods for evaluating machine learning models, including metrics like accuracy, precision, recall, and F1 score."
          }
        ]
      },
      {
        key: "intermediateML",
        title: "Intermediate Machine Learning with Python",
        description: "Build on your foundational knowledge with more advanced techniques and algorithms in machine learning.",
        subsections: [
          {
            key: "featureEngineering",
            title: "Feature Engineering",
            description: "Explore techniques for selecting, transforming, and creating features to improve model performance."
          },
          {
            key: "modelSelection",
            title: "Model Selection and Hyperparameter Tuning",
            description: "Learn how to choose the right model and tune hyperparameters to optimize performance."
          },
          {
            key: "ensembleMethods",
            title: "Ensemble Methods",
            description: "Understand advanced ML techniques such as random forests, gradient boosting, and stacking."
          },
          {
            key: "dimensionalityReduction",
            title: "Dimensionality Reduction",
            description: "Learn techniques like Principal Component Analysis (PCA) and t-SNE to reduce the number of features while preserving important information."
          },
          {
            key: "crossValidation",
            title: "Cross-Validation",
            description: "Explore methods for assessing model performance and avoiding overfitting using cross-validation techniques."
          }
        ]
      },
      {
        key: "advancedML",
        title: "Advanced Machine Learning with Python",
        description: "Gain expertise in advanced machine learning practices and complex algorithms for sophisticated predictive modeling.",
        subsections: [
          {
            key: "deepLearning",
            title: "Deep Learning",
            description: "Dive into deep learning techniques and frameworks such as TensorFlow and PyTorch for building neural networks."
          },
          {
            key: "unsupervisedLearning",
            title: "Unsupervised Learning",
            description: "Explore algorithms for clustering (e.g., k-means) and association rule learning to find patterns in unlabeled data."
          },
          {
            key: "recommenderSystems",
            title: "Recommender Systems",
            description: "Understand how to build systems that suggest products or content based on user preferences and behavior."
          },
          {
            key: "timeSeriesAnalysis",
            title: "Time Series Analysis",
            description: "Learn techniques for analyzing and forecasting time-series data using methods like ARIMA and LSTM networks."
          },
          {
            key: "AIIntegration",
            title: "Integrating Machine Learning Models",
            description: "Explore how to integrate machine learning models into applications and deploy them using tools and frameworks."
          }
        ]
      }
    ]
  }
]
export default data