import { TestBed } from '@angular/core/testing';

import { ModalPopUpService } from './modal-pop-up.service';

describe('ModalPopUpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ModalPopUpService = TestBed.get(ModalPopUpService);
    expect(service).toBeTruthy();
  });
});
