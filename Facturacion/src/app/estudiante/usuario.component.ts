import { Usuario } from '../modelos/usuario';
/*import { Component, OnInit } from '@angular/core';
import { Usuario} from '../modelos/Usuario';
import { UsuarioService } from '../services/Usuario.service';



@Component({
  selector: 'app-Usuario',
  templateUrl: './Usuario.component.html',
  styleUrls: ['./Usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  Usuarios: Usuario[] = [];
 

  constructor(private UsuariosService: UsuarioService) {
    
  }

  ngOnInit(): void {
    this.getUsuarios();
  }
getEventValue(event: any){
return event.target.value;
}

cargarDatos (cedula: string) {
  this.UsuariosService
    .getOne(cedula).subscribe((response: Usuario[]) => {
      this.Usuarios = response;
    });
  console.log(this.Usuarios);
}

  getUsuarios() {
    this.UsuariosService.getAll().subscribe(response => {
      this.Usuarios = response;
      console.log(this.Usuarios);
    });
  }
}*/

import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { UsuarioHttpService } from '../services/usuario.service';
import { Dropdown } from 'primeng/dropdown';



@Component({
  selector: 'app-usuarios',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class  UsuarioComponent implements OnInit {
  usuarios: Usuario[] = [];
  cedula! : string;
  fecha! : string;
  ide! : string;
  selectedId!: number;
  statuses: any[] = [];
  activityValues: number[] = [0, 100];

  @ViewChild('cedula')
  cedulaInput!: ElementRef;
  @ViewChild('fecha')
  fechaInput!: ElementRef;
  @ViewChild('ide')
  ideDropdown!: Dropdown;

  // ...

  
  constructor(private usuarioHttpservices: UsuarioHttpService) {}
  limpiarFormulario() {
    this.cedulaInput.nativeElement.value = '';
    this.fechaInput.nativeElement.value = '';
    this.ideDropdown.resetFilter();
    this.selectedId = -1;
}
  getEventValue($event:any) :string {
    return $event.target.value;
  }

  ngOnInit(): void {
    this.getUsuarios();
    this.cargarDatos;
    

  }

  getUsuarios(){
  this.usuarioHttpservices.getAll().subscribe(
    response => {
      this.usuarios = response;
      console.log(response);
    }
  );
}

cargarDatos (cedula: string , fecha: string ,ide: string) {
  this.usuarioHttpservices
    .getOne(cedula,fecha,ide).subscribe((response: Usuario[]) => {
      this.usuarios = response;
    });
  console.log(this.usuarios);
}






}

