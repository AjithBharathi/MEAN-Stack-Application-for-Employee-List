import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';
import { DisplayEmployeeComponent } from '../display-employee/display-employee.component';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css'],
  providers: [ DisplayEmployeeComponent ]
})
export class CreateEmployeeComponent implements OnInit {
  newEmployee
  constructor(private employeeService: EmployeeService, private router: Router, private dis: DisplayEmployeeComponent) { }

  ngOnInit() {
  this.newEmployee = new FormGroup({
    firstName: new FormControl(),
    lastName: new FormControl(),
    eMail: new FormControl(),
    mobile: new FormControl(),
    address1: new FormControl(),
    address2: new FormControl(),
    city: new FormControl(),
    salaryCredited: new FormControl()
  });
  this.newEmployee.controls['salaryCredited'].setValue(false, {onlySelf: true});
  }
  onCreateEmployee(){
  console.log(this.newEmployee.value)
  this.employeeService.postEmployeeDetail(this.newEmployee.value).subscribe(res => {
    console.log(res);
  });
  this.newEmployee.reset();
  this.dis.ngOnInit();
  this.router.navigate(['/display']);
  }
}
