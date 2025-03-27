import Quiz from "./components/Quiz";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Info from "./components/Info";
import { useEffect, useState } from "react";
import { useTheme } from "./ThemeContext";

function App() {
const { theme, toggleTheme } = useTheme();
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100vh",
          background: theme === "light" ? "lightblue" : "darkblue",
          color: theme === "light" ? "black" : "white",

        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div>
            <div
              onClick={() => toggleTheme()}
              style={{
                border: "1px solid gray",
                position: "realtive",
                width: "40px",
                height: "20px",
                background: theme === "light" ? "white" : "black",
              }}
            >
              <div
                style={{
                  position: "relative",
                  top: "1px",
                  left: theme === "light" ? "1px" : "21px",
                  width: "16px",
                  height: "16px",
                  background: theme === "light" ? "black" : "white",
                }}
              ></div>
            </div>
          </div>
          <div
            style={{
              marginTop: "20px",
              color: theme === "light" ? "black" : "black",
            }}
          >
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Info />}></Route>
                <Route path="/quiz" element={<Quiz />}></Route>
              </Routes>
            </BrowserRouter>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
