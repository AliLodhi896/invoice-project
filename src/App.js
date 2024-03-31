import logo from "./logo.svg";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./assets/styles/style.css";
import Home from "./pages/home/Home";
import Invoices from "./pages/MainLayout/Invoices";
import Customers from "./pages/MainLayout/Customers";

function App() {
  return (
    <Router>
      {/* <Header /> */}
      {/* <main className="main"> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin/invoices" element={<Invoices />} />
          <Route path="/admin/customers" element={<Customers />} />

          {/*  */}
        </Routes>
      {/* </main> */}
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
