import { TestBed } from '@angular/core/testing';

import { ConnexionpartnerService } from './connexionpartner.service';

describe('ConnexionpartnerService', () => {
  let service: ConnexionpartnerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConnexionpartnerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
