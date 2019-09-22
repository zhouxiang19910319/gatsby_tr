import React from 'react'
import Link from 'gatsby-link'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

import 'bootstrap/dist/css/bootstrap.css'
import Container from 'react-bootstrap/Container'




export default function Template({ data }) {
  const post = data.markdownRemark

  return (
    <Layout>
    <Container>
    <div>

      <small>
        Posted by {post.frontmatter.author} on {post.frontmatter.date}
      </small>
      

      <div dangerouslySetInnerHTML={{ __html: post.html }} />


      <hr />
      <Link to="/" style={{
        padding: 0,
      }}>Go Back</Link>
      
    </div>
    </Container>
    </Layout>
  )
}

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        author
        date
      }
    }
  }
`