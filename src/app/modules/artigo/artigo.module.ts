import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArtigoRoutingModule } from './artigo-routing.module';
import { ExibeArtigoComponent } from './components/exibe-artigo/exibe-artigo.component';


@NgModule({
  declarations: [ExibeArtigoComponent],
  imports: [
    CommonModule,
    ArtigoRoutingModule
  ]
})
export class ArtigoModule { }
