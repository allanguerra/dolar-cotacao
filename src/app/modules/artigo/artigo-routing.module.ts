import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExibeArtigoComponent } from './components/exibe-artigo/exibe-artigo.component';

const routes: Routes = [
  {
    path: '',
    component: ExibeArtigoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArtigoRoutingModule { }
