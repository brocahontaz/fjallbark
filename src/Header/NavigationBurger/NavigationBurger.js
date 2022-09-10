import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { NavHashLink } from 'react-router-hash-link';

import './NavigationBurger.css';

function NavigationBurger({ links }) {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleToggle = () => {
    setNavbarOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setNavbarOpen(false);
  };

  return (
    <div className="NavigationBurger">
      <button type="button" onClick={handleToggle}>
        { !navbarOpen ? <FontAwesomeIcon icon={faBars} size="2x" /> : <FontAwesomeIcon icon={faXmark} size="2x" /> }
      </button>

      <div className={`Navbar ${navbarOpen ? 'Open' : ''}`}>
        {links.map((link) => (
          <NavHashLink
            key={`nav-${link}`}
            smooth
            to={`#${link}`}
            className={({ isActive }) => `nav-link${isActive ? ' selected' : ''}`}
            activeClassName="selected"
            onClick={() => closeMenu()}
          >
            {link.toUpperCase()}
          </NavHashLink>
        ))}
      </div>
    </div>
  );
}

NavigationBurger.propTypes = {
  links: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default NavigationBurger;
