//8. Write a JavaScript program where the program takes a random integer between 1 to 10, the user is then prompted to input a guess number. If the user input matches with guess number, the program will display a message "Good Work" otherwise display a message "Not matched".
import React from "react";
import { Card, Button } from "react-bootstrap";
import '../exercise.css';
import { useState } from 'react'

const Ex8 = (props) => {
  const [guess, handleGuess] = useState(null)
  const [answerDisplay, handleShow] = useState(false)
  const randoNum = 7

  const guessHandler = (e) => handleGuess(e.target.value)

  const handleSubmit = (e) => {
    e.preventDefault()
    handleShow(true);
  }

  return (
    <>
      <Card.Title className="exercise-title">
        Ex 8: Guess my number
      </Card.Title>

      <Card.Subtitle className="exercise-expected-output">
        Takes a random integer guess between 1 & 10 from user, compares and tells if correct.
      </Card.Subtitle>

      <Card.Body className="exercise-body">

        <Card.Text className="exercise-solution">
          <form onSubmit={e => { handleSubmit(e) }}>
            <label>
              Guess an integer 1 - 10
            </label>
            <input
              type="integer"
              name="integerGuess"
              onInput={guessHandler}
            />
            <Button type="submit" className="button"> Guess </Button>
          </form>


          {answerDisplay
            &&
            (
              (parseInt(guess) === randoNum)
                ?
                `🎊 Good Work!! ${randoNum} is the number! 🎊 `
                :
                `${guess} is not the number, try again!`
            )
          }
        </Card.Text>
      </Card.Body>
    </>
  )
}

export default (Ex8)