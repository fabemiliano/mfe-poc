import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CadastroMedidorRoutingModule } from './cadastro-medidor-routing.module';
import { CadastroMedidorComponent } from './cadastro-medidor.component';


@NgModule({
  declarations: [
    CadastroMedidorComponent
  ],
  imports: [
    CommonModule,
    CadastroMedidorRoutingModule
  ]
})
export class CadastroMedidorModule { }
