import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output, } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Poll } from '../../poker.model';

@Component({
  selector: 'app-poker-poll',
  templateUrl: './poker-poll.component.html',
  styleUrls: ['./poker-poll.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PokerPollContainer implements OnInit {

  @Input() poll: Poll;
  @Input() cards: string[];

  @Output() edited = new EventEmitter<void>();
  @Output() voted = new EventEmitter<string>();

  yourVote: FormControl;

  constructor() { }

  ngOnInit() {
    this.yourVote = new FormControl(this.poll.yourVote);
  }

  edit() {
    this.edited.emit();
  }

}
