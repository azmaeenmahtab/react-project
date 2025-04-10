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
            "phone": phone,
            "username": userName,
            "password": password,
            "profile_picture": ""
        }
        
        const response = await fetch("https://5nvfy5p7we.execute-api.ap-south-1.amazonaws.com/dev/register", {
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

    return <>
        <div style={{background:'#F0F4F3', width : '1200px', height: '100vh ', paddingTop : '0px', marginTop:'0px'}}>
        <div style={{display:'flex', alignItems:'start', position:'absolute'}}>
                    <img src="../src/assets/shape.png" alt="" />
                </div>
        <div  style={{position:'relative', top:'50px'}}>
        <div>
            <h1 className='poppins'>Welcome to Onboard! </h1>

            <h4 className='poppins'>Let’s help to meet up your tasks.</h4>
        </div>
        <br />
         <div style={{display : "flex", flexDirection : 'column' ,gap : '10px', width:'500px', margin:' 0 auto'}}>
         <TextField placeholder="name" value={name} onChange={(e) => setName(e.target.value)}  />
         <TextField placeholder="username" value={userName} onChange={(e) => setUserName(e.target.value)}  />
         <TextField placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
         <TextField placeholder="phone" value={phone} onChange={(e) => setPhone(e.target.value)}/>
         <TextField placeholder="password" value={password} onChange={(e) => setPass(e.target.value)}/>
         <TextField placeholder="confirm password" value={Cpass} onChange={(e) => setCpass(e.target.value)}/>
         <Button className='poppins' variant="outlined" onClick={handleClick} style={{color:'white', backgroundColor:'#50C2C9'}}>Sign Up</Button>
         </div><br />
           
         </div>
    </div>
    </>
}

export {Create};