import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyFormulasComponent } from './my-formulas.component';

describe('MyFormulasComponent', () => {
  let component: MyFormulasComponent;
  let fixture: ComponentFixture<MyFormulasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyFormulasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyFormulasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
