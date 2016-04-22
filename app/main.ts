/// <reference path="../node_modules/angular2/typings/browser.d.ts" />  // no longer contains all of es6 type definitions
/// <reference path="../node_modules/typescript/lib/lib.es6.d.ts" />

import {bootstrap}    from 'angular2/platform/browser';
import {enableProdMode} from 'angular2/core'
import {AppComponent} from './app.component';

enableProdMode();
bootstrap(AppComponent);
