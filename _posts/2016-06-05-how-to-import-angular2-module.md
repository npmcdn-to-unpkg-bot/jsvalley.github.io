---
layout: post
title: How To Import Angular 2 Module
---

## How To Import Angular2 Module

1. Install npm module

       $ npm install my-module --save

2. Set `tsconfig.json` moduleResolution to `node`

        {
          "compilerOptions": {
            "moduleResolution" : "node",
            ...
          }
        }

   This means that when you `import { A } from "moduleA"`, it looks for `moduleA` in special folders named `node_modules`. In this case, it looks for the `node_modules/moduleA` directory and trying to find `index.ts` or `index.d.ts` [as documented](https://www.typescriptlang.org/docs/handbook/module-resolution.html#node)

      * node_modules/moduleA/index.ts
      * or, node_modules/modulea/index.d.ts

   We call this process as 'module resolution'.

   Module resolution is the process the compiler uses to figure out
   what an import refers to. To get into detail;

   Now you are ready to use the module when you code in typescript.  
   ![Imgur](http://i.imgur.com/SPOpWz4.png)

   If the module resolution is not done properly, you will see the error in your IDE.
   For this example, we are seeing error in WebStorm.  
   
   ![Imgur](http://i.imgur.com/5VfXSYr.png)

3. You also need to setup run-time module resolution. This should be configured
  in systemjs.config.js. For more about systemjs.config.js, you can read an article,
  [Introduction to SystemJS for Angular Beginners](https://github.com/jsvalley/jsvalley.github.io/blob/master/systemjs-in-angular2.md)


        config.map['my-module] = 'node_modules/my-module';
        config.packages['my-module] = { main: 'dist/index.js', defaultExtention: 'js'}

  * `config.map` dictates where to find module when import.
  * `config.package` provides configuration that is specific to a common path.
    * `main` tells the main entry point of the package. From the above example,
    * `import 'my-module'` is equivalent to import 'my-module/dist/index.js'

