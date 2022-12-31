import 'bootstrap/dist/css/bootstrap.min.css';
import { createContext, useState } from 'react';

import Counter from './pages/Counter';
import Myform from './pages/Newform';

import Parent from './pages/Parent';
import ShortForm from './pages/ShortForm';

export const CONTEXT_CONTAINER = createContext();

function App() {
  const [count, setCount] = useState(0);
  const value = {
    count, setCount
  }
  return (
    // <CONTEXT_CONTAINER.Provider value={value}>
    //   <div>
    //     <Parent />
    //   </div>
    // </CONTEXT_CONTAINER.Provider>
    <div>
      {/* <ShortForm /> */}
      {/* <Counter /> */}
      <Myform />
    </div>
  );
}

export default App;
