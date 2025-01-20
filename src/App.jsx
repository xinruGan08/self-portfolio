import { BrowserRouter, Routes, Route, Link } from "react-router"
import Home from "./pages/Home"
import Layout from './components/Layout'
import About from "./pages/About"
import Project from "./pages/Project"
import Achievements from "./pages/Achievements"


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element = {<Layout/>}>
          <Route index element ={<Home/>}/>
          <Route path="about" element={<About/>}/>
          <Route path="contact"/>
          <Route path="projects" element={<Project/>}/>
          <Route path="certification" element = {<Achievements/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
