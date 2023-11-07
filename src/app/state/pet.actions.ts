import { createAction, props } from "@ngrx/store";
import { Pet } from "src/app/models/pet";

export const addPet = createAction('[Pet] Add', props<{ pet: Pet }>());
export const addPetSuccess = createAction('[Pet] Add Success', props<{ pet: Pet }>());
export const addPetFailure = createAction('[Pet] Add Failure', props<{ error: any }>());

export const updatePet = createAction('[Pet] Update', props<{ pet: Pet }>());
export const updatePetSuccess = createAction('[Pet] Update Success', props<{ pet: Pet }>());
export const updatePetFailure = createAction('[Pet] Update Failure', props<{ error: any }>());

export const deletePet = createAction('[Pet] Delete', props<{ id: number }>());
export const deletePetSuccess = createAction('[Pet] Delete Success', props<{ id: number }>());
export const deletePetFailure = createAction('[Pet] Delete Failure', props<{ error: any }>());

export const loadPets = createAction('[Pet] Load');
export const loadedPets = createAction('[Pet] Loaded', props <{pets: Pet[]}>());

export const loadPetsFailure = createAction('[Pet] Load');

//export const loadPets = createAction('[Pet] Load');
//export const loadPetsSuccess = createAction('[Pet] Load', props <{pets: Pet[]}>());
