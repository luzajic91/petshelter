import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl, ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[appAgeValidator]',
  providers: [{ provide: NG_VALIDATORS, useExisting: AgeValidatorDirective, multi: true }]
})

export class AgeValidatorDirective implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {
    if (!/^[0-9]*$/.test(control.value) ) {
      return { invalidAge: true };
    }
    return null;
  }
}