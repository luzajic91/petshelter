import { createReducer, on } from "@ngrx/store/src";
import * as PetActions from "./app.actions";
import { AppState } from "../app.state";

export const initialState: AppState = { 
    pets: []
}

export const petReducer = createReducer(
    initialState,
    on(PetActions.loadPets, (state, { pets }) => ({ ...state, pets }))
    //on()
)