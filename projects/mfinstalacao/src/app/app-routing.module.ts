import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroMedidorComponent } from './cadastro-medidor/cadastro-medidor.component';
import { MarcaMedidorComponent } from './marca-medidor/marca-medidor.component';

const routes: Routes = [
  {
    path: 'marca-medidor',
    component: MarcaMedidorComponent
  },
  {
    path: 'cadastro-medidor',
    component: CadastroMedidorComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
