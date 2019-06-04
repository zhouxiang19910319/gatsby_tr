import React from "react"
// import { Link } from "gatsby"
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
    <SEO title="slowpacedcoding" keywords={[`slowpacedcoding`, `Xiang Zhou`,`programming`, `Matt Zhou`, `gatsbyJS`,`web development`,`zhouxiang19910319`]} />

    <Container>
      <Row>
        <Col xl={8} lg={8} md={12} sm={12} xs={12}>
          {/* BLOG POST SECTION IS HERE! */}
          <Blog/>
        </Col>

        <Col xl={4} lg={4} md={12} sm={12} xs={12}>
          {/* BIO SECTION IS HERE! */}
          <Bio />
        </Col>
      </Row>
     </Container>

  </Layout>
)

export default IndexPage



