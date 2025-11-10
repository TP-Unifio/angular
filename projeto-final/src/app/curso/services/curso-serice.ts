import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CursoSerice {

   private cursos = [
    { id: 1, nome: 'Angular Básico', cargaHoraria: 40 },
    { id: 2, nome: 'React Intermediário', cargaHoraria: 50 }
  ];

  constructor() {}

  getCursos() {
    return this.cursos;
  }

  getCursoPorId(id: number) {
    return this.cursos.find(curso => curso.id === id);
  }
  
}
