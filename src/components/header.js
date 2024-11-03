import * as React from "react"
import { Link } from "gatsby"
import * as styles from "./header.module.css"

const Header = ({ siteTitle }) => (
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

    <nav>
    <ul class="globalnav">
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
  </header>
)

export default Header
