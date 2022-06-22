//9. Write a JavaScript program to calculate multiplication and division of two numbers (input from user). 

import React from "react";
import { Card, Button } from "react-bootstrap";
import '../exercise.css';
import { useState } from 'react'

const Ex9 = (props) => {
  const [int1, handleNumber] = useState(null)
  const [int2, handle2ndNumber] = useState(null)
  const [product, handleMultiply] = useState(null)
  const [quotient, handleQuotient] = useState(null)

  // putting user inputs into state
  const handleFirst = (e) => {
    handleNumber(parseInt(e.target.value))
    handleMultiply(null)
    handleQuotient(null)
  }

  const handleSecond = (e) => {
    handle2ndNumber(parseInt(e.target.value))
    handleMultiply(null)
    handleQuotient(null)
  }

  // operations on user inputs
  const multiplier = (e) => {
    const product = (int1 * int2)
    handleMultiply(product)
  }

  const divider = (e) => {
    const quotient = (int1 / int2)
    handleQuotient(quotient)
  }

  return (
    <>
      <Card.Title className="exercise-title">
        Exercise 9: Multiply & Divide
      </Card.Title>

      <Card.Subtitle>
        Takes in two numbers from user and allows multiplication or division of inputs.
      </Card.Subtitle>

      <Card.Body className="exercise-body">
        <form >

          <label>
            1st Number:
          </label>
          <input
            type="integer"
            name="integer1"
            onInput={handleFirst}
          />

          <label>
            2nd Number:
          </label>
          <input
            type="integer"
            name="integer2"
            onInput={handleSecond}
          />

          {int1 && int2
            &&
            <>
              <Button onClick={e => { multiplier(e) }}> Multiply</Button>

              <Button onClick={e => { divider(e) }}> Divide</Button>
            </>

          }
        </form>

        {/* Display solutions as they are calculated */}
        <Card.Text className="exercise-solution">
          {product
            &&
            <>
              Product = {product} <br />
            </>

          }

          {quotient
            &&
            <>
              quotient = {quotient} <br />
            </>

          }
        </Card.Text>
      </Card.Body>
    </>
  )
}

export default (Ex9)