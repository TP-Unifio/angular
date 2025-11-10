import { Component, OnInit} from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  standalone: false,
  templateUrl: './cadastro.html',
  styleUrl: './cadastro.css',
})
export class Cadastro implements OnInit {
  
  formCurso!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.formCurso = this.fb.group({
      nome: ['', Validators.required],
      cargaHoraria: ['', [Validators.required, Validators.min(1)]]
    });
  }

  salvar(): void {
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
