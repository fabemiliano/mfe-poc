import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroMedidorComponent } from './cadastro-medidor.component';

describe('CadastroMedidorComponent', () => {
  let component: CadastroMedidorComponent;
  let fixture: ComponentFixture<CadastroMedidorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroMedidorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroMedidorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
