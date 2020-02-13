
import React from 'react';

import styles from './Header.scss';

import { NavLink, Link } from 'react-router-dom';
const Header = () => {

  return (


    <header className={styles.component}>
      <div className={styles.wrapper}>
        <Link to='/' activeClassName='active'>
          Usługi Transportowe
        </Link>

        <nav className={styles.navx}>
          <NavLink exact to='/' activeClassName='active'>Strona Główna</NavLink>
          <NavLink exact to='/onas' activeClassName='active'>O nas</NavLink>
          <NavLink exact to='/oferta' activeClassName='active'>Oferta</NavLink>
          <NavLink exact to='/kontakt' activeClassName='active'>Kontakt</NavLink>


        </nav>
      </div>
    </header>

  );
}

export default Header;