import React from "react"


const footer = ()=> (
  <footer style={{
    backgroundColor:`#fff5e8`,
    width:`100%`,
    textAlign:`center`,
    left:0,
    bottom:0,
    fontFamily: `'Montserrat', sans-serif`,
  }}>
    © {new Date().getFullYear()}, Built with
    {` `}
    <a href="https://www.gatsbyjs.org"
      style={
        {
          padding: `1rem 0`,
        }
      }
    >Gatsby</a>
  </footer>
)

export default footer


