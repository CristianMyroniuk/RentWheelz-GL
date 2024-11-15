import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from '../../functions/must.match.function'; // Adjust the path as necessary
import { User } from '../../models/user.model'; // Adjust the path as necessary

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      fullName: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6)]],
      email: ['', [Validators.required, Validators.email]],
      licenseNumber: ['', Validators.required],
      terms: [false, Validators.requiredTrue]
    }, {
      validator: MustMatch('password', 'confirmPassword')
    });
  }

  onSubmit(): void {
    if (this.registerForm.valid) {
      const user: User = {
        userName: this.registerForm.get('fullName')?.value,
        userPassword: this.registerForm.get('password')?.value,
        userEmail: this.registerForm.get('email')?.value,
        userLicenseNumber: this.registerForm.get('licenseNumber')?.value,
        proofId: '123'
      };

      localStorage.setItem('user', JSON.stringify(user));

      window.location.href = '/cars';
    } else {
      this.registerForm.markAllAsTouched();
    }
  }
}