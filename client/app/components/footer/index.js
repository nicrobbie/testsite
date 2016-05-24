// Import Style
import './footer.scss';


import angular from 'angular';

// Import internal modules
import controller from './footer.controller';
import directive from './footer.directive';



export default angular.module("footer" , [])


  .controller(controller.UID, controller)
  .directive("footer", directive)
  .name;
