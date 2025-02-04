import * as React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as annual_styles from "../components/annual.module.css"

const url_2022 = "https://open.spotify.com/embed/episode/6n2cIcZ7qiy49M1ObD9Mfd?si=fed3c73236464cdd?utm_source=generator"
const url_2024_part2 = "https://open.spotify.com/embed/episode/5kzz8vuokUVI2CQ6GSqbDo?si=df2764fdf2bf4f64?utm_source=generator"
const url_2024_part3 = "https://open.spotify.com/embed/episode/4ykEiNOVVNhpS8cfDZfTPT?si=b7974e8e1734498b?utm_source=generator"

const RankingPage = ({ data }) => {
    return(
  <Layout>
    <h2>年間ランキング</h2>
    <div className={annual_styles.monthsLink}>
    {data.allTrackOfTheYearJson.edges.map(({ node }) => (
        <div key={node.index} className="ranking-data">
            <div>
                <p className={annual_styles.year}><span className={annual_styles.border}>{node.year}</span></p>
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
                {node.year === "2024年" &&
                <div>
                    <iframe 
                       className={annual_styles.iframe}
                       src= {url_2024_part2}
                       title="podcast"
                    ></iframe>
                    <iframe 
                       className={annual_styles.iframe}
                       src= {url_2024_part3}
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
