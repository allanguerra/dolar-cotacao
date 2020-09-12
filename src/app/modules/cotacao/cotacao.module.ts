import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';
import { CurrencyMaskModule } from "ng2-currency-mask";

import { CotacaoRoutingModule } from './cotacao-routing.module';

import { SharedModule } from '../../shared/shared.module';
import { CotacaoComponent } from './components/cotacao/cotacao.component';
import { CalculaCotacaoComponent } from './components/calcula-cotacao/calcula-cotacao.component';
import { MoedaCotacaoComponent } from './components/moeda-cotacao/moeda-cotacao.component';

@NgModule({
  declarations: [
    CotacaoComponent,
    CalculaCotacaoComponent,
    MoedaCotacaoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CurrencyMaskModule,
    CotacaoRoutingModule,
    SharedModule
  ]
})
export class CotacaoModule { }
