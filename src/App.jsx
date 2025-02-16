import React from "react";
import Home from "./Components/Home";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import Details from "./Components/Details";
import Creat from "./Components/Creat";
import Edit from "./Components/Edit";

const App = () => {
 const {search,pathname} =  useLocation();
 console.log(pathname);
 
  return (
    <>
     
      <div className=" w-full h-screen flex">
        {(pathname != "/"|| search.length > 0) && (<Link to="/"  className="text-red-600 absolute left-[20%] top-5 rounded-md border-2 border-slate-600 py-1 px-5">Home</Link>)}
     
      
       <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/Details/:id" element={<Details/>}></Route>
        <Route path="/Creat" element={<Creat/>}></Route>
        <Route path="/Edit/:id" element={<Edit/>}></Route>
        
       </Routes>

      </div>
    </>
  );
};

export default App;
