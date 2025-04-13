
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { useNavigate } from "react-router-dom"
function Login () {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPass] = useState("");
    
    const clickHandler = async () => {
        try{
        const res = await fetch ("https://todo-app-api-build.vercel.app/api/todos/login",{
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({
            
                "email": email,
                "password": password
              })
        })
        if(!res.ok){
            const error = await res.json();
            alert(error.message || `An error occured`);
            
            return;
        }

        const data = await res.json();
        console.log("Received Token:", data.token);

        localStorage.setItem("token", data.token)
        alert(data.msg || `Login successfull`)

        // localStorage.setItem("username", userName);

        setEmail("");
        setPass("");
        navigate("/dashboard");
    }catch(error){
        alert(`error occured ${error.message}`)

    }

  
    }

    return <div style={{background:'linear-gradient(to right, #fab2ff, #1904e5)', width : '1200px', height: '100vh ', paddingTop : '0px', marginTop:'0px', color:"black", display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
        <div>
        <div>LOGIN</div><br />
         <div style={{display : "flex", flexDirection : 'column' ,gap : '10px', width:'500px', margin:'0 auto'}}>
         <TextField className='textfieldDesign' placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
         <TextField className='textfieldDesign' placeholder="password" value={password} onChange={(e) => setPass(e.target.value)}/>
         <Button style={{color:'black', background:'#fd746a'}} variant="outlined" onClick={clickHandler}>LOGIN</Button>
         </div><br />
         <div>Dont have any acount ?  <Button style={{color:'black', background:'#fd746a', marginLeft:'10px'}} onClick={() => {
            navigate("/signup")
         }}>Sign Up Now</Button></div>
        </div>
    </div>

}

export { Login };