//Write a JavaScript program to find the types of a given angle.
// Types of angles:
// Acute angle: An angle between 0 and 90 degrees.
// Right angle: An 90 degree angle.
// Obtuse angle: An angle between 90 and 180 degrees.
// Straight angle: A 180 degree angle.


import React from 'react'
import "../exercise.css";
import { useState } from "react";
import { Card, Button } from "react-bootstrap";



function Ex18(props) {
  const [angle, storeAngle] = useState(null)
  const [show, storeShow] = useState(false)
  const [angleType, solveType] = useState(null)

  const handleInput = (e) => {
    storeAngle(parseInt(e.target.value))
    storeShow(false)
  }

  const handleAngle = (e) => {
    e.preventDefault()
    if (angle >= 0 && angle < 90) {
      solveType("Acute Angle")
    } else if (angle === 90) {
      solveType("Right Angle")
    } else if (angle > 90 && angle < 180) {
      solveType("Obtuse Angle")
    } else if (angle === 180) {
      solveType("Straight Angle")
    } else if (angle > 180) {
      solveType("Please enter a number 0-180")
    }
    storeShow(true)
  }



  return (
    <>
      <Card.Title className="exercise-title">
        Exercise 18: Type de angle
      </Card.Title>

      <Card.Subtitle>
        Feed it a number between 0-180 and it'll tell you what angle type you've got
      </Card.Subtitle>

      <Card.Body className="exercise-body">
        <form onSubmit={e => { handleAngle(e) }}>

          <label>
            Enter angle degrees:
          </label>

          <input
            type="number"
            name="integerInput"
            onChange={e => { handleInput(e) }}
          />

          <Button type="submit" > Determine angle type </Button>
        </form>
      </Card.Body>

      <Card.Text className="exercise-solution">
        {show
          &&
          <>
            {angleType} 😈
          </>
        }

      </Card.Text>
    </>
  )
}

export default (Ex18)