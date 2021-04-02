// "start": "nodemon --exec babel-node src/index.js",

// !remove nodemon
// !remove raw-loader? since we use babel-loader

console.log('Hello World!');

const onClick = () => {
  console.log('Clicked!');
};

let button = document.getElementById('button-to-click');
button.onclick = onClick;

// function onClick() {
//   console.log('CLICKED!!');
// }
