import { Component } from "@angular/core";

@Component({
    selector: 'app-warning-alert',
    template: '<p>WARNING</p>',
    styles: [ `
      p {
          padding: 25px;
          background-color: green;
          border: 1px solid green;
        }
    `]
})
export class WarningAlertsComponent{

}