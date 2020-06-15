import React from 'react';

class Timeline extends React.Component {
  constructor(){
    super();
    this.state = { 
      smallScreen: false
    }
    this.calcSize = this.calcSize.bind(this);
  }

  calcSize = () => {
    if(window.innerWidth<1025){
      this.setState({smallScreen: true})
    }
    else {
      this.setState({smallScreen: false})
    }
  }
  
  componentDidMount() {
    window.addEventListener('resize', this.calcSize)
    this.calcSize();
  }
  
  componentWillUnmount(){
    window.removeEventListener('resize', this.calcSize)
  }

  render() {
    const { language, data, index } = this.props;
    const { smallScreen } = this.state;
    return (
      <div className="container component-container">
        <h1 className="text-center chinese-section-header">大事记</h1>
        <ul className="timeline">
        {
          data[index].text.map((item, index) =>
          <li 
            key={index}
            className={index%2!==0 && !smallScreen ? "timeline-inverted" : ""}
          >
            <div className="timeline-badge"><i className="glyphicon glyphicon-check"></i></div>
            <div className="timeline-panel">
              <div className="timeline-heading">
                <h4 className="timeline-title medium-head text-center">{item.subHead[language]}</h4>
              </div>
              <div className="timeline-body">
              <ul className="inner-list">
              {item.subText.map((paragraph, idx) => 
                <li key={idx} className="chinese-section-body">{paragraph[language]}</li>
              )}
              </ul>
              </div>
            </div>
          </li>
        )
        }
        </ul>
      </div>
    )
  }
}

export default Timeline;