import React, { useState } from "react"
import { Link } from "gatsby"
import { slide as Menu } from 'react-burger-menu';
import * as styles from "./header.module.css"
import "./burgerMenu.css"


const Header = ({ siteTitle }) => {

  const [isMenuOpen, setIsMenuOpen] = useState(false); // メニューの開閉状態を管理

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return(
  <header>
    <div className={styles.title}>
      <Link
      className={styles.titleLink}
      to="/"
    >
      <h1 className={styles.h1}>
        {siteTitle}
      </h1>
    </Link>
    </div>

    <nav className={styles.globalNav}>
      <ul className={styles.navList}>
      <Link
      className={styles.navLink}
      to="/latest"
      >
        <li>最新</li>
      </Link>
      <Link
      className={styles.navLink}
      to="/discography"
      >
        <li>年別アーカイブ</li>
      </Link>
      <Link
      className={styles.navLink}
      to="/annualRanking"
      >
        <li>年間ランキング</li>
      </Link>
      <Link
      className={styles.navLink}
      to="/about"
      >
        <li>このサイトについて</li>
      </Link>
      </ul>
    </nav>

    <Menu right>
        <a className="menu-item" href="/latest">
          最新
        </a>
        <a className="menu-item" href="/discography">
          年別アーカイブ
        </a>
        <a className="menu-item" href="/annualRanking">
          年間ランキング
        </a>
        <a className="menu-item" href="/about">
          このサイトについて
        </a>
      </Menu>

  </header>
  )
}

export default Header
