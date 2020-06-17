/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { css } from '@emotion/core'
import Header from "./header"
// import "./layout.css"

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
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: `0 auto`,
          // maxWidth: 960,
          // padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <div css={css`
          height: 100vh;
          background-image: url(https://66.media.tumblr.com/ac993f71e8392dfb48c38d8b25e3d764/tumblr_oi979w23fu1tf8vylo1_1280.png);
          `}>
          {children}
        </div>
        {/* <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer> */}
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
