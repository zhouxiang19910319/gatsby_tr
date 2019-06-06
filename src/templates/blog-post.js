import React from 'react'
import Link from 'gatsby-link'

import Layout from '../components/layout'

import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'



export default function Template({ data }) {
  const post = data.markdownRemark

  return (
    <Layout>
    <Container>
    <div>
      <Link to="/" style={{border: `2px solid black`}}>Go Back</Link>
      <hr />
    
      <small>
        Posted by {post.frontmatter.author} on {post.frontmatter.date}
      </small>
      
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
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