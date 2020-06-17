import PropTypes from "prop-types"
import React from "react"
import { css } from '@emotion/core'

import Image from './image'




const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#32a5e3`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      css={css`
        display: flex;
        flex-direction: row;
        align-items: center;
        margin: 0;
        max-width: 500px;
        padding: 1.45rem 1.0875rem;
      `}
    >
      <div style={{ width: '30%', marginRight: 10 }}>
        <Image />
      </div>
      
       <h1 style={{ margin: 0, color: `white`, fontSize: 20 }}>
          {siteTitle}
      </h1> 
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
