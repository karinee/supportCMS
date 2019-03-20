import React, { Fragment } from "react"
import Sidebar from "../components/Sidebar"

export default ({data}) => (
  <Fragment>
    <Sidebar/>
    <p>{data.contentfulPost.title}</p>
  </Fragment>
)

export const postQuery = graphql`
  query postQuery($slug: String!) {
    contentfulPost(title: {eq: $slug}){
      title
    }
  }
`