---
layout: post
title: Easier Directive Development In Angular2
image: images/nature5.jpg
---
  
Are you an Angular2 developer and having hard time to build a good and clean directive?
You may end up with touching `document` object to show and hide your cool element.
Or, do you find yourself start using root level or global level services for a simple directive development?
There is simple solution implemented into [datetime picker](https://github.com/jsvalley/ng2-datetime-picker)
 and [auto complete](https://github.com/jsvalley/ng2-auto-complete).

<!--more-->

Here are the steps.

1. Wrap your element with `<div>` tag
2. Control show and hide by appending or removing a component.
3. DONE!!!

Ok, let's get into the detail. Although approach are the same, implementation of `datetime-picker` will be
explained in this article.

### 1. Wrap your elememnt with `<div>` tag.

   When you wrap your element with `<div>` tag, it's important to set its style
   to have `inline-block` display and  `relative` position.
   So that it does not break the existing look-and-feel, and a component with will
   be added in step #2 can have `absolute` position which is important to 
   set relative positioning to this element.

          constructor(public viewContainerRef: ViewContainerRef) {
            this.el = this.viewContainerRef.element.nativeElement;
          }
          
          ngOnInit(): void {
            //wrap this element with a <div> tag, so that we can position dynamic elememnt correctly
            let divEl = document.createElement("div");
            divEl.style.display = 'inline-block';
            divEl.style.position = 'relative';
            this.el.parentElement.insertBefore(divEl, this.el.nextSibling);
            divEl.appendChild(this.el);
            ... 
          }
    

### 2. Control show and hide by appending and removing  a component

   It's as easy as setting `host` properties into your @Directive decorator.
   The following example shows how to implement show and hide a datetime-picker for an input element.
       
        
        @Directive({
          selector: '[datetime-picker]',
          host: {
            '(click)': 'showDatetimePicker($event)',
            '(blur)': 'hideDatetimePicker()'
          }
        })
        
        showDatetimePicker($event) {
          this.componentRef = this.dcl.loadNextToLocation(DateTimePickerComponent, this.viewContainerRef);
          this.componentRef.then( componentRef => {
            // access componnet instance properties and functions here
            // componentRef.instance.myVar = 1;
            // componentRef.instance.myFunc();
            ...
          }
        }
        
        
   This is how DateTimePickerComponent looks like.
   
        @Component({
          selector: 'datetime-picker',
          templateUrl: './datetime-picker.html',
          styleUrls: ['./datetime-picker.css'],
          encapsulation: ViewEncapsulation.None
        })
        export class DateTimePickerComponent implements AfterViewChecked {
          ...
        }
        
### 3. DONE!!!

  By following the approach above, implementation of datetime picker and autocomplete was 
  a lot easier than Angular1. Here are the working examples.
  
  * datetime picker
  
    <a href="http://embed.plnkr.co/32syXF/">
      <img src="http://i.imgur.com/g5qbBBz.png" width="50%" />
    </a>
    
  * autocomplete
  
    <a href="http://embed.plnkr.co/32syXF/">
      <img src="http://i.imgur.com/dAmheg0.png" width="50%" />
    </a>
  
  If you want to see source code, you can find those at github.
  
  * [github: datetime picker](https://github.com/jsvalley/ng2-datetime-picker)
  * [github: autocomplete](https://github.com/jsvalley/ng2-datetime-picker)
    
Let me know if you have any questions.
