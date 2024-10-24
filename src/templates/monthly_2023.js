import * as React from "react"
import { Link, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as link_styles from "../components/link.module.css"

const MonthlyPage = ({ data  }) => {
    return(
  <Layout>
        <h2>2023年アーカイブ</h2>
    <div className="monthsLink">
    <ul>
        <Link
            to="/discography/2023/2"
            style={{textDecoration: `none`}}
        >
            <li>2月</li>
        </Link>
        <Link
            to="/discography/2023/3"
            style={{textDecoration: `none`}}
        >
            <li>3月</li>
        </Link>
        <Link
            to="/discography/2023/4"
            style={{textDecoration: `none`}}
        >
            <li>4月</li>
        </Link>
        <Link
            to="/discography/2023/5"
            style={{textDecoration: `none`}}
        >
            <li>5月</li>
        </Link>
        <Link
            to="/discography/2023/6"
            style={{textDecoration: `none`}}
        >
            <li>6月</li>
        </Link>
        <Link
            to="/discography/2023/7"
            style={{textDecoration: `none`}}
        >
            <li>7月</li>
        </Link>
        <Link
            to="/discography/2023/8"
            style={{textDecoration: `none`}}
        >
            <li>8月</li>
        </Link>
        <Link
            to="/discography/2023/9"
            style={{textDecoration: `none`}}
        >
            <li>9月</li>
        </Link>
        <Link
            to="/discography/2023/10"
            style={{textDecoration: `none`}}
        >
            <li>10月</li>
        </Link>
        <Link
            to="/discography/2023/11"
            style={{textDecoration: `none`}}
        >
            <li>11月</li>
        </Link>
        <Link
            to="/discography/2023/11"
            style={{textDecoration: `none`}}
        >
            <li>12月</li>
        </Link>
    </ul>
    </div> {/* monthsLink */}
    <h3>{data.yearOf2023Json.month}月</h3>
    <div className={link_styles.podcast_link}>  {/* podcast playlist bubka */}
        <iframe
        src={data.yearOf2023Json.podcastUrl}
        title="podcast"
        ></iframe>
    </div>
    <div className={link_styles.playlist_link}>
        <iframe
        src={data.yearOf2023Json.playlistUrl}
        title="podcast"
        ></iframe>
    </div> {/* podcast playlist bubka */}

    <div> {/* 楽曲リスト */}
        {data.yearOf2023Json.track_list.map((list) => (
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
                          src="../images/icon-twitter.png"
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
                          src="../images/icon-instagram.png"
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
  </Layout>
)}

    {/*{data.yearOf2023Json.track_list.map((list) => (
         <div key={list.number}>{list.number}.　{list.track_name} トラックリスト
        </div>
    ))} */}


// GraphQLクエリでcontextの`slug`を利用してデータを取得
export const query = graphql`
  query($month: String!) {
    yearOf2023Json(month: { eq: $month }) {
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
`;

export const Head = () => <Seo title="アーカイブ" />

export default MonthlyPage
