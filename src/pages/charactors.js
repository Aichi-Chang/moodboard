import React from "react"
import { css } from '@emotion/core'
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Charectors = () => (
  <Layout>
    <SEO title="Charactors" />
    <h1 css={css`
      color: #0862a3;
    `}>All charactors in Advantire Time</h1>
    <p>👋</p>
  </Layout>
)

export default Charectors
