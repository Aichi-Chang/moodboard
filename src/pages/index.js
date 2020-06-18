import React from "react"
import { Link, graphql } from "gatsby"
import { css } from '@emotion/core'
import Layout from "../components/layout"
import Img from 'gatsby-image'
import SEO from "../components/seo"



export default function IndexPage({ data }) {

  
  return (
    <Layout>
    <SEO title="Home" />
    <div css={css`
      margin: 0 auto;
      max-width:800px;
      display: grid;
      grid-template-columns: repeat(auto-fill, 200px);
    `}>
      {data.allImageSharp.edges.map(edge => 
        <div css={css`
          padding: 10px;
          width: 200px;
        `}>
          <Img key={edge.node.id} fluid={edge.node.fluid} />
        </div>
      )}
    </div>
    
  </Layout>
  )
  
}



export const query = graphql`
  query {
    allImageSharp (filter: { fluid: {originalName: {ne: "beemo.png"}}}) {
      edges {
        node {
          id
          fluid(maxWidth: 200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`