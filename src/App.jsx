import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GridView from "../src/GridView";
import Todo from "./Todo";
import Navbar from "./Navbar";
import ProfileCard from "./ProfileCard"
import "./ProfileCard.css"; // Import CSS

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Todo />} />
        <Route path="/gridview" element={<GridView />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App;

