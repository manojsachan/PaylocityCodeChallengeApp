import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EmployeeDetailComponent } from "./employees/employee-detail/employee-detail.component";
import { EmployeeNewComponent } from "./employees/employee-new/employee-new.component";
import { EmployeesComponent } from "./employees/employees.component";

const appRoutes: Routes = [
  { path: '', redirectTo: 'employees', pathMatch: 'full' },
  { path: 'employees', component: EmployeesComponent, children: [
    { path: 'new', component: EmployeeNewComponent },
    { path: ':id', component: EmployeeDetailComponent }
  ] }

]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
