---
layout: post
title: How To Have A Web Site With Multiple Posts
---

# How To Have A Web Site With Multiple Posts

On the previous post, we learned how to have a website with very basic setup
This time, we want you to have many posts without maintaining list of index table.

These are the steps

1. Create `_posts` directory
2. Create your articles within `_posts` directory
3. Link your articles on your index page

Again, Let's get into the detail.

### 1. Create `_posts` directory
  ![Imgur]http://imgur.com/bDUK7Av

### 2. Create your articles within `_posts` directory
At this time, you may say
"I want to have different look-and-feel for articles only".

It's as simples as
 1. create one more file in your `_layouts` directory
 2. change `layout: default` to your own in your article files.

An important thing is that you need to have date as `yyyy-mm-dd` as
the prefix of your article.

For example, 2016-06-10-my-article.md

Another important thing to remind is to add [Front Matter](https://jekyllrb.com/docs/frontmatter/)
into your article.

![Imgur](http://i.imgur.com/Dj2PGIE.png)


### 3. Link your articles on your index page

Now update your index.md to show all posts.

![Imgur](http://i.imgur.com/Ng3kF7s.png)

And you can take a look at the source code here,
https://github.com/jsvalley/jsvalley.github.io/tree/0.2.0







