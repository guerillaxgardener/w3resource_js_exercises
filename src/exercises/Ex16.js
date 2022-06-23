//16. Write a JavaScript program to calculate a mortgage loan's monthly payment
import React from "react";
import { Card, Button } from "react-bootstrap";
import '../exercise.css';
import { useState } from "react";

const Ex16 = (props) => {
  const [loanTtl, setLoan] = useState(null)
  const [interestTtl, setInterest] = useState(null)
  const [months, setMonths] = useState(null)
  const [monthlyPayment, setMonthly] = useState(null)

  const handleTotalLoanInput = (e) => {
    setLoan(parseInt(e.target.value))
    setMonthly(false)
  }

  const handleInterestInput = (e) => {
    setInterest((parseInt(e.target.value) * .01))
    setMonthly(false)
  }

  const handleTtlMonthsInput = (e) => {
    setMonths(parseInt(e.target.value))
    setMonthly(false)
  }

  const calculatizeMeCaptain = (e) => {
    e.preventDefault()
    let interest = loanTtl * interestTtl
    let totalOwed = interest + loanTtl
    setMonthly(totalOwed / months)
  }

  return (
    <>
      <Card.Title className="exercise-title">
        Ex 16: Mortgage Calculator
      </Card.Title>

      <Card.Subtitle className="exercise-expected-output">
        Give this calculator some info and it'll tell you your monthly mortgage rate. Also crazy that I learned today that there is a 'g' in the word 'mortgage'
      </Card.Subtitle>

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
            ?
            <Button
              type="submit"
              className="button"
            >
              Calculate!
            </Button>
            :
            null
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
    </>
  )
}
export default (Ex16)