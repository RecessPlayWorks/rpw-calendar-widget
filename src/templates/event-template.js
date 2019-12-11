import React from 'react'
import { graphql } from 'gatsby';
import {MDXRenderer} from 'gatsby-plugin-mdx'
import { Link } from 'gatsby';
import Layout from '../components/layout'

import evtTemplateStyles from './eventtemplate.module.scss';

export const query = graphql`
query ($slug: String!) {
    mdx(frontmatter: {slug: {eq: $slug}}) {
      frontmatter {
        title
        desc
      }
      body
    }
  }
`


const EvtTemplate = ({data:{mdx: event}}) => {
    // console.log(">EvtTemp: data", event)
    return (
        <Layout>
        <div className={evtTemplateStyles.container}>
        
        <h1>{event.frontmatter.title}</h1>
            <h2>{event.frontmatter.desc}</h2>
            <h1>H1</h1>
            <MDXRenderer>{event.body}</MDXRenderer>
            <Link to="/">THis is a link</Link>
        </div>
        </Layout>
    )
}

export default EvtTemplate;