import { useReducer, useState } from "react";
import { Button, Card } from "react-bootstrap";

const Counter = () => {
  const initialState = 0;

  function reducer(state, action) {
    console.log(state, action);
    if (action.type === "increment") {
      return state + action.payload;
    }
    else if (action.type === "decremnt") {
      return state - action.payload;
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
          <Button onClick={() => dispatch({ type: "increment", payload: { count: 5 } })}>Increment</Button>
          <h3>{state}</h3>
          <Button onClick={() => dispatch({ type: "decremnt", payload: { count: 5 } })}>Decrement</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Counter;