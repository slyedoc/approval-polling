'use strict';

angular.module('approvalPollingApp.auth', [
  'approvalPollingApp.constants',
  'approvalPollingApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
