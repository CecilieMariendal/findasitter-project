import { Component, OnInit } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.fb.group({
      formArray: this.fb.array([
        this.fb.group({
          type: ['',[
            Validators.required
          ]],
          email: ['', [
            Validators.required,
            Validators.email
          ]],
          password: ['', [
            Validators.required,
            Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$'),
            Validators.minLength(6)
          ]]
        }),
        this.fb.group({
          name: ['', [
            Validators.required,
            Validators.minLength(2)
          ]],
          gender: [''],
          age: ['', [
            Validators.required,
            Validators.min(15)
          ]],
          phone: '',
        }),
        this.fb.group({
          occupation: '',
          description: '',
          location: '',
          wage: '',
        }),
        ''
      ])
    });

    // console.log()
  }
  get formArray(): AbstractControl | null { 
    return this.registerForm.get('formArray'); 
  }

  get type(){
    return this.formArray.get([0]).get('type');
  }
  // get email(){
  //   return this.formArray.get([0]).get('email');
  // }
  // get password(){
  //   return this.registerForm.get('password');
  // }
}
