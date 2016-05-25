// Import Style
import './app.scss';

import angular from 'angular';
import uirouter from 'angular-ui-router';
//import productService from './shared/productService';

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
import vdpReserve from './components/vdpReserve';


//console.log(productService.getProducts());

// Import internal modules
//import sampleModule from './features/sample2';
//import sampleModule2 from './features/sample';
//import testcomponent from './components/testcomponent';

export default angular.module('testsite', [uirouter, footer, main, records, vdp, filterBank, pagination, gridView, vdpActions, vdpBanner, vdpDealer, vdpImages, vdpInfo, vdpSimilar, vdpReserve])

  .config(config)
  .config(routes)
  .constant("AppConstants", appConstants)
  .run(run)
  .name;
