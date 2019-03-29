import React from "react"
import profile_pic from "../images/profile_pic.png"

class Bio extends React.Component{
  render (){
    return(
      <>
      <h3 style={{
        fontFamily: `'Montserrat', sans-serif`,
        fontWeight: 400,
        marginTop:`1rem`,
        color: `#f47c48`,
      }}>Bio</h3>

      <img src={profile_pic} alt="profile_pic" style={{
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
    </>
    )
  }
}

export default Bio
