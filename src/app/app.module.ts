import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {DsAppComponent} from './app-ds.component';

@NgModule({
  declarations: [
    DsAppComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [DsAppComponent]
})
export class AppModule { }
