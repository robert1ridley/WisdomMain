import React from 'react';
import { Row, Col } from 'react-bootstrap';
import '../styles/certified.css';


const Certified = (props) => {
	const { data, index, language } = props;
	const sectionData = data[index];
	return (
		<div className="container component-container">
			<h1 className="text-center chinese-section-header">
				{sectionData.head[language]}
			</h1>
			<Row>
				{sectionData.text.map((cert, index) => 
					<Col md={3} key={index}>
						<div className="rounded-apt-card">
							<p style={{paddingTop: 20}} className="text-center chinese-section-body">{cert[language]}</p>
						</div>
					</Col>
				)}
			</Row>
		</div>
	)
}

export default Certified;