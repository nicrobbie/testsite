// Import Style
import './socialMedia.scss';


import angular from 'angular';

// Import internal modules
import controller from './socialMedia.controller';
import directive from './socialMedia.directive';



export default angular.module("socialMedia" , [])


  .controller(controller.UID, controller)
  .directive("socialMedia", directive)
  .name;
