import React,{Component}from 'react';
import Navigation from './components/Navigations/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Signin from './components/Signin/Signin';
import Particles from 'react-particles-js';
import Register from './components/Register/Register';
import Clarifai from 'clarifai';

import './App.css';


const particlesOptions={
  particles: {
   number:{
     value:99,
    density:{
      enable:true,
      value_area:1977
   }
 },
    move: {
              direction: "none",
              enable: true,
              outMode: "bounce",
              random: false,
              speed: 10,
              straight: false,
            }

}
};

const app = new Clarifai.App({apiKey: '7942bd9ec38e4a14af51632641b68790'});

class App extends Component {
  constructor(){
    super();
    this.state={
        input:'',
        imageURL:'',
        box:{},
        route:'signin',
        isSignedin:false
    }


  }


  

  calculateFaceLocation=(data)=>{
    console.log(data);
    const clarifaiface=data.outputs[0].data.regions[0].region_info.bounding_box;
    const image =document.getElementById('inputimage');
    const width = Number(image.width);
    const height = Number(image.height);
    return {
       leftCol: clarifaiface.left_col * width,
       topRow:  clarifaiface.top_row * height,
       rightCol: width - (clarifaiface.right_col * width),
       bottomRow: height - (clarifaiface.bottom_row * height)
    }

  }

  displayFaceBox =(box) =>{
   this.setState({box:box});
   console.log(box);

  }
  onInputChange =(event) =>{
    this.setState({input:event.target.value});
  }
onRouteChange =(route) =>{
  if(route==='signout')
  {this.setState({isSignedin:false})}
  else if(route ==='home')
  {this.setState({isSignedin:true})}
  this.setState({route:route});
}
  onSubmit =() =>{
    this.setState({imageURL: this.state.input});
    app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
    .then(response => this.displayFaceBox(this.calculateFaceLocation(response)))
    .catch(error =>console.log(error));
  }

  render (){
    return(
    <div className="App">
      <Particles className='particles'
       params={particlesOptions}/>
        <Navigation isSignedin={this.state.isSignedin} onRouteChange={this.onRouteChange}/>
        {this.state.route==='home'

          ? <div>
            <Logo />
            <Rank />
            <ImageLinkForm onInputChange={this.onInputChange}
                           onButtonSubmit={this.onSubmit}/>
            <FaceRecognition box={this.state.box} imageURL={this.state.imageURL}/>
           </div>
       :(
         this.state.route==='signin'
       ?<Signin onRouteChange={this.onRouteChange}/>
       :<Register onRouteChange={this.onRouteChange}/>
       )
      }
    </div>);
  };
}

export default App;
