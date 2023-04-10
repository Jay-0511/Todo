import { useRef, useState } from "react"

const Showlist = ({data,crudOperation}) =>{
    
    const editableDiv = useRef();
    const [disable,setDisable] = useState(true);

    const Blur = () =>{
        if(editableDiv.current.value){
            setDisable(true);
            editableDiv.current.className = "noline";
            crudOperation(data.id,'edit',editableDiv.current.value);
        }
        else{
            editableDiv.current.focus();
            editableDiv.current.className = "noline redborder"
        }
    }
    const editEnable=()=>{
        setDisable(false);
        console.log("Disable is ",disable);
        editableDiv.current.focus();
    }
    return(
        <>
        <div className="todo" id="nodeid" > 
            <div className="textcontainer">
                {data.stat ? 
                <> 
                    <i className="fa fa-check" aria-hidden="true" onClick={() =>{crudOperation(data.id,'check')}}></i> 
                    <div className="line">{data.text}</div>
                </> : 
                <> 
                    <input type="checkBox" id="checkBox" className="checkbox" onChange={() =>{crudOperation(data.id,'check')}} /> 
                    <input type="text" className="noline" ref={editableDiv} defaultValue={data.text} onBlur={Blur} disabled={disable}/>
                </>
                }
            </div>
            <div className="icons">
                <i id="editNode" className={data.stat ? 'fas fa-edit not-allowed' : 'fas fa-edit'}  onClick={data.stat ? ()=>{} : editEnable}></i> 
                <i id="deleteNode" className="fas fa-trash-alt" onClick={()=>{crudOperation(data.id,'delete')}}></i>
            </div>
        </div>
         </>
    )
}
export default Showlist;