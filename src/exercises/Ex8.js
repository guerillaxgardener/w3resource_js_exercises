//8. Write a JavaScript program where the program takes a random integer between 1 to 10, the user is then prompted to input a guess number. If the user input matches with guess number, the program will display a message "Good Work" otherwise display a message "Not matched".
import React from "react";
import { Card } from "react-bootstrap";
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
        Exercise 8: Write a JavaScript program where the program takes a random integer between 1 & 10, the user is then prompted to input a guess number, and compare to correct value.
      </Card.Title>


      <Card.Body className="exercise-body">
        <form onSubmit={e => { handleSubmit(e) }}>
          <label>
            Guess an integer between 1 & 10
            <input
              type="integer"
              name="integerGuess"
              onInput={guessHandler}
            />

          </label>
         
        </form>





        <Card.Text className="exercise-solution">
          SOLUTION: <br />

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