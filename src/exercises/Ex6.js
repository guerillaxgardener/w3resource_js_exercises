//6. Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.

import React from "react";
import { useState } from 'react';
import { useRef } from 'react';
import { Card, Button, Overlay } from "react-bootstrap";



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

      <Card.Title>Exercise 6: Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.
      </Card.Title>


      <Card.Body>
        <Button variant="danger" ref={target} onClick={() => setShow(!show)}>
          is {currentYear} a leap year?
        </Button>


        <Card.Text>

        <Overlay target={target.current} show={show} placement="right">
          {({ placement, arrowProps, show: _show, popper, ...props }) => (
            <div
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
            </div>
          )}
        </Overlay>
        </Card.Text>
      </Card.Body>

    </>

  )
}

export default (Ex6)