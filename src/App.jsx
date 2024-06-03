import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Add from "./pages/Add";

function App() {
  
  return (
    <>
      <div>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/services" element={<Home/>}/>
          <Route path="/blog" element={<Home/>}/>
          <Route path="/add" element={<Add/>}/>
        </Routes>
        </BrowserRouter>
        </div>
    </>
  )
}

export default App
