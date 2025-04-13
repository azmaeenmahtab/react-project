import { Button } from "@mui/material"
import { DeleteTask } from "./deletetask"


function Todo ({name, completed}) {
    
    

    return <>
    <div style={{border: '1px solid black', width: '500px' , textAlign:"left" , padding:"10px", backgroundColor: priority > 5 ? "rgba(255, 0, 0, 0.4)" : "rgb(0, 187, 0)" , marginBottom: "15px", borderRadius:"20px"}}>
        <h3>Name of Task : {name}</h3>
        {/* <h3>Description : {description}</h3>
        <h3>Priority : {priority}</h3> */}
        <h3>Status : {completed}</h3>
        <div style={{display:"flex" , gap:"20px" }}>
            <Button variant="contained" style={{ color: "white"}}>Completed</Button>
             <DeleteTask Id={id} setTodoList={setTodoList} todoList={todoList}/>
        </div>
    </div>
    </>
    
}

export {Todo}