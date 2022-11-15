
import { User } from 'src/app/models/user';
import { AuthServiceService } from './../../../services/auth-service.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { error } from 'protractor';
import { errorMessage, successDialog, timeMessage } from 'src/app/functions/alerts';
import { mostrarPrestasAnimation } from 'src/app/animation';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations:[
    mostrarPrestasAnimation
  ]
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  user: User;

  constructor(private fb: FormBuilder, private authService: AuthServiceService, private router:Router) 
  {
    this.createForm();
  }

  ngOnInit(): void 
  {

  }

  login(): void {
    if (this.loginForm.invalid) {
      return Object.values(this.loginForm.controls).forEach(control => {
        control.markAsTouched();
      });
    }else{
      this.setUser();
      this.authService.login(this.user).subscribe((data:any) => {
        timeMessage('Iniciando...', 1500).then(() => {
          successDialog('Iniciado').then(() => {
            this.router.navigate(['/home']);
          });
        });
      }, error => {
        errorMessage('Usuario o contraseña incorrecta');
      });
    }
  }


  get passwordValidate() {
    return (
      this.loginForm.get('password').invalid &&
      this.loginForm.get('password').touched
    );
  }

  get usuarioValidate() {
    return (
      this.loginForm.get('usuario').invalid && this.loginForm.get('usuario').touched
    );
  }
  
  createForm(): void {
    this.loginForm = this.fb.group({
      usuario: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  setUser():void{
    this.user = {
      usuario: this.loginForm.get('usuario').value,
      password: this.loginForm.get('password').value
    }
  }

}
