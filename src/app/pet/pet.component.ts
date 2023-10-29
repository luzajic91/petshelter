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
  //editedPet: Pet;
  editedPet: any = {};
  isEditing = false;
  editablePet: Pet;

  constructor() { }

  ngOnInit(): void {
    this.editablePet = {...this.pet};
  }

  onDelete(pet: Pet) {
    console.log(pet);
    this.onDeletePet.emit(pet);
  }

  enableEditing() {
    this.isEditing = true;
    this.editedPet = this.pet;
    console.log(this.pet);
    console.log(this.isEditing);

  }
  
  cancelEditing() {
    this.isEditing = false;
    console.log(this.isEditing);
  }

  // onEdit(pet: Pet) {
  //   this.editedPet = pet;
  //   console.log(pet);
  //   console.log(this.editedPet);
  //   this.onEditPet.emit(pet);s
  //   //this.editedPet = {...this.pet};
  // }

  onEdit(name: string, age: number, type: string) {
    const newPet = {id: this.pet.id, name: name, type: type, age: age, pic: this.pet.pic, adopted: this.pet.adopted}
    console.log(newPet);
    this.onEditPet.emit(newPet);
    this.isEditing = !this.isEditing;
  }
}
