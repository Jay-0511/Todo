import { useRef, useState, useEffect } from 'react';
import logo from '../images/logo.png';
import plus from '../images/plus-icon.png';
const AddNode = (props)=>{
    const [textInput,settextInput] = useState("");
    const inputHandler = (e) =>{
        settextInput(e.target.value)
    }
     const checkTxt= () =>{
        //  if(text.current.value){
        //     props.addNode(text.current.value);
        //     text.current.value = "";
        //  }
        //  else{
        //     text.current.className= "text redborder";
        //     text.current.value = text.current.value.trim();
        //      alert("Please enter something in text..");
        //  }
        if(textInput){
            props.addNode(textInput);
            settextInput("");
        }
        else{
            alert("Please enter something in text..");
        }
     }
    return(
        <>
            <div className="logo">
                <img src={logo} alt="logo"/>
            </div>
            <div className="list">
                <input type="text" id="text" className="text" value={textInput} placeholder="Let's do according to todoooo..." onChange={inputHandler}/>
                <button id="addbtn" onClick={checkTxt} className="addbtn"><span>Add</span> <img src={plus} alt="plus icon"/></button>
            </div>
        </>
    )
}
export default AddNode;