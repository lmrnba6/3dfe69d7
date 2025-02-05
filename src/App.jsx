import React, { useContext } from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom"; // Import router components
import Calls from "./pages/Calls";
import Loader from "./components/Loader";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./css/app.css";
import { AppContext } from "./context/AppContext";
import Dial from "./pages/Dial";

function App() {
  const { loading } = useContext(AppContext);
  return (
    <Router>
      <div className="container">
        <Loader loading={loading} />
        <Header />
        <Routes>
          <Route path="/" element={<Calls />} />
          <Route path="/dial" element={<Dial />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
