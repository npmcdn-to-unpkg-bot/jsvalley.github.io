//Using Angular version 2.0.0-beta.9
import {Component, provide, Injector} from 'angular2/core';
import {inject, describe, expect, it, beforeEachProviders} from 'angular2/testing';
import {XHRBackend, HTTP_PROVIDERS, Response, ResponseOptions} from 'angular2/http';
import {MockBackend} from 'angular2/http/testing';
//for component test
import {Component} from 'angular2/core';
import {injectAsync, TestComponentBuilder} from 'angular2/testing';

import {MyHttpService} from '../src/my-http-service';

describe('http-test', () => {
  let xhrBackend, myHttpService;
  
  beforeEach(() => {
    injector = Injector.resolveAndCreate([
      HTTP_PROVIDERS,
      provide(XHRBackend, {useClass: MockBackend}),
      MyHttpService
    ]);
    
    xhrBackend = injector.get(XHRBackend);
    myHttpService = injector.get(MyHttpService);
    
    responseMap = {
      'request1.json': {body: {foo: 'response1'}},
      'request2.json': {body: {foo: 'response2'}}
    }
    
    xhrBackend.connections.subscribe(connection => {
      for (var key in responseMap) {
        if (connection.request.url.match(new RegExp(key))) {
          connection.mockRespond(new Response(
            new ResponseOptions(responseMap[key]))
          );
        }
      }
    });
  ]);
  
  it('should respond with response1', () => {
    myHttpService.get('request1.json').subscribe(response => {
      expect(response.foo).toBe('response1');
    });
  });

  it('should respond with  response2', () => {
    myHttpService.get('request2.json').subscribe(response => {
      expect(response.foo).toBe('response2');
    });  
  });
  
  it('should return non observables', () => {
    let result = myHttpService.doSomething();
    expect(result).toBe('done');
  });
});
