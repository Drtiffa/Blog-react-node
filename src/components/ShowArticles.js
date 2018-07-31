import React, { Component } from 'react'
import ShowArticle from './ShowArticle'


class ShowArticles extends Component {
    state = {
        articles : [
          {titre : "Premier article", date : "05/02/2019", text : "Hello darkness my friends ! I can't to talk with you again !"}
        ]
      }
    componentDidMount() {
        fetch('http://localhost:5678/api/article')
        .then(res => res.json())
        .then(response => {
            
            console.log(response)
            this.setState({articles:response})
            
            
          })
          .catch(function(error) {
            console.log('Il y a eu un problème avec l\'opération fetch: ' + error.message);
          });
    }


    render() {
        const renderArticles = this.state.articles.map((article, index) => <ShowArticle  key={index} titre={article.titre} date={article.date} text={article.text}/>)
        return (
            <div>
            <h1> Les articles </h1>
            <div className="col-md-8 text-center">{renderArticles}</div>
            </div>
        )
    }
}

export default ShowArticles