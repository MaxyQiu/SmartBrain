import React from 'react';
import './ImageLinkForm.css';
const ImageLinkForm=({onInputChange,onButtonSubmit})=>{
   return(
     <div className='ma4 mt0'>
        <h1 className='f3'>
         This Magic Brain will detect faces in your pictures
        </h1>
        <div className='center form  pa4 br3 shadow-5'>

          <input className='f4 pa2 w-70 center' type='tex' onInput={onInputChange}/>

          <button className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple' onClick={onButtonSubmit}>Dectect</button>
        </div>
     </div>
   )



}
// center w-30 h-10 pa2 f4 link dim ph3 pv2 mb2 dib white bg-near-black hover-mid-gray
export default ImageLinkForm;
