import { createSelector, createFeatureSelector } from '@ngrx/store';
import { AppState } from './app.state';
import { Pet } from '../models/pet';

// export const selectPets = createFeatureSelector<Pet[]>('pets');
// export const getPets = createSelector(selectPets, (pets) => pets);

const selectPetState = createFeatureSelector<AppState>('pets');
export const selectPets = createSelector(
    selectPetState,
    (state) => state.pets
)