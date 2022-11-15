import { AuthServiceService } from './../../../services/auth-service.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user';
import { Router } from '@angular/router';
import { errorMessage, successDialog, timeMessage } from 'src/app/functions/alerts';
import { mostrarPrestasAnimation } from 'src/app/animation';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  animations:[
    mostrarPrestasAnimation
  ]
})
export class RegisterComponent implements OnInit
{
  registerForm: FormGroup;
  user:User;

  constructor(private fb: FormBuilder, private authService:AuthServiceService, private router: Router)
  {
    this.createForm();
  }

  ngOnInit(): void {}

  register(): void
  {
    if (this.registerForm.invalid)
    {
      return Object.values(this.registerForm.controls).forEach(control =>
      {
        control.markAsTouched();
      })
    }
    else
    {
      this.setUser();
      this.authService.register(this.user).subscribe(data =>
        {
        timeMessage('Registrando..', 1500).then(() =>
        {
          successDialog('Registro Completado');
          this.authService.login(this.user).subscribe()
          this.router.navigate(['/registerDog']);
        })
      }, error =>
      {
        errorMessage('Ha ocurrido un error')
      })
    }
  }


  createForm(): void
  {
    this.registerForm = this.fb.group({
      usuario: ['', [Validators.required]],
      password: ['', [Validators.required]],
      password2: ['', [Validators.required]],
    });
  }

  get usuarioValidate()
  {
    return (
      this.registerForm.get('usuario').invalid && this.registerForm.get('usuario').touched
    );
  }


  get passwordValidate()
  {
    return (
      this.registerForm.get('password').invalid && this.registerForm.get('password').touched
    );
  }

  get password2Validate()
  {
    const pass = this.registerForm.get('password').value;
    const pass2 = this.registerForm.get('password2').value;

    return pass === pass2 ? false : true;
  }

  setUser():void
  {
    this.user =
    {
      usuario: this.registerForm.get('usuario').value,
      password: this.registerForm.get('password').value
    }
  }

}