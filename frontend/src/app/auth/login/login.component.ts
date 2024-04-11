import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent  implements OnInit {


  form: FormGroup;
  isAutofilled: boolean = false; // Flag to track autofill state

  constructor(private readonly fb: FormBuilder) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(7)]]
    });
    this.checkFormValidity();
  }

  get email() {
    return this.form.controls['email'];
  }

  get password() {
    return this.form.controls['password'];
  }

  ngOnInit() {


  }

  submit() {

  }


  // Method to check form validity and update autofilled flag
  checkFormValidity() {
    if (this.form.valid) {
      this.isAutofilled = false; // Form is valid, not autofilled
    } else {
      // Check if any form control has autofill
      const isAutofilled = Object.keys(this.form.controls).some(controlName =>
        (this.form.get(controlName)!.dirty && !this.form.get(controlName)!.touched)
      );
      this.isAutofilled = isAutofilled;
    }
  }
}
