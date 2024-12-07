import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { ChartService } from '../../services/chart.service';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-summary',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  template: `
    <app-header></app-header>
    <div class="container">
        <h1 class="header-title">Summary</h1>
        
        <div class="card">
            <canvas #summaryChart></canvas>
            <a class="url-link" href="https://www.fastcompany.com/90992666/10-climate-tech-innovations-that-give-us-hope-for-2024">Source: Climate Tech Innovation in Clean Energy Sector</a>
       
            <p class="card-text">
            The Line Chart visualizes the projected adoption trends of climate technologies over the decade (2024–2033). It illustrates that energy solutions, including CO2-based jet fuel and renewable heat for factories, exhibit the steepest growth trajectory. This growth reflects their scalability, immediate applicability, and capacity to address emissions from industrial processes and transportation—two major contributors to global carbon output. Transportation technologies, such as zero-emission ships, also show significant but steady adoption, signaling a gradual shift as infrastructure and supply chains transition to cleaner alternatives.

Construction innovations, like retrofittable panels and energy-storing concrete, demonstrate a slower yet consistent growth pattern. This reflects the inherent challenges in retrofitting aging infrastructure but underscores its importance in improving energy efficiency. The incremental growth highlights the sector's gradual alignment with sustainability goals.

            </p>
        </div>
    </div>
  `,
  styles:[`
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
  
  /* Card text styles */
  .card-text {
    margin-top: 1rem; /* Matches 'mt-4' */
    line-height: 1.5;
    color: #333333; /* Text color */
  }
  `]
})
export class SummaryComponent implements OnInit {
  @ViewChild('summaryChart') private chartRef!: ElementRef;
  private chart: any;

  constructor(private chartService: ChartService) {}

  ngOnInit(): void {
    this.loadChartData();
  }

  private async loadChartData(): Promise<void> {
    try {
      const data = await this.chartService.getSummaryData().toPromise();
      this.createChart(data);
    } catch (error) {
      console.error('Error loading chart data:', error);
    }
  }

  private createChart(data: any): void {
    const ctx = this.chartRef.nativeElement.getContext('2d');
    this.chart = new Chart(ctx, {
      type: 'line',
      data: data,
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Top 10 Climate Tech Innovations (2024)'
          }
        }
      }
    });
  }
}