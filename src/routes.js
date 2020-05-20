import Home from './components/Organisms/Home/Home.vue';
import Portfolio from './components/Molecules/portfolio/Portfolio.vue';
import Stocks from './components/Molecules/stocks/Stocks.vue';

export const routes = [
    { path: '/', component: Home },
    { path: '/portfolio', component: Portfolio },
    { path: '/stocks', component: Stocks }
];