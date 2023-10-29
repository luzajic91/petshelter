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
  private _state = [];

  constructor(private http: HttpClient) { }

  getState(): any {
    return this._state;
  }

  setState(n: any): void {
    this._state = n;
  }

  fetchPets(): Observable<Pet[]> {
    return this.http.get<Pet[]>(this.apiUrl);
  }

  deletePet(pet: Pet): Observable<Pet> {
    const url = `${this.apiUrl}/${pet.id}`;
    console.log(pet);
    return this.http.delete<Pet>(url);
  }

  addPet(pet: Pet): Observable<Pet> {
    return this.http.post<Pet>(this.apiUrl, pet, httpOptions);
  }

  getAvailableId(): number {
    let availableId: number = 0;
    const sortedIds = this._state.sort(function(a, b) {
           return a - b;
    });

    for (let i=0; i < sortedIds.length-1; i++) {
      if (sortedIds[i+1]-sortedIds[i] !== 1) {
        availableId = sortedIds[i] + 1;
      }
    }
    return availableId;
  }  

  editPet(pet: Pet): Observable<Pet> {
    const url = `${this.apiUrl}/${pet.id}`;
    return this.http.put<Pet>(url, pet, httpOptions);
  }
}
