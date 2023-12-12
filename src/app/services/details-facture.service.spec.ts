import { TestBed } from '@angular/core/testing';

import { DetailsFactureService } from './details-facture.service';

describe('DetailsFactureService', () => {
  let service: DetailsFactureService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetailsFactureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
