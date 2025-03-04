/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */
// gatsby-node.js
const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  // GraphQLクエリでJSONデータを取得
  const result_2025 = await graphql(`
    query {
      allYearOf2025Json {
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
    }`)

  //2025年
  result_2025.data.allYearOf2025Json.edges.forEach(({ node }) => {
    createPage({
      path: `/discography/2025/${node.month}`,
      component: path.resolve(`./src/templates/monthly_2025.js`),
      context: {
        month: node.month,
      },
    });
  });

  // GraphQLクエリでJSONデータを取得
  const result_2024 = await graphql(`
    query {
      allYearOf2024Json {
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
    }`)

  //2024年
  result_2024.data.allYearOf2024Json.edges.forEach(({ node }) => {
    createPage({
      path: `/discography/2024/${node.month}`,
      component: path.resolve(`./src/templates/monthly_2024.js`),
      context: {
        month: node.month,
      },
    });
  });

  // GraphQLクエリでJSONデータを取得
  const result_2023 = await graphql(`
    query {
      allYearOf2023Json {
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
    }`)

  //2023年
  result_2023.data.allYearOf2023Json.edges.forEach(({ node }) => {
    createPage({
      path: `/discography/2023/${node.month}`,
      component: path.resolve(`./src/templates/monthly_2023.js`),
      context: {
        month: node.month,
      },
    });
  });

  // GraphQLクエリでJSONデータを取得
  const result_2022 = await graphql(`
    query {
      allYearOf2022Json {
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
    }`)

  //2022年
  result_2022.data.allYearOf2022Json.edges.forEach(({ node }) => {
    createPage({
      path: `/discography/2022/${node.month}`,
      component: path.resolve(`./src/templates/monthly_2022.js`),
      context: {
        month: node.month,
      },
    });
  });

    // GraphQLクエリでJSONデータを取得
    const result_2021 = await graphql(`
      query {
        allYearOf2021Json {
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
      }`)
  
    //2021年
    result_2021.data.allYearOf2021Json.edges.forEach(({ node }) => {
      createPage({
        path: `/discography/2021/${node.month}`,
        component: path.resolve(`./src/templates/monthly_2021.js`),
        context: {
          month: node.month,
        },
      });
    });

  // GraphQLクエリでJSONデータを取得
  const result_2020 = await graphql(`
    query {
      allYearOf2020Json {
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
    }`)

  //2020年
  result_2020.data.allYearOf2020Json.edges.forEach(({ node }) => {
    createPage({
      path: `/discography/2020/${node.month}`,
      component: path.resolve(`./src/templates/monthly_2020.js`),
      context: {
        month: node.month,
      },
    });
  });

  // GraphQLクエリでJSONデータを取得
  const result_2019 = await graphql(`
    query {
      allYearOf2019Json {
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
    }`)

  //2019年
  result_2019.data.allYearOf2019Json.edges.forEach(({ node }) => {
    createPage({
      path: `/discography/2019/${node.month}`,
      component: path.resolve(`./src/templates/monthly_2019.js`),
      context: {
        month: node.month,
      },
    });
  });

  // GraphQLクエリでJSONデータを取得
  const result_2018 = await graphql(`
    query {
      allYearOf2018Json {
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
    }`)

  //2018年
  result_2018.data.allYearOf2018Json.edges.forEach(({ node }) => {
    createPage({
      path: `/discography/2018/${node.month}`,
      component: path.resolve(`./src/templates/monthly_2018.js`),
      context: {
        month: node.month,
      },
    });
  });
  //2018年
{/*  result.data.allYearOf2018Json.edges.forEach(({ node }) => {
    createPage({
      path: '/2018/' + node.month,
      component: path.resolve(`./src/templates/monthly.js`),
      context: {
        month: node.month,
        track_list: node.track_list,
      },
    });
  }); */}
};
