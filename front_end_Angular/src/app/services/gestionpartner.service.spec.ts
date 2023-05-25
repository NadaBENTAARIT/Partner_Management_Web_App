import { TestBed } from '@angular/core/testing';

import { GestionpartnerService } from './gestionpartner.service';

describe('GestionpartnerService', () => {
  let service: GestionpartnerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GestionpartnerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
