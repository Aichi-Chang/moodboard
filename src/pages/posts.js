import React from 'react'
import Layout from '../components/layout'
import { css } from '@emotion/core'

export default function posts() {
  return (
    <Layout>
      <div css={css`
        color: white;
        font-size: 24px;
        margin: 0 auto;
        max-width:800px;
      `}>
        Coming Soon
      </div>
    </Layout>
  )
}
