import React from 'react';
import './App.css';
const axios = require('axios');

function App() {
  const [numberObj, setNumberObj] = React.useState({
    number1: null,
    number2: null,
    number3: null,
    number4: null,
  });

  return (
    <div className="App">
      <div className="container">
        <div className="header">
          <h1>WELCOME TO MY GAME</h1>
        </div>
        <form className="form-container">
          <span className="result-box">NO !</span>
          <div className="result-container">
            <p className="result-text"></p>
          </div>
          <div className="input-container">
            <input
              type="text"
              placeholder="Number"
              maxlength="1"
              value={numberObj.number1}
              onChange={(e) => {
                setNumberObj({
                  ...numberObj,
                  number1: e.target.value.replace(/[^\d]/, ''),
                });
              }}
            />
            <input
              type="text"
              placeholder="Number"
              maxlength="1"
              value={numberObj.number2}
              onChange={(e) => {
                setNumberObj({
                  ...numberObj,
                  number2: e.target.value.replace(/[^\d]/, ''),
                });
              }}
            />
            <input
              type="text"
              placeholder="Number"
              maxlength="1"
              value={numberObj.number3}
              onChange={(e) => {
                setNumberObj({
                  ...numberObj,
                  number3: e.target.value.replace(/[^\d]/, ''),
                });
              }}
            />
            <input
              type="text"
              placeholder="Number"
              maxlength="1"
              value={numberObj.number4}
              onChange={(e) => {
                setNumberObj({
                  ...numberObj,
                  number4: e.target.value.replace(/[^\d]/, ''),
                });
              }}
            />
          </div>
          <button
            type="button"
            onClick={() => {
              axios
                .get('http://localhost:8000/game24', {
                  params: {
                    number1: numberObj.number1,
                    number2: numberObj.number2,
                    number3: numberObj.number3,
                    number4: numberObj.number4,
                  },
                })
                .then(function (response) {
                  document.querySelector('.result-box').innerHTML =
                    response.data.sum;
                  document.querySelector('.result-text').innerHTML =
                    response.data.result;
                  document.querySelector('.result-text').classList.add('show');
                  if (response.data.sum === 'yes') {
                    document
                      .querySelector('.result-box')
                      .classList.add('success', 'show');
                    document
                      .querySelector('.result-box')
                      .classList.remove('error');
                  } else {
                    document
                      .querySelector('.result-box')
                      .classList.add('error', 'show');
                    document
                      .querySelector('.result-box')
                      .classList.remove('success');
                  }
                })
                .catch(function (error) {
                  console.log(error);
                });
            }}
          >
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
