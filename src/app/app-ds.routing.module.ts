import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import {UsersDetailsComponent} from './users-details/users-details.component';

const routes: Routes = [
  {
    path: '',
    component: UsersComponent,
  },
  {
    path: 'details',
    component: UsersDetailsComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
