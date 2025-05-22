// import { useState, useEffect, useRef, useContext } from 'react'
// import './Card.jsx';
// import pic from './assets/Alucard.jpg';
// import Card from './Card.jsx';
// import { globalBoolC } from './Context.jsx';


// function App() {
//   const a = useRef();
//   const { globalBool, setGB } = useContext(globalBoolC);  
//   const [ready,setReady] = useState(false);
//   const [page, setPage] = useState(1);

  
//   const handleClick = () => {
//     const v = parseInt(a.current?.value);
//     setPage(v);
//     setGB(true);
//   };
    
//   return (
//     <>
//       {a.current && <Card  id="cardID" img = {pic} page = {page}/>}
      
      
//       <div className='inputDIV'>
//       <input ref={a} className='urlInput' type='text' defaultValue={1}></input>
//       <br></br>
//       <button className='newCardBTN'  onClick={handleClick}>CREATE CARD</button>
//       </div>
      
//       </>
//   )
// }

// export default App
import { useState, useRef, useContext } from 'react';
import './Card.jsx';
import pic from './assets/Alucard.jpg';
import Card from './Card.jsx';
import { globalBoolC } from './Context.jsx';

function App() {
  const a = useRef();
  const { globalBool, setGB } = useContext(globalBoolC);  
  const [page, setPage] = useState(1);

  const handleClick = () => {
    const v = parseInt(a.current?.value);
    if (!isNaN(v)) {
      setPage(v);
      console.log("Setting page to:", v);
      setGB(true);
    }
  };

  return (
    <>
      <Card id="cardID" img={pic} page={page} />
      
      <div className='inputDIV'>
        <input ref={a} className='urlInput' type='text' defaultValue={1} />
        <br />
        <button className='newCardBTN' onClick={handleClick}>CREATE CARD</button>
      </div>
    </>
  );
}

export default App;