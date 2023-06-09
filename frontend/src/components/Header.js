import React from 'react';
import { Routes, Route, Link } from "react-router-dom";

import headerLogo from "./../images/svg/logo.svg"

function Header({ signOut, email }) {
  return (
    <header className="header">
      <img
        src={headerLogo}
        alt="Логотип страници"
        className="header__logo" />
      <div className="header__info">

        <Routes>

          <Route
            path="/mesto"
            element={
              <>
                <span className="header__email">{email}</span>
                <Link
                  to="/signin"
                  onClick={signOut}
                  className="header__link header__link-logout">Выйти</Link>
              </>
            }
          />

          <Route
            path="/signup"
            element={
              <Link
                to="/signin"
                onClick={signOut}
                className="header__link">Войти</Link>}
          />

          <Route
            path="/signin"
            element={
              <Link
                to="/signup"
                className="header__link">Регистрация</Link>}
          />

        </Routes>
      </div >
    </header>

  )
}

export default Header;
