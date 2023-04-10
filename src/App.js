import { useEffect, useState } from 'react';
import AddNode from './components/addNode';
import TodoList from './components/todoList';
import './App.css';

function App() {
  let [appendNode, setappendNode] = useState([]);
  
  useEffect(() => {
    const fetchdata = JSON.parse(localStorage.getItem('todo'));
    console.log("Fetch data ",fetchdata);
    setappendNode(fetchdata || []);
  }, []);

  useEffect(()=>{
    console.log("Append Node ",appendNode);
    localStorage.setItem("todo",JSON.stringify(appendNode));
  },[appendNode])

  const crudOperation = (id,ch,text) =>{
    const nodeIndex = appendNode.findIndex((node)=>node.id === id)
    const lists = [...appendNode];
    switch(ch){
      case 'add' : setappendNode([...appendNode,{
                    id : Date.now(),
                    stat : false,
                    text : text
                  }])
                  break;
      case 'check' : lists[nodeIndex].stat = !lists[nodeIndex].stat;
                      setappendNode(lists);
                      break;
      case 'delete' : lists.splice(nodeIndex,1);
                      setappendNode(lists);
                      break;
      case 'edit' : lists[nodeIndex].text = text;
                      setappendNode(lists);                  
                      break;
      default : alert('Something went wrong');
                      break;
    }
  }
  return (
    <div className="container">
      <AddNode crudOperation = {crudOperation}/>
      <TodoList data = {appendNode} crudOperation = {crudOperation}/>
    </div>
  );
}

export default App;
