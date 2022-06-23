//Write a JavaScript program to count the number of vowels in a given string.
import React from "react";
import "../exercise.css";
import { useState } from "react";
import { Card, Button } from "react-bootstrap";

const Ex17 = (props) => {
  const [voweledString, storingString] = useState(null)
  const [theDeVoweled, storeDeVoweled] = useState(null)
  const [showSolution, handleTheShow] = useState(false)

  const storeString = (e) => storingString(e.target.value)

  const vowelEraser = (e) => {
    e.preventDefault()
    let deVoweled = voweledString.replace(/[aeiou]/gi, "")
    storeDeVoweled(deVoweled)
    handleTheShow(true)
  }


  return (
    <>
      <Card.Title className="exercise-title">
        Ex 17: Devowel.
      </Card.Title>

      <Card.Subtitle className="exercise-expected-output">
       Takes string from user and de-vowels it, then spits back de-voweled word for user's delight.
      </Card.Subtitle>

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

          <Button type="submit" className="button" variant="danger" > Remove Vowels </Button>
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
    </>
  )
}

export default (Ex17)
