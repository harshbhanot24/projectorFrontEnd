import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {

    constructor(private router?: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const helper = new JwtHelperService();

        if (localStorage.getItem('token') && helper.isTokenExpired(localStorage.getItem('token'))) {
            // logged in so return true
            return true;
        }

        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
        return false;
    }
    
    isloggedIn(){
        const helper = new JwtHelperService();
        if (localStorage.getItem('token') && helper.isTokenExpired(localStorage.getItem('token'))) {
            // logged in so return true
            const token=localStorage.getItem('token');
            console.log(helper.decodeToken(token));
            return true;
        }
        return false;
    }
    getUserName(){
        const helper = new JwtHelperService();
        if (localStorage.getItem('token') && helper.isTokenExpired(localStorage.getItem('token'))) {
            const token=localStorage.getItem('token');
            console.log(helper.decodeToken(token));
        }
        return false;
    }
}

