import React from 'react';
import {connect} from 'react-redux';
import { Route } from 'react-router-dom';

import CompHead from '../headers/CompHead';
import GenericTech from '../components/GenericTech';
import GenericCases from '../components/GenericCases';
import Subnav from '../components/Subnav';
import NotFound from '../pages/NotFound';

import compheaddata from '../data/comprehensive/compheaddata';
import compbasicdata from '../data/comprehensive/compbasic';
import compsolutions from '../data/comprehensive/compsolutions';
import compcases from '../data/comprehensive/compcases';

import background14 from '../images/subnav/background14.jpg';

class Comp extends React.Component {
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
            const foundIndex = compbasicdata.findIndex((el) => (el.id === pageId));
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
        const foundIndex = compbasicdata.findIndex((el) => (el.id === pageId));
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
        const navData = compbasicdata;
        if(notFound){
            return (<NotFound/>)
        }
        else{
            return (
                <div>
                    <CompHead />
                    <Subnav
                        path="mission/comprehensive"
                        language={language}
                        intro={compheaddata}
                        aboutData={navData}
                        currentActive={activeIndex}
                        childActive={this.changeActive}
                        background={styles.subnav}
                    />
                    {
                        <Route path={`/mission/comprehensive/:id`} exact render={(props) => 
                            {
                                console.log(navData[activeIndex].template)
                                switch(navData[activeIndex].template) {
                                    case('standard'):
                                        return (
                                            <GenericTech 
                                                language={language} 
                                                currentData={navData[activeIndex]} 
                                                solutionsData={compsolutions}
                                            />
                                        )
                                    case('standard2'):
                                        return (
                                            <GenericCases
                                                language={language}
                                                casesData={compcases}
                                                {...props}
                                            />
                                        )
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

export default connect(mapStateToProps)(Comp);