import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyDateServiceService {
  constructor() {}

  getTodayDate(): Date {
    return new Date();
  }
}
