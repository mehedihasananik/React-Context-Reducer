import { useContext, useState } from "react";
import { Card } from "react-bootstrap";
import { CONTEXT_CONTAINER } from "../App";
import Child from "./Child";

const Parent = () => {
  const { count } = useContext(CONTEXT_CONTAINER)

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
      <Child />
    </div>
  );
}

export default Parent;