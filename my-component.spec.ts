// To run tests in the browser, need to include DOM adapters
import {setBaseTestProviders} from 'angular2/testing';
import {
  TEST_BROWSER_PLATFORM_PROVIDERS,
  TEST_BROWSER_APPLICATION_PROVIDERS
} from 'angular2/platform/testing/browser';
setBaseTestProviders(
  TEST_BROWSER_PLATFORM_PROVIDERS,
  TEST_BROWSER_APPLICATION_PROVIDERS
);

// import 
import {
  AsyncTestCompleter,
  TestComponentBuilder,
  beforeEachProviders,
  beforeEach,
  describe,
  el,
  expect,
  injectAsync,
  it
} from 'angular2/testing';
import {DOM} from 'angular2/src/platform/dom/dom_adapter';
import {Component, provide} from 'angular2/core';
import {ElementRef} from 'angular2/src/core/linker/element_ref';
import {MyComponent} from '../src/my.component';

import {MyNavbarComponent} from '../src/my-navbar.component';
import {MyToolbarComponent} from '../src/my-toolbar.component';

@Component({template:''})
class EmptyComponent() {}

describe('MyComponent', () => {

  beforeEach(injectAsync([TestComponentBuilder], (tcb) => {
    return tcb
      .overrideDirective(MyComponent, MyNavbarComponent, EmptyComponent)
      .overrideDirective(MyComponent, MyToolbarComponent, EmptyComponent)
      .createAsync(MyComponent)
      .then((componentFixture: ComponentFixture) => {
        this.fixture = componentFixture;
      });
  ));
  
  it('should bind to {{foo}}', () => {
    let el = this.fixture.nativeElement;
    let myComponent = fixture.componentInstance;
    myComponent.foo = 'FOO';
    fixture.detectChanges();
    expect(el.innerHTML).toMatch('FOO');    
  });
});
