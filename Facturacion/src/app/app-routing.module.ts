import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstudianteComponent } from './estudiante/estudiante.component';



const routes: Routes = [
  {path: 'estudiante', component:EstudianteComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes),RouterModule,CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
