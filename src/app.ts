import {Router} from 'aurelia-router';
import {inject} from 'aurelia-framework';

@inject(Router)

export class App {
  router;

  constructor (router) {
    this.router = router;
    this.configure();
  }

  configure() {
    this.router.configure(config => {
      config.title = 'Aurelia';
      config.map([
        { route: ['','home'], name: 'home', moduleId: './home/home', nav: true, title:'Home' },
        { route: 'about', name: 'about',  moduleId: './about/about',    nav: true, title:'About' }
        // { route: ['','welcome'],  moduleId: 'welcome',      nav: true, title:'Welcome' },
        // { route: 'flickr',        moduleId: 'flickr',       nav: true },
        // { route: 'child-router',  moduleId: 'child-router', nav: true, title:'Child Router' }
      ]);
    });    
  }
}