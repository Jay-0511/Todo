import { useState } from 'react';
import logo from '../assets/images/logo.png';
import plus from '../assets/images/plus-icon.png';
const AddNode = ({crudOperation})=>{
    const [textInput,settextInput] = useState("");
    const inputHandler = (e) =>{
        settextInput(e.target.value)
    }
     const checkTxt= () =>{
        if(textInput.trim()){
            crudOperation(0,'add',textInput);
        }
        else{
            alert("Please enter something in text..");
        }
        settextInput("");
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