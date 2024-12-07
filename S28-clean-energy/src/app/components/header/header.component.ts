import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <header>
        <nav class="navbar">
            <div class="nav-brand">Clean Energy Trends</div>
            <div class="nav-items">
                <a  routerLink="/dashboard">Dashboard</a>
                <a  routerLink="/summary">Summary</a>
                <a  routerLink="/reports">Report</a>
                <button (click)="logout()">Logout</button>
            </div>
        </nav>
    </header>
  `
})
export class HeaderComponent {
  constructor(private authService: AuthService) {}

  logout(): void {
    this.authService.logout();
  }
}