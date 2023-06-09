import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import Alert from "./components/Alert";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };
  const toggleMode = () => {
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been enabled", "success");
    } else {
      setMode("dark");
      document.body.style.backgroundColor = "#272727";
      showAlert("Dark Mode has been enabled", "success");
    }
  };
  return (
    <>
      {/* <Router> */}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container">
        {/* <Routes> */}
        {/* <Route exact path="/about" element={<About />}></Route> */}
        {/* <Route
              exact
              path="/"
              element={ */}
        <TextForm showAlert={showAlert} heading="Enter Text Here" mode={mode} />
        {/* }
            ></Route> */}
        {/* </Routes> */}
      </div>
      {/* // </Router> */}
    </>
  );
}

export default App;
