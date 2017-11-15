import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FibonacciNumberComponent } from './fibonacci-number.component';

describe('FibonacciNumberComponent', () => {
  let component: FibonacciNumberComponent;
  let fixture: ComponentFixture<FibonacciNumberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FibonacciNumberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FibonacciNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
