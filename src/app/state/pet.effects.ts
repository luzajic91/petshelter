import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, tap, switchMap, mergeMap } from 'rxjs/operators';
import { PetserviceService } from 'src/app/service/petservice.service';
import * as PetActions from './pet.actions';

@Injectable()
export class PetEffects {

  constructor(private actions$: Actions, private petService: PetserviceService) { }


  loadPets$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PetActions.loadPets),
      mergeMap(() =>
        this.petService.fetchPets().pipe(
          tap((pets) => console.log(`poruka iz prodavnice:`, pets)),
          map((pets) => PetActions.loadedPets({ pets }), console.log('poruka iz prodavnice'))
        ))));

  updatePet$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PetActions.updatePet),
      switchMap(({ pet }) =>
        this.petService.editPet(pet).pipe(
          map((updatedPet) => PetActions.updatePetSuccess({ pet: updatedPet }), 
        console.log(pet.name + ' ovo je neki novi pet'))))
    )
  )

  addPet$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PetActions.addPet),
      switchMap(({ pet }) =>
        this.petService.addPet(pet).pipe(
          map((addedPet) => PetActions.addPetSuccess({ pet: addedPet })),
          catchError(error => of(PetActions.addPetFailure({ error })))
        )
      )
    )
  );

  deletePet$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PetActions.deletePet),
      mergeMap(({ id }) =>
        this.petService.deletePet(id).pipe(
          map(() => 
            PetActions.deletePetSuccess({ id }),
          ),
          catchError((error) => of(PetActions.deletePetFailure({ error })))
        )
      )
    )
  );
   }
