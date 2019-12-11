const path = require('path')

/* JSON Legstorf FEM: 
https://frontendmasters.com/courses/gatsby/generating-post-pages/
*/
// NB: when in gatsby-node graphql IS A FUNCTION!


// "reporter" replaces console.log() for gatsby
exports.createPages = async ({ actions, graphql, reporter }) => {
    const result = await graphql(`
    query {
      allMdx {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }  
`);
    if (result.errors) {
        reporter.panic('failed to create events-pages', result.errors)
    }

    const events = result.data.allMdx.nodes;
    
    events.forEach(event =>{
        actions.createPage({
            path: event.frontmatter.slug,
            component: require.resolve('./src/templates/event-template.js'),
            context: {
                slug: event.frontmatter.slug
            }
        })
    })
}