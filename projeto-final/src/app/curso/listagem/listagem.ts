import { Component, OnInit } from '@angular/core';
import { CursoSerice } from '../services/curso-serice';

@Component({
  selector: 'app-listagem',
  standalone: false,
  templateUrl: './listagem.html',
  styleUrl: './listagem.css',
})
export class Listagem implements OnInit {

  cursos: any[] = [];

  // Injeção do service no construtor
  constructor(private cursoService: CursoSerice) {}

  ngOnInit() {
    this.cursos = this.cursoService.getCursos();
  }

  colunas: string[] = ['nome', 'carga', 'acoes'];
}
