import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Pet } from '../models/pet';

@Component({
  selector: 'app-addpet',
  templateUrl: './addpet.component.html',
  styleUrls: ['./addpet.component.css']
})
export class AddpetComponent implements OnInit {

  @Output() onAddPet: EventEmitter<Pet> = new EventEmitter();

  name: string;
  type: string;
  age: number;
  pic: string;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    if (!this.name) {
      alert('Daj ime');
      return;
    }

    const newPet = new Pet(5, this.name, this.type, this.age, this.pic, false);

    this.onAddPet.emit(newPet);
    
    this.name='';
    this.type='';
    this.age=0;
    this.pic='';
  }

}
