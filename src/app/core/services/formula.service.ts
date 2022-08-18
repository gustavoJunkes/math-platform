import { Formula } from './../model/formula.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormulaService {

  baseUrl = 'http://localhost:8080/api';

  constructor(private httpClient: HttpClient) { }

  all() {
    return this.httpClient.get<Formula[]>(`${this.baseUrl}`);
  }

  save(formula: Formula) {
    return this.httpClient.post<Formula>(`${this.baseUrl}`, formula);
  }

}
