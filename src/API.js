import web from './img/web.jpg'

/*
Variables and Data Types: JavaScript allows developers to store data in variables, which can hold different data types such as strings, numbers, and booleans.

Operators: JavaScript provides operators that can be used to perform arithmetic, comparison, logical, and other operations on variables and data.

Control Structures: Control structures are used to control the flow of execution in a JavaScript program. Some examples of control structures include if/else statements, switch statements, and loops such as for and while loops.

Functions: Functions are reusable blocks of code that can be called and executed multiple times within a program. JavaScript functions can take parameters and return values.

Arrays: Arrays are used to store a collection of data in JavaScript. They can hold multiple data types and can be accessed and manipulated using various methods.

Objects: Objects are used to represent complex data structures in JavaScript. They consist of properties and methods, which can be accessed and manipulated using dot notation.

Events: Events are actions or occurrences that happen in the browser, such as a user clicking a button or scrolling a page. JavaScript can be used to listen for and respond to events.

DOM Manipulation: The Document Object Model (DOM) is a programming interface for HTML and XML documents. JavaScript can be used to manipulate the DOM, adding or removing elements, changing styles, and handling events.

AJAX and APIs: AJAX is a technique used to send and receive data asynchronously from a web server without requiring a page refresh. JavaScript can be used to make AJAX requests and interact with APIs to retrieve and display data on a web page.

Error Handling: JavaScript code can generate errors, such as syntax errors or runtime errors. Error handling techniques, such as try/catch blocks, can be used to handle these errors and prevent a program from crashing.
*/
/*

Variables and Data Types:

Which data type is used to store words or text in JavaScript?
a) boolean
b) number
c) string
d) array
Correct Answer: c) string
Wrong Answers: a) boolean, b) number, d) array

What is the value of the variable x after the following code is executed: var x = 5 + "5";
a) 10
b) "55"
c) "10"
d) 5
Correct Answer: b) "55"
Wrong Answers: a) 10, c) "10", d) 5

Which data type is used to store true or false values in JavaScript?
a) string
b) number
c) boolean
d) array
Correct Answer: c) boolean
Wrong Answers: a) string, b) number, d) array

Operators:

What is the result of the following expression: 10 % 3;
a) 3
b) 1
c) 0
d) 10
Correct Answer: b) 1
Wrong Answers: a) 3, c) 0, d) 10

Which operator is used to compare two values for equality in JavaScript?
a) ==
b) !=
c) ===
d) !==
Correct Answer: a) ==
Wrong Answers: b) !=, c) ===, d) !==

What is the result of the following expression: "10" + 5;
a) "105"
b) 15
c) "15"
d) "1055"
Correct Answer: a) "105"
Wrong Answers: b) 15, c) "15", d) "1055"

Control Structures:

What is the output of the following code:
var x = 10;
if(x < 5){
console.log("x is less than 5");
} else {
console.log("x is greater than or equal to 5");
}
a) "x is less than 5"
b) "x is greater than or equal to 5"
c) "x is equal to 5"
d) This code will not run because of a syntax error.
Correct Answer: b) "x is greater than or equal to 5"
Wrong Answers: a) "x is less than 5", c) "x is equal to 5", d) This code will not run because of a syntax error.

Which control structure is used to repeat a block of code a specific number of times in JavaScript?
a) if/else statement
b) switch statement
c) for loop
d) while loop
Correct Answer: c) for loop
Wrong Answers: a) if/else statement, b) switch statement, d) while loop

What is the output of the following code:
var x = 1;
while(x < 10){
console.log(x);
x += 2;
}
a) 1, 2, 3, 4, 5, 6, 7, 8, 9
b) 1, 3, 5, 7, 9
c) 2, 4, 6, 8, 10
d) This code will not run because of a syntax error.
Correct Answer: b) 1, 3, 5, 7, 9
Wrong Answers: a) 1, 2, 3, 4, 5, 6, 7, 8, 9, c) 2, 4, 6, 8,
*/
export let  api = [{
    name: 'Front-End development',
    src: web,
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
        resources: ['youtube', 'book', 'website'],
        topicSub: [
          {
            subtopic: 'Elements and Tags',
            extraDetail: 'HTML elements are the building blocks of a web page, and they are defined using HTML tags. Tags define how the content within them should be displayed on the web page.',
            read: false
          },
          {
            subtopic: 'Attributes',
            extraDetail: 'HTML tags can also have attributes that provide additional information about the content within the tag. Attributes are used to modify the behavior or appearance of an element.',
            read: false
          },
          {
            subtopic: 'Document Structure',
            extraDetail: 'The structure of an HTML document is defined using several tags, such as <html>, <head>, <title>, and <body>. These tags provide information about the content of the web page, including its title, metadata, and body content.',
            read: false
          },
          {
            subtopic: 'Text Formatting',
            extraDetail: 'HTML includes tags for formatting text, such as <strong> and <em> for emphasizing text, <h1> through <h6> for defining headings, and <p> for defining paragraphs.',
            read: false
          },
          {
            subtopic: 'Links',
            extraDetail: 'HTML provides tags for creating hyperlinks that allow users to navigate between web pages. The <a> tag is used to define links and can include attributes such as href to specify the URL of the page being linked to.',
            read: false
          },
          {
            subtopic: 'Images and Multimedia',
            extraDetail: 'HTML includes tags for embedding images and multimedia content within a web page, such as the <img> tag for images and <video> and <audio> tags for multimedia.',
            read: false
          },
          {
            subtopic: 'Lists',
            extraDetail: 'HTML provides tags for creating lists of content, including ordered lists (<ol>) and unordered lists (<ul>).',
            read: false
          },
          {
            subtopic: 'Tables',
            extraDetail: 'HTML allows for the creation of tables using the <table>, <tr>, and <td> tags. Tables can be used to display tabular data in a structured format.',
            read: false
          },
          {
            subtopic: 'Forms',
            extraDetail: 'HTML includes tags for creating forms that allow users to submit data to a web server. The <form> tag is used to define a form, and other tags such as <input>, <textarea>, and <button> are used to create form elements.',
            read: false
          },
          {
            subtopic: 'Semantic HTML',
            extraDetail: 'Semantic HTML is a set of best practices for using HTML tags to convey the meaning and structure of web page content. By using semantic tags such as <header>, <nav>, <main>, and <footer>, developers can improve the accessibility and search engine optimization of their web pages.',
            read: false
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
        resources: ['youtube', 'book', 'website'],
        topicSub: [
          {
            subtopic: 'Selectors',
            extraDetail: 'CSS selectors are used to target specific HTML elements on a web page. There are various types of selectors, including element selectors, class selectors, ID selectors, attribute selectors, and pseudo-class selectors.',
            read: false
          },
          {
            subtopic: 'Box Model',
            extraDetail: 'The box model refers to how HTML elements are represented as rectangular boxes on a web page. The box model includes the content area, padding, border, and margin.',
            read: false
          },
          {
            subtopic: 'Layout',
            extraDetail: 'CSS layout refers to how elements are positioned and arranged on a web page. CSS offers different positioning options, such as static, relative, absolute, and fixed, as well as display properties that can be used to control the layout, such as flexbox and grid.',
            read: false
          },
          {
            subtopic: 'Typography',
            extraDetail: 'CSS offers a range of properties that can be used to style text, including font-family, font-size, font-weight, text-align, line-height, and text-decoration.',
            read: false
          },
          {
            subtopic: 'Colors and Backgrounds',
            extraDetail: 'CSS provides properties to control the colors and backgrounds of elements on a web page, including background-color, color, opacity, and gradient.',
            read: false
          },
          {
            subtopic: 'Responsive Design',
            extraDetail: 'With the increasing popularity of mobile devices, it has become essential to design websites that are responsive and adapt to different screen sizes. CSS offers media queries and responsive design techniques that allow developers to create flexible and responsive layouts.',
            read: false
          },
          {
            subtopic: 'Animations and Transitions',
            extraDetail: 'CSS provides properties and keyframe animations to create simple animations and transitions that can enhance the user experience on a website.',
            read: false
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
        resources: ['youtube', 'book', 'website'],
        topicSub: [
          {
            subtopic: 'Basics',
            extraDetail: 'Basic Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit inventore perspiciatis rerum quisquam praesentium minima nulla officia molestiae blanditiis nemo? Est mollitia odio facere ullam veritatis corporis aut, earum dolores.',
            read: false
          },
          {
            subtopic: 'Emmet',
            extraDetail: 'Emmet Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit inventore perspiciatis rerum quisquam praesentium minima nulla officia molestiae blanditiis nemo? Est mollitia odio facere ullam veritatis corporis aut, earum dolores.',
            read: false
          },
          {
            subtopic: 'Forms',
            extraDetail: 'Forms Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit inventore perspiciatis rerum quisquam praesentium minima nulla officia molestiae blanditiis nemo? Est mollitia odio facere ullam veritatis corporis aut, earum dolores.',
            read: false
          },
          {
            subtopic: 'Semantic HTML',
            extraDetail: 'Semantic Html Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit inventore perspiciatis rerum quisquam praesentium minima nulla officia molestiae blanditiis nemo? Est mollitia odio facere ullam veritatis corporis aut, earum dolores.',
            read: false
          },
          {
            subtopic: 'SEO Basics',
            extraDetail: 'SEO Basic Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit inventore perspiciatis rerum quisquam praesentium minima nulla officia molestiae blanditiis nemo? Est mollitia odio facere ullam veritatis corporis aut, earum dolores.',
            read: false
          }
        ],
        test: [
          {
            question: 'A dummy question that would be replayed HTML',
            answer: 'this is answer',
            options: ['option 1', 'option 2', 'this is answer', 'option 4']
          },
          {
            question: 'A dummy question that would be replayed HTML',
            answer: 'this is answer',
            options: ['option 1', 'option 2', 'this is answer', 'option 4']
          },
          {
            question: 'A dummy question that would be replayed HTML',
            answer: 'this is answer',
            options: ['option 1', 'option 2', 'this is answer', 'option 4']
          },
          {
            question: 'A dummy question that would be replayed HTML',
            answer: 'this is answer',
            options: ['option 1', 'option 2', 'this is answer', 'option 4']
          },
          {
            question: 'A dummy question that would be replayed HTML',
            answer: 'this is answer',
            options: ['option 1', 'option 2', 'this is answer', 'option 4']
          }
        ],
        testScore: 0
      },
      {
        topicHead: 'CSS framework',
        resources: ['youtube', 'book', 'website'],
        topicSub: [
          {
            subtopic: 'Basics',
            extraDetail: 'Basic Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit inventore perspiciatis rerum quisquam praesentium minima nulla officia molestiae blanditiis nemo? Est mollitia odio facere ullam veritatis corporis aut, earum dolores.',
            read: false
          },
          {
            subtopic: 'Emmet',
            extraDetail: 'Emmet Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit inventore perspiciatis rerum quisquam praesentium minima nulla officia molestiae blanditiis nemo? Est mollitia odio facere ullam veritatis corporis aut, earum dolores.',
            read: false
          },
          {
            subtopic: 'Forms',
            extraDetail: 'Forms Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit inventore perspiciatis rerum quisquam praesentium minima nulla officia molestiae blanditiis nemo? Est mollitia odio facere ullam veritatis corporis aut, earum dolores.',
            read: false
          },
          {
            subtopic: 'Semantic HTML',
            extraDetail: 'Semantic Html Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit inventore perspiciatis rerum quisquam praesentium minima nulla officia molestiae blanditiis nemo? Est mollitia odio facere ullam veritatis corporis aut, earum dolores.',
            read: false
          },
          {
            subtopic: 'SEO Basics',
            extraDetail: 'SEO Basic Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit inventore perspiciatis rerum quisquam praesentium minima nulla officia molestiae blanditiis nemo? Est mollitia odio facere ullam veritatis corporis aut, earum dolores.',
            read: false
          }
        ],
        test: [
          {
            question: 'A dummy question that would be replayed HTML',
            answer: 'this is answer',
            options: ['option 1', 'option 2', 'this is answer', 'option 4']
          },
          {
            question: 'A dummy question that would be replayed HTML',
            answer: 'this is answer',
            options: ['option 1', 'option 2', 'this is answer', 'option 4']
          },
          {
            question: 'A dummy question that would be replayed HTML',
            answer: 'this is answer',
            options: ['option 1', 'option 2', 'this is answer', 'option 4']
          },
          {
            question: 'A dummy question that would be replayed HTML',
            answer: 'this is answer',
            options: ['option 1', 'option 2', 'this is answer', 'option 4']
          },
          {
            question: 'A dummy question that would be replayed HTML',
            answer: 'this is answer',
            options: ['option 1', 'option 2', 'this is answer', 'option 4']
          }
        ],
        testScore: 0
      },
      {
        topicHead: 'JavaScript library',
        resources: ['youtube', 'book', 'website'],
        topicSub: [
          {
            subtopic: 'Basics',
            extraDetail: 'Basic Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit inventore perspiciatis rerum quisquam praesentium minima nulla officia molestiae blanditiis nemo? Est mollitia odio facere ullam veritatis corporis aut, earum dolores.',
            read: false
          },
          {
            subtopic: 'Emmet',
            extraDetail: 'Emmet Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit inventore perspiciatis rerum quisquam praesentium minima nulla officia molestiae blanditiis nemo? Est mollitia odio facere ullam veritatis corporis aut, earum dolores.',
            read: false
          },
          {
            subtopic: 'Forms',
            extraDetail: 'Forms Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit inventore perspiciatis rerum quisquam praesentium minima nulla officia molestiae blanditiis nemo? Est mollitia odio facere ullam veritatis corporis aut, earum dolores.',
            read: false
          },
          {
            subtopic: 'Semantic HTML',
            extraDetail: 'Semantic Html Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit inventore perspiciatis rerum quisquam praesentium minima nulla officia molestiae blanditiis nemo? Est mollitia odio facere ullam veritatis corporis aut, earum dolores.',
            read: false
          },
          {
            subtopic: 'SEO Basics',
            extraDetail: 'SEO Basic Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit inventore perspiciatis rerum quisquam praesentium minima nulla officia molestiae blanditiis nemo? Est mollitia odio facere ullam veritatis corporis aut, earum dolores.',
            read: false
          }
        ],
        test: [
          {
            question: 'A dummy question that would be replayed HTML',
            answer: 'this is answer',
            options: ['option 1', 'option 2', 'this is answer', 'option 4']
          },
          {
            question: 'A dummy question that would be replayed HTML',
            answer: 'this is answer',
            options: ['option 1', 'option 2', 'this is answer', 'option 4']
          },
          {
            question: 'A dummy question that would be replayed HTML',
            answer: 'this is answer',
            options: ['option 1', 'option 2', 'this is answer', 'option 4']
          },
          {
            question: 'A dummy question that would be replayed HTML',
            answer: 'this is answer',
            options: ['option 1', 'option 2', 'this is answer', 'option 4']
          },
          {
            question: 'A dummy question that would be replayed HTML',
            answer: 'this is answer',
            options: ['option 1', 'option 2', 'this is answer', 'option 4']
          }
        ],
        testScore: 0
      },
      {
        topicHead: 'Version control',
        resources: ['youtube', 'book', 'website'],
        topicSub: [
          {
            subtopic: 'Basics',
            extraDetail: 'Basic Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit inventore perspiciatis rerum quisquam praesentium minima nulla officia molestiae blanditiis nemo? Est mollitia odio facere ullam veritatis corporis aut, earum dolores.',
            read: false
          },
          {
            subtopic: 'Emmet',
            extraDetail: 'Emmet Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit inventore perspiciatis rerum quisquam praesentium minima nulla officia molestiae blanditiis nemo? Est mollitia odio facere ullam veritatis corporis aut, earum dolores.',
            read: false
          },
          {
            subtopic: 'Forms',
            extraDetail: 'Forms Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit inventore perspiciatis rerum quisquam praesentium minima nulla officia molestiae blanditiis nemo? Est mollitia odio facere ullam veritatis corporis aut, earum dolores.',
            read: false
          },
          {
            subtopic: 'Semantic HTML',
            extraDetail: 'Semantic Html Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit inventore perspiciatis rerum quisquam praesentium minima nulla officia molestiae blanditiis nemo? Est mollitia odio facere ullam veritatis corporis aut, earum dolores.',
            read: false
          },
          {
            subtopic: 'SEO Basics',
            extraDetail: 'SEO Basic Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit inventore perspiciatis rerum quisquam praesentium minima nulla officia molestiae blanditiis nemo? Est mollitia odio facere ullam veritatis corporis aut, earum dolores.',
            read: false
          }
        ],
        test: [
          {
            question: 'A dummy question that would be replayed HTML',
            answer: 'this is answer',
            options: ['option 1', 'option 2', 'this is answer', 'option 4']
          },
          {
            question: 'A dummy question that would be replayed HTML',
            answer: 'this is answer',
            options: ['option 1', 'option 2', 'this is answer', 'option 4']
          },
          {
            question: 'A dummy question that would be replayed HTML',
            answer: 'this is answer',
            options: ['option 1', 'option 2', 'this is answer', 'option 4']
          },
          {
            question: 'A dummy question that would be replayed HTML',
            answer: 'this is answer',
            options: ['option 1', 'option 2', 'this is answer', 'option 4']
          },
          {
            question: 'A dummy question that would be replayed HTML',
            answer: 'this is answer',
            options: ['option 1', 'option 2', 'this is answer', 'option 4']
          }
        ],
        testScore: 0
      },
      {
        topicHead: 'Web accessibility',
        resources: ['youtube', 'book', 'website'],
        topicSub: [
          {
            subtopic: 'Basics',
            extraDetail: 'Basic Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit inventore perspiciatis rerum quisquam praesentium minima nulla officia molestiae blanditiis nemo? Est mollitia odio facere ullam veritatis corporis aut, earum dolores.',
            read: false
          },
          {
            subtopic: 'Emmet',
            extraDetail: 'Emmet Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit inventore perspiciatis rerum quisquam praesentium minima nulla officia molestiae blanditiis nemo? Est mollitia odio facere ullam veritatis corporis aut, earum dolores.',
            read: false
          },
          {
            subtopic: 'Forms',
            extraDetail: 'Forms Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit inventore perspiciatis rerum quisquam praesentium minima nulla officia molestiae blanditiis nemo? Est mollitia odio facere ullam veritatis corporis aut, earum dolores.',
            read: false
          },
          {
            subtopic: 'Semantic HTML',
            extraDetail: 'Semantic Html Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit inventore perspiciatis rerum quisquam praesentium minima nulla officia molestiae blanditiis nemo? Est mollitia odio facere ullam veritatis corporis aut, earum dolores.',
            read: false
          },
          {
            subtopic: 'SEO Basics',
            extraDetail: 'SEO Basic Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit inventore perspiciatis rerum quisquam praesentium minima nulla officia molestiae blanditiis nemo? Est mollitia odio facere ullam veritatis corporis aut, earum dolores.',
            read: false
          }
        ],
        test: [
          {
            question: 'A dummy question that would be replayed HTML',
            answer: 'this is answer',
            options: ['option 1', 'option 2', 'this is answer', 'option 4']
          },
          {
            question: 'A dummy question that would be replayed HTML',
            answer: 'this is answer',
            options: ['option 1', 'option 2', 'this is answer', 'option 4']
          },
          {
            question: 'A dummy question that would be replayed HTML',
            answer: 'this is answer',
            options: ['option 1', 'option 2', 'this is answer', 'option 4']
          },
          {
            question: 'A dummy question that would be replayed HTML',
            answer: 'this is answer',
            options: ['option 1', 'option 2', 'this is answer', 'option 4']
          },
          {
            question: 'A dummy question that would be replayed HTML',
            answer: 'this is answer',
            options: ['option 1', 'option 2', 'this is answer', 'option 4']
          }
        ],
        testScore: 0
      }
    ]
    }
  ,
{
  name: 'Back-End Node development',
  src: web,
  details: `Starting with web development can be 
  overwhelming. This back-end developer 
  roadmap will guide you to start with it in the 
  proper way. We will cover the most important 
  building blocks of the web. This guide will help 
  you to become a modern back-end developer.`
},
{
  name: 'Python Web development',
  src: web,
  details: `Starting with web development can be 
  overwhelming. This back-end developer 
  roadmap will guide you to start with it in the 
  proper way. We will cover the most important 
  building blocks of the web. This guide will help 
  you to become a modern back-end developer.`
},{
  name: 'UI/UX Design',
  src: web,
  details: `Starting with web development can be 
  overwhelming. This back-end developer 
  roadmap will guide you to start with it in the 
  proper way. We will cover the most important 
  building blocks of the web. This guide will help 
  you to become a modern back-end developer.`
},{
  name: 'Fullstack JavaScript development',
  src: web,
  details: `Starting with web development can be 
  overwhelming. This back-end developer 
  roadmap will guide you to start with it in the 
  proper way. We will cover the most important 
  building blocks of the web. This guide will help 
  you to become a modern back-end developer.`
},{
  name: 'Back-End Python development',
  src: web,
  details: `Starting with web development can be 
  overwhelming. This back-end developer 
  roadmap will guide you to start with it in the 
  proper way. We will cover the most important 
  building blocks of the web. This guide will help 
  you to become a modern back-end developer.`
},{
  name: 'Mobile development',
  src: web,
  details: `Starting with web development can be 
  overwhelming. This back-end developer 
  roadmap will guide you to start with it in the 
  proper way. We will cover the most important 
  building blocks of the web. This guide will help 
  you to become a modern back-end developer.`
},{
  name: 'Game development',
  src: web,
  details: `Starting with web development can be 
  overwhelming. This back-end developer 
  roadmap will guide you to start with it in the 
  proper way. We will cover the most important 
  building blocks of the web. This guide will help 
  you to become a modern back-end developer.`
},{
  name: 'Syber Security',
  src: web,
  details: `Starting with web development can be 
  overwhelming. This back-end developer 
  roadmap will guide you to start with it in the 
  proper way. We will cover the most important 
  building blocks of the web. This guide will help 
  you to become a modern back-end developer.`
},
{
  name: 'Data Science',
  src: web,
  details: `Starting with web development can be 
  overwhelming. This back-end developer 
  roadmap will guide you to start with it in the 
  proper way. We will cover the most important 
  building blocks of the web. This guide will help 
  you to become a modern back-end developer.`
},
{
  name: 'Blender artist',
  src: web,
  details: `Starting with web development can be 
  overwhelming. This back-end developer 
  roadmap will guide you to start with it in the 
  proper way. We will cover the most important 
  building blocks of the web. This guide will help 
  you to become a modern back-end developer.`
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