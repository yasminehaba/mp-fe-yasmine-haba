import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DetailsFacture } from '../model/detailsFacture';
import { Facture } from '../model/facture';
import { DetailsFactureRequest } from '../model/detailsFactureRequest';
@Injectable({
  providedIn: 'root',
})
export class DetailsFactureService {

  private apiUrl = 'http://localhost:8082/detailsFactures';

  constructor(private http: HttpClient) { }

  getDetailsFacture(id: number): Observable<DetailsFacture> {
    return this.http.get<DetailsFacture>(`${this.apiUrl}/${id}`);
  }

  updateDetailsFacture(id: number, updatedDetailsFacture: DetailsFacture): Observable<DetailsFacture> {
    return this.http.put<DetailsFacture>(`${this.apiUrl}/update/${id}`, updatedDetailsFacture);
  }

  deleteDetailsFacture(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/delete/${id}`);
  }

  getAllDetailsFactures(): Observable<DetailsFacture[]> {
    return this.http.get<DetailsFacture[]>(`${this.apiUrl}/allf`);
  }

  addDetailsFacture(detailsFactureRequest: DetailsFactureRequest): Observable<any> {
    const url = `${this.apiUrl}/add`;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post(url, detailsFactureRequest, { headers });
  }
}
