/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require('path')

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators
  return new Promise((resolve, reject) => {
    const postTemplate = path.resolve('src/templates/post.js')
    resolve(
      graphql(`
      {
        allContentfulPost{
          edges {
            node {
              id
              title
              contentful_id
              category {
                id
                title
                catalogue {
                  id
                  title
                }
              }
              tertiarycategory {
                id
                name
                category {
                  id
                  title
                  catalogue {
                    id
                    title
                  }
                }
              }
              catalogue {
                id
                title
              }
            }
          }
        }
      }`).then((result) => {
        if (result.errors) {
          reject(result.errors)
        }
        debugger
        result.data.allContentfulPost.edges.forEach((edge) => {
          let slug = 'support'
          if (edge.node.catalogue) {
            slug =  `${slug}/${edge.node.title}`
          } else if (edge.node.category) {
            const category = edge.node.category[0]
            const catalogue = category.catalogue[0]
            slug = `${slug}/${catalogue.title}/${category.title}`
          } else if (edge.node.tertiarycategory) {
            const tertiarycategory = edge.node.tertiarycategory[0]
            const category = tertiarycategory.category[0]
            const catalogue = category.catalogue[0]
            slug = `${slug}/${catalogue.title}/${category.title}/${tertiarycategory.name}`
          }
          createPage ({
            path: slug,
            component: postTemplate,
            context: {
              slug: edge.node.title
            }
          })
        })
        return
      })
    )
  })
}