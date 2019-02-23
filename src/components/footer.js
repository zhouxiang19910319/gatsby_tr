import React from "react"
import 'bootstrap/dist/css/bootstrap.css'


const footer = ()=> (
  <footer style={{
    backgroundColor:`#fff5e8`,
    // position:`fixed`,
    width:`100%`,
    textAlign:`center`,
    left:0,
    bottom:0,
    paddingTop:`1rem`,
    paddingBottom:`1rem`,
    fontFamily: `'Montserrat', sans-serif`,
  }}>
    © {new Date().getFullYear()}, Built with
    {` `}
    <a href="https://www.gatsbyjs.org">Gatsby</a>
  </footer>
)

export default footer


