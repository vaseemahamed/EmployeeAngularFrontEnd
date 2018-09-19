import { Component, OnInit } from '@angular/core';
import { EmployeeRegistrySertive } from './employee-registry.service';

export class IEmployee {
  FirstName: String;
  LastName: String;
  Gender: String;
  DOB: Date;
  Department: String;
}

@Component({
  selector: 'app-employee-registry',
  templateUrl: './employee-registry.component.html',
  styleUrls: ['./employee-registry.component.css']
})
export class EmployeeRegistryComponent implements OnInit {
  employee = new IEmployee();
  employeeList: IEmployee[] = [];
  onSuccess = false;
  onError = false;
  message = '';

  constructor(private employeeService: EmployeeRegistrySertive) { }

  ngOnInit() {
    this.employeeService.getAllEmployees().then(res => {
      this.employeeList = res;
    }, error => {
      this.onSuccess = false;
      this.onError = true;
      this.message = 'Employee List Not Loaded';
    });
  }

  OnSubmit() {
    console.log(this.employee);
    this.employeeService.saveEmployee(this.employee).then(res => {
      console.log('employee saved');
      this.employee = new IEmployee();
      this.onSuccess = true;
      this.onError = false;
      this.message = 'Employee Details Stored';
    }, error => {
      console.log('Error in saving');
      this.onSuccess = false;
      this.onError = true;
      this.message = 'Employee Details Could Not Be Saved';
    });
  }

  OnCancel() {
    this.employee = new IEmployee();
    this.onSuccess = false;
    this.onError = false;
  }

}
