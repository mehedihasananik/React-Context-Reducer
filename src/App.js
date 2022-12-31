import 'bootstrap/dist/css/bootstrap.min.css';
import { createContext, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import "./App.css"

import Error from './pages/Error';
import Home from './pages/Home';
import Myform from './pages/Myform';
import Counter from './pages/Counter';


import Parent from './pages/Parent';
import ShortForm from './pages/ShortForm';

export const CONTEXT_CONTAINER = createContext();

function App() {
  const [count, setCount] = useState(0);
  const value = {
    count, setCount
  }
  return (
    <div >
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/form" element={<Myform />}></Route>
          <Route path="/counter" element={<Counter />}></Route>
          <Route path="*" element={<Error />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
