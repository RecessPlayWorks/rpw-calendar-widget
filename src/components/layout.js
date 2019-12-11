import React from "react"
import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"
import Helmet from 'react-helmet'
import Header from "./header"
// import Events from "./events"
import "./layout.css"

import useSiteMetadata from '../hooks/use-sitemetadata'

  const Layout = ({ children }) => {

  const { description, author, street, title, town } = useSiteMetadata();
  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name={author} content={description}  street={street} title={title} town={town}/>
      </Helmet>

      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
        }}
      >
        <Header/>
        <main>{children}</main>
        {/* <Events /> */}
        <footer>
          © {new Date().getFullYear()}, copyright
          {` `}
         <a href="https://www.recessplayworks.com">{title}.com</a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
