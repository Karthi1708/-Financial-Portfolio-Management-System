import { Component, OnInit, ViewChild } from '@angular/core';
import {
  ApexNonAxisChartSeries,
  ApexChart,
  ApexResponsive,
  ApexXAxis,
  ChartComponent,
} from 'ng-apexcharts';

export type AssetAllocationChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  labels: any;
  responsive: ApexResponsive[];
};

export type MarketTrendChartOptions = {
  series: any;
  chart: ApexChart;
  xaxis: ApexXAxis;
};

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  @ViewChild('chart') chart!: ChartComponent;

  assetAllocationData!: Partial<any>;
  marketTrendData!: Partial<any>;

  ngOnInit(): void {
    this.assetAllocationData = {
      series: [44, 55, 13, 43],
      chart: {
        type: 'donut',
      },
      labels: ['Stocks', 'Bonds', 'ETFs', 'Cash'],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: 'bottom',
            },
          },
        },
      ],
    };

    this.marketTrendData = {
      series: [
        {
          name: 'Portfolio Value',
          data: [31000, 32000, 33000, 35000, 37000, 39000, 42000],
        },
      ],
      chart: {
        type: 'line',
        height: 350,
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
      },
    };
  }
}
