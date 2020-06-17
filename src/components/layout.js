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


  const background = keyframes`
  from {
    background-color: #e1dded;
  }
  10% {
    background-color: #efdaf2;
  }
  20% {
    background-color: #edd1de;
  }
  30% {
    background-color: #ebd3e7;
  }
  50% {
    background-color: #d4c5e8;
  }
  70% {
    background-color: #bdc1db;
  }
  90% {
    background-color: #d1dae6;
  }
  to {
    background-color: #e1dded;
  }
`



  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div css={css`
          height: 100vh;
          // background-color: blue;
          animation: ${background} 12s ease infinite;
          `}>
        <main>
          {children}
        </main>
        <footer css={css`
          font-size: 14px;
          position: absolute;
          bottom: 10px;
          left: 10px;
          background-image: none;
          background-color: transparent;
        `}>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
