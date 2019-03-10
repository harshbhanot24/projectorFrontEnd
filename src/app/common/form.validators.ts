import {AbstractControl,ValidationErrors,FormGroup} from '@angular/forms';
export class ValidatorFunctions{
  static PasswordShouldNotContainSpace(control: AbstractControl):ValidationErrors | null{

    if(control.status=="INVALID") return null;
    if((control.value).indexOf(' ')>=0){
      console.log('working fine')
      return {
        PasswordShouldNotContainSpace:true
      }
    }
      return {PasswordShouldNotContainSpace:false};
    
  }
  static  passwordMatchValidator(g: FormGroup):ValidationErrors | null {
   return g.get('password').value === g.get('ConfirmPassword').value
      ? null : {'mismatch': true};
}
}