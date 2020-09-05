import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CotacaoComponent } from './cotacao/cotacao.component';

const routes: Routes = [
  {
    path: 'cotacao',
    component: CotacaoComponent,
  },
  {
    path: '',
    redirectTo: 'cotacao',
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CotacaoRoutingModule { }