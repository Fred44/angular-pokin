import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-poker-player-list',
  templateUrl: './poker-player-list.component.html',
  styleUrls: ['./poker-player-list.component.scss']
})
export class PokerPlayerListComponent implements OnInit {

  @Input() playerVotes: any;

  constructor() {}

  ngOnInit() {
  }

}
