// Import Style
import './header.scss';


import angular from 'angular';

// Import internal modules
import controller from './header.controller';
import directive from './header.directive';



export default angular.module("header" , [])


  .controller(controller.UID, controller)
  .directive("header", directive)
  .name;
