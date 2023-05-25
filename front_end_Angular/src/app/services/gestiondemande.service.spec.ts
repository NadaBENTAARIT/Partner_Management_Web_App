import { TestBed } from '@angular/core/testing';

import { GestiondemandeService } from './gestiondemande.service';

describe('GestiondemandeService', () => {
  let service: GestiondemandeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GestiondemandeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
