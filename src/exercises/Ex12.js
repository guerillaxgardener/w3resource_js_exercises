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
  // const showSolution = (e) => handleDisplay(true)

  const handleHundred = (e) => {
    console.log('guess in function', guess)
    handleDisplay(true)
    if ((Math.abs(100 - guess) <= 20) || (Math.abs(400 - guess) <= 20)) {
      handleResult(true)
    } else (
      handleResult(false)
    )
  }


  // const handleTempTyped = (e) => {
  //   handleTemp(parseInt(e.target.value))
  // }

  // const conversion = (e) => {
  //   handleBaseUnit(e.target.value)
  //   convertifyMeCaptain(null)
  // }

  // const doConversion = (e) => {
  //   (convert === "celsius")
  //     ?
  //     convertifyMeCaptain((temp * 1.8000) + 32.00)
  //     :
  //     convertifyMeCaptain((temp - 32.00) / 1.80)
  // }

  return (
    <>
      <Card.Title className="exercise-title">
        Exercise 12: JavaScript program to check whether a given integer is within 20 of 100 or 400.
      </Card.Title>
      <Card.Body className="exercise-body">
        <form>

          <label>
            Enter number:
            <input
              type="integer"
              name="guessInput"
              onInput={handleGuessType}
            />
          </label>
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


    </>
  )
}

export default (Ex12)