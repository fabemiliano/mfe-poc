import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MarcaMedidorRoutingModule } from './marca-medidor-routing.module';
import { MarcaMedidorComponent } from './marca-medidor.component';


@NgModule({
  declarations: [
    MarcaMedidorComponent
  ],
  imports: [
    CommonModule,
    MarcaMedidorRoutingModule
  ]
})
export class MarcaMedidorModule { }
