import { useContext } from "react";
import { Button, Card } from "react-bootstrap";
import { CONTEXT_CONTAINER } from "../App";

const Child = () => {
  const { count, setCount } = useContext(CONTEXT_CONTAINER)
  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      paddingTop: "5%"
    }}>
      <Card style={{ width: '18rem' }}>
        <Card.Body className="text-center">
          <Button onClick={() => setCount(count + 1)}>Increment</Button>
          <h3>{count}</h3>
          <Button onClick={() => setCount(count - 1)}>Decrement</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Child;