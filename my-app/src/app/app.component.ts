import { Component } from '@angular/core';
import { ɵTestingCompiler } from '@angular/core/testing';
import {View, EventSettingsModel} from '@syncfusion/ej2-angular-schedule';
@Component({
  selector: 'app-root',
  template:'<ejs-schedule height="850" width="1250" [selectedDate]="setDate" [currentView]="setDate"></ejs-schedule>',
  //templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  public setView: View="Month";
  public setDate: Date= new Date(2020,8,12);
  public eventObject:EventSettingsModel={
    dataSource:[{
      StartTime:new Date(2020,0,17,4,0),
      EndTime:new Date(2020,0,17,6,0)
    }]
  }
}
