import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Navbar from "./pages/Navbar";
import Login from "./pages/Login";
import BoardWrite from "./pages/BoardWrite";
import Board from "./pages/Board";
import BoardDetail from "./pages/BoardDetail";
import PostEdit from "./component/PostEdit";
import Signup from "./pages/Signup";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/board" element={<Board />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/board/write" element={<BoardWrite />} />
        <Route path="/boardDetail/:id" element={<BoardDetail />} />
        <Route path="/postEdit" element={<PostEdit />} />
      </Routes>
    </div>
  );
}

export default App;
