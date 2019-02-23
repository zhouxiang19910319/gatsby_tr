import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"



const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    

    <div style={{
      backgroundColor: `#fff5e8`,
      padding:`1rem 1rem`,
    }}>


    <p style={{
      fontFamily: `'Montserrat', sans-serif`,
    }}>OPPS, the page you are trying to enter does not exist, but did you know:</p>

      <p style={{
        fontFamily: `'Montserrat', sans-serif`,
      }}><strong>"the worst thing about prison was the dementors"?</strong></p>
    </div>

  </Layout>
)

export default NotFoundPage
