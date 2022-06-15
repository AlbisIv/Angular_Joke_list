import { Component, EventEmitter, Input, Output } from '@angular/core';
import { JokeType } from '../modules/jokeType';

@Component({
  selector: 'app-joke-list',
  templateUrl: './joke-list.component.html',
  styleUrls: ['./joke-list.component.scss']
})
export class JokeListComponent {
  @Input()jokes: JokeType[] | undefined ;
  @Output() deleteJokeOutput = new EventEmitter<number>();

  deleteJoke(index: number): void {
    this.deleteJokeOutput.emit(index);
  }
 }



