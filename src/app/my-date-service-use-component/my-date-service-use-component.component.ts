import { Component, OnInit } from '@angular/core';
import { MyDateServiceService } from '../services-module/my-date-service.service';

@Component({
  selector: 'app-my-date-service-use-component',
  templateUrl: './my-date-service-use-component.component.html',
  styleUrls: ['./my-date-service-use-component.component.css']
})
export class MyDateServiceUseComponentComponent implements OnInit {

  // @ts-ignore
  dateFromService;

  constructor(private dateServiceService: MyDateServiceService) { }

  ngOnInit(): void {
    this.dateFromService = this.dateServiceService.getTodayDate();
  }

}
