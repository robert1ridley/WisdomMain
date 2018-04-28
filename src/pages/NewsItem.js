import React from 'react';
import ParagraphsNew from '../components/ParagraphsNew';
import NewsText from '../components/NewsText';

class NewsItem extends React.Component {
  render() {
    const { data, language } = this.props;
    const postId = this.props.match.params.postid;
    const article = data.filter((matchedArticle) => matchedArticle.id === Number(postId))
    // console.log(article)
    return (
      // <ParagraphsNew language={this.props.language} data={navData} />
      <NewsText
        data={article}
        language={language}
      />
    )
  }
}

export default NewsItem;