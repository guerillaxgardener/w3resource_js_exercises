//15. Write a JavaScript program to reverse a given string.
import React from "react";
import { Card, Button } from "react-bootstrap";
import '../exercise.css';
import { useState } from "react";

const Ex15 = (props) => {
  const [str, handleString] = useState(null)
  const [strRev, handleReversal] = useState(null)
  const [show, showReversed] = useState(false)

  const handleUserInput = (e) => {
    handleString(e.target.value)
    showReversed(false)
  }

  const reversitizer = (e) => {
    let preReversed = str
    console.log(preReversed)
    let reversed = preReversed.split("").reverse().join("")
    handleReversal(reversed)
    console.log(reversed)
    showReversed(true)
  }

  return (
    <>
      <Card.Title className="exercise-title">
        Exercise 15: Reversitize me
      </Card.Title>

      <Card.Subtitle>
        Takes a string from user and returns string in reverse order
      </Card.Subtitle>

      <Card.Body className="exercise-body">
        <form>
          <label>
            Enter a string:
          </label>

          <input
            type="string"
            name="stringInput"
            onInput={handleUserInput}
          />
          {str
            &&
            <Button
              onClick={e => { reversitizer(e) }}>
              Reverse!
            </Button>
          }
        </form>

      </Card.Body>

      <Card.Text className="exercise-solution">

        {show
          &&
          <>
            "{strRev}" is your string reversed
          </>
        }
      </Card.Text>
    </>
  )
}

export default (Ex15)