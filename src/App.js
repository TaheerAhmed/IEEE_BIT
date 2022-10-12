import logo from './logo.svg';
import './App.css';

import Home from '../src/Pages/Home'
import React,{useEffect} from 'react';
import Team2022 from '../src/Pages/Team2022'

import AUS from '../src/Pages/AboutUS'

import MyGallery from './Pages/Gallery';


function App() {
  useEffect(() => {
    const threeScript = document.createElement("script");
    threeScript.setAttribute("id", "threeScript");
    threeScript.setAttribute(
      "src",
      "https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js"
    );
    document.getElementsByTagName("head")[0].appendChild(threeScript);

    return () => {
      if (threeScript) {
        threeScript.remove();
      }
    };
  }, []);
  return (
    <div className="App noselect">
     {/* <Home/>
     <Team2022/> */}
     <AUS/>
      <MyGallery />

    </div>
  );
}

export default App;
