import logo from './logo.svg';
import './App.css';
import Home from '../src/Home/Home';
import React, { useEffect } from 'react';

function App() {
  useEffect(() => {
    const threeScript = document.createElement('script');
    threeScript.setAttribute('id', 'threeScript');
    threeScript.setAttribute(
      'src',
      'https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js'
    );
    document.getElementsByTagName('head')[0].appendChild(threeScript);
    return () => {
      if (threeScript) {
        threeScript.remove();
      }
    };
  }, []);
  return (
    <div className='App'>
      <Home />
    </div>
  );
}

export default App;
