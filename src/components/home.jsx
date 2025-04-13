import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
 


function Home() {
    const navigate = useNavigate();
 

    // Function to handle manual navigation
    const gotoLoginPage = () => {
        navigate("/login");
    };

    const gotoCreate = () => {
        navigate("/signup");
    }

    return (
        <>
            <div style={{background:'linear-gradient(to right, #fab2ff, #1904e5)', width : '1200px', height: '100vh', paddingTop : '0px'}}>
                <div style={{display:'flex', alignItems:'start', position:'absolute'}}>
                    {/* <img src="../src/assets/shape.png" alt="" /> */}
                </div>
                <div  style={{position:'relative', top:'100px'}}>
                <div>
                    <img src="../src/assets/logo.png" alt="" />
                </div>
                <h1 className="poppins">Gets things with TODOs</h1>
                <h4  className="poppins" style={{maxWidth:'500px', textAlign:'center', margin:'0 auto', marginBottom:'30px'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit voluptatem molestiae assumenda vero rerum deleniti quas, odit soluta nobis, aliquam esse quaerat, natus molestias nostrum totam sunt facere hic earum!</h4>
                <Button  className="poppins" style={{backgroundColor:'#50C2C9', color:'white', width:'25%', fontWeight:'bold'}} onClick={gotoCreate}>Get Started</Button>
                {/* <Button onClick={gotoLoginPage}>Login</Button> */}
                </div>
            </div>
        </>
    );
}

export { Home };
