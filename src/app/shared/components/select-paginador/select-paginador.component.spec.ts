import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectPaginadorComponent } from './select-paginador.component';

describe('SelectPaginadorComponent', () => {
  let component: SelectPaginadorComponent;
  let fixture: ComponentFixture<SelectPaginadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectPaginadorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectPaginadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
