/*import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Estudiante} from '../modelos/estudiante';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class EstudianteService {

  readonly URL_API: string =
    'http://172.31.5.24:8080/WSSIIEPN/webresources/SilaboEPN/carga/0101827806/2022/2';
  readonly Ced: string =
    'http://172.31.5.24:8080/WSSIIEPN/webresources/SilaboEPN/carga/${cedula}/2022/2';

  constructor(private httpClient: HttpClient) { }

  getOne(cedula:string):Observable<Estudiante[]> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.httpClient.get<Estudiante[]>(
    this.Ced.replace('${cedula}',cedula),{ headers });
  }

  getAll(): Observable<Estudiante[]> {
    return this.httpClient.get<Estudiante[]>(this.URL_API);
  }

}*/

import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { Estudiante } from "../modelos/estudiante";


@Injectable({
  providedIn: 'root'
})
export class EstudianteHttpService {

  readonly API_URL:string =  'http://172.31.5.24:8080/WSSIIEPN/webresources/SilaboEPN/carga/0501553408/2022/2';
  readonly CED:string =  'http://172.31.5.24:8080/WSSIIEPN/webresources/SilaboEPN/carga/${cedula}/2022/2';  
 
  constructor (private httpClient:HttpClient) { }


getAll():Observable<Estudiante[]>{
  const url = `${this.API_URL}`;
  const response = this.httpClient.get<Estudiante[]>(url)
  return response 
 }

 getOne(cedula:string):Observable<Estudiante[]> {
  return this.httpClient.get<Estudiante[]>(
  this.CED.replace('${cedula}',cedula)
);
}


}