import React from 'react';
import NewsText from '../components/NewsText';

class NewsItem extends React.Component {

  render() {
    const { data, language, notFound } = this.props;
    const postId = this.props.match.params.postid;
    const article = data.filter((matchedArticle) => matchedArticle.id === (postId))
    if(article.length === 0){
      notFound()
      return <div />
    }
    else {
      return (
        <NewsText
          data={article}
          language={language}
        />
      )
    }  
  }
}

export default NewsItem;