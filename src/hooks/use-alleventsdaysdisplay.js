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

  // return evtsArr;



return evtsArr.map(item => ({
    title: item.event.title,
    datesArr: item.event.dates,
    desc: item.event.desc,
    startDate: item.event.startDate,
    tags: item.event.tags,
    slug: item.event.slug,
    hours: item.event.hours,
    excerpt: item.excerpt,
    daytag: item.event.daytag
  }))

}
export default useEvents
