import { useRef } from 'react';
import logo from '../images/logo.png';
import plus from '../images/plus-icon.png';
const AddNode = (props)=>{
    let text = useRef();
     const checkTxt= () =>{
         if(text.current.value !== ""){
            props.addNode(text.current.value);
            text.current.value = "";
         }
         else{
            text.current.className= "text redborder";
            text.current.value = text.current.value.trim();
             alert("Please enter something in text..");
         }
     }
    return(
        <>
            <div className="logo">
                <img src={logo} alt="logo"/>
            </div>
            <div className="list">
                <input type="text" id="text" className="text" placeholder="Let's do according to todoooo..." ref={text}/>
                <button id="addbtn" onClick={checkTxt} className="addbtn"><span>Add</span> <img src={plus} alt="plus icon"/></button>
            </div>
        </>
    )
}
export default AddNode;