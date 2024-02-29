import './App.css';
import { useEffect, useState } from 'react';
import Topnav from './Components/Topnav';
import Hero from './Components/Hero';

function App() {

  function getWindowSize() {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
  }

  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  function reveal() {
    var reveals = document.querySelector(".reveal");
    setTimeout(() => {
      reveals?.classList?.add("active");
    }, 50)
  }

  useEffect(() => {
    reveal()
  }, [])

  return (
    <div className='scrollbar-hide' >
      <Topnav windowSize={windowSize} />
      <Hero windowSize={windowSize} />
    </div>
  );
}

export default App;
