System.register(["./p-052a4994.system.js"],function(e,t){"use strict";var r,n;return{setters:[function(e){r=e.d;n=e.f}],execute:function(){var t=function(){function e(e){r(this,e)}e.prototype.normalize=function(e){if(e){return e.substr(0,1).toUpperCase()+e.substr(1).toLowerCase()}return""};e.prototype.render=function(){if(this.match&&this.match.params.name){return n("div",{class:"app-profile"},n("p",null,"Hello! My name is ",this.normalize(this.match.params.name),". My name was passed in through a route param!"))}};Object.defineProperty(e,"style",{get:function(){return".app-profile{padding:10px}"},enumerable:true,configurable:true});return e}();e("app_profile",t)}}});