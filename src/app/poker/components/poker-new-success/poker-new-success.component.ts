import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-poker-new-success',
  templateUrl: './poker-new-success.component.html'
})
export class PokerNewSuccessComponent implements OnInit {

  @Input() pokerId: string;

  pokerLink: string;

  constructor() { }

  ngOnInit() {
    this.pokerLink = '/poker/' + this.pokerId
  }

}
