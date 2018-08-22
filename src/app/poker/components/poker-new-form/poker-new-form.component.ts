import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { PokerOptions } from '../../model';

@Component({
  selector: 'app-poker-new-form',
  templateUrl: './poker-new-form.component.html',
  styleUrls: ['./poker-new-form.component.scss']
})
export class PokerNewFormComponent implements OnInit {

  @Input() disabled = false;
  @Input() cardSets: { code: string, label: string}[];
  @Input() poker: PokerOptions;

  @Output() submitted = new EventEmitter<PokerOptions>();

  pokerForm: FormGroup;
  showCards = false;

  constructor(private fb: FormBuilder) {}

  get cards() {
    return this.pokerForm.get('cards') as FormArray;
  }

  ngOnInit(): void {
    this.pokerForm = this.fb.group({
      pokerName: [this.poker.pokerName, Validators.required],
      cardSet: [this.poker.cardSet, Validators.required],
      cards: this.fb.array([])
    });

    this.pokerForm.get('cardSet').valueChanges.subscribe(val => {
      this.showCards = val === 'Custom';
      if (val !== 'Custom') {
        this.pokerForm.setControl('cards', this.fb.array([]))
      }
    });
  }

  addCard() {
    this.cards.push(this.fb.control('', Validators.required));
  }

  submit() {
    this.submitted.emit(Object.assign(this.poker, this.pokerForm.value));
  }

}
