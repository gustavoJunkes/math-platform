import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculationPostComponent } from './calculation-post.component';

describe('CalculationPostComponent', () => {
  let component: CalculationPostComponent;
  let fixture: ComponentFixture<CalculationPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculationPostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculationPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
