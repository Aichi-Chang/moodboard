/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { css, keyframes } from '@emotion/core'
import Header from "./header"
import "./layout.css"



const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)



  return (
    <div>
      <Header siteTitle={data.site.siteMetadata.title} />
        <main css={css`
          position: absolute;
          margin: 100px auto;
          width: 100vw;
        `}>
          {children}
        </main>
    </div>
    
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
