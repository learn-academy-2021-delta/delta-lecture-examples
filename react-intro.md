# React Intro

React is a library for building user interfaces

Library
- collection of code snippets that work together to create functionality like Jest or React

Yarn
- JavaScript package manager, keeps track of node modules

React
- structures the code to be reusable
- handles interactions from the user really quickly and really efficiently


Reusable
- made up of components
- OOP - object oriented programming
- components will be classes
- classes are reusable


Handle User Interaction
- React literally reacts to users
- DOM - document object model
- Make changes in the DOM that are triggered by the user
- DOM reload - expensive in time and cost of information exchange
- Nodes (HTML tags/elements) that have been effected reload
- Virtual DOM - a layer in between the DOM and the code that listens for changes

Component
- Class that inherits from React.Component (mother React)
- Method called render - React lifecycle method, runs automatically when we instantiate a class
- Render returns exactly one thing, the thing it returns is markup
- JSX - JavaScript flavored markup language

React Fragment
- Error message: Adjacent JSX elements must be wrapped in an enclosing tag. Did you want a JSX fragment <>...</>?
- React Fragment <> </> empty container that doesn't add a node to the DOM tree

Creating a React App
- $ yarn create react-app app-name
- app name is a folder/directory, should not start with uppercase or have spaces
- the command will create the folder and file structure
- cd into the new directory
- $ yarn start
- control + c will stop your server
