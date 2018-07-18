import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartePdfComponent } from './carte-pdf.component';

describe('CartePdfComponent', () => {
  let component: CartePdfComponent;
  let fixture: ComponentFixture<CartePdfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartePdfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartePdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
