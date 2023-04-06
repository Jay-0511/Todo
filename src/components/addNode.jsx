import logo from '../images/logo.png';
import plus from '../images/plus-icon.png';
const AddNode = (props)=>{
    let text = "";
     const checkTxt= () =>{
         text = document.getElementById("text").value.trim();
         if(text!= ""){
             props.addNode(text);
            document.getElementById("text").value = "";
         }
         else{
             document.getElementById("text").classList.add('redborder');
             document.getElementById("text").value = text.trim();
             alert("Please enter something in text..");
         }
     }
    
    return(
        <>
            <div className="logo">
                <img src={logo} alt="logo"/>
            </div>
            <div className="list">
                <input type="text" id="text" className="text" placeholder="Let's do according to todoooo..."/>
                <button id="addbtn" onClick={checkTxt} className="addbtn"><span>Add</span> <img src={plus} alt="plus icon"/></button>
            </div>
        </>
    )
}
export default AddNode;