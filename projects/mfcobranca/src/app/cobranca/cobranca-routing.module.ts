import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CobrancaComponent } from './cobranca.component';
import { FormComponent } from './form/form.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [
  {
    path: '',
    component: CobrancaComponent,
    children: [
      {
        path: 'form',
        component: FormComponent
      },
      {
        path: 'list',
        component: ListComponent
      }
    ]
  },
  {
    path: 'form',
    component: FormComponent
  },
  {
    path: 'list',
    component: ListComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CobrancaRoutingModule { }
