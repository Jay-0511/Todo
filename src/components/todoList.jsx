import clipboardimg from '../images/Clipboard.png';
import Showlist from './showList';
const TodoList = (props) =>{
    console.log(props);
    const addIntoLocal = (appendnode)=>{
        localStorage.setItem("todo",JSON.stringify(appendnode));
    }
    if(props.data.length === 0){
            return(
            <>
                <div className="empty-list" id="empty">
                    <img src={clipboardimg} alt="Clipboard"/>
                    <p>Your todo list is empty</p>
                </div>
            </>
        )
    }
    console.log("Props.data",props.data);
    addIntoLocal(props.data);
    return(
        <div className="todo-list" id="todo-list">
            {props.data.map((data)=> <Showlist myId={data.id} key={data.id} text={data.text} stat={data.stat} checkBox={props.checkBox} deleteNode={props.deleteNode} editNode={props.editNode}/>)}
        </div>
    )
}
export default TodoList;