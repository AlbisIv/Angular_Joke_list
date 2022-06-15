import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { FormComponent } from './components/main/form/form.component';
import { MainComponent } from './components/main/main.component';
import { JokeCardComponent } from './components/main/joke-card/joke-card.component';
import { JokeListComponent } from './components/main/joke-list/joke-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    FormComponent,
    JokeCardComponent,
    JokeListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
