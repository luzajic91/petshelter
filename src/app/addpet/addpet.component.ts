import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Pet } from '../models/pet';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-addpet',
  templateUrl: './addpet.component.html',
  styleUrls: ['./addpet.component.css']
})
export class AddpetComponent implements OnInit {

  @Output() onAddPet: EventEmitter<Pet> = new EventEmitter();
  petForm: FormGroup;

  name: string;
  type: string;
  age: number;
  pic: string;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {

  }

  onSubmit() {
    if (!this.validateForm()) {

      console.log(this.petForm.value);
      return;
    } else {
      const newPet = {id: null, name: this.name, type: this.type, age: this.age, pic: this.pic, adopted: false}

      console.log(newPet.name + ' '+ newPet.type)
      this.onAddPet.emit(newPet);
    }
    
    this.name='';
    this.type='';
    this.age=0;
    this.pic='';
  }

  private validateForm(): boolean {
    if(!/^[a-zA-Z ]+$/.test(this.name.trim())) {
      alert('Name contains numbers.');
      return false;
    }
    if (!this.type.trim()) {
      alert('Type is required.');
      return false;
    }

    if (isNaN(this.age) || this.age === null) {
      alert('Age must contain only numbers.');
      return false;
    }
    return true;
  }
}
