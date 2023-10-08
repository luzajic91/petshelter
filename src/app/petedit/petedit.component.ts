import { Component, Input, OnInit } from '@angular/core';
import { Pet } from '../models/pet';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-petedit',
  templateUrl: './petedit.component.html',
  styleUrls: ['./petedit.component.css']
})
export class PeteditComponent implements OnInit {

  @Input() pet: any;

  constructor() { }

  ngOnInit(): void {
  }

}
