* Useful Example Codes

  * [Input Field With Material Icons](http://plnkr.co/edit/8WH6vS?p=preview)" <sup>`plunker`</sup>
  * [Custom console; konsole](https://gist.github.com/allenhwkim/ceebbfa66771be0b8aedadd73e715d7b)<sup>`gist`</sup>
  * [Get real width and height using getComputedStyle](https://gist.github.com/allenhwkim/86f498bef85e65f36189e00c746d4167)<sup>`gist`</sup>
  * [Show document.body into a small div by cloning it](http://plnkr.co/edit/k27ph6?p=preview)<sup>`plunker`</sup>
  * [Usage of .nvmrc](https://gist.github.com/allenhwkim/04f6285e9855b51572d863c698782f34)<sup>`gist`</sup>
  * [flex box examples](http://plnkr.co/edit/lxx7QCwZbeZyyUtwiCym?p=preview)<sup>`plunker`</sup>
  * Angular 1.x Equivalents
      * [ng-include equivalent (DynamicComponent)](http://plnkr.co/edit/L4lymg?p=preview)<sup>`plunker`</sup>
 * Angular 2 Routing Examples
    * [parent-child routes](http://plnkr.co/edit/St5US5?p=preview)<sup>`plunker`</sup>

 * Angular 2 Unit Test Examples
    * [http service unit test using mock backend](https://plnkr.co/edit/a71wxC?p=preview)<sup>`plunker`</sup> 
    * [component unit test](https://plnkr.co/edit/a71wxC?p=preview)<sup>`plunker`</sup>

* [Remote Component Loading](http://plnkr.co/edit/DuLPXo?p=preview&open=app%2Fapp.component.ts)<sup>`plunker`</sup>


## Idea:

Idea for overlaying elements(tooltip, popup(modal), etc)

* Overlay (Absolute positioned HTML Element)
  * properties:
    - relativeTo: viewport, or element
    - containerEl(relatively positioned element) - readonly, must be no positioned or relative positioned
    - el(element to show)
    - position: top-left, top-center, top-right, center-left, center-center, center-right, bottom-left, bottom-center, bottom-right
  * methods
    - moveTo(x, y): move to a certain position x,y: pixel or percentage
    
* OverlayManager
  * properties: 
    - overlays: The array of Overlays that are currently registered
    - activeOverlay: Currently focused(active) overlay
  * methods
    - add(overlay: Overlay) : register an overlay
    - remove(overlay: Overlay): remove the overlay
    - show(id): show an overlay
    - hide(id): hide an overlay
