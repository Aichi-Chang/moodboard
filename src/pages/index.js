import React from "react"
import { Link, graphql } from "gatsby"
import { css } from '@emotion/core'
import Layout from "../components/layout"
import Image from "../components/image"
import Img from 'gatsby-image'
import SEO from "../components/seo"

const imgGridStyle = {
  display: 'grid',
  gridTemplateColumns: `repeat(auto-fill, 200px)`
};

export default function IndexPage({ data }) {

  
  return (
    <Layout>
    <SEO title="Home" />
    <div style={imgGridStyle}>
      {data.allImageSharp.edges.map(edge => 
        <>
        {/* <p>{edge.node.fluid.originalName}</p> */}
        <Img key={edge.node.id} fluid={edge.node.fluid} />
        </>
      )}
    </div>
    
  </Layout>
  )
  
}



export const query = graphql`
  query {
    allImageSharp (filter: { fluid: {originalName: {eq: "flower1.jpg"}}}) {
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