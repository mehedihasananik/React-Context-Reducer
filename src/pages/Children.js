import { useContext } from "react";
import { Button } from "react-bootstrap";
import { COUNTER_CONTEXT } from "../App";

const Children = () => {
  const { count, setCount } = useContext(COUNTER_CONTEXT)
  return (
    <div className="mt-5 ms-5">
      <Button onClick={() => setCount(count + 1)} varient="outline-primary">
        +
      </Button>
      <h3>{count}</h3>
      <Button onClick={() => setCount((prev) => prev - 1)} varient="outline-primary">
        -
      </Button>
    </div>
  );
}

export default Children;