import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnVentaComponent } from './en-venta.component';

describe('EnVentaComponent', () => {
  let component: EnVentaComponent;
  let fixture: ComponentFixture<EnVentaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnVentaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnVentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
