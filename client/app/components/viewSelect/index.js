// Import Style
import './viewSelect.scss';


import angular from 'angular';

// Import internal modules
import controller from './viewSelect.controller';
import directive from './viewSelect.directive';



export default angular.module("viewSelect" , [])


  .controller(controller.UID, controller)
  .directive("viewSelect", directive)
  .name;
