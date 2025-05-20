import { useState, useEffect, useRef } from 'react'
import './Card.jsx';
import pic from './assets/Alucard.jpg';
import Card from './Card.jsx';

function App() {
  const a = useRef();
  return (
    <>
      <Card id="cardID" img = {pic} page = {1} />
      <div className='inputDIV'>
      <input ref={a} className='urlInput' type='text' defaultValue={1}></input>
      <br></br>
      <button className='newCardBTN'  onClick={()=>{console.log()}} >CREATE CARD</button>
      </div>
      
      </>
  )
}

export default App
