import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
//import * as disco_styles from "../components/discography.module.css"

//const google_form_url = `<iframe src="https://docs.google.com/forms/d/e/1FAIpQLScrbcYRQ6hEg7TDkvOH0uhs63ZLW7U8ulv8Kq_tv-rJM0-qEQ/viewform?embedded=true" width="640" height="824" frameborder="0" marginheight="0" marginwidth="0">読み込んでいます…</iframe>`
const google_form_url = "https://docs.google.com/forms/d/e/1FAIpQLScrbcYRQ6hEg7TDkvOH0uhs63ZLW7U8ulv8Kq_tv-rJM0-qEQ/viewform?embedded=true"


const formPage = () => (
  <Layout>
    <h2>お問い合わせ</h2>
    <div class="form-class">
    <iframe
            src={google_form_url}
            title="podcast"
    >読み込んでいます…</iframe>
    </div>
  </Layout>
)

export const Head = () => <Seo title="お問い合わせ" />

export default formPage
