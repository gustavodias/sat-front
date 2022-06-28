import { ViewChild } from '@angular/core';
import { NavComponent } from './../nav/nav.component';
import { Component, Input, OnInit } from '@angular/core';
import { MatDrawer, MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() inputSideNav: MatDrawer;

  constructor() { }

  ngOnInit(): void {
  }

}
