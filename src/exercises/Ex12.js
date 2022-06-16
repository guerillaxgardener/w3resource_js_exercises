//12. JavaScript program to check whether a given integer is within 20 of 100 or 400.

import React from "react";
import { Card, Button } from "react-bootstrap";
import '../exercise.css';
import { useState } from "react";

const Ex12 = (props) => {
  const [guess, handleGuess] = useState(null)
  const [displayResult, handleDisplay] = useState(false)
  const [guessResult, handleResult] = useState(null)


  const handleGuessType = (e) => {
    handleDisplay(false)
    handleGuess(parseInt(e.target.value))
  }

  const handleHundred = (e) => {
    handleDisplay(true)
    if ((Math.abs(100 - guess) <= 20) || (Math.abs(400 - guess) <= 20)) {
      handleResult(true)
    } else (
      handleResult(false)
    )
  }

  return (
    <Card className="exercise-card" style={{ width: '18rem' }}>
      <Card.Title className="exercise-title">
        Exercise 12: JavaScript program to check whether a given integer is within 20 of 100 or 400.
      </Card.Title>
      <Card.Body className="exercise-body">
        <form>

          <label>
            Enter number:
          </label>
          <input
            type="integer"
            name="guessInput"
            onInput={handleGuessType}
          />
          <Button
            onClick={e => { handleHundred(e) }}>
            Check number...
          </Button>
        </form>

      </Card.Body>

      <Card.Text className="exercise-solution">
        {displayResult
          &&
          (
            guessResult
              ?
              <>
                you got it, {guess} is in range!
              </>
              :
              <>
                {guess} is not within range of 100 or 400.
              </>
          )
        }

      </Card.Text>


    </Card>
  )
}

export default (Ex12)