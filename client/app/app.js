// Import Style
import './app.scss';

import angular from 'angular';
import uirouter from 'angular-ui-router';
import ngAnimate from 'angular-animate';
import pagin from 'angular-utils-pagination';

// Import base modules
import config from './app.config';
import routes from './app.routes';
import run from './app.run';
import appConstants from 'appConstants';

// Import features
import main from './features/main';
import records from './features/records';
import vdp from './features/vdp';

// Import components
import footer from './components/footer';
import filterBank from './components/filterBank';
import pagination from './components/pagination';
import gridView from './components/gridView';
import vdpActions from './components/vdpActions';
import vdpBanner from './components/vdpBanner';
import vdpDealer from './components/vdpDealer';
import vdpImages from './components/vdpImages';
import vdpInfo from './components/vdpInfo';
import vdpSimilar from './components/vdpSimilar';
import upArrow from './components/upArrow';
import header from './components/header';
import socialMedia from './components/socialMedia';
import searchPanel from './components/searchPanel';
import listView from './components/listView';



export default angular.module('testsite', [uirouter, ngAnimate, pagin, footer, header, main, records, vdp, filterBank, pagination, gridView, vdpActions, vdpBanner, vdpDealer, vdpImages, vdpInfo, vdpSimilar, searchPanel, listView, socialMedia, upArrow])
  .config(config)
  .config(routes)
  .constant("AppConstants", appConstants)
  .run(run)
  .name;
