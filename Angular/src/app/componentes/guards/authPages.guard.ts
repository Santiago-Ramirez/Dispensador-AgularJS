import { AuthServiceService } from './../../services/auth-service.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot } from '@angular/router';



@Injectable({
    providedIn: 'root'
  })
  export class authPages implements CanActivate
  {
    constructor(private authService: AuthServiceService, private router: Router) {}
    canActivate(): boolean
    {
      if (!this.authService.verificarAuth())
      {
        this.router.navigate(['/registerDog']);
        return false;
      }
      return true;
    }
  }