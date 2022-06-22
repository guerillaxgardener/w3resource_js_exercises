//13. Write a JavaScript program to find the largest of three given integers.
import React from "react";
import { Card, Button } from "react-bootstrap";
import '../exercise.css';
import { useState } from "react";

const Ex13 = (props) => {
  const [int1, handleInt1] = useState(null)
  const [int2, handleInt2] = useState(null)
  const [int3, handleInt3] = useState(null)
  const [highInt, getThatInt] = useState(null)
  const [displayResult, handleDisplay] = useState(false)

  const handleInteger1 = (e) => {
    handleInt1(parseInt(e.target.value))
    handleDisplay(false)
  }
  const handleInteger2 = (e) => {
    handleInt2(parseInt(e.target.value))
    handleDisplay(false)
  }
  const handleInteger3 = (e) => {
    handleInt3(parseInt(e.target.value))
    handleDisplay(false)
  }

  // function to take inputs as array and store largest to state
  const highestInteger = (e) => {
    let arr = [int1, int2, int3]
    var largest = arr[0]

    for (let i = 0; i < arr.length; i++) {
      if (largest < arr[i]) {
        largest = arr[i]
      }
    }
    getThatInt(largest)
    handleDisplay(true)
  }

  // shorter function with less brain involved..
  // const highestInteger2 = (e) => {
  //   let arr = [int1, int2, int3]
  //   var largest = Math.max(...arr)
  //   getThatInt(largest)
  // }

  return (
    <>
      <Card.Title className="exercise-title">
        Exercise 13: Largest integer
      </Card.Title>

      <Card.Subtitle>
        Takes in three integers from user and displays which is largest.
      </Card.Subtitle>

      <Card.Body className="exercise-body">
        <form>
          <label>
            Enter three numbers:
          </label>

          <input
            type="integer"
            name="guessInput"
            onInput={handleInteger1}
          />
          <input
            type="integer"
            name="guessInput"
            onInput={handleInteger2}
          />
          <input
            type="integer"
            name="guessInput"
            onInput={handleInteger3}
          />

          <Button
            onClick={e => { highestInteger(e) }}>
            Check number...
          </Button>
        </form>

      </Card.Body>

      <Card.Text className="exercise-solution">
        {displayResult
          &&
          <>
            Highest number is {highInt}
          </>
        }
      </Card.Text>
    </>
  )
}

export default (Ex13)