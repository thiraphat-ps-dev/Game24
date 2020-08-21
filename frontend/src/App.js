import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div class="container">
        <div class="header">
          <h1>WELCOME TO MY GAME</h1>
        </div>
        <form class="form-container">
          <span class="result-box">NO !</span>
          <div class="input-container">
            <input type="text" placeholder="Number" />

            <input type="text" placeholder="Number" />

            <input type="text" placeholder="Number" />

            <input type="text" placeholder="Number" />
          </div>
          <button type="button">SUBMIT</button>
        </form>
      </div>
    </div>
  );
}

export default App;
