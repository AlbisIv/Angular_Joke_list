import { Component } from '@angular/core';
import { JokeType } from './modules/jokeType';

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  jokes = [
    {
      question: 'What is the best part of a bug?',
      punchline: 'The bug\'s tail.'
    },
    {
      question: 'What do you call a bug with no eyes?',
      punchline: 'A blind bug.'
    },
    {
      question: 'What do you call a bug with no legs?',
      punchline: 'A footless bug.'
    }, 
    {
      question: 'What do you call a bug with no arms?',
      punchline: 'A wingless bug.'
    },
    {
      question: 'What do you call a bug with no legs or arms?',
      punchline: 'A bug with no body.'
    },
    {
      question: 'What do you call a bug with no legs or arms or eyes?',
      punchline: 'A bug with no head.'
    },
  ]

  addJoke(joke: JokeType): void {
    this.jokes = [...this.jokes, joke];
    console.log(this.jokes)
  }
  deleteJoke(index: number): void {
    this.jokes.splice(index, 1);
  }
}
