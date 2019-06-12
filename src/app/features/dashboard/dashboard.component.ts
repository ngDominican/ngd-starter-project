import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  template: `
    <p>
      dashboard works!
    </p>
    <button [routerLink]="['/features', 'administration']">Go to administration module</button>
  `,
  styles: []
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
