import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Angular Material


const routes: Routes = [
  {path: '', redirectTo: 'curso/listagem', pathMatch: 'full'}, // Rota padrão primeira a ser chamada
  {path: 'curso', loadChildren: () => import('./curso/curso-module').then(m => m.CursoModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
