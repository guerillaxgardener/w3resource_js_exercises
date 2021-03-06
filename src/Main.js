import React from "react";
import { Card, Row } from "react-bootstrap";
import Ex1 from "./exercises/Ex1";
import Ex2 from "./exercises/Ex2";
import Ex3 from "./exercises/Ex3";
import Ex4 from "./exercises/Ex4";
import Ex5 from "./exercises/Ex5";
import Ex6 from "./exercises/Ex6";
import Ex7 from "./exercises/Ex7";
import Ex8 from "./exercises/Ex8";
import Ex9 from "./exercises/Ex9";
import Ex10 from "./exercises/Ex10";
import Ex11 from "./exercises/Ex11";
import Ex12 from "./exercises/Ex12";
import Ex13 from "./exercises/Ex13";
import Ex14 from "./exercises/Ex14";
import Ex15 from "./exercises/Ex15";
import Ex16 from "./exercises/Ex16";
import Ex17 from "./exercises/Ex17";
import Ex18 from "./exercises/Ex18";
import Ex19 from "./exercises/Ex19";

import "./exercise.css";


const Main = (props) => {

  const exArray = [<Ex1 />, <Ex2 />, <Ex3 />, <Ex4 />, <Ex5 />, <Ex6 />, <Ex7 />, <Ex8 />, <Ex9 />, <Ex10 />, <Ex11 />, <Ex12 />, <Ex13 />, <Ex14 />, <Ex15 />, <Ex16 />, <Ex17 />, <Ex18 />, <Ex19 />]

  let mappedExamples = exArray.map((ex, index) => {
    return <Card key={index} className="exercise-card" >{ex}</Card>
  })

  return (
    <div className="flex-exercises">
      
        {mappedExamples}
  
    </div>
  )
}
export default (Main)