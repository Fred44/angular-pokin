import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-poker-your-vote',
  templateUrl: './poker-your-vote.component.html',
  styleUrls: ['./poker-your-vote.component.scss']
})
export class PokerYourVoteComponent implements OnInit {

  @Input() cards: string[];
  @Input() vote: string;
  @Output() voted = new EventEmitter<string>();

  yourVote: FormControl;

  constructor() { }

  ngOnInit() {
    this.yourVote = new FormControl(this.vote);
  }

}
