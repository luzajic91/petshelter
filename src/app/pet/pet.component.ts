import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Pet } from '../models/pet';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.css']
})
export class PetComponent implements OnInit {

  @Input() pet: Pet;
  @Output() onDeletePet: EventEmitter<Pet> = new EventEmitter();
  editedPet: Pet;
  isEditing = false;

  constructor() { }

  ngOnInit(): void {
  }

  onDelete(pet: Pet) {
    console.log(pet);
    this.onDeletePet.emit(pet);
  }

  enableEditing() {
    this.isEditing = true;
    //nova iymena koja bi se trebala videti na gitu
  }
  
  cancelEditing() {
    this.isEditing = false;
  }
}
