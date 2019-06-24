import {Component, OnInit} from '@angular/core';
import {Observable, of} from 'rxjs';
import {FormControl} from '@angular/forms';
import {map, startWith} from 'rxjs/operators';
import {UsersService, IUser} from '../services/users.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {UsersDetailsComponent} from '../users-details/users-details.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})

export class UsersComponent {

  private user$: Observable<IUser[]>;
  private users: IUser[];
  private filter = new FormControl('');

  constructor(private modalService: NgbModal, private usersService: UsersService) {
    this.getUsers();
    this.user$ = this.filter.valueChanges.pipe(
      startWith(''),
      map(text => this.search(text))

    );

  }

  getUsers() {
    this.usersService.getUsers().subscribe((data: {}) => {
      this.users = data as IUser[];
    });
    this.user$ = of(this.users);
  }

  search(text: string): IUser[] {
    return this.users.filter(user => {
      const term = text.toLowerCase();
      return user.name.toLowerCase().includes(term);
    });
  }

  // Opens the modal for the details pertaining to the user.
  details(id: number) {
    const modalRef = this.modalService.open(UsersDetailsComponent);
    modalRef.componentInstance.userId = id;
  }
}
