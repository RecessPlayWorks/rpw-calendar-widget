// import React, {Component} from 'react'
// import {graphql} from 'gatsby';
// import Layout from './layout'

// class eventlayout extends Component {
//     render() {
//         // const { markdownRemark } = this.props.data;
//         return(
//             <Layout>
//                 {/* <h1>Evt Layout</h1> */}
//                 {/* <h2>{markdownRemark.frontmatter.title}</h2>
//                 <div dangerouslySetInnerHTML={{__html: markdownRemark.html}}/> */}
//             </Layout>
//         )
//     }
// }

// export default eventlayout;

// export const query = graphql`
//  query EventQuery($slug: String!) {
//     markdownRemark(frontmatter: 
//         {slug: {
//             eq: $slug
//         }
//     }) {
//       html
//       frontmatter {
//         title
//         startDate
//         slug
//       }
//     }
//   }
//   `