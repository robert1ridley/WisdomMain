import React from 'react';
import SolutionCardsV2 from './SolutionCardsV2';

const GenericTech = (props) => {
    const { language, currentData, solutionsData } = props;
    return (
        <div className="container component-container">
            <p className="chinese-section-body">{currentData.intro[language]}</p>
            <SolutionCardsV2
                language={language}
                data={solutionsData}
            />
        </div>
    )
}

export default GenericTech;