import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

// const contentful = require('contentful')
// const client = contentful.createClient({
//   space: process.env.SPACE_ID,
//   accessToken: process.env.ACCESS_TOKEN
// })
let i = 0
const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Hi karine</h1>
    <p>{data.contentfulBlogArticalRichTextNode.id}</p>
    {data.contentfulBlogArticalRichTextNode.content.map(({content}) => (
      <p key={i++}>{content.value}</p>
    ))}
    <p>{data.contentfulBlogArticalRichTextNode.content[0].content[0].value}</p>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage

export const query = graphql`
  query {
    contentfulBlogArticalRichTextNode {
      id
      content {
        nodeType
        content {
          value
          nodeType
        }
      }
    }
  }
`