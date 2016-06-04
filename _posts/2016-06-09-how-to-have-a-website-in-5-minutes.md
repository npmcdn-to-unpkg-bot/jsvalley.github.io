---
layout: post
title: How To Have A Web Site In 5 Minutes
---

# How To Have a Website In 5 Minutes

## A website up and running on github with Jekyll


Do you have something to post on the internet, but not on Facebook or some company's but site, but on your own website.
However, you don't want to go through all web hosting, programming, and all technical stuff?

You can do this on github.

These are the steps to do;

1. Create a github account
2. Create a repository with name of `<<your account>>.github.io`
3. Add your files there. Done!!!

Let's get into the detail.

### 1. Create a github account if you don't have one.

  * Go to https://github.com and click "Sign up", not "Sign in"
  * Fill up the necessary information
    ![Imgur](http://i.imgur.com/ojdV8E5.png)

### 2. Create a repository  with name of `<<your account>>.github.io`

  * Sign in to github with your username and password
  * Create a new repository name. e.g. `allenhwkim.github.io`
    ![Imgur](http://i.imgur.com/Eyjo4dy.png)

### 3. Add your files there. Done!!

  * visit https://github.com/`<<your account>>`/`<<your account>>`.github.io
  * Create very basic files first. You will need the followings files minimum.


      + __layouts            Directory include template of your web site
        - default.html       Default template
      . Gemfile              Necessary file to run your website with Jekyll
      . _config.yml          Necessary configuration file for your web site
      . index.md             Your first page goes here

  * default.html

        <!DOCTYPE html>
        <html>
          <head>
            <title>Js Valley, The Javascript Village</title>
          </head>
          <body>
            {{ content }}
          </body>
        </html>

  * Gemfile

         gem 'github-pages'

   * __config.yml

         markdown: kramdown

   * index.md

         ---
         layout: default
         ---

         # Hello World

    You must have [front matter](https://jekyllrb.com/docs/frontmatter/) in index.md.
    For this `index.md` the following is the front matter, which tells you that `_layouts/default.html`
    will be used to render this page.

         ---
         layout: default
         ---


 Save all of this, then visit http://`<<your account>>`.github.io. Then you will see your website up and running

Here is the result on the web site
![Imgur](http://i.imgur.com/KHpocwz.png)

And you can take a look at the source code here,
https://github.com/jsvalley/jsvalley.github.io/tree/0.1.0


 Of course, you want more than that. Next article will cover more about partials, layouts, posts, and indexes.






