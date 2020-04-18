import { Component } from '@angular/core';
import { User } from "./user";
import { EnrollmentService } from "./enrollment.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  topics = ['Angular', 'React', 'Vue'];

  userModel = {
    name: 'Bob',
    email: 'Bob123@gmail.com',
    phone: 3439883668,
    topic: 'default',
    timePreference: '',
    subscribe: true
  };

  hasTopicError = true;

  isSubmitted = false;

  errorMessage = '';

  constructor(private _enrollment: EnrollmentService) {

  };

  validateTopic(value) {
    if(value === 'default') {
      this.hasTopicError = true;
    } else {
      this.hasTopicError = false;
    }
  }

  onSubmit() {
    this.isSubmitted = true;
    this._enrollment.enroll(this.userModel)
      .subscribe(
        data => console.log("Good", data),
          error => {
          this.errorMessage = error.statusText})
  }
}
