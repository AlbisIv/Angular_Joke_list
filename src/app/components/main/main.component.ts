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
      question: 'What did the pirate say when he turned 80?',
      punchline: 'Aye Matey!'
    },
    {
      question: 'What is the difference between a well dressed man on a bike and a poorly dressed man on a unicycle?',
      punchline: 'Attire.'
    },
    {
      question: 'I came up with a new word yesterday',
      punchline: 'Plagiarism'
    },
    
  ]

  addJoke(joke: JokeType): void {
    this.jokes = [ joke, ...this.jokes];
    console.log(this.jokes)
  }
  deleteJoke(index: number): void {
    this.jokes.splice(index, 1);
  }
}
