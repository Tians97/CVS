import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { User } from './model';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.scss']
})
export class DirectoryComponent {
  users!:User[];
  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.dataService
      .getUsers()
      .subscribe(
        (val) => ((this.users = val.data), console.log(this.users))
      );
  }
}
