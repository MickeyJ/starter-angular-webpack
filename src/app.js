import angular from 'angular'
import 'angular-ui-router'

angular.module('app', ['ui.router'])
  .config(
    ($stateProvider, $urlRouterProvider, $locationProvider) =>{
      
      $stateProvider
        .state('/', {
          url: '/',
          template: '<h1>Hello</h1>'
        });
      
      $urlRouterProvider.otherwise('/');
      $locationProvider.html5Mode(true)
    }
  );