import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {UserDetails} from '../users-details/user-details';


const URL = 'https://jsonplaceholder.typicode.com/users';

@Injectable()
export class UsersService {

  constructor(private http: HttpClient) {}

  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(URL);
  }

  getUser(id: number): Observable<any> {
    return this.http.get<any>(URL + id);
  }


}
