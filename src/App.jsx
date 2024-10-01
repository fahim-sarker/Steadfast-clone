import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider}from "react-router-dom";
import Rootlayout from "./components/Rootlayout";
import Home from "./pages/Home";
import Pricing from "./pages/Pricing";
import Area from "./pages/Area";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Track from "./pages/Track";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

let router = createBrowserRouter(createRoutesFromElements(
  <Route element={<Rootlayout/>}>
    <Route index element={<Home/>}></Route>
    <Route path="/price" element={<Pricing/>}></Route>
    <Route path="/area" element={<Area/>}></Route>
    <Route path="/about" element={<About/>}></Route>
    <Route path="/contact" element={<Contact/>}></Route>
    <Route path="/track" element={<Track/>}></Route>
    <Route path="/signup" element={<Signup/>}></Route>
    <Route path="/login" element={<Login/>}></Route>
  </Route>
))

function App() {
  return (
   <>
    <RouterProvider router={router} />
   </>
  )
}

export default App
