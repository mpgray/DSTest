import {Component, OnInit, PipeTransform} from '@angular/core';
import { User } from './user';
import {Observable} from 'rxjs';
import {FormControl} from '@angular/forms';
import {DecimalPipe} from '@angular/common';
import {map, startWith} from 'rxjs/operators';


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
  styleUrls: ['./users.component.css'],
  providers: [DecimalPipe]
})

export class UsersComponent implements OnInit {

  user$: Observable<User[]>;
  filter = new FormControl('');

  constructor(pipe: DecimalPipe) {
    this.user$ = this.filter.valueChanges.pipe(
      startWith(''),
      map(text => this.search(text, pipe))
    );
  }

  ngOnInit() {
  }

  search(text: string, pipe: PipeTransform): User[] {
    return USERS.filter(user => {
      const term = text.toLowerCase();
      return user.name.toLowerCase().includes(term);
    });
  }
}
