import webdev from './img/Roadmap Image/Web development.jpg'
import backenddev from './img/Roadmap Image/Backend development.jpg'
import sybersec from './img/Roadmap Image/Syber security.jpg'
import gamedev from './img/Roadmap Image/Game development.jpg'
import mobiledev from './img/Roadmap Image/Mobile development.png'
import clouddev from './img/Roadmap Image/Cloud development.jpg'
import uidesign from './img/Roadmap Image/UI UX design.jpg'
import productmanager from './img/Roadmap Image/Product manager.png'
import machinelearn from './img/Roadmap Image/Machine learning and A.I.jpg'
import datascience from './img/Roadmap Image/Data science.jpg'
import dataanalyst from './img/Roadmap Image/Data analyst.jpg'

/*

1. Programming Languages:
   - Syntax and basic concepts: Learn the syntax rules and basic concepts of the chosen backend programming language. Understand how to write variables, control structures, functions, and other fundamental elements of the language.
   - Data types, variables, and operators: Explore the different data types available in the language, how to declare and use variables, and the various operators for performing arithmetic, logical, and comparison operations.
   - Control flow and loops: Understand control flow statements like conditionals (if-else, switch), loops (for, while), and iteration techniques to control program execution.
   - Functions and modules: Learn how to define and use functions for modularizing code, passing arguments, and returning values. Understand how to work with modules and libraries to reuse code and leverage existing functionality.
   - Error handling and exception handling: Explore error handling techniques, such as try-catch blocks or exception handling mechanisms, to gracefully handle and recover from errors in your code.
   - Object-oriented programming (if applicable): If the language supports object-oriented programming, delve into the concepts of classes, objects, inheritance, polymorphism, and encapsulation.

2. Web Frameworks:
   - Introduction to the selected web framework: Understand the core concepts, principles, and architecture of the chosen web framework. Learn how it handles request-response cycles and how it facilitates building web applications.
   - Routing and URL handling: Discover how the framework handles routing incoming requests to the appropriate endpoints based on URL patterns and parameters.
   - Request and response handling: Learn how to process incoming requests, retrieve data from request objects, and generate responses with appropriate status codes and data formats.
   - Templating engines for generating dynamic HTML: Understand how to use templating engines provided by the framework to generate dynamic HTML content by merging data with pre-defined templates.
   - Working with databases using the framework's ORM or query builders: Explore the framework's built-in tools for interacting with databases, such as object-relational mappers (ORMs) or query builders. Learn how to define database models, perform CRUD operations, and execute complex queries.
   - Middleware and authentication mechanisms: Gain knowledge of middleware components provided by the framework to handle cross-cutting concerns, such as authentication, logging, and error handling. Understand how to integrate authentication mechanisms into your application using the framework's features.

3. Databases:
   - Introduction to different types of databases: Understand the differences between relational and NoSQL databases. Learn about their strengths, use cases, and how they store and retrieve data.
   - Database management systems (DBMS): Get familiar with popular DBMSs like MySQL, PostgreSQL, MongoDB, or SQLite. Learn how to install, configure, and interact with these databases.
   - Designing database schemas and relationships: Learn how to design efficient and normalized database schemas. Understand the concept of relationships (one-to-one, one-to-many, many-to-many) and how to establish them using primary keys and foreign keys.
   - SQL fundamentals for querying and manipulating data: Acquire SQL (Structured Query Language) skills to perform Create, Read, Update, and Delete (CRUD) operations on the database. Understand SQL syntax, data manipulation statements (SELECT, INSERT, UPDATE, DELETE), filtering data (WHERE clause), sorting (ORDER BY), and joining tables (INNER JOIN, LEFT JOIN, etc.).
   - Indexing and optimizing database performance: Explore indexing techniques to improve query performance. Understand how to create indexes, analyze query execution plans, and optimize queries for better database performance.
   - Transactions and data integrity: Learn about database transactions and how they ensure data consistency and integrity. Understand how to handle concurrent access, locking mechanisms, and handle exceptions within transactions.

4. APIs (

Application Programming Interfaces):
   - Understanding RESTful architecture and principles: Learn the principles of REST and the constraints it follows, such as statelessness, uniform interface, and resource-based communication.
   - HTTP methods and their usage: Understand the different HTTP methods (GET, POST, PUT, DELETE) and when to use each of them for different operations on resources.
   - Serialization and deserialization of data: Learn how to convert data objects to JSON or XML formats for sending them over the network (serialization) and how to convert received data back to objects (deserialization).
   - Authentication and authorization mechanisms: Explore different authentication mechanisms like token-based authentication (JWT) or OAuth. Understand how to implement authorization using roles and permissions to control access to API endpoints.
   - API documentation and versioning: Learn how to document APIs using tools like Swagger or OpenAPI. Understand the importance of versioning APIs to maintain backward compatibility while introducing new features or changes.
   - Handling errors and status codes: Gain knowledge of handling errors and returning appropriate HTTP status codes (e.g., 404 for resource not found, 500 for internal server error) to provide meaningful feedback to API consumers.

5. Authentication and Authorization:
   - User authentication methods: Learn about different authentication methods like password-based authentication, token-based authentication, or social authentication (OAuth). Understand their advantages, implementation steps, and security considerations.
   - Hashing and salting passwords for security: Explore techniques like bcrypt or PBKDF2 for securely hashing and salting passwords to protect user credentials.
   - Role-based access control (RBAC): Understand how RBAC works and how to implement it to assign roles and permissions to users, allowing or restricting access to specific features or resources.
   - Implementing registration, login, and logout functionality: Learn how to implement user registration, login, and logout functionality in your backend application. Understand the necessary steps for user session management.
   - Third-party authentication (OAuth): Explore integrating third-party authentication providers like Google, Facebook, or Twitter using OAuth protocols. Learn how to authenticate users through these providers and manage user data received from them.
   - User session management: Understand different approaches to managing user sessions, including session tokens, cookies, or JSON Web Tokens (JWT). Learn how to handle session expiration, logout, and session revocation.


Caching and Performance Optimization:

- Introduction to caching and its benefits: Understand the concept of caching and how it improves the performance of web applications. Learn how caching reduces the need to fetch data from the original source repeatedly and speeds up response times.

- Caching strategies:
  - Full-page caching: Explore the technique of caching entire web pages to serve them directly from the cache without generating them dynamically for each request.
  - Fragment caching: Understand how to cache specific parts or fragments of a web page that are expensive to generate but can be reused across multiple requests.

- Working with caching tools:
  - Redis: Learn how to use Redis, an in-memory data store, for caching frequently accessed data, session management, and other caching purposes.
  - Memcached: Understand how Memcached operates as a distributed caching system, allowing you to store key-value pairs in memory for fast retrieval.

- Database query optimization techniques: Dive into techniques for optimizing database queries to improve performance. Learn about indexing, query optimization, denormalization, and using database-specific optimization features.

- Performance profiling and benchmarking: Explore tools and techniques for profiling your backend application's performance to identify bottlenecks. Learn how to benchmark your application's response times, memory usage, and CPU utilization.

- Content delivery networks (CDNs) for static file caching: Understand the role of CDNs in caching static files such as images, CSS, and JavaScript files. Learn how to integrate CDNs into your application to improve the delivery speed of these files.

Testing and Debugging:

- Unit testing and integration testing: Understand the importance of testing in ensuring the correctness and reliability of your backend code. Learn about unit testing frameworks for testing individual components and integration testing frameworks for testing the interaction between components.

- Testing frameworks and libraries:
  - Jest: Explore the Jest framework for JavaScript/Node.js applications, which provides a simple and powerful testing platform.
  - Mocha: Learn about Mocha, a flexible testing framework for JavaScript, with support for asynchronous testing and multiple assertion libraries.
  - Pytest: Discover Pytest, a popular testing framework for Python applications, known for its simplicity and ease of use.

- Test-driven development (TDD) practices: Learn about the TDD approach, where tests are written before writing the actual code. Understand how TDD helps in designing clean and testable code.

- Debugging techniques and tools: Explore debugging techniques such as using debuggers, logging, and console output to identify and fix issues in your backend applications.

- Error handling and exception tracking: Learn how to handle errors gracefully in your backend code and implement proper exception handling. Understand how to use logging tools to track and monitor exceptions in production.

- Continuous integration and continuous deployment (CI/CD) pipelines: Gain knowledge of CI/CD practices for automating the testing, building, and deployment of your backend applications. Learn about popular CI/CD tools like Jenkins, Travis CI, or GitLab CI/CD.

Deployment and DevOps:

- Deploying applications to cloud platforms: Understand the process of deploying backend applications to cloud platforms such as AWS, Azure, or Google Cloud. Learn about infrastructure setup, deploying application code, and managing server resources.

- Server management and configuration: Learn how to manage servers and configure them for optimal performance. Understand concepts like load balancing, server monitoring, and scalability.

- Containerization with Docker: Explore Docker, a popular containerization platform, for packaging your backend application and its dependencies into a container. Learn how to deploy and manage containers efficiently.

- Container orchestration with Kubernetes: Understand Kubernetes, a container orchestration platform, and how it helps in managing and scaling containerized applications in a distributed environment.

- Monitoring and logging practices: Gain knowledge about monitoring

 and logging techniques to track the performance and health of your backend applications. Learn about tools like Prometheus, Grafana, or ELK stack (Elasticsearch, Logstash, Kibana).

- Infrastructure as code (IaC): Explore the concept of IaC, which involves managing infrastructure resources using code. Learn about tools like Terraform or Ansible to automate infrastructure provisioning, configuration, and deployment.

Security:

- Understanding common web vulnerabilities: Learn about common web vulnerabilities like Cross-Site Scripting (XSS), Cross-Site Request Forgery (CSRF), SQL injection, and how to prevent them through secure coding practices.

- Secure coding practices and input validation: Understand best practices for writing secure code, such as input validation, parameterized queries, and avoiding code injection vulnerabilities.

- Implementing secure communication: Learn how to secure communication between clients and servers using HTTPS (HTTP over SSL/TLS). Understand the importance of encrypting sensitive data transmitted over the network.

- Session security and cookie management: Explore techniques for securing user sessions and managing cookies to prevent session hijacking and unauthorized access.

- Web application firewalls (WAFs): Understand the role of WAFs in protecting web applications from common security threats. Learn about popular WAF solutions and how to configure them.

- Security audits and penetration testing: Gain knowledge about conducting security audits and penetration testing to identify vulnerabilities and weaknesses in your backend applications. Understand how to perform security assessments and address the identified issues.

Continuous Learning and Stay Updated:

- Following blogs, forums, and online communities: Engage with online communities and platforms where backend developers share their experiences, discuss new technologies, and provide updates on best practices.

- Participating in relevant online courses and tutorials: Enroll in online courses or tutorials that cover backend development topics and provide hands-on learning opportunities.

- Attending conferences and meetups: Attend conferences, meetups, or workshops focused on backend development to network with professionals, gain insights from industry experts, and stay up to date with the latest trends.

- Exploring new technologies and frameworks: Stay curious and explore new technologies, frameworks, and tools that emerge in the backend development space. Experiment with them in personal projects or side ventures to broaden your skill set.

- Reading industry publications and books: Stay updated with industry publications, blogs, and books dedicated to backend development. They provide valuable insights, case studies, and best practices from experienced developers.

- Engaging in personal projects and experimenting: Undertake personal projects that allow you to apply your backend development skills, try out new concepts, and challenge yourself. Experimentation helps you learn and grow as a backend developer.
*/
export let  api = [
  {
    name: 'Front-End web development',
    src: webdev,
    details: `
    A frontend roadmap is a plan that outlines the skills and technologies a developer needs to learn to become proficient in frontend web development. The roadmap typically covers both the technical and non-technical aspects of frontend development.
    The technical aspects of the frontend roadmap include learning HTML, CSS, and JavaScript, the three primary languages used in frontend development. Additionally, developers must be familiar with popular frontend frameworks and libraries, such as React, Vue.js, and Angular. Understanding web standards, browser compatibility issues, and responsive design are also crucial skills for frontend developers.
    The non-technical aspects of the frontend roadmap include learning design principles, user experience (UX) best practices, and accessibility guidelines. Developers must also understand how to collaborate with designers, product managers, and other stakeholders to create effective and user-friendly web applications.
    A frontend roadmap is an evolving plan that should be reviewed and updated regularly to keep up with new technologies and industry trends. By following a well-defined roadmap, developers can acquire the skills they need to create high-quality web applications that meet user needs and business goals.
    `,
    data: [
      {
      date: 'Welcome to the journy',
      detail: [
        'read topics',
        'copy resourses',
        'take tests',
        'go further'
      ]
    }
  ],
    topic: [
      {
        topicHead: 'HTML',
        topicSub: [
          {
            subtopic: 'Elements and Tags',
            extraDetail: 'HTML elements are the building blocks of a web page, and they are defined using HTML tags. Tags define how the content within them should be displayed on the web page.',
            read: false,
            resources: ['https://www.youtube.com/channel/UCVTlvUkGslCV_h-nSAId8Sw', 'HTML-CSS-Design-Build-Websites', 'https://www.w3schools.com/html/']
          },
          {
            subtopic: 'Attributes',
            extraDetail: 'HTML tags can also have attributes that provide additional information about the content within the tag. Attributes are used to modify the behavior or appearance of an element.',
            read: false,
            resources: ['https://www.youtube.com/channel/UC29ju8bIPH5as8OGnQzwJyA', 'HTML5-CSS3-All-One-Dummies', 'https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes']
          },
          {
            subtopic: 'Document Structure',
            extraDetail: 'The structure of an HTML document is defined using several tags, such as <html>, <head>, <title>, and <body>. These tags provide information about the content of the web page, including its title, metadata, and body content.',
            read: false,
            resources: ['https://www.youtube.com/channel/UCWv7vMbMWH4-V0ZXdmDpPBA', 'HTML-CSS-Visual-QuickStart-Guide', 'https://html.com/']
          },
          {
            subtopic: 'Text Formatting',
            extraDetail: 'HTML includes tags for formatting text, such as <strong> and <em> for emphasizing text, <h1> through <h6> for defining headings, and <p> for defining paragraphs.',
            read: false,
            resources: ['https://www.youtube.com/channel/UClb90NQQcskPUGDIXsQEz5Q', 'Learning-Web-Design-Beginners-JavaScript', 'https://css-tricks.com/snippets/html/']
          },
          {
            subtopic: 'Links',
            extraDetail: 'HTML provides tags for creating hyperlinks that allow users to navigate between web pages. The <a> tag is used to define links and can include attributes such as href to specify the URL of the page being linked to.',
            read: false,
            resources: ['https://www.youtube.com/channel/UCW5YeuERMmlnqo4oq8vwUpg', 'HTML-CSS-Complete-Reference', 'https://htmldog.com/guides/html/beginner/links/']
          },
          {
            subtopic: 'Images and Multimedia',
            extraDetail: 'HTML includes tags for embedding images and multimedia content within a web page, such as the <img> tag for images and <video> and <audio> tags for multimedia.',
            read: false,
            resources: ['https://www.youtube.com/channel/UCSJbGtTlrDami-tDGPUV9-w', 'HTML5-Multimedia-Develop-Design-Devlin', 'https://webdesign.tutsplus.com/categories/html']
          },
          {
            subtopic: 'Lists',
            extraDetail: 'HTML provides tags for creating lists of content, including ordered lists (<ol>) and unordered lists (<ul>).',
            read: false,
            resources: ['https://www.youtube.com/channel/UCyU5wkjgQYGRB0hIHMwm2Sg', 'HTML-CSS-Good-Parts-Henick', 'https://html.com/tags/list/']
          },
          {
            subtopic: 'Tables',
            extraDetail: 'HTML allows for the creation of tables using the <table>, <tr>, and <td> tags. Tables can be used to display tabular data in a structured format.',
            read: false,
            resources: ['https://www.youtube.com/watch?v=O7nhXnMFr2k', 'HTML-CSS-Design-Build-Websites', 'https://www.w3schools.com/html/html_tables.asp']
          },
          {
            subtopic: 'Forms',
            extraDetail: 'HTML includes tags for creating forms that allow users to submit data to a web server. The <form> tag is used to define a form, and other tags such as <input>, <textarea>, and <button> are used to create form elements.',
            read: false,
            resources: ['https://www.youtube.com/watch?v=3f5Q9wDePzY', 'Learning-Web-Design-Beginners-JavaScript', 'https://developer.mozilla.org/en-US/docs/Learn/Forms']
          },
          {
            subtopic: 'Semantic HTML',
            extraDetail: 'Semantic HTML is a set of best practices for using HTML tags to convey the meaning and structure of web page content. By using semantic tags such as <header>, <nav>, <main>, and <footer>, developers can improve the accessibility and search engine optimization of their web pages.',
            read: false,
            resources: ['https://www.youtube.com/watch?v=kGW8Al_cga4', 'HTML5-CSS3-All-One-Dummies', 'https://css-tricks.com/why-semantics-matter-in-web-development/']
          }
        ],
        test: [
          {
            question: 'What does HTML stand for?',
            answer: 'HyperText Markup Language.',
            options: ['Hyperlink Text Main Language.', 'Hyper Text Markup Language.', 'HyperText Markup Language.', 'Hyperlink Text Markup Language.']
          },
          {
            question: 'What is the purpose of the <head> tag in HTML?',
            answer: 'The <head> tag is used to define the head section of an HTML document, which contains metadata about the document.',
            options: ['The <head> tag is used to close the body content of an HTML document.', 'The <head> tag is used to define extra content of an HTML document.', 'The <head> tag is used to define the body content of an HTML document.', 'The <head> tag is used to define the head section of an HTML document, which contains metadata about the document.']
          },
          {
            question: 'What is the difference between an ordered list and an unordered list in HTML?',
            answer: 'An ordered list (<ol>) is used to create a numbered list, while an unordered list (<ul>) is used to create a bulleted list.',
            options: ['An ordered list (<ol>) is used to create a numbered list, while an unordered list (<ul>) is used to create a bulleted list.', 'An ordered list (<ol>) is used to create a bulleted list, while an unordered list (<ul>) is used to create a numbered list.', 'they are both the same thing', 'An ordered list (<ol>) is used to store list, while an unordered list (<ul>) is used to create a numbered list.']
          },
          {
            question: 'What is the purpose of the <a> tag in HTML?',
            answer: 'The <a> tag is used to create hyperlinks to other web pages or resources.',
            options: ['The <a> tag is used to reload a HTML page.', 'The <a> tag is used to create hyperlinks to other web pages or resources.', 'The <a> tag is used to create an image in an HTML document.', 'The <a> tag is used to add extra meaning to a HTML document.']
          },
          {
            question: 'How do you add an image to an HTML document?',
            answer: 'You can add an image to an HTML document using the <img> tag and the src attribute, which specifies the URL of the image file.',
            options: ['You can add an image to an HTML document using the <picture> tag and the src attribute, which specifies the URL of the image file.', 'You can add an image to an HTML document using the <img> tag and the src attribute, which specifies the URL of the image file.', 'You can add an image to an HTML document using the <png> tag and the src attribute, which specifies the png type of the image file.', 'You can add an image to an HTML document using the <image> tag and the src attribute, which specifies the URL of the image file.']
          },
          {
            question: 'What is the purpose of the <form> tag in HTML?',
            answer: 'The <form> tag is used to create a form that allows users to submit data to a web server.',
            options: ['The <form> tag is used to create a hyperlink to another web page.', 'The <form> tag is used to create a form that allows users to submit data to a web server.', 'The <form> tag is used to create a form that allows users to recieve data.', 'The <form> tag is used to launch a web server.']
          },
          {
            question: 'What is the purpose of the alt attribute in the <img> tag?',
            answer: 'The alt attribute provides alternative text for an image, which is displayed if the image cannot be loaded or if the user is using a screen reader.',
            options: ['The alt attribute specifies the height and width of an image in an HTML document.', 'The alt attribute specifies the url path of an image in an HTML document.', 'The alt attribute specifies just the width of an image in an HTML document.', 'The alt attribute provides alternative text for an image, which is displayed if the image cannot be loaded or if the user is using a screen reader.']
          },
          {
            question: 'What is the difference between a div and a span in HTML?',
            answer: 'A div is a block-level element that is used to group other elements together, while a span is an inline-level element that is used to apply styles to specific sections of text.',
            options: ['A div is a block-level element that is used to group other elements together, while a span is an inline-level element that is used to apply styles to specific sections of text.', 'A div is an inline-level element that is used to apply styles to specific sections of text, while a span is a block-level element that is used to group other elements together.', 'A div and the span are the same just different allowed width', 'A div is an element that stores audio, while a span allows only text']
          },
          {
            question: 'What is the purpose of the <title> tag in HTML?',
            answer: "The <title> tag is used to define the title of an HTML document, which appears in the browser's title bar.",
            options: ["The <title> tag is used to define the title of an HTML document, which appears in the browser's title bar.", 'The <title> tag is used to define the background color of an HTML document.', 'The <title> tag is used to define the meaning of the HTML document.', 'The <title> tag is used to define the image name of an HTML document.']
          },
          {
            question: 'What is the purpose of the target attribute in the <a> tag?',
            answer: 'The target attribute specifies where to open the linked document. It can be set to "_self" to open the link in the same window, "_blank" to open the link in a new window, or other values to specify a named or specific window.',
            options: ["The target attribute specifies the font size of the linked text.", 'The target attribute specifies the box shadow of a text', 'The target attribute specifies where to open the linked document. It can be set to "_self" to open the link in the same window, "_blank" to open the link in a new window, or other values to specify a named or specific window.', 'The target attribute specifies the element of the linked text.']
          }
        ],
        testScore: 0
      },
      {
        topicHead: 'CSS',
        topicSub: [
          {
            subtopic: 'Selectors',
            extraDetail: 'CSS selectors are used to target specific HTML elements on a web page. There are various types of selectors, including element selectors, class selectors, ID selectors, attribute selectors, and pseudo-class selectors.',
            read: false,
            resources: ['https://www.youtube.com/watch?v=IKho_xDKaLw', 'CSS-Mastery-Advanced-Standards-Solutions', 'https://css-tricks.com/almanac/selectors/']
          },
          {
            subtopic: 'Box Model',
            extraDetail: 'The box model refers to how HTML elements are represented as rectangular boxes on a web page. The box model includes the content area, padding, border, and margin.',
            read: false,
            resources: ['https://www.youtube.com/watch?v=HNgdhp1_kEE', 'CSS-Secrets-Lea-Verou', 'https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model']
          },
          {
            subtopic: 'Layout',
            extraDetail: 'CSS layout refers to how elements are positioned and arranged on a web page. CSS offers different positioning options, such as static, relative, absolute, and fixed, as well as display properties that can be used to control the layout, such as flexbox and grid.',
            read: false,
            resources: ['https://www.youtube.com/watch?v=qmPmwdshCMw', 'CSS-Definitive-Guide-Eric-Meyer', 'https://css-tricks.com/snippets/css/a-guide-to-flexbox/']
          },
          {
            subtopic: 'Typography',
            extraDetail: 'CSS offers a range of properties that can be used to style text, including font-family, font-size, font-weight, text-align, line-height, and text-decoration.',
            read: false,
            resources: ['https://www.youtube.com/watch?v=ENpUb7s72Uc', 'Web-Typography-Handbook-Graphic-Designers', 'https://fonts.google.com/']
          },
          {
            subtopic: 'Colors and Backgrounds',
            extraDetail: 'CSS provides properties to control the colors and backgrounds of elements on a web page, including background-color, color, opacity, and gradient.',
            read: false,
            resources: ['https://www.youtube.com/watch?v=3LCjyRUK-fc', 'Principles-Beautiful-Web-Design-3rd', 'https://cssgradient.io/']
          },
          {
            subtopic: 'Responsive Design',
            extraDetail: 'With the increasing popularity of mobile devices, it has become essential to design websites that are responsive and adapt to different screen sizes. CSS offers media queries and responsive design techniques that allow developers to create flexible and responsive layouts.',
            read: false,
            resources: ['https://www.youtube.com/watch?v=JJSoEo8JSnc', 'Responsive-Web-Design-HTML5-CSS', 'https://developers.google.com/web/fundamentals/design-and-ux/responsive']
          },
          {
            subtopic: 'Animations and Transitions',
            extraDetail: 'CSS provides properties and keyframe animations to create simple animations and transitions that can enhance the user experience on a website.',
            read: false,
            resources: ['https://www.youtube.com/watch?v=JuRGeU6eFwM', 'CSS-Animations-Transitions-Modern-Bradley', 'https://animate.style/']
          }
        ],
        test: [
          {
            question: 'What is a CSS selector? Provide an example of each type of selector.',
            answer: 'A CSS selector is used to target specific HTML elements on a web page',
            options: ['A CSS selector is a type of HTML tag used to create styles. Example of selectors include animal selectors, fruit selectors, and weather selectors.', 'A CSS selector is a type of HTML tag used to create styles. Example of selectors include animal selectors, fruit selectors, and weather selectors.', 'A CSS selector is used to target specific HTML elements on a web page', 'CSS selectors are used to create animations on a web page. Examples of selectors include rotate selectors, flip selectors, and bounce selectors']
          },
          {
            question: 'Explain the box model in CSS.',
            answer: 'The box model refers to how HTML elements are represented as rectangular boxes on a web page. The box model includes the content area, padding, border, and margin.',
            options: ["The box model in CSS refers to the technique of wrapping a web page's content in a box. This technique is commonly used to create images, videos, and other media.", 'The box model in CSS refers to how text is wrapped in a box on a web page. This technique is commonly used to create text boxes and input fields.', 'The box model refers to how HTML elements are represented as rectangular boxes on a web page. The box model includes the content area, padding, border, and margin.', 'The box model in CSS refers to how CSS code is organized and formatted on a web page. This technique is commonly used to improve code readability.']
          },
          {
            question: 'Describe the difference between static, relative, absolute, and fixed positioning in CSS.',
            answer: "Static, relative, absolute, and fixed are different types of positioning in CSS. Static positioning is the default positioning for HTML elements. Relative positioning is relative to the element's normal position. Absolute positioning is relative to the nearest positioned ancestor element. Fixed positioning is positioned relative to the viewport, and stays in the same position even when the page is scrolled.",
            options: ['Static, relative, absolute, and fixed positioning in CSS are all used to change the font size of text on a web page.', "Static, relative, absolute, and fixed are different types of positioning in CSS. Static positioning is the default positioning for HTML elements. Relative positioning is relative to the element's normal position. Absolute positioning is relative to the nearest positioned ancestor element. Fixed positioning is positioned relative to the viewport, and stays in the same position even when the page is scrolled.", 'Static, relative, absolute, and fixed positioning in CSS are all used to create animations on a web page.', 'Static, relative, absolute, and fixed positioning in CSS are all used to change the background color of elements on a web page.']
          },
          {
            question: 'What are some properties that can be used to style text in CSS? Give an example of each.',
            answer: 'Properties that can be used to style text in CSS include: font-family: sets the font family for text, font-size: sets the font size for text, font-weight: sets the font weight for text',
            options: ['Properties used to style text in CSS include background-color, margin, and padding. Example: p { background-color: yellow; margin: 10px; padding: 5px; }', 'Properties used to style text in CSS include border-style, width, and height. Example: p { border-style: dashed; width: 50%; height: 100px; }', 'Properties used to style text in CSS include text-shadow, letter-spacing, and text-transform. Example: p { text-shadow: 2px 2px 5px red; letter-spacing: 3px; text-transform: uppercase; }', 'Properties that can be used to style text in CSS include: font-family: sets the font family for text, font-size: sets the font size for text, font-weight: sets the font weight for text']
          },
          {
            question: 'How can you control the colors and backgrounds of elements on a web page using CSS? Provide examples of each.',
            answer: 'CSS provides properties to control the colors and backgrounds of elements on a web page, including:,background-color: sets the background color of an element, color: sets the color of text, opacity: sets the opacity of an element, gradient: creates a gradient background for an element',
            options: ['Colors and backgrounds of elements on a web page can be controlled in CSS by using the transform property. Example: transform: rotate(45deg);', 'CSS provides properties to control the colors and backgrounds of elements on a web page, including:,background-color: sets the background color of an element, color: sets the color of text, opacity: sets the opacity of an element, gradient: creates a gradient background for an element', 'Colors and backgrounds of elements on a web page can be controlled in CSS by using the font-family property. Example: font-family: Arial, sans-serif;', 'Colors and backgrounds of elements on a web page can be controlled in CSS by using the position property. Example: position: absolute;']
          },
          {
            question: 'What is responsive design in CSS? How can you achieve responsive design on a web page?',
            answer: 'Responsive design in CSS refers to designing websites that are flexible and adapt to different screen sizes. This can be achieved using media queries and responsive design techniques that adjust the layout and design based on the screen size of the device.',
            options: ['Responsive design in CSS refers to designing websites that are flexible and adapt to different screen sizes. This can be achieved using media queries and responsive design techniques that adjust the layout and design based on the screen size of the device.', 'Responsive design in CSS refers to the use of CSS properties to make a web page more visually appealing. This can be achieved by using bold fonts and bright colors.', 'Responsive design in CSS refers to the use of CSS properties to make a web page adapt to different screen sizes. This can be achieved by using media queries and responsive design techniques.', 'Responsive design in CSS refers to the use of CSS to create animations on a web page. This can be achieved by using the transform property.']
          },
          {
            question: 'How can you create simple animations and transitions using CSS? Provide an example.',
            answer: 'Animation and transitions are created using CSS keyframe animations and properties such as transition',
            options: ['Animation and transitions are created using CSS keyframe animations and properties such as transition', 'Simple animations and transitions in CSS can be created by using the media quiries', 'Simple animations and transitions in CSS can be created by using the Color property', 'Simple animations and transitions in CSS can be created by using the font']
          }
        ],
        testScore: 0
      },
      {
        topicHead: 'JavaScript',
        topicSub: [
          {
            subtopic: 'Variables and Data Types',
            extraDetail: 'JavaScript allows developers to store data in variables, which can hold different data types such as strings, numbers, and booleans.',
            read: false,
            resources: ['https://www.youtube.com/watch?v=xHLd36QoS4k', 'Eloquent JavaScript by Marijn Haverbeke', 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_Types#variables']
          },
          {
            subtopic: 'Operators',
            extraDetail: 'JavaScript provides operators that can be used to perform arithmetic, comparison, logical, and other operations on variables and data.',
            read: false,
            resources: ['https://www.youtube.com/watch?v=Ob4vkJ-oaYw', 'JavaScript: The Good Parts by Douglas Crockford', 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators']
          },
          {
            subtopic: 'Control Structures',
            extraDetail: 'Control structures are used to control the flow of execution in a JavaScript program. Some examples of control structures include if/else statements, switch statements, and loops such as for and while loops.',
            read: false,
            resources: ['https://www.youtube.com/watch?v=s9wW2PpJsmQ', 'JavaScript for Kids: A Playful Introduction to Programming by Nick Morgan', 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling']
          },
          {
            subtopic: 'Functions',
            extraDetail: 'Functions are reusable blocks of code that can be called and executed multiple times within a program. JavaScript functions can take parameters and return values.',
            read: false,
            resources: ['https://www.youtube.com/watch?v=wRHAitGzBrg', "You Don't Know JS: Up & Going by Kyle Simpson", 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions']
          },
          {
            subtopic: 'Arrays',
            extraDetail: 'Arrays are used to store a collection of data in JavaScript. They can hold multiple data types and can be accessed and manipulated using various methods.',
            read: false,
            resources: ['https://www.youtube.com/watch?v=UflHuQj6MVA', 'JavaScript: The Definitive Guide by David Flanagan', 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Indexed_collections']
          },
          {
            subtopic: 'Objects',
            extraDetail: 'Objects are used to represent complex data structures in JavaScript. They consist of properties and methods, which can be accessed and manipulated using dot notation.',
            read: false,
            resources: ['https://www.youtube.com/watch?v=1Osb_iGDdjk', "You Don't Know JS: This & Object Prototypes by Kyle Simpson", 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects']
          },
          {
            subtopic: 'Events',
            extraDetail: 'Events are actions or occurrences that happen in the browser, such as a user clicking a button or scrolling a page. JavaScript can be used to listen for and respond to events.',
            read: false,
            resources: ['https://www.youtube.com/watch?v=QE1YQnhntgw', "JavaScript and jQuery: Interactive Front-End Web Development by Jon Duckett", 'https://developer.mozilla.org/en-US/docs/Web/Events']
          },
          {
            subtopic: 'DOM Manipulation',
            extraDetail: 'The Document Object Model (DOM) is a programming interface for HTML and XML documents. JavaScript can be used to manipulate the DOM, adding or removing elements, changing styles, and handling events.',
            read: false,
            resources: ['https://www.youtube.com/watch?v=0ik6X4DJKCc', "DOM Enlightenment by Cody Lindley", 'https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model']
          },
          {
            subtopic: 'AJAX and APIs',
            extraDetail: 'AJAX is a technique used to send and receive data asynchronously from a web server without requiring a page refresh. JavaScript can be used to make AJAX requests and interact with APIs to retrieve and display data on a web page.',
            read: false,
            resources: ['https://www.youtube.com/watch?v=OUBpDgJjwM4', 'Async & Performance by Kyle Simpson', 'https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Fetching_data']
          },
          {
            subtopic: 'Error Handling',
            extraDetail: 'JavaScript code can generate errors, such as syntax errors or runtime errors. Error handling techniques, such as try/catch blocks, can be used to handle these errors and prevent a program from crashing.',
            read: false,
            resources: ['https://www.youtube.com/watch?v=iZLP4qOwY8I', 'Secrets of the JavaScript Ninja by John Resig and Bear Bibeault', 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling#try...catch_statement']
          }
        ],
        test: [
          {
            question: 'Which data type is used to store words or text in JavaScript?',
            answer: 'string',
            options: ['boolean', 'string', 'number', 'array']
          },
          {
            question: 'Which control structure is used to repeat a block of code a specific number of times in JavaScript?',
            answer: 'for loop',
            options: ['for loop', 'while loop', 'switch statement', 'if/else statement']
          },
          {
            question: 'What is the result of the following expression: "10" + 5;',
            answer: '"105"',
            options: ['"15"', '15', '"1055"', '"105"']
          },
          {
            question: 'What is a parameter in a JavaScript function?',
            answer: 'A parameter in a JavaScript function is a variable that is used to accept input values.',
            options: ['A parameter in a JavaScript function is a variable that is used to store data.', 'A parameter in a JavaScript function is a method that is used to manipulate the DOM.', 'A parameter is a JavaScript ', 'A parameter in a JavaScript function is a variable that is used to accept input values.']
          },
          {
            question: 'How do you add an element to the end of an array in JavaScript?',
            answer: 'To add an element to the end of an array in JavaScript, you can use the push() method.',
            options: ['To add an element to the end of an array in JavaScript, you can use the splice() method.', 'To add an element to the end of an array in JavaScript, you can use the push() method.', 'To add an element to the end of an array in JavaScript, you can use the shift() method.', 'To add an element to the end of an array in JavaScript, you can use the unshift() method.']
          },
          {
            question: 'What is a method in a JavaScript object?',
            answer: 'A method in a JavaScript object is a function that is a property of the object.',
            options: ['A method in a JavaScript object is a variable that is a property of the object.', 'A method in a JavaScript object is a function that is a property of the object.', 'A method in a JavaScript object is a way to create loops.', 'A method in a JavaScript object is a way to manipulate the DOM.']
          },
          {
            question: 'What is an event listener in JavaScript?',
            answer: 'An event listener in JavaScript is a function that waits for a specific event to occur and then executes a block of code in response.',
            options: ['An event listener in JavaScript is a way to manipulate the DOM.', 'An event listener in JavaScript is a method for creating loops.', 'An event listener in JavaScript is a function that waits for a specific event to occur and then executes a block of code in response.', 'An event listener in JavaScript is a variable that stores data.']
          },
          {
            question: 'What is the purpose of the getElementById() method in JavaScript?',
            answer: 'The getElementById() method in JavaScript is used to retrieve an element from an HTML document by its ID.',
            options: ['The getElementById() method in JavaScript is used to retrieve an element from an HTML document by its class.', 'The getElementById() method in JavaScript is used to retrieve an element from an HTML document by its ID.', 'The getElementById() method in JavaScript is used to retrieve all elements from an HTML document.', 'The getElementById() method in JavaScript is used to manipulate the DOM']
          },
          {
            question: 'How can JavaScript interact with APIs?',
            answer: 'By making requests to the API endpoints and receiving responses back.',
            options: ['By accessing the API directly in the browser address bar.', 'By using CSS styles to modify the API output.', 'By making requests to the API endpoints and receiving responses back.', 'By sending emails to the API administrator.']
          },
          {
            question: 'What are try/catch blocks used for in JavaScript?',
            answer: 'To handle errors that might occur during program execution.',
            options: ['To test functions in isolation from the rest of the code.', 'To specify which type of data is allowed to be entered into a function.', 'To handle errors that might occur during program execution.', 'To control the flow of execution in a program.']
          }
        ],
        testScore: 0
      },
      {
        topicHead: 'CSS framework',
        topicSub: [
          {
            subtopic: 'Grid Systems',
            extraDetail: 'Grid systems provide a way to create a responsive layout for a web page. They use a set of columns and rows to organize content, and provide classes that can be used to specify the size and position of elements.',
            read: false,
            resources: ['https://www.youtube.com/watch?v=jV8B24rSN5o', 'Grid Systems in Graphic Design by Josef Müller-Brockmann', 'https://css-tricks.com/snippets/css/complete-guide-grid/']
          },
          {
            subtopic: 'Typography',
            extraDetail: 'Typography refers to the design and use of fonts in web development. CSS frameworks often include pre-defined styles for headings, paragraphs, and other text elements.',
            read: false,
            resources: ['https://www.youtube.com/watch?v=QY1E1hIb-ws', "Thinking with Type, 2nd revised and expanded edition: A Critical Guide for Designers, Writers, Editors, & Students by Ellen Lupton", 'https://fonts.google.com/']
          },
          {
            subtopic: 'Responsive Design',
            extraDetail: 'Responsive design is the practice of creating websites that adapt to different screen sizes and device types. CSS frameworks often include responsive design features such as media queries and flexible grid systems.',
            read: false,
            resources: ['https://www.youtube.com/watch?v=bn-DQCifeQQ', 'Responsive Web Design by Ethan Marcotte', 'https://developers.google.com/web/fundamentals/design-and-ux/responsive']
          },
          {
            subtopic: 'Styling Components',
            extraDetail: 'CSS frameworks often provide pre-defined styles for common web development components such as buttons, forms, and navigation menus. These styles can be customized to fit the design and branding of a specific project.',
            read: false,
            resources: ['https://www.youtube.com/watch?v=B7foSBLZg_U', 'CSS: The Missing Manual, 4th edition by David Sawyer McFarland and Chris Grover', 'https://styled-components.com/']
          },
          {
            subtopic: 'Cross-Browser Compatibility',
            extraDetail: 'CSS frameworks are designed to work across different web browsers and operating systems. They use standardized code and techniques to ensure that websites look and function consistently across different platforms.',
            read: false,
            resources: ['https://www.youtube.com/watch?v=JEI2Zqb3Cq0', 'High Performance Web Sites: Essential Knowledge for Front-End Engineers by Steve Souders', 'https://caniuse.com/']
          }
        ],
        test: [
          {
            question: 'What is the purpose of a grid system in CSS frameworks?',
            answer: 'To create a responsive layout for a web page.',
            options: ['To add styling to buttons and forms.', 'To create a responsive layout for a web page.', 'To create animations and transitions.', 'To generate dynamic content for a web page.']
          },
          {
            question: 'What does typography refer to in web development?',
            answer: 'The design and use of fonts.',
            options: ['The use of images and graphics on a web page.', 'The layout and organization of content on a web page.', 'The design and use of fonts.', 'The creation of interactive elements on a web page.']
          },
          {
            question: 'What is the purpose of responsive design in web development?',
            answer: 'To create websites that adapt to different screen sizes and device types.',
            options: ['To add interactive features and animations to a website.', 'To optimize website loading speed and performance.', 'To create websites that adapt to different screen sizes and device types.', 'To improve website security and protect against cyber attacks.']
          },
          {
            question: 'What are some common web development components that CSS frameworks provide pre-defined styles for?',
            answer: 'Buttons, forms, and navigation menus.',
            options: ['Web hosting and domain registration.', 'Database connections and server-side scripting.', 'Interactive games and animations.', 'Buttons, forms, and navigation menus.']
          },
          {
            question: ' What is the purpose of cross-browser compatibility in web development?',
            answer: 'To ensure that websites look and function consistently across different web browsers and operating systems.',
            options: ['To improve website performance and loading speed.', 'To optimize website content for search engine rankings.', 'To provide customized user experiences based on location and device type.', 'To ensure that websites look and function consistently across different web browsers and operating systems.']
          }
        ],
        testScore: 0
      },
      {
        topicHead: 'JavaScript library',
        topicSub: [
          {
            subtopic: 'Components and Modules',
            extraDetail: 'JavaScript frameworks often provide tools for building modular components that can be reused across an application. These components can be thought of as building blocks that can be combined to create complex user interfaces.',
            read: false,
            resources: ['https://www.youtube.com/user/TechGuyWeb', '"React Design Patterns and Best Practices" by Michele Bertoli', 'https://reactjs.org/docs/components-and-props.html']
          },
          {
            subtopic: 'Data Binding',
            extraDetail: 'Data binding is the process of connecting data to a user interface, so that changes in the data are automatically reflected in the interface. Many JavaScript frameworks provide tools for implementing data binding.',
            read: false,
            resources: ['https://www.youtube.com/channel/UCW5YeuERMmlnqo4oq8vwUpg', '"Angular 2 Development with TypeScript" by Yakov Fain and Anton Moiseev', 'https://vuejs.org/v2/guide/computed.html']
          },
          {
            subtopic: 'Routing',
            extraDetail: 'Routing is the process of determining which component or view to display based on the current URL or user interaction. JavaScript frameworks often provide tools for implementing routing.',
            read: false,
            resources: ['https://www.youtube.com/user/academind', '"React Router Quick Start Guide" by Sagar Ganatra', 'https://angular.io/guide/router']
          },
          {
            subtopic: 'State Management',
            extraDetail: 'State management is the process of managing the data and user interface state of an application. JavaScript frameworks often provide tools for implementing state management, such as Redux or Vuex.',
            read: false,
            resources: ['https://www.youtube.com/user/LevelUpTuts', '"React Redux" by Eliot Landrum', 'https://vuex.vuejs.org/']
          },
          {
            subtopic: 'Dependency Injection',
            extraDetail: 'Dependency injection is the process of injecting dependencies into a component or module, rather than creating them directly within the component. This can make components more modular and easier to test. Many JavaScript frameworks provide tools for implementing dependency injection.',
            read: false,
            resources: ['https://www.youtube.com/channel/UCO1cgjhGzsSYb1rsB4bFe4Q', '"Angular Dependency Injection" by Alex Knol', 'https://angular.io/guide/dependency-injection']
          },
          {
            subtopic: 'Testing',
            extraDetail: 'Testing is an important part of building a robust and maintainable application. JavaScript frameworks often provide tools for testing, such as Jest or Jasmine.',
            read: false,
            resources: ['https://www.youtube.com/channel/UCbGZKLIHpox2l0whz6_RYyg', '"Testing Vue.js Applications" by Edd Yerburgh', 'https://jestjs.io/docs/en/getting-started']
          },
          {
            subtopic: 'Performance Optimization',
            extraDetail: 'JavaScript frameworks often provide tools for optimizing the performance of an application, such as code splitting or lazy loading. These tools can help reduce the amount of JavaScript that needs to be downloaded and executed by the browser, improving the speed and responsiveness of the application.',
            read: false,
            resources: ['https://www.youtube.com/user/ChromeDevelopers', '"High Performance Web Sites" by Steve Souders', 'https://reactjs.org/docs/code-splitting.html']
          }
        ],
        test: [
          {
            question: 'What are modular components in JavaScript frameworks?',
            answer: 'Modular components are building blocks that can be reused across an application.',
            options: ['Modular components are only used for backend programming in JavaScript.', 'Modular components are building blocks that are only used for styling purposes.', 'Modular components are building blocks that can be reused across an application.', 'Modular components are only used in small applications.']
          },
          {
            question: 'What is data binding in JavaScript frameworks?',
            answer: 'Data binding is the process of connecting data to a user interface, so that changes in the data are automatically reflected in the interface.',
            options: ['Data binding is the process of connecting the user interface to the database.', 'Data binding is the process of connecting data to a user interface, so that changes in the data are automatically reflected in the interface.', 'Data binding is the process of connecting the user interface to the internet.', 'Data binding is the process of connecting the user interface to the server.']
          },
          {
            question: 'What is routing in JavaScript frameworks?',
            answer: 'Routing is the process of determining which component or view to display based on the current URL or user interaction.',
            options: ['Routing is the process of determining which component or view to display based on the current URL or user interaction.', 'Routing is the process of determining which user has logged in to the application.', 'Routing is the process of determining which device is being used to access the application.', 'Routing is the process of determining which time of the day the application is being used.']
          },
          {
            question: 'What is state management in JavaScript frameworks?',
            answer: 'State management is the process of managing the data and user interface state of an application.',
            options: ['State management is the process of managing the state of the database used in the application.', 'State management is the process of managing the state of the server hosting the application', 'State management is the process of managing the data and user interface state of an application.', "State management is the process of managing the state of the user's computer or device."]
          },
          {
            question: 'What is dependency injection in JavaScript frameworks?',
            answer: 'Dependency injection is the process of injecting dependencies into a component or module, rather than creating them directly within the component.',
            options: ["Dependency injection is the process of injecting dependencies into the user's computer or device.", 'Dependency injection is the process of injecting dependencies into the server hosting the application.', 'Dependency injection is the process of injecting dependencies into the database used in the application.', 'Dependency injection is the process of injecting dependencies into a component or module, rather than creating them directly within the component.']
          },
          {
            question: 'What are testing tools in JavaScript frameworks?',
            answer: 'Testing tools are tools for testing the application code, such as Jest or Jasmine.',
            options: ["Testing tools are tools for testing the server hosting the application.", 'Testing tools are tools for testing the database used in the application.', 'Testing tools are tools for testing the application code, such as Jest or Jasmine.', "Testing tools are tools for testing the user's computer or device."]
          },
          {
            question: 'What are performance optimization tools in JavaScript frameworks?',
            answer: 'Performance optimization tools are tools for optimizing the performance of an application, such as code splitting or lazy loading.',
            options: ["Performance optimization tools are tools for optimizing the user's computer or device.", 'Performance optimization tools are tools for optimizing the database used in the application.', 'Performance optimization tools are tools for optimizing the performance of an application, such as code splitting or lazy loading.', 'Performance optimization tools are tools for optimizing the server hosting the application.']
          }
        ],
        testScore: 0
      },
      {
        topicHead: 'Version control',
        resources: ['youtube', 'book', 'website'],
        topicSub: [
          {
            subtopic: 'Repository',
            extraDetail: 'A repository is a central location where all the source code and related files are stored. It is a key component of version control and provides a way to manage different versions of the same codebase.',
            read: false,
            resources: ['https://www.youtube.com/channel/UCPpLJOsXGwOos_mzRBWZrHg','Version Control with Git by Jon Loeliger and Matthew McCullough','https://github.com/']
          },
          {
            subtopic: 'Commits',
            extraDetail: 'A commit is a snapshot of changes made to the codebase. When a developer makes changes to the code, they can create a commit with a message describing the changes made. Commits provide a way to keep track of changes over time and revert to previous versions if needed.',
            read: false,
            resources: ['https://www.youtube.com/user/TechGuyWeb','Pro Git by Scott Chacon and Ben Straub','https://www.atlassian.com/git/tutorials/making-a-commit']
          },
          {
            subtopic: 'Branching and Merging',
            extraDetail: "Branching is the process of creating a copy of the codebase that can be modified independently of the main codebase. Developers can work on their own branch and merge their changes back into the main codebase when they are ready. This allows multiple developers to work on the same codebase without interfering with each other's work.",
            read: false,
            resources: ['https://www.youtube.com/channel/UC8butISFwT-Wl7EV0hUK0BQ','Git Pocket Guide by Richard E. Silverman','https://www.gitkraken.com/learn/git/branching-workflows']
          },
          {
            subtopic: 'Conflict Resolution',
            extraDetail: 'Conflicts can occur when two developers make changes to the same file or codebase. Version control tools provide a way to resolve conflicts by highlighting the changes made and allowing developers to choose which changes to keep.',
            read: false,
            resources: ['https://www.youtube.com/channel/UC4JX40jDee_tINbkjycV4Sg','Git for Teams by Emma Jane Hogbin Westby','https://docs.gitlab.com/ee/user/project/resolving_conflicts.html']
          },
          {
            subtopic: 'Pull Requests',
            extraDetail: 'A pull request is a request to merge changes made in a branch into the main codebase. It provides a way for developers to review and discuss the changes made before they are merged into the main codebase.',
            read: false,
            resources: ['https://www.youtube.com/channel/UCW5YeuERMmlnqo4oq8vwUpg','Learning Git and GitHub by Tobias Günther','https://www.atlassian.com/git/tutorials/making-a-pull-request']
          },
          {
            subtopic: 'Collaboration',
            extraDetail: 'Version control tools allow developers to collaborate on a project by sharing their changes with others and keeping track of who made which changes. This makes it easier to work on a project as a team and keep everyone up to date with the latest changes.',
            read: false,
            resources: ['https://www.youtube.com/user/academind','Pro Git by Scott Chacon and Ben Straub','https://about.gitlab.com/topics/gitlab-flow/']
          }
        ],
        test: [
          {
            question: 'What is a repository in version control?',
            answer: 'A central location where all the source code and related files are stored.',
            options: ['A tool that automatically merges changes from different branches.', 'A component that allows developers to collaborate on a project.', 'A central location where all the source code and related files are stored.', 'A feature that highlights syntax errors in code.']
          },
          {
            question: 'What is a commit in version control?',
            answer: 'A snapshot of changes made to the codebase.',
            options: ['A request to merge changes made in a branch into the main codebase.', 'A snapshot of changes made to the codebase.', 'The process of automatically merging changes from different branches.', 'A feature that generates documentation for the codebase.']
          },
          {
            question: 'What is branching in version control?',
            answer: 'The process of creating a copy of the codebase that can be modified independently of the main codebase.',
            options: ['The process of publishing the codebase to a public repository.', 'The process of automatically merging changes from different branches.', 'The process of copying and pasting code from one file to another.', 'The process of creating a copy of the codebase that can be modified independently of the main codebase.']
          },
          {
            question: 'How can conflicts be resolved in version control?',
            answer: 'By highlighting the changes made and allowing developers to choose which changes to keep.',
            options: ['By highlighting the changes made and allowing developers to choose which changes to keep.', 'By automatically discarding conflicting changes.', 'By creating a new branch for conflicting changes.', 'By rolling back to a previous version of the codebase.']
          },
          {
            question: 'What is a pull request in version control?',
            answer: 'A request to merge changes made in a branch into the main codebase, allowing developers to review and discuss the changes before they are merged.',
            options: ['A feature that allows developers to edit code collaboratively in real time.', 'A tool that creates new branches based on previous commits.', 'A feature that automatically merges changes from different branches.', 'A request to merge changes made in a branch into the main codebase, allowing developers to review and discuss the changes before they are merged.']
          },
          {
            question: 'How does version control enable collaboration on a project?',
            answer: 'By allowing developers to share their changes with others and keeping track of who made which changes.',
            options: ['By automatically generating code documentation.', 'By allowing developers to share their changes with others and keeping track of who made which changes.', 'By providing a platform for discussion and project management.', 'By automatically detecting and fixing syntax errors in code.']
          }
        ],
        testScore: 0
      },
      {
        topicHead: 'Web accessibility',
        topicSub: [
          {
            subtopic: 'Screen Readers',
            extraDetail: 'Screen readers are software programs that read the text on a web page out loud for people who are blind or visually impaired. They are a key assistive technology for accessing digital content.',
            read: false,
            resources: ['https://www.youtube.com/channel/UCNbzNfKsF6GNDfEA7s0tx-Q', 'A Web for Everyone: Designing Accessible User Experiences by Sarah Horton and Whitney Quesenbery', 'https://webaim.org/techniques/screenreader/']
          },
          {
            subtopic: 'Alt Text',
            extraDetail: 'Alt text is short descriptive text that is added to images on a web page. It is used by screen readers to describe the image to users who cannot see it.',
            read: false,
            resources: ['https://www.youtube.com/channel/UCX9p-vJLwkxi4GK02CMe5eA', "Don't Make Me Think, Revisited: A Common Sense Approach to Web Usability by Steve Krug", 'https://www.w3.org/WAI/WCAG21/Understanding/text-alternatives/']
          },
          {
            subtopic: 'Color Contrast',
            extraDetail: 'Color contrast refers to the difference in brightness and color between text and its background. High contrast makes it easier for people with low vision to read text on a web page.',
            read: false,
            resources: ['https://www.youtube.com/channel/UCmJuO6UCGJYzyvR_zRcW6mw', 'A Web for Everyone: Designing Accessible User Experiences by Sarah Horton and Whitney Quesenbery', 'https://webaim.org/resources/contrastchecker/']
          },
          {
            subtopic: 'Keyboard Navigation',
            extraDetail: 'Keyboard navigation is the ability to navigate a web page using only the keyboard. This is important for people who have difficulty using a mouse or other pointing device.',
            read: false,
            resources: ['https://www.youtube.com/user/DequeSystems', 'Accessibility Handbook: Making 508 Compliant Websites by Katie Cunningham', 'https://www.w3.org/WAI/WCAG21/Understanding/keyboard/']
          },
          {
            subtopic: 'ARIA',
            extraDetail: 'Accessible Rich Internet Applications (ARIA) is a set of attributes that can be added to HTML tags to provide additional information to assistive technologies, such as screen readers.',
            read: false,
            resources: ['https://www.youtube.com/playlist?list=PLNYkxOF6rcIB3ci6nwNyLYNU6RDOU3YyL', 'Accessibility Handbook: Making 508 Compliant Websites by Katie Cunningham', 'https://www.w3.org/TR/wai-aria-1.2/']
          }
        ],
        test: [
          {
            question: 'What is a screen reader?',
            answer: 'A software program that reads the text on a web page out loud for people who are blind or visually impaired.',
            options: ['A program that analyzes website traffic data.', 'A device that projects a magnified view of a web page onto a separate screen.', 'A tool for converting images to text on a web page.', 'A software program that reads the text on a web page out loud for people who are blind or visually impaired.']
          },
          {
            question: 'What is alt text?',
            answer: 'Short descriptive text that is added to images on a web page, used by screen readers to describe the image to users who cannot see it.',
            options: ['A tool for adding background music to a web page.', 'A type of font used for headings on a web page.', 'A programming language used to create web pages.', 'Short descriptive text that is added to images on a web page, used by screen readers to describe the image to users who cannot see it.']
          },
          {
            question: 'What is color contrast?',
            answer: 'The difference in brightness and color between text and its background on a web page.',
            options: ["A feature that adjusts the font size based on the user's screen resolution.", 'A type of font that is more legible on mobile devices.', 'The difference in brightness and color between text and its background on a web page.', 'A tool that allows users to change the font color on a web page.']
          },
          {
            question: 'What is keyboard navigation?',
            answer: 'The ability to navigate a web page using only the keyboard.',
            options: ['The ability to navigate a web page using only the keyboard.', 'A tool for searching the web for specific keywords.', 'A feature that highlights links on a web page.', 'A way to adjust the volume of sound effects on a web page.']
          },
          {
            question: 'What is ARIA?',
            answer: 'A set of attributes that can be added to HTML tags to provide additional information to assistive technologies, such as screen readers.',
            options: ['A programming language used to create mobile applications.', 'A set of attributes that can be added to HTML tags to provide additional information to assistive technologies, such as screen readers.', 'A tool for compressing video files for faster streaming.', 'A feature that translates web content into different languages.']
          }
        ],
        testScore: 0
      }
    ]
    }
  ,
{
  name: 'Back-End development',
  src: backenddev,
  details: `A backend roadmap is a structured guide that outlines the essential topics and subtopics to learn and master in backend development. It serves as a roadmap to navigate through the vast and ever-evolving field of backend technologies and practices.
  The roadmap provides a step-by-step approach to acquiring the necessary skills and knowledge. It typically covers programming languages, web frameworks, databases, APIs, security, testing, deployment, and continuous learning. Each topic is broken down into subtopics, ensuring a comprehensive understanding of the subject matter.
  A backend roadmap acts as a reference and learning resource, guiding individuals through the fundamental concepts, best practices, and industry-standard tools. It helps developers build a strong foundation and progress towards more advanced backend skills.
  By following a backend roadmap, developers can gain a well-rounded understanding of backend development, enabling them to design, build, and maintain robust and scalable web applications. It also facilitates continuous learning and staying updated with the latest trends, technologies, and practices in the backend development landscape.`
},
{
  name: 'Cloud Engineer',
  src: clouddev,
  details: `Cloud engineering is a discipline that focuses on designing, building, and managing cloud-based systems and infrastructure. It involves leveraging cloud technologies and services to optimize scalability, availability, and performance of applications and services.
  To follow a career path in cloud engineering, there are several key steps to consider. First, it is important to gain a strong understanding of cloud computing concepts, such as virtualization, distributed systems, and containerization. Next, familiarize yourself with major cloud platforms like Amazon Web Services (AWS), Microsoft Azure, and Google Cloud Platform (GCP), and learn their core services and capabilities.
  Additionally, acquiring expertise in infrastructure-as-code (IaC) tools like Terraform or Ansible is crucial for automating cloud infrastructure provisioning and management. Understanding container orchestration platforms like Kubernetes is also valuable.
  Continuous learning and staying updated with emerging cloud technologies and best practices is essential in this rapidly evolving field. Engage in online courses, certifications, and workshops to deepen your knowledge and gain practical experience. Joining cloud communities, attending conferences, and participating in hands-on projects will further enhance your skills.
  Overall, cloud engineering requires a combination of technical expertise, problem-solving abilities, and a dedication to ongoing learning and skill development.`
},{
  name: 'CX/ UI/ UX Design',
  src: uidesign,
  details: `A CX/UI/UX design roadmap is a strategic plan that outlines the process and key milestones for creating exceptional user experiences in products or services. It serves as a guide for designers, stakeholders, and development teams to ensure a user-centric approach throughout the design and development cycle.
  The roadmap typically includes several components, such as:
  1. Research and Discovery: This phase involves conducting user research, market analysis, and competitor analysis to gain insights into user needs, pain points, and industry trends.
  2. User Personas and Journey Mapping: Creating user personas helps designers understand their target audience and their goals, motivations, and behaviors. Journey mapping helps visualize the user's experience across different touchpoints and identify areas for improvement.
  3. Information Architecture and Wireframing: Defining the structure and organization of content, features, and interactions through wireframes helps establish a solid foundation for the user interface and user experience.
  4. Visual Design and Prototyping: Applying visual elements, such as typography, color schemes, and branding, to create visually appealing designs. Prototyping allows designers to test and validate the user experience before development.
  5. Usability Testing and Iteration: Conducting usability tests with real users to gather feedback and iterate on the design. This ensures that the final product aligns with user expectations and goals.
  6. UI Development and Integration: Translating the design into a functional user interface and integrating it into the development environment.
  7. Continuous Improvement: Monitoring user feedback, analytics, and market trends to identify opportunities for enhancing the user experience over time.
  By following a CX/UI/UX design roadmap, organizations can create intuitive, user-friendly experiences that meet user needs, drive engagement, and achieve business objectives.`
},{
  name: 'Product Manager',
  src: productmanager,
  details: `A product manager roadmap is a strategic document that outlines the vision, goals, and planned initiatives for a product. It serves as a guide for product managers to align cross-functional teams, stakeholders, and resources towards a shared vision. The roadmap provides a visual representation of the product's evolution over time and helps prioritize features and enhancements based on customer needs, market trends, and business objectives.
  To follow a product manager roadmap effectively, it's important to:
  Define clear goals and objectives: Clearly articulate the purpose and objectives of the product roadmap to ensure alignment with the overall product strategy.
  Gather input from stakeholders: Engage with stakeholders to understand their expectations, gather insights, and incorporate their feedback into the roadmap.
  Prioritize features and initiatives: Evaluate features based on customer value, market demand, technical feasibility, and business goals. Prioritize them accordingly to ensure resources are allocated effectively.
  Communicate and collaborate: Share the roadmap with cross-functional teams, stakeholders, and executives to foster transparency and alignment. Regularly communicate updates and progress to keep everyone informed and engaged.
  Adapt and iterate: Continuously reassess the roadmap based on user feedback, market changes, and emerging opportunities. Be flexible and ready to adapt the plan as needed to deliver maximum value to the customers and the business.`
},{
  name: 'Machine Learning and A.I',
  src: machinelearn,
  details: `A machine learning roadmap is a strategic plan that outlines the steps and milestones required to develop and deploy machine learning models. It provides a structured approach for understanding, implementing, and improving machine learning solutions. The roadmap typically includes key concepts, algorithms, tools, and resources needed to build and deploy successful machine learning projects.
  To follow a machine learning roadmap effectively, it's important to:
  Learn the fundamentals: Start by understanding the basics of machine learning, including concepts like supervised and unsupervised learning, feature engineering, model evaluation, and performance metrics.
  Gain programming and data skills: Acquire proficiency in programming languages such as Python or R and develop skills in data manipulation, exploration, and preprocessing.
  Explore machine learning algorithms: Study a variety of machine learning algorithms such as linear regression, decision trees, random forests, support vector machines, and neural networks. Understand their strengths, weaknesses, and use cases.
  Experiment with datasets: Practice working with real-world datasets, apply different algorithms, and evaluate model performance. Gain experience in data cleaning, feature selection, and model tuning.
  Understand model deployment: Learn about deploying machine learning models in production environments. Explore frameworks, libraries, and tools for model deployment and monitoring.
  Stay updated: Machine learning is a rapidly evolving field. Stay informed about the latest research, algorithms, and techniques by reading research papers, following industry blogs, and participating in machine learning communities.
  Apply knowledge to real-world problems: Solve practical machine learning problems and participate in Kaggle competitions or similar platforms to gain hands-on experience and learn from the community.
  By following a machine learning roadmap, you can build a strong foundation, expand your knowledge, and apply machine learning techniques effectively to a wide range of domains and applications.`
},{
  name: 'Mobile development',
  src: mobiledev,
  details: `A mobile development roadmap is a strategic plan that outlines the necessary steps and milestones for building mobile applications. It provides a structured approach to developing mobile apps and ensures that all essential aspects, from conceptualization to deployment, are covered.
  To use a mobile development roadmap effectively, consider the following steps:
  1. Define the app's purpose and target audience: Clearly understand the problem your app aims to solve and identify the target audience. Conduct market research to assess the competition and gather insights.
  2. Design the user experience (UX) and user interface (UI): Create wireframes and prototypes to define the app's layout, navigation, and visual elements. Consider usability, accessibility, and aesthetics to deliver an intuitive and engaging user experience.
  3. Select the appropriate technology stack: Determine the platform (iOS, Android, or both) and select the suitable programming languages (Swift, Kotlin, React Native, Flutter) and frameworks for development.
  4. Develop the app's features and functionality: Implement the desired features and functionality based on the app's requirements. Focus on code quality, modularity, and maintainability.
  5. Perform thorough testing: Conduct unit testing, integration testing, and user testing to ensure the app functions as expected and provides a seamless user experience. Debug and fix any identified issues.
  6. Optimize for performance: Optimize the app's performance by minimizing resource usage, improving loading times, and addressing potential bottlenecks.
  7. Deploy and distribute the app: Prepare the app for distribution through app stores (such as the Apple App Store or Google Play Store) or enterprise distribution channels. Follow the required guidelines and ensure proper submission.
  8. Gather user feedback and iterate: After launching the app, gather user feedback, analyze usage data, and make iterative improvements based on user needs and preferences.
  By following a mobile development roadmap, you can ensure a systematic approach to building mobile applications, resulting in well-designed, functional, and successful apps that meet user expectations.`
},{
  name: 'Game development',
  src: gamedev,
  details: `Game development roadmap is a strategic plan that outlines the various stages and milestones involved in creating a video game. It provides a structured approach to game development, ensuring that all aspects, from concept to release, are covered effectively.
  To use a game development roadmap:
  Conceptualization: Define the game's genre, theme, mechanics, and target audience. Create a high-level concept and outline the core gameplay features.
  Game Design: Develop detailed game design documents that specify gameplay mechanics, level design, story elements, characters, and visual aesthetics. Create prototypes and iterate on game mechanics to ensure an engaging player experience.
  Art and Assets: Create or acquire the necessary art assets, including character designs, environments, animations, sound effects, and music. Ensure a cohesive visual style that aligns with the game's concept and target audience.
  Programming and Development: Implement the game's mechanics, user interface, and gameplay systems using programming languages and game engines. Test and debug the game to ensure functionality and address any issues.
  Testing and Quality Assurance: Conduct thorough testing to identify bugs, glitches, and gameplay imbalances. Iterate and refine the game based on user feedback and playtesting.
  Polishing and Optimization: Fine-tune the game's performance, optimize load times, and enhance visual and audio effects. Ensure smooth gameplay, intuitive controls, and an immersive experience.
  Release and Distribution: Prepare the game for distribution, whether through digital platforms, app stores, or physical copies. Create marketing materials, develop a launch strategy, and coordinate release logistics.
  Post-Launch Support: Gather player feedback, monitor game metrics, and release updates or patches to address issues and improve the game based on player reception.
  By following a game development roadmap, developers can maintain a structured approach, manage resources effectively, and ensure the successful creation and release of a compelling and enjoyable video game.`
},{
  name: 'Syber Security',
  src: sybersec,
  details: `Following a cybersecurity roadmap is crucial for ensuring the protection and resilience of an organization's digital assets and sensitive information. It provides a structured plan to identify, assess, and mitigate potential security risks and threats effectively.
  By following a cybersecurity roadmap:
  1. Comprehensive Security Strategy: A roadmap helps develop a comprehensive security strategy by outlining the necessary security controls, policies, and procedures to protect against various cyber threats.
  2. Risk Management: It facilitates a systematic approach to identify, assess, and prioritize risks, enabling organizations to allocate resources effectively and focus on addressing the most critical vulnerabilities.
  3. Compliance and Regulatory Requirements: A roadmap ensures that the organization remains compliant with industry regulations and standards, such as GDPR or HIPAA, by incorporating necessary security measures and controls.
  4. Incident Response and Recovery: It helps establish incident response plans, outlining steps to detect, respond to, and recover from cybersecurity incidents effectively, minimizing the impact of potential breaches.
  5. Employee Awareness and Training: A roadmap emphasizes the importance of employee education and awareness in maintaining a strong security posture. It includes training programs to educate employees about security best practices, social engineering threats, and safe data handling.
  6. Continuous Improvement: Following a roadmap enables organizations to continuously evaluate and improve their security posture by incorporating emerging technologies, industry best practices, and lessons learned from security incidents.
  Overall, a cybersecurity roadmap provides a proactive approach to protect critical assets, safeguard sensitive data, and maintain the trust of customers and stakeholders in an increasingly interconnected and threat-prone digital landscape.`
},
{
  name: 'Data Science',
  src: datascience,
  details: `A data science roadmap is designed for individuals who aspire to enter or advance in the field of data science. It serves as a guide for aspiring data scientists, data analysts, or anyone interested in working with data to derive valuable insights and make data-driven decisions.
  The roadmap is suitable for individuals with a strong foundation in mathematics, statistics, programming, and critical thinking skills. It provides a structured path to acquire the necessary knowledge and skills in areas such as data manipulation, exploratory data analysis, machine learning algorithms, data visualization, and model evaluation.
  A data science roadmap is also beneficial for professionals in related fields, such as business intelligence, data engineering, or software development, who want to transition into data science roles. It helps them identify the specific skills and techniques they need to learn and provides a roadmap to bridge the knowledge gap.
  Whether you are a student, a career changer, or an experienced professional, a data science roadmap acts as a valuable resource to navigate the vast landscape of data science and guide you towards becoming a proficient data scientist.`
},
{
  name: 'Data analyst',
  src: dataanalyst,
  details: `A data analyst roadmap is designed for individuals interested in pursuing a career in data analysis or enhancing their skills in this field. It provides a structured path to develop the necessary knowledge and expertise in data manipulation, data visualization, statistical analysis, and data-driven decision-making.
  The roadmap is suitable for individuals with a background in mathematics, statistics, or computer science, as well as professionals working in related fields such as business intelligence or market research. It helps them gain the specific skills and techniques needed to extract insights from data, identify trends, and communicate findings effectively.
  Whether you are a recent graduate, a career changer, or an experienced professional looking to transition into data analysis, following a data analyst roadmap can be highly beneficial. It provides a clear direction for acquiring the necessary technical skills, understanding data analysis methodologies, and staying updated with the latest tools and techniques in the field. With a data analyst roadmap, you can develop the expertise to excel in data-driven decision-making and contribute to the success of organizations across various industries.`
}]

export let msg = [
    {
      msg: `Thank you for registering to our learning part web application. We'd be using this as a means to inform you about new courses and different additions which have been made to our current course which`,
      read: true,
      date: 'Jan 2nd 2023'
    },
    {
      msg: `We added some updates to the road map FrontEnd web development with react, do well to check it out. This may affect your read data`,
      read: true,
      date: 'Jan 5th 2023'
    },
    {
      msg: `Dear user we would be going on mentainance but do not be worried we would come back harder and stronger giving you new courses like never before and more adequate information`,
      read: true,
      date: 'Jan 9th 2023'
    },
    {
      msg: `We added some updates to the road map FrontEnd web development with react, do well to check it out. This may affect your read data`,
      read: true,
      date: 'Jan 5th 2023'
    },
    {
      msg: `Dear user we would be going on mentainance but do not be worried we would come back harder and stronger giving you new courses like never before and more adequate information`,
      read: true,
      date: 'Jan 9th 2023'
    }
  ]