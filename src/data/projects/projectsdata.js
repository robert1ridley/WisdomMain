import VOCarticle1 from '../../images/projects/VOC/article1.jpg';
import VOCarticle2 from '../../images/projects/VOC/article2.jpg';
import VOCarticle3 from '../../images/projects/VOC/article3.jpg';
import VOCarticle4 from '../../images/projects/VOC/article4.jpg';
import VOCarticle5 from '../../images/projects/VOC/article5.jpg';
import Desulpharticle1 from '../../images/projects/Desulph/article1.jpg';
import Desulpharticle2 from '../../images/projects/Desulph/article2.png';
import Desulpharticle3 from '../../images/projects/Desulph/article3.png';
import Desulpharticle4 from '../../images/projects/Desulph/article4.jpg';
import Desulpharticle5 from '../../images/projects/Desulph/article5.jpg';
import UtilArticle1 from '../../images/projects/Utilize/article1.png';
import UtilArticle2 from '../../images/projects/Utilize/article2.jpg';
import UtilArticle3 from '../../images/projects/Utilize/article3.jpg';
import UtilArticle4 from '../../images/projects/Utilize/article4.png';
import UtilArticle5 from '../../images/projects/Utilize/article5.jpg';
import UtilArticle6 from '../../images/projects/Utilize/article6.jpg';

const projectsdata = {
    head: {
      zh: "工程业绩",
      en:"Projects"
    },
    body: {
      zh: "江苏智道工程技术有限公司是集研发、设计、核心制造、工程总承包为一体，专注于工业企业系统能量综合利用、有效成分回收和净化处理达标排放的国家级高新技术企业，节能环保系统优化解决的专家。",
      en: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Praesent vestibulum molestie lacus. Aenean nonummy hendrerit mauris. Phasellus porta. Fusce suscipit varius mi."
    },
    subCategories: [
      {
        id: "oil-and-gas-recovery",
        head: {
          zh: "油气回收、VOCs治理技术",
          en: "Oil and gas recovery and VOCs treatment technology"
        },
        items: [
          {
            articleHead: {
              zh: "某石油企业尾气回收项目",
              en: "An oil company exhaust gas recovery project"
            },
            articleText: {
              zh: "某企业苯类罐区油气装车正在运行的油气回收装置。工艺采用国内最先进的冷凝+吸附技术。通过冷凝单元回收绝大部分苯类物质和油气中的有机气体，回收的苯类物质和油液可以回炼再利用。吸附单元则作为尾气达标排放的保障系统，净化气体中苯≤4mg/m3、二甲苯≤20mg/m3，污染物排放满足《石油炼制工业污染物排放标准》（GB31570-2015）。",
              en: "The oil and gas recovery equipment is running in the oil and gas loading of a company. The process adopts the most advanced condensation and adsorption technology in China. The recycling of benzene and oil can be reused by condensing units to recycle most of the benzene and gas. The adsorption unit ACTS as a guarantee system for the exhaust emission standard, and the purification of benzene is not more than 4mg/m3, the xylene is less than 20mg/m3, and the pollutant discharge meets the standards for the discharge of petroleum refining industrial pollutants (gb1570-2015)."
            },
            articleImage: VOCarticle1
          },
          {
            articleHead: {
              zh: "某石化企业油品储运部罐区尾气治理项目",
              en: "Gas control project of oil storage and transportation department of a petrochemical company"
            },
            articleText: {
              zh: "某企业苯类罐区及航空煤油和溶剂油装车正在运行的油气回收装置。工艺采用国内最先进的冷凝+吸附技术。油气通过冷凝单元回收绝大部分苯类物质和油气中的有机气体，回收的苯类物质和油液可以回炼利用。吸附单元则作为尾气达标排放的保障系统，净化气体中苯≤4mg/m3；甲苯≤15mg/m3；二甲苯 ≤20mg/m3，污染物排放满足《石油炼制工业污染物排放标准》（GB31570-2015）。",
              en: "The oil and gas recovery equipment is running in the benzene tank area and the aviation kerosene and solvent oil in a certain enterprise. The technology adopts the most advanced condensing + adsorption technology in China. The oil and gas can recover most of the benzene material and the organic gas in the oil and gas through the condensing unit, and the recovered benzene and oil can be recycled. The adsorption unit as a guarantee system exhaust emissions standards, the purification of benzene in gas is less than or equal to 4mg/m3 = 15mg/m3; toluene; xylene = 20mg/m3, pollutant emissions meet the 'emission standard of pollutants from petroleum refining industry' (GB31570-2015)."
            },
            articleImage: VOCarticle2
          },
          {
            articleHead: {
              zh: "某厂“双聚”尾气回收项目",
              en: "	exhaust gas recovery project in a factory"
            },
            articleText: {
              zh: "某石化塑料厂“双聚”尾气回收项目，该项目总投资3300万元，一年可回收富烃气体达3600吨，这些回收气中乙烯、丙烯占55-60%，另外还有己烷液体400吨。回收回来的装置尾气为企业年增效逾1500万元。同时解决了原来通过火炬燃烧给环境带来的严重污染，被中石化列为企业重点环境治理和增效项目。",
              en: "A 'poly' exhaust gas recovery project of a petrochemical and plastics plant, the total investment of the project is 33 million yuan, which can recover 3600 tons of hydrocarbon rich gas in one year. Ethylene and propylene account for 55-60% in the recovered gas, and 400 tons of hexane liquid. The recovered exhaust gas is more than 15 million yuan for the company's annual efficiency. At the same time, the serious pollution caused by the burning of torch to the environment is no longer an issue, and Sinopec was listed as the key environmental control and synergistic project of the enterprise."
            },
            articleImage: VOCarticle3
          },
          {
            articleHead: {
              zh: "某企业恶臭治理项目",
              en: "A corporate odor treatment project"
            },
            articleText: {
              zh: "某企业罐区正在运行的油气回收装置。本工艺采用冷凝+膜法+吸附技术，综合各技术的优点，组织完善的废气回收净化工艺，回收废气中的有效成分，从而实现有机烃与废气有效分离。 经检测排放口的苯、甲苯、对二甲苯、非甲烷总烃浓度分别为0.02 mg/m3、0.02 mg/m3、0.02 mg/m3、0.72 mg/m3远低于国家排放标准。",
              en: "An oil and gas recovery unit that is running in an enterprise's tank area. The technology adopts condensation + membrane method + adsorption technology, combines the advantages of various technologies, and perfected exhaust gas recovery and purification process, and recycling effective components in exhaust gas, so as to achieve effective separation of organic hydrocarbon and exhaust gas. The total hydrocarbon concentrations of benzene, toluene, p-xylene and non methane were 0.02 mg/m3, 0.02 mg/m3, 0.02 mg/m3 and 0.72 mg/m3, respectively, which were much lower than the national emission standards."
            },
            articleImage: VOCarticle4
          },
          {
            articleHead: {
              zh: "某企业码头尾气回收装置",
              en: "Enterprise terminal exhaust gas recovery unit"
            },
            articleText: {
              zh: "某企业码头装卸站台正在运行的油气回收装置。本工艺采用冷凝+吸附工艺路线，冷凝部分回收绝大部分油气中的有机气体，吸附部分则作为尾气达标排放的保障系统。",
              en: "An oil and gas recovery unit is running on the loading and unloading platform of an enterprise terminal. The process uses condensation and adsorption route. The condensing component is used to recover most of the organic gas in the oil and gas; the adsorption component is used as a guarantee system for exhaust emission."
            },
            articleImage: VOCarticle5
          }
        ]
      },
      {
        id: "desulphurization-and-denitrification",
        head: {
          zh: "脱硫脱硝技术",
          en: "Desulphurization and denitrification technology"
        },
        items: [
          {
            articleHead: {
              zh: "某石化企业120万吨/年催化裂化装置烟气脱硝项目",
              en: "Flue gas denitrification project for 1 million 200 thousand ton / year catalytic cracking unit in a petrochemical enterprise"
            },
            articleText: {
              zh: "国内首套某企业锅炉烟气臭氧法脱硝装置，运行中脱硝效率≥95%；三催外排烟气NOx＜100mg/m3（干基、3%含氧量），链条炉脱硝后烟气NOx＜50mg/m3（干基、9%含氧量）。烟气污染物排放分别满足《石油炼制工业污染物排放标准》（GB31570-2015）、《锅炉大气污染物排放标准》（GB13271-2014）特别排放限值要求。该项目运行成本较低，采用的工艺腐蚀性小，副反应少，系统简单，施工、运行管理方便。",
              en: "As the first set of equipment for denitrifying flue gas by ozone for enterprise, the equipment achieves a denitration efficiency of more than 95%: Three Efflux Flue Gas NOx < 100mg/m3 (dry base, 3% oxygen); chain furnace denitration flue gas after NOx < 50mg/m3 (dry base, 9% oxygen). The emission of flue gas pollutants meets the requirements of special emission limits of 'pollutant discharge standard for petroleum refining industry' (GB31570-2015) and 'boiler air pollutant discharge standard' (GB13271-2014). The operation cost of the project is low, the corrosion of the process is small, the side reaction is few, the system is simple, and the construction and operation management are convenient."
            },
            articleImage: Desulpharticle1
          },
          {
            articleHead: {
              zh: "某公司2×35t/h锅炉烟气脱硝工程",
              en: "Flue gas denitrification project of 2 x 35t/h boiler in a company"
            },
            articleText: {
              zh: "国内首套锅炉烟气臭氧法脱硝项目，一期脱硝效率≥42.86%，二期预计脱硝效率≥80%；出口的烟气中NOx排放浓度不大于200mg/Nm3。该项目运行成本较低，所采用工艺腐蚀性小，副反应少，系统简单，施工、运行管理方便。",
              en: "国内首套锅炉烟气臭氧法脱硝项目，一期脱硝效率≥42.86%，二期预计脱硝效率≥80%；出口的烟气中NOx排放浓度不大于200mg/Nm3。该项目运行成本较低，所采用工艺腐蚀性小，副反应少，系统简单，施工、运行管理方便"
            },
            articleImage: Desulpharticle2
          },
          {
            articleHead: {
              zh: "某公司2×240t/h循环流化床锅炉烟气脱硫改造",
              en: "Transformation of flue gas desulfurization of a 2 x 240t/h circulating fluidized bed boiler in a company"
            },
            articleText: {
              zh: "本项目采用湿法烟气脱硫工艺，烟气经脱硝装置脱硝、布袋除尘器除尘后进行脱硫，脱硫效率≥95%，烟囱二氧化硫排放浓度为30-50mg/Nm3，符合当地环保排放指标＜200mg/Nm3，有效地改善生态环境与空气质量，具有显著的社会效益。",
              en: "This project uses the wet flue gas desulfurization, flue gas denitration device, and a bag type dust remover after desulfurization. The desulfurization efficiency is more than 95%, the concentration of sulfur dioxide emissions to 30-50mg/Nm3, in accordance with local environmental emission index < 200mg/Nm3, effectively improve the ecological environment and air quality, and has remarkable social benefit."
            },
            articleImage: Desulpharticle3
          },
          {
            articleHead: {
              zh: "某厂2×75t/h循环流化床锅炉SNCR烟气脱硝项目",
              en: "	SNCR flue gas denitrification project of a 2 x 75t/h circulating fluidized bed boiler in a factory"
            },
            articleText: {
              zh: "本工程采用选择性非催化还原脱硝(SNCR)工艺，经脱硝后NOx浓度的浓度≤100 mg/Nm3，NH3逃逸量≤8ppm，脱硝效率≥75%。该工艺的投资与运行成本相对较低，没有额外的SO2/SO3转化率，非常适合老厂的脱硝改造。",
              en: "This project uses the selective non-catalytic reduction (SNCR) technology, the NOx concentration after less than NOx concentration of 100 mg/Nm3, the escape of NH3 is less than 8ppm, the denitration efficiency higher than 75%. The investment and operation cost of the process are relatively low, and there is no additional SO2/SO3 conversion rate, which is very suitable for the modification of the denitrification of the old factory."
            },
            articleImage: Desulpharticle4
          },
          {
            articleHead: {
              zh: "某企业2×260 t/h空分锅炉脱硝、脱硫湿法除尘改造工程",
              en: "Dedusting engineering for denitrification and desulfurization of 2 x 260 t/h air separation boiler for enterprise"
            },
            articleText: {
              zh: "该工程采用高灰型选择性催化还原烟气脱硝（SCR）工艺，脱硝效率在任何机组运行工况下均≥82.53%， NH3逃逸量小于3ppm，SO2/SO3的转化率小于1%，服务寿命为30年。本改造工程完成后，NOx的排放浓度由515 mg/ m3降低至90 mg/m3，排放浓度满足《火电厂大气污染物排放标准》(GB13223-2011)中燃煤锅炉大气污染物特别排放限值100mg/m3，若现有工程按年设备利用小时数8000 h计，则NOx的年排放量减少1506 t。",
              en: "This project adopts high ash type selective catalytic reduction flue gas denitrification (SCR) process. The denitration efficiency in operation of any unit is greater than or equal to 82.53%; the escape of NH3 is less than 3ppm; the conversion rate of SO2/SO3 is less than 1%; it has a service life of 30 years. After the renovation project was completed, the NOx concentration decreased from 515 mg/ M3 to 90 mg/m3, with emission concentration meeting the 'thermal power plant air pollutant emission standards' (GB13223-2011) in coal-fired boiler air pollutant emission limits in particular 100mg/m3. If the existing engineering equipment annual utilization hours is 8000 hours, the annual emissions of NOx will be reduced by 1506 t."
            },
            articleImage: Desulpharticle5
          }
        ]
      },
      {
        id: "energy-utilization",
        head: {
          zh: "能量综合利用",
          en: "Comprehensive Energy Utilization"
        },
        items: [
          {
            articleHead: {
              zh: "某厂180m2烧结环冷机余热锅炉",
              en: "Waste heat boiler of 180m2 sintering ring cooler in a factory"
            },
            articleText: {
              zh: "该厂采用烧结机、冷却机余热发电，烧结机生产规模为311t/h，以年运行8000h计算，其烧结机的年生产能力可达250万吨/年，吨产蒸汽量38.4kg/t。",
              en: "The plant uses the sintering machine and the cooling machine to generate electricity by waste heat. The production scale of the sintering machine is 311t/h. The annual production capacity of the sintering machine can reach 2 million 500 thousand tons per year and the steam output per ton is 38.4kg/t, based on the annual operation of 8000h."
            },
            articleImage: UtilArticle1
          },
          {
            articleHead: {
              zh: "某厂100t电炉余热回收工程",
              en: "Waste heat recovery project of 100t electric furnace in a factory"
            },
            articleText: {
              zh: "该余热回收工程利用热管蒸汽发生器蒸汽蓄热技术，适应电炉生产过程中产生的烟气具有温度高、含尘大，周期性温度波动、温度波动幅度大的特点。该项目中电炉出钢量为103 t/炉，平均冶炼时间45min，铁水比70%-75%；以年运行330天计算，电炉产量可达110万吨/年，吨钢产蒸汽量200kg/t，吨钢发电量33.3KW/t。",
              en: "The waste heat recovery project utilizes a heat pipe steam generator steam storage technology to adapt to the flue gas generated during the production of electric furnace. It has the characteristics of high temperature, high dust content, periodic temperature fluctuation and large temperature fluctuation. The project was 103 t/ EAF smelting furnace, the average time of 45min, hot metal ratio 70%-75%; 330 days calculated by year, furnace output up to 1 million 100 thousand tons per year, per ton of steam per ton of 200kg/t, power generation 33.3KW/t"
            },
            articleImage: UtilArticle2
          },
          {
            articleHead: {
              zh: "某钢铁厂152 m2烧结环冷机余热利用",
              en: "Waste heat utilization of 152 m2 sintering ring refrigerator in a iron and steel plant"
            },
            articleText: {
              zh: "该项目采用烧结机、冷却机余热发电，烧结机生产规模为270t/h，以年运行8000h计算，烧结机的年生产能力可达216万吨/年，吨产蒸汽量75.9kg/t，吨矿发电量12.7KW/t",
              en: "The project uses the sintering machine and the cooling machine to generate electricity by waste heat. The production scale of the sintering machine is 270t/h. The annual production capacity of the sintering machine can reach 2 million 160 thousand tons per year based on the annual operation of 8000h. The steam output per ton is 75.9kg/t, and the power output per ton of ore is 12.7KW/t."
            },
            articleImage: UtilArticle3
          },
          {
            articleHead: {
              zh: "某公司2×240m2烧结余热锅炉项目",
              en: "2 x 240m2 sintering waste heat boiler project of a company"
            },
            articleText: {
              zh: "该项目回收利用烧结机、冷却机的高温废烟气余热，并通过余热锅炉产生低压蒸汽用于汽轮发电机发电。锅炉出口高压蒸汽流量≥ 32 t/h，低压蒸汽流量≥ 6.5 t/h，工艺可保证一段废气有较高温度，同时回收二段前半部分的废气；且对环冷机的运行，及冷却效果影响较小，具有较好的社会经济效益。",
              en: "The waste heat from the high temperature waste gas of the sintering machine and the cooling machine is recycled, and the low-pressure steam is produced by the waste heat boiler to generate electricity from the turbogenerator. The outlet of the boiler high-pressure steam flow is more than 32 t/h; low-pressure steam flow is greater than or equal to 6.5 t/h. The process can ensure a high exhaust gas temperature, and exhaust gas-recycling component of the two section of the annular cooler; the impact on the cooling function and efficiency is minimal."
            },
            articleImage: UtilArticle4
          },
          {
            articleHead: {
              zh: "氨纶系统能量综合利用工程",
              en: "Energy comprehensive utilization project of spandex system"
            },
            articleText: {
              zh: "在氨纶生产过程中通过使用热管换热器综合利用系统能量。平均每吨氨纶能耗可节约0.7吨标煤，以单线最大产量6 t/天计，单条线投资成本约为60万元，回收期为半年，具有良好的经济、社会效益。",
              en: "在氨纶生产过程中通过使用热管换热器综合利用系统能量。平均每吨氨纶能耗可节约0.7吨标煤，以单线最大产量6 t/天计，单条线投资成本约为60万元，回收期为半年，具有良好的经济、社会效益。 Through the use of heat pipe heat exchanger, the energy of the system is used in the production of spandex. The average energy consumption per ton of spandex can save 0.7 tons of standard coal, and the maximum output per line is 6 t/ days. The cost of single line investment is about 600 thousand yuan, and the payback period is half a year, which has good economic and social benefits."
            },
            articleImage: UtilArticle5
          },
          {
            articleHead: {
              zh: "某公司硫酸镍溶液新型节能蒸发技术的研究与开发项目",
              en: "	Research and development project of a new type of energy saving evaporation technology for nickel sulfate solution in a company"
            },
            articleText: {
              zh: "该项目成功将MVR技术运用于NiSO4蒸发工艺中，具有明显的节能减排效果。装置规模为3m3/h，以年运行350天，每天运行20小时，年产硫酸镍1万吨计算，需要投资约350万元，每年可以为公司节省生产成本179.83万元，不到两年即可回收成本。每年可减少热量排往环境约6.27×1010 kJ，折标煤2139 t，减少CO2排放5327.1 t、SO2排放160.5 t、NOx排放80.2 t，有效地改善当地生态环境，消除对大气环境的污染，有益于当地空气改善，具有显著的社会及环境效益。",
              en: "The project successfully applied the MVR technology to the NiSO4 evaporation process, which has obvious effect on energy saving and emission reduction. The scale of the device is 3m3/h, which runs 20 hours per day for 350 days per year, and the annual output of nickel sulfate is 10 thousand tons. The investment needs about 3 million 500 thousand yuan, which can save 1 million 798 thousand and 300 yuan for the company every year, and it can be recovered in less than two years. Every year, the project can reduce the heat discharged to the environment by about 6.27 * 1010 kJ, which is equivalent to 2139 t standard coal, and can reduce the emission of CO2 by 5327.1 T, SO2 by 160.5 T, and NOx by 80.2 T. This project brings great benefits to the local ecological environment, eliminating the pollution of the atmospheric environment, and improving local air quality."
            },
            articleImage: UtilArticle6
          }
        ]
      }
    ]
  }

export default projectsdata;