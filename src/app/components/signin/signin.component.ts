import { Component, OnInit } from '@angular/core';
import {
  Validators,
  FormBuilder,
  FormGroup,
  FormControl,
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
  submitted = false;
  registerForm: any;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.registerForm = this.formBuilder.group(
      {
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        confirmEmail: ['', [Validators.required]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirm_password: ['', Validators.required],
      },
      {
        validator: [
          MustMatch('password', 'confirm_password'),
          MustMatch('email', 'confirmEmail'),
        ],
      }
    );
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.registerForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    // display form values on success
    alert(
      'SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4)
    );
  }

  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }
}
