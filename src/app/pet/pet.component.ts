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
  @Output() onEditPet: EventEmitter<Pet> = new EventEmitter();
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
    console.log(this.isEditing);

  }
  
  cancelEditing() {
    this.isEditing = false;
    console.log(this.isEditing);
  }

  onEdit(pet: Pet) {
    console.log(pet);
    this.onEditPet.emit(pet);
    this.editedPet = {...this.pet};
  }
}
