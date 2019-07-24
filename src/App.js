import React from 'react';
import Particles from 'react-particles-js';
import Navigation from './components/Navigation/Navigation'
import Logo from './components/Logo/Logo'
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import './App.css';
import 'tachyons';

function App() {
  const particleOptions = {
    particles:{
      number : {
        value : 200,
        density : {
          enable : true,
          value_area : 1000,
        }
      },
      color : {
        value: "#c32f2f",
      },
      size : {
        value : 15,
      }
    }, 
    interactivity : {
      events : {
        onhover : {
          enable : true,
          mode : "repulse",
        },
        onclick : {
          enable : true,
          mode : "push",
        },
      },
      detect_on : "window",
    }
  };
  return (
    <div className="App">

        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm />
        <Particles className = 'particles' params = {particleOptions}/>

    </div>
  );
}

export default App;
