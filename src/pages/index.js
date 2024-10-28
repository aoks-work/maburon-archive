import * as React from "react"
import {graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as link_styles from "../components/link.module.css"
import * as styles from "../components/index.module.css"

const bubka_url = "https://www.amazon.co.jp/dp/B0DHV3FB9K"

const IndexPage = ({ data }) => {
  return (
    <Layout>
    <p>TBSラジオ「アフター6ジャンクション2」の最新アイドルソング的時評コーナー『マブ論』で紹介された楽曲のアーカイブを目的としたファンサイトです</p>
    {data.allMaburonDataJson.edges.map(({ node }) => (
        <div key={node.id} className="json-data">
          <h2 className={styles.heading2}>最新紹介楽曲【{node.month}月】</h2>
          <div className={link_styles.podcast_link}>  {/* podcast playlist bubka */}
            <iframe
            src={node.podcastUrl}
            title="podcast"
            ></iframe>
          </div>
          <div className={link_styles.playlist_link}>
            <iframe
            src={node.playlistUrl}
            title="playlist"
            ></iframe>
          </div>
          <div className={link_styles.bubka_link}>
            <a href={bubka_url} target="_blank" rel="noopener noreferrer">bubkaコラムパックテキスト</a>
          </div> {/* podcast playlist bubka */}
        <div> {/* 楽曲リスト */}
        {node.track_list.map((list) => (
                <div key={list.number}>
                  <div className={link_styles.tracksInfo}>
                  <p className={link_styles.trackInfo}>{list.number}.{list.track_name}</p> {/* トラックリスト */}
                 {list.artist_link.map((link, index) => (
                    <div key={index} className={link_styles.artistInfo}>
                      <div className={link_styles.artistName}>{link.artist_name}</div>
                      <div className={link_styles.snsInfo}>
                        <div className="twitter-info">
                          <a href={link.twitter_url} target="_blank" rel="noopener noreferrer">
                          <StaticImage
                          src="../images/icon-twitter.png"
                          alt="twitter-icon"
                          placeholder="blurred"
                          layout="constrained"
                          style={{ width: `var(--static-image-width)`}}
                          />
                          </a>
                        </div> {/* twitter-info */}
                        <div className="instagram-info">
                          <a href={link.instagram_url} target="_blank" rel="noopener noreferrer">
                          <StaticImage
                          src="../images/icon-instagram.png"
                          alt="insta-icon"
                          placeholder="blurred"
                          layout="constrained"
                          style={{ width: `var(--static-image-width)`}}
                          />
                          </a>
                        </div> {/* instagram-info */}
                     </div> {/* sns-info */}
                    </div> /* artist-info */
                  ))}
                  </div>
                </div> /* トラックリスト */
              ))}
        </div> {/* 楽曲リスト */}
      </div >  /*json-data */
    ))}
  </Layout> 
)
}

export const new_data = graphql`
    query {
      allMaburonDataJson {
    edges {
      node {
        month
        playlistUrl
        podcastUrl
        bubkaUrl
        track_list {
          artist
          artist_link {
            artist_name
            instagram_url
            twitter_url
          }
          is_subscribe
          number
          track_name
          youtubeUrl
        }
      }
    }
  }
    }`

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
