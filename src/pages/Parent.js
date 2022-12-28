import { useContext, useState } from "react";
import { Card } from "react-bootstrap";
import { COUNTER_CONTEXT } from "../App";
import Child from "./Child";

const Parent = () => {
  const { count } = useContext(COUNTER_CONTEXT)

  return (
    <div>
      <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: "5%"
      }}>
        <Card style={{ width: '18rem' }}>
          <Card.Body className="text-center">
            <h3>{count}</h3>
          </Card.Body>
        </Card>
      </div>


    </div>
  );
}

export default Parent;