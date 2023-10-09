import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryDiscountsComponent } from './category-discounts.component';

describe('CategoryDiscountsComponent', () => {
  let component: CategoryDiscountsComponent;
  let fixture: ComponentFixture<CategoryDiscountsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryDiscountsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoryDiscountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
