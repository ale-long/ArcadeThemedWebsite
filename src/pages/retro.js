import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "../components/style/content.css"
import "../../node_modules/nes.css/css/nes.css";

const RetroPage = () => (
  <Layout>
    <SEO title="Retro" />
    <div className = "center">
    <h1> Retro Theme Page</h1>
    </div>
    <br></br>
    <div className = "nes-container with-title">
        <h2 className="title"> First-Container</h2>
        <div id="texts" className ="item">
          <span className="nes-text is-primary"> Text</span>
        </div>
    </div>
    <br></br>
    <div className = "nes-container with-title">
        <h3 className="title"> Buttons </h3>
        <div id="buttons" className ="buttonitem">
          <a class="nes-btn is-primary" href="/">
            Go Home
          </a>
          <a class="nes-btn is-success" href="/blog">
            Go To Blog
          </a>
          <a class="nes-btn is-success" href="/about">
            Go To About Section
          </a>
        </div>
    </div>
    <br></br>
    <div className = "nes-container with-title">
        <h2 className="title"> Application Form</h2>
        <div className ="nes-field">
          <label id ="name">Name</label>
          <input class="nes-input"></input>
        </div>
        <div className ="nes-field">
          <label id ="name">What year are you in?</label>
          <div class ="nes-select">
            <select required id="deafult_select">
            <option value disabled selected hidden>Select Your Year</option>
            <option value ="0">Freshman</option>
            <option value ="1">Sophomore</option>
            <option value ="2">Junior</option>
            <option value ="3">Senior</option>
            </select>
          </div>
          </div>
          <div class= "nes-field">
            <label id ="name">Do You Have A Team?</label>
            <input type ="checkbox" class ="nes-checkbox" id="Yes"></input>
            <span>Yes</span>
            <input type ="checkbox" class ="nes-checkbox" id="No"></input>
            <span>No</span>
          </div>
        </div>
        <div id ="progressbar">
            <progress class ="nes-progress is-primary" value="10" max="100"></progress>
        </div>
  </Layout>
)

export default RetroPage