import { Component, OnInit } from '@angular/core';
import { CursoSerice } from '../services/curso-serice';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listagem',
  standalone: false,
  templateUrl: './listagem.html',
  styleUrl: './listagem.css',
})
export class Listagem implements OnInit {

  cursos: any[] = [];

  // Injeção do service no construtor
  constructor(private cursoService: CursoSerice,
              private router: Router
              ) {}

  ngOnInit() {
    this.cursos = this.cursoService.getCursos();
  }

  editarCurso(id: number): void {
    this.router.navigate(['/curso/editar', id]);
  }

  colunas: string[] = ['nome', 'carga', 'acoes'];
}
