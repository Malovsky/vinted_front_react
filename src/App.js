import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Cookies from "js-cookie";
import Home from "./pages/Home";
import Offer from "./pages/Offer";
import Header from "./components/Header";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Publish from "./pages/Publish";
import Payment from "./pages/Payment";

function App() {
  const [isConnected, setIsConnected] = useState(Cookies.get("token") || null);

  return (
    <Router>
      <Header isConnected={isConnected} setIsConnected={setIsConnected} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/login"
          element={<Login setIsConnected={setIsConnected} />}
        />
        <Route
          path="/signup"
          element={<Signup setIsConnected={setIsConnected} />}
        />
        <Route path="/offer/:id" element={<Offer />} />
        <Route
          path="/publish"
          element={<Publish isConnected={isConnected} />}
        />
        <Route path="/payment" element={<Payment />} />
      </Routes>
    </Router>
  );
}

export default App;
