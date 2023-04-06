const TotalTask = ({appendNode}) =>{
   return(
    <>
        <div className="total">
            <h3 className="task">Total Task <span className="total_num"  id="task">{appendNode.length}</span></h3>
            <h3 className="completed">Completed <span className="total_num"> <span id="outof">{appendNode.filter((node) => node.stat === true).length}</span> out of <span id="task1">{appendNode.length}</span></span></h3>
        </div>
    </>
   )
}
export default TotalTask;