import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartamentsLayoutComponent } from './departaments-layout.component';

describe('DepartamentsLayoutComponent', () => {
  let component: DepartamentsLayoutComponent;
  let fixture: ComponentFixture<DepartamentsLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepartamentsLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartamentsLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
