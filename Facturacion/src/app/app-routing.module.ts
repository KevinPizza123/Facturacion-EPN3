import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuarioComponent } from './estudiante/usuario.component';




const routes: Routes = [
  {path: 'estudiante', component:UsuarioComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes),RouterModule,CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
