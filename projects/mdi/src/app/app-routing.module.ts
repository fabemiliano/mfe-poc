import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'mfinstalacao',
    loadChildren: () => import('mfinstalacao/Module').then(m => m.MarcaMedidorModule)
  },
  {
    path: 'mfcobranca',
    loadChildren: () => import('mfcobranca/Module').then(m => m.CobrancaModule)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
