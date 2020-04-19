import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { forbiddenNameValidation } from "./shared/username.validation";
import { passwordValidator } from "./shared/password.validator";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'reactive-forms';
  registerForm: FormGroup;
  // registerFrom = new FormGroup({
  //   name: new FormControl(),
  //   password: new FormControl(),
  //   confirmPassword: new FormControl(),
  //   address: new FormGroup({
  //     city: new FormControl(),
  //     state: new FormControl(),
  //     country: new FormControl()
  //   })
  // });
  get usename() {
    return this.registerForm.get('name');
  }

  get email() {
    return this.registerForm.get('email');
  }
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.registerForm = this.fb.group({
      name: ['Keith',[Validators.required, Validators.minLength(3), forbiddenNameValidation(/admin/)]],
      email: [],
      subscribe: [false],
      password: [],
      confirmPassword: [],
      address: this.fb.group({
        city: [],
        state: [],
        country: []
      })
    }, {validators: passwordValidator});

    this.registerForm.get('subscribe').valueChanges
      .subscribe(checkedValue => {
        if(checkedValue) {
          this.email.setValidators(Validators.required);
        } else {
          this.email.clearValidators();
        }
        this.email.updateValueAndValidity();
      })

  }



  loadAPIData() {
    this.registerForm.patchValue({
      name: 'Keith'
    })
  }
}
