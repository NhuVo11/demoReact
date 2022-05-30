import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./App.css";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navbar />} />
      </Routes>
    </div>
  );
}

export default App;
