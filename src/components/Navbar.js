import React, { useState } from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Toggle from '@theme/Toggle';
import { useColorMode } from '@docusaurus/theme-common';

import styles from './Navbar.module.css';

function NavbarItem({ to, label, isDropdown, children }) {
  const href = useBaseUrl(to);

  return (
    <li className={`navbar__item ${
      isDropdown ? 'dropdown' : ''
    }`}>
      <Link
        className={isDropdown ? 'dropdown__link' : 'navbar__link'}
        to={href}>
        {label}
      </Link>
      {children}
    </li>
  );
}

function Navbar() {
  const { siteConfig } = useDocusaurusContext();
  const { title, tagline, url, baseUrl } = siteConfig;
  const [showDrawer, setShowDrawer] = useState(false);
  const { colorMode, setColorMode } = useColorMode();

  const toggleDrawer = () => {
    setShowDrawer(!showDrawer);
  };

  return (
    <nav className={`navbar navbar--fixed-top ${
      styles.customNavbar
    }`}>
      <div className="navbar__inner">
        <div className="navbar__items">
          <Link className="navbar__brand" to={useBaseUrl('/')}>
            <img
              className="navbar__logo"
              src={useBaseUrl('img/logo.png')}
              alt="AI Robotics Logo"
            />
            <strong className={styles.navbarTitleText}>AI Physical & Robotics</strong>
          </Link>
          <NavbarItem to="/docs/intro" label="Tutorial" />
          <NavbarItem to="/modules" label="Modules" />
          <NavbarItem to="/blog" label="Blog" />
        </div>
        <div className="navbar__items navbar__items--right">
          <NavbarItem href="https://github.com/AyeshaNasirWebDeveloper" label="GitHub" />
          <Toggle
            className={styles.displayOnlyInLargeViewport}
            checked={colorMode === 'dark'}
            onChange={(e) => setColorMode(e.target.checked ? 'dark' : 'light')}
            aria-label="Dark mode toggle"
          />
          <button
            className="navbar__toggle clean-btn"
            type="button"
            tabIndex={0}
            onClick={toggleDrawer}
            onKeyDown={toggleDrawer}
            aria-label="Navigation toggle"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 30 30"
              role="img"
              focusable="false"
            >
              <title>Menu</title>
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeMiterlimit="10"
                strokeWidth="2"
                d="M4 7h22M4 15h22M4 23h22"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className={`navbar-sidebar ${
        showDrawer ? 'navbar-sidebar--show' : ''
      }`}>
        <div className="navbar-sidebar__brand">
          <Link className="navbar__brand" to={useBaseUrl('/')}>
            <img
              className="navbar__logo"
              src={useBaseUrl('img/logo.png')}
              alt="AI Robotics Logo"
            />
            <strong className={styles.navbarTitleText}>AI Physical & Robotics</strong>
          </Link>
          <Toggle
            checked={colorMode === 'dark'}
            onChange={(e) => setColorMode(e.target.checked ? 'dark' : 'light')}
            aria-label="Dark mode toggle"
          />
        </div>
        <ul className="navbar-nav">
          <NavbarItem to="/docs/intro" label="Tutorial" onClick={toggleDrawer} />
          <NavbarItem to="/modules" label="Modules" onClick={toggleDrawer} />
          <NavbarItem to="/blog" label="Blog" onClick={toggleDrawer} />
          <NavbarItem href="https://github.com/AyeshaNasirWebDeveloper" label="GitHub" onClick={toggleDrawer} />
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
