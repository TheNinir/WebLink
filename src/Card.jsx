import { useEffect, useState, useRef, createContext, useContext } from "react";
import './Card.css';
import './App.jsx'
import { globalBoolC } from './Context.jsx';


function Card(props){
    const [url,setUrl] = useState();
    const [title,setTitle] = useState();
    const [UID,setUID] = useState();
    const [ID,setID] = useState();
    const [body,setBody] = useState();
    const { globalBool, setGB } = useContext(globalBoolC);
    const a = useRef();

    
useEffect(() =>{
    try{
fetch(`https://jsonplaceholder.typicode.com/posts/${props.page}`).then(res => res.json()).then(data => {
    console.log(data);
    setTitle(data.title);
    setUID(data.userId);
    setID(data.id);
    setBody(data.body);
})
}
catch(er){
console.log(er)
}},[props.page]);
if(globalBool === true){
    return(
<>
<div ref={a} className="Card">
<img className="Card-IMG" src = {props.img} alt={title}></img>
<p className="Card-UID"><b>UID:</b> {UID}</p>
<p className="Card-ID"><b>ID:</b> {ID}</p>
<p className="Card-Body"><b>Text:</b> {body}</p>
<button className="Card-Btn" onClick={() => {setGB(false);} }>X</button>
</div>
</>
)
}
}

export default Card;