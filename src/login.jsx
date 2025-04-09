
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { useNavigate } from "react-router-dom"
function Login () {
    const navigate = useNavigate();
    const [userName, setUserName] = useState("");
    const [password, setPass] = useState("");
    
    const clickHandler = async () => {
        try{
        const res = await fetch ("https://5nvfy5p7we.execute-api.ap-south-1.amazonaws.com/dev/login",{
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({
            
                "username": userName,
                "password": password
              })
        })
        if(!res.ok){
            const error = await res.json();
            alert(error.message || `An error occured`);
            return;
        }

        const data = await res.json();
        alert(data.msg || `Login successfull`)

        localStorage.setItem("username", userName);

        setUserName("");
        setPass("");
        navigate("/dashboard");
    }catch(error){
        alert(`error occured ${error.message}`)

    }

  
    }

    return <div>
        <div>LOGIN</div><br />
         <div style={{display : "flex", flexDirection : 'column' ,gap : '10px'}}>
         <TextField placeholder="username" value={userName} onChange={(e) => setUserName(e.target.value)}/>
         <TextField placeholder="password" value={password} onChange={(e) => setPass(e.target.value)}/>
         <Button variant="outlined" onClick={clickHandler}>LOGIN</Button>
         </div><br />
         <div>Dont have any acount ?  <Button onClick={() => {
            navigate("/signup")
         }}>Sign Up Now</Button></div>

    </div>

}

export { Login };