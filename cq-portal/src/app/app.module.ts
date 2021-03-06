import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

import { HighlightModule } from './highlight/highlight.module';
import { FormsModule } from '@angular/forms';


import {HttpModule} from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
import { QuestionsComponent } from './questions/questions.component';
//  "/people/search/all" --get all people
// "/people/search/lastname"

@NgModule({
  declarations: [
    AppComponent,
    QuestionsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    HighlightModule.forRoot(),
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
