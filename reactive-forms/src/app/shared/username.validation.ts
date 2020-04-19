import { AbstractControl, ValidatorFn } from "@angular/forms";

export function forbiddenSpecificNameValidation(control: AbstractControl): {[key: string]: any} {
  const forbiddenName = /admin/.test(control.value);
  return forbiddenName ? {'forbiddenName': {value: control.value}} : null;
}

export function forbiddenNameValidation(forbiddenName: RegExp) : ValidatorFn {
  return (control: AbstractControl) :{[key: string] : any} | null => {
    const isForbidden = forbiddenName.test(control.value);
    return isForbidden ? {forbiddenName: { value: control.value }} : null;
  };
}
