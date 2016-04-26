import angular from 'angular'
import 'angular-ui-router'

import configHomePage from './pages/Home'

angular.module('app', ['ui.router'])
  .config(
    ($stateProvider, $urlRouterProvider, $locationProvider) =>{
      
      $stateProvider
        .state('/', configHomePage() );
      
      $urlRouterProvider.otherwise('/');
      $locationProvider.html5Mode(true)
    }
  );