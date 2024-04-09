
// import './App.css'

import Header from "./components/Header";
import { BrowserRouter  , Routes , Route} from "react-router-dom";
import Blog from "./pages/Blog";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Userblog from "./pages/Userblog";
import Createblog from "./pages/Createblog";
import UpdateCard from "./components/UpdateCard";
import { Toaster } from 'react-hot-toast';


function App() {

  return (
    <>
    <BrowserRouter>
    <Header/>
    <Toaster/>
    <Routes>
      
      <Route  path="/" element = {<Blog/>}/>
      <Route  path="/blogs" element = {<Blog/>}/>
      <Route  path="/myblogs" element = {<Userblog/>}/>
      <Route  path="/createblog" element = {<Createblog/>}/>
      <Route  path="/login" element = {<Login/>}/>
      <Route  path="/register" element = {<Register/>}/>
      <Route  path="/updateblog" element = {<UpdateCard/>}/>

    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
