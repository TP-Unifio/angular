import { TestBed } from '@angular/core/testing';

import { CursoSerice } from './curso-serice';

describe('CursoSerice', () => {
  let service: CursoSerice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CursoSerice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
