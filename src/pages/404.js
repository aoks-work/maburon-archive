import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <h2>お探しのページは見つかりませんでした</h2>
  </Layout>
)

export const Head = () => <Seo title="ページが見つかりません" />

export default NotFoundPage
