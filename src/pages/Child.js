import { useState } from "react";
import { Button, Card } from "react-bootstrap";

const Child = () => {
  const [count, setCount] = useState(0)



  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}>
      <Card style={{ width: '18rem' }}>
        <Card.Body className="text-center">

          <button onClick={() => setCount(count + 1)}>Increment</button>
          <h3>{count}</h3>
          <button onClick={() => setCount(count - 1)}>Decrement</button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Child;