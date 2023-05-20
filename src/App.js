import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Child from './Child';

function App() {
  const [data, setData] = useState('');
  return (
    <>
      <h1>Parent Component  :{data}</h1>
      <h2>
        Child Component <Child setData={setData} />
      </h2>
    </>
  );
}

export default App;
