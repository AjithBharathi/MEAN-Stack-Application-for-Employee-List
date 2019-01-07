import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DisplayEmployeeComponent } from './display-employee/display-employee.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';

const routes: Routes = [
  {path: '', redirectTo: 'display', pathMatch: 'full'},
  {path: 'display', component: DisplayEmployeeComponent},
  {path: 'create', component: CreateEmployeeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
