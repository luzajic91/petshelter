import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Pet } from '../models/pet';
import {MatButtonModule} from '@angular/material/button';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.css']
})
export class PetComponent implements OnInit {

  @Input() pet: Pet;
  @Output() onDeletePet: EventEmitter<Pet> = new EventEmitter();
  @Output() onEditPet: EventEmitter<Pet> = new EventEmitter();
  @Output() onSelectPet: EventEmitter<Pet> = new EventEmitter();

  //editedPet: Pet;
  editedPet: any = {};
  isEditing = false;
  editablePet: Pet;
  petForm: FormGroup;

  imageCat: string = "assets/images/CAT.png"
  imageDog: string = "assets/images/DOG.jpg"

  constructor() { }

  ngOnInit(): void {
    this.editablePet = {...this.pet};
  }

  getImageSource(): string {
    console.log(this.pet.name + "OVO SADA ISPISUJE");
    return this.pet.name.length % 2 === 0 ? this.imageCat: this.imageDog;
  }

  onDelete(pet: Pet) {
    console.log(pet);
    this.onDeletePet.emit(pet);
  }

  enableEditing() {
    this.isEditing = true;
    this.editedPet = {...this.pet};
    console.log(this.pet);
    console.log(this.isEditing);

  }
  
  cancelEditing() {
    this.isEditing = false;
    console.log(this.isEditing);
  }

  onEdit() {
    if (!this.validateForm()) {
      console.log(this.petForm.value);
      return;
    } else {
      const newPet = {id: this.pet.id, name: this.editedPet.name, type: this.editedPet.type, age: this.editedPet.age, pic: this.editedPet.pic, adopted: false}

      console.log(newPet.name + ' '+ newPet.type)
      this.onEditPet.emit(newPet);
    this.isEditing = !this.isEditing;
    }
    console.log(this.editedPet.name);
  }

  onSelect() {
    console.log(this.pet);
    this.onSelectPet.emit(this.pet);
  }

  private validateForm(): boolean {
    if(!/^[a-zA-Z ]+$/.test(this.editedPet.name.trim())) {
      alert('Name contains numbers.');
      return false;
    }
    if (!this.editedPet.type.trim()) {
      alert('Type is required.');
      return false;
    }

    if (isNaN(this.editedPet.age) || this.editedPet.age === null) {
      alert('Age must contain only numbers.');
      return false;
    }
    return true;
  }
}
