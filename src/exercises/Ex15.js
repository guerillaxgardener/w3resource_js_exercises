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

  console.log('string in state', str)
  console.log('reversed string in state???', strRev)


  const reversitizer = (e) => {
    let preversed = str
    console.log(preversed)
    let reversed = preversed.split("").reverse().join("")
    handleReversal(reversed)
    console.log(reversed)
    showReversed(true)
  }

  return (
    <Card className="exercise-card" style={{ width: '18rem' }}>
      <Card.Title className="exercise-title">
        Exercise 15: Write a JavaScript program to reverse a given string.
      </Card.Title>
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

        {showReversed
          &&
          <>
            "{strRev}" is your string reversed
          </>
        }
      </Card.Text>
    </Card >
  )
}

export default (Ex15)