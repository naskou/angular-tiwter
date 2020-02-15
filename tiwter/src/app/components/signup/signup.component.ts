import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;

  constructor(private authService: AuthService, private fb: FormBuilder) {}

  ngOnInit() {
    this.init();
  }

  init() {
    this.signupForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.email, Validators.required]],
      password: ['', Validators.required]
    });
  }

  signupUser() {
    console.log(this.signupForm.value);
    this.authService.registerUser(this.signupForm.value).subscribe(
      data => {
        console.log(data);
        this.signupForm.reset();
      },
      err => console.log(err)
    );
  }
}
