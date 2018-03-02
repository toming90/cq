import { Question } from '../../shared/question';
import {Questions} from './mock-questions';


export class QuestionsService {

  getQeustions(): Question[] {
    return Questions;
  }
}
