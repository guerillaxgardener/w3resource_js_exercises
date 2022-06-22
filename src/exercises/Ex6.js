//6. Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.
import React from "react";
import { useState } from 'react';
import { useRef } from 'react';
import { Card, Button, Overlay } from "react-bootstrap";
import '../exercise.css';

const Ex6 = (props) => {
  const [show, setShow] = useState(false);
  const target = useRef(null);

  let date = new Date();
  let currentYear = date.getFullYear();
  let leapTruth = false;

  if (currentYear % 4 === 0 && currentYear % 100 !== 0) {
    leapTruth = true;
  } else if (currentYear % 4 === 0 && currentYear % 100 === 0 && currentYear % 400 === 0) {
    leapTruth = true;
  } else {
    leapTruth = false;
  }

  return (
    <>
      <Card.Title className="exercise-title">
        Exercise 6: Leap year?
      </Card.Title>

      <Card.Subtitle>
        Tells if you are currently living in a leap year
      </Card.Subtitle>

      <Card.Body className="exercise-body">
        <Button variant="danger" ref={target} onClick={() => setShow(!show)}>
          is {currentYear} a leap year?
        </Button>

        <Card.Text className="exercise-solution">

          <Overlay target={target.current} show={show} placement="bottom">
            {({ placement, arrowProps, show: _show, popper, ...props }) => (

              <p
                {...props}
                style={{
                  position: 'absolute',
                  backgroundColor: 'rgba(255, 100, 100, 0.85)',
                  padding: '2px 10px',
                  color: 'white',
                  borderRadius: 3,
                  ...props.style,
                }}
              >
                {leapTruth === true
                  ?
                  " YES IT IS!!!"
                  :
                  "Not a leap year."
                }
              </p>
            )}
          </Overlay>
        </Card.Text>
      </Card.Body>
    </>
  )
}

export default (Ex6)