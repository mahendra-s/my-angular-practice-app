import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-example',
  templateUrl: './pipe-example.component.html',
  styleUrls: ['./pipe-example.component.css']
})
export class PipeExampleComponent implements OnInit {

  titleText = 'Welcome to Angular!';

  months = ['January', 'February', 'March', 'April',
    'May', 'June', 'July', 'August',
    'September', 'October', 'November', 'December'];

  jsonval = {name: 'Mahendra', pin_code: '411057', id: 96};

  todayDate = new Date();

  constructor() { }

  ngOnInit(): void {
  }

}
