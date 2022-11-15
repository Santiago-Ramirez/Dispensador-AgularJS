import { PerroService } from './../../services/perro.service';
import { AuthServiceService } from './../../services/auth-service.service';
import { Component, OnInit } from '@angular/core';
import { Perro } from 'src/app/models/Perro';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  perros: Perro[] = []

  constructor(public auth: AuthServiceService, public perroService: PerroService) { }

  ngOnInit(): void {
    this.perroService.getPerro().subscribe(data => { this.perros = data["data"]; })

  }

}
