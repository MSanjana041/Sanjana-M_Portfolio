import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="nav">
      <div className="nav-inner">
        <ul className="nav-links">
          <li><Link to="/">&lt;/Home&gt;</Link></li>
          <li><Link to="/about">&lt;/About&gt;</Link></li>
          <li><Link to="/projects">&lt;/Projects&gt;</Link></li>
          <li><Link to="/skills">&lt;/Tech Stack&gt;</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
