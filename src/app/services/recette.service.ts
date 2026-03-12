import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Recette } from '../models/recette.model';
@Injectable({
  providedIn: 'root'
})
export class RecetteService {
  private readonly API_URL_RECETTE = 'http://localhost:8080/api-savon/v1/recette';
  constructor(private http: HttpClient) { }
  getRecettes(): Observable<Recette[]> {
    return this.http.get<Recette[]>(this.API_URL_RECETTE);
  }
  getRecetteById(id: number): Observable<Recette> {
    return this.http.get<Recette>(`${this.API_URL_RECETTE}/${id}`);
  }
  deleteRecette(id: number): Observable<void> {
    return this.http.delete<void>(`${this.API_URL_RECETTE}/${id}`);
  }
}



// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';
// import { Recette } from '../models/recette.model';
// @Injectable({
//   providedIn: 'root' // Le service est disponible dans toute l'application
// })
// export class RecetteService {
// // URL de base de notre API :
//   private readonly API_URL_RECETTE = 'http://localhost:8080/api-savon/v1/recette';
//   constructor(private http: HttpClient) { }
//   /**
//    * Récupère la liste de toutes les recettes depuis le backend.
//    * @returns Un Observable contenant le tableau des recettes.
//    */
//   getRecettes(): Observable<Recette[]> {
//     return this.http.get<Recette[]>(this.API_URL_RECETTE);
//   }
//   /**
//    * Récupère une recette spécifique par son identifiant.
//    * @param id L'identifiant de la recette
//    */
//   getRecetteById(id: number): Observable<Recette> {
//     return this.http.get<Recette>(`${this.API_URL_RECETTE}/${id}`);
//   }
//
//   /** * Ajoute une nouvelle recette.
//    */
//   addRecette(recette: Recette): Observable<Recette> {
//     return this.http.post<Recette>(this.API_URL_RECETTE, recette);
//   }
//   /** * Met à jour une recette existante.
//    */
//   updateRecette(recette: Recette): Observable<Recette> {
//     return this.http.put<Recette>
//     (`${this.API_URL_RECETTE}/${recette.id}`, recette);
//   }
//   /** * Supprime une recette par son ID.
//    */
//   deleteRecette(id: number): Observable<void> {
//     return this.http.delete<void>(`${this.API_URL_RECETTE}/${id}`);
//   }
//   /** * Supprime toutes les recettes de la base.
//    */
//   deleteAllRecettes(): Observable<void> {
//     return this.http.delete<void>(`${this.API_URL_RECETTE}/all`);
//   }
// }
