import { Component, OnInit } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder, Validators, ValidatorFn} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {

  registerForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  private formUserType = this.fb.group({
    userType: ['', [
      Validators.required
    ]]
  });

  private fromAccountDetails = this.fb.group({
    email: ['', [
      Validators.required,
      Validators.email
    ]],
    password: ['', [
      Validators.required,
      Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$'),
      Validators.minLength(6)
    ]],
    passwordConfirm: ['', [
      Validators.required
    ]],

  },{validator: equalValueValidator('password', 'passwordConfirm')});

  private formProfileDetails = this.fb.group({
    name: ['', [
      Validators.required,
      Validators.minLength(2)
    ]],
    gender: [''],
    age: ['', [
      Validators.min(15)
    ]],
    phone: '',
  });

  private formWorkPreferences = this.fb.group({
    occupation: '',
    description: '',
    location: '',
    wage: '',
  });

  ngOnInit() {
    this.registerForm = this.fb.group({
      formArray: this.fb.array([
        this.formUserType,
        this.fromAccountDetails,
        this.formProfileDetails,
        this.formWorkPreferences,
        ''
      ])
    });

  }

  get formArray(): AbstractControl | null {
    return this.registerForm.get('formArray');
  }

  get userType() {
    return this.formArray.get([0]).get('userType');
  }
  get name() {
    return this.formArray.get([2]).get('name');
  }

}

export function equalValueValidator(targetKey: string, toMatchKey: string): ValidatorFn {
  return (group: FormGroup): {[key: string]: any} => {
    const target = group.controls[targetKey];
    const toMatch = group.controls[toMatchKey];
    
    if (target.touched && toMatch.touched) {
      const isMatch = target.value === toMatch.value;

      // set equal value error on dirty controls
      if (!isMatch && target.valid && toMatch.valid) {
        toMatch.setErrors({equalValue: targetKey});
        const message = targetKey + ' != ' + toMatchKey;
        return {'equalValue': message};
      }

      if (isMatch && toMatch.hasError('equalValue')) {
        toMatch.setErrors(null);
      }
    }

    return null;
  };
}