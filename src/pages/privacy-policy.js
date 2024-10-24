import * as React from "react"
//import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const privacyPolicyPage = () => (
  <Layout>
    <h2>プライバシーポリシー</h2>
    <h3>個人情報の利用目的</h3>
    <p>当サイトでは、お問い合わせをいただく際に名前やメールアドレスなどの個人情報を入力いただく場合がございます。取得した個人情報は、お問合せへの対応以外の目的では利用いたしません。</p>
    <h3>免責事項</h3>
    <p>当ブログからのリンクで移動したサイトで提供される情報、サービス等について一切の責任を負いません。</p>
    <p>当サイトに掲載された内容によって生じた損害等の一切の責任を負いかねますのでご了承ください。</p>
    <h3>プライバシーポリシーの変更について</h3>
    <p>当サイトは、個人情報に関して適用される日本の法令を遵守するとともに、本ポリシーの内容を適宜見直しその改善に努めます。本プライバシーポリシーは、事前の予告なく変更することがあります。修正された最新のプライバシーポリシーは常に本ページにて開示されます。</p>
    <p>初出掲載：2024年10月25日</p>
    
  </Layout>
)

export const Head = () => <Seo title="プライバシーポリシー" />

export default privacyPolicyPage
