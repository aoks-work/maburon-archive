import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as disco_styles from "../components/discography.module.css"

const DiscographyPage = () => (
  <Layout>
    <h2>年別アーカイブ</h2>
    <Link
        to="/discography/2025"
        className={disco_styles.year}
      >
        2025年
      </Link>
    <Link
        to="/discography/2024"
        className={disco_styles.year}
      >
        2024年
      </Link>
      <Link
        to="/discography/2023"
        className={disco_styles.year}
      >
        2023年
      </Link>
      <Link
        to="/discography/2022"
        className={disco_styles.year}
      >
        2022年
      </Link>
      <Link
        to="/discography/2021"
        className={disco_styles.year}
      >
        2021年
      </Link>
      <Link
        to="/discography/2020"
        className={disco_styles.year}
      >
        2020年
      </Link>
      <Link
        to="/discography/2019"
        className={disco_styles.year}
      >
        2019年
      </Link>
      <Link
        to="/discography/2018"
        className={disco_styles.year}
      >
        2018年
      </Link>
  </Layout>
)

export const Head = () => <Seo title="Discography" />

export default DiscographyPage
