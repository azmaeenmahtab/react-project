import { Button } from "@mui/material";
import { useState, useEffect } from "react";

function DeleteTask({Id, todoList, setTodoList}) {
    
    
    // Handle the deletion of a specific task
    const handleDelete = async (taskId) => {
        if (!window.confirm("Are you sure you want to delete this task?")) return;

        try {
            // Delete the task with the given taskId
            const response = await fetch(`http://3.109.211.104:8001/todo/${taskId}`, {
                method: "DELETE",
            });

            if (response.ok) {
                console.log(`Task with ID ${taskId} deleted successfully.`);
                // Update the state to remove the deleted task
                setTodoList(() => todoList.filter((task) => task.id !== taskId));
            } else {
                console.error("Failed to delete task");
            }
        } catch (error) {
            console.error("Error deleting task:", error);
        }
    };

    return (
        <div>
            
             
             
                        <Button variant="contained" color="secondary" onClick={() => handleDelete(Id) }>Delete
</Button>
                     
        </div>
    );
}

export { DeleteTask };
