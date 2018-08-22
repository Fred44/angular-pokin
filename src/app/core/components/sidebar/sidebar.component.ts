import { Component, EventEmitter, OnInit, Output } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/poker/list', title: 'My pokers',  icon: 'dashboard', class: '' },
    { path: '/poker', title: 'Add a poker',  icon: 'person', class: '' }
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  @Output() logout = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }

  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  }

  onLogout() {
    this.logout.emit();
  }
}
