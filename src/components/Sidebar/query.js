// import { graphql } from "gatsby"
// // content type
// export const contentTypeQuery = graphql`
//   query contentTypeQuery {
//     allContentfulContentType {
//       edges {
//         node {
//           id
//           description
//           name
//         }
//       }
//     }
//   }
// `
// // 一级目录catalogue
// // export const catalogueQuery= graphql`
// //   query catalogueQuery {
// //     allContentfulCatalogue(filter: {node_locale: {eq: "en-US"}}){
// //       totalCount
// //       edges {
// //         node {
// //           id
// //           title
// //           categories {
// //             id
// //             title
// //           }
// //           post {
// //             id
// //             title
// //             artical {
// //               id
// //               artical
// //             }
// //           }
// //         }
// //       }
// //     }
// //   }
// // `
// // 二级目录 category
// export const categoryQuery = graphql`
//   query categoryQuery {
//     allContentfulCategory(filter: {node_locale: {eq: "en-US"}}){
//       totalCount
//       edges {
//         node {
//           id
//           title
//           tertiaryCategory {
//             id
//             name
//           }
//           posts {
//             id
//             title
//             artical {
//               id
//             }
//           }
//         }
//       }
//     }
//   }
// `
// 三级目录 tertiaryCategory
// export const tertiaryCategoryQuery = graphql`
//   query tertiaryCategoryQuery {
//     allContentfulTertiaryCategory(filter: {node_locale: {eq: "en-US"}}) {
//       totalCount
//       edges {
//         node {
//           id
//           name
//           post {
//             id
//             title
//             artical {
//               id
//               artical
//             }
//           }
//         }
//       }
//     }
//   }
// `
// // 文章 post
// export const postQuery = graphql`
//   query postQuery{
//     allContentfulPost(filter: {node_locale: {eq: "en-US"}}) {
//       totalCount
//       edges {
//         node {
//           id
//           title
//           artical {
//             id
//             artical
//           }
//         }
//       }
//     }
//   }
// `