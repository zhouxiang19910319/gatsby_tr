import React from "react"
import { Link,graphql,useStaticQuery } from "gatsby"
import 'bootstrap/dist/css/bootstrap.css'

const Blog = () => {


  const data = useStaticQuery(graphql`
  query BlogIndexQuery{
    allMarkdownRemark
    (sort: { fields: [frontmatter___date], order: DESC })
    {
      edges{
        node{
          id
          frontmatter{
            path
            title
            date
          }
        }
      }
    }
  }
  `)



  return(
    <>
    <h3 style={{
      fontFamily: `'Montserrat', sans-serif`,
      fontWeight: 700,
    }}
    >Posts</h3>
    {data.allMarkdownRemark.edges.map(post=>(
      <div>
      <div key = {post.node.id}>
        <small
        style={{
          fontFamily: `'Montserrat', sans-serif`,
          fontWeight: 300,
          color: `#828282`,
        }}
        >{post.node.frontmatter.date}</small>
        <br></br>
        <h4
        style= {{
          display: `inline-block`,
          fontFamily: `'Montserrat', sans-serif`,
          fontWeight: 400,
          color: `#f47c48`,
        }}
        >{post.node.frontmatter.title}</h4>
      </div>
        <Link to={post.node.frontmatter.path} 
        style={{
          padding:0,}}
          >Read More</Link>
        <hr></hr>
      </div>
    ))}
    </>
  )
}


export default Blog


  
