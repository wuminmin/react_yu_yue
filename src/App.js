import React from 'react';
import logo from './logo.svg';
import './App.css';
import SimpleList from './List'

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';

function App() {
  return (
    <div>
      <Button variant="contained" color="primary">
        魔兽世界团队助手
    </Button>
      <SimpleList></SimpleList>
    </div>
  );
}

export default App;
