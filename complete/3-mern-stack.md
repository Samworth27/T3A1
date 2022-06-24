## Q3 - Outline a standard high level structure for a MERN stack application and explain the components

### Outline

The MERN stack follows the 3 tier architectural pattern of

- **The Presentation Layer**
  - This is what the user interacts with
  - Only communications with the application layer
- **The Application Layer**
  - This is where the business logic lies
  - Provides API's for the presentation layer
  - Communicates with the database layer to store and retrieve data
- **The Database Layer**
  - Controls the storage of data
  - Responds to requests from the application layer

### Components 

The four components of the MERN stack are:

- **MongoDB**
  - Stores data as JSON documents.
  - Is a NoSQL database that uses its own query language called MQL that is built on JavaScript
- **Express.JS**
  - A minimal web application framework built on Node.js
  - Provides API end points for React.JS, mapping urls to server functions
  - Communicates with the MongoDB database
- **React.JS**
  - React.JS provides a JavaScript library designed to provide a developer with the means to create encapsulated and reusable UI components.
  - It is able to provide dynamic and interactive UI components that are executed in the web browser
  - Is able to provide routing
  - Can use React Native to develop mobile native application
- **Node.JS**
  - Node.JS is a JavaScript runtime environment designed to allow the execution of JavaScript outside of the browser environment
  - In Node.JS, HTTP is a first-class citizen. Node.JS has been designed with data streaming and low-latency as priorities, making it an excellent foundation for a web framework.

### Structure

| Presentation Layer | Application Layer | Database Layer |
| ------------------ | ----------------- | -------------- |
| React.JS           | Express.JS        | MongoDB        |
|                    | Node.JS           |                |

### Benefits

With the MERN Stack, there is one language to learn. JavaScript.
Everything from React.JS for the UI to the query language used to access the database and the format for storing data is JavaScript.
JavaScript is already used in just about every web application so most web developers will already have a firm grasp.
