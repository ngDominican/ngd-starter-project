import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-administration',
  template: `
    <b>Administration Module</b> <br />
    <button [routerLink]="['roles']">Go to roles module</button> |
    <button [routerLink]="['users']">Go to users module</button> |
    <button [routerLink]="['/features', 'dashboard']">Go to dashboard module</button><br /><br />
    <router-outlet></router-outlet>

  `,
  styles: []
})
export class AdministrationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
