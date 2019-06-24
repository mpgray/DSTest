import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError} from 'rxjs/operators';


const SERVER = 'https://jsonplaceholder.typicode.com/users/';

export interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
  address?: {
    street: string;
    suite?: string;
    city: string;
    zipcode: string;
    geo?: {
      lat: number;
      lng: number;
    }
  };
  phone?: string;
  website?: string;
  company?: {
    name: string;
    catchPhrase?: string;
    bs?: string;
  };
}

@Injectable()
export class UsersService {

  constructor(private http: HttpClient) {}

  getUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>(SERVER)
      .pipe(catchError(this.handleError('getUsers', [])));
  }

  getUser(id: number): Observable<IUser> {
    return this.http.get<IUser>(SERVER + id);
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
