import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

// Icons's imports
import {MdFingerprint} from 'react-icons/md';
import {FaBars, FaTimes} from 'react-icons/fa';
import {IconContext} from 'react-icons/lib';

import {Button} from '../Button/index';

import './index.css';

export function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(false);

  function handleClick () {
    setClick(!click);
  }

  function handleCloseMobileMenu () {
    setClick(false);
  }

  function handleShowButton () {
    if (window.innerWidth < 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  }

  useEffect(() => {
    handleShowButton();
  }, []);

  // Event to listiner the brozer's window size
  window.addEventListener('resize', handleShowButton);

  return(
    <>
      <IconContext.Provider value={{color: '#fff'}}>
        <div className="navbar">
          <div className="navbar-container container">

            <Link className="navbar-logo" to="/" onClick={handleCloseMobileMenu}>
              <MdFingerprint className="navbar-icon" />
              Lavish
            </Link>

            <div className="menu-icon" onClick={handleClick}>
              {click ? <FaTimes color="#fff"/> : <FaBars color="#fff"/>}
            </div>

            <ul className={click ? 'nav-menu active' : 'nav-menu'}>

              <li className="nav-item" onClick={handleCloseMobileMenu}>
                <Link className="nav-links" to="/">
                  Home
                </Link>
              </li>

              <li className="nav-item" onClick={handleCloseMobileMenu}>
                <Link className="nav-links" to="/services">
                  Services
                </Link>
              </li>

              <li className="nav-item" onClick={handleCloseMobileMenu}>
                <Link className="nav-links" to="/products">
                  Products
                </Link>
              </li>

              <li className="nav-btn">
                {button ? (
                  <Link className="btn-link" to="/sign-up">
                    <Button buttonStyle="btn--outline">Sign Up</Button>
                  </Link>
                ) : (
                  <Link className="btn-link" to="/sign-up" onClick={handleCloseMobileMenu}>
                    <Button 
                      buttonStyle="btn--outline"
                      buttonSize="btn-mobile"
                    >
                      Sign Up
                    </Button>
                  </Link>
                )}
              </li>

            </ul>
          </div>
        </div>
      </IconContext.Provider>
    </>
  );
}