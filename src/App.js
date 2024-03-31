import logo from "./logo.svg";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./assets/styles/style.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/home/Home";

import MainLayout from "./pages/MainLayout/index";

function App() {
  return (
    <Router>
      {/* <Header /> */}
      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<MainLayout />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
