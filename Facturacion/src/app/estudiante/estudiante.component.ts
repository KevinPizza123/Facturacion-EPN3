/*import { Component, OnInit } from '@angular/core';
import { EstudianteModel } from '../modules/estudiante.modul';
import { EstudianteHttpservice } from '../services/estudiante-http.service.ts.service';

@Component({
  selector: 'app-estudiante',
  templateUrl: './estudiante.component.html',
  styleUrls: ['./estudiante.component.css']
})
export class EstudianteComponent implements OnInit {

  estudiante: EstudianteModel[] = [];

  constructor(private estudiantesService: EstudianteHttpservice) {}

  ngOnInit(): void {
    this.getEstudiantes();
  }

  getEstudiantes(){
    this.estudiantesService.getAll().subscribe(response=>{
      this.estudiante = response;
      console.log(this.estudiante)
    })
  }

}*/
/*import { Component, OnInit } from '@angular/core';
import { EstudianteModel } from '../modules/estudiante.modul';
import { EstudianteHttpservice } from '../services/estudiante-http.service.ts.service';

@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiante.component.html',
  styleUrls: ['./estudiante.component.css']
})
export class EstudianteComponent implements OnInit {

  estudiante: EstudianteModel[] = [];
  filteredEstudiante: EstudianteModel[] = [];

  constructor(private estudianteHttpService: EstudianteHttpservice) { }

  ngOnInit(): void {
    this.getEstudiantes();
  }

  getEstudiantes(): void {
    this.estudianteHttpService.getAll().subscribe(estudiantes => {
      this.estudiante = estudiantes;
      console.log(this.estudiante);
    });
  }

}*/
import { Component, OnInit } from '@angular/core';
import { EstudianteModel } from '../modules/estudiante.modul';
import { EstudianteHttpservice } from '../services/estudiante-http.service.ts.service';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiante.component.html',
  styleUrls: ['./estudiante.component.css']
})
export class EstudianteComponent implements OnInit {

  estudiante: EstudianteModel[] = [];
  filteredEstudiante: EstudianteModel[] = [];

  constructor(private estudianteHttpService: EstudianteHttpservice) { }

  ngOnInit(): void {
    this.getEstudiantes();
  }

  getEstudiantes(): void {
    this.estudianteHttpService.getAll().subscribe(estudiantes => {
      this.estudiante = estudiantes;
      this.filteredEstudiante = estudiantes;
      console.log(this.estudiante);
    });
  }

  filterEstudiantes(event: any, table: Table) {
    const filterValue = (event.target as HTMLInputElement).value;
    table.filterGlobal(filterValue, 'contains');
  }

}


