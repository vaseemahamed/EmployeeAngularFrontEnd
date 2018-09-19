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
        let res: Promise<any>;
        res = this.httpService.get(this.url + 'getAllEmployees').toPromise().then();
        return res;
    }
    saveEmployee(employee: IEmployee): Promise<IEmployee> {
        let headerValues = new HttpHeaders();
        headerValues = headerValues.set('Content-Type', 'application/json');
        let res: Promise<any>;
        res = this.httpService.post(this.url + 'post', employee).toPromise().
            then(
                onfulfilled => {
                }, onrejected => {
                });
        return res;
    }

}