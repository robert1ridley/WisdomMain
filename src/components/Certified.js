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
					<Col md={3} sm={4} xs={6} key={index} style={{borderSpacing: '0px 10px'}}>
						<div className="rounded-apt-card text-center chinese-section-body" style={{verticalAlign: 'middle', width: 'inherit', display: 'table-cell'}}>
							{cert[language]}
						</div>
					</Col>
				)}
			</Row>
		</div>
	)
}

export default Certified;