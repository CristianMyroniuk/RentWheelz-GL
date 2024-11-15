import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;

  user: User | null = null;

  constructor(private formBuilder: FormBuilder) {

  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  onSubmit():void{
    if (this.loginForm.valid) {
      const userData = localStorage.getItem('user');
      if (userData) {
        this.user = JSON.parse(userData) as User;
        if (this.user.userEmail === this.loginForm.get('email')?.value && this.user.userPassword === this.loginForm.get('password')?.value) {
          window.location.href = '/cars';
        } else {
          alert('Invalid credentials');
        }
      } else {
        this.user = null;
      }
    }else {
      this.loginForm.markAllAsTouched();
    }
  }
}
