import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Todo } from "./todo";
 
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
        const res = await fetch ("http://3.109.211.104:8001/todos");

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
        {todoList.map((todo, index) => (
          <Todo
            key={index} // Add a unique key for each item
            name={todo.title} // Directly access properties of each todo
            description={todo.description}
            priority={todo.priority}
            deadline={todo.deadline} // Use provided deadline or fallback
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