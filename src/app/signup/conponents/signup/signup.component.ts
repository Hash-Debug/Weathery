import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  signupForm: any = FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder) { }
  get f() { return this.signupForm.controls; }

  ngOnInit() {
    //Add User form validations
    this.signupForm = this.formBuilder.group({
      uesrName: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required]]
    });
  }
  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.signupForm.invalid) {
      return;
    }
    //True if all the fields are filled
    if (this.submitted) {
      console.log(this.signupForm.value);
      //alert("Great!!");
    }

  }
}
