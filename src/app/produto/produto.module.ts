import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MantemProdutoComponent } from './mantem-produto/mantem-produto.component';
import { ListagemProdutosComponent } from './listagem-produtos/listagem-produtos.component';
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {FlexModule} from "@angular/flex-layout";
import {MatIconModule} from "@angular/material/icon";
import {PipesModule} from "../pipes/pipes.module";
import {MatBadgeModule} from "@angular/material/badge";
import {RouterLink} from "@angular/router";



@NgModule({
  declarations: [
    MantemProdutoComponent,
    ListagemProdutosComponent,
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    FlexModule,
    MatIconModule,
    PipesModule,
    MatBadgeModule,
    RouterLink
  ],
  exports: [
    MantemProdutoComponent,
    ListagemProdutosComponent,
  ]
})
export class ProdutoModule { }
