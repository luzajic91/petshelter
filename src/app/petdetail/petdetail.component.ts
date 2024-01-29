import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Pet } from '../models/pet';
import {MatButtonModule} from '@angular/material/button';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PetserviceService } from '../service/petservice.service';

@Component({
  selector: 'app-petdetail',
  templateUrl: './petdetail.component.html',
  styleUrls: ['./petdetail.component.css']
})
export class PetdetailComponent implements OnInit {
  
  petId: string;
  pet: Pet;

  imageCat: string = "assets/images/silly cat.jpg"
  imageDog: string = "assets/images/silly dog.jpg"

  constructor(private route: ActivatedRoute, private petService: PetserviceService, private router: Router) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.petId = params['id'];
      this.loadPetDetails();
    });
  }

  getImageSource(): string {
    console.log(this.pet.name + "OVO SADA ISPISUJE");
    return this.pet.name.length % 2 === 0 ? this.imageCat: this.imageDog;
  }

  loadPetDetails() {
    this.petService.getPet(this.petId).subscribe(details => {
      this.pet = details;
    });
  }
  redirectToPetList() {
    this.router.navigate(['/pets']);
  }
}
