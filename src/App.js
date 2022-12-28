import 'bootstrap/dist/css/bootstrap.min.css';
import { createContext, useState } from 'react';
import Parent from './pages/Parent';

export const CONTEXT_CONTAINER = createContext();

function App() {
  const [count, setCount] = useState(0);
  const value = {
    count, setCount
  }
  return (
    <CONTEXT_CONTAINER.Provider value={value}>
      <div>
        <Parent />
      </div>
    </CONTEXT_CONTAINER.Provider>
  );
}

export default App;
