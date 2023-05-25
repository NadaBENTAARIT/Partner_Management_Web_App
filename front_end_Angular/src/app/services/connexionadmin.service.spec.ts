import { TestBed } from '@angular/core/testing';

import { ConnexionadminService } from './connexionadmin.service';

describe('ConnexionadminService', () => {
  let service: ConnexionadminService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConnexionadminService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
