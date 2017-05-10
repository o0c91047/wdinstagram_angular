"use strict";

function(){

var  instdata = [
  {photo_url:"https://www.crackerbarrel.com/~/media/CrackerBarrel/Menu/Dinner/Weekday%20Lunch%20Specials/CountryHouseSaladWithGrilledChicken.jpg?h=400&w=600&la=en&hash=A35A5F0ED9E67F628B1DF8645FAAFCB85C008F4C", author: "cancanomar", body: "This is my lunch"}
  {photo_url:"http://redlettermedia.com/wordpress/wp-content/uploads/2011/09/HITBBTS12.jpg", author: "mikestoklasa", body: "Scamming old folks"}
  {photo_url:"http://www.film4.com/media/images/Film4/images/S/speed-2-cruise-control-1997-01.jpg", author: "willem", body: "This boat is on the loose"}
  {photo_url:"http://s3.fantasticfest.com/_uploads/galleries/18628/eithomo-570__full.jpg", author: "doggy", body: "Tripping with the fam"}
  {photo_url:"https://pics.me.me/hey-its-your-uber-driver-here-am-outside-cat-in-15112395.png", author: "memeposter", body: "I should watch The Cat in the Hat again"}
  {photo_url:"https://s-media-cache-ak0.pinimg.com/736x/63/15/1a/63151a88f6a587f8bb707863320357d0.jpg", author: "hankhill", body: "I tell you what"}
]


  angular
    .module("wdinstagram", [
      "ui.router"
    ])
    .config([
      "$stateProvider",
      RouterFunction
    ])
    .controller("postcontroller", [
      postcontrollerfunction
    ])


    function RouterFunction($stateProvider) {
      $stateProvider
        .state("index", {
          url: "/index",
          templateUrl: "js/ng-views/index.html"
          controller: "postcontroller",
          controllerAs: "vm"
        })
    }


    function postcontrollerfunction() {
      this.posts = instdata
    }




  })();
