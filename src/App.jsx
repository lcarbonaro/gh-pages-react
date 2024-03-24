import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const [imgSrc, setImgSrc] = useState('');

  useEffect(()=>{
    fetch('https://api.thecatapi.com/v1/images/search')
    .then(resp => resp.json())
    .then(respJson => {
      setImgSrc(respJson.url);
    });
  },[]);

  return (
    <>
      
      <h1>React App on Github Pages</h1>
      <h2>calling some api</h2>
      <div className="card">

        <img src={imgSrc} alt="" style="width:200px;"/>

        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        
      </div>
     
    </>
  )
}

export default App
