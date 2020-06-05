import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import "../components/style/content.css"
import "../../node_modules/nes.css/css/nes.css";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className = "center">
    <h1>Home</h1>
    </div>
    <div className = "image-cropper">
      <Image />
      </div>
      <div>
      <i class="nes-icon is-large star" id ="starleft"></i>
      <i class="nes-icon is-large star" id ="starleft"></i>
      <i class="nes-icon is-large star" id ="starleft"></i>
      <i class="nes-icon is-large star" id ="starleft"></i>
      <i class="nes-icon is-large star" id ="starleft"></i>
      <i class="nes-icon is-large star" id ="starleft"></i>
      </div>
  </Layout>
)

export default IndexPage
