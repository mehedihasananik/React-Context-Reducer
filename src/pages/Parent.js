import { useContext, useState } from "react";
import { COUNTER_CONTEXT } from "../App";
import Children from "../pages/Children";


const Parent = () => {
  const { count } = useContext(COUNTER_CONTEXT)

  return (
    <div>
      <h1>{count}</h1>
      <Children />
    </div>

  );
}

export default Parent;