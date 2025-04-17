import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { CarListing } from '../car-listing.model';

@Component({
  selector: 'app-car-listings',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './car-listings.component.html',
  styleUrl: './car-listings.component.scss',
})
export class CarListingsComponent {
  listings: CarListing[] = [
    {
      id: 1,
      title: 'Toyota Camry SE',
      description: 'Well maintained, no accidents.',
      make: 'Toyota',
      model: 'Camry',
      year: 2021,
      userId: 1
    },
    {
      id: 2,
      title: 'Honda Civic LX',
      description: 'Low mileage, one owner.',
      make: 'Honda',
      model: 'Civic',
      year: 2020,
      userId: 2
    }
  ];
}
