import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const [imgSrc, setImgSrc] = useState('');

  useEffect(()=>{
    fetchCatPic();
  },[]);

  const fetchCatPic = () => {
    fetch('https://api.thecatapi.com/v1/images/search')
    .then(resp => resp.json())
    .then(respJson => {
      setImgSrc(respJson[0].url);
    });
  };

  return (
    <>
      
      <h1>React App on Github Pages</h1>
      <h2>calling some api</h2>
      <div className="card">
        
        <div>
          <img src={imgSrc} alt="" />
        </div>

        <button onClick={() => {
          setCount((count) => count + 1);
          fetchCatPic();
          }}>
          count is {count}
        </button>
        
      </div>
     
    </>
  )
}

export default App
