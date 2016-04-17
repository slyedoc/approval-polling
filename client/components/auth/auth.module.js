'use strict';

angular.module('approvalPollingApp.auth', [
  'approvalPollingApp.constants',
  'approvalPollingApp.util',
  'ngCookies'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
