import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarcaMedidorComponent } from './marca-medidor.component';

describe('MarcaMedidorComponent', () => {
  let component: MarcaMedidorComponent;
  let fixture: ComponentFixture<MarcaMedidorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarcaMedidorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarcaMedidorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
