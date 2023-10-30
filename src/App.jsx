import { Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import About from "./component/About";
import ProductDetails from "./page/ProductDetails";
import Login from "./component/Auth/Login";
import SignUp from "./component/Auth/SignUp";
function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/singUp" element={<SignUp />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
    </div>
  );
}

export default App;
