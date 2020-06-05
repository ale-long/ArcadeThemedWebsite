import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "../components/style/content.css"
const FirstPost = () => (
    <Layout>
      <SEO title="First-post" />
      <div className = "center">
      <h1>First-post</h1>
      <body>
        Welcome to the first-post
      </body>
      </div>
    </Layout>
  )
  
  export default FirstPost
  