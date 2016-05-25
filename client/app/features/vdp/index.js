// Import Style
import './vdp.scss';


import angular from 'angular';
import uirouter from 'angular-ui-router';

// Import internal modules
import controller from './vdp.controller';
import routes from './vdp.routes';
import run from './vdp.run';

import config from './vdp.config';


export default angular.module("vdp" , [uirouter])
.config(config)
  .config(routes)
.run(run)
  .controller(controller.UID, controller)
  .name;
