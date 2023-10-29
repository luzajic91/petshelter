import { Component, OnInit } from '@angular/core';
import { PetserviceService } from '../service/petservice.service';
import { Pet } from '../models/pet';
import { Store } from '@ngrx/store';
// import { getPets, selectPets } from '../state/pet.selector';
import { selectPets } from '../state/pet.selector';
import * as PetActions from '../state/pet.actions';
import { Observable, of } from 'rxjs';


@Component({
  selector: 'app-petlist',
  templateUrl: './petlist.component.html',
  styleUrls: ['./petlist.component.css']
})
export class PetlistComponent implements OnInit {

  pets2: Observable<Pet[]>;
  petList: Pet[] = [];

  constructor(private petService: PetserviceService, private store: Store) { }

  pets: any;
  pet: Pet;

  ngOnInit(): void {
     this.petService.fetchPets().subscribe((pets) => {
      this.store.dispatch(PetActions.loadedPets({pets}));
      this.petList = pets;
      console.log(this.petList);
     })
     this.pets = this.store.select(selectPets);
     this.store.dispatch(PetActions.loadPets())
  }

  setPetsIds(pets: Pet[]) {
    const ids:any = [];
    console.log('Type of pets:', typeof pets);
    pets.forEach(pet => {
      ids.push(pet.id);
      console.log('Type of pets:', pet.id);
    })
    this.petService.setState(ids);
  } 

  deletePet(pet: Pet) {
    console.log(pet);
    this.petService.deletePet(pet).subscribe(() => this.petList = this.petList.filter((p: Pet) => p.id !== pet.id));
  }

  addPet(pet: Pet) {
    const newId = this.petService.getAvailableId();
    pet.id = newId;
    this.petService.addPet(pet).subscribe((pet) => { 
      this.petList = [...this.petList, pet];
      const newState = this.petService.getState();
      newState.push(pet.id);      
      this.petService.setState(newState);
    });
  }

  editPet(pet: Pet) {
    console.log(pet);
    this.store.dispatch(PetActions.updatePet({pet}));
  }
}
