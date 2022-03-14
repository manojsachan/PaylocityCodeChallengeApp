import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { EmployeeDataService } from "../data-services/employee-data.service";
import { ResponseModel } from "../data-services/response.model";
import { Employee } from "./employee.model";

@Injectable({providedIn: 'root'})
export class EmployeeService {
  private employees: Employee[] = [];
  dataChanged = new Subject<Employee[]>();

  //private selectedEmployee: Employee;
  selectedEmployeeChanged = new Subject<Employee>();

  constructor(private dataService: EmployeeDataService) {}

  getEmployees() {
    this.dataService.getData('GetEmployees')
      .subscribe((responseData: ResponseModel<Employee[]>) => {
        console.log(responseData.data);
        this.employees = responseData.data;
        this.dataChanged.next(this.employees.slice())
      });
  }

  getEmployee(index: number) {
    return this.employees[index];
  }

  getEmployeeDetails(index: number) {
    console.log(this.employees);
    const empId: number = this.employees[index].id;
    this.dataService.getData('GetEmployee?employeeId=' + empId)
      .subscribe((responseData: ResponseModel<Employee>) => {
        console.log(responseData.data);
        this.selectedEmployeeChanged.next(responseData.data);
      });
  }

  addEmployee(data: any) {
    this.dataService.postData('AddEmployee', data)
      .subscribe((responseData: ResponseModel<Employee>) => {
        console.log(responseData.data);
        this.employees.push(responseData.data);
        this.dataChanged.next(this.employees.slice());
      });
  }

  addDependent(data: any) {
    this.dataService.postData('AddDependent', data)
      .subscribe((responseData: ResponseModel<Employee>) => {
        console.log(responseData.data);
        this.selectedEmployeeChanged.next(responseData.data);
      });
  }

}
