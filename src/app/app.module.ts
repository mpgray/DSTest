import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-ds.routing.module';

import { DsAppComponent } from './app-ds.component';
import { UsersComponent } from './users/users.component';
import { UsersDetailsComponent } from './users-details/users-details.component';
import {UsersService} from './services/users.service';
import {HttpClientModule} from '@angular/common/http';
import { UserSearchComponent } from './user-search/user-search.component';

@NgModule({
  declarations: [
    DsAppComponent,
    UsersComponent,
    UsersDetailsComponent,
    UserSearchComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [UsersService],
  bootstrap: [DsAppComponent]
})
export class AppModule { }
