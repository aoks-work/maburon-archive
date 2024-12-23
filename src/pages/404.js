import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <h2>お探しのページは見つかりませんでした</h2>
    <p><Link to="/" className="formLink">トップページへ</Link></p>
  </Layout>
)

export const Head = () => <Seo title="ページが見つかりません" />

export default NotFoundPage
