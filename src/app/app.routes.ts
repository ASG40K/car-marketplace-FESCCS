import { Routes } from '@angular/router';
import { CarListingsComponent } from './car-listings/car-listings.component';
import { CarListingFormComponent } from './components/car-listing-form.component';

export const routes: Routes = [
  {
    path: 'listings',
    component: CarListingsComponent
  },
  {
    path: 'new',
    component: CarListingFormComponent
  },
  {
    path: '',
    redirectTo: 'listings',
    pathMatch: 'full'
  }
];
