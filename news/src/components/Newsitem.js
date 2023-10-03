import React, { Component } from 'react'

export class Newsitem extends Component {
  render() {
    let {title,description,imageUrl,newsUrl,date}=this.props;
    return (
      <div className='my-3'>
       <div className="card  mx-auto" style={{width: "18rem"}}>
  <img src={imageUrl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}....</h5>
    <p className="card-text">{description}...</p>
    <p className="card-text"><small className="text-muted">{ new Date(date).toGMTString()}</small></p>
    <a href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
  </div>
</div>
      </div>
    )
  }
}

export default Newsitem
