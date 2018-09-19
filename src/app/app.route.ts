

import { Route, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, ActivatedRoute } from '@angular/router';
import { AppComponent } from './app.component';
import { EmployeeRegistryComponent } from './employee-registry/employee-registry.component';

export const routes: Route[] = [
    {
        path: '',
        redirectTo: '/employee',
        pathMatch: 'full'
    },
    {
        path: 'employee',
        component: EmployeeRegistryComponent
    }
];
