import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { ChartService } from '../../services/chart.service';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-reports',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  template: `
    <app-header></app-header>
    <div class="container">
        <h1 class="header-title">Report</h1>
        <div class="card">
            <canvas #reportsChart></canvas>
            <a class="url-link" href="https://www.fastcompany.com/90992666/10-climate-tech-innovations-that-give-us-hope-for-2024">Source: Climate Tech Innovation in Clean Energy Sector</a>
       
            <p class="card-text">
              The Pie Chart showcases the distribution of innovations among key sectors, reflecting the priorities in addressing climate change as outlined in the article. Energy innovations lead with 40% of the focus, including technologies like geothermal power and CO2-based jet fuel, highlighting their transformative potential in decarbonizing industries. Transportation technologies, accounting for 30%, underline the importance of solutions like zero-emission ships in reducing fossil fuel dependency. The construction sector (20%) focuses on retrofitting and energy-storing materials to improve efficiency in existing infrastructure, while agriculture (10%) adopts carbon sequestration techniques like basalt dust to capture and store emissions naturally.
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

  canvas {
    width: 100%; 
    height: 400px;
  }
  `]
})
export class ReportsComponent implements OnInit {
  @ViewChild('reportsChart') private chartRef!: ElementRef;
  private chart: any;

  constructor(private chartService: ChartService) {}

  ngOnInit(): void {
    this.loadChartData();
  }

  private async loadChartData(): Promise<void> {
    try {
      const data = await this.chartService.getReportsData().toPromise();
      this.createChart(data);
    } catch (error) {
      console.error('Error loading chart data:', error);
    }
  }

  private createChart(data: any): void {
    const ctx = this.chartRef.nativeElement.getContext('2d');
    this.chart = new Chart(ctx, {
      type: 'pie',
      data: data,
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Distribution of Innovations Across Sectors'
          }
        }
      }
    });
  }
}