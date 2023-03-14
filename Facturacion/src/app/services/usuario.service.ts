/*import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Usuario} from '../modelos/Usuario';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  readonly URL_API: string =
    'http://172.31.5.24:8080/WSSIIEPN/webresources/SilaboEPN/carga/0101827806/2022/2';
  readonly Ced: string =
    'http://172.31.5.24:8080/WSSIIEPN/webresources/SilaboEPN/carga/${cedula}/2022/2';

  constructor(private httpClient: HttpClient) { }

  getOne(cedula:string):Observable<Usuario[]> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.httpClient.get<Usuario[]>(
    this.Ced.replace('${cedula}',cedula),{ headers });
  }

  getAll(): Observable<Usuario[]> {
    return this.httpClient.get<Usuario[]>(this.URL_API);
  }

}*/

import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { Usuario } from "../modelos/usuario";


@Injectable({
  providedIn: 'root'
})
export class UsuarioHttpService {

  readonly API_URL:string =  'http://172.31.5.24:8080/WSSIIEPN/webresources/SilaboEPN/carga/0501553408/2022/2';
  readonly CED:string =  'http://172.31.5.24:8080/WSSIIEPN/webresources/SilaboEPN/carga/${cedula}/${fecha}/${id}';  
 
  constructor (private httpClient:HttpClient) { }


getAll():Observable<Usuario[]>{
  const url = `${this.API_URL}`;
  const response = this.httpClient.get<Usuario[]>(url)
  return response 
 }

 getOne(cedula:string,fecha : string , ide:string):Observable<Usuario[]> {
  return this.httpClient.get<Usuario[]>(
  this.CED.replace('${cedula}',cedula).replace('${fecha}',fecha).replace('${id}',ide)
);
}


}