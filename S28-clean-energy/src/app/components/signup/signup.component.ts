import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  template: `
    <div class="auth-container">
      <h2>Sign Up</h2>
      <form [formGroup]="signupForm" (ngSubmit)="onSubmit()">
        <div class="form-group">
          <label>Name:</label>
          <input type="text" formControlName="name">
        </div>
        <div class="form-group">
          <label>Username:</label>
          <input type="text" formControlName="userName">
        </div>
        <div class="form-group">
          <label>Password:</label>
          <input type="password" formControlName="password">
        </div>
        <button class="signup-button" type="submit">Sign Up</button>
      </form>
      <p>Already have an account? <a routerLink="/login">Login</a></p>
    </div>
  `
})
export class SignupComponent {
  signupForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.signupForm = this.fb.group({
      name: ['', Validators.required],
      userName: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  onSubmit(): void {
    if (this.signupForm.valid) {
      this.authService.signup(this.signupForm.value).subscribe({
        next: () => this.router.navigate(['/login']),
        error: (error) => console.error('Signup failed:', error)
      });
    }
  }
}