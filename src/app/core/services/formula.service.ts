import { Formula } from './../model/formula.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Variable } from '../model/variable.model';

@Injectable({
  providedIn: 'root'
})
export class FormulaService {

  baseUrl = 'http://localhost:8080/api/formula';

  constructor(private httpClient: HttpClient) { }

  all() {
    return this.httpClient.get<Formula[]>(`${this.baseUrl}`);
  }

  save(formula: Formula) {
    return this.httpClient.post<Formula>(`${this.baseUrl}`, formula);
  }

  calculate(id: string, values: object) {    
    return this.httpClient.post<String>(`${this.baseUrl}/calculate?formulaId=${id}`, values)
  }

}
