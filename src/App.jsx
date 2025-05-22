import { useState, useEffect, useRef, useContext } from 'react'
import './Card.jsx';
import pic from './assets/Alucard.jpg';
import Card from './Card.jsx';
import { globalBoolC } from './Context.jsx';


function App() {
  const a = useRef();
  const { globalBool, setGB } = useContext(globalBoolC);  
  return (
    <>
      <Card id="cardID" img = {pic} page = {1} />
      <div className='inputDIV'>
      <input ref={a} className='urlInput' type='text' defaultValue={1}></input>
      <br></br>
      <button className='newCardBTN'  onClick={()=>{setGB(true);}} >CREATE CARD</button>
      </div>
      </>
  )
}

export default App
