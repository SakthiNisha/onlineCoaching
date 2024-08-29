// src/pages/JavaScriptSyllabus.js
import React from 'react';
import './JavaScriptSyllabus.css'; // Import the CSS file for styling

const JavaScriptSyllabus = () => {
  return (
    <div className="syllabus-container">
      <h1>JavaScript Syllabus</h1>

      <section>
        <h2>What is JavaScript</h2>
        <ul>
          <li>General overview of JavaScript</li>
          <li>What is Javascript</li>
          <li>JavaScript history</li>
          <li>Relation between JavaScript and ECMAScript</li>
          <li>Versions of JavaScript</li>
        </ul>
      </section>

      <section>
        <h2>JavaScript Core</h2>

        <h3>Syntax, Variables, Values, Data Types</h3>
        <ul>
          <li>Syntax review</li>
          <li>Keywords and reserved words</li>
          <li>Variable declaration</li>
          <li>Variable scope</li>
          <li>Block scope</li>
        </ul>

        <h3>Data Types</h3>
        <ul>
          <li>Primitive values</li>
          <li>Reference values</li>
          <li>Types</li>
          <li>Type conversion</li>
        </ul>

        <h3>Expressions and Operators</h3>
        <ul>
          <li>Expressions (arithmetic, relational, logical, assignment, and others)</li>
          <li>Operators overview</li>
        </ul>

        <h3>Control structures</h3>
        <ul>
          <li>Flow control and conditionals</li>
          <li>Loops and iteration</li>
          <li>Jumps</li>
        </ul>
        

        <h3>Error handling</h3>
        <ul>
          <li>Throwing errors</li>
          <li>Error handling</li>
        </ul>
      </section>

      <section>
        <h3>Numbers</h3>
        <ul>
          <li>Number literals</li>
          <li>Number object</li>
          <li>Number methods</li>
          <li>Math object</li>
          <li>Date object</li>
          <li>Working with Numbers</li>
        </ul>
      </section>

      <section>
        <h3>Strings</h3>
        <ul>
          <li>String literals</li>
          <li>String object</li>
          <li>String methods</li>
          <li>Working with Strings</li>
        </ul>
      </section>

      <section>
        <h3>Arrays</h3>
        <ul>
          <li>Creating and populating Arrays</li>
          <li>Array methods</li>
          <li>Working with Arrays</li>
        </ul>
      </section>

      <section>
        <h3>Functions</h3>
        <ul>
          <li>Defining functions</li>
          <li>Calling functions</li>
          <li>Functions as values</li>
          <li>Arguments and parameters</li>
          <li>Function scope</li>
          <li>Closures</li>
          <li>Arrow functions</li>
        </ul>
      </section>

      <section>
        <h3>Indexed Collections</h3>
        <ul>
          <li>Set object type</li>
          <li>Map object type</li>
        </ul>
      </section>

      <section>
        <h3>JSON</h3>

        <h3>Iterators and Generators</h3>
        <ul>
          <li>Working with Iterators</li>
          <li>Working with Generators</li>
        </ul>
      </section>

      <section>
        <h3>Modules</h3>

        <h3>Promises</h3>

        <h3>Regular Expressions</h3>
        <ul>
          <li>Creating regular expressions</li>
          <li>RegExp object and its methods</li>
          <li>String methods for matching patterns</li>
        </ul>
      </section>

      <section>
        <h3>Objects</h3>
        <ul>
          <li>Creating object</li>
          <li>Properties</li>
          <li>Methods</li>
          <li>Built-in JavaScript objects</li>
        </ul>
      </section>

      <section>
        <h3>Prototype-based Object Oriented Programming</h3>
        <ul>
          <li>Defining Constructors</li>
          <li>Prototypes</li>
          <li>Inheritance</li>
          <li>Classes</li>
        </ul>
      </section>

      <section>
        <h3>Metaprogramming</h3>
        <ul>
          <li>Proxy</li>
          <li>Reflection</li>
        </ul>
      </section>

      <section>
        <h3>Server-side JavaScript</h3>
        <ul>
          <li>General overview of server-side JavaScript</li>
          <li>JavaScript engines</li>
          <li>Basics of server-side solutions</li>
        </ul>
      </section>

      <section>
        <h3>JavaScript in Browser</h3>
        <ul>
          <li>JavaScript in Web browser</li>
          <li>Embedding JavaScript in HTML</li>
          <li>Execution of JavaScript code</li>
        </ul>
      </section>

      <section>
        <h3>Browser Object Model</h3>
        <ul>
          <li>The window object</li>
          <li>Dialog boxes</li>
          <li>Timers</li>
          <li>The location object</li>
          <li>The navigator object</li>
          <li>Browsing history</li>
        </ul>
      </section>

      <section>
        <h3>Document Object Model</h3>
        <ul>
          <li>Document structure</li>
          <li>Selecting document elements and query selectors</li>
          <li>Moving through DOM tree</li>
          <li>HTML elements and attributes</li>
          <li>Creating, changing, and deleting nodes</li>
        </ul>
      </section>

      <section>
        <h3>Handling Events</h3>
        <ul>
          <li>Event propagation</li>
          <li>Event handlers registering and invocation</li>
          <li>Event object</li>
          <li>Types of event</li>
        </ul>
      </section>

      <section>
        <h3>Ajax</h3>
        <ul>
          <li>JavaScript and HTTP communication</li>
          <li>Synchronous and asynchronous requests</li>
        </ul>
      </section>

      <section>
        <h3>Graphics</h3>
        <ul>
          <li>Multimedia basics</li>
          <li>Canvas API basics</li>
        </ul>
      </section>

      <section>
        <h3>Data Storage</h3>
        <ul>
          <li>Cookies</li>
          <li>Web Storage</li>
          <li>IndexedDB</li>
        </ul>
      </section>

      <section>
        <h3>Security</h3>
        <ul>
          <li>Filesystem security</li>
          <li>The Same Origin Policy</li>
        </ul>
      </section>

      <section>
        <h3>Plugins</h3>

        <h3>Cross-Site Scripting</h3>
      </section>
    </div>
  );
};

export default JavaScriptSyllabus;
