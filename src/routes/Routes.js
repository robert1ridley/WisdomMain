import React from 'react';
import Loadable from 'react-loadable';
import { Route, Switch } from 'react-router-dom';

const Home = Loadable({
	loader: () => import(/* webpackChunkName: "homepage" */ '../pages/Home'),
	loading: () => null,
	modules: ['Home']
});

const About = Loadable({
	loader: () => import(/* webpackChunkName: "Aboutpage" */ '../pages/About'),
	loading: () => null,
	modules: ['About']
});

const Innovation = Loadable({
	loader: () => import(/* webpackChunkName: "Innovationpage" */ '../pages/Innovation'),
	loading: () => null,
	modules: ['Innovation']
});

const News = Loadable({
	loader: () => import(/* webpackChunkName: "Newspage" */ '../pages/News'),
	loading: () => null,
	modules: ['News']
});

const Mission = Loadable({
	loader: () => import(/* webpackChunkName: "Missionpage" */ '../pages/Mission'),
	loading: () => null,
	modules: ['Mission']
});

const Membrane = Loadable({
	loader: () => import(/* webpackChunkName: "Membranepage" */ '../pages/Membrane'),
	loading: () => null,
	modules: ['Membrane']
});

const VOC = Loadable({
	loader: () => import(/* webpackChunkName: "VOCpage" */ '../pages/VOC'),
	loading: () => null,
	modules: ['VOC']
});

const Desulph = Loadable({
	loader: () => import(/* webpackChunkName: "Desulphpage" */ '../pages/Desulph'),
	loading: () => null,
	modules: ['Desulph']
});

const Comp = Loadable({
	loader: () => import(/* webpackChunkName: "Comppage" */ '../pages/Comp'),
	loading: () => null,
	modules: ['Comp']
});

const CaseHighlights = Loadable({
	loader: () => import(/* webpackChunkName: "CaseHighlightspage" */ '../pages/CaseHighlights'),
	loading: () => null,
	modules: ['CaseHighlights']
});

const Contact = Loadable({
	loader: () => import(/* webpackChunkName: "Contactpage" */ '../pages/Contact'),
	loading: () => null,
	modules: ['Contact']
});

const NotFound = Loadable({
	loader: () => import(/* webpackChunkName: "NotFoundpage" */ '../pages/NotFound'),
	loading: () => null,
	modules: ['NotFound']
});

const SiteNav = Loadable({
	loader: () => import(/* webpackChunkName: "SiteNavpage" */ '../components/SiteNav'),
	loading: () => null,
	modules: ['SiteNav']
});

const SocialShare = Loadable({
	loader: () => import(/* webpackChunkName: "SocialSharepage" */ '../components/SocialShare'),
	loading: () => null,
	modules: ['SocialShare']
});

const Footer = Loadable({
	loader: () => import(/* webpackChunkName: "Footerpage" */ '../components/Footer'),
	loading: () => null,
	modules: ['Footer']
});

const ScrollTo = Loadable({
	loader: () => import(/* webpackChunkName: "ScrollTopage" */ '../components/ScrollTo'),
	loading: () => null,
	modules: ['ScrollTo']
});

const Staging = Loadable({
	loader: () => import(/* webpackChunkName: "Stagingpage" */ '../pages/Staging'),
	loading: () => null,
	modules: ['Staging']
});

export default () => (
	<div>
		<Route component={ScrollToTop} />
		<SiteNav />
		<Switch>
			<Route path="/" exact component={Home}/>
			<Route path="/staging" exact component={Staging} />
			<Route path="/about/:id" exact component={About}/>
			<Route path="/innovation/:id" exact component={Innovation}/>
			<Route path="/mission" exact component={Mission}/>
			<Route path="/mission/membrane/:id" exact component={Membrane}/>
			<Route path="/mission/voc/:id" exact component={VOC}/>
			<Route path="/mission/desulph/:id" exact component={Desulph}/>
			<Route path="/mission/comprehensive/:id" exact component={Comp}/>
			<Route path="/mission/case-high" exact component={CaseHighlights}/>
			<Route path="/news/:id" component={News}/>
			<Route path="/contact" exact component={Contact}/>
			<Route path="*" component={NotFound}/>
		</Switch>
		<SocialShare />
		<Footer />
		<ScrollTo />
  	</div>
)

const ScrollToTop = () => {
	if (typeof window !== 'undefined') {
    	window.scrollTo(0, 0);
  	}
  	return null;
};