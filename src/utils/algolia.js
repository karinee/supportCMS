const postQuery = `{
  posts: allContentfulPost {
    edges {
      node {
        id
        title
        artical {
          id
          artical
        }
      }
    }
  }
}`

const flatten = arr => 
  arr.map(({ node: { artical, ...rest } }) => ({
    ...artical,
    ...rest
  }))

// const settings = { attributesToSnippet: [`title: 20`] }

const queries = [
  {
    query: postQuery,
    transformer: ({ data }) => flatten(data.posts.edges),
    indexName: `Posts`,
    // settings,
  },
]

module.exports = queries