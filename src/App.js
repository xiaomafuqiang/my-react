import React, {Component} from 'react';
import './App.css';

// refs
import Refs from './components/Refs';

class App extends Component {
  render() {
      return (
          <div className="App">
              <h1>react app</h1>
              <h2>refs</h2>
              <Refs/>
          </div>
      );
  }
}

export default App;
