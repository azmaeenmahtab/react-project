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
            <div>
                <h1>ITS HOME</h1>
                <Button onClick={gotoLoginPage}>Login</Button>
            </div>
        </>
    );
}

export { Home };
