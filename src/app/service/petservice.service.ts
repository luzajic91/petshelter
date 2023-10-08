import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pet } from '../models/pet';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})

export class PetserviceService {

  private apiUrl = 'http://localhost:5000/pets';

  constructor(private http: HttpClient) { }

  fetchPet(): Observable<Pet[]> {
    return this.http.get<Pet[]>(this.apiUrl);
  }

  deletePet(pet: Pet): Observable<Pet> {
    const url = `${this.apiUrl}/${pet.id}`;
    console.log(pet);
    return this.http.delete<Pet>(url);
  }

  addPet(pet: Pet):Observable<Pet> {
    return this.http.post<Pet>(this.apiUrl, pet, httpOptions);
  }

  editPet(pet: Pet):Observable<Pet> {
    return this.http.put<Pet>(this.apiUrl, pet, httpOptions);
  }
}
