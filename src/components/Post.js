import React from 'react'
import {Link} from 'gatsby'
import {Card, CardTitle, CardText, CardSubtitle, CardBody} from 'reactstrap'
import Img from 'gatsby-image'
import "../../node_modules/nes.css/css/nes.css";
import "./style/content.css"

const Post = ({title, author, path, date, body, fluid}) => {
    return(
        <Card>
            <Link to ={path}>
            <Img className ="card-image-top" fluid={fluid}/>
            </Link>
            <CardBody>
                <CardTitle>
                <Link to ={path}>{title}</Link>
                </CardTitle>
                <CardSubtitle>
                <span className= "text-info">{date}</span> by{' '}
                <span className = "text-info">{author}</span>
                </CardSubtitle>
                <CardText>
                    {body}
                </CardText>
                <Link to= {path} className = "btn btn-outline-primary float-right"> Read Post</Link>
                <div class = "nes-badge is-icon" id="tag1">
                    <a href="https://nostalgic-css.github.io/NES.css/">
                <span class="is-warning"><i class ="nes-icon star is-small"></i></span>
                <span class="is-primary">tag#1</span>
                </a>
                </div>
                <div class = "nes-badge is-icon" id="tag2">
                <a href="https://nostalgic-css.github.io/NES.css/">
                <span class="is-warning"><i class ="nes-icon star is-small"></i></span>
                <span class="is-success">tag#2</span>
                </a>
                </div>
            </CardBody>
        </Card>
    )
}

export default Post