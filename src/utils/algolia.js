const pageQuery = `{
  allContentfulBlog {
    edges {
      node {
        objectID: id
        title
        artical {
          id
          content {
            content {
              value
              nodeType
            }
          }
        }
      }
    }
  }
}`
const postQuery = `{
  posts: allMarkdownRemark(
    filter: {
      fileAbsolutePath: {regex: "/posts/"},
      frontmatter: {purpose: {eq: "posts"}}
    }
  ) {
    edges {
      node {
        objectID: id
        frontmatter {
          title
          slug
          tags
        }
        except(pruneLength: 5000)
      }
    }
  }
}`

const flatten = arr => 
  arr.map(({ node: { frontmatter, ...rest } }) => ({
    ...frontmatter,
    ...rest,
  }))

const settings = { attributesToSnippet: [`excerpt: 20`] }

const queries = [
  {
    query: pageQuery,
    transformer: ({ data }) => flatten(data.allContentfulBlog.edges),
    indexName: `Pages`,
    settings,
  },
  {
    query: postQuery,
    transformer: ({ data }) => flatten(data.posts.edges),
    indexName: `Posts`,
    settings,
  },
]

module.exports = queries