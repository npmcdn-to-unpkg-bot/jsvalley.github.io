Have already spent hours and hours to take screenshot from web page
------------------------------------------------------------------

Current Status: Still Investigating..


* https://github.com/niklasvh/html2canvas

* https://github.com/tsayen/dom-to-image

* http://robert.ocallahan.org/2011/11/drawing-dom-content-to-canvas.html

* https://developer.mozilla.org/en-US/docs/Web/API/CanvasAPI/Drawing_DOM_objects_into_a_canvas

html2canvas 
===========
4000 lines of code

It requires html2canvas-proxy. I don't understand why it requires another server to render a page

Quote from their site:
"The script is still in a very experimental state, so I don't recommend using it in a production environment nor start building applications with it yet"

I tried, and it does not render any images. There might be some thing I did not discover, but i don't want to go through.
 
I tried, lower version 0.4 instead of 0.5. It renders, but all fonts are ignored.
 
dom-to-image
============
800 lines of code

It does not support IE11

domvas
======
80 lines of code

It does not support IE11

canvg
=====
canvg does not support IE11 because it does not support foriegnObject in canvas


Going back to re-design
=======================
http://stackoverflow.com/questions/2651173/rendering-html-to-png-server-side

I think this is a good solution just to send html to server and server generate an image

http://stackoverflow.com/questions/17832304/convert-html-string-to-image
document.childNodes[0].outerHTML
document.childNodes[1].outerHTML
