import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { Observable, Subscription } from "rxjs";
import { map } from "rxjs/operators";
import { AuthServices } from "./auth.services";

@Injectable()
export class AuthGuard implements CanActivate{
    constructor(private authServices: AuthServices, private router: Router){}
    canActivate(): Promise<boolean> | Observable<boolean> | boolean{
        var isAuthenticated = this.authServices.getCustId();
        if(isAuthenticated){
            return true;
        }
        this.router.navigate(['/']);
        return false;
    }
}