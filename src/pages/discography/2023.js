import * as React from "react"
import { Link, graphql} from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../../components/layout"
import Seo from "../../components/seo"
import * as link_styles from "../../components/link.module.css"

const archive_2023 = ({ data }) => {
    return(
  <Layout>
    <h2>2023年アーカイブ</h2>
    <div className={link_styles.monthLink}>
    <ul>
        <Link
            className={link_styles.month}
            to="/discography/2023/2"
        >
            <li>2月</li>
        </Link>
        <Link
            className={link_styles.month}
            to="/discography/2023/3"
        >
            <li>3月</li>
        </Link>
        <Link
            className={link_styles.month}
            to="/discography/2023/4"
        >
            <li>4月</li>
        </Link>
        <Link
            className={link_styles.month}
            to="/discography/2023/5"
        >
            <li>5月</li>
        </Link>
        <Link
            className={link_styles.month}
            to="/discography/2023/6"
        >
            <li>6月</li>
        </Link>
        <Link
            className={link_styles.month}
            to="/discography/2023/7"
        >
            <li>7月</li>
        </Link>
        <Link
            className={link_styles.month}
            to="/discography/2023/8"
        >
            <li>8月</li>
        </Link>
        <Link
            className={link_styles.month}
            to="/discography/2023/9"
        >
            <li>9月</li>
        </Link>
        <Link
            className={link_styles.month}
            to="/discography/2023/10"
        >
            <li>10月</li>
        </Link>
        <Link
            className={link_styles.month}
            to="/discography/2023/11"
        >
            <li>11月</li>
        </Link>
        <Link
            className={link_styles.month}
            to="/discography/2023/12"
        >
            <li>12月</li>
        </Link>
    </ul>
    </div> {/* monthsLink */}
    <h3>2月</h3>
    {data.allYearOf2023Json.edges.map(({ node }) => (
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
      allYearOf2023Json(filter: {month: {eq: "2"}}) {
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

export const Head = () => <Seo title="2023年アーカイブ" />

export default archive_2023
