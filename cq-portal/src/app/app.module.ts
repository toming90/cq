import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {ConsultantsEntryComponent} from './consultants-entry/consultants-entry.component';

import { HighlightModule }    from './highlight/highlight.module';
import { FormsModule } from '@angular/forms';


import {HttpModule} from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
//  "/people/search/all" --get all people
// "/people/search/lastname"

@NgModule({
  declarations: [
    AppComponent,
    ConsultantsEntryComponent,
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
