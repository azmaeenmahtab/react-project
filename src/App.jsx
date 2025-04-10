import { Home } from "./components/home"
import { Create } from "./components/create"
import { Dashboard } from "./components/dashboard"
import "./App.css"
import { Login } from "./login"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CreateTodo } from "./components/createTodoModal"


function App() {
  
  return (
    <>
    
      <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/register" element={<Login />} /> */}
        <Route path="/signup" element={<Create />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/createtodomodal" element={<CreateTodo />} />
        
      </Routes>
    </Router>
        
    </>
  )
}

export default App
