import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
//import * as disco_styles from "../components/discography.module.css"

const twitter_url = "https://x.com/Bull_F0g"

const aboutPage = () => (
  <Layout>
    <h2>このサイトについて</h2>
    <p><span>マブ論アーカイブ</span></p>
    <p>TBSラジオ「アフター6ジャンクション2」の最新アイドルソング的時評コーナー『マブ論』で紹介された楽曲のアーカイブを目的とした非公式ファンサイトです。</p>
    <h3>運営者情報</h3>
    <p>青霧島 
    <a href={twitter_url} target="_blank" rel="noopener noreferrer">
                          <StaticImage
                          src="../images/icon-twitter.png"
                          alt="twitter-icon"
                          placeholder="blurred"
                          layout="constrained"
                          style={{ width: `var(--static-image-width)`}}
                          />
    </a>
    </p>
    <h3>お問い合わせ</h3>
    <p>お問い合わせフォームは<Link to="/form">こちら</Link></p>
  </Layout>
)

export const Head = () => <Seo title="このサイトについて" />

export default aboutPage
