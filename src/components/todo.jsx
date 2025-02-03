import { Button } from "@mui/material"


function Todo ({name, description, priority, deadline}) {

    return <>
    <div style={{border: '1px solid black', width: '500px' , textAlign:"left" , padding:"10px", backgroundColor: priority > 5 ? "rgba(255, 0, 0, 0.4)" : "green"}}>
        <h3>Name of Task : {name}</h3>
        <h3>Description : {description}</h3>
        <h3>Priority : {priority}</h3>
        <h3>Deadline: {deadline}</h3>
        <div>
            <Button variant="outlined">Completed</Button>
        </div>
    </div>
    </>
    
}

export {Todo}