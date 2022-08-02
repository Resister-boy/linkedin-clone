import React from "react";
import styles from '../scss/Header.module.scss';

function Header() {
  return (
    <div>
      <h1>Header</h1>
      <div className="header__left">
        <img src="" alt="" />
        <div className="header__search">
           <input type="text" />
        </div>
      </div>
      <div className="header__right"></div>
    </div>
  );
}

export default Header;