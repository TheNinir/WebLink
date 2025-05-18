import { useEffect, useState } from "react";
import './Card.css';

function Card(props){
    const [url,setUrl] = useState(1);
    const [title,setTitle] = useState();
    const [UID,setUID] = useState();
    const [ID,setID] = useState();
    const [body,setBody] = useState();
    
useEffect(() =>{
fetch(`https:jsonplaceholder.typicode.com/posts/${url}`).then(res => res.json()).then(data => {
    console.log(data)
    setTitle(data.title);
    setUID(data.userId);
    setID(data.id);
    setBody(data.body);
}).catch(er => {console.log(er)})
},[url]);

return(
<>
<div className="Card">
<img className="Card-IMG" src = {props.img} alt={title}></img>
<p className="Card-UID"><b>UID:</b> {UID}</p>
<p className="Card-ID"><b>ID:</b> {ID}</p>
<p className="Card-Body"><b>Text:</b> {body}</p>
<button className="Card-Btn" onClick={() => setUrl(props.url)}>+</button>
</div>
</>
)
}


export default Card;