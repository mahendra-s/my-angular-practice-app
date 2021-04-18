import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './pojo/user';

@Injectable({
  providedIn: 'root'
})


export class MyHttpDataServiceService {
  private apiurl = 'http://jsonplaceholder.typicode.com/users';

  constructor(private httpClient: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.apiurl);
  }
}
