import { Button, Card } from "react-bootstrap";

const Child = ({ count, setCount }) => {
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