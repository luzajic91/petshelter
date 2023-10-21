import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { PetserviceService } from 'src/app/service/petservice.service';
import * as PetActions from './pet.actions';

@Injectable()
export class PetEffects {
  
  loadPets$ = createEffect(() =>
  this.actions$.pipe(
    ofType(PetActions.loadPets), // Listen for the loadPets action
    switchMap(() =>
      this.petService.fetchPets().pipe( // Replace with your API call
        map(pets => PetActions.loadPets({ pets })),
        catchError(error => of(PetActions.loadPetsFailure()))
      )
    )
  )
);

  constructor(private actions$: Actions, private petService: PetserviceService) {}
}