import * as React from "react"
import { Link, graphql} from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../../components/layout"
import Seo from "../../components/seo"
import * as link_styles from "../../components/link.module.css"

const archive_2025 = ({ data }) => {
    return(
  <Layout>
    <h2>2025年アーカイブ</h2>
    <div className={link_styles.monthLink}>
    <ul>
        <Link
            className={link_styles.month}
            to="/discography/2025/3"
        >
            <li>3月</li>
        </Link>
    </ul>
    </div> {/* monthsLink */}
    <h3 className={link_styles.pageMonth}>3月</h3>
    {data.allYearOf2025Json.edges.map(({ node }) => (
        <div key={node.id} className="json-data">
          <div className={link_styles.podcast_link}>  {/* podcast playlist bubka */}
            <iframe
            src={node.podcastUrl}
            title="podcast"
            ></iframe>
          </div>
          <div className={link_styles.playlist_link}>
            <iframe
            src={node.playlistUrl}
            title="podcast"
            ></iframe>
          </div>
          <div className={link_styles.bubka_link}>
            {node.bubkaUrl !== "" &&
            <p>宇多丸さんのコラムが掲載している雑誌「BUBKA」では連載コラムのみをまとめたコラムパックがお得に販売されています。マブ論のコラムが読みたい方は
              <a className={link_styles.column_link} href={node.bubkaUrl} target="_blank" rel="noopener noreferrer">こちら</a>
            がオススメ！！</p>
          }
          </div> {/* podcast playlist bubka */}
        <div> {/* 楽曲リスト */}
        
        {node.track_list.map((list) => (
            <div className={link_styles.tracksInfo}>
                <div key={list.number} className={link_styles.trackInfo}>
                  <p className={link_styles.trackInfo}>{list.number}.{list.track_name}</p> {/* トラックリスト */}
                 {list.artist_link.map((link, index) => (
                    <div key={index} className={link_styles.artistInfo}>
                      <div className={link_styles.artistName}>{link.artist_name}</div>
                      <div  className={link_styles.snsInfo}>
                        <div className="twitter-info">
                        {link.twitter_url !== "" &&
                          <a href={link.twitter_url} target="_blank" rel="noopener noreferrer">
                          <StaticImage
                          src="../../images/icon-twitter.png"
                          alt="twitter-icon"
                          placeholder="blurred"
                          layout="constrained"
                          style={{ width: `var(--static-image-width)`}}
                          />
                          </a>
                          }
                        </div> {/* twitter-info */}
                        <div className="instagram-info">
                        {link.instagram_url !== "" &&
                          <a href={link.instagram_url} target="_blank" rel="noopener noreferrer">
                          <StaticImage
                          src="../../images/icon-instagram.png"
                          alt="insta-icon"
                          placeholder="blurred"
                          layout="constrained"
                          style={{ width: `var(--static-image-width)`}}
                          />
                          </a>
                          }
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

export const data = graphql`
    query {
      allYearOf2025Json(filter: {month: {eq: "3"}}) {
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

export const Head = () => <Seo title="2025年アーカイブ" />

export default archive_2025
