import { createContext, useEffect, useState } from "react";
import { RouterProvider } from "react-router-dom";
import routes from "./routes/routes";

const PRODUCT_CONTEXT = createContext()

function App() {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => setData(data.slice(0, 10)))
  }, []);
  console.log(data)


  return (
    <div>
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
