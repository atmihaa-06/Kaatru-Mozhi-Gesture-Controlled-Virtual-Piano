import { Link } from "react-router-dom";
import Logo from "./Logo";

function Navbar() {
  return (
    <nav className="navbar">

      <Logo />

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/analytics">Analytics</Link>
        <Link to="/recordings">Recordings</Link>
        <Link to="/about">About</Link>
      </div>

    </nav>
  );
}

export default Navbar;