import { Home } from "./components/home"
import { Create } from "./components/create"
import { Dashboard } from "./components/dashboard"
import "./App.css"
import { Login } from "./login"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  
  return (
    <>
    
      <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Create />} />
        <Route path="/dashboard" element={<Dashboard />} />
        
      </Routes>
    </Router>
        
    </>
  )
}

export default App
