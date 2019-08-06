import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentsLayoutComponent } from './payments-layout.component';

describe('PaymentsLayoutComponent', () => {
  let component: PaymentsLayoutComponent;
  let fixture: ComponentFixture<PaymentsLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentsLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentsLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
