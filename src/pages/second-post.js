import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "../components/style/content.css"
const SecondPost = () => (
    <Layout>
      <SEO title="Second-Post" />
      <div className = "center">
      <h1>Second Post</h1>
      <body>
        Welcome to the second post
      </body>
      </div>
    </Layout>
  )
  
  export default SecondPost
  