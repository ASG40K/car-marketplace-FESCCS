import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-car-listing-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './car-listing-form.component.html',
  styleUrls: ['./car-listing-form.component.scss']
})
export class CarListingFormComponent {
  carForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.carForm = this.fb.group({
      title: ['', Validators.required],
      description: [''],
      make: ['', Validators.required],
      model: ['', Validators.required],
      year: [null, Validators.required],
      userId: [1]
    });
  }

  onSubmit() {
    if (this.carForm.valid) {
      console.log('Form submitted:', this.carForm.value);
    }
  }
}
