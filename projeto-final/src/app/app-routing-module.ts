import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Angular Material


const routes: Routes = [
  {path: 'curso', loadChildren: () => import('./curso/curso-module').then(m => m.CursoModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
