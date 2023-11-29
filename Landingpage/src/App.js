import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Package from "./pages/Package";
import Destination from "./pages/Destination";
import Review from "./pages/Review";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/package" element={<Package />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/review" element={<Review />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
