import { graphql, useStaticQuery } from 'gatsby'

/* Thank you Jason Lengstorf 
https://frontendmasters.com/courses/gatsby/rendering-site-metadata/
*/

const useSiteMetadata = () => {
  const data = useStaticQuery(graphql`
    query {
        site {
          siteMetadata {
            author
            description
            street
            title
            town
          }
        }
      }`
  );
  return data.site.siteMetadata;
}

export default useSiteMetadata;