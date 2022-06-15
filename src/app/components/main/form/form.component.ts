import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { JokeType } from '../modules/jokeType';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  @Output() 
  addJokeEvent = new EventEmitter<JokeType>();

  jokeForm: FormGroup = this.fb.group({});
  constructor(private fb: FormBuilder) { }
  ngOnInit(): void {
    this.buildForm();
  }

  buildForm(): void {
    this.jokeForm = this.fb.group({
      question: ['', [Validators.required]],  //[] ir kā validators
      punchline: ["", [Validators.required]],
    })
  }

  addJoke(): void {
    this.jokeForm.markAllAsTouched();
    if (this.jokeForm.valid) {
      this.addJokeEvent.emit(this.jokeForm.value);
      this.jokeForm.reset();
    }
  }
}
