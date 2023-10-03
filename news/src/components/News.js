import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Newsitem from './Newsitem'



export class News extends Component {
  static defaultProps={
    country:'in',
    pageSize:10,
    category:'general'

  }
   static propTypes={
    country: PropTypes.string,
    pageSize:PropTypes.number,
    category:PropTypes.string

   }
   
    capitalizeFirstLetter=(string)=> {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

 constructor(){
        super();
        this.state={
            articles:[],
            loading:false,
            page:1
        }
    }

    async UpdateNews(){
      const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=feafef16d8e34bc190ee8315faa38be1&page=${this.state.page}&pageSize=${this.props.pageSize}`;
      let data=await fetch(url)
      let parseddata =await data.json();
      this.setState({articles: parseddata.articles , totalArticles:parseddata.totalResults})

    }

    async componentDidMount(){
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=feafef16d8e34bc190ee8315faa38be1&page=1&pageSize=${this.props.pageSize}`;
      let data=await fetch(url)
      let parseddata =await data.json();
      this.setState({articles: parseddata.articles , totalArticles:parseddata.totalResults})
    }


    backclick= async ()=>{
     /* let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=feafef16d8e34bc190ee8315faa38be1&page= ${ this.state.page - 1}&pageSize=${this.props.pageSize}`;
      let data=await fetch(url)
      let parseddata =await data.json();
      this.setState({articles: parseddata.articles})*/

      this.setState({
        page:this.state.page - 1,

      })
      this.UpdateNews();

    }

    nextclick= async ()=>{
      if(this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize))
      {
      }
     else{
        /*let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&ca&apiKey=feafef16d8e34bc190ee8315faa38be1&page= ${ this.state.page +1}&pageSize=${this.props.pageSize}`;
      let data=await fetch(url)
      let parseddata =await data.json();
      this.setState({articles: parseddata.articles})*/

      this.setState({
        page:this.state.page + 1,
     
      })
      this.UpdateNews();
    }

    }

  render() {
   
    
    return (
      <div className='container my-3' >
      <h1 className='text-center' style={{margin:'40px',marginTop:'90px'}}>NewsNow-Top Headlines from {this.capitalizeFirstLetter(this.props.category)}</h1>
        


        
          <div className="row">
          {this.state.articles.map((element)=>{
            return  < div className="col md-4" key={element.url}>
            <Newsitem title={element.title.slice(0,45)} description={element.description ? element.description.slice(0,88) : ''}  imageUrl={element.urlToImage?element.urlToImage:"https://c8.alamy.com/comp/EDBHH3/illustrative-image-of-the-daily-mail-newspaper-EDBHH3.jpg"} newsUrl={element.url} date={element.publishedAt}/>
            </div>
          })}
              
          <div className="container d-flex justify-content-between">
          <button disabled={this.state.page<=1} onClick={this.backclick} type="button" className="btn btn-dark">&larr; Previous</button>
          <button disabled={(this.state.page +1)> Math.ceil(this.state.totalResults/this.props.pageSize)} onClick={this.nextclick} type="button" className="btn btn-dark">Next &rarr;</button>
          </div>
         
       
        </div>
       
      </div>
    )
  }
}

export default News
