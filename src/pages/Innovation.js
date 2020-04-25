import React from 'react';
import {connect} from 'react-redux';
import { Route } from 'react-router-dom';

import InnovationHead from '../headers/InnovationHead';
import Subnav from '../components/Subnav';
import Research from '../components/Research';
import InfoCards from '../components/InfoCards';
import Certified from '../components/Certified';
import NotFound from '../pages/NotFound';

import innovationheaddata from '../data/innovationheaddata';
import innovationdatabasic from '../data/innovationdatabasic';

import background14 from '../images/subnav/background14.jpg';

class Innovation extends React.Component {
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
            const foundIndex = innovationdatabasic.findIndex((el) => (el.id === pageId));
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
        const foundIndex = innovationdatabasic.findIndex((el) => (el.id === pageId));
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
        const navData = innovationdatabasic;
        if(notFound){
            return (<NotFound/>)
        }
        else{
            return (
                <div>
                    <InnovationHead />
                    <Subnav
                        path="innovation"
                        language={language}
                        intro={innovationheaddata}
                        aboutData={navData}
                        currentActive={activeIndex}
                        childActive={this.changeActive}
                        background={styles.subnav}
                    />
                    {
                        <Route path={`/innovation/:id`} exact render={(props) => 
                            {
                                console.log(navData[activeIndex].template)
                                switch(navData[activeIndex].template) {
                                case('standard'):
                                    return (
                                        <Research language={language}/>
                                    )
                                case('experts'):
                                    return (
                                        <InfoCards
                                            language={language}
                                            {...props}
                                        />
                                    )
                                case('ip'):
                                    return (
                                        <Certified
                                            language={language}
                                            data={navData}
                                            index={activeIndex}
                                            {...props}
                                        />
                                    )
                                default:
                                    return (<NotFound/>)
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

export default connect(mapStateToProps)(Innovation);