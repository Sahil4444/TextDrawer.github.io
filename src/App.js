import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [themeText, setThemeText] = useState("Enable Dark Mode");
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      setThemeText("Disable Dark Mode");
      document.body.style.backgroundColor = "#212529";
      document.body.style.color = "white";
    } else {
      setMode("light");
      setThemeText("Enable Dark Mode");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    }
  };
  return (
    <>
      {/* <Router> */}
        <Navbar mode={mode} toggleMode={toggleMode} themeText={themeText} />
        <div className="container mt-4">
          {/* <Routes> */}
            {/* <Route
              exact
              path="/"
              element={
                <TextForm
                  mode={mode}
                  toggleMode={toggleMode}
                  themeText={themeText}
                />
              }
            /> */}
            <TextForm
                  mode={mode}
                  toggleMode={toggleMode}
                  themeText={themeText}
                />
            
            {/* <Route path="/about" element={<About />} /> */}
          {/* </Routes> */}
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;
