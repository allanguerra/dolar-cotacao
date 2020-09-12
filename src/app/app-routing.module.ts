import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'cotacao',
    loadChildren: './modules/cotacao/cotacao.module#CotacaoModule'
  },
  {
    path: '',
    redirectTo: 'cotacao',
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
