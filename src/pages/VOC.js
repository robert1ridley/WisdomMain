import React from 'react';
import {connect} from 'react-redux';
import { Route } from 'react-router-dom';

import VOCHead from '../headers/VOCHead';
import GenericTech from '../components/GenericTech';
import GenericCases from '../components/GenericCases';
import Subnav from '../components/Subnav';
import NotFound from '../pages/NotFound';

import vocheaddata from '../data/voc/vocheaddata';
import vocbasicdata from '../data/voc/vocbasic';
import vocsolutions from '../data/voc/vocsolutions';
import voccases from '../data/voc/voccases';

import background14 from '../images/subnav/background14.jpg';

class VOC extends React.Component {
    constructor() {
        super();
        this.changeActive = this.changeActive.bind(this);
        this.state = { 
            activeIndex: 0,
            notFound: false
        }
    }

    changeActive(active) {
        this.setState({ activeIndex: active })
    }

    componentWillReceiveProps(nextProps) {
        const pageId = nextProps.match.params.id;
        if (this.props.match.params.id !== pageId){
            const foundIndex = vocbasicdata.findIndex((el) => (el.id === pageId));
            foundIndex<0 ?
            this.setState ({
                notFound: true
            }):
            this.setState({
                activeIndex: foundIndex
            })
        }
    }

    componentDidMount() {
        const pageId = this.props.match.params.id;
        const foundIndex = vocbasicdata.findIndex((el) => (el.id === pageId));
        foundIndex<0 ?
        this.setState ({
            notFound: true
        }):
        this.setState({
            activeIndex: foundIndex
        })
    }
  
    render() {
        const { activeIndex, notFound } = this.state;
        const { language } = this.props;
        const navData = vocbasicdata;
        if(notFound){
            return (<NotFound/>)
        }
        else{
            return (
                <div>
                    <VOCHead />
                    <Subnav
                        path="mission/voc"
                        language={language}
                        intro={vocheaddata}
                        aboutData={navData}
                        currentActive={activeIndex}
                        childActive={this.changeActive}
                        background={styles.subnav}
                    />
                    {
                        <Route path={`/mission/voc/:id`} exact render={(props) => 
                            {
                                console.log(navData[activeIndex].template)
                                switch(navData[activeIndex].template) {
                                    case('standard'):
                                        return (
                                            <GenericTech 
                                                language={language} 
                                                currentData={navData[activeIndex]} 
                                                solutionsData={vocsolutions}
                                            />
                                        )
                                    case('standard2'):
                                        return (
                                            <GenericCases
                                                language={language}
                                                casesData={voccases}
                                                {...props}
                                            />
                                        )
                                    default:
                                        return (<NotFound />)
                                }
                            }            
                        }/>
                    }
                </div>
            )
        }
    }
}

const styles = {
    subnav: { 
        background: 'url(' + background14 + ')'
    }
}

function mapStateToProps(state) {
    console.log(state.language)
    return {
        language: state.language
    };
}

export default connect(mapStateToProps)(VOC);