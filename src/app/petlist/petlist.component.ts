import { Component, OnInit } from '@angular/core';
import { PetserviceService } from '../service/petservice.service';
import { Pet } from '../models/pet';


@Component({
  selector: 'app-petlist',
  templateUrl: './petlist.component.html',
  styleUrls: ['./petlist.component.css']
})
export class PetlistComponent implements OnInit {

  constructor(private petService: PetserviceService) { }

  pets: any;
  pet: Pet;

  ngOnInit(): void {
    this.petService.fetchPets().subscribe((data) => {
      this.pets = data;
      this.setPetsIds(this.pets);

    });
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
