import React from 'react';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import particleOptions from './components/ParticleOptions/ParticleOptions';
import Navigation from './components/Navigation/Navigation';
import Signin from './components/Signin/Signin';
import Register from './components/Register/Register';
import Logo from './components/Logo/Logo'
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
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
      imageUrl : '',
      apiResponse : '',
      route : 'signin',
      isSignedIn : false,
      imageStatus : 'empty'
    }

    this.onSearchChange = this.onSearchChange.bind(this);
    this.onSubmitChange = this.onSubmitChange.bind(this);
    this.onRouteChange = this.onRouteChange.bind(this);
    this.setImageStatus = this.setImageStatus.bind(this);
  }

  onSearchChange = (event) => {
    this.setState({inputString : event.target.value});
  }

  setImageStatus = (imageUrl) => {
    if(imageUrl === ''){
      this.setState({imageStatus : 'empty'});
    }
    else{
      let img = new Image();
      img.onload = function(){
        this.setState({imageStatus : 'valid'});
      }.bind(this);
      img.onerror = function(){
        this.setState({imageStatus : 'invalid'});
      }.bind(this);
      img.src = imageUrl;
    }
  }

  onSubmitChange = (event) => {
    this.setState({imageUrl : this.state.inputString,
                    apiResponse : ''});
    this.setImageStatus(this.state.inputString);
    // app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.inputString)
    // .then(response => this.displayFaceBox(this.calculateFaceLocation(response)))
    // .catch(console.log);
    app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.inputString)
    .then(response => this.setState({apiResponse : response}))
    .catch(console.log);
    
  }

  onRouteChange = (route) => {
    if(route === 'home'){
      this.setState({isSignedIn : true});
    }
    else{
      this.setState({isSignedIn : false}); 
    }
    this.setState({route : route});
  }

  render(){
    const { route, imageUrl, apiResponse, isSignedIn, imageStatus } = this.state;
    let renderElem;
    if (route === 'signin'){
      renderElem = <Signin onRouteChange = {this.onRouteChange}/>;
    } 
    else if (route === 'register'){
      renderElem = <Register onRouteChange = {this.onRouteChange}/>;
    }
    else{
      renderElem = 
        <div>
          <Logo />
          <Rank />
          <ImageLinkForm onSearchChange = {this.onSearchChange} onSubmitChange = {this.onSubmitChange}/>
          <FaceRecognition imageStatus = {imageStatus} imageUrl = {imageUrl} apiResponse = {apiResponse} />
        </div>
    }
    return (
      <div className="App">
        
        <Particles className = 'particles' params = {particleOptions}/>
        <Navigation onRouteChange = {this.onRouteChange} isSignedIn = {isSignedIn}/>
        {renderElem}

      </div>
    );
  }
}

export default App;