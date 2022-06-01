import { Route, Routes } from "react-router-dom";
import "./App.css";
import Products from "./components/Products";
import Services from "./components/Services";
import SignUp from "./components/SignUp";
import { Home } from "./pages/Home";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<Services />} />
        <Route path="/products" element={<Products />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
