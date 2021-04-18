import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding-example',
  templateUrl: './event-binding-example.component.html',
  styleUrls: ['./event-binding-example.component.css']
})
export class EventBindingExampleComponent implements OnInit {

  constructor() { }

  months = ['January', 'February', 'March', 'April',
    'May', 'June', 'July', 'August',
    'September', 'October', 'November', 'December'];

  ngOnInit(): void { }

  buttonClickFunction(event: MouseEvent): void {
    alert('You Just Clicked!');
  }

  selectMonthFun(event: Event): void {
    alert('Select carefully!');
  }

}
