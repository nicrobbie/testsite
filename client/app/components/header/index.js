// Import Style
import './header.scss';


import angular from 'angular';

// Import internal modules
import controller from './header.controller';
import directive from './header.directive';

import config from './header.config';


export default angular.module("header" , [])
.config(config)

  .controller(controller.UID, controller)
  .directive("header", directive)
  .name;
