import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class PerroService {

  apiURL = environment.apiURL;

  constructor(private http: HttpClient, private router:Router) { }

  getNamePerro():Observable<any>
  {
    return this.http.get(`${this.apiURL}perros/getperritos`)
  }

  public registrarPerro(data,nombre){
    return this.http.post(`${this.apiURL}perros/registrarperrito?nombre=${nombre}`, data); // POST
  }

  actualizarPerro(data, nombre):Observable<any>
  {
    return this.http.put(`${this.apiURL}perros/actualizarperrito2?nombre=${nombre}`, data, {responseType: 'text'})
  }

  getPerro(): Observable<any>
  {
    return this.http.get(`${this.apiURL}perros/getperritos`);
  }

  getPerroimg(): Observable<any>
  {
    return this.http.get(`${this.apiURL}getimgperro`);
  }
}
