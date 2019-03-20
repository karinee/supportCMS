import React, { Component, Fragment } from "react"
import { StaticQuery, graphql } from "gatsby"
import Item from "./item"

class Sidebar extends Component {

  render () {
    return (
      <Fragment>
        <StaticQuery
          query={graphql`
            query catalogueQuery{
              allContentfulCatalogue(filter: {node_locale: {eq: "en-US"}}){
                totalCount
                edges {
                  node {
                    id
                    title
                    categories {
                      id
                      title
                      posts {
                        id
                        title
                        artical {
                          id
                          artical
                        }
                      }
                      tertiaryCategory {
                        id
                        name
                        post {
                          id
                          title
                          artical {
                            id
                            artical
                          }
                        }
                      }
                    }
                    post {
                      id
                      title
                      artical {
                        id
                        artical
                      }
                    }
                  }
                }
              }
            }
          `}
          render={data => (
            <ul>
              {data.allContentfulCatalogue.edges.map(({ node }, index) => (
                <Item 
                  key={index}
                  categories={node.categories}
                  name={node.title}
                  toLink={`/support/${node.title}`}
                />
              ))}
            </ul>
          )}
        />
      </Fragment>
    )
  }
}

export default Sidebar