
import { NgModule } from '@angular/core';

import { HighLightPipe }  from './highlight.pipe';

@NgModule({
     imports:        [],
  	declarations:   [HighLightPipe],
     exports:        [HighLightPipe],
 })

export class HighlightModule {

   static forRoot() {
      return {
          ngModule: HighlightModule,
          providers: [],
      };
   }
 } 
