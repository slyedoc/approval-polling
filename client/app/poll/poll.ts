'use strict';

angular.module('approvalPollingApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('poll', {
        url: '/poll',
        template: '<poll></poll>'
      });
  });
