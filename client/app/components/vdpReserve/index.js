// Import Style
import './vdpReserve.scss';


import angular from 'angular';
import angularDatePicker from 'angular-date-picker';

// Import internal modules
import controller from './vdpReserve.controller';
import directive from './vdpReserve.directive';
import run from './vdpReserve.run';

import config from './vdpReserve.config';


export default angular.module("vdpReserve" , [angularDatePicker.name])
.config(config)
.run(run)
  .controller(controller.UID, controller)
  .directive("vdpReserve", directive)
  .name;
