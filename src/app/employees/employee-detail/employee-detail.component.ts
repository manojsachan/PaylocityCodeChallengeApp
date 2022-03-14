import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { Employee } from '../employee.model';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit, OnDestroy {
  isLoading: boolean = true;
  employee: Employee;
  id: number;
  subsription: Subscription;
  @ViewChild('dependentForm') dependentForm: NgForm;

  constructor(private employeeService: EmployeeService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    console.log('ngOnInit: EmployeeDetailComponent');
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.employeeService.getEmployeeDetails(this.id);
        this.subsription = this.employeeService.selectedEmployeeChanged
          .subscribe((employee: Employee) => {
            console.log(employee);
            this.employee = employee;
            this.isLoading = false;
          });
      }
    );
  }

  ngOnDestroy(): void {
      this.subsription.unsubscribe();
  }

  onSubmit() {
    const firstName = this.dependentForm.value.firstname;
    const lastName = this.dependentForm.value.lastname;
    const newDependent = {
      data: {
        employeeId: this.employee.id,
         firstName: firstName,
         lastName: lastName
      }
    };
    console.log(newDependent);
    this.employeeService.addDependent(newDependent);
    this.dependentForm.reset();
  }

}
