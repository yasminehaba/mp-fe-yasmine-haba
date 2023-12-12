import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { Facture } from '../model/facture';
import { Client } from '../model/client';

@Injectable({
  providedIn: 'root'
})
export class FactureService {

  private baseUrl = 'http://localhost:8082'; // Update with your Spring Boot backend URL

  constructor(private http: HttpClient) {}

  getAllFactures(): Observable<Facture[]> {
    return this.http.get<Facture[]>(`${this.baseUrl}/factures/all`);
  }
  // saveFacture(facture: Facture): Observable<Facture> {
  //   return this.http.post<Facture>(`${this.baseUrl}/factures/post`, facture);
  // }
  saveFacture(facture: Facture): Observable<Facture> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post<Facture>(`${this.baseUrl}/factures/post`, facture, { headers: headers });
  }
  getAllClients(): Observable<Client[]> {
    return this.http.get<Client[]>(`${this.baseUrl}/factures/allClient`);
  }
  // deleteFacture(id: number): Observable<void> {
  //   return this.http.delete<void>(`${this.baseUrl}/delete/${id}`);
  // }
  deleteFacture(id: number): Observable<void> {
    const url = `${this.baseUrl}/factures/delete/${id}`;
    return this.http.delete<void>(url).pipe(
      catchError((error) => {
        console.error('Error deleting facture:', error);
        throw error; // Vous pouvez ajuster cela en fonction de votre logique de gestion d'erreur
      })
    );
  }

}
