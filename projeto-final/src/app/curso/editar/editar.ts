import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CursoModule } from '../curso-module';
import { CursoSerice } from '../services/curso-serice';

@Component({
  selector: 'app-editar',
  standalone: false,
  templateUrl: './editar.html',
  styleUrl: './editar.css',
})
export class Editar implements OnInit {

  formCurso!: FormGroup;
  idCurso!: number | null;
  modoEdicao = false;

  constructor(private fb: FormBuilder, 
              private route: ActivatedRoute,
              private service: CursoSerice) {}

ngOnInit(): void {
    this.formCurso = this.fb.group({
      nome: ['', Validators.required],
      cargaHoraria: ['', [Validators.required, Validators.min(1)]]
    });

    // verifica se há parâmetro "id" na URL
    this.idCurso = Number(this.route.snapshot.paramMap.get('id'));
    if (this.idCurso) {
      this.modoEdicao = true;
      const curso = this.service.getCursoPorId(this.idCurso);

      if (curso) {
        // preenche o formulário com os dados do curso
        this.formCurso.patchValue({
          nome: curso.nome,
          cargaHoraria: curso.cargaHoraria
        });
      } else {
        console.warn('Curso não encontrado para o ID:', this.idCurso);
      }

    }
  }

  salvar(): void {
    if (this.formCurso.valid) {
      const dadosCurso = this.formCurso.value;

      if (this.formCurso.valid) {
      const dadosCurso = this.formCurso.value;
      console.log('Curso salvo:', dadosCurso);
      console.log('Nome:', dadosCurso.nome);
      console.log(':', dadosCurso.cargaHoraria);
      // Aqui você pode enviar os dados para um serviço HTTP, por exemplo:
      // this.cursoService.salvar(dadosCurso).subscribe(...)
    } else {
      console.log('Formulário inválido');
    }
    }
  }

}
