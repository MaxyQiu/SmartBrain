import React from 'react';
import './FaceRecognition.css'
const FaceRecognition=({box,imageURL})=>{
   return(
       // <div className='mw5 mw7-ns center pa3 ph5-ns'>
       // <div className='center'>
       // <div className='center ma'>
       //   <div className='absolute mt2'>
       <div className='mw5 mw7-ns center pa3 ph5-ns'>
       <div className='center'>
         <img id='inputimage' alt='' src={imageURL} width='500px' heigh='auto'/>
         <div className='bounding_box' style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>
     </div>
     </div>
   )

}
// center w-30 h-10 pa2 f4 link dim ph3 pv2 mb2 dib white bg-near-black hover-mid-gray
export default FaceRecognition;
