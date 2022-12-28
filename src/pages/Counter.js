import { useReducer, useState } from "react";
import { Button, Card } from "react-bootstrap";

const Counter = () => {
  const initialState = 0;

  function reducer(state, action) {
    if (action.type === "increment") {
      return state + 1
    }
    else if (action.type === "decremnt") {
      return state - 1
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState)


  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      paddingTop: "5%"
    }}>
      <Card style={{ width: '18rem' }}>
        <Card.Body className="text-center">
          <Button onClick={() => dispatch({ type: "increment" })}>Increment</Button>
          <h3>{state}</h3>
          <Button onClick={() => dispatch({ type: "decremnt" })}>Decrement</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Counter;