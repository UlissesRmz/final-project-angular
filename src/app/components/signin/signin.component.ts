import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
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
  register: FormGroup;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.register = this.formBuilder.group(
      {
        first_Name: ['', Validators.required],
        last_Name: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        confirm_email: ['', [Validators.required]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirm_password: ['', Validators.required],
      },
      {
        validator: [
          MustMatch('password', 'confirm_password'),
          MustMatch('email', 'confirm_email'),
        ],
      }
    );
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.register.controls;
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.register.invalid) {
      return;
    }

    // display form values on success
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.register.value, null, 4));
  }

  onReset() {
    this.submitted = false;
    this.register.reset();
  }
}
