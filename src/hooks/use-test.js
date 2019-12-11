import { graphql, useStaticQuery } from 'gatsby'

const UseTest = () => {
    const data = useStaticQuery(graphql`
    query  {
      allMdx {
        nodes {
          evtInfo: frontmatter {
            title
            desc
            startDate
            tags
            hours
            slug
            dates
          }
          excerpt
        }
      }
    }`
  );

  return data;
}

export default UseTest;
