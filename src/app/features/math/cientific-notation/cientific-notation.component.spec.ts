import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CientificNotationComponent } from './cientific-notation.component';

describe('CientificNotationComponent', () => {
  let component: CientificNotationComponent;
  let fixture: ComponentFixture<CientificNotationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CientificNotationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CientificNotationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
