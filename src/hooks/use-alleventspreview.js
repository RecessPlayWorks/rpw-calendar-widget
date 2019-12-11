import { graphql, useStaticQuery } from 'gatsby'

const useEvents = (searchParam) => {
  const data = useStaticQuery(graphql`
    query {
      db: allMdx {
        evtList: nodes {
          event: frontmatter {
            title
            desc
            startDate
            tags
            hours
            slug
            dates
            daytag
          }
          excerpt
        }
      }
    }`
  );

  var evtsArr = data.db.evtList;

  var filteredArray = evtsArr.filter(evtItem => {
    let hasEvt = evtItem.event.dates.indexOf(searchParam)
    return hasEvt !== -1;
  })
  return filteredArray;


}
export default useEvents
