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
    this.petService.fetchPet().subscribe((data) => {this.pets = data});
  }

  deletePet(pet: Pet) {
    console.log(pet);
    this.petService.deletePet(pet).subscribe(() => this.pets = this.pets.filter((p: Pet) => p.id !== pet.id))
  }

  addPet(pet: Pet) {
    console.log(pet);
    this.petService.addPet(pet).subscribe((pet) => (this.pets.push(pet)));
  }

  editPet(pet: Pet ) {
    console.log(pet);
    //this.petService.editPet(pet).subscribe((pet));
  }
}
