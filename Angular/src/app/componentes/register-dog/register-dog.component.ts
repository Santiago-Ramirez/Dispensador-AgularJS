import { PerroService } from './../../services/perro.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Perro } from 'src/app/models/Perro';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import Swal from 'sweetalert2';
import { errorMessage, successDialog, timeMessage } from 'src/app/functions/alerts';

@Component({
  selector: 'app-register-dog',
  templateUrl: './register-dog.component.html',
  styleUrls: ['./register-dog.component.css']
})
export class RegisterDogComponent implements OnInit {
  perro = new Perro()
  public usuario;
  selectedFile: File = null;

  constructor(
    private perroService: PerroService,
    private router: Router) {
      // console.log(sessionStorage.getItem('id'))
  }

  ngOnInit(): void { }

  cargarImagen(ngform: NgForm): void {
    const data: Perro =
    {
      "nombre": ngform.control.value.nombrePerro
    }
    const formData = new FormData();
    if (this.selectedFile) {
      formData.append('foto', this.selectedFile, this.selectedFile.name);

      if (data.nombre != null) {
        this.perroService.registrarPerro(formData, data.nombre).subscribe(data => 
          {
            timeMessage('Registrando..', 1500).then(() =>
            {
              successDialog('Registro Completado');
              sessionStorage.removeItem('id');
              localStorage.removeItem('token')
              this.router.navigate(['/login']);
            })
          }, error =>
          {
            errorMessage('Solo se permiten imagenes')
          })
        
      }
    }
    else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Necesitas rellenar ambos campos!'
      })
      ngform.resetForm();
    }
  }

  setFile($event: Event): void {
    // @ts-ignore
    if ($event.target.files[0]) {
      // @ts-ignore
      this.selectedFile = $event.target.files[0];
      // console.log(this.selectedFile)
    }
  }
}