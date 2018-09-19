import { Injectable } from '@angular/core';
import { Observer, Observable, BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IEmployee } from './employee-registry.component';

@Injectable(
    { providedIn: 'root' }
)
export class EmployeeRegistrySertive {

    url = 'http://localhost:8073/employee/';

    constructor(public httpService: HttpClient) {

    }
    getAllEmployees(): Promise<any> {
        return new Promise<any>((resolve, reject) => {
            this.httpService.get(this.url + 'getAllEmployees').subscribe(x => {
                resolve(x);
            }, err => {
                reject(err);
            });
        });
    }
    saveEmployee(employee: IEmployee): Promise<IEmployee> {
        return new Promise<any>((resolve, reject) => {
            let headerValues = new HttpHeaders();
            headerValues = headerValues.set('Content-Type', 'application/json');
            this.httpService.post(this.url + 'post', employee, { headers: headerValues }).subscribe(x => {
                resolve(x);
            }, err => {
                reject(err);
            });
        });
    }

}
