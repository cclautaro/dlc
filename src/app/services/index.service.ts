import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IndexModel } from '../models/index-model.model';

@Injectable()
export class IndexService {

  private readonly _url: string = 'http://localhost:8080/api';


  constructor(private http: HttpClient) { }

  buscarIndex() : Observable<IndexModel[]>{
    let endpointUrl = `${this._url}/index/log`;
    return this.http.get<IndexModel[]>(endpointUrl);
  }

  indexar() : Observable<IndexModel> {
    let endpointUrl = `${this._url}/index/indexar`;
    return this.http.post<IndexModel>(endpointUrl, null);
  }
}
