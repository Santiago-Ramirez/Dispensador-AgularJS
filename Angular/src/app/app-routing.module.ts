import { GraficaCroquetasComponent } from './componentes/grafica-croquetas/grafica-croquetas.component';
import { authPages } from './componentes/guards/authPages.guard';
import { AuthGuard } from './componentes/guards/auth.guard';
import { PrestasComponent } from './componentes/prestas/prestas.component';
import { GraficasComponent } from './componentes/graficas/graficas.component';
import { AguaComponent } from './componentes/agua/agua.component';
import { CroquetasComponent } from './componentes/croquetas/croquetas.component';
import { ErrorComponent } from './componentes/rutaNoValida/error/error.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './componentes/auth/login/login.component';
import { RegisterComponent } from './componentes/auth/register/register.component';
import { HomeComponent } from './componentes/main/home/home.component';
import { RegisterDogComponent } from './componentes/register-dog/register-dog.component';
import { RellenarComponent } from './componentes/rellenar/rellenar.component';

const routes: Routes = [
  {path:'login', component: LoginComponent},
  {path:'register', component: RegisterComponent},
  {path:'registerDog', component: RegisterDogComponent},
  {path:'croquetas', component: CroquetasComponent, canActivate:[AuthGuard, authPages]},
  {path:'agua', component: AguaComponent, canActivate:[AuthGuard, authPages]},
  {path:'prestas', component: PrestasComponent, canActivate:[AuthGuard, authPages]},
  {path:'graficaAgua', component: GraficasComponent, canActivate:[AuthGuard, authPages]},
  {path:'graficaCroquetas', component: GraficaCroquetasComponent, canActivate:[AuthGuard, authPages]},
  {path:'rellenarAgua', component: RellenarComponent, canActivate:[AuthGuard, authPages]},

  {path:'', redirectTo:'/login', pathMatch:'full'},
  {path:'home', component: HomeComponent, canActivate:[AuthGuard, authPages]},
  {path:'**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }