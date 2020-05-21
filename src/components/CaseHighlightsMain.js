import React from 'react';

import TopInfo from './TopInfo';
import LeftAlignInfoList from './LeftAlignInfoList';

import topInfoData from '../data/casehighlightsdata/casehightopinfo';
import masteelintro from '../data/casehighlightsdata/masteelintro';

const CaseHighlightsMain = (props) => {
    const { language } = props;
    return (
        <div>
            <TopInfo language={language} data={topInfoData} scrollTarget="#masteel" />
            <LeftAlignInfoList language={language} data={masteelintro} scrollTargetId="masteel" />
        </div>
    )
}

export default CaseHighlightsMain;