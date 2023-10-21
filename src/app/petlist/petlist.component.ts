import { Component, OnInit } from '@angular/core';
import { PetserviceService } from '../service/petservice.service';
import { Pet } from '../models/pet';
import { Store } from '@ngrx/store';
import { getPets, selectPets } from '../state/pet.selector';
import * as PetActions from '../state/pet.actions';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-petlist',
  templateUrl: './petlist.component.html',
  styleUrls: ['./petlist.component.css']
})
export class PetlistComponent implements OnInit {

  //pets = this.store.select(getPets);
  pets2: Observable<Pet[]>;


  constructor(private petService: PetserviceService, private store: Store) { }

  pets: any;
  
  pet: Pet;

  ngOnInit(): void {
    this.petService.fetchPets().subscribe((data) => {
      this.pets = data;
      this.setPetsIds(this.pets);
    });

    this.pets2 = this.store.select(getPets);
    this.pets2.subscribe(data => {console.log(data)})

    console.log(this.pets2.forEach((data) => data));
    
    this.petService.fetchPets().subscribe((pets) => 
    this.store.dispatch(PetActions.loadPets({pets})));
  }

  setPetsIds(pets: Pet[]) {
    const ids:any = []
    pets.forEach(pet => {
      ids.push(pet.id);
    })
    this.petService.setState(ids);
    console.log(this.petService.getState());
  } 

  deletePet(pet: Pet) {
    console.log(pet);
    this.petService.deletePet(pet).subscribe(() => this.pets = this.pets.filter((p: Pet) => p.id !== pet.id))
  }

  addPet(pet: Pet) {
    const newId = this.petService.getAvailableId();
    pet.id = newId;
    this.petService.addPet(pet).subscribe((pet) => { 
      this.pets.push(pet)
      const newState = this.petService.getState();
      newState.push(pet.id);      
      this.petService.setState(newState);
    });
  }

  editPet(pet: Pet ) {
    console.log(pet);
    //this.petService.editPet(pet).subscribe((pet));
  }
}
