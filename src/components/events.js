import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import useEvents from '../hooks/use-events'


// const EVENTS_QUERY = graphql`
// query EventsQuery {
//   allMarkdownRemark(sort: {order: DESC, fields: frontmatter___startDate}) {
//     edges {
//       node {
//         frontmatter {
//           slug
//           tags
//           title
//           startDate(formatString: "MMMM Do YYYY")
//         }
//         excerpt
//       }
//     }
//   }
// }
// `
const Events = ({ children }) => {
  // const data = useStaticQuery(EVENTS_QUERY)
  // const {slug, tags, title, date} = data.allMarkdownRemark.edges.node.frontmatter;
  // const { edges } = data.allMarkdownRemark
    // console.log("X: input", input)
    return (

      <section>
        <h1>Events</h1>
        <ul>
          <li>HI</li>
{/* 
          {edges.map((elem, idx) => {
            let { title, slug, startDate, tags } = elem.node.frontmatter;

            return (
              <li className="event-list-item" key={slug}>
                <Link to={`/events/${slug}`}>{title}</Link>
                <p className="event-start-date">{startDate}</p>
                <ul className="tag-list">{tags.map((elem, idx) => <li className="tag-list-item" key={idx}>{elem}</li>)}</ul>
              </li>
            )
          })
          } */}
        </ul>
      </section>

  )
}


export default Events
