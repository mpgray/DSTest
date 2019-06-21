import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {CommonModule, DecimalPipe} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-ds.routing.module';

import { DsAppComponent } from './app-ds.component';
import { UsersComponent } from './users/users.component';
import { UsersDetailsComponent } from './users-details/users-details.component';



@NgModule({
  declarations: [
    DsAppComponent,
    UsersComponent,
    UsersDetailsComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [DecimalPipe],
  bootstrap: [DsAppComponent]
})
export class AppModule { }
