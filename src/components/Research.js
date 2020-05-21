import React from 'react';
import { Col, Row } from 'react-bootstrap';
import InfoModal from './InfoModal';
import researchprojectdata from '../data/researchprojectdata';
import facilityData from '../data/researchfacilitydata';
import platformData from '../data/researchplatformdata';
import researchTeamData from '../data/researchteamdata';
import backgroundImage from '../images/subnav/background15.jpg';
import topStrokeImg from '../images/mission/topstroke.png';
import topStrokeGreenReverseImg from '../images/mission/topstrokegreenreverse.png';
import '../styles/research.css';
import '../styles/left-align.css';

const head = {
    'zh': '技术创新',
    'en': 'Research and Development'
}

const facilityHead = {
    'zh': '江苏智道研究院',
    'en': '江苏智道研究院'
}

const teamHead = {
    'zh': '科研队伍',
    'en': 'Research Team'
}

const teamDetails = [
    {
        'big': {
            'zh': '200多',
            'en': '200多'
        },
        'small': {
            'zh': '研究人员',
            'en': '研究人员'
        }
    },
    {
        'big': {
            'zh': '20',
            'en': '20'
        },
        'small': {
            'zh': '高级职称余人',
            'en': '高级职称余人'
        }
    },
    {
        'big': {
            'zh': ' ',
            'en': ' '
        },
        'small': {
            'zh': '江苏省优势学科梯队',
            'en': '江苏省优势学科梯队'
        }
    },
    {
        'big': {
            'zh': ' ',
            'en': ' '
        },
        'small': {
            'zh': '教育部创新团队发展计划',
            'en': '教育部创新团队发展计划'
        }
    }
]

class Projects extends React.Component {
    state = {
        activeId: 0,
        activeImgUrl: researchprojectdata[0].imgUrl,
        activeText: researchprojectdata[0][this.props.language],
        show: false
    }

    componentDidMount() {
        const { language } = this.props;
        this.setState({
            activeId: researchprojectdata[0].id,
            activeImgUrl: researchprojectdata[0].imgUrl,
            activeText: researchprojectdata[0][language]
        })
    }

    updateActive(activeProject){
        const { language } = this.props;
        const activeId = activeProject.id
        const activeImage = activeProject.imgUrl
        const activeText = activeProject[language]
        this.setState({
            activeId: activeId,
            activeImgUrl: activeImage,
            activeText: activeText
        })
    }

    handleClose() {
    	this.setState({ show: false, num: 'nnn' });
  	}

  	handleShow() {
    	this.setState({ show: true });
  	}

    render(){
        const { language } = this.props;
        const { activeId, activeImgUrl, activeText, show } = this.state;
        const activeArticles = researchprojectdata.filter(x => x.id === activeId);
        const activeArticle = activeArticles[0].moreInfo;
        return (
            <Row style={{minHeight: 294}}>
                <Col md={4}>
                    <div>
                        <ul style={{listStyleType: 'none'}}>
                        {
                            researchprojectdata.map((project) => 
                                <li 
                                    style={project.id === activeId ? styles.blueTextColor : styles.regularTextColor} 
                                    key={project.id} 
                                    className="chinese-section-body"
                                    onClick={() => this.updateActive(project)}
                                >
                                    {project[language].tagline}
                                </li>
                            )
                        }
                        </ul>
                    </div>
                </Col>
                <Col md={4}>
                    <img className="img-responsive" style={{width: '100%', marginBottom: 25}} src={activeImgUrl} alt={activeText.head} />
                </Col>
                <Col md={4}>
                    <h1 className="chinese-section-header" style={{fontSize: 22, marginTop: 0}}>{activeText.tagline}</h1>
                    <p className="chinese-section-body" style={{fontSize: 14, color: '#666'}}><span style={{color: "#4495cd"}}><strong>–</strong> </span> {activeText.head}</p>
                    <p className="chinese-section-body">{activeText.body}</p>
                    {
                        activeArticle &&
                        <p 
                            onClick={() => this.handleShow()}
                            className="text-center" 
                            style={{fontFamily: "PingFangSC-Semibold", fontSize: 16, color: '#4495cd', cursor: 'pointer'}}
                        >
                            了解更多
                        </p>
                    }
                </Col>
                {
                    activeArticle &&
                    <InfoModal
                        language={language}
                        showModal={show}
                        close={() => this.handleClose()}
                        data={activeArticle}
                    />
                }
            </Row>
        )
    }
}

const ResearchProjects = (props) => {
    const { language } = props;
    return (
        <div className="container component-container">
            <h1 className="text-center chinese-section-header">
                {head[language]}
            </h1>
            <Projects language={language} />
        </div>
    )
}

const FactilityInfo = (props) => {
    const { language } = props;
    return (
        <Row className="outer-row">
            <Col md={7} sm={6} className="align-self-center">
                <div style={{margin: 'auto'}}>
                    <img src={topStrokeImg} style={{width: 130}} alt="" />
                    <p className="chinese-section-body" 
                        style={styles.smallHeading}>
                        {facilityData.head[language]}
                    </p>
                    {
                        facilityData[language].map((bullet, index) => 
                            <p key={index} className="chinese-section-body">{bullet}</p>
                        )
                    }
                </div>
            </Col>
            <Col md={5} sm={6} className="pad-left">
                <img className="img-responsive" style={{width: '100%'}} src={facilityData.imgUrl} alt="研究院" />
            </Col>
        </Row>
    )
}


const ResearchFacility = (props) => {
    const { language } = props;
    return (
        <div style={{backgroundColor: '#EFF1F2'}}>
            <div className="container" style={{paddingTop: 30, paddingBottom: 50}}>
                <h1 className="text-center chinese-section-header">
                    {facilityHead[language]}
                </h1>
                <FactilityInfo language={language} />
            </div>
        </div>
    )
}

const PlatformInfo = (props) => {
    const { language } = props;
    return (
        <Row className="outer-row">
            <Col md={5} sm={6}>
                <div className="img-container text-center">
                    <img 
                        className="img-responsive" 
                        src={platformData.imgUrl} 
                        style={{width: '100%'}}
                        alt={platformData.imgCaption[language]}
                    />
                    <div className="caption-green">
                        <p className="medium-body">{platformData.imgCaption[language]}</p>
                    </div>
                </div>
            </Col>
            <Col md={7} sm={6} className="align-self-center">
                <div style={{margin: 'auto'}}>
                    <img src={topStrokeGreenReverseImg} alt="" style={{width: 130, float: 'right'}} />
                    <p className="chinese-section-body" 
                        style={styles.rightSmallHeading}>
                        {platformData.head[language]}
                    </p>
                    {
                        platformData[language].map((para, index) => 
                            <p key={index} className="chinese-section-body">{para}</p>
                        )
                    }
                </div>
            </Col>
        </Row>
    )
}

const ResearchPlatform = (props) => {
    const { language } = props;
    return (
        <div className="container" style={{paddingTop: 30, paddingBottom: 50}}>
            <PlatformInfo language={language} />
        </div>
    )
}

const ResearchTeamInfov2 = (props) => {
    const { language } = props;
    return (
        <Row className="outer-row">
            <Col md={6} sm={6} className="align-self-center">
                <div style={{margin: 'auto', marginLeft: 0}}>
                    <img src={topStrokeImg} style={{width: 130}} alt="" />
                    <p className="chinese-section-body" 
                        style={styles.smallHeading}>
                        {researchTeamData.head[language]}
                    </p>
                    <ul>
                        {
                            researchTeamData[language].map((bullet, index) => 
                                <li key={index} className="chinese-section-body">{bullet}</li>
                            )
                        }
                    </ul>
                </div>
            </Col>
            <Col md={6} sm={6} className="pad-left">
                <img className="img-responsive" style={{width: '100%'}} src={researchTeamData.imgUrl} alt="研究团" />
            </Col>
        </Row>
    )
}

const ResearchTeamV2 = (props) => {
    const { language } = props;
    return (
        <div style={{backgroundColor: '#EFF1F2'}}>
            <div className="container" style={{paddingTop: 30, paddingBottom: 50}}>
                <ResearchTeamInfov2 language={language} />
            </div>
        </div>
    )
}

const Research = (props) => {
	const { language } = props;
	return (
        <div>
            <ResearchProjects language={language}/>
            <ResearchFacility language={language}/>
            <ResearchPlatform language={language}/>
            <ResearchTeamV2 language={language}/>
        </div>
	)
}

const styles = {
    background: {
        backgroundImage: 'url(' + backgroundImage + ')',
        paddingTop: 30,
        paddingBottom: 30
    },

    blueTextColor: {
        color: '#4495cd',
        fontFamily: 'PingFangSC-Semibold',
        marginBottom: 15,
        cursor: 'pointer'
    },

    regularTextColor: {
        marginBottom: 15,
        cursor: 'pointer'
    },

    smallHeading: {
        marginTop: 5, 
        fontFamily: 'PingFangSC-Semibold'
    },

    rightSmallHeading: {
        marginTop: 17, 
        fontFamily: 'PingFangSC-Semibold', 
        textAlign: 'right', 
        clear: 'right'
    },
}

export default Research;