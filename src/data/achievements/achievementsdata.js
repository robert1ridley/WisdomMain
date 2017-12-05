import article1 from '../../images/achievements/article1.jpg';
import article2 from '../../images/achievements/article2.jpg';
import article3 from '../../images/achievements/article3.jpg';
import article4 from '../../images/achievements/article4.png';
import article5 from '../../images/achievements/article5.png';
import article6 from '../../images/achievements/article6.jpg';

const achievementsdata = {
  chinese: {
    head: "工程业绩",
    body: "江苏智道工程技术有限公司是集研发、设计、核心制造、工程总承包为一体，专注于工业企业系统能量综合利用、有效成分回收和净化处理达标排放的国家级高新技术企业，节能环保系统优化解决的专家。",
    subCategories: [
      {
        head: "油气回收、VOCs治理技术",
        items: [
          {
            articleHead: "某石油企业尾气回收项目",
            articleText: "某企业苯类罐区油气装车正在运行的油气回收装置。工艺采用国内最先进的冷凝+吸附技术。通过冷凝单元回收绝大部分苯类物质和油气中的有机气体，回收的苯类物质和油液可以回炼再利用。吸附单元则作为尾气达标排放的保障系统，净化气体中苯≤4mg/m3、二甲苯≤20mg/m3，污染物排放满足《石油炼制工业污染物排放标准》（GB31570-2015）。",
            articleImage: article1
          },
          {
            articleHead: "某石化企业油品储运部罐区尾气治理项目",
            articleText: "某企业苯类罐区及航空煤油和溶剂油装车正在运行的油气回收装置。工艺采用国内最先进的冷凝+吸附技术。油气通过冷凝单元回收绝大部分苯类物质和油气中的有机气体，回收的苯类物质和油液可以回炼利用。吸附单元则作为尾气达标排放的保障系统，净化气体中苯≤4mg/m3；甲苯≤15mg/m3；二甲苯 ≤20mg/m3，污染物排放满足《石油炼制工业污染物排放标准》（GB31570-2015）。",
            articleImage: article2
          }
        ]
      },
      {
        head: "脱硫脱硝技术",
        items: [
          {
            articleHead: "某石化企业120万吨/年催化裂化装置烟气脱硝项目",
            articleText: "国内首套某企业锅炉烟气臭氧法脱硝装置，运行中脱硝效率≥95%；三催外排烟气NOx＜100mg/m3（干基、3%含氧量），链条炉脱硝后烟气NOx＜50mg/m3（干基、9%含氧量）。烟气污染物排放分别满足《石油炼制工业污染物排放标准》（GB31570-2015）、《锅炉大气污染物排放标准》（GB13271-2014）特别排放限值要求。该项目运行成本较低，采用的工艺腐蚀性小，副反应少，系统简单，施工、运行管理方便。",
            articleImage: article3
          },
          {
            articleHead: "某公司2×35t/h锅炉烟气脱硝工程",
            articleText: "国内首套锅炉烟气臭氧法脱硝项目，一期脱硝效率≥42.86%，二期预计脱硝效率≥80%；出口的烟气中NOx排放浓度不大于200mg/Nm3。该项目运行成本较低，所采用工艺腐蚀性小，副反应少，系统简单，施工、运行管理方便。",
            articleImage: article4
          }
        ]
      },
      {
        head: "能量综合利用",
        items: [
          {
            articleHead: "某厂180m2烧结环冷机余热锅炉",
            articleText: "该厂采用烧结机、冷却机余热发电，烧结机生产规模为311t/h，以年运行8000h计算，其烧结机的年生产能力可达250万吨/年，吨产蒸汽量38.4kg/t。",
            articleImage: article5
          },
          {
            articleHead: "某厂100t电炉余热回收工程",
            articleText: "该余热回收工程利用热管蒸汽发生器蒸汽蓄热技术，适应电炉生产过程中产生的烟气具有温度高、含尘大，周期性温度波动、温度波动幅度大的特点。该项目中电炉出钢量为103 t/炉，平均冶炼时间45min，铁水比70%-75%；以年运行330天计算，电炉产量可达110万吨/年，吨钢产蒸汽量200kg/t，吨钢发电量33.3KW/t。",
            articleImage: article6
          }
        ]
      }
    ]
  },
  english: {
    head: "Achievements" ,
    body: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Praesent vestibulum molestie lacus. Aenean nonummy hendrerit mauris. Phasellus porta. Fusce suscipit varius mi.",
    subCategories: [
      {
        head: "Share on Social Media",
        items: [
          {
            articleHead: "My Article",
            articleText: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Praesent vestibulum molestie lacus. Aenean nonummy hendrerit mauris. Phasellus porta. Fusce suscipit varius mi.",
            articleImage: article1
          },
          {
            articleHead: "My Article",
            articleText: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Praesent vestibulum molestie lacus. Aenean nonummy hendrerit mauris. Phasellus porta. Fusce suscipit varius mi.",
            articleImage: article2
          }
        ]
      },
      {
        head: "Another Header",
        items: [
          {
            articleHead: "Some Article",
            articleText: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Praesent vestibulum molestie lacus. Aenean nonummy hendrerit mauris. Phasellus porta. Fusce suscipit varius mi.",
            articleImage: article3
          },
          {
            articleHead: "A different Article",
            articleText: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Praesent vestibulum molestie lacus. Aenean nonummy hendrerit mauris. Phasellus porta. Fusce suscipit varius mi.",
            articleImage: article4
          }
        ]
      },
      {
        head: "This is a Head",
        items: [
          {
            articleHead: "New Article",
            articleText: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Praesent vestibulum molestie lacus. Aenean nonummy hendrerit mauris. Phasellus porta. Fusce suscipit varius mi.",
            articleImage: article5
          },
          {
            articleHead: "Next Article",
            articleText: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Praesent vestibulum molestie lacus. Aenean nonummy hendrerit mauris. Phasellus porta. Fusce suscipit varius mi.",
            articleImage: article6
          }
        ]
      }
    ]
  }
}

export default achievementsdata;