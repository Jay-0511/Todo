import { useEffect, useRef, useState } from "react"
const Showlist = ({data,crudOperation}) =>{
    console.log(data.stat);
    const editableDiv = useRef();
    const [disable,setDisable] = useState(true);

    const Blur = () =>{
        setDisable(true);
        if(editableDiv.current.value){
            editableDiv.current.className = "noline";
            crudOperation(data.id,'edit',editableDiv.current.value);
        }
        else{
            editableDiv.current.focus();
            editableDiv.current.className = "noline redborder"
        }
    }

    useEffect(() => {
        if(!disable) {
            editableDiv.current.focus();
        }else {
            editableDiv.current.blur();
        }
    }, [disable])

    const editEnable=()=>{
        setDisable(false);
    }
    return(
        <>
        <div className="todo" id="nodeid" > 
            <div className="textcontainer">
                {data.stat ?  
                    <i className="fa fa-check" aria-hidden="true" onClick={() =>{crudOperation(data.id,'check')}}></i> 
                    :
                    <input type="checkBox" id="checkBox" className="checkbox" onChange={() =>{crudOperation(data.id,'check')}} /> 
                } 
                <input type="text" className={data.stat ? 'line' : 'noline'} ref={editableDiv} defaultValue={data.text} onBlur={data.stat ? ()=>{} : Blur} disabled={disable}/>
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