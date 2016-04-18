'use strict';

angular.module('approvalPollingApp', [
  'approvalPollingApp.auth',
  'approvalPollingApp.admin',
  'approvalPollingApp.constants',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'btford.socket-io',
  'ui.bootstrap',
  'validation.match'
])
  .config(function($locationProvider) {

    $locationProvider.html5Mode(true);
  });
