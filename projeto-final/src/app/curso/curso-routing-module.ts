import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Cadastro } from './cadastro/cadastro';
import { Listagem } from './listagem/listagem';
import { Editar } from './editar/editar';

const routes: Routes = [
  { path: 'cadastro', component: Cadastro },
  { path: 'listagem', component: Listagem },
  { path: 'editar/:id', component: Editar },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursoRoutingModule { }
