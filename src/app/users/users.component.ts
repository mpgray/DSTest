import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {UsersService, IUser} from '../services/users.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {UsersDetailsComponent} from '../users-details/users-details.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})



export class UsersComponent implements OnInit {
  names: string[];

  users: IUser[];
  private filter = new FormControl('');

  constructor(private modalService: NgbModal, private usersService: UsersService) {}

  ngOnInit() {
   this.getUser();

  }

  getUser() {
    this.usersService.getUsers().subscribe((data: {}) => {
      this.users = data as IUser[];
    });
  }


  // Opens the modal for the details pertaining to the user.
  details(id: number) {
    const modalRef = this.modalService.open(UsersDetailsComponent);
    modalRef.componentInstance.userId = id;
  }
}
