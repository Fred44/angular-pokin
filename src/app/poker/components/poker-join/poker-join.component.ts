import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-poker-join',
  templateUrl: './poker-join.component.html',
  styleUrls: ['./poker-join.component.css']
})
export class PokerJoinComponent {

  @Output() submitted = new EventEmitter<string>();

  joinForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.joinForm = this.fb.group({
      username: ['', Validators.required]
    });
  }

  join() {
    this.submitted.emit(this.joinForm.value)
  }
}
