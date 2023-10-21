import { createReducer, on } from "@ngrx/store";
import * as PetActions from "./pet.actions";
import { AppState } from "./app.state";
import { Pet } from "../models/pet";

export const initialState: AppState = {
    pets: []
}

export const petReducer = createReducer(
    initialState, 
    on(PetActions.loadPets, (state, { pets }) => { 
        return { ...state, pets } 
    }));

// export const petReducer = createReducer(
//     initialState,
//     on(PetActions.loadPetsSuccess, (state, { pets }) => ({
//         ...state, pets })),

//     on(PetActions.addPet, (state, { pet }) => ({
//         ...state, pets: {...state.pets, pet}})),

//     on(PetActions.updatePet, (state, { pet }) => ({
//         ...state, pets: state.pets.map((p) =>
//         (p.id === pet.id ? pet : p))})),

//     on(PetActions.deletePet, (state, { id }) => ({
//         ...state,pets: state.pets.filter((p) => p.id !== id)}))
// )