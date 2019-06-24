import {Component, Input} from '@angular/core';
import {Observable} from 'rxjs';
import {debounceTime, map} from 'rxjs/operators';

import {IUser} from '../services/users.service';
import {UsersDetailsComponent} from '../users-details/users-details.component';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.css']
})
export class UserSearchComponent {
  @Input() users: IUser[];

  public model: any;

  constructor(private modalService: NgbModal) {

  }

  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      map(term => term === '' ? []
        : this.users.filter(v => v.name.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
    )

  formatter = (x: {name: string}) => x.name;

  details(id: number) {
    const modalRef = this.modalService.open(UsersDetailsComponent);
    modalRef.componentInstance.userId = id;
  }
}
