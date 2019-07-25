import React from 'react';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import particleOptions from './components/ParticleOptions/ParticleOptions';
import Navigation from './components/Navigation/Navigation'
import Logo from './components/Logo/Logo'
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import './App.css';
import 'tachyons';

const app = new Clarifai.App({
  apiKey: 'c3fc1f30ca4844d4a8b43f29578e586e'
});

class App extends React.Component{
  
  constructor(props){
    super(props);
    this.state = {
      inputString : '',
    }
    this.onSearchChange = this.onSearchChange.bind(this);
    this.onSubmitChange = this.onSubmitChange.bind(this);
  }

  onSearchChange = (event) => {
    console.log(event.target.value);
  }

  onSubmitChange = (event) => {
    console.log('click');
    app.models.predict("a403429f2ddf4b49b307e318f00e528b", "https://samples.clarifai.com/face-det.jpg").then(
    function(response) {
      console.log(response)
    },
    function(err) {
      console.log("In error section");
    }
  );
    
  }

  render(){
    return (
      <div className="App">
        
        <Particles className = 'particles' params = {particleOptions}/>
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm onSearchChange = {this.onSearchChange} onSubmitChange = {this.onSubmitChange}/>

      </div>
    );
  }
}

export default App;
