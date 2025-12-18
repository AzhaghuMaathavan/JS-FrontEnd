/*

React JS : It is a JS frontend component which is used to develop attractive user interface for web applications.
It is developed by Jordan Walke, a software engineer working at Facebook.

Alternative for React is angular JS ,vue JS etc

OR 

React JS is a javascript library used to build user interfaces , mainly for single page applications. 
It is used for handling the view layer for web and mobile apps. React also allows us to create reusable UI components.

Advantages of React JS:
1.Without reloading page it can load or update the data's.


Library vs Framework:
Library : 1. it is a collection of modules which provide inbuilt features to users.
          2. it is light weight , the learning curve of library is easy.
          3. Library can contain another library but cannot contain frameworks.

Framework: 1. it is a collection of libraries which provide functionalities to users.
           2. it is heavy weight , the learning curve of framework is difficult.
           3. Framework can contain another framework and libraries.

Examples:
Library : React JS ,Jquery , R-O-DOM ( React Router DOM) etc
Framework : Angular JS ,Vue JS ,Ember JS etc..



Points : 
1.It was developed by Jordan Walke, a software engineer working at Facebook. In 2011 he developed and but launched in 2013 publicly.
2.It is a Open Source , where we can freely use it and anyone can give suggesstion or tell the changes to improve it.
3.It has become popular due to its simplicity, flexibility, performance and great user experience , after 16.8 Version.

npm : Node Package Manager
Which is used to handle entire React JS packages and modules, Developed in 2009.


Advantages of React JS : 
1. Easy to learn and use 
2. Creating dynamic web application , Reusable components.
3.Easy for testing and debugging.


Disadvantages of React JS:
1. Size is large.
2. No standard way to develop application , Lack of Quality documentation.
3. It is only for Frontend development.
4. We will not get default libraries and packages we need to install libraries externally.



Components of React JS:

1. In react a component is reusable piece of code which holds part of the user interface(UI). In a UI
anything can be a component such as image , button , paragraph , searchbar ,navigation bar etc...

2. It is a mixture of HTML , CSS , of JS .


Types of Components:
1.Class based components , 2.Functional based components.



IMPORT AND EXPORT 

Named import and export 
Eg : 

1.first need to import React from "react"
2.export function Login(){ return <h1>Login Page</h1>}
3. To start npm run dev


In react JS we can use import and export keywords to use components from one file to another file.


Props - Properties

1. Props are used to pass data from one component to another component,usually from a parent component to a child component.

2.Props help make components reusable and dynamic.

3. Props are read-only(You cannot change them inside the child component).

Eg:
function Greet(props){
    return <h1>Hello , {props.name}!</h1>
}
    4. Simple Definition :
Props are inputs to a React component that allow data to be passed from one component to another component, enabling dynamic and reusable UI elements.

5.Types of props
a.[@Props] - It is used to pass single value from parent to child component.
b.[@defaultProps] - It is used to set default value for props in case if no value is passed from parent component.
c.[@prop drilling] - It is used to pass data from parent component to child component and from child component to grand child component.

6.Default Props
Default Props are used to give a default value to a prop when it is not passed from the parent component



---------HOOKS AND VIRTUAL DOM----------
1.What is virtual DOM ?
Virtual DOM is a lightweight copy of the real DOM. It is a programming concept where a virtual representation of the UI is kept in memory and synced with the real DOM by a library such as ReactDOM. This process is called reconciliation.

Diffing Algorithm is used to find the difference between the previous virtual DOM and the new virtual DOM (Document Object Model) and update only the changed parts in the real DOM. This makes the updates faster and more efficient.

Each and every element in the application is in the form of tree like structure called DOM tree. When there is any change in the data of the application, a new virtual DOM tree is created.
after updation the element will get re-rendered in the page again.

This process of  comparing the current virtual DOM tree with previous virtual DOM tree is known as diffing algorithm.

Reconciliation :
The old tree is compared to the newest version to determine the number of change needed for updation.


Advantages of Virtual DOM:
1. Performance Optimization : Only Updated things will be re-rendered.
2. Improved Developer Experience : Easier to write and understand code.

Disadvantages of Virtual DOM:
1.Memory Consumption : It requires additional memory to store the virtual DOM.
2.Debugging Complexity : Debugging issues related to virtual DOM can be more complex than traditional DOM manipulation.

Hooks :
It can be only written in functional components.
Hooks are functions that allow develop to use the react feature like state and lifecycle methods in functional components.

Types of Hooks:
1.useState : It is used to add state to functional components.
2.useEffect : It is used to perform side effects in functional components.
3.useContext : It is used to access the context in functional components.
4.useReducer : It is used to manage complex state in functional components.
5.useRef : It is used to access the DOM elements in functional components.
6.Use memo : It is used to memoize the values in functional components.
7.useCallback : It is used to memoize the functions in functional components.



Rules of Hooks :
1.It must be used in the top of the functional component
2.It must be used inside functional components only
3.It should not be called inside looping statements ,conditional statements,regular functions, inside blocks

Define State : 
State is an object in react.JS which stores the dynamic change happening to the components.

Syntax : Let (State, setState) = useState(initialValue)

Eg: Let (count, setCount) = useState(0)

It Returns 2 elements one is the current state value and another is a function to update that state value.

UnControled Components: 
They are not managed by React but they are managed by the DOM itself.
                                OR
They are components that do not rely on React state and are handled by the DOM.
 In order to access any value that has been entered in the input field we use refs keywords.

eg : function uncontrolled(){
    let inputRef=React.useRef(null)



Controlled Components : 
They are the components whose state and behaviors are managed by React components using states.

*/
