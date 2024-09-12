import React, { Fragment } from "react";
import { useNavigate } from "react-router-dom";

const navMenu = [
    {
    pathName : 'Counter',
    routeLink : '/'
    },
    {
        pathName : 'Form',
        routeLink : '/form'
    },
    {
        pathName : 'Login',
        routeLink : '/login'
    }

];
const Header = () => {

     const navigate = useNavigate()

    const handleRoute = (path) => {
          navigate(path)
    }
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {navMenu.map((item) => (
                <li className="nav-item" key={item.pathName}>
                  <a className="nav-link active" aria-current="page" role="button" onClick={()=> {handleRoute(item.routeLink)}}>
                    {item.pathName}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
