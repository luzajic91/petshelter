import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
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

  constructor(private petService: PetserviceService, private store: Store, private changeDetectorRef: ChangeDetectorRef) { 
    this.pets = this.store.select(selectPets);
  }

  pets: any;
  pet: Pet;

  ngOnInit(): void {     
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
    const id = pet.id !== null ? pet.id : 0;
    //pet.id = id;
    this.store.dispatch(PetActions.deletePet({id: id}));
    console.log(pet.id);
    //this.petService.deletePet(pet.id).subscribe(() => this.petList = this.petList.filter((p: Pet) => p.id !== pet.id));
  }

  addPet(pet: Pet) {
    const newId = this.petService.getAvailableId();
    pet.id = newId;
    console.log(newId + 'ne znam stvarno')
    // this.petService.addPet(pet).subscribe((pet) => { 
    //   this.petList = [...this.petList, pet];
    //   const newState = this.petService.getState();
    //   newState.push(pet.id);      
    //   this.petService.setState(newState);
    // });
    this.store.dispatch(PetActions.addPet({pet}))
    this.changeDetectorRef.detectChanges();
  }

  editPet(pet: Pet) {
    console.log(pet);
    this.store.dispatch(PetActions.updatePet({pet}));
    
  }
}
