---
layout: post
title: How To Publish Angular2 Typescript Module
---

# How To Publish Angular2 TypeScript Module

1. Code your classes in to `src` directory
e.g., src/app/hello-world.ts

    ![Imgur](http://i.imgur.com/2ErFSyC.png)


2. Code `src/index.ts` to export your classes

     export {HelloWorld} from './app/hello-world';

3. configure `tsconfig.json`

        {
           "compilerOptions": {
             "declaration": true,
             "target": "es5",
             "module": "commonjs",
             "moduleResolution": "node",
             "sourceMap": true,
             "emitDecoratorMetadata": true,
             "experimentalDecorators": true,
             "removeComments": false,
             "noImplicitAny": true,
             "outDir": "dist",
             "suppressImplicitAnyIndexErrors": true
           },
           "exclude": [
             "node_modules",
             "typings/main",
             "typings/main.d.ts"
           ]
        }

     From the above code, the important thing is to make  `"declartion": true`
     and `"outDir": "dist"`.

     `declaration` as `true` will generate all type definition files.
     e.g., `hello-world.d.ts`, or `index.d.ts`

     `outDir` is the target directory to store all `.js` files which are
     compiled from typescript

4. Compile type script into Javascript. This is the result in `dist` directory.

   ![Imgur](http://i.imgur.com/p7qEZcz.png)

5. Your code is ready to be published except defining `main` file
   in your `package.json`

        "main": "dist/index.js"

   and adding `index.d.ts` into your main director

        export * from './dist';

6. Now it's really ready. Time to publish your awsome module.
   Update the version in your `package.json`
   
         "version": "0.1.3",
         
  commit your changes,  then publish it.
  
          $npm publish
