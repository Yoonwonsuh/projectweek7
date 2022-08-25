import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import SignUp from "./pages/SignUp";
import Posting from "./pages/Posting";
import Profile from "./pages/Profile";
import DirectMessage from "./pages/DirectMessage";
import Detail from "./commponent/detail/Detail";
import "./App.scss";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/posting" element={<Posting />} />
      <Route path="/Profile/:id" element={<Profile />} />
      <Route path="/Direct" element={<DirectMessage />} />
      <Route path="/detail" element={<Detail />} />
    </Routes>
  );
}

export default App;
