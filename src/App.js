import AddNode from './components/addNode';
import TotalTask from './components/totalTask';
import TodoList from './components/todoList';
import './App.css';
import { useEffect, useState } from 'react';
function App() {
  let [appendNode, setappendNode] = useState([]);
  useEffect(()=>{
    const fetchdata = JSON.parse(localStorage.getItem('todo'));
    console.log("Fetch data ",fetchdata);
    setappendNode(appendNode = fetchdata ? fetchdata : []);
    console.log(appendNode, 'onerer');
  },[]);

  useEffect(()=>{
    console.log("Append Node ",appendNode);
    addIntoLocal(appendNode);
  },[appendNode])
  
  const addNode = (text)=>{
    setappendNode([...appendNode,{
        id : Date.now(),
        stat : false,
        text : text
    }])
  }
  const checkBox = (id)=>{
    const nodeIndex = appendNode.findIndex((node)=>node.id === id)
    const lists = [...appendNode];
    lists[nodeIndex].stat = !lists[nodeIndex].stat;
    setappendNode(lists);
  }

  const deleteNode = (id) =>{
    const nodeIndex = appendNode.findIndex((node)=>node.id === id)
    const lists = [...appendNode];
    lists.splice(nodeIndex,1);
    setappendNode(lists);
  }

  const editNode = (id,text) =>{
    const nodeIndex = appendNode.findIndex((node)=>node.id === id)
    const lists = [...appendNode];
    lists[nodeIndex].text = text;
    setappendNode(lists);
  }
  const addIntoLocal = (appendnode)=>{
    console.log("addedinto local");
    localStorage.setItem("todo",JSON.stringify(appendnode));
  }
  return (
    <div className="container">
      <AddNode addNode = {addNode} />
      <TotalTask appendNode={appendNode}/>
      <TodoList data = {appendNode ? appendNode : 0} checkBox = {checkBox} deleteNode = {deleteNode} editNode = {editNode}/>
    </div>
  );
}

export default App;
