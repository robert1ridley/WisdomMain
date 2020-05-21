import React from 'react';
import ContactHead from '../headers/ContactHead';
import MainContactForm from '../components/MainContactForm';
import ContactList from '../components/ContactList';
import {connect} from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import wechatCode from '../images/wechat-code.jpg';


const Follow = (props) => {
	const { language } = props;
	return (
		<div className="text-center" style={{borderBottom: "1px solid #f2f3f5", borderTop: "1px solid #f2f3f5", padding: 25, marginBottom: 60}}>
			<h1 className="chinese-section-header" style={{marginBottom: 0}}>
				{language === "zh"? "关注我们": "Follow us"}
				<span className="wechat-container">
					<span className="weixin_icon" />
					<span id="two"><img src={wechatCode} style={{height: 200}} alt="微信关注" /></span>
				</span>
				<a href="https://www.linkedin.com/company/jswisdom/" target="_blank" rel="noopener noreferrer">
					<span className="linkedin" />
				</a>
			</h1>
		</div>
	)
}

const Contact = (props) => {
	const { language } = props;
	return (
		<div>
			<ContactHead />
			<div className="container big-lower-margin wow fadeIn">
				<div className="text-center central-info">
					<h1 className="chinese-section-header">{language === "zh"? "联系我们": "Contact us"}</h1>
				</div>
				<Row>
					<Col md={4}>
						<ContactList language={language}/>
					</Col>
					<Col md={8}>
						<MainContactForm language={language}/>
					</Col>
				</Row>
			</div>
			<Follow language={language} />
		</div>
	)
}

function mapStateToProps(state) {
	console.log(state.language)
	return {
		language: state.language
	};
}

export default connect(mapStateToProps)(Contact);