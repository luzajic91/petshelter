import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PetComponent } from './pet/pet.component';
import { PetlistComponent } from './petlist/petlist.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';
import { PeteditComponent } from './petedit/petedit.component';
import { AddpetComponent } from './addpet/addpet.component';

import { petReducer } from './state/pet.reducer';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { PetEffects } from './state/pet.effects';
import { NameValidatorDirective } from './name-validator.directive';
import { AgeValidatorDirective } from './age-validator.directive';
import { PetdetailComponent } from './petdetail/petdetail.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: PetlistComponent },
  { path: 'pets', component: PetlistComponent },
  { path: 'pets/:id', component: PetdetailComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    PetComponent,
    PetlistComponent,
    PeteditComponent,
    AddpetComponent,
    NameValidatorDirective,
    AgeValidatorDirective,
    PetdetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatButtonModule,
    FormsModule,
    StoreModule.forRoot({pets: petReducer}),
    EffectsModule.forRoot([PetEffects]),
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
