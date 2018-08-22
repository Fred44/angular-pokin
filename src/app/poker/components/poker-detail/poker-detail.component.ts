import { Component, Input } from '@angular/core';
import { PokerGame } from '../../model';

@Component({
  selector: 'app-poker-detail',
  templateUrl: './poker-detail.component.html',
  styleUrls: ['./poker-detail.component.css']
})
export class PokerDetailComponent {

  @Input() poker: PokerGame;

  constructor() { }

}
