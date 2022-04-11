import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [score , setScore] = useState(0)

  const [wicket , setWicket] = useState(0)

  const [over , setOver] = useState(0)

  const handlechange = (value) =>
  {
    if(score > 100)
    {
      return
    }
    setScore(score + value)
  }

  const reswicket = () =>
  {
    setWicket(wicket + 1)
  }

  const resover = () =>
  {
    setOver(over + 0.1)
  }


  return (
    <div className="App">
      <h3>India:</h3>
      <div className="banner">
        <div>
          Score:{" "}
          <h1 className="scoreCount">
            {
              // show "score" here
              score
            }
          </h1>
        </div>
        <div>
          Wicket:{" "}
          <h1 className="wicketCount">
            {
              // show wicket here
              wicket
            }
          </h1>
        </div>

        <div>
          Over:{" "}
          <h1 className="overCount">
            {
              // Show Over here in the format: "over.ball" eg: 4.5 means 4th over and 5th ball
              // if 1 more ball is thrown then over is now 5.0
              // you have to write logic to form this string from current ball number.
              over
            }
          </h1>
        </div>
      </div>

      <div className="addScore">
        Add Score
        {/* these buttons should add the respective amount in the score */}
        <button className="addScore1" onClick = { () => handlechange(1)}>Add 1</button>
        <button className="addScore4" onClick = { () => handlechange(4)}>Add 4</button>
        <button className="addScore6" onClick = { () => handlechange(6)}>Add 6</button>
      </div>

      <div className="addWicket">
        Add Wicket
        {/* Increase the count of wicket */}
        <button onClick={ reswicket}>Add 1 wicket</button>
      </div>

      <div className="addBall">
        Add ball
        {/* Increase the total number of balls thrown here. */}
        <button onClick={resover}>Add 1</button>
      </div>

      {/* If score reaches greater than 100, show text "India Won" without quotes in h1 tag with class name 'status' */
      <h1 className='status'>{score>100 ? "India Won" : ""}</h1>
      }
    </div>
  );
}

export default App;
