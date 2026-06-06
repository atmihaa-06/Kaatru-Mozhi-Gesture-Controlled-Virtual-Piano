import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Analytics from "./pages/Analytics";
import Recordings from "./pages/Recordings";
import About from "./pages/About";
import Piano from "./pages/Piano";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/recordings" element={<Recordings />} />
        <Route path="/about" element={<About />} />

        <Route path="/piano" element={<Piano />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;