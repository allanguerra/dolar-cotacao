import { TestBed } from '@angular/core/testing';

import { CotacaoService } from './cotacao.service';

describe('CotacaoServiceService', () => {
  let service: CotacaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CotacaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
