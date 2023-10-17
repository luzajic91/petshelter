import { createAction, props } from "@ngrx/store";
import { Pet } from "src/app/models/pet";

export const addPet = createAction('[Pet] Add', props<{ pet: Pet }>());
export const updatePet = createAction('[Pet] Update', props<{ pet: Pet }>());
export const deletePet = createAction('[Pet] Delete', props<{ Id: number }>());
export const loadPets = createAction('[Pet] Load', props <{pets: Pet[]}>());