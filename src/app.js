import angular from 'angular'
import 'angular-ui-router'

import configHomePage from './pages/Home/'
import configAboutPage from './pages/About/'

angular.module('app', ['ui.router'])
  .config(
    ($stateProvider, $urlRouterProvider, $locationProvider) =>{
      
      require('./style/main.scss');
      
      $stateProvider
        .state('/', configHomePage() )
        .state('/about', configAboutPage() );
      
      $urlRouterProvider.otherwise('/');
      $locationProvider.html5Mode(true)
    }
  );