import React from 'react';
import AccordianV2 from './AccordionV2';

const GenericCases = (props) => {
    const { language, casesData } = props;
    return (
        <div className="container component-container">
            <AccordianV2
                language={language}
                data={casesData}
            />
        </div>
    )
}

export default GenericCases;