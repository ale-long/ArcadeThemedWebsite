import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "../components/style/content.css"
import {graphql, StaticQuery} from 'gatsby'
import Post from '../components/Post'

const BlogPage = () => (
  <Layout>
    <SEO title="About" />
    <div className = "center">
    <h1>Blog</h1>
    <StaticQuery query={indexQuery} render={data =>{
        return(
            <div>
                {data.allMarkdownRemark.edges.map(({ node })=>(
                    <Post title={node.frontmatter.title}
                    key={node.id}
                    author={node.frontmatter.author}
                    date={node.frontmatter.date}
                    body= {node.excerpt}
                    path = {node.frontmatter.path}
                    fluid={node.frontmatter.image.childImageSharp.fluid}/>
        ))}
            </div>
        )
    }}/>
    </div>
  </Layout>
)

const indexQuery = graphql`
query{
    allMarkdownRemark(sort: {fields: [frontmatter___date], order:DESC}){
      edges{
        node{
          id
          frontmatter{
            title
            date(formatString: "MMM Do YYYY")
            author
            path
            image {
                childImageSharp{
                    fluid(maxWidth: 600){
                        ...GatsbyImageSharpFluid
                    }
                }
            }
          }
          excerpt
        }
      }
    }
  }  
`

export default BlogPage