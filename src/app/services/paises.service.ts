import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  constructor(private _http: HttpClient) { }

  getPaises(){
    return this._http.get(`https://restcountries.eu/rest/v2/lang/es`).pipe(
      map((res:any) => {
        return res.map((pais:any) => ({nombre: pais.name,codigo: pais.alpha3Code})
        )
      })
    )
  }
}
