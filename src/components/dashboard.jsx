import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Todo } from "./todo";
import { Stopwatch } from "./stopwatch";
 
import { CreateTodo } from "./createTodoModal";
function Dashboard () {
    const navigate = useNavigate();

    useEffect(( ) => {
        const username = localStorage.getItem("username");
        if(!username){
            navigate("/login");
        }
        getTodoList();
    },[])

    const [todoList, setTodoList] = useState([]);
    async function getTodoList () {
        const res = await fetch ("https://5nvfy5p7we.execute-api.ap-south-1.amazonaws.com/dev/todos");

        if(!res.ok){
            const err = await res.json();
            alert("Couldn't Fetch properly")
            return;
        }

        const data = await res.json();
        setTodoList(data);
        // console.log(todoList)
    }

    return <>
        <div>
      <div>
      <Stopwatch />
        {todoList.map((todo, index) => (
          <Todo
            id={todo.id}
            key={index} // Add a unique key for each item
            name={todo.title} // Directly access properties of each todo
            description={todo.description}
            priority={todo.priority}
            deadline={todo.deadline}
            todoList={todoList}
            setTodoList={setTodoList}
           />
        ))}
      </div>
      <br />
      <br />
      <CreateTodo updateTodoList={getTodoList}/>
    </div>
    </>
}

export {Dashboard}