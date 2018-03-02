import {PipeTransform, Pipe} from '@angular/core';

@Pipe({ name: 'highlight' })
export class HighLightPipe implements PipeTransform {
  transform(text: string, search): string {
    var tmp = search;
  	if (tmp && text) {
  		var k = text.replace(new RegExp(tmp, 'i'), `<span class="highlight">${tmp}</span>`);
  		return k;
  	}
  	else {
  		return text;
  	}
    // return tmp ? text.replace(new RegExp(tmp, 'i'), `<span class="highlight">${tmp}</span>`) : text;
  }
}