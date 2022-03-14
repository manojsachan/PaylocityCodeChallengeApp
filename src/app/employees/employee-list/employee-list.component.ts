import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Employee } from '../employee.model';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit, OnDestroy {
  employees: Employee[];
  subscription: Subscription;

  constructor(private employeeService: EmployeeService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    console.log('EmployeeListComponent');
    this.employeeService.getEmployees();
    this.subscription = this.employeeService.dataChanged
      .subscribe((employees: Employee[]) => {
        this.employees = employees;
      });
  }

  ngOnDestroy(): void {
      this.subscription.unsubscribe();
  }

  onNewEmployee() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }
}
