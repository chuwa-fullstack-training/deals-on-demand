import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestProductDetailsComponent } from './best-product-details.component';

describe('BestProductDetailsComponent', () => {
  let component: BestProductDetailsComponent;
  let fixture: ComponentFixture<BestProductDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BestProductDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BestProductDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
