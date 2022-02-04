import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CobrancaRoutingModule } from './cobranca-routing.module';
import { CobrancaComponent } from './cobranca.component';
import { FormComponent } from './form/form.component';
import { ListComponent } from './list/list.component';


@NgModule({
  declarations: [
    CobrancaComponent,
    FormComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    CobrancaRoutingModule
  ]
})
export class CobrancaModule { }
