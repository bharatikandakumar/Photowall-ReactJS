import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Main from './Components/Main'
import './styles/stylesheet.css'
import {BrowserRouter} from 'react-router-dom'

// const tasks = ['take out trash', 'showel', 'bath'];
// //we need key to uniquely to identify an element


// const element = React.createElement('ol', null, 
// tasks.map((task,index) => React.createElement('li',{key:index},task)));

// // React.createElement('li',null,'Take out the trash'),
// // React.createElement('li',null,'showvel '),
// // React.createElement('li',null,'Bath bitch')


// //hot to show uo to page
// //what renders page is DOM
// ReactDOM.render(element, document.getElementById('root'));


// //using JSX need not nest elements with the createelement
// //all this complie as js code

// const element1 = 

// <div>
// <h1>Task List</h1>
// <ol>
//     {tasks.map((task, index) => <li key = {index}>{task}</li>)}
//     <li>Hello</li>
//     <li>Hi</li>
//     <li>tasks[0]</li> 
//     <li>{tasks[1]}</li>
// </ol>
// </div>


//rendering using main component
ReactDOM.render(<BrowserRouter><Main/></BrowserRouter>, document.getElementById('root'));