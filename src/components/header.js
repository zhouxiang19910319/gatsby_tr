import {Link} from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Jumbotron from 'react-bootstrap/Jumbotron'

const Header = ({ siteTitle }) => ( 
  <header>
  <Jumbotron style={
    {background: `#fff5e8`,}
  }>
  <div style={
    {
      background: `#f47c48`,
      width: `28rem`,
      height:`4rem`,
      margin:`0 auto`,
      display:`flex`,
      justifyContent:`center`,
      alignItems:`center`,
    }
  }>
  <h1 style = {
    {
      margin: 0,
      fontFamily:`Montserrat`,
      letterSpacing: `.3rem`,
      fontWeight:300,
    }
  }>
  <Link to = "/"
  style = {
    {
      color: `white`,
      textDecoration: `none`,
    }
  }>
  {siteTitle}
  </Link></h1>
</div>


<p className="text-center" style={
  {
  margin:`2rem`,
  fontFamily:`Montserrat`,
  fontWeight:100,
  letterSpacing:`.1rem`,
  }
}>
  &lt;slowpacedcoding.com, a place where we can talk about coding, as well as some other stuff too./&gt;
</p>

  <blockquote className="blockquote text-center" style={
    {
      marginTop:`2rem`,
      fontFamily:`Montserrat`,
      fontWeight:300,
    }
  }>A Coding Blog Written By <a 
  
  style= {
    {
      color:`inherit`,
      padding:`.5rem`,
      transition:`all .3s`,
    }
  }

  href="https://github.com/zhouxiang19910319"
  target="_blank" rel="noopener noreferrer">Matt
  Zhou</a>.</blockquote>
</Jumbotron>
  
  
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

