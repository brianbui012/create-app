import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.scss';
// import App from './App';
import * as serviceWorker from './serviceWorker';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// import 'normalize.css/normalize.css';
import './styles/styles.scss';
import ColorGame from './components/ColorGame';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import timerReducer from './reducers/timer';
import { startTimer } from './actions/timer';
// import { correctPlay, incorrectPlay } from './components/sounds.js';
// import Timer from './components/timer';


const store = createStore(timerReducer);
console.log(store.getState());


console.log(store.getState());


const jsx = (
  <Provider store={store}>
    <ColorGame />
  </Provider>
);

//we can pass in props to the main app through here. {} is the JSX brackets, not an object literal
ReactDOM.render(jsx, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
