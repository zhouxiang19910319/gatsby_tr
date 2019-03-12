import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'



const IndexPage = () => (
  <Layout>
    <SEO title="slowpacedcoding" keywords={[`slowpacedcoding`, `programming`, `Matt Zhou`, `gatsbyJS`,`web development`,`zhouxiang19910319`,`web programming`]} />

    <Container>
      <Row>
        <Col xl={6} lg={6} md={12} sm={12} xs={12}>
          <Link to="/blog" style={{textDecoration:`none`,display:`inline-block`}}><h3 style={{
          fontFamily: `'Montserrat', sans-serif`,
          fontWeight: 400,
          color: `#f47c48`,
          marginLeft:`-1rem`,
          }}>Blog Posts</h3></Link>
        </Col>

        <Col xl={6} lg={6} md={12} sm={12} xs={12}>
          <h3 style={{
            fontFamily: `'Montserrat', sans-serif`,
            fontWeight: 400,
            marginTop:`1rem`,
            color: `#f47c48`,
          }}>Bio</h3>
          <img src="https://res.cloudinary.com/zzrot/image/upload/v1549713970/Personal%20Portfolio%20Collection/Personal%20Portfolio%20Site%20Images/no_background.png" alt="profile_pic" style={{
            width:`100px`,
          }}></img>
          <p style={{
            fontFamily: `'Montserrat', sans-serif`,
          }}>
          Former student of Singapore Polytechnic, dropped out at the end of year two, had been
          learning Web-Development since 2016. My goal is to become a web developer in an English speaking country.
          </p>

          <h5 style={{
            fontFamily: `'Montserrat', sans-serif`,
          }}>Find me at :</h5>

          <div>
            <a href="https://www.linkedin.com/in/xiang-zhou-03547755/" rel='noopener noreferrer' target="_blank" style={{backgroundColor: `#fff5e8`,color:`black`,textDecoration:`none`,}}>LinkedIn</a>
            <a href="https://github.com/zhouxiang19910319" rel='noopener noreferrer' target="_blank"  style={{backgroundColor: `#fff5e8`,color:`black`,textDecoration:`none`,}}>github</a>
            <a href="https://medium.freecodecamp.org/the-most-difficult-things-about-learning-to-code-by-yourself-b24ac8c3c23a "
            rel='noopener noreferrer' target="_blank" style={{backgroundColor: `#fff5e8`,color:`black`,textDecoration:`none`,}}>medium</a>
            <a href="https://twitter.com/zh0ux1ang" rel='noopener noreferrer' target="_blank" style={{backgroundColor: `#fff5e8`,color:`black`,textDecoration:`none`,}}>twitter</a>
            <a href="https://www.freecodecamp.org/zhouxiang19910319" rel='noopener noreferrer' target="_blank" style={{backgroundColor: `#fff5e8`,color:`black`,textDecoration:`none`,}} >freeCodeCamp</a>
          </div>
        </Col>
      </Row>
     </Container>


  </Layout>
)

export default IndexPage



