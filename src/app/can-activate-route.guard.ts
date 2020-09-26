import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable()
export class CanActivateRouteGuard implements CanActivate {
    constructor(public router: Router) { }

    canActivate(): boolean {
        const userId = sessionStorage.getItem("userId")

        if(!userId){
            this.router.navigate(['/login'])
        }
        return true;
    }
}