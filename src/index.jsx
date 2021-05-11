import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

console.log('Hello World!');

const title = 'React with Webpack and Babel';

ReactDOM.render(<App title={title} />, document.getElementById('App'));

module.hot.accept();
