import React from 'react';
import SharedIntro from './SharedIntro';

const SubNoNav = (props) => {
    const { language, intro, background } = props;
    return (
        <div
            className={"background-header"} 
            style={background}
        >
            <div style={{alignItems: 'stretch', width: '100%', backgroundColor: 'rgba(68, 149, 205, 0.4)'}}>
                <div className="container main-content-container sub-no-nav">
                    <SharedIntro
                        language={language}
                        data={intro}
                    />
                </div>
            </div>
        </div>
    )
}

export default SubNoNav;