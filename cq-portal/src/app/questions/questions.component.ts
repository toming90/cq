import { Component, OnInit } from '@angular/core';
import { Question } from '../../shared/question';
import { QuestionsService } from './questions-service';
declare var $: any;
@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css'],
  providers: [QuestionsService]
})
export class QuestionsComponent implements OnInit {
  questions: Question[] = [];
  constructor( private questionsService: QuestionsService) { }

  ngOnInit() {
    this.questions = this.questionsService.getQeustions();
  }

  ngAfterViewInit() {
    $('.ui.radio.checkbox')
      .checkbox()
    ;
  }

}
