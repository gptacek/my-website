import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"

const md = (data) => { 
  const { frontmatter, html } = data.data.allMarkdownRemark.edges[0].node
  
  return (<div style = {{ margin: `3rem auto`, maxWidth: 600}}>
    <h1>{frontmatter.title}</h1>
    <p>{frontmatter.date}</p>
    <div
      dangerouslySetInnerHTML = {{__html: html }}
    />
  </div>)

}

const IndexPage = ({ data }) => (
  <Layout>
    {md({data})}
  </Layout>
)

export const query = graphql`
query {
  allMarkdownRemark(
    filter: {fileAbsolutePath: {regex: "/who-am-i/"}}
  ) {
      edges {
        node {
          frontmatter {
            title
            date(formatString: "DD MMMM YYYY")
          }
          html
        }
      }
    }
}
`

export default IndexPage

