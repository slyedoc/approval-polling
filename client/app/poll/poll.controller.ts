'use strict';
(function(){

class PollComponent {
  constructor($http, $scope, socket) {

    this.$http = $http;
    this.socket = socket;
    this.polls = [];

    this.clearNewPoll();

    $scope.$on('$destroy', function() {
      socket.unsyncUpdates('poll');
    });
  }

  $onInit() {
    this.$http.get('/api/polls').then(response => {
      this.polls = response.data;
      this.socket.syncUpdates('poll', this.polls);
    });
  }

  addPoll() {

    this.$http.post('/api/polls', this.newPoll ).then( function () {
      this.clearNewPoll();
    }, function (error ) {
      console.log( error );
    });

  }

  clearNewPoll() {
    this.newPoll = {
      title: '',
      options: [ {name: ''}],
      expires: new Date()
    };
  }
}

angular.module('approvalPollingApp')
  .component('poll', {
    templateUrl: 'app/poll/poll.html',
    controller: PollComponent
  });

})();
