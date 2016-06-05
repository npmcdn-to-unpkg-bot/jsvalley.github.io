---
layout: post
title: Introductoin to SystemJS in Angular2 Beginners
image: images/nature2.jpg
---

As you see a live example from [Angular2 Quick Start](https://angular.io/docs/ts/latest/quickstart.html), 
You will find that the main page of Angular2, which is `index.html`, uses `SystemJS` to start Angular2 application.
<!--more-->

index.html

    <script src="systemjs.config.js"></script>
    <script>
      System.import('app').catch(function(err){ console.error(err); });
    </script>

`System.import('app')` is starting the application, which affects `<my-app>Loading...</my-app>`

So, it is using systemjs to start the application. Then what is `systemjs`?


## systemjs

As mentioned in there [README](https://github.com/systemjs/systemjs), systemjs is univesal dynamic module loader, it loads the following in the browser

  - es6 modules
  - AMD
  - CommonJS
  - global scripts, 
  - and much more

As an angular2 user as who is curious how it works in browser, we are going to focus on ES6 modules.

it is build on the top of ES6 module loader.
So, let's get into ES6

## ES6

The import statement is used to import functions, objects or primitives that have been exported from 
an external module, another scfript, etc

https://developer.mozilla.org/en/docs/web/javascript/reference/statements/import

    import { member } from "module-name";
    import { member1 , member2 } from "module-name";

In the above sentence, it said `that have been exported`. In ES6, you can export functions, objects or primitives from a file.
The syntax looks like the following [as documented](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export)

    export { name1, name2, .., nameN };
    export let name1, name2,.., nameN; // also var

## Summary
Going back to systemjs,`system.import` function loads the javascript. and the basic usage is like this in browser.

    <script src="systemjs.config.js"></script>
    <script>
      System.import('app').catch(function(err){ console.error(err); });
    </script>

So, we see two things, one is config, and the other is `System.import('app')`
  1. [config](https://github.com/systemjs/systemjs/blob/master/docs/config-api.md)  
  2. The app package, which is imported by `System.import`, starts your application  

So many questions arise from here. 

  Q: where is app and how do we fine it?  
  A: It's defined in system.config.js using `map` and `packages`

    	  config.map['app'] = 'app'; // tells you where you find app package,
          config.packages['app'] = { main: 'main.ts',  defaultExtension: 'ts' }; // tells you what file to execute
          

  Q. Where is `main.ts` and what does it do?   
  A. It's located at 'app/main.ts' because `config.map['app']` told you find `app` packages in `app` directory.  
     and it does bootstrap angular application, which is your app.   
     bootstarp reads `AppComponent` and find `my-app` html tag in document
     then renders your applications between those two tags; `<my-app>` and `</my-app>`

          import { bootstrap }    from '@angular/platform-browser-dynamic';
          import { AppComponent } from './app.component';
          bootstrap(AppComponent);





 







