import { Component, Input, OnInit } from '@angular/core';
import { Employee } from '../../employee.model';
import { EmployeeService } from '../../employee.service';

@Component({
  selector: 'app-employee-item',
  templateUrl: './employee-item.component.html',
  styleUrls: ['./employee-item.component.css']
})
export class EmployeeItemComponent implements OnInit {
  employee: Employee;
  @Input() index: number = 0;

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    console.log(this.index);
    this.employee = this.employeeService.getEmployee(this.index);
  }
}
