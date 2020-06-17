import PropTypes from "prop-types"
import React from "react"
import { css } from '@emotion/core'
import { Link } from 'gatsby'
import Image from './image'




const Header = ({ siteTitle }) => (
  <header
    css={css`
      position: absolute;
      width: 100%;
      background-image: none;
      background-color: transparent;
      float: right;
      // margin-bottom: 1.45rem;
    `}
  >
        <div css={css`
        display: flex;
        justify-content: flex-end;
        align-items: center;
        padding: 1.45rem 1.0875rem;
      `}>
        <Link
          to={`/`}
          css={css`
            margin-right: 10px;
            font-size: 15px;
            color: white;
          `}
        >
          Home
        </Link>
        <Link
          to={`/about/`}
          css={css`
            color: white;
            font-size: 15px;
            margin-right: 10px;
          `}
        >
          About
        </Link>
        <Link
          to={`/posts/`}
          css={css`
            color: white; 
            margin-right: 10px;
            font-size: 15px;
          `}
        >
          Posts
        </Link>
      </div>
      
      <div
        css={css`
          display: flex;
          flex-direction: row;
          align-items: center;
          margin: 0;
          width: 300px;
          padding: 1.45rem 1.0875rem;
        `}
      >
      </div>
    
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
