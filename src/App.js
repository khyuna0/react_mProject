import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Navbar from "./pages/Navbar";
import Login from "./pages/Login";
import Join from "./pages/Join";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Join" element={<Join />} />
      </Routes>
    </div>
  );
}

export default App;
