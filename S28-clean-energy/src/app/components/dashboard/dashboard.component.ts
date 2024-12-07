import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  template: `
    <app-header></app-header>
    <div class="container">
    <h1 class="header-title">Dashboard</h1>
    
    <div class="card">
        <h2 class="card-title">Article Overview</h2>
        <p class="card-text">
        <a class="url-link" href="https://www.fastcompany.com/90992666/10-climate-tech-innovations-that-give-us-hope-for-2024">Climate Tech Innovation in Clean Energy Sector</a>
            
        The article from Fast Company highlights ten promising technology innovations poised to reshape the energy and sustainability landscape in 2024. Examples include geothermal heat networks in Boston neighborhoods, factories producing CO2-based jet fuel, and the first U.S. commercial direct air capture plant. The list also features zero-emission ships, advanced carbon removal methods using basalt dust, and retrofittable solutions for inefficient buildings. These innovations collectively target reducing emissions, improving energy efficiency, and advancing renewable energy deployment across industries.
        The article highlights ten groundbreaking climate technologies reshaping sustainability efforts in 2024. Key innovations include geothermal heating networks in Boston, factories producing jet fuel from CO2, and carbon removal techniques like basalt dust on farms. Other advancements include zero-emission ships, energy-storing concrete, and retrofittable systems for buildings. These solutions collectively aim to scale clean energy adoption, cut emissions, and make renewable energy accessible across various sectors.
        Additional advancements focus on clean heat solutions for factories using renewable energy, energy-storing concrete that doubles as a supercapacitor, and retrofittable panels for old buildings to improve energy efficiency. These technologies are not only addressing critical climate challenges but also pioneering ways to make renewable energy and sustainable solutions more affordable and scalable globally. Together, they demonstrate significant progress toward reducing greenhouse gas emissions and mitigating climate change.
        </p>
    </div>

    <div class="card">
        <h2 class="card-title">Technical Stack</h2>
        <ul class="list">
        <li><strong>Frontend:</strong> Angular Js</li>
        <li><strong>Backend:</strong> Node.js</li>
        <li><strong>Database:</strong> MongoDB </li>
        <li><strong>Authentication:</strong> JWT-based authentication</li>
        <li><strong>Charts:</strong> Chart.js for data visualization</li>
        <li><strong>Styling:</strong> Custom CSS with responsive design</li>
        </ul>
    </div>
    </div>

  `,
  styles: [`
  /* General container styles */
  .container {
    max-width: 1200px; /* Mimics 'mx-auto' for centering */
    margin: 0 auto;
    padding: 1.5rem; /* Matches 'p-6' in Tailwind */
  }
  
  /* Header title styles */
  .header-title {
    font-size: 1.875rem; /* Matches 'text-3xl' (30px) */
    font-weight: 700; /* Matches 'font-bold' */
    margin-bottom: 1.5rem; /* Matches 'mb-6' */
  }
  
  /* Card styles */
  .card {
    background-color: #ffffff; /* Matches 'bg-white' */
    border-radius: 0.5rem; /* Matches 'rounded-lg' (8px) */
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Matches 'shadow-md' */
    padding: 1.5rem; /* Matches 'p-6' */
    margin-bottom: 1.5rem; /* Matches 'mb-6' */
  }
  
  /* Card title styles */
  .card-title {
    font-size: 1.25rem; /* Matches 'text-xl' (20px) */
    font-weight: 600; /* Matches 'font-semibold' */
    margin-bottom: 1rem; /* Matches 'mb-4' */
  }
  
  /* Card text styles */
  .card-text {
    margin-bottom: 1rem; /* Matches 'mb-4' */
    line-height: 1.5;
    color: #333333; /* Text color */
  }
  
  /* List styles */
  .list {
    list-style-type: disc; /* Matches 'list-disc' */
    padding-left: 1.5rem; /* Matches 'pl-6' */
  }
  
  .list li {
    margin-bottom: 0.5rem; /* Adds spacing between list items */
  }

  .url-link {
    font-size: 1.125rem; 
    line-height: 1.75rem;
    color: #3b82f6;
    text-decoration: underline;
  }
  
  `]
})
export class DashboardComponent {}