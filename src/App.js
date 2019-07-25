import React from 'react';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import particleOptions from './components/ParticleOptions/ParticleOptions';
import Navigation from './components/Navigation/Navigation'
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
      box : ''
    }
    this.onSearchChange = this.onSearchChange.bind(this);
    this.onSubmitChange = this.onSubmitChange.bind(this);
  }
  calculateFaceLocation = (data) => {
  const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
  const image = document.getElementById('inputImage');
  const width = Number(image.width);
  const height = Number(image.height);
  return (
      {
        leftCol : clarifaiFace.left_col * width,
        rightCol  : (1 - clarifaiFace.right_col) * width,
        topRow : clarifaiFace.top_row * height,
        bottomRow : (1 - clarifaiFace.bottom_row) * height,
      }
    );
  }

  displayFaceBox = (box) => {
    this.setState({box : box});
  }


  onSearchChange = (event) => {
    console.log(event.target.value);
    this.setState({inputString : event.target.value});
  }

  onSubmitChange = (event) => {
    this.setState({imageUrl : this.state.inputString});
    app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.inputString)
    .then(response => this.displayFaceBox(this.calculateFaceLocation(response)))
    .catch(console.log);
    
  }

  render(){
    return (
      <div className="App">
        
        <Particles className = 'particles' params = {particleOptions}/>
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm onSearchChange = {this.onSearchChange} onSubmitChange = {this.onSubmitChange}/>
        <FaceRecognition imageUrl = {this.state.imageUrl} box = {this.state.box}/>

      </div>
    );
  }
}

export default App;