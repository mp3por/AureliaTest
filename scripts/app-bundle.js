var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('app',["require", "exports", 'aurelia-router', 'aurelia-framework'], function (require, exports, aurelia_router_1, aurelia_framework_1) {
    "use strict";
    var App = (function () {
        function App(router) {
            this.router = router;
            this.configure();
        }
        App.prototype.configure = function () {
            this.router.configure(function (config) {
                config.title = 'Aurelia';
                config.map([
                    { route: ['', 'home'], name: 'home', moduleId: './home/home', nav: true, title: 'Home' },
                    { route: 'about', name: 'about', moduleId: './about/about', nav: true, title: 'About' }
                ]);
            });
        };
        App = __decorate([
            aurelia_framework_1.inject(aurelia_router_1.Router), 
            __metadata('design:paramtypes', [Object])
        ], App);
        return App;
    }());
    exports.App = App;
});

define('environment',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = {
        debug: true,
        testing: true
    };
});

define('main',["require", "exports", './environment', 'bootstrap'], function (require, exports, environment_1) {
    "use strict";
    Promise.config({
        longStackTraces: environment_1.default.debug,
        warnings: {
            wForgottenReturn: false
        }
    });
    function configure(aurelia) {
        aurelia.use
            .standardConfiguration()
            .feature('resources');
        if (environment_1.default.debug) {
            aurelia.use.developmentLogging();
        }
        if (environment_1.default.testing) {
            aurelia.use.plugin('aurelia-testing');
        }
        aurelia.start().then(function () { return aurelia.setRoot(); });
    }
    exports.configure = configure;
});

define('resources/index',["require", "exports"], function (require, exports) {
    "use strict";
    function configure(config) {
    }
    exports.configure = configure;
});

define('home/home',["require", "exports"], function (require, exports) {
    "use strict";
    var Home = (function () {
        function Home() {
            this.heading = "Home Section";
        }
        return Home;
    }());
    exports.Home = Home;
});

define('about/about',["require", "exports"], function (require, exports) {
    "use strict";
    var About = (function () {
        function About() {
            this.heading = "About Section";
        }
        return About;
    }());
    exports.About = About;
});

define('text!app.html', ['module'], function(module) { module.exports = " <template>\n   <!-- Require 3rd party libraries  -->\n   <require from=\"bootstrap/css/bootstrap.css\"></require>\n   <link rel=\"stylesheet\" href=\"scripts/css/font-awesome.min.css\">\n   <!--<require from=\"font-awesome/css/font-awesome.css\"></require>-->\n\n   <!-- Bootstrap Navigation  -->\n   <nav class=\"navbar navbar-inverse navbar-fixed-top\" role=\"navigation\">\n     <div class=\"navbar-header\">\n       <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\">\n         <span class=\"sr-only\">Toggle Navigation</span>\n         <span class=\"icon-bar\"></span>\n         <span class=\"icon-bar\"></span>\n         <span class=\"icon-bar\"></span>\n       </button>\n       <a class=\"navbar-brand\" href=\"#\">\n         <i class=\"fa fa-home\"></i>\n         <span>${router.title}</span>\n       </a>\n     </div>\n\n     <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n       <ul class=\"nav navbar-nav\">\n         <!-- Loop through routes to create a menu  -->\n         <li repeat.for=\"row of router.navigation\" class=\"${row.isActive ? 'active' : ''}\">\n           <a href.bind=\"row.href\">${row.title}</a>\n         </li>\n       </ul>\n\n       <ul class=\"nav navbar-nav navbar-right\">\n         <!-- Show loader when changing routes  -->\n         <li class=\"loader\" if.bind=\"router.isNavigating\">\n           <i class=\"fa fa-spinner fa-spin fa-2x\"></i>\n         </li>\n       </ul>\n     </div>\n   </nav>\n\n   <div class=\"page-host\">\n     <!-- Route mount point  -->\n     <router-view></router-view>\n   </div>\n </template>"; });
define('text!home/home.html', ['module'], function(module) { module.exports = "<template>\r\n  <div class=\"jumbotron\">\r\n    <h2 class=\"text-center\">${heading}</h2>\r\n  </div>\r\n</template>"; });
define('text!about/about.html', ['module'], function(module) { module.exports = "<template>\r\n  <div class=\"jumbotron\">\r\n    <h2 class=\"text-center\">${heading}</h2>\r\n  </div>\r\n</template>"; });
//# sourceMappingURL=app-bundle.js.map