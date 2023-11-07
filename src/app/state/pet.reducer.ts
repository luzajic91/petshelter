import { createReducer, on } from "@ngrx/store";
import * as PetActions from "./pet.actions";
import { AppState } from "./app.state";
import { Pet } from "../models/pet";

export const initialState: AppState = {
    pets: []
}

export const petReducer = createReducer(
    initialState,
    on(PetActions.loadedPets, (state, { pets }) => {
        return { ...state, pets }
    }),
    on(PetActions.addPetSuccess, (state, { pet }) => (
        { ...state, pets: [ ...state.pets, pet ] 
    })),
    on(PetActions.updatePetSuccess, (state, { pet }) => ({
            ...state, pets: state.pets.map((p) =>
                p.id == pet.id ? pet : p)
    })),
    on(PetActions.updatePetFailure, (state, {error}) => ({
        ...state
    })),
    on(PetActions.deletePetSuccess, (state, {id}) => ({
        ...state,
        pets: state.pets.filter((pet) => pet.id !== id)
    }))
);
