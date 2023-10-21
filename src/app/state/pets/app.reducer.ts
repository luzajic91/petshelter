import { createReducer, on } from "@ngrx/store/src";
import * as PetActions from "./app.actions";
import { AppState } from "../app.state";

export const initialState: AppState = { 
    pets: []
}

export const petReducer = createReducer(
    initialState,
    on(PetActions.loadPetsSuccess, (state, { pets }) => ({ 
        ...state, pets })),

    on(PetActions.addPet, (state, { pet }) => ({
        ...state, pets: {...state.pets, pet}})),

    on(PetActions.updatePet, (state, { pet }) => ({
        ...state, pets: state.pets.map((p) => 
        (p.id === pet.id ? pet : p))})),

    on(PetActions.deletePet, (state, { id }) => ({
        ...state,pets: state.pets.filter((p) => p.id !== id)}))

    //on()
)