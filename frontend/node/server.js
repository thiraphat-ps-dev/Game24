const express = require('express');
const app = express();
let port = 8000;

app.get('/', function (req, res) {
  res.send('hello from node js');
});

app.get('/game24', function (req, res) {
  const num1 = req.query.number1 || 0;
  const num2 = req.query.number2 || 0;
  const num3 = req.query.number3 || 0;
  const num4 = req.query.number4 || 0;

  // Get Operator for calculate
  var arrOperators = ['+', '-', '*', '/'];
  let arrOperatorsAll = [];
  for (let i = 0; i < 1000; i++) {
    var Operator = `${
      arrOperators[Math.floor(Math.random() * arrOperators.length)]
    }${arrOperators[Math.floor(Math.random() * arrOperators.length)]}${
      arrOperators[Math.floor(Math.random() * arrOperators.length)]
    }`;

    arrOperatorsAll.push(Operator);
  }

  // remove duplicate operator
  const uniqueSet = new Set(arrOperatorsAll);
  const pattern = [...uniqueSet];

  // calculate
  for (let i = 0; i < pattern.length; i++) {
    sumary = eval(
      `${num1} ${pattern[i][0]} ${num2} ${pattern[i][1]} ${num3} ${pattern[i][2]} ${num4}`
    );

    if (sumary === 24) {
      sum = 'yes';
      result = `${num1} ${pattern[i][0]} ${num2} ${pattern[i][1]} ${num3} ${pattern[i][2]} ${num4} = ${sumary}`;
      {
        break;
      }
    } else {
      sum = 'no!';
      result = `not match`;
    }
  }

  // return result to json
  result = {
    sum: sum,
    result,
  };
  res.json(result, 200);
});

app.listen(port, () => {
  console.log('Server is up and running on port number ' + port);
});
