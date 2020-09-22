const headers = {
	chinese: [
		{
			head: "Staging首页", icon: "glyphicon glyphicon-home", id: 1, link: "/"
		},
		{
			head: "走进智道", icon: "glyphicon glyphicon-info-sign", id: 2, link: "/about/about-wisdom"
		},
		{
			head: "核心技术", icon: "glyphicon glyphicon-info-sign", id: 3, link: "/innovation/research"
		},
		{
			head: "工程案例", icon: "glyphicon glyphicon-pushpin", id: 4, link: "/mission", subitem: '智道使命', sublist:[
				{
					head: "膜分离技术", id: 4.2, link: "/mission/membrane/tech"
				},
				{
					head: "有效成分回收、VOCs治理技术", id: 4.3, link: "/mission/voc/tech"
				},
				{
					head: "气体净化处理、达标排放技术", id: 4.4, link: "/mission/desulph/tech"
				},
				{
					head: "能量综合利用技术", id: 4.5, link: "/mission/comprehensive/tech"
				},
			]
		},
		{
			head: "新闻中心", icon: "glyphicon glyphicon-blackboard", id: 5, link: "/news/enterprise"
		},
		{
			head: "联系我们", icon: "glyphicon glyphicon-earphone", id: 6, link: "/contact"
		}
  	],
	english: [
		{
			head: "Home", icon: "glyphicon glyphicon-home", id: 1, link: "/"
		},
		{
			head: "About us", icon: "glyphicon glyphicon-info-sign", id: 2, link: "/about/about-wisdom"
		},
		{
			head: "Innovation", icon: "glyphicon glyphicon-info-sign", id: 3, link: "/innovation/research"
		},
		{
			head: "Mission", icon: "glyphicon glyphicon-pushpin", id: 4, link: "/mission", subitem: '智道使命', sublist:[
				{
					head: "膜分离技术", id: 4.2, link: "/mission/membrane/tech"
				},
				{
					head: "有效成分回收、VOCs治理技术", id: 4.3, link: "/mission/voc/tech"
				},
				{
					head: "气体净化处理、达标排放技术", id: 4.4, link: "/mission/desulph/tech"
				},
				{
					head: "能量综合利用技术", id: 4.5, link: "/mission/comprehensive/tech"
				},
			]
		},
		{
			head: "News", icon: "glyphicon glyphicon-blackboard", id: 5, link: "/news/enterprise"
		},
		{
			head: "Contact us", icon: "glyphicon glyphicon-earphone", id: 6, link: "/contact"
		}
	]
}

export default headers;