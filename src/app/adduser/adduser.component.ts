import { Component } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.scss']
  // providers: [UserService]
})
export class AdduserComponent {
  username: string = '';
  status: string = 'active';
  constructor(private userService: UserService) {}

  addUser() {
    this.userService.AddNewuser(this.username, this.status);
  }
}
