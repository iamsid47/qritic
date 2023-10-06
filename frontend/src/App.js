import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Pages/Home";
import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";
import Dash from "./components/Dashboard/Dash";
import Account from "./components/Dashboard/Account";
import Billing from "./components/Dashboard/Billing";
import History from "./components/Dashboard/History";
import Contact from "./components/Pages/Contact";
import Pricing from "./components/Pages/Pricing";
import WhyQritic from "./components/Pages/WhyQritic";
import Playground from "./components/Pages/Playground";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/dashboard/*" element={<Dash />} />
        <Route path="/dashboard/account" element={<Account />} />
        <Route path="/dashboard/billing" element={<Billing />} />
        <Route path="/dashboard/history" element={<History />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/why" element={<WhyQritic />} />
        <Route path="/playground" element={<Playground />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
