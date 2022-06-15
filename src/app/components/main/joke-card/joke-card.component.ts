import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { JokeType } from '../modules/jokeType';

@Component({
  selector: 'app-joke-card',
  templateUrl: './joke-card.component.html',
  styleUrls: ['./joke-card.component.scss']
})
export class JokeCardComponent{
  @Input() joke?: JokeType ;
  @Output() deleteJokeOutput = new EventEmitter<null>();

  showPunchline = false;
  toggleShowPunchline(): void {
    this.showPunchline = !this.showPunchline;
  }

  deleteJoke(): void {
    this.deleteJokeOutput.emit();
  }

}
