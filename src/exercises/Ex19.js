// Ex 19: Write a JavaScript program to find all distinct prime factors of a given integer.
import React from 'react'
import '../exercise.css'
import { useState } from 'react'
import { Card, Button, ListGroup } from "react-bootstrap";

function Ex19() {
  const [show, handleShow] = useState(true)
  const [integer, handleInput] = useState(null)
  const [primeFactors, handleFactor] = useState([])

  const inputHandler = (e) => {
    handleInput(e.target.value)
    handleShow(false)
  }
  const primeFractors = (n) => {
    n.preventDefault()
    let arr = []
    n = integer
    for (let i = 2; i <= n;) {
      if (n % i === 0) {
        arr.push(i)
        n /= i
        console.log(n)
      } else {
        i++
      }
    }
    handleFactor(arr)
    handleShow(true)
    return arr;
  }
  console.log("integer in state", integer)
  console.log("prime factors", primeFactors)


  let mappedFactors = primeFactors.map((n, idx) => {
    return <ListGroup.Item key={idx} > {n} </ListGroup.Item>
  })

  return (
    <>
      <Card.Title className="exercise-title">
        Ex 19: Prime factor finder
      </Card.Title>

      <Card.Subtitle className="exercise-expected-output">
        JavaScript program to find all distinct prime factors of a given integer
      </Card.Subtitle>

      <Card.Body className="exercise-body">
        <form onSubmit={e => { primeFractors(e) }}>

          <label>
            Feed number:
          </label>

          <input
            type="number"
            name="integerInput"
            onChange={e => { inputHandler(e) }}
          />

          {integer
            &&
            <Button type="submit" className='button'> Find Prime Factors of {integer} </Button>
          }



        </form>


        {show
          &&

          <ListGroup variant= "flush" className="mapped-factors">

            {mappedFactors}

          </ListGroup>
        }


      </Card.Body>
      <Card.Text className="exercise-solution">


      </Card.Text>
    </>
  )
}

export default Ex19