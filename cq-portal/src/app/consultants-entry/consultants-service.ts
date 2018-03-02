import { Injectable } from '@angular/core';
import {environment } from '../../environments/environment';
import 'rxjs/add/operator/toPromise';
import { Consultant } from '../../shared/consultants';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import {reject} from 'q';
import { Http } from '@angular/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
// import { NewEmployee } from './employee/employee';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ConsultantsService {
 // consultants: Consultant[];

  constructor(
  private http: Http,
  private http1: HttpClient) {}

  getConsultants(): Promise<Consultant[]> {
    return this.http.get(environment.apiUrl + '/people/all')
      .toPromise()
      .then(res => res.json() as Consultant[])
      .catch(this.handleError);
  }

  searchConsultants(message: string): Promise<Consultant[]> {
    return this.http.get(environment.apiUrl + '/people/search?content=' + message)
      .toPromise()
      .then(res => res.json() as Consultant[])
      .catch(this.handleError);
  }

  deleteConsultant(id: number, cb: Function, that) {
    this.http.delete(environment.apiUrl + '/people/delete?id=' + id)
      .toPromise()
      .then(res => {
        console.log(res);
        cb(that)
      })
      .catch(this.handleError);
  }

/*

  insertEmployee(newEmployee: NewEmployee): Observable<NewEmployee> {
  console.log("insertEmployee");
  console.log(newEmployee);
  var postReq = this.http1.post<NewEmployee>(environment.apiUrl + '/people/add' , newEmployee, httpOptions);

    return postReq
    .pipe(

tap((newEmployee: NewEmployee) => console.log(newEmployee)),
    catchError(this.handleError2<NewEmployee>('insertEmployee'))
    );



  }

  */

  private handleError(error: any): Promise<any> {
    // console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

/*
  private handleError2<T> (operation = 'operation', result?: T) {

  console.log("haahah");
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO: better job of transforming error for user consumption
    // console.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}
*/
}
