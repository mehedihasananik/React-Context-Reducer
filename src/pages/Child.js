import { useState } from "react";

const Child = () => {
  const [count, setCount] = useState(0)
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <h3>{count}</h3>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}

export default Child;