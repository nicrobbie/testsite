// Import Style
import './listView.scss';


import angular from 'angular';

// Import internal modules
import controller from './listView.controller';
import directive from './listView.directive';
import run from './listView.run';

import config from './listView.config';


export default angular.module("listView" , [])
.config(config)
.run(run)
  .controller(controller.UID, controller)
  .directive("listView", directive)
  .name;
