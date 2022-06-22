//Write a JavaScript program to count the number of vowels in a given string.
import React from "react";
import "../exercise.css";
import { useState } from "react";
import { Card, Button } from "react-bootstrap";

const Ex17 = (props) => {
  const [voweledString, storingString] = useState(null)
  const [theDeVoweled, storeDeVoweled] = useState(null)
  const [showSolution, handleTheShow] = useState(false)

  const storeString = (e) => {
    storingString(e.target.value)
    handleTheShow(false)
  }

  const vowelEraser = (e) => {
    e.preventDefault()
    let regex = /[aeiou]/gi
    let deVoweled = voweledString.replace(regex, "")
    storeDeVoweled(deVoweled)
    handleTheShow(true)
  }


  return (
    <Card className="exercise-card" style={{ width: '18rem' }}>
      <Card.Title className="exercise-title">
        Exercise 17: Write a JavaScript program to count the number of vowels in a given string.
      </Card.Title>
      <Card.Body className="exercise-body">
        <form onSubmit={e => { vowelEraser(e) }}>

          <label>
            Enter a word
          </label>

          <input
            type="string"
            name="stringInput"
            onChange={e => { storeString(e) }}
          />

          <Button type="submit" > Remove Vowels </Button>
        </form>
      </Card.Body>

      <Card.Text className="exercise-solution">
        {showSolution
          &&
          <>
            {voweledString} without precious vowels becomes {theDeVoweled} 😈
          </>
        }

      </Card.Text>
    </Card >
  )
}

export default (Ex17)
