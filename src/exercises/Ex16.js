//16. Write a JavaScript program to calculate a mortgage loan's monthly payment
import React from "react";
import { Card, Button } from "react-bootstrap";
import '../exercise.css';
import { useState,  } from "react";

const Ex16 = (props) => {
  const [loanTtl, setLoan] = useState(null)

  const [interestTtl, setInterest] = useState(null)

  const [months, setMonths] = useState(null)

  const [showCalc, showCalcButton] = useState(false)
  const [showMonthly, showMonthlyYa] = useState(false)
  const [monthlyPayment, setMonthly] = useState(null)

  const handleTotalLoanInput = (e) => {
    setLoan(parseInt(e.target.value))
  }

  const handleInterestInput = (e) => {
    setInterest((parseInt(e.target.value) * .01))
  }

  const handleTtlMonthsInput = (e) => {
    setMonths(parseInt(e.target.value))
  }

  const calculatizeMeCaptain = (e) => {
    e.preventDefault()
    let interest = loanTtl * interestTtl
    console.log("interest", interest)
    let totalOwed = interest + loanTtl
    console.log("total", totalOwed)

    setMonthly(totalOwed / months)
    console.log(monthlyPayment)
  }


  // console.log('string in state', str)
  // console.log('reversed string in state???', strRev)


  // const reversitizer = (e) => {
  //   let preversed = str
  //   console.log(preversed)
  //   let reversed = preversed.split("").reverse().join("")
  //   handleReversal(reversed)
  //   console.log(reversed)
  //   showReversed(true)
  // }

  return (
    <Card className="exercise-card" style={{ width: '18rem' }}>
      <Card.Title className="exercise-title">
        Exercise 16: Write a JavaScript program to calculate mortgage loan's monthly payment
      </Card.Title>
      <Card.Body className="exercise-body">
        <form onSubmit={e => { calculatizeMeCaptain(e) }}>

          {/* LOAN TOTAL******************************* */}
          <label>
            Loan Amount: $
          </label>

          <input
            type="number"
            name="numberInput"
            placeholder="???"
            onChange={e => { handleTotalLoanInput(e) }}
          />

          {/* INTEREST TOTAL******************************* */}
          <label>
            Interest Rate:
          </label>

          <input
            type="number"
            name="interestInput"
            placeholder="???"
            onChange={e => { handleInterestInput(e) }}
          />
          <label>
            %
          </label>

          {/* MONTHS 2 PAY TOTAL******************************* */}
          <label>
            Months to Pay:
          </label>

          <input
            type="number"
            name="monthsInput"
            placeholder="???"
            onChange={e => { handleTtlMonthsInput(e) }}
          />

          {loanTtl && interestTtl && months
            &&
            <Button
              type="submit"
            >
              Calculate!
            </Button>
          }

        </form>

      </Card.Body>

      <Card.Text className="exercise-solution">

        {monthlyPayment
          &&
          <>
            Monthly payment is ${monthlyPayment} 
          </>
        }
      </Card.Text>
    </Card >
  )
}

export default (Ex16)