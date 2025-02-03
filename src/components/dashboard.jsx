import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { Todo } from "./todo";
 
import { CreateTodo } from "./createTodoModal";
function Dashboard () {
    const navigate = useNavigate();

    // useEffect(( ) => {
    //     const username = localStorage.getItem("username");
    //     if(!username){
    //         navigate("/login");
    //     }

    // },[])


    return <>
        <div>
            <div>
                <Todo name="ezaz" priority={6}/>
            </div>
            <br /><br />
            <CreateTodo />
        </div>
    </>
}

export {Dashboard}