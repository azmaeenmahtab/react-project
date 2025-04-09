import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
 


function Home() {
    const navigate = useNavigate();
 

    // Function to handle manual navigation
    const gotoLoginPage = () => {
        navigate("/login");
    };

    return (
        <>
            <div style={{background:'', width : '1200px', height: '100vh', paddingTop : '50px'}}>
                <div style={{display:'flex', alignItems:'start'}}>
                    <img src="../src/assets/shape.png" alt="" />
                </div>
                <div>
                    <img src="../src/assets/logo.png" alt="" />
                </div>
                <h1 className="poppins">Gets things with TODOs</h1>
                <h4  className="poppins">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit voluptatem molestiae assumenda vero rerum deleniti quas, odit soluta nobis, aliquam esse quaerat, natus molestias nostrum totam sunt facere hic earum!</h4>
                <Button  className="poppins" style={{backgroundColor:'#50C2C9', color:'white'}}>Get Started</Button>
                {/* <Button onClick={gotoLoginPage}>Login</Button> */}
            </div>
        </>
    );
}

export { Home };
