//10. Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit. 
import React from "react";
import { Card, Button } from "react-bootstrap";
import '../exercise.css';
import { useState } from "react";

const Ex10 = (props) => {
  const [temp, handleTemp] = useState(null)
  const [convert, handleBaseUnit] = useState(null)
  const [finalTemp, convertifyMeCaptain] = useState(null)

  const handleTempTyped = (e) => {
    handleTemp(parseInt(e.target.value))
  }

  const conversion = (e) => {
    handleBaseUnit(e.target.value)
    convertifyMeCaptain(null)
  }

  const doConversion = (e) => {
    (convert === "celsius")
      ?
      convertifyMeCaptain((temp * 1.8000) + 32.00)
      :
      convertifyMeCaptain((temp - 32.00) / 1.80)
  }

  return (
    <>
      <Card.Title className="exercise-title">
        Ex 10: Temp conversion
      </Card.Title>

      <Card.Subtitle className="exercise-expected-output">
        This takes in user integer and allows conversion between celsius and fahrenheit.
      </Card.Subtitle>

      <Card.Body className="exercise-body">
        <form>

          <label>
            Enter Temp:
          </label>
          <input
            type="integer"
            name="tempInput"
            onInput={handleTempTyped}
          />

          <br />
          <input
            type="radio"
            id="celsius"
            name="temp_unit"
            value="celsius"
            onClick={e => { conversion(e) }}
          />

          <label
            htmlFor="html">
            Convert &deg;C to &deg;F
          </label>

          <br />

          <input
            type="radio"
            id="farenheit"
            name="temp_unit"
            value="fahrenheit"
            onClick={e => { conversion(e) }}
          />

          <label htmlFor="css">
            Convert &deg;F to &deg;C
          </label>

        </form>

      <Card.Text className="exercise-solution">
        {convert && temp
          &&
          <Button onClick={e => { doConversion(e) }}>
            CONVERT!
          </Button>}

        {finalTemp
          &&
          convert === 'celsius'
          &&
          <>
            <br />
            final temp is {finalTemp} fahrenheit
          </>
        }
        {finalTemp
          &&
          convert === 'fahrenheit'
          &&
          <>
            <br />
            final temp is {finalTemp} celsius
          </>
        }
      </Card.Text>
      </Card.Body>

    </>
  )
}

export default (Ex10)