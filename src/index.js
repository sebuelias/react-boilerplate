import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';

console.log('Hello World!');

const title = 'React with Webpack and Babel';

ReactDOM.render(<App title={title} />, document.getElementById('app'));

module.hot.accept();
// !remove raw-loader? since we use babel-loader
// const onClick = () => {
//   console.log('Clicked!');
// };

// let button = document.getElementById('button-to-click');
// button.onclick = onClick;

// function onClick() {
//   console.log('CLICKED!!');
// }
