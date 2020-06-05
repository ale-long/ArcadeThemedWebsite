import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "../components/style/content.css"

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <div className = "center">
    <h1> About Page </h1>
    </div>
    <br></br>
    <div className ="center" id="content">
    <p> Content</p>
    </div>
    <div className ="center" id="followus">
    <h2>Follow us on:</h2>
    <a href="https://twitter.com/hack_davis?lang=en">
    <i class="nes-icon twitter is-large" id="icon"></i>
    </a>
    <a href="https://www.facebook.com/HackDavis/">
    <i class="nes-icon facebook is-large" id="icon"></i>
    </a>
    <a href="https://medium.com/@HackDavis">
    <i class="nes-icon medium is-large" id="icon"></i>
    </a>
    <a href="https://www.instagram.com/hackdavis/?hl=en">
    <i class="nes-icon instagram is-large" id="icon"></i>
    </a>
    <a href="https://www.youtube.com/channel/UC_b9H8vNMAqQB6MsK-yVOzw">
    <i class="nes-icon youtube is-large" id="icon"></i>
    </a>
    </div>
    <div class="align">
    <p class = "nes-balloon from-left" id="kirbybubble"> Check us out!</p>
    <p class = "nes-balloon from-left" id="ashbubble"> Gotta Catch Those HackDavis Prizes!</p>  
    </div>
    <div> 
    <i class="nes-kirby" id="kirby"></i>
    <i class ="nes-ash" id="ash"></i>
    </div>
  </Layout>
)

export default AboutPage
