import { mostrarPrestasAnimation } from './../../../animation';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Perro } from 'src/app/models/Perro';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { PerroService } from 'src/app/services/perro.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations:[
    mostrarPrestasAnimation
  ]
})
export class HomeComponent implements OnInit {

  perros: Perro[] = []

  constructor(public auth: AuthServiceService, public perroService: PerroService, private http: HttpClient) { }

  ngOnInit(): void {
    this.perroService.getPerro().subscribe(data => { this.perros = data["data"]; })
  }
}
