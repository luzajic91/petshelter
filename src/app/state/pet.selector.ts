import { createSelector, createFeatureSelector } from '@ngrx/store';
import { AppState } from './app.state';
import { Pet } from '../models/pet';

export const selectPets2 = createFeatureSelector<Pet[]>('pets');

export const selectPets = (state: AppState) => state.pets;

export const getPets = createSelector(selectPets2, (pets) => pets);