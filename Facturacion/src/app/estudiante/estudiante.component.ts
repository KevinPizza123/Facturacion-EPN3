import { Estudiante } from './../modelos/estudiante';
/*import { Component, OnInit } from '@angular/core';
import { Estudiante} from '../modelos/estudiante';
import { EstudianteService } from '../services/estudiante.service';



@Component({
  selector: 'app-estudiante',
  templateUrl: './estudiante.component.html',
  styleUrls: ['./estudiante.component.css']
})
export class EstudianteComponent implements OnInit {

  estudiantes: Estudiante[] = [];
 

  constructor(private estudiantesService: EstudianteService) {
    
  }

  ngOnInit(): void {
    this.getEstudiantes();
  }
getEventValue(event: any){
return event.target.value;
}

cargarDatos (cedula: string) {
  this.estudiantesService
    .getOne(cedula).subscribe((response: Estudiante[]) => {
      this.estudiantes = response;
    });
  console.log(this.estudiantes);
}

  getEstudiantes() {
    this.estudiantesService.getAll().subscribe(response => {
      this.estudiantes = response;
      console.log(this.estudiantes);
    });
  }
}*/

import { Component, OnInit } from '@angular/core';
import { EstudianteHttpService } from '../services/estudiante.service';



@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiante.component.html',
  styleUrls: ['./estudiante.component.css']
})
export class EstudianteComponent implements OnInit {
  estudiantes: Estudiante[] = [];
  statuses: any[] = [];
  activityValues: number[] = [0, 100];


  constructor(private estudianteHttpservices: EstudianteHttpService) {}

  getEventValue($event: any): string {
    return $event.target.value;
  }

  ngOnInit(): void {
    this.getEstudiantes();
    this.cargarDatos;
    

  }

  getEstudiantes(){
  this.estudianteHttpservices.getAll().subscribe(
    response => {
      this.estudiantes = response;
      console.log(response);
    }
  );
}

cargarDatos (cedula: string) {
  this.estudianteHttpservices
    .getOne(cedula).subscribe((response: Estudiante[]) => {
      this.estudiantes = response;
    });
  console.log(this.estudiantes);
}






}

