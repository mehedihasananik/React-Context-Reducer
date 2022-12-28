import { useState } from "react";
import { Card } from "react-bootstrap";
import Child from "./Child";

const Parent = () => {
  const [count, setCount] = useState(0)

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
      <Child count={count} setCount={setCount} />
      <Child count={count} setCount={setCount} />
    </div>
  );
}

export default Parent;