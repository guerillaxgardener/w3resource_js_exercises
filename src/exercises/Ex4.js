//4. Write a JavaScript program to find the area of a triangle where lengths of the three of its sides are 5, 6, 7.
import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import '../exercise.css';


const Ex4 = (props) => {
  const [side1, setSide] = useState(0)
  const [side2, setSide2] = useState(0)
  const [side3, setSide3] = useState(0)
  const [area, getArea] = useState(0)
  const [areaDisplay, handleShow] = useState(false)


  const handleSide1 = (e) => setSide(e.target.value)
  const handleSide2 = (e) => setSide2(e.target.value)
  const handleSide3 = (e) => setSide3(e.target.value)
  const displayArea = () => handleShow(true)

  const handleSubmit = (e) => {
    e.preventDefault()
    let s = ((parseFloat(side1) + parseFloat(side2) + parseFloat(side3)) / 2)
    let area = Math.sqrt(parseFloat(s) * ((parseFloat(s) - parseFloat(side1)) * (parseFloat(s) - parseFloat(side2)) * (parseFloat(s) - parseFloat(side3))))
    getArea(area)
    displayArea()
  }

  return (
    <>
      <Card.Title className="exercise-title">
        Ex 4: Area of triangle
      </Card.Title>

      <Card.Subtitle className="exercise-expected-output">Takes in three user inputs and calculates area of triangle with those angles.</Card.Subtitle>

      <Card.Body className="exercise-body">
        <Card.Text className="exercise-solution">
          <form onSubmit={e => { handleSubmit(e) }}>
            <label>
              Side 1:
            </label>
            <input
              type="number"
              name="side1"
              onInput={handleSide1}
            />

            <label>
              Side 2:
            </label>
            <input
              type="number"
              name="side2"
              onInput={handleSide2}
            />

            <label>
              Side 3:
            </label>
            <input
              type="number"
              name="side3"
              onInput={handleSide3}
            />

            <Button type="submit" className="button" >Submit</Button>

          </form>


          {areaDisplay
            &&
            <>
              the area of triangle with lengths {side1}, {side2}, and {side3} is {area}`
            </>
          }
        </Card.Text>
      </Card.Body>

    </>

  )
}

export default (Ex4)