import {Component, OnInit} from '@angular/core';
import { User } from './user';
import {Observable} from 'rxjs';
import {FormControl} from '@angular/forms';
import {map, startWith} from 'rxjs/operators';
import {UsersService} from '../services/users.service';

const USERS: User[] = [
  {
    'id': 1,
    'name': 'Leanne Graham',
    'username': 'Bret',
    'email': 'Sincere@april.biz',
  }
];

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {

  private user$: Observable<User[]>;
  private filter = new FormControl('');

  constructor() {
    this.user$ = this.filter.valueChanges.pipe(
      startWith(''),
      map(text => this.search(text))
    );
  }

  ngOnInit() {

  }


  search(text: string): User[] {
    return USERS.filter(user => {
      const term = text.toLowerCase();
      return user.name.toLowerCase().includes(term);
    });
  }
}
