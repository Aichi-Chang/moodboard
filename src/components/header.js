import PropTypes from "prop-types"
import React from "react"
import { css } from '@emotion/core'
import { Link } from 'gatsby'
import Image from './image'




const Header = ({ siteTitle }) => (
  <header
    css={css`
      background-color: #0862a3;
      margin-bottom: 1.45rem;
    `}
  >
    <div css={css`
      display: flex;
      justify-content: space-between;
      flex-direction: row-reverse;
    `}>
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
          `}
        >
          Home
        </Link>
        <Link
          to={`/charactors/`}
          css={css`
            // color: white;
            margin-right: 10px;
            font-size: 15px;
          `}
        >
          Charactors
        </Link>
        <Link
          to={`/episodes/`}
          css={css`
            // color: white;
            font-size: 15px;
          `}
        >
          Episodes
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
        <div style={{ width: '100%', marginRight: 10 }}>
          <Image />
        </div>
        
        <h1 css={css`
          margin: 0;
          color: white;
          font-size: 15px;
          width: 300px;
        `}>
            {siteTitle}
        </h1> 
      </div>
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
