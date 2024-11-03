import * as React from "react"
import { Link } from "gatsby"
import * as styles from "./footer.module.css"

const Footer = ({ siteTitle }) => (
  <footer className={styles.fixedFooter}>
    <div>
      <div  className={styles.footerMenu}>
        <ul>
          <Link
            className={styles.privacyPolicy}
            to="/privacy-policy"
          >
          <li>プライバシーポリシー</li>
          </Link>
          <Link
            className={styles.privacyPolicy}
            to="/form"
          >
          <li>お問い合わせ</li>
          </Link>
        </ul>
     </div>
     <p  className={styles.footerTitle}>マブ論アーカイブ</p>
    </div>
  </footer>
)

export default Footer
