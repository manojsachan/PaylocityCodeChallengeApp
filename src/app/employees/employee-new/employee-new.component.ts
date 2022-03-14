import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-new',
  templateUrl: './employee-new.component.html',
  styleUrls: ['./employee-new.component.css']
})
export class EmployeeNewComponent implements OnInit {
  @ViewChild('employeeForm') employeeForm: NgForm;

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    console.log('EmployeeNewComponent init');
  }

  onSubmit() {
    const firstName = this.employeeForm.value.firstname;
    const lastName = this.employeeForm.value.lastname;
    const newEmployee = {
      data: {
         firstName: firstName,
         lastName: lastName
      }
    };
    console.log(newEmployee);
    this.employeeService.addEmployee(newEmployee);
    this.employeeForm.reset();
  }
}
