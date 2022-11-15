import { JwtHelperService } from '@auth0/angular-jwt';
import { User } from 'src/app/models/user';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators'
import { Token } from '../models/token';


@Injectable({
  providedIn: 'root'
})
export class AuthServiceService
{
  apiURL = environment.apiURL;
  token: string;
  usuario;
  jwtHelper: JwtHelperService = new JwtHelperService();

  constructor(private http: HttpClient, private router:Router)
  {}

  login(user: User): Observable<any>
  {
    let url = `${this.apiURL}login`;
    const base = this.http.post(url, user);
    const request = base.pipe(
        map((data: Token) =>
        {
            if(data.token){
                this.guardarToken(data.token);
            }
            return data;
        })
    )
    return request;
  }

  register(user: User): Observable<any>
  {
    return this.http.post(`${this.apiURL}registrar`, user);
  }

  private guardarToken(token: string): void
  {
    localStorage.setItem('token', token);
    this.token = token;
  }

  public isAuthenticated(): boolean
  {
    const token = localStorage.getItem('token');
    return !this.jwtHelper.isTokenExpired(token);
  }

  public verificarDog(id)
  {
    return this.http.get(`${this.apiURL}usuarios/perros`, id);
  }

  public verificarAuth(): boolean
  {
    //console.log("Si entra");
    if(sessionStorage.getItem('id'))
    {
      if(sessionStorage.getItem('id').length > 1)
      {
        return false;
      }
    }
    return true;
  }


  public logout(): void
  {
    this.token = "";
    window.localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

}