///<reference path="../../../node_modules/@angular/core/src/metadata/directives.d.ts"/>
import { Component, OnInit } from '@angular/core';
import {ConsultantsService} from './consultants-service';
import {EmployeeService} from './employee.service';
import {Consultant} from '../../shared/consultants';

import { NewEmployee } from './employee/employee';

@Component({
  selector: 'app-consultants-entry',
  templateUrl: './consultants-entry.component.html',
  styleUrls: ['./consultants-entry.component.css'],
  providers: [ConsultantsService, EmployeeService]
})
export class ConsultantsEntryComponent implements OnInit {
  consultants: Consultant[] = [];
  message = '';
  showForm = false;
  newEmployee: NewEmployee = {
    firstName: '',
    lastName: '',
    position: '',
    degree1: '',
    degree2: '',
    degree3: '',
    specialist: '',
    fields: '',
    expertise: '',
    interests:'',
  };

  formStyle = '';
  constructor(
  private consultantsService: ConsultantsService,
  private employeeService: EmployeeService ) { }

  ngOnInit() {
    this.consultantsService.getConsultants()
      .then(consultants => this.consultants = consultants);
    console.log('message changed to ', this.message);

    //newEmployee = {};
    this.formStyle = "{'display': 'none'}";
  }

  onKey(event: any) { // without type info
    this.message = event.target.value;

    console.log(event)
  }

  onClickMe() {
  console.log("onClickMe");
    if (this.message == '') {
      this.consultantsService.getConsultants()
        .then(consultants => this.consultants = consultants);
    } else {
      this.consultantsService.searchConsultants(this.message).then(consultants => this.consultants = consultants);
    }
  }

  onClickSave() {
    this.employeeService.insertEmployee(this.newEmployee, this.hideForm, this);
  }


  onClickAdd() {
    this.showForm = true;

  }

  onClickDelete(id) {
    this.consultantsService.deleteConsultant(id, this.lose, this);
  }

  lose(that) {
    console.log("lose");
    that.onClickMe();
  }

  hideForm(that) {
  console.log("hideForm");
    that.showForm = false;
    that.resetNewEmployee(that);
    that.onClickMe();
  }

  resetNewEmployee(that) {
  console.log("resetNewEmployee");
  that.newEmployee.firstName = '';
  that.newEmployee.lastName = '';
  that.newEmployee.position = '';
  that.newEmployee.degree1 = '';
  that.newEmployee.degree2 = '';
  that.newEmployee.degree3 = '';
  that.newEmployee.specialist = '';
  that.newEmployee.field = '';
  that.newEmployee.expertise = '';
  that.newEmployee.interests = '';

  }
}
