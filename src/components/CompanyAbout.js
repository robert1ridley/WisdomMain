import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import backgroundImage from '../images/about/factory_opaque.png';
import moleculeIcon from '../images/about/molecule-icon.png';
import recycleIcon from '../images/about/recycle-icon.png';
import burnIcon from '../images/about/burn-icon.png';
import industryIcon from '../images/about/industry-icon.png';
import companyCultureImage from '../images/about/company-culture.png';


const basicIntroData = {
    'zh': {
        'head': '公司简介',
        'body': [
            '江苏智道工程技术有限公司是以膜技术工程应用为核心，集研发、设计、核心制造和工程总承包为一体；工业企业系统能量综合利用、有效成分回收和净化处理达标排放的节能环保专业工程公司。',
            '公司为国家高新技术企业，中美绿色合作计划成员，国家工信部工业节能诊断服务提供单位，南京节能环保产业协会会长单位。“智道商标”为江苏省、南京市著名商标。公司具有技术优势、创新优势和服务优势的核心竞争力，拥有由国内外院士、行业专家组成的专家委员会，为公司的技术、装备领先提供了强有力的保证。开发的多项节能环保技术专利成果，国际水平，国内领先，并成功实现了规模产业化，为客户同时带来了理想的经济效益与社会效益。',
            '科技净化环境，与客户共成功；大家智道，感恩有您！'
        ]
    },
    'en': {
        'head': '公司简介',
        'body': [
            '江苏智道工程技术有限公司是以膜技术工程应用为核心，集研发、设计、核心制造和工程总承包为一体；工业企业系统能量综合利用、有效成分回收和净化处理达标排放的节能环保专业工程公司。',
            '公司为国家高新技术企业，中美绿色合作计划成员，国家工信部工业节能诊断服务提供单位，南京节能环保产业协会会长单位。“智道商标”为江苏省、南京市著名商标。公司具有技术优势、创新优势和服务优势的核心竞争力，拥有由国内外院士、行业专家组成的专家委员会，为公司的技术、装备领先提供了强有力的保证。开发的多项节能环保技术专利成果，国际水平，国内领先，并成功实现了规模产业化，为客户同时带来了理想的经济效益与社会效益。',
            '科技净化环境，与客户共成功；大家智道，感恩有您！'
        ]
    }
}

const coreProductsData = {
    'head': {
        'zh': '核心技术支撑',
        'en': '核心技术支撑'
    },
    'body': [
        {
            'imageUrl': moleculeIcon,
            'zh': '膜技术工程应用',
            'en': '膜技术工程应用',
            'link': '/'
        },
        {
            'imageUrl': recycleIcon,
            'zh': '油气回收、VOCs治理',
            'en': '油气回收、VOCs治理',
            'link': '/'
        },
        {
            'imageUrl': burnIcon,
            'zh': '脱硫脱硝技术',
            'en': '脱硫脱硝技术',
            'link': '/'
        },
        {
            'imageUrl': industryIcon,
            'zh': '能量综合利用',
            'en': '能量综合利用',
            'link': '/'
        }
    ]
}

const companyCultureData = {
    'head': {
        'zh': '企业文化',
        'en': '企业文化'
    },
    'subhead': {
        'zh': '价值观',
        'en': '价值观'
    },
    'body': [
        {
            'zh': {
                'keyword': '责任关爱',
                'text': '是企业、个人成功的基础，是企业长久不衰的法宝，在工作中做到互信、互相尊重、有责任和担当，兼顾家庭与工作的关系。'
            },
            'en': {
                'keyword': '责任关爱',
                'text': '是企业、个人成功的基础，是企业长久不衰的法宝，在工作中做到互信、互相尊重、有责任和担当，兼顾家庭与工作的关系。'
            },
        },
        {
            'zh': {
                'keyword': '业绩团队',
                'text': '业绩是决定奖励和升迁的重要标准，团队业绩高于一切，最优秀的团队和员工得到最高的报酬和奖励。'
            },
            'en': {
                'keyword': '业绩团队',
                'text': '业绩是决定奖励和升迁的重要标准，团队业绩高于一切，最优秀的团队和员工得到最高的报酬和奖励。'
            },
        },
        {
            'zh': {
                'keyword': '创新变革',
                'text': '技术创新，永不满足，管理变革，永保活力，总是从业绩最新、从头做起，创新变革带来机遇与动力，推动企业不断发展。'
            },
            'en': {
                'keyword': '创新变革',
                'text': '技术创新，永不满足，管理变革，永保活力，总是从业绩最新、从头做起，创新变革带来机遇与动力，推动企业不断发展。'
            },
        },
        {
            'zh': {
                'keyword': '简约乐观',
                'text': '越简约越有效，细节决定成败，乐观面对艰难，办法总比困难多'
            },
            'en': {
                'keyword': '简约乐观',
                'text': '越简约越有效，细节决定成败，乐观面对艰难，办法总比困难多'
            },
        }
    ]
}

const BasicIntro = (props) => {
    const { language } = props;
    return (
        <div className="container component-container" style={styles.componentContainer}>
            <h1 className="text-center chinese-section-header">{basicIntroData[language].head}</h1>
            {basicIntroData[language].body.map((bodyItem, index) => 
                <p key={index} className="chinese-section-body">{bodyItem}</p>
            )}
        </div>
    )
}

class SinglCoreProduct extends React.Component {
    state = {
        productIndex: 0
    }

    componentDidMount() {
        this.setState({
            productIndex: this.props.index
        })
    }

    render() {
        const { language, product } = this.props;
        const borderStyle = this.state.productIndex !== 0 ? 'with-border-img' : 'no-border-img';
        return (
            <Col md={3} sm={6} xs={6} className='column-padding'>
                <Link to={product.link}>
                    <div className={borderStyle}>
                        <img className='img-responsive' src={product.imageUrl} />
                        <p className="text-center white chinese-section-body">{product[language]}</p>
                    </div>
                </Link>
            </Col>
        )
    }
}


const CoreProducts = (props) => {
    const { language } = props;
    return (
        <div className="background-loaded" style={styles.background}>
            <h1 className="text-center white chinese-section-header">{coreProductsData.head[language]}</h1>
            <Row>
                <div className=" container padding-on-big">
                    {coreProductsData.body.map((product, index) => 
                        <SinglCoreProduct 
                            key={index} 
                            product={product} 
                            language={language}
                            index={index}
                        />
                    )}
                </div>
            </Row>
        </div>
    )
}

const CompanyCulture = (props) => {
    const { language } = props;
    return (
        <div className="container component-container" style={{paddingBottom: 20}}>
            <h1 className="text-center chinese-section-header">{companyCultureData.head[language]}</h1>
            <Row style={{paddingTop: 20}}>
                <Col md={6}>
                    <h1 style={styles.headerChineseBlue}>{companyCultureData.subhead[language]}</h1>
                    {companyCultureData.body.map((companyValue, index) => 
                        <p key={index} className="chinese-section-body">
                            <span style={{fontSize: 24, fontFamily: "PingFangSC-Semibold"}}>{companyValue[language].keyword} </span>
                            {companyValue[language].text}
                        </p>
                    )}
                </Col>
                <Col md={1}/>
                <Col md={5}>
                    <img className="img-responsive" src={companyCultureImage} />
                </Col>
            </Row>
        </div>
    )
}


const CompanyAbout = (props) => {
    const { language } = props;
    return (
        <div>
            <BasicIntro language={language} />
            <CoreProducts language={language} />
            <CompanyCulture language={language} />
        </div>
    )
}

const styles = {
    background: {
        backgroundImage: 'url(' + backgroundImage + ')',
        paddingTop: 30,
        paddingBottom: 30
      },

    headerChineseBlue: {
        fontSize: 24,
        fontFamily: "PingFangSC-Semibold",
        color: '#4495CD',
        paddingBottom: 20
    },
}


export default CompanyAbout;