import { Component, OnInit } from '@angular/core';
import {
  Validators,
  FormBuilder,
  FormControl,
  FormGroup,
} from '@angular/forms';
import { MustMatch } from './../must-match';

// VAlidation metod in TS

// -----------------------------------------------------------
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent implements OnInit {
  isLinear = false;
  submitted = false;

  firstFormGroup: any;
  secondFormGroup: any;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.firstFormGroup = this.formBuilder.group(
      {
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        emailConfirm: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', Validators.required],
      },
      {
        validator: [
          MustMatch('password', 'confirmPassword'),
          MustMatch('email', 'emailConfirm'),
        ],
      }
    );
    this.secondFormGroup = this.formBuilder.group({
      address: ['', Validators.required],
      address2: ['', Validators.required],
      cp: ['', Validators.required],
    });
  }

  // ng build --aot --prod

  get f() {
    return this.firstFormGroup.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.firstFormGroup.invalid) {
      console.log('Here there an error with the first Form');
      return;
    }
    if (this.secondFormGroup.invalid) {
      console.log('Here there an error with the second Form');
      return;
    }

    alert(
      'SUCCESS!! :-)\n\n' + JSON.stringify(this.firstFormGroup.value, null, 4)
    );
    alert(
      'SUCCESS!! :-)\n\n' + JSON.stringify(this.secondFormGroup.value, null, 4)
    );
  }

  onReset() {
    this.submitted = false;
  }
}
