import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
function Dashboard () {
    const navigate = useNavigate();

    useEffect(( ) => {
        const username = localStorage.getItem("username");
        if(!username){
            navigate("/login");
        }

    },[])

    return <>
        <div>
            <div>
                Welcome {username}
            </div>
        </div>
    </>
}

export {Dashboard}