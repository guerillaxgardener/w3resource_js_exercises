//14.  Write a JavaScript program to remove all characters from a given string that appear more than once.
import React from "react";
import { Card, Button } from "react-bootstrap";
import '../exercise.css';
import { useState } from "react";

const Ex14 = (props) => {
  const [str, handleString] = useState(null)
  const [uniqueStr, handleFinalStr] = useState(null)
  const [displayResult, handleDisplay] = useState(false)

  const handleUserInput = (e) => {
    handleString(e.target.value)
    handleDisplay(false)
  }

  const stringifyMeCaptain = (e) => {
    e.preventDefault()
    let arr_char = str.split("")
    let result = []
    for (let i = 0; i < arr_char.length; i++) {
      if (str.indexOf(arr_char[i]) === str.lastIndexOf(arr_char[i])) {
        result.push(arr_char[i])
      }
      result.join("")
      handleFinalStr(result)
      handleDisplay(true)
    }
  }


  return (
    <>
      <Card.Title className="exercise-title">
        Ex 14: Repeater deleter
      </Card.Title>

      <Card.Subtitle className="exercise-expected-output">
        Takes in a string from user and removes all letters that appear more than once.
      </Card.Subtitle>

      <Card.Body className="exercise-body">
        <form onSubmit={e => { stringifyMeCaptain(e) }}>
          <label>
            Enter a string:
          </label>

          <input
            type="string"
            name="stringInput"
            onInput={handleUserInput}
          />

          <Button
            type="submit" 
            className="button"
            variant="danger"
            >
            Remove duplicate string characters...
          </Button>
        </form>

      </Card.Body>

      <Card.Text className="exercise-solution">

        {displayResult
          &&
          <>
            "{str}" without duplicates is "{uniqueStr}"
          </>
        }
      </Card.Text>
    </>
  )
}

export default (Ex14)