import { Component } from '@angular/core';
import { EstudianteModel } from './modules/estudiante.modul';
import { EstudianteHttpservice } from './services/estudiante-http.service.ts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Facturacion';


}

