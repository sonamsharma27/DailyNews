import React from 'react'
import './NewsItem.css'
import 'tachyons'
const NewsItem =(props) => {
    
      let {title, description, urlToImage, url, author, date,source} = props;
        return (
<div className="card grow ba b--black my-3 mx-3" style={{backgroundImage:"radial-gradient( circle farthest-corner at 22.4% 21.7%, rgba(4,189,228,1) 0%, rgba(2,83,185,1) 100.2% )"}}>
<span className="position-absolute rounded-pill top-0  badge  badge-danger " style={{right:"0%", }}>{source.name}</span>
  <img className="card-img-top" style={{height: "180px"}} src={urlToImage?urlToImage:"https://media.istockphoto.com/photos/abstract-digital-news-concept-picture-id1290904409?b=1&k=20&m=1290904409&s=170667a&w=0&h=6khncht98kwYG-l7bdeWfBNs_GGcG1pDqzLb6ZXhh7I="} alt="Newsimage" />
  <div className="card-body">
    <h5 className="card-title">{title?title.slice(0,15):""}...</h5>
    <p className="card-text">{description?description.slice(0,85):""}.....</p>
    <p className="card-text"><small className="">By {author?author:"Unknown"} on {new Date(date).toGMTString()}</small></p>
    <a href={url} target="_blank" className="btn btn-light " rel="noreferrer" style={{backgroundImage:"linear-gradient( 109.6deg, rgba(156,252,248,1) 11.2%, rgba(110,123,251,1) 91.1% )"}}>Read more</a>
  </div>
</div>
        )
    
}

export default NewsItem
