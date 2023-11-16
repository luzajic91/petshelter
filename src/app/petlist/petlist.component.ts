import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { PetserviceService } from '../service/petservice.service';
import { Pet } from '../models/pet';
import { Store } from '@ngrx/store';
import { selectPets } from '../state/pet.selector';
import * as PetActions from '../state/pet.actions';
import { Observable, of } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-petlist',
  templateUrl: './petlist.component.html',
  styleUrls: ['./petlist.component.css']
})
export class PetlistComponent implements OnInit {

  pets2: Observable<Pet[]>;
  petList: Pet[] = [];

  constructor(private petService: PetserviceService, private store: Store, private changeDetectorRef: ChangeDetectorRef, private router: Router) { 
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
    this.store.dispatch(PetActions.deletePet({id: id}));
    console.log(pet.id);
  }

  addPet(pet: Pet) {
    const newId = this.petService.getAvailableId();
    pet.id = newId;
    console.log(newId)
    this.store.dispatch(PetActions.addPet({pet}))
    this.changeDetectorRef.detectChanges();
  }

  editPet(pet: Pet) {
    console.log(pet + ' OVDE MOZDA ZNA KOJI JE ID '+ pet.id);
    this.store.dispatch(PetActions.updatePet({pet}));
  }

  redirectToPetDetails(pet: Pet) {
    this.router.navigate(['/pets', pet.id]);
  }
}
