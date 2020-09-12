import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CotacaoComponent } from './components/cotacao/cotacao.component';
import { CotacaoEuroComponent } from './components/cotacao-euro/cotacao-euro.component';

const routes: Routes = [
  {
    path: 'dolar',
    component: CotacaoComponent,
  },
  {
    path: 'euro',
    component: CotacaoEuroComponent,
  },
  {
    path: '',
    redirectTo: 'dolar',
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CotacaoRoutingModule { }
