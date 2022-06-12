import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ResultadosQuery } from '../models/resultados-query';

@Injectable()
export class HomeService {

  private readonly _url: string = 'http://localhost:8080/api';

  constructor(private http: HttpClient
  ) { }

  buscar(query:string) : Observable<ResultadosQuery[]>{
    let endpointUrl = `${this._url}/search/${query}`;
    return this.http.get<ResultadosQuery[]>(endpointUrl);
  }


}
