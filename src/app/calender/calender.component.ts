import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CalendarEvent, CalendarView, CalendarMonthViewDay } from 'angular-calendar';
import { Subject } from 'rxjs';
import { AuthService } from '../Services/auth.service';

@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CalenderComponent implements OnInit {
  viewDate: Date = new Date();
  view: CalendarView = CalendarView.Month;
  refresh: Subject<any> = new Subject();
  events: CalendarEvent[] = [];
  CalendarView = CalendarView; 

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    let todoData = this.authService.getAllTodos();
    this.events = todoData.map(task => ({
      title: task.title,
      start: new Date(task.startdate),
      end: new Date(task.enddate),
      color: { primary: '#1e90ff', secondary: '#FAE3E3' }
    }));
  }

  setView(view: CalendarView) {
    this.view = view;
  }

  nextMonth(): void {
    this.viewDate = new Date(this.viewDate.getFullYear(), this.viewDate.getMonth() + 1, 1);
    this.refresh.next({});
  }

  previousMonth(): void {
    this.viewDate = new Date(this.viewDate.getFullYear(), this.viewDate.getMonth() - 1, 1);
    this.refresh.next({});
  }

  today(): void {
    this.viewDate = new Date();
    this.refresh.next({});
  }

  dayClicked({ day, sourceEvent }: { day: CalendarMonthViewDay<any>; sourceEvent: MouseEvent | KeyboardEvent }): void {
    this.viewDate = day.date;
    this.view = CalendarView.Day;
   
  }

  beforeMonthViewRender({ body }: { body: CalendarMonthViewDay[] }): void {
    body.forEach(day => {
      const dayStartTimestamp = day.date.getTime();
      day.cssClass = ''; 

      day.events.forEach(event => {
        if (dayStartTimestamp === new Date(event.start).getTime()) {
          day.cssClass += ' bg-green'; 
        }
        if (dayStartTimestamp === new Date(event.end).getTime()) {
          day.cssClass += ' bg-red'; 
        }
      });
    });
  }
}
