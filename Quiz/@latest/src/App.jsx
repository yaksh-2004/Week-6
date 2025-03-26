import Quiz from "./components/Quiz";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Info from "./components/Info";
import { useEffect, useState } from "react";

function App() {

  const [toggle,setToggle]=useState(false)

  const handleToggle=()=>{
    setToggle(!toggle)
  }

  useEffect(() => {
  
    document.body.classList.toggle('dark-theme')
  }, [toggle])
  
  return (
    <>
      <BrowserRouter>
      <div className="text-right mr-20 mt-10">
      <button onClick={handleToggle} className="bg-white px-3 py-2">{!toggle===true ? "dark": "light"}</button>

      </div>
        <Routes>
          <Route path="/" element={<Info />}></Route>
          <Route path="/quiz" element={<Quiz />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
