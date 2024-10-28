import * as React from "react"
import { Link } from "gatsby"
import * as styles from "./footer.module.css"

const Footer = ({ siteTitle }) => (
  <footer className={styles.fixedFooter}>
    <div>
     <div>マブ論アーカイブ</div>
      <div>
        <ul>
          <Link
            className={styles.privacyPolicy}
            to="/privacy-policy"
          >
          <li>プライバシーポリシー</li>
          </Link>
        </ul>
     </div>
    </div>
  </footer>
)

export default Footer
