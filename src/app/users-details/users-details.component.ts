import {Component, Input, OnInit} from '@angular/core';

import {UsersService, IUser} from '../services/users.service';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-users-details',
  templateUrl: './users-details.component.html',
  styleUrls: ['./users-details.component.css']
})
export class UsersDetailsComponent implements OnInit {
  @Input() userId: number;

  private userDetails: IUser = {
    'id': 0,
    'name': '',
    'username': '',
    'email': '',
  };
  constructor(private usersService: UsersService, public activeModal: NgbActiveModal) { }

  ngOnInit() {
    this.usersService.getUser(this.userId).subscribe((data: {}) => {
      this.userDetails = data as IUser;
    });
  }



}
