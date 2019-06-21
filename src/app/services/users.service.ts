import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {UserDetails} from '../users-details/user-details';
import {User} from '../users/user';
import {catchError} from 'rxjs/operators';

const URL = 'https://jsonplaceholder.typicode.com/users';

@Injectable()
export class UsersService {

  constructor(private http: HttpClient) {}

  getUsers(): Observable<UserDetails> {
    return this.http.get<UserDetails>(URL );
  }

  getUser(id: number): Observable<UserDetails> {
    return this.http.get<UserDetails>(URL + id);
  }


}
