import React, { Fragment } from "react"
import Sidebar from "../components/Sidebar"
import Layout from "../components/layout"
import { graphql } from "gatsby"

export default ({data}) => (
  <Layout>
    <Fragment>
      <Sidebar/>
      <p>{data.contentfulPost.title}</p>
    </Fragment>
  </Layout>
)

export const postQuery = graphql`
  query postQuery($slug: String!) {
    contentfulPost(title: {eq: $slug}){
      title
    }
  }
`