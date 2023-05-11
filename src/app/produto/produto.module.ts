import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListagemProdutosComponent } from './listagem-produtos/listagem-produtos.component';
import { MantemProdutoComponent } from './mantem-produto/mantem-produto.component';
import {MatIconModule} from "@angular/material/icon";
import {MatBadgeModule} from "@angular/material/badge";
import {MatCardModule} from "@angular/material/card";
import {RouterLink} from "@angular/router";
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatButtonModule} from "@angular/material/button";



@NgModule({
  declarations: [
    ListagemProdutosComponent,
    MantemProdutoComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatBadgeModule,
    MatCardModule,
    RouterLink,
    FlexLayoutModule,
    MatButtonModule
  ],
  exports: [
    ListagemProdutosComponent,
    MantemProdutoComponent
  ]
})
export class ProdutoModule { }
