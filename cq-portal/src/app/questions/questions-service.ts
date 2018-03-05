import { Question } from '../../shared/question';
import {Questions} from './mock-questions';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {environment} from '../../environments/environment';
import {Injectable} from '@angular/core';

@Injectable()
export class QuestionsService {

  constructor (
    private http: HttpClient
  ) {}

  getQeustions(): Observable<Question[]> {
    return this.http.get<Question[]>(environment.apiUrl + '/question/all');
  }
}
