import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import '../styles/accordion.css';
import expand from '../images/icons/expand.png';
import collapse from '../images/icons/collapse.png';

class AccordionV2 extends React.Component {
  	state = {
    	activePanelIndex: 0
  	}

  	changeActivePanel = (newIndex) => {
    	this.setState({
     		activePanelIndex: newIndex
    	})
  	}

  	render () {
    	const { data,language } = this.props;
    	return (
      		<div className="container main-content-container" style={{marginTop: 40, marginBottom: 40}}>
        		{
          			data.map((item, index) => 
            			<div key={index} className="accordion-item-container">
              				<button  
								className={this.state.activePanelIndex === index ? "active-accordion" : "accordion"}
								onClick={() => this.changeActivePanel(index)}
							>
								<div className="accordion-flex-container">
									<span className={language === 'zh' ? 'accordion-chinese' : 'accordion-english'}>
										{item.articleHead[language]}
									</span>
									<span>
										<img 
											src={this.state.activePanelIndex === index ? collapse : expand} 
											className={this.state.activePanelIndex === index ? 'panel-collapse' : 'panel-expand'}
											alt={item.articleHead[language]}
										/>
									</span>
								</div>
              				</button>
              				<div className={this.state.activePanelIndex === index ? "active-panel" : "panel"}>
                				<Row style={{paddingLeft: 40, paddingRight: 29}}>
                  					<Col md={7} lg={7} style={{paddingLeft: 0, paddingRight: 0}}>
                    					<div className="accordion-image-container">
											<Image
												style={{width: "100%"}} 
												src={item.articleImage}
												responsive
											/>
                    					</div>
                  					</Col>
									<Col md={5} lg={5} style={{paddingRight: 0, paddingLeft: 0}}>
										<div className="accordion-text-container">
											<p className={language === 'zh' ? 'panel-chinese' : 'panel-english'}>{item.articleText[language]}</p>
										</div>
									</Col>
                				</Row>
              				</div>
            			</div>           
          			)
        		}
      		</div>
    	)
  	}
}

export default AccordionV2;