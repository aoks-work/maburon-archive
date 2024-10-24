import * as React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as annual_styles from "../components/annual.module.css"

const url_2022 = "https://open.spotify.com/embed/episode/6n2cIcZ7qiy49M1ObD9Mfd?si=fed3c73236464cdd?utm_source=generator"

const RankingPage = ({ data }) => {
    return(
  <Layout>
    <h2>年間ランキング</h2>
    <div className="monthsLink">
    {data.allTrackOfTheYearJson.edges.map(({ node }) => (
        <div key={node.index} className="ranking-data">
            <div>
                <p className={annual_styles.year}>{node.year}</p>
                <div>
                    <iframe
                        className={annual_styles.iframe}
                        src={node.podcastUrl}
                        title="podcast"
                    ></iframe>
                {node.year === "2022年" &&
                <div>
                    <iframe 
                       className={annual_styles.iframe}
                       src= {url_2022}
                       title="podcast"
                    ></iframe>
                </div>
                }
                </div>
            </div>

        </div>

    ))}
    </div>
  </Layout>
)
}

export const data = graphql`
    query {
        allTrackOfTheYearJson(sort: {year: DESC}) {
            edges {
                node {
                podcastUrl
                year(formatString: "YYYY年")
                index
                    }
                }
        }
    }`

export const Head = () => <Seo title="年間ランキング" />

export default RankingPage
