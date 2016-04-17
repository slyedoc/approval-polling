'use strict';

angular.module('approvalPollingApp', [
  'approvalPollingApp.auth',
  'approvalPollingApp.admin',
  'approvalPollingApp.constants',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'btford.socket-io',
  'ui.router',
  'ui.bootstrap',
  'validation.match'
])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
  });
