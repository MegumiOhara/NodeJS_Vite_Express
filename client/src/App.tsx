import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
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
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>NodeJS + Express + Coffee Type List</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
         {array.map((coffee,index) =>
          <ul key = {index}>
            <li>{coffee}</li>
          </ul>
        )}
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
