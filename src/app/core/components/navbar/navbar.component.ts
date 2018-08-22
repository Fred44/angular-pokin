import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

import { ROUTES } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  mobile_menu_visible = false;
  sidebarVisible: boolean;

  private listTitles: any[];

  constructor(private location: Location, private router: Router) {
    this.sidebarVisible = false;
  }

  ngOnInit() {
    this.listTitles = ROUTES.filter(listTitle => listTitle);
    this.router.events.subscribe((event) => {
      this.sidebarClose();
      this.mobile_menu_visible = false;
    });
  }

  sidebarOpen() {
    const body = document.getElementsByTagName('body')[0];
    body.classList.add('nav-open');
    this.sidebarVisible = true;
  }

  sidebarClose() {
    const body = document.getElementsByTagName('body')[0];
    this.sidebarVisible = false;
    body.classList.remove('nav-open');
  }

  sidebarToggle() {
    if (this.sidebarVisible === false) {
      this.sidebarOpen();
    } else {
      this.sidebarClose();
    }

    if (this.mobile_menu_visible) {
      this.mobile_menu_visible = false;
    } else {
      this.mobile_menu_visible = true;
    }
  }

  getTitle() {
    const titlee = this.location.prepareExternalUrl(this.location.path());

    for (let item = 0; item < this.listTitles.length; item++) {
      if (titlee.indexOf(this.listTitles[item].path) >= 0) {
        return this.listTitles[item].title;
      }
    }
    return '';
  }
}
