import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Navbar from "./pages/Navbar";
import Login from "./pages/Login";
import Join from "./pages/Join";
import BoardWrite from "./pages/BoardWrite";
import Board from "./pages/Board";
import BoardDetail from "./pages/BoardDetail";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Join" element={<Join />} />
        <Route path="/board" element={<Board />} />
        <Route path="/board/write" element={<BoardWrite />} />
        <Route path="/boardDetail" element={<BoardDetail />} />
      </Routes>
    </div>
  );
}

export default App;
