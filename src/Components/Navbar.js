import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid py-3">

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item me-3">
                <NavLink to="/">Home</NavLink>
              </li>
              <li className="nav-item  me-3">
                <NavLink to="/form">Form</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/counter">Counter</NavLink>
              </li>
            </ul>

          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;