import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  apiURL = environment.apiURL;

  constructor(private http: HttpClient, private router:Router) { }

  actualizarUsuario(user:User):Observable<any>
  {
    return this.http.put(`${this.apiURL}usuarios/actualizar`, user, {responseType: 'text'})
  }


  getUsuario(): Observable<any>
  {
    return this.http.get(`${this.apiURL}perros/getperritos`);
  }
}
