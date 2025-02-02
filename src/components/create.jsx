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
        
        const response = await fetch("http://3.109.211.104:8001/register", {
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
        
        <div>
        <div>SIGN UP</div><br />
         <div style={{display : "flex", flexDirection : 'column' ,gap : '10px'}}>
         <TextField placeholder="name" value={name} onChange={(e) => setName(e.target.value)}  />
         <TextField placeholder="username" value={userName} onChange={(e) => setUserName(e.target.value)}  />
         <TextField placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
         <TextField placeholder="phone" value={phone} onChange={(e) => setPhone(e.target.value)}/>
         <TextField placeholder="password" value={password} onChange={(e) => setPass(e.target.value)}/>
         <TextField placeholder="confirm password" value={Cpass} onChange={(e) => setCpass(e.target.value)}/>
         <Button variant="outlined" onClick={handleClick}>Sign Up</Button>
         </div><br />
           

    </div>
    </>
}

export {Create};