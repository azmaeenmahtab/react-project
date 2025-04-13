import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { TextField } from '@mui/material';
import { useState } from 'react';
import { Button}from '@mui/material';
import { use } from 'react';
 

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    // display : 'flex',

    
  };
function CreateTodo ({updateTodoList}) {
    const [isOPen, setIsOpen] = useState(false)
    const [taskName , setTaskName] = useState("");
    // const [description , setDescription] = useState("");
    // const [priority , setPriority] = useState("");
    // const [deadline , setDeadline] = useState("");
    const [completed, setCompleted] = useState("false");

    const token = localStorage.getItem("token");

    const addTodo = async () => {
        
        const body = {
                "title": taskName,
                // "description": description,
                // "deadline":   new Date(deadline).toISOString(),
                // "priority": parseInt(priority)
                "completed": completed
        }

        const res = await fetch("https://todo-app-api-build.vercel.app/api/todos/",{
            method: "POST", 
            headers:{
                "Content-Type" : "application/json",
                "Authorization": `Bearer ${token}`,
            },
            body: JSON.stringify(body)
        })

        if(!res.ok){
            const error = await res.json();
            alert(error.message || "Error Occured");
            return;
        }

        const data = await res.json();
        alert("Task Added Successfully")

        setIsOpen(false)

        updateTodoList();
    }

    return <>
        <div>
            <Button variant="outlined" onClick={() => {
                setIsOpen(true);
            }}>Add Task</Button>
        </div>
        <Modal open={isOPen} onClose={() => setIsOpen(false)}>
        <Box sx={style}>
          <TextField placeholder="Task Name" value={taskName} onChange={(e) => setTaskName(e.target.value)} /><br /><br />
          {/* <TextField placeholder="Description"  value={description} onChange={(e) => setDescription(e.target.value)} /><br /><br />
          <TextField placeholder="Deadline" type="datetime-local"  value={deadline} onChange={(e) => setDeadline(e.target.value)} /><br /><br /> */}
          <TextField placeholder="Status"  value={completed} onChange={(e) => setCompleted(e.target.value)} />
          <br /><br />
          <Button variant='contained' onClick={addTodo}>Create</Button>
        </Box>
      </Modal>
    
    </>
}

export {CreateTodo}