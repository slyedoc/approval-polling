'use strict';

class NavbarController {
  //start-non-standard
  menu = [{
    'title': 'Home',
    'state': 'main'
  },{
    'title': 'Polls',
    'state': 'poll'
  }];

  isCollapsed = true;
  private isLoggedIn;
  private isAdmin;
  private getCurrentUser;
  //end-non-standard

  constructor(Auth) {
    this.isLoggedIn = Auth.isLoggedIn;
    this.isAdmin = Auth.isAdmin;
    this.getCurrentUser = Auth.getCurrentUser;
  }
}

angular.module('approvalPollingApp')
  .controller('NavbarController', NavbarController);
