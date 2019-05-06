import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.page.html',
  styleUrls: ['./calendar.page.scss'],
})
export class CalendarPage implements OnInit {

  viewTitle: string;

  calendar = {
    mode: 'month',
    currentDate: new Date()
  }

  constructor() { }

  ngOnInit() {
  }

  onEventSelected(eve) {

  }

  onViewTitleChanged = (title) => {
      this.viewTitle = title;
  };

  onTimeSelected() {

  }

}
