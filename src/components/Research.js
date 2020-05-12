import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';
import researchprojectdata from '../data/researchprojectdata';
import facilityData from '../data/researchfacilitydata';
import researchTeamData from '../data/researchteamdata';
import backgroundImage from '../images/subnav/background15.jpg';
import '../styles/research.css';

const head = {
    'zh': '专家委员会',
    'en': 'Research and Development'
}

const facilityHead = {
    'zh': '膜科学研究所',
    'en': 'Membrane Science Institute'
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
        activeText: researchprojectdata[0][this.props.language]
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

    render(){
        const { language } = this.props;
        const { activeId, activeImgUrl, activeText } = this.state;
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
                    <Link to="/">
                        <p 
                            className="text-center" 
                            style={{fontFamily: "PingFangSC-Semibold", fontSize: 16}}
                        >
                            了解更多
                        </p>
                    </Link>
                </Col>
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
        <Row>
            <Col md={6} className="pad-right">
                <ul>
                    {
                        facilityData[language].map((bullet, index) => 
                            <li key={index} className="chinese-section-body">
                                {bullet}
                            </li>
                        )
                    }
                </ul>
            </Col>
            <Col md={6} className="pad-left">
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

const ResearchTeamInfo = (props) => {
    const { language } = props;
    return (
        <ul>
            {
                researchTeamData[language].map((bullet, index) => 
                    <li key={index} className="chinese-section-body">
                        {bullet}
                    </li>
                )
            }
        </ul>
    )
}

class SingleTeamData extends React.Component {
    state = {
        dataIndex: 0
    }

    componentDidMount() {
        this.setState({
            dataIndex: this.props.index
        })
    }

    render() {
        const { language, datum } = this.props;
        const borderStyle = this.state.dataIndex !== 0 ? 'with-border-img' : 'no-border-img';
        const somePadding = this.state.dataIndex > 1  ? 'padding-top' : '';
        return (
            <Col md={3} sm={6} xs={6} className='column-padding fix-height'>
                <div className={borderStyle}>
                    <p 
                        className="text-center white chinese-section-body" 
                        style={{fontSize: 50, marginBottom: 0, paddingBottom: 0}}
                    >
                        {datum.big[language]}
                    </p>
                    <p className={"text-center white chinese-section-body " + somePadding}>{datum.small[language]}</p>
                </div>
            </Col>
        )
    }
}

const ResearchTeam = (props) => {
    const { language } = props;
    return (
        <div>
            <div className="container" style={{paddingTop: 30, paddingBottom: 30}}>
                <h1 className="text-center chinese-section-header">
                    {teamHead[language]}
                </h1>
                <ResearchTeamInfo language={language} />
            </div>
            <div className="background-loaded" style={styles.background}>
                <h1 className="text-center chinese-section-header white">
                    学术队伍
                </h1>
                <div className=" container padding-on-big">
                    {teamDetails.map((datum, index) => 
                        <SingleTeamData 
                            key={index} 
                            datum={datum} 
                            language={language}
                            index={index}
                        />
                    )}
                </div>
            </div>
            <div className="container" style={{paddingTop: 30, paddingBottom: 30}}>
                <h1 className="text-center chinese-section-header">
                    产业化队伍
                </h1>
                <p className="chinese-section-body">以研究所为技术依托，建立了集研发、生产、销售为一体的产业化团队。培养膜行业30多位企业总经理，衍生、孵化出数十家高科技企业，打造专业化的膜科技产业园。</p>
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
            <ResearchTeam language={language}/>
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
    }
}

export default Research;