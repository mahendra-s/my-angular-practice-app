import { Component, OnInit } from '@angular/core';
import { MyHttpDataServiceService } from '../services-module/my-http-data-service.service';
import { User } from '../services-module/pojo/user';

@Component({
  selector: 'app-http-client-example',
  templateUrl: './http-client-example.component.html',
  styleUrls: ['./http-client-example.component.css']
})
export class HttpClientExampleComponent implements OnInit {
  users: User[] = [];

  constructor(private httpService: MyHttpDataServiceService) { }

  ngOnInit(): void {
    this.httpService.getUsers().subscribe(data => {
      // console.log(data);
      this.users = data;
    });
  }

}
