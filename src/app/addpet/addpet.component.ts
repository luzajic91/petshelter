import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Pet } from '../models/pet';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-addpet',
  templateUrl: './addpet.component.html',
  styleUrls: ['./addpet.component.css']
})
export class AddpetComponent implements OnInit {

  @Output() onAddPet: EventEmitter<Pet> = new EventEmitter();
  myForm: FormGroup;

  name: string;
  type: string;
  age: number;
  pic: string;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.name)
    //if ()
    if (!this.name) {
      alert('Daj ime');
      return;
    }

    const newPet = {id: null, name: this.name, type: this.type, age: this.age, pic: this.pic, adopted: false}
    this.onAddPet.emit(newPet);
    
    this.name='';
    this.type='';
    this.age=0;
    this.pic='';
  }

}
