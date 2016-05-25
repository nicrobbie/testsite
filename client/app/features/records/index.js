// Import Style
import './records.scss';


import angular from 'angular';
import uirouter from 'angular-ui-router';

// Import internal modules
import controller from './records.controller';
import routes from './records.routes';
import run from './records.run';

import config from './records.config';



export default angular.module("records" , [uirouter])
.config(config)
  .config(routes)
.run(run)
  .controller(controller.UID, controller)
  .name;
