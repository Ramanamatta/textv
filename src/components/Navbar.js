import React from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom'

export default function Navbar(props) {
  return (
          <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} border border-dark`}  >
           <div className="container-fluid">
            <a className="navbar-brand" href="#">{props.title}</a>
            <buthrefn className="navbar-hrefggler" type="buthrefn" data-bs-hrefggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="hrefggle navigation">
              <span className="navbar-hrefggler-icon"></span>
            </buthrefn>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auhref mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="">Home</a>
                </li>
                {/* <li className="nav-item">
                  <a className="nav-link" href="#">About</a>
                </li> */}
              </ul>
              {/* <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <buthrefn className="btn btn-primary" type="submit">Search</buthrefn>
              </form> */} 
            </div>
            <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
                <input className="form-check-input" onClick={props.toogleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Darkmode</label>
              </div>
          </div>
        </nav>
  )
}
Navbar.propTypes={
  title:PropTypes.string
}
// Navbar.defaultProps={
//   title:"Ramnan"
// }