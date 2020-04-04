import React from 'react';

import TopInfo from './TopInfo';
import LeftAlignInfo from './LeftAlignInfo';

import topInfoData from '../data/casehighlightsdata/casehightopinfo';
import masteelintro from '../data/casehighlightsdata/masteelintro';

const CaseHighlightsMain = (props) => {
    const { language } = props;
    return (
        <div>
            <TopInfo language={language} data={topInfoData} />
            <LeftAlignInfo language={language} data={masteelintro} />
        </div>
    )
}

export default CaseHighlightsMain;