import clipboardimg from '../images/Clipboard.png';
import Showlist from './showList';
const TodoList = ({data,crudOperation}) =>{
    console.log("data is ",data);
    return(
        <>
            <div className="total">
                <h3 className="task">Total Task <span className="total_num"  id="task">{data.length}</span></h3>
                <h3 className="completed">Completed <span className="total_num"> <span id="outof">{data.filter((node) => node.stat === true).length}</span> out of <span id="task1">{data.length}</span></span></h3>
            </div>
            {data.length === 0 && 
                <div className="empty-list" id="empty">
                    <img src={clipboardimg} alt="Clipboard"/>
                    <p>Your todo list is empty</p>
                </div>
            }
            <div className="todo-list" id="todo-list">
                {data.map((data)=> <Showlist data={data} key={data.id} crudOperation = {crudOperation}/>)}
            </div>
        </>
    )
}
export default TodoList;