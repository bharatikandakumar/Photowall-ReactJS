import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './styles/stylesheet.css'
import {BrowserRouter} from 'react-router-dom'
import {createStore} from 'redux'
import rootreducer from './redux/reducer'
import {Provider} from 'react-redux'
import App from './Components/App'

const store = createStore(rootreducer)



//rendering using main component
ReactDOM.render(<Provider store={store}><BrowserRouter><App/></BrowserRouter></Provider>, document.getElementById('root'));