import { bootstrapApplication } from '@angular/platform-browser';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Flight {
  badge?: string;
  airline: string;
  code: string;
  aircraft: string;
  departTime: string;
  arriveTime: string;
  duration: string;
  stop: string;
  stopType: 'direct' | 'stop';
  price: number;
  logo: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app/app.html',
  styleUrl: './app/app.css'
})
export class App {
  activeTrip = 'Round trip';
  selectedFlightIndex = 0;
  priceRange = 820;

  flights: Flight[] = [
    {
      badge: 'Best',
      airline: 'American Airlines',
      code: 'AA 100',
      aircraft: 'Boeing 787-9',
      departTime: '08:30',
      arriveTime: '19:15',
      duration: '7h 45m',
      stop: '1 stop ORD',
      stopType: 'stop',
      price: 523,
      logo: 'AA'
    },
    {
      airline: 'Delta Air Lines',
      code: 'DL 215',
      aircraft: 'Airbus A330',
      departTime: '10:20',
      arriveTime: '20:30',
      duration: '8h 10m',
      stop: '1 stop ATL',
      stopType: 'stop',
      price: 542,
      logo: 'DL'
    },
    {
      airline: 'United Airlines',
      code: 'UA 123',
      aircraft: 'Boeing 777-200',
      departTime: '09:15',
      arriveTime: '20:45',
      duration: '7h 30m',
      stop: 'Non-stop',
      stopType: 'direct',
      price: 742,
      logo: 'UA'
    }
  ];

  get selectedFlight(): Flight {
    return this.flights[this.selectedFlightIndex];
  }

  selectFlight(index: number): void {
    this.selectedFlightIndex = index;
  }
}

bootstrapApplication(App).catch((err) => console.error(err));
