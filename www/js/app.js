// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'ngRoute'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

    .state('login', {
      url: "/login",
      templateUrl: "templates/login.html",
      controller: "LoginCtrl"
    })

    .state('home', {  
      url: "/home",
      templateUrl: "templates/home.html",
      controller: "HomeCtrl"
    })

    .state('module', {
      url: "/module/:moduleId",
      templateUrl: "templates/module.html",
      controller: "ModuleCtrl"
    })

    .state('diapo', {
      url: "/diapo",
      templateUrl: "templates/diapo_base.html",
      controller: "DiapoCtrl"
    })

    .state('response_radio', {
      url: "/response_radio",
      templateUrl: "templates/response_radio.html",
      controller: "ResponseCtrl"
    })

    .state('response_checkbox', {
      url: "/response_checkbox",
      templateUrl: "templates/response_checkbox.html",
      controller: "ResponseCtrl"
    })

    .state('response_range', {
      url: "/response_range",
      templateUrl: "templates/response_range.html",
      controller: "ResponseCtrl"
    });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/response_range');

});
