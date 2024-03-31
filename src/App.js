import logo from "./logo.svg";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./assets/styles/style.css";
import Home from "./pages/home/Home";
import Invoices from "./pages/MainLayout/Invoices";
import Customers from "./pages/MainLayout/Customers";
import Dashboard from "./pages/MainLayout/Dashboard";
import Transactions from "./pages/MainLayout/Transactions";

function App() {
  return (
    <Router>
      {/* <Header /> */}
      {/* <main className="main"> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin/invoices" element={<Invoices />} />
        <Route path="/admin/customers" element={<Customers />} />
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/transactions" element={<Transactions />} />
        {/*  */}
      </Routes>
      {/* </main> */}
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
