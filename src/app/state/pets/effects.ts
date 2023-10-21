import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { PetserviceService } from 'src/app/service/petservice.service';
import * as PetActions from './app.actions';

@Injectable()
export class TaskEffects {
  
    //loadTasks$ = createEffect(() => );

  constructor(private actions$: Actions, private petService: PetserviceService) {}
}