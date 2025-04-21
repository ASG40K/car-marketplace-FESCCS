import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarListingFormComponent } from './car-listing-form.component';

describe('CarListingFormComponent', () => {
  let component: CarListingFormComponent;
  let fixture: ComponentFixture<CarListingFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarListingFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarListingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
