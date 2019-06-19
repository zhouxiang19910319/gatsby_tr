import React from 'react'
import Link from 'gatsby-link'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container'
// import Row from 'react-bootstrap/Row'
// import Col from 'react-bootstrap/Col'



export default function Template({ data }) {
  const post = data.markdownRemark


  //styling for the dangerouslySetInnerHTML
  const styling_for_innerHTML = {
    fontFamily: `'Montserrat', sans-serif`,
    border: `1px solid red`,
  }

  return (
    <Layout>
    <Container>
    <div>

      <small style={{
        fontFamily: `'Montserrat', sans-serif`,
        fontWeight: 300,
        color: `#828282`,
      }}>
        Posted by {post.frontmatter.author} on {post.frontmatter.date}
      </small>
      
      <div style={styling_for_innerHTML} dangerouslySetInnerHTML={{ __html: post.html }} />


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