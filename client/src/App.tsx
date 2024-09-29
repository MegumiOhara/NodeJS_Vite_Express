import { useState, useEffect } from 'react'
import reactLogo from './assets/mug-hot-solid.svg'
import viteLogo from '/vite.svg'
import axios from 'axios'
import './App.css'


function App() {
  const [count, setCount] = useState(0);
  const [array, setArray] = useState([]);

  const fetchApi = async () => {
    const response = await axios.get("http://localhost:8080/api");
    setArray(response.data.coffee);
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <>
      <div>
          <img src={reactLogo} className="logo react" alt="React logo" /> 
      </div>
      <h1>NodeJS + Express</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <h2>Types of Coffee</h2>
        <p>
         {array.map((coffee,index) =>
          <ul key = {index}>
            <li>{coffee}</li>
          </ul>
        )}
        </p>
      </div>
    </>
  )
}

export default App
