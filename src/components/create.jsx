import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { useNavigate } from "react-router-dom"
function Create () {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPass] = useState("");
    const [Cpass, setCpass] = useState("");

    async function handleClick() {
        if(Cpass !== password){
            alert("password didnt match");
            return;
        }
        const body = {
            "name": name,
            "email": email,
            // "phone": phone,
            // "username": userName,
            "password": password,
            // "profile_picture": ""
        }
        
        const response = await fetch("https://todo-app-api-build.vercel.app/api/todos/register", {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(body)
        });

        if (!response.ok) {
            const error = await response.json();
            alert(error.message || "An error occurred");
            return;
        }

        const data = await response.json();
        alert(data.msg || "Signup successful");

        setName("")
        setEmail("")
        setPhone("")
        setPass("")
        setCpass("")
        setUserName("")
        navigate("/login")

    }

    const gotoLogin = () => {
        navigate("/login");
    }

    return <div>
        <div className='poppins' style={{background:'linear-gradient(to right, #fab2ff, #1904e5)', width : '1200px', height: ' ', paddingTop : '0px', marginTop:'0px', color:"black"}}>
        <div style={{display:'flex', alignItems:'start', position:'absolute'}}>
                    {/* <img src="../src/assets/shape.png" alt="" /> */}
        </div>
        <div  style={{position:'relative', top:'50px', paddingBottom:"50px"}}>
        <div>
            <h1 className='poppins'>Welcome to Onboard! </h1>

            <h4 className='poppins'>Let’s help to meet up your tasks.</h4>
        </div>
        <br />
         <div style={{display : "flex", flexDirection : 'column' ,gap : '10px', width:'500px', margin:' 0 auto'}}>
         <TextField className='textfieldDesign' placeholder="name" value={name} onChange={(e) => setName(e.target.value)}  />
         <TextField className='textfieldDesign' placeholder="username" value={userName} onChange={(e) => setUserName(e.target.value)}  />
         <TextField className='textfieldDesign' placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
         <TextField className='textfieldDesign' placeholder="phone" value={phone} onChange={(e) => setPhone(e.target.value)}/>
         <TextField className='textfieldDesign' placeholder="password" value={password} onChange={(e) => setPass(e.target.value)}/>
         <TextField className='textfieldDesign' placeholder="confirm password" value={Cpass} onChange={(e) => setCpass(e.target.value)}/>
         <Button className='poppins' variant="outlined" onClick={handleClick} style={{color:'black', background:'#fd746a'}}>Sign Up</Button>
         <h4 style={{marginRight:'10px'}}>Already have an account? <Button className='poppins'  style={{color:'black', backgroundColor:'#fd746a', marginLeft:'10px', borderRadius:'10px'}} variant="outlined" onClick={gotoLogin}>Login Now</Button></h4>
         </div><br />
           
         </div>
    </div>

    </div>
    
}

export {Create};