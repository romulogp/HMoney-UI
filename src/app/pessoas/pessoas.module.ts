import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { InputMaskModule } from 'primeng/components/inputmask/inputmask';
import { TooltipModule } from 'primeng/components/tooltip/tooltip';
import { DataTableModule } from 'primeng/components/datatable/datatable';
import { ButtonModule } from 'primeng/components/button/button';
import { InputTextModule } from 'primeng/components/inputtext/inputtext';
import { CurrencyMaskModule } from 'ng2-currency-mask';

import { SharedModule } from './../shared/shared.module';

import { PessoaCadastroComponent } from './pessoa-cadastro/pessoa-cadastro.component';
import { PessoasGridComponent } from './pessoas-grid/pessoas-grid.component';
import { PessoasPesquisaComponent } from './pessoas-pesquisa/pessoas-pesquisa.component'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,

    InputMaskModule,
    InputTextModule,
    ButtonModule,
    DataTableModule,
    TooltipModule,
    CurrencyMaskModule,

    SharedModule
  ],
  declarations: [
    PessoaCadastroComponent,
    PessoasGridComponent,
    PessoasPesquisaComponent
  ],
  exports: [
    PessoaCadastroComponent,
    PessoasPesquisaComponent
  ]
})
export class PessoasModule { }
