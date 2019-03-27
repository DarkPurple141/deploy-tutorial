import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Successfully Deployed React App!</h1>
          <p>This page was built with <a className="App-link" href="https://reactjs.org">React</a>, 
            served through <a className="App-link" href="https://pages.github.com">GitHub Pages</a>, 
            and deployed through <a className="App-link" href="https://travis-ci.org">TravisCI</a>.</p>
          <p><a className="App-link" href="https://github.com/DarkPurple141/deploy-tutorial">Source</a> | <a href="https://github.com/DarkPurple141/deploy-tutorial" className="App-link">Article</a></p>
        </header>
      </div>
    );
  }
}

export default App;
