import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Bio from '../components/bio'
import Blog from '../components/blog'



const IndexPage = () => (
  <Layout>
    <SEO title="slowpacedcoding" keywords={[`slowpacedcoding`, `programming`, `Matt Zhou`, `gatsbyJS`,`web development`,`zhouxiang19910319`,`web programming`]} />

    <Container>
      <Row>
        <Col xl={6} lg={6} md={12} sm={12} xs={12}>
          {/* BLOG POST SECTION IS HERE! */}
          
          {/*<Link to="/blog" style={{textDecoration:`none`,display:`inline-block`}}><h3 style={{
          fontFamily: `'Montserrat', sans-serif`,
          fontWeight: 400,
          color: `#f47c48`,
          marginLeft:`-1rem`,
          }}>Blog Posts</h3></Link> */}

          <Blog />
        </Col>

        <Col xl={6} lg={6} md={12} sm={12} xs={12}>
          {/* BIO SECTION IS HERE! */}
          <Bio />
        </Col>
      </Row>
     </Container>


  </Layout>
)

export default IndexPage



