//4. Write a JavaScript program to find the area of a triangle where lengths of the three of its sides are 5, 6, 7.
import React, { useState } from "react";
import { Card } from "react-bootstrap";
import '../exercise.css';


const Ex4 = (props) => {
  const [side1, setSide] = useState(0)
  const [side2, setSide2] = useState(0)
  const [side3, setSide3] = useState(0)
  const [area, getArea] = useState(0)
  const [areaDisplay, handleShow] = useState(false)
  console.log('side 1 =', side1, 'side 2 =', side2, 'side 3 =', side3)


  const handleSide1 = (e) => setSide(e.target.value)
  const handleSide2 = (e) => setSide2(e.target.value)
  const handleSide3 = (e) => setSide3(e.target.value)
  const displayArea = () => handleShow(true)

  const handleSubmit = (e) => {
    e.preventDefault()
    let s = ((parseFloat(side1) + parseFloat(side2) + parseFloat(side3)) / 2)
    let area = Math.sqrt(s * ((s - side1) * (s - side2) * (s - side3)))
    getArea(area);
    displayArea();
  }

  return (
    <>

      <Card.Title className="exercise-title">
        Exercise 4: Write a JavaScript program to find the area of a triangle when user provides lengths.
      </Card.Title>


      <Card.Body className="exercise-body">
        <form onSubmit={e => { handleSubmit(e) }}>
          <label>
            Side 1:
            <input
              type="number"
              name="side1"
              onInput={handleSide1}
            />
          </label>

          <label>
            Side 2:
            <input
              type="number"
              name="side2"
              onInput={handleSide2}

            />
          </label>

          <label>
            Side 3:
            <input
              type="number"
              name="side3"
              onInput={handleSide3}

            />
          </label>
          <input type="submit" value="Submit" />
        </form>

        <Card.Text className="exercise-solution">
          {areaDisplay
            &&
            <>
              SOLUTION: <br />

              the area of triangle with lengths {side1}, {side2}, and {side3} is {area}`
            </>
          }
        </Card.Text>
      </Card.Body>

    </>

  )
}

export default (Ex4)